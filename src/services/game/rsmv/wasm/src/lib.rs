mod schema;
use schema::{SchemaInterpreter, SchemaError};
use wasm_bindgen::prelude::*;
use std::io::Cursor;
use serde_json::Value;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn parse_with_schema(schema_json: &str, data: &[u8]) -> Result<JsValue, JsValue> {
    let schema: Value = serde_json::from_str(schema_json)
        .map_err(|e| JsValue::from_str(&format!("Invalid JSON schema: {}", e)))?;
        
    let mut cursor = Cursor::new(data);
    let mut interpreter = SchemaInterpreter::new();
    
    match interpreter.parse(&schema, &mut cursor) {
        Ok(val) => Ok(serde_wasm_bindgen::to_value(&val)?),
        Err(e) => Err(JsValue::from_str(&format!("Schema parse error: {:?}", e)))
    }
}

#[wasm_bindgen]
pub fn extract_model(cache_data: &[u8], model_id: u32) -> Result<JsValue, JsValue> {
    // Stub implementation: usually we would load the specific model schema here
    // For now, let's just return a success message or the stub cube if needed
    // But since we are porting the interpreter, we expect the frontend to call `parse_with_schema`
    // with the appropriate schema for the model.
    
    // For backward compatibility with the previous stub test:
    if cache_data.is_empty() {
        return Err(JsValue::from_str("Empty cache data"));
    }
    
    // Legacy stub response (can be removed later)
    Ok(serde_wasm_bindgen::to_value(&"Model extraction via helper not yet implemented; use parse_with_schema")?)
}
