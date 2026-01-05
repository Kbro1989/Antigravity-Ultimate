use serde_json::Value;
use std::collections::HashMap;
use std::io::{Cursor, Read, Seek, SeekFrom};
use byteorder::{BigEndian, LittleEndian, ReadBytesExt};
use serde::{Serialize, Deserialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum SchemaError {
    IoError(String),
    JsonError(String),
    InvalidSchema(String),
    RefNotFound(String),
    NotImplemented(String),
    Utf8Error(String),
}

impl From<std::io::Error> for SchemaError {
    fn from(e: std::io::Error) -> Self {
        SchemaError::IoError(e.to_string())
    }
}

impl From<std::string::FromUtf8Error> for SchemaError {
    fn from(e: std::string::FromUtf8Error) -> Self {
        SchemaError::Utf8Error(e.to_string())
    }
}

pub struct SchemaInterpreter {
    context: HashMap<String, Value>,
}

impl SchemaInterpreter {
    pub fn new() -> Self {
        Self {
            context: HashMap::new(),
        }
    }

    pub fn parse(&mut self, schema: &Value, data: &mut Cursor<&[u8]>) -> Result<Value, SchemaError> {
        match schema {
            Value::String(s) => self.parse_primitive(s, data),
            Value::Array(arr) => {
                if arr.is_empty() {
                    return Ok(Value::Null);
                }
                
                // Check if it's a command like ["struct", ...] or ["array", ...]
                // Or if it's a tuple schema etc
                if let Some(Value::String(cmd)) = arr.get(0) {
                    match cmd.as_str() {
                        "struct" => self.handle_struct(&arr[1..], data),
                        "array" => self.handle_array(&arr[1..], data),
                        "chunkedarray" => self.handle_chunked_array(&arr[1..], data),
                        "match" => self.handle_match(&arr[1..], data),
                        "opt" => self.handle_opt(&arr[1..], data),
                        "ref" => self.handle_ref(&arr[1..]),
                        "buffer" => self.handle_buffer(&arr[1..], data),
                        "tuple" => self.handle_tuple(&arr[1..], data),
                        "nullarray" => Ok(Value::Null), // Placeholder for now
                        "footer" => self.handle_footer(&arr[1..], data),
                        "accum" => self.handle_accum(&arr[1..], data),
                        "bitflag" => self.handle_bitflag(&arr[1..], data),
                        _ => Err(SchemaError::InvalidSchema(format!("Unknown command: {}", cmd))),
                    }
                } else {
                    // Try parsing as a tuple/list of schemas?
                    // Or maybe it's just a raw specific schema structure?
                    // For safety, assume invalid if not explicit command in this DSL context
                    Err(SchemaError::InvalidSchema(format!("Array schema must start with command string: {:?}", arr)))
                }
            }
            _ => Err(SchemaError::InvalidSchema(format!("Invalid schema type: {:?}", schema))),
        }
    }

    fn parse_primitive(&mut self, type_name: &str, data: &mut Cursor<&[u8]>) -> Result<Value, SchemaError> {
        match type_name {
            "ubyte" | "unsigned byte" => {
               if let Ok(b) = data.read_u8() { Ok(Value::Number(b.into())) } else { Err(SchemaError::IoError("EOF reading ubyte".into())) }
            },
            "byte" => {
               if let Ok(b) = data.read_i8() { Ok(Value::Number(b.into())) } else { Err(SchemaError::IoError("EOF reading byte".into())) }
            },
            "ushort" | "unsigned short" => {
               if let Ok(v) = data.read_u16::<BigEndian>() { Ok(Value::Number(v.into())) } else { Err(SchemaError::IoError("EOF reading ushort".into())) }
            },
            "short" => {
               if let Ok(v) = data.read_i16::<BigEndian>() { Ok(Value::Number(v.into())) } else { Err(SchemaError::IoError("EOF reading short".into())) }
            },
            "uint" | "unsigned int" => {
               if let Ok(v) = data.read_u32::<BigEndian>() { Ok(Value::Number(v.into())) } else { Err(SchemaError::IoError("EOF reading uint".into())) }
            },
            "int" => {
               if let Ok(v) = data.read_i32::<BigEndian>() { Ok(Value::Number(v.into())) } else { Err(SchemaError::IoError("EOF reading int".into())) }
            },
            "float" => {
                if let Ok(v) = data.read_f32::<BigEndian>() {
                     Ok(Value::Number(serde_json::Number::from_f64(v as f64).unwrap_or(serde_json::Number::from(0))))
                } else {
                    Err(SchemaError::IoError("EOF reading float".into()))
                }
            },
            "bool" => {
                if let Ok(b) = data.read_u8() { Ok(Value::Bool(b != 0)) } else { Err(SchemaError::IoError("EOF reading bool".into())) }
            },
            "string" => {
                // RS strings are usually null-terminated
                let mut bytes = Vec::new();
                loop {
                    let b = data.read_u8()?;
                    if b == 0 { break; }
                    bytes.push(b);
                }
                let s = String::from_utf8(bytes)?;
                Ok(Value::String(s))
            },
            // Variable length integers (common in RS)
            "varuint" | "variable unsigned int" => {
                 let b = data.read_u8()?;
                 if b < 128 {
                     Ok(Value::Number(b.into()))
                 } else {
                     let b2 = data.read_u8()?;
                     Ok(Value::Number((((b as u16 & 0x7F) << 8) | b2 as u16).into()))
                 }
            },
             "varushort" => {
                 let b = data.read_u8()?;
                 if b & 0x80 != 0 {
                      let b2 = data.read_u8()?;
                      Ok(Value::Number( (((b as u16 & 0x7F) << 8) | b2 as u16).into() ))
                 } else {
                      Ok(Value::Number(b.into()))
                 }
            },
            // "hex" or "match" might leak here as strings if not handled in array
            _ => Err(SchemaError::NotImplemented(format!("Primitive type not implemented: {}", type_name)))
        }
    }

    fn handle_struct(&mut self, args: &[Value], data: &mut Cursor<&[u8]>) -> Result<Value, SchemaError> {
        let mut obj = serde_json::Map::new();
        // args is a list of [name, schema] pairs
        for field in args {
            if let Value::Array(f) = field {
                if f.len() >= 2 {
                    if let Value::String(name) = &f[0] {
                         // Skip special fields starting with $ if they are just temp context?
                         // Actually usually we want them in context.
                         
                         let value = self.parse(&f[1], data)?;
                         self.context.insert(name.clone(), value.clone());
                         obj.insert(name.clone(), value);
                    }
                }
            }
        }
        Ok(Value::Object(obj))
    }
    
    fn handle_array(&mut self, args: &[Value], data: &mut Cursor<&[u8]>) -> Result<Value, SchemaError> {
        // ["array", count_schema, item_schema]
        if args.len() < 2 {
             return Err(SchemaError::InvalidSchema("Array needs count and item schema".to_string()));
        }
        
        let count_val = self.resolve_value(&args[0], data)?;
        
        let count = match count_val {
            Value::Number(n) => n.as_u64().unwrap_or(0),
            _ => 0
        };
        
        let mut res = Vec::new();
        // If count is large, be careful. Start with small vec.
        for _ in 0..count {
            res.push(self.parse(&args[1], data)?);
        }
        Ok(Value::Array(res))
    }

    fn handle_chunked_array(&mut self, args: &[Value], data: &mut Cursor<&[u8]>) -> Result<Value, SchemaError> {
        // ["chunkedarray", count_schema, [chunk1_field], [chunk2_field]...]
         if args.len() < 2 {
             return Err(SchemaError::InvalidSchema("ChunkedArray needs count and chunks".to_string()));
        }

        let count_val = self.resolve_value(&args[0], data)?;
        let count = count_val.as_u64().ok_or(SchemaError::InvalidSchema("ChunkedArray count must be number".to_string()))? as usize;
        
        // Prepare result vector of objects
        let mut results: Vec<serde_json::Map<String, Value>> = vec![serde_json::Map::new(); count];
        
        for chunk_def in &args[1..] {
             if let Value::Array(chunk_field) = chunk_def {
                 if let Value::String(name) = &chunk_field[0] {
                     let schema = if chunk_field.len() > 1 { &chunk_field[1] } else { 
                        return Err(SchemaError::InvalidSchema(format!("Chunk {} missing schema", name)));
                     };
                     
                     for i in 0..count {
                         // Inject "$i" into context for accumulators
                         self.context.insert("$i".to_string(), Value::Number(i.into()));
                         
                         let val = self.parse(schema, data)?;
                         if let Some(obj) = results.get_mut(i) {
                             obj.insert(name.clone(), val);
                         }
                     }
                 }
             }
        }
        
        let res_json: Vec<Value> = results.into_iter().map(Value::Object).collect();
        Ok(Value::Array(res_json))
    }

    fn handle_match(&mut self, args: &[Value], data: &mut Cursor<&[u8]>) -> Result<Value, SchemaError> {
        // ["match", value_to_match, { "key": schema, "other": schema }]
        if args.len() < 2 {
             return Err(SchemaError::InvalidSchema("Match needs value and cases".to_string()));
        }
        
        let val = self.resolve_value(&args[0], data)?;
        let cases = args[1].as_object().ok_or(SchemaError::InvalidSchema("Match cases must be object".to_string()))?;
        
        let val_str = match &val {
            Value::Number(n) => n.to_string(),
            Value::String(s) => s.clone(),
            Value::Bool(b) => if *b { "1".to_string() } else { "0".to_string() },
           _ => "null".to_string(),
        };
        
        // Exact match
        if let Some(schema) = cases.get(&val_str) {
            return self.parse(schema, data);
        }
        
        // Ranges / Bitmasks logic (Simplified)
        // Check for keys starting with >=, <, &
        for (k, schema) in cases {
             if k.starts_with(">=") {
                 if let Ok(limit) = k[2..].parse::<i64>() {
                     if let Ok(v) = val_str.parse::<i64>() {
                         if v >= limit { return self.parse(schema, data); }
                     }
                 }
             } else if k.starts_with("&") {
                 // Bitwise AND check
                 let mask_str = &k[1..];
                 let mask = if mask_str.starts_with("0x") {
                     i64::from_str_radix(&mask_str[2..], 16).unwrap_or(0)
                 } else {
                     mask_str.parse::<i64>().unwrap_or(0)
                 };
                 
                 if let Ok(v) = val_str.parse::<i64>() {
                     if (v & mask) != 0 { return self.parse(schema, data); }
                 }
             }
        }
        
        // Fallback
        if let Some(schema) = cases.get("other") {
            return self.parse(schema, data);
        }
        
        Ok(Value::Null)
    }

    fn handle_ref(&mut self, args: &[Value]) -> Result<Value, SchemaError> {
        if let Value::String(key) = &args[0] {
            // Check context
            if let Some(v) = self.context.get(key) {
                return Ok(v.clone());
            }
            Err(SchemaError::RefNotFound(format!("Ref not found: {}", key)))
        } else {
             Err(SchemaError::InvalidSchema("Ref key must be string".to_string()))
        }
    }
    
    fn handle_opt(&mut self, args: &[Value], data: &mut Cursor<&[u8]>) -> Result<Value, SchemaError> {
        // ["opt", condition, schema]
        if args.len() < 2 {
            return Err(SchemaError::InvalidSchema("Opt needs condition and schema".to_string()));
        }

        // Evaluate condition
        // Assume args[0] is the condition value (resolved)
        // Actually, often it is [val, compare_val, op] or similar.
        // But if it's just a value, we treat truthy/falsy.
        // For complex conditions, usually resolve_value handles the logic if formulated as schema.
        // But "opt" often takes a raw expression list.
        
        // Hack: If args[0] is a list, try to resolve it as a boolean value somehow?
        // Or if it's just a value, check if truthy.
        
        // For now, let's try to resolve args[0].
        let cond_val = self.resolve_value(&args[0], data)?;
        
        let is_truthy = match cond_val {
            Value::Bool(b) => b,
            Value::Number(n) => n.as_f64().unwrap_or(0.0) != 0.0,
            Value::String(s) => !s.is_empty(),
            Value::Null => false,
            _ => true
        };
        
        if is_truthy {
            self.parse(&args[1], data)
        } else {
            Ok(Value::Null)
        }
    }

    fn handle_buffer(&mut self, args: &[Value], data: &mut Cursor<&[u8]>) -> Result<Value, SchemaError> {
         // ["buffer", count, type_optional]
         let count_val = self.resolve_value(&args[0], data)?;
         let count = count_val.as_u64().ok_or(SchemaError::InvalidSchema("Buffer len must be number".to_string()))? as usize;
         
         let mut buf = vec![0u8; count];
         data.read_exact(&mut buf)?;
         
         let res: Vec<Value> = buf.iter().map(|&b| Value::Number(b.into())).collect();
         Ok(Value::Array(res))
    }

    fn handle_tuple(&mut self, args: &[Value], data: &mut Cursor<&[u8]>) -> Result<Value, SchemaError> {
        let mut res = Vec::new();
        for schema in args {
            res.push(self.parse(schema, data)?);
        }
        Ok(Value::Array(res))
    }

    fn handle_footer(&mut self, args: &[Value], data: &mut Cursor<&[u8]>) -> Result<Value, SchemaError> {
        // ["footer", offset, schema]
        if args.len() < 2 {
            return Err(SchemaError::InvalidSchema("Footer needs offset and schema".to_string()));
        }

        let offset = match &args[0] {
            Value::Number(n) => n.as_i64().unwrap_or(0),
            _ => 0
        };

        let current_pos = data.position();
        let end_pos = data.get_ref().len() as u64;
        
        // Seek to end - offset
        data.seek(SeekFrom::Start(end_pos - offset as u64))?;
        let res = self.parse(&args[1], data);
        
        // Restore position
        data.seek(SeekFrom::Start(current_pos))?;
        res
    }

    fn handle_accum(&mut self, args: &[Value], data: &mut Cursor<&[u8]>) -> Result<Value, SchemaError> {
        // ["accum", name, schema, mode_optional]
        if args.len() < 2 {
            return Err(SchemaError::InvalidSchema("Accum needs name and schema".to_string()));
        }

        let name = args[0].as_str().ok_or(SchemaError::InvalidSchema("Accum name must be string".to_string()))?;
        let mode = args.get(2).and_then(|v| v.as_str()).unwrap_or("add");

        let current_val = self.context.get(name).and_then(|v| v.as_f64()).unwrap_or(0.0);
        
        // Parse the new increment
        let increment_val = self.parse(&args[1], data)?;
        let increment = increment_val.as_f64().unwrap_or(0.0);

        let new_val = match mode {
            "add" | "postadd" => current_val + increment,
            "add-1" => current_val + increment - 1.0,
            _ => current_val + increment
        };

        self.context.insert(name.to_string(), Value::Number(serde_json::Number::from_f64(new_val).unwrap()));
        
        // JS DSL: "postadd" returns the value BEFORE adding? 
        // Some implementations do that. Let's assume standard add for now.
        Ok(Value::Number(serde_json::Number::from_f64(new_val).unwrap()))
    }

    fn handle_bitflag(&mut self, args: &[Value], data: &mut Cursor<&[u8]>) -> Result<Value, SchemaError> {
        // ["bitflag", bit_index]
        // This is usually used as a schematic check: (value & (1 << bit_index)) != 0
        // But in the JS DSL "bitflag" is often a type?
        // Let's implement it as a resolver.
        let bit = args[0].as_u64().unwrap_or(0);
        Ok(Value::Number((1 << bit).into()))
    }

    fn resolve_value(&mut self, val: &Value, data: &mut Cursor<&[u8]>) -> Result<Value, SchemaError> {
         match val {
             Value::Array(_) => self.parse(val, data),
             Value::String(s) => {
                 // Check if it looks like a number
                 if let Ok(n) = s.parse::<i64>() {
                     Ok(Value::Number(n.into()))
                 } else {
                     // Assume schema primitive 
                     self.parse(val, data)
                 }
             }
             _ => Ok(val.clone())
         }
    }
}
