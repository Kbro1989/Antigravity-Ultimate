const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/proceduraltexture-CT0768Da.js","assets/main-Cde5WehW.js","assets/main-wvxADCXZ.css","assets/three.module-aN59MUBe.js","assets/rt5model-DXgb3RVj.js","assets/rt2model-zn_0-OzO.js"])))=>i.map(i=>d[i]);
import{B as ke,g as _a,_ as it}from"./main-Cde5WehW.js";import{x as Be,aw as Mi,ax as fr,ay as Pr,o as mr,az as Ur,h as ir,p as Ye,aA as hr,aB as kr,aC as Ni,a3 as lt,aD as an,aE as hn,ad as rt,aF as Gt,aG as Li,G as Ri,n as Sa,V as Da,k as Or,S as Ir,aH as dn,ai as sn,aI as Aa,L as lr,aJ as Ca,ah as ur,Z as cr,q as Ta,C as Rn,j as Fa,s as ka,ae as Pn,aK as Un,aL as On,aM as Ia}from"./three.module-aN59MUBe.js";import{prepareClientScript as Gr,compileClientScript as Ba,renderClientScript as Ma,writeOpcodeFile as Na,writeClientVarFile as La}from"../src/services/rsmv/clientscript/index.ts";import{ClientScriptInterpreter as Ra}from"../src/services/rsmv/clientscript/interpreter.ts";const Gn=3988292384,Pi=new Uint32Array(256),Pa=new Uint32Array(256);function Ua(){for(let t=0;t<256;t++){let e=t,n=t<<24;for(let r=8;r>0;r--)(e&1)==1?e=e>>>1^Gn:e>>>=1,(n&2147483648)!=0?n=(n^Gn)<<1|1:n<<=1,n&=4294967295;Pi[t]=e&4294967295,Pa[t]=n}}Ua();function Ze(t,e=0,n=0,r=t.length){e=e^4294967295;for(let i=n;i<r;i++)e=e>>>8^Pi[(e^t[i])&255];return(e^4294967295)>>>0}const zn=ke.alloc(4);function bt(t,e){return zn.writeUInt32BE(t>>>0),Ze(zn,e)}const N={framemaps:1,config:2,interfaces:3,mapsquares:5,oldmodels:7,sprites:8,clientscript:12,fontmetricsOld:13,sounds:14,objects:16,enums:17,npcs:18,items:19,sequences:20,spotanims:21,structs:22,quickchat:24,materials:26,particles:27,worldmap:23,music:40,models:47,frames:48,texturesOldPng:9,texturesOldCompoundPng:37,textures2015Png:43,textures2015CompoundPng:44,textures2015Dds:45,textures2015CompoundPngMips:46,textures2015CompoundDds:50,textures2015PngMips:51,texturesDds:52,texturesPng:53,texturesBmp:54,texturesKtx:55,skeletalAnims:56,achievements:57,fontmetrics:58,vectorfonts:59,cutscenes:66,index:255},Oa=940,zt={locations:0,squares:3,square_nxt:5,env:6},ze={mapunderlays:1,identityKit:3,mapoverlays:4,params:11,environments:29,animgroups:32,mapscenes:34,maplabels:36,dbtables:40,dbrows:41,locs_old:6,npcs_old:9,items_old:10,spotanim_old:13},dt=377,gr=235,Ga=`\r
\r
{\r
	"0x01": { "name":                           "name", "read": "paddedstring"},\r
	"0x02": { "name":                    "description", "read": ["struct",\r
		["hasironman", "unsigned byte"],\r
		["unk0","unsigned byte"],\r
		["descr","paddedstring"],\r
		["unk1",["opt",["hasironman",2],"unsigned byte"]],\r
		["descr_ironman",["opt",["hasironman",2],"paddedstring"]]\r
	]},\r
	"0x03": { "name":                       "category", "read": "unsigned short"},\r
	"0x04": { "name":                       "spriteId", "read": "variable unsigned int"},\r
	"0x05": { "name":                      "runescore", "read": "unsigned byte"},\r
	"0x06": { "name":                   "unknown_0x06", "read": "unsigned short"},\r
	"0x07": { "name":                     "rewardtext", "read": "paddedstring"},\r
	"0x08": { "name":                  "subach_skills", "read": ["array","variable unsigned short", ["struct",\r
		["ironman","unsigned byte"],\r
		["level","unsigned byte"],\r
		["text","paddedstring"],\r
		["unk_0","unsigned byte"],\r
		["unk_1","unsigned byte"],\r
		["skill","unsigned byte"]\r
	]]},\r
	"0x09": { "name":                 "subach_varbits", "read": ["array", ["struct",\r
		["type","unsigned byte"],\r
		["value","variable unsigned int"],\r
		["name","paddedstring"],\r
		["stepsize","unsigned byte"],\r
		["varbit","unsigned short"]\r
	]]},\r
	"0x0A": { "name":           "varbit_partial_state", "read": ["array", ["struct",\r
		["type","unsigned byte"],\r
		["value","variable unsigned int"],\r
		["name","paddedstring"],\r
		["stepsize","unsigned byte"],\r
		["varbit","unsigned short"]\r
	]]},\r
	"0x0B": { "name":          "previous_achievements", "read": ["array", "unsigned tribyte"]},\r
	"0x0C": { "name":                   "skill_reqs_2", "read": ["array", "variable unsigned short", ["struct",\r
		["unk0","unsigned byte"],\r
		["level","unsigned byte"],\r
		["name","paddedstring"],\r
		["unk1","unsigned byte"],\r
		["skill","unsigned short"]\r
	]]},\r
	"0x0E": { "name":                "progress_states", "read": ["array", "variable unsigned short", ["struct",\r
		["unk0","unsigned byte"],\r
		["value","variable unsigned int"],\r
		["name","paddedstring"],\r
		["varbits",["array","unsigned short"]]\r
	]]},\r
	"0x0D": { "name":                        "subreqs", "read": ["array", "variable unsigned short", ["struct",\r
		["unk0","unsigned byte"],\r
		["value","variable unsigned int"],\r
		["name","paddedstring"],\r
		["varbits",["array","unsigned short"]]\r
	]]},\r
	"0x0F": { "name":               "sub_achievements", "read": ["array", "variable unsigned short", ["struct",\r
		["unk0","unsigned byte"],\r
		["achievement","unsigned short"]\r
	]]},\r
	"0x10": { "name":                    "subcategory", "read": "unsigned short"},\r
	//only used for subachievements of "find all the hidden Zygomites on Anachronia."\r
	"0x11": { "name":                        "unk0x11", "read": "true"},\r
	"0x12": { "name":                         "hidden", "read": "unsigned byte"},\r
	"0x13": { "name":                            "f2p", "read": "true"},\r
	"0x14": { "name":       "quest_req_for_miniquests", "read": ["array", "unsigned tribyte"]},\r
	"0x15": { "name":                      "quest_ids", "read": ["array", "unsigned tribyte"]},\r
	"0x17": { "name":                         "reqs23", "read": ["array", "variable unsigned short",["struct",\r
		["type","unsigned byte"],\r
		["varbit","unsigned short"],\r
		["stepsize","unsigned byte"],\r
		["name",["opt",["type",0],"paddedstring"]],\r
		["requirement",["opt",["type",1],"unsigned short"]],\r
		["subbit","unsigned byte"]\r
	]]},\r
	"0x19": { "name":                         "reqs25", "read": ["array", "variable unsigned short",["struct",\r
		["type","unsigned byte"],\r
		["varbit","unsigned short"],\r
		["value","unsigned byte"],\r
		["name",["opt",["type",0],"paddedstring"]],\r
		["requirement",["opt",["type",1],"unsigned short"]],\r
		["subbit","unsigned byte"]\r
	]]},\r
	"0x1B": { "name":                   "unknown_0x13", "read": "true"},\r
	"0x1C": { "name":                "skill_req_count", "read": ["array", "unsigned byte"]},\r
	"0x1D": { "name":                   "unknown_0x1D", "read": "unsigned byte"},\r
	"0x1E": { "name":                   "subreq_count", "read": ["array", "variable unsigned short"]},\r
	"0x1F": { "name":                   "unknown_0x1F", "read": "unsigned byte"},\r
	"0x20": { "name":                   "unknown_0x20", "read": "unsigned tribyte"},\r
	"0x23": { "name":                   "unknown_0x23", "read": "true"},\r
	"0x25": { "name":                   "unknown_0x25", "read": "unsigned byte"},\r
	"0x26": { "name":                   "unknown_0x26", "read": "true"}\r
}\r
`,za=`{\r
	"0x01": { "name":                            "baseAnims", "read": ["struct",["idle","animid"],["walk","animid"]] },\r
	"0x02": { "name":                           "unknown_02", "read": "animid" },//also walk?\r
	"0x03": { "name":                           "unknown_03", "read": "animid" },\r
	"0x05": { "name":                           "unknown_05", "read": "animid" },\r
	"0x04": { "name":                           "unknown_04", "read": "animid" },\r
	"0x06": { "name":                                  "run", "read": "animid" },\r
	"0x07": { "name":                           "unknown_07", "read": "animid" },\r
	"0x08": { "name":                           "unknown_08", "read": "animid" },\r
	"0x09": { "name":                           "unknown_09", "read": "animid" },\r
	"0x1a": { "name":                           "unknown_1a", "read": ["tuple","ubyte","ubyte"] },\r
	"0x1b": { "name":                           "unknown_1b", "read": "animid" },\r
	"0x26": { "name":                           "unknown_26", "read": "animid" },//walk\r
	"0x27": { "name":                           "unknown_27", "read": "animid" },//walk\r
	"0x28": { "name":                           "unknown_28", "read": "animid" },//backward walk??\r
	"0x29": { "name":                           "unknown_29", "read": "animid" },//walk sideways left\r
	"0x2a": { "name":                           "unknown_2a", "read": "animid" },//walk sideways right\r
	"0x2b": { "name":                           "unknown_2b", "read": "animid" },\r
	"0x2c": { "name":                           "unknown_2c", "read": "animid" },\r
	"0x2d": { "name":                           "unknown_2d", "read": "animid" },\r
	"0x2e": { "name":                           "unknown_2e", "read": "animid" },\r
	"0x2f": { "name":                           "unknown_2f", "read": "animid" },\r
	"0x30": { "name":                           "unknown_30", "read": "animid" },\r
	"0x31": { "name":                           "unknown_31", "read": "animid" },\r
	"0x32": { "name":                           "unknown_32", "read": "animid" },//also walk\r
	"0x33": { "name":                           "unknown_33", "read": "animid" },//also walk\r
	"0x34": { "name":                           "idleVariations", "read": ["array","ubyte",["struct",\r
													["animid","animid"],\r
													["probably_chance","ubyte"],\r
													["always0",["match","buildnr",{">=916":"ubyte","other":0}]]\r
												]] },\r
	"0x35": { "name":                           "unknown_35", "read": "true" },\r
	"0x36": { "name":                           "unknown_36", "read": ["tuple","ubyte","ubyte"] }\r
}`,Va=`["struct",\r
    ["magic",["buffer",4,"hex"]],//always "JAGA"\r
    ["unk_1","uint"],\r
    ["unk_2","uint"],//uncompressed size?\r
    ["samplefreq","uint"],\r
    ["unk_3","uint"],\r
    ["chunks",["chunkedarray","uint",\r
        [\r
            ["len","uint"],\r
            ["fileid","uint"]\r
        ],[\r
            ["data",["opt",["fileid",0],["buffer",["ref","len"],"buffer"]]]\r
        ]\r
    ]]\r
]`,ja=`["struct",\r
	["$flags","ushort"],\r
	//can't use array since i don't have a way to ref array index in the flag...\r
	["slots",["tuple",\r
		["struct",\r
			["slot",["itemvar","ref"]],\r
			["cust",["opt",["$flags",0,"bitflag"],"playeritemedit"]]\r
		],\r
		["struct",\r
			["slot",["itemvar","ref"]],\r
			["cust",["opt",["$flags",1,"bitflag"],"playeritemedit"]]\r
		],\r
		["struct",\r
			["slot",["itemvar","ref"]],\r
			["cust",["opt",["$flags",2,"bitflag"],"playeritemedit"]]\r
		],\r
		["struct",\r
			["slot",["itemvar","ref"]],\r
			["cust",["opt",["$flags",3,"bitflag"],"playeritemedit"]]\r
		],\r
		["struct",\r
			["slot",["itemvar","ref"]],\r
			["cust",["opt",["$flags",4,"bitflag"],"playeritemedit"]]\r
		],\r
		["struct",\r
			["slot",["itemvar","ref"]],\r
			["cust",["opt",["$flags",5,"bitflag"],"playeritemedit"]]\r
		],\r
		["struct",\r
			["slot",["itemvar","ref"]],\r
			["cust",["opt",["$flags",6,"bitflag"],"playeritemedit"]]\r
		],\r
		["struct",\r
			["slot",["itemvar","ref"]],\r
			["cust",["opt",["$flags",7,"bitflag"],"playeritemedit"]]\r
		],\r
		["struct",\r
			["slot",["itemvar","ref"]],\r
			["cust",["opt",["$flags",8,"bitflag"],"playeritemedit"]]\r
		],\r
		["struct",\r
			["slot",["itemvar","ref"]],\r
			["cust",["opt",["$flags",9,"bitflag"],"playeritemedit"]]\r
		],\r
		["struct",\r
			["slot",["itemvar","ref"]],\r
			["cust",["opt",["$flags",10,"bitflag"],"playeritemedit"]]\r
		],\r
		["struct",\r
			["slot",["itemvar","ref"]],\r
			["cust",["opt",["$flags",11,"bitflag"],"playeritemedit"]]\r
		],\r
		["struct",\r
			["slot",["itemvar","ref"]],\r
			["cust",["opt",["$flags",12,"bitflag"],"playeritemedit"]]\r
		],\r
		["struct",\r
			["slot",["itemvar","ref"]],\r
			["cust",["opt",["$flags",13,"bitflag"],"playeritemedit"]]\r
		],\r
		["struct",\r
			["slot",["itemvar","ref"]],\r
			["cust",["opt",["$flags",14,"bitflag"],"playeritemedit"]]\r
		],\r
		["struct",\r
			["slot",["itemvar","ref"]],\r
			["cust",["opt",["$flags",15,"bitflag"],"playeritemedit"]]\r
		]\r
	]],\r
	["haircol0","ubyte"],\r
	["bodycol","ubyte"],\r
	["legscol","ubyte"],\r
	["bootscol","ubyte"],\r
	["skincol0","ubyte"],\r
	["skincol1","ubyte"],\r
	["haircol1","ubyte"],\r
	["unkbuf",["buffer",13,"hex"]],\r
	["stance","ushort"]\r
]`,qa=`["struct",\r
	["gender","ubyte"],\r
	["$avatype","playeritem"],\r
	["player",["opt",["$avatype",-1,"eqnot"],["struct",\r
		["slots",["tuple",\r
			["ref","$avatype"],\r
			"playeritem",\r
			"playeritem",\r
			"playeritem",\r
			"playeritem",\r
			"playeritem",\r
			"playeritem",\r
			"playeritem",\r
			"playeritem",\r
			"playeritem",\r
			"playeritem",\r
			"playeritem",\r
			"playeritem",\r
			"playeritem",\r
			"playeritem",\r
			"playeritem"\r
		]],\r
		["rest",["buffer",["bytesleft"],"hex"]]\r
	]]],\r
	["npc",["opt",["$avatype",-1],["struct",\r
		["id","ushort"],\r
		["buf",["buffer",21,"hex"]],\r
		["unkff","ushort"]\r
	]]]\r
]`,Xa=`["struct",\r
	["format","unsigned byte"],\r
	["timestamp",["match",["ref","format"],{">=6":"uint","other":0}]],\r
	["flags","unsigned byte"],\r
	["$minorindex","0"],\r
	["indices",["chunkedarray",["match",["ref","format"],{">=7":"varuint","other":"ushort"}],\r
		[\r
			["minor",["accum","$minorindex","unsigned short"]]\r
		],\r
		[\r
			["name",["opt",["flags",0,"bitflag"],"unsigned int"]]\r
		],\r
		[\r
			["crc","unsigned int"]\r
		],\r
		[\r
			["uncompressed_crc",["opt",["flags",2,"bitflag"],"unsigned int"]]\r
		],\r
		[\r
			["size",["opt",["flags",2,"bitflag"],"unsigned int"]],\r
			["uncompressed_size",["opt",["flags",2,"bitflag"],"unsigned int"]]\r
		],\r
		[\r
			["encryption_or_hash",["opt",["flags",1,"bitflag"],["buffer",64,"hex"]]]\r
		],\r
		[\r
			["version","unsigned int"]\r
		],\r
		[\r
			["subindexcount","variable unsigned int"]\r
		],\r
		[\r
			["$subindex","0"],\r
			["subindices",["array",["ref","subindexcount"],["accum","$subindex","unsigned short"]]]\r
		],\r
		[\r
			["subnames",["opt",["flags",0,"bitflag"],["array",["ref","subindexcount"],"uint"]]]\r
		]\r
	]]\r
]`,Ha=`["struct",\r
    ["vertexcount","ushort"],\r
    ["facecount","ushort"],\r
    ["xpos",["array",["ref","vertexcount"],"short"]],\r
    ["ypos",["array",["ref","vertexcount"],"short"]],\r
    ["zpos",["array",["ref","vertexcount"],"short"]],\r
    ["faces",["chunkedarray",["ref","facecount"],[\r
        ["$nverts","ubyte"]\r
    ],[\r
        ["color","ushort"]\r
    ],[\r
        ["backcolor","ushort"]\r
    ],[\r
        ["intensity","ubyte"]\r
    ],[\r
        ["verts",["array",["ref","$nverts"],["match",["ref","vertexcount"],{\r
            "<256":"ubyte",\r
            "other":"ushort"\r
        }]]]\r
    ]]]\r
]`,$a=`["struct",\r
	// ["byte0",["match","buildnr",{">458":"ubyte","other":0}]],\r
	["byte0","ubyte"],\r
	// ["switchsize",["match","buildnr",{">=495":["footer",2,"ushort"],"other":0}]],\r
	["switchsize",["footer",2,"ushort"]],\r
	["switches",["footer",["ref","switchsize"],\r
		// ["array",["match","buildnr",{">=495":"ubyte","other":0}],["array","ushort",["struct",\r
		["array","ubyte",["array","ushort",["struct",\r
			["value","int"],\r
			["jump","uint"]\r
		]]]\r
	]],\r
	// ["longargcount",["match","buildnr",{">641":["footer",2,"ushort"],"other":0}]],\r
	["longargcount",["footer",2,"ushort"]],\r
	["stringargcount",["footer",2,"ushort"]],\r
	["intargcount",["footer",2,"ushort"]],\r
	// ["locallongcount",["match","buildnr",{">641":["footer",2,"ushort"],"other":0}]],\r
	["locallongcount",["footer",2,"ushort"]],\r
	["localstringcount",["footer",2,"ushort"]],\r
	["localintcount",["footer",2,"ushort"]],\r
	["instructioncount",["footer",4,"uint"]],\r
	["opcodedata",["array",["ref","instructioncount"],["scriptopt"]]]\r
]`,Ja=`["struct",\r
	["byte0",["match","buildnr",{">458":"ubyte","other":0}]],\r
	["switchsize",["match","buildnr",{">=495":["footer",2,"ushort"],"other":0}]],\r
	["switches",["footer",["ref","switchsize"],\r
		["array",["match","buildnr",{">=495":"ubyte","other":0}],["array","ushort",["struct",\r
			["value","int"],\r
			["jump","uint"]\r
		]]]\r
	]],\r
	["longargcount",["match","buildnr",{">641":["footer",2,"ushort"],"other":0}]],\r
	["stringargcount",["footer",2,"ushort"]],\r
	["intargcount",["footer",2,"ushort"]],\r
	["locallongcount",["match","buildnr",{">641":["footer",2,"ushort"],"other":0}]],\r
	["localstringcount",["footer",2,"ushort"]],\r
	["localintcount",["footer",2,"ushort"]],\r
	["instructioncount",["footer",4,"uint"]],\r
	["opcodedata",["buffer",["bytesleft"],"buffer"]]\r
]`,Wa=`["struct",\r
	["version","ubyte"],\r
	["width","ushort"],\r
	["height","ushort"],\r
	["unkhead","ushort"],\r
	["elements",["array","ubyte",["struct",\r
		["name","paddedstring"],\r
		["start","float"],\r
		["end","float"],\r
		["flag0","ubyte"],\r
		["graphics",["array",["ref","flag0"],["struct",\r
			["spritename","paddedstring"],\r
			["height","ushort"],\r
			["width","ushort"],\r
			["unk","ushort"],\r
			["spriteid","ushort"],\r
			["opacityframes",["array","ubyte",["tuple","float","float"]]],\r
			["rotateframes",["array","ubyte",["tuple","float","float"]]],\r
			["translateframes",["array","ubyte",["tuple","float","float","float"]]],\r
			["scaleframes",["array","ubyte",["tuple","float","float","float"]]]\r
		]]],\r
		["flag1","ubyte"],\r
		["sound",["opt","flag1!=0","paddedstring"]],\r
		["flag2","ubyte"],\r
		["subtitle",["opt","flag2!=0","paddedstring"]],\r
		["unkbyte",["opt","flag0==0","ubyte"]],\r
		["soundid",["opt","flag0==0","ushort"]],\r
		["extraflags",["match",["ref","flag0"],{"0":"ubyte","other":0}]],\r
		["extra_01",["opt","extraflags!=0",["struct",["start","float"],["end","float"]]]]\r
	]]],\r
	["paddingbytes",["buffer",["bytesleft"],"ubyte"]]\r
]`,Ka=`{\r
    "0x03":{"name":"unk01","read":["struct",\r
        ["cols","ubyte"],\r
        ["columndata",["nullarray","ubyte",255,["struct",\r
            ["id",["ref","$opcode",[0,6]]],\r
            ["flags",["ref","$opcode",[6,2]]],\r
            ["$rowcount",-1],\r
            ["columns",["chunkedarray","ubyte",[\r
                ["type","varushort"]\r
            ],[\r
                ["$initrowcount",["match",["ref","$rowcount"],{\r
                    "-1":["accum","$rowcount","ubyte","hold"],\r
                    "other":["ref","$rowcount"]\r
                }]],\r
                //this is currently wrong, the values are interweaved in the other direction\r
                ["value",["array",["ref","$rowcount"],["match",["ref","type"],{\r
                    "0x24":"string",\r
                    "other":"int"\r
                }]]]\r
            ]]]\r
        ]]]\r
    ]},\r
    "0x04":{"name":"table","read":"varushort"}\r
}`,Ya=`{\r
    "0x01":{"name":"unk01","read":["struct",\r
        ["cols","ubyte"],\r
        ["columndata",["nullarray","ubyte",255,["struct",\r
            ["id",["ref","$opcode",[0,6]]],\r
            ["flags",["ref","$opcode",[6,2]]],\r
            ["$i",0],\r
            ["columns",["chunkedarray","ubyte",[\r
                ["type","varushort"]\r
            ],[\r
                ["$colindex",["accum","$i",1]],\r
                ["unk",["opt","$opcode&0x80 && $colindex==1","ubyte"]],//this is dumb, there is currently no way to read a byte between chunkedarray chunks\r
                ["default",["opt","$opcode&0x80",["match",["ref","type"],{\r
                    "0x24":"string",\r
                    "other":"int"\r
                }]]]\r
            ]]]\r
        ]]]\r
    ]},\r
    "0x02":{"name":"unk02","read":["struct",\r
        ["unkint","uint"],\r
        ["cols","ubyte"],\r
        ["columndata",["nullarray","ubyte",255,["struct",\r
            ["id",["ref","$opcode",[0,6]]],\r
            ["flags",["ref","$opcode",[6,2]]],\r
            ["$i",0],\r
            ["$default",0],\r
            ["unkbyte","ubyte"],\r
            ["columns",["chunkedarray","ubyte",[\r
                ["type","varushort"],\r
                ["$colindex",["accum","$i",1]]\r
            ],[\r
                ["hasdefault",["accum","$default",["match",{"$colindex==1":"ubyte","other":0}]]]\r
            ],[\r
                ["unk1",["opt","hasdefault&0x02 && $colindex==1","ubyte"]],//this is dumb, there is currently no way to read a byte between chunkedarray chunks\r
                ["defaultint",["opt","hasdefault&0x02 && type!=0x24","int"]],\r
                ["defaultstring",["opt","hasdefault&0x02 && type==0x24","string"]],\r
                ["unk2",["opt","hasdefault&0x02 && $colindex==1","ubyte"]]\r
            ]]]\r
        ]]]\r
    ]}\r
}\r
\r
// alternative if the first byte were a version (it isn't because an empty dbtable starts with the 0x00 footer byte)\r
// ["struct",\r
//     ["version","ubyte"],\r
//     ["unkint",["opt","version>=2","uint"]],\r
//     ["cols","ubyte"],\r
//     ["columndata",["nullarray","ubyte",255,["struct",\r
//         ["id",["ref","$opcode",[0,6]]],\r
//         ["flags",["ref","$opcode",[6,2]]],\r
//         ["$i",0],\r
//         ["$default",0],\r
//         ["unkbyte",["opt","version>=2","ubyte"]],\r
//         ["columns",["chunkedarray","ubyte",[\r
//             ["type","varushort"],\r
//             ["$colindex",["accum","$i",1]]\r
//         ],[\r
//             ["flagsbyte",["accum","$default",["match",{"$colindex==1 && version>=2":"ubyte","other":0}]]]\r
//         ],[\r
//             ["hasdefault",["match",{"version>=2 && flagsbyte&0x2":1,"version<=1 && id&0x80":1,"other":0}]],\r
//             ["unk1",["opt","hasdefault==1 && $colindex==1","ubyte"]],//this is dumb, there is currently no way to read a byte between chunkedarray chunks\r
//             ["defaultint",["opt","hasdefault==1 && type!=0x24","int"]],\r
//             ["defaultstring",["opt","hasdefault==1 && type==0x24","string"]],\r
//             ["unk2",["opt","hasdefault==1 && $colindex==1","ubyte"]]\r
//         ]]]\r
//     ]]]\r
// ]`,Za=`{\r
	"0x01": { "name":                           "key_type1", "read": "unsigned byte" },\r
	"0x02": { "name":                         "value_type1", "read": "unsigned byte" },\r
	"0x65": { "name":                           "key_type2", "read": "unsigned byte" },\r
	"0x66": { "name":                         "value_type2", "read": "unsigned byte" },\r
	"0x03": { "name":                         "stringValue", "read": "string" },\r
	"0x04": { "name":                            "intValue", "read": "int" },\r
	"0x05": { "name":                   "stringArrayValue1", "read": ["array","unsigned short",["tuple","int","string"]] },\r
	"0x06": { "name":                      "intArrayValue1", "read": ["array","unsigned short",["tuple","int","int"]] },\r
	"0x07": { "name":                   "stringArrayValue2", "read": ["struct",["max","unsigned short"],["values",["array","unsigned short",["tuple","unsigned short","string"]]]] },\r
	"0x08": { "name":                      "intArrayValue2", "read": ["struct",["max","unsigned short"],["values",["array","unsigned short",["tuple","unsigned short","int"]]]] },\r
	"0x83": { "name":                          "unknown_83", "read": "true" },\r
	"0xd1": { "name":                          "unknown_d1", "read": "true" }\r
}`,Qa=`{\r
	"0x01": { "name": "unk01", "read":"ushort" },\r
	"0x04": { "name": "unk04", "read":"bool" },\r
	"0x05": { "name": "model", "read":"varuint" },\r
	"0x06": { "name": "unk06", "read":"ushort" }\r
}`,es=`["struct",\r
    ["type","ubyte"],\r
    ["sprite",["opt","type!=2",["struct",\r
        ["complexkerning","ubyte"],\r
        ["sourceid",["match",["ref","type"],{"1":"int","other":-1}]],\r
        ["chars",["chunkedarray",256,[\r
            ["width","ubyte"]\r
        ],[\r
            ["height","ubyte"]\r
        ],[\r
            ["bearingy","ubyte"]\r
        ]]],\r
        ["sheetwidth","ushort"],\r
        ["sheetheight","ushort"],\r
        ["positions",["chunkedarray",256,[\r
            ["x","ushort"]\r
        ],[\r
            ["y","ushort"]\r
        ]]],\r
        ["baseline",["match",["ref","complexkerning"],{"1":0,"other":"byte"}]],\r
        ["uppercaseascent","ubyte"],\r
        ["median","ubyte"],\r
        ["maxascent","ubyte"],\r
        ["maxdescent","ubyte"],\r
        ["scale","ubyte"]\r
    ]]],\r
    ["vector",["opt","type==2",["struct",\r
        ["sourceid","uint"],\r
        ["size","ubyte"]\r
    ]]]\r
]`,ts=`["struct",\r
	["data",["chunkedarray","ushort",\r
		[["type","ubyte"]],\r
		[["unknown","bool"]],\r
		[["unknown_always_FFFF","ushort"]],\r
		[["length","varushort"]],\r
		[["data",["array",["ref","length"],"varushort"]]]\r
	]],\r
	["skeleton",["chunkedarray","ushort",\r
		[\r
			["parentbone","ubyte"],//TODO this is wrong, this byte is part of dataq from the previous bone\r
			["nonskinboneid","ushort"],\r
			["bonematrix",["array",16,"float"]],\r
			//unknown, always the same for all bones in a skeleton\r
			["dataq",["buffer",11,"hex"]]\r
		]\r
	]],\r
	\r
	//exact use unknown\r
	//contains more entries that the skeleton list\r
	//seems to be a list of "short le"\r
	//highest possible rounded up to 16 for first bone, always counts down to 2 on bones after that\r
	//but also some times starts at 0 or a different number and not always unique\r
	["activebones",["buffer",["bytesleft"],"hex"]]\r
]`,rs=`["struct",\r
	["header_always_2","ubyte"],\r
	["probably_framemap_id","ushort"],\r
	["flags",["array","ushort","ubyte"]],\r
	["animdata",["buffer",["bytesleft"],"ubyte"]]\r
]`,ns=`{\r
	//male   0head,1jaw/beard,2body,3arms,4hands,5legs,6feet,\r
	//female 7head,9body,10arms,11hands,12legs,13feet,\r
	//also a couple of values in 70-74 range for some reason, bugged?\r
	"0x01": { "name":  "bodypart", "read": "ubyte" },\r
	"0x02": { "name":    "models", "read": ["array","ubyte","varuint"]},\r
	"0x03": { "name":    "iscopy", "read": "true" },\r
	"0x28": { "name":   "recolor", "read": ["array","ubyte",["tuple","ushort","ushort"]] },\r
	"0x3c": { "name": "headmodel", "read": "varuint" },\r
	// seems to be hair style related\r
	"0x3d": { "name":   "unknown", "read": "varuint" }\r
}`,is=`//works from 500 to 932, system is entirely different below 500\r
["struct",\r
    ["version",["match","buildnr",{">500":"byte","other":-1}]],//-1,3,4,5,6,9\r
    ["type","ubyte"],\r
    ["name",["opt","type&0x80","string"]],\r
    ["contenttype","ushort"],\r
    ["baseposx","short"],\r
    ["baseposy","short"],\r
    ["basewidth","short"],\r
    ["baseheight","short"],\r
    ["aspectwidthtype","byte"],\r
    ["aspectheighttype","byte"],\r
    ["aspectxtype","byte"],\r
    ["aspectytype","byte"],\r
    ["parentid","ushort"],\r
    ["hidden","ubyte"],\r
    ["containerdata",["opt","type=0",["struct",\r
        ["layerwidth","ushort"],\r
        ["layerheight","ushort"],\r
        ["layerheightextra",["opt","layerheight&0x8000","uint"]],//????\r
        ["disablehover",["opt","version==-1","bool"]],\r
        ["v6unk1",["opt","version>=6","uint"]],\r
        ["v6unk2",["opt","version==6","uint"]]\r
    ]]],\r
    ["figuredata",["opt","type=3",["struct",\r
        ["color","uint"],\r
        ["filled","ubyte"],//more to this, weird\r
        ["trans","byte"]\r
    ]]],\r
    ["textdata",["opt","type=4",["struct",\r
        ["fontid","varuint"],\r
        ["unk1",["match",{"version>=0":"ubyte","other":false}]],\r
        ["text","string"],\r
        ["unk2","ubyte"],\r
        ["alignhor","ubyte"],\r
        ["alignver","ubyte"],\r
        ["shadow","bool"],\r
        ["color","uint"],\r
        ["trans","ubyte"],\r
        ["multiline",["opt","version>=0","ubyte"]]\r
    ]]],\r
    ["spritedata",["opt","type=5",["struct",\r
        ["spriteid","int"],\r
        ["rotation","ushort"],\r
        ["tiling","ubyte"],\r
        ["aspectwidthdata",["match",{"aspectwidthtype==4":"uint","other":-1}]],\r
        ["aspectheightdata",["match",{"aspectheighttype==4":"uint","other":-1}]],\r
        ["transparency","ubyte"],\r
        ["borderthickness","ubyte"],\r
        ["unk2","int"],\r
        ["vflip","bool"],\r
        ["hflip","bool"],\r
        ["color","uint"],\r
        ["clickmask",["opt","version>=0","ubyte"]],\r
        ["v6unk",["opt","version>=6","uint"]]\r
    ]]],\r
    ["modeldata",["opt","type=6",["struct",\r
        ["modelid",["match","buildnr",{">616":"varuint","other":"ushort"}]],\r
        ["mode",["match","buildnr",{">616":"ubyte","other":1}]],\r
        ["positiondata",["opt","mode!=0",["struct",\r
            ["translate_x","short"],\r
            ["translate_y","short"],\r
            ["unkextra",["opt","mode=2","short"]],\r
            ["rotate_x","ushort"],\r
            ["rotate_y","ushort"],\r
            ["rotate_z","ushort"],\r
            ["zoom","ushort"]//can be signed? if mode is 2\r
        ]]],\r
        ["animid",["match","buildnr",{">616":"varuint","other":"ushort"}]],\r
        ["unkdata",["match","buildnr",{">616":null,"other":["buffer",6,"hex"]}]],\r
        ["aspectwidthdata",["match",{"aspectwidthtype!=0":"ushort","other":-1}]],\r
        ["aspectheightdata",["match",{"aspectheighttype!=0":"ushort","other":-1}]]\r
    ]]],\r
    ["linedata",["opt","type=9",["struct",\r
        ["width","ubyte"],\r
        ["color","uint"],\r
        ["dir","bool"]\r
    ]]],\r
    ["unk10data",["opt","type=10",["struct",\r
        ["data",["buffer",41,"hex"]],\r
        ["str1","string"],\r
        ["data2",["buffer",10,"hex"]]\r
    ]]],\r
    ["unk11data",["opt","type=11",["struct",\r
        ["data",["buffer",6,"hex"]]\r
    ]]],\r
    ["unk12data",["opt","type=12",["struct",\r
        ["data",["buffer",36,"hex"]],\r
        ["str","string"],\r
        ["data2",["buffer",10,"hex"]]\r
    ]]],\r
    ["unk13data",["opt","type=13",["struct",\r
        ["data",["buffer",125,"hex"]]\r
    ]]],\r
    ["unk15data",["opt","type=15",["struct",\r
        ["data",["buffer",10,"hex"]]\r
    ]]],\r
    ["unk16data",["opt","type=16",["struct",\r
        ["data",["buffer",179,"hex"]]//or 188 or 238, no clue how this works\r
    ]]],\r
    ["unkffff",["opt","version>=6","uint"]],\r
\r
\r
\r
    ["optmask","ushort"],\r
    ["unk2","ubyte"],\r
    ["unkprepre3",["opt","version>=7","ubyte"]],\r
    ["unkpre3",["opt","version>=6","ubyte"]],//might be style class\r
    ["unk3",["match",{\r
        "version==-1":["nullarray","ubyte",["buffer",3,"hex"]],\r
        "other":["struct",\r
            ["op","ubyte"],\r
            ["data",["opt","op!=0",["buffer",4,"hex"]]\r
        ]]\r
    }]],\r
    ["name2","string"],\r
    \r
    ["menucounts","ubyte"],\r
    ["rightclickopts",["array",["ref","menucounts",[0,4]],"string"]],\r
    ["rightclickcursors",["array",["ref","menucounts",[4,4]],["struct",\r
        ["op","ubyte"],\r
        ["cursor","ushort"]\r
    ]]],\r
    ["unkstring1",["opt","optmask!&0x0400","string"]],\r
    ["unk4","ubyte"],\r
    ["bit4data",["opt","optmask&0x0400","ubyte"]],\r
    ["unk5","ubyte"],\r
    ["unk6","ubyte"],\r
    ["unkstuff123","string"],\r
    ["optmask1data_bit40",["opt","optmask&0x0240",["buffer",6,"hex"]]],\r
    ["cursor",["match",{"version>=0":"ushort","other":-1}]],\r
    ["unkdata",["opt","version>=0","ushort"]],\r
    ["unkdatadata",["opt","version>=0 && unkdata!=0",["buffer",6,"hex"]]],\r
\r
    ["scripts",["struct",\r
        ["load","uivalues"],\r
        ["mousehover","uivalues"],\r
        ["mouseleave","uivalues"],\r
        ["unk0","uivalues"],\r
        ["unk1","uivalues"],\r
        ["unk2","uivalues"],\r
        ["unk3","uivalues"],\r
        ["unk4","uivalues"],\r
        ["unk5","uivalues"],\r
        ["unk6","uivalues"],//triggerop\r
        ["unk7",["opt","version>=0","uivalues"]],\r
        ["hovertext","uivalues"],\r
        ["unk8","uivalues"],//mousedown\r
        ["unk9","uivalues"],\r
        ["unk10","uivalues"],//mouseup\r
        ["unk11","uivalues"],\r
        ["unk12","uivalues"],\r
        ["unk13","uivalues"],\r
        ["unk14","uivalues"],\r
        ["unk15","uivalues"],\r
        ["unk16","uivalues"],\r
        ["unk17",["opt","version>=6","uivalues"]],\r
        ["unk18",["opt","version>=6","uivalues"]],\r
        ["unk19",["opt","version>=6","uivalues"]],\r
        ["unk20",["opt","version>=7","uivalues"]],\r
\r
        ["v2unk0","uivaluesint"],//"config"\r
        ["v2unk1","uivaluesint"],\r
        ["v2unk2","uivaluesint"],\r
        ["v2unk3","uivaluesint"],\r
        ["v2unk4","uivaluesint"]\r
    ]]\r
]`,as=`{\r
	"0x00": { "name":                             "nullopt", "read": "true" },\r
	"0x01": { "name":                           "baseModel", "read": "item_modelid" },\r
	"0x02": { "name":                                "name", "read": "string" },\r
	"0x03": { "name":                         "buff_effect", "read": "string" },\r
	"0x04": { "name":                          "model_zoom", "read": "unsigned short" },\r
	"0x05": { "name":                          "rotation_0", "read": "unsigned short" },\r
	"0x06": { "name":                          "rotation_1", "read": "unsigned short" },\r
	"0x07": { "name":                    "modelTranslate_0", "read": "short" },\r
	"0x08": { "name":                    "modelTranslate_1", "read": "short" },\r
	"0x0A": { "name":                          "unknown_0A", "read": "ushort" },\r
	"0x0B": { "name":                         "stackable_1", "read": "true" },\r
	"0x0C": { "name":                               "value", "read": "int" },\r
	"0x0D": { "name":                         "equipSlotId", "read": "unsigned byte" },\r
	"0x0E": { "name":                             "equipId", "read": "unsigned byte" },\r
	"0x0F": { "name":                          "unknown_0F", "read": "true" },\r
	"0x10": { "name":                             "members", "read": "true" },\r
	"0x12": { "name":                      "multiStackSize", "read": "unsigned short" },\r
	"0x17": { "name":                        "maleModels_0", "read": ["struct",["id","item_modelid"],["type",["match","buildnr",{">=502":0,"other":"ubyte"}]]] },\r
	"0x18": { "name":                        "maleModels_1", "read": "item_modelid" },\r
	"0x19": { "name":                      "femaleModels_0", "read": ["struct",["id","item_modelid"],["type",["match","buildnr",{">=502":0,"other":"ubyte"}]]] },\r
	"0x1A": { "name":                      "femaleModels_1", "read": "item_modelid" },\r
	"0x1B": { "name":                          "unknown_1B", "read": "unsigned byte" },\r
	"0x1E": { "name":                    "ground_actions_0", "read": "string" },\r
	"0x1F": { "name":                    "ground_actions_1", "read": "string" },\r
	"0x20": { "name":                    "ground_actions_2", "read": "string" },\r
	"0x21": { "name":                    "ground_actions_3", "read": "string" },\r
	"0x22": { "name":                    "ground_actions_4", "read": "string" },\r
	"0x23": { "name":                    "widget_actions_0", "read": "string" },\r
	"0x24": { "name":                    "widget_actions_1", "read": "string" },\r
	"0x25": { "name":                    "widget_actions_2", "read": "string" },\r
	"0x26": { "name":                    "widget_actions_3", "read": "string" },\r
	"0x27": { "name":                    "widget_actions_4", "read": "string" },\r
	"0x28": { "name":                  "color_replacements", "read": [ "array", [ "tuple", "unsigned short", "unsigned short"] ] },\r
	"0x29": { "name":               "material_replacements", "read": [ "array", [ "tuple", "unsigned short", "unsigned short"] ] },\r
	"0x2A": { "name":                     "recolourPalette", "read": [ "array", [ "tuple", "unsigned byte", "byte"] ] },\r
	"0x2B": { "name":                           "nameColor", "read": "int" },\r
	"0x2C": { "name":                   "recolorDstIndices", "read": "unsigned short" },\r
	"0x2D": { "name":                 "retextureDstIndices", "read": "unsigned short" },\r
	"0x41": { "name":                           "tradeable", "read": "true" },\r
	"0x45": { "name":                           "buy_limit", "read": "int" },\r
	"0x4E": { "name":                        "maleModels_2", "read": "item_modelid" },\r
	"0x4F": { "name":                      "femaleModels_2", "read": "item_modelid" },\r
	"0x5A": { "name":                         "maleHeads_0", "read": "item_modelid" },\r
	"0x5B": { "name":                       "femaleHeads_0", "read": "item_modelid" },\r
	"0x5C": { "name":                         "maleHeads_1", "read": "item_modelid" },\r
	"0x5D": { "name":                       "femaleHeads_1", "read": "item_modelid" },\r
	"0x5E": { "name":                            "category", "read": "unsigned short" },\r
	"0x5F": { "name":                          "rotation_2", "read": "unsigned short" },\r
	"0x60": { "name":                           "dummyItem", "read": "unsigned byte" },\r
	"0x61": { "name":                            "noteData", "read": "unsigned short" },\r
	"0x62": { "name":                        "noteTemplate", "read": "unsigned short" },\r
	"0x64": { "name":                        "stack_info_0", "read": [ "tuple", "unsigned short", "unsigned short" ] },\r
	"0x65": { "name":                        "stack_info_1", "read": [ "tuple", "unsigned short", "unsigned short" ] },\r
	"0x66": { "name":                        "stack_info_2", "read": [ "tuple", "unsigned short", "unsigned short" ] },\r
	"0x67": { "name":                        "stack_info_3", "read": [ "tuple", "unsigned short", "unsigned short" ] },\r
	"0x68": { "name":                        "stack_info_4", "read": [ "tuple", "unsigned short", "unsigned short" ] },\r
	"0x69": { "name":                        "stack_info_5", "read": [ "tuple", "unsigned short", "unsigned short" ] },\r
	"0x6A": { "name":                        "stack_info_6", "read": [ "tuple", "unsigned short", "unsigned short" ] },\r
	"0x6B": { "name":                        "stack_info_7", "read": [ "tuple", "unsigned short", "unsigned short" ] },\r
	"0x6C": { "name":                        "stack_info_8", "read": [ "tuple", "unsigned short", "unsigned short" ] },\r
	"0x6D": { "name":                        "stack_info_9", "read": [ "tuple", "unsigned short", "unsigned short" ] },\r
	"0x6E": { "name":                             "scale_0", "read": "unsigned short" },\r
	"0x6F": { "name":                             "scale_1", "read": "unsigned short" },\r
	"0x70": { "name":                             "scale_2", "read": "unsigned short" },\r
	"0x71": { "name":                            "ambiance", "read": "byte" },\r
	"0x72": { "name":                            "contrast", "read": "byte" },\r
	"0x73": { "name":                                "team", "read": "unsigned byte" },\r
	"0x79": { "name":                              "loanId", "read": "unsigned short" },\r
	"0x7A": { "name":                        "loanTemplate", "read": "unsigned short" },\r
	"0x7D": { "name":                      "male_translate", "read": [ "tuple", "unsigned byte", "unsigned byte", "unsigned byte" ] },\r
	"0x7E": { "name":                    "female_translate", "read": [ "tuple", "unsigned byte", "unsigned byte", "unsigned byte" ] },\r
	"0x7F": { "name":                          "unknown_7F", "read": [ "tuple", "unsigned byte", "unsigned short" ] },\r
	"0x80": { "name":                          "unknown_80", "read": [ "tuple", "unsigned byte", "unsigned short" ] },\r
	"0x81": { "name":                          "unknown_81", "read": [ "tuple", "unsigned byte", "unsigned short" ] },\r
	"0x82": { "name":                          "unknown_82", "read": [ "tuple", "unsigned byte", "unsigned short" ] },\r
	"0x84": { "name":                              "quests", "read": [ "array", [ "tuple","unsigned byte", "unsigned short"] ] },\r
	"0x86": { "name":                       "pickSizeShift", "read": "unsigned byte" },\r
	"0x8B": { "name":                            "bindLink", "read": "unsigned short" },\r
	"0x8C": { "name":                        "bindTemplate", "read": "unsigned short" },\r
	"0x8E": { "name":             "ground_actions_cursor_0", "read": "unsigned short" },\r
	"0x8F": { "name":             "ground_actions_cursor_1", "read": "unsigned short" },\r
	"0x90": { "name":             "ground_actions_cursor_2", "read": "unsigned short" },\r
	"0x91": { "name":             "ground_actions_cursor_3", "read": "unsigned short" },\r
	"0x92": { "name":             "ground_actions_cursor_4", "read": "unsigned short" },\r
	"0x96": { "name":             "widget_actions_cursor_0", "read": "unsigned short" },\r
	"0x97": { "name":             "widget_actions_cursor_1", "read": "unsigned short" },\r
	"0x98": { "name":             "widget_actions_cursor_2", "read": "unsigned short" },\r
	"0x99": { "name":             "widget_actions_cursor_3", "read": "unsigned short" },\r
	"0x9A": { "name":             "widget_actions_cursor_4", "read": "unsigned short" },\r
	"0x9C": { "name":                               "dummy", "read": "true" },\r
	"0x9D": { "name":                  "randomizeGroundPos", "read": "true" },\r
	"0xA1": { "name":                        "combine_info", "read": "unsigned short" },\r
	"0xA2": { "name":                    "combine_template", "read": "unsigned short" },\r
	"0xA3": { "name":                "combine_num_required", "read": "unsigned short" },\r
	"0xA4": { "name":                  "combine_shard_name", "read": "string" },\r
	"0xA5": { "name":                      "neverStackable", "read": "true" },\r
	"0xA7": { "name":                          "unknown_A7", "read": "true" },\r
	"0xA8": { "name":                          "unknown_A8", "read": "true" },\r
	"0xB2": { "name":                          "unknown_B2", "read": "true" },//seems to always be set when config has a "big_Value"\r
	"0xB5": { "name":                           "big_value", "read": ["tuple","int","int"] },//to be comfirmed if this is int64, or int32*1e9+int32 like the coin pouch is\r
	"0xF9": { "name":                               "extra", "read": "extrasmap" }\r
}`,ss=`{\r
	"0x01": { "name":                              "sprite", "read": "varuint" },\r
	"0x02": { "name":                        "sprite_hover", "read": "varuint" },\r
	"0x03": { "name":                                "text", "read": "string" },\r
	"0x04": { "name":                             "color_1", "read": ["tuple","ubyte","ubyte","ubyte"] },\r
	"0x05": { "name":                             "color_2", "read": ["tuple","ubyte","ubyte","ubyte"] },\r
	"0x06": { "name":                           "font_size", "read": "ubyte" },\r
	"0x07": { "name":                          "unknown_07", "read": "ubyte" },\r
	"0x08": { "name":                          "unknown_08", "read": "ubyte" },\r
	"0x09": { "name":                            "toggle_1", "read": ["struct",\r
                                                                        ["varbit","ushort"],\r
                                                                        ["varp","ushort"],\r
                                                                        ["lower","uint"],\r
                                                                        ["upper","uint"]\r
                                                                    ] },\r
    "0x0a": { "name":                        "rightclick_1", "read": "string" },\r
    "0x0b": { "name":                          "unktext_0b", "read": "string" },\r
	"0x0f": { "name":                             "polygon", "read": ["struct",\r
                                                                        ["pointcount","ubyte"],\r
                                                                        ["points",["array",["ref","pointcount"],["struct",\r
                                                                            ["x","short"],\r
                                                                            ["y","short"]\r
                                                                        ]]],\r
                                                                        ["color",["tuple","ubyte","ubyte","ubyte","ubyte"]],\r
                                                                        ["always_1",["match","buildnr",{">=623":"ubyte","other":1}]],\r
                                                                        //back color and color are also flipped before 623\r
                                                                        ["back_color",["tuple","ubyte","ubyte","ubyte","ubyte"]],\r
                                                                        ["pointplanes",["match","buildnr",{\r
                                                                            ">=629":["array",["ref","pointcount"],"ubyte"],\r
                                                                            "other":null\r
                                                                        }]]\r
                                                                    ] },\r
	"0x11": { "name":                        "rightclick_2", "read": "string" },\r
	"0x13": { "name":                            "category", "read": "ushort" },\r
	"0x14": { "name":                            "toggle_2", "read": ["struct",\r
                                                                        ["varbit","ushort"],\r
                                                                        ["varp","ushort"],\r
                                                                        ["lower","uint"],\r
                                                                        ["upper","uint"]\r
                                                                    ] },\r
	"0x15": { "name":                          "unknown_15", "read": "int" },\r
	"0x16": { "name":                          "unknown_16", "read": "int" },\r
	"0x19": { "name":                   "background_sprite", "read": "varuint" },\r
	"0x1a": { "name":                       "legacy_switch", "read": ["struct",\r
                                                                        ["varbit","ushort"],\r
                                                                        ["varp","ushort"],\r
                                                                        ["value","ubyte"],\r
                                                                        ["default_ref","ushort"],\r
                                                                        ["legacy_ref","ushort"]\r
                                                                    ] },\r
	"0x1c": { "name":                          "unknown_1c", "read": "ubyte" },\r
	"0x1e": { "name":                          "unknown_1e", "read": "ubyte" },\r
	"0xF9": { "name":                               "extra", "read": "extrasmap" }\r
}`,os=`{\r
	"0x01": { "name":                           "sprite_id", "read": "variable unsigned int" },\r
	"0x02": { "name":                           "unknown_2", "read": "unsigned int" },\r
	"0x03": { "name":                           "unknown_3", "read": "true" },\r
	"0x04": { "name":                           "unknown_4", "read": "true" },\r
	"0x05": { "name":                           "unknown_5", "read": "true" }\r
}`,ls=`["struct",\r
    //TODO\r
    ["unk","ubyte"]\r
]`,us=`["struct",\r
	["$idcounter","-1"],\r
	["locations",["nullarray","tailed unsigned short",["struct",\r
		["id",["accum","$idcounter",["ref","$opcode"]]],\r
		["$location","0"],\r
		["uses",["nullarray","variable unsigned short",["struct",\r
			["$loc",["accum","$location",["ref","$opcode"],"add-1"]],\r
			["y",["ref","$loc",[0,6]]],\r
			["x",["ref","$loc",[6,6]]],\r
			["plane",["ref","$loc",[12,2]]],\r
			["$data","unsigned byte"],\r
			["rotation",["ref","$data",[0,2]]],\r
			["type",["ref","$data",[2,5]]],\r
			["extra",["opt",["$data",7,"bitflag"],["struct",\r
				["flags","unsigned byte"],\r
				["rotation",["opt",["flags",0,"bitflag"],["array",4,"short"]]],\r
				["translateX",["opt",["flags",1,"bitflag"],"short"]],\r
				["translateY",["opt",["flags",2,"bitflag"],"short"]],\r
				["translateZ",["opt",["flags",3,"bitflag"],"short"]],\r
				["scale",["opt",["flags",4,"bitflag"],"unsigned short"]],\r
				["scaleX",["opt",["flags",5,"bitflag"],"unsigned short"]],\r
				["scaleY",["opt",["flags",6,"bitflag"],"unsigned short"]],\r
				["scaleZ",["opt",["flags",7,"bitflag"],"unsigned short"]]\r
			]]]\r
		]]]\r
	]]]\r
]`,cs=`{\r
	"0x01": { "name":                               "color", "read": ["array",3,"unsigned byte"] },\r
	"0x02": { "name":                        "materialbyte", "read": "unsigned byte" },//last used in ~2008\r
	"0x03": { "name":                            "material", "read": ["match","buildnr",{">377":"unsigned short","other":0}] },\r
	"0x05": { "name":                        "unknown_0x05", "read": "true" },\r
	"0x06": { "name":                                "name", "read": "string" },//not used after 2006\r
	"0x07": { "name":                    "secondary_colour", "read": ["array",3,"unsigned byte"] },\r
	"0x08": { "name":                        "unknown_0x08", "read": "true" },\r
	"0x09": { "name":                     "material_tiling", "read": "unsigned short" },\r
	"0x0A": { "name":                        "unknown_0x0A", "read": "true" },\r
	"0x0B": { "name":                       "bleedpriority", "read": "unsigned byte" },//higher number means that it flows into neighbouring overlays with lower number\r
	"0x0C": { "name":                     "bleedToUnderlay", "read": "true" },\r
	"0x0D": { "name":                     "tertiary_colour", "read": ["array",3,"unsigned byte"] },\r
	"0x0E": { "name":                        "unknown_0x0E", "read": "unsigned byte" },\r
	"0x0F": { "name":                        "unknown_0x0F", "read": "unsigned short" },//last used in ~2010\r
	"0x10": { "name":                        "unknown_0x10", "read": "unsigned byte" }\r
}`,fs=`["struct",\r
	["magic",["match","buildnr",{">=936":["tuple","uint","ubyte"],"other":null}]],//always "jagx\\01"\r
	["tiles",["array",16384,\r
		["match","buildnr",{\r
			">=750":["struct",\r
				["flags","unsigned byte"],\r
				["shape",["opt",["flags",0,"bitflag"],"unsigned byte"]],\r
				["overlay",["opt",["flags",0,"bitflag"],"variable unsigned short"]],\r
				["settings",["opt",["flags",1,"bitflag"],"unsigned byte"]],\r
				["underlay",["opt",["flags",2,"bitflag"],"variable unsigned short"]],\r
				["height",["opt",["flags",3,"bitflag"],["match","buildnr",{">=936":"ushort","other":"ubyte"}]]]\r
			],\r
			"other":["legacy_maptile"]\r
		}]\r
	]],\r
	["olddata",["match","buildnr",{">=498":null,"other":["buffer",["bytesleft"],"hex"]}]],\r
	//1 bit per 8x8 subarea, starting southwest, going north and wrapping east\r
	["nonmembarea",["match","buildnr",{">=765":["buffer",8,"hex"],"other":null}]],\r
	["extra",{\r
		"0x00": { "name": "unk00", "read":["struct",\r
			["flags","ubyte"],\r
			["unk01",["opt",["flags",0,"bitflag"],["array",4,"ubyte"]]],//probably sun intensity+color\r
			["unk02",["opt",["flags",1,"bitflag"],"ushort"]],\r
			["unk04",["opt",["flags",2,"bitflag"],"ushort"]],\r
			["unk08",["opt",["flags",3,"bitflag"],"ushort"]],\r
			["unk10",["opt",["flags",4,"bitflag"],["tuple","ushort","ushort","ushort"]]],\r
			["unk20",["opt",["flags",5,"bitflag"],["array",4,"ubyte"]]],\r
			["unk40",["opt",["flags",6,"bitflag"],"ushort"]],\r
			["unk80",["opt",["flags",7,"bitflag"],["match","buildnr",{">=759":"ushort","other":["array",6,"ushort"]}]]]\r
		]},\r
		"0x01": { "name": "unk01", "read":["array","ubyte",["struct",\r
			["byte2","ubyte"],\r
			["short0","ushort"],\r
			["short1","ushort"],\r
			["short2","ushort"],\r
			["array5",["array","ubyte",["array",4,"ubyte"]]],\r
			["short3","ushort"],\r
			["short4","ushort"],\r
			["extraflags","ubyte"],\r
			["extra08",["match","buildnr",{">=804":"ushort","other":0}]],//always ffff?\r
			["extra1f",["opt",["extraflags",31,"bitand"],"ushort"]]\r
		]]},\r
		"0x02": { "name": "unk02", "read":["array",3,["match","buildnr",{">=780":"float","other":"byte"}]]},\r
		"0x03": { "name": "unk03", "read":["tuple","short","float"]},\r
		"0x80": { "name": "unk80", "read":["struct",\r
			["environment","ushort"],\r
			["always00",["buffer",8,"hex"]]\r
		]},\r
		"0x81": { "name": "unk81", "read":["array",4,["struct",\r
			["flag","ubyte"],\r
			["data",["opt",["flag",0,"bitflag"],["buffer",256,"hex"]]]\r
		]]},\r
		"0x82": { "name": "unk82", "read":"true" }//changable skybox/lighting?\r
	}]\r
]`,hs=`{\r
"0x6a":{"name":"magic","read":"uint"},//"jagx\\01" as header for buildnr>=936\r
"0x00":{"name":"level0","read":["array",4356,["struct",\r
	["flags","ubyte"],//1visible,2blocking,4bridge/flag2,8roofed,16water,32forcedraw,64roofoverhang\r
	["height",["match","buildnr",{">=936":"ushort","other":"ubyte"}]],\r
	["rest",["opt",["flags",0,"bitflag"],["struct",\r
		["waterheight",["opt","flags&16",["match","buildnr",{">=936":"ushort","other":"ubyte"}]]],\r
		["underlay","varushort"],\r
		["underlaycolor",["opt","underlay!=0","ushort"]],\r
		["overlay","varushort"],\r
		["overlay_under",["opt","flags&16","varushort"]],\r
		["shape",["opt","overlay!=0","ubyte"]],\r
		["underlay_under",["opt","overlay!=0 && flags&16","varushort"]]\r
	]]]\r
]]},\r
"0x01":{"name":"level1","read":["array",4356,["struct",\r
	["flags","ubyte"],//1visible,2blocking,4bridge/flag2,8roofed,16water,32forcedraw,64roofoverhang\r
	["height",["match","buildnr",{">=936":"ushort","other":"ubyte"}]],\r
	["rest",["opt",["flags",0,"bitflag"],["struct",\r
		["waterheight",["opt","flags&16",["match","buildnr",{">=936":"ushort","other":"ubyte"}]]],\r
		["underlay","varushort"],\r
		["underlaycolor",["opt","underlay!=0","ushort"]],\r
		["overlay","varushort"],\r
		["overlay_under",["opt","flags&16","varushort"]],\r
		["shape",["opt","overlay!=0","ubyte"]],\r
		["underlay_under",["opt","overlay!=0 && flags&16","varushort"]]\r
	]]]\r
]]},\r
"0x02":{"name":"level2","read":["array",4356,["struct",\r
	["flags","ubyte"],//1visible,2blocking,4bridge/flag2,8roofed,16water,32forcedraw,64roofoverhang\r
	["height",["match","buildnr",{">=936":"ushort","other":"ubyte"}]],\r
	["rest",["opt",["flags",0,"bitflag"],["struct",\r
		["waterheight",["opt","flags&16",["match","buildnr",{">=936":"ushort","other":"ubyte"}]]],\r
		["underlay","varushort"],\r
		["underlaycolor",["opt","underlay!=0","ushort"]],\r
		["overlay","varushort"],\r
		["overlay_under",["opt","flags&16","varushort"]],\r
		["shape",["opt","overlay!=0","ubyte"]],\r
		["underlay_under",["opt","overlay!=0 && flags&16","varushort"]]\r
	]]]\r
]]},\r
"0x03":{"name":"level3","read":["array",4356,["struct",\r
	["flags","ubyte"],//1visible,2blocking,4bridge/flag2,8roofed,16water,32forcedraw,64roofoverhang\r
	["height",["match","buildnr",{">=936":"ushort","other":"ubyte"}]],\r
	["rest",["opt",["flags",0,"bitflag"],["struct",\r
		["waterheight",["opt","flags&16",["match","buildnr",{">=936":"ushort","other":"ubyte"}]]],\r
		["underlay","varushort"],\r
		["underlaycolor",["opt","underlay!=0","ushort"]],\r
		["overlay","varushort"],\r
		["overlay_under",["opt","flags&16","varushort"]],\r
		["shape",["opt","overlay!=0","ubyte"]],\r
		["underlay_under",["opt","overlay!=0 && flags&16","varushort"]]\r
	]]]\r
]]}\r
}`,ds=`{\r
	"0x01": { "name":                           "color", "read": ["array",3,"unsigned byte"] },\r
	"0x02": { "name":                        "material", "read": "unsigned short" },\r
	"0x03": { "name":                 "material_tiling", "read": "unsigned short" },\r
	"0x04": { "name":                    "unknown_0x04", "read": "true" },\r
	"0x05": { "name":                    "unknown_0x05", "read": "true" }\r
}`,ps=`["array",4096,["struct",\r
	["flags","unsigned byte"],\r
	["shape",["opt",["flags",0,"bitflag"],"unsigned byte"]],\r
	["overlay",["opt",["flags",0,"bitflag"],"variable unsigned short"]],\r
	["settings",["opt",["flags",1,"bitflag"],"unsigned byte"]],\r
	["underlay",["opt",["flags",2,"bitflag"],"variable unsigned short"]],\r
	["height",["opt",["flags",3,"bitflag"],"unsigned byte"]]\r
]]`,ms=`["struct",\r
	["internal_name","string"],\r
	["name","string"],\r
	["center","unsigned int"],\r
	["unknown_1","unsigned int"],\r
	["show","boolean"],\r
	["default_zoom","unsigned byte"],\r
	["unknown_2","unsigned byte"],\r
	["bounds",["array",["struct",\r
		["plane","unsigned byte"],\r
		["src",["struct",\r
			["xstart","unsigned short"],\r
			["zstart","unsigned short"],\r
			["xend","unsigned short"],\r
			["zend","unsigned short"]\r
		]],\r
		["dst",["struct",\r
			["xstart","unsigned short"],\r
			["zstart","unsigned short"],\r
			["xend","unsigned short"],\r
			["zend","unsigned short"]\r
		]]]\r
	]]\r
]`,gs=`["struct",\r
	["version",["match","buildnr",{">=887":"ubyte",">=0":0}]],\r
	["v0",["opt",["version",0],["struct",\r
		["unk0","ubyte"],//always 0-4\r
		["texsize","ushort"],//256,512,0, but doesn't always correspond to actualtex\r
\r
		//always 0000 after 2015\r
		["opt0","ubyte"],\r
		["opt0data",["opt",["opt0",16],["tuple","ubyte","ushort"]]],\r
		["arr",["nullarray","ubyte",["struct",\r
			["op",["ref","$opcode"]],\r
			["value","ushort"]\r
		]]],\r
\r
		["textureflags","ubyte"],//always 1,3,9,16\r
		["diffuse",["opt",["textureflags",17,"bitor"],["match","buildnr",{">=887":"uint",">=0":0}]]],\r
		["normal",["opt",["textureflags",10,"bitor"],["match","buildnr",{">=887":"uint",">=0":0}]]],\r
\r
		["texrepeatflags",["match","buildnr",{">=876":"ubyte",">=0":0}]],\r
		["unk3_skybox",["match","buildnr",{">=876":["buffer",3,"hex"],">=0":"null"}]],//looks like a bitflag thing, bit weird\r
\r
		["flags2","ubyte"],//always 12,13,14,28\r
		["unkfloats",["opt",["flags2",4,"bitflag"],["tuple","float","float"]]],//always 1; 1,4,32\r
\r
		["unk7","ubyte"],//0,1,62,63,64,255\r
		["weirdshit",["opt",["unk7",255],["buffer",19,"hex"]]],//only one single material that has this\r
\r
		["diffuse_related1",["match","buildnr",{">=887":["opt",["textureflags",4,"bitflag"],"ubyte"],">=0":"ubyte"}]],//always 1 or null\r
		["normal_related",["opt",["textureflags",1,"bitflag"],["buffer",4,"hex"]]],//0x80000000 most of the time\r
		["diffuse_related2",["match","buildnr",{">=887":["opt",["textureflags",0,"bitflag"],"ubyte"],">=0":"ubyte"}]],//always 1,0 or null\r
		["diffuse_ralated2_data",["opt",["diffuse_related2",2],"ubyte"]],//last used 2015\r
\r
		["alphamode","ubyte"],//0,1 or 2\r
		["alphacutoff",["opt",["alphamode",1],"ubyte"]],//128 most of the time\r
\r
		["animtex","ubyte"],//0123\r
		["animtexU",["opt",["animtex",0,"bitflag"],["match","buildnr",{">=897":"short",">=0":"byte"}]]],\r
		["animtexV",["opt",["animtex",1,"bitflag"],["match","buildnr",{">=897":"short",">=0":"byte"}]]],\r
\r
		["flagextra","bool"],\r
		["extra",["opt",["flagextra",1],["struct",\r
			["unk00_flags","ubyte"],//flags 1=alpha channel reuse,2=water/lava/bloom?,4=water/dg water,8=water, all skyboxes have 6\r
			["unk01_flagsornumber","ubyte"],//0123 OR a high number (only 20 uses)\r
			["unk02","ubyte"],//0 if unk01=0123 or number (only 4 uses)\r
			["unknown",["buffer",4,"hex"]],//mostly 0 except for some ~15 water materials\r
			["unk07_bool","bool"],\r
			["unk08_flags","ubyte"],//0=5k,1=1,2=5k\r
			["unk09_bool","bool"],//true=7\r
			["unk0a_bool","bool"],\r
			["specular","ubyte"],\r
			["baseColorFraction","ubyte"],//indicates the mix ratio with colorint and vertex colors\r
			["baseColor","ushort"]\r
		]]]\r
	]]],\r
	["v1",["opt",["version",1],["struct",\r
		["flags","uint"],\r
		//0,1 unused\r
		["opaque_2",["ref","flags",[2,1]]],//3061/3250\r
		["flag3",["ref","flags",[3,1]]],//3095 most mats without are never used in a model\r
		//4unused\r
		["hasDiffuse",["ref","flags",[5,1]]],//3250, always true\r
		["hasNormal",["ref","flags",[6,1]]],//2878\r
		["hasCompound",["ref","flags",[7,1]]],//2223\r
\r
		["hasUVanimU",["ref","flags",[8,1]]],//44 uv anim u?\r
		["hasUVanimV",["ref","flags",[9,1]]],//49 uv anim v?\r
		["flag10",["ref","flags",[10,1]]],//282 possibly bloom\r
		["flag11",["ref","flags",[11,1]]],//41 metalic?\r
\r
		["flag12",["ref","flags",[12,1]]],//1 use\r
		["flag13",["ref","flags",[13,1]]],//73 glasslike diffraction/lensing? https://runescape.wiki/w/Altar_of_War\r
		["flag14",["ref","flags",[14,1]]],//3179\r
		["flag15",["ref","flags",[15,1]]],//2 use, skybox and https://runescape.wiki/w/Oathbreaker_Outfit\r
\r
		["flag16",["ref","flags",[16,1]]],//3069\r
		["ignore_vertexcol_17",["ref","flags",[17,1]]],//338\r
		["flag18",["ref","flags",[18,1]]],//24 uses different skybox? ghostlike stuff https://runescape.wiki/w/Closure%27s_robes\r
		["flag19",["ref","flags",[19,1]]],//5 use gives aurora effect https://runescape.wiki/w/Bohr\r
\r
		["flag20",["ref","flags",[20,1]]],//40 seems to be used on flants/leafs\r
		["flag21",["ref","flags",[21,1]]],//3250 all materials\r
		//22+ unused\r
		\r
		["diffuse",["opt",["hasDiffuse",1],["struct",\r
			["size","ubyte"],//actual size (some times) equal to 2^(6+size)\r
			["texture","uint"]\r
		]]],\r
		["normal",["opt",["hasNormal",1],["struct",\r
			["size","ubyte"],//actual size (some times) equal to 2^(6+size)\r
			["texture","uint"]\r
		]]],\r
		["compound",["opt",["hasCompound",1],["struct",\r
			["size","ubyte"],//actual size (some times) equal to 2^(6+size)\r
			["texture","uint"]\r
		]]],\r
		["flag13value",["opt",["flag13",1],"float"]],\r
		["flag14value",["opt",["flag14",1],["tuple","ushort","ushort"]]],//0,8520 or 13083 only, referencing other material?\r
		["flag15value",["opt",["flag15",1],"float"]],\r
		["flag18value",["opt",["flag18",1],"float"]],//not sure about location\r
		["flag16value",["opt",["flag16",1],"float"]],\r
		["flag12value",["opt",["flag12",1],"float"]],//not sure about location\r
		["flag11value",["opt",["flag11",1],["tuple","float","float","float"]]],\r
		["flag19value",["opt",["flag19",1],["tuple","float","float","float","float","float"]]],//location unknown\r
		["normalScale",["opt",["hasNormal",1],"float"]],\r
		["flag17value",["opt",["ignore_vertexcol_17",1],"float"]],\r
		["uvanim_u",["opt",["hasUVanimU",1],"short"]],\r
		["uvanim_v",["opt",["hasUVanimV",1],"short"]],\r
\r
		["always_0x0901",["buffer",2,"hex"]],//only a couple with 0001\r
		["unknownbyte0","ubyte"],//always 0\r
		["alphamode","ubyte"],//0,1,2\r
		["alphacutoff",["opt",["alphamode",1],"ubyte"]],//127 most of the time\r
		["unkFFFF",["buffer",2,"hex"]],\r
		["endbyte","ubyte"]//usually equal to max texture size always 0-4\r
	]]],\r
	// seems to be the same as v1 so far\r
	["v2",["opt",["version",2],["struct",\r
		["flags","uint"],\r
		//0,1 unused\r
		["opaque_2",["ref","flags",[2,1]]],//3061/3250\r
		["flag3",["ref","flags",[3,1]]],//3095 most mats without are never used in a model\r
		//4unused\r
		["hasDiffuse",["ref","flags",[5,1]]],//3250, always true\r
		["hasNormal",["ref","flags",[6,1]]],//2878\r
		["hasCompound",["ref","flags",[7,1]]],//2223\r
\r
		["hasUVanimU",["ref","flags",[8,1]]],//44 uv anim u?\r
		["hasUVanimV",["ref","flags",[9,1]]],//49 uv anim v?\r
		["flag10",["ref","flags",[10,1]]],//282 possibly bloom\r
		["flag11",["ref","flags",[11,1]]],//41 metalic?\r
\r
		["flag12",["ref","flags",[12,1]]],//1 use\r
		["flag13",["ref","flags",[13,1]]],//73 glasslike diffraction/lensing? https://runescape.wiki/w/Altar_of_War\r
		["flag14",["ref","flags",[14,1]]],//3179\r
		["flag15",["ref","flags",[15,1]]],//2 use, skybox and https://runescape.wiki/w/Oathbreaker_Outfit\r
\r
		["flag16",["ref","flags",[16,1]]],//3069\r
		["ignore_vertexcol_17",["ref","flags",[17,1]]],//338\r
		["flag18",["ref","flags",[18,1]]],//24 uses different skybox? ghostlike stuff https://runescape.wiki/w/Closure%27s_robes\r
		["flag19",["ref","flags",[19,1]]],//5 use gives aurora effect https://runescape.wiki/w/Bohr\r
\r
		["flag20",["ref","flags",[20,1]]],//40 seems to be used on flants/leafs\r
		["flag21",["ref","flags",[21,1]]],//3250 all materials\r
		//22+ unused\r
		\r
		["diffuse",["opt",["hasDiffuse",1],["struct",\r
			["size","ubyte"],//actual size (some times) equal to 2^(6+size)\r
			["texture","uint"]\r
		]]],\r
		["normal",["opt",["hasNormal",1],["struct",\r
			["size","ubyte"],//actual size (some times) equal to 2^(6+size)\r
			["texture","uint"]\r
		]]],\r
		["compound",["opt",["hasCompound",1],["struct",\r
			["size","ubyte"],//actual size (some times) equal to 2^(6+size)\r
			["texture","uint"]\r
		]]],\r
		["flag13value",["opt",["flag13",1],"float"]],\r
		["flag14value",["opt",["flag14",1],["tuple","ushort","ushort"]]],//0,8520 or 13083 only, referencing other material?\r
		["flag15value",["opt",["flag15",1],"float"]],\r
		["flag18value",["opt",["flag18",1],"float"]],//not sure about location\r
		["flag16value",["opt",["flag16",1],"float"]],\r
		["flag12value",["opt",["flag12",1],"float"]],//not sure about location\r
		["flag11value",["opt",["flag11",1],["tuple","float","float","float"]]],\r
		["flag19value",["opt",["flag19",1],["tuple","float","float","float","float","float"]]],//location unknown\r
		["normalScale",["opt",["hasNormal",1],"float"]],\r
		["flag17value",["opt",["ignore_vertexcol_17",1],"float"]],\r
		["uvanim_u",["opt",["hasUVanimU",1],"short"]],\r
		["uvanim_v",["opt",["hasUVanimV",1],"short"]],\r
\r
		["always_0x0901",["buffer",2,"hex"]],//only a couple with 0001\r
		["unknownbyte0","ubyte"],//always 0\r
		["alphamode","ubyte"],//0,1,2\r
		["alphacutoff",["opt",["alphamode",1],"ubyte"]],//127 most of the time\r
		["unkFFFF",["buffer",2,"hex"]],\r
		["endbyte","ubyte"]//usually equal to max texture size always 0-4\r
	]]]\r
]`,xs=`["struct",\r
	["format","ubyte"],\r
	["version","ubyte"],\r
	["always_0f","ubyte"],\r
\r
	["meshCount","ubyte"],\r
	["unkCount0","ubyte"],\r
	["unkCount1","ubyte"],\r
	["unkCount2","ubyte"],\r
	["unkCount3","ubyte"],\r
	["unkCount4",["match",{"version>=5":"ubyte","other":0}]],\r
\r
	["meshes",["opt","version<=3",["array",["ref","meshCount"],["struct",\r
		["$groupFlags","ubyte"],\r
		["unkint","uint"],\r
		["materialArgument","ushort le"],\r
		["faceCount","ushort le"],\r
\r
		["hasVertices",["ref","$groupFlags",[0,1]]],\r
		["hasVertexAlpha",["ref","$groupFlags",[1,1]]],\r
		["hasFaceBones",["ref","$groupFlags",[2,1]]],\r
		["hasBoneIds",["ref","$groupFlags",[3,1]]],\r
		["isHidden",["ref","$groupFlags",[4,1]]],\r
		["hasSkin",["ref","$groupFlags",[5,1]]],\r
\r
		\r
		["colourBuffer",["opt",["hasVertices",1],["buffer",["ref","faceCount"],"ushort"]]],\r
		["alphaBuffer",["opt",["hasVertexAlpha",1],["buffer",["ref","faceCount"],"ubyte"]]],\r
		["faceboneidBuffer",["opt",["hasFaceBones",1],["buffer",["ref","faceCount"],"ushort"]]],\r
\r
		//the length field for the indexbuffer can overflow when the model has >22k faces!!\r
		//unclear if the the client has some alternative way to get it\r
		["indexBuffers",["array","ubyte",["buffer","ushort le","ushort"]]],\r
\r
		["vertexCount",["match",["ref","hasVertices"],{"=1":"ushort le","=0":0}]],\r
		["positionBuffer",["opt",["hasVertices",1],["buffer",["ref","vertexCount"],"short",3]]],\r
		["normalBuffer",["opt",["hasVertices",1],["match","buildnr",{\r
			">=887":["buffer",["ref","vertexCount"],"byte",3],\r
			">=0":["buffer",["ref","vertexCount"],"short",3]\r
		}]]],\r
		["tagentBuffer",["opt",["hasVertices",1],["match","buildnr",{\r
			//TODO exact buildnr unknown\r
			">=906":["buffer",["ref","vertexCount"],"short",2],\r
			">=0":"null"\r
		}]]],\r
		["uvBuffer",["opt",["hasVertices",1],["match","buildnr",{\r
			">=887":["buffer",["ref","vertexCount"],"ushort",2],\r
			">=0":["buffer",["ref","vertexCount"],"float",2]\r
		}]]],\r
		["boneidBuffer",["opt",["hasBoneIds",1],["buffer",["ref","vertexCount"],"ushort"]]],\r
		\r
		["skin",["opt",["hasSkin",1],["struct",\r
			["skinWeightCount","uint le"],\r
			["skinBoneBuffer",["buffer",["ref","skinWeightCount"],"ushort",1]],\r
			["skinWeightBuffer",["buffer",["ref","skinWeightCount"],"ubyte",1]]\r
		]]]\r
	]]]],\r
	["meshdata",["opt","version>3",["struct",\r
		["$groupFlags","ubyte"],\r
		["unkint","ubyte"],\r
		["faceCount","ushort le"],\r
\r
		["hasVertices",["ref","$groupFlags",[0,1]]],\r
		["hasVertexAlpha",["ref","$groupFlags",[1,1]]],\r
		["hasFaceBones",["ref","$groupFlags",[2,1]]],\r
		["hasBoneIds",["ref","$groupFlags",[3,1]]],\r
		["isHidden",["ref","$groupFlags",[4,1]]],\r
		["hasSkin",["ref","$groupFlags",[5,1]]],\r
\r
		["vertexCount","uint le"],\r
		["positionBuffer",["opt",["hasVertices",1],["buffer",["ref","vertexCount"],"short",3]]],\r
		["normalBuffer",["opt",["hasVertices",1],["buffer",["ref","vertexCount"],"byte",3]]],\r
		["tagentBuffer",["opt",["hasVertices",1],["buffer",["ref","vertexCount"],"short",2]]],\r
		["uvBuffer",["opt",["hasVertices",1],["buffer",["ref","vertexCount"],"ushort",2]]],\r
		["boneidBuffer",["opt",["hasBoneIds",1],["buffer",["ref","vertexCount"],"ushort"]]],\r
		\r
		["skin",["opt","hasSkin==1",["array",["ref","vertexCount"],["struct",\r
			["ids",["array","ushort le","ushort le"]],\r
			["weights",["array","ushort le","ubyte"]]\r
		]]]],\r
		["vertexColours",["opt","hasVertices==1",["buffer",["ref","vertexCount"],"ushort"]]],\r
		["vertexAlpha",["opt","hasVertices==1",["buffer",["ref","vertexCount"],"ubyte"]]],\r
		["vertexFacebones",["opt","hasFaceBones==1",["buffer",["ref","vertexCount"],"ushort"]]],\r
		["renders",["array",["ref","meshCount"],["struct",\r
			["$groupFlags","ubyte"],\r
			["hasVertices",["ref","$groupFlags",[0,1]]],\r
			["hasVertexAlpha",["ref","$groupFlags",[1,1]]],\r
			["hasFaceBones",["ref","$groupFlags",[2,1]]],\r
			["hasBoneIds",["ref","$groupFlags",[3,1]]],\r
			["isHidden",["ref","$groupFlags",[4,1]]],\r
			["hasSkin",["ref","$groupFlags",[5,1]]],\r
			\r
			["unkint","uint"],\r
			["materialArgument","ushort le"],\r
			["unkbyte2","ubyte"],\r
			//this might be groupflags&0x80 for uint indexbuffer\r
			["buf",["match",{\r
				"vertexCount<=0xffff":["buffer","ushort le","ushort"],//u16 little endian\r
				"other":["buffer","ushort le","uint"]//u32 big endian?????\r
			}]]\r
		]]]\r
	]]],\r
\r
	["unk1Buffer",["array",["ref","unkCount1"],["buffer",["match","buildnr",{">=923":39,">=0":37}],"hex"]]],\r
	["unk2Buffer",["array",["ref","unkCount2"],["buffer",["match","buildnr",{">=923":50,">=0":44}],"hex"]]],\r
	["unk3Buffer",["array",["ref","unkCount3"],["buffer",["match","buildnr",{">=923":18,">=0":16}],"hex"]]],\r
	["unk4Buffer",["array",["ref","unkCount4"],["buffer",0]]]\r
]`,vs=`{\r
	"0x01": { "name":                              "models", "read": [ "array", ["match","buildnr",{">=669":"varuint",">=0":"ushort" }]]},\r
	"0x02": { "name":                                "name", "read": "string" },\r
	"0x03": { "name":                             "examine", "read": "string" },//last used 2006\r
	"0x08": { "name":                          "unknown_08", "read": "unsigned byte" },//might be wrong and part of other op\r
	"0x0B": { "name":                          "unknown_0B", "read": "unsigned byte" },//might be wrong and part of other op\r
	"0x0C": { "name":                           "boundSize", "read": "unsigned byte" },\r
	"0x0D": { "name":                              "unk_0D", "read": "ushort" },//last used 2006\r
	"0x0E": { "name":                              "unk_0E", "read": "ushort" },//last used 2006\r
	"0x11": { "name":                              "unk_11", "read": ["array",4,"ushort"]},//last used 2006\r
	"0x1E": { "name":                           "actions_0", "read": "string" },\r
	"0x1F": { "name":                           "actions_1", "read": "string" },\r
	"0x20": { "name":                           "actions_2", "read": "string" },\r
	"0x21": { "name":                           "actions_3", "read": "string" },\r
	"0x22": { "name":                           "actions_4", "read": "string" },\r
	"0x28": { "name":                  "color_replacements", "read": [ "array", ["tuple", "unsigned short", "unsigned short"] ] },\r
	"0x29": { "name":               "material_replacements", "read": [ "array", ["tuple", "unsigned short", "unsigned short"] ] },\r
	"0x2A": { "name":                     "recolourPalette", "read": [ "array", "byte" ] },\r
	"0x2C": { "name":                     "recolor_indices", "read": "unsigned short" },\r
	"0x2D": { "name":                   "retexture_indices", "read": "unsigned short" },\r
	"0x3C": { "name":                          "headModels", "read": [ "array", ["match","buildnr",{">=669":"varuint",">=0":"ushort" }] ] },\r
	"0x5D": { "name":                          "drawMapDot", "read": "false" },\r
	"0x5F": { "name":                              "combat", "read": "unsigned short" },\r
	"0x61": { "name":                             "scaleXZ", "read": "unsigned short" },\r
	"0x62": { "name":                              "scaleY", "read": "unsigned short" },\r
	"0x63": { "name":                          "unknown_63", "read": "true" },\r
	"0x64": { "name":                            "ambience", "read": "byte" },\r
	"0x65": { "name":                       "modelContract", "read": "byte" },\r
	"0x66": { "name":                      "head_icon_data", "read": "unsigned short" },\r
	"0x67": { "name":                          "unknown_67", "read": "unsigned short" },\r
	"0x6A": { "name":                            "morphs_1", "read": [ "struct", \r
																		["unk1", "unsigned int"],\r
																		["unk2", [ "array", ["match","buildnr",{">=910":"varushort",">=0":"ubyte"}], "unsigned short" ]],\r
																		["unk3", ["match","buildnr",{">=525":"uint",">=0":"ushort"}]] ] },\r
	"0x6B": { "name":                          "unknown_6B", "read": "false" },\r
	"0x6D": { "name":                            "slowWalk", "read": "false" },\r
	"0x6F": { "name":                         "animateIdle", "read": "false" },\r
	"0x71": { "name":                              "shadow", "read": [ "struct", ["SrcColor", "unsigned short"], ["DstColor", "unsigned short"] ] },\r
	"0x72": { "name":                "shadowAlphaIntensity", "read": [ "struct", ["Src", "byte"], ["Dst", "byte"] ] },\r
	"0x73": { "name":                          "unknown_73", "read": ["tuple","ubyte","ubyte"] },//removed in 2010\r
	"0x76": { "name":                            "morphs_2", "read": [ "struct",\r
																		["unk1", "unsigned int"],\r
																		["unk2", "unsigned short"],\r
																		["unk3", [ "array",["match","buildnr",{">=910":"varushort",">=0":"ubyte"}], "unsigned short" ]],\r
																		["unk4", "unsigned int"] ] },\r
	"0x77": { "name":                "movementCapabilities", "read": "byte" },\r
	"0x78": { "name":                          "unknown_78", "read": ["tuple","ushort","ushort","ushort","ubyte"] },\r
	"0x79": { "name":                        "translations", "read": [ "array", ["buffer",4,"hex"] ] },\r
	"0x7A": { "name":                              "unk_7A", "read": "unsigned short" },//removed in 2013\r
	"0x7B": { "name":                          "iconHeight", "read": "unsigned short" },\r
	"0x7D": { "name":                    "respawnDirection", "read": "byte" },\r
	"0x7F": { "name":                     "animation_group", "read": "unsigned short" },\r
	"0x80": { "name":                        "movementType", "read": "byte" },\r
	"0x86": { "name":                       "ambient_sound", "read": [ "struct", ["unk1", "unsigned short"], ["unk2", "unsigned short"], ["unk3", "unsigned short"], ["unk4", "unsigned short"], ["unk45", "unsigned byte"] ] },\r
	"0x87": { "name":                           "oldCursor", "read": [ "struct", ["Op", "unsigned byte"], ["Cursor", "unsigned short"] ] },\r
	"0x88": { "name":                          "oldCursor2", "read": [ "struct", ["Op", "unsigned byte"], ["Cursor", "unsigned short"] ] },\r
	"0x89": { "name":                        "attackCursor", "read": "unsigned short" },\r
	"0x8A": { "name":                            "armyIcon", "read": "variable int" },\r
	"0x8C": { "name":                          "unknown_8C", "read": "unsigned byte" },\r
	"0x8D": { "name":                          "unknown_8D", "read": "true" },\r
	"0x8E": { "name":                         "mapFunction", "read": "unsigned short" },\r
	"0x8F": { "name":                          "unknown_8F", "read": "true" },\r
	"0x96": { "name":                   "members_actions_0", "read": "string" },\r
	"0x97": { "name":                   "members_actions_1", "read": "string" },\r
	"0x98": { "name":                   "members_actions_2", "read": "string" },\r
	"0x99": { "name":                   "members_actions_3", "read": "string" },\r
	"0x9A": { "name":                   "members_actions_4", "read": "string" },\r
	"0x9B": { "name":                          "unknown_9B", "read": [ "struct", ["unknown_1", "byte"], ["unknown_2", "byte"], ["unknown_3", "byte"], ["unknown_4", "byte"] ] },\r
	"0x9E": { "name":                     "aByte3076_set_1", "read": "true" },\r
	"0x9F": { "name":                     "aByte3076_set_0", "read": "false" },\r
	"0xA0": { "name":                              "quests", "read": [ "array", "unsigned short" ] },\r
	"0xA2": { "name":                             "dummy_1", "read": "true" },\r
	"0xA3": { "name":                          "unknown_A3", "read": "unsigned byte" },\r
	"0xA4": { "name":                          "unknown_A4", "read": [ "struct", ["unknown_1", "unsigned short"], ["unknown_2", "unsigned short"] ] },\r
	"0xA5": { "name":                          "unknown_A5", "read": "unsigned byte" },\r
	"0xA8": { "name":                          "unknown_A8", "read": "unsigned byte" },\r
	"0xA9": { "name":                          "unknown_A9", "read": "false" },\r
	"0xAA": { "name":                    "action_cursors_0", "read": "unsigned short" },\r
	"0xAB": { "name":                    "action_cursors_1", "read": "unsigned short" },\r
	"0xAC": { "name":                    "action_cursors_2", "read": "unsigned short" },\r
	"0xAD": { "name":                    "action_cursors_3", "read": "unsigned short" },\r
	"0xAE": { "name":                    "action_cursors_4", "read": "unsigned short" },\r
	"0xAF": { "name":                    "action_cursors_5", "read": "unsigned short" },\r
	"0xB2": { "name":                             "dummy_2", "read": "true" },\r
	"0xB3": { "name":                          "unknown_B3", "read": [ "struct", ["unknown_1", "variable short"], ["unknown_2", "variable short"], ["unknown_3", "variable short"], ["unknown_4", "variable short"], ["unknown_5", "variable short"], ["unknown_6", "variable short"] ] },\r
	"0xB4": { "name":                          "unknown_B4", "read": "unsigned byte" },\r
	"0xB5": { "name":                          "unknown_B5", "read": [ "struct", ["unknown_1", "unsigned short"], ["unknown_2", "unsigned byte"] ] },\r
	"0xB6": { "name":                          "unknown_B6", "read": "true" },\r
	"0xB7": { "name":                          "unknown_B7", "read": "unsigned byte" },//might be wrong and part of other op\r
	"0xB8": { "name":                          "unknown_B8", "read": "unsigned byte" },\r
	"0xB9": { "name":                          "unknown_B9", "read": "true" },\r
	"0xBA": { "name":                          "unknown_BA", "read": "modelmorphs"},\r
	"0xDB": { "name":                          "unknown_DB", "read": "ubyte" },//might be wrong and part of other op\r
	"0xF9": { "name":                               "extra", "read": "extrasmap" },\r
	"0xFD": { "name":                          "unknown_FD", "read": "ubyte" }//probably render priority\r
}`,ys=`{\r
	//TODO build nr for count arg unknown															\r
	"0x01": { "name":                              "models", "read":["match","buildnr",{\r
																">=582":["array","ubyte",["struct",\r
																	["type","ubyte"],\r
																	["values",["array","ubyte","item_modelid"]]\r
																]],\r
																"other":["array","ubyte",["struct",\r
																	["values",["array",1,"item_modelid"]],\r
																	["type","ubyte"]\r
																]]}]},\r
	"0x02": { "name":                                "name", "read": "string" },\r
	"0x03": { "name":                             "examine", "read": "string" },//removed in jun 2006\r
	//not sure what this is but they seem identical\r
	"0x05": { "name":                           "models_05", "read":["match","buildnr",{\r
																">=582":["struct",\r
																	["models", ["array","ubyte",["struct",\r
																		["type","ubyte"],\r
																		["values",["array","ubyte","item_modelid"]]\r
																	]]],\r
																	["unktail",["array","ubyte",["tuple","item_modelid","item_modelid"]]]],\r
																"other":["struct",\r
																	["models",["array",1,["struct",\r
																		["type",10],\r
																		["values",["array","ubyte","item_modelid"]],\r
																		["unktail",["array",0,["tuple","item_modelid","item_modelid"]]]\r
																	]]]]\r
																}]},\r
	"0x0E": { "name":                               "width", "read": "unsigned byte" },\r
	"0x0F": { "name":                              "length", "read": "unsigned byte" },\r
	"0x11": { "name":                "probably_nocollision", "read": "true" },\r
	"0x12": { "name":            "maybe_allows_lineofsight", "read": "true" },\r
	"0x13": { "name":                           "deletable", "read": "boolean" },\r
	"0x15": { "name":                 "probably_morphFloor", "read": "true" },\r
	"0x16": { "name":                          "unknown_16", "read": "true" },\r
	"0x17": { "name":                          "occludes_1", "read": "false" },\r
	"0x18": { "name":                  "probably_animation", "read": "variable unsigned int" },\r
	"0x1B": { "name":               "maybe_blocks_movement", "read": "true" },\r
	"0x1C": { "name":                  "wallkit_related_1C", "read": "unsigned byte" },\r
	"0x1D": { "name":                             "ambient", "read": "ubyte" },\r
	"0x1E": { "name":                           "actions_0", "read": "string" },\r
	"0x1F": { "name":                           "actions_1", "read": "string" },\r
	"0x20": { "name":                           "actions_2", "read": "string" },\r
	"0x21": { "name":                           "actions_3", "read": "string" },\r
	"0x22": { "name":                           "actions_4", "read": "string" },\r
	"0x27": { "name":                            "contrast", "read": "byte" },\r
	"0x28": { "name":                  "color_replacements", "read": [ "array", ["tuple", "unsigned short", "unsigned short"] ] },\r
	"0x29": { "name":               "material_replacements", "read": [ "array", ["tuple", "unsigned short", "unsigned short"] ] },\r
	"0x2A": { "name":                     "recolourPalette", "read": [ "array", "byte" ] },\r
	"0x2C": { "name":                          "unknown_2C", "read": "unsigned short" },\r
	"0x2D": { "name":                          "unknown_2D", "read": "unsigned short" },\r
	"0x36": { "name":                          "unknown_36", "read": "true" },\r
	"0x37": { "name":                          "unknown_37", "read": "true" },\r
	"0x38": { "name":                          "unknown_38", "read": "true" },\r
	"0x39": { "name":                          "unknown_39", "read": "true" },\r
	"0x3C": { "name":                          "unknown_3c", "read": "ushort" },//replaced by mapfunction 6B later in ~2010\r
	"0x3E": { "name":                              "mirror", "read": "true" },\r
	"0x40": { "name":                          "unknown_40", "read": "true" },\r
	"0x41": { "name":                              "scaleX", "read": "short" },\r
	"0x42": { "name":                              "scaleY", "read": "short" },\r
	"0x43": { "name":                              "scaleZ", "read": "short" },\r
	"0x44": { "name":                        "mapscene_old", "read": "unsigned short" },//replaced by 0x66\r
	"0x45": { "name":                            "dummy_45", "read": "unsigned byte" },\r
	"0x46": { "name":                          "translateX", "read": "short" },\r
	"0x47": { "name":                          "translateY", "read": "short" },\r
	"0x48": { "name":                          "translateZ", "read": "short" },\r
	"0x49": { "name":                          "unknown_49", "read": "true" },\r
	"0x4A": { "name":                          "unknown_4A", "read": "true" },\r
	"0x4B": { "name":                          "unknown_4B", "read": "unsigned byte" },\r
	"0x4D": { "name":                            "morphs_1", "read": [ "struct",\r
																["unk1", "unsigned int"],\r
																["unk2", [ "array",["match","buildnr",{">=910":"varushort",">=0":"ubyte"}],"item_modelid"]],\r
																["unk3", "item_modelid"] ] },\r
	"0x4E": { "name":             "light_source_related_4E", "read": [ "struct", ["maybe_color", "unsigned short"], ["maybe_radius", "unsigned byte"] ] },\r
	"0x4F": { "name":                          "unknown_4F", "read": [ "struct", ["unknown_1", "unsigned short"], ["unknown_2", "unsigned short"], ["unknown_3", "unsigned byte"], ["unknown_4", ["array", "unsigned short"]] ] },\r
	"0x51": { "name":                          "unknown_51", "read": "unsigned byte" },\r
	"0x52": { "name":                          "unknown_52", "read": "true" },\r
	"0x58": { "name":                          "is_members", "read": "true" },\r
	"0x59": { "name":                          "unknown_59", "read": "true" },\r
	"0x5A": { "name":                          "unknown_5A", "read": "true" },\r
	"0x5B": { "name":                           "isMembers", "read": "true" },\r
	"0x5C": { "name":                            "morphs_2", "read": [ "struct",\r
																["unk1", "unsigned int"],\r
																["unk2", "item_modelid"],\r
																["unk3", [ "array", ["match","buildnr",{">=910":"varushort",">=0":"ubyte"}],"item_modelid"]],\r
																["unk4", "item_modelid"] ] },\r
	"0x5D": { "name":                             "tilt_xz", "read": [ "tuple", "byte", "byte"] },\r
	"0x5E": { "name":                         "under_water", "read": "true" },\r
	"0x5F": { "name":         "probably_morphCeilingOffset", "read": ["match","buildnr",{">=596":"short","other":0}]},//TODO buildnr somewhere between 580-728\r
	"0x60": { "name":                          "unknown_60", "read": "true" },\r
	"0x61": { "name":        "ground_decoration_related_61", "read": "true" },\r
	"0x62": { "name":                "has_animated_texture", "read": "true" },\r
	"0x63": { "name":                            "dummy_63", "read": [ "struct", ["unknown_2", "unsigned byte"], ["unknown_1", "unsigned short"] ] },\r
	"0x64": { "name":                            "dummy_64", "read": [ "struct", ["unknown_2", "unsigned byte"], ["unknown_1", "unsigned short"] ] },\r
	"0x65": { "name":                           "unused_65", "read": "unsigned byte" },\r
	"0x66": { "name":                            "mapscene", "read": "unsigned short" },\r
	"0x67": { "name":                          "occludes_2", "read": "false" },\r
	"0x68": { "name":             "interactable_related_68", "read": "unsigned byte" },\r
	"0x69": { "name":                      "invertMapScene", "read": "true" },\r
	"0x6A": { "name":                          "headModels", "read": [ "array", ["struct", ["model", "varuint"], ["unknown_2", "unsigned byte"]] ] },\r
	"0x6B": { "name":                         "mapFunction", "read": "unsigned short" },\r
	"0x71": { "name":                          "unknown_71", "read": "unsigned byte" },\r
	"0x96": { "name":                    "members_action_1", "read": "string" },\r
	"0x97": { "name":                    "members_action_2", "read": "string" },\r
	"0x98": { "name":                    "members_action_3", "read": "string" },\r
	"0x99": { "name":                    "members_action_4", "read": "string" },\r
	"0x9A": { "name":                    "members_action_5", "read": "string" },\r
	"0xA0": { "name":                          "unknown_A0", "read": [ "array", "unsigned short" ] },\r
	"0xA2": { "name":                        "singleuse_A2", "read": "int" },\r
	"0xA3": { "name":                          "unknown_A3", "read": [ "struct", ["unknown_1", "byte"], ["unknown_2", "byte"], ["unknown_3", "byte"], ["unknown_4", "byte"] ] },\r
	"0xA4": { "name":                        "singleuse_A4", "read": "short" },\r
	"0xA5": { "name":                        "singleuse_A5", "read": "short" },\r
	"0xA6": { "name":                        "singleuse_A6", "read": "unsigned short" },\r
	"0xA7": { "name":                     "floor_thickness", "read": "unsigned short" },\r
	"0xA8": { "name":                           "unused_a8", "read": "true" },\r
	"0xA9": { "name":                           "unused_a9", "read": "true" },\r
	"0xAA": { "name":                  "wallkit_related_AA", "read": "variable unsigned short" },\r
	"0xAB": { "name":            "possibly_wallkit_skew_AB", "read": "variable unsigned short" },\r
	"0xAD": { "name":              "lightsource_related_AD", "read": [ "struct", ["unknown_1", "unsigned short"], ["unknown_2", "unsigned short"] ] },\r
	"0xB1": { "name":                    "can_change_color", "read": "true" },\r
	"0xB2": { "name":                          "unknown_B2", "read": "unsigned byte" },\r
	"0xBA": { "name":                          "unknown_BA", "read": "unsigned byte" },\r
	"0xBC": { "name":                            "dummy_bc", "read": "true" },\r
	"0xBD": { "name":                   "treerockordoor_BD", "read": "true" },\r
	"0xBE": { "name":                    "action_cursors_0", "read": "unsigned short" },\r
	"0xBF": { "name":                    "action_cursors_1", "read": "unsigned short" },\r
	"0xC0": { "name":                    "action_cursors_2", "read": "unsigned short" },\r
	"0xC1": { "name":                    "action_cursors_3", "read": "unsigned short" },\r
	"0xC2": { "name":                    "action_cursors_4", "read": "unsigned short" },\r
	"0xC3": { "name":                    "action_cursors_5", "read": "unsigned short" },\r
	"0xC4": { "name":            "tileplacement_related_c4", "read": "unsigned byte" },\r
	"0xC5": { "name":                     "clan_citadel_C5", "read": "unsigned byte" },\r
	"0xC6": { "name":                        "invisible_c6", "read": "true" },\r
	"0xC7": { "name":                     "flooroverlay_c7", "read": "true" },\r
	"0xC8": { "name":                        "singleuse_C8", "read": "true" },\r
	"0xC9": { "name":                          "unknown_C9", "read": [ "struct", ["unknown_1", "variable short"], ["unknown_2", "variable short"], ["unknown_3", "variable short"], ["unknown_4", "variable short"], ["unknown_5", "variable short"], ["unknown_6", "variable short"] ] },\r
	"0xCA": { "name":						 "singleuse_CA", "read": "unsigned byte" },\r
	"0xCB": { "name":						   "unknown_CB", "read": "true" },\r
	"0xCC": { "name":						   "unknown_CC", "read": ["array","ubyte",["buffer",27,"hex"]] },\r
	"0xCD": { "name":						   "unknown_CD", "read": "modelmorphs" },\r
	"0xF9": { "name":                               "extra", "read": "extrasmap" }\r
}`,bs=`["struct",\r
    ["$idcount",0],\r
    ["mats",["chunkedarray","ushort",\r
        [["id",["accum","$idcount",1,"postadd"]]],\r
        [["hasprops","ubyte"]],//always 1, rarely 0\r
        [["unk1",["opt",["hasprops",0,"eqnot"],"ubyte"]]],//1 or 0\r
        [["unk2",["opt",["hasprops",0,"eqnot"],"ubyte"]]],//1 or 0       \r
        [["unk3",["match","buildnr",{">627":null,"other":["opt",["hasprops",0,"eqnot"],"ubyte"]}]]],//mostly 00, 1x 0001 1x 0080\r
        [["unk4",["opt",["hasprops",0,"eqnot"],"ushort"]]],//mostly 00, 1x 0001 1x 0080\r
        [["basecolorfraction",["opt",["hasprops",0,"eqnot"],"ubyte"]]],//00, or ff, some in between\r
        [["unk6",["opt",["hasprops",0,"eqnot"],"ubyte"]]],//0-5\r
        [["unk7",["opt",["hasprops",0,"eqnot"],"ubyte"]]],//0-4 1x 82\r
        [["basecolor",["opt",["hasprops",0,"eqnot"],"ushort"]]],\r
        [["unk10",["match","buildnr",{">554":["opt",["hasprops",0,"eqnot"],"ubyte"],"other":null}]]],\r
        [["unk11",["match","buildnr",{">554":["opt",["hasprops",0,"eqnot"],"ubyte"],"other":null}]]],\r
        [["unk20",["match","buildnr",{">554":["opt",["hasprops",0,"eqnot"],"ubyte"],"other":null}]]],\r
        [["unk21",["match","buildnr",{">554":["opt",["hasprops",0,"eqnot"],"ubyte"],"other":null}]]],\r
        [["unk30",["match","buildnr",{">554":["opt",["hasprops",0,"eqnot"],"ubyte"],"other":null}]]],\r
        [["unk31",["match","buildnr",{">554":["opt",["hasprops",0,"eqnot"],"ubyte"],"other":null}]]],\r
        [["unk32",["match","buildnr",{">554":["opt",["hasprops",0,"eqnot"],"ubyte"],"other":null}]]],\r
        [["unk33",["match","buildnr",{">554":["opt",["hasprops",0,"eqnot"],"ubyte"],"other":null}]]],\r
        [["unk40",["match","buildnr",{">578":["opt",["hasprops",0,"eqnot"],["buffer",5,"hex"]],"other":null}]]],\r
        [["unk41",["match","buildnr",{">597":["opt",["hasprops",0,"eqnot"],"ubyte"],"other":null}]]]\r
    ]]\r
]`,ws=`["struct",\r
	["footbytes",["match","buildnr",{">=764":65535,">=0":["footer",2,"ushort"]}]],\r
	["colanimcount",["match","buildnr",{">=764":["footer",2,"ushort"],">=0":0}]],\r
	["unkcount0",["match","buildnr",{">=764":["footer",2,"ushort"],">=0":0}]],\r
	["uvcount",["match",["ref","footbytes"],{\r
		"0xffff":["footer",2,"ushort"],\r
		"other":0\r
	}]],\r
	["indexbufsize",["match",["ref","footbytes"],{\r
		"0xffff":["footer",2,"ushort"],\r
		"other":["ref","footbytes"]\r
	}]],\r
	["zsize",["footer",2,"ushort"]],\r
	["ysize",["footer",2,"ushort"]],\r
	["xsize",["footer",2,"ushort"]],\r
	["hasbones",["footer",1,"bool"]],\r
	["hasmaterials",["match",["ref","footbytes"],{\r
		"0xffff":["footer",1,"bool"],\r
		"other":false\r
	}]],\r
	["flag3",["footer",1,"bool"]],//called transgroups in runelite\r
	["hasalpha",["footer",1,"bool"]],\r
	["priority",["footer",1,"ubyte"]],\r
	["extraflags",["footer",1,"ubyte"]],\r
	["texmapcount",["match","buildnr",{">=764":["footer",2,"ushort"],">=0":["footer",1,"ubyte"]}]],\r
	["facecount",["footer",2,"ushort"]],\r
	["vertcount",["footer",2,"ushort"]],\r
\r
	["header1",["match","buildnr",{">=754":"ubyte",">=0":0}]],\r
	["header2",["match","buildnr",{">=764":"ubyte",">=0":0}]],\r
	["modelversion",["match","buildnr",{\r
		">=764":"ubyte",\r
		"other":["match",["ref","extraflags"],{\r
			"&8":["footer",1,"ubyte"],\r
			"other":0\r
		}]\r
	}]],\r
	["vertdatasize",["match","buildnr",{\r
		">=764":["ref","unkcount0"],\r
		"other":["match",["ref","extraflags"],{\r
			"&0x10":["footer",2,"ushort"],\r
			"other":["ref","vertcount"]\r
		}]\r
	}]],\r
\r
	["texmap_vertcount",0],\r
	["texmap_projectioncount",0],\r
	["texmap_transsize",0],\r
	["texflags",["array",["ref","texmapcount"],\r
		["match",["match",["ref","footbytes"],{"65535":"ubyte","other":0}],{\r
			"0":["struct",\r
				["type",0],\r
				["vertindex",["accum","texmap_vertcount",1,"postadd"]]\r
			],\r
			"1":["struct",\r
				["type",1],\r
				["projection",["accum","texmap_projectioncount",1,"postadd"]],\r
				["speed",["accum","texmap_transsize",1,"postadd"]]\r
			],\r
			"2":["struct",\r
				["type",2],\r
				["projection",["accum","texmap_projectioncount",1,"postadd"]],\r
				["speed",["accum","texmap_transsize",3,"postadd"]]\r
			],\r
			"3":["struct",\r
				["type",3],\r
				["projection",["accum","texmap_projectioncount",1,"postadd"]],\r
				["speed",["accum","texmap_transsize",1,"postadd"]]\r
			]\r
		}]]\r
	],\r
	["vertflags",["buffer",["ref","vertcount"],"ubyte"]],//0-7 flags, whether xyz are different from previous vertex\r
	["mode_1",["match",["ref","footbytes"],{\r
		"0xffff":["opt",["extraflags",0,"bitflag"],["buffer",["ref","facecount"],"ubyte"]],\r
		"other":null\r
	}]],\r
	["tritype",["buffer",["ref","facecount"],"ubyte"]],//1-4 are types, flag 8 grabs a uv pair from the texuvs struct\r
	["facepriority",["opt",["priority",255],["buffer",["ref","facecount"],"ubyte"]]],\r
	["unk1",["opt",["flag3",1],["buffer",["match","buildnr",{">=764":["ref","colanimcount"],">=0":["ref","facecount"]}]]]],//"transgroups"\r
	["mode_2",["match",["ref","footbytes"],{\r
		"0xffff":null,\r
		"other":["opt",["extraflags",0,"bitflag"],["buffer",["ref","facecount"],"ubyte"]]\r
	}]],\r
	["boneids",["opt",["hasbones",1],["buffer",["ref","vertdatasize"]]]],\r
	["alpha",["opt",["hasalpha",1],["buffer",["ref","facecount"]]]],\r
	["indexbuffer",["buffer",["ref","indexbufsize"]]],\r
	["material",["match",["ref","footbytes"],{\r
		"0xffff":["opt",["hasmaterials",1],["buffer",["ref","facecount"],"ushort"]],\r
		"other":null\r
	}]],\r
	["uvs",["buffer",["ref","uvcount"]]],\r
	["colors",["buffer",["ref","facecount"],"ushort"]],\r
	["texmap_verts_1",["match",["ref","footbytes"],{\r
		"0xffff":null,\r
		"other":["array",["ref","texmap_vertcount"],["tuple","ushort","ushort","ushort"]]\r
	}]],\r
	["posx",["buffer",["ref","xsize"]]],\r
	["posy",["buffer",["ref","ysize"]]],\r
	["posz",["buffer",["ref","zsize"]]],\r
	["texmap_verts_2",["match",["ref","footbytes"],{\r
		"0xffff":["array",["ref","texmap_vertcount"],["tuple","ushort","ushort","ushort"]],\r
		"other":null\r
	}]],\r
	["texmap_projections",["chunkedarray",["ref","texmap_projectioncount"],[\r
		["normal",["tuple","short","short","short"]]\r
	],[\r
		["scale",["tuple",\r
			["match",["ref","modelversion"],{">=15":"unsigned tribyte",">=0":"ushort"}],\r
			["match",["ref","modelversion"],{">=14":"unsigned tribyte",">=0":"ushort"}],//14 is not a typo\r
			["match",["ref","modelversion"],{">=15":"unsigned tribyte",">=0":"ushort"}]\r
		]]\r
	],[\r
		["rotation","ubyte"]\r
	],[\r
		["direction","ubyte"]\r
	]]],\r
	["texmap_translates",["array",["ref","texmap_transsize"],"ubyte"]],\r
	["particles",["opt",["extraflags",1,"bitflag"],["array","ubyte",["struct",\r
		["texture","ushort"],\r
		["faceid","ushort"]\r
	]]]],\r
	["effectors",["opt",["extraflags",1,"bitflag"],["array","ubyte",["struct",\r
		["effector","ushort"],\r
		["vertex","ushort"]\r
	]]]],\r
	["billboards",["opt",["extraflags",2,"bitflag"],["array","ubyte",["struct",\r
		["unk1","ushort"],\r
		["unk2","ushort"],\r
		["unk3","ubyte"],\r
		["unk4","ubyte"]\r
	]]]],\r
	["texuvs",["opt",["extraflags",7,"bitflag"],["struct",\r
		["headoffset",["footer",1,"ubyte"]],//always 7?\r
		["indexsize",["footer",2,"ushort"]],\r
		["datasize",["footer",2,"ushort"]],\r
		["coordcount",["footer",2,"ushort"]],\r
		["index",["buffer",["ref","indexsize"],"ubyte"]],\r
		["vertex",["buffer",["ref","vertcount"],"ubyte"]],\r
		["udata",["array",["ref","coordcount"],"short"]],\r
		["vdata",["array",["ref","coordcount"],"short"]]\r
	]]],\r
	["unusedendbytes",["match",["ref","footbytes"],{\r
		"0xffff":["match","buildnr",{\r
			">=526":null,\r
			"other":["array","ubyte",["tuple","ushort","ushort","ushort","int"]]\r
		}],\r
		"other":null\r
	}]]\r
]`,Es=`["struct",\r
    ["color","ushort"],\r
    ["bool0","bool"],\r
    ["bool1","bool"],//always true\r
    ["spriteid","ushort"],\r
    ["always00",["buffer",6,"hex"]]\r
]`,_s=`{\r
	"0x04": { "name":              "unk04", "read": "true" },\r
	"0x65": { "name":              "type", "read": ["struct",\r
		["vartype","varushort"],\r
		["$primitive","ubyte"],\r
		["defaultint",["opt",["$primitive",2],"int"]],\r
		["defaultstring",["opt",["$primitive",5],"string"]]\r
	] }\r
}`,Ss=`{\r
	"0x01": { "name":                           "unk01", "read": ["array",4,"ushort"] },\r
	"0x02": { "name":                           "unk02", "read": ["array",1,"ushort"] },\r
	"0x03": { "name":                           "unk03", "read": ["array",4,"ushort"] },\r
	"0x04": { "name":                           "unk04", "read": ["array",1,"ushort"] },\r
	"0x05": { "name":                           "unk05", "read": ["array",1,"ushort"] },\r
	"0x06": { "name":                           "unk06", "read": ["buffer",8,"hex"] },\r
	"0x07": { "name":                           "unk07", "read": ["array",2,"ushort"] },\r
	"0x08": { "name":                           "unk08", "read": ["array",2,"ushort"] },\r
	"0x09": { "name":                           "unk09", "read": ["array","ubyte","ushort"] },\r
	"0x0A": { "name":                           "unk0A", "read": ["array","ubyte","ushort"] },\r
\r
	"0x0C": { "name":                           "unk0C", "read": "ubyte" },\r
	"0x0D": { "name":                           "unk0D", "read": "ubyte" },\r
	"0x0E": { "name":                           "unk0E", "read": "ushort" },\r
	"0x0F": { "name":                           "unk0F", "read": "ushort" },\r
	"0x10": { "name":                           "unk10", "read": ["tuple","ubyte","short","short","ubyte"] },\r
\r
	"0x12": { "name":                           "unk12", "read": ["buffer",4,"hex"] },\r
	"0x13": { "name":                           "unk13", "read": "ubyte" },\r
	"0x14": { "name":                           "unk14", "read": "ubyte" },\r
	"0x15": { "name":                           "unk15", "read": "ubyte" },\r
	"0x16": { "name":                           "unk16", "read": ["array",2,"ushort"] },\r
	"0x17": { "name":                           "unk17", "read": "ubyte" },\r
	"0x18": { "name":                           "unk18", "read": "ubyte" },\r
	"0x19": { "name":                           "unk19", "read": ["array","ubyte","ushort"] },\r
	"0x1A": { "name":                           "unk1A", "read": "true" },\r
	"0x1B": { "name":                           "unk1B", "read": "ushort" },\r
	"0x1C": { "name":                           "unk1C", "read": ["struct",\r
		["unk0","ubyte"],\r
		["flags","ubyte"],\r
		["unkmain",["buffer",4,"hex"]],\r
		["opt2",["opt",["flags",1,"bitflag"],"ubyte"]],\r
		["opt4",["opt",["flags",2,"bitflag"],"ushort"]],\r
		["opt8",["opt",["flags",3,"bitflag"],"ushort"]],\r
		["opt16",["opt",["flags",4,"bitflag"],["tuple","ushort","ubyte"]]],\r
		["unk2","ushort"]\r
	] },\r
	"0x1D": { "name":                           "unk1D", "read": ["struct",\r
		["unk1",["array","ubyte","ushort"]],\r
		["unk2","ushort"]\r
	] },\r
	"0x1E": { "name":                           "unk1E", "read": "true" },\r
	"0x1F": { "name":                           "unk1F", "read": ["array",2,"ushort"] },\r
	"0x20": { "name":                           "unk20", "read": "true" },\r
	"0x21": { "name":                           "unk21", "read": "true" },//always followed by 0x1a\r
	"0x22": { "name":                           "unk22", "read": "true" },\r
	"0x23": { "name":                           "unk23", "read": ["struct",\r
		["unk1",["array","ubyte",["tuple","short","ubyte"]]],\r
		["unk2","ushort"]\r
	] },\r
	"0x24": { "name":                           "unk24", "read": "true" },\r
\r
	// "0x24": { "name":                           "unk24", "read": "true" },\r
\r
	// "0x22": { "name":                           "unk22", "read": "true" }\r
}`,Ds=`{\r
	//0-7, often 0,-1,-10,-45\r
	"0x01": { "name":                           "unk01", "read": ["tuple","ubyte","byte"] },\r
\r
	//weird, often at min or max of int range\r
	"0x03": { "name":                           "unk03", "read": ["array",6,"short"] },\r
	"0x04": { "name":                           "unk04", "read": ["struct",\r
		["unk0","ubyte"],//always 1 or 2\r
		["unk1_0000","ushort"],//always 0\r
		["unk2","ushort"]//weird, 1-496\r
	] },\r
\r
	//always 2\r
	"0x06": { "name":                           "unk06", "read": "ubyte" },\r
\r
	//these flags often come together\r
	//36/57 uses\r
	"0x08": { "name":                           "unk08", "read": "true" },\r
	//37/57 uses\r
	"0x09": { "name":                           "unk09", "read": "true" },\r
	//31/57 uses\r
	"0x0A": { "name":                           "unk0A", "read": "true" }\r
}`,As=`["nullarray",["struct",\r
    ["op",["ref","$opcode"]],\r
    ["args",["match",["ref","$opcode"],{\r
        "0x01":["buffer",8,"hex"]\r
    }]]\r
]]`,Cs=`{\r
	"0x01": { "name":                     "text", "read": "string" },\r
	"0x02": { "name":            "subcategories", "read": ["array","ubyte",["struct",["id","ushort"],["hotkey","ubyte"]]]},\r
	"0x03": { "name":                    "lines", "read": ["array","ubyte",["struct",["id","ushort"],["hotkey","ubyte"]]]},\r
	"0x04": { "name":            "nonsearchable", "read": "true" }\r
}`,Ts=`{\r
	"0x01": { "name":               "text", "read": "string" },\r
	"0x02": { "name":            "replies", "read": ["array","ubyte","ushort"]},\r
	"0x03": { "name":            "inserts", "read": ["array","ubyte",["struct",\r
		["type","ushort"],\r
		["pickEnum",["opt",["type",0],"ushort"]],\r
		["pickTtem",["opt",["type",1],"true"]],\r
		["skillLevel",["opt",["type",4],"ushort"]],\r
		["varplayerEnum",["opt",["type",6],["struct",["enum","ushort"],["varbit","ushort"]]]],\r
		["varplayer",["opt",["type",8],"ushort"]],\r
		["varbit",["opt",["type",9],"ushort"]],\r
		["pickTradeableItem",["opt",["type",10],"true"]],\r
		["skillLevelEnum",["opt",["type",11],["struct",["enum","ushort"],["skill","ushort"]]]],\r
		["friendsChatCount",["opt",["type",12],"true"]],\r
		["varWorld",["opt",["type",14],"ushort"]],\r
		["combatlevel",["opt",["type",15],"true"]],\r
		["varbitEnumstring",["opt",["type",16],["struct",["enum","ushort"],["varbit","ushort"]]]]\r
	]]},\r
	"0x04": { "name":      "nonsearchable", "read": "true" }\r
}`,Fs=`["struct",\r
	["$minorindex","-1"],\r
	["cachemajors",["match","buildnr",{\r
		">=605":["array","ubyte",["struct",\r
			["minor",["accum","$minorindex","1"]],\r
			["crc","uint"],\r
			["version","uint"],\r
			["subindexcount",["match","buildnr",{">=816":"uint","other":0}]],\r
			["integer_10",["match","buildnr",{">=816":"uint","other":0}]],\r
			["maybe_checksum1",["buffer",64,"hex"]]\r
		]],\r
		"other":["nullarray",["bytesleft"],["struct",\r
			["minor",["accum","$minorindex","1"]],\r
			["crc","uint"],\r
			["version",["match","buildnr",{">=457":"uint","other":0}]],\r
			["subindexcount",0]\r
		]]\r
	}]],\r
	//512bytes of data but variable length encoding that makes is 511-513\r
	["maybe_proper_checksum",["buffer",["bytesleft"],"hex"]]\r
]`,ks=`{\r
	"0x01": { "name":                              "frames", "read": ["chunkedarray","unsigned short",\r
																[["framelength","unsigned short"]],\r
																[["frameidlow","unsigned short"]],\r
																[["frameidhi","unsigned short"]]\r
															]},\r
	"0x02": { "name":                          "unknown_02", "read": "ushort" },\r
	"0x03": { "name":                          "unknown_03", "read": ["array","ubyte","ubyte"] },\r
	"0x04": { "name":                          "unknown_04", "read": "true" },\r
	"0x05": { "name":                          "unknown_05", "read": "ubyte" },\r
	"0x06": { "name":                          "unknown_06", "read": "ushort" },\r
	"0x07": { "name":                          "unknown_07", "read": "ushort" },\r
	"0x08": { "name":                          "unknown_08", "read": "ubyte" },\r
	"0x09": { "name":                          "unknown_09", "read": "ubyte" },\r
	"0x0A": { "name":                          "unknown_0A", "read": "ubyte" },\r
	"0x0B": { "name":                          "unknown_0B", "read": "ubyte" },\r
	"0x0C": { "name":                          "unknown_0C", "read": ["chunkedarray","ubyte",\r
																[["framelength","unsigned short"]],\r
																[["frameidlow","unsigned short"]]\r
															]},\r
	"0x0D": { "name":                          "unknown_0D", "read": ["array","unsigned short",["struct",\r
																["$keys","unsigned byte"],\r
																["default",["opt",["$keys",0,"eqnot"],"unsigned short"]],\r
																["weirdbyte",["opt",["$keys",0,"eqnot"],"unsigned byte"]],\r
																["extras",["array",["ref","$keys",null,-1],"unsigned short"]] \r
															]]},\r
	"0x0E": { "name":                          "unknown_0E", "read": "true" },\r
	"0x0F": { "name":                          "unknown_0F", "read": "true" },\r
	"0x10": { "name":                          "unknown_10", "read": "true" },\r
	"0x11": { "name":                          "unknown_11", "read": "ubyte" },\r
	"0x12": { "name":                          "unknown_12", "read": "true" },\r
	"0x13": { "name":                          "unknown_13", "read": "unsigned short" },\r
	"0x14": { "name":                          "unknown_14", "read": ["buffer",5,"hex"] },\r
	"0x16": { "name":                          "unknown_16", "read": "unsigned byte" },\r
	"0x18": { "name":                          "unknown_18", "read": "unsigned short" },\r
	"0x19": { "name":                  "skeletal_animation", "read": "unsigned short" },\r
	"0x1a": { "name":                      "skeletal_range", "read": ["tuple","ushort","ushort"] },	\r
	"0x1b": { "name":                          "unknown_1B", "read": "ubyte" },	\r
\r
	"0x70": { "name":                          "unknown_70", "read": ["chunkedarray","unsigned short",\r
																[["intlow","unsigned short"]],\r
																[["maybe_file","unsigned short"]]] },\r
	"0x77": { "name":                          "unknown_77", "read": ["tuple","unsigned short","unsigned byte"] },\r
	"0x78": { "name":                          "unknown_78", "read": ["tuple","unsigned short","unsigned short","unsigned short"] },\r
\r
	"0xF9": { "name":                               "extra", "read": "extrasmap" }\r
}`,Is=`["struct",\r
	["header","ubyte"],\r
	["framebase","ushort"],\r
	["endtime","uint"],\r
	["unk_always0","ubyte"],\r
	["tracks",["array","ushort",["struct",\r
		//seems to correlate to action type \r
		//1=standard bone(1-9) 2=unknown(7x 3, 14x 7, 14x 8), 3=unknown(10-15), 3=unknown(16)\r
		["unk_1to4","ubyte"],\r
		//boneid+0x40, or boneid+0x4040 if 2 byte//TODO is this smartShortBias?\r
		["boneid","varushort"],\r
		//animation type 1-3=rotatexyz, 4-6=translatexyz 7-9=scalexyz\r
		["type_0to9","ubyte"],\r
		["$packetlength","ushort"],\r
		//interpolation mode? 0=euler, 1=linear, 3lin/log???\r
		//0=rotation (1,2,3), 1=translation (4,5,6,13,14,15,some 16), 3=scale (7,8,9,10,11,12,some 16,some 3)\r
		["bonetype_01or3","ubyte"],\r
		["always0","ushort"],\r
		["flag2","bool"],\r
		["chunks",["array",["ref","$packetlength"],["struct",\r
			["time","ushort"],\r
			["value",["array",5,"float"]]\r
		]]]\r
	]]]\r
]`,Bs=`{\r
	"0x01": { "name":                           "model", "read": "varuint" },\r
	"0x02": { "name":                        "sequence", "read": "varuint" },\r
	"0x04": { "name":                          "scaleX", "read": "ushort" },\r
	"0x05": { "name":                       "scaleYorZ", "read": "ushort" },\r
	"0x06": { "name":                        "rotation", "read": "ushort" },\r
	"0x07": { "name":                         "ambient", "read": "ubyte" },\r
	"0x08": { "name":                        "contrast", "read": "ubyte" },\r
	"0x0a": { "name":                           "unk0a", "read": "true" },\r
	"0x28": { "name":                  "replace_colors", "read": ["array","ubyte",["tuple","ushort","ushort"]] },\r
	"0x29": { "name":               "replace_materials", "read": ["array","ubyte",["tuple","ushort","ushort"]] },\r
	"0x2c": { "name":                           "unk2c", "read": "ushort" },\r
	"0x2e": { "name":                           "unk2e", "read": "true" }\r
}`,Ms=`{\r
	"0xF9": { "name":              "extra", "read": "extrasmap" }\r
}`,Ns=`{\r
    "variable unsigned long":   "varuint",\r
    "variable unsigned int":    "varuint",\r
    "variable unsigned short":  "varushort",\r
    "unsigned variable long":   "varuint",\r
    "unsigned variable int":    "varuint",\r
    "unsigned variable short":  "varushort",\r
\r
    "variable long":    "varint",\r
    "variable int":     "varint",\r
    "variable short":   "varshort",\r
\r
    "unsigned long":    "uint",\r
    "unsigned int":     "uint",\r
    "unsigned short":   "ushort",\r
    "unsigned byte":    "ubyte",\r
\r
    "long":             "int",\r
	\r
    "ushort le":        "ushort_le",\r
    "uint le":          "uint_le",\r
\r
	"playeritem":       ["playeritem"],\r
\r
	"playeritemedit":   ["struct",\r
		["$type","ubyte"],\r
		["model",["opt",["$type",0,"bitflag"],["array",["itemvar","modelcount"],"varuint"]]],\r
		["flag2",["opt",["$type",1,"bitflag"],"true"]],\r
		["color",["opt",["$type",2,"bitflag"],["struct",\r
			["$coltype","ushort"],\r
			["col2",["opt",["$coltype",12816],["array",["itemvar","colorcount"],"ushort"]]],\r
			["col4",["opt",["$coltype",8719],["array",4,["tuple","ushort","ushort"]]]]\r
		]]],\r
		["material",["opt",["$type",3,"bitflag"],["struct",\r
			["header","ubyte"],\r
			["materials",["array",["itemvar","matcount"],"ushort"]]\r
		]]]\r
	],\r
	"modelmorphs":      ["struct",\r
		["unk0","ushort"],\r
		["varbit","ushort"],\r
		["varp","ushort"],\r
		["flags","ubyte"],\r
		["multimodel",["opt","flags&1",["array","ubyte",["struct",\r
			["value","ubyte"],\r
			["models",["array","ubyte",["struct",\r
				["unk1","ushort"],\r
				["unk2","ushort"],\r
				["unk3","varuint"],\r
				["extracount","ubyte"],\r
				["extra1",["opt","extracount>=1","ubyte"]],\r
				["extra2",["opt","extracount>=2","ubyte"]],\r
				["extra3",["opt","extracount>=3","ubyte"]]\r
			]]]\r
		]]]],\r
		["multiheadmodel",["opt","flags&2",["array","ubyte",["struct",\r
			["value","ubyte"],\r
			["models",["array","ubyte",["struct",\r
				["unk1","ushort"],\r
				["unk2","ushort"],\r
				["unk3","varuint"]\r
			]]]\r
		]]]],\r
		["multiretex",["opt","flags&4",["array","ubyte",["struct",\r
			["value","ubyte"],\r
			["models",["array","ubyte",["struct",\r
				["unk1","ushort"],\r
				["unk2","ushort"],\r
				["unk3","ushort"],\r
				["unk4","ushort"]\r
			]]]\r
		]]]],\r
		["multirecol",["opt","flags&8",["array","ubyte",["struct",\r
			["value","ubyte"],\r
			["models",["array","ubyte",["struct",\r
				["unk1","ushort"],\r
				["unk2","ushort"],\r
				["unk3","ushort"],\r
				["unk4","ushort"]\r
			]]]\r
		]]]],\r
		["multiretint",["opt","flags&16",["array","ubyte",["struct",\r
			["value","ubyte"],\r
			["models",["array","ubyte",["struct",\r
				["unk1","ushort"],\r
				["unk2","ushort"],\r
				["unk3","uint"]\r
			]]]\r
		]]]],\r
		["default","ushort"]\r
	],\r
\r
	"ubyte":            "unsigned byte",\r
	"ushort":           "unsigned short",\r
	"uint":             "unsigned int",\r
	"varushort":        "variable unsigned short",\r
	"varuint":          "variable unsigned int",\r
	"varshort":         "variable short",\r
	"varint":           "variable int",\r
\r
    "unsigned tribyte": "utribyte",\r
	\r
    "tailed unsigned short":  ["tailed varushort"],\r
\r
    "boolean":          "bool",\r
\r
    //obsolete backward compat\r
    "true":             true,\r
    "false":            false,\r
    "0":                0,\r
    "1":                1,\r
    "-1":               -1,\r
    "null":             null,\r
\r
	"extrasmap":        [ "array","ubyte",["struct",\r
		["$type","unsigned byte"],\r
		["prop","unsigned tribyte"],\r
		["intvalue",["opt",["$type",0],"int"]],\r
		["stringvalue",["opt",["$type",1],"string"]]\r
	]],\r
\r
	"buildnr":          ["buildnr"],//needs to be in array to get invoked as function\r
\r
	"item_modelid":     ["match","buildnr",{">=670":"varuint",">=0":"ushort"}],\r
	"animid":           ["match","buildnr",{">=670":"varnullint",">=0":"ushort"}],\r
\r
	"uivalues":         ["array","ubyte",["match","ubyte",{"0":"int","1":"string"}]],\r
	"uivaluesint":		["array","ubyte","int"]\r
}`,Vn={buffer:{constr:ke},hex:{constr:Uint8Array},byte:{constr:Int8Array},ubyte:{constr:Uint8Array},short:{constr:Int16Array},ushort:{constr:Uint16Array},int:{constr:Int32Array},uint:{constr:Uint32Array},float:{constr:Float32Array}};function Ui(t,e,n){if(!Object.hasOwn(n,t))throw new Error(`Type '${t}' not found in typedef.json`);let r=n[t];return typeof r!="string"?Ve(e,r,n):Object.hasOwn(dr,r)?dr[r]:Ui(r,e,n)}function Ve(t,e,n){switch(t??=()=>{throw new Error("reference failed to resolve")},typeof e){case"boolean":case"number":return qn(e);case"string":return Object.hasOwn(dr,e)?dr[e]:Ui(e,t,n);case"object":if(e==null)return qn(null);if(Array.isArray(e)){if(e.length<1)throw new Error(`'read' variables must either be a valid type-defining string, an array of type-defining strings / objects, or a valid type-defining object: ${JSON.stringify(e)}`);let r=e.slice(1);if(Hn[e[0]])return Hn[e[0]](r,t,n)}else return Ls(e,t,n);default:throw new Error(`'read' variables must either be a valid type-defining string, an array of type-defining strings / objects, or a valid type-defining object: ${JSON.stringify(e)}`)}}function Ls(t,e,n){let r={read(p){let m={},f={$opcode:0};for(p.stack.push(m),p.hiddenstack.push(f);;){if(p.scan==p.endoffset){y||console.log("ended reading opcode struct at end of file without 0x00 opcode");break}let x=u.read(p);if(f.$opcode=x,!y&&x==0)break;let d=l.get(x);if(!d)throw new Error("unknown chunk 0x"+x.toString(16).toUpperCase());m[d.key]=d.parser.read(p)}return p.stack.pop(),p.hiddenstack.pop(),m},write(p,m){if(typeof m!="object"||!m)throw new Error("oject expected");p.stack.push(m),p.hiddenstack.push({});for(let f in m){if(f.startsWith("$"))continue;let x=h[f];if(!x)throw new Error("unknown property "+f);u.write(p,x.op),x.parser.write(p,m[f])}y||u.write(p,0),p.stack.pop(),p.hiddenstack.pop()},getTypescriptType(p){let m=`{
`,f=p+"	";for(let x of l.values())m+=f+x.key+"?: "+x.parser.getTypescriptType(f)+` | null
`;return m+=p+"}",m},getJsonSchema(){return{type:"object",properties:Object.fromEntries([...l.values()].filter(p=>!p.key.startsWith("$")).map(p=>[p.key,{oneOf:[p.parser.getJsonSchema(),{type:"null"}]}]))}}},i=function(p,m,f){let x={stackdepth:f.stackdepth+1,resolve(d,a){if(typeof d!="object"||!d)throw new Error("object expected");let o=d[p];return f.resolve(o,a)}};return m=="$opcode"||Object.prototype.hasOwnProperty.call(h,m)?(s[m]??=[],s[m].push(x),x):mt(m,e,x)},s={},u=Ve(null,t.$opcode??"unsigned byte",n),h={};for(let p in t){if(p.startsWith("$"))continue;let m=t[p];if(typeof m!="object"||!m)throw new Error("op name expected");let f=m.name;if(typeof f!="string")throw new Error("op name expected");if(h[f])throw new Error("duplicate opcode key "+f);h[f]={op:parseInt(p),parser:Ve(i.bind(null,p),m.read,n)}}let l=new Map;for(let p in h){let m=h[p];l.set(m.op,{key:p,parser:m.parser})}let y=!!l.get(0);return r}function Rs(t,e,n){let r={read(u){let h=[];for(let l of s){let y=l.read(u);h.push(y)}return h},write(u,h){if(!Array.isArray(h))throw new Error("array expected");for(let[l,y]of s.entries())y.write(u,h[l])},getTypescriptType(u){let h=`[
`,l=u+"	";for(let y of s)h+=l+y.getTypescriptType(l)+`,
`;return h+=u+"]",h},getJsonSchema(){return{type:"array",items:Object.entries(s).map(([u,h])=>h.getJsonSchema()),minItems:Object.keys(s).length,maxItems:Object.keys(s).length}}};const i=function(u,h,l){return mt(h,e,{stackdepth:l.stackdepth,resolve(y,p){if(!Array.isArray(y))throw new Error("Array expected");return l.resolve(y[u],p)}})};let s=t.map((u,h)=>Ve(i.bind(null,h),u,n));return r}function mt(t,e,n){if(!e)throw new Error("reference "+t+" could not be resolved");return e(t,n)}function pn(t,e,n){let i=mt(e,t,{stackdepth:0,resolve:n}).stackdepth,s=e.startsWith("$");return{read(u){let h=s?u.hiddenstack:u.stack;return h[h.length-i][e]},write(u,h){if(u.isWrite&&!s)throw new Error(`can update ref values in write mode when they are hidden (prefixed with $) in ${e}`);let l=s?u.hiddenstack:u.stack;l[l.length-i][e]=h}}}function Ps(t,e,n){let r={},i={read(l){let y={},p={};l.stack.push(y),l.hiddenstack.push(p);for(let m of h){let f=u[m].read(l);f!==void 0&&(m[0]=="$"?p[m]=f:y[m]=f)}return l.stack.pop(),l.hiddenstack.pop(),y},write(l,y){if(typeof y!="object"||!y)throw new Error("object expected");let p={};l.stack.push(y),l.hiddenstack.push(p);for(let m of h){let f=y[m],x=u[m];if(m.startsWith("$")){if(x.readConst!=null)f=x.readConst(l);else{let d=r[m];if(!d)throw new Error("cannot write hidden values if they are not constant or not referenced");f??=0;for(let a of d)f=a.resolve(y,f)}p[m]=f}x.write(l,f)}l.stack.pop(),l.hiddenstack.pop()},getTypescriptType(l){let y=`{
`,p=l+"	";for(let m of h)m[0]!="$"&&(y+=p+m+": "+u[m].getTypescriptType(p)+`,
`);return y+=l+"}",y},getJsonSchema(){return{type:"object",properties:Object.fromEntries([...Object.entries(u)].filter(([l])=>!l.startsWith("$")).map(([l,y])=>[l,y.getJsonSchema()])),required:h.filter(l=>!l.startsWith("$"))}}},s=function(l,y,p){let m={stackdepth:p.stackdepth+1,resolve(f,x){if(typeof f!="object"||!f)throw new Error("object expected");let d=f[l];return p.resolve(d,x)}};return Object.prototype.hasOwnProperty.call(u,y)?(r[y]??=[],r[y].push(m),m):mt(y,e,m)},u={};for(let l of t){if(!Array.isArray(l)||l.length!=2)throw new Error("each struct args should be a [name,type] pair");if(typeof l[0]!="string")throw new Error("prop name should be string");if(u[l[0]])throw new Error("duplicate struct prop "+l[0]);u[l[0]]=Ve(s.bind(null,l[0]),l[1],n)}let h=Object.keys(u);return i}function Us(t,e,n){let r={read(y){return h.match(y)==-1?null:l.read(y)},write(y,p){if(p!=null)return l.write(y,p)},getTypescriptType(y){return l.getTypescriptType(y)+" | null"},getJsonSchema(){return{oneOf:[l.getJsonSchema(),{type:"null"}]}}},i=function(y,p){return mt(y,e,{stackdepth:p.stackdepth,resolve(m,f){return m!=null?p.resolve(m,f):f}})};if(t.length<2)throw new Error("2 arguments exptected for proprety with type opt");let s=t[0],u="";if(typeof s=="string")u=s;else{let y,p,m="eq";if(Array.isArray(s)){if(typeof s[1]!="number")throw new Error("only literal ints as condition value are supported");y=s[0],m=s[2]??"eq",p=s[1]}else{if(typeof s!="number")throw new Error("");y="$opcode",p=s}let x={bitand:"&=",bitflag:"&",bitflagnot:"!&",bitor:"&",eq:"==",eqnot:"!=",gteq:">=",lteq:"<="}[m];(m=="bitflag"||m=="bitflagnot")&&(p=1<<p),u=`${y}${x}${p}`}let h=Oi(i,[u],y=>y==null?-1:0),l=Ve(i,t[1],n);return r}function Os(t,e,n){let r={read(f){let x=h.read(f),d=[],a=[];for(let o=0;o<p.length;o++){let c=p[o];for(let g=0;g<x;g++){let v,E;o==0?(E={},d.push(E),v={},a.push(v)):(E=d[g],v=a[g]),f.stack.push(E),f.hiddenstack.push(v);for(let _ in c){let S=c[_].read(f);_.startsWith("$")?v[_]=S:E[_]=S}f.stack.pop(),f.hiddenstack.pop()}}return d},write(f,x){if(!Array.isArray(x))throw new Error("array expected");h.write(f,x.length);let d=[];for(let a=0;a<p.length;a++){let o=p[a];for(let c=0;c<x.length;c++){let g=x[c],v=a==0?d[c]={}:d[c];if(f.stack.push(g),f.hiddenstack.push(v),typeof g!="object"||!g)throw new Error("object expected");for(let E in o){let _=o[E],S=g[E];if(E.startsWith("$")){if(_.readConst!=null)S=_.readConst(f);else{let C=l[E];if(!C)throw new Error("cannot write hidden values if they are not constant or not referenced");S??=0;for(let A of C)S=A.resolve(g,S)}v[E]=S}_.write(f,S)}f.stack.pop(),f.hiddenstack.pop()}}},getTypescriptType(f){let x=`{
`,d=f+"	";for(let[a,o]of Object.entries(y))a[0]!="$"&&(x+=d+a+": "+o.getTypescriptType(d)+`,
`);return x+=f+"}[]",x},getJsonSchema(){return{type:"array",items:{type:"object",properties:Object.fromEntries([...Object.entries(y)].filter(([f])=>!f.startsWith("$")).map(([f,x])=>[f,x.getJsonSchema()])),required:m.filter(f=>!f.startsWith("$"))}}}};const i=function(f,x){return mt(f,e,{stackdepth:x.stackdepth,resolve(d,a){if(!Array.isArray(d))throw new Error("array expected");return x.resolve(d.length,a)}})},s=function(f,x,d){let a={stackdepth:d.stackdepth+1,resolve(o,c){if(typeof o!="object"||!o)throw new Error("object expected");let g=o[f];return d.resolve(g,c)}};return Object.prototype.hasOwnProperty.call(y,x)?(l[x]??=[],l[x].push(a),a):mt(x,e,a)};let u=t.slice(1),h=Ve(i,t[0],n),l={},y={},p=[];for(let f of u){if(!Array.isArray(f))throw new Error("each argument for composed chunk should be an array");let x={};p.push(x);for(let d of f){if(!Array.isArray(d)||d.length!=2||typeof d[0]!="string")throw new Error("each composedchunk should be a [name,type] pair");let a=Ve(s.bind(null,d[0]),d[1],n);x[d[0]]=a,y[d[0]]=a}}let m=p.flatMap(Object.keys);return r}function jn(t,e,n){if(typeof t=="string"){if(n=="hex")return ke.from(t,"hex");{let r=t.match(/^buffer ([\w\[\]]+){([\d,\-\.]*)}/);if(!r)throw new Error("invalid arraybuffer string");return new e.constr(r[2].split(",").map(i=>+i))}}if(!(t instanceof e.constr))throw new Error("arraybuffer expected");return t}function Gs(t,e,n){let r={read(m){let f=y.read(m),x=f*h*p.constr.BYTES_PER_ELEMENT,d=new ArrayBuffer(x);if(m.scan+x>m.endoffset)throw new Error("trying to read outside buffer bounds");let a=ke.from(d);a.set(m.buffer.subarray(m.scan,m.scan+x)),m.scan+=x;let o=l=="buffer"?a:new p.constr(d);return l=="hex"?o.toJSON=()=>a.toString("hex"):m.args.keepBufferJson===!0?o.toJSON=()=>`buffer ${l}${h!=1?`[${h}]`:""}[${f}]`:o.toJSON=()=>`buffer ${l}${h!=1?`[${h}]`:""}[]{${[...o].join(",")}}`,o},write(m,f){let x=jn(f,p,l);if(x.length%h!=0)throw new Error("araybuffer is not integer multiple of vectorlength");y.write(m,x.length/h);let d=new Uint8Array(x.buffer,x.byteOffset,x.byteLength);m.buffer.set(d,m.scan),m.scan+=d.byteLength},getTypescriptType(m){return p.constr.name},getJsonSchema(){return{type:"string"}}};const i=function(m,f){return mt(m,e,{stackdepth:f.stackdepth,resolve(x,d){let a=jn(x,p,l);return f.resolve(a.length/h,d)}})};if(t.length<1)throw new Error(`'read' variables interpretted as an array must contain items: ${JSON.stringify(t)}`);let s=t[1]??"buffer",u=t[2]??1;if(typeof s!="string"||!Object.hasOwn(Vn,s))throw new Error("unknown buffer type "+t[1]);if(typeof u!="number")throw new Error("vectorlength should be a number");let h=u,l=s,y=Ve(i,t[0],n);const p=Vn[s];return r}function zs(t,e,n){let r={read(y){let p=h.read(y),m=[];for(let f=0;f<p;f++)m.push(l.read(y));return m},write(y,p){if(!Array.isArray(p))throw new Error("array expected");h.write(y,p.length);for(let m=0;m<p.length;m++)l.write(y,p[m])},getTypescriptType(y){return`${l.getTypescriptType(y)}[]`},getJsonSchema(){return{type:"array",items:l.getJsonSchema()}}};const i=function(y,p){return mt(y,e,{stackdepth:p.stackdepth,resolve(m,f){if(!Array.isArray(m))throw new Error("array expected");return p.resolve(m.length,f)}})},s=function(y,p){return mt(y,e,{stackdepth:p.stackdepth,resolve(m,f){if(!Array.isArray(m))throw new Error("array expected");return p.resolve(m[0],f)}})};if(t.length<1)throw new Error(`'read' variables interpretted as an array must contain items: ${JSON.stringify(t)}`);let u=t.length>=2?t[0]:"variable unsigned short",h=Ve(i,u,n),l=Ve(s,t[t.length>=2?1:0],n);return r}function Vs(t,e,n){let r={read(p){let m=[],f={$opcode:0};for(p.hiddenstack.push(f),p.stack.push({});;){p.scan;let x=h.read(p);f.$opcode=x;let d=l.read(p);if(x==d)break;m.push(y.read(p))}return p.hiddenstack.pop(),p.stack.pop(),m},write(p,m){if(!Array.isArray(m))throw new Error("array expected");p.stack.push(m),p.hiddenstack.push({});for(let f of m)h.write(p,1),y.write(p,f);h.write(p,0),p.stack.pop(),p.hiddenstack.pop()},getTypescriptType(p){return`${y.getTypescriptType(p)}[]`},getJsonSchema(){return{type:"array",items:y.getJsonSchema()}}};const i=function(p,m){return p=="$opcode"?{stackdepth:m.stackdepth+1,resolve(f,x){throw new Error("not implemented")}}:mt(p,e,{stackdepth:m.stackdepth+1,resolve(f,x){if(!Array.isArray(f))throw new Error("array expected");return m.resolve(f[0],x)}})};if(t.length<1)throw new Error(`'read' variables interpretted as an array must contain items: ${JSON.stringify(t)}`);let s=t.length>=2?t[0]:"variable unsigned short",u=t.length>=3?t[1]:0,h=Ve(null,s,n),l=Ve(null,u,n),y=Ve(i,t[t.length-1],n);return r}function qn(t){if(typeof t!="number"&&typeof t!="string"&&typeof t!="boolean"&&t!=null)throw new Error("only bool, number, string or null literals allowed");return{read(n){return t},readConst(){return t},write(n,r){if(r!=t)throw new Error(`expected constant ${t} was not present during write`)},getTypescriptType(){return JSON.stringify(t)},getJsonSchema(){return{const:t}}}}function js(t,e,n){let r=p=>{let m=y.read(p);return u!=-1&&(m=m>>u&~(-1<<h)),m+l},i={read:r,readConst:r,write(p,m){},getTypescriptType(){return"number"},getJsonSchema(){return{type:"integer",minimum:h==-1?void 0:0,maximum:h==-1?void 0:2**h-1}}};if(t.length<1)throw new Error("1 argument exptected for proprety with type ref");if(typeof t[0]!="string")throw new Error("ref propname expected");let s=t[0],[u,h]=[-1,-1];if(t[1])if(Array.isArray(t[1])&&t[1].length==2&&typeof t[1][0]=="number"&&typeof t[1][1]=="number")u=t[1][0],h=t[1][1];else throw new Error("second argument for ref should be [minbit,bitlen] pair");let l=t[2]??0;if(typeof l!="number")throw new Error("ref offset should be a number");let y=pn(e,s,(p,m)=>{if(typeof p!="number")throw new Error("number expected");if(u!=-1){let f=~(-1<<h)<<u;return m&~f|p<<u}else return p});return i}function qs(){return{read(t){return t.endoffset-t.scan},write(t,e){},getTypescriptType(){return"number"},getJsonSchema(){return{type:"integer"}}}}function Xs(t,e,n){let r={read(l){let y=s.read(l),p,m=h.read(l)??0;if(u=="add"||u=="add-1"||u=="postadd")p=m+(y??0)+(u=="add-1"?-1:0);else if(u=="hold")p=y??m;else throw new Error("unknown accumolator mode");return h.write(l,p),u=="postadd"?m:p},write(l,y){if(typeof y!="number")throw new Error("number expected");let p=h.read(l)??0,m;if(u=="add"||u=="add-1")m=y-p+(u=="add-1"?1:0);else throw u=="hold"?new Error("writing accum intaccum hold not implemented"):u=="postadd"?new Error("writing accum intaccum postadd not implemented"):new Error("unknown accumolator mode");s.write(l,m),h.write(l,y)},getTypescriptType(){return"number"},getJsonSchema(){return{type:"integer"}}};if(t.length<2)throw new Error("2 arguments exptected for proprety with type accum");let i=t[0],s=Ve(e,t[1],n),u=t[2]??"add";if(typeof i!="string")throw new Error("ref name should be a string");let h=pn(e,i,(l,y)=>y);return r}function Xn(t){const e="latin1";return{read(n){let r=Br(n.args)<=dt?10:0;for(let u=0;u<t.length;u++,n.scan++)if(n.buffer.readUInt8(n.scan)!=t[u])throw new Error("failed to match string header bytes");let i=n.scan;for(;;){if(i==n.endoffset)throw new Error("reading string without null termination");if(n.buffer.readUInt8(i)==r)break;i++}let s=n.buffer.toString(e,n.scan,i);return n.scan=i+1,s},write(n,r){if(typeof r!="string")throw new Error("string expected");let i=Br(n.args)<=dt?10:0,s=[...t,...ke.from(r,e),i];n.buffer.set(s,n.scan),n.scan+=s.length},getTypescriptType(){return"string"},getJsonSchema(){return{type:"string"}}}}function Oi(t,e,n){let r=[],i=[];for(let u of e){u=u.replace(/\s/g,"");let h=u.split(/&&/g),l=[];for(let y of h){let p,m,f=0;if(y=="default"||y=="other")continue;{let d=y.match(/^((?<var>[\$a-zA-Z]\w*)?(?<op><|<=|>|>=|&|==|=|!&|&=|!=)?)?(?<version>0x[\da-fA=F]+|-?\d+)$/);if(!d)throw new Error("invalid match value, expected <op><version>. For example '>10'");f=parseInt(d.groups.version),p=d.groups.op??"=",p=="=="&&(p="="),m=d.groups.var??"$opcode"}let x=r.findIndex(d=>d.name==m);x==-1&&(x=r.length,r.push({name:m,parser:pn(t,m,(d,a)=>{if(!n)throw new Error("write not implemented");let o=n(d);for(let c=0;c<i.length;c++){let g=i[c];for(let v of g){if(v.varindex!=x)continue;let E=c==o,_=v.value;switch(v.op){case"=":a=E?_:a;break;case"!=":a=E?a:_;break;case"&":a=E?a|_:a&~_;break;case"&=":a=E?a|_:a&~_;break;case"!&":a=E?a&~_:a|_;break;case">=":a=E?Math.max(_,a):a;break;case">":a=E?Math.max(_+1,a):a;break;case"<=":a=E?Math.min(_,a):a;break;case"<":a=E?Math.min(_-1,a):a;break;default:throw new Error("unknown condition "+v.op)}}}return a})})),l.push({op:p,value:f,varname:m,varindex:x})}i.push(l)}return{match:u=>{let h=r.map(l=>l.parser.read(u));for(let l=0;l<i.length;l++){let y=i[l],p=!0;for(let m of y){let f=h[m.varindex];switch(m.op){case"=":p=f==m.value;break;case"!=":p=f!=m.value;break;case"<":p=f<m.value;break;case"<=":p=f<=m.value;break;case">":p=f>m.value;break;case">=":p=f>=m.value;break;case"&":p=(f&m.value)!=0;break;case"!&":p=(f&m.value)==0;break;case"&=":p=(f&m.value)==m.value;break;default:throw new Error("unknown op"+m.op)}if(!p)break}if(p)return l}return-1}}}const Hs={playeritem:function(){return{read(t){let e=t.buffer.readUInt8(t.scan++);if(e==0)return 0;let n=t.buffer.readUInt8(t.scan++);return n==255&&e==255?-1:e<<8|n},write(t,e){if(typeof e!="number")throw new Error("number expected");e==0?t.buffer.writeUInt8(0,t.scan++):(t.buffer.writeUint16BE(e==-1?65535:e&65535,t.scan),t.scan+=2)},getTypescriptType(){return"number"},getJsonSchema(){return{type:"integer",minimum:-1,maximum:49150}}}},itemvar:function(t){let e=t[0];if(typeof e!="string"||!["ref","matcount","colorcount","modelcount"].includes(e))throw new Error;return{read(n){let r=typeof n.args.activeitem=="number"?n.args.activeitem:-1;if(e=="ref"&&(r++,n.args.activeitem=r),!Array.isArray(n.args.slots))throw new Error("");let i=n.args.slots[r];if(e=="ref")return i;if(e=="matcount")return i?.replaceMaterials?.length??0;if(e=="colorcount")return i?.replaceColors?.length??0;if(e=="modelcount")return i?.models.length;throw new Error},write(){},getTypescriptType(){return e=="ref"?"any":"number"},getJsonSchema(){return{type:e=="ref"?"any":"integer"}}}},buildnr:function(t,e){return{readConst(n){return Br(n.args)},read(n){return Br(n.args)},write(n,r){},getTypescriptType(n){return"number"},getJsonSchema(){return{type:"number"}}}},match:function(t,e,n){let r={read(y){let p={$opcode:0};y.stack.push({}),y.hiddenstack.push(p);let m=s?s.read(y):0;p.$opcode=m;let f=l.match(y);if(f==-1)throw new Error("no opcode matched");let x=h[f].read(y);return y.stack.pop(),y.hiddenstack.pop(),x},write(y,p){let m={$opcode:0};if(y.stack.push({}),y.hiddenstack.push(m),s){if(!s.readConst)throw new Error("non-const or non-reference match value not implemented in write mode");m.$opcode=s.readConst(y)}let f=l.match(y);if(f==-1)throw new Error("no opcode matched");h[f].write(y,p),y.stack.pop(),y.hiddenstack.pop()},getTypescriptType(y){return"("+h.map(p=>p.getTypescriptType(y+"	")).join("|")+")"},getJsonSchema(){return{anyOf:h.map(y=>y.getJsonSchema())}}};const i=function(y,p){let m={stackdepth:p.stackdepth+1,resolve(f,x){throw new Error("write not supported")}};return y=="$opcode"?m:mt(y,e,m)};if(t.length==1&&(t=[null,t[0]]),t.length!=2)throw new Error("match chunks needs 2 arguments");if(typeof t[1]!="object")throw new Error("match chunk requires 2n+2 arguments");let s=t[0]?Ve(i,t[0],n):null,u=Object.keys(t[1]),h=Object.values(t[1]).map(y=>Ve(i,y,n)),l=Oi(i,u);return r},footer:function(t,e,n){if(t.length!=2)throw new Error("footer requires length and subtype arguments");let r=Ve(e,t[0],n),i=Ve(e,t[1],n);return{read(s){let u=r.read(s),h=s.scan,l=s.endoffset-u;s.scan=l;let y=i.read(s);return s.scan!=s.endoffset&&console.log(`didn't read full footer, ${s.endoffset-s.scan} bytes left`),s.scan=h,s.endoffset=s.endoffset-u,y},write(s,u){let h=s.scan;i.write(s,u);let l=s.scan-h;s.buffer.copyWithin(s.endoffset-l,h,s.scan),s.scan=h,s.endoffset-=l},getTypescriptType(s){return i.getTypescriptType(s)},getJsonSchema(){return i.getJsonSchema()}}},"tailed varushort":function(t,e,n){return{read(i){let s=0;for(;;){let u=i.buffer.readUint8(i.scan++),h;if((u&128)==0)h=u;else{let l=i.buffer.readUint8(i.scan++);h=(u&127)<<8|l}if(s+=h,h!=32767)return s}},write(i,s){if(typeof s!="number")throw new Error("number expected");for(;s>=0;){let u=Math.min(32767,s);u<128?i.buffer.writeUint8(u,i.scan++):(i.buffer.writeUint16BE(u|32768,i.scan),i.scan+=2),s-=u}},getTypescriptType(i){return"number"},getJsonSchema(){return{type:"number"}}}},legacy_maptile:function(t,e,n){return{read(r){let i={flags:0,shape:null,overlay:null,settings:null,underlay:null,height:null};for(;;){let s=r.buffer.readUint8(r.scan++);if(s==0)break;if(s==1){i.height=r.buffer.readUint8(r.scan++);break}s>=2&&s<=49&&(i.shape=s-2,i.overlay=r.buffer.readUint8(r.scan),r.scan+=1),s>=50&&s<=81&&(i.settings=s-49),s>=82&&(i.underlay=s-81)}return i},write(r){throw new Error("not implemented")},getTypescriptType(r){let i=r+"	";return`{
${i}flags: number,
${i}shape: number | null,
${i}overlay: number | null,
${i}settings: number | null,
${i}underlay: number | null,
${i}height: number | null,
${r}}`},getJsonSchema(){return{type:"any"}}}},scriptopt:function(t,e,n){return{read(r){let i=r.args.clientScriptDeob;if(!i)throw new Error("opcode callibration not set for clientscript with obfuscated opcodes");return i.readOpcode(r)},write(r,i){let s=r.args.clientScriptDeob;if(!s)throw new Error("opcode callibration not set for clientscript with obfuscated opcodes");s.writeOpCode(r,i)},getJsonSchema(){return{type:"object",properties:{opcode:{type:"number"},imm:{type:"number"},imm_obj:{oneOf:[{type:"number"},{type:"string"},{type:"null"}]}}}},getTypescriptType(r){let i=r+"	";return`{
${i}opcode:number,
${i}imm:number,
${i}imm_obj:number|string|[number,number]|null,
${r}}`}}}};function Br(t){if(typeof t.clientVersion!="number")throw new Error("client version not set");return t.clientVersion}const $s={ubyte:{read(t){let e=t.buffer.readUInt8(t.scan);return t.scan+=1,e},write(t,e){t.buffer.writeUInt8(e,t.scan),t.scan+=1},min:0,max:255},byte:{read(t){let e=t.buffer.readInt8(t.scan);return t.scan+=1,e},write(t,e){t.buffer.writeInt8(e,t.scan),t.scan+=1},min:-128,max:127},ushort:{read(t){let e=t.buffer.readUInt16BE(t.scan);return t.scan+=2,e},write(t,e){t.buffer.writeUInt16BE(e,t.scan),t.scan+=2},min:0,max:2**16-1},short:{read(t){let e=t.buffer.readInt16BE(t.scan);return t.scan+=2,e},write(t,e){t.buffer.writeInt16BE(e,t.scan),t.scan+=2},min:-32768,max:2**15-1},uint:{read(t){let e=t.buffer.readUInt32BE(t.scan);return t.scan+=4,e},write(t,e){t.buffer.writeUInt32BE(e,t.scan),t.scan+=4},min:0,max:2**32-1},int:{read(t){let e=t.buffer.readInt32BE(t.scan);return t.scan+=4,e},write(t,e){t.buffer.writeInt32BE(e,t.scan),t.scan+=4},min:-2147483648,max:2**31-1},uint_le:{read(t){let e=t.buffer.readUInt32LE(t.scan);return t.scan+=4,e},write(t,e){t.buffer.writeUint32LE(e,t.scan),t.scan+=4},min:0,max:2**32-1},ushort_le:{read(t){let e=t.buffer.readUInt16LE(t.scan);return t.scan+=2,e},write(t,e){t.buffer.writeUint16LE(e,t.scan),t.scan+=2},min:0,max:2**16-1},utribyte:{read(t){let e=t.buffer.readUIntBE(t.scan,3);return t.scan+=3,e},write(t,e){t.buffer.writeUintBE(e,t.scan,3),t.scan+=3},min:0,max:2**24-1},float:{read(t){let e=t.buffer.readFloatBE(t.scan);return t.scan+=4,e},write(t,e){t.buffer.writeFloatBE(e,t.scan),t.scan+=4},min:Number.MIN_VALUE,max:Number.MAX_VALUE},varushort:{read(t){let e=t.buffer.readUInt8(t.scan++);if((e&128)==0)return e;let n=t.buffer.readUInt8(t.scan++);return(e&127)<<8|n},write(t,e){e<128?(t.buffer.writeUInt8(e,t.scan),t.scan+=1):(t.buffer.writeUint16BE(e|32768,t.scan),t.scan+=2)},min:0,max:2**15-1},varshort:{read(t){let e=t.buffer.readUInt8(t.scan++);if((e&128)==0)return e<<25>>25;let n=t.buffer.readUInt8(t.scan++);return((e&127)<<8|n)<<17>>17},write(t,e){e<64&&e>=-64?(t.buffer.writeUInt8(e&127,t.scan),t.scan+=1):(t.buffer.writeInt16BE(e|32768,t.scan),t.scan+=2)},min:-16384,max:2**14-1},varuint:{read(t){let e=t.buffer.readUInt16BE(t.scan);if(t.scan+=2,(e&32768)==0)return e;{let n=t.buffer.readUInt16BE(t.scan);return t.scan+=2,(e&32767)<<16|n}},write(t,e){e<32768?(t.buffer.writeUInt16BE(e,t.scan),t.scan+=2):(t.buffer.writeUint32BE((e|2147483648)>>>0,t.scan),t.scan+=4)},min:0,max:2**31-1},varnullint:{read(t){let e=t.buffer.readUInt16BE(t.scan);if(t.scan+=2,e==32767)return-1;if((e&32768)==0)return e;{let n=t.buffer.readUInt16BE(t.scan);return t.scan+=2,(e&32767)<<16|n}},write(t,e){e==-1?(t.buffer.writeUint16BE(32767,t.scan),t.scan+=2):e<32768?(t.buffer.writeUInt16BE(e,t.scan),t.scan+=2):(t.buffer.writeUint32BE((e|2147483648)>>>0,t.scan),t.scan+=4)},min:-1,max:2**31-1},varint:{read(t){let e=t.buffer.readUInt16BE(t.scan);if(t.scan+=2,(e&32768)==0)return e<<17>>17;let n=t.buffer.readUInt16BE(t.scan);return t.scan+=2,((e&32767)<<16|n)<<1>>1},write(t,e){e<16384&&e>=-16384?(t.buffer.writeUInt16BE(e&32767,t.scan),t.scan+=2):(t.buffer.writeInt32BE(e|8388608,t.scan),t.scan+=4)},min:-1073741824,max:2**30-1}},dr={...Object.fromEntries(Object.entries($s).map(([t,e])=>[t,{read:e.read,write:(n,r)=>{if(typeof r!="number"||r>e.max||r<e.min)throw new Error;e.write(n,r)},getJsonSchema(){return{type:"number",maximum:e.max,minimum:e.min}},getTypescriptType(n){return"number"}}])),bool:{read(t){let e=t.buffer.readUInt8(t.scan++);if(e!=0&&e!=1)throw new Error("1 or 0 expected boolean value");return e!=0},write(t,e){if(typeof e!="boolean")throw new Error("boolean expected");t.buffer.writeUInt8(+e,t.scan++)},getJsonSchema(){return{type:"boolean"}},getTypescriptType(t){return"boolean"}},string:Xn([]),paddedstring:Xn([0])},Hn={ref:js,accum:Xs,opt:Us,chunkedarray:Os,bytesleft:qs,buffer:Gs,nullarray:Vs,array:zs,struct:Ps,tuple:Rs,...Hs,...dr};var Sr={exports:{}},Js=Sr.exports,$n;function Ws(){return $n||($n=1,(function(t,e){(function(r,i){t.exports=i()})(Js,function(){return(function(n){var r={};function i(s){if(r[s])return r[s].exports;var u=r[s]={exports:{},id:s,loaded:!1};return n[s].call(u.exports,u,u.exports,i),u.loaded=!0,u.exports}return i.m=n,i.c=r,i.p="",i(0)})([function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(1),u=i(3),h=i(8),l=i(15);function y(d,a,o){var c=null,g=function(B,k){o&&o(B,k),c&&c.visit(B,k)},v=typeof o=="function"?g:null,E=!1;if(a){E=typeof a.comment=="boolean"&&a.comment;var _=typeof a.attachComment=="boolean"&&a.attachComment;(E||_)&&(c=new s.CommentHandler,c.attach=_,a.comment=!0,v=g)}var S=!1;a&&typeof a.sourceType=="string"&&(S=a.sourceType==="module");var C;a&&typeof a.jsx=="boolean"&&a.jsx?C=new u.JSXParser(d,a,v):C=new h.Parser(d,a,v);var A=S?C.parseModule():C.parseScript(),I=A;return E&&c&&(I.comments=c.comments),C.config.tokens&&(I.tokens=C.tokens),C.config.tolerant&&(I.errors=C.errorHandler.errors),I}r.parse=y;function p(d,a,o){var c=a||{};return c.sourceType="module",y(d,c,o)}r.parseModule=p;function m(d,a,o){var c=a||{};return c.sourceType="script",y(d,c,o)}r.parseScript=m;function f(d,a,o){var c=new l.Tokenizer(d,a),g;g=[];try{for(;;){var v=c.getNextToken();if(!v)break;o&&(v=o(v)),g.push(v)}}catch(E){c.errorHandler.tolerate(E)}return c.errorHandler.tolerant&&(g.errors=c.errors()),g}r.tokenize=f;var x=i(2);r.Syntax=x.Syntax,r.version="4.0.1"},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(2),u=(function(){function h(){this.attach=!1,this.comments=[],this.stack=[],this.leading=[],this.trailing=[]}return h.prototype.insertInnerComments=function(l,y){if(l.type===s.Syntax.BlockStatement&&l.body.length===0){for(var p=[],m=this.leading.length-1;m>=0;--m){var f=this.leading[m];y.end.offset>=f.start&&(p.unshift(f.comment),this.leading.splice(m,1),this.trailing.splice(m,1))}p.length&&(l.innerComments=p)}},h.prototype.findTrailingComments=function(l){var y=[];if(this.trailing.length>0){for(var p=this.trailing.length-1;p>=0;--p){var m=this.trailing[p];m.start>=l.end.offset&&y.unshift(m.comment)}return this.trailing.length=0,y}var f=this.stack[this.stack.length-1];if(f&&f.node.trailingComments){var x=f.node.trailingComments[0];x&&x.range[0]>=l.end.offset&&(y=f.node.trailingComments,delete f.node.trailingComments)}return y},h.prototype.findLeadingComments=function(l){for(var y=[],p;this.stack.length>0;){var m=this.stack[this.stack.length-1];if(m&&m.start>=l.start.offset)p=m.node,this.stack.pop();else break}if(p){for(var f=p.leadingComments?p.leadingComments.length:0,x=f-1;x>=0;--x){var d=p.leadingComments[x];d.range[1]<=l.start.offset&&(y.unshift(d),p.leadingComments.splice(x,1))}return p.leadingComments&&p.leadingComments.length===0&&delete p.leadingComments,y}for(var x=this.leading.length-1;x>=0;--x){var m=this.leading[x];m.start<=l.start.offset&&(y.unshift(m.comment),this.leading.splice(x,1))}return y},h.prototype.visitNode=function(l,y){if(!(l.type===s.Syntax.Program&&l.body.length>0)){this.insertInnerComments(l,y);var p=this.findTrailingComments(y),m=this.findLeadingComments(y);m.length>0&&(l.leadingComments=m),p.length>0&&(l.trailingComments=p),this.stack.push({node:l,start:y.start.offset})}},h.prototype.visitComment=function(l,y){var p=l.type[0]==="L"?"Line":"Block",m={type:p,value:l.value};if(l.range&&(m.range=l.range),l.loc&&(m.loc=l.loc),this.comments.push(m),this.attach){var f={comment:{type:p,value:l.value,range:[y.start.offset,y.end.offset]},start:y.start.offset};l.loc&&(f.comment.loc=l.loc),l.type=p,this.leading.push(f),this.trailing.push(f)}},h.prototype.visit=function(l,y){l.type==="LineComment"?this.visitComment(l,y):l.type==="BlockComment"?this.visitComment(l,y):this.attach&&this.visitNode(l,y)},h})();r.CommentHandler=u},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.Syntax={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DoWhileStatement:"DoWhileStatement",DebuggerStatement:"DebuggerStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForOfStatement:"ForOfStatement",ForInStatement:"ForInStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",Program:"Program",Property:"Property",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchCase:"SwitchCase",SwitchStatement:"SwitchStatement",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"}},function(n,r,i){var s=this&&this.__extends||(function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,c){o.__proto__=c}||function(o,c){for(var g in c)c.hasOwnProperty(g)&&(o[g]=c[g])};return function(o,c){a(o,c);function g(){this.constructor=o}o.prototype=c===null?Object.create(c):(g.prototype=c.prototype,new g)}})();Object.defineProperty(r,"__esModule",{value:!0});var u=i(4),h=i(5),l=i(6),y=i(7),p=i(8),m=i(13),f=i(14);m.TokenName[100]="JSXIdentifier",m.TokenName[101]="JSXText";function x(a){var o;switch(a.type){case l.JSXSyntax.JSXIdentifier:var c=a;o=c.name;break;case l.JSXSyntax.JSXNamespacedName:var g=a;o=x(g.namespace)+":"+x(g.name);break;case l.JSXSyntax.JSXMemberExpression:var v=a;o=x(v.object)+"."+x(v.property);break}return o}var d=(function(a){s(o,a);function o(c,g,v){return a.call(this,c,g,v)||this}return o.prototype.parsePrimaryExpression=function(){return this.match("<")?this.parseJSXRoot():a.prototype.parsePrimaryExpression.call(this)},o.prototype.startJSX=function(){this.scanner.index=this.startMarker.index,this.scanner.lineNumber=this.startMarker.line,this.scanner.lineStart=this.startMarker.index-this.startMarker.column},o.prototype.finishJSX=function(){this.nextToken()},o.prototype.reenterJSX=function(){this.startJSX(),this.expectJSX("}"),this.config.tokens&&this.tokens.pop()},o.prototype.createJSXNode=function(){return this.collectComments(),{index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}},o.prototype.createJSXChildNode=function(){return{index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}},o.prototype.scanXHTMLEntity=function(c){for(var g="&",v=!0,E=!1,_=!1,S=!1;!this.scanner.eof()&&v&&!E;){var C=this.scanner.source[this.scanner.index];if(C===c)break;if(E=C===";",g+=C,++this.scanner.index,!E)switch(g.length){case 2:_=C==="#";break;case 3:_&&(S=C==="x",v=S||u.Character.isDecimalDigit(C.charCodeAt(0)),_=_&&!S);break;default:v=v&&!(_&&!u.Character.isDecimalDigit(C.charCodeAt(0))),v=v&&!(S&&!u.Character.isHexDigit(C.charCodeAt(0)));break}}if(v&&E&&g.length>2){var A=g.substr(1,g.length-2);_&&A.length>1?g=String.fromCharCode(parseInt(A.substr(1),10)):S&&A.length>2?g=String.fromCharCode(parseInt("0"+A.substr(1),16)):!_&&!S&&f.XHTMLEntities[A]&&(g=f.XHTMLEntities[A])}return g},o.prototype.lexJSX=function(){var c=this.scanner.source.charCodeAt(this.scanner.index);if(c===60||c===62||c===47||c===58||c===61||c===123||c===125){var g=this.scanner.source[this.scanner.index++];return{type:7,value:g,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:this.scanner.index-1,end:this.scanner.index}}if(c===34||c===39){for(var v=this.scanner.index,E=this.scanner.source[this.scanner.index++],_="";!this.scanner.eof();){var S=this.scanner.source[this.scanner.index++];if(S===E)break;S==="&"?_+=this.scanXHTMLEntity(E):_+=S}return{type:8,value:_,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:v,end:this.scanner.index}}if(c===46){var C=this.scanner.source.charCodeAt(this.scanner.index+1),A=this.scanner.source.charCodeAt(this.scanner.index+2),g=C===46&&A===46?"...":".",v=this.scanner.index;return this.scanner.index+=g.length,{type:7,value:g,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:v,end:this.scanner.index}}if(c===96)return{type:10,value:"",lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:this.scanner.index,end:this.scanner.index};if(u.Character.isIdentifierStart(c)&&c!==92){var v=this.scanner.index;for(++this.scanner.index;!this.scanner.eof();){var S=this.scanner.source.charCodeAt(this.scanner.index);if(u.Character.isIdentifierPart(S)&&S!==92)++this.scanner.index;else if(S===45)++this.scanner.index;else break}var I=this.scanner.source.slice(v,this.scanner.index);return{type:100,value:I,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:v,end:this.scanner.index}}return this.scanner.lex()},o.prototype.nextJSXToken=function(){this.collectComments(),this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart;var c=this.lexJSX();return this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart,this.config.tokens&&this.tokens.push(this.convertToken(c)),c},o.prototype.nextJSXText=function(){this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart;for(var c=this.scanner.index,g="";!this.scanner.eof();){var v=this.scanner.source[this.scanner.index];if(v==="{"||v==="<")break;++this.scanner.index,g+=v,u.Character.isLineTerminator(v.charCodeAt(0))&&(++this.scanner.lineNumber,v==="\r"&&this.scanner.source[this.scanner.index]===`
`&&++this.scanner.index,this.scanner.lineStart=this.scanner.index)}this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart;var E={type:101,value:g,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:c,end:this.scanner.index};return g.length>0&&this.config.tokens&&this.tokens.push(this.convertToken(E)),E},o.prototype.peekJSXToken=function(){var c=this.scanner.saveState();this.scanner.scanComments();var g=this.lexJSX();return this.scanner.restoreState(c),g},o.prototype.expectJSX=function(c){var g=this.nextJSXToken();(g.type!==7||g.value!==c)&&this.throwUnexpectedToken(g)},o.prototype.matchJSX=function(c){var g=this.peekJSXToken();return g.type===7&&g.value===c},o.prototype.parseJSXIdentifier=function(){var c=this.createJSXNode(),g=this.nextJSXToken();return g.type!==100&&this.throwUnexpectedToken(g),this.finalize(c,new h.JSXIdentifier(g.value))},o.prototype.parseJSXElementName=function(){var c=this.createJSXNode(),g=this.parseJSXIdentifier();if(this.matchJSX(":")){var v=g;this.expectJSX(":");var E=this.parseJSXIdentifier();g=this.finalize(c,new h.JSXNamespacedName(v,E))}else if(this.matchJSX("."))for(;this.matchJSX(".");){var _=g;this.expectJSX(".");var S=this.parseJSXIdentifier();g=this.finalize(c,new h.JSXMemberExpression(_,S))}return g},o.prototype.parseJSXAttributeName=function(){var c=this.createJSXNode(),g,v=this.parseJSXIdentifier();if(this.matchJSX(":")){var E=v;this.expectJSX(":");var _=this.parseJSXIdentifier();g=this.finalize(c,new h.JSXNamespacedName(E,_))}else g=v;return g},o.prototype.parseJSXStringLiteralAttribute=function(){var c=this.createJSXNode(),g=this.nextJSXToken();g.type!==8&&this.throwUnexpectedToken(g);var v=this.getTokenRaw(g);return this.finalize(c,new y.Literal(g.value,v))},o.prototype.parseJSXExpressionAttribute=function(){var c=this.createJSXNode();this.expectJSX("{"),this.finishJSX(),this.match("}")&&this.tolerateError("JSX attributes must only be assigned a non-empty expression");var g=this.parseAssignmentExpression();return this.reenterJSX(),this.finalize(c,new h.JSXExpressionContainer(g))},o.prototype.parseJSXAttributeValue=function(){return this.matchJSX("{")?this.parseJSXExpressionAttribute():this.matchJSX("<")?this.parseJSXElement():this.parseJSXStringLiteralAttribute()},o.prototype.parseJSXNameValueAttribute=function(){var c=this.createJSXNode(),g=this.parseJSXAttributeName(),v=null;return this.matchJSX("=")&&(this.expectJSX("="),v=this.parseJSXAttributeValue()),this.finalize(c,new h.JSXAttribute(g,v))},o.prototype.parseJSXSpreadAttribute=function(){var c=this.createJSXNode();this.expectJSX("{"),this.expectJSX("..."),this.finishJSX();var g=this.parseAssignmentExpression();return this.reenterJSX(),this.finalize(c,new h.JSXSpreadAttribute(g))},o.prototype.parseJSXAttributes=function(){for(var c=[];!this.matchJSX("/")&&!this.matchJSX(">");){var g=this.matchJSX("{")?this.parseJSXSpreadAttribute():this.parseJSXNameValueAttribute();c.push(g)}return c},o.prototype.parseJSXOpeningElement=function(){var c=this.createJSXNode();this.expectJSX("<");var g=this.parseJSXElementName(),v=this.parseJSXAttributes(),E=this.matchJSX("/");return E&&this.expectJSX("/"),this.expectJSX(">"),this.finalize(c,new h.JSXOpeningElement(g,E,v))},o.prototype.parseJSXBoundaryElement=function(){var c=this.createJSXNode();if(this.expectJSX("<"),this.matchJSX("/")){this.expectJSX("/");var g=this.parseJSXElementName();return this.expectJSX(">"),this.finalize(c,new h.JSXClosingElement(g))}var v=this.parseJSXElementName(),E=this.parseJSXAttributes(),_=this.matchJSX("/");return _&&this.expectJSX("/"),this.expectJSX(">"),this.finalize(c,new h.JSXOpeningElement(v,_,E))},o.prototype.parseJSXEmptyExpression=function(){var c=this.createJSXChildNode();return this.collectComments(),this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart,this.finalize(c,new h.JSXEmptyExpression)},o.prototype.parseJSXExpressionContainer=function(){var c=this.createJSXNode();this.expectJSX("{");var g;return this.matchJSX("}")?(g=this.parseJSXEmptyExpression(),this.expectJSX("}")):(this.finishJSX(),g=this.parseAssignmentExpression(),this.reenterJSX()),this.finalize(c,new h.JSXExpressionContainer(g))},o.prototype.parseJSXChildren=function(){for(var c=[];!this.scanner.eof();){var g=this.createJSXChildNode(),v=this.nextJSXText();if(v.start<v.end){var E=this.getTokenRaw(v),_=this.finalize(g,new h.JSXText(v.value,E));c.push(_)}if(this.scanner.source[this.scanner.index]==="{"){var S=this.parseJSXExpressionContainer();c.push(S)}else break}return c},o.prototype.parseComplexJSXElement=function(c){for(var g=[];!this.scanner.eof();){c.children=c.children.concat(this.parseJSXChildren());var v=this.createJSXChildNode(),E=this.parseJSXBoundaryElement();if(E.type===l.JSXSyntax.JSXOpeningElement){var _=E;if(_.selfClosing){var S=this.finalize(v,new h.JSXElement(_,[],null));c.children.push(S)}else g.push(c),c={node:v,opening:_,closing:null,children:[]}}if(E.type===l.JSXSyntax.JSXClosingElement){c.closing=E;var C=x(c.opening.name),A=x(c.closing.name);if(C!==A&&this.tolerateError("Expected corresponding JSX closing tag for %0",C),g.length>0){var S=this.finalize(c.node,new h.JSXElement(c.opening,c.children,c.closing));c=g[g.length-1],c.children.push(S),g.pop()}else break}}return c},o.prototype.parseJSXElement=function(){var c=this.createJSXNode(),g=this.parseJSXOpeningElement(),v=[],E=null;if(!g.selfClosing){var _=this.parseComplexJSXElement({node:c,opening:g,closing:E,children:v});v=_.children,E=_.closing}return this.finalize(c,new h.JSXElement(g,v,E))},o.prototype.parseJSXRoot=function(){this.config.tokens&&this.tokens.pop(),this.startJSX();var c=this.parseJSXElement();return this.finishJSX(),c},o.prototype.isStartOfExpression=function(){return a.prototype.isStartOfExpression.call(this)||this.match("<")},o})(p.Parser);r.JSXParser=d},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,NonAsciiIdentifierPart:/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/};r.Character={fromCodePoint:function(s){return s<65536?String.fromCharCode(s):String.fromCharCode(55296+(s-65536>>10))+String.fromCharCode(56320+(s-65536&1023))},isWhiteSpace:function(s){return s===32||s===9||s===11||s===12||s===160||s>=5760&&[5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279].indexOf(s)>=0},isLineTerminator:function(s){return s===10||s===13||s===8232||s===8233},isIdentifierStart:function(s){return s===36||s===95||s>=65&&s<=90||s>=97&&s<=122||s===92||s>=128&&i.NonAsciiIdentifierStart.test(r.Character.fromCodePoint(s))},isIdentifierPart:function(s){return s===36||s===95||s>=65&&s<=90||s>=97&&s<=122||s>=48&&s<=57||s===92||s>=128&&i.NonAsciiIdentifierPart.test(r.Character.fromCodePoint(s))},isDecimalDigit:function(s){return s>=48&&s<=57},isHexDigit:function(s){return s>=48&&s<=57||s>=65&&s<=70||s>=97&&s<=102},isOctalDigit:function(s){return s>=48&&s<=55}}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(6),u=(function(){function c(g){this.type=s.JSXSyntax.JSXClosingElement,this.name=g}return c})();r.JSXClosingElement=u;var h=(function(){function c(g,v,E){this.type=s.JSXSyntax.JSXElement,this.openingElement=g,this.children=v,this.closingElement=E}return c})();r.JSXElement=h;var l=(function(){function c(){this.type=s.JSXSyntax.JSXEmptyExpression}return c})();r.JSXEmptyExpression=l;var y=(function(){function c(g){this.type=s.JSXSyntax.JSXExpressionContainer,this.expression=g}return c})();r.JSXExpressionContainer=y;var p=(function(){function c(g){this.type=s.JSXSyntax.JSXIdentifier,this.name=g}return c})();r.JSXIdentifier=p;var m=(function(){function c(g,v){this.type=s.JSXSyntax.JSXMemberExpression,this.object=g,this.property=v}return c})();r.JSXMemberExpression=m;var f=(function(){function c(g,v){this.type=s.JSXSyntax.JSXAttribute,this.name=g,this.value=v}return c})();r.JSXAttribute=f;var x=(function(){function c(g,v){this.type=s.JSXSyntax.JSXNamespacedName,this.namespace=g,this.name=v}return c})();r.JSXNamespacedName=x;var d=(function(){function c(g,v,E){this.type=s.JSXSyntax.JSXOpeningElement,this.name=g,this.selfClosing=v,this.attributes=E}return c})();r.JSXOpeningElement=d;var a=(function(){function c(g){this.type=s.JSXSyntax.JSXSpreadAttribute,this.argument=g}return c})();r.JSXSpreadAttribute=a;var o=(function(){function c(g,v){this.type=s.JSXSyntax.JSXText,this.value=g,this.raw=v}return c})();r.JSXText=o},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.JSXSyntax={JSXAttribute:"JSXAttribute",JSXClosingElement:"JSXClosingElement",JSXElement:"JSXElement",JSXEmptyExpression:"JSXEmptyExpression",JSXExpressionContainer:"JSXExpressionContainer",JSXIdentifier:"JSXIdentifier",JSXMemberExpression:"JSXMemberExpression",JSXNamespacedName:"JSXNamespacedName",JSXOpeningElement:"JSXOpeningElement",JSXSpreadAttribute:"JSXSpreadAttribute",JSXText:"JSXText"}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(2),u=(function(){function L(R){this.type=s.Syntax.ArrayExpression,this.elements=R}return L})();r.ArrayExpression=u;var h=(function(){function L(R){this.type=s.Syntax.ArrayPattern,this.elements=R}return L})();r.ArrayPattern=h;var l=(function(){function L(R,X,me){this.type=s.Syntax.ArrowFunctionExpression,this.id=null,this.params=R,this.body=X,this.generator=!1,this.expression=me,this.async=!1}return L})();r.ArrowFunctionExpression=l;var y=(function(){function L(R,X,me){this.type=s.Syntax.AssignmentExpression,this.operator=R,this.left=X,this.right=me}return L})();r.AssignmentExpression=y;var p=(function(){function L(R,X){this.type=s.Syntax.AssignmentPattern,this.left=R,this.right=X}return L})();r.AssignmentPattern=p;var m=(function(){function L(R,X,me){this.type=s.Syntax.ArrowFunctionExpression,this.id=null,this.params=R,this.body=X,this.generator=!1,this.expression=me,this.async=!0}return L})();r.AsyncArrowFunctionExpression=m;var f=(function(){function L(R,X,me){this.type=s.Syntax.FunctionDeclaration,this.id=R,this.params=X,this.body=me,this.generator=!1,this.expression=!1,this.async=!0}return L})();r.AsyncFunctionDeclaration=f;var x=(function(){function L(R,X,me){this.type=s.Syntax.FunctionExpression,this.id=R,this.params=X,this.body=me,this.generator=!1,this.expression=!1,this.async=!0}return L})();r.AsyncFunctionExpression=x;var d=(function(){function L(R){this.type=s.Syntax.AwaitExpression,this.argument=R}return L})();r.AwaitExpression=d;var a=(function(){function L(R,X,me){var Se=R==="||"||R==="&&";this.type=Se?s.Syntax.LogicalExpression:s.Syntax.BinaryExpression,this.operator=R,this.left=X,this.right=me}return L})();r.BinaryExpression=a;var o=(function(){function L(R){this.type=s.Syntax.BlockStatement,this.body=R}return L})();r.BlockStatement=o;var c=(function(){function L(R){this.type=s.Syntax.BreakStatement,this.label=R}return L})();r.BreakStatement=c;var g=(function(){function L(R,X){this.type=s.Syntax.CallExpression,this.callee=R,this.arguments=X}return L})();r.CallExpression=g;var v=(function(){function L(R,X){this.type=s.Syntax.CatchClause,this.param=R,this.body=X}return L})();r.CatchClause=v;var E=(function(){function L(R){this.type=s.Syntax.ClassBody,this.body=R}return L})();r.ClassBody=E;var _=(function(){function L(R,X,me){this.type=s.Syntax.ClassDeclaration,this.id=R,this.superClass=X,this.body=me}return L})();r.ClassDeclaration=_;var S=(function(){function L(R,X,me){this.type=s.Syntax.ClassExpression,this.id=R,this.superClass=X,this.body=me}return L})();r.ClassExpression=S;var C=(function(){function L(R,X){this.type=s.Syntax.MemberExpression,this.computed=!0,this.object=R,this.property=X}return L})();r.ComputedMemberExpression=C;var A=(function(){function L(R,X,me){this.type=s.Syntax.ConditionalExpression,this.test=R,this.consequent=X,this.alternate=me}return L})();r.ConditionalExpression=A;var I=(function(){function L(R){this.type=s.Syntax.ContinueStatement,this.label=R}return L})();r.ContinueStatement=I;var B=(function(){function L(){this.type=s.Syntax.DebuggerStatement}return L})();r.DebuggerStatement=B;var k=(function(){function L(R,X){this.type=s.Syntax.ExpressionStatement,this.expression=R,this.directive=X}return L})();r.Directive=k;var T=(function(){function L(R,X){this.type=s.Syntax.DoWhileStatement,this.body=R,this.test=X}return L})();r.DoWhileStatement=T;var P=(function(){function L(){this.type=s.Syntax.EmptyStatement}return L})();r.EmptyStatement=P;var O=(function(){function L(R){this.type=s.Syntax.ExportAllDeclaration,this.source=R}return L})();r.ExportAllDeclaration=O;var G=(function(){function L(R){this.type=s.Syntax.ExportDefaultDeclaration,this.declaration=R}return L})();r.ExportDefaultDeclaration=G;var $=(function(){function L(R,X,me){this.type=s.Syntax.ExportNamedDeclaration,this.declaration=R,this.specifiers=X,this.source=me}return L})();r.ExportNamedDeclaration=$;var z=(function(){function L(R,X){this.type=s.Syntax.ExportSpecifier,this.exported=X,this.local=R}return L})();r.ExportSpecifier=z;var H=(function(){function L(R){this.type=s.Syntax.ExpressionStatement,this.expression=R}return L})();r.ExpressionStatement=H;var Y=(function(){function L(R,X,me){this.type=s.Syntax.ForInStatement,this.left=R,this.right=X,this.body=me,this.each=!1}return L})();r.ForInStatement=Y;var W=(function(){function L(R,X,me){this.type=s.Syntax.ForOfStatement,this.left=R,this.right=X,this.body=me}return L})();r.ForOfStatement=W;var J=(function(){function L(R,X,me,Se){this.type=s.Syntax.ForStatement,this.init=R,this.test=X,this.update=me,this.body=Se}return L})();r.ForStatement=J;var se=(function(){function L(R,X,me,Se){this.type=s.Syntax.FunctionDeclaration,this.id=R,this.params=X,this.body=me,this.generator=Se,this.expression=!1,this.async=!1}return L})();r.FunctionDeclaration=se;var xe=(function(){function L(R,X,me,Se){this.type=s.Syntax.FunctionExpression,this.id=R,this.params=X,this.body=me,this.generator=Se,this.expression=!1,this.async=!1}return L})();r.FunctionExpression=xe;var he=(function(){function L(R){this.type=s.Syntax.Identifier,this.name=R}return L})();r.Identifier=he;var Ee=(function(){function L(R,X,me){this.type=s.Syntax.IfStatement,this.test=R,this.consequent=X,this.alternate=me}return L})();r.IfStatement=Ee;var te=(function(){function L(R,X){this.type=s.Syntax.ImportDeclaration,this.specifiers=R,this.source=X}return L})();r.ImportDeclaration=te;var ne=(function(){function L(R){this.type=s.Syntax.ImportDefaultSpecifier,this.local=R}return L})();r.ImportDefaultSpecifier=ne;var re=(function(){function L(R){this.type=s.Syntax.ImportNamespaceSpecifier,this.local=R}return L})();r.ImportNamespaceSpecifier=re;var ae=(function(){function L(R,X){this.type=s.Syntax.ImportSpecifier,this.local=R,this.imported=X}return L})();r.ImportSpecifier=ae;var oe=(function(){function L(R,X){this.type=s.Syntax.LabeledStatement,this.label=R,this.body=X}return L})();r.LabeledStatement=oe;var j=(function(){function L(R,X){this.type=s.Syntax.Literal,this.value=R,this.raw=X}return L})();r.Literal=j;var ee=(function(){function L(R,X){this.type=s.Syntax.MetaProperty,this.meta=R,this.property=X}return L})();r.MetaProperty=ee;var le=(function(){function L(R,X,me,Se,Ut){this.type=s.Syntax.MethodDefinition,this.key=R,this.computed=X,this.value=me,this.kind=Se,this.static=Ut}return L})();r.MethodDefinition=le;var pe=(function(){function L(R){this.type=s.Syntax.Program,this.body=R,this.sourceType="module"}return L})();r.Module=pe;var Ae=(function(){function L(R,X){this.type=s.Syntax.NewExpression,this.callee=R,this.arguments=X}return L})();r.NewExpression=Ae;var Pe=(function(){function L(R){this.type=s.Syntax.ObjectExpression,this.properties=R}return L})();r.ObjectExpression=Pe;var Ce=(function(){function L(R){this.type=s.Syntax.ObjectPattern,this.properties=R}return L})();r.ObjectPattern=Ce;var je=(function(){function L(R,X,me,Se,Ut,D){this.type=s.Syntax.Property,this.key=X,this.computed=me,this.value=Se,this.kind=R,this.method=Ut,this.shorthand=D}return L})();r.Property=je;var ue=(function(){function L(R,X,me,Se){this.type=s.Syntax.Literal,this.value=R,this.raw=X,this.regex={pattern:me,flags:Se}}return L})();r.RegexLiteral=ue;var Z=(function(){function L(R){this.type=s.Syntax.RestElement,this.argument=R}return L})();r.RestElement=Z;var fe=(function(){function L(R){this.type=s.Syntax.ReturnStatement,this.argument=R}return L})();r.ReturnStatement=fe;var q=(function(){function L(R){this.type=s.Syntax.Program,this.body=R,this.sourceType="script"}return L})();r.Script=q;var ge=(function(){function L(R){this.type=s.Syntax.SequenceExpression,this.expressions=R}return L})();r.SequenceExpression=ge;var qe=(function(){function L(R){this.type=s.Syntax.SpreadElement,this.argument=R}return L})();r.SpreadElement=qe;var Me=(function(){function L(R,X){this.type=s.Syntax.MemberExpression,this.computed=!1,this.object=R,this.property=X}return L})();r.StaticMemberExpression=Me;var _e=(function(){function L(){this.type=s.Syntax.Super}return L})();r.Super=_e;var Ne=(function(){function L(R,X){this.type=s.Syntax.SwitchCase,this.test=R,this.consequent=X}return L})();r.SwitchCase=Ne;var Le=(function(){function L(R,X){this.type=s.Syntax.SwitchStatement,this.discriminant=R,this.cases=X}return L})();r.SwitchStatement=Le;var we=(function(){function L(R,X){this.type=s.Syntax.TaggedTemplateExpression,this.tag=R,this.quasi=X}return L})();r.TaggedTemplateExpression=we;var Te=(function(){function L(R,X){this.type=s.Syntax.TemplateElement,this.value=R,this.tail=X}return L})();r.TemplateElement=Te;var We=(function(){function L(R,X){this.type=s.Syntax.TemplateLiteral,this.quasis=R,this.expressions=X}return L})();r.TemplateLiteral=We;var ft=(function(){function L(){this.type=s.Syntax.ThisExpression}return L})();r.ThisExpression=ft;var ot=(function(){function L(R){this.type=s.Syntax.ThrowStatement,this.argument=R}return L})();r.ThrowStatement=ot;var ht=(function(){function L(R,X,me){this.type=s.Syntax.TryStatement,this.block=R,this.handler=X,this.finalizer=me}return L})();r.TryStatement=ht;var gt=(function(){function L(R,X){this.type=s.Syntax.UnaryExpression,this.operator=R,this.argument=X,this.prefix=!0}return L})();r.UnaryExpression=gt;var Rt=(function(){function L(R,X,me){this.type=s.Syntax.UpdateExpression,this.operator=R,this.argument=X,this.prefix=me}return L})();r.UpdateExpression=Rt;var Pt=(function(){function L(R,X){this.type=s.Syntax.VariableDeclaration,this.declarations=R,this.kind=X}return L})();r.VariableDeclaration=Pt;var Dt=(function(){function L(R,X){this.type=s.Syntax.VariableDeclarator,this.id=R,this.init=X}return L})();r.VariableDeclarator=Dt;var At=(function(){function L(R,X){this.type=s.Syntax.WhileStatement,this.test=R,this.body=X}return L})();r.WhileStatement=At;var Ct=(function(){function L(R,X){this.type=s.Syntax.WithStatement,this.object=R,this.body=X}return L})();r.WithStatement=Ct;var St=(function(){function L(R,X){this.type=s.Syntax.YieldExpression,this.argument=R,this.delegate=X}return L})();r.YieldExpression=St},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(9),u=i(10),h=i(11),l=i(7),y=i(12),p=i(2),m=i(13),f="ArrowParameterPlaceHolder",x=(function(){function d(a,o,c){o===void 0&&(o={}),this.config={range:typeof o.range=="boolean"&&o.range,loc:typeof o.loc=="boolean"&&o.loc,source:null,tokens:typeof o.tokens=="boolean"&&o.tokens,comment:typeof o.comment=="boolean"&&o.comment,tolerant:typeof o.tolerant=="boolean"&&o.tolerant},this.config.loc&&o.source&&o.source!==null&&(this.config.source=String(o.source)),this.delegate=c,this.errorHandler=new u.ErrorHandler,this.errorHandler.tolerant=this.config.tolerant,this.scanner=new y.Scanner(a,this.errorHandler),this.scanner.trackComment=this.config.comment,this.operatorPrecedence={")":0,";":0,",":0,"=":0,"]":0,"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":11,"/":11,"%":11},this.lookahead={type:2,value:"",lineNumber:this.scanner.lineNumber,lineStart:0,start:0,end:0},this.hasLineTerminator=!1,this.context={isModule:!1,await:!1,allowIn:!0,allowStrictDirective:!0,allowYield:!0,firstCoverInitializedNameError:null,isAssignmentTarget:!1,isBindingElement:!1,inFunctionBody:!1,inIteration:!1,inSwitch:!1,labelSet:{},strict:!1},this.tokens=[],this.startMarker={index:0,line:this.scanner.lineNumber,column:0},this.lastMarker={index:0,line:this.scanner.lineNumber,column:0},this.nextToken(),this.lastMarker={index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}}return d.prototype.throwError=function(a){var o=Array.prototype.slice.call(arguments,1),c=a.replace(/%(\d)/g,function(_,S){return s.assert(S<o.length,"Message reference must be in range"),o[S]}),g=this.lastMarker.index,v=this.lastMarker.line,E=this.lastMarker.column+1;throw this.errorHandler.createError(g,v,E,c)},d.prototype.tolerateError=function(a){var o=Array.prototype.slice.call(arguments,1),c=a.replace(/%(\d)/g,function(_,S){return s.assert(S<o.length,"Message reference must be in range"),o[S]}),g=this.lastMarker.index,v=this.scanner.lineNumber,E=this.lastMarker.column+1;this.errorHandler.tolerateError(g,v,E,c)},d.prototype.unexpectedTokenError=function(a,o){var c=o||h.Messages.UnexpectedToken,g;if(a?(o||(c=a.type===2?h.Messages.UnexpectedEOS:a.type===3?h.Messages.UnexpectedIdentifier:a.type===6?h.Messages.UnexpectedNumber:a.type===8?h.Messages.UnexpectedString:a.type===10?h.Messages.UnexpectedTemplate:h.Messages.UnexpectedToken,a.type===4&&(this.scanner.isFutureReservedWord(a.value)?c=h.Messages.UnexpectedReserved:this.context.strict&&this.scanner.isStrictModeReservedWord(a.value)&&(c=h.Messages.StrictReservedWord))),g=a.value):g="ILLEGAL",c=c.replace("%0",g),a&&typeof a.lineNumber=="number"){var v=a.start,E=a.lineNumber,_=this.lastMarker.index-this.lastMarker.column,S=a.start-_+1;return this.errorHandler.createError(v,E,S,c)}else{var v=this.lastMarker.index,E=this.lastMarker.line,S=this.lastMarker.column+1;return this.errorHandler.createError(v,E,S,c)}},d.prototype.throwUnexpectedToken=function(a,o){throw this.unexpectedTokenError(a,o)},d.prototype.tolerateUnexpectedToken=function(a,o){this.errorHandler.tolerate(this.unexpectedTokenError(a,o))},d.prototype.collectComments=function(){if(!this.config.comment)this.scanner.scanComments();else{var a=this.scanner.scanComments();if(a.length>0&&this.delegate)for(var o=0;o<a.length;++o){var c=a[o],g=void 0;g={type:c.multiLine?"BlockComment":"LineComment",value:this.scanner.source.slice(c.slice[0],c.slice[1])},this.config.range&&(g.range=c.range),this.config.loc&&(g.loc=c.loc);var v={start:{line:c.loc.start.line,column:c.loc.start.column,offset:c.range[0]},end:{line:c.loc.end.line,column:c.loc.end.column,offset:c.range[1]}};this.delegate(g,v)}}},d.prototype.getTokenRaw=function(a){return this.scanner.source.slice(a.start,a.end)},d.prototype.convertToken=function(a){var o={type:m.TokenName[a.type],value:this.getTokenRaw(a)};if(this.config.range&&(o.range=[a.start,a.end]),this.config.loc&&(o.loc={start:{line:this.startMarker.line,column:this.startMarker.column},end:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}}),a.type===9){var c=a.pattern,g=a.flags;o.regex={pattern:c,flags:g}}return o},d.prototype.nextToken=function(){var a=this.lookahead;this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart,this.collectComments(),this.scanner.index!==this.startMarker.index&&(this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart);var o=this.scanner.lex();return this.hasLineTerminator=a.lineNumber!==o.lineNumber,o&&this.context.strict&&o.type===3&&this.scanner.isStrictModeReservedWord(o.value)&&(o.type=4),this.lookahead=o,this.config.tokens&&o.type!==2&&this.tokens.push(this.convertToken(o)),a},d.prototype.nextRegexToken=function(){this.collectComments();var a=this.scanner.scanRegExp();return this.config.tokens&&(this.tokens.pop(),this.tokens.push(this.convertToken(a))),this.lookahead=a,this.nextToken(),a},d.prototype.createNode=function(){return{index:this.startMarker.index,line:this.startMarker.line,column:this.startMarker.column}},d.prototype.startNode=function(a,o){o===void 0&&(o=0);var c=a.start-a.lineStart,g=a.lineNumber;return c<0&&(c+=o,g--),{index:a.start,line:g,column:c}},d.prototype.finalize=function(a,o){if(this.config.range&&(o.range=[a.index,this.lastMarker.index]),this.config.loc&&(o.loc={start:{line:a.line,column:a.column},end:{line:this.lastMarker.line,column:this.lastMarker.column}},this.config.source&&(o.loc.source=this.config.source)),this.delegate){var c={start:{line:a.line,column:a.column,offset:a.index},end:{line:this.lastMarker.line,column:this.lastMarker.column,offset:this.lastMarker.index}};this.delegate(o,c)}return o},d.prototype.expect=function(a){var o=this.nextToken();(o.type!==7||o.value!==a)&&this.throwUnexpectedToken(o)},d.prototype.expectCommaSeparator=function(){if(this.config.tolerant){var a=this.lookahead;a.type===7&&a.value===","?this.nextToken():a.type===7&&a.value===";"?(this.nextToken(),this.tolerateUnexpectedToken(a)):this.tolerateUnexpectedToken(a,h.Messages.UnexpectedToken)}else this.expect(",")},d.prototype.expectKeyword=function(a){var o=this.nextToken();(o.type!==4||o.value!==a)&&this.throwUnexpectedToken(o)},d.prototype.match=function(a){return this.lookahead.type===7&&this.lookahead.value===a},d.prototype.matchKeyword=function(a){return this.lookahead.type===4&&this.lookahead.value===a},d.prototype.matchContextualKeyword=function(a){return this.lookahead.type===3&&this.lookahead.value===a},d.prototype.matchAssign=function(){if(this.lookahead.type!==7)return!1;var a=this.lookahead.value;return a==="="||a==="*="||a==="**="||a==="/="||a==="%="||a==="+="||a==="-="||a==="<<="||a===">>="||a===">>>="||a==="&="||a==="^="||a==="|="},d.prototype.isolateCoverGrammar=function(a){var o=this.context.isBindingElement,c=this.context.isAssignmentTarget,g=this.context.firstCoverInitializedNameError;this.context.isBindingElement=!0,this.context.isAssignmentTarget=!0,this.context.firstCoverInitializedNameError=null;var v=a.call(this);return this.context.firstCoverInitializedNameError!==null&&this.throwUnexpectedToken(this.context.firstCoverInitializedNameError),this.context.isBindingElement=o,this.context.isAssignmentTarget=c,this.context.firstCoverInitializedNameError=g,v},d.prototype.inheritCoverGrammar=function(a){var o=this.context.isBindingElement,c=this.context.isAssignmentTarget,g=this.context.firstCoverInitializedNameError;this.context.isBindingElement=!0,this.context.isAssignmentTarget=!0,this.context.firstCoverInitializedNameError=null;var v=a.call(this);return this.context.isBindingElement=this.context.isBindingElement&&o,this.context.isAssignmentTarget=this.context.isAssignmentTarget&&c,this.context.firstCoverInitializedNameError=g||this.context.firstCoverInitializedNameError,v},d.prototype.consumeSemicolon=function(){this.match(";")?this.nextToken():this.hasLineTerminator||(this.lookahead.type!==2&&!this.match("}")&&this.throwUnexpectedToken(this.lookahead),this.lastMarker.index=this.startMarker.index,this.lastMarker.line=this.startMarker.line,this.lastMarker.column=this.startMarker.column)},d.prototype.parsePrimaryExpression=function(){var a=this.createNode(),o,c,g;switch(this.lookahead.type){case 3:(this.context.isModule||this.context.await)&&this.lookahead.value==="await"&&this.tolerateUnexpectedToken(this.lookahead),o=this.matchAsyncFunction()?this.parseFunctionExpression():this.finalize(a,new l.Identifier(this.nextToken().value));break;case 6:case 8:this.context.strict&&this.lookahead.octal&&this.tolerateUnexpectedToken(this.lookahead,h.Messages.StrictOctalLiteral),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,c=this.nextToken(),g=this.getTokenRaw(c),o=this.finalize(a,new l.Literal(c.value,g));break;case 1:this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,c=this.nextToken(),g=this.getTokenRaw(c),o=this.finalize(a,new l.Literal(c.value==="true",g));break;case 5:this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,c=this.nextToken(),g=this.getTokenRaw(c),o=this.finalize(a,new l.Literal(null,g));break;case 10:o=this.parseTemplateLiteral();break;case 7:switch(this.lookahead.value){case"(":this.context.isBindingElement=!1,o=this.inheritCoverGrammar(this.parseGroupExpression);break;case"[":o=this.inheritCoverGrammar(this.parseArrayInitializer);break;case"{":o=this.inheritCoverGrammar(this.parseObjectInitializer);break;case"/":case"/=":this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,this.scanner.index=this.startMarker.index,c=this.nextRegexToken(),g=this.getTokenRaw(c),o=this.finalize(a,new l.RegexLiteral(c.regex,g,c.pattern,c.flags));break;default:o=this.throwUnexpectedToken(this.nextToken())}break;case 4:!this.context.strict&&this.context.allowYield&&this.matchKeyword("yield")?o=this.parseIdentifierName():!this.context.strict&&this.matchKeyword("let")?o=this.finalize(a,new l.Identifier(this.nextToken().value)):(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,this.matchKeyword("function")?o=this.parseFunctionExpression():this.matchKeyword("this")?(this.nextToken(),o=this.finalize(a,new l.ThisExpression)):this.matchKeyword("class")?o=this.parseClassExpression():o=this.throwUnexpectedToken(this.nextToken()));break;default:o=this.throwUnexpectedToken(this.nextToken())}return o},d.prototype.parseSpreadElement=function(){var a=this.createNode();this.expect("...");var o=this.inheritCoverGrammar(this.parseAssignmentExpression);return this.finalize(a,new l.SpreadElement(o))},d.prototype.parseArrayInitializer=function(){var a=this.createNode(),o=[];for(this.expect("[");!this.match("]");)if(this.match(","))this.nextToken(),o.push(null);else if(this.match("...")){var c=this.parseSpreadElement();this.match("]")||(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,this.expect(",")),o.push(c)}else o.push(this.inheritCoverGrammar(this.parseAssignmentExpression)),this.match("]")||this.expect(",");return this.expect("]"),this.finalize(a,new l.ArrayExpression(o))},d.prototype.parsePropertyMethod=function(a){this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;var o=this.context.strict,c=this.context.allowStrictDirective;this.context.allowStrictDirective=a.simple;var g=this.isolateCoverGrammar(this.parseFunctionSourceElements);return this.context.strict&&a.firstRestricted&&this.tolerateUnexpectedToken(a.firstRestricted,a.message),this.context.strict&&a.stricted&&this.tolerateUnexpectedToken(a.stricted,a.message),this.context.strict=o,this.context.allowStrictDirective=c,g},d.prototype.parsePropertyMethodFunction=function(){var a=!1,o=this.createNode(),c=this.context.allowYield;this.context.allowYield=!0;var g=this.parseFormalParameters(),v=this.parsePropertyMethod(g);return this.context.allowYield=c,this.finalize(o,new l.FunctionExpression(null,g.params,v,a))},d.prototype.parsePropertyMethodAsyncFunction=function(){var a=this.createNode(),o=this.context.allowYield,c=this.context.await;this.context.allowYield=!1,this.context.await=!0;var g=this.parseFormalParameters(),v=this.parsePropertyMethod(g);return this.context.allowYield=o,this.context.await=c,this.finalize(a,new l.AsyncFunctionExpression(null,g.params,v))},d.prototype.parseObjectPropertyKey=function(){var a=this.createNode(),o=this.nextToken(),c;switch(o.type){case 8:case 6:this.context.strict&&o.octal&&this.tolerateUnexpectedToken(o,h.Messages.StrictOctalLiteral);var g=this.getTokenRaw(o);c=this.finalize(a,new l.Literal(o.value,g));break;case 3:case 1:case 5:case 4:c=this.finalize(a,new l.Identifier(o.value));break;case 7:o.value==="["?(c=this.isolateCoverGrammar(this.parseAssignmentExpression),this.expect("]")):c=this.throwUnexpectedToken(o);break;default:c=this.throwUnexpectedToken(o)}return c},d.prototype.isPropertyKey=function(a,o){return a.type===p.Syntax.Identifier&&a.name===o||a.type===p.Syntax.Literal&&a.value===o},d.prototype.parseObjectProperty=function(a){var o=this.createNode(),c=this.lookahead,g,v=null,E=null,_=!1,S=!1,C=!1,A=!1;if(c.type===3){var I=c.value;this.nextToken(),_=this.match("["),A=!this.hasLineTerminator&&I==="async"&&!this.match(":")&&!this.match("(")&&!this.match("*")&&!this.match(","),v=A?this.parseObjectPropertyKey():this.finalize(o,new l.Identifier(I))}else this.match("*")?this.nextToken():(_=this.match("["),v=this.parseObjectPropertyKey());var B=this.qualifiedPropertyName(this.lookahead);if(c.type===3&&!A&&c.value==="get"&&B)g="get",_=this.match("["),v=this.parseObjectPropertyKey(),this.context.allowYield=!1,E=this.parseGetterMethod();else if(c.type===3&&!A&&c.value==="set"&&B)g="set",_=this.match("["),v=this.parseObjectPropertyKey(),E=this.parseSetterMethod();else if(c.type===7&&c.value==="*"&&B)g="init",_=this.match("["),v=this.parseObjectPropertyKey(),E=this.parseGeneratorMethod(),S=!0;else if(v||this.throwUnexpectedToken(this.lookahead),g="init",this.match(":")&&!A)!_&&this.isPropertyKey(v,"__proto__")&&(a.value&&this.tolerateError(h.Messages.DuplicateProtoProperty),a.value=!0),this.nextToken(),E=this.inheritCoverGrammar(this.parseAssignmentExpression);else if(this.match("("))E=A?this.parsePropertyMethodAsyncFunction():this.parsePropertyMethodFunction(),S=!0;else if(c.type===3){var I=this.finalize(o,new l.Identifier(c.value));if(this.match("=")){this.context.firstCoverInitializedNameError=this.lookahead,this.nextToken(),C=!0;var k=this.isolateCoverGrammar(this.parseAssignmentExpression);E=this.finalize(o,new l.AssignmentPattern(I,k))}else C=!0,E=I}else this.throwUnexpectedToken(this.nextToken());return this.finalize(o,new l.Property(g,v,_,E,S,C))},d.prototype.parseObjectInitializer=function(){var a=this.createNode();this.expect("{");for(var o=[],c={value:!1};!this.match("}");)o.push(this.parseObjectProperty(c)),this.match("}")||this.expectCommaSeparator();return this.expect("}"),this.finalize(a,new l.ObjectExpression(o))},d.prototype.parseTemplateHead=function(){s.assert(this.lookahead.head,"Template literal must start with a template head");var a=this.createNode(),o=this.nextToken(),c=o.value,g=o.cooked;return this.finalize(a,new l.TemplateElement({raw:c,cooked:g},o.tail))},d.prototype.parseTemplateElement=function(){this.lookahead.type!==10&&this.throwUnexpectedToken();var a=this.createNode(),o=this.nextToken(),c=o.value,g=o.cooked;return this.finalize(a,new l.TemplateElement({raw:c,cooked:g},o.tail))},d.prototype.parseTemplateLiteral=function(){var a=this.createNode(),o=[],c=[],g=this.parseTemplateHead();for(c.push(g);!g.tail;)o.push(this.parseExpression()),g=this.parseTemplateElement(),c.push(g);return this.finalize(a,new l.TemplateLiteral(c,o))},d.prototype.reinterpretExpressionAsPattern=function(a){switch(a.type){case p.Syntax.Identifier:case p.Syntax.MemberExpression:case p.Syntax.RestElement:case p.Syntax.AssignmentPattern:break;case p.Syntax.SpreadElement:a.type=p.Syntax.RestElement,this.reinterpretExpressionAsPattern(a.argument);break;case p.Syntax.ArrayExpression:a.type=p.Syntax.ArrayPattern;for(var o=0;o<a.elements.length;o++)a.elements[o]!==null&&this.reinterpretExpressionAsPattern(a.elements[o]);break;case p.Syntax.ObjectExpression:a.type=p.Syntax.ObjectPattern;for(var o=0;o<a.properties.length;o++)this.reinterpretExpressionAsPattern(a.properties[o].value);break;case p.Syntax.AssignmentExpression:a.type=p.Syntax.AssignmentPattern,delete a.operator,this.reinterpretExpressionAsPattern(a.left);break}},d.prototype.parseGroupExpression=function(){var a;if(this.expect("("),this.match(")"))this.nextToken(),this.match("=>")||this.expect("=>"),a={type:f,params:[],async:!1};else{var o=this.lookahead,c=[];if(this.match("..."))a=this.parseRestElement(c),this.expect(")"),this.match("=>")||this.expect("=>"),a={type:f,params:[a],async:!1};else{var g=!1;if(this.context.isBindingElement=!0,a=this.inheritCoverGrammar(this.parseAssignmentExpression),this.match(",")){var v=[];for(this.context.isAssignmentTarget=!1,v.push(a);this.lookahead.type!==2&&this.match(",");){if(this.nextToken(),this.match(")")){this.nextToken();for(var E=0;E<v.length;E++)this.reinterpretExpressionAsPattern(v[E]);g=!0,a={type:f,params:v,async:!1}}else if(this.match("...")){this.context.isBindingElement||this.throwUnexpectedToken(this.lookahead),v.push(this.parseRestElement(c)),this.expect(")"),this.match("=>")||this.expect("=>"),this.context.isBindingElement=!1;for(var E=0;E<v.length;E++)this.reinterpretExpressionAsPattern(v[E]);g=!0,a={type:f,params:v,async:!1}}else v.push(this.inheritCoverGrammar(this.parseAssignmentExpression));if(g)break}g||(a=this.finalize(this.startNode(o),new l.SequenceExpression(v)))}if(!g){if(this.expect(")"),this.match("=>")&&(a.type===p.Syntax.Identifier&&a.name==="yield"&&(g=!0,a={type:f,params:[a],async:!1}),!g)){if(this.context.isBindingElement||this.throwUnexpectedToken(this.lookahead),a.type===p.Syntax.SequenceExpression)for(var E=0;E<a.expressions.length;E++)this.reinterpretExpressionAsPattern(a.expressions[E]);else this.reinterpretExpressionAsPattern(a);var _=a.type===p.Syntax.SequenceExpression?a.expressions:[a];a={type:f,params:_,async:!1}}this.context.isBindingElement=!1}}}return a},d.prototype.parseArguments=function(){this.expect("(");var a=[];if(!this.match(")"))for(;;){var o=this.match("...")?this.parseSpreadElement():this.isolateCoverGrammar(this.parseAssignmentExpression);if(a.push(o),this.match(")")||(this.expectCommaSeparator(),this.match(")")))break}return this.expect(")"),a},d.prototype.isIdentifierName=function(a){return a.type===3||a.type===4||a.type===1||a.type===5},d.prototype.parseIdentifierName=function(){var a=this.createNode(),o=this.nextToken();return this.isIdentifierName(o)||this.throwUnexpectedToken(o),this.finalize(a,new l.Identifier(o.value))},d.prototype.parseNewExpression=function(){var a=this.createNode(),o=this.parseIdentifierName();s.assert(o.name==="new","New expression must start with `new`");var c;if(this.match("."))if(this.nextToken(),this.lookahead.type===3&&this.context.inFunctionBody&&this.lookahead.value==="target"){var g=this.parseIdentifierName();c=new l.MetaProperty(o,g)}else this.throwUnexpectedToken(this.lookahead);else{var v=this.isolateCoverGrammar(this.parseLeftHandSideExpression),E=this.match("(")?this.parseArguments():[];c=new l.NewExpression(v,E),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}return this.finalize(a,c)},d.prototype.parseAsyncArgument=function(){var a=this.parseAssignmentExpression();return this.context.firstCoverInitializedNameError=null,a},d.prototype.parseAsyncArguments=function(){this.expect("(");var a=[];if(!this.match(")"))for(;;){var o=this.match("...")?this.parseSpreadElement():this.isolateCoverGrammar(this.parseAsyncArgument);if(a.push(o),this.match(")")||(this.expectCommaSeparator(),this.match(")")))break}return this.expect(")"),a},d.prototype.parseLeftHandSideExpressionAllowCall=function(){var a=this.lookahead,o=this.matchContextualKeyword("async"),c=this.context.allowIn;this.context.allowIn=!0;var g;for(this.matchKeyword("super")&&this.context.inFunctionBody?(g=this.createNode(),this.nextToken(),g=this.finalize(g,new l.Super),!this.match("(")&&!this.match(".")&&!this.match("[")&&this.throwUnexpectedToken(this.lookahead)):g=this.inheritCoverGrammar(this.matchKeyword("new")?this.parseNewExpression:this.parsePrimaryExpression);;)if(this.match(".")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect(".");var v=this.parseIdentifierName();g=this.finalize(this.startNode(a),new l.StaticMemberExpression(g,v))}else if(this.match("(")){var E=o&&a.lineNumber===this.lookahead.lineNumber;this.context.isBindingElement=!1,this.context.isAssignmentTarget=!1;var _=E?this.parseAsyncArguments():this.parseArguments();if(g=this.finalize(this.startNode(a),new l.CallExpression(g,_)),E&&this.match("=>")){for(var S=0;S<_.length;++S)this.reinterpretExpressionAsPattern(_[S]);g={type:f,params:_,async:!0}}}else if(this.match("[")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("[");var v=this.isolateCoverGrammar(this.parseExpression);this.expect("]"),g=this.finalize(this.startNode(a),new l.ComputedMemberExpression(g,v))}else if(this.lookahead.type===10&&this.lookahead.head){var C=this.parseTemplateLiteral();g=this.finalize(this.startNode(a),new l.TaggedTemplateExpression(g,C))}else break;return this.context.allowIn=c,g},d.prototype.parseSuper=function(){var a=this.createNode();return this.expectKeyword("super"),!this.match("[")&&!this.match(".")&&this.throwUnexpectedToken(this.lookahead),this.finalize(a,new l.Super)},d.prototype.parseLeftHandSideExpression=function(){s.assert(this.context.allowIn,"callee of new expression always allow in keyword.");for(var a=this.startNode(this.lookahead),o=this.matchKeyword("super")&&this.context.inFunctionBody?this.parseSuper():this.inheritCoverGrammar(this.matchKeyword("new")?this.parseNewExpression:this.parsePrimaryExpression);;)if(this.match("[")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("[");var c=this.isolateCoverGrammar(this.parseExpression);this.expect("]"),o=this.finalize(a,new l.ComputedMemberExpression(o,c))}else if(this.match(".")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect(".");var c=this.parseIdentifierName();o=this.finalize(a,new l.StaticMemberExpression(o,c))}else if(this.lookahead.type===10&&this.lookahead.head){var g=this.parseTemplateLiteral();o=this.finalize(a,new l.TaggedTemplateExpression(o,g))}else break;return o},d.prototype.parseUpdateExpression=function(){var a,o=this.lookahead;if(this.match("++")||this.match("--")){var c=this.startNode(o),g=this.nextToken();a=this.inheritCoverGrammar(this.parseUnaryExpression),this.context.strict&&a.type===p.Syntax.Identifier&&this.scanner.isRestrictedWord(a.name)&&this.tolerateError(h.Messages.StrictLHSPrefix),this.context.isAssignmentTarget||this.tolerateError(h.Messages.InvalidLHSInAssignment);var v=!0;a=this.finalize(c,new l.UpdateExpression(g.value,a,v)),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}else if(a=this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall),!this.hasLineTerminator&&this.lookahead.type===7&&(this.match("++")||this.match("--"))){this.context.strict&&a.type===p.Syntax.Identifier&&this.scanner.isRestrictedWord(a.name)&&this.tolerateError(h.Messages.StrictLHSPostfix),this.context.isAssignmentTarget||this.tolerateError(h.Messages.InvalidLHSInAssignment),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;var E=this.nextToken().value,v=!1;a=this.finalize(this.startNode(o),new l.UpdateExpression(E,a,v))}return a},d.prototype.parseAwaitExpression=function(){var a=this.createNode();this.nextToken();var o=this.parseUnaryExpression();return this.finalize(a,new l.AwaitExpression(o))},d.prototype.parseUnaryExpression=function(){var a;if(this.match("+")||this.match("-")||this.match("~")||this.match("!")||this.matchKeyword("delete")||this.matchKeyword("void")||this.matchKeyword("typeof")){var o=this.startNode(this.lookahead),c=this.nextToken();a=this.inheritCoverGrammar(this.parseUnaryExpression),a=this.finalize(o,new l.UnaryExpression(c.value,a)),this.context.strict&&a.operator==="delete"&&a.argument.type===p.Syntax.Identifier&&this.tolerateError(h.Messages.StrictDelete),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}else this.context.await&&this.matchContextualKeyword("await")?a=this.parseAwaitExpression():a=this.parseUpdateExpression();return a},d.prototype.parseExponentiationExpression=function(){var a=this.lookahead,o=this.inheritCoverGrammar(this.parseUnaryExpression);if(o.type!==p.Syntax.UnaryExpression&&this.match("**")){this.nextToken(),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;var c=o,g=this.isolateCoverGrammar(this.parseExponentiationExpression);o=this.finalize(this.startNode(a),new l.BinaryExpression("**",c,g))}return o},d.prototype.binaryPrecedence=function(a){var o=a.value,c;return a.type===7?c=this.operatorPrecedence[o]||0:a.type===4?c=o==="instanceof"||this.context.allowIn&&o==="in"?7:0:c=0,c},d.prototype.parseBinaryExpression=function(){var a=this.lookahead,o=this.inheritCoverGrammar(this.parseExponentiationExpression),c=this.lookahead,g=this.binaryPrecedence(c);if(g>0){this.nextToken(),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;for(var v=[a,this.lookahead],E=o,_=this.isolateCoverGrammar(this.parseExponentiationExpression),S=[E,c.value,_],C=[g];g=this.binaryPrecedence(this.lookahead),!(g<=0);){for(;S.length>2&&g<=C[C.length-1];){_=S.pop();var A=S.pop();C.pop(),E=S.pop(),v.pop();var I=this.startNode(v[v.length-1]);S.push(this.finalize(I,new l.BinaryExpression(A,E,_)))}S.push(this.nextToken().value),C.push(g),v.push(this.lookahead),S.push(this.isolateCoverGrammar(this.parseExponentiationExpression))}var B=S.length-1;o=S[B];for(var k=v.pop();B>1;){var T=v.pop(),P=k&&k.lineStart,I=this.startNode(T,P),A=S[B-1];o=this.finalize(I,new l.BinaryExpression(A,S[B-2],o)),B-=2,k=T}}return o},d.prototype.parseConditionalExpression=function(){var a=this.lookahead,o=this.inheritCoverGrammar(this.parseBinaryExpression);if(this.match("?")){this.nextToken();var c=this.context.allowIn;this.context.allowIn=!0;var g=this.isolateCoverGrammar(this.parseAssignmentExpression);this.context.allowIn=c,this.expect(":");var v=this.isolateCoverGrammar(this.parseAssignmentExpression);o=this.finalize(this.startNode(a),new l.ConditionalExpression(o,g,v)),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}return o},d.prototype.checkPatternParam=function(a,o){switch(o.type){case p.Syntax.Identifier:this.validateParam(a,o,o.name);break;case p.Syntax.RestElement:this.checkPatternParam(a,o.argument);break;case p.Syntax.AssignmentPattern:this.checkPatternParam(a,o.left);break;case p.Syntax.ArrayPattern:for(var c=0;c<o.elements.length;c++)o.elements[c]!==null&&this.checkPatternParam(a,o.elements[c]);break;case p.Syntax.ObjectPattern:for(var c=0;c<o.properties.length;c++)this.checkPatternParam(a,o.properties[c].value);break}a.simple=a.simple&&o instanceof l.Identifier},d.prototype.reinterpretAsCoverFormalsList=function(a){var o=[a],c,g=!1;switch(a.type){case p.Syntax.Identifier:break;case f:o=a.params,g=a.async;break;default:return null}c={simple:!0,paramSet:{}};for(var v=0;v<o.length;++v){var E=o[v];E.type===p.Syntax.AssignmentPattern?E.right.type===p.Syntax.YieldExpression&&(E.right.argument&&this.throwUnexpectedToken(this.lookahead),E.right.type=p.Syntax.Identifier,E.right.name="yield",delete E.right.argument,delete E.right.delegate):g&&E.type===p.Syntax.Identifier&&E.name==="await"&&this.throwUnexpectedToken(this.lookahead),this.checkPatternParam(c,E),o[v]=E}if(this.context.strict||!this.context.allowYield)for(var v=0;v<o.length;++v){var E=o[v];E.type===p.Syntax.YieldExpression&&this.throwUnexpectedToken(this.lookahead)}if(c.message===h.Messages.StrictParamDupe){var _=this.context.strict?c.stricted:c.firstRestricted;this.throwUnexpectedToken(_,c.message)}return{simple:c.simple,params:o,stricted:c.stricted,firstRestricted:c.firstRestricted,message:c.message}},d.prototype.parseAssignmentExpression=function(){var a;if(!this.context.allowYield&&this.matchKeyword("yield"))a=this.parseYieldExpression();else{var o=this.lookahead,c=o;if(a=this.parseConditionalExpression(),c.type===3&&c.lineNumber===this.lookahead.lineNumber&&c.value==="async"&&(this.lookahead.type===3||this.matchKeyword("yield"))){var g=this.parsePrimaryExpression();this.reinterpretExpressionAsPattern(g),a={type:f,params:[g],async:!0}}if(a.type===f||this.match("=>")){this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;var v=a.async,E=this.reinterpretAsCoverFormalsList(a);if(E){this.hasLineTerminator&&this.tolerateUnexpectedToken(this.lookahead),this.context.firstCoverInitializedNameError=null;var _=this.context.strict,S=this.context.allowStrictDirective;this.context.allowStrictDirective=E.simple;var C=this.context.allowYield,A=this.context.await;this.context.allowYield=!0,this.context.await=v;var I=this.startNode(o);this.expect("=>");var B=void 0;if(this.match("{")){var k=this.context.allowIn;this.context.allowIn=!0,B=this.parseFunctionSourceElements(),this.context.allowIn=k}else B=this.isolateCoverGrammar(this.parseAssignmentExpression);var T=B.type!==p.Syntax.BlockStatement;this.context.strict&&E.firstRestricted&&this.throwUnexpectedToken(E.firstRestricted,E.message),this.context.strict&&E.stricted&&this.tolerateUnexpectedToken(E.stricted,E.message),a=v?this.finalize(I,new l.AsyncArrowFunctionExpression(E.params,B,T)):this.finalize(I,new l.ArrowFunctionExpression(E.params,B,T)),this.context.strict=_,this.context.allowStrictDirective=S,this.context.allowYield=C,this.context.await=A}}else if(this.matchAssign()){if(this.context.isAssignmentTarget||this.tolerateError(h.Messages.InvalidLHSInAssignment),this.context.strict&&a.type===p.Syntax.Identifier){var P=a;this.scanner.isRestrictedWord(P.name)&&this.tolerateUnexpectedToken(c,h.Messages.StrictLHSAssignment),this.scanner.isStrictModeReservedWord(P.name)&&this.tolerateUnexpectedToken(c,h.Messages.StrictReservedWord)}this.match("=")?this.reinterpretExpressionAsPattern(a):(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1),c=this.nextToken();var O=c.value,G=this.isolateCoverGrammar(this.parseAssignmentExpression);a=this.finalize(this.startNode(o),new l.AssignmentExpression(O,a,G)),this.context.firstCoverInitializedNameError=null}}return a},d.prototype.parseExpression=function(){var a=this.lookahead,o=this.isolateCoverGrammar(this.parseAssignmentExpression);if(this.match(",")){var c=[];for(c.push(o);this.lookahead.type!==2&&this.match(",");)this.nextToken(),c.push(this.isolateCoverGrammar(this.parseAssignmentExpression));o=this.finalize(this.startNode(a),new l.SequenceExpression(c))}return o},d.prototype.parseStatementListItem=function(){var a;if(this.context.isAssignmentTarget=!0,this.context.isBindingElement=!0,this.lookahead.type===4)switch(this.lookahead.value){case"export":this.context.isModule||this.tolerateUnexpectedToken(this.lookahead,h.Messages.IllegalExportDeclaration),a=this.parseExportDeclaration();break;case"import":this.context.isModule||this.tolerateUnexpectedToken(this.lookahead,h.Messages.IllegalImportDeclaration),a=this.parseImportDeclaration();break;case"const":a=this.parseLexicalDeclaration({inFor:!1});break;case"function":a=this.parseFunctionDeclaration();break;case"class":a=this.parseClassDeclaration();break;case"let":a=this.isLexicalDeclaration()?this.parseLexicalDeclaration({inFor:!1}):this.parseStatement();break;default:a=this.parseStatement();break}else a=this.parseStatement();return a},d.prototype.parseBlock=function(){var a=this.createNode();this.expect("{");for(var o=[];!this.match("}");)o.push(this.parseStatementListItem());return this.expect("}"),this.finalize(a,new l.BlockStatement(o))},d.prototype.parseLexicalBinding=function(a,o){var c=this.createNode(),g=[],v=this.parsePattern(g,a);this.context.strict&&v.type===p.Syntax.Identifier&&this.scanner.isRestrictedWord(v.name)&&this.tolerateError(h.Messages.StrictVarName);var E=null;return a==="const"?!this.matchKeyword("in")&&!this.matchContextualKeyword("of")&&(this.match("=")?(this.nextToken(),E=this.isolateCoverGrammar(this.parseAssignmentExpression)):this.throwError(h.Messages.DeclarationMissingInitializer,"const")):(!o.inFor&&v.type!==p.Syntax.Identifier||this.match("="))&&(this.expect("="),E=this.isolateCoverGrammar(this.parseAssignmentExpression)),this.finalize(c,new l.VariableDeclarator(v,E))},d.prototype.parseBindingList=function(a,o){for(var c=[this.parseLexicalBinding(a,o)];this.match(",");)this.nextToken(),c.push(this.parseLexicalBinding(a,o));return c},d.prototype.isLexicalDeclaration=function(){var a=this.scanner.saveState();this.scanner.scanComments();var o=this.scanner.lex();return this.scanner.restoreState(a),o.type===3||o.type===7&&o.value==="["||o.type===7&&o.value==="{"||o.type===4&&o.value==="let"||o.type===4&&o.value==="yield"},d.prototype.parseLexicalDeclaration=function(a){var o=this.createNode(),c=this.nextToken().value;s.assert(c==="let"||c==="const","Lexical declaration must be either let or const");var g=this.parseBindingList(c,a);return this.consumeSemicolon(),this.finalize(o,new l.VariableDeclaration(g,c))},d.prototype.parseBindingRestElement=function(a,o){var c=this.createNode();this.expect("...");var g=this.parsePattern(a,o);return this.finalize(c,new l.RestElement(g))},d.prototype.parseArrayPattern=function(a,o){var c=this.createNode();this.expect("[");for(var g=[];!this.match("]");)if(this.match(","))this.nextToken(),g.push(null);else{if(this.match("...")){g.push(this.parseBindingRestElement(a,o));break}else g.push(this.parsePatternWithDefault(a,o));this.match("]")||this.expect(",")}return this.expect("]"),this.finalize(c,new l.ArrayPattern(g))},d.prototype.parsePropertyPattern=function(a,o){var c=this.createNode(),g=!1,v=!1,E=!1,_,S;if(this.lookahead.type===3){var C=this.lookahead;_=this.parseVariableIdentifier();var A=this.finalize(c,new l.Identifier(C.value));if(this.match("=")){a.push(C),v=!0,this.nextToken();var I=this.parseAssignmentExpression();S=this.finalize(this.startNode(C),new l.AssignmentPattern(A,I))}else this.match(":")?(this.expect(":"),S=this.parsePatternWithDefault(a,o)):(a.push(C),v=!0,S=A)}else g=this.match("["),_=this.parseObjectPropertyKey(),this.expect(":"),S=this.parsePatternWithDefault(a,o);return this.finalize(c,new l.Property("init",_,g,S,E,v))},d.prototype.parseObjectPattern=function(a,o){var c=this.createNode(),g=[];for(this.expect("{");!this.match("}");)g.push(this.parsePropertyPattern(a,o)),this.match("}")||this.expect(",");return this.expect("}"),this.finalize(c,new l.ObjectPattern(g))},d.prototype.parsePattern=function(a,o){var c;return this.match("[")?c=this.parseArrayPattern(a,o):this.match("{")?c=this.parseObjectPattern(a,o):(this.matchKeyword("let")&&(o==="const"||o==="let")&&this.tolerateUnexpectedToken(this.lookahead,h.Messages.LetInLexicalBinding),a.push(this.lookahead),c=this.parseVariableIdentifier(o)),c},d.prototype.parsePatternWithDefault=function(a,o){var c=this.lookahead,g=this.parsePattern(a,o);if(this.match("=")){this.nextToken();var v=this.context.allowYield;this.context.allowYield=!0;var E=this.isolateCoverGrammar(this.parseAssignmentExpression);this.context.allowYield=v,g=this.finalize(this.startNode(c),new l.AssignmentPattern(g,E))}return g},d.prototype.parseVariableIdentifier=function(a){var o=this.createNode(),c=this.nextToken();return c.type===4&&c.value==="yield"?this.context.strict?this.tolerateUnexpectedToken(c,h.Messages.StrictReservedWord):this.context.allowYield||this.throwUnexpectedToken(c):c.type!==3?this.context.strict&&c.type===4&&this.scanner.isStrictModeReservedWord(c.value)?this.tolerateUnexpectedToken(c,h.Messages.StrictReservedWord):(this.context.strict||c.value!=="let"||a!=="var")&&this.throwUnexpectedToken(c):(this.context.isModule||this.context.await)&&c.type===3&&c.value==="await"&&this.tolerateUnexpectedToken(c),this.finalize(o,new l.Identifier(c.value))},d.prototype.parseVariableDeclaration=function(a){var o=this.createNode(),c=[],g=this.parsePattern(c,"var");this.context.strict&&g.type===p.Syntax.Identifier&&this.scanner.isRestrictedWord(g.name)&&this.tolerateError(h.Messages.StrictVarName);var v=null;return this.match("=")?(this.nextToken(),v=this.isolateCoverGrammar(this.parseAssignmentExpression)):g.type!==p.Syntax.Identifier&&!a.inFor&&this.expect("="),this.finalize(o,new l.VariableDeclarator(g,v))},d.prototype.parseVariableDeclarationList=function(a){var o={inFor:a.inFor},c=[];for(c.push(this.parseVariableDeclaration(o));this.match(",");)this.nextToken(),c.push(this.parseVariableDeclaration(o));return c},d.prototype.parseVariableStatement=function(){var a=this.createNode();this.expectKeyword("var");var o=this.parseVariableDeclarationList({inFor:!1});return this.consumeSemicolon(),this.finalize(a,new l.VariableDeclaration(o,"var"))},d.prototype.parseEmptyStatement=function(){var a=this.createNode();return this.expect(";"),this.finalize(a,new l.EmptyStatement)},d.prototype.parseExpressionStatement=function(){var a=this.createNode(),o=this.parseExpression();return this.consumeSemicolon(),this.finalize(a,new l.ExpressionStatement(o))},d.prototype.parseIfClause=function(){return this.context.strict&&this.matchKeyword("function")&&this.tolerateError(h.Messages.StrictFunction),this.parseStatement()},d.prototype.parseIfStatement=function(){var a=this.createNode(),o,c=null;this.expectKeyword("if"),this.expect("(");var g=this.parseExpression();return!this.match(")")&&this.config.tolerant?(this.tolerateUnexpectedToken(this.nextToken()),o=this.finalize(this.createNode(),new l.EmptyStatement)):(this.expect(")"),o=this.parseIfClause(),this.matchKeyword("else")&&(this.nextToken(),c=this.parseIfClause())),this.finalize(a,new l.IfStatement(g,o,c))},d.prototype.parseDoWhileStatement=function(){var a=this.createNode();this.expectKeyword("do");var o=this.context.inIteration;this.context.inIteration=!0;var c=this.parseStatement();this.context.inIteration=o,this.expectKeyword("while"),this.expect("(");var g=this.parseExpression();return!this.match(")")&&this.config.tolerant?this.tolerateUnexpectedToken(this.nextToken()):(this.expect(")"),this.match(";")&&this.nextToken()),this.finalize(a,new l.DoWhileStatement(c,g))},d.prototype.parseWhileStatement=function(){var a=this.createNode(),o;this.expectKeyword("while"),this.expect("(");var c=this.parseExpression();if(!this.match(")")&&this.config.tolerant)this.tolerateUnexpectedToken(this.nextToken()),o=this.finalize(this.createNode(),new l.EmptyStatement);else{this.expect(")");var g=this.context.inIteration;this.context.inIteration=!0,o=this.parseStatement(),this.context.inIteration=g}return this.finalize(a,new l.WhileStatement(c,o))},d.prototype.parseForStatement=function(){var a=null,o=null,c=null,g=!0,v,E,_=this.createNode();if(this.expectKeyword("for"),this.expect("("),this.match(";"))this.nextToken();else if(this.matchKeyword("var")){a=this.createNode(),this.nextToken();var S=this.context.allowIn;this.context.allowIn=!1;var C=this.parseVariableDeclarationList({inFor:!0});if(this.context.allowIn=S,C.length===1&&this.matchKeyword("in")){var A=C[0];A.init&&(A.id.type===p.Syntax.ArrayPattern||A.id.type===p.Syntax.ObjectPattern||this.context.strict)&&this.tolerateError(h.Messages.ForInOfLoopInitializer,"for-in"),a=this.finalize(a,new l.VariableDeclaration(C,"var")),this.nextToken(),v=a,E=this.parseExpression(),a=null}else C.length===1&&C[0].init===null&&this.matchContextualKeyword("of")?(a=this.finalize(a,new l.VariableDeclaration(C,"var")),this.nextToken(),v=a,E=this.parseAssignmentExpression(),a=null,g=!1):(a=this.finalize(a,new l.VariableDeclaration(C,"var")),this.expect(";"))}else if(this.matchKeyword("const")||this.matchKeyword("let")){a=this.createNode();var I=this.nextToken().value;if(!this.context.strict&&this.lookahead.value==="in")a=this.finalize(a,new l.Identifier(I)),this.nextToken(),v=a,E=this.parseExpression(),a=null;else{var S=this.context.allowIn;this.context.allowIn=!1;var C=this.parseBindingList(I,{inFor:!0});this.context.allowIn=S,C.length===1&&C[0].init===null&&this.matchKeyword("in")?(a=this.finalize(a,new l.VariableDeclaration(C,I)),this.nextToken(),v=a,E=this.parseExpression(),a=null):C.length===1&&C[0].init===null&&this.matchContextualKeyword("of")?(a=this.finalize(a,new l.VariableDeclaration(C,I)),this.nextToken(),v=a,E=this.parseAssignmentExpression(),a=null,g=!1):(this.consumeSemicolon(),a=this.finalize(a,new l.VariableDeclaration(C,I)))}}else{var B=this.lookahead,S=this.context.allowIn;if(this.context.allowIn=!1,a=this.inheritCoverGrammar(this.parseAssignmentExpression),this.context.allowIn=S,this.matchKeyword("in"))(!this.context.isAssignmentTarget||a.type===p.Syntax.AssignmentExpression)&&this.tolerateError(h.Messages.InvalidLHSInForIn),this.nextToken(),this.reinterpretExpressionAsPattern(a),v=a,E=this.parseExpression(),a=null;else if(this.matchContextualKeyword("of"))(!this.context.isAssignmentTarget||a.type===p.Syntax.AssignmentExpression)&&this.tolerateError(h.Messages.InvalidLHSInForLoop),this.nextToken(),this.reinterpretExpressionAsPattern(a),v=a,E=this.parseAssignmentExpression(),a=null,g=!1;else{if(this.match(",")){for(var k=[a];this.match(",");)this.nextToken(),k.push(this.isolateCoverGrammar(this.parseAssignmentExpression));a=this.finalize(this.startNode(B),new l.SequenceExpression(k))}this.expect(";")}}typeof v>"u"&&(this.match(";")||(o=this.parseExpression()),this.expect(";"),this.match(")")||(c=this.parseExpression()));var T;if(!this.match(")")&&this.config.tolerant)this.tolerateUnexpectedToken(this.nextToken()),T=this.finalize(this.createNode(),new l.EmptyStatement);else{this.expect(")");var P=this.context.inIteration;this.context.inIteration=!0,T=this.isolateCoverGrammar(this.parseStatement),this.context.inIteration=P}return typeof v>"u"?this.finalize(_,new l.ForStatement(a,o,c,T)):g?this.finalize(_,new l.ForInStatement(v,E,T)):this.finalize(_,new l.ForOfStatement(v,E,T))},d.prototype.parseContinueStatement=function(){var a=this.createNode();this.expectKeyword("continue");var o=null;if(this.lookahead.type===3&&!this.hasLineTerminator){var c=this.parseVariableIdentifier();o=c;var g="$"+c.name;Object.prototype.hasOwnProperty.call(this.context.labelSet,g)||this.throwError(h.Messages.UnknownLabel,c.name)}return this.consumeSemicolon(),o===null&&!this.context.inIteration&&this.throwError(h.Messages.IllegalContinue),this.finalize(a,new l.ContinueStatement(o))},d.prototype.parseBreakStatement=function(){var a=this.createNode();this.expectKeyword("break");var o=null;if(this.lookahead.type===3&&!this.hasLineTerminator){var c=this.parseVariableIdentifier(),g="$"+c.name;Object.prototype.hasOwnProperty.call(this.context.labelSet,g)||this.throwError(h.Messages.UnknownLabel,c.name),o=c}return this.consumeSemicolon(),o===null&&!this.context.inIteration&&!this.context.inSwitch&&this.throwError(h.Messages.IllegalBreak),this.finalize(a,new l.BreakStatement(o))},d.prototype.parseReturnStatement=function(){this.context.inFunctionBody||this.tolerateError(h.Messages.IllegalReturn);var a=this.createNode();this.expectKeyword("return");var o=!this.match(";")&&!this.match("}")&&!this.hasLineTerminator&&this.lookahead.type!==2||this.lookahead.type===8||this.lookahead.type===10,c=o?this.parseExpression():null;return this.consumeSemicolon(),this.finalize(a,new l.ReturnStatement(c))},d.prototype.parseWithStatement=function(){this.context.strict&&this.tolerateError(h.Messages.StrictModeWith);var a=this.createNode(),o;this.expectKeyword("with"),this.expect("(");var c=this.parseExpression();return!this.match(")")&&this.config.tolerant?(this.tolerateUnexpectedToken(this.nextToken()),o=this.finalize(this.createNode(),new l.EmptyStatement)):(this.expect(")"),o=this.parseStatement()),this.finalize(a,new l.WithStatement(c,o))},d.prototype.parseSwitchCase=function(){var a=this.createNode(),o;this.matchKeyword("default")?(this.nextToken(),o=null):(this.expectKeyword("case"),o=this.parseExpression()),this.expect(":");for(var c=[];!(this.match("}")||this.matchKeyword("default")||this.matchKeyword("case"));)c.push(this.parseStatementListItem());return this.finalize(a,new l.SwitchCase(o,c))},d.prototype.parseSwitchStatement=function(){var a=this.createNode();this.expectKeyword("switch"),this.expect("(");var o=this.parseExpression();this.expect(")");var c=this.context.inSwitch;this.context.inSwitch=!0;var g=[],v=!1;for(this.expect("{");!this.match("}");){var E=this.parseSwitchCase();E.test===null&&(v&&this.throwError(h.Messages.MultipleDefaultsInSwitch),v=!0),g.push(E)}return this.expect("}"),this.context.inSwitch=c,this.finalize(a,new l.SwitchStatement(o,g))},d.prototype.parseLabelledStatement=function(){var a=this.createNode(),o=this.parseExpression(),c;if(o.type===p.Syntax.Identifier&&this.match(":")){this.nextToken();var g=o,v="$"+g.name;Object.prototype.hasOwnProperty.call(this.context.labelSet,v)&&this.throwError(h.Messages.Redeclaration,"Label",g.name),this.context.labelSet[v]=!0;var E=void 0;if(this.matchKeyword("class"))this.tolerateUnexpectedToken(this.lookahead),E=this.parseClassDeclaration();else if(this.matchKeyword("function")){var _=this.lookahead,S=this.parseFunctionDeclaration();this.context.strict?this.tolerateUnexpectedToken(_,h.Messages.StrictFunction):S.generator&&this.tolerateUnexpectedToken(_,h.Messages.GeneratorInLegacyContext),E=S}else E=this.parseStatement();delete this.context.labelSet[v],c=new l.LabeledStatement(g,E)}else this.consumeSemicolon(),c=new l.ExpressionStatement(o);return this.finalize(a,c)},d.prototype.parseThrowStatement=function(){var a=this.createNode();this.expectKeyword("throw"),this.hasLineTerminator&&this.throwError(h.Messages.NewlineAfterThrow);var o=this.parseExpression();return this.consumeSemicolon(),this.finalize(a,new l.ThrowStatement(o))},d.prototype.parseCatchClause=function(){var a=this.createNode();this.expectKeyword("catch"),this.expect("("),this.match(")")&&this.throwUnexpectedToken(this.lookahead);for(var o=[],c=this.parsePattern(o),g={},v=0;v<o.length;v++){var E="$"+o[v].value;Object.prototype.hasOwnProperty.call(g,E)&&this.tolerateError(h.Messages.DuplicateBinding,o[v].value),g[E]=!0}this.context.strict&&c.type===p.Syntax.Identifier&&this.scanner.isRestrictedWord(c.name)&&this.tolerateError(h.Messages.StrictCatchVariable),this.expect(")");var _=this.parseBlock();return this.finalize(a,new l.CatchClause(c,_))},d.prototype.parseFinallyClause=function(){return this.expectKeyword("finally"),this.parseBlock()},d.prototype.parseTryStatement=function(){var a=this.createNode();this.expectKeyword("try");var o=this.parseBlock(),c=this.matchKeyword("catch")?this.parseCatchClause():null,g=this.matchKeyword("finally")?this.parseFinallyClause():null;return!c&&!g&&this.throwError(h.Messages.NoCatchOrFinally),this.finalize(a,new l.TryStatement(o,c,g))},d.prototype.parseDebuggerStatement=function(){var a=this.createNode();return this.expectKeyword("debugger"),this.consumeSemicolon(),this.finalize(a,new l.DebuggerStatement)},d.prototype.parseStatement=function(){var a;switch(this.lookahead.type){case 1:case 5:case 6:case 8:case 10:case 9:a=this.parseExpressionStatement();break;case 7:var o=this.lookahead.value;o==="{"?a=this.parseBlock():o==="("?a=this.parseExpressionStatement():o===";"?a=this.parseEmptyStatement():a=this.parseExpressionStatement();break;case 3:a=this.matchAsyncFunction()?this.parseFunctionDeclaration():this.parseLabelledStatement();break;case 4:switch(this.lookahead.value){case"break":a=this.parseBreakStatement();break;case"continue":a=this.parseContinueStatement();break;case"debugger":a=this.parseDebuggerStatement();break;case"do":a=this.parseDoWhileStatement();break;case"for":a=this.parseForStatement();break;case"function":a=this.parseFunctionDeclaration();break;case"if":a=this.parseIfStatement();break;case"return":a=this.parseReturnStatement();break;case"switch":a=this.parseSwitchStatement();break;case"throw":a=this.parseThrowStatement();break;case"try":a=this.parseTryStatement();break;case"var":a=this.parseVariableStatement();break;case"while":a=this.parseWhileStatement();break;case"with":a=this.parseWithStatement();break;default:a=this.parseExpressionStatement();break}break;default:a=this.throwUnexpectedToken(this.lookahead)}return a},d.prototype.parseFunctionSourceElements=function(){var a=this.createNode();this.expect("{");var o=this.parseDirectivePrologues(),c=this.context.labelSet,g=this.context.inIteration,v=this.context.inSwitch,E=this.context.inFunctionBody;for(this.context.labelSet={},this.context.inIteration=!1,this.context.inSwitch=!1,this.context.inFunctionBody=!0;this.lookahead.type!==2&&!this.match("}");)o.push(this.parseStatementListItem());return this.expect("}"),this.context.labelSet=c,this.context.inIteration=g,this.context.inSwitch=v,this.context.inFunctionBody=E,this.finalize(a,new l.BlockStatement(o))},d.prototype.validateParam=function(a,o,c){var g="$"+c;this.context.strict?(this.scanner.isRestrictedWord(c)&&(a.stricted=o,a.message=h.Messages.StrictParamName),Object.prototype.hasOwnProperty.call(a.paramSet,g)&&(a.stricted=o,a.message=h.Messages.StrictParamDupe)):a.firstRestricted||(this.scanner.isRestrictedWord(c)?(a.firstRestricted=o,a.message=h.Messages.StrictParamName):this.scanner.isStrictModeReservedWord(c)?(a.firstRestricted=o,a.message=h.Messages.StrictReservedWord):Object.prototype.hasOwnProperty.call(a.paramSet,g)&&(a.stricted=o,a.message=h.Messages.StrictParamDupe)),typeof Object.defineProperty=="function"?Object.defineProperty(a.paramSet,g,{value:!0,enumerable:!0,writable:!0,configurable:!0}):a.paramSet[g]=!0},d.prototype.parseRestElement=function(a){var o=this.createNode();this.expect("...");var c=this.parsePattern(a);return this.match("=")&&this.throwError(h.Messages.DefaultRestParameter),this.match(")")||this.throwError(h.Messages.ParameterAfterRestParameter),this.finalize(o,new l.RestElement(c))},d.prototype.parseFormalParameter=function(a){for(var o=[],c=this.match("...")?this.parseRestElement(o):this.parsePatternWithDefault(o),g=0;g<o.length;g++)this.validateParam(a,o[g],o[g].value);a.simple=a.simple&&c instanceof l.Identifier,a.params.push(c)},d.prototype.parseFormalParameters=function(a){var o;if(o={simple:!0,params:[],firstRestricted:a},this.expect("("),!this.match(")"))for(o.paramSet={};this.lookahead.type!==2&&(this.parseFormalParameter(o),!(this.match(")")||(this.expect(","),this.match(")")))););return this.expect(")"),{simple:o.simple,params:o.params,stricted:o.stricted,firstRestricted:o.firstRestricted,message:o.message}},d.prototype.matchAsyncFunction=function(){var a=this.matchContextualKeyword("async");if(a){var o=this.scanner.saveState();this.scanner.scanComments();var c=this.scanner.lex();this.scanner.restoreState(o),a=o.lineNumber===c.lineNumber&&c.type===4&&c.value==="function"}return a},d.prototype.parseFunctionDeclaration=function(a){var o=this.createNode(),c=this.matchContextualKeyword("async");c&&this.nextToken(),this.expectKeyword("function");var g=c?!1:this.match("*");g&&this.nextToken();var v,E=null,_=null;if(!a||!this.match("(")){var S=this.lookahead;E=this.parseVariableIdentifier(),this.context.strict?this.scanner.isRestrictedWord(S.value)&&this.tolerateUnexpectedToken(S,h.Messages.StrictFunctionName):this.scanner.isRestrictedWord(S.value)?(_=S,v=h.Messages.StrictFunctionName):this.scanner.isStrictModeReservedWord(S.value)&&(_=S,v=h.Messages.StrictReservedWord)}var C=this.context.await,A=this.context.allowYield;this.context.await=c,this.context.allowYield=!g;var I=this.parseFormalParameters(_),B=I.params,k=I.stricted;_=I.firstRestricted,I.message&&(v=I.message);var T=this.context.strict,P=this.context.allowStrictDirective;this.context.allowStrictDirective=I.simple;var O=this.parseFunctionSourceElements();return this.context.strict&&_&&this.throwUnexpectedToken(_,v),this.context.strict&&k&&this.tolerateUnexpectedToken(k,v),this.context.strict=T,this.context.allowStrictDirective=P,this.context.await=C,this.context.allowYield=A,c?this.finalize(o,new l.AsyncFunctionDeclaration(E,B,O)):this.finalize(o,new l.FunctionDeclaration(E,B,O,g))},d.prototype.parseFunctionExpression=function(){var a=this.createNode(),o=this.matchContextualKeyword("async");o&&this.nextToken(),this.expectKeyword("function");var c=o?!1:this.match("*");c&&this.nextToken();var g,v=null,E,_=this.context.await,S=this.context.allowYield;if(this.context.await=o,this.context.allowYield=!c,!this.match("(")){var C=this.lookahead;v=!this.context.strict&&!c&&this.matchKeyword("yield")?this.parseIdentifierName():this.parseVariableIdentifier(),this.context.strict?this.scanner.isRestrictedWord(C.value)&&this.tolerateUnexpectedToken(C,h.Messages.StrictFunctionName):this.scanner.isRestrictedWord(C.value)?(E=C,g=h.Messages.StrictFunctionName):this.scanner.isStrictModeReservedWord(C.value)&&(E=C,g=h.Messages.StrictReservedWord)}var A=this.parseFormalParameters(E),I=A.params,B=A.stricted;E=A.firstRestricted,A.message&&(g=A.message);var k=this.context.strict,T=this.context.allowStrictDirective;this.context.allowStrictDirective=A.simple;var P=this.parseFunctionSourceElements();return this.context.strict&&E&&this.throwUnexpectedToken(E,g),this.context.strict&&B&&this.tolerateUnexpectedToken(B,g),this.context.strict=k,this.context.allowStrictDirective=T,this.context.await=_,this.context.allowYield=S,o?this.finalize(a,new l.AsyncFunctionExpression(v,I,P)):this.finalize(a,new l.FunctionExpression(v,I,P,c))},d.prototype.parseDirective=function(){var a=this.lookahead,o=this.createNode(),c=this.parseExpression(),g=c.type===p.Syntax.Literal?this.getTokenRaw(a).slice(1,-1):null;return this.consumeSemicolon(),this.finalize(o,g?new l.Directive(c,g):new l.ExpressionStatement(c))},d.prototype.parseDirectivePrologues=function(){for(var a=null,o=[];;){var c=this.lookahead;if(c.type!==8)break;var g=this.parseDirective();o.push(g);var v=g.directive;if(typeof v!="string")break;v==="use strict"?(this.context.strict=!0,a&&this.tolerateUnexpectedToken(a,h.Messages.StrictOctalLiteral),this.context.allowStrictDirective||this.tolerateUnexpectedToken(c,h.Messages.IllegalLanguageModeDirective)):!a&&c.octal&&(a=c)}return o},d.prototype.qualifiedPropertyName=function(a){switch(a.type){case 3:case 8:case 1:case 5:case 6:case 4:return!0;case 7:return a.value==="["}return!1},d.prototype.parseGetterMethod=function(){var a=this.createNode(),o=!1,c=this.context.allowYield;this.context.allowYield=!o;var g=this.parseFormalParameters();g.params.length>0&&this.tolerateError(h.Messages.BadGetterArity);var v=this.parsePropertyMethod(g);return this.context.allowYield=c,this.finalize(a,new l.FunctionExpression(null,g.params,v,o))},d.prototype.parseSetterMethod=function(){var a=this.createNode(),o=!1,c=this.context.allowYield;this.context.allowYield=!o;var g=this.parseFormalParameters();g.params.length!==1?this.tolerateError(h.Messages.BadSetterArity):g.params[0]instanceof l.RestElement&&this.tolerateError(h.Messages.BadSetterRestParameter);var v=this.parsePropertyMethod(g);return this.context.allowYield=c,this.finalize(a,new l.FunctionExpression(null,g.params,v,o))},d.prototype.parseGeneratorMethod=function(){var a=this.createNode(),o=!0,c=this.context.allowYield;this.context.allowYield=!0;var g=this.parseFormalParameters();this.context.allowYield=!1;var v=this.parsePropertyMethod(g);return this.context.allowYield=c,this.finalize(a,new l.FunctionExpression(null,g.params,v,o))},d.prototype.isStartOfExpression=function(){var a=!0,o=this.lookahead.value;switch(this.lookahead.type){case 7:a=o==="["||o==="("||o==="{"||o==="+"||o==="-"||o==="!"||o==="~"||o==="++"||o==="--"||o==="/"||o==="/=";break;case 4:a=o==="class"||o==="delete"||o==="function"||o==="let"||o==="new"||o==="super"||o==="this"||o==="typeof"||o==="void"||o==="yield";break}return a},d.prototype.parseYieldExpression=function(){var a=this.createNode();this.expectKeyword("yield");var o=null,c=!1;if(!this.hasLineTerminator){var g=this.context.allowYield;this.context.allowYield=!1,c=this.match("*"),c?(this.nextToken(),o=this.parseAssignmentExpression()):this.isStartOfExpression()&&(o=this.parseAssignmentExpression()),this.context.allowYield=g}return this.finalize(a,new l.YieldExpression(o,c))},d.prototype.parseClassElement=function(a){var o=this.lookahead,c=this.createNode(),g="",v=null,E=null,_=!1,S=!1,C=!1,A=!1;if(this.match("*"))this.nextToken();else{_=this.match("["),v=this.parseObjectPropertyKey();var I=v;if(I.name==="static"&&(this.qualifiedPropertyName(this.lookahead)||this.match("*"))&&(o=this.lookahead,C=!0,_=this.match("["),this.match("*")?this.nextToken():v=this.parseObjectPropertyKey()),o.type===3&&!this.hasLineTerminator&&o.value==="async"){var B=this.lookahead.value;B!==":"&&B!=="("&&B!=="*"&&(A=!0,o=this.lookahead,v=this.parseObjectPropertyKey(),o.type===3&&o.value==="constructor"&&this.tolerateUnexpectedToken(o,h.Messages.ConstructorIsAsync))}}var k=this.qualifiedPropertyName(this.lookahead);return o.type===3?o.value==="get"&&k?(g="get",_=this.match("["),v=this.parseObjectPropertyKey(),this.context.allowYield=!1,E=this.parseGetterMethod()):o.value==="set"&&k&&(g="set",_=this.match("["),v=this.parseObjectPropertyKey(),E=this.parseSetterMethod()):o.type===7&&o.value==="*"&&k&&(g="init",_=this.match("["),v=this.parseObjectPropertyKey(),E=this.parseGeneratorMethod(),S=!0),!g&&v&&this.match("(")&&(g="init",E=A?this.parsePropertyMethodAsyncFunction():this.parsePropertyMethodFunction(),S=!0),g||this.throwUnexpectedToken(this.lookahead),g==="init"&&(g="method"),_||(C&&this.isPropertyKey(v,"prototype")&&this.throwUnexpectedToken(o,h.Messages.StaticPrototype),!C&&this.isPropertyKey(v,"constructor")&&((g!=="method"||!S||E&&E.generator)&&this.throwUnexpectedToken(o,h.Messages.ConstructorSpecialMethod),a.value?this.throwUnexpectedToken(o,h.Messages.DuplicateConstructor):a.value=!0,g="constructor")),this.finalize(c,new l.MethodDefinition(v,_,E,g,C))},d.prototype.parseClassElementList=function(){var a=[],o={value:!1};for(this.expect("{");!this.match("}");)this.match(";")?this.nextToken():a.push(this.parseClassElement(o));return this.expect("}"),a},d.prototype.parseClassBody=function(){var a=this.createNode(),o=this.parseClassElementList();return this.finalize(a,new l.ClassBody(o))},d.prototype.parseClassDeclaration=function(a){var o=this.createNode(),c=this.context.strict;this.context.strict=!0,this.expectKeyword("class");var g=a&&this.lookahead.type!==3?null:this.parseVariableIdentifier(),v=null;this.matchKeyword("extends")&&(this.nextToken(),v=this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));var E=this.parseClassBody();return this.context.strict=c,this.finalize(o,new l.ClassDeclaration(g,v,E))},d.prototype.parseClassExpression=function(){var a=this.createNode(),o=this.context.strict;this.context.strict=!0,this.expectKeyword("class");var c=this.lookahead.type===3?this.parseVariableIdentifier():null,g=null;this.matchKeyword("extends")&&(this.nextToken(),g=this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));var v=this.parseClassBody();return this.context.strict=o,this.finalize(a,new l.ClassExpression(c,g,v))},d.prototype.parseModule=function(){this.context.strict=!0,this.context.isModule=!0,this.scanner.isModule=!0;for(var a=this.createNode(),o=this.parseDirectivePrologues();this.lookahead.type!==2;)o.push(this.parseStatementListItem());return this.finalize(a,new l.Module(o))},d.prototype.parseScript=function(){for(var a=this.createNode(),o=this.parseDirectivePrologues();this.lookahead.type!==2;)o.push(this.parseStatementListItem());return this.finalize(a,new l.Script(o))},d.prototype.parseModuleSpecifier=function(){var a=this.createNode();this.lookahead.type!==8&&this.throwError(h.Messages.InvalidModuleSpecifier);var o=this.nextToken(),c=this.getTokenRaw(o);return this.finalize(a,new l.Literal(o.value,c))},d.prototype.parseImportSpecifier=function(){var a=this.createNode(),o,c;return this.lookahead.type===3?(o=this.parseVariableIdentifier(),c=o,this.matchContextualKeyword("as")&&(this.nextToken(),c=this.parseVariableIdentifier())):(o=this.parseIdentifierName(),c=o,this.matchContextualKeyword("as")?(this.nextToken(),c=this.parseVariableIdentifier()):this.throwUnexpectedToken(this.nextToken())),this.finalize(a,new l.ImportSpecifier(c,o))},d.prototype.parseNamedImports=function(){this.expect("{");for(var a=[];!this.match("}");)a.push(this.parseImportSpecifier()),this.match("}")||this.expect(",");return this.expect("}"),a},d.prototype.parseImportDefaultSpecifier=function(){var a=this.createNode(),o=this.parseIdentifierName();return this.finalize(a,new l.ImportDefaultSpecifier(o))},d.prototype.parseImportNamespaceSpecifier=function(){var a=this.createNode();this.expect("*"),this.matchContextualKeyword("as")||this.throwError(h.Messages.NoAsAfterImportNamespace),this.nextToken();var o=this.parseIdentifierName();return this.finalize(a,new l.ImportNamespaceSpecifier(o))},d.prototype.parseImportDeclaration=function(){this.context.inFunctionBody&&this.throwError(h.Messages.IllegalImportDeclaration);var a=this.createNode();this.expectKeyword("import");var o,c=[];if(this.lookahead.type===8)o=this.parseModuleSpecifier();else{if(this.match("{")?c=c.concat(this.parseNamedImports()):this.match("*")?c.push(this.parseImportNamespaceSpecifier()):this.isIdentifierName(this.lookahead)&&!this.matchKeyword("default")?(c.push(this.parseImportDefaultSpecifier()),this.match(",")&&(this.nextToken(),this.match("*")?c.push(this.parseImportNamespaceSpecifier()):this.match("{")?c=c.concat(this.parseNamedImports()):this.throwUnexpectedToken(this.lookahead))):this.throwUnexpectedToken(this.nextToken()),!this.matchContextualKeyword("from")){var g=this.lookahead.value?h.Messages.UnexpectedToken:h.Messages.MissingFromClause;this.throwError(g,this.lookahead.value)}this.nextToken(),o=this.parseModuleSpecifier()}return this.consumeSemicolon(),this.finalize(a,new l.ImportDeclaration(c,o))},d.prototype.parseExportSpecifier=function(){var a=this.createNode(),o=this.parseIdentifierName(),c=o;return this.matchContextualKeyword("as")&&(this.nextToken(),c=this.parseIdentifierName()),this.finalize(a,new l.ExportSpecifier(o,c))},d.prototype.parseExportDeclaration=function(){this.context.inFunctionBody&&this.throwError(h.Messages.IllegalExportDeclaration);var a=this.createNode();this.expectKeyword("export");var o;if(this.matchKeyword("default"))if(this.nextToken(),this.matchKeyword("function")){var c=this.parseFunctionDeclaration(!0);o=this.finalize(a,new l.ExportDefaultDeclaration(c))}else if(this.matchKeyword("class")){var c=this.parseClassDeclaration(!0);o=this.finalize(a,new l.ExportDefaultDeclaration(c))}else if(this.matchContextualKeyword("async")){var c=this.matchAsyncFunction()?this.parseFunctionDeclaration(!0):this.parseAssignmentExpression();o=this.finalize(a,new l.ExportDefaultDeclaration(c))}else{this.matchContextualKeyword("from")&&this.throwError(h.Messages.UnexpectedToken,this.lookahead.value);var c=this.match("{")?this.parseObjectInitializer():this.match("[")?this.parseArrayInitializer():this.parseAssignmentExpression();this.consumeSemicolon(),o=this.finalize(a,new l.ExportDefaultDeclaration(c))}else if(this.match("*")){if(this.nextToken(),!this.matchContextualKeyword("from")){var g=this.lookahead.value?h.Messages.UnexpectedToken:h.Messages.MissingFromClause;this.throwError(g,this.lookahead.value)}this.nextToken();var v=this.parseModuleSpecifier();this.consumeSemicolon(),o=this.finalize(a,new l.ExportAllDeclaration(v))}else if(this.lookahead.type===4){var c=void 0;switch(this.lookahead.value){case"let":case"const":c=this.parseLexicalDeclaration({inFor:!1});break;case"var":case"class":case"function":c=this.parseStatementListItem();break;default:this.throwUnexpectedToken(this.lookahead)}o=this.finalize(a,new l.ExportNamedDeclaration(c,[],null))}else if(this.matchAsyncFunction()){var c=this.parseFunctionDeclaration();o=this.finalize(a,new l.ExportNamedDeclaration(c,[],null))}else{var E=[],_=null,S=!1;for(this.expect("{");!this.match("}");)S=S||this.matchKeyword("default"),E.push(this.parseExportSpecifier()),this.match("}")||this.expect(",");if(this.expect("}"),this.matchContextualKeyword("from"))this.nextToken(),_=this.parseModuleSpecifier(),this.consumeSemicolon();else if(S){var g=this.lookahead.value?h.Messages.UnexpectedToken:h.Messages.MissingFromClause;this.throwError(g,this.lookahead.value)}else this.consumeSemicolon();o=this.finalize(a,new l.ExportNamedDeclaration(null,E,_))}return o},d})();r.Parser=x},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});function i(s,u){if(!s)throw new Error("ASSERT: "+u)}r.assert=i},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=(function(){function s(){this.errors=[],this.tolerant=!1}return s.prototype.recordError=function(u){this.errors.push(u)},s.prototype.tolerate=function(u){if(this.tolerant)this.recordError(u);else throw u},s.prototype.constructError=function(u,h){var l=new Error(u);try{throw l}catch(y){Object.create&&Object.defineProperty&&(l=Object.create(y),Object.defineProperty(l,"column",{value:h}))}return l},s.prototype.createError=function(u,h,l,y){var p="Line "+h+": "+y,m=this.constructError(p,l);return m.index=u,m.lineNumber=h,m.description=y,m},s.prototype.throwError=function(u,h,l,y){throw this.createError(u,h,l,y)},s.prototype.tolerateError=function(u,h,l,y){var p=this.createError(u,h,l,y);if(this.tolerant)this.recordError(p);else throw p},s})();r.ErrorHandler=i},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.Messages={BadGetterArity:"Getter must not have any formal parameters",BadSetterArity:"Setter must have exactly one formal parameter",BadSetterRestParameter:"Setter function argument must not be a rest parameter",ConstructorIsAsync:"Class constructor may not be an async method",ConstructorSpecialMethod:"Class constructor may not be an accessor",DeclarationMissingInitializer:"Missing initializer in %0 declaration",DefaultRestParameter:"Unexpected token =",DuplicateBinding:"Duplicate binding %0",DuplicateConstructor:"A class may only have one constructor",DuplicateProtoProperty:"Duplicate __proto__ fields are not allowed in object literals",ForInOfLoopInitializer:"%0 loop variable declaration may not have an initializer",GeneratorInLegacyContext:"Generator declarations are not allowed in legacy contexts",IllegalBreak:"Illegal break statement",IllegalContinue:"Illegal continue statement",IllegalExportDeclaration:"Unexpected token",IllegalImportDeclaration:"Unexpected token",IllegalLanguageModeDirective:"Illegal 'use strict' directive in function with non-simple parameter list",IllegalReturn:"Illegal return statement",InvalidEscapedReservedWord:"Keyword must not contain escaped characters",InvalidHexEscapeSequence:"Invalid hexadecimal escape sequence",InvalidLHSInAssignment:"Invalid left-hand side in assignment",InvalidLHSInForIn:"Invalid left-hand side in for-in",InvalidLHSInForLoop:"Invalid left-hand side in for-loop",InvalidModuleSpecifier:"Unexpected token",InvalidRegExp:"Invalid regular expression",LetInLexicalBinding:"let is disallowed as a lexically bound name",MissingFromClause:"Unexpected token",MultipleDefaultsInSwitch:"More than one default clause in switch statement",NewlineAfterThrow:"Illegal newline after throw",NoAsAfterImportNamespace:"Unexpected token",NoCatchOrFinally:"Missing catch or finally after try",ParameterAfterRestParameter:"Rest parameter must be last formal parameter",Redeclaration:"%0 '%1' has already been declared",StaticPrototype:"Classes may not have static property named prototype",StrictCatchVariable:"Catch variable may not be eval or arguments in strict mode",StrictDelete:"Delete of an unqualified identifier in strict mode.",StrictFunction:"In strict mode code, functions can only be declared at top level or inside a block",StrictFunctionName:"Function name may not be eval or arguments in strict mode",StrictLHSAssignment:"Assignment to eval or arguments is not allowed in strict mode",StrictLHSPostfix:"Postfix increment/decrement may not have eval or arguments operand in strict mode",StrictLHSPrefix:"Prefix increment/decrement may not have eval or arguments operand in strict mode",StrictModeWith:"Strict mode code may not include a with statement",StrictOctalLiteral:"Octal literals are not allowed in strict mode.",StrictParamDupe:"Strict mode function may not have duplicate parameter names",StrictParamName:"Parameter name eval or arguments is not allowed in strict mode",StrictReservedWord:"Use of future reserved word in strict mode",StrictVarName:"Variable name may not be eval or arguments in strict mode",TemplateOctalLiteral:"Octal literals are not allowed in template strings.",UnexpectedEOS:"Unexpected end of input",UnexpectedIdentifier:"Unexpected identifier",UnexpectedNumber:"Unexpected number",UnexpectedReserved:"Unexpected reserved word",UnexpectedString:"Unexpected string",UnexpectedTemplate:"Unexpected quasi %0",UnexpectedToken:"Unexpected token %0",UnexpectedTokenIllegal:"Unexpected token ILLEGAL",UnknownLabel:"Undefined label '%0'",UnterminatedRegExp:"Invalid regular expression: missing /"}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(9),u=i(4),h=i(11);function l(m){return"0123456789abcdef".indexOf(m.toLowerCase())}function y(m){return"01234567".indexOf(m)}var p=(function(){function m(f,x){this.source=f,this.errorHandler=x,this.trackComment=!1,this.isModule=!1,this.length=f.length,this.index=0,this.lineNumber=f.length>0?1:0,this.lineStart=0,this.curlyStack=[]}return m.prototype.saveState=function(){return{index:this.index,lineNumber:this.lineNumber,lineStart:this.lineStart}},m.prototype.restoreState=function(f){this.index=f.index,this.lineNumber=f.lineNumber,this.lineStart=f.lineStart},m.prototype.eof=function(){return this.index>=this.length},m.prototype.throwUnexpectedToken=function(f){return f===void 0&&(f=h.Messages.UnexpectedTokenIllegal),this.errorHandler.throwError(this.index,this.lineNumber,this.index-this.lineStart+1,f)},m.prototype.tolerateUnexpectedToken=function(f){f===void 0&&(f=h.Messages.UnexpectedTokenIllegal),this.errorHandler.tolerateError(this.index,this.lineNumber,this.index-this.lineStart+1,f)},m.prototype.skipSingleLineComment=function(f){var x=[],d,a;for(this.trackComment&&(x=[],d=this.index-f,a={start:{line:this.lineNumber,column:this.index-this.lineStart-f},end:{}});!this.eof();){var o=this.source.charCodeAt(this.index);if(++this.index,u.Character.isLineTerminator(o)){if(this.trackComment){a.end={line:this.lineNumber,column:this.index-this.lineStart-1};var c={multiLine:!1,slice:[d+f,this.index-1],range:[d,this.index-1],loc:a};x.push(c)}return o===13&&this.source.charCodeAt(this.index)===10&&++this.index,++this.lineNumber,this.lineStart=this.index,x}}if(this.trackComment){a.end={line:this.lineNumber,column:this.index-this.lineStart};var c={multiLine:!1,slice:[d+f,this.index],range:[d,this.index],loc:a};x.push(c)}return x},m.prototype.skipMultiLineComment=function(){var f=[],x,d;for(this.trackComment&&(f=[],x=this.index-2,d={start:{line:this.lineNumber,column:this.index-this.lineStart-2},end:{}});!this.eof();){var a=this.source.charCodeAt(this.index);if(u.Character.isLineTerminator(a))a===13&&this.source.charCodeAt(this.index+1)===10&&++this.index,++this.lineNumber,++this.index,this.lineStart=this.index;else if(a===42){if(this.source.charCodeAt(this.index+1)===47){if(this.index+=2,this.trackComment){d.end={line:this.lineNumber,column:this.index-this.lineStart};var o={multiLine:!0,slice:[x+2,this.index-2],range:[x,this.index],loc:d};f.push(o)}return f}++this.index}else++this.index}if(this.trackComment){d.end={line:this.lineNumber,column:this.index-this.lineStart};var o={multiLine:!0,slice:[x+2,this.index],range:[x,this.index],loc:d};f.push(o)}return this.tolerateUnexpectedToken(),f},m.prototype.scanComments=function(){var f;this.trackComment&&(f=[]);for(var x=this.index===0;!this.eof();){var d=this.source.charCodeAt(this.index);if(u.Character.isWhiteSpace(d))++this.index;else if(u.Character.isLineTerminator(d))++this.index,d===13&&this.source.charCodeAt(this.index)===10&&++this.index,++this.lineNumber,this.lineStart=this.index,x=!0;else if(d===47)if(d=this.source.charCodeAt(this.index+1),d===47){this.index+=2;var a=this.skipSingleLineComment(2);this.trackComment&&(f=f.concat(a)),x=!0}else if(d===42){this.index+=2;var a=this.skipMultiLineComment();this.trackComment&&(f=f.concat(a))}else break;else if(x&&d===45)if(this.source.charCodeAt(this.index+1)===45&&this.source.charCodeAt(this.index+2)===62){this.index+=3;var a=this.skipSingleLineComment(3);this.trackComment&&(f=f.concat(a))}else break;else if(d===60&&!this.isModule)if(this.source.slice(this.index+1,this.index+4)==="!--"){this.index+=4;var a=this.skipSingleLineComment(4);this.trackComment&&(f=f.concat(a))}else break;else break}return f},m.prototype.isFutureReservedWord=function(f){switch(f){case"enum":case"export":case"import":case"super":return!0;default:return!1}},m.prototype.isStrictModeReservedWord=function(f){switch(f){case"implements":case"interface":case"package":case"private":case"protected":case"public":case"static":case"yield":case"let":return!0;default:return!1}},m.prototype.isRestrictedWord=function(f){return f==="eval"||f==="arguments"},m.prototype.isKeyword=function(f){switch(f.length){case 2:return f==="if"||f==="in"||f==="do";case 3:return f==="var"||f==="for"||f==="new"||f==="try"||f==="let";case 4:return f==="this"||f==="else"||f==="case"||f==="void"||f==="with"||f==="enum";case 5:return f==="while"||f==="break"||f==="catch"||f==="throw"||f==="const"||f==="yield"||f==="class"||f==="super";case 6:return f==="return"||f==="typeof"||f==="delete"||f==="switch"||f==="export"||f==="import";case 7:return f==="default"||f==="finally"||f==="extends";case 8:return f==="function"||f==="continue"||f==="debugger";case 10:return f==="instanceof";default:return!1}},m.prototype.codePointAt=function(f){var x=this.source.charCodeAt(f);if(x>=55296&&x<=56319){var d=this.source.charCodeAt(f+1);if(d>=56320&&d<=57343){var a=x;x=(a-55296)*1024+d-56320+65536}}return x},m.prototype.scanHexEscape=function(f){for(var x=f==="u"?4:2,d=0,a=0;a<x;++a)if(!this.eof()&&u.Character.isHexDigit(this.source.charCodeAt(this.index)))d=d*16+l(this.source[this.index++]);else return null;return String.fromCharCode(d)},m.prototype.scanUnicodeCodePointEscape=function(){var f=this.source[this.index],x=0;for(f==="}"&&this.throwUnexpectedToken();!this.eof()&&(f=this.source[this.index++],!!u.Character.isHexDigit(f.charCodeAt(0)));)x=x*16+l(f);return(x>1114111||f!=="}")&&this.throwUnexpectedToken(),u.Character.fromCodePoint(x)},m.prototype.getIdentifier=function(){for(var f=this.index++;!this.eof();){var x=this.source.charCodeAt(this.index);if(x===92)return this.index=f,this.getComplexIdentifier();if(x>=55296&&x<57343)return this.index=f,this.getComplexIdentifier();if(u.Character.isIdentifierPart(x))++this.index;else break}return this.source.slice(f,this.index)},m.prototype.getComplexIdentifier=function(){var f=this.codePointAt(this.index),x=u.Character.fromCodePoint(f);this.index+=x.length;var d;for(f===92&&(this.source.charCodeAt(this.index)!==117&&this.throwUnexpectedToken(),++this.index,this.source[this.index]==="{"?(++this.index,d=this.scanUnicodeCodePointEscape()):(d=this.scanHexEscape("u"),(d===null||d==="\\"||!u.Character.isIdentifierStart(d.charCodeAt(0)))&&this.throwUnexpectedToken()),x=d);!this.eof()&&(f=this.codePointAt(this.index),!!u.Character.isIdentifierPart(f));)d=u.Character.fromCodePoint(f),x+=d,this.index+=d.length,f===92&&(x=x.substr(0,x.length-1),this.source.charCodeAt(this.index)!==117&&this.throwUnexpectedToken(),++this.index,this.source[this.index]==="{"?(++this.index,d=this.scanUnicodeCodePointEscape()):(d=this.scanHexEscape("u"),(d===null||d==="\\"||!u.Character.isIdentifierPart(d.charCodeAt(0)))&&this.throwUnexpectedToken()),x+=d);return x},m.prototype.octalToDecimal=function(f){var x=f!=="0",d=y(f);return!this.eof()&&u.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(x=!0,d=d*8+y(this.source[this.index++]),"0123".indexOf(f)>=0&&!this.eof()&&u.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(d=d*8+y(this.source[this.index++]))),{code:d,octal:x}},m.prototype.scanIdentifier=function(){var f,x=this.index,d=this.source.charCodeAt(x)===92?this.getComplexIdentifier():this.getIdentifier();if(d.length===1?f=3:this.isKeyword(d)?f=4:d==="null"?f=5:d==="true"||d==="false"?f=1:f=3,f!==3&&x+d.length!==this.index){var a=this.index;this.index=x,this.tolerateUnexpectedToken(h.Messages.InvalidEscapedReservedWord),this.index=a}return{type:f,value:d,lineNumber:this.lineNumber,lineStart:this.lineStart,start:x,end:this.index}},m.prototype.scanPunctuator=function(){var f=this.index,x=this.source[this.index];switch(x){case"(":case"{":x==="{"&&this.curlyStack.push("{"),++this.index;break;case".":++this.index,this.source[this.index]==="."&&this.source[this.index+1]==="."&&(this.index+=2,x="...");break;case"}":++this.index,this.curlyStack.pop();break;case")":case";":case",":case"[":case"]":case":":case"?":case"~":++this.index;break;default:x=this.source.substr(this.index,4),x===">>>="?this.index+=4:(x=x.substr(0,3),x==="==="||x==="!=="||x===">>>"||x==="<<="||x===">>="||x==="**="?this.index+=3:(x=x.substr(0,2),x==="&&"||x==="||"||x==="=="||x==="!="||x==="+="||x==="-="||x==="*="||x==="/="||x==="++"||x==="--"||x==="<<"||x===">>"||x==="&="||x==="|="||x==="^="||x==="%="||x==="<="||x===">="||x==="=>"||x==="**"?this.index+=2:(x=this.source[this.index],"<>=!+-*%&|^/".indexOf(x)>=0&&++this.index)))}return this.index===f&&this.throwUnexpectedToken(),{type:7,value:x,lineNumber:this.lineNumber,lineStart:this.lineStart,start:f,end:this.index}},m.prototype.scanHexLiteral=function(f){for(var x="";!this.eof()&&u.Character.isHexDigit(this.source.charCodeAt(this.index));)x+=this.source[this.index++];return x.length===0&&this.throwUnexpectedToken(),u.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:6,value:parseInt("0x"+x,16),lineNumber:this.lineNumber,lineStart:this.lineStart,start:f,end:this.index}},m.prototype.scanBinaryLiteral=function(f){for(var x="",d;!this.eof()&&(d=this.source[this.index],!(d!=="0"&&d!=="1"));)x+=this.source[this.index++];return x.length===0&&this.throwUnexpectedToken(),this.eof()||(d=this.source.charCodeAt(this.index),(u.Character.isIdentifierStart(d)||u.Character.isDecimalDigit(d))&&this.throwUnexpectedToken()),{type:6,value:parseInt(x,2),lineNumber:this.lineNumber,lineStart:this.lineStart,start:f,end:this.index}},m.prototype.scanOctalLiteral=function(f,x){var d="",a=!1;for(u.Character.isOctalDigit(f.charCodeAt(0))?(a=!0,d="0"+this.source[this.index++]):++this.index;!this.eof()&&u.Character.isOctalDigit(this.source.charCodeAt(this.index));)d+=this.source[this.index++];return!a&&d.length===0&&this.throwUnexpectedToken(),(u.Character.isIdentifierStart(this.source.charCodeAt(this.index))||u.Character.isDecimalDigit(this.source.charCodeAt(this.index)))&&this.throwUnexpectedToken(),{type:6,value:parseInt(d,8),octal:a,lineNumber:this.lineNumber,lineStart:this.lineStart,start:x,end:this.index}},m.prototype.isImplicitOctalLiteral=function(){for(var f=this.index+1;f<this.length;++f){var x=this.source[f];if(x==="8"||x==="9")return!1;if(!u.Character.isOctalDigit(x.charCodeAt(0)))return!0}return!0},m.prototype.scanNumericLiteral=function(){var f=this.index,x=this.source[f];s.assert(u.Character.isDecimalDigit(x.charCodeAt(0))||x===".","Numeric literal must start with a decimal digit or a decimal point");var d="";if(x!=="."){if(d=this.source[this.index++],x=this.source[this.index],d==="0"){if(x==="x"||x==="X")return++this.index,this.scanHexLiteral(f);if(x==="b"||x==="B")return++this.index,this.scanBinaryLiteral(f);if(x==="o"||x==="O")return this.scanOctalLiteral(x,f);if(x&&u.Character.isOctalDigit(x.charCodeAt(0))&&this.isImplicitOctalLiteral())return this.scanOctalLiteral(x,f)}for(;u.Character.isDecimalDigit(this.source.charCodeAt(this.index));)d+=this.source[this.index++];x=this.source[this.index]}if(x==="."){for(d+=this.source[this.index++];u.Character.isDecimalDigit(this.source.charCodeAt(this.index));)d+=this.source[this.index++];x=this.source[this.index]}if(x==="e"||x==="E")if(d+=this.source[this.index++],x=this.source[this.index],(x==="+"||x==="-")&&(d+=this.source[this.index++]),u.Character.isDecimalDigit(this.source.charCodeAt(this.index)))for(;u.Character.isDecimalDigit(this.source.charCodeAt(this.index));)d+=this.source[this.index++];else this.throwUnexpectedToken();return u.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:6,value:parseFloat(d),lineNumber:this.lineNumber,lineStart:this.lineStart,start:f,end:this.index}},m.prototype.scanStringLiteral=function(){var f=this.index,x=this.source[f];s.assert(x==="'"||x==='"',"String literal must starts with a quote"),++this.index;for(var d=!1,a="";!this.eof();){var o=this.source[this.index++];if(o===x){x="";break}else if(o==="\\")if(o=this.source[this.index++],!o||!u.Character.isLineTerminator(o.charCodeAt(0)))switch(o){case"u":if(this.source[this.index]==="{")++this.index,a+=this.scanUnicodeCodePointEscape();else{var c=this.scanHexEscape(o);c===null&&this.throwUnexpectedToken(),a+=c}break;case"x":var g=this.scanHexEscape(o);g===null&&this.throwUnexpectedToken(h.Messages.InvalidHexEscapeSequence),a+=g;break;case"n":a+=`
`;break;case"r":a+="\r";break;case"t":a+="	";break;case"b":a+="\b";break;case"f":a+="\f";break;case"v":a+="\v";break;case"8":case"9":a+=o,this.tolerateUnexpectedToken();break;default:if(o&&u.Character.isOctalDigit(o.charCodeAt(0))){var v=this.octalToDecimal(o);d=v.octal||d,a+=String.fromCharCode(v.code)}else a+=o;break}else++this.lineNumber,o==="\r"&&this.source[this.index]===`
`&&++this.index,this.lineStart=this.index;else{if(u.Character.isLineTerminator(o.charCodeAt(0)))break;a+=o}}return x!==""&&(this.index=f,this.throwUnexpectedToken()),{type:8,value:a,octal:d,lineNumber:this.lineNumber,lineStart:this.lineStart,start:f,end:this.index}},m.prototype.scanTemplate=function(){var f="",x=!1,d=this.index,a=this.source[d]==="`",o=!1,c=2;for(++this.index;!this.eof();){var g=this.source[this.index++];if(g==="`"){c=1,o=!0,x=!0;break}else if(g==="$"){if(this.source[this.index]==="{"){this.curlyStack.push("${"),++this.index,x=!0;break}f+=g}else if(g==="\\")if(g=this.source[this.index++],u.Character.isLineTerminator(g.charCodeAt(0)))++this.lineNumber,g==="\r"&&this.source[this.index]===`
`&&++this.index,this.lineStart=this.index;else switch(g){case"n":f+=`
`;break;case"r":f+="\r";break;case"t":f+="	";break;case"u":if(this.source[this.index]==="{")++this.index,f+=this.scanUnicodeCodePointEscape();else{var v=this.index,E=this.scanHexEscape(g);E!==null?f+=E:(this.index=v,f+=g)}break;case"x":var _=this.scanHexEscape(g);_===null&&this.throwUnexpectedToken(h.Messages.InvalidHexEscapeSequence),f+=_;break;case"b":f+="\b";break;case"f":f+="\f";break;case"v":f+="\v";break;default:g==="0"?(u.Character.isDecimalDigit(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(h.Messages.TemplateOctalLiteral),f+="\0"):u.Character.isOctalDigit(g.charCodeAt(0))?this.throwUnexpectedToken(h.Messages.TemplateOctalLiteral):f+=g;break}else u.Character.isLineTerminator(g.charCodeAt(0))?(++this.lineNumber,g==="\r"&&this.source[this.index]===`
`&&++this.index,this.lineStart=this.index,f+=`
`):f+=g}return x||this.throwUnexpectedToken(),a||this.curlyStack.pop(),{type:10,value:this.source.slice(d+1,this.index-c),cooked:f,head:a,tail:o,lineNumber:this.lineNumber,lineStart:this.lineStart,start:d,end:this.index}},m.prototype.testRegExp=function(f,x){var d="￿",a=f,o=this;x.indexOf("u")>=0&&(a=a.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,function(c,g,v){var E=parseInt(g||v,16);return E>1114111&&o.throwUnexpectedToken(h.Messages.InvalidRegExp),E<=65535?String.fromCharCode(E):d}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,d));try{RegExp(a)}catch{this.throwUnexpectedToken(h.Messages.InvalidRegExp)}try{return new RegExp(f,x)}catch{return null}},m.prototype.scanRegExpBody=function(){var f=this.source[this.index];s.assert(f==="/","Regular expression literal must start with a slash");for(var x=this.source[this.index++],d=!1,a=!1;!this.eof();)if(f=this.source[this.index++],x+=f,f==="\\")f=this.source[this.index++],u.Character.isLineTerminator(f.charCodeAt(0))&&this.throwUnexpectedToken(h.Messages.UnterminatedRegExp),x+=f;else if(u.Character.isLineTerminator(f.charCodeAt(0)))this.throwUnexpectedToken(h.Messages.UnterminatedRegExp);else if(d)f==="]"&&(d=!1);else if(f==="/"){a=!0;break}else f==="["&&(d=!0);return a||this.throwUnexpectedToken(h.Messages.UnterminatedRegExp),x.substr(1,x.length-2)},m.prototype.scanRegExpFlags=function(){for(var f="",x="";!this.eof();){var d=this.source[this.index];if(!u.Character.isIdentifierPart(d.charCodeAt(0)))break;if(++this.index,d==="\\"&&!this.eof())if(d=this.source[this.index],d==="u"){++this.index;var a=this.index,o=this.scanHexEscape("u");if(o!==null)for(x+=o,f+="\\u";a<this.index;++a)f+=this.source[a];else this.index=a,x+="u",f+="\\u";this.tolerateUnexpectedToken()}else f+="\\",this.tolerateUnexpectedToken();else x+=d,f+=d}return x},m.prototype.scanRegExp=function(){var f=this.index,x=this.scanRegExpBody(),d=this.scanRegExpFlags(),a=this.testRegExp(x,d);return{type:9,value:"",pattern:x,flags:d,regex:a,lineNumber:this.lineNumber,lineStart:this.lineStart,start:f,end:this.index}},m.prototype.lex=function(){if(this.eof())return{type:2,value:"",lineNumber:this.lineNumber,lineStart:this.lineStart,start:this.index,end:this.index};var f=this.source.charCodeAt(this.index);return u.Character.isIdentifierStart(f)?this.scanIdentifier():f===40||f===41||f===59?this.scanPunctuator():f===39||f===34?this.scanStringLiteral():f===46?u.Character.isDecimalDigit(this.source.charCodeAt(this.index+1))?this.scanNumericLiteral():this.scanPunctuator():u.Character.isDecimalDigit(f)?this.scanNumericLiteral():f===96||f===125&&this.curlyStack[this.curlyStack.length-1]==="${"?this.scanTemplate():f>=55296&&f<57343&&u.Character.isIdentifierStart(this.codePointAt(this.index))?this.scanIdentifier():this.scanPunctuator()},m})();r.Scanner=p},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.TokenName={},r.TokenName[1]="Boolean",r.TokenName[2]="<end>",r.TokenName[3]="Identifier",r.TokenName[4]="Keyword",r.TokenName[5]="Null",r.TokenName[6]="Numeric",r.TokenName[7]="Punctuator",r.TokenName[8]="String",r.TokenName[9]="RegularExpression",r.TokenName[10]="Template"},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.XHTMLEntities={quot:'"',amp:"&",apos:"'",gt:">",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",frasl:"⁄",euro:"€",image:"ℑ",weierp:"℘",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",lang:"⟨",rang:"⟩"}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(10),u=i(12),h=i(13),l=(function(){function p(){this.values=[],this.curly=this.paren=-1}return p.prototype.beforeFunctionExpression=function(m){return["(","{","[","in","typeof","instanceof","new","return","case","delete","throw","void","=","+=","-=","*=","**=","/=","%=","<<=",">>=",">>>=","&=","|=","^=",",","+","-","*","**","/","%","++","--","<<",">>",">>>","&","|","^","!","~","&&","||","?",":","===","==",">=","<=","<",">","!=","!=="].indexOf(m)>=0},p.prototype.isRegexStart=function(){var m=this.values[this.values.length-1],f=m!==null;switch(m){case"this":case"]":f=!1;break;case")":var x=this.values[this.paren-1];f=x==="if"||x==="while"||x==="for"||x==="with";break;case"}":if(f=!1,this.values[this.curly-3]==="function"){var d=this.values[this.curly-4];f=d?!this.beforeFunctionExpression(d):!1}else if(this.values[this.curly-4]==="function"){var d=this.values[this.curly-5];f=d?!this.beforeFunctionExpression(d):!0}break}return f},p.prototype.push=function(m){m.type===7||m.type===4?(m.value==="{"?this.curly=this.values.length:m.value==="("&&(this.paren=this.values.length),this.values.push(m.value)):this.values.push(null)},p})(),y=(function(){function p(m,f){this.errorHandler=new s.ErrorHandler,this.errorHandler.tolerant=f?typeof f.tolerant=="boolean"&&f.tolerant:!1,this.scanner=new u.Scanner(m,this.errorHandler),this.scanner.trackComment=f?typeof f.comment=="boolean"&&f.comment:!1,this.trackRange=f?typeof f.range=="boolean"&&f.range:!1,this.trackLoc=f?typeof f.loc=="boolean"&&f.loc:!1,this.buffer=[],this.reader=new l}return p.prototype.errors=function(){return this.errorHandler.errors},p.prototype.getNextToken=function(){if(this.buffer.length===0){var m=this.scanner.scanComments();if(this.scanner.trackComment)for(var f=0;f<m.length;++f){var x=m[f],d=this.scanner.source.slice(x.slice[0],x.slice[1]),a={type:x.multiLine?"BlockComment":"LineComment",value:d};this.trackRange&&(a.range=x.range),this.trackLoc&&(a.loc=x.loc),this.buffer.push(a)}if(!this.scanner.eof()){var o=void 0;this.trackLoc&&(o={start:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},end:{}});var c=this.scanner.source[this.scanner.index]==="/"&&this.reader.isRegexStart(),g=c?this.scanner.scanRegExp():this.scanner.lex();this.reader.push(g);var v={type:h.TokenName[g.type],value:this.scanner.source.slice(g.start,g.end)};if(this.trackRange&&(v.range=[g.start,g.end]),this.trackLoc&&(o.end={line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},v.loc=o),g.type===9){var E=g.pattern,_=g.flags;v.regex={pattern:E,flags:_}}this.buffer.push(v)}}return this.buffer.shift()},p})();r.Tokenizer=y}])})})(Sr)),Sr.exports}var Ke={},jr={},Jn;function Ks(){return Jn||(Jn=1,(function(t){Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var e={},n={};n.byteLength=p,n.toByteArray=f,n.fromByteArray=a;for(var r=[],i=[],s=typeof Uint8Array<"u"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h=0,l=u.length;h<l;++h)r[h]=u[h],i[u.charCodeAt(h)]=h;i[45]=62,i[95]=63;function y(g){var v=g.length;if(v%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var E=g.indexOf("=");E===-1&&(E=v);var _=E===v?0:4-E%4;return[E,_]}function p(g){var v=y(g),E=v[0],_=v[1];return(E+_)*3/4-_}function m(g,v,E){return(v+E)*3/4-E}function f(g){var v,E=y(g),_=E[0],S=E[1],C=new s(m(g,_,S)),A=0,I=S>0?_-4:_,B;for(B=0;B<I;B+=4)v=i[g.charCodeAt(B)]<<18|i[g.charCodeAt(B+1)]<<12|i[g.charCodeAt(B+2)]<<6|i[g.charCodeAt(B+3)],C[A++]=v>>16&255,C[A++]=v>>8&255,C[A++]=v&255;return S===2&&(v=i[g.charCodeAt(B)]<<2|i[g.charCodeAt(B+1)]>>4,C[A++]=v&255),S===1&&(v=i[g.charCodeAt(B)]<<10|i[g.charCodeAt(B+1)]<<4|i[g.charCodeAt(B+2)]>>2,C[A++]=v>>8&255,C[A++]=v&255),C}function x(g){return r[g>>18&63]+r[g>>12&63]+r[g>>6&63]+r[g&63]}function d(g,v,E){for(var _,S=[],C=v;C<E;C+=3)_=(g[C]<<16&16711680)+(g[C+1]<<8&65280)+(g[C+2]&255),S.push(x(_));return S.join("")}function a(g){for(var v,E=g.length,_=E%3,S=[],C=16383,A=0,I=E-_;A<I;A+=C)S.push(d(g,A,A+C>I?I:A+C));return _===1?(v=g[E-1],S.push(r[v>>2]+r[v<<4&63]+"==")):_===2&&(v=(g[E-2]<<8)+g[E-1],S.push(r[v>>10]+r[v>>4&63]+r[v<<2&63]+"=")),S.join("")}var o={};o.read=function(g,v,E,_,S){var C,A,I=S*8-_-1,B=(1<<I)-1,k=B>>1,T=-7,P=E?S-1:0,O=E?-1:1,G=g[v+P];for(P+=O,C=G&(1<<-T)-1,G>>=-T,T+=I;T>0;C=C*256+g[v+P],P+=O,T-=8);for(A=C&(1<<-T)-1,C>>=-T,T+=_;T>0;A=A*256+g[v+P],P+=O,T-=8);if(C===0)C=1-k;else{if(C===B)return A?NaN:(G?-1:1)*(1/0);A=A+Math.pow(2,_),C=C-k}return(G?-1:1)*A*Math.pow(2,C-_)},o.write=function(g,v,E,_,S,C){var A,I,B,k=C*8-S-1,T=(1<<k)-1,P=T>>1,O=S===23?Math.pow(2,-24)-Math.pow(2,-77):0,G=_?0:C-1,$=_?1:-1,z=v<0||v===0&&1/v<0?1:0;for(v=Math.abs(v),isNaN(v)||v===1/0?(I=isNaN(v)?1:0,A=T):(A=Math.floor(Math.log(v)/Math.LN2),v*(B=Math.pow(2,-A))<1&&(A--,B*=2),A+P>=1?v+=O/B:v+=O*Math.pow(2,1-P),v*B>=2&&(A++,B/=2),A+P>=T?(I=0,A=T):A+P>=1?(I=(v*B-1)*Math.pow(2,S),A=A+P):(I=v*Math.pow(2,P-1)*Math.pow(2,S),A=0));S>=8;g[E+G]=I&255,G+=$,I/=256,S-=8);for(A=A<<S|I,k+=S;k>0;g[E+G]=A&255,G+=$,A/=256,k-=8);g[E+G-$]|=z*128};(function(g){const v=n,E=o,_=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;g.Buffer=T,g.SlowBuffer=xe,g.INSPECT_MAX_BYTES=50;const S=2147483647;g.kMaxLength=S;const{Uint8Array:C,ArrayBuffer:A,SharedArrayBuffer:I}=globalThis;T.TYPED_ARRAY_SUPPORT=B(),!T.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function B(){try{const D=new C(1),b={foo:function(){return 42}};return Object.setPrototypeOf(b,C.prototype),Object.setPrototypeOf(D,b),D.foo()===42}catch{return!1}}Object.defineProperty(T.prototype,"parent",{enumerable:!0,get:function(){if(T.isBuffer(this))return this.buffer}}),Object.defineProperty(T.prototype,"offset",{enumerable:!0,get:function(){if(T.isBuffer(this))return this.byteOffset}});function k(D){if(D>S)throw new RangeError('The value "'+D+'" is invalid for option "size"');const b=new C(D);return Object.setPrototypeOf(b,T.prototype),b}function T(D,b,w){if(typeof D=="number"){if(typeof b=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return $(D)}return P(D,b,w)}T.poolSize=8192;function P(D,b,w){if(typeof D=="string")return z(D,b);if(A.isView(D))return Y(D);if(D==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof D);if(R(D,A)||D&&R(D.buffer,A)||typeof I<"u"&&(R(D,I)||D&&R(D.buffer,I)))return W(D,b,w);if(typeof D=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const F=D.valueOf&&D.valueOf();if(F!=null&&F!==D)return T.from(F,b,w);const M=J(D);if(M)return M;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof D[Symbol.toPrimitive]=="function")return T.from(D[Symbol.toPrimitive]("string"),b,w);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof D)}T.from=function(D,b,w){return P(D,b,w)},Object.setPrototypeOf(T.prototype,C.prototype),Object.setPrototypeOf(T,C);function O(D){if(typeof D!="number")throw new TypeError('"size" argument must be of type number');if(D<0)throw new RangeError('The value "'+D+'" is invalid for option "size"')}function G(D,b,w){return O(D),D<=0?k(D):b!==void 0?typeof w=="string"?k(D).fill(b,w):k(D).fill(b):k(D)}T.alloc=function(D,b,w){return G(D,b,w)};function $(D){return O(D),k(D<0?0:se(D)|0)}T.allocUnsafe=function(D){return $(D)},T.allocUnsafeSlow=function(D){return $(D)};function z(D,b){if((typeof b!="string"||b==="")&&(b="utf8"),!T.isEncoding(b))throw new TypeError("Unknown encoding: "+b);const w=he(D,b)|0;let F=k(w);const M=F.write(D,b);return M!==w&&(F=F.slice(0,M)),F}function H(D){const b=D.length<0?0:se(D.length)|0,w=k(b);for(let F=0;F<b;F+=1)w[F]=D[F]&255;return w}function Y(D){if(R(D,C)){const b=new C(D);return W(b.buffer,b.byteOffset,b.byteLength)}return H(D)}function W(D,b,w){if(b<0||D.byteLength<b)throw new RangeError('"offset" is outside of buffer bounds');if(D.byteLength<b+(w||0))throw new RangeError('"length" is outside of buffer bounds');let F;return b===void 0&&w===void 0?F=new C(D):w===void 0?F=new C(D,b):F=new C(D,b,w),Object.setPrototypeOf(F,T.prototype),F}function J(D){if(T.isBuffer(D)){const b=se(D.length)|0,w=k(b);return w.length===0||D.copy(w,0,0,b),w}if(D.length!==void 0)return typeof D.length!="number"||X(D.length)?k(0):H(D);if(D.type==="Buffer"&&Array.isArray(D.data))return H(D.data)}function se(D){if(D>=S)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+S.toString(16)+" bytes");return D|0}function xe(D){return+D!=D&&(D=0),T.alloc(+D)}T.isBuffer=function(b){return b!=null&&b._isBuffer===!0&&b!==T.prototype},T.compare=function(b,w){if(R(b,C)&&(b=T.from(b,b.offset,b.byteLength)),R(w,C)&&(w=T.from(w,w.offset,w.byteLength)),!T.isBuffer(b)||!T.isBuffer(w))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(b===w)return 0;let F=b.length,M=w.length;for(let U=0,V=Math.min(F,M);U<V;++U)if(b[U]!==w[U]){F=b[U],M=w[U];break}return F<M?-1:M<F?1:0},T.isEncoding=function(b){switch(String(b).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},T.concat=function(b,w){if(!Array.isArray(b))throw new TypeError('"list" argument must be an Array of Buffers');if(b.length===0)return T.alloc(0);let F;if(w===void 0)for(w=0,F=0;F<b.length;++F)w+=b[F].length;const M=T.allocUnsafe(w);let U=0;for(F=0;F<b.length;++F){let V=b[F];if(R(V,C))U+V.length>M.length?(T.isBuffer(V)||(V=T.from(V)),V.copy(M,U)):C.prototype.set.call(M,V,U);else if(T.isBuffer(V))V.copy(M,U);else throw new TypeError('"list" argument must be an Array of Buffers');U+=V.length}return M};function he(D,b){if(T.isBuffer(D))return D.length;if(A.isView(D)||R(D,A))return D.byteLength;if(typeof D!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof D);const w=D.length,F=arguments.length>2&&arguments[2]===!0;if(!F&&w===0)return 0;let M=!1;for(;;)switch(b){case"ascii":case"latin1":case"binary":return w;case"utf8":case"utf-8":return Dt(D).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return w*2;case"hex":return w>>>1;case"base64":return St(D).length;default:if(M)return F?-1:Dt(D).length;b=(""+b).toLowerCase(),M=!0}}T.byteLength=he;function Ee(D,b,w){let F=!1;if((b===void 0||b<0)&&(b=0),b>this.length||((w===void 0||w>this.length)&&(w=this.length),w<=0)||(w>>>=0,b>>>=0,w<=b))return"";for(D||(D="utf8");;)switch(D){case"hex":return Z(this,b,w);case"utf8":case"utf-8":return Ae(this,b,w);case"ascii":return je(this,b,w);case"latin1":case"binary":return ue(this,b,w);case"base64":return pe(this,b,w);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fe(this,b,w);default:if(F)throw new TypeError("Unknown encoding: "+D);D=(D+"").toLowerCase(),F=!0}}T.prototype._isBuffer=!0;function te(D,b,w){const F=D[b];D[b]=D[w],D[w]=F}T.prototype.swap16=function(){const b=this.length;if(b%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let w=0;w<b;w+=2)te(this,w,w+1);return this},T.prototype.swap32=function(){const b=this.length;if(b%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let w=0;w<b;w+=4)te(this,w,w+3),te(this,w+1,w+2);return this},T.prototype.swap64=function(){const b=this.length;if(b%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let w=0;w<b;w+=8)te(this,w,w+7),te(this,w+1,w+6),te(this,w+2,w+5),te(this,w+3,w+4);return this},T.prototype.toString=function(){const b=this.length;return b===0?"":arguments.length===0?Ae(this,0,b):Ee.apply(this,arguments)},T.prototype.toLocaleString=T.prototype.toString,T.prototype.equals=function(b){if(!T.isBuffer(b))throw new TypeError("Argument must be a Buffer");return this===b?!0:T.compare(this,b)===0},T.prototype.inspect=function(){let b="";const w=g.INSPECT_MAX_BYTES;return b=this.toString("hex",0,w).replace(/(.{2})/g,"$1 ").trim(),this.length>w&&(b+=" ... "),"<Buffer "+b+">"},_&&(T.prototype[_]=T.prototype.inspect),T.prototype.compare=function(b,w,F,M,U){if(R(b,C)&&(b=T.from(b,b.offset,b.byteLength)),!T.isBuffer(b))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof b);if(w===void 0&&(w=0),F===void 0&&(F=b?b.length:0),M===void 0&&(M=0),U===void 0&&(U=this.length),w<0||F>b.length||M<0||U>this.length)throw new RangeError("out of range index");if(M>=U&&w>=F)return 0;if(M>=U)return-1;if(w>=F)return 1;if(w>>>=0,F>>>=0,M>>>=0,U>>>=0,this===b)return 0;let V=U-M,ye=F-w;const Ue=Math.min(V,ye),Re=this.slice(M,U),Oe=b.slice(w,F);for(let Ie=0;Ie<Ue;++Ie)if(Re[Ie]!==Oe[Ie]){V=Re[Ie],ye=Oe[Ie];break}return V<ye?-1:ye<V?1:0};function ne(D,b,w,F,M){if(D.length===0)return-1;if(typeof w=="string"?(F=w,w=0):w>2147483647?w=2147483647:w<-2147483648&&(w=-2147483648),w=+w,X(w)&&(w=M?0:D.length-1),w<0&&(w=D.length+w),w>=D.length){if(M)return-1;w=D.length-1}else if(w<0)if(M)w=0;else return-1;if(typeof b=="string"&&(b=T.from(b,F)),T.isBuffer(b))return b.length===0?-1:re(D,b,w,F,M);if(typeof b=="number")return b=b&255,typeof C.prototype.indexOf=="function"?M?C.prototype.indexOf.call(D,b,w):C.prototype.lastIndexOf.call(D,b,w):re(D,[b],w,F,M);throw new TypeError("val must be string, number or Buffer")}function re(D,b,w,F,M){let U=1,V=D.length,ye=b.length;if(F!==void 0&&(F=String(F).toLowerCase(),F==="ucs2"||F==="ucs-2"||F==="utf16le"||F==="utf-16le")){if(D.length<2||b.length<2)return-1;U=2,V/=2,ye/=2,w/=2}function Ue(Oe,Ie){return U===1?Oe[Ie]:Oe.readUInt16BE(Ie*U)}let Re;if(M){let Oe=-1;for(Re=w;Re<V;Re++)if(Ue(D,Re)===Ue(b,Oe===-1?0:Re-Oe)){if(Oe===-1&&(Oe=Re),Re-Oe+1===ye)return Oe*U}else Oe!==-1&&(Re-=Re-Oe),Oe=-1}else for(w+ye>V&&(w=V-ye),Re=w;Re>=0;Re--){let Oe=!0;for(let Ie=0;Ie<ye;Ie++)if(Ue(D,Re+Ie)!==Ue(b,Ie)){Oe=!1;break}if(Oe)return Re}return-1}T.prototype.includes=function(b,w,F){return this.indexOf(b,w,F)!==-1},T.prototype.indexOf=function(b,w,F){return ne(this,b,w,F,!0)},T.prototype.lastIndexOf=function(b,w,F){return ne(this,b,w,F,!1)};function ae(D,b,w,F){w=Number(w)||0;const M=D.length-w;F?(F=Number(F),F>M&&(F=M)):F=M;const U=b.length;F>U/2&&(F=U/2);let V;for(V=0;V<F;++V){const ye=parseInt(b.substr(V*2,2),16);if(X(ye))return V;D[w+V]=ye}return V}function oe(D,b,w,F){return L(Dt(b,D.length-w),D,w,F)}function j(D,b,w,F){return L(At(b),D,w,F)}function ee(D,b,w,F){return L(St(b),D,w,F)}function le(D,b,w,F){return L(Ct(b,D.length-w),D,w,F)}T.prototype.write=function(b,w,F,M){if(w===void 0)M="utf8",F=this.length,w=0;else if(F===void 0&&typeof w=="string")M=w,F=this.length,w=0;else if(isFinite(w))w=w>>>0,isFinite(F)?(F=F>>>0,M===void 0&&(M="utf8")):(M=F,F=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const U=this.length-w;if((F===void 0||F>U)&&(F=U),b.length>0&&(F<0||w<0)||w>this.length)throw new RangeError("Attempt to write outside buffer bounds");M||(M="utf8");let V=!1;for(;;)switch(M){case"hex":return ae(this,b,w,F);case"utf8":case"utf-8":return oe(this,b,w,F);case"ascii":case"latin1":case"binary":return j(this,b,w,F);case"base64":return ee(this,b,w,F);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return le(this,b,w,F);default:if(V)throw new TypeError("Unknown encoding: "+M);M=(""+M).toLowerCase(),V=!0}},T.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function pe(D,b,w){return b===0&&w===D.length?v.fromByteArray(D):v.fromByteArray(D.slice(b,w))}function Ae(D,b,w){w=Math.min(D.length,w);const F=[];let M=b;for(;M<w;){const U=D[M];let V=null,ye=U>239?4:U>223?3:U>191?2:1;if(M+ye<=w){let Ue,Re,Oe,Ie;switch(ye){case 1:U<128&&(V=U);break;case 2:Ue=D[M+1],(Ue&192)===128&&(Ie=(U&31)<<6|Ue&63,Ie>127&&(V=Ie));break;case 3:Ue=D[M+1],Re=D[M+2],(Ue&192)===128&&(Re&192)===128&&(Ie=(U&15)<<12|(Ue&63)<<6|Re&63,Ie>2047&&(Ie<55296||Ie>57343)&&(V=Ie));break;case 4:Ue=D[M+1],Re=D[M+2],Oe=D[M+3],(Ue&192)===128&&(Re&192)===128&&(Oe&192)===128&&(Ie=(U&15)<<18|(Ue&63)<<12|(Re&63)<<6|Oe&63,Ie>65535&&Ie<1114112&&(V=Ie))}}V===null?(V=65533,ye=1):V>65535&&(V-=65536,F.push(V>>>10&1023|55296),V=56320|V&1023),F.push(V),M+=ye}return Ce(F)}const Pe=4096;function Ce(D){const b=D.length;if(b<=Pe)return String.fromCharCode.apply(String,D);let w="",F=0;for(;F<b;)w+=String.fromCharCode.apply(String,D.slice(F,F+=Pe));return w}function je(D,b,w){let F="";w=Math.min(D.length,w);for(let M=b;M<w;++M)F+=String.fromCharCode(D[M]&127);return F}function ue(D,b,w){let F="";w=Math.min(D.length,w);for(let M=b;M<w;++M)F+=String.fromCharCode(D[M]);return F}function Z(D,b,w){const F=D.length;(!b||b<0)&&(b=0),(!w||w<0||w>F)&&(w=F);let M="";for(let U=b;U<w;++U)M+=me[D[U]];return M}function fe(D,b,w){const F=D.slice(b,w);let M="";for(let U=0;U<F.length-1;U+=2)M+=String.fromCharCode(F[U]+F[U+1]*256);return M}T.prototype.slice=function(b,w){const F=this.length;b=~~b,w=w===void 0?F:~~w,b<0?(b+=F,b<0&&(b=0)):b>F&&(b=F),w<0?(w+=F,w<0&&(w=0)):w>F&&(w=F),w<b&&(w=b);const M=this.subarray(b,w);return Object.setPrototypeOf(M,T.prototype),M};function q(D,b,w){if(D%1!==0||D<0)throw new RangeError("offset is not uint");if(D+b>w)throw new RangeError("Trying to access beyond buffer length")}T.prototype.readUintLE=T.prototype.readUIntLE=function(b,w,F){b=b>>>0,w=w>>>0,F||q(b,w,this.length);let M=this[b],U=1,V=0;for(;++V<w&&(U*=256);)M+=this[b+V]*U;return M},T.prototype.readUintBE=T.prototype.readUIntBE=function(b,w,F){b=b>>>0,w=w>>>0,F||q(b,w,this.length);let M=this[b+--w],U=1;for(;w>0&&(U*=256);)M+=this[b+--w]*U;return M},T.prototype.readUint8=T.prototype.readUInt8=function(b,w){return b=b>>>0,w||q(b,1,this.length),this[b]},T.prototype.readUint16LE=T.prototype.readUInt16LE=function(b,w){return b=b>>>0,w||q(b,2,this.length),this[b]|this[b+1]<<8},T.prototype.readUint16BE=T.prototype.readUInt16BE=function(b,w){return b=b>>>0,w||q(b,2,this.length),this[b]<<8|this[b+1]},T.prototype.readUint32LE=T.prototype.readUInt32LE=function(b,w){return b=b>>>0,w||q(b,4,this.length),(this[b]|this[b+1]<<8|this[b+2]<<16)+this[b+3]*16777216},T.prototype.readUint32BE=T.prototype.readUInt32BE=function(b,w){return b=b>>>0,w||q(b,4,this.length),this[b]*16777216+(this[b+1]<<16|this[b+2]<<8|this[b+3])},T.prototype.readBigUInt64LE=Se(function(b){b=b>>>0,ht(b,"offset");const w=this[b],F=this[b+7];(w===void 0||F===void 0)&&gt(b,this.length-8);const M=w+this[++b]*2**8+this[++b]*2**16+this[++b]*2**24,U=this[++b]+this[++b]*2**8+this[++b]*2**16+F*2**24;return BigInt(M)+(BigInt(U)<<BigInt(32))}),T.prototype.readBigUInt64BE=Se(function(b){b=b>>>0,ht(b,"offset");const w=this[b],F=this[b+7];(w===void 0||F===void 0)&&gt(b,this.length-8);const M=w*2**24+this[++b]*2**16+this[++b]*2**8+this[++b],U=this[++b]*2**24+this[++b]*2**16+this[++b]*2**8+F;return(BigInt(M)<<BigInt(32))+BigInt(U)}),T.prototype.readIntLE=function(b,w,F){b=b>>>0,w=w>>>0,F||q(b,w,this.length);let M=this[b],U=1,V=0;for(;++V<w&&(U*=256);)M+=this[b+V]*U;return U*=128,M>=U&&(M-=Math.pow(2,8*w)),M},T.prototype.readIntBE=function(b,w,F){b=b>>>0,w=w>>>0,F||q(b,w,this.length);let M=w,U=1,V=this[b+--M];for(;M>0&&(U*=256);)V+=this[b+--M]*U;return U*=128,V>=U&&(V-=Math.pow(2,8*w)),V},T.prototype.readInt8=function(b,w){return b=b>>>0,w||q(b,1,this.length),this[b]&128?(255-this[b]+1)*-1:this[b]},T.prototype.readInt16LE=function(b,w){b=b>>>0,w||q(b,2,this.length);const F=this[b]|this[b+1]<<8;return F&32768?F|4294901760:F},T.prototype.readInt16BE=function(b,w){b=b>>>0,w||q(b,2,this.length);const F=this[b+1]|this[b]<<8;return F&32768?F|4294901760:F},T.prototype.readInt32LE=function(b,w){return b=b>>>0,w||q(b,4,this.length),this[b]|this[b+1]<<8|this[b+2]<<16|this[b+3]<<24},T.prototype.readInt32BE=function(b,w){return b=b>>>0,w||q(b,4,this.length),this[b]<<24|this[b+1]<<16|this[b+2]<<8|this[b+3]},T.prototype.readBigInt64LE=Se(function(b){b=b>>>0,ht(b,"offset");const w=this[b],F=this[b+7];(w===void 0||F===void 0)&&gt(b,this.length-8);const M=this[b+4]+this[b+5]*2**8+this[b+6]*2**16+(F<<24);return(BigInt(M)<<BigInt(32))+BigInt(w+this[++b]*2**8+this[++b]*2**16+this[++b]*2**24)}),T.prototype.readBigInt64BE=Se(function(b){b=b>>>0,ht(b,"offset");const w=this[b],F=this[b+7];(w===void 0||F===void 0)&&gt(b,this.length-8);const M=(w<<24)+this[++b]*2**16+this[++b]*2**8+this[++b];return(BigInt(M)<<BigInt(32))+BigInt(this[++b]*2**24+this[++b]*2**16+this[++b]*2**8+F)}),T.prototype.readFloatLE=function(b,w){return b=b>>>0,w||q(b,4,this.length),E.read(this,b,!0,23,4)},T.prototype.readFloatBE=function(b,w){return b=b>>>0,w||q(b,4,this.length),E.read(this,b,!1,23,4)},T.prototype.readDoubleLE=function(b,w){return b=b>>>0,w||q(b,8,this.length),E.read(this,b,!0,52,8)},T.prototype.readDoubleBE=function(b,w){return b=b>>>0,w||q(b,8,this.length),E.read(this,b,!1,52,8)};function ge(D,b,w,F,M,U){if(!T.isBuffer(D))throw new TypeError('"buffer" argument must be a Buffer instance');if(b>M||b<U)throw new RangeError('"value" argument is out of bounds');if(w+F>D.length)throw new RangeError("Index out of range")}T.prototype.writeUintLE=T.prototype.writeUIntLE=function(b,w,F,M){if(b=+b,w=w>>>0,F=F>>>0,!M){const ye=Math.pow(2,8*F)-1;ge(this,b,w,F,ye,0)}let U=1,V=0;for(this[w]=b&255;++V<F&&(U*=256);)this[w+V]=b/U&255;return w+F},T.prototype.writeUintBE=T.prototype.writeUIntBE=function(b,w,F,M){if(b=+b,w=w>>>0,F=F>>>0,!M){const ye=Math.pow(2,8*F)-1;ge(this,b,w,F,ye,0)}let U=F-1,V=1;for(this[w+U]=b&255;--U>=0&&(V*=256);)this[w+U]=b/V&255;return w+F},T.prototype.writeUint8=T.prototype.writeUInt8=function(b,w,F){return b=+b,w=w>>>0,F||ge(this,b,w,1,255,0),this[w]=b&255,w+1},T.prototype.writeUint16LE=T.prototype.writeUInt16LE=function(b,w,F){return b=+b,w=w>>>0,F||ge(this,b,w,2,65535,0),this[w]=b&255,this[w+1]=b>>>8,w+2},T.prototype.writeUint16BE=T.prototype.writeUInt16BE=function(b,w,F){return b=+b,w=w>>>0,F||ge(this,b,w,2,65535,0),this[w]=b>>>8,this[w+1]=b&255,w+2},T.prototype.writeUint32LE=T.prototype.writeUInt32LE=function(b,w,F){return b=+b,w=w>>>0,F||ge(this,b,w,4,4294967295,0),this[w+3]=b>>>24,this[w+2]=b>>>16,this[w+1]=b>>>8,this[w]=b&255,w+4},T.prototype.writeUint32BE=T.prototype.writeUInt32BE=function(b,w,F){return b=+b,w=w>>>0,F||ge(this,b,w,4,4294967295,0),this[w]=b>>>24,this[w+1]=b>>>16,this[w+2]=b>>>8,this[w+3]=b&255,w+4};function qe(D,b,w,F,M){ot(b,F,M,D,w,7);let U=Number(b&BigInt(4294967295));D[w++]=U,U=U>>8,D[w++]=U,U=U>>8,D[w++]=U,U=U>>8,D[w++]=U;let V=Number(b>>BigInt(32)&BigInt(4294967295));return D[w++]=V,V=V>>8,D[w++]=V,V=V>>8,D[w++]=V,V=V>>8,D[w++]=V,w}function Me(D,b,w,F,M){ot(b,F,M,D,w,7);let U=Number(b&BigInt(4294967295));D[w+7]=U,U=U>>8,D[w+6]=U,U=U>>8,D[w+5]=U,U=U>>8,D[w+4]=U;let V=Number(b>>BigInt(32)&BigInt(4294967295));return D[w+3]=V,V=V>>8,D[w+2]=V,V=V>>8,D[w+1]=V,V=V>>8,D[w]=V,w+8}T.prototype.writeBigUInt64LE=Se(function(b,w=0){return qe(this,b,w,BigInt(0),BigInt("0xffffffffffffffff"))}),T.prototype.writeBigUInt64BE=Se(function(b,w=0){return Me(this,b,w,BigInt(0),BigInt("0xffffffffffffffff"))}),T.prototype.writeIntLE=function(b,w,F,M){if(b=+b,w=w>>>0,!M){const Ue=Math.pow(2,8*F-1);ge(this,b,w,F,Ue-1,-Ue)}let U=0,V=1,ye=0;for(this[w]=b&255;++U<F&&(V*=256);)b<0&&ye===0&&this[w+U-1]!==0&&(ye=1),this[w+U]=(b/V>>0)-ye&255;return w+F},T.prototype.writeIntBE=function(b,w,F,M){if(b=+b,w=w>>>0,!M){const Ue=Math.pow(2,8*F-1);ge(this,b,w,F,Ue-1,-Ue)}let U=F-1,V=1,ye=0;for(this[w+U]=b&255;--U>=0&&(V*=256);)b<0&&ye===0&&this[w+U+1]!==0&&(ye=1),this[w+U]=(b/V>>0)-ye&255;return w+F},T.prototype.writeInt8=function(b,w,F){return b=+b,w=w>>>0,F||ge(this,b,w,1,127,-128),b<0&&(b=255+b+1),this[w]=b&255,w+1},T.prototype.writeInt16LE=function(b,w,F){return b=+b,w=w>>>0,F||ge(this,b,w,2,32767,-32768),this[w]=b&255,this[w+1]=b>>>8,w+2},T.prototype.writeInt16BE=function(b,w,F){return b=+b,w=w>>>0,F||ge(this,b,w,2,32767,-32768),this[w]=b>>>8,this[w+1]=b&255,w+2},T.prototype.writeInt32LE=function(b,w,F){return b=+b,w=w>>>0,F||ge(this,b,w,4,2147483647,-2147483648),this[w]=b&255,this[w+1]=b>>>8,this[w+2]=b>>>16,this[w+3]=b>>>24,w+4},T.prototype.writeInt32BE=function(b,w,F){return b=+b,w=w>>>0,F||ge(this,b,w,4,2147483647,-2147483648),b<0&&(b=4294967295+b+1),this[w]=b>>>24,this[w+1]=b>>>16,this[w+2]=b>>>8,this[w+3]=b&255,w+4},T.prototype.writeBigInt64LE=Se(function(b,w=0){return qe(this,b,w,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),T.prototype.writeBigInt64BE=Se(function(b,w=0){return Me(this,b,w,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function _e(D,b,w,F,M,U){if(w+F>D.length)throw new RangeError("Index out of range");if(w<0)throw new RangeError("Index out of range")}function Ne(D,b,w,F,M){return b=+b,w=w>>>0,M||_e(D,b,w,4),E.write(D,b,w,F,23,4),w+4}T.prototype.writeFloatLE=function(b,w,F){return Ne(this,b,w,!0,F)},T.prototype.writeFloatBE=function(b,w,F){return Ne(this,b,w,!1,F)};function Le(D,b,w,F,M){return b=+b,w=w>>>0,M||_e(D,b,w,8),E.write(D,b,w,F,52,8),w+8}T.prototype.writeDoubleLE=function(b,w,F){return Le(this,b,w,!0,F)},T.prototype.writeDoubleBE=function(b,w,F){return Le(this,b,w,!1,F)},T.prototype.copy=function(b,w,F,M){if(!T.isBuffer(b))throw new TypeError("argument should be a Buffer");if(F||(F=0),!M&&M!==0&&(M=this.length),w>=b.length&&(w=b.length),w||(w=0),M>0&&M<F&&(M=F),M===F||b.length===0||this.length===0)return 0;if(w<0)throw new RangeError("targetStart out of bounds");if(F<0||F>=this.length)throw new RangeError("Index out of range");if(M<0)throw new RangeError("sourceEnd out of bounds");M>this.length&&(M=this.length),b.length-w<M-F&&(M=b.length-w+F);const U=M-F;return this===b&&typeof C.prototype.copyWithin=="function"?this.copyWithin(w,F,M):C.prototype.set.call(b,this.subarray(F,M),w),U},T.prototype.fill=function(b,w,F,M){if(typeof b=="string"){if(typeof w=="string"?(M=w,w=0,F=this.length):typeof F=="string"&&(M=F,F=this.length),M!==void 0&&typeof M!="string")throw new TypeError("encoding must be a string");if(typeof M=="string"&&!T.isEncoding(M))throw new TypeError("Unknown encoding: "+M);if(b.length===1){const V=b.charCodeAt(0);(M==="utf8"&&V<128||M==="latin1")&&(b=V)}}else typeof b=="number"?b=b&255:typeof b=="boolean"&&(b=Number(b));if(w<0||this.length<w||this.length<F)throw new RangeError("Out of range index");if(F<=w)return this;w=w>>>0,F=F===void 0?this.length:F>>>0,b||(b=0);let U;if(typeof b=="number")for(U=w;U<F;++U)this[U]=b;else{const V=T.isBuffer(b)?b:T.from(b,M),ye=V.length;if(ye===0)throw new TypeError('The value "'+b+'" is invalid for argument "value"');for(U=0;U<F-w;++U)this[U+w]=V[U%ye]}return this};const we={};function Te(D,b,w){we[D]=class extends w{constructor(){super(),Object.defineProperty(this,"message",{value:b.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${D}]`,this.stack,delete this.name}get code(){return D}set code(M){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:M,writable:!0})}toString(){return`${this.name} [${D}]: ${this.message}`}}}Te("ERR_BUFFER_OUT_OF_BOUNDS",function(D){return D?`${D} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Te("ERR_INVALID_ARG_TYPE",function(D,b){return`The "${D}" argument must be of type number. Received type ${typeof b}`},TypeError),Te("ERR_OUT_OF_RANGE",function(D,b,w){let F=`The value of "${D}" is out of range.`,M=w;return Number.isInteger(w)&&Math.abs(w)>2**32?M=We(String(w)):typeof w=="bigint"&&(M=String(w),(w>BigInt(2)**BigInt(32)||w<-(BigInt(2)**BigInt(32)))&&(M=We(M)),M+="n"),F+=` It must be ${b}. Received ${M}`,F},RangeError);function We(D){let b="",w=D.length;const F=D[0]==="-"?1:0;for(;w>=F+4;w-=3)b=`_${D.slice(w-3,w)}${b}`;return`${D.slice(0,w)}${b}`}function ft(D,b,w){ht(b,"offset"),(D[b]===void 0||D[b+w]===void 0)&&gt(b,D.length-(w+1))}function ot(D,b,w,F,M,U){if(D>w||D<b){const V=typeof b=="bigint"?"n":"";let ye;throw b===0||b===BigInt(0)?ye=`>= 0${V} and < 2${V} ** ${(U+1)*8}${V}`:ye=`>= -(2${V} ** ${(U+1)*8-1}${V}) and < 2 ** ${(U+1)*8-1}${V}`,new we.ERR_OUT_OF_RANGE("value",ye,D)}ft(F,M,U)}function ht(D,b){if(typeof D!="number")throw new we.ERR_INVALID_ARG_TYPE(b,"number",D)}function gt(D,b,w){throw Math.floor(D)!==D?(ht(D,w),new we.ERR_OUT_OF_RANGE("offset","an integer",D)):b<0?new we.ERR_BUFFER_OUT_OF_BOUNDS:new we.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${b}`,D)}const Rt=/[^+/0-9A-Za-z-_]/g;function Pt(D){if(D=D.split("=")[0],D=D.trim().replace(Rt,""),D.length<2)return"";for(;D.length%4!==0;)D=D+"=";return D}function Dt(D,b){b=b||1/0;let w;const F=D.length;let M=null;const U=[];for(let V=0;V<F;++V){if(w=D.charCodeAt(V),w>55295&&w<57344){if(!M){if(w>56319){(b-=3)>-1&&U.push(239,191,189);continue}else if(V+1===F){(b-=3)>-1&&U.push(239,191,189);continue}M=w;continue}if(w<56320){(b-=3)>-1&&U.push(239,191,189),M=w;continue}w=(M-55296<<10|w-56320)+65536}else M&&(b-=3)>-1&&U.push(239,191,189);if(M=null,w<128){if((b-=1)<0)break;U.push(w)}else if(w<2048){if((b-=2)<0)break;U.push(w>>6|192,w&63|128)}else if(w<65536){if((b-=3)<0)break;U.push(w>>12|224,w>>6&63|128,w&63|128)}else if(w<1114112){if((b-=4)<0)break;U.push(w>>18|240,w>>12&63|128,w>>6&63|128,w&63|128)}else throw new Error("Invalid code point")}return U}function At(D){const b=[];for(let w=0;w<D.length;++w)b.push(D.charCodeAt(w)&255);return b}function Ct(D,b){let w,F,M;const U=[];for(let V=0;V<D.length&&!((b-=2)<0);++V)w=D.charCodeAt(V),F=w>>8,M=w%256,U.push(M),U.push(F);return U}function St(D){return v.toByteArray(Pt(D))}function L(D,b,w,F){let M;for(M=0;M<F&&!(M+w>=b.length||M>=D.length);++M)b[M+w]=D[M];return M}function R(D,b){return D instanceof b||D!=null&&D.constructor!=null&&D.constructor.name!=null&&D.constructor.name===b.name}function X(D){return D!==D}const me=(function(){const D="0123456789abcdef",b=new Array(256);for(let w=0;w<16;++w){const F=w*16;for(let M=0;M<16;++M)b[F+M]=D[w]+D[M]}return b})();function Se(D){return typeof BigInt>"u"?Ut:D}function Ut(){throw new Error("BigInt not supported")}})(e);const c=e.Buffer;t.Blob=e.Blob,t.BlobOptions=e.BlobOptions,t.Buffer=e.Buffer,t.File=e.File,t.FileOptions=e.FileOptions,t.INSPECT_MAX_BYTES=e.INSPECT_MAX_BYTES,t.SlowBuffer=e.SlowBuffer,t.TranscodeEncoding=e.TranscodeEncoding,t.atob=e.atob,t.btoa=e.btoa,t.constants=e.constants,t.default=c,t.isAscii=e.isAscii,t.isUtf8=e.isUtf8,t.kMaxLength=e.kMaxLength,t.kStringMaxLength=e.kStringMaxLength,t.resolveObjectURL=e.resolveObjectURL,t.transcode=e.transcode})(jr)),jr}var Wn;function mn(){if(Wn)return Ke;Wn=1;function t(a){return Array.isArray?Array.isArray(a):d(a)==="[object Array]"}Ke.isArray=t;function e(a){return typeof a=="boolean"}Ke.isBoolean=e;function n(a){return a===null}Ke.isNull=n;function r(a){return a==null}Ke.isNullOrUndefined=r;function i(a){return typeof a=="number"}Ke.isNumber=i;function s(a){return typeof a=="string"}Ke.isString=s;function u(a){return typeof a=="symbol"}Ke.isSymbol=u;function h(a){return a===void 0}Ke.isUndefined=h;function l(a){return d(a)==="[object RegExp]"}Ke.isRegExp=l;function y(a){return typeof a=="object"&&a!==null}Ke.isObject=y;function p(a){return d(a)==="[object Date]"}Ke.isDate=p;function m(a){return d(a)==="[object Error]"||a instanceof Error}Ke.isError=m;function f(a){return typeof a=="function"}Ke.isFunction=f;function x(a){return a===null||typeof a=="boolean"||typeof a=="number"||typeof a=="string"||typeof a=="symbol"||typeof a>"u"}Ke.isPrimitive=x,Ke.isBuffer=Ks().Buffer.isBuffer;function d(a){return Object.prototype.toString.call(a)}return Ke}var qr,Kn;function Ys(){if(Kn)return qr;Kn=1;const t=32,e=7,n=256,r=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9];let i;const s=a=>a<1e5?a<100?a<10?0:1:a<1e4?a<1e3?2:3:4:a<1e7?a<1e6?5:6:a<1e9?a<1e8?7:8:9;function u(a,o){if(a===o)return 0;if(~~a===a&&~~o===o){if(a===0||o===0)return a<o?-1:1;if(a<0||o<0){if(o>=0)return-1;if(a>=0)return 1;a=-a,o=-o}const v=s(a),E=s(o);let _=0;return v<E?(a*=r[E-v-1],o/=10,_=-1):v>E&&(o*=r[v-E-1],a/=10,_=1),a===o?_:a<o?-1:1}const c=String(a),g=String(o);return c===g?0:c<g?-1:1}function h(a){let o=0;for(;a>=t;)o|=a&1,a>>=1;return a+o}function l(a,o,c,g){let v=o+1;if(v===c)return 1;if(g(a[v++],a[o])<0){for(;v<c&&g(a[v],a[v-1])<0;)v++;y(a,o,v),y(i,o,v)}else for(;v<c&&g(a[v],a[v-1])>=0;)v++;return v-o}function y(a,o,c){for(c--;o<c;){const g=a[o];a[o++]=a[c],a[c--]=g}}function p(a,o,c,g,v){for(g===o&&g++;g<c;g++){const E=a[g],_=i[g];let S=o,C=g;for(;S<C;){const I=S+C>>>1;v(E,a[I])<0?C=I:S=I+1}let A=g-S;switch(A){case 3:a[S+3]=a[S+2],i[S+3]=i[S+2];case 2:a[S+2]=a[S+1],i[S+2]=i[S+1];case 1:a[S+1]=a[S],i[S+1]=i[S];break;default:for(;A>0;)a[S+A]=a[S+A-1],i[S+A]=i[S+A-1],A--}a[S]=E,i[S]=_}}function m(a,o,c,g,v,E){let _=0,S=0,C=1;if(E(a,o[c+v])>0){for(S=g-v;C<S&&E(a,o[c+v+C])>0;)_=C,C=(C<<1)+1,C<=0&&(C=S);C>S&&(C=S),_+=v,C+=v}else{for(S=v+1;C<S&&E(a,o[c+v-C])<=0;)_=C,C=(C<<1)+1,C<=0&&(C=S);C>S&&(C=S);const A=_;_=v-C,C=v-A}for(_++;_<C;){const A=_+(C-_>>>1);E(a,o[c+A])>0?_=A+1:C=A}return C}function f(a,o,c,g,v,E){let _=0,S=0,C=1;if(E(a,o[c+v])<0){for(S=v+1;C<S&&E(a,o[c+v-C])<0;)_=C,C=(C<<1)+1,C<=0&&(C=S);C>S&&(C=S);const A=_;_=v-C,C=v-A}else{for(S=g-v;C<S&&E(a,o[c+v+C])>=0;)_=C,C=(C<<1)+1,C<=0&&(C=S);C>S&&(C=S),_+=v,C+=v}for(_++;_<C;){const A=_+(C-_>>>1);E(a,o[c+A])<0?C=A:_=A+1}return C}class x{constructor(o,c){this.array=o,this.compare=c;const{length:g}=o;this.length=g,this.minGallop=e,this.tmpStorageLength=g<2*n?g>>>1:n,this.tmp=new Array(this.tmpStorageLength),this.tmpIndex=new Array(this.tmpStorageLength),this.stackLength=g<120?5:g<1542?10:g<119151?19:40,this.runStart=new Array(this.stackLength),this.runLength=new Array(this.stackLength),this.stackSize=0}pushRun(o,c){this.runStart[this.stackSize]=o,this.runLength[this.stackSize]=c,this.stackSize+=1}mergeRuns(){for(;this.stackSize>1;){let o=this.stackSize-2;if(o>=1&&this.runLength[o-1]<=this.runLength[o]+this.runLength[o+1]||o>=2&&this.runLength[o-2]<=this.runLength[o]+this.runLength[o-1])this.runLength[o-1]<this.runLength[o+1]&&o--;else if(this.runLength[o]>this.runLength[o+1])break;this.mergeAt(o)}}forceMergeRuns(){for(;this.stackSize>1;){let o=this.stackSize-2;o>0&&this.runLength[o-1]<this.runLength[o+1]&&o--,this.mergeAt(o)}}mergeAt(o){const{compare:c}=this,{array:g}=this;let v=this.runStart[o],E=this.runLength[o];const _=this.runStart[o+1];let S=this.runLength[o+1];this.runLength[o]=E+S,o===this.stackSize-3&&(this.runStart[o+1]=this.runStart[o+2],this.runLength[o+1]=this.runLength[o+2]),this.stackSize--;const C=f(g[_],g,v,E,0,c);v+=C,E-=C,E!==0&&(S=m(g[v+E-1],g,_,S,S-1,c),S!==0&&(E<=S?this.mergeLow(v,E,_,S):this.mergeHigh(v,E,_,S)))}mergeLow(o,c,g,v){const{compare:E}=this,{array:_}=this,{tmp:S}=this,{tmpIndex:C}=this;let A=0;for(A=0;A<c;A++)S[A]=_[o+A],C[A]=i[o+A];let I=0,B=g,k=o;if(_[k]=_[B],i[k]=i[B],k++,B++,--v===0){for(A=0;A<c;A++)_[k+A]=S[I+A],i[k+A]=C[I+A];return}if(c===1){for(A=0;A<v;A++)_[k+A]=_[B+A],i[k+A]=i[B+A];_[k+v]=S[I],i[k+v]=C[I];return}let{minGallop:T}=this;for(;;){let P=0,O=0,G=!1;do if(E(_[B],S[I])<0){if(_[k]=_[B],i[k]=i[B],k++,B++,O++,P=0,--v===0){G=!0;break}}else if(_[k]=S[I],i[k]=C[I],k++,I++,P++,O=0,--c===1){G=!0;break}while((P|O)<T);if(G)break;do{if(P=f(_[B],S,I,c,0,E),P!==0){for(A=0;A<P;A++)_[k+A]=S[I+A],i[k+A]=C[I+A];if(k+=P,I+=P,c-=P,c<=1){G=!0;break}}if(_[k]=_[B],i[k]=i[B],k++,B++,--v===0){G=!0;break}if(O=m(S[I],_,B,v,0,E),O!==0){for(A=0;A<O;A++)_[k+A]=_[B+A],i[k+A]=i[B+A];if(k+=O,B+=O,v-=O,v===0){G=!0;break}}if(_[k]=S[I],i[k]=C[I],k++,I++,--c===1){G=!0;break}T--}while(P>=e||O>=e);if(G)break;T<0&&(T=0),T+=2}if(this.minGallop=T,T<1&&(this.minGallop=1),c===1){for(A=0;A<v;A++)_[k+A]=_[B+A],i[k+A]=i[B+A];_[k+v]=S[I],i[k+v]=C[I]}else{if(c===0)throw new Error("mergeLow preconditions were not respected");for(A=0;A<c;A++)_[k+A]=S[I+A],i[k+A]=C[I+A]}}mergeHigh(o,c,g,v){const{compare:E}=this,{array:_}=this,{tmp:S}=this,{tmpIndex:C}=this;let A=0;for(A=0;A<v;A++)S[A]=_[g+A],C[A]=i[g+A];let I=o+c-1,B=v-1,k=g+v-1,T=0,P=0;if(_[k]=_[I],i[k]=i[I],k--,I--,--c===0){for(T=k-(v-1),A=0;A<v;A++)_[T+A]=S[A],i[T+A]=C[A];return}if(v===1){for(k-=c,I-=c,P=k+1,T=I+1,A=c-1;A>=0;A--)_[P+A]=_[T+A],i[P+A]=i[T+A];_[k]=S[B],i[k]=C[B];return}let{minGallop:O}=this;for(;;){let G=0,$=0,z=!1;do if(E(S[B],_[I])<0){if(_[k]=_[I],i[k]=i[I],k--,I--,G++,$=0,--c===0){z=!0;break}}else if(_[k]=S[B],i[k]=C[B],k--,B--,$++,G=0,--v===1){z=!0;break}while((G|$)<O);if(z)break;do{if(G=c-f(S[B],_,o,c,c-1,E),G!==0){for(k-=G,I-=G,c-=G,P=k+1,T=I+1,A=G-1;A>=0;A--)_[P+A]=_[T+A],i[P+A]=i[T+A];if(c===0){z=!0;break}}if(_[k]=S[B],i[k]=C[B],k--,B--,--v===1){z=!0;break}if($=v-m(_[I],S,0,v,v-1,E),$!==0){for(k-=$,B-=$,v-=$,P=k+1,T=B+1,A=0;A<$;A++)_[P+A]=S[T+A],i[P+A]=C[T+A];if(v<=1){z=!0;break}}if(_[k]=_[I],i[k]=i[I],k--,I--,--c===0){z=!0;break}O--}while(G>=e||$>=e);if(z)break;O<0&&(O=0),O+=2}if(this.minGallop=O,O<1&&(this.minGallop=1),v===1){for(k-=c,I-=c,P=k+1,T=I+1,A=c-1;A>=0;A--)_[P+A]=_[T+A],i[P+A]=i[T+A];_[k]=S[B],i[k]=C[B]}else{if(v===0)throw new Error("mergeHigh preconditions were not respected");for(T=k-(v-1),A=0;A<v;A++)_[T+A]=S[A],i[T+A]=C[A]}}}function d(a,o,c,g){if(!Array.isArray(a))throw new TypeError(`The "array" argument must be an array. Received ${a}`);i=[];const{length:v}=a;let E=0;for(;E<v;)i[E]=E++;o?typeof o!="function"&&(g=c,c=o,o=u):o=u,c||(c=0),g||(g=v);let _=g-c;if(_<2)return i;let S=0;if(_<t)return S=l(a,c,g,o),p(a,c,g,c+S,o),i;const C=new x(a,o),A=h(_);do{if(S=l(a,c,g,o),S<A){let I=_;I>A&&(I=A),p(a,c,c+I,c+S,o),S=I}C.pushRun(c,S),C.mergeRuns(),_-=S,c+=S}while(_!==0);return C.forceMergeRuns(),i}return qr={sort:d},qr}var Xr,Yn;function zr(){if(Yn)return Xr;Yn=1;const{isObject:t,isArray:e,isString:n,isNumber:r,isFunction:i}=mn(),s="before",u="after-prop",h="after-colon",l="after-value",y="after",p="before-all",m="after-all",f="[",x="]",d="{",a="}",o=",",c="",g="-",v=[s,u,h,l,y],E=[s,y,p,m],_=E.map(Symbol.for),S=":",C=void 0,A=(z,H)=>Symbol.for(z+S+H),I=(z,H)=>{if(H){if(v.includes(z))return A(z,H);throw new RangeError(`Unsupported comment position ${z} with key ${H}`)}if(E.includes(z))return Symbol.for(z);throw new RangeError(`Unsupported comment position ${z}`)},B=(z,H,Y)=>Object.defineProperty(z,H,{value:Y,writable:!0,configurable:!0}),k=(z,H,Y,W,J,se)=>{const xe=A(J,W);if(!Object.hasOwn(H,xe))return;const he=Y===W?xe:A(J,Y);B(z,he,H[xe]),se&&delete H[xe]},T=(z,H,Y,W,J)=>{v.forEach(se=>{k(z,H,Y,W,se,J)})},P=(z,H,Y)=>{H!==Y&&v.forEach(W=>{const J=A(W,Y);if(!Object.hasOwn(z,J)){k(z,z,Y,H,W,!0);return}const se=z[J];delete z[J],k(z,z,Y,H,W,!0),B(z,A(W,H),se)})},O=(z,H)=>{_.forEach(Y=>{const W=H[Y];W&&B(z,Y,W)})},G=(z,H,Y)=>(Y.forEach(W=>{!n(W)&&!r(W)||Object.hasOwn(H,W)&&(z[W]=H[W],T(z,H,W,W))}),z),$=i(JSON.isRawJSON)?JSON.isRawJSON:()=>!1;return Xr={PROP_SYMBOL_PREFIXES:v,PREFIX_BEFORE:s,PREFIX_AFTER_PROP:u,PREFIX_AFTER_COLON:h,PREFIX_AFTER_VALUE:l,PREFIX_AFTER:y,PREFIX_BEFORE_ALL:p,PREFIX_AFTER_ALL:m,BRACKET_OPEN:f,BRACKET_CLOSE:x,CURLY_BRACKET_OPEN:d,CURLY_BRACKET_CLOSE:a,COLON:S,COMMA:o,MINUS:g,EMPTY:c,UNDEFINED:C,symbol:A,define:B,copy_comments:T,swap_comments:P,assign_non_prop_comments:O,is_raw_json:$,assign(z,H,Y){if(!t(z))throw new TypeError("Cannot convert undefined or null to object");if(!t(H))return z;if(Y===C)Y=Object.keys(H),O(z,H);else if(e(Y))Y.length===0&&O(z,H);else throw new TypeError("keys must be array or undefined");return G(z,H,Y)},moveComments(z,H,{where:Y,key:W},{where:J,key:se},xe=!1){if(!t(z))throw new TypeError("source must be an object");if(H||(H=z),!t(H))return;const he=I(Y,W),Ee=I(J,se);if(!Object.hasOwn(z,he))return;const te=z[he];if(delete z[he],xe||!Object.hasOwn(H,Ee)){B(H,Ee,te);return}const ne=H[Ee];ne&&ne.push(...te)},removeComments(z,{where:H,key:Y}){if(!t(z))throw new TypeError("target must be an object");const W=I(H,Y);Object.hasOwn(z,W)&&delete z[W]}},Xr}var Hr,Zn;function Gi(){if(Zn)return Hr;Zn=1;const{isArray:t}=mn(),{sort:e}=Ys(),{PROP_SYMBOL_PREFIXES:n,UNDEFINED:r,symbol:i,copy_comments:s,swap_comments:u}=zr(),h=x=>{const{length:d}=x;let a=0;const o=d/2;for(;a<o;a++)u(x,a,d-a-1)},l=(x,d,a,o,c)=>{s(x,d,a+o,a,c)},y=(x,d,a,o,c,g)=>{if(c>0){let E=o;for(;E-- >0;)l(x,d,a+E,c,g);return}let v=0;for(;v<o;){const E=v++;l(x,d,a+E,c,g)}},p=(x,d)=>{n.forEach(a=>{const o=i(a,d);delete x[o]})},m=(x,d)=>{let a=d;for(;a in x;)a=x[a];return a};class f extends Array{splice(...d){const{length:a}=this,o=super.splice(...d);let[c,g,...v]=d;c<0&&(c+=a),arguments.length===1?g=a-c:g=Math.min(a-c,g);const{length:E}=v,_=E-g,S=c+g,C=a-S;return y(this,this,S,C,_,!0),o}slice(...d){const{length:a}=this,o=super.slice(...d);if(!o.length)return new f;let[c,g]=d;return g===r?g=a:g<0&&(g+=a),c<0?c+=a:c===r&&(c=0),y(o,this,c,g-c,-c),o}unshift(...d){const{length:a}=this,o=super.unshift(...d),{length:c}=d;return c>0&&y(this,this,0,a,c,!0),o}shift(){const d=super.shift(),{length:a}=this;return p(this,0),y(this,this,1,a,-1,!0),d}reverse(){return super.reverse(),h(this),this}pop(){const d=super.pop();return p(this,this.length),d}concat(...d){let{length:a}=this;const o=super.concat(...d);return d.length&&(y(o,this,0,this.length,0),d.forEach(c=>{const g=a;a+=t(c)?c.length:1,c instanceof f&&y(o,c,0,c.length,g)})),o}sort(...d){const a=e(this,...d.slice(0,1)),o=Object.create(null);return a.forEach((c,g)=>{if(c===g)return;const v=m(o,c);v!==g&&(o[g]=v,u(this,g,v))}),this}}return Hr={CommentArray:f},Hr}var $r,Qn;function Zs(){if(Qn)return $r;Qn=1;const t=Ws(),{CommentArray:e}=Gi(),{PREFIX_BEFORE:n,PREFIX_AFTER_PROP:r,PREFIX_AFTER_COLON:i,PREFIX_AFTER_VALUE:s,PREFIX_AFTER:u,PREFIX_BEFORE_ALL:h,PREFIX_AFTER_ALL:l,BRACKET_OPEN:y,BRACKET_CLOSE:p,CURLY_BRACKET_OPEN:m,CURLY_BRACKET_CLOSE:f,COLON:x,COMMA:d,MINUS:a,EMPTY:o,UNDEFINED:c,define:g,assign_non_prop_comments:v}=zr(),E=Z=>t.tokenize(Z,{comment:!0,loc:!0});let _;const S=[];let C=null,A=null;const I=[];let B,k=!1,T=!1,P=null,O=null,G=null,$,z=null;const H=()=>{_=c,I.length=S.length=0,O=null,B=c},Y=()=>{H(),P.length=0,A=C=P=O=G=z=null,_=c},W=Z=>Symbol.for(B!==c?Z+x+B:Z),J=(Z,{value:fe,context:q={}})=>z?z(Z,fe,q):fe,se=()=>{const Z=new SyntaxError(`Unexpected token '${G.value.slice(0,1)}', "${_}" is not valid JSON`);throw Object.assign(Z,G.loc.start),Y(),Z},xe=()=>{const Z=new SyntaxError("Unexpected end of JSON input");throw Object.assign(Z,O?O.loc.end:{line:1,column:0}),Y(),Z},he=()=>{const Z=P[++$];T=G&&Z&&G.loc.end.line===Z.loc.start.line||!1,O=G,G=Z},Ee=()=>(G||xe(),G.type==="Punctuator"?G.value:G.type),te=Z=>Ee()===Z,ne=Z=>{te(Z)||se()},re=Z=>{S.push(C),C=Z},ae=()=>{C=S.pop()},oe=()=>{if(!A)return;const Z=[];for(const q of A)if(q.inline)Z.push(q);else break;const{length:fe}=Z;fe&&(fe===A.length?A=null:A.splice(0,fe),g(C,W(u),Z))},j=Z=>{A&&(g(C,W(Z),A),A=null)},ee=Z=>{const fe=[];for(;G&&(te("LineComment")||te("BlockComment"));){const q={...G,inline:T};fe.push(q),he()}if(!k&&fe.length){if(Z){g(C,W(Z),fe);return}A=fe}},le=(Z,fe)=>{fe&&I.push(B),B=Z},pe=()=>{B=I.pop()},Ae=()=>{const Z={};re(Z),le(c,!0);let fe=!1,q;for(ee();!te(f)&&!(fe&&(j(s),ne(d),he(),ee(),oe(),te(f)));)fe=!0,ne("String"),q=JSON.parse(G.value),le(q),j(n),he(),ee(r),ne(x),he(),ee(i),Z[q]=J(q,Ce()),ee();return fe&&j(u),he(),B=void 0,fe||j(n),ae(),pe(),Z},Pe=()=>{const Z=new e;re(Z),le(c,!0);let fe=!1,q=0;for(ee();!te(p)&&!(fe&&(j(s),ne(d),he(),ee(),oe(),te(p)));)fe=!0,le(q),j(n),Z[q]=J(q,Ce()),q++,ee();return fe&&j(u),he(),B=void 0,fe||j(n),ae(),pe(),Z};function Ce(){let Z=Ee();if(Z===m)return he(),{value:Ae()};if(Z===y)return he(),{value:Pe()};let fe=o;Z===a&&(he(),Z=Ee(),fe=a);let q,ge;switch(Z){case"String":case"Boolean":case"Null":case"Numeric":return q=G.value,he(),ge=fe+q,{value:JSON.parse(ge),context:{source:ge}};default:return{}}}const je=Z=>Object(Z)===Z;return $r={parse:(Z,fe,q)=>{H(),_=Z,P=E(Z),z=fe,k=q,P.length||xe(),$=-1,he(),re({}),ee(h);const ge=Ce();ee(l),G&&se();let qe=J("",ge);return!q&&qe!==null&&(je(qe)||(qe=new Object(qe)),v(qe,C)),ae(),Y(),qe},tokenize:E},$r}var Jr,ei;function Qs(){if(ei)return Jr;ei=1;const{isArray:t,isObject:e,isFunction:n,isNumber:r,isString:i}=mn(),{PREFIX_BEFORE_ALL:s,PREFIX_BEFORE:u,PREFIX_AFTER_PROP:h,PREFIX_AFTER_COLON:l,PREFIX_AFTER_VALUE:y,PREFIX_AFTER:p,PREFIX_AFTER_ALL:m,BRACKET_OPEN:f,BRACKET_CLOSE:x,CURLY_BRACKET_OPEN:d,CURLY_BRACKET_CLOSE:a,COLON:o,COMMA:c,EMPTY:g,UNDEFINED:v,is_raw_json:E}=zr(),_=/[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,S=" ",C=`
`,A="null",I=j=>`${u}:${j}`,B=j=>`${h}:${j}`,k=j=>`${l}:${j}`,T=j=>`${y}:${j}`,P=j=>`${p}:${j}`,O={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},G=j=>(_.lastIndex=0,_.test(j)?j.replace(_,ee=>{const le=O[ee];return typeof le=="string"?le:ee}):j),$=j=>`"${G(j)}"`,z=(j,ee)=>ee?`//${j}`:`/*${j}*/`,H=(j,ee,le,pe)=>{const Ae=j[Symbol.for(ee)];if(!Ae||!Ae.length)return g;let Pe=!1;const Ce=Ae.reduce((je,{inline:ue,type:Z,value:fe})=>{const q=ue?S:C+le;return Pe=Z==="LineComment",je+q+z(fe,Pe)},g);return pe||Pe?Ce+C+le:Ce};let Y=null,W=g;const J=()=>{Y=null,W=g},se=(j,ee,le)=>j?ee?j+ee.trim()+C+le:j.trimRight()+C+le:ee?ee.trimRight()+C+le:g,xe=(j,ee,le)=>{const pe=H(ee,u,le+W,!0);return se(pe,j,le)},he=(j,ee)=>{const le=ee+W,{length:pe}=j;let Ae=g,Pe=g;for(let Ce=0;Ce<pe;Ce++){Ce!==0&&(Ae+=c);const je=se(Pe,H(j,I(Ce),le),le);Ae+=je||C+le,Ae+=te(Ce,j,le)||A,Ae+=H(j,T(Ce),le),Pe=H(j,P(Ce),le)}return Ae+=se(Pe,H(j,p,le),le),f+xe(Ae,j,ee)+x},Ee=(j,ee)=>{if(!j)return"null";const le=ee+W;let pe=g,Ae=g,Pe=!0;const Ce=t(Y)?Y:Object.keys(j),je=ue=>{const Z=te(ue,j,le);if(Z===v)return;Pe||(pe+=c),Pe=!1;const fe=se(Ae,H(j,I(ue),le),le);pe+=fe||C+le,pe+=$(ue)+H(j,B(ue),le)+o+H(j,k(ue),le)+S+Z+H(j,T(ue),le),Ae=H(j,P(ue),le)};return Ce.forEach(je),pe+=se(Ae,H(j,p,le),le),d+xe(pe,j,ee)+a};function te(j,ee,le){let pe=ee[j];switch(e(pe)&&n(pe.toJSON)&&(pe=pe.toJSON(j)),n(Y)&&(pe=Y.call(ee,j,pe)),typeof pe){case"string":return $(pe);case"number":return Number.isFinite(pe)?String(pe):A;case"boolean":case"null":return String(pe);case"object":return E(pe)?pe.rawJSON:t(pe)?he(pe,le):Ee(pe,le)}}const ne=j=>i(j)?j:r(j)?S.repeat(j):g,{toString:re}=Object.prototype,ae=["[object Number]","[object String]","[object Boolean]"],oe=j=>{if(typeof j!="object")return!1;const ee=re.call(j);return ae.includes(ee)};return Jr=(j,ee,le)=>{const pe=ne(le);if(!pe)return JSON.stringify(j,ee);!n(ee)&&!t(ee)&&(ee=null),Y=ee,W=pe;const Ae=oe(j)?JSON.stringify(j):te("",{"":j},g);return J(),e(j)?H(j,s,g,!0).trimLeft()+Ae+H(j,m,g).trimRight():Ae},Jr}var Wr,ti;function eo(){if(ti)return Wr;ti=1;const{parse:t,tokenize:e}=Zs(),n=Qs(),{CommentArray:r}=Gi(),{PREFIX_BEFORE:i,PREFIX_AFTER_PROP:s,PREFIX_AFTER_COLON:u,PREFIX_AFTER_VALUE:h,PREFIX_AFTER:l,PREFIX_BEFORE_ALL:y,PREFIX_AFTER_ALL:p,assign:m,moveComments:f,removeComments:x}=zr();return Wr={PREFIX_BEFORE:i,PREFIX_AFTER_PROP:s,PREFIX_AFTER_COLON:u,PREFIX_AFTER_VALUE:h,PREFIX_AFTER:l,PREFIX_BEFORE_ALL:y,PREFIX_AFTER_ALL:p,parse:t,stringify:n,tokenize:e,CommentArray:r,assign:m,moveComments:f,removeComments:x},Wr}var to=eo();const zi=_a(to),ro=Object.assign({"./opcodes/achievements.jsonc":Ga,"./opcodes/animgroupconfigs.jsonc":za,"./opcodes/audio.jsonc":Va,"./opcodes/avataroverrides.jsonc":ja,"./opcodes/avatars.jsonc":qa,"./opcodes/cacheindex.json":Xa,"./opcodes/classicmodels.jsonc":Ha,"./opcodes/clientscript.jsonc":$a,"./opcodes/clientscriptdata.jsonc":Ja,"./opcodes/cutscenes.jsonc":Wa,"./opcodes/dbrows.jsonc":Ka,"./opcodes/dbtables.jsonc":Ya,"./opcodes/enums.json":Za,"./opcodes/environments.jsonc":Qa,"./opcodes/fontmetrics.jsonc":es,"./opcodes/framemaps.jsonc":ts,"./opcodes/frames.json":rs,"./opcodes/identitykit.jsonc":ns,"./opcodes/interfaces.jsonc":is,"./opcodes/items.jsonc":as,"./opcodes/maplabels.jsonc":ss,"./opcodes/mapscenes.json":os,"./opcodes/mapsquare_envs.jsonc":ls,"./opcodes/mapsquare_locations.json":us,"./opcodes/mapsquare_overlays.jsonc":cs,"./opcodes/mapsquare_tiles.jsonc":fs,"./opcodes/mapsquare_tiles_nxt.jsonc":hs,"./opcodes/mapsquare_underlays.jsonc":ds,"./opcodes/mapsquare_watertiles.json":ps,"./opcodes/mapzones.json":ms,"./opcodes/materials.jsonc":gs,"./opcodes/models.jsonc":xs,"./opcodes/npcs.jsonc":vs,"./opcodes/objects.jsonc":ys,"./opcodes/oldmaterials.jsonc":bs,"./opcodes/oldmodels.jsonc":ws,"./opcodes/oldproctexture.jsonc":Es,"./opcodes/params.jsonc":_s,"./opcodes/particles_0.jsonc":Ss,"./opcodes/particles_1.jsonc":Ds,"./opcodes/proctexture.jsonc":As,"./opcodes/quickchatcategories.jsonc":Cs,"./opcodes/quickchatlines.jsonc":Ts,"./opcodes/rootcacheindex.jsonc":Fs,"./opcodes/sequences.json":ks,"./opcodes/skeletalanim.jsonc":Is,"./opcodes/spotanims.json":Bs,"./opcodes/structs.jsonc":Ms,"./opcodes/typedef.jsonc":Ns});function de(t){const e=ro[`./opcodes/${t}`];if(!e)throw new Error(`Opcode file not found: ${t}`);return zi.parse(e)}const no=de("typedef.jsonc"),Xt=ke.alloc(2*1024*1024);let Kr=0;class ce{parser;originalSource;totaltime=0;static fromJson(e){let n=zi.parse(e,void 0,!0);return new ce(n,e)}constructor(e,n){this.parser=Ve(null,e,no),this.originalSource=n??JSON.stringify(e,void 0,"	")}readInternal(e){let n=performance.now(),r=this.parser.read(e);if(this.totaltime+=performance.now()-n,e.scan!=e.endoffset&&(Kr++,Kr<100&&console.log(`bytes left over after decoding file: ${e.endoffset-e.scan}`),Kr==100&&console.log("too many bytes left over warning, no more warnings will be logged"),e.buffer.byteLength<1e5))throw new Error(`bytes left over after decoding file: ${e.endoffset-e.scan}`);return r}read(e,n,r){let i={isWrite:!1,buffer:e,stack:[],hiddenstack:[],scan:0,endoffset:e.byteLength,args:{...n.getDecodeArgs(),...r}};return this.readInternal(i)}write(e,n){let r={isWrite:!0,stack:[],hiddenstack:[],buffer:Xt,scan:0,endoffset:Xt.byteLength,args:{clientVersion:1e3,...n}};if(this.parser.write(r,e),r.scan>r.endoffset)throw new Error("tried to write file larger than scratchbuffer size");r.buffer.copyWithin(r.scan,r.endoffset,Xt.byteLength),r.scan+=Xt.byteLength-r.endoffset;let i=ke.from(Uint8Array.prototype.slice.call(Xt,0,r.scan));return Xt.fill(0,0,r.scan),i}}globalThis.parserTimings=()=>{let t=Object.entries(K).map(e=>({name:e[0],t:e[1].totaltime}));t.sort((e,n)=>n.t-e.t),t.slice(0,10).filter(e=>e.t>.01).forEach(e=>console.log(`${e.name} ${e.t.toFixed(3)}s`))};const K=io();function io(){return{cacheIndex:new ce(de("cacheindex.json")),npc:new ce(de("npcs.jsonc")),item:new ce(de("items.jsonc")),object:new ce(de("objects.jsonc")),achievement:new ce(de("achievements.jsonc")),mapsquareTiles:new ce(de("mapsquare_tiles.jsonc")),mapsquareTilesNxt:new ce(de("mapsquare_tiles_nxt.jsonc")),mapsquareWaterTiles:new ce(de("mapsquare_watertiles.json")),mapsquareUnderlays:new ce(de("mapsquare_underlays.jsonc")),mapsquareOverlays:new ce(de("mapsquare_overlays.jsonc")),mapsquareLocations:new ce(de("mapsquare_locations.json")),mapsquareEnvironment:new ce(de("mapsquare_envs.jsonc")),mapZones:new ce(de("mapzones.json")),enums:new ce(de("enums.json")),fontmetrics:new ce(de("fontmetrics.jsonc")),mapscenes:new ce(de("mapscenes.json")),sequences:new ce(de("sequences.json")),framemaps:new ce(de("framemaps.jsonc")),frames:new ce(de("frames.json")),animgroupConfigs:new ce(de("animgroupconfigs.jsonc")),models:new ce(de("models.jsonc")),oldmodels:new ce(de("oldmodels.jsonc")),classicmodels:new ce(de("classicmodels.jsonc")),spotAnims:new ce(de("spotanims.json")),rootCacheIndex:new ce(de("rootcacheindex.jsonc")),skeletalAnim:new ce(de("skeletalanim.jsonc")),materials:new ce(de("materials.jsonc")),oldmaterials:new ce(de("oldmaterials.jsonc")),quickchatCategories:new ce(de("quickchatcategories.jsonc")),quickchatLines:new ce(de("quickchatlines.jsonc")),environments:new ce(de("environments.jsonc")),avatars:new ce(de("avatars.jsonc")),avatarOverrides:new ce(de("avataroverrides.jsonc")),identitykit:new ce(de("identitykit.jsonc")),structs:new ce(de("structs.jsonc")),params:new ce(de("params.jsonc")),particles_0:new ce(de("particles_0.jsonc")),particles_1:new ce(de("particles_1.jsonc")),audio:new ce(de("audio.jsonc")),proctexture:new ce(de("proctexture.jsonc")),oldproctexture:new ce(de("oldproctexture.jsonc")),maplabels:new ce(de("maplabels.jsonc")),cutscenes:new ce(de("cutscenes.jsonc")),clientscript:new ce(de("clientscript.jsonc")),clientscriptdata:new ce(de("clientscriptdata.jsonc")),interfaces:new ce(de("interfaces.jsonc")),dbtables:new ce(de("dbtables.jsonc")),dbrows:new ce(de("dbrows.jsonc"))}}function Ft(t,e){let n=0;if(e){t=t.toUpperCase();for(let r of t)n=Math.imul(n,61)+r.charCodeAt(0)-32|0}else for(let r of t)n=((n<<5)-n|0)+r.charCodeAt(0)|0;return n>>>0}function Vi(t,e,n){let r=t.get(e);return r===void 0&&(r=n(),t.set(e,r)),r}function ri(t,e){return(t%e+e)%e}function jt(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function ni(t){let e="",n=[];try{for(;t;){let r=t.match(/<(\/?)(\w+)(=(\w+))?>/);if(!r)e+=jt(t),t="";else{e+=jt(t.slice(0,r.index)),t=t.slice(r.index+r[0].length);let i=!!r[1],s=r[2];if(i){let u=n.pop();if(u!=s)throw new Error("markup token mismatch");if(u=="col")e+="</span>";else throw new Error("unknown markup closing token "+u)}else if(s=="br")e+="<br/>";else if(s=="col")e+=`<span style="color:#${r[4].replace(/\W/g,"")};">`,n.push("col");else throw new Error("unknown token "+s)}}for(;n.length!=0;){let r=n.pop();if(r=="col")e+="</span>";else throw new Error("non-autocloseable token left unclosed "+r)}}catch(r){console.log(r.message),e=jt(t)}return e}function ar(){return function(t){return t}}const at=function t(e,n=0){this.getData=function(){return e},this.bytesLeft=function(){return e.length-n},this.readBuffer=function(r=e.length-n){let i=e.slice(n,n+r);return n+=r,i},this.tee=function(){return new t(e,n)},this.eof=function(){if(n>e.length)throw new Error("reading past end of buffer");return n>=e.length},this.skip=function(r){return n+=r,this},this.scanloc=function(){return n},this.readByte=function(){var r=this.readUByte();return r>127?r-256:r},this.readUShortSmart=function(){let r=this.readUByte();if((r&128)==0)return r;let i=this.readUByte();return(r&127)<<8|i},this.readShortSmart=function(){let r=this.readUByte(),i=r&127;if(i=r<64?r:r-128,(r&128)==0)return i;let s=this.readUByte();return i<<8|s},this.readShortSmartBias=function(){let r=this.readUByte();if((r&128)==0)return r-64;let i=this.readUByte();return((r&127)<<8|i)-16384},this.readUIntSmart=function(){let r=this.readUByte(),i=this.readUByte();if((r&128)==0)return r<<8|i;let s=this.readUByte(),u=this.readUByte();return(r&127)<<24|i<<16|s<<8|u},this.readUByte=function(){return e[n++]},this.readShort=function(r=!1){var i=this.readUShort(r);return i>32767?i-65536:i},this.readTribyte=function(){let r=e.readIntBE(n,3);return n+=3,r},this.readUShort=function(r=!1){return r?e[n++]<<8&65280|e[n++]:e[n++]|e[n++]<<8&65280},this.readUInt=function(r=!1){return r?(e[n++]<<24&4278190080|e[n++]<<16&16711680|e[n++]<<8&65280|e[n++])>>>0:(e[n++]|e[n++]<<8&65280|e[n++]<<16&16711680|e[n++]<<24&4278190080)>>>0},this.readInt=function(r=!1){return this.readUInt(r)|0},this.readStringLine=function(){let r=n;for(;n<e.length&&e[n]!=10&&e[n]!=13;)n++;let i=e.toString("utf8",r,n);return e[n]==13&&n++,e[n]==10&&n++,i},this.readFloat=function(r=!1,i=!1){var s,u,h,l;r?(l=e[n++],h=e[n++]<<16&16711680,u=e[n++]<<8&65280,s=e[n++]):(s=e[n++],u=e[n++]<<8&65280,h=e[n++]<<16&16711680,l=e[n++]);var y=s|u|h;return i&&(l=l<<1&254,(y&8388608)==8388608&&(l|=1),y&=8388607),(1+y*Math.pow(2,i?-23:-24))*Math.pow(2,l-127)},this.readHalf=function(r=!1){var i=e[n++],s=e[n++],u=s|i<<8&768,h=i>>2&31;return u=u*Math.pow(2,-10)+(h==0?0:1),u*=Math.pow(2,h-15),(i&128)==128&&(u*=-1),u}};function ao(t){return(t&255)<<8|(t&65280)>>>8}function so(t){t=ao(t);let e=(t&32768)==0,n=(t&31744)>>10,i=(t&1023)*Math.pow(2,-10)+(n==0?0:1);return i*=Math.pow(2,n-15),e?i:-i}function gn(t){var e=t[0],n=t[1],r=t[2],i,s,u;if(n==0)i=s=u=r;else{var h=function(m,f,x){return x<0&&(x+=1),x>1&&(x-=1),x<.16666666666666666?m+(f-m)*6*x:x<.5?f:x<.6666666666666666?m+(f-m)*(.6666666666666666-x)*6:m},l=r<.5?r*(1+n):r+n-r*n,y=2*r-l;i=h(y,l,e+1/3),s=h(y,l,e),u=h(y,l,e-1/3)}return[i,s,u]}function pr(t){let e=gn(t);return[Math.round(e[0]*255),Math.round(e[1]*255),Math.round(e[2]*255)]}function oo(t,e,n){t/=255,e/=255,n/=255;var r=Math.max(t,e,n),i=Math.min(t,e,n),s=0,u=0;let h=(r+i)/2;if(r!=i){var l=r-i;switch(u=h>.5?l/(2-r-i):l/(r+i),r){case t:s=(e-n)/l+(e<n?6:0);break;case e:s=(n-t)/l+2;break;case n:s=(t-e)/l+4;break}s/=6}return[s,u,h]}function lo(t,e,n){return t<0&&(t+=1),Math.round(t*63)<<10|Math.round(e*7)<<7|Math.round(n*127)}function qt(t){var e=(t>>10&63)/63,n=(t>>7&7)/7,r=(t&127)/127;return e>.5&&(e=e-1),[e,n,r]}class ji{listeners={};on(e,n){(this.listeners[e]??(this.listeners[e]=new Set)).add(n)}once(e,n){let r=this.listeners[e]??(this.listeners[e]=new Set),i=s=>{r.delete(i),n(s)};r.add(i)}off(e,n){(this.listeners[e]??(this.listeners[e]=new Set)).delete(n)}emit(e,n){(this.listeners[e]??(this.listeners[e]=new Set)).forEach(i=>i(n))}}class uo extends Promise{done;err;constructor(e=(n,r)=>{}){let n,r;super((i,s)=>(n=i,r=s,e(i,s))),this.done=n,this.err=r}}async function co(t,e,n){let r=0,i=0,s=new Array(t).fill(null);for(let u of e()){let h=r++;if(s[h%t]=u,r>=i+t&&r>=t){let l=await s[i%t];i++,n(l)}}for(;i<r;){let u=await s[i%t];i++,n(u)}}globalThis.ignoreCache=!1;const xn={[N.items]:256,[N.npcs]:128,[N.structs]:32,[N.enums]:256,[N.objects]:256,[N.sequences]:128,[N.spotanims]:256,[N.achievements]:128,[N.materials]:Number.MAX_SAFE_INTEGER},qi={[N.items]:ze.items_old,[N.npcs]:ze.npcs_old,[N.objects]:ze.locs_old,[N.spotanims]:ze.spotanim_old};function Dr(t,e,n){if(n<488){let s=qi[t];if(s!==void 0)return{major:N.config,minor:s,subid:e}}let r=xn[t]??1;return{minor:Math.floor(e/r),major:t,subid:e%r}}function fo(t,e,n){let r=xn[t]??1;return e*r+n}class Xi{decodeArgs={};getCacheMeta(){return{name:"unkown",descr:"",timestamp:new Date(0)}}getFile(e,n,r){throw new Error("not implemented")}getFileArchive(e){throw new Error("not implemented")}getCacheIndex(e){throw new Error("not implemented")}getBuildNr(){return Oa}getDecodeArgs(){return this.decodeArgs.clientVersion=this.getBuildNr(),this.decodeArgs}writeFile(e,n,r){throw new Error("not implemented")}writeFileArchive(e,n,r){throw new Error("not implemented")}async getIndexEntryById(e,n){let r;if(this.getBuildNr()<=dt?r={major:e,minor:n,crc:0,name:null,subindexcount:1,subindices:[0],subnames:null,version:0}:r=(await this.getCacheIndex(e))[n],!r)throw new Error(`minor id ${n} does not exist in major ${e}.`);return r}async getArchiveById(e,n){let r=await this.getIndexEntryById(e,n);return this.getFileArchive(r)}async getFileById(e,n){let r=Dr(e,n,this.getBuildNr()),s=(await this.getArchiveById(r.major,r.minor)).find(u=>u.fileid==r.subid);if(!s)throw new Error(`File ${n} in major ${e} not found, (redirected to ${r.major}.${r.minor}.${r.subid})`);return s.buffer}async findFileByName(e,n){let r=Ft(n,this.getBuildNr()<=dt);return(await this.getCacheIndex(e)).find(s=>s&&s.name==r)}async findSubfileByName(e,n,r){let i=Ft(r,this.getBuildNr()<=dt);return(await this.getArchiveById(e,n)).find(u=>u&&u.namehash==i)}async bruteForceFindAnyNamedFile(e){let n=await this.getCacheIndex(N.index);for(let r of n){if(!r)continue;let i=await this.findFileByName(r.minor,e);if(i)return this.getFileArchive(i)}return null}close(){}}function ho(t,e){return K.rootCacheIndex.read(t,e).cachemajors.map(r=>r.crc==0?void 0:{major:255,minor:r.minor,crc:r.crc,version:r.version,size:0,name:null,subindexcount:r.subindexcount,subindices:[0],subnames:null,uncompressed_crc:0,uncompressed_size:0})}function Xu(t,e,n){if(t==N.index)return ho(e,n);let i=K.cacheIndex.read(e,n).indices,s=[];for(let u of i)s[u.minor]=Object.assign(u,{major:t});return s}function Hu(t,e,n){if(e.length==1)return[{buffer:t,offset:0,size:t.byteLength,fileid:e[0],namehash:n?.[0]??null}];let r=0;t.readUInt8(r),r++;let i=t.readUInt32BE(r);r+=4;let s=[],u=i;for(let h=0;h<e.length;h++){let l=t.readUInt32BE(r);r+=4;let y=l-u;s.push({buffer:t.slice(u,u+y),offset:u,size:y,fileid:e[h],namehash:n?.[h]??null}),u=l}return s}class po extends Xi{archieveCache=new Map;cachedObjects=[];cacheFetchCounter=0;cacheAddCounter=0;maxcachesize=2e8;rawsource;constructor(e){super(),this.rawsource=e}fetchCachedObject(e,n,r,i){let s=e.get(n);if(!s||globalThis.ignoreCache){let u=r();s={promise:u,data:null,owner:e,id:n,lastuse:0,size:0,usecount:0},u.then(h=>{s.size=i(h),s.promise=null,s.data=h}),this.cachedObjects.push(s),e.set(n,s),++this.cacheAddCounter%100==0&&this.sweepCachedObjects()}return s.usecount++,s.lastuse=this.cacheFetchCounter++,s.data?Promise.resolve(s.data):s.promise}sweepCachedObjects(){let e=i=>Math.min(100,this.cacheFetchCounter-i.lastuse)+Math.max(-100,-i.usecount*10);this.cachedObjects.sort((i,s)=>e(i)-e(s));let n=this.cachedObjects.length,r=0;for(let i=0;i<this.cachedObjects.length;i++){let s=this.cachedObjects[i];r+=s.size,r>this.maxcachesize?(n=Math.min(n,i),s.owner.delete(s.id)):s.usecount=0}this.cachedObjects.length=n}getCacheIndex(e){return this.rawsource.getCacheIndex(e)}getFile(e,n,r){return this.rawsource.getFile(e,n,r)}getFileArchive(e){let n=()=>this.rawsource.getFileArchive(e);if(e.major==N.models||e.major==N.texturesBmp||e.major==N.texturesDds||e.major==N.texturesPng)return n();{let r=e.major<<23|e.minor;return this.fetchCachedObject(this.archieveCache,r,n,i=>i.reduce((s,u)=>s+u.size,0))}}getBuildNr(){return this.rawsource.getBuildNr()}getCacheMeta(){return this.rawsource.getCacheMeta()}}function Vt(){return{textures:{},texmodes:"repeat",texmodet:"repeat",uvAnim:void 0,baseColorFraction:0,baseColor:[1,1,1],alphamode:"opaque",alphacutoff:.1,stripDiffuseAlpha:!1,raw:null}}function mo(t,e,n){return(t==-1?4194303:t)|(e?8388608:0)|(n?4194304:0)}function Hi(t,e,n){let r=K.materials.read(t,n),i=Vt();if(i.raw=r,r.v0){let s=r.v0,u=s.arr.find(y=>y.op==1);u?n.getBuildNr()<=838?i.textures.diffuse=u.value:i.textures.diffuse=e:s.diffuse?i.textures.diffuse=s.diffuse:s.textureflags&17&&(i.textures.diffuse=e),s.normal?i.textures.normal=s.normal:s.textureflags&10&&(i.textures.normal=e);let h=s.texrepeatflags&7,l=s.textureflags>>2&7;if(i.texmodes=h==0?"mirror":h==1?"repeat":"clamp",i.texmodet=l==0?"mirror":l==1?"repeat":"clamp",i.alphamode=s.alphamode==0?"opaque":s.alphamode==1?"cutoff":"blend",s.alphacutoff&&(i.alphacutoff=s.alphacutoff/255),s.animtexU||s.animtexV){let y=30517578125e-15;i.uvAnim={u:(s.animtexU??0)*y,v:(s.animtexV??0)*y}}s.extra&&(i.baseColorFraction=s.extra.baseColorFraction/255,i.baseColor=s.extra.baseColor==0?[1,1,1]:gn(qt(s.extra.baseColor))),i.stripDiffuseAlpha=i.alphamode=="opaque"}else if(r.v1||r.v2){let s=r.v1||r.v2;if(i.alphamode=s.opaque_2&&!s.hasUVanimU?"cutoff":"blend",i.baseColorFraction=1,s.diffuse&&(i.textures.diffuse=s.diffuse.texture),s.normal&&(i.textures.normal=s.normal.texture),s.compound&&(i.textures.compound=s.compound.texture),s.uvanim_u||s.uvanim_v){let u=30517578125e-15;i.uvAnim={u:(s.uvanim_u??0)*u,v:(s.uvanim_v??0)*u}}}else throw new Error("unkown material version "+r.version);return i}const go=/("(?:[^\\"]|\\.)*")|[:,]/g;function Ar(t,e={}){const n=JSON.stringify([1],void 0,e.indent===void 0?2:e.indent).slice(2,-3),r=n===""?1/0:e.maxLength===void 0?80:e.maxLength;let{replacer:i}=e;return(function s(u,h,l){u&&typeof u.toJSON=="function"&&(u=u.toJSON());const y=JSON.stringify(u,i);if(y===void 0)return y;const p=r-h.length-l;if(y.length<=p){const m=y.replace(go,(f,x)=>x||`${f} `);if(m.length<=p)return m}if(i!=null&&(u=JSON.parse(y),i=void 0),typeof u=="object"&&u!==null){const m=h+n,f=[];let x=0,d,a;if(Array.isArray(u)){d="[",a="]";const{length:o}=u;for(;x<o;x++)f.push(s(u[x],m,x===o-1?0:1)||"null")}else{d="{",a="}";const o=Object.keys(u),{length:c}=o;for(;x<c;x++){const g=o[x],v=`${JSON.stringify(g)}: `,E=s(u[g],m,v.length+(x===c-1?0:1));E!==void 0&&f.push(v+E)}}if(f.length>0)return[d,n+f.join(`,
${m}`),a].join(`
${h}`)}return y})(t,"",0)}function pt(t,e,n){return t||(t=new Uint8ClampedArray(e*n*4)),t instanceof Uint8Array&&(t=new Uint8ClampedArray(t.buffer,t.byteOffset,t.length)),typeof ImageData<"u"?new ImageData(t,e,n):{data:t,width:e,height:n,colorSpace:"srgb"}}async function Vr(t,e,n){if(typeof HTMLCanvasElement<"u"){let r=document.createElement("canvas");return r.width=t.width,r.height=t.height,r.getContext("2d",{willReadFrequently:!0}).putImageData(t,0,0),vo(r,e,n)}else{const r=globalThis.__non_webpack_require__;return r("sharp")(t.data,{raw:{width:t.width,height:t.height,channels:4}}).png().toBuffer()}}async function xo(t,e,n){if(typeof ImageDecoder<"u"){let i=await new ImageDecoder({data:t,type:e,premultiplyAlpha:n?"none":"default",colorSpaceConversion:"none"}).decode(),s=new Uint8Array(i.image.allocationSize());i.image.copyTo(s);let u=i.image.visibleRect.width*i.image.visibleRect.height;if((i.image.format=="BGRX"||i.image.format=="RGBX")&&(n=!0),i.image.format=="BGRA"||i.image.format=="BGRX")for(let h=0;h<u;h++){let l=s[h*4+0];s[h*4+0]=s[h*4+2],s[h*4+1]=s[h*4+1],s[h*4+2]=l,s[h*4+3]=n?255:s[h*4+3]}else if(i.image.format=="RGBA"||i.image.format=="RGBX"){if(n)for(let h=0;h<u;h++)s[h*4+3]=255}else throw new Error("unexpected image format");return pt(s,i.image.visibleRect.width,i.image.visibleRect.height)}else if(typeof HTMLCanvasElement<"u"){n&&console.warn("can not strip alpha in browser context that does not support ImageDecoder");let r=new Image,i=new Blob([t.buffer],{type:e}),s=URL.createObjectURL(i);r.src=s,await r.decode();let u=document.createElement("canvas");u.width=r.naturalWidth,u.height=r.naturalHeight;let h=u.getContext("2d",{willReadFrequently:!0});return h.drawImage(r,0,0),URL.revokeObjectURL(s),h.getImageData(0,0,u.width,u.height)}else{const r=globalThis.__non_webpack_require__;let s=r("sharp")(t);n&&s.removeAlpha();let u=await s.raw().toBuffer({resolveWithObject:!0}),h=new Uint8ClampedArray(u.data.buffer,u.data.byteOffset,u.data.byteLength);return pt(h,u.info.width,u.info.height)}}async function $i(t){if(typeof HTMLCanvasElement<"u"){let e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d",{willReadFrequently:!0}).putImageData(t,0,0),e.toDataURL("image/png")}else{const e=globalThis.__non_webpack_require__;return"data:image/png;base64,"+(await e("sharp")(t.data,{raw:{width:t.width,height:t.height,channels:4}}).png().toBuffer()).toString("base64")}}async function vo(t,e,n){let r=await new Promise(s=>t.toBlob(s,`image/${e}`,n));if(!r)throw new Error("image compression failed");let i=await r.arrayBuffer();return ke.from(i)}function yo(t){let e=t.width*4,n=new Uint8Array(e);for(let r=0;r<t.height/2;r++){let i=r*e,s=(t.height-1-r)*e;n.set(t.data.slice(i,i+e),0),t.data.copyWithin(i,s,s+e),t.data.set(n,s)}}function bo(t,e){let n=new Uint8ClampedArray(e.width*e.height*4),r=e.width*4,i=t.width*4,s=i*e.y+e.x*4;for(let u=0;u<e.height;u++)n.set(t.data.slice(s+u*i,s+u*i+r),r*u);return new ImageData(n,e.width,e.height)}function wo(t,e=!1){let n=document.createElement("canvas"),r=n.getContext("2d",{willReadFrequently:!0});if(e){if(!(t instanceof ImageData))throw new Error("can only flip imagedata textures");yo(t)}return Eo(r,t),n.style.cssText="position:absolute;top:0px;left:0px;border:1px solid red;background:purple;",document.body.appendChild(n),n.onclick=i=>{navigator.clipboard.write([new ClipboardItem({"image/png":new Promise(s=>n.toBlob(s))})]),n.remove()},n}globalThis.dumptex=wo;function Eo(t,e){const n=t.canvas;"data"in e?(typeof ImageData<"u"&&!(e instanceof ImageData)&&(e=new ImageData(e.data,e.width,e.height)),n.width=e.width,n.height=e.height,t.putImageData(e,0,0)):"source"in e?(n.width=e.source.data.width,n.height=e.source.data.height,t.drawImage(e.source.data,0,0)):(n.width=e.width,n.height=e.height,t.drawImage(e,0,0))}function vn(t,e,n,r,i,s){let u=n*r,h=0,l=new Uint8ClampedArray(u*4),y=h,p=h+u;h+=u+(i?u:0);for(let m=0;m<r;m++)for(let f=0;f<n;f++){let x=f*4+m*n*4,d=s?m+f*r:f+m*n,a=t.readUInt8(y+d);if(a==0)l[x+0]=0,l[x+1]=0,l[x+2]=0,l[x+3]=0;else{let o=(a-1)*3;l[x+0]=e[o+0],l[x+1]=e[o+1],l[x+2]=e[o+2],l[x+3]=i?t.readUInt8(p+d):255}}return{img:pt(l,n,r),bytesused:h}}function yn(t,e){let n=new at(e),r=n.readUShort(!0);if(!t)throw new Error("sprite meta file not found");let i=new at(t);i.skip(r);let s=i.readUShort(!0),u=i.readUShort(!0),h=i.readUByte()-1,l=i.readBuffer(h*3),y=[];for(;!n.eof();){let p=i.readUByte(),m=i.readUByte(),f=i.readUShort(!0),x=i.readUShort(!0),d=i.readUByte()!=0,a=n.readBuffer(f*x);y.push({x:p,y:m,fullwidth:s,fullheight:u,img:vn(a,l,f,x,!1,d).img})}return y.length!=1&&console.log(y),y[0]}function Ji(t){if(t.x==0&&t.y==0&&t.fullwidth==t.img.width&&t.fullheight==t.img.height)return t.img;let e=new ImageData(t.fullwidth,t.fullheight);for(let n=0;n<t.img.height;n++){let r=t.img.width*4,i=n*r,s=e.width*4,u=(n+t.y)*s+t.x*4;e.data.set(t.img.data.subarray(i,i+r),u)}return e}function Lt(t){let e=t.readUInt16BE(t.length-2),n=e>>15,r=e&32767,i=[];if(n==0){let s=7+8*r,u=t.length-s,h=t.readUInt16BE(u);u+=2;let l=t.readUInt16BE(u);u+=2;let y=t.readUInt8(u);u++;let p=[];for(let f=0;f<r;f++)p.push({x:t.readUInt16BE(u+r*0+f*2),y:t.readUInt16BE(u+r*2+f*2),width:t.readUInt16BE(u+r*4+f*2),height:t.readUInt16BE(u+r*6+f*2)});let m=t.slice(t.length-s-3*y,t.length-s);u=0;for(let f of p)if(f.width!=0&&f.height!=0){let x=t.readUInt8(u);u++;let d=(x&1)!=0,a=(x&2)!=0,o=vn(t.slice(u),m,f.width,f.height,a,d);u+=o.bytesused,i.push({x:f.x,y:f.y,fullwidth:h,fullheight:l,img:o.img})}}else{let s=0,u=t.readUInt8(s);if(s++,u!=0)throw new Error("unknown type");let h=t.readUInt8(s);s++;let l=(h&1)!=0,y=t.readUInt16BE(s);s+=2;let p=t.readUInt16BE(s);s+=2;let m=s;s+=y*p*3;let f=s;s+=l?y*p:0;let x=new Uint8ClampedArray(y*p*4);for(let d=0;d<p;d++)for(let a=0;a<y;a++){let o=a*4+d*y*4,c=a+d*y;x[o+0]=t.readUInt8(m+c*3+0),x[o+1]=t.readUInt8(m+c*3+1),x[o+2]=t.readUInt8(m+c*3+2),x[o+3]=l?t.readUInt8(f+c+2):255}i.push({x:0,y:0,fullwidth:y,fullheight:p,img:pt(x,y,p)})}return i}function Wi(t){let e=new at(t),n=e.readUByte(),r=e.readUByte();e.readUByte(),e.readUShort(!1);let i=e.readUShort(!1),s=e.readUByte(),u=e.readUShort(!1),h=e.readUShort(!1),l=e.readUShort(!1),y=e.readUShort(!1),p=e.readUByte(),m=e.readUByte();if(e.skip(n),r!=1||p!=8)throw new Error("only palette based uncompressed TGA supported");if(s!=24)throw new Error("only 24bpp rgb TGA supported");if(m!=0)throw new Error("no fancy TGA's allowed");let f=e.readBuffer(i*3),x=new Uint8ClampedArray(l*y*4);for(let a=0;a<y;a++)for(let o=0;o<l;o++){let c=o*4+a*l*4,v=e.readUByte()*3;x[c+0]=f[v+2],x[c+1]=f[v+1],x[c+2]=f[v+0],x[c+3]=255,x[c+0]==255&&x[c+1]==0&&x[c+2]==255&&(x[c+0]=0,x[c+1]=0,x[c+2]=0,x[c+3]=0)}return e.eof||console.warn("didn't parse TGA sprite to completion"),{x:u,y:h,fullwidth:l,fullheight:y,img:pt(x,l,y)}}function Mr(t){const e=t.data.slice();for(let n=0;n<e.length;n+=4)e[n+2]==0&&(e[n+2]=1);return Ze(e)}const _o=Object.freeze(Object.defineProperty({__proto__:null,expandSprite:Ji,parseLegacySprite:yn,parseSprite:Lt,parseSubsprite:vn,parseTgaSprite:Wi,spriteHash:Mr},Symbol.toStringTag,{value:"Module"}));function So(t){return(t&255)<<24|(t&65280)<<8|(t&16711680)>>>8|(t&4278190080)>>>24}function Do(t){let e=0;t.readUInt32BE(e),e+=4,t.readUInt32BE(e),e+=4,t.readUInt32BE(e),e+=4;let n=t.readUint32BE(e);e+=4;let r=n!=67305985,i=()=>{let x=t.readUint32BE(e);return e+=4,r?So(x):x};i(),i(),i();let s=i();i();let u=i(),h=i();i(),i(),i();let l=i(),y=i();e+=y;let p=s==37496,m=s==37492;if(!m&&!p)throw new Error("dds file is not dxt1 or dxt5 encoded as expected, continuing as dxt5");let f=[];for(let x=0;x<l;x++){let d=u>>x,a=h>>x,o=i();f.push({width:d,height:a,data:t.slice(e,e+o)}),e+=o}return{isDxt1:m,isDxt5:p,mips:f,width:u,height:h}}function Ao(t){let e=0,n=t.readUInt32LE(e);e+=4,t.readUInt32LE(e),e+=4;let r=t.readUInt32LE(e);e+=4;let i=t.readUInt32LE(e);e+=4;let s=t.readUInt32LE(e);e+=4;let u=t.readUInt32LE(e);e+=4;let h=t.readUInt32LE(e);e+=4;let l=t.readUInt32LE(e);e+=4,e+=44;let y=t.readUInt32LE(e+8);e+=32,e+=20;let p=y==894720068,m=y==827611204;if(!m&&!p)throw new Error("dds file is not dxt1 or dxt5 encoded as expected, continuing as dxt5");let f=[];for(let x=0;x<l;x++){let d=s>>x,a=i>>x,o=d*a*(p?16:8);f.push({width:d,height:a,data:t.slice(e,e+o)}),e+=o}return{magic:n,flags:r,height:i,width:s,pitchorlinearsize:u,depth:h,isDxt1:m,isDxt5:p,mips:f}}function Co(t,e=-1,n=!0){let r=Ao(t);e==-1&&(r.isDxt5?e=32:e=0);let i=r.width-e*2,s=r.height-e*2,u=ke.alloc(i*s*4);if(Fo(u,i*4,r.mips[0].data,r.mips[0].width,e,e,i,s,r.isDxt5),n)for(let h=0;h<u.length;h+=4)u[h+3]=255;return{data:u,width:i,height:s}}function To(t,e=-1,n=!0){let r=Do(t);e==-1&&(r.isDxt5?e=32:e=0);let i=r.width-e*2,s=r.height-e*2,u=ke.alloc(i*s*4);if(Io(u,i*4,r.mips[0].data,r.mips[0].width,e,e,i,s,r.isDxt5),n)for(let h=0;h<u.length;h+=4)u[h+3]=255;return{data:u,width:i,height:s}}function kt(t,e,n){return((t>>e&(1<<n)-1)*2*255+(1<<n)-1)/((1<<n)-1)/2}function ie(t,e,n){let r=32-n-e;return t<<r>>>r+e}function Yr(t,e,n){let r=32-n-e;return t<<r>>r+e}function It(t,e){return t[e]|t[e+1]<<8}function vr(t,e){return(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}function Fo(t,e,n,r,i,s,u,h,l){const y=l?16:8,p=l?8:0,m=new Uint8Array(4),f=new Uint8Array(4),x=new Uint8Array(4),d=new Uint8Array(8),a=new Uint16Array(8);for(let o=s/4;o<(s+h)/4;o++)for(let c=i/4;c<(i+u)/4;c++){let v=(r/4*o+c)*y;a[4]=It(n,v+p+0),a[5]=It(n,v+p+2),a[6]=It(n,v+p+4),a[7]=It(n,v+p+6),m[0]=kt(a[4],11,5),f[0]=kt(a[4],5,6),x[0]=kt(a[4],0,5),m[1]=kt(a[5],11,5),f[1]=kt(a[5],5,6),x[1]=kt(a[5],0,5),d[0]=255,d[1]=255,d[2]=255,d[3]=255,a[4]>a[5]?(m[2]=(2*m[0]+m[1]+1)/3,f[2]=(2*f[0]+f[1]+1)/3,x[2]=(2*x[0]+x[1]+1)/3,m[3]=(m[0]+2*m[1]+1)/3,f[3]=(f[0]+2*f[1]+1)/3,x[3]=(x[0]+2*x[1]+1)/3):(m[2]=(m[0]+m[1])/2,f[2]=(f[0]+f[1])/2,x[2]=(x[0]+x[1])/2,m[3]=0,f[3]=0,x[3]=0,d[3]=0);for(let E=0;E<16;E++){let _=(c*4+E%4-i)*4+(o*4+(E/4|0)-s)*e,S=a[E<8?6:7]>>E%8*2&3;t[_+0]=m[S],t[_+1]=f[S],t[_+2]=x[S],t[_+3]=d[S]}if(l){if(a[0]=It(n,v+0),a[1]=It(n,v+2),a[2]=It(n,v+4),a[3]=It(n,v+6),d[0]=kt(a[0],0,8),d[1]=kt(a[0],8,8),d[0]>d[1])for(let S=0;S<6;S++)d[2+S]=((6-S)*d[0]+(1+S)*d[1]+3)/7;else{for(let S=0;S<4;S++)d[2+S]=((4-S)*d[0]+(1+S)*d[1]+2)/5;d[6]=0,d[7]=255}let E=0,_=1;for(let S=0;S<16;S++){let C=(c*4+S%4-i)*4+(o*4+(S/4|0)-s)*e,A=a[_]>>E&7;E+=3,E>=16&&(E-=16,_++,A|=a[_]&1<<E-1),t[C+3]=d[A]}}}}const Zr=new Int16Array([2,8,-2,-8,5,17,-5,-17,9,29,-9,-29,13,42,-13,-42,18,60,-18,-60,24,80,-24,-80,33,106,-33,-106,47,183,-47,-183]),ko=new Int8Array([-3,-6,-9,-15,2,5,8,14,-3,-7,-10,-13,2,6,9,12,-2,-5,-8,-13,1,4,7,12,-2,-4,-6,-13,1,3,5,12,-3,-6,-8,-12,2,5,7,11,-3,-7,-9,-11,2,6,8,10,-4,-7,-8,-11,3,6,7,10,-3,-5,-8,-11,2,4,7,10,-2,-6,-8,-10,1,5,7,9,-2,-5,-8,-10,1,4,7,9,-2,-4,-8,-10,1,3,7,9,-2,-5,-7,-10,1,4,6,9,-3,-4,-7,-10,2,3,6,9,-1,-2,-3,-10,0,1,2,9,-4,-6,-8,-9,3,5,7,8,-3,-5,-7,-9,2,4,6,8]),ii=new Uint8Array([3,6,11,16,23,32,41,64]);function Fe(t){return t>255?255:t<0?0:t}function Qe(t,e,n,r){return Fe(t+ko[e<<3|r]*n)}function Je(t){return t<<4|t}function Ht(t){return t<<3|t>>2}function $t(t){return t<<2|t>>4}function Qr(t){return t<<1|t>>7}function Io(t,e,n,r,i,s,u,h,l){const y=l?16:8,p=l?8:0,m=new Uint8Array(16);for(let f=s/4;f<(s+h)/4;f++)for(let x=i/4;x<(i+u)/4;x++){let a=(r/4*f+x)*y,o=vr(n,a+p),c=vr(n,a+p+4),g=ie(o,0,1),v=ie(o,1,1),E=ie(o,27,5),_=ie(o,19,5),S=ie(o,11,5),C=Yr(o,24,3),A=Yr(o,16,3),I=Yr(o,8,3),B=E+C,k=_+A,T=S+I,P=B>=0&&B<32,O=k>=0&&k<32,G=T>=0&&T<32,$=P&&O&&G,z,H,Y,W,J,se,xe,he,Ee;if(v==0||$){v==0?(z=Je(ie(o,28,4)),W=Je(ie(o,24,4)),H=Je(ie(o,20,4)),J=Je(ie(o,16,4)),Y=Je(ie(o,12,4)),se=Je(ie(o,8,4))):(z=Ht(E),H=Ht(_),Y=Ht(S),W=Ht(B),J=Ht(k),se=Ht(T));let te=ie(o,5,3),ne=ie(o,2,3);for(let re=0;re<16;re++){let ae=c>>>re+15&2|c>>>re&1,oe=(x*4+(re/4|0)-i)*4+(f*4+re%4-s)*e,j=g==1?re%4<2:re<8,ee=j?te:ne;t[oe+0]=Fe((j?z:W)+Zr[ee<<2|ae]),t[oe+1]=Fe((j?H:J)+Zr[ee<<2|ae]),t[oe+2]=Fe((j?Y:se)+Zr[ee<<2|ae]),t[oe+3]=255}}else if(!P||!O){if(P){z=Je(ie(o,27,4)),H=Je(ie(o,24,3)<<1|ie(o,20,1)),Y=Je(ie(o,19,1)<<3|ie(o,15,3)),W=Je(ie(o,11,4)),J=Je(ie(o,7,4)),se=Je(ie(o,3,4));let te=z<<16|H<<8|Y,ne=W<<16|J<<8|se,re=te>=ne?1:0,ae=ie(o,2,1)<<2|ie(o,0,1)<<1|re,oe=ii[ae];m[0]=Fe(z+oe),m[1]=Fe(H+oe),m[2]=Fe(Y+oe),m[4]=Fe(z-oe),m[5]=Fe(H-oe),m[6]=Fe(Y-oe),m[8]=Fe(W+oe),m[9]=Fe(J+oe),m[10]=Fe(se+oe),m[12]=Fe(W-oe),m[13]=Fe(J-oe),m[14]=Fe(se-oe)}else{m[0]=Je(ie(o,27,2)<<2|ie(o,24,2)),m[1]=Je(ie(o,20,4)),m[2]=Je(ie(o,16,4)),m[8]=Je(ie(o,12,4)),m[9]=Je(ie(o,8,4)),m[10]=Je(ie(o,4,4));let te=ie(o,2,2)<<1|ie(o,0,1),ne=ii[te];m[4]=Fe(m[8]+ne),m[5]=Fe(m[9]+ne),m[6]=Fe(m[10]+ne),m[12]=Fe(m[4]-ne),m[13]=Fe(m[5]-ne),m[14]=Fe(m[6]-ne)}for(let te=0;te<16;te++){let ne=c>>>te+15&2|c>>>te&1,re=(x*4+(te/4|0)-i)*4+(f*4+te%4-s)*e;t[re+0]=Fe(m[ne<<2|0]),t[re+1]=Fe(m[ne<<2|1]),t[re+2]=Fe(m[ne<<2|2]),t[re+3]=255}}else if(!G){z=$t(ie(o,25,6)),H=Qr(ie(o,24,1)<<6|ie(o,17,6)),Y=$t(ie(o,16,1)<<5|ie(o,11,2)<<3|ie(o,7,3)),W=$t(ie(o,2,5)<<1|ie(o,0,1)),J=Qr(ie(c,25,7)),se=$t(ie(c,19,6)),xe=$t(ie(c,13,6)),he=Qr(ie(c,6,7)),Ee=$t(ie(c,0,6));for(let te=0;te<16;te++){let ne=te%4,re=te/4|0,ae=(x*4+ne-i)*4+(f*4+re-s)*e;t[ae+0]=Fe(ne*(W-z)+re*(xe-z)+4*z+2>>2),t[ae+1]=Fe(ne*(J-H)+re*(he-H)+4*H+2>>2),t[ae+2]=Fe(ne*(se-Y)+re*(Ee-Y)+4*Y+2>>2),t[ae+3]=255}}if(l){let te=vr(n,a),ne=vr(n,a+4),re=ie(te,24,8),ae=ie(te,20,4),oe=ie(te,16,4),j=(x*4-i)*4+(f*4-s)*e+3;t[j+0+0*e]=Qe(re,oe,ae,ie(te,13,3)),t[j+0+1*e]=Qe(re,oe,ae,ie(te,10,3)),t[j+0+2*e]=Qe(re,oe,ae,ie(te,7,3)),t[j+0+3*e]=Qe(re,oe,ae,ie(te,4,3)),t[j+4+0*e]=Qe(re,oe,ae,ie(te,1,3)),t[j+4+1*e]=Qe(re,oe,ae,ie(te,0,1)<<2|ie(ne,30,2)),t[j+4+2*e]=Qe(re,oe,ae,ie(ne,27,3)),t[j+4+3*e]=Qe(re,oe,ae,ie(ne,24,3)),t[j+8+0*e]=Qe(re,oe,ae,ie(ne,21,3)),t[j+8+1*e]=Qe(re,oe,ae,ie(ne,18,3)),t[j+8+2*e]=Qe(re,oe,ae,ie(ne,15,3)),t[j+8+3*e]=Qe(re,oe,ae,ie(ne,12,3)),t[j+12+0*e]=Qe(re,oe,ae,ie(ne,9,3)),t[j+12+1*e]=Qe(re,oe,ae,ie(ne,6,3)),t[j+12+2*e]=Qe(re,oe,ae,ie(ne,3,3)),t[j+12+3*e]=Qe(re,oe,ae,ie(ne,0,3))}}}class Ki{imagefiles;stripAlpha;isMaterialTexture;type;mipmaps;cachedDrawables;cachedImageDatas;bmpWidth=-1;bmpHeight=-1;filesize;constructor(e,n,r){if(this.isMaterialTexture=!!r,this.stripAlpha=n,this.imagefiles=[],this.cachedDrawables=[],this.cachedImageDatas=[],e instanceof ImageData)this.filesize=e.data.byteLength,this.type="imagedata",this.mipmaps=1,this.cachedImageDatas=[Promise.resolve(e)];else if(this.filesize=e.byteLength,e.readUint32BE(0)==2303741511)this.type="png",this.imagefiles.push(e),this.mipmaps=1;else{let s=0,u=0;for(;;){let h=e.readUInt8(u+s+1+4+0),l=e.readUInt8(u+s+1+4+1);if(h==0&&l==0){this.type="bmpmips";break}else if(h==68&&l==68){this.type="dds";break}else if(h==137&&l==80){this.type="png";break}else if(h==171&&l==75){this.type="ktx";break}else if(u++<=1)continue;throw new Error("failed to detect texture")}u==1&&e.readUint8(s++),this.mipmaps=e.readUInt8(s++),this.type=="bmpmips"&&(this.bmpWidth=e.readUInt32BE(s),s+=4,this.bmpHeight=e.readUInt32BE(s),s+=4);for(let h=0;h<this.mipmaps;h++){let l;this.type=="bmpmips"?l=(this.bmpWidth>>h)*(this.bmpHeight>>h)*4:(l=e.readUInt32BE(s),s+=4),this.imagefiles.push(e.slice(s,s+l)),s+=l,this.cachedDrawables.push(null),this.cachedImageDatas.push(null)}}}toImageData(e=0){let n=this.cachedImageDatas[e];return n||(n=(async()=>{const r=this.isMaterialTexture?32:void 0;if(this.type=="bmpmips"){let i=this.bmpWidth>>e,s=this.bmpHeight>>e,u=Bo(this.imagefiles[e],i,s,r,this.stripAlpha);return pt(u.data,u.width,u.height)}else{if(this.type=="png")return xo(this.imagefiles[e],"image/png",this.stripAlpha);if(this.type=="dds"){let i=Co(this.imagefiles[e],r,this.stripAlpha);return pt(i.data,i.width,i.height)}else if(this.type=="ktx"){let i=To(this.imagefiles[e],r,this.stripAlpha);return pt(i.data,i.width,i.height)}else throw this.type=="imagedata"?new Error("image not found"):new Error("unknown format")}})(),this.cachedImageDatas[e]=n),n}async toWebgl(e=0){let n=this.cachedDrawables[e];return n||(this.type=="png"?n=new Promise((r,i)=>{let s=new Image;s.onload=()=>{URL.revokeObjectURL(s.src),r(s)},s.onerror=i;let u=new Blob([this.imagefiles[e]],{type:"image/png"});s.src=URL.createObjectURL(u)}):n=this.toImageData(e).then(r=>createImageBitmap(r)),this.cachedDrawables[e]=n),n}}function Bo(t,e,n,r=-1,i=!0){r==-1&&(r=0,console.warn("cannot infer padding size on bmp textures"));const s=e*4,u=r*s+r*4,h=n-2*r,l=e-2*r,y=l*4,p=new Uint8Array(y*h);for(let m=0;m<h;m++){const f=m*y;if(p.set(t.subarray(u+s*m,u+s*m+y),f),i)for(let x=f;x<f+y;x+=4)p[x+3]=255}return{data:p,width:l,height:h}}const Mo=Object.freeze(Object.defineProperty({__proto__:null,ParsedTexture:Ki},Symbol.toStringTag,{value:"Module"}));async function bn(t,e,n,r,i=!1){let s=r??await t.getFileById(e,n);if(s.readUint32BE()!=1245792065)return s;let h=K.audio.read(s,t),l=i?await No(h.chunks,f=>f.data??t.getFileById(e,f.fileid),8):h.chunks.filter(f=>f.data).map(f=>f.data),y=[],p=0n,m=0;for(let[f,x]of l.entries()){let d=0n;for(let a=0;a<x.length;){let o=a;x.readUint32BE(a),a+=4,x.readUint8(a),a+=1,x.readUint8(a),a+=1;let c=x.readBigInt64LE(a);a+=8,x.readUint32LE(a),a+=4,x.readUint32LE(a),a+=4,x.readUint32LE(a),a+=4;let g=x.readUint8(a);a+=1;let v=0;for(let I=0;I<g;I++)v+=x.readUint8(a),a+=1;let E=Uint8Array.prototype.slice.call(x,o,a),_=x.slice(a,a+v);a+=v;let S=o==0&&f==0,C=f==l.length-1&&a==x.length;E.writeUint8(+S<<1|+C<<2,5),E.writeBigInt64LE(c+p,6),E.writeUint32LE(m++,18),E.writeUInt32LE(0,22);let A=ai(_,ai(E));E.writeUint32LE(A,22),(f==0||a!=0)&&(y.push(E),y.push(_)),d=c}p+=d}return ke.concat(y)}async function No(t,e,n=4){let r=[],i=0,s=0,u=[];for(let h of t)i>=s+n&&(u.push(await r[s%n]),s++),r[i%n]=e(h,i),i++;for(;s<i;)u.push(await r[s%n]),s++;return u}const Lo=new Uint32Array([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188]);function ai(t,e=0,n=0,r=t.length){e=e^0;for(let i=n;i<r;i++)e=e<<8^Lo[e>>>24&255^t[i]];return(e^0)>>>0}var yr=new Uint8Array(1e7);const Mt={};Mt.array=function(t){var e=0,n=0,r=[0,1,3,7,15,31,63,127,255];return function(i){for(var s=0;i>0;){var u=8-e;i>=u?(s<<=u,s|=r[u]&t[n++],e=0,i-=u):(s<<=i,s|=(t[n]&r[i]<<8-i-e)>>8-i-e,e+=i,i=0)}return s}};Mt.simple=function(t){var e=Mt.header(t),n,r,i=[],s=0;do r=Mt.decompress(t,e),r!=-1&&(i.push(r),s+=r.byteLength);while(r!=-1);n=new Uint8Array(s),s=0;for(var u=0;u<i.length;++u)r=i[u],n.set(r,s),s+=r.byteLength;return n};Mt.header=function(t){if(t(24)!=4348520)throw"No magic number found";var e=t(8)-48;if(e<1||e>9)throw"Not a BZIP archive";return e};Mt.decompress=function(t,e,n){for(var r=20,i=258,s=0,u=1,h=50,l=1e5*9,y="",p=0;p<6;p++)y+=t(8).toString(16);if(y=="177245385090")return-1;if(y!="314159265359")throw"eek not valid bzip data";if(t(32),t(1))throw"unsupported obsolete version";var m=t(24);if(m>l)throw"Initial position larger than buffer size";var f=t(16),x=new Uint8Array(256),d=0;for(p=0;p<16;p++)if(f&1<<15-p){var a=t(16);for(J=0;J<16;J++)a&1<<15-J&&(x[d++]=16*p+J)}var o=t(3);if(o<2||o>6)throw"another error";var c=t(15);if(c==0)throw"meh";for(var g=[],p=0;p<o;p++)g[p]=p;for(var v=new Uint8Array(32768),p=0;p<c;p++){for(var J=0;t(1);J++)if(J>=o)throw"whoops another error";var E=g[J];g.splice(J,1),g.splice(0,0,E),v[p]=E}for(var z=d+2,_=[],J=0;J<o;J++){var S=new Uint8Array(i),C=new Uint8Array(r+1);f=t(5);for(var p=0;p<z;p++){for(;;){if(f<1||f>r)throw"I gave up a while ago on writing error messages";if(!t(1))break;t(1)?f--:f++}S[p]=f}var A,I;A=I=S[0];for(var p=1;p<z;p++)S[p]>I?I=S[p]:S[p]<A&&(A=S[p]);var B;B=_[J]={},B.permute=new Uint32Array(i),B.limit=new Uint32Array(r+1),B.base=new Uint32Array(r+1),B.minLen=A,B.maxLen=I;for(var k=B.base.subarray(1),T=B.limit.subarray(1),P=0,p=A;p<=I;p++)for(var f=0;f<z;f++)S[f]==p&&(B.permute[P++]=f);for(p=A;p<=I;p++)C[p]=T[p]=0;for(p=0;p<z;p++)C[S[p]]++;for(P=f=0,p=A;p<I;p++)P+=C[p],T[p]=P-1,P<<=1,k[p+1]=P-(f+=C[p]);T[I]=P+C[I]-1,k[A]=0}for(var O=new Uint32Array(256),p=0;p<256;p++)g[p]=p;var G,$,z,H;G=$=z=H=0;for(var Y=new Uint32Array(l);;){if(!z--){if(z=h-1,H>=c)throw"meow i'm a kitty, that's an error";B=_[v[H++]],k=B.base.subarray(1),T=B.limit.subarray(1)}for(p=B.minLen,J=t(p);;){if(p>B.maxLen)throw"rawr i'm a dinosaur";if(J<=T[p])break;p++,J=J<<1|t(1)}if(J-=k[p],J<0||J>=i)throw"moo i'm a cow";var W=B.permute[J];if(W==s||W==u){G||(G=1,f=0),W==s?f+=G:f+=2*G,G<<=1;continue}if(G){if(G=0,$+f>=l)throw"Boom.";for(E=x[g[0]],O[E]+=f;f--;)Y[$++]=E}if(W>d)break;if($>=l)throw"I can't think of anything. Error";p=W-1,E=g[p],g.splice(p,1),g.splice(0,0,E),E=x[E],O[E]++,Y[$++]=E}if(m<0||m>=$)throw"I'm a monkey and I'm throwing something at someone, namely you";for(var J=0,p=0;p<256;p++)a=J+O[p],O[p]=J,J=a;for(var p=0;p<$;p++)E=Y[p]&255,Y[O[E]]|=p<<8,O[E]++;var se=0,xe=0,he=0;$&&(se=Y[m],xe=se&255,se>>=8,he=-1),$=$;var Ee,te,ne,re=0;for(n||(n=1/0);$;){for($--,te=xe,se=Y[se],xe=se&255,se>>=8,he++==3?(Ee=xe,ne=te,xe=-1):(Ee=1,ne=xe);Ee--;)if(yr[re++]=ne,!--n)return yr;xe!=te&&(he=0)}if(re>yr.length)throw new Error("not enough memory reserved");return yr.slice(0,re)};function si(t){var e=ke.alloc(t.byteLength+4);return t.copy(e,4),e.writeUInt16BE(16986,0),e.writeUInt8(104,2),e.writeUInt8(56,3),ke.from(Mt.simple(Mt.array(e)))}const ct={data:0,oldmodels:1,oldframebases:2,map:4},Nt={config:2,sprites:4,index:5,textures:6};function on(t,e,n){let r=new at(t),i=r.readTribyte();if(r.readTribyte()!=i&&(r=new at(si(r.readBuffer())),r.bytesLeft()!=i))throw new Error("decompress failed");let u=[],h=r.readUShort(!0),l=r.tee().skip(h*10);for(let y=0;y<h;y++){let p=r.readUInt(!0),m=r.readTribyte(),f=r.readTribyte(),x=l.scanloc(),d=l.readBuffer(f);if(m!=f&&(d=si(d),d.length!=m))throw new Error("decompress failed");u.push({fileid:y,buffer:d,offset:x,size:m,namehash:p})}return u}async function Ro(t){let e=await t.getArchiveById(ct.data,Nt.index),n=await t.getArchiveById(ct.data,Nt.config);return{items:br(n,"OBJ"),objects:br(n,"LOC"),overlays:br(n,"FLO"),npcs:br(n,"NPC"),underlays:[],spotanims:[],mapmeta:Po(e)}}function Po(t){let e=Ft("MAP_INDEX",!0),n=Ft("MAP_VERSION",!0),r=Ft("MAP_CRC",!0),i=t.find(m=>m.namehash==e),s=t.find(m=>m.namehash==n),u=t.find(m=>m.namehash==r);if(!i||!s||!u)throw new Error;let h=new at(i.buffer),l=new at(s.buffer),y=new at(u.buffer),p=new Map;for(;!h.eof();)p.set(h.readUShort(!0),{map:h.readUShort(!0),loc:h.readUShort(!0),crc:y.readUInt(!0),version:l.readUShort(!0)}),h.readUByte();return p}function br(t,e){let n=Ft(`${e}.IDX`,!0),r=Ft(`${e}.DAT`,!0),i=t.find(p=>p.namehash==n),s=t.find(p=>p.namehash==r);if(!i||!s)throw new Error;let u=new at(i.buffer),h=u.readUShort(!0),l=2,y=[];for(let p=0;p<h;p++){let m=u.readUShort(!0);y.push(s.buffer.slice(l,l+m)),l+=m}return y}async function oi(t,e,n){let r=`${e}.${n?"tga":"dat"}`,i=await t.findSubfileByName(ct.data,Nt.textures,r);return n?Wi(i.buffer):Yi(t,i.buffer)}async function Yi(t,e){let n=await t.findSubfileByName(ct.data,Nt.textures,"INDEX.DAT");return yn(n.buffer,e)}async function Zi(t,e,n,r){let i=await oi(t,e,r);if(!n)return i;let s=await oi(t,n,r);if(s.img.width+s.x>i.img.width||s.img.height+s.y>i.img.height)return console.warn("tried to overlay image outside of dest bounds"),i;let u=pt(i.img.data.slice(),i.img.width,i.img.height);for(let h=0;h<s.img.height;h++)for(let l=0;l<s.img.width;l++){let y=(h*s.img.width+l)*4,p=((h+s.y)*i.img.width+(l+s.x))*4,m=s.img.data[y+0],f=s.img.data[y+1],x=s.img.data[y+2],d=s.img.data[y+3],a=m==0&&f==255&&x==0&&d==255,o=d==255;u.data[p+0]=a?0:o?m:i.img.data[p+0],u.data[p+1]=a?0:o?f:i.img.data[p+1],u.data[p+2]=a?0:o?x:i.img.data[p+2],u.data[p+3]=a?0:o?d:i.img.data[p+3]}return{x:i.x,y:i.y,fullwidth:i.fullwidth,fullheight:i.fullheight,img:u}}const ln=Object.freeze(Object.defineProperty({__proto__:null,combineLegacyTexture:Zi,legacyGroups:Nt,legacyMajors:ct,legacyPreload:Ro,parseLegacyArchive:on,parseLegacyImageFile:Yi},Symbol.toStringTag,{value:"Module"})),_t={textures:6,models:101,entity:102,maps:103,land:104,filter:105,jagex:106,media:107,sounds:108,config:110};function en(t,e,n,r,i,s,u,h,l,y,p,m,f){return{buildnr:t,locsjson:m,name:f,date:e,versions:{config:n,maps:r,land:i,media:s,models:u,textures:h,entity:l,sounds:y,filter:p}}}const Qi=[en(115,new Date("2001-12-24 20:28"),48,27,0,28,12,8,10,0,0,null,"dec 2001 - last original world data"),en(203,new Date("2003-12-01"),85,63,0,58,36,17,24,1,2,null,"Build 203 - User provided"),en(230,new Date("2004-02-18 11:43"),100,100,100,100,100,100,100,100,100,"SceneryLocs.json","Last version of entered files")],Uo=Object.fromEntries(Object.entries(_t).map(([t,e])=>[e,t]));function ea(t){let e=[];for(let n of Qi)e.push({buildnr:n.buildnr,iscomplete:!1,locsjson:n.locsjson,target:n.versions,foundjag:Object.fromEntries(Object.entries(n.versions).map(([r])=>[r,0])),foundmem:Object.fromEntries(Object.entries(n.versions).map(([r])=>[r,0]))});for(let n of t){let r=n.match(/^(?<name>[a-zA-Z]+)(?<version>\d+)\.(?<type>jag|mem)$/);if(r){let i=+r.groups.version,s=r.groups.type=="mem",u=r.groups.name;for(let h of e){let l=s?h.foundmem:h.foundjag;h.target[u]&&i<=h.target[u]&&i>l[u]&&(l[u]=i)}}}for(let n of e){let r=!0;for(let i in n.target)n.foundjag[i]!=n.target[i]&&(r=!1),n.foundmem[i]!=0&&n.foundmem[i]!=n.target[i]&&(r=!1);n.iscomplete=r}return e}class wn extends Xi{usingversion;fs;constructor(e,n){super(),this.fs=e,this.usingversion=n}static async create(e,n){if(!n){let r=await e.readDir("."),i=ea(r.map(u=>u.name)),s=localStorage.rsmv_classicversion??"-1";n=i.at(+s)}return new wn(e,n)}async getFileArchive(e){if(e.major!=0)throw new Error("all files are placed in index 0 for classic caches");let n=Uo[e.minor],r=await this.getNamedFile(n,!1),i=await this.getNamedFile(n,!0),s=r?on(r,e.major):[],u=i?on(i,e.major):[];if(s.length==0&&u.length==0)throw new Error("no files found in index "+e.minor);return[...s,...u]}async getNamedFile(e,n){if(!this.usingversion||!this.fs)throw new Error("no classic files loaded in classic cache loader");let r=(n?this.usingversion.foundmem:this.usingversion.foundjag)[e];if(!r)return null;let i=`${e}${r}.${n?"mem":"jag"}`;return console.log("loading",i),this.fs.readFileBuffer(i)}getBuildNr(){return this.usingversion?.buildnr??200}getCacheMeta(){return this.usingversion?{name:`Classic ${this.getBuildNr()}`,descr:`${Object.entries(this.usingversion.foundjag).map(([e,n])=>`${e}: ${n}`).join(`
`)}`,timestamp:new Date(0)}:{name:"Classic",descr:"no files loaded",timestamp:new Date(0)}}async getFile(e,n){throw new Error("can only load archives in a classic cache")}}function xt(t,e){let n=new Array(t).fill(null).map(()=>({}));for(let[r,i]of Object.entries(e))for(let s=0;s<t;s++)n[s][r]=i();return n}async function Oo(t,e){let n=await t.getArchiveById(0,_t.models),r=(await t.findSubfileByName(0,_t.config,"STRING.DAT")).buffer,i=(await t.findSubfileByName(0,_t.config,"INTEGER.DAT")).buffer,s=0,u=()=>{let I=s;for(;s<r.length&&r[s++]!=0;);return r.toString("latin1",I,s-1)},h=0,l=()=>{let I=i.readUint32BE(h);return h+=4,I},y=()=>{let I=i.readInt32BE(h);return h+=4,I},p=()=>{let I=i.readUint16BE(h);return h+=2,I},m=()=>i.readUint8(h++),f=()=>!!m(),x=xt(p(),{name:u,examine:u,command:u,sprite:p,price:e<180?p:l,stackable:f,special:f,equip:p,color:l,untradeable:e<180?()=>!1:f,member:e<180?()=>!1:f}),d=xt(p(),{name:u,examine:u,command:e<180?()=>"":u,attack:m,strength:m,hits:m,defence:m,hostility:m,anims:()=>new Array(12).fill(null).map(m),haircolor:l,topcolor:l,bottomcolor:l,skincolor:l,width:p,height:p,walkmodel:m,combatmodel:m,combatanim:m}),a=xt(p(),{name:u,subname:u}),o=xt(p(),{name:u,color:l,gendermodel:m,has_a:f,has_f:f,unk:m}),c=xt(p(),{name:u,examine:u,command_0:u,command_1:u,model:()=>{let I=u(),B=Ft(`${I}.ob3`,!0),k=n.find(T=>T.namehash==B)?.fileid;return{name:I,id:k}},xsize:m,zsize:m,type:m,item_height:m}),g=xt(p(),{name:u,examine:u,command_0:u,command_1:u,height:p,frontdecor:y,backdecor:y,blocked:f,invisible:f}),v=xt(p(),{height:m,texture:m}),E=xt(p(),{decor:l,type:()=>{let I=m();return{type:I,autoconnect:I==1||I==3,indoors:I==2,iswater:I==3,bridge:I==4}},blocked:f}),_=xt(p(),{}),S=xt(p(),{name:u,examine:u,level:m,num_runes:m,type:m,runetypes:()=>new Array(m()).fill(null).map(p),runeamounts:()=>new Array(m()).fill(null).map(m)}),C=xt(p(),{name:u,examine:u,level:m,drain:m});console.log(`decoded rsc config, ints ${h}/${i.length}, strings ${s}/${r.length}`);let A=[];if(t.usingversion.locsjson)try{let I=JSON.parse(await t.fs.readFileText(t.usingversion.locsjson)),B=944;A=I.sceneries.map(k=>({id:k.id,dir:k.direction,level:Math.floor(k.pos.Y/B),x:2304+k.pos.X,z:1776+k.pos.Y%B}))}catch{console.warn("failed to load external classic locs")}return{items:x,npcs:d,textures:a,anims:o,objects:c,wallobjects:g,roofs:v,tiles:E,projectile:_,spells:S,prayers:C,jsonlocs:A}}const En=Object.freeze(Object.defineProperty({__proto__:null,ClassicFileSource:wn,classicBuilds:Qi,classicConfig:Oo,classicGroups:_t,detectClassicVersions:ea},Symbol.toStringTag,{value:"Module"}));async function Go(t,e){let n=K.cutscenes.read(e,t),r=document.createElement("div");r.style.width=`${n.width}px`,r.style.height=`${n.height}px`,console.log(n);let i=`cutscene-${Ze(e)>>>0}`,s="",u="",h=n.elements.reduce((x,d)=>Math.max(x,d.end),0),l=x=>`${Math.max(0,x/h*100).toFixed(2)}%`,y=new Map,p=function(x,d,a,o){return s+=`@keyframes ${d}{
`,s+=`  from{${o(a[0])}}
`,s+=a.map(c=>`  ${l(x.start+c[0])}{${o(c)}}
`).join(""),s+=`  to{${o(a.at(-1))}}
`,s+=`}
`,`${h}s infinite ${d} linear`};s+=`.subtitle{
`,s+=`  position: absolute;
`,s+=`  font-size: 50px;
`,s+=`  bottom: 20px;
`,s+=`  text-align: center;
`,s+=`  color: white;
`,s+=`  padding: 5px;
`,s+=`  left: 20px;
`,s+=`  right: 20px;
`,s+=`  font-family: sans-serif;
`,s+=`  display:flex;
`,s+=`}
`,s+=`.subtitle>div{
`,s+=`  background:rgba(0,0,0,0.3);
`,s+=`  margin:0px auto;
`,s+=`  padding:12px;
`,s+=`  border-radius:20px;
`,s+=`}
`;for(let x=n.elements.length-1;x>=0;x--){let d=n.elements[x],a=`${i}-${x}-visibility`;if(s+=`@keyframes ${a}{
`,s+=`  0%{visibility:hidden}
`,s+=`  ${l(d.start)}{visibility:visible}
`,s+=`  ${l(d.end)}{visibility:hidden}
`,s+=`}
`,u+=`<div style="animation:${h}s step-end infinite ${a}">
`,d.subtitle&&(u+=`<div class="subtitle"><div>${jt(d.subtitle)}</div></div>
`),d.soundid)try{let o=await bn(t,N.sounds,d.soundid,null,!0);u+=`<audio src="data:audio/ogg;base64,${o.toString("base64")}" data-timestart="${d.start}" data-timeend="${d.end}"></audio>
`}catch{console.warn(`missing sound ${d.soundid} ${d.sound}`)}if(d.graphics){if(d.graphics.length!=0)for(let o=d.graphics.length-1;o>=0;o--){let c=d.graphics[o],g=y.get(c.spriteid);if(!g){let _=await t.getFileById(N.sprites,c.spriteid);g=await $i(Lt(_)[0].img),y.set(c.spriteid,g)}let v=[];if(c.opacityframes.length!=0){let _=`${i}-${x}-${o}-opacity`;v.push(p(d,_,c.opacityframes,S=>`opacity:${S[1].toFixed(2)}`))}if(c.rotateframes.length!=0){let _=`${i}-${x}-${o}-rotate`;v.push(p(d,_,c.rotateframes,S=>`rotate:${S[1].toFixed(2)}deg;`))}if(c.translateframes.length!=0){let _=`${i}-${x}-${o}-translate`;v.push(p(d,_,c.translateframes,S=>`translate:${S[1].toFixed(2)}px ${S[2].toFixed(2)}px`))}if(c.scaleframes.length!=0){let _=`${i}-${x}-${o}-scale`;v.push(p(d,_,c.scaleframes,S=>`scale:${S[1].toFixed(3)} ${S[2].toFixed(2)};`))}let E=`position:absolute; top:0px; left:0px; transform-origin:center;margin-left:${-c.width/2}px; margin-top:${-c.height/2}px;`;u+=`<img data-spriteid="${c.spriteid}" src="${g}" width="${c.width}" height="${c.height}" style="${E} animation:${v.join()};">
`}u+="</div>"}}function m(x){console.log("module init");let d=0,a=Date.now(),o=1,c=0;function g(){return d+(Date.now()-a)/1e3*o}function v(C){let A=C.currentTarget.valueAsNumber;S(A,0)}function E(){S(g(),1)}function _(){S(g(),0)}function S(C,A=1){if(d=C,o=A,a=Date.now(),c&&(clearTimeout(c),c=0),A!=0){let k=(x-C/A)*1e3;c=+setTimeout(()=>{S(0,A)},k)}let I=document.getAnimations();for(let k of I)k.currentTime=1e3*C,k.playbackRate=A,A!=0?k.play():k.pause();let B=Array.from(document.querySelectorAll("audio"));for(let k of B){let T=C-+(k.dataset.timestart??0);k.dataset.delaytimer&&(clearTimeout(+k.dataset.delaytimer),k.dataset.delaytimer=void 0),A!=0?(k.playbackRate=A,T<0?k.dataset.delaytimer=""+ +setTimeout(()=>{k.currentTime=0,k.play()},-T/A*1e3):(k.currentTime=T,k.play())):k.pause()}}return{seek:S,play:E,pause:_,onRangeChange:v}}let f=`<!DOCTYPE html>
`;return f+=`<html>
`,f+=`<head>
`,f+=`<style>
`,f+=s,f+=`</style>
`,f+=`</head>
`,f+=`<body>
`,f+=`<input type="range" min="0" max="${h}" step="0.01" style="width:400px;" oninput="controls.onRangeChange(event)">
`,f+=`<input type="button" value="play" onclick="controls.play()">
`,f+=`<input type="button" value="pause" onclick="controls.pause()">
`,f+=`<div style="position:relative; width:${n.width}px; height:${n.height}px; overflow:hidden; zoom:0.5;">
`,f+=u,f+=`</div>
`,f+=`<script>
`,f+=`var controls=(${m})(${h});
`,f+=`controls.play()
`,f+=`<\/script>
`,f+=`</body>
`,f+=`</html>
`,{html:u,css:s,doc:f}}function _n(t,e){t.customProgramCacheKey=()=>"zoffset"+e,t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace(/#include <(\w+)>/g,(r,i)=>`// == ${i} ==
${r}`),n.vertexShader=n.vertexShader.replace("#include <project_vertex>",`
			#include <project_vertex>
			mvPosition.xyz -= normalize(mvPosition.xyz) * ${e.toExponential()};
			gl_Position = projectionMatrix * mvPosition;
		`)}}function ta(t,e){t.customProgramCacheKey=()=>"floortex",t.onBeforeCompile=n=>{n.vertexShader=`#ifdef USE_MAP
attribute vec2 texcoord_0;
attribute vec2 texcoord_1;
attribute vec2 texcoord_2;
attribute vec3 color_1;
attribute vec3 color_2;
varying vec2 v_ra_floortex_0;
varying vec2 v_ra_floortex_1;
varying vec2 v_ra_floortex_2;
varying vec3 v_ra_floortex_weights;
varying vec3 v_ra_floortex_usescolor;
#endif
`+n.vertexShader.replace("#include <uv_vertex>",`#ifdef USE_MAP
v_ra_floortex_0 = texcoord_0;
v_ra_floortex_1 = texcoord_1;
v_ra_floortex_2 = texcoord_2;
v_ra_floortex_weights = color_1;
v_ra_floortex_usescolor = color_2;
#endif
#include <uv_vertex>`),n.fragmentShader=`#ifdef USE_MAP
varying vec2 v_ra_floortex_0;
varying vec2 v_ra_floortex_1;
varying vec2 v_ra_floortex_2;
varying vec3 v_ra_floortex_weights;
varying vec3 v_ra_floortex_usescolor;
#endif

highp vec3 runeapps_srgb_to_linear(highp vec3 color,float gamma){
	return pow(color.rgb,vec3(1.0/gamma));
}
highp vec3 runeapps_linear_to_srgb(highp vec3 color,float gamma){
	return pow(color.rgb,vec3(gamma));
}
`+n.fragmentShader.replace("#include <color_fragment>","").replace("#include <map_fragment>",`#include <color_fragment>
#ifdef USE_MAP
vec4 texelColor = 
   texture2D( map, v_ra_floortex_0 ) * v_ra_floortex_weights.r * mix(vec4(1.0), diffuseColor, v_ra_floortex_usescolor.r)
 + texture2D( map, v_ra_floortex_1 ) * v_ra_floortex_weights.g * mix(vec4(1.0), diffuseColor, v_ra_floortex_usescolor.g)
 + texture2D( map, v_ra_floortex_2 ) * v_ra_floortex_weights.b * mix(vec4(1.0), diffuseColor, v_ra_floortex_usescolor.b);
texelColor = mix( diffuseColor,texelColor,dot(vec3(1.0),v_ra_floortex_weights));
#endif
diffuseColor = texelColor;
`)}}const He=[255,255,255],zo=[255,0,0],ut=512,Q=256,ra=ut*192/128,$e=ra+ut/2,et=Q+ut/5,Bt=ra,Yt=$e-($e-Bt)/(Q+et)*ut;function li(t,e,n){let r=(n[1]-t[1])*(e[2]-t[2])-(e[1]-t[1])*(n[2]-t[2]),i=(n[2]-t[2])*(e[0]-t[0])-(e[2]-t[2])*(n[0]-t[0]),s=(n[0]-t[0])*(e[1]-t[1])-(e[0]-t[0])*(n[1]-t[1]),u=1/Math.hypot(r,i,s);return[r*u,i*u,s*u]}class Sn{pos=[];color=[];uvs=[];index=[];normals=[];vertindex=0;parent;constructor(e){this.parent=e}addParallelogram(e,n,r,i){let s=[n[0]+i[0]-r[0],n[1]+i[1]-r[1],n[2]+i[2]-r[2]],u=li(n,r,i);return this.pos.push(...n,...r,...i,...s),this.color.push(...e,...e,...e,...e),this.normals.push(...u,...u,...u,...u),this.uvs.push(0,0,1,0,1,1,0,1),this.index.push(this.vertindex+0,this.vertindex+2,this.vertindex+1,this.vertindex+0,this.vertindex+3,this.vertindex+2),this.vertindex+=4,this}addTriangle(e,n,r,i){let s=li(n,i,r);return this.color.push(...e,...e,...e),this.pos.push(...n,...r,...i),this.uvs.push(0,0,0,1,1,1),this.normals.push(...s,...s,...s),this.index.push(this.vertindex+0,this.vertindex+1,this.vertindex+2),this.vertindex+=3,this}addCube(e,[n,r,i],[s,u,h]){let l=n-s/2,y=r-u/2,p=i-h/2,m=l+s,f=y+u,x=p+h;return this.addParallelogram(e,[l,y,p],[m,y,p],[m,f,p]),this.addParallelogram(e,[m,y,p],[m,y,x],[m,f,x]),this.addParallelogram(e,[m,y,x],[l,y,x],[l,f,x]),this.addParallelogram(e,[l,y,x],[l,y,p],[l,f,p]),this.addParallelogram(e,[l,y,x],[m,y,x],[m,y,p]),this.addParallelogram(e,[l,f,p],[m,f,p],[m,f,x]),this}addExtrusion(e,n,r){let i=r[r.length-1];if(Math.hypot(...n)!=0)for(let s=0;s<r.length;s++){let u=r[s];this.addParallelogram(e,i,u,[u[0]+n[0],u[1]+n[1],u[2]+n[2]]),i=u}if(r.length>2){let s=r[2][0]-r[1][0],u=r[2][1]-r[1][1],h=r[2][2]-r[1][2],l=r[0][0]-r[1][0],y=r[0][1]-r[1][1],p=r[0][2]-r[1][2],m=y*h-u*p,f=p*s-h*l,x=l*u-s*y,d=Math.hypot(m,f,x);m/=d,f/=d,x/=d,this.index.length;let a=-1,o=-1;for(let c=0;c<r.length;c++){let g=r[c];this.pos.push(...g),this.color.push(...e),this.uvs.push(0,0),this.normals.push(m,f,x);let v=this.vertindex++;a==-1?a=v:(o==-1||this.index.push(a,o,v),o=v)}a=-1,o=-1;for(let c=r.length;c>0;c--){let g=r[c%r.length];this.pos.push(...g),this.color.push(...e),this.uvs.push(0,0),this.normals.push(-m,-f,-x);let v=this.vertindex++;a==-1?a=v:(o==-1||this.index.push(a,o,v),o=v)}}return this}convertSubmesh(e){let n=new Ye(new Uint16Array(this.index),1);return{indices:n,vertexstart:0,vertexend:this.pos.length/3|0,attributes:{pos:new Ye(new Float32Array(this.pos),3),color:new Ye(new Uint8Array(this.color),3,!0),texuvs:new Ye(new Float32Array(this.uvs),2),normals:new Ye(new Float32Array(this.normals),3)},indexLODs:[n],hasVertexAlpha:!1,materialId:e,needsNormalBlending:!1}}mat(e){return this.parent.mat(e)}convert(){return this.parent.convert()}}function Tt(t){if(t instanceof hr){let e=t.data.array;if(!ArrayBuffer.isView(e))throw new Error("typed array backing store expected");return[e,t.offset,t.data.stride]}else{let e=t.array;if(!ArrayBuffer.isView(e))throw new Error("typed array backing store expected");return[e,0,t.itemSize]}}function na(t,e,n,r,i){const s=new Be,u=new Be,h=new Be,l=new Be;for(let y=r;y<i;y+=3){const p=t.getX(y+0),m=t.getX(y+1),f=t.getX(y+2);s.fromBufferAttribute(e,p),u.fromBufferAttribute(e,m),h.fromBufferAttribute(e,f),h.sub(u),s.sub(u),l.crossVectors(h,s),s.fromBufferAttribute(n,p),u.fromBufferAttribute(n,m),h.fromBufferAttribute(n,f),s.add(l),u.add(l),h.add(l),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,u.x,u.y,u.z),n.setXYZ(f,h.x,h.y,h.z)}for(let y=r;y<i;y++)l.fromBufferAttribute(n,y),l.normalize(),n.setXYZ(y,l.x,l.y,l.z)}function Vo(t){let e=0,n=0,r=[];return t.forEach((i,s)=>{let u=i.convertSubmesh(s);r.push(u);let h=u.attributes.pos;for(let l=0;l<h.count;l++){let y=h.getY(l);e=Math.min(e,y),n=Math.max(n,y)}}),{miny:e,maxy:n,bonecount:0,skincount:0,meshes:r}}class tt{meshes=new Map;mat(e){let n=this.meshes.get(e);return n||(n=new Sn(this),this.meshes.set(e,n)),n}convert(){return Vo(this.meshes)}}const jo=new tt().mat(0).addCube(He,[0,300,0],[600,600,600]).convert(),qo=new tt().mat(0).addParallelogram(He,[-Q,0,Q],[-Q,ut,Q],[-Q,ut,-Q]).mat(1).addParallelogram(zo,[-Q,0,-Q],[-Q,ut,-Q],[-Q,ut,Q]).convert(),Xo=new tt().mat(0).addParallelogram(He,[Q,0,Q],[Q,ut,Q],[-Q,ut,-Q]).mat(1).addParallelogram(He,[-Q,0,-Q],[-Q,ut,-Q],[Q,ut,Q]).convert(),Ho=new tt().mat(0).addParallelogram(He,[-et,Yt,-et],[et,Yt,-et],[et,Yt,et]).convert(),$o=new tt().mat(0).addParallelogram(He,[-Q,$e,Q],[-Q,$e,-Q],[et,Bt,-Q]).convert(),Jo=new tt().mat(0).addTriangle(He,[et,Bt,Q],[-Q,Bt,-et],[-Q,$e,Q]).convert(),Wo=new tt().mat(0).addTriangle(He,[-Q,$e,-Q],[-Q,$e,Q],[Q,$e,Q]).mat(0).addTriangle(He,[-Q,$e,-Q],[Q,$e,Q],[Q,Yt,-Q]).convert(),Ko=new tt().mat(0).addTriangle(He,[Q,$e,Q],[-Q,$e,-Q],[-Q,Yt,Q]).mat(0).addTriangle(He,[-Q,$e,-Q],[Q,$e,Q],[Q,Yt,-Q]).convert(),Yo=new tt().mat(0).addTriangle(He,[et,Bt,-et],[-Q,Bt,-et],[-Q,$e,Q]).mat(0).addTriangle(He,[et,Bt,Q],[et,Bt,-et],[-Q,$e,Q]).convert(),Zo=new tt().mat(0).addParallelogram(He,[-Q,$e,-Q],[Q,$e,-Q],[Q,$e,Q]).convert(),Jt=Qo();function Qo(){const t=Q,e=Q-ut/8,r=[0,0,0];return{wall:new tt().mat(-1).addExtrusion(He,r,[[-t,0,-t],[-t,0,t],[-e,0,t],[-e,0,-t]]).convert(),shortcorner:new tt().mat(-1).addExtrusion(He,r,[[-t,0,t],[-e,0,t],[-e,0,e],[-t,0,e]]).convert(),longcorner:new tt().mat(-1).addExtrusion(He,r,[[-e,0,e],[-e,0,-t],[-t,0,-t],[-t,0,t],[t,0,t],[t,0,e]]).convert(),pillar:new tt().mat(-1).addExtrusion(He,r,[[-t,0,t],[-e,0,t],[-e,0,e],[-t,0,e]]).convert(),diagonal:new tt().mat(-1).addExtrusion(He,r,[[-t,0,-t],[-t,0,-e],[e,0,t],[t,0,t],[t,0,e],[-e,0,-t]]).convert()}}function ia(t){let e=t.meshes.reduce((h,l)=>h+l.vertexend-l.vertexstart,0),n=new Uint32Array(e),r=0;for(let h=0;h<t.meshes.length;h++){let l=t.meshes[h];for(let y=l.vertexstart;y<l.vertexend;y++)n[r++]=h<<23|y}function i(h,l,y){const p=h.meshes[l>>23],m=h.meshes[y>>23],f=l&8388607,x=y&8388607,d=p.attributes.pos,a=m.attributes.pos;return d.getX(f)-a.getX(x)||d.getY(f)-a.getY(x)||d.getZ(f)-a.getZ(x)}let s=new Be,u=new Be;n.sort((h,l)=>i(t,h,l));for(let h=0;h<n.length;){let l=h;for(h++;h<n.length&&i(t,n[l],n[h])==0;)h++;if(h>l+1){const y=t.meshes[n[l]>>23],p=n[l]&8388607;u.set(0,0,0);for(let m=l;m<h;m++){const f=t.meshes[n[m]>>23],x=n[m]&8388607;f.needsNormalBlending&&f.attributes.normals&&(s.fromBufferAttribute(f.attributes.normals,x),u.add(s))}u.normalize();for(let m=l;m<h;m++){const f=t.meshes[n[m]>>23],x=n[m]&8388607;if(m!=l&&y.attributes.boneids&&f.attributes.boneids)for(let d=0;d<y.attributes.boneids.itemSize;d++)f.attributes.boneids.setComponent(x,d,y.attributes.boneids.getComponent(p,d)),f.attributes.boneweights.setComponent(x,d,y.attributes.boneweights.getComponent(p,d));f.needsNormalBlending&&f.attributes.normals&&u.lengthSq()>.001&&f.attributes.normals.setXYZ(x,u.x,u.y,u.z)}}}}function aa(t){return{bonecount:Math.max(...t.map(e=>e.bonecount)),skincount:Math.max(...t.map(e=>e.skincount)),maxy:Math.max(...t.map(e=>e.maxy)),miny:Math.max(...t.map(e=>e.miny)),meshes:t.flatMap(e=>e.meshes),debugmeshes:t.flatMap(e=>e.debugmeshes??[])}}function Dn(t,e){let n=e.replaceMaterials?.find(s=>s[0]==t.materialId)?.[1],r={...t};n!=null&&(r.materialId=n==65535?-1:n),typeof e.lodLevel=="number"&&e.lodLevel!=-1&&(r.indices=t.indexLODs[Math.min(e.lodLevel,t.indexLODs.length-1)]);let i;if(e.replaceColors&&e.replaceColors.length!=0&&t.attributes.color){let s=t.attributes.color,u=[];for(let h of e.replaceColors){let l=pr(qt(h[0])),y=pr(qt(h[1]));u.push([l[0]<<16|l[1]<<8|l[2],y])}for(let h=0;h<s.count;h++){let l=s.getX(h)*255<<16|s.getY(h)*255<<8|s.getZ(h)*255;for(let y of u)if(l==y[0]){i||(i=s.clone()),i.setXYZ(h,y[1][0]/255,y[1][1]/255,y[1][2]/255);break}}}return i&&(r.attributes={...t.attributes,color:i}),r}function An(t,e,n,r=!1){let i=t.geometry.getAttribute("color"),s=!!i&&i.itemSize==4;t.material=e.mat;let u=n&&e.matmeta.baseColorFraction==1?[.5,.5,.5]:e.matmeta.baseColor;if(e.matmeta.baseColorFraction!=1||u.some(y=>y!=1)||n||!e.matmeta.textures.diffuse||s){if(e.matmeta.baseColorFraction!=0){let y=t.geometry.getAttribute("position").count,p=t.geometry.getAttribute("color"),m=1-e.matmeta.baseColorFraction,f=e.matmeta.baseColorFraction*u[0]*255,x=e.matmeta.baseColorFraction*u[1]*255,d=e.matmeta.baseColorFraction*u[2]*255,a=s?4:3,o=r&&p?p:new Ye(new Uint8Array(a*y),a,!0),[c,g,v]=Tt(o),[E,_,S]=p?Tt(p):[null,0,0];for(let C=0;C<y;C++){let A=g+v*C,I=_+S*C,B=E?E[I+0]:255,k=E?E[I+1]:255,T=E?E[I+2]:255;c[A+0]=Math.min(255,B*m+f),c[A+1]=Math.min(255,k*m+x),c[A+2]=Math.min(255,T*m+d),s&&(c[A+3]=E?E[I+3]:255)}t.geometry.setAttribute("color",o)}}else t.geometry.getAttribute("color")&&t.geometry.deleteAttribute("color")}async function Cn(t,e){let n=new Mi,r=null;if(e.bonecount!=0||e.skincount!=0){let i=[],s=Math.max(e.bonecount,e.skincount),u=new fr;n.add(u);for(let h=0;h<s;h++)i.push(u);r=new Pr(i)}for(let i of e.meshes){let s=i.attributes,u=new mr;u.setAttribute("position",s.pos),s.color&&u.setAttribute("color",s.color),s.normals&&u.setAttribute("normal",s.normals),s.texuvs&&u.setAttribute("uv",s.texuvs),s.skinids&&u.setAttribute("RA_skinIndex_skin",s.skinids),s.skinweights&&u.setAttribute("RA_skinWeight_skin",s.skinweights),s.boneids&&u.setAttribute("RA_skinIndex_bone",s.boneids),s.boneweights&&u.setAttribute("RA_skinWeight_bone",s.boneweights),u.index=i.indices;let h;if(s.skinids||s.boneids){h=new Ur(u);let y=!!u.attributes.RA_skinIndex_bone;u.attributes.skinIndex||(u.setAttribute("skinIndex",y?u.attributes.RA_skinIndex_bone:u.attributes.RA_skinIndex_skin),u.setAttribute("skinWeight",y?u.attributes.RA_skinWeight_bone:u.attributes.RA_skinWeight_skin)),h.bind(r)}else h=new ir(u);let l=await t.getMaterial(i.materialId,i.hasVertexAlpha,!1);An(h,l,!1),n.add(h)}return e.debugmeshes&&e.debugmeshes.length!=0&&n.add(...e.debugmeshes),n}const el=Object.freeze(Object.defineProperty({__proto__:null,MeshBuilder:Sn,ModelBuilder:tt,applyMaterial:An,augmentThreeJsFloorMaterial:ta,augmentZOffsetMaterial:_n,classicRoof10:Ho,classicRoof12:$o,classicRoof13:Jo,classicRoof14:Wo,classicRoof15:Ko,classicRoof16:Yo,classicRoof17:Zo,classicWall:qo,classicWallDiag:Xo,computePartialNormals:na,getAttributeBackingStore:Tt,materialPreviewCube:jo,mergeBoneids:ia,mergeModelDatas:aa,modifyMesh:Dn,ob3ModelToThree:Cn,topdown2dWallModels:Jt},Symbol.toStringTag,{value:"Module"}));function Cr(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Cr=function(n){return typeof n}:Cr=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Cr(t)}function tl(t,e,n){var r=n.value;if(typeof r!="function")throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(Cr(r)));var i=!1;return{configurable:!0,get:function(){if(i||this===t.prototype||this.hasOwnProperty(e)||typeof r!="function")return r;var u=r.bind(this);return i=!0,Object.defineProperty(this,e,{configurable:!0,get:function(){return u},set:function(l){r=l,delete this[e]}}),i=!1,u},set:function(u){r=u}}}function tn(t,e){for(let n=0;n<t.length-1;n++){let r=t[n],i=t[n+1];if(r.time<=e&&i.time>=e){let s=r.value[0],u=i.value[0],h=r.time,l=i.time,y=s+r.value[2],p=h+r.value[1],m=u-r.value[4],f=l-r.value[3],x=nl(h,p,f,l,e);return rl(s,y,m,u,x)}}throw new Error("out of track bounds")}function rl(t,e,n,r,i){let s=3*e-t-3*n+r,u=3*t-6*e+3*n,h=3*e-3*t,l=t;return i*i*i*s+i*i*u+i*h+l}function nl(t,e,n,r,i){let s=1e-5,u=3*e-t-3*n+r,h=3*t-6*e+3*n,l=3*e-3*t,y=t-i;if(Math.abs(u)<s){let O=l*l-4*h*y;if(O<0)throw new Error("no solution for quadratic interpolation");let G=2*y/(-l-Math.sqrt(O)),$=2*y/(-l+Math.sqrt(O)),z=G>=-s&&G<=1+s,H=$>=-s&&$<=1+s;if(!z&&!H)throw new Error("no valid solutions for quadratic interpolation");return z?G:$}let p=-h/(3*u),m=p*p*p+(h*l-3*u*y)/(6*u*u),f=l/(3*u),x=m*m+Math.pow(f-p*p,3),d=x>=0?Math.sqrt(x):0,a=x>=0?0:Math.sqrt(-x),o=m+d,c=a,g=m-d,v=-a,E=Math.hypot(o,c),_=Math.atan2(c,o),S=Math.hypot(g,v),C=Math.atan2(v,g),A=Math.pow(E,1/3),I=_/3,B=Math.pow(S,1/3),k=C/3,T=0,P=0;for(let O of[0,1,2])for(let G of[0,1,2]){let $=A*Math.sin(I+O*Math.PI/3*2)+B*Math.sin(k+G*Math.PI/3*2),z=A*Math.cos(I+O*Math.PI/3*2)+B*Math.cos(k+G*Math.PI/3*2)+p;Math.abs($)<s&&z>=-s&&z<=1+s&&(T=A*Math.cos(I+O*Math.PI/3*2)+B*Math.cos(k+G*Math.PI/3*2)+p,P++)}if(P==0)throw new Error("no solution found");return T}async function il(t,e,n){let r=K.framemaps.read(await e.engine.getFileById(N.framemaps,n),e.engine.rawsource);if(!r.skeleton)throw new Error("framebase does not have skeleton");let i=[],s=[],u=new rt,h=new rt().makeScale(1,1,-1);for(let[p,m]of r.skeleton.entries()){let f=new fr,x=new rt().fromArray(m.bonematrix);f.name="bone_"+p,m.nonskinboneid==65535?(s.push(f),x.multiply(h)):i[m.nonskinboneid].add(f),u.copy(x).decompose(f.position,f.quaternion,f.scale),f.updateMatrixWorld(),i[p]=f}let l=new Pr(i);s.length!=0&&t.add(...s),t.updateMatrixWorld(!0);let y=new rt().copy(t.matrixWorld);l.calculateInverses(),t.traverse(p=>{if(p instanceof Ur){p.bind(l,y);let m=p.geometry;m.attributes.skinIndex=m.attributes.RA_skinIndex_skin,m.attributes.skinWeight=m.attributes.RA_skinWeight_skin}})}async function al(t,e){let n=K.skeletalAnim.read(await t.engine.getFileById(N.skeletalAnims,e),t.engine.rawsource),r=[],i=n.tracks.sort((h,l)=>h.boneid!=l.boneid?h.boneid-l.boneid:h.type_0to9-l.type_0to9),s=[{t:"unknown",a:0},{t:"rotate",a:0},{t:"rotate",a:1},{t:"rotate",a:2},{t:"translate",a:0},{t:"translate",a:1},{t:"translate",a:2},{t:"scale",a:0},{t:"scale",a:1},{t:"scale",a:2},{t:"unknown",a:0},{t:"unknown",a:0},{t:"unknown",a:0},{t:"unknown",a:0},{t:"unknown",a:0},{t:"unknown",a:0},{t:"unknown",a:0}];for(let h=0;h<i.length;){let l=i[h],y=null,p=null,m=null,f=s[l.type_0to9],x=l.boneid<16e3?l.boneid-64:l.boneid-16384;for(;h<i.length;){let C=i[h],A=s[C.type_0to9];if(C.boneid!=l.boneid||A.t!=f.t)break;A.a==0&&(y=C.chunks),A.a==1&&(p=C.chunks),A.a==2&&(m=C.chunks),h++}let d="bone_"+x,a=f.t=="scale"?1:0,o=[],c=[],g=new Ni,v=new lt,E=y?.at(-1)?.time??p?.at(-1)?.time??m?.at(-1)?.time??0,_=0;for(let C=0;C<E;C+=5)c[_++]=y?tn(y,C):a,c[_++]=p?tn(p,C):a,c[_++]=m?tn(m,C):a,o.push(C);let S=new Float32Array(o.map(C=>C*.02));if(f.t=="translate"&&r.push(new kr(`${d}.position`,S,c)),f.t=="scale"){if(x==0)for(let C=0;C<c.length;C+=3)c[C+2]*=-1;r.push(new kr(`${d}.scale`,S,c))}if(f.t=="rotate"){let C=new Float32Array(o.length*4);for(let A=0;A*3<c.length;A++)g.set(c[A*3+0],c[A*3+1],c[A*3+2],"YXZ"),v.setFromEuler(g),v.toArray(C,A*4);r.push(new an(`${d}.quaternion`,S,C))}}return{clip:new hn("anim_"+(Math.random()*1e3|0),void 0,r),framebaseid:n.framebase}}typeof TextEncoder<"u"||require("util").TextEncoder;const ui={i8:{gltype:5120,constr:Int8Array},u8:{gltype:5121,constr:Uint8Array},i16:{gltype:5122,constr:Int16Array},u16:{gltype:5123,constr:Uint16Array},i32:{gltype:5124,constr:Int32Array},u32:{gltype:5124,constr:Uint32Array},f32:{gltype:5126,constr:Float32Array},f64:{gltype:5130,constr:Float64Array},f16:{gltype:5131,constr:Uint16Array}};function sl(t){let e={},n={},r=0,i=4,s=-1;for(let l in t){let y=t[l];if(!y)continue;let p=ui[y.newtype],m=Math.max(4,p.constr.BYTES_PER_ELEMENT);i=Math.max(i,m),r=Math.ceil(r/m)*m,e[l]={offset:r,stride:0,source:y},r+=p.constr.BYTES_PER_ELEMENT*y.vecsize,s==-1&&(s=y.source.length/y.vecsize)}let u=Math.ceil(r/i)*i,h=new Uint8Array(u*s);for(let l in e){let y=e[l],p=ui[y.source.newtype],m=new p.constr(h.buffer),f=u/p.constr.BYTES_PER_ELEMENT|0,x=y.source.vecsize,d=y.offset/p.constr.BYTES_PER_ELEMENT|0,a=y.source.source,o=[],c=[];for(let g=0;g<x;g++)c[g]=o[g]=a[g];for(let g=0;g<s;g++)for(let v=0;v<x;v++){let E=a[g*x+v];m[g*f+d+v]=E,E>c[v]&&(c[v]=E),E<o[v]&&(o[v]=E)}n[l]={byteoffset:y.offset,bytestride:u,gltype:p.gltype,min:o,max:c,name:l,normalize:!1,veclength:y.source.vecsize}}return{buffer:h,attributes:n,bytestride:u,vertexcount:s}}function Tn(t){let e=[];for(let n=0;n<t.bonecount;n++)e.push({xsum:0,ysum:0,zsum:0,weightsum:0});for(let n of t.meshes){let r=n.attributes.boneids,i=n.attributes.boneweights,s=n.attributes.pos,u=n.indices;if(!(!r||!i))for(let h=0;h<u.count;h++){let l=u.array[h];for(let y=0;y<r.itemSize;y++){let p=r.array[l*r.itemSize+y],m=i.array[l*i.itemSize+y],f=e[p];f.xsum+=s.array[s.itemSize*l+0]*m,f.ysum+=s.array[s.itemSize*l+1]*m,f.zsum+=s.array[s.itemSize*l+2]*m,f.weightsum+=m}}}return e}function ci(t){return new Float32Array(t)}function fi(t){let e={};t.pos&&(e.pos={source:t.pos,vecsize:3,newtype:"f32"}),t.normals&&(e.normals={source:t.normals,vecsize:3,newtype:"i8"}),t.color&&(e.color={source:t.color,vecsize:4,newtype:"u8"}),t.texuvs&&(e.texuvs={source:t.texuvs,vecsize:2,newtype:"f32"}),t.skinids&&(e.skinids={source:t.skinids,vecsize:4,newtype:"u16"}),t.skinweights&&(e.skinweights={source:t.skinweights,vecsize:4,newtype:"u8"}),t.boneids&&(e.boneids={source:t.boneids,vecsize:4,newtype:"u8"}),t.boneweights&&(e.boneweights={source:t.boneweights,vecsize:4,newtype:"u8"});let n=sl(e),r={};n.bytestride%4==0&&(r.f32=new Gt(new Float32Array(n.buffer.buffer),n.bytestride/4)),r.u8=new Gt(n.buffer,n.bytestride),r.i8=new Gt(new Int8Array(n.buffer.buffer),n.bytestride),n.bytestride%2==0&&(r.u16=new Gt(new Uint16Array(n.buffer.buffer),n.bytestride/2));let i={};function s(u,h,l,y,p=!1){if(n.attributes[h]){let m=n.attributes[h],f=r[l];if(!f)throw new Error(`Stride mismatch for ${u} type ${l}`);let x=m.byteoffset/(l=="f32"?4:l=="u16"?2:1);i[u]=new hr(f,y,x,p)}}return s("pos","pos","f32",3),s("normals","normals","i8",3,!0),s("color","color","u8",4,!0),s("texuvs","texuvs","f32",2),s("skinids","skinids","u16",4),s("skinweights","skinweights","u8",4,!0),s("boneids","boneids","u8",4),s("boneweights","boneweights","u8",4,!0),i}function hi(t){let e=new Uint8Array(t.length*4),n=new Uint8Array(t.length*4);const r=65535;for(let i=0;i<t.length;i++){let s=t[i];s=s==r?0:s+1,e[i*4]=s,n[i*4]=255}return{boneids:e,boneweights:n}}function di(t,e){if(e instanceof Uint16Array){let n=new Float32Array(t*2);for(let r=0;r<t*2;r++)n[r]=so(e[r]);return n}else return new Float32Array(e)}function pi(t){let e=new Int8Array(t.length);for(let n=0;n<t.length;n+=3){let r=t[n+0],i=t[n+1],s=t[n+2],u=Math.hypot(r,i,s);u==0&&(u=1);let h=127/u;e[n+0]=Math.round(r*h),e[n+1]=Math.round(i*h),e[n+2]=Math.round(s*h)}return e}function ol(t,e){let n=K.models.read(t,e),r=[];if(n.meshes)for(let i of n.meshes){if(i.isHidden)continue;let u=i.indexBuffers.map(o=>new Ye(o,1)),h=ci(i.positionBuffer),l=null,y=null,p=null,m=null,f=null,x=null,d=null;if(i.skin){let o=new Uint16Array(i.vertexCount*4),c=new Uint8Array(i.vertexCount*4),g=i.skin.skinWeightBuffer,v=i.skin.skinBoneBuffer,E=0,_=0;for(let S=0;S<i.vertexCount;S++){let C=255;for(let A=0;A<4;A++){let I=g[_++],B=v[E++],k=I!=0?I:C;if(C-=I,o[S*4+A]=B==65535?0:B,c[S*4+A]=k,I==0)break}}(E!=i.skin.skinWeightCount||_!=i.skin.skinWeightCount)&&console.log("model skin decode failed"),l=o,y=c}if(i.colourBuffer){if(!u[0])throw new Error("need index buf in order to read per-face colors");let o=u[0].array,c=new Uint8Array(i.vertexCount*4),g=i.alphaBuffer;for(let v=0;v<i.faceCount;v++){let[E,_,S]=pr(qt(i.colourBuffer[v]));for(let C=0;C<3;C++){let A=o[v*3+C]*4;c[A+0]=E,c[A+1]=_,c[A+2]=S,g?c[A+3]=g[v]:c[A+3]=255}}p=c}if(i.boneidBuffer){let o=hi(i.boneidBuffer);m=o.boneids,f=o.boneweights}i.uvBuffer&&(x=di(i.vertexCount,i.uvBuffer)),i.normalBuffer&&(d=pi(i.normalBuffer));let a=fi({pos:h,normals:d,color:p,texuvs:x,skinids:l,skinweights:y,boneids:m,boneweights:f,vertexCount:i.vertexCount});r.push({indices:u[0],vertexstart:0,vertexend:a.pos.count,indexLODs:u,materialId:i.materialArgument-1,hasVertexAlpha:!!i.alphaBuffer,needsNormalBlending:!1,attributes:a})}else if(n.meshdata){let i=n.meshdata,s=ci(i.positionBuffer),u=null,h=null,l=null,y=null,p=null,m=null,f=null;if(i.vertexColours){let d=new Uint8Array(i.vertexCount*4),a=i.vertexAlpha;for(let o=0;o<i.vertexColours.length;o++){let[c,g,v]=pr(qt(i.vertexColours[o])),E=a?a[o]:255,_=o*4;d[_+0]=c,d[_+1]=g,d[_+2]=v,d[_+3]=E}l=d}if(i.skin){let d=new Uint16Array(i.vertexCount*4),a=new Uint8Array(i.vertexCount*4);for(let o=0;o<i.skin.length;o++){let c=i.skin[o],g=255;if(c.ids.length!=c.weights.length)throw new Error("unexpected length difference in skin weights/ids");for(let v=0;v<c.ids.length;v++){let E=c.weights[v],_=c.ids[v],S=E!=0?E:g;if(g-=E,d[o*4+v]=_==65535?0:_,a[o*4+v]=S,E==0)break}}u=d,h=a}if(i.boneidBuffer){let d=hi(i.boneidBuffer);y=d.boneids,p=d.boneweights}i.uvBuffer&&(m=di(i.vertexCount,i.uvBuffer)),i.normalBuffer&&(f=pi(i.normalBuffer));let x=fi({pos:s,normals:f,color:l,texuvs:m,skinids:u,skinweights:h,boneids:y,boneweights:p,vertexCount:i.vertexCount});for(let d of i.renders){if(d.isHidden||d.buf.length==0)continue;let a=d.buf;if(a.BYTES_PER_ELEMENT==4){let v=new Uint32Array(a.length);for(let E=0;E<a.length;E++){let _=a[E];v[E]=_>>24&255|_>>8&65280|_<<8&16711680|_<<24&4278190080}a=v}let o=a[0],c=a[0];for(let v=0;v<a.length;v++){let E=a[v];E<o&&(o=E),E>c&&(c=E)}let g=new Ye(a,1);r.push({indices:g,vertexstart:o,vertexend:c+1,indexLODs:[g],materialId:d.materialArgument-1,hasVertexAlpha:!!d.hasVertexAlpha,needsNormalBlending:!1,attributes:x})}}return sa(r)}function sa(t){let e=0,n=0,r=0,i=0;for(let u of t){let h=u.attributes.pos;for(let p=0;p<h.count;p++){let m=h.getY(p);m>e&&(e=m),m<n&&(n=m)}let l=u.attributes.boneids;if(l){for(let p=0;p<l.count;p++)r=Math.max(r,l.getX(p),l.getY(p),l.getZ(p),l.getW(p));r+=2}let y=u.attributes.skinids;if(y){for(let p=0;p<y.count;p++)i=Math.max(i,y.getX(p),y.getY(p),y.getZ(p),y.getW(p));i+=2}}return{maxy:e,miny:n,meshes:t,bonecount:r,skincount:i}}const ll=Object.freeze(Object.defineProperty({__proto__:null,getBoneCenters:Tn,makeModelData:sa,parseOb3Model:ol},Symbol.toStringTag,{value:"Module"}));function ul(t,e){let n=Tn(e),r=new fr;t.add(r);let i=[r],s=[],u=[new rt];for(let p=1;p<e.bonecount;p++){let m=new fr,f=new fr;m.name=`root_${p}`,f.name=`bone_${p}`,m.add(f),s.push(m),i.push(f);let x=new rt,d=n[p];d&&d.weightsum!=0&&(m.position.set(d.xsum/d.weightsum,d.ysum/d.weightsum,d.zsum/d.weightsum),x.setPosition(m.position)),x.invert(),u.push(x)}let h=new Pr(i,u);s.length!=0&&r.add(...s),r.updateMatrixWorld(!0);let l=new rt().copy(r.matrixWorld);return h.calculateInverses(),t.traverse(p=>{if(p instanceof Ur){p.bind(h,l);let m=p.geometry;m.attributes.skinIndex=m.attributes.RA_skinIndex_bone,m.attributes.skinWeight=m.attributes.RA_skinWeight_bone}}),{mixer:new Li(t)}}async function cl(t,e){let n=e[0];if(!n)throw new Error("animation has no frames");let r=await t.engine.getArchiveById(N.frames,n.frameidhi),i=Object.fromEntries(r.map(m=>[m.fileid,K.frames.read(m.buffer,t.engine.rawsource)])),s=0,u=[],h=[];for(let m=0;m<e.length;m++){let f=e[m];i[f.frameidlow]?(u.push(s),s+=f.framelength*.02,h.push(i[f.frameidlow])):console.log(`missing animation frame ${f.frameidlow} in sequence ${f.frameidhi}`)}h.push(h[0]),u.push(s);let l=K.framemaps.read(await t.engine.getFileById(N.framemaps,h[0].probably_framemap_id),t.engine.rawsource),y=new Float32Array(u),p=dl(l,h);return m=>{let f=Tn(m),x=hl(l,p,y,f).map((C,A)=>({id:A,trans:C})),d=y.length,a=[],o=new rt,c=new Be,g=new Be,v=new lt,E=new lt,_=0;for(let C of x){if(C.id==0)continue;if(C.id>=m.bonecount){_++;continue}let A=`root_${C.id}`,I=`bone_${C.id}`,B=new Float32Array(d*3),k=new Float32Array(d*3),T=new Float32Array(d*4),P=new Float32Array(d*4);for(let O=0;O<d;O++)o.fromArray(C.trans,O*16),fl(o,g,v,c,E),g.toArray(k,O*3),v.toArray(T,O*4),c.toArray(B,O*3),E.toArray(P,O*4);a.push(new kr(`${A}.position`,y,k)),a.push(new an(`${A}.quaternion`,y,T)),a.push(new kr(`${A}.scale`,y,B)),a.push(new an(`${I}.quaternion`,y,P))}return _!=0&&console.log("skipped "+_+" bone animations since the model didn't have them"),new hn("anim",void 0,a)}}function fl(t,e,n,r,i){t.decompose(e,n,r),i.identity()}function hl(t,e,n,r){let i=n.length,s=new rt,u=new rt,h=new lt,l=new rt,y=new rt,p=Math.max(...t.data.flatMap(x=>x.data))+1+1,m=[];for(let x=0;x<p;x++){let d=new Float32Array(16*i),a=r[x],o=!a||a.weightsum==0?0:a.xsum/a.weightsum,c=!a||a.weightsum==0?0:a.ysum/a.weightsum,g=!a||a.weightsum==0?0:a.zsum/a.weightsum;for(let v=0;v<i;v++)d[v*16+0]=1,d[v*16+5]=1,d[v*16+10]=1,d[v*16+15]=1,d[v*16+12]=o,d[v*16+13]=c,d[v*16+14]=g;m.push(d)}let f=new Be;for(let x=0;x<i;x++){f.set(0,0,0);let d=x*16;for(let[a,o]of t.data.entries()){let c=e[a];if(o.type==0){f.fromArray(c,x*3);let g=0,v=0,E=0,_=0;for(let S of o.data){let C=r[S+1],A=m[S+1];C&&(g+=A[d+12]*C.weightsum,v+=A[d+13]*C.weightsum,E+=A[d+14]*C.weightsum,_+=C.weightsum)}_!=0&&f.set(f.x+g/_,f.y+v/_,f.z+E/_),l.makeTranslation(-f.x,-f.y,-f.z),y.makeTranslation(f.x,f.y,f.z)}if(o.type==1)for(let g of o.data){let v=m[g+1];v[d+12]+=c[x*3+0],v[d+13]+=c[x*3+1],v[d+14]+=c[x*3+2]}if(o.type==2){h.fromArray(c,x*4),u.makeRotationFromQuaternion(h),u.multiply(l),u.premultiply(y);for(let g of o.data){let v=m[g+1];s.fromArray(v,d),s.premultiply(u),s.toArray(v,d)}}if(o.type==3){u.makeScale(c[x*3+0],c[x*3+1],c[x*3+2]),u.multiply(l),u.premultiply(y);for(let g of o.data){let v=m[g+1];s.fromArray(v,d),s.premultiply(u),s.toArray(v,d)}}}}return m}function dl(t,e){let n=e.map(i=>({flags:i.flags,animdata:i.animdata,dataindex:0,baseid:i.probably_framemap_id,stream:new at(ke.from(i.animdata))})),r=[];for(let[i,s]of t.data.entries()){let u=[3,3,4,3,3,4,3,3,3,3,3][s.type],h=new Float32Array(u*n.length),l=0,y=new lt,p=new Ni;for(let m of n){let f=m?.flags[i]??0;if(f&-8&&console.log("unexpexted frame data flag "+(f&-8)),s.type==0&&(h[l++]=f&1?m.stream.readShortSmartBias():0,h[l++]=f&2?m.stream.readShortSmartBias():0,h[l++]=f&4?m.stream.readShortSmartBias():0,f&7&&console.log("type 0 data",f,[...h.slice(l-3,l)])),s.type==1&&(h[l++]=f&1?m.stream.readShortSmartBias():0,h[l++]=-(f&2?m.stream.readShortSmartBias():0),h[l++]=f&4?m.stream.readShortSmartBias():0),s.type==2){let x=0;if(f&1){let o=m.stream.readShortSmartBias(),c=m.stream.readShortSmartBias();x=Math.atan2(o,c)}let d=0;if(f&2){let o=m.stream.readShortSmartBias(),c=m.stream.readShortSmartBias();d=Math.atan2(o,c)}let a=0;if(f&4){let o=m.stream.readShortSmartBias(),c=m.stream.readShortSmartBias();a=Math.atan2(o,c)}p.set(x,d,a,"YXZ"),y.setFromEuler(p),y.toArray(h,l),l+=4}s.type==3&&(h[l++]=(f&1?m.stream.readShortSmartBias():128)/128,h[l++]=(f&2?m.stream.readShortSmartBias():128)/128,h[l++]=(f&4?m.stream.readShortSmartBias():128)/128),(s.type==5||s.type>=4)&&(h[l++]=f&1?m.stream.readUShortSmart():0,h[l++]=f&2?m.stream.readUShortSmart():0,h[l++]=f&4?m.stream.readUShortSmart():0)}r.push(h)}return n.forEach((i,s)=>{let u=i.stream.bytesLeft();if(u!=0){console.warn("ints left in anim decode: "+u,s);let h={};t.data.map((l,y)=>{h[l.type]=(h[l.type]??0)+(i.flags[y]??0).toString(2).replaceAll("0","").length}),console.log(h)}}),r}var pl=Object.defineProperty,ml=Object.getOwnPropertyDescriptor,gl=(t,e,n,r)=>{for(var i=ml(e,n),s=t.length-1,u;s>=0;s--)(u=t[s])&&(i=u(e,n,i)||i);return i&&pl(e,n,i),i};class oa extends ji{model;loaded=null;cache;rootnode=new Ri;nullAnimPromise={clip:null,prom:new uo};anims={"-1":this.nullAnimPromise};mountedanim=null;mixer=new Li(this.rootnode);renderscene=null;targetAnimId=-1;skeletontype="none";skeletonHelper=null;cleanup(){this.listeners={},this.renderscene?.removeSceneElement(this),this.skeletonHelper?.removeFromParent(),this.renderscene=null}getSceneElements(){return{modelnode:this.rootnode,updateAnimation:this.updateAnimation}}addToScene(e){this.renderscene=e,e.addSceneElement(this)}onModelLoaded(){this.emit("loaded",void 0),this.renderscene?.forceFrame(),this.renderscene?.setCameraLimits()}updateAnimation(e,n){this.mixer.update(e),this.loaded?.matUvAnims.forEach(r=>r.tex.offset.copy(r.v).multiplyScalar(n))}constructor(e,n,r=""){super(),this.cache=e,this.model=(async()=>{let i=await Promise.all(n.map(async m=>{let f=await e.getModelData(m.modelid);return{...f,meshes:f.meshes.map(d=>Dn(d,m.mods))}})),s=aa(i);ia(s);let u=await Cn(this.cache,s);u.name=r;let h=[];for(let m=0;m<Math.max(s.bonecount,s.skincount);m++)h.push(u);let l=new Pr(h),y=[];u.traverse(m=>{if(m instanceof Ur&&m.bind(l),m instanceof ir&&m.material instanceof Sa){let f=m.material.userData.gltfExtensions?.RA_materials_uvanim;if(f){let x=m.material,d=new Da(f.uvAnim[0],f.uvAnim[1]);x.map&&y.push({tex:x.map,v:d}),x.normalMap&&y.push({tex:x.normalMap,v:d}),x.emissiveMap&&y.push({tex:x.emissiveMap,v:d}),x.metalnessMap&&y.push({tex:x.metalnessMap,v:d}),x.roughnessMap&&y.push({tex:x.roughnessMap,v:d})}}});let p=new hn(void 0,void 0,[]);return this.nullAnimPromise.clip=p,this.nullAnimPromise.prom.done(p),this.rootnode.add(u),this.rootnode.scale.set(1/512,1/512,-1/512),this.loaded={mesh:u,modeldata:s,nullAnim:p,matUvAnims:y},this.targetAnimId==-1&&this.setAnimation(-1),this.onModelLoaded(),this.loaded})()}mountAnim(e){if(!this.loaded)throw new Error("attempting to mount anim before model is loaded");if(this.mountedanim==e||this.loaded.modeldata.bonecount==0&&this.loaded.modeldata.skincount==0)return;let n=this.loaded.mesh;n.animations.indexOf(e)==-1&&n.animations.push(e),this.mixer.stopAllAction(),this.mixer.clipAction(e,n).play(),this.mountedanim=e}loadAnimation(e){return this.anims[e]?this.anims[e]:(this.anims[e]={clip:null,prom:(async()=>{let n=await this.cache.engine.getFileById(N.sequences,e),r=K.sequences.read(n,this.cache.engine.rawsource),i;if(r.skeletal_animation){let s=await al(this.cache,r.skeletal_animation);i=s.clip;let u=this.loaded??await this.model;if(this.skeletontype!="full"){if(this.skeletontype!="none")throw new Error("wrong skeleton type already mounted to model");await il(u.mesh,this.cache,s.framebaseid),this.skeletontype="full"}}else if(r.frames){let s=await cl(this.cache,r.frames),u=this.loaded??await this.model;if(this.skeletontype!="baked"){if(this.skeletontype!="none")throw new Error("wrong skeleton type already mounted to model");ul(u.mesh,u.modeldata),this.skeletontype="baked"}i=s(u.modeldata)}else throw new Error("animation has no frames");return this.anims[e]={clip:i,prom:Promise.resolve(i)},this.loaded?.modeldata||await this.model,this.anims[e].clip=i,i})()},this.anims[e])}async setAnimation(e){this.targetAnimId=e;const n=this.loadAnimation(e);return this.mountAnim(n.clip??await n.prom)}}gl([tl],oa.prototype,"updateAnimation");const xl=-2147483643;class vl extends ji{source;sceneCache=null;renderer=null;comps=new Map;highlightstack=[];interpreterprom=null;touchedComps=new Set;runOnloadScripts=!1;constructor(e){super(),this.source=e}toggleHighLightComp(e,n){let r=this.comps.get(e)?.element;r&&(n?(this.highlightstack.length!=0&&this.highlightstack.at(-1).classList.remove("rs-component--highlight"),r.classList.add("rs-component--highlight"),this.highlightstack.push(r)):(r.classList.remove("rs-component--highlight"),this.highlightstack.pop()!=r&&console.log("wrong unlightlight order"),this.highlightstack.length!=0&&this.highlightstack.at(-1).classList.add("rs-component--highlight")))}async runClientScriptCallback(e,n){if(n.length==0)return;let r=await(this.interpreterprom??=Gr(this.source).then(i=>new Ra(i,this)));if(typeof n[0]!="number")throw new Error("expected callback script id but got string");r.reset(),r.pushlist(n.slice(1)),r.activecompid=e,await r.callscriptid(n[0]),await r.runToEnd(),this.updateInvalidatedComps()}updateInvalidatedComps(){this.touchedComps.forEach(e=>e.updateDom()),this.touchedComps.clear()}}function yl(){let t="";return t+=`html{color:white;font-size:12px;}
`,t+=`.rs-component{position:absolute;pointer-events:none;}
`,t+=`.rs-component--highlight{outline:1px solid red;}
`,t+=`.rs-image{width:100%;height:100%;}
`,t+=".rs-image--cover{background-size:100% 100%; background-repeat:no-repeat;}",t+=".rs-interface-container{position:absolute;top:0px;left:0px;right:0px;bottom:0px;display:flex;align-items:center;justify-content:center;}",t+=".rs-interface-container-sub{position:relative;outline:1px solid green;}",t+=".rs-model{position:absolute;top:0px;left:0px;width:100%;height:100%;}",t+=".rs-componentmeta{}",t+=".rs-componentmeta--active{outline:1px solid red;}",t+=".rs-componentmeta-children{padding-left:15px;}",t}function bl(t){let e=r=>t[r];return{getcomp:e,click:r=>{console.log(e(+r.target.dataset.compid)),r.stopPropagation()}}}async function wl(t,e){let n=await t.source.getArchiveById(N.interfaces,e),r=new Map;for(let h of n)try{let l=e<<16|h.fileid;if(t.comps.has(l))throw new Error("ui render context already had comp with same id");let y=new la(t,K.interfaces.read(h.buffer,t.source),l);r.set(h.fileid,y),t.comps.set(l,y)}catch{console.log(`failed to parse interface ${e}:${h.fileid}`)}for(let[h,l]of r)if(l.data.parentid!=65535){let y=r.get(l.data.parentid);if(!y){console.log("missing parent");continue}y.children.push(l)}let i=[];for(let h of r.values())(h.data.parentid==65535||!r.has(h.data.parentid))&&i.push(h);return{comps:r,rootcomps:i,basewidth:520,baseheight:340,id:e}}async function El(t,e){let{comps:n,rootcomps:r,basewidth:i,baseheight:s}=await wl(t,e),u="";for(let l of r)u+=await l.toHtml(t);let h=`<!DOCTYPE html>
`;return h+=`<html>
`,h+=`<head>
`,h+=`<style>
`,h+=yl(),h+=`</style>
`,h+=`<script>
`,h+=`var mod=(${bl+""})(${JSON.stringify(Object.fromEntries([...n].map(l=>[l[0],l[1].data])))});
`,h+=`<\/script>
`,h+=`</head>
`,h+=`<body>
`,h+=`<div class="rs-interface-container">
`,h+=`<div style="width:${i}px; height:${s}px;">
`,h+=u,h+=`</div>
`,h+=`</div>
`,h+=`</body>
`,h+=`</html>
`,h}function Tr(t){return`#${(t&16777215).toString(16).padStart(6,"0")}`}function _l(t){let e="",r="0px",i="0px";return t.aspectxtype==0?e+=`left:${t.baseposx}px;`:t.aspectxtype==1?(e+=`left:50%;margin-left:${t.baseposx}px;`,r="-50%"):t.aspectxtype==2?e+=`right:${t.baseposx}px;`:t.aspectxtype==3?e+=`left:${t.baseposx*100/16384}%;`:t.aspectxtype==4?(e+=`left:${50+t.baseposx*100/16384}%;`,r="-50%"):t.aspectxtype==5&&(e+=`right:${t.baseposx*100/16384}%;`),t.aspectytype==0?e+=`top:${t.baseposy}px;`:t.aspectytype==1?(e+=`top:50%;margin-top:${t.baseposy}px;`,i="-50%"):t.aspectytype==2?e+=`bottom:${t.baseposy}px;`:t.aspectytype==3?e+=`top:${t.baseposy*100/16384};`:t.aspectytype==4?(e+=`top:${50+t.baseposy*100/16384}%;`,i="-50%"):t.aspectytype==5&&(e+=`bottom:${t.baseposy*100/16384}%;`),(r!="0px"||i!="0px")&&(e+=`translate:${r} ${i};`),e}function Sl(t){let e="";return t.aspectwidthtype==0?e+=`width:${t.basewidth}px;`:t.aspectwidthtype==1?e+=`width:calc(100% - ${t.basewidth}px);`:t.aspectwidthtype==2&&(e+=`width:${t.basewidth*100/16384}%;`),t.aspectheighttype==0?e+=`height:${t.baseheight}px;`:t.aspectheighttype==1?e+=`height:calc(100% - ${t.baseheight}px);`:t.aspectheighttype==2&&(e+=`height:${t.baseheight*100/16384}%;`),e}function Dl(t,e,n){let r={rotx:n.rotate_x,roty:n.rotate_y,rotz:n.rotate_z,translatex:n.translate_x/4,translatey:n.translate_y/4,zoom:n.zoom*8},i=document.createElement("canvas");i.classList.add("rs-model");let s=t.makeUIRenderer(),u=null,h=d=>{u=new oa(e,[{modelid:d,mods:{}}],`model_${d}`),s.setmodel(u.getSceneElements(),0),u.model.then(l)},l=()=>{let d=i.clientWidth,a=i.clientHeight;if(d==0||a==0)return;let o=s.takePicture(d,a,r);i.width=o.width,i.height=o.height,i.getContext("2d").putImageData(o,0,0),p&&!y&&requestAnimationFrame(l)},y=0,p=!1,m=d=>{(d==32767||d==65535)&&(d=-1),u?.setAnimation(d),p=d!=-1,l()},f=new ResizeObserver(l);f.observe(i);let x=()=>{cancelAnimationFrame(y),y=0,f.disconnect(),s.dispose(),i.remove()};return i.render=l,{dispose:x,canvas:i,setmodel:h,setanim:m}}function mi(t){let e="";return(t.hflip||t.vflip)&&(e+=`scale:${t.hflip?-1:1} ${t.vflip?-1:1};`),t.rotation!=0&&(e+=`rotate:${(-t.rotation/65536*360).toFixed(2)}deg;`),(t.color&16777215)!=16777215&&(e+=`background-color:${Tr(t.color)};background-blend-mode:multiply;`),e}async function gi(t,e){let n="none",r=e&16777215;if(r!=16777215){let i=e>>24;i!=0&&console.log("sprite flags",i);let s=await t.source.getFileById(N.sprites,r),u=Ji(Lt(s)[0]);n=`url('${await $i(u)}')`}return{imgcss:n,spriteid:e}}class la{ctx;data;parent=null;children=[];clientChildren=[];compid;modelrenderer=null;spriteChild=null;textChild=null;loadingSprite=-1;element=null;api;constructor(e,n,r){this.ctx=e,this.data=n,this.compid=r,this.api=new Fn(this)}isCompType(e){return!(e=="container"&&!this.data.containerdata||e=="model"&&!this.data.modeldata||e=="sprite"&&!this.data.spritedata||e=="text"&&!this.data.textdata||e=="figure"&&!this.data.figuredata)}async toHtml(e){let{style:n,title:r}=this.getStyle(),i="";for(let u of this.children)i+=await u.toHtml(e);if(this.data.textdata&&(i+=ni(this.data.textdata.text)),this.data.modeldata){let u=this.data.modeldata.modelid==32767||this.data.modeldata.modelid==65535;n+="background:rgba(0,255,0,0.5);outline:blue;",i+=u?"placeholder":this.data.modeldata.modelid}if(this.data.spritedata){let u=mi(this.data.spritedata),h=await gi(e,this.data.spritedata.spriteid);u+=`background-image:${h.imgcss};`,i+=`<div class="rs-image${this.data.spritedata.tiling?"":" rs-image--cover"}" style="${jt(u)}"></div>`}let s="";return s+=`<div class="rs-component" data-compid=${this.compid} style="${jt(n)}" onclick="mod.click(event)" title="${jt(r)}">
`,s+=i,s+=`</div>
`,s}dispose(){this.ctx.comps.delete(this.compid),this.modelrenderer?.dispose(),this.element?.remove(),this.children.forEach(e=>e.dispose()),this.clientChildren.forEach(e=>e.dispose())}initDom(){return this.element??=document.createElement("div"),this.updateDom(),this.children.forEach(e=>{this.element.appendChild(e.initDom())}),this.clientChildren.forEach(e=>{this.element.appendChild(e.initDom())}),this.element.classList.add("rs-component"),this.element.ui=this.data,this.element.compid=this.compid,this.element}updateDom(){if(!this.element)throw new Error("element not set");let{style:e,title:n}=this.getStyle();if(this.data.modeldata){let r=this.data.modeldata.modelid==32767||this.data.modeldata.modelid==65535;!r&&this.ctx.renderer&&this.ctx.sceneCache?(this.modelrenderer??=Dl(this.ctx.renderer,this.ctx.sceneCache,this.data.modeldata.positiondata),this.modelrenderer.setmodel(this.data.modeldata.modelid),this.modelrenderer.setanim(this.data.modeldata.animid),this.element.appendChild(this.modelrenderer.canvas)):this.modelrenderer&&(this.modelrenderer.dispose(),this.modelrenderer=null,e+="background:rgba(0,255,0,0.5);outline:blue;",this.element.innerText=r?"placeholder":"")}this.data.textdata?(this.textChild||(this.textChild=document.createElement("span"),this.element.appendChild(this.textChild)),this.textChild.innerHTML=ni(this.data.textdata.text)):this.textChild&&(this.textChild.remove(),this.textChild=null),this.data.spritedata?this.loadingSprite!=this.data.spritedata.spriteid&&(this.spriteChild||(this.spriteChild=document.createElement("div"),this.element.appendChild(this.spriteChild),this.spriteChild.classList.add("rs-image")),this.spriteChild.style.cssText=mi(this.data.spritedata),this.spriteChild.classList.toggle("rs-image--cover",!this.data.spritedata.tiling),gi(this.ctx,this.data.spritedata.spriteid).then(({imgcss:r,spriteid:i})=>{this.spriteChild&&i==this.data.spritedata?.spriteid&&(this.spriteChild.style.backgroundImage=r)}),this.loadingSprite=this.data.spritedata.spriteid):this.spriteChild&&(this.spriteChild.remove(),this.spriteChild=null),this.element.style.cssText=e,this.element.title=n}getStyle(){let e="";e+=_l(this.data),e+=Sl(this.data);let n=!1;return this.data.figuredata?this.data.figuredata.filled?(e+=`background:${Tr(this.data.figuredata.color)};`,n=!0):e+=`border:1px solid ${Tr(this.data.figuredata.color)};`:this.data.textdata?(n=!0,e+="display:flex;",e+=`color:${Tr(this.data.textdata.color)};`,this.data.textdata.alignhor==1?(e+="justify-content:center;",e+="text-align:center;"):this.data.textdata.alignhor&&(e+="justify-content:right;",e+="text-align:right;"),this.data.textdata.alignver==1?e+="align-items:center;":this.data.textdata.alignver&&(e+="align-items:bottom;"),n=!0):this.data.containerdata||this.data.spritedata||(this.data.modeldata||(e+="background:rgba(0,128,128,0.5);outline:red;"),n=!0),n&&(e+="pointer-events:initial;"),{title:this.data.rightclickopts.filter(i=>i).join(`
`),style:e}}}class Fn{data;comp;constructor(e){this.data=e?.data??null,this.comp=e}changed(){this.comp?.ctx.touchedComps.add(this.comp)}findChild(e){return e==xl?this:this.comp?.clientChildren.find(n=>n.compid==e)?.api}getNextChildId(){return this.comp?this.comp.clientChildren.reduce((n,r)=>Math.max(n,r.compid),-1)+1:0}createChild(e,n){let r={type:n,aspectxtype:0,aspectytype:0,aspectwidthtype:0,aspectheighttype:0,basewidth:0,baseheight:0,baseposx:0,baseposy:0,bit4data:0,containerdata:null,spritedata:null,modeldata:null,figuredata:null,textdata:null,linedata:null,contenttype:-1,cursor:-1,hidden:0,menucounts:0,name:null,name2:"",optmask:0,optmask1data_bit40:null,parentid:this.comp?.compid??-1,rightclickcursors:[],rightclickopts:[],scripts:{},unkdata:null,unk10data:null,unk11data:null,unk12data:null,unk15data:null,unk16data:null,unk2:0,unk3:[],unk4:0,unk5:0,unk6:0,unkdatadata:null,unkffff:null,unkpre3:null,unkprepre3:null,unkstring1:null,unkstuff123:"",unk13data:null,version:7};n==0?r.containerdata={layerwidth:0,layerheight:0,disablehover:null,layerheightextra:null,v6unk1:null,v6unk2:null}:n==3?r.figuredata={color:0,filled:0,trans:0}:n==4?r.textdata={alignhor:0,alignver:0,color:0,fontid:0,multiline:null,shadow:!1,text:"",trans:0,unk1:0,unk2:0}:n==5?r.spritedata={spriteid:-1,aspectheightdata:0,aspectwidthdata:0,borderthickness:0,clickmask:null,color:16777215,tiling:0,hflip:!1,vflip:!1,transparency:0,rotation:0,unk2:0,v6unk:0}:n==6?r.modeldata={modelid:-1,animid:-1,aspectheightdata:0,aspectwidthdata:0,mode:0,positiondata:{rotate_x:0,rotate_y:0,rotate_z:0,translate_x:0,translate_y:0,unkextra:null,zoom:0},unkdata:null}:console.log(`creating unknown cc type, type=${n}, id=${e}`);let i;if(this.comp){let s=new la(this.comp.ctx,r,e);this.comp.clientChildren.push(s),this.changed(),s.api.changed(),this.comp?.element&&this.comp.initDom(),i=s.api}else i=new Fn(null);return i}setSize(e,n,r,i){this.data&&(this.data.basewidth=e,this.data.baseheight=n,this.data.aspectwidthtype=r,this.data.aspectheighttype=i),this.changed()}setPosition(e,n,r,i){this.data&&(this.data.baseposx=e,this.data.baseposy=n,this.data.aspectxtype=r,this.data.aspectytype=i),this.changed()}setHide(e){this.data&&(this.data.hidden=e)}setWidth(e){this.data&&(this.data.basewidth=e)}setHeight(e){this.data&&(this.data.basewidth=e)}setX(e){this.data&&(this.data.baseposx=e)}setY(e){this.data&&(this.data.baseposy=e)}getHide(){return this.data?.hidden??0}getWidth(){return this.data?.basewidth??0}getHeight(){return this.data?.baseheight??0}getX(){return this.data?.baseposx??0}getY(){return this.data?.baseposy??0}setOp(e,n){console.log(`setop ${this.comp?.compid??-1} ${e} ${n}`)}getOp(e){return this.data?.rightclickopts[e]??""}setText(e){this.data?.textdata&&(this.data.textdata.text=e)}getText(){return this.data?.textdata?.text??""}setTextAlign(e,n,r){this.data?.textdata&&(this.data.textdata.alignhor=r,this.data.textdata.alignver=n,this.data.textdata.multiline=e|0)}getTextAlign(){return[this.data?.textdata?.alignhor??0,this.data?.textdata?.alignver??0,this.data?.textdata?.multiline??0]}getGraphic(){return this.data?.spritedata?.spriteid??-1}getHFlip(){return this.data?.spritedata?.hflip??!1}getVFlip(){return this.data?.spritedata?.vflip??!1}getTiling(){return this.data?.spritedata?.tiling??0}getRotation(){return this.data?.spritedata?.rotation??0}setGraphic(e){this.data?.spritedata&&(this.data.spritedata.spriteid=e),this.changed()}setHFlip(e){this.data?.spritedata&&(this.data.spritedata.hflip=e),this.changed()}setVFlip(e){this.data?.spritedata&&(this.data.spritedata.vflip=e),this.changed()}setTiling(e){this.data?.spritedata&&(this.data.spritedata.tiling=e),this.changed()}setRotation(e){this.data?.spritedata&&(this.data.spritedata.rotation=e),this.changed()}setModel(e){this.data?.modeldata&&(this.data.modeldata.modelid=e),this.changed()}getModel(){return this.data?.modeldata?.modelid??-1}getTrans(){return this.data?.figuredata?.trans??0}setTrans(e){this.data?.figuredata&&(this.data.figuredata.trans=e),this.changed()}getFilled(){return this.data?.figuredata?.filled??0}setFilled(e){this.data?.figuredata&&(this.data.figuredata.filled=e),this.changed()}getColor(){return this.data?.figuredata?.color??0}setColor(e){this.data?.figuredata&&(this.data.figuredata.color=e),this.changed()}}async function ua(t,e,n){let r=K.fontmetrics.read(e,t);if(!r.sprite)throw new Error("fontmetrics missing sprite data");let i=await t.getFileById(N.sprites,r.sprite.sourceid),s=Lt(i);if(s.length!=1)throw new Error("fontmetrics sprite did not contain exactly 1 image");let u=s[0];if(u.fullwidth!=r.sprite.sheetwidth||u.fullheight!=r.sprite.sheetheight)throw new Error("fontmetrics sprite image dimensions do not match metadata");let h={fontid:n,spriteid:r.sprite.sourceid,characters:[],median:r.sprite.median,baseline:r.sprite.baseline,maxascent:r.sprite.maxascent,maxdescent:r.sprite.maxdescent,scale:r.sprite.scale,sheethash:Mr(u.img),sheetwidth:r.sprite.sheetwidth,sheetheight:r.sprite.sheetheight,sheet:""};for(let l=0;l<r.sprite.positions.length;l++){let y=r.sprite.positions[l],p=r.sprite.chars[l];if(p.width===0||p.height===0){h.characters.push(null);continue}let m=bo(u.img,{x:y.x,y:y.y,width:p.width,height:p.height});h.characters.push({chr:String.fromCharCode(l),charcode:l,x:y.x,y:y.y,width:p.width,height:p.height,bearingy:p.bearingy,hash:Mr(m)})}return h}async function xr(t,e,n){if(e.major!=n.major)throw new Error("range must span one major");let r=[];if(t.getBuildNr()<=dt){let i=0;for(let s=e.minor;s<=n.minor&&!(i++>1e3);s++)try{let u=[];u=await t.getArchiveById(e.major,s);let h={major:e.major,minor:s,crc:0,name:null,subindexcount:u.length,subindices:u.map(l=>l.fileid),subnames:u.map(l=>l.fileid),version:0};for(let l of u)l.fileid>=e.subid&&l.fileid<=n.subid&&r.push({index:h,subindex:l.fileid})}catch{}}else{let i=await t.getCacheIndex(e.major);for(let s of i)if(s&&s.minor>=e.minor&&s.minor<=n.minor)for(let u=0;u<s.subindices.length;u++){let h=s.subindices[u];s.minor==e.minor&&h<e.subid||s.minor==n.minor&&h>n.subid||r.push({index:s,subindex:u})}}return r}const st={prepareDump(){},prepareWrite(){},write(t){throw new Error("write not supported")},combineSubs(t){throw new Error("batch output mode not supported")}};function xi(t){return{major:N.mapsquares,minor:void 0,logicalDimensions:2,usesArchieves:!1,fileToLogical(e,n,r,i){return[255,r]},logicalToFile(e,n){throw new Error("not implemented")},async logicalRangeToFiles(e,n,r){let i=await e.getCacheIndex(N.mapsquares),s=[];for(let u=n[0];u<=Math.min(r[0],100);u++)for(let h=n[1];h<=Math.min(r[1],200);h++){let l=Ft(`${t}${u}_${h}`,e.getBuildNr()<=dt),y=i.find(p=>p.name==l);y&&s.push({index:y,subindex:0})}return s}}}function wr(t){const e=N.mapsquares,n=128;return{major:e,minor:void 0,logicalDimensions:2,usesArchieves:!0,fileToLogical(r,i,s,u){return[s%n,Math.floor(s/n)]},logicalToFile(r,i){return{major:e,minor:i[0]+i[1]*n,subid:t}},async logicalRangeToFiles(r,i,s){let u=await r.getCacheIndex(e),h=[];for(let l of u){if(!l)continue;let y=l.minor%n,p=Math.floor(l.minor/n);if(y>=i[0]&&y<=s[0]&&p>=i[1]&&p<=s[1])for(let m=0;m<l.subindices.length;m++)l.subindices[m]==t&&h.push({index:l,subindex:m})}return h}}}function Ge(t,e){return{major:t,minor:e,logicalDimensions:1,usesArchieves:!0,fileToLogical(n,r,i,s){return[s]},logicalToFile(n,r){return{major:t,minor:e,subid:r[0]}},async logicalRangeToFiles(n,r,i){return xr(n,{major:t,minor:e,subid:r[0]},{major:t,minor:e,subid:i[0]})}}}function vt(t){return{major:t,minor:void 0,logicalDimensions:1,usesArchieves:!0,fileToLogical(e,n,r,i){return[fo(n,r,i)]},logicalToFile(e,n){return Dr(t,n[0],e.getBuildNr())},async logicalRangeToFiles(e,n,r){let i=Dr(t,n[0],e.getBuildNr()),s=Dr(t,r[0],e.getBuildNr());return xr(e,i,s)}}}function ca(){return{major:void 0,minor:void 0,logicalDimensions:3,usesArchieves:!0,fileToLogical(t,e,n,r){return[e,n,r]},logicalToFile(t,e){return{major:e[0],minor:e[1],subid:e[2]}},async logicalRangeToFiles(t,e,n){if(e[0]!=n[0])throw new Error("can only do one major at a time");let r=e[0];return xr(t,{major:r,minor:e[1],subid:e[2]},{major:r,minor:n[1],subid:n[2]})}}}function nt(t){return{major:t,minor:void 0,logicalDimensions:1,usesArchieves:!1,fileToLogical(e,n,r,i){if(i!=0)throw new Error("nonzero subfile in noarch index");return[r]},logicalToFile(e,n){return{major:t,minor:n[0],subid:0}},async logicalRangeToFiles(e,n,r){return xr(e,{major:t,minor:n[0],subid:0},{major:t,minor:r[0],subid:0})}}}function sr(t){return{major:t,minor:void 0,logicalDimensions:2,usesArchieves:!0,fileToLogical(e,n,r,i){return[r,i]},logicalToFile(e,n){return{major:t,minor:n[0],subid:n[1]}},async logicalRangeToFiles(e,n,r){return xr(e,{major:t,minor:n[0],subid:n[1]},{major:t,minor:r[0],subid:r[1]})}}}function vi(t,e){return{...t,async logicalRangeToFiles(n,r,i){return(await t.logicalRangeToFiles(n,r,i)).filter(u=>!e.some(h=>h.major==u.index.major&&h.minor==u.index.minor))}}}function Al(){return{major:N.index,minor:void 0,logicalDimensions:1,usesArchieves:!1,fileToLogical(t,e,n,r){return[n]},logicalToFile(t,e){return{major:N.index,minor:e[0],subid:0}},async logicalRangeToFiles(t,e,n){return(await t.getCacheIndex(N.index)).filter(i=>i&&i.minor>=e[0]&&i.minor<=n[0]).map(i=>({index:i,subindex:0}))}}}function Cl(){return{major:N.index,minor:255,logicalDimensions:0,usesArchieves:!1,fileToLogical(t,e,n,r){return[]},logicalToFile(t,e){return{major:N.index,minor:255,subid:0}},async logicalRangeToFiles(t,e,n){return[{index:{major:255,minor:255,crc:0,size:0,version:0,name:null,subindexcount:1,subindices:[0],subnames:null},subindex:0}]}}}function Tl(t,e,n,r){let i=s=>{let u="",h="";return{...e,ext:"json",parser:t,async prepareDump(l,y){await r?.(y),await n?.(y);let p=Object.entries(Kl).find(f=>f[1]==i);if(!p)throw new Error;let m=t.parser.getJsonSchema();if(s.batched=="true"){let f={type:"object",properties:{files:{type:"array",items:m}}},x=`.schema-${p[0]}_batch.json`;l.writeFile(x,Ar(f)),h=x}else{let f=`.schema-${p[0]}.json`;l.writeFile(f,Ar(m)),u=f}},prepareWrite(l){return r?.(l)},read(l,y,p){let m=t.read(l,p,{keepbuffers:s.keepbuffers});return s.batched?m.$fileid=y.length==1?y[0]:y:m.$schema=u,Ar(m)},write(l,y,p){return t.write(JSON.parse(l.toString("utf8")),p.getDecodeArgs())},combineSubs(l){return`{"$schema":"${h}","files":[

${l.join(`
,

`)}]}`},description:"View the JSON representation of a file",flagtemplate:{keepbuffers:{text:"Keep binary buffers (can be very large)",type:"boolean"}}}};return i}const Fl=()=>({...ca(),ext:"bin",prepareDump(){},prepareWrite(){},read(t){return t},write(t){return t},combineSubs(t){return ke.concat(t)},description:"Outputs the raw files as they are in the cache"}),kl=()=>({ext:"ogg",major:N.music,minor:void 0,logicalDimensions:1,usesArchieves:!1,fileToLogical(t,e,n,r){return[n]},logicalToFile(t,e){return{major:N.music,minor:e[0],subid:0}},async logicalRangeToFiles(t,e,n){let r=await t.getFileById(N.enums,1351),i=K.enums.read(r,t),s=await t.getCacheIndex(N.music);return i.intArrayValue2.values.filter(u=>u[1]>=e[0]&&u[1]<=n[0]).sort((u,h)=>u[1]-h[1]).filter((u,h,l)=>h==0||l[h-1][1]!=u[1]).map(u=>({index:s[u[1]],subindex:0}))},...st,read(t,e,n){return bn(n,N.music,e[0],t,!0)},description:"Stitches child music fragments onto header fragments, only a small number of music fragments are header fragments, ids that lead to child fragments are ignored."}),yi=(t,e)=>()=>({ext:"ogg",...nt(t),...st,read(n,r,i){return bn(i,t,r[0],n,e)},description:"Extracts sound files from cache"}),Il=()=>({ext:"html",...nt(N.cutscenes),...st,async read(t,e,n){return(await Go(n,t)).doc},description:"Decodes and assembles 2d vector cutscenes (first added in 2023). These cutscenes are saved in cache without image compression so take a while to decode. Sounds effects might be missing if you use a local game cache since the game normally only downloads them on demand."}),Bl=()=>({ext:"html",major:N.interfaces,minor:void 0,logicalDimensions:1,usesArchieves:!0,fileToLogical(t,e,n,r){if(r!=0)throw new Error("subfile 0 expected");return[n]},logicalToFile(t,e){return{major:N.interfaces,minor:e[0],subid:0}},async logicalRangeToFiles(t,e,n){return(await t.getCacheIndex(N.interfaces)).filter(i=>i&&i.minor>=e[0]&&i.minor<=n[0]).map(i=>({index:i,subindex:0}))},...st,async read(t,e,n){return await El(new vl(n),e[0])},description:"Extracts an interface and converts the template to a html file. Model and scripts will be missing and therefore the result might be incomplete."}),Ml=()=>({ext:"ui.json",major:N.interfaces,minor:void 0,logicalDimensions:1,usesArchieves:!0,fileToLogical(t,e,n,r){if(r!=0)throw new Error("subfile 0 expected");return[n]},logicalToFile(t,e){return{major:N.interfaces,minor:e[0],subid:0}},async logicalRangeToFiles(t,e,n){return(await t.getCacheIndex(N.interfaces)).filter(i=>i&&i.minor>=e[0]&&i.minor<=n[0]).map(i=>({index:i,subindex:0}))},...st,async read(t,e,n){return JSON.stringify({id:e[0]})},description:"Doesn't extract anything but invokes the built-in RSMV interface viewer."}),Nl=()=>({ext:"font.json",major:N.fontmetrics,minor:void 0,logicalDimensions:1,usesArchieves:!1,fileToLogical(t,e,n,r){if(r!=0)throw new Error("subfile 0 expected");return[n]},logicalToFile(t,e){return{major:N.fontmetrics,minor:e[0],subid:0}},async logicalRangeToFiles(t,e,n){return(await t.getCacheIndex(N.fontmetrics)).filter(i=>i&&i.minor>=e[0]&&i.minor<=n[0]).map(i=>({index:i,subindex:0}))},...st,async read(t,e,n){return JSON.stringify(await ua(n,t,e[0]))},description:"Opens the built-in font viewer. Does not support newer vector fonts"}),Ll=t=>({ext:"ts",...nt(N.clientscript),...st,async prepareDump(e,n){let r=await Gr(n);e.writeFile("tsconfig.json",JSON.stringify({compilerOptions:{lib:[],target:"ESNext"}},void 0,"	")),e.writeFile("opcodes.d.ts",Na(r)),e.writeFile("clientvars.d.ts",La(r))},read(e,n,r){return Ma(r,e,n[0],t.cs2relativecomps=="true",t.cs2notypes=="true",t.cs2intcasts=="true")},async write(e,n,r){let i=await Ba(r,e.toString("utf8"));return K.clientscript.write(i,r.getDecodeArgs())},description:"Extracts clientscript VM code (cs2) and converts it to something that is typescript-compatible.",flagtemplate:{cs2relativecomps:{text:"Hide subcomponent ids (can't be compiled, but offers stable diffing)",type:"boolean"},cs2notypes:{text:"Don't output TS types (can't be compiled)",type:"boolean"},cs2intcasts:{text:"Explicit JS int32 casts during math (can't be compiled)",type:"boolean"}}}),Rl=()=>({ext:"cs2.json",...nt(N.clientscript),...st,async prepareDump(t,e){await Gr(e)},read(t,e,n){return JSON.stringify(K.clientscript.read(t,n))},description:"Basic implementation of the clientscript VM (cs2). Can be used to debug programs and step through code."}),Pl=()=>({ext:"png",...Ge(N.texturesOldPng,0),...st,async read(t,e,n){let r=K.oldproctexture.read(t,n),i=await n.getFileById(N.sprites,r.spriteid),s=Lt(i);if(s.length!=1)throw new Error("exactly one subsprite expected");return Vr(s[0].img,"png",1)},description:"Procedural textures are highly compressed textures used in early rshd."}),bi=t=>()=>({ext:"png",...Ge(ct.data,t),...st,async read(e,n,r){let i=await r.findSubfileByName(ct.data,t,"INDEX.DAT"),s=yn(i.buffer,e);return Vr(s.img,"png",1)},description:"Textures from the 'legacy' era, very early rs2"}),Ul=t=>()=>({ext:"png",...nt(t),...st,read(e,n){return Vr(Lt(e)[0].img,"png",1)},description:"Sprites are all images that are used in ui. The client stores sprites are uncompressed bitmaps. Currently only the first frame for multi-frame sprites is extracted."}),wt=t=>()=>({ext:"png",...nt(t),prepareDump(){},prepareWrite(){},read(e,n){return new Ki(e,!1,!0).toImageData().then(i=>Vr(i,"png",1))},write(e){throw new Error("write not supported")},combineSubs(e){if(e.length!=1)throw new Error("texture batching not supported");return e[0]},description:"Textures are images that are wrapped around models to display colors are fine details."}),Ol=()=>({ext:"json",...nt(N.sprites),...st,async read(t,e){let n=Lt(t),r="";for(let[i,s]of n.entries()){let u=Mr(s.img);r+=(r==""?"":",")+`{"id":${e[0]},"sub":${i},"hash":${u}}`}return r},combineSubs(t){return"["+t.join(`,
`)+"]"},description:"Used to efficiently compare images."}),Gl=()=>({ext:"json",...nt(N.fontmetrics),...st,async read(t,e,n){return JSON.stringify(await ua(n,t,e[0]))},combineSubs(t){return"["+t.join(`,
`)+"]"},description:"Used to efficiently compare fonts."}),zl=()=>({ext:"json",...nt(N.models),...st,read(t,e,n){return"{}"},combineSubs(t){return"["+t.filter(e=>e).join(`,
`)+"]"},description:"Used to efficiently compare models."}),fa=ar()({framemaps:{parser:K.framemaps,lookup:vt(N.framemaps)},items:{parser:K.item,lookup:vt(N.items)},enums:{parser:K.enums,lookup:vt(N.enums)},npcs:{parser:K.npc,lookup:vt(N.npcs)},soundjson:{parser:K.audio,lookup:vi(sr(N.sounds),[{major:N.sounds,minor:0}])},musicjson:{parser:K.audio,lookup:vi(sr(N.music),[{major:N.music,minor:0}])},objects:{parser:K.object,lookup:vt(N.objects)},achievements:{parser:K.achievement,lookup:vt(N.achievements)},structs:{parser:K.structs,lookup:vt(N.structs)},sequences:{parser:K.sequences,lookup:vt(N.sequences)},spotanims:{parser:K.spotAnims,lookup:vt(N.spotanims)},materials:{parser:K.materials,lookup:vt(N.materials)},oldmaterials:{parser:K.oldmaterials,lookup:Ge(N.materials,0)},quickchatcats:{parser:K.quickchatCategories,lookup:Ge(N.quickchat,0)},quickchatlines:{parser:K.quickchatLines,lookup:Ge(N.quickchat,1)},dbtables:{parser:K.dbtables,lookup:Ge(N.config,ze.dbtables)},dbrows:{parser:K.dbrows,lookup:Ge(N.config,ze.dbrows)},overlays:{parser:K.mapsquareOverlays,lookup:Ge(N.config,ze.mapoverlays)},identitykit:{parser:K.identitykit,lookup:Ge(N.config,ze.identityKit)},params:{parser:K.params,lookup:Ge(N.config,ze.params)},underlays:{parser:K.mapsquareUnderlays,lookup:Ge(N.config,ze.mapunderlays)},mapscenes:{parser:K.mapscenes,lookup:Ge(N.config,ze.mapscenes)},environments:{parser:K.environments,lookup:Ge(N.config,ze.environments)},animgroupconfigs:{parser:K.animgroupConfigs,lookup:Ge(N.config,ze.animgroups)},maplabels:{parser:K.maplabels,lookup:Ge(N.config,ze.maplabels)},mapzones:{parser:K.mapZones,lookup:Ge(N.worldmap,0)},cutscenes:{parser:K.cutscenes,lookup:nt(N.cutscenes)},particles0:{parser:K.particles_0,lookup:Ge(N.particles,0)},particles1:{parser:K.particles_1,lookup:Ge(N.particles,1)},maptiles:{parser:K.mapsquareTiles,lookup:wr(zt.squares)},maptiles_nxt:{parser:K.mapsquareTilesNxt,lookup:wr(zt.square_nxt)},maplocations:{parser:K.mapsquareLocations,lookup:wr(zt.locations)},mapenvs:{parser:K.mapsquareEnvironment,lookup:wr(zt.env)},maptiles_old:{parser:K.mapsquareTiles,lookup:xi("m")},maplocations_old:{parser:K.mapsquareLocations,lookup:xi("l")},frames:{parser:K.frames,lookup:sr(N.frames)},models:{parser:K.models,lookup:nt(N.models)},oldmodels:{parser:K.oldmodels,lookup:nt(N.oldmodels)},skeletons:{parser:K.skeletalAnim,lookup:nt(N.skeletalAnims)},proctextures:{parser:K.proctexture,lookup:nt(N.texturesOldPng)},oldproctextures:{parser:K.oldproctexture,lookup:Ge(N.texturesOldPng,0)},interfaces:{parser:K.interfaces,lookup:sr(N.interfaces)},fontmetrics:{parser:K.fontmetrics,lookup:sr(N.fontmetrics)},classicmodels:{parser:K.classicmodels,lookup:Ge(0,_t.models)},indices:{parser:K.cacheIndex,lookup:Al()},rootindex:{parser:K.rootCacheIndex,lookup:Cl()},test:{parser:ce.fromJson(`["struct",
  
]`),lookup:ca()},clientscriptops:{parser:K.clientscript,lookup:nt(N.clientscript),prepareParser:t=>Gr(t).then(()=>{})}}),Vl=function(){return{...vt(N.npcs),ext:"json",prepareDump(t){},prepareWrite(){},read(t,e,n){let r=K.npc.read(t,n);return Ar({id:e[0],size:r.boundSize??1,name:r.name??"",models:r.models??[]})},write(t){throw new Error("")},combineSubs(t){return`[${t.join(`,
`)}]`},description:"Extract model metadata from npc configs."}},jl=ar()({sprites:Ul(N.sprites),textures_dds:wt(N.texturesDds),textures_png:wt(N.texturesPng),textures_bmp:wt(N.texturesBmp),textures_ktx:wt(N.texturesKtx)}),ql=ar()({legacy_sprites:bi(Nt.sprites),legacy_textures:bi(Nt.textures),textures_proc:Pl,textures_oldpng:wt(N.texturesOldPng),textures_2015png:wt(N.textures2015Png),textures_2015dds:wt(N.textures2015Dds),textures_2015pngmips:wt(N.textures2015PngMips),textures_2015compoundpng:wt(N.textures2015CompoundPng),textures_2015compounddds:wt(N.textures2015CompoundDds),textures_2015compoundpngmips:wt(N.textures2015CompoundPngMips)}),Xl=ar()({sounds:yi(N.sounds,!0),musicfragments:yi(N.music,!1),music:kl}),Hl=ar()({cutscenehtml:Il,interfacehtml:Bl,interfaceviewer:Ml,fontviewer:Nl,clientscript:Ll,clientscriptviewer:Rl}),$l=ar()({bin:Fl,spritehash:Ol,fonthash:Gl,modelhash:zl,npcmodels:Vl}),Jl=Object.fromEntries(Object.entries(fa).map(([t,e])=>[t,Tl(e.parser,e.lookup,e.prepareDump,e.prepareParser)])),Wl={image:jl,legacyImage:ql,interactive:Hl,sound:Xl,other:$l,json:Jl},Kl=Object.fromEntries(Object.values(Wl).flatMap(t=>Object.entries(t))),De=48,ve=De*De,Kt=1e6,Fr=2e6;function or(t){const e=De-1;let n=e-(t/De|0),r=e-t%De;return{rs2index:n*De+r,x:n,z:r}}function wi(t,e){return(De-1-t)*De+(De-1-e)}async function ha(t,e,n){let r=n>=100,i=0;const s=t.classicData;let u=100-e,h=100-(r?n-100:n),l=`${u.toString().padStart(2,"0")}${h.toString().padStart(2,"0")}`,y=[],p=r?1:3;for(let x=0;x<p;x++){let d=r?3:x,a=t.getBuildNr()<=115?void 0:await t.findSubfileByName(0,_t.land,`m${d}${l}.hei`),o=await t.findSubfileByName(0,_t.maps,`m${d}${l}.jm`);if(!a&&!o&&x==0)return null;y.push({sourcelevel:d,hei:a?.buffer,jm:o?.buffer,loc:void 0,dat:void 0})}let m=new Yl(s,p);for(let x=0;x<p;x++){let d=y[x];if(!d.jm){let a=await t.findSubfileByName(0,_t.maps,`M${d.sourcelevel}${l}.DAT`),o=await t.findSubfileByName(0,_t.maps,`M${d.sourcelevel}${l}.LOC`);d.dat=a?.buffer,d.loc=o?.buffer}}for(let x=0;x<p;x++){let d=y[x];d.jm?(m.loadJmFile(d.jm,x),i=Ze(d.jm,i)):d.hei&&(m.loadHeiFile(d.hei,x),i=Ze(d.hei,i))}for(let x=0;x<p;x++){let d=y[x];if(!d.jm)if(d.dat&&(m.loadDatfile(d.dat,x),i=Ze(d.dat,i)),d.loc)m.loadLocFile(d.loc,x),i=Ze(d.loc,i);else{let a=eu(s,u,h,d.sourcelevel);i=Ze(ke.from(a.buffer),i),m.addLocBuffer(a,x)}}return{rect:{x:e*De,z:n*De,xsize:De,zsize:De},mapfilehash:i,tiles:m.convertTiles(),locs:m.locs,levels:p}}class Yl{levels;tiles;locs=[];config;constructor(e,n){this.config=e,this.levels=n,this.tiles=new Array(ve*n).fill(null).map((r,i)=>({height:i>ve?96:0,hasbridge:!1,overlayobj:null,overlay:0,underlay:0,locrotation:0}))}getTile(e,n,r){if(!(n<0||r<0||n>=De||r>=De)&&!(e<0||e>=this.levels))return this.tiles[e*ve+n*De+r]}getTileClassic(e,n){const r=De-1;let i=r-(n/De|0),s=r-n%De;return this.getTile(e,i,s)}placeLoc(e,n,r,i,s,u,h=null){(this.getTile(i+1,s,u)?.overlayobj?.type.bridge||n==0&&(r==2?this.getTile(i+1,s+1,u):this.getTile(i+1,s,u+1))?.overlayobj?.type.bridge)&&i++,this.locs.push({id:e,uses:[{x:s,y:u,plane:i,rotation:r,type:n,extra:h}]})}convertTiles(){return this.tiles.map((e,n)=>{let r=Math.floor(n/ve),i=this.tiles[n-ve];return{height:e.hasbridge?r==1&&i.hasbridge?i.height/4:0:e.height/4,flags:0,settings:r==1&&e.hasbridge?2:0,overlay:e.overlay,underlay:e.underlay,shape:e.overlay?0:null}})}loadJmFile(e,n){let r=new at(e),i=0,s=ke.alloc(ve);for(let o=0;o<ve;o++)i+=r.readUByte(),s[o]=i&255;let u=0,h=ke.alloc(ve);for(let o=0;o<ve;o++)u+=r.readUByte(),h[o]=u&255;let l=r.readBuffer(ve),y=r.readBuffer(ve),p=ke.alloc(ve),m=ke.alloc(ve),f=new Uint32Array(ve);for(let o=0;o<ve;o++){let c=r.readUShort(!0);if(c!=0){let g=c/12e3|0,v=c%12e3,E=or(o);g==0?p[o]=v:g==1?m[o]=v:g==2||g==3||(g==4?f[o]=v:console.log(E.x,E.z,o," type"+(c/12e3|0),c%12e3))}}let x=r.readBuffer(ve),d=r.readBuffer(ve),a=r.readBuffer(ve);if(!r.eof())throw new Error("didn't end reading map.jm at end of file");n==0&&this.addFloorBuffers(s,h,n,!1),this.addWallBuffers(l,y,p,m,x,d,a,n),this.addLocBuffer(f,n)}loadHeiFile(e,n){let r=new at(e),i=0,s=ke.alloc(ve),u=ke.alloc(ve);for(let h=0;h<ve;){let l=r.readUByte();if(l<128&&(s[h++]=l&255,i=l),l>=128)for(let y=0;y<l-128;y++)s[h++]=i&255}for(let h=0;h<ve;){let l=r.readUByte();if(l<128&&(u[h++]=l&255,i=l),l>=128)for(let y=0;y<l-128;y++)u[h++]=i&255}if(!r.eof())throw new Error("unexpected height file length");this.addFloorBuffers(s,u,n,!0)}addDatfile(e,n){}loadDatfile(e,n){let r=new at(e),i=r.readBuffer(ve),s=r.readBuffer(ve),u=r.readBuffer(ve),h=r.readBuffer(ve),l=ke.alloc(ve);for(let f=0;f<ve;){let x=r.readUByte();x<128?(l[f]=x,f++):f+=x-128}let y=ke.alloc(ve),p=0;for(let f=0;f<ve;){let x=r.readUByte(),d=1;x<128?p=x:d=x-128;for(let a=0;a<d;a++)y[f]=p,f++}let m=ke.alloc(ve);for(let f=0;f<ve;){let x=r.readUByte();x<128?(m[f]=x,f++):f+=x-128}if(!r.eof())throw new Error("didn't end reading map.dat at end of file");this.addWallBuffers(i,s,u,h,l,y,m,n)}addFloorBuffers(e,n,r,i){let s=64,u=35;for(let h=0;h<De;h++)for(let l=0;l<De;l++){let y=l*De+h,p=e[y],m=n[y];i&&(s=p+(s&127),p=s*2&255,u=n[y]+u&127,m=u*2&255);let f=this.getTileClassic(r,y);f&&(f.height=p,f.underlay=m+1)}}addWallBuffers(e,n,r,i,s,u,h,l){let y=(d,a,o)=>{let c=this.getTile(d,a,o),g=this.getTile(d,a-1,o),v=this.getTile(d,a,o-1),E=this.getTile(d,a-1,o-1);c&&(c.hasbridge=!0),g&&(g.hasbridge=!0),v&&(v.hasbridge=!0),E&&(E.hasbridge=!0)},p=(d,a,o,c,g)=>{let v=this.getTile(d,a,o);if(v&&v.overlay!=g&&v.overlay!=c){let E=this.getTile(d+1,a,o);E&&(E.overlay=c,E.overlayobj=this.config.tiles[c-1]),y(d+1,a,o)}};for(let d=0;d<ve;d++){let a=u[d],o=this.getTileClassic(l,d);if(o&&a!=0){let c=this.config.tiles[a-1];o.overlay=a,o.overlayobj=c}}for(let d=0;d<ve;d++){let a=this.getTileClassic(0,d);if(a?.overlayobj?.type.bridge){let o=a.overlay==12?11:2,c=or(d),g=this.getTile(l+1,c.x,c.z);a.hasbridge=!0,y(l,c.x,c.z),y(l+1,c.x,c.z),p(l,c.x+1,c.z,a.overlay,o),p(l,c.x-1,c.z,a.overlay,o),p(l,c.x,c.z+1,a.overlay,o),p(l,c.x,c.z-1,a.overlay,o),g&&(g.height=a.height,g.overlay=a.overlay,g.overlayobj=a.overlayobj);let v=this.config.tiles[o-1];a.overlay=o,a.overlayobj=v}}let m=d=>({flags:0,rotation:null,scale:null,scaleX:null,scaleY:this.config.wallobjects[d-1].height,scaleZ:null,translateX:null,translateY:null,translateZ:null});for(let d=0;d<ve;d++){let a=e[d],o=n[d],c=r[d],g=i[d],v=or(d);a&&this.placeLoc(Kt+(a-1),0,2,l,v.x,v.z,m(a)),o&&this.placeLoc(Kt+(o-1),0,1,l,v.x,v.z,m(o)),c&&this.placeLoc(Kt+(c-1),9,0,l,v.x,v.z,m(c)),g&&this.placeLoc(Kt+(g-1),9,1,l,v.x,v.z,m(g))}let f=(d,a)=>{if(d<0||d>=De||a<0||a>=De)return"none";let o=wi(d,a);return s[o]==0?"none":r[o]!=0||i[o]!=0?"diagedge":"full"},x=(d,a)=>{let o=[f(d+1,a),f(d+1,a-1),f(d,a-1),f(d-1,a-1),f(d-1,a),f(d-1,a+1),f(d,a+1),f(d+1,a+1)],c=f(d,a);if(o.every((g,v)=>v%2==0?g=="full":g!="none"))return{type:17,rot:0};for(let g=0;g<4;g++){let v=o[(g*2+0)%8],E=o[(g*2+2)%8],_=o[(g*2+4)%8],S=o[(g*2+6)%8],C=o[(g*2+1)%8],A=o[(g*2+3)%8],I=o[(g*2+5)%8];if(v=="none"&&E=="none"&&S!="none"&&_!="none"&&I!="none")return{type:c=="diagedge"?13:16,rot:g};if(v=="none"&&E!="none"&&S!="none"&&_!="none")return A=="none"?{type:16,rot:g}:I=="none"?{type:16,rot:(g+3)%4}:{type:12,rot:g};if(v!="none"&&E!="none"&&S=="full"&&_=="full"&&C=="none")return{type:14,rot:g};if(v!="none"&&E!="none"&&S!="none"&&_!="none"&&C=="none"&&I=="none")return{type:15,rot:g}}return{type:10,rot:0}};for(let d=0;d<s.length;d++){let a=s[d];if(a!=0){let o=or(d),c=x(o.x,o.z);this.placeLoc(Fr+a-1,c.type,c.rot,l,o.x,o.z)}}for(let d=0;d<ve;d++){let a=this.getTileClassic(l,d);a&&(a.locrotation=h[d])}}loadLocFile(e,n){let r=new at(e),i=new Uint32Array(ve);for(let s=0;s<ve;){let u=r.readUByte();u<128?i[s++]=u:s+=u-128}if(!r.eof())throw new Error("didn't end reading map.loc at end of file");this.addLocBuffer(i,n)}addLocBuffer(e,n){for(let r=0;r<ve;r++){let i=e[r];if(i){let s=or(r),u=this.config.objects[i-1];if(!u){console.warn(`loc for ${i-1} is missing`);continue}let h=!1;for(let l=0;l<u.xsize;l++)for(let y=0;y<u.zsize;y++){if(l==0&&y==0||s.x+l>=De||s.z+y>=De)continue;let p=wi(s.x+l,s.z+y);e[p]==i&&(h=!0)}if(!h){let l=this.getTileClassic(n,r);if(l){let y=(4+l.locrotation)%8,p=y%2==0?10:11,m=s.x,f=s.z;y%4!=0?(m-=u.zsize-1,f-=u.xsize-1):(m-=u.xsize-1,f-=u.zsize-1),this.placeLoc(i-1,p,Math.floor(y/2),n,m,f)}}}}}}function da(t){for(let n=0;n<t.levels;n++)for(let r=t.zsize-1;r>=1;r--)for(let i=t.xsize-1;i>=1;i--){let s=t.getTile(t.xoffset+i,t.zoffset+r,n),u=t.getTile(t.xoffset+i-1,t.zoffset+r-1,n);!s||!u||(s.y=u.y,s.underlayprops=u.underlayprops,s.effectiveLevel=n,s.effectiveVisualLevel=n)}let e=n=>n?.debug_raw?.overlay?t.engine.classicData.tiles[n.debug_raw?.overlay-1]:void 0;for(let n=0;n<t.levels;n++)for(let r=t.zsize-1;r>=1;r--)for(let i=t.xsize-1;i>=1;i--){let s=t.getTile(t.xoffset+i,t.zoffset+r,n),u=e(s);if(s&&(u?.type.autoconnect||u?.type.indoors)){u.blocked&&(s.rawCollision&&(s.rawCollision.walk[0]=!0),s.effectiveCollision&&(s.effectiveCollision.walk[0]=!0));let h=e(t.getTile(t.xoffset+i,t.zoffset+r+1,n)),l=e(t.getTile(t.xoffset+i-1,t.zoffset+r,n)),y=e(t.getTile(t.xoffset+i+1,t.zoffset+r,n)),p=e(t.getTile(t.xoffset+i,t.zoffset+r-1,n)),m=u.type.indoors?h?.type.indoors:h?.type.autoconnect,f=u.type.indoors?l?.type.indoors:l?.type.autoconnect,x=u.type.indoors?y?.type.indoors:y?.type.autoconnect,d=u.type.indoors?p?.type.indoors:p?.type.autoconnect;m&&f&&!d&&!x&&(s.shape=Et[5]),m&&!f&&!d&&x&&(s.shape=Et[6]),!m&&!f&&d&&x&&(s.shape=Et[7]),!m&&f&&d&&!x&&(s.shape=Et[4])}}}function kn(t){let e=0,n=!1,r=[255,255,255];if(t>99999999&&(t=99999999-t),t==12345678)n=!0;else if(t<0){let i=-t-1,s=i>>10&31,u=i>>5&31,h=i>>0&31;r=[s,u,h]}else e=t+1;return{color:r,colorint:lo(...oo(...r)),material:e,invisible:n}}function pa(t,e){const n=t.classicData;let r={};if(e>=Fr){let i=n.roofs[e-Fr];r={name:`roof_${e-Fr}`,models:[{type:10,values:[Xe.classicRoof10]},{type:12,values:[Xe.classicRoof12]},{type:13,values:[Xe.classicRoof13]},{type:14,values:[Xe.classicRoof14]},{type:15,values:[Xe.classicRoof15]},{type:16,values:[Xe.classicRoof16]},{type:17,values:[Xe.classicRoof17]}],...un(i.texture)}}else if(e>=Kt){let i=n.wallobjects[e-Kt];r={name:i.name,probably_morphFloor:!0,models:[{type:0,values:[Xe.classicWall]},{type:9,values:[Xe.classicWallDiag]}],...un(i.frontdecor,i.backdecor)}}else{let i=n.objects[e];i.model.id==null&&console.warn(`model for ${i.name} is missing`),r={name:i.name,width:i.xsize,length:i.zsize,models:[{type:10,values:i.model.id==null?[]:[i.model.id]}]}}return r}function un(...t){let e={color_replacements:[],material_replacements:[]};for(let[n,r]of t.entries()){let i=kn(r);e.color_replacements.push([n,i.colorint]),e.material_replacements.push([n,i.material]),i.invisible&&(e.models=null)}return e}async function Zl(t){let e=t.classicData,r=!await t.findSubfileByName(0,_t.textures,"INDEX.DAT");return Promise.all(e.tiles.map(async i=>{let s=kn(i.decor),u=s.color;if(s.material){let h=e.textures[s.material-1],l=await Zi(t,h.name,h.subname,r),y=0,p=0,m=0;for(let x=0;x<l.img.data.length;x+=4)y+=l.img.data[x+0],p+=l.img.data[x+1],m+=l.img.data[x+2];let f=l.img.width*l.img.height;u=[y/f|0,p/f|0,m/f|0]}return{color:i.type.type==5?[255,0,255]:u,material:s.material}}))}function Ql(){let t=[];for(let e=0;e<64;e+=1){const n=255-e*4,r=255-(e*1.75|0),i=255-e*4;t.push({color:[n,r,i]})}for(let e=0;e<64;e+=1){const n=e*3;t.push({color:[n,144,0]})}for(let e=0;e<64;e+=1){const n=192-(e*1.5|0),r=144-(e*1.5|0);t.push({color:[n,r,0]})}for(let e=0;e<64;e++){const n=96-(e*1.5|0),r=48+(e*1.5|0);t.push({color:[n,r,0]})}return t.forEach(e=>{e.color[0]/=2,e.color[1]/=2,e.color[2]/=2}),t}function eu(t,e,n,r){let i=e*De,s=n*De,u=i+De,h=s+De,l=new Uint32Array(ve),y=t.jsonlocs.filter(p=>p.level==r&&p.x>=i&&p.x<u&&p.z>=s&&p.z<h);for(let p of y){let m=p.x-i,f=p.z-s;l[m*De+f]=p.id+1}return l}const tu=Object.freeze(Object.defineProperty({__proto__:null,classicDecodeMaterialInt:kn,classicIntsToModelMods:un,classicModifyTileGrid:da,classicOverlays:Zl,classicUnderlays:Ql,getClassicLoc:pa,getClassicMapData:ha},Symbol.toStringTag,{value:"Module"}));let Qt={uModelMatrix:"#define uModelMatrix modelMatrix",uViewProjMatrix:"#define uViewProjMatrix (projectionMatrix*viewMatrix)",uViewMatrix:"#define uViewMatrix viewMatrix",uProjectionMatrix:"#define uProjectionMatrix projectionMatrix",uCameraPosition:"#define uCameraPosition cameraPosition",aWaterPosition_Depth:"#define aWaterPosition_Depth vec4(position,10.0)",aVertexPosition:"#define aVertexPosition position",aVertexPosition_BoneLabel:"#define aVertexPosition_BoneLabel vec4(position,0.0)",aTextureUV:"#define aTextureUV uv",aVertexColour:"#define aVertexColour vec4(color.rgb,1.0)",aTextureWeight:["attribute vec3 color_1;","#define aTextureWeight vec4(color_1,1.0)"],aMaterialProperties:["attribute vec3 color_2;","#define aMaterialProperties vec4(256.0-color_2*256.0,0.0)"],aVertexNormal_FogProportion:"#define aVertexNormal_FogProportion vec4(normal,0.0)",gl_FragColor:""},Nr={UNIFORM_BUFFER_BEGIN:"#define UNIFORM_BUFFER_BEGIN(name)",UNIFORM_BUFFER_END:"#define UNIFORM_BUFFER_END",TEXTURE_GRAD:"",gl_FragColor:""},Ei={UNIFORM_BUFFER_BEGIN:"#define UNIFORM_BUFFER_BEGIN(name)",UNIFORM_BUFFER_END:"#define UNIFORM_BUFFER_END",TEXTURE_GRAD:"",gl_FragColor:""};function ru(t,e,n){let r=new Or;r.uniforms={uAlphaTestThreshold:{value:[-1]},uAmbientColour:{value:[.6059895753860474,.5648590922355652,.5127604007720947]},uAtlasMeta:{value:[512,16,.0001220703125,4]},uCameraPosition:{value:[1638400,17248,1671168]},uDummy:{value:[1]},uFade:{value:[0]},uFullScreenLookupScale:{value:[0,5960465188081798e-23,1,0]},uInscatteringAmount:{value:[1,0,0]},uInvSunDirection:{value:[-.5391638875007629,.6469966173171997,-.5391638875007629]},uModelMatrix:{value:[1,0,0,0,0,1,0,0,0,0,1,0,1630208,0,1654784,1]},uOutscatteringAmount:{value:[1638400,17248,1671168]},uProjectionMatrix:{value:[152587890625e-16,0,0,0,0,-152587890625e-16,0,0,0,0,-6200397183420137e-20,0,0,0,-1.0317461490631104,1]},uScatteringParameters:{value:[0,-1,5960465188081798e-23,0]},uScatteringTintColour:{value:[0,5960465188081798e-23,1]},uSunColour:{value:[.8666666746139526,.8078431487083435,.7333333492279053]},uTextureAnimationTime:{value:[459.7019958496094]},uTextureAtlas:{value:[5]},uTextureAtlasSettings:{value:[6]},uTint:{value:[0,0,0,0]},uVertexScale:{value:[1]},uViewMatrix:{value:[1,0,0,0,0,5960465188081798e-23,1,0,0,-1,5960465188081798e-23,0,-1638400,1671168,-17248.099609375,1]},uViewProjMatrix:{value:[152587890625e-16,0,0,0,0,-9094948101931455e-28,-6200397183420137e-20,0,0,152587890625e-16,-3695725149521767e-27,0,-25,-25.5,.03770458698272705,1]},uViewportLookupScale:{value:[1638400,17248,1671168,0]},uViewportOffsetScale:{value:[1,0,0,0]},uZBufferParams:{value:[16777248,32256,-32768,-512.0009765625]}},r.vertexColors=!0;let i=require("./minimap-loc-vert.glsl.c");i=rr(i),i=er(i,Qt),i=tr(i,Ei);let s=require("./minimap-loc-frag.glsl.c");return s=rr(s),s=er(s,Qt),s=tr(s,Ei),s=s.replace(/#undef gl_FragColor/,"// $&"),s=s.replace(/void getTextureSettings\(/,`void getTextureSettings(vec2 s, out TextureSettings settings){
settings.textureMeta1 = vec3(0.0,0.0,8196.0);
settings.textureMeta2 = vec3(0.0,0.0,8196.0);
settings.uvAnim = vec2(0.0,0.0);
settings.wrapping = 0.0;
settings.specular = 0.0;
settings.normalScale = 0.0;
}
void getTextureSettingsOld(`),s=s.replace(/(?<!void )getTexel\(\w+,/gm,()=>"getTexel(vTextureUV,"),s=au(s,`
        void main(){
            super();
            //pre-multiply alpha
            // gl_FragColor.rgb *= gl_FragColor.a;
            // gl_FragColor.rgb = vec3( gl_FragColor.a);
            gl_FragColor.a=1.0;
            
        }
    `),r.vertexShader=i,r.fragmentShader=s,r.uniforms.uTextureAtlas={value:t},r.uniforms.uInvSunDirection.value[2]*=-1,r.uniforms.uAlphaTestThreshold={value:[n]},r.uniformsNeedUpdate=!0,e=="blend"&&(r.transparent=!0),t&&(t.colorSpace=Ir),r}function nu(t){let e=new Or;e.uniforms={uAmbientColour:{value:[.6059895753860474,.5648590922355652,.5127604007720947]},uAtlasMeta:{value:[512,16,.0001220703125,4]},uCameraPosition:{value:[1638400,17632,1769472]},uDummy:{value:[1]},uFade:{value:[0]},uFullScreenLookupScale:{value:[0,5960465188081798e-23,1,0]},uGridSize:{value:[512]},uInscatteringAmount:{value:[1,0,0]},uInvSunDirection:{value:[-.5391638875007629,.6469966173171997,-.5391638875007629]},uModelMatrix:{value:[1,0,0,0,0,1,0,0,0,0,1,0,1622015,100,1753087,1]},uOutscatteringAmount:{value:[1638400,17632,1769472]},uProjectionMatrix:{value:[152587890625e-16,0,0,0,0,-152587890625e-16,0,0,0,0,-6200397183420137e-20,0,0,0,-1.0317461490631104,1]},uScatteringParameters:{value:[0,-1,5960465188081798e-23,0]},uScatteringTintColour:{value:[0,5960465188081798e-23,1]},uSunColour:{value:[.8666666746139526,.8078431487083435,.7333333492279053]},uTextureAtlas:{value:[5]},uTextureAtlasSettings:{value:[6]},uViewMatrix:{value:[1,0,0,0,0,5960465188081798e-23,1,0,0,-1,5960465188081798e-23,0,-1638400,1769472,-17632.10546875,1]},uViewProjMatrix:{value:[152587890625e-16,0,0,0,0,-9094948101931455e-28,-6200397183420137e-20,0,0,152587890625e-16,-3695725149521767e-27,0,-25,-27,.06151437759399414,1]},uViewportLookupScale:{value:[1638400,17632,1769472,0]},uViewportOffsetScale:{value:[1,0,0,0]},uZBufferParams:{value:[16777248,32256,-32768,-512.0009765625]}},e.vertexColors=!0;let n=require("./minimap-floor-vert.glsl.c");n=rr(n),n=er(n,Qt),n=tr(n,Nr);let r=require("./minimap-floor-frag.glsl.c");r=rr(r),r=er(r,Qt),r=tr(r,Nr),r=r.replace(/#undef gl_FragColor/,"// $&"),r=r.replace(/void getTextureSettings\(/,`void getTextureSettings(vec2 s, out TextureSettings settings){
settings.textureMeta1 = vec3(0.0,0.0,8196.0);
settings.textureMeta2 = vec3(0.0,0.0,8196.0);
settings.uvAnim = vec2(0.0,0.0);
settings.wrapping = 0.0;
settings.specular = 0.0;
settings.normalScale = 0.0;
}
void getTextureSettingsOld(`);let i=0;return r=Zt(r,`in highp vec2 v_texcoord_0;
in highp vec2 v_texcoord_1;
in highp vec2 v_texcoord_2;`),n=Zt(n,`in highp vec2 texcoord_0;
in highp vec2 texcoord_1;
in highp vec2 texcoord_2;`),n=Zt(n,`out highp vec2 v_texcoord_0;
out highp vec2 v_texcoord_1;
out highp vec2 v_texcoord_2;`),n=ma(n,`v_texcoord_0=texcoord_0;
v_texcoord_1=texcoord_1;
v_texcoord_2=texcoord_2;
`),r=r.replace(/(?<!void )getTexel\(\w+,/gm,()=>`getTexel(v_texcoord_${i++%3},`),e.vertexShader=n,e.fragmentShader=r,e.uniforms.uTextureAtlas={value:t},e.uniforms.uInvSunDirection.value[2]*=-1,e.uniformsNeedUpdate=!0,e}function iu(t){let e=new Or;e.customProgramCacheKey=()=>"water",e.uniforms={uAmbientColour:{value:[.6,.6,.6]},uCameraPosition:{value:[1671168,17344,1638400]},uDummy:{value:[0]},uFullScreenLookupScale:{value:[0,5960465188081798e-23,1,0]},uInvSunDirection:{value:[-.5,.8,-.5]},uModelMatrix:{value:[1,0,0,0,0,1,0,0,0,0,1,0,1654783,100,1622015,1]},uProjectionMatrix:{value:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]},uSunColour:{value:[1,.9,.8]},uViewMatrix:{value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},uViewProjMatrix:{value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},uViewportLookupScale:{value:[1,1,1,1]},uViewportOffsetScale:{value:[1,0,0,0]},uZBufferParams:{value:[16777248,32256,-32768,-512.0009765625]},uWaterFeatureFlags:{value:[1,1,1,1]},uWaterNormalMapTextureScales_FlowNoiseScale:{value:[1,1,1,.5]},uWaterTickFade:{value:[0,0]},uWaterNormalBRDFParams:{value:[.5,.5,.5,.5]},uWaterSpecularColour:{value:[1,1,1]},uWaterReflectionStrength:{value:1},uWaterReflectionMapContribution:{value:.5},uWaterExtinctionVisibilityMetres:{value:10},uWaterExtinctionOpaqueWaterColour:{value:[.1,.2,.3]},uWaterExtinctionRGBDepthMetres:{value:[5,10,20]},uWaterFoamScaleFoamDepth:{value:[1,1]},uWaterStillWaterNormalStrength_spareyzw:{value:[.5,0,0,0]},uSampleWeight_uvDistortion_sparezw:{value:[1,0,0,0,0,1,0,0,0,0,1,0]},uMacroSampleWeight_uvDistortion_sparezw:{value:[1,0,0,0,0,1,0,0,0,0,1,0]},uWaterNormalMapTexture0:{value:t},uWaterNormalMapTexture1:{value:t},uWaterNormalMapTexture2:{value:t},uWaterTextureFoam:{value:t},uReflectionMap:{value:t},uRefractionMap:{value:t},uRefractionDepth:{value:t}},e.defines={WATER_NORMAL_MAPS:1,WATER_FOAM_MAP:1,WATER_EXTINCTION:1,REFLECTION:1,REFRACTION:1,GLOBAL_ENVIRONMENTMAPPING:1,SUNLIGHT_DIRECT_LIGHTING:1,SPECULAR_LIGHTING:1},e.vertexColors=!0;let n=require("./minimap-water-vert.glsl.c");n=rr(n),n=er(n,Qt),n=tr(n,Nr);let r=require("./minimap-water-frag.glsl.c");r=rr(r),r=er(r,Qt),r=tr(r,Nr),r=r.replace(/#undef gl_FragColor/,"// $&"),r=r.replace(/void getTextureSettings\(/,`void getTextureSettings(vec2 s, out TextureSettings settings){
settings.textureMeta1 = vec3(0.0,0.0,8196.0);
settings.textureMeta2 = vec3(0.0,0.0,8196.0);
settings.uvAnim = vec2(0.0,0.0);
settings.wrapping = 0.0;
settings.specular = 0.0;
settings.normalScale = 0.0;
}
void getTextureSettingsOld(`);let i=0;return r=Zt(r,`in highp vec2 v_texcoord_0;
in highp vec2 v_texcoord_1;
in highp vec2 v_texcoord_2;`),n=Zt(n,`in highp vec2 texcoord_0;
in highp vec2 texcoord_1;
in highp vec2 texcoord_2;`),n=Zt(n,`out highp vec2 v_texcoord_0;
out highp vec2 v_texcoord_1;
out highp vec2 v_texcoord_2;`),n=ma(n,`v_texcoord_0=texcoord_0;
v_texcoord_1=texcoord_1;
v_texcoord_2=texcoord_2;
`),r=r.replace(/(?<!void )getTexel\(\w+,/gm,()=>`getTexel(v_texcoord_${i++%3},`),e.vertexShader=n,e.fragmentShader=r,e.uniforms.uTextureAtlas={value:t},e.uniforms.uInvSunDirection.value[2]*=-1,e.uniformsNeedUpdate=!0,e}function ma(t,e){return t.replace(/void main\(\)[\s\r\n]*\{/,`$&
`+e)}function Zt(t,e){return e+`
`+t}function er(t,e){return t.replace(/^((flat) )*(in|out|uniform|attribute|varying) ((highp|mediump|lowp) )*(float|vec\d|mat\d) ((\w|,\s*)+);$/mg,(n,r,i,s,u,h,l,y)=>y.split(/,\s*/g).map(p=>{let m=e[p];if(m!=null){let f=typeof m=="function"?m():m;return f=Array.isArray(f)?f.join(`
`):f+`
`,n.split(`
`).map(x=>`// ${x}`).join(`
`)+`
`+f}return`${r??""}${s} ${u??""}${l??""} ${p};`}).join(`
`))}function tr(t,e){return t.replace(/^#define (\w+)(\(.*?\))?($| (\\\r?\n|.)*$)/mg,(n,r)=>{let i=e[r];if(i!=null){let s=typeof i=="function"?i():i;return s=Array.isArray(s)?s.join(`
`):s+`
`,n.split(`
`).map(u=>`// ${u}`).join(`
`)+`
`+s}return n})}function au(t,e){return t=t.replace(/\bvoid main\(/,"void originalMain("),t=t+`
`+e.replace(/super\(/,"originalMain("),t}function rr(t){return["precision highp float;","precision mediump sampler3D;","#define fma(a,b,c) ((a)*(b)+(c))"].join(`
`)+`

`+t.replace(/^#version ([\w ]+)$/m,"//original version $1").replace(/\bprecise\b/g,"highp")}async function su(...t){return null}async function ou(...t){return null}const be=512,In=64,Bn=48,Lr=4,Mn=128,_i=1/16,Wt=new Be(0,1,0),Rr={material:-1,materialTiling:128,materialBleedpriority:-1,color:[255,0,255]},{tileshapes:Et,defaulttileshape:cn,defaulttileshapeflipped:ga}=uu();function lu(t,e){return!(t.x>=e.x+e.xsize||t.x+t.xsize<=e.x||t.z>=e.z+e.zsize||t.z+t.zsize<=e.z)}function Si(t,e,n){return!(e<t.x||e>=t.x+t.xsize||n<t.z||n>=t.z+t.zsize)}let rn=new Map,Er=new Set;function nr(t,e="default"){Er.has(e)&&(console.error("scratchbuffer hasn't been returned since last use, leaking memory by creating new buffer."),Er.delete(e),rn.delete(e));let n=rn.get(e);return(!n||n&&n.byteLength<t)&&(n=new ArrayBuffer(t),rn.set(e,n),console.log("allocating new scratchbuf mb:",(t/1e6).toFixed(2))),Er.add(e),[n,i=>{if(Er.delete(e),i>t)throw new Error("larger slice of scratchbuffer requested than was reserved");return n.slice(0,i)}]}class Di{debug_nxttile=null;debug_raw=null;rawOverlay=void 0;rawUnderlay=void 0;settings;next01=void 0;next10=void 0;next11=void 0;x;y;z;y10;y01;y11;playery00;playery01;playery10;playery11;shape=cn;underlayVisible=!1;overlayVisible=!1;normalX=0;normalZ=0;bleedsOverlayMaterial=!1;vertexprops;overlayprops;underlayprops;originalUnderlayColor=Rr.color;rawCollision=void 0;effectiveCollision=void 0;effectiveLevel;effectiveVisualLevel;waterProps=null;addUnderlay(e,n){let r=n!=null?e.mapUnderlays[n-1]:void 0;r&&(r.color&&(r.color[0]!=255||r.color[1]!=0||r.color[2]!=255)&&(this.underlayVisible=!0),this.underlayprops={material:r.material??-1,materialTiling:r.material_tiling??128,materialBleedpriority:-1,color:r.color??[255,0,255]},this.rawUnderlay=r,this.originalUnderlayColor=this.underlayprops.color,this.vertexprops.fill(this.underlayprops))}addOverlay(e,n,r){let i=n!=null?e.mapOverlays[n-1]:void 0;i&&(i.color&&(i.color[0]!=255||i.color[1]!=0||i.color[2]!=255)&&(this.overlayVisible=!0),this.overlayprops={material:i.materialbyte??i.material??-1,materialTiling:i.material_tiling??128,materialBleedpriority:i.bleedpriority??0,color:i.color??(i.materialbyte!=null?[255,255,255]:[255,0,255])},this.bleedsOverlayMaterial=!!i.bleedToUnderlay,this.rawOverlay=i),r!=null&&(this.shape=Et[r])}addUnderWater(e,n,r,i){this.waterProps={y00:this.y,y01:this.y,y10:this.y,y11:this.y,props:this.overlayprops,shape:this.shape.overlay,isoriginal:this.shape==cn||this.shape==ga,rawOverlay:this.rawOverlay};let s=this.underlayprops;this.underlayVisible=!1,this.overlayVisible=!1,this.bleedsOverlayMaterial=!1,this.rawOverlay=void 0,this.addUnderlay(e,i),this.addOverlay(e,r,null),this.overlayVisible||(this.overlayVisible=!0,this.overlayprops=s,this.bleedsOverlayMaterial=!0),this.y=this.y01=this.y10=this.y11=this.y-n*be*_i}constructor(e,n,r,i,s,u){let h=e*be*_i;this.settings=n,this.x=r,this.y=h,this.z=i,this.y01=h,this.y10=h,this.y11=h,this.playery00=h,this.playery01=h,this.playery10=h,this.playery11=h,this.effectiveLevel=s,this.effectiveVisualLevel=0;let l={...Rr};this.vertexprops=[l,l,l,l],this.underlayprops=l,this.overlayprops=l;let y;if(u){let p=((n??0)&1)!=0;y={settings:n??0,walk:[p,!1,!1,!1,!1,!1,!1,!1,!1],sight:[!1,!1,!1,!1,!1,!1,!1,!1,!1]}}this.rawCollision=y,this.effectiveCollision=y}}function uu(){let t=[{subvertex:0,nextx:!1,nextz:!0,subx:0,subz:1},{subvertex:1,nextx:!1,nextz:!0,subx:.5,subz:1},{subvertex:0,nextx:!0,nextz:!0,subx:1,subz:1},{subvertex:2,nextx:!0,nextz:!1,subx:1,subz:.5},{subvertex:0,nextx:!0,nextz:!1,subx:1,subz:0},{subvertex:1,nextx:!1,nextz:!1,subx:.5,subz:0},{subvertex:0,nextx:!1,nextz:!1,subx:0,subz:0},{subvertex:2,nextx:!1,nextz:!1,subx:0,subz:.5},{subvertex:3,nextx:!1,nextz:!1,subx:.5,subz:.5}];function e(s,u){return s==8?t[8]:(s=(s+u*2)%8,t[s])}let n=[];for(let s=0;s<48;s++){let u=[],h=[],l=s%4,y=s-l;if(y==0)u.push(0,2,4,6);else if(y==4||y==36||y==40)u.push(0,4,6),h.push(0,2,4),y==36&&(l+=1),y==40&&(l+=3);else if(y==8)u.push(0,1,6),h.push(1,2,4,6);else if(y==12)u.push(1,2,4),h.push(0,1,4,6);else if(y==16)u.push(1,2,4,6),h.push(0,1,6);else if(y==20)u.push(0,1,4,6),h.push(1,2,4);else if(y==24)u.push(0,1,5,6),h.push(1,2,4,5);else if(y==28)u.push(5,6,7),h.push(2,4,5,7,0);else if(y==32)u.push(2,4,5,7,0),h.push(5,6,7);else if(y==44)u.push(4,6,8),h.push(8,6,0,2,4);else throw new Error("shouldnt happen");n[s]={overlay:u.map(p=>e(p,l)),underlay:h.map(p=>e(p,l))}}let r={overlay:[],underlay:[0,2,4,6].map(s=>e(s,0))},i={overlay:[],underlay:[2,4,6,0].map(s=>e(s,0))};return{tileshapes:n,defaulttileshape:r,defaulttileshapeflipped:i}}function cu(t){let e=t%4,n=(e+2)%4,r=t-e;if(r==0)return 0+n;if(r==4)return 4+n;if(r==8)return 16+e;if(r==12)return 20+e;if(r==16)return 8+e;if(r==20)return 12+e;if(r==24)return 24+n;if(r==28)return 32+e;if(r==36)return 40+e;if(r==40)return 36+e;if(r==32)return 28+e;if(r==44)return console.log("unknown inverse shape"),0;throw new Error("unexpected")}function xa(t,e,n){return new rt().makeTranslation(t.translate.x-e,t.translate.y,t.translate.z-n).multiply(new rt().makeRotationFromQuaternion(t.rotation)).multiply(new rt().makeScale(t.scale.x,t.scale.y,t.scale.z))}function fu(t,e,n,r,i,s,u,h=0,l=0,y=t.count){let p=xa(e,i,s),m=_r(n,e.originx/be,e.originz/be,e.level),f=new Be,x=e.placementMode=="followfloor"||e.placementMode=="followfloorceiling",d=e.placementMode=="followfloorceiling",a=d&&r>0?1/r:1,o=y-l;u??=new Ye(new Float32Array(o*3),3);let[c,g,v]=Tt(t),[E,_,S]=Tt(u),C=_+h*S,A=g+l*v;for(let I=0;I<o;I++){let B=C+S*I,k=A+v*I;f.x=c[k+0],f.y=c[k+1],f.z=c[k+2];let T=f.y;if(f.applyMatrix4(p),x){let P=(f.x+i)/be,O=(f.z+s)/be;if(d){let G=T*a,$=_r(n,P,O,e.level),z=_r(n,P,O,e.level+1)-e.scaleModelHeightOffset;f.y+=-T+z*G+$*(1-G)}else f.y+=_r(n,P,O,e.level)}else f.y+=m;E[B+0]=f.x,E[B+1]=f.y,E[B+2]=f.z}return u}function _r(t,e,n,r){let i=Math.floor(e),s=Math.floor(n),u=t.getTile(i,s,r);if(!u)return 0;if(u.waterProps)return u.waterProps.y00;let h=(1-(e-i))*(1-(n-s)),l=(e-i)*(1-(n-s)),y=(1-(e-i))*(n-s),p=(e-i)*(n-s);return u.y*h+u.y01*l+u.y10*y+u.y11*p}class hu{engine;area;tilemask;xsize;zsize;levels=4;xoffset;zoffset;tiles;xstep;zstep;levelstep;constructor(e,n,r){this.area=n,this.tilemask=r?.filter(i=>lu(i,n)),this.engine=e,this.xoffset=n.x,this.zoffset=n.z,this.xsize=n.xsize,this.zsize=n.zsize,this.xstep=1,this.zstep=this.xstep*n.xsize,this.levelstep=this.zstep*n.zsize,this.tiles=new Array(this.levelstep*this.levels).fill(void 0)}getHeightCollisionFile(e,n,r,i,s){let u=new Uint16Array(i*s*2);for(let h=0;h<s;h++)for(let l=0;l<i;l++){let y=this.getTile(e+l,n+h,r);if(y){let p=(l+h*i)*2,m=(y.playery00+y.playery01+y.playery10+y.playery11)/4;u[p+0]=m/16;let f=0,x=y.effectiveCollision;for(let d=0;d<9;d++){let a=x.walk[d]?x.sight[d]?2:1:0;f+=Math.pow(3,d)*a}u[p+1]=f}}return u}getTile(e,n,r){if(e-=this.xoffset,n-=this.zoffset,!(e<0||n<0||e>=this.xsize||n>=this.zsize))return this.tiles[this.levelstep*r+n*this.zstep+e*this.xstep]}blendUnderlays(){for(let e=this.zoffset;e<this.zoffset+this.zsize;e++)for(let n=this.xoffset;n<this.xoffset+this.xsize;n++){let r=0,u=((this.getTile(n,e,1)?.settings??0)&2)!=0?-1:0;for(let h=0;h<this.levels;h++){let l=this.getTile(n,e,h);if(!l)continue;if(!l.debug_nxttile){let C=0,A=0,I=0,B=0;for(let k=-4;k<=5;k++)for(let T=-4;T<=5;T++){let P=this.getTile(n+T,e+k,h);if(!P||!P.underlayVisible)continue;let O=P.originalUnderlayColor;C+=O[0],A+=O[1],I+=O[2],B++}B>0&&(l.underlayprops.color=[C/B,A/B,I/B])}this.getTile(n-1,e-1,h);let y=this.getTile(n,e-1,h),p=this.getTile(n+1,e-1,h),m=this.getTile(n+1,e,h),f=this.getTile(n+1,e+1,h),x=this.getTile(n,e+1,h),d=this.getTile(n-1,e+1,h),a=this.getTile(n-1,e,h),o=0,c=0;a&&m&&(o=(m.y-a.y)/(2*be)),y&&x&&(c=(x.y-y.y)/(2*be));let g=Math.hypot(o,c,1);l.normalZ=-o/g,l.normalX=-c/g,l.y01=m?.y??l.y,l.y10=x?.y??l.y,l.y11=f?.y??l.y,l.playery00=l.y,l.playery01=m?.y??l.y01,l.playery10=x?.y??l.y10,l.playery11=f?.y??l.y11,l.waterProps&&(l.playery00=Math.max(l.playery00,l.waterProps.y00),l.playery01=Math.max(l.playery01,l.waterProps.y01),l.playery10=Math.max(l.playery10,l.waterProps.y10),l.playery11=Math.max(l.playery11,l.waterProps.y11)),l.next01=m,l.next10=x,l.next11=f;let v=((l.settings??0)&8)!=0,E=h+u;v&&(r=0);let _=this.getTile(n,e,E),S=((_?.settings??0)&4)!=0;_&&E!=h&&(_.effectiveCollision=l.rawCollision,_.playery00=l.playery00,_.playery01=l.playery01,_.playery10=l.playery10,_.playery11=l.playery11),l.effectiveLevel=E,l.effectiveVisualLevel=Math.max(l.effectiveVisualLevel,r);for(let C=-1;C<=1;C++)for(let A=-1;A<=1;A++){let I=this.getTile(n+A,e+C,h);I&&((I.settings??0)&8)==0&&(I.effectiveVisualLevel=Math.max(I.effectiveVisualLevel,r))}if(S&&(r=E+1),l.waterProps)l.waterProps.shape.length==0&&(f?.waterProps||x?.waterProps||m?.waterProps?l.waterProps.shape=Et[0].overlay:l.waterProps.shape=Et[4].overlay);else{let C=x?.waterProps?.isoriginal||m?.waterProps?.isoriginal;f?.waterProps?.isoriginal&&C?l.waterProps={...f.waterProps,isoriginal:!1,shape:Et[0].overlay}:f?.waterProps?.isoriginal?l.waterProps={...f.waterProps,isoriginal:!1,shape:Et[6].overlay}:d?.waterProps?.isoriginal&&x?.waterProps?.isoriginal?l.waterProps={...d.waterProps,isoriginal:!1,shape:Et[5].overlay}:p?.waterProps?.isoriginal&&m?.waterProps?.isoriginal&&(l.waterProps={...p.waterProps,isoriginal:!1,shape:Et[7].overlay})}l.waterProps&&(m?.waterProps&&(l.waterProps.y01=m.waterProps.y00),x?.waterProps&&(l.waterProps.y10=x.waterProps.y00),f?.waterProps?l.waterProps.y11=f.waterProps.y00:m?.waterProps?l.waterProps.y11=m.waterProps.y10:x?.waterProps&&(l.waterProps.y11=x.waterProps.y01))}}for(let e=this.zoffset;e<this.zoffset+this.zsize;e++)for(let n=this.xoffset;n<this.xoffset+this.xsize;n++)for(let r=0;r<this.levels;r++){let i=this.getTile(n,e,r);if(i&&i.bleedsOverlayMaterial)for(let s of i.shape.overlay){let u=i;s.nextx&&s.nextz?u=u.next11:s.nextx?u=u.next01:s.nextz&&(u=u.next10),u&&u.vertexprops[s.subvertex].materialBleedpriority<i.overlayprops.materialBleedpriority&&(u.vertexprops[s.subvertex]=i.overlayprops)}}}gatherMaterials(e,n,r,i){let s=new Map,u=(h,l)=>{let y=1;const p=128;l<p?y=p/l+1:l%p!=0&&(y=1+p/l);let m=s.get(h);(!m||m<y)&&s.set(h,y)};for(let h=0;h<this.levels;h++)for(let l=0;l<i;l++)for(let y=0;y<r;y++){let p=this.getTile(e+y,n+l,h);p&&(p.underlayprops.material!=-1&&u(p.underlayprops.material,p.underlayprops.materialTiling),p.overlayprops.material!=-1&&u(p.overlayprops.material,p.overlayprops.materialTiling),p.waterProps&&p.waterProps.props.material!=-1&&u(p.waterProps.props.material,p.waterProps.props.materialTiling))}return s}addMapsquare(e,n,r,i,s=!1){if(e.length!=r.xsize*r.zsize*i)throw new Error;let u=(r.x-this.xoffset)*this.xstep+(r.z-this.zoffset)*this.zstep;for(let h=0;h<r.zsize;h++)for(let l=0;l<r.xsize;l++){if(!Si(this.area,r.x+l,r.z+h)||this.tilemask&&!this.tilemask.some(x=>Si(x,r.x+l,r.z+h)))continue;let y=(r.x+l)*be,p=(r.z+h)*be,m=h+l*r.zsize,f=0;for(let x=0;x<this.levels;x++){let d=x<i?e[m]:{},a=null,o=d.height;if(n){let v=[n.level0,n.level1,n.level2,n.level3][x];v&&(a=v[(l+1)*66+h+1],o=a.flags&16?a.rest?.waterheight:a.height)}o!=null&&o!=0?f+=o==1?0:o:f+=30;let c;if(a){let v=a.flags,E=(v&16)!=0,_=(v&2?1:0)|(v&4?2:0)|(v&8?4:0)|(v&32?8:0)|(v&64?16:0);E&&(_|=128),c=new Di(f,_,y,p,x,s);let S=a.rest?.overlay_under??a.rest?.overlay,C=a.rest?.underlay_under??a.rest?.underlay,A=E?cu(a.rest?.shape??0):a.rest?.shape;c.addUnderlay(this.engine,C),c.addOverlay(this.engine,S,A),E&&c.addUnderWater(this.engine,a.height,a.rest?.overlay,a.rest?.underlay),c.debug_raw=d,c.debug_nxttile=a,c.originalUnderlayColor=pr(qt(a.rest?.underlaycolor??0)),c.underlayprops.color=c.originalUnderlayColor}else c=new Di(f,d.settings??0,y,p,x,s),c.addUnderlay(this.engine,d.underlay),c.addOverlay(this.engine,d.overlay,d.shape),c.debug_raw=d;let g=u+this.xstep*l+this.zstep*h+this.levelstep*x;this.tiles[g]=c,m+=r.xsize*r.zsize}}}}async function va(t,e,n){let r=t.classicData?Bn:In,i=e+n*Mn,s,u=null,h={},l=[],y,p=Lr,m=0,f=0;if(t.getBuildNr()>gr){let d=null,a=null,o=null;if(t.getBuildNr()>=759){let v=(await t.getCacheIndex(N.mapsquares))[i];if(!v)return null;m=v.crc,f=v.version;let E=await t.getFileArchive(v),_=v.subindices.indexOf(zt.squares);if(_==-1)return null;d=E[_].buffer;let S=v.subindices.indexOf(zt.locations);if(S!=-1&&(o=E[S].buffer),t.getBuildNr()>=861){let C=v.subindices.indexOf(zt.square_nxt);C!=-1&&(a=E[C].buffer)}}else if(t.getBuildNr()>dt){try{let g=await t.findFileByName(N.mapsquares,`m${e}_${n}`);if(!g)return null;m=g.crc,f=g.version,d=await t.getFile(g.major,g.minor,g.crc)}catch{return null}try{let g=await t.findFileByName(N.mapsquares,`l${e}_${n}`);g&&(m=bt(g.crc,m),f=Math.max(f,g.version),o=await t.getFile(g.major,g.minor,g.crc))}catch{}}else{let g=e*256+n,v=t.legacyData?.mapmeta.get(g);if(!v)return null;try{m=v.crc,f=v.version,d=await t.getFile(ct.map,v.map),o=await t.getFile(ct.map,v.loc)}catch{console.warn(`map for ${e}_${n} declared but file did not exist`)}}if(!d)return null;let c=K.mapsquareTiles.read(d,t.rawsource);a&&(u=K.mapsquareTilesNxt.read(a,t.rawsource)),s=c.tiles,h=c.extra,o&&(l=K.mapsquareLocations.read(o,t.rawsource).locations),y={x:e*r,z:n*r,xsize:r,zsize:r}}else{let d=await ha(t,e,n);if(!d)return null;s=d.tiles,y=d.rect,p=d.levels,l=d.locs,m=d.mapfilehash}return{tilerect:y,levelcount:p,mapsquarex:e,mapsquarez:n,chunkfilehash:m,chunkfileversion:f,tiles:s,nxttiles:u,extra:h,rawlocs:l,locs:[]}}async function $u(t,e,n,r){let i=r?.padfloor?20:0,s=t.classicData?Bn:In,u=Math.ceil(i/s),h=new hu(t,{x:e*s-i,z:n*s-i,xsize:s+i*2,zsize:s+i*2},r?.mask),l=null;for(let y=-u;y<=u;y++)for(let p=-u;p<=u;p++){let m=await va(t,e+p,n+y);m&&(h.addMapsquare(m.tiles,m.nxttiles,m.tilerect,m.levelcount,!!r?.collision),m.mapsquarex==e&&m.mapsquarez==n&&(l=m))}return t.classicData&&da(h),h.blendUnderlays(),l&&(l.locs=await yu(t,h,l.rawlocs,l.tilerect.x,l.tilerect.z,!!r?.collision)),{grid:h,chunk:l,chunkSize:s,chunkx:e,chunkz:n}}async function du(t,e){let n=new Mi,r=[0,0,0,0],i=-1;if(e?.extra.unk00?.unk20&&(r=e.extra.unk00.unk20.slice(1)),e?.extra.unk80){let u=(await t.engine.getArchiveById(N.config,ze.environments)).find(l=>l.fileid==e.extra.unk80.environment),h=K.environments.read(u.buffer,t.engine.rawsource);typeof h.model=="number"&&(i=h.model,n=await Cn(t,await t.getModelData(h.model)))}return{skybox:n,fogColor:r,skyboxModelid:i}}async function pu(t,e,n,r){let i=[],s=e.gatherMaterials(n.tilerect.x,n.tilerect.z,n.tilerect.xsize+1,n.tilerect.zsize+1),u=new Map,h=[];for(let[m,f]of s.entries()){let x=t.engine.getMaterialData(m);x.textures.diffuse&&t.textureType!="none"&&h.push(t.getTextureFile("diffuse",x.textures.diffuse,x.stripDiffuseAlpha).then(d=>d.toWebgl()).then(d=>{u.set(x.textures.diffuse,{tex:d,repeat:f})}))}await Promise.all(h);let l,y=[...u.entries()].sort((m,f)=>f[1].tex.width*f[1].repeat-m[1].tex.width*m[1].repeat),p=[[256,256],[512,512],[1024,512],[1024,1024],[1024,2048],[2048,1024],[2048,2048],[2048,3072],[2048,4096],[3072,4096],[4096,4096]];e:for(let m of p){l=new mu(m[0],m[1]);for(let[f,{tex:x,repeat:d}]of y)if(!l.addTexture(f,x,d))continue e;break}for(let m=0;m<Lr;m++)i.push(Ot(e,n,m,l,!0,"default")),i.push(Ot(e,n,m,l,!0,"default",!0)),r?.map2d&&(i.push(Ot(e,n,m,l,!1,"worldmap")),i.push(Ot(e,n,m,l,!1,"worldmap",!0))),r?.invisibleLayers&&(i.push(Ot(e,n,m,l,!1,"wireframe")),i.push(Eu(e,n,m))),r?.minimap&&(i.push(Ot(e,n,m,l,!1,"minimap")),i.push(Ot(e,n,m,l,!1,"minimap",!0)));return i}async function Ju(t,e,n,r,i){let{grid:s,chunk:u}=await e,h,l=new Ri;l.name=`mapsquare ${n}.${r}`;let y=new Map;if(u){let f=await pu(t,s,u,i),x=i?.map2d?await xu(t.engine,s,u.locs):[],d=await Ci(t,u.locs),a=[...d.byMaterial,...x];if(i.minimap){let v=await Ci(t,u.locs,!0);a.push(...v.byMaterial)}let o=u.tilerect.x*be,c=u.tilerect.z*be;if(l.matrixAutoUpdate=!1,l.position.set(o,0,c),l.updateMatrix(),a.length!=0){let v=await Promise.all(a.map(E=>E.material??t.getMaterial(E.materialId,E.hasVertexAlpha,E.minimapVariant)));l.add(...a.map((E,_)=>wu(s,E,o,c,v[_],y)))}let g=(await Promise.all(f.map(v=>_u(t,v)))).filter(v=>v);g.length!=0&&l.add(...g);for(let v=0;v<Lr;v++){let E=Ai(s,u,v);E&&l.add(E);let _=Ai(s,u,v,!0);_&&l.add(_)}if(i.hashboxes)for(let v=0;v<Lr;v++)l.add(await su(t,d.byLogical,s,u.mapsquarex,u.mapsquarez,v)),l.add(await ou(t,s,u,v));h=d.byLogical}else h=new Map;let p=u&&i?.skybox?await du(t,u):null,m=t.engine.classicData?Bn:In;return l?.traverse(f=>{if(f instanceof ir){let x=f,d=!1;for(;x;)x.userData.modeltype=="floorhidden"&&(d=!0),x=x.parent;d&&f.material instanceof dn&&(f.material.wireframe=!0)}}),{chunkx:n,chunkz:r,grid:s,chunk:u,sky:p,modeldata:h,chunkroot:l,chunkSize:m,locRenders:y}}class mu{padsize=32;width;height;allocs=[];map=new Map;allocx=0;allocy=0;allocLineHeight=0;result=null;resultSource=null;constructor(e,n){this.width=e,this.height=n}addTexture(e,n,r){this.result!=null&&(this.result=null,console.log("adding textures to atlas after creation of texture"));let i=Math.floor(n.width*r),s=Math.floor(n.height*r),u=i+2*this.padsize,h=s+2*this.padsize;if(this.allocx+u>this.width&&(this.allocx=0,this.allocy+=this.allocLineHeight,this.allocLineHeight=0),this.allocLineHeight=Math.max(this.allocLineHeight,h),this.allocy+this.allocLineHeight>this.height)return!1;let l={u:(this.allocx+this.padsize)/this.width,v:(this.allocy+this.padsize)/this.height,usize:n.width/this.width,vsize:n.height/this.height,x:this.allocx+this.padsize,y:this.allocy+this.padsize,repeatWidth:i,repeatHeight:s,totalpixels:(this.padsize+i+this.padsize)*(this.padsize+s+this.padsize),img:n};return this.allocs.push(l),this.allocx+=u,this.map.set(e,l),!0}convertToThreeTexture(){return this.resultSource??=(()=>{let e=new Aa(this.convert());return e.flipY=!1,e.magFilter=lr,e.minFilter=Ca,e.generateMipmaps=!0,e.colorSpace=Ir,e})()}convert(){if(this.result)return this.result;let e=document.createElement("canvas");e.width=this.width,e.height=this.height;let n=e.getContext("2d",{willReadFrequently:!0}),r=(u,h,l,y=0,p=0,m=u.width,f=u.height)=>{n.drawImage(u,y,p,m,f,h,l,m,f)};for(let u of this.allocs){let h=-this.padsize,l=u.repeatWidth+this.padsize,y=-this.padsize,p=u.repeatHeight+this.padsize;for(let m=y;m<p;m=i){var i=Math.min(p,Math.ceil((m+1)/u.img.height)*u.img.height);for(let f=h;f<l;f=s){var s=Math.min(l,Math.ceil((f+1)/u.img.width)*u.img.width);r(u.img,u.x+f,u.y+m,ri(f,u.img.width),ri(m,u.img.height),s-f,i-m)}}}return this.result=e,e}}function ya(t){let e=-1;return t.morphs_1&&(e=t.morphs_1.unk2[0]??t.morphs_1.unk3),t.morphs_2&&(e=t.morphs_2.unk2),e==32767&&(e=-1),e==65535&&(e=-1),e}async function gu(t,e){let n=e;if(t.classicData){let r=pa(t,e);return{rawloc:r,morphedloc:r,resolvedid:n}}else{let r=await t.getGameFile("objects",e),i=K.object.read(r,t),s=i;if(i.morphs_1||i.morphs_2){let u=ya(i);if(u!=-1){let h=await t.getGameFile("objects",u);s={...i,...K.object.read(h,t)},n=u}}return{rawloc:i,morphedloc:s,resolvedid:n}}}async function xu(t,e,n){let r=new sn;r.transparent=!0,r.depthTest=!1;let i=l=>({wallgroup:{models:[],groupid:"walls"+l,minimapVariant:!1,hasVertexAlpha:!1,materialId:-1,material:{mat:r,matmeta:{...Vt()}},overlayIndex:1},mapscenes:new Map}),s=[i(0),i(1),i(2),i(3)],u=(l,y)=>{let p=new Be().set((y.x+y.sizex/2)*be,0,(y.z+y.sizez/2)*be),m=new lt().setFromAxisAngle(Wt,y.rotation/2*Math.PI),f=new Be(1,1,1);s[y.effectiveLevel].wallgroup.models.push({model:l.meshes[0],morph:{level:y.plane,placementMode:"followfloor",translate:p,rotation:m,scale:f,scaleModelHeightOffset:0,originx:p.x,originz:p.z},miny:l.miny,maxy:l.maxy,extras:{modeltype:"overlay",isclickable:!1,modelgroup:"walls"+y.visualLevel,level:y.effectiveLevel}})},h=async(l,y)=>{let p=s[l.effectiveLevel].mapscenes.get(y),m=e.engine.mapMapscenes[y];if(m.sprite_id==null)return;let f=await t.getFileById(N.sprites,m.sprite_id),x=Lt(f),d=new sn;d.map=new ur(x[0].img.data,x[0].img.width,x[0].img.height,cr),d.depthTest=!1,d.transparent=!0,d.needsUpdate=!0,p={groupid:"mapscenes"+l.effectiveLevel,hasVertexAlpha:!1,materialId:-1,minimapVariant:!1,material:{mat:d,matmeta:{...Vt(),alphamode:"cutoff"}},models:[],overlayIndex:2},s[l.effectiveLevel].mapscenes.set(y,p),console.warn("using very inefficient code path for 3d mapscenes");let a=d.map;const o=128;let c=a.image.width*o,g=a.image.height*o,v=new Sn(null).addParallelogram([255,255,255],[-c/2,0,-g/2],[c,0,0],[0,0,g]).convertSubmesh(0),E=new Be((l.x+l.sizex/2)*be,0,(l.z+l.sizez/2)*be);p.models.push({model:v,morph:{level:l.plane,placementMode:"simple",rotation:new lt,scale:new Be(1,1,1),translate:E,scaleModelHeightOffset:0,originx:E.x,originz:E.z},miny:0,maxy:0,extras:{modeltype:"overlay",isclickable:!1,level:l.visualLevel,modelgroup:"mapscenes"}})};for(let l of n)l.effectiveLevel!=-1&&(l.type==0?u(Jt.wall,l):l.type==1?u(Jt.shortcorner,l):l.type==2?u(Jt.longcorner,l):l.type==3?u(Jt.pillar,l):l.type==9&&u(Jt.diagonal,l),l.location.mapscene!=null&&await h(l,l.location.mapscene));return s.flatMap(l=>[l.wallgroup,...l.mapscenes.values()])}function vu(t,e,n=!1){let r=[],i=e.location,s=e.type==22&&!i.unknown_49,u={replaceColors:i.color_replacements??void 0,replaceMaterials:i.material_replacements??void 0,lodLevel:n?100:void 0};t.getBuildNr()>gr&&t.getBuildNr()<377&&(u.replaceMaterials=u.replaceColors);const h=4;let l=new Be((i.translateX??0)*h,-(i.translateY??0)*h,(i.translateZ??0)*h);const y=1/128;let p=new Be((i.scaleX??128)*y,(i.scaleY??128)*y,(i.scaleZ??128)*y),m=(e.x+e.sizex/2)*be,f=(e.z+e.sizez/2)*be,x=new lt().setFromAxisAngle(Wt,e.rotation/2*Math.PI);if(e.rotation%2==1){let v=p.x;p.x=p.z,p.z=v}if(i.mirror&&(p.z*=-1),l.add(new Be(m,0,f)),n&&(l.y-=.2*be),e.placement&&(l.add(new Be().set(e.placement.translateX??0,-(e.placement.translateY??0),e.placement.translateZ??0)),e.placement.scale&&p.multiplyScalar((e.placement.scale??128)/128),(e.placement.scaleX||e.placement.scaleY||e.placement.scaleZ)&&p.multiply(new Be().set((e.placement.scaleX??128)/128,(e.placement.scaleY??128)/128,(e.placement.scaleZ??128)/128)),e.placement.rotation)){let v=30517578125e-15,E=new lt(-e.placement.rotation[0]*v,e.placement.rotation[1]*v,-e.placement.rotation[2]*v,e.placement.rotation[3]*v);x.premultiply(E)}let d=typeof i.probably_morphCeilingOffset<"u",a=d||!!i.probably_morphFloor,o={translate:l,rotation:x,scale:p,level:e.plane,placementMode:d?"followfloorceiling":a?"followfloor":"simple",scaleModelHeightOffset:i.probably_morphCeilingOffset??0,originx:m,originz:f},c={modeltype:"location",isclickable:!1,modelgroup:n?`mini_objects${e.resolvedlocid==e.locid&&e.location.probably_animation==null?e.visualLevel:0}`:`objects${e.visualLevel}`,locationid:e.locid,worldx:e.x,worldz:e.z,rotation:e.rotation,mirror:!!i.mirror,isGroundDecor:s,level:e.visualLevel,locationInstance:e},g=(v,E)=>{if(!(n&&s)){if(i.models){for(let _ of i.models)if(_.type==v)for(let S of _.values)r.push({model:S,morph:E})}else if(i.models_05){for(let _ of i.models_05.models)if(_.type==v)for(let S of _.values)r.push({model:S,morph:E})}}};if(e.type==11)g(10,{...o,rotation:new lt().setFromAxisAngle(Wt,Math.PI/4).premultiply(o.rotation)});else if(e.type==8||e.type==7||e.type==6){if(e.type==6||e.type==8){let v=be*.6,E=Math.PI/4,_=new lt().setFromAxisAngle(Wt,E).premultiply(o.rotation);g(4,{...o,rotation:_,translate:new Be(v,0,0).applyQuaternion(_).add(o.translate)})}if(e.type==7||e.type==8){let v=be*.5,E=Math.PI/4*5,_=new lt().setFromAxisAngle(Wt,E).premultiply(o.rotation);g(4,{...o,rotation:_,translate:new Be(v,0,0).applyQuaternion(_).add(o.translate)})}}else if(e.type==2)g(2,{...o,scale:new Be(1,1,-1).multiply(o.scale)}),g(2,{...o,rotation:new lt().setFromAxisAngle(Wt,Math.PI/2).premultiply(o.rotation)});else if(e.type==5){let v=be/6;g(4,{...o,translate:new Be(v,0,0).applyQuaternion(o.rotation).add(o.translate)})}else g(e.type,o);return{models:r,mods:u,extras:c}}async function yu(t,e,n,r,i,s=!1){let u=[],h=await Promise.all(n.map(l=>gu(t,l.id)));for(let l=0;l<n.length;l++){let y=n[l],{morphedloc:p,rawloc:m,resolvedid:f}=h[l];if(p)for(let x of y.uses){let d=e.getTile(x.x+r,x.y+i,x.plane);if(!d)continue;let a=p.width??1,o=p.length??1;x.rotation%2==1&&([a,o]=[o,a]);let c=d.effectiveVisualLevel;for(let v=0;v<o;v++)for(let E=0;E<a;E++){let _=e.getTile(x.x+r+E,x.y+i+v,x.plane);_&&_.effectiveVisualLevel>c&&(c=_.effectiveVisualLevel)}u.push({location:p,locid:y.id,resolvedlocid:f,placement:x.extra,sizex:a,sizez:o,x:x.x+r,z:x.y+i,type:x.type,rotation:x.rotation,plane:x.plane,visualLevel:c,effectiveLevel:d.effectiveLevel,forceVisible:!!(d.settings&8)});const g=[9,10,11,12,13,14,15,16,17,18,19,20,21];if(s&&!m.probably_nocollision)for(let v=0;v<o;v++)for(let E=0;E<a;E++){let _=e.getTile(x.x+r+E,x.y+i+v,d.effectiveLevel);if(_){let S=_.effectiveCollision;x.type==22&&m.maybe_blocks_movement&&(S.walk[0]=!0),x.type==0?(S.walk[1+x.rotation]=!0,m.maybe_allows_lineofsight||(S.sight[1+x.rotation]=!0)):x.type==2?(S.walk[1+x.rotation]=!0,S.walk[1+(x.rotation+1)%4]=!0,m.maybe_allows_lineofsight||(S.sight[1+x.rotation]=!0,S.sight[1+(x.rotation+1)%4]=!0)):x.type==1||x.type==3?(S.walk[5+x.rotation]=!0,m.maybe_allows_lineofsight||(S.sight[5+x.rotation]=!0)):g.includes(x.type)&&(S.walk[0]=!0,m.maybe_allows_lineofsight||(S.sight[0]=!0))}}}}return u}function bu(t,e,n,r=!1){const i=e.xsize*e.zsize*5*6*2;let s=0,u=12,h=16;const l=h/4|0,y=h;let[p,m]=nr(h*i*3),[f,x]=nr(i*3*4,"index"),d=new Uint32Array(f),a=new Float32Array(p),o=new Uint8Array(p),c=e.x*be,g=e.z*be,v=0,E=0,_=(B,k,T,P,O)=>{const G=v*l+s,$=v*y+u,z=(r?B.y:B.playery00)*(1-k)*(1-P),H=(r?B.y01:B.playery01)*k*(1-P),Y=(r?B.y10:B.playery10)*(1-k)*P,W=(r?B.y11:B.playery11)*k*P;return a[G+0]=B.x+k*be-c,a[G+1]=z+H+Y+W+T*be,a[G+2]=B.z+P*be-g,o[$+0]=O[0],o[$+1]=O[1],o[$+2]=O[2],o[$+3]=O[3],v++},S=(B,k,T,P,O,G,$,z)=>{let H=_(B,k,T,P,z),Y=_(B,k+O,T,P,z),W=_(B,k,T+G,P,z),J=_(B,k+O,T+G,P,z),se=_(B,k,T,P+$,z),xe=_(B,k+O,T,P+$,z),he=_(B,k,T+G,P+$,z),Ee=_(B,k+O,T+G,P+$,z);d[E++]=H,d[E++]=J,d[E++]=Y,d[E++]=H,d[E++]=W,d[E++]=J,d[E++]=Y,d[E++]=Ee,d[E++]=xe,d[E++]=Y,d[E++]=J,d[E++]=Ee,d[E++]=H,d[E++]=he,d[E++]=W,d[E++]=H,d[E++]=se,d[E++]=he,d[E++]=W,d[E++]=Ee,d[E++]=J,d[E++]=W,d[E++]=he,d[E++]=Ee,d[E++]=H,d[E++]=xe,d[E++]=se,d[E++]=H,d[E++]=Y,d[E++]=xe,d[E++]=se,d[E++]=Ee,d[E++]=he,d[E++]=se,d[E++]=xe,d[E++]=Ee};for(let B=e.z;B<e.z+e.zsize;B++)for(let k=e.x;k<e.x+e.xsize;k++){let T=t.getTile(k,B,n),P=r?T?.rawCollision:T?.effectiveCollision;if(T&&P){if(P.walk[0]){let O=P.sight[0]?1.8:.3;S(T,.05,0,.05,.9,O,.9,[100,50,50,255])}if(r&&P.settings&30){let O=0,G=0,$=0;P.settings&2&&(O+=0,G+=127,$+=127),P.settings&4&&(O+=0,G+=127,$+=0),P.settings&8&&(O+=127,G+=0,$+=0),P.settings&-16&&(O+=0,G+=0,$+=127),S(T,-.05,-.05,0,1.1,.25,1.1,[O,G,$,255])}for(let O=0;O<4;O++){if(P.walk[1+O]){let G=P.sight[1+O]?2:.5,$=[255,60,60,255];O==0&&S(T,0,0,0,.15,G,1,$),O==1&&S(T,0,0,.85,1,G,.15,$),O==2&&S(T,.85,0,0,.15,G,1,$),O==3&&S(T,0,0,0,1,G,.15,$)}if(P.walk[5+O]){let G=P.sight[5+O]?2:.5,$=[255,60,60,255];O==0&&S(T,0,0,.85,.15,G,.15,$),O==1&&S(T,.85,0,.85,.15,G,.15,$),O==2&&S(T,.85,0,0,.15,G,.15,$),O==3&&S(T,0,0,0,.15,G,.15,$)}}}}let C={modeltype:"overlay",isclickable:!1,modelgroup:(r?"collision-raw":"collision")+n,level:n},A=m(v*h),I=x(E*4);return{pos:new Float32Array(A),color:new Uint8Array(A),indices:new Uint32Array(I),posstride:l,colorstride:y,posoffset:s,coloroffset:u,extra:C}}function Ai(t,e,n,r=!1){let{color:i,indices:s,pos:u,coloroffset:h,colorstride:l,posoffset:y,posstride:p,extra:m}=bu(t,e.tilerect,n,r);if(s.length==0)return;let f=new mr;f.setAttribute("position",new hr(new Gt(u,p),3,y,!1)),f.setAttribute("color",new hr(new Gt(i,l),4,h,!0)),f.index=new Ye(s,1,!1);let x=new dn({shininess:0});x.flatShading=!0,_n(x,1),x.vertexColors=!0;let d=new ir(f,x);return d.userData=m,d.name=`${r?"raw ":""}collision ${e.mapsquarex},${e.mapsquarez} (${n})`,d}async function Ci(t,e,n=!1){let r=new Map,i=new Map,s=new Map,u=e.map(p=>vu(t.engine,p,n)),h=[],l=new Set;for(let p of u)for(let m of p.models)l.has(m.model)||(l.add(m.model),h.push(t.getModelData(m.model).catch(f=>(console.warn("ignoring missing model",m.model,"in loc",p.extras.locationInstance.location.name??p.extras.locationid),{bonecount:0,skincount:0,miny:0,maxy:0,meshes:[]})).then(f=>r.set(m.model,f))));await Promise.all(h);for(let p=0;p<u.length;p++){let m=u[p],f=0,x=0;for(let a of m.models){let o=r.get(a.model);f=Math.min(o.miny,f),x=Math.max(o.maxy,x)}let d=[];for(let a of m.models){let o=r.get(a.model);for(let c of o.meshes){let g=Dn(c,m.mods),v=mo(g.materialId,g.hasVertexAlpha,n),E=i.get(m.extras.modelgroup);E||(E=new Map,i.set(m.extras.modelgroup,E));let _=Vi(E,v,()=>({materialId:g.materialId,material:null,hasVertexAlpha:g.hasVertexAlpha,minimapVariant:n,models:[],groupid:m.extras.modelgroup,overlayIndex:0})),S={model:g,morph:a.morph,miny:f,maxy:x,extras:m.extras};d.push(S),_.models.push(S)}}d.length!=0&&s.set(e[p],d)}let y=[];for(let p of i.values())y.push(...p.values());return{byMaterial:y,byLogical:s}}class Nn extends ir{renderSections=[];constructor(e,n){super(e,n)}cloneSection(e){let n=new mr;for(let u in this.geometry.attributes){let h=this.geometry.attributes[u],l=new Ye(h.array.slice(e.startvertex*h.itemSize,e.endvertex*h.itemSize),h.itemSize,h.normalized);n.setAttribute(u,l)}let r=this.geometry.index.array.slice(e.startindex,e.endindex);for(let u=0;u<r.length;u++)r[u]-=e.startvertex;n.setIndex(new Ye(r,1));let i=new Nn(n,this.material),s={mesh:i,startindex:0,endindex:e.endindex-e.startindex,startvertex:0,endvertex:e.endvertex-e.startvertex,hidden:!1};return i.renderSections.push(s),s}setSectionHide(e,n){if(e.hidden==n)return;e.hidden=n;let r=this.geometry.drawRange.count;if(this.geometry.drawRange.start!=0)throw new Error("unexpected");if(!this.geometry.index)throw new Error("unexpected");isFinite(r)||(r=this.geometry.index.count);let i=e.endindex-e.startindex,s=n?r-i:r;if(n){let y=this.geometry.index.array.slice(e.startindex,e.endindex);this.geometry.index.array.copyWithin(e.startindex,e.endindex,r),this.geometry.index.array.set(y,s)}else{let y=this.geometry.index.array.slice(e.startindex,e.endindex);this.geometry.index.array.copyWithin(r+i,r,e.startindex),this.geometry.index.array.set(y,s)}let u=n?e.startindex:s,h=n?r:e.endindex,l=n?-i:i;for(let y=0;y<this.renderSections.length;y++){let p=this.renderSections[y];p!=e&&(p.startindex<u||p.startindex>=h||(p.startindex+=l,p.endindex+=l))}e.startindex=s,e.endindex=s+i,this.geometry.setDrawRange(0,r+l),this.geometry.index.needsUpdate=!0}}function wu(t,e,n,r,i,s){let u=e.models.reduce((_,S)=>_+S.model.vertexend-S.model.vertexstart,0),h=e.models.reduce((_,S)=>_+S.model.indices.count,0),l=e.models.reduce((_,S)=>_+ +S.model.hasVertexAlpha,0);if(l!=0&&l!=e.models.length)throw new Error("all meshes are expected to have same vertexAlpha setting");let y=l!=0,p=0,m=0,f=new Ye(new Float32Array(u*3),3),x=new Ye(new Float32Array(u*2),2),d=new Ye(new Uint8Array(u*(y?4:3)),y?4:3,!0),a=new Ye(new Int8Array(u*3),3,!0),o=new Ye(u>65535?new Uint32Array(h):new Uint16Array(h),1),c=new mr;c.setAttribute("position",f),c.setAttribute("normal",a),c.setAttribute("color",d),c.setAttribute("uv",x),c.setIndex(o);let g=new Nn(c),v=[];for(let _ of e.models){let S=_.model,C=xa(_.morph,n,r),A=S.vertexend-S.vertexstart,I=S.indices.count;v.push(m);let B={mesh:g,startindex:m,endindex:m+I,startvertex:p,endvertex:p+A,hidden:!1};g.renderSections.push(B),_.extras.modeltype=="location"&&Vi(s,_.extras.locationInstance,()=>[]).push(B);{let k=p-S.vertexstart,T=S.indices;if(C.determinant()<0)for(let P=0;P<I;P+=3){let O=m+P;o.setX(O+0,k+T.getX(P+0)),o.setX(O+1,k+T.getX(P+2)),o.setX(O+2,k+T.getX(P+1))}else for(let P=0;P<I;P+=3){let O=m+P;o.setX(O+0,k+T.getX(P+0)),o.setX(O+1,k+T.getX(P+1)),o.setX(O+2,k+T.getX(P+2))}}fu(S.attributes.pos,_.morph,t,_.maxy-_.miny,n,r,f,p,S.vertexstart,S.vertexend);{let k=new Be;if(S.attributes.normals){let T=S.attributes.normals,[P,O,G]=Tt(T),[$,z,H]=Tt(a),Y=S.vertexstart*G+O,W=p*H+z,J=new rt().makeRotationFromQuaternion(_.morph.rotation);for(let se=0;se<A;se++){let xe=W+se*H,he=Y+se*G;k.set(P[he+0],P[he+1],P[he+2]),k.applyMatrix4(J),$[xe+0]=Math.round(k.x),$[xe+1]=Math.round(k.y),$[xe+2]=Math.round(k.z)}}else na(o,f,a,m,m+I)}{let[k,T,P]=Tt(d),O=p*P+T;if(S.attributes.color){let[G,$,z]=Tt(S.attributes.color),H=S.vertexstart*z+$;if(y)for(let Y=0;Y<A;Y++){let W=O+Y*P,J=H+Y*z;k[W+0]=G[J+0],k[W+1]=G[J+1],k[W+2]=G[J+2],k[W+3]=G[J+3]}else for(let Y=0;Y<A;Y++){let W=O+Y*P,J=H+Y*z;k[W+0]=G[J+0],k[W+1]=G[J+1],k[W+2]=G[J+2]}}else for(let G=0;G<A;G++){let $=O+G*P;k[$+0]=1,k[$+1]=1,k[$+2]=1,y&&(k[$+3]=1)}}{let k=S.attributes.texuvs;if(k)for(let T=0;T<A;T++)x.setXY(p+T,k.getX(S.vertexstart+T),k.getY(S.vertexstart+T));else for(let T=0;T<A;T++)x.setXY(p+T,0,0)}p+=A,m+=I}An(g,i,e.minimapVariant);let E={modeltype:"locationgroup",modelgroup:e.groupid,isclickable:!0,subranges:v,searchPeers:!0,subobjects:e.models.map(_=>_.extras)};return g.renderOrder=e.overlayIndex,g.userData=E,g.matrixAutoUpdate=!1,g.updateMatrix(),g.name="merged locs",g}function Eu(t,e,n){const r=e.tilerect.xsize*e.tilerect.zsize*t.levels,i=6,s=0,u=3,h=24,l=28,y=32,p=18,m=52;let[f,x]=nr(r*m*i),[d,a]=nr(r*i*4,"index"),o=new Uint32Array(d),c=new Float32Array(f),g=new Uint8Array(f);const v=m/4|0,E=m|0;let _=0,S=0;const C=e.tilerect.x*be,A=e.tilerect.z*be;let I=[],B=[],k=1/0,T=1/0,P=1/0,O=-1/0,G=-1/0,$=-1/0;const z=(te,ne,re,ae,oe)=>{const j=_*v+s,ee=_*E+h,le=(1-ne)*(1-re),pe=ne*(1-re),Ae=(1-ne)*re,Pe=ne*re,Ce=te.x+ne*be-C,je=te.z+re*be-A,ue=te.playery00*le+te.playery01*pe+te.playery10*Ae+te.playery11*Pe;k=Math.min(k,Ce),T=Math.min(T,ue),P=Math.min(P,je),O=Math.max(O,Ce),G=Math.max(G,ue),$=Math.max($,je),c[j+0]=Ce,c[j+1]=ue,c[j+2]=je;let Z=ae[oe].color[0],fe=ae[oe].color[1],q=ae[oe].color[2];return g[ee+0]=Z,g[ee+1]=fe,g[ee+2]=q,g[ee+3]=255,_++};let H=[{material:-1,materialTiling:128,materialBleedpriority:0,color:[0,0,0]}],Y=[{material:-1,materialTiling:128,materialBleedpriority:0,color:[255,0,255]}];for(let te of[!0,!1])for(let ne=0;ne<e.tilerect.zsize;ne++)for(let re=0;re<e.tilerect.xsize;re++){let ae=t.getTile(e.tilerect.x+re,e.tilerect.z+ne,n),oe=ae;for(let le=n+1;le<e.levelcount;le++){let pe=t.getTile(e.tilerect.x+re,e.tilerect.z+ne,le);pe&&pe.effectiveLevel==n&&(oe=pe)}if(!ae||!oe)continue;let j=!!ae.effectiveCollision?.walk[0],ee=j?Y:H;j==te&&(o[S++]=z(ae,0,0,ee,0),o[S++]=z(ae,0,1,ee,0),o[S++]=z(ae,1,1,ee,0),o[S++]=z(ae,0,0,ee,0),o[S++]=z(ae,1,1,ee,0),o[S++]=z(ae,1,0,ee,0))}let W={modelgroup:"walkmesh"+n,modeltype:"floorhidden",mapsquarex:e.mapsquarex,mapsquarez:e.mapsquarez,level:n,isclickable:!0,searchPeers:!1,subobjects:I,subranges:B},J=x(_*m),se=a(S*4),xe=new Float32Array(J),he=new Uint8Array(J),Ee=new Uint16Array(J);return{chunk:e,level:n,tileinfos:I,mode:"walkmesh",iswater:!1,vertexstride:m,indices:new Uint32Array(se),nvertices:_,atlas:null,pos:{src:xe,offset:s,vecsize:3,normalized:!1},normal:{src:xe,offset:u,vecsize:3,normalized:!1},color:{src:he,offset:h,vecsize:4,normalized:!0},_RA_FLOORTEX_UV0:{src:Ee,offset:p+0,vecsize:2,normalized:!0},_RA_FLOORTEX_UV1:{src:Ee,offset:p+2,vecsize:2,normalized:!0},_RA_FLOORTEX_UV2:{src:Ee,offset:p+4,vecsize:2,normalized:!0},_RA_FLOORTEX_WEIGHTS:{src:he,offset:y,vecsize:3,normalized:!0},_RA_FLOORTEX_USESCOLOR:{src:he,offset:l,vecsize:3,normalized:!0},posmax:[O,G,$],posmin:[k,T,P],extra:W}}function Ot(t,e,n,r,i=!1,s="default",u=!1){const h=s=="wireframe",l=s=="worldmap",y=s=="minimap",p=e.tilerect.xsize*e.tilerect.zsize*t.levels,m=8,f=0,x=3,d=24,a=28,o=32,c=18,g=52;let[v,E]=nr(p*g*m),[_,S]=nr(p*m*4,"index"),C=new Uint32Array(_),A=new Float32Array(v),I=new Float32Array(v),B=new Uint8Array(v),k=new Uint8Array(v),T=new Uint8Array(v),P=new Uint16Array(v);const O=g/4|0,G=g/4|0,$=g|0,z=g|0,H=g|0,Y=g/2|0;let W=0,J=0;const se=e.tilerect.x*be,xe=e.tilerect.z*be;let he=[],Ee=[],te=1/0,ne=1/0,re=1/0,ae=-1/0,oe=-1/0,j=-1/0;const ee=(ue,Z,fe,q,ge)=>{const qe=W*O+f,Me=W*G+x,_e=W*$+d,Ne=W*H+o,Le=W*z+a,we=W*Y+c,Te=(1-Z)*(1-fe),We=Z*(1-fe),ft=(1-Z)*fe,ot=Z*fe,ht=ue.x+Z*be-se,gt=ue.z+fe*be-xe,Rt=u?ue.waterProps.y00*Te+ue.waterProps.y01*We+ue.waterProps.y10*ft+ue.waterProps.y11*ot:ue.y*Te+ue.y01*We+ue.y10*ft+ue.y11*ot,Pt=u?0:ue.normalX*Te+(ue.next01??ue).normalX*We+(ue.next10??ue).normalX*ft+(ue.next11??ue).normalX*ot,Dt=u?0:ue.normalZ*Te+(ue.next01??ue).normalZ*We+(ue.next10??ue).normalZ*ft+(ue.next11??ue).normalZ*ot;te=Math.min(te,ht),ne=Math.min(ne,Rt),re=Math.min(re,gt),ae=Math.max(ae,ht),oe=Math.max(oe,Rt),j=Math.max(j,gt),A[qe+0]=ht,A[qe+1]=Rt,A[qe+2]=gt,I[Me+0]=Pt,I[Me+1]=Math.sqrt(1-Pt*Pt-Dt*Dt),I[Me+2]=Dt;let At=q[ge].color[0],Ct=q[ge].color[1],St=q[ge].color[2];y&&(At=20+.656*At,Ct=28+.577*Ct,St=23+.604*St,u&&(At=Math.pow(At/255,2.2)*255,Ct=Math.pow(Ct/255,2.2)*255,St=Math.pow(St/255,2.2)*255)),B[_e+0]=At,B[_e+1]=Ct,B[_e+2]=St,B[_e+3]=255;for(let L=0;L<3;L++)if(P[we+2*L+0]=0,P[we+2*L+1]=0,T[Ne+L]=0,k[Le+L]=0,L<q.length){const R=q[L];let X,me=0;if(R&&R.material!=-1){let Se=t.engine.getMaterialData(R.material);me=Se.baseColorFraction,Se.textures.diffuse&&(X=r.map.get(Se.textures.diffuse))}if(X){let Se=R.materialTiling/128,Ut=ue.x/be%Se,D=ue.z/be%Se;const b=65536;P[we+2*L+0]=(X.u+X.usize*(Ut+Z)/Se)*b,P[we+2*L+1]=(X.v+X.vsize*(D+fe)/Se)*b,T[Ne+L]=L==ge?255:0,k[Le+L]=255-me*255}}return W++};for(let ue=n;ue<e.levelcount;ue++)if(!(h&&ue!=n))for(let Z=0;Z<e.tilerect.zsize;Z++)for(let fe=0;fe<e.tilerect.xsize;fe++){let q=t.getTile(e.tilerect.x+fe,e.tilerect.z+Z,ue);if(!q||!h&&q.effectiveVisualLevel!=n)continue;let ge=q.shape,qe=q.next01&&q.next10&&q.next11;if(ge==cn&&qe){let Me=Math.abs(q.underlayprops.color[0]-q.next11.underlayprops.color[0])+Math.abs(q.underlayprops.color[1]-q.next11.underlayprops.color[1])+Math.abs(q.underlayprops.color[2]-q.next11.underlayprops.color[2]),_e=Math.abs(q.next01.underlayprops.color[0]-q.next10.underlayprops.color[0])+Math.abs(q.next01.underlayprops.color[1]-q.next10.underlayprops.color[1])+Math.abs(q.next01.underlayprops.color[2]-q.next10.underlayprops.color[2]);Me<_e&&(ge=ga)}if(i&&(he.push({tile:q.debug_raw,x:fe,z:Z,level:ue,tilenxt:q.debug_nxttile,underlaycolor:q.originalUnderlayColor}),Ee.push(J)),u){if(q.waterProps){let Me=q.waterProps.props,_e=[Me,Me,Me],Ne=q.waterProps.shape;for(let Le=2;Le<Ne.length;Le++){let we=Ne[0],Te=Ne[Le-1],We=Ne[Le];!we||!Te||!We||(C[J++]=ee(q,we.subx,we.subz,_e,0),C[J++]=ee(q,Te.subx,Te.subz,_e,1),C[J++]=ee(q,We.subx,We.subz,_e,2))}}}else{if(qe&&ge.overlay.length!=0){let Me=q.rawOverlay,_e=Me?.color??(Me&&typeof Me.materialbyte<"u"?[255,255,255]:[255,0,255]),Ne=q.overlayVisible;if(l&&!Ne&&Me?.secondary_colour&&(_e=Me.secondary_colour,Ne=!0),Ne||h){let Le;if(!l)Le=ge.overlay.map(we=>{if(q.bleedsOverlayMaterial){let Te=q;if(we.nextx&&we.nextz?Te=q.next11:we.nextx?Te=q.next01:we.nextz&&(Te=q.next10),Te)return Te.vertexprops[we.subvertex]}else return q.overlayprops;return Rr});else{let we={material:0,materialTiling:128,materialBleedpriority:0,color:_e};Le=Array(ge.overlay.length).fill(we)}for(let we=2;we<ge.overlay.length;we++){let Te=ge.overlay[0],We=ge.overlay[we-1],ft=ge.overlay[we];if(!Te||!We||!ft)continue;let ot=[Le[0],Le[we-1],Le[we]];C[J++]=ee(q,Te.subx,Te.subz,ot,0),C[J++]=ee(q,We.subx,We.subz,ot,1),C[J++]=ee(q,ft.subx,ft.subz,ot,2)}}}if(qe&&ge.underlay.length!=0&&(q.underlayVisible||h)){let Me;if(!l)Me=ge.underlay.map(_e=>{let Ne=q;if(_e.nextx&&_e.nextz?Ne=q.next11:_e.nextx?Ne=q.next01:_e.nextz&&(Ne=q.next10),Ne){let Le=Ne.vertexprops[_e.subvertex];return Le.material==-1?{...Le,material:q.underlayprops.material}:Le}return Rr});else{let _e={material:0,materialTiling:128,materialBleedpriority:-1,color:q.underlayprops.color};Me=Array(ge.underlay.length).fill(_e)}for(let _e=2;_e<ge.underlay.length;_e++){let Ne=ge.underlay[0],Le=ge.underlay[_e-1],we=ge.underlay[_e];if(!Ne||!Le||!we)continue;let Te=[Me[0],Me[_e-1],Me[_e]];C[J++]=ee(q,Ne.subx,Ne.subz,Te,0),C[J++]=ee(q,Le.subx,Le.subz,Te,1),C[J++]=ee(q,we.subx,we.subz,Te,2)}}}}let le={modelgroup:(s=="wireframe"?"floorhidden":s=="worldmap"?"map":s=="minimap"?"mini_floor":"floor")+n,modeltype:h?"floorhidden":"floor",mapsquarex:e.mapsquarex,mapsquarez:e.mapsquarez,level:n,isclickable:!0,searchPeers:!1,subobjects:he,subranges:Ee},pe=E(W*g),Ae=S(J*4),Pe=new Float32Array(pe),Ce=new Uint8Array(pe),je=new Uint16Array(pe);return{chunk:e,level:n,tileinfos:he,mode:s,iswater:u,vertexstride:g,indices:new Uint32Array(Ae),nvertices:W,atlas:s!="worldmap"?r:null,pos:{src:Pe,offset:f,vecsize:3,normalized:!1},normal:{src:Pe,offset:x,vecsize:3,normalized:!1},color:{src:Ce,offset:d,vecsize:4,normalized:!0},_RA_FLOORTEX_UV0:{src:je,offset:c+0,vecsize:2,normalized:!0},_RA_FLOORTEX_UV1:{src:je,offset:c+2,vecsize:2,normalized:!0},_RA_FLOORTEX_UV2:{src:je,offset:c+4,vecsize:2,normalized:!0},_RA_FLOORTEX_WEIGHTS:{src:Ce,offset:o,vecsize:3,normalized:!0},_RA_FLOORTEX_USESCOLOR:{src:Ce,offset:a,vecsize:3,normalized:!0},posmax:[ae,oe,j],posmin:[te,ne,re],extra:le}}function _u(t,e){if(e.nvertices==0)return;let n=u=>{let h=new Gt(u.src,e.vertexstride/u.src.BYTES_PER_ELEMENT);return new hr(h,u.vecsize,u.offset,u.normalized)},r=new mr;r.setAttribute("position",n(e.pos)),r.setAttribute("color",n(e.color)),r.setAttribute("normal",n(e.normal)),r.setAttribute("texcoord_0",n(e._RA_FLOORTEX_UV0)),r.setAttribute("texcoord_1",n(e._RA_FLOORTEX_UV1)),r.setAttribute("texcoord_2",n(e._RA_FLOORTEX_UV2)),r.setAttribute("color_1",n(e._RA_FLOORTEX_WEIGHTS)),r.setAttribute("color_2",n(e._RA_FLOORTEX_USESCOLOR));let i=e.mode!="worldmap"?new dn({shininess:0}):new sn;if(i.vertexColors=!0,e.mode=="walkmesh"&&_n(i,1),e.mode=="wireframe"&&(i.wireframe=!0),e.atlas){let u=e.atlas.convertToThreeTexture();e.mode=="minimap"?e.iswater?i=iu(u):i=nu(u):(ta(i),i.map=u)}let s=new ir(r,i);return s.userData=e.extra,s.name=`floor ${e.chunk.mapsquarex},${e.chunk.mapsquarez} (${e.level})`,s}const Su=["material","model","item","loc","mapsquare","sequence","skeleton","frameset","animgroup","npc","framebase","texture","enum","overlay","underlay"],Du=Object.fromEntries(Su.map((t,e)=>[t,e]));function ba(t,e,n){let r=t.mapsquarex+t.mapsquarez*Mn;n("mapsquare",r,t.chunkfilehash,t.chunkfileversion);for(let u of t.rawlocs)e("loc",u.id,"mapsquare",r);let i=new Set,s=new Set;for(let u of t.tiles)u.overlay!=null&&i.add(u.overlay),u.underlay!=null&&s.add(u.underlay);i.forEach(u=>e("overlay",u,"mapsquare",r)),s.forEach(u=>e("underlay",u,"mapsquare",r))}const Au=async(t,e,n,r)=>{await co(20,function*(){let i=r?.area??{x:0,z:0,xsize:100,zsize:200};for(let s=i.z;s<i.z+i.zsize;s++)for(let u=i.x;u<i.x+i.xsize;u++)yield va(t,u,s)},i=>{i&&ba(i,e,n)})};function nn(t){return t?t[0]<<16|t[1]<<8|t[2]:16711935}function wa(t,e){return e=bt(+!!t.bleedToUnderlay,e),e=bt(t.bleedpriority??-1,e),e=bt(t.materialbyte??t.material??-1,e),e=bt(nn(t.color),e),e=bt(nn(t.secondary_colour),e),e=bt(nn(t.tertiary_colour),e),e=bt(t.material_tiling??-1,e),e}const Cu=async(t,e,n)=>{for(let[r,i]of t.mapUnderlays.entries()){if(!i)continue;let s=wa(i,0);n("underlay",r,s,0),i.material&&e("material",i.material,"underlay",r)}},Tu=async(t,e,n)=>{for(let[r,i]of t.mapOverlays.entries()){if(!i)continue;let s=wa(i,0);i.material&&e("material",i.material,"overlay",r),n("overlay",r,s,0)}},Fu=async(t,e,n)=>{if(t.classicData)for(let[r,i]of t.classicData.objects.entries()){let s=Ze(ke.from(JSON.stringify(i)));n("loc",r,s,0),i.model.id!=null&&e("model",i.model.id,"loc",r)}else for await(let{id:r,file:i}of Ln(t,N.objects)){n("loc",r,Ze(i),0);let s=K.object.read(i,t);if(s.probably_animation&&e("sequence",s.probably_animation,"loc",r),s.models)for(let u of s.models)for(let h of u.values)e("model",h,"loc",r);if(s.models_05)for(let u of s.models_05.models)for(let h of u.values)e("model",h,"loc",r);if(s.morphs_1||s.morphs_2){let u=ya(s);u!=-1&&e("loc",u,"loc",r)}}},ku=async(t,e,n)=>{if(t.classicData)for(let[r,i]of t.classicData.items.entries()){let s=Ze(ke.from(JSON.stringify(i)));n("item",r,s,0)}else for await(let{id:r,file:i}of Ln(t,N.items)){n("item",r,Ze(i),0);let s=K.item.read(i,t),u=[].concat(s.baseModel,s.maleModels_0?.id,s.maleModels_1,s.maleModels_2,s.femaleModels_0?.id,s.femaleModels_1,s.femaleModels_2,s.maleHeads_0,s.maleHeads_1,s.femaleHeads_0,s.femaleHeads_1).filter(h=>typeof h=="number");for(let h of u)e("model",h,"item",r);s.noteTemplate&&e("item",s.noteTemplate,"item",r)}},Iu=async(t,e,n)=>{if(t.getBuildNr()<526)return;let r=await t.getArchiveById(N.config,ze.animgroups);for(let i of r){n("animgroup",i.fileid,Ze(i.buffer),0);let s=K.animgroupConfigs.read(i.buffer,t),u=s.unknown_26??s.baseAnims?.idle;u&&e("sequence",u,"animgroup",i.fileid)}},Bu=async(t,e,n)=>{if(t.getBuildNr()<=dt){let r=await t.getArchiveById(ct.data,Nt.textures);for(let i of r.map(s=>s.fileid))n("material",i,0,0),e("texture",i,"material",i)}else if(t.getBuildNr()<=471){let r=await t.getArchiveById(N.texturesOldPng,0);for(let i of r){n("material",i.fileid,Ze(i.buffer),0);let s=K.oldproctexture.read(i.buffer,t);e("texture",s.spriteid,"material",i.fileid)}}else if(!(t.getBuildNr()<759)){let r=await t.getArchiveById(N.materials,0);for(let i of r){n("material",i.fileid,Ze(i.buffer),0);let s=Hi(i.buffer,i.fileid,t);for(let u of Object.values(s.textures))typeof u=="number"&&e("texture",u,"material",i.fileid)}}},Mu=async(t,e,n)=>{if(t.classicData)for(let[r,i]of t.classicData.npcs.entries()){let s=Ze(ke.from(JSON.stringify(i)));n("npc",r,s,0)}else for await(let{id:r,file:i}of Ln(t,N.npcs)){n("npc",r,Ze(i),0);let s=K.npc.read(i,t);if(s.animation_group&&e("animgroup",s.animation_group,"npc",r),s.models)for(let u of s.models)e("model",u,"npc",r);if(s.headModels)for(let u of s.headModels)e("model",u,"npc",r)}};async function Nu(t,e){let n=new Map,r=new Map,i=new Map,s=(a,o,c,g)=>{let v=`${a}-${o}`,E=`${c}-${g}`,_=r.get(E);_||(_=[],r.set(E,_)),_.indexOf(v)==-1&&_.push(v);let S=n.get(v);S||(S=[],n.set(v,S)),S.indexOf(E)==-1&&S.push(E)},u=(a,o,c,g)=>{let v=`${a}-${o}`;i.set(v,c)},h=async(a,o)=>{try{console.log(`starting ${a.name}`);let c=Date.now();await a(t,s,u,o),console.log(`finished ${a.name}, duration ${((Date.now()-c)/1e3).toFixed(1)}`)}catch(c){throw c}},l=[Fu,ku,Iu,Bu,Mu,Tu,Cu];for(let a of l)await h(a,e);let y=a=>h(Au,a),p=(a,o)=>`${a}-${o}`,m=(a,o=[])=>{let c=i.get(a)??0,g=`${a}-${c}`;if(!o.includes(g)){o.push(g);let v=r.get(a);if(v)for(let E of v)m(E,o)}return o},f=(a,o=0)=>{let c=i.get(a)??0,[g,v]=a.split("-"),E=o;E=bt(Du[g],E),E=bt(+v,E),E=bt(+c,E);let _=r.get(a);if(_)for(let S of _)E=f(S,E);return E};return{dependencyMap:r,dependentsMap:n,cascadeDependencies:m,makeDeptName:p,hashDependencies:f,hasEntry:(a,o)=>i.has(p(a,o)),insertMapChunk:a=>{ba(a,s,u);let o=a.mapsquarex+a.mapsquarez*Mn;return p("mapsquare",o)},preloadChunkDependencies:y}}const Lu=`#version 460\r
\r
/***************************************************/\r
/***************** GLSL Header *********************/\r
/***************************************************/\r
#ifdef GL_EXT_gpu_shader4\r
#extension GL_EXT_gpu_shader4 : enable\r
#endif\r
#ifdef GL_ARB_gpu_shader5\r
#extension GL_ARB_gpu_shader5 : enable\r
#endif\r
#ifdef GL_ARB_derivative_control\r
#extension GL_ARB_derivative_control : enable\r
#endif\r
\r
#ifdef GL_ARB_texture_gather\r
#extension GL_ARB_texture_gather : enable\r
#endif\r
\r
#define OGL_BACKEND\r
\r
#undef attribute\r
#define attribute in\r
\r
#undef gl_FragColor\r
#define gl_FragColor FragColor\r
\r
#define shadow2DCompat texture\r
\r
#undef textureCube\r
#define textureCube texture\r
\r
#undef texture2D\r
#define texture2D texture\r
\r
#undef texture3D\r
#define texture3D texture\r
\r
#undef texture2DLod\r
#define texture2DLod textureLod\r
\r
#undef textureCubeLod\r
#define textureCubeLod textureLod\r
\r
#undef texture2DGrad\r
#define texture2DGrad textureGrad\r
\r
#define MSAA_AVAILABLE\r
\r
#define TEXTURE_OFFSET_AVAILABLE\r
#if !defined(lowp)\r
#define lowp\r
#endif\r
#if !defined(mediump)\r
#define mediump\r
#endif\r
#if !defined(highp)\r
#define highp\r
#endif\r
\r
#define GRAPHICS_QUALITY_LOW 0\r
#define GRAPHICS_QUALITY_MEDIUM 1\r
#define GRAPHICS_QUALITY_HIGH 2\r
#define GRAPHICS_QUALITY_ULTRA 3\r
\r
#define shadow2DLodCompat texture2DLod\r
\r
#define texture2DLodCompat texture2DLod\r
\r
#define textureCubeLodCompat textureCubeLod\r
\r
#define textureGatherCompat(sampler, texCoord, viewportScale) textureGather(sampler, texCoord).wzxy\r
\r
#define UNIFORM_BUFFER_BEGIN(name) \\\r
    layout(std140) uniform name    \\\r
    {\r
#define UNIFORM_BUFFER_END \\\r
    }                      \\\r
    ;\r
\r
mat3 Mat4ToMat3(const mat4 inputMatrix)\r
{\r
    return mat3(inputMatrix);\r
}\r
\r
#define isNaN isnan\r
\r
#ifndef GL_ARB_derivative_control\r
#define dFdxFine dFdx\r
#define dFdyFine dFdy\r
#define fwidthFine fwidth\r
#endif\r
\r
/***************************************************/\r
\r
/***************************************************/\r
/***************** Effect Defines ******************/\r
/***************************************************/\r
#define SUNLIGHT_DIRECT_LIGHTING\r
#define TEXTURE_ATLAS\r
#define VIEW_TRANSFORMS\r
\r
/*************************************************/\r
\r
/***************************************************/\r
/********** Mandatory Shader Fragments *************/\r
/***************************************************/\r
\r
#define GRAPHICS_QUALITY_LOW 0\r
#define GRAPHICS_QUALITY_MEDIUM 1\r
#define GRAPHICS_QUALITY_HIGH 2\r
#define GRAPHICS_QUALITY_ULTRA 3\r
\r
#define MATERIAL_SETTINGS_SLOT_PIXEL_RESOLUTION_X 3.0\r
#define MATERIAL_SETTINGS_SLOT_PIXEL_RESOLUTION_Y 4.0\r
#define MATERIAL_SETTINGS_SLOTS_DIMENSION_COUNT_X 42.0\r
#define MATERIAL_SETTINGS_SLOTS_DIMENSION_COUNT_Y 32.0\r
#define MATERIAL_SETTINGS_TEXTURE_RESOLUTION 128.0\r
#ifndef MATH_UTILS_INC\r
#define MATH_UTILS_INC\r
const float PI = 3.14159, INV_PI = .31831, TWOPI = PI * 2., INV_TWOPI = 1. / TWOPI, PI_OVER_4 = PI / 4., PI_OVER_2 = PI / 2., SQRT_2_PI = .797885, INV_EIGHT = .125;\r
float SpecPowToBeckmannRoughness(float f) { return sqrt(2. / (f + 2.)); }\r
float PerceptualRoughnessToRoughness(float f) { return f * f; }\r
float RoughnessToPerceptualRoughness(float f) { return sqrt(f); }\r
#endif\r
#ifndef CONVERSION_UTILS_INC\r
#define CONVERSION_UTILS_INC\r
vec3 SRGBToLinear(vec3 srgbColour)\r
{\r
#if defined(GAMMA_CORRECT_INPUTS)\r
    return srgbColour * srgbColour;\r
#else\r
    return pow(srgbColour, vec3(2.2, 2.2, 2.2));\r
#endif\r
}\r
vec3 LinearToSRGB(vec3 s) { return max(vec3(1.055) * pow(s, vec3(.416667)) - vec3(.055), vec3(0.)); }\r
float LinearToSRGB(float s)\r
{\r
    const float p = 1. / 2.2;\r
    return pow(s, p);\r
}\r
vec3 LinearToSRGBRunescape(vec3 s) { return sqrt(s); }\r
float LinearToSRGBRunescape(float s) { return sqrt(s); }\r
vec4 convertRGBtoHSL(vec4 s)\r
{\r
    const float p = 1. / 6.;\r
    float v = s.s, m = s.t, t = s.p, f = min(min(s.s, s.t), s.p), q = max(max(s.s, s.t), s.p), r = q - f, G = (f + q) * .5, i = 0., e = 0.;\r
    if (G > 0. && G < 1.)\r
    {\r
        float L = G < .5 ? G : 1. - G;\r
        i = r / (L * 2.);\r
    }\r
    if (r > 0.)\r
    {\r
        vec3 L = vec3(q == v && q != m ? 1. : 0., q == m && q != t ? 1. : 0., q == t && q != v ? 1. : 0.), o = vec3((m - t) / r, 2. + (t - v) / r, 4. + (v - m) / r);\r
        e += dot(o, L);\r
        e *= p;\r
        if (e < 0.)\r
            e += 1.;\r
    }\r
    return vec4(e, i, G, s.q);\r
}\r
vec4 convertHSLtoRGB(vec4 s)\r
{\r
    const float v = 1. / 3., q = 2. / 3., m = 6.;\r
    float p = s.s, t = s.t, r = s.p;\r
    vec3 f = vec3(m * (p - q), 0., m * (1. - p));\r
    if (p < q)\r
        f.s = 0., f.t = m * (q - p), f.p = m * (p - v);\r
    if (p < v)\r
        f.s = m * (v - p), f.t = m * p, f.p = 0.;\r
    f = min(f, 1.);\r
    float L = 2. * t, i = 1. - t, G = 1. - r, e = 2. * r - 1.;\r
    vec3 c = L * f + i, o;\r
    if (r >= .5)\r
        o = G * c + e;\r
    else\r
        o = r * c;\r
    return vec4(o, s.q);\r
}\r
#endif\r
#ifndef PACK_UTILS_INC\r
#define PACK_UTILS_INC\r
#ifndef SHADER_LIB_COMMON_INC\r
#define SHADER_LIB_COMMON_INC\r
#define USE_MOD_PACK\r
#endif\r
\r
vec4 PackFloatToRGBA(highp float valueToPack)\r
{\r
#if defined(USE_MOD_PACK) || defined(USE_FRACT_PACK)\r
    const highp vec4 bitShift = vec4(256 * 256 * 256, 256 * 256, 256, 1.0);\r
    const highp vec4 bitMask = vec4(0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);\r
    highp vec4 fragColour = mod(valueToPack * bitShift * vec4(255), vec4(256)) / vec4(255);\r
    return fragColour - fragColour.xxyz * bitMask;\r
#endif\r
#ifdef USE_ARAS_PACK\r
    const highp vec4 bitShift = vec4(1.0, 255.0, 65025.0, 16581375.0);\r
    const highp vec4 bitMask = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);\r
    highp vec4 fragColour = fract(valueToPack * bitShift);\r
    return fragColour - (fragColour.xxyz * bitMask);\r
#endif\r
}\r
vec2 NormalPackSphereMap(vec3 v)\r
{\r
    vec2 f = normalize(v.st) * sqrt(-v.p * .5 + .5);\r
    f = f * .5 + .5;\r
    return f * 65535.;\r
}\r
vec2 PackFloatToVec2(float v)\r
{\r
    vec2 f;\r
    const float b = 1. / 255.;\r
    vec2 h = vec2(1., 255.), r = fract(h * v);\r
    r.s -= r.t * b;\r
    return r.st;\r
}\r
#endif\r
#ifndef UNPACK_UTILS_INC\r
#define UNPACK_UTILS_INC\r
#ifndef SHADER_LIB_COMMON_INC\r
#define SHADER_LIB_COMMON_INC\r
#define USE_MOD_PACK\r
#endif\r
\r
highp float UnpackRGBAToFloat(highp vec4 valueToUnpack)\r
{\r
#if defined(USE_MOD_PACK) || defined(USE_FRACT_PACK)\r
    const highp vec4 bitShifts = vec4(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0);\r
    return dot(valueToUnpack, bitShifts);\r
#endif\r
#ifdef USE_ARAS_PACK\r
    const highp vec4 bitShifts = vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0);\r
    return dot(valueToUnpack, bitShifts);\r
#endif\r
}\r
vec3 ColourUnpack(highp float v)\r
{\r
    vec3 f;\r
    f.s = floor(v / 256. / 256.);\r
    f.t = floor((v - f.s * 256. * 256.) / 256.);\r
    f.p = floor(v - f.s * 256. * 256. - f.t * 256.);\r
    return f / 256.;\r
}\r
vec3 NormalUnpackSphereMap(vec2 v)\r
{\r
    vec4 f = vec4(v.s / 32767. - 1., v.t / 32767. - 1., 1., -1.);\r
    float U = dot(f.stp, -f.stq);\r
    f.st *= sqrt(U);\r
    f.p = U;\r
    return f.stp * 2. + vec3(0., 0., -1.);\r
}\r
highp float UnpackRGBAToIntegerFloat(highp vec4 f) { return floor(f.s * 255. + .5) * 256. * 256. * 256. + floor(f.t * 255. + .5) * 256. * 256. + floor(f.p * 255. + .5) * 256. + floor(f.q * 255. + .5); }\r
highp float UnpackRGBAToIntegerFloat16(highp vec2 f) { return floor(f.s * 255. + .5) * 256. + floor(f.t * 255. + .5); }\r
highp int UnpackRGBAToInt(vec4 f) { return int(UnpackRGBAToIntegerFloat(f)); }\r
highp vec4 UnpackFloatToRGBA(highp float f)\r
{\r
    const highp vec4 v = vec4(1., 255., 65025., 1.65814e+07), s = vec4(vec3(1. / 255.), 0.);\r
    highp vec4 U = fract(f * v);\r
    U -= U.sstp * s;\r
    return U;\r
}\r
highp float UnpackVec2ToFloat(highp vec2 f) { return floor(f.s * 255. + .5) * 256. + floor(f.t * 255. + .5); }\r
#endif\r
#if defined(MSAA) && defined(MSAA_AVAILABLE)\r
#define SAMPLER_2D_AUTO_MULTISAMPLE sampler2DMS\r
#define MSAA_SAMPLERS_ENABLED 1\r
#define texture2DMultisample(sampler, texCoord, texSize) texelFetch(sampler, ivec2((texCoord)*texSize), 0)\r
#else\r
#define SAMPLER_2D_AUTO_MULTISAMPLE sampler2D\r
#define MSAA_SAMPLERS_ENABLED 0\r
#define texture2DMultisample(sampler, texCoord, texSize) texture2DLodCompat(sampler, texCoord, 0.0)\r
#endif\r
UNIFORM_BUFFER_BEGIN(ViewportLookupScale)\r
uniform highp vec4 uViewportLookupScale;\r
uniform highp vec4 uViewportOffsetScale;\r
uniform highp vec4 uFullScreenLookupScale;\r
UNIFORM_BUFFER_END\r
\r
/***************************************************/\r
\r
attribute vec3 aVertexPosition;\r
attribute vec4 aVertexNormal_FogProportion;\r
attribute vec4 aMaterialSettingsSlotXY_MaterialSettingsSlotXY2;\r
attribute vec2 aMaterialSettingsSlotXY3;\r
attribute vec4 aTextureScale;\r
attribute vec4 aVertexColour;\r
attribute vec4 aTextureWeight;\r
attribute vec4 aMaterialProperties;\r
uniform mat4 uModelMatrix;\r
\r
UNIFORM_BUFFER_BEGIN(ViewTransforms)\r
uniform highp vec3 uCameraPosition;\r
uniform highp mat4 uViewMatrix;\r
uniform highp mat4 uProjectionMatrix;\r
uniform highp mat4 uViewProjMatrix;\r
uniform highp vec4 uZBufferParams;\r
UNIFORM_BUFFER_END\r
uniform mediump vec4 uAtlasMeta;\r
uniform float uFade;\r
out highp vec4 vWorldPos_ViewSpaceDepth;\r
out vec4 vVertexAlbedo;\r
out vec3 vWorldNormal;\r
flat out highp vec4 vMaterialSettingsSlots1D;\r
flat out highp vec4 vTextureScale;\r
out vec4 vTextureWeight;\r
flat out vec4 vMaterialProperties;\r
#ifndef DISTANCE_FOG_UNIFORMS\r
#define DISTANCE_FOG_UNIFORMS\r
#if defined(FOG_DISTANCE)\r
UNIFORM_BUFFER_BEGIN(DistanceFog)\r
uniform mediump vec4 uFogColour;\r
uniform highp vec4 uFogParams;\r
UNIFORM_BUFFER_END\r
#endif\r
#endif\r
\r
#ifndef DISTANCE_FOG_FUNCTIONS\r
#define DISTANCE_FOG_FUNCTIONS\r
#if defined(FOG_DISTANCE)\r
float FogBasedOnDistance(highp float f)\r
{\r
    highp float F = (uFogParams.t - f) * uFogParams.s;\r
    return 1. - clamp(F, 0., 1.);\r
}\r
float FogBasedOnAngle(highp vec3 f)\r
{\r
    highp float F = 1. - clamp(f.t + uFogParams.q, 0., 1.);\r
    F = pow(F, uFogParams.p);\r
    return clamp(F, 0., 1.);\r
}\r
#endif\r
#endif\r
\r
void main()\r
{\r
    vec4 d = uModelMatrix * vec4(aVertexPosition, 1.);\r
    gl_Position = uViewProjMatrix * d;\r
    vWorldPos_ViewSpaceDepth.stp = d.stp;\r
    vVertexAlbedo = aVertexColour;\r
#if defined(GAMMA_CORRECT_INPUTS) && !defined(TEXTURE_ATLAS)\r
    vVertexAlbedo.stp = SRGBToLinear(vVertexAlbedo.stp);\r
#endif\r
    vVertexAlbedo.q += uFade;\r
#if defined(SUNLIGHT_DIRECT_LIGHTING) || defined(DEBUG_NORMALS)\r
    vWorldNormal = normalize(Mat4ToMat3(uModelMatrix) * aVertexNormal_FogProportion.stp);\r
#endif\r
\r
#if defined(IRRADIANCE_LIGHTING) && !defined(NORMAL_MAP)\r
    vAmbientColour = uAmbientColour * EvaluateSHLighting2ndOrder(vWorldNormal, uIrradianceSHCoefs);\r
#endif\r
\r
#if defined(TEXTURE_ATLAS)\r
    vMaterialSettingsSlots1D = vec4(aMaterialSettingsSlotXY_MaterialSettingsSlotXY2.s + aMaterialSettingsSlotXY_MaterialSettingsSlotXY2.t * MATERIAL_SETTINGS_SLOTS_DIMENSION_COUNT_X, aMaterialSettingsSlotXY_MaterialSettingsSlotXY2.p + aMaterialSettingsSlotXY_MaterialSettingsSlotXY2.q * MATERIAL_SETTINGS_SLOTS_DIMENSION_COUNT_X, aMaterialSettingsSlotXY3.s + aMaterialSettingsSlotXY3.t * MATERIAL_SETTINGS_SLOTS_DIMENSION_COUNT_X, 0.);\r
    vTextureScale = aTextureScale;\r
    vTextureWeight = aTextureWeight;\r
#endif\r
    vMaterialProperties = aMaterialProperties + vec4(.25);\r
#if defined(LIGHT_SCATTERING) || defined(SUNLIGHT_SHADOWS) || defined(FOG_DISTANCE)\r
    vec3 S = d.stp - uCameraPosition;\r
    float G = length(S);\r
    vec3 g = S / G;\r
#endif\r
\r
#if defined(SUNLIGHT_SHADOWS)\r
    vec3 u = vec3(uViewMatrix[0][2], uViewMatrix[1][2], uViewMatrix[2][2]);\r
    vWorldPos_ViewSpaceDepth.q = abs(dot(S.stp, u));\r
#endif\r
\r
#if (defined(FOG_DISTANCE) || (defined(SUNLIGHT_DIRECT_LIGHTING) && defined(LIGHT_SCATTERING))) && !defined(OGLES2_BACKEND)\r
\r
#if defined(LIGHT_SCATTERING) && defined(SUNLIGHT_DIRECT_LIGHTING)\r
    ComputeInOutScattering(g, G, uInvSunDirection, vOutScattering, vInScattering);\r
#else\r
    vOutScattering = vec3(1.);\r
    vInScattering = vec3(0.);\r
#endif\r
\r
#if defined(FOG_DISTANCE)\r
    float p = FogBasedOnDistance(G);\r
    vInScattering = mix(vInScattering, uFogColour.stp, p);\r
    vOutScattering *= 1. - p;\r
#endif\r
\r
#endif\r
}`,Ru=`#version 460\r
\r
/***************************************************/\r
/***************** GLSL Header *********************/\r
/***************************************************/\r
#ifdef GL_EXT_gpu_shader4\r
#extension GL_EXT_gpu_shader4 : enable\r
#endif\r
#ifdef GL_ARB_gpu_shader5\r
#extension GL_ARB_gpu_shader5 : enable\r
#endif\r
#ifdef GL_ARB_derivative_control\r
#extension GL_ARB_derivative_control : enable\r
#endif\r
\r
#ifdef GL_ARB_texture_gather\r
#extension GL_ARB_texture_gather : enable\r
#endif\r
\r
#define OGL_BACKEND\r
\r
#undef attribute\r
#define attribute in\r
\r
#undef gl_FragColor\r
#define gl_FragColor FragColor\r
\r
#define shadow2DCompat texture\r
\r
#undef textureCube\r
#define textureCube texture\r
\r
#undef texture2D\r
#define texture2D texture\r
\r
#undef texture3D\r
#define texture3D texture\r
\r
#undef texture2DLod\r
#define texture2DLod textureLod\r
\r
#undef textureCubeLod\r
#define textureCubeLod textureLod\r
\r
#undef texture2DGrad\r
#define texture2DGrad textureGrad\r
\r
#define MSAA_AVAILABLE\r
\r
#define TEXTURE_OFFSET_AVAILABLE\r
#if !defined(lowp)\r
#define lowp\r
#endif\r
#if !defined(mediump)\r
#define mediump\r
#endif\r
#if !defined(highp)\r
#define highp\r
#endif\r
\r
#define GRAPHICS_QUALITY_LOW 0\r
#define GRAPHICS_QUALITY_MEDIUM 1\r
#define GRAPHICS_QUALITY_HIGH 2\r
#define GRAPHICS_QUALITY_ULTRA 3\r
\r
#define shadow2DLodCompat texture2DLod\r
\r
#define texture2DLodCompat texture2DLod\r
\r
#define textureCubeLodCompat textureCubeLod\r
\r
#define textureGatherCompat(sampler, texCoord, viewportScale) textureGather(sampler, texCoord).wzxy\r
\r
#define SHADER_TYPE_PIXEL\r
\r
out vec4 gl_FragColor;\r
\r
#define UNIFORM_BUFFER_BEGIN(name) \\\r
    layout(std140) uniform name    \\\r
    {\r
#define UNIFORM_BUFFER_END \\\r
    }                      \\\r
    ;\r
\r
mat3 Mat4ToMat3(const mat4 inputMatrix)\r
{\r
    return mat3(inputMatrix);\r
}\r
\r
#define isNaN isnan\r
\r
#ifndef GL_ARB_derivative_control\r
#define dFdxFine dFdx\r
#define dFdyFine dFdy\r
#define fwidthFine fwidth\r
#endif\r
\r
/***************************************************/\r
\r
/***************************************************/\r
/***************** Effect Defines ******************/\r
/***************************************************/\r
#define AMBIENT_LIGHTING\r
#define DIFFUSE_LIGHTING\r
#define ALBEDO_LIGHTING\r
#define TEXTURE_ALBEDO_GLOBAL\r
#define SUNLIGHT_DIRECT_LIGHTING\r
#define TEXTURE_ATLAS\r
#define ALPHA_ENABLED\r
#define VIEW_TRANSFORMS\r
#define TINT\r
\r
/*************************************************/\r
\r
/***************************************************/\r
/********** Mandatory Shader Fragments *************/\r
/***************************************************/\r
\r
#define GRAPHICS_QUALITY_LOW 0\r
#define GRAPHICS_QUALITY_MEDIUM 1\r
#define GRAPHICS_QUALITY_HIGH 2\r
#define GRAPHICS_QUALITY_ULTRA 3\r
\r
#define MATERIAL_SETTINGS_SLOT_PIXEL_RESOLUTION_X 3.0\r
#define MATERIAL_SETTINGS_SLOT_PIXEL_RESOLUTION_Y 4.0\r
#define MATERIAL_SETTINGS_SLOTS_DIMENSION_COUNT_X 42.0\r
#define MATERIAL_SETTINGS_SLOTS_DIMENSION_COUNT_Y 32.0\r
#define MATERIAL_SETTINGS_TEXTURE_RESOLUTION 128.0\r
#ifndef MATH_UTILS_INC\r
#define MATH_UTILS_INC\r
const float PI = 3.14159, INV_PI = .31831, TWOPI = PI * 2., INV_TWOPI = 1. / TWOPI, PI_OVER_4 = PI / 4., PI_OVER_2 = PI / 2., SQRT_2_PI = .797885, INV_EIGHT = .125;\r
float SpecPowToBeckmannRoughness(float f) { return sqrt(2. / (f + 2.)); }\r
float PerceptualRoughnessToRoughness(float f) { return f * f; }\r
float RoughnessToPerceptualRoughness(float f) { return sqrt(f); }\r
#endif\r
#ifndef CONVERSION_UTILS_INC\r
#define CONVERSION_UTILS_INC\r
vec3 SRGBToLinear(vec3 srgbColour)\r
{\r
#if defined(GAMMA_CORRECT_INPUTS)\r
    return srgbColour * srgbColour;\r
#else\r
    return pow(srgbColour, vec3(2.2, 2.2, 2.2));\r
#endif\r
}\r
vec3 LinearToSRGB(vec3 s) { return max(vec3(1.055) * pow(s, vec3(.416667)) - vec3(.055), vec3(0.)); }\r
float LinearToSRGB(float s)\r
{\r
    const float p = 1. / 2.2;\r
    return pow(s, p);\r
}\r
vec3 LinearToSRGBRunescape(vec3 s) { return sqrt(s); }\r
float LinearToSRGBRunescape(float s) { return sqrt(s); }\r
vec4 convertRGBtoHSL(vec4 s)\r
{\r
    const float p = 1. / 6.;\r
    float v = s.s, m = s.t, t = s.p, f = min(min(s.s, s.t), s.p), q = max(max(s.s, s.t), s.p), r = q - f, G = (f + q) * .5, i = 0., e = 0.;\r
    if (G > 0. && G < 1.)\r
    {\r
        float L = G < .5 ? G : 1. - G;\r
        i = r / (L * 2.);\r
    }\r
    if (r > 0.)\r
    {\r
        vec3 L = vec3(q == v && q != m ? 1. : 0., q == m && q != t ? 1. : 0., q == t && q != v ? 1. : 0.), o = vec3((m - t) / r, 2. + (t - v) / r, 4. + (v - m) / r);\r
        e += dot(o, L);\r
        e *= p;\r
        if (e < 0.)\r
            e += 1.;\r
    }\r
    return vec4(e, i, G, s.q);\r
}\r
vec4 convertHSLtoRGB(vec4 s)\r
{\r
    const float v = 1. / 3., q = 2. / 3., m = 6.;\r
    float p = s.s, t = s.t, r = s.p;\r
    vec3 f = vec3(m * (p - q), 0., m * (1. - p));\r
    if (p < q)\r
        f.s = 0., f.t = m * (q - p), f.p = m * (p - v);\r
    if (p < v)\r
        f.s = m * (v - p), f.t = m * p, f.p = 0.;\r
    f = min(f, 1.);\r
    float L = 2. * t, i = 1. - t, G = 1. - r, e = 2. * r - 1.;\r
    vec3 c = L * f + i, o;\r
    if (r >= .5)\r
        o = G * c + e;\r
    else\r
        o = r * c;\r
    return vec4(o, s.q);\r
}\r
#endif\r
#ifndef PACK_UTILS_INC\r
#define PACK_UTILS_INC\r
#ifndef SHADER_LIB_COMMON_INC\r
#define SHADER_LIB_COMMON_INC\r
#define USE_MOD_PACK\r
#endif\r
\r
vec4 PackFloatToRGBA(highp float valueToPack)\r
{\r
#if defined(USE_MOD_PACK) || defined(USE_FRACT_PACK)\r
    const highp vec4 bitShift = vec4(256 * 256 * 256, 256 * 256, 256, 1.0);\r
    const highp vec4 bitMask = vec4(0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);\r
    highp vec4 fragColour = mod(valueToPack * bitShift * vec4(255), vec4(256)) / vec4(255);\r
    return fragColour - fragColour.xxyz * bitMask;\r
#endif\r
#ifdef USE_ARAS_PACK\r
    const highp vec4 bitShift = vec4(1.0, 255.0, 65025.0, 16581375.0);\r
    const highp vec4 bitMask = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);\r
    highp vec4 fragColour = fract(valueToPack * bitShift);\r
    return fragColour - (fragColour.xxyz * bitMask);\r
#endif\r
}\r
vec2 NormalPackSphereMap(vec3 v)\r
{\r
    vec2 f = normalize(v.st) * sqrt(-v.p * .5 + .5);\r
    f = f * .5 + .5;\r
    return f * 65535.;\r
}\r
vec2 PackFloatToVec2(float v)\r
{\r
    vec2 f;\r
    const float b = 1. / 255.;\r
    vec2 h = vec2(1., 255.), r = fract(h * v);\r
    r.s -= r.t * b;\r
    return r.st;\r
}\r
#endif\r
#ifndef UNPACK_UTILS_INC\r
#define UNPACK_UTILS_INC\r
#ifndef SHADER_LIB_COMMON_INC\r
#define SHADER_LIB_COMMON_INC\r
#define USE_MOD_PACK\r
#endif\r
\r
highp float UnpackRGBAToFloat(highp vec4 valueToUnpack)\r
{\r
#if defined(USE_MOD_PACK) || defined(USE_FRACT_PACK)\r
    const highp vec4 bitShifts = vec4(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0);\r
    return dot(valueToUnpack, bitShifts);\r
#endif\r
#ifdef USE_ARAS_PACK\r
    const highp vec4 bitShifts = vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0);\r
    return dot(valueToUnpack, bitShifts);\r
#endif\r
}\r
vec3 ColourUnpack(highp float v)\r
{\r
    vec3 f;\r
    f.s = floor(v / 256. / 256.);\r
    f.t = floor((v - f.s * 256. * 256.) / 256.);\r
    f.p = floor(v - f.s * 256. * 256. - f.t * 256.);\r
    return f / 256.;\r
}\r
vec3 NormalUnpackSphereMap(vec2 v)\r
{\r
    vec4 f = vec4(v.s / 32767. - 1., v.t / 32767. - 1., 1., -1.);\r
    float U = dot(f.stp, -f.stq);\r
    f.st *= sqrt(U);\r
    f.p = U;\r
    return f.stp * 2. + vec3(0., 0., -1.);\r
}\r
highp float UnpackRGBAToIntegerFloat(highp vec4 f) { return floor(f.s * 255. + .5) * 256. * 256. * 256. + floor(f.t * 255. + .5) * 256. * 256. + floor(f.p * 255. + .5) * 256. + floor(f.q * 255. + .5); }\r
highp float UnpackRGBAToIntegerFloat16(highp vec2 f) { return floor(f.s * 255. + .5) * 256. + floor(f.t * 255. + .5); }\r
highp int UnpackRGBAToInt(vec4 f) { return int(UnpackRGBAToIntegerFloat(f)); }\r
highp vec4 UnpackFloatToRGBA(highp float f)\r
{\r
    const highp vec4 v = vec4(1., 255., 65025., 1.65814e+07), s = vec4(vec3(1. / 255.), 0.);\r
    highp vec4 U = fract(f * v);\r
    U -= U.sstp * s;\r
    return U;\r
}\r
highp float UnpackVec2ToFloat(highp vec2 f) { return floor(f.s * 255. + .5) * 256. + floor(f.t * 255. + .5); }\r
#endif\r
#if defined(MSAA) && defined(MSAA_AVAILABLE)\r
#define SAMPLER_2D_AUTO_MULTISAMPLE sampler2DMS\r
#define MSAA_SAMPLERS_ENABLED 1\r
#define texture2DMultisample(sampler, texCoord, texSize) texelFetch(sampler, ivec2((texCoord)*texSize), 0)\r
#else\r
#define SAMPLER_2D_AUTO_MULTISAMPLE sampler2D\r
#define MSAA_SAMPLERS_ENABLED 0\r
#define texture2DMultisample(sampler, texCoord, texSize) texture2DLodCompat(sampler, texCoord, 0.0)\r
#endif\r
UNIFORM_BUFFER_BEGIN(ViewportLookupScale)\r
uniform highp vec4 uViewportLookupScale;\r
uniform highp vec4 uViewportOffsetScale;\r
uniform highp vec4 uFullScreenLookupScale;\r
UNIFORM_BUFFER_END\r
\r
/***************************************************/\r
\r
uniform highp float uTextureAnimationTime;\r
\r
UNIFORM_BUFFER_BEGIN(ViewTransforms)\r
uniform highp vec3 uCameraPosition;\r
uniform highp mat4 uViewMatrix;\r
uniform highp mat4 uProjectionMatrix;\r
uniform highp mat4 uViewProjMatrix;\r
uniform highp vec4 uZBufferParams;\r
UNIFORM_BUFFER_END\r
\r
UNIFORM_BUFFER_BEGIN(Sunlight)\r
uniform highp vec3 uInvSunDirection;\r
uniform mediump vec3 uAmbientColour;\r
uniform mediump vec3 uSunColour;\r
uniform mediump float uDummy;\r
UNIFORM_BUFFER_END\r
#ifndef LIGHT_SCATTERING_VS_UNIFORMS\r
#define LIGHT_SCATTERING_VS_UNIFORMS\r
UNIFORM_BUFFER_BEGIN(SimpleScattering)\r
uniform mediump vec3 uOutscatteringAmount;\r
uniform mediump vec3 uInscatteringAmount;\r
uniform mediump vec3 uScatteringTintColour;\r
uniform highp vec4 uScatteringParameters;\r
UNIFORM_BUFFER_END\r
#endif\r
#ifndef BRDF_INC\r
#define BRDF_INC\r
#ifndef NDF_INC\r
#define NDF_INC\r
#ifndef MATH_UTILS_INC\r
#define MATH_UTILS_INC\r
const float PI = 3.14159, INV_PI = .31831, TWOPI = PI * 2., INV_TWOPI = 1. / TWOPI, PI_OVER_4 = PI / 4., PI_OVER_2 = PI / 2., SQRT_2_PI = .797885, INV_EIGHT = .125;\r
float SpecPowToBeckmannRoughness(float f) { return sqrt(2. / (f + 2.)); }\r
float PerceptualRoughnessToRoughness(float f) { return f * f; }\r
float RoughnessToPerceptualRoughness(float f) { return sqrt(f); }\r
#endif\r
\r
float BlinnPhongNDF(float f, float N)\r
{\r
    return (f + 2.) * INV_EIGHT * pow(N, f);\r
}\r
float GGXTrowbridgeReitzNDF(float N, float f)\r
{\r
    float P = N * N, I = f * f, T = I * (P - 1.) + 1.;\r
    return P / (PI * (T * T + .0001));\r
}\r
float BeckmannNDF(float N, float f)\r
{\r
    float P = N * N, I = f * f;\r
    return exp((I - 1.) / (P * I)) / (PI * P * (I * I));\r
}\r
#endif\r
\r
#ifndef VISIBILITY_FUNC_INC\r
#define VISIBILITY_FUNC_INC\r
#ifndef MATH_UTILS_INC\r
#define MATH_UTILS_INC\r
const float PI = 3.14159, INV_PI = .31831, TWOPI = PI * 2., INV_TWOPI = 1. / TWOPI, PI_OVER_4 = PI / 4., PI_OVER_2 = PI / 2., SQRT_2_PI = .797885, INV_EIGHT = .125;\r
float SpecPowToBeckmannRoughness(float f) { return sqrt(2. / (f + 2.)); }\r
float PerceptualRoughnessToRoughness(float f) { return f * f; }\r
float RoughnessToPerceptualRoughness(float f) { return sqrt(f); }\r
#endif\r
\r
float SchlickSmithVis(float V, float f, float S)\r
{\r
    float P = 1. / sqrt(PI_OVER_4 * V + PI_OVER_2), d = 1. - P, v = (f * d + P) * (S * d + P);\r
    return 1. / (v + .0001);\r
}\r
float KelemenSzirmayKalosVis(vec3 V, vec3 P)\r
{\r
    vec3 f = V + P;\r
    return 4. / max(0., dot(f, f));\r
}\r
#endif\r
\r
#define GGX_NDF\r
#define SCHLICK_SMITH_VIS\r
vec3 CookTorranceBRDF(float d, float S, vec3 n, vec3 v, vec3 f, vec3 B, vec3 R, float F)\r
{\r
    float m = max(0., dot(v, f)), r = 1.;\r
#if defined(BLINN_PHONG_NDF)\r
    r = BlinnPhongNDF(d, m);\r
#elif defined(GGX_NDF)\r
    r = GGXTrowbridgeReitzNDF(PerceptualRoughnessToRoughness(S), m);\r
#elif defined(BECKMANN_NDF)\r
    r = max(0.f, BeckmannNDF(SpecPowToBeckmannRoughness(d), m));\r
#else\r
\r
#error CookTorranceBRDF normal distribution function not specified\r
\r
#endif\r
    float C = 1.;\r
#if defined(SCHLICK_SMITH_VIS)\r
    C = SchlickSmithVis(d, F, max(0., dot(v, B)));\r
#elif defined(KELEMEN_SZIRMAY_KALOS_VIS)\r
    C = KelemenSzirmayKalosVis(R, B);\r
#endif\r
    return n * (r * C);\r
}\r
float RunescapeLegacyBRDF(vec3 d, vec3 v, vec3 f, float B, float S)\r
{\r
    vec3 n = reflect(-d, f);\r
    float C = pow(max(0., dot(n, v)), B);\r
    return C * S;\r
}\r
float RunescapeRT5BRDF(vec3 d, vec3 v, float S) { return BlinnPhongNDF(S, max(0., dot(d, v))); }\r
vec3 ShiftTangent(vec3 d, vec3 S, float B) { return normalize(d + B * S); }\r
vec3 AnisotropicBRDF(vec3 v, vec3 d, vec3 S, vec3 f, vec3 B, float n, float m, float R, float C)\r
{\r
    const float F = 7.5, r = 1., e = .5, o = 1.;\r
    float s = R - .5;\r
    S = ShiftTangent(S, d, e + (C * 2. - 1.) * o + s);\r
    float p = abs(dot(S, f)), a = 1. - p, t = 1. - abs(dot(S, B)), K = p * dot(d, B);\r
    K += a * t;\r
    K = pow(K, F) * n;\r
    K = mix(K, K * C, o);\r
    float G = pow(dot(d, v), m), P = mix(G, K, r);\r
    return vec3(P, P, P);\r
}\r
#endif\r
uniform float uAlphaTestThreshold;\r
uniform vec4 uAtlasMeta;\r
uniform sampler2D uTextureAtlas;\r
uniform sampler2D uTextureAtlasSettings;\r
uniform samplerCube uGlobalEnvironmentMap;\r
uniform vec4 uGlobalEnvironmentMappingParams;\r
uniform vec4 uTint;\r
in highp vec3 vWorldPosition;\r
in highp vec3 vNormal;\r
in mediump vec4 vVertexAlbedo;\r
in vec2 vTextureUV;\r
flat in vec3 vMaterialSettingsSlotXY_BatchFlags;\r
#ifndef CONVERSION_UTILS_INC\r
#define CONVERSION_UTILS_INC\r
vec3 SRGBToLinear(vec3 srgbColour)\r
{\r
#if defined(GAMMA_CORRECT_INPUTS)\r
    return srgbColour * srgbColour;\r
#else\r
    return pow(srgbColour, vec3(2.2, 2.2, 2.2));\r
#endif\r
}\r
vec3 LinearToSRGB(vec3 s) { return max(vec3(1.055) * pow(s, vec3(.416667)) - vec3(.055), vec3(0.)); }\r
float LinearToSRGB(float s)\r
{\r
    const float p = 1. / 2.2;\r
    return pow(s, p);\r
}\r
vec3 LinearToSRGBRunescape(vec3 s) { return sqrt(s); }\r
float LinearToSRGBRunescape(float s) { return sqrt(s); }\r
vec4 convertRGBtoHSL(vec4 s)\r
{\r
    const float p = 1. / 6.;\r
    float v = s.s, m = s.t, t = s.p, f = min(min(s.s, s.t), s.p), q = max(max(s.s, s.t), s.p), r = q - f, G = (f + q) * .5, i = 0., e = 0.;\r
    if (G > 0. && G < 1.)\r
    {\r
        float L = G < .5 ? G : 1. - G;\r
        i = r / (L * 2.);\r
    }\r
    if (r > 0.)\r
    {\r
        vec3 L = vec3(q == v && q != m ? 1. : 0., q == m && q != t ? 1. : 0., q == t && q != v ? 1. : 0.), o = vec3((m - t) / r, 2. + (t - v) / r, 4. + (v - m) / r);\r
        e += dot(o, L);\r
        e *= p;\r
        if (e < 0.)\r
            e += 1.;\r
    }\r
    return vec4(e, i, G, s.q);\r
}\r
vec4 convertHSLtoRGB(vec4 s)\r
{\r
    const float v = 1. / 3., q = 2. / 3., m = 6.;\r
    float p = s.s, t = s.t, r = s.p;\r
    vec3 f = vec3(m * (p - q), 0., m * (1. - p));\r
    if (p < q)\r
        f.s = 0., f.t = m * (q - p), f.p = m * (p - v);\r
    if (p < v)\r
        f.s = m * (v - p), f.t = m * p, f.p = 0.;\r
    f = min(f, 1.);\r
    float L = 2. * t, i = 1. - t, G = 1. - r, e = 2. * r - 1.;\r
    vec3 c = L * f + i, o;\r
    if (r >= .5)\r
        o = G * c + e;\r
    else\r
        o = r * c;\r
    return vec4(o, s.q);\r
}\r
#endif\r
\r
vec4 textureCubeSRGB(samplerCube sampler, vec3 reflDir)\r
{\r
    vec4 texel = textureCube(sampler, reflDir);\r
    return texel;\r
}\r
\r
vec4 textureCubeSRGB(samplerCube sampler, vec3 reflDir, float lod)\r
{\r
    vec4 texel = textureCube(sampler, reflDir, lod);\r
    return texel;\r
}\r
\r
vec4 textureCubeLodSRGB(samplerCube sampler, vec3 reflDir, float lod)\r
{\r
    vec4 texel = textureCubeLodCompat(sampler, reflDir, lod);\r
    return texel;\r
}\r
#define SRGB_TEXTURES\r
#define STANDARD_DERIVATIVES\r
#define TEXTURE_LOD\r
#define TEXTURE_GRAD\r
#define TEXTURE_MIP_LIMIT\r
#define LOOKUP_MODE_DYNAMIC\r
\r
#define TEXTURE_SETTINGS_USE_TEXEL_OFFSETS\r
#ifndef CONVERSION_UTILS_INC\r
#define CONVERSION_UTILS_INC\r
vec3 SRGBToLinear(vec3 srgbColour)\r
{\r
#if defined(GAMMA_CORRECT_INPUTS)\r
    return srgbColour * srgbColour;\r
#else\r
    return pow(srgbColour, vec3(2.2, 2.2, 2.2));\r
#endif\r
}\r
vec3 LinearToSRGB(vec3 s) { return max(vec3(1.055) * pow(s, vec3(.416667)) - vec3(.055), vec3(0.)); }\r
float LinearToSRGB(float s)\r
{\r
    const float p = 1. / 2.2;\r
    return pow(s, p);\r
}\r
vec3 LinearToSRGBRunescape(vec3 s) { return sqrt(s); }\r
float LinearToSRGBRunescape(float s) { return sqrt(s); }\r
vec4 convertRGBtoHSL(vec4 s)\r
{\r
    const float p = 1. / 6.;\r
    float v = s.s, m = s.t, t = s.p, f = min(min(s.s, s.t), s.p), q = max(max(s.s, s.t), s.p), r = q - f, G = (f + q) * .5, i = 0., e = 0.;\r
    if (G > 0. && G < 1.)\r
    {\r
        float L = G < .5 ? G : 1. - G;\r
        i = r / (L * 2.);\r
    }\r
    if (r > 0.)\r
    {\r
        vec3 L = vec3(q == v && q != m ? 1. : 0., q == m && q != t ? 1. : 0., q == t && q != v ? 1. : 0.), o = vec3((m - t) / r, 2. + (t - v) / r, 4. + (v - m) / r);\r
        e += dot(o, L);\r
        e *= p;\r
        if (e < 0.)\r
            e += 1.;\r
    }\r
    return vec4(e, i, G, s.q);\r
}\r
vec4 convertHSLtoRGB(vec4 s)\r
{\r
    const float v = 1. / 3., q = 2. / 3., m = 6.;\r
    float p = s.s, t = s.t, r = s.p;\r
    vec3 f = vec3(m * (p - q), 0., m * (1. - p));\r
    if (p < q)\r
        f.s = 0., f.t = m * (q - p), f.p = m * (p - v);\r
    if (p < v)\r
        f.s = m * (v - p), f.t = m * p, f.p = 0.;\r
    f = min(f, 1.);\r
    float L = 2. * t, i = 1. - t, G = 1. - r, e = 2. * r - 1.;\r
    vec3 c = L * f + i, o;\r
    if (r >= .5)\r
        o = G * c + e;\r
    else\r
        o = r * c;\r
    return vec4(o, s.q);\r
}\r
#endif\r
\r
float getMipMapLevel(vec2 v, vec2 p)\r
{\r
    float d = 0.;\r
#if defined(STANDARD_DERIVATIVES)\r
    float L = max(dot(v, v), dot(p, p));\r
    d = .5 * log2(L);\r
    d = max(0., d);\r
#endif\r
    return d;\r
}\r
#if defined(DEBUG_TEXEL_DENSITY)\r
vec3 GetTexelDensityDebugColour(vec2 v, float p, vec3 d)\r
{\r
    float t = length(fwidth(v) * p), s = length(fwidth(d)), L = t / s, h = uDebugTexelDensity.s, f = uDebugTexelDensity.t, o = uDebugTexelDensity.p, T = uDebugTexelDensity.q;\r
    vec3 c;\r
    c.s = smoothstep(f / (T + 1.), h, L);\r
    c.t = 1. - smoothstep(0., f * (T + 1.), abs(L - f));\r
    c.p = smoothstep(1. - (f + o * T), 1. - o, 1. - L);\r
    c *= c;\r
    return c;\r
}\r
#endif\r
#if defined(LOOKUP_MODE_DYNAMIC) && !defined(NO_SAMPLER_WRAP)\r
flat in mediump float vSamplerWrap;\r
#endif\r
#if __VERSION__ <= 120\r
#ifdef in\r
#undef in\r
#endif\r
#ifdef out\r
#undef out\r
#endif\r
#endif\r
\r
void getTexelBias_inner(float v, highp vec2 t, highp vec3 d, highp vec3 p, highp vec3 s, vec4 c, vec2 m, vec2 g, float L, sampler2D f, out vec4 i, out vec4 h, out vec4 o)\r
{\r
    float T = c.s;\r
    highp float q = c.t, l = c.p;\r
    float P = c.q;\r
    highp vec3 S = vec3(d.s, p.s, s.s), y = vec3(d.t, p.t, s.t), a = vec3(d.p, p.p, s.p);\r
    const vec2 u = vec2(1.);\r
    vec3 D = .5 / a;\r
    highp vec2 r, C, Y;\r
#if !defined(LOOKUP_MODE_CLAMP) && !defined(LOOKUP_MODE_REPEAT)\r
    const float G = .5, e = .25, n = .125, E = .0625;\r
    vec4 O = step(.5, fract(L * vec4(G, e, n, E)));\r
#endif\r
\r
#if defined(LOOKUP_MODE_CLAMP)\r
    r = clamp(t, vec2(D.s), u - vec2(D.s));\r
#elif defined(LOOKUP_MODE_REPEAT)\r
    r = mod(t, u);\r
#else\r
    const vec2 N = vec2(.5), M = vec2(2.);\r
    vec2 x = clamp(t, vec2(D.s), u - vec2(D.s)), R = mod(t, u), A = t - M * floor(N * t), U = u - abs(u - A);\r
    r = O.st * x + O.pq * R + (u - O.st - O.pq) * U;\r
#endif\r
    r = r * a.s * l;\r
    r += vec2(S.s, y.s) * q * l;\r
    if (v > 1.)\r
    {\r
#if defined(LOOKUP_MODE_CLAMP)\r
        C = clamp(t, vec2(D.t), u - vec2(D.t));\r
#elif defined(LOOKUP_MODE_REPEAT)\r
        C = mod(t, u);\r
#else\r
        vec2 I = clamp(t, vec2(D.t), u - vec2(D.t)), K = R, B = U;\r
        C = O.st * I + O.pq * K + (u - O.st - O.pq) * B;\r
#endif\r
        C = C * a.t * l;\r
        C += vec2(S.t, y.t) * q * l;\r
        if (v > 2.)\r
        {\r
#if defined(LOOKUP_MODE_CLAMP)\r
            Y = clamp(t, vec2(D.p), u - vec2(D.p));\r
#elif defined(LOOKUP_MODE_REPEAT)\r
            Y = mod(t, u);\r
#else\r
            vec2 b = clamp(t, vec2(D.p), u - vec2(D.p)), X = R, V = U;\r
            Y = O.st * b + O.pq * X + (u - O.st - O.pq) * V;\r
#endif\r
            Y = Y * a.p * l;\r
            Y += vec2(S.p, y.p) * q * l;\r
        }\r
    }\r
    h = vec4(0.);\r
    o = vec4(0.);\r
#if defined(TEXTURE_MIP_LIMIT)\r
\r
#if defined(TEXTURE_GRAD)\r
    highp vec2 I = m * l, K = g * l, B = I * a.s, X = K * a.s;\r
    const vec2 b = vec2(.025);\r
    B = clamp(B, -b, b);\r
    X = clamp(X, -b, b);\r
    i = texture2DGrad(f, r, B, X);\r
    if (v > 1.)\r
    {\r
        B = I * a.t;\r
        X = K * a.t;\r
        B = clamp(B, -b, b);\r
        X = clamp(X, -b, b);\r
        h = texture2DGrad(f, C, B, X);\r
        if (v > 2.)\r
            B = I * a.p, X = K * a.p, B = clamp(B, -b, b), X = clamp(X, -b, b), o = texture2DGrad(f, Y, B, X);\r
    }\r
#else\r
    i = texture2D(f, r);\r
    if (v > 1.)\r
    {\r
        h = texture2D(f, C);\r
        if (v > 2.)\r
            o = texture2D(f, Y);\r
    }\r
#endif\r
\r
#else\r
\r
#if defined(TEXTURE_LOD)\r
    vec2 V = m * a.s, W = g * a.s;\r
    float F = getMipMapLevel(V, W);\r
    F = min(F, P);\r
    i = texture2DLod(f, r, F);\r
    if (v > 1.)\r
    {\r
        V = m * a.t;\r
        W = g * a.t;\r
        F = getMipMapLevel(V, W);\r
        F = min(F, P);\r
        h = texture2DLod(f, C, F);\r
        if (v > 2.)\r
            V = m * a.p, W = g * a.p, F = getMipMapLevel(V, W), F = min(F, P), o = texture2DLod(f, Y, F);\r
    }\r
#else\r
    i = texture2D(f, r);\r
    if (v > 1.)\r
    {\r
        h = texture2D(f, C);\r
        if (v > 2.)\r
            o = texture2D(f, Y);\r
    }\r
#endif\r
\r
#endif\r
}\r
void getTexel_inner(float v, vec2 f, highp vec3 d, highp vec3 t, highp vec3 p, vec4 s, vec2 h, vec2 o, float b, sampler2D B, out vec4 D, out vec4 L, out vec4 u)\r
{\r
    getTexelBias_inner(v, f, d, t, p, s, h, o, b, B, D, L, u);\r
#if defined(SRGB_TEXTURES)\r
    if (v > 1.)\r
        L = vec4(LinearToSRGB(L.stp), L.q);\r
    if (v > 2.)\r
        u = vec4(LinearToSRGB(u.stp), u.q);\r
#else\r
    D = vec4(SRGBToLinear(D.stp), D.q);\r
#endif\r
}\r
void getTexel_inner(float v, vec2 f, highp vec3 d, highp vec3 t, highp vec3 p, vec4 s, float h, sampler2D o, out vec4 b, out vec4 B, out vec4 u)\r
{\r
    vec2 X = vec2(0.), i = vec2(0.);\r
#if defined(STANDARD_DERIVATIVES)\r
    X = dFdx(f);\r
    i = dFdy(f);\r
#endif\r
    getTexel_inner(v, f, d, t, p, s, X, i, h, o, b, B, u);\r
}\r
void getTexel(vec2 v, highp vec3 o, vec4 h, vec2 g, vec2 s, float f, sampler2D e, out vec4 c)\r
{\r
    vec3 t = vec3(1.), l = vec3(1.);\r
    vec4 i = vec4(0.), p = vec4(0.);\r
    getTexel_inner(1., v, o, t, l, h, g, s, f, e, c, i, p);\r
}\r
void getTexel(vec2 v, highp vec3 o, vec4 h, float g, sampler2D s, out vec4 f)\r
{\r
    vec3 e = vec3(1.), l = vec3(1.);\r
    vec4 t = vec4(0.), p = vec4(0.);\r
    getTexel_inner(1., v, o, e, l, h, g, s, f, t, p);\r
}\r
void getTexel(vec2 v, highp vec3 o, highp vec3 h, vec4 g, vec2 s, vec2 f, float e, sampler2D t, out vec4 l, out vec4 p)\r
{\r
    vec3 i = vec3(1.);\r
    vec4 c = vec4(0.);\r
    getTexel_inner(2., v, o, h, i, g, s, f, e, t, l, p, c);\r
}\r
void getTexel(vec2 v, highp vec3 o, highp vec3 h, vec4 g, float s, sampler2D f, out vec4 e, out vec4 t)\r
{\r
    vec3 l = vec3(1.);\r
    vec4 p = vec4(0.);\r
    getTexel_inner(2., v, o, h, l, g, s, f, e, t, p);\r
}\r
void getTexel(vec2 v, highp vec3 o, highp vec3 h, highp vec3 g, vec4 s, vec2 f, vec2 e, float t, sampler2D l, out vec4 p, out vec4 i, out vec4 c) { getTexel_inner(3., v, o, h, g, s, f, e, t, l, p, i, c); }\r
void getTexel(vec2 v, highp vec3 o, highp vec3 h, highp vec3 g, vec4 s, float f, sampler2D e, out vec4 t, out vec4 l, out vec4 p) { getTexel_inner(3., v, o, h, g, s, f, e, t, l, p); }\r
\r
#if __VERSION__ <= 120\r
#define in varying\r
#define out varying\r
#endif\r
\r
#ifndef TEXTURE_SETTINGS_INC\r
#define TEXTURE_SETTINGS_INC\r
struct TextureSettings\r
{\r
    highp vec3 textureMeta1;\r
    highp vec3 textureMeta2;\r
    highp vec2 uvAnim;\r
    float wrapping;\r
    float specular;\r
    float normalScale;\r
#if defined(REFRACTION)\r
    vec4 refraction;\r
#endif\r
#if defined(VIEWPORTMAP)\r
    vec4 viewportMapUVScaleAndAnim;\r
#endif\r
#if defined(DEBUG_MATERIAL_HIGHLIGHT)\r
    highp float materialID;\r
#endif\r
};\r
#if __VERSION__ <= 120\r
#ifdef in\r
#undef in\r
#endif\r
#ifdef out\r
#undef out\r
#endif\r
#endif\r
\r
void getTextureSettings(vec2 s, out TextureSettings v)\r
{\r
    const highp float d = 1. / 255., S = 1. / 65535., e = 32767., t = 1. / 32767.;\r
    const float f = 1. / MATERIAL_SETTINGS_TEXTURE_RESOLUTION;\r
    vec2 i = (floor(s + .5) * vec2(MATERIAL_SETTINGS_SLOT_PIXEL_RESOLUTION_X, MATERIAL_SETTINGS_SLOT_PIXEL_RESOLUTION_Y) + .5) * f;\r
    const float u = f;\r
    vec4 T = texture2DLodCompat(uTextureAtlasSettings, i, 0.), U, n, D, m, a, R;\r
    float h;\r
    vec4 r;\r
#if defined(TEXTURE_SETTINGS_USE_TEXEL_OFFSETS)\r
\r
#define SAMPLE_OFFSET_SLOTSIZES_AND_WRAPPING ivec2(2, 0)\r
\r
#define SAMPLE_OFFSET_UV_ANIM ivec2(0, 1)\r
\r
#define SAMPLE_OFFSET_SPECULAR_NORMAL_SCALE ivec2(1, 1)\r
\r
#define SAMPLE_OFFSET_REFRACTION ivec2(0, 2)\r
\r
#define SAMPLE_OFFSET_SLOTETC ivec2(1, 2)\r
\r
#define SAMPLE_OFFSET_VIEWPORTMAP_UVSCALE ivec2(2, 2)\r
\r
#define SAMPLE_OFFSET_VIEWPORTMAP_UVANIMATION ivec2(0, 3)\r
\r
#define SAMPLE_OFFSET_DEBUG ivec2(2, 3)\r
    U = textureLodOffset(uTextureAtlasSettings, i, 0., SAMPLE_OFFSET_SLOTSIZES_AND_WRAPPING);\r
    n = textureLodOffset(uTextureAtlasSettings, i, 0., SAMPLE_OFFSET_UV_ANIM);\r
#if defined(SPECULAR_LIGHTING) || defined(USE_NORMAL_MAP)\r
    D = textureLodOffset(uTextureAtlasSettings, i, 0., SAMPLE_OFFSET_SPECULAR_NORMAL_SCALE);\r
#endif\r
\r
#if defined(REFRACTION)\r
    m = textureLodOffset(uTextureAtlasSettings, i, 0., SAMPLE_OFFSET_REFRACTION);\r
#endif\r
    h = textureLodOffset(uTextureAtlasSettings, i, 0., SAMPLE_OFFSET_SLOTETC).q;\r
#if defined(VIEWPORTMAP)\r
    a = textureLodOffset(uTextureAtlasSettings, i, 0., SAMPLE_OFFSET_VIEWPORTMAP_UVSCALE);\r
    R = textureLodOffset(uTextureAtlasSettings, i, 0., SAMPLE_OFFSET_VIEWPORTMAP_UVANIMATION);\r
#endif\r
\r
#if defined(DEBUG_MATERIAL_HIGHLIGHT)\r
    r = textureLodOffset(uTextureAtlasSettings, i, 0., SAMPLE_OFFSET_DEBUG);\r
#endif\r
\r
#else\r
    vec2 g = vec2(u * 2., 0.), o = vec2(0., u), M = vec2(u, u), p = vec2(0., u * 2.), X = vec2(u, u * 2.), q = vec2(u * 2., u * 2.), E = vec2(0., u * 3.), A = vec2(u * 2., u * 3.);\r
    U = texture2DLodCompat(uTextureAtlasSettings, i + g, 0.);\r
    n = texture2DLodCompat(uTextureAtlasSettings, i + o, 0.);\r
#if defined(SPECULAR_LIGHTING) || defined(USE_NORMAL_MAP)\r
    D = texture2DLodCompat(uTextureAtlasSettings, i + M, 0.);\r
#endif\r
\r
#if defined(REFRACTION)\r
    m = texture2DLodCompat(uTextureAtlasSettings, i + p, 0.);\r
#endif\r
    h = texture2DLodCompat(uTextureAtlasSettings, i + X, 0.).q;\r
#if defined(VIEWPORTMAP)\r
    a = texture2DLodCompat(uTextureAtlasSettings, i + q, 0.);\r
    R = texture2DLodCompat(uTextureAtlasSettings, i + E, 0.);\r
#endif\r
\r
#if defined(DEBUG_MATERIAL_HIGHLIGHT)\r
    r = texture2DLodCompat(uTextureAtlasSettings, i + A, 0.);\r
#endif\r
\r
#endif\r
    T = floor(T * 255. + .5);\r
    U = floor(U * 255. + .5);\r
    h = floor(h * 255. + .5);\r
    const float V = .5, c = .25, L = .125, P = .0625;\r
    vec4 N = step(.5, fract(h * vec4(V, c, L, P)));\r
    T += vec4(256.) * N;\r
    vec2 w = U.st * uAtlasMeta.t;\r
    v.textureMeta1 = vec3(T.st, w.s);\r
    v.textureMeta2 = vec3(T.pq, w.t);\r
    v.wrapping = U.q;\r
#if defined(SPECULAR_LIGHTING) || defined(USE_NORMAL_MAP)\r
    v.specular = UnpackVec2ToFloat(D.st) * d;\r
    v.normalScale = UnpackVec2ToFloat(D.pq) * d;\r
    v.normalScale = v.normalScale * .1 - 8.;\r
#else\r
    v.specular = 0.;\r
    v.normalScale = 0.;\r
#endif\r
    highp vec2 G = vec2(UnpackVec2ToFloat(n.st), UnpackVec2ToFloat(n.pq)) - e;\r
    G *= step(1.5, abs(G));\r
    v.uvAnim = G * t * 2.;\r
#if defined(REFRACTION)\r
    v.refraction = m;\r
    v.refraction.t = v.refraction.t * 2. + 1.;\r
    v.refraction.p = UnpackVec2ToFloat(v.refraction.pq) * S * 10.;\r
#endif\r
\r
#if defined(VIEWPORTMAP)\r
    highp vec2 C = vec2(UnpackVec2ToFloat(a.st), UnpackVec2ToFloat(a.pq)) - e, Y = vec2(UnpackVec2ToFloat(R.st), UnpackVec2ToFloat(R.pq)) - e;\r
    C *= step(1.5, abs(C));\r
    Y *= step(1.5, abs(Y));\r
    v.viewportMapUVScaleAndAnim = vec4(C * t * 2., Y * t * 2.);\r
#endif\r
\r
#if defined(DEBUG_MATERIAL_HIGHLIGHT)\r
    v.materialID = UnpackVec2ToFloat(r.st);\r
#endif\r
}\r
void getTextureSettings1D(float v, out TextureSettings i)\r
{\r
    const float d = 1. / MATERIAL_SETTINGS_SLOTS_DIMENSION_COUNT_X;\r
    float S = floor((v + .5) * d), u = v - S * MATERIAL_SETTINGS_SLOTS_DIMENSION_COUNT_X;\r
    getTextureSettings(vec2(u, S), i);\r
}\r
#if __VERSION__ <= 120\r
#define in varying\r
#define out varying\r
#endif\r
\r
#endif\r
#ifndef CONVERSION_UTILS_INC\r
#define CONVERSION_UTILS_INC\r
vec3 SRGBToLinear(vec3 srgbColour)\r
{\r
#if defined(GAMMA_CORRECT_INPUTS)\r
    return srgbColour * srgbColour;\r
#else\r
    return pow(srgbColour, vec3(2.2, 2.2, 2.2));\r
#endif\r
}\r
vec3 LinearToSRGB(vec3 s) { return max(vec3(1.055) * pow(s, vec3(.416667)) - vec3(.055), vec3(0.)); }\r
float LinearToSRGB(float s)\r
{\r
    const float p = 1. / 2.2;\r
    return pow(s, p);\r
}\r
vec3 LinearToSRGBRunescape(vec3 s) { return sqrt(s); }\r
float LinearToSRGBRunescape(float s) { return sqrt(s); }\r
vec4 convertRGBtoHSL(vec4 s)\r
{\r
    const float p = 1. / 6.;\r
    float v = s.s, m = s.t, t = s.p, f = min(min(s.s, s.t), s.p), q = max(max(s.s, s.t), s.p), r = q - f, G = (f + q) * .5, i = 0., e = 0.;\r
    if (G > 0. && G < 1.)\r
    {\r
        float L = G < .5 ? G : 1. - G;\r
        i = r / (L * 2.);\r
    }\r
    if (r > 0.)\r
    {\r
        vec3 L = vec3(q == v && q != m ? 1. : 0., q == m && q != t ? 1. : 0., q == t && q != v ? 1. : 0.), o = vec3((m - t) / r, 2. + (t - v) / r, 4. + (v - m) / r);\r
        e += dot(o, L);\r
        e *= p;\r
        if (e < 0.)\r
            e += 1.;\r
    }\r
    return vec4(e, i, G, s.q);\r
}\r
vec4 convertHSLtoRGB(vec4 s)\r
{\r
    const float v = 1. / 3., q = 2. / 3., m = 6.;\r
    float p = s.s, t = s.t, r = s.p;\r
    vec3 f = vec3(m * (p - q), 0., m * (1. - p));\r
    if (p < q)\r
        f.s = 0., f.t = m * (q - p), f.p = m * (p - v);\r
    if (p < v)\r
        f.s = m * (v - p), f.t = m * p, f.p = 0.;\r
    f = min(f, 1.);\r
    float L = 2. * t, i = 1. - t, G = 1. - r, e = 2. * r - 1.;\r
    vec3 c = L * f + i, o;\r
    if (r >= .5)\r
        o = G * c + e;\r
    else\r
        o = r * c;\r
    return vec4(o, s.q);\r
}\r
#endif\r
\r
const highp float CAUSTICS_FIXED_POINT_SCALE = 10000.;\r
#if defined(CAUSTICS) && !defined(CAUSTICS_COMPUTE) && !defined(CAUSTICS_STENCIL)\r
float CalculateCausticsTerm(highp vec3 u, float t, vec3 e)\r
{\r
    float i = 0., s = 0.;\r
    if (u.t <= uCausticsPlaneHeight)\r
        s = step(1., t);\r
    else\r
    {\r
#if defined(CAUSTICS_OVERWATER)\r
        s = clamp(e.t * -1., 0., 1.);\r
        float d = smoothstep(uCausticsOverWaterFade.s, uCausticsOverWaterFade.t, u.t - uCausticsPlaneHeight);\r
        s *= 1. - d;\r
#else\r
        return 0.0;\r
#endif\r
    }\r
    if (s > 0.)\r
    {\r
        highp vec4 C = uCausticsViewProjMatrix * vec4(u, 1.);\r
        C.st /= 2. * C.q;\r
        vec2 f = abs(C.st);\r
        C.st += .5;\r
        f = smoothstep(.4, .5, f);\r
        s *= max(0., 1. - (f.s + f.t));\r
        if (s > 0.)\r
            i += textureOffset(uCausticsMap, C.st, ivec2(-1, -1)).s, i += textureOffset(uCausticsMap, C.st, ivec2(-1, 0)).s, i += textureOffset(uCausticsMap, C.st, ivec2(-1, 1)).s, i += textureOffset(uCausticsMap, C.st, ivec2(0, -1)).s, i += texture2D(uCausticsMap, C.st).s * 5., i += textureOffset(uCausticsMap, C.st, ivec2(0, 1)).s, i += textureOffset(uCausticsMap, C.st, ivec2(1, -1)).s, i += textureOffset(uCausticsMap, C.st, ivec2(1, 0)).s, i += textureOffset(uCausticsMap, C.st, ivec2(1, 1)).s, i *= s / 12.;\r
    }\r
    return i;\r
}\r
#endif\r
#if defined(CAUSTICS_COMPUTE)\r
void WriteCausticsRay(vec3 t, float i)\r
{\r
    vec2 s = t.sp * i * uCausticsRefractionScale, C = (gl_FragCoord.st + s * 2.) / uCausticsComputeResolution * uCausticsMapSize;\r
    highp float u = min(uCausticsFade.s / i * uCausticsFade.t, 7. * uCausticsFade.t), f = smoothstep(uCausticsFade.p, uCausticsFade.q, i), E = f * u * CAUSTICS_FIXED_POINT_SCALE;\r
    if (E >= 1.f)\r
        imageAtomicAdd(uCausticsIntegerMap, ivec2(C.st), uint(E));\r
}\r
#endif\r
\r
#ifndef DISTANCE_FOG_UNIFORMS\r
#define DISTANCE_FOG_UNIFORMS\r
#if defined(FOG_DISTANCE)\r
UNIFORM_BUFFER_BEGIN(DistanceFog)\r
uniform mediump vec4 uFogColour;\r
uniform highp vec4 uFogParams;\r
UNIFORM_BUFFER_END\r
#endif\r
#endif\r
\r
#ifndef DISTANCE_FOG_FUNCTIONS\r
#define DISTANCE_FOG_FUNCTIONS\r
#if defined(FOG_DISTANCE)\r
float FogBasedOnDistance(highp float f)\r
{\r
    highp float F = (uFogParams.t - f) * uFogParams.s;\r
    return 1. - clamp(F, 0., 1.);\r
}\r
float FogBasedOnAngle(highp vec3 f)\r
{\r
    highp float F = 1. - clamp(f.t + uFogParams.q, 0., 1.);\r
    F = pow(F, uFogParams.p);\r
    return clamp(F, 0., 1.);\r
}\r
#endif\r
#endif\r
\r
#if defined(TEXTURE_ATLAS) && defined(NORMAL_MAP)\r
#define USE_NORMAL_MAP\r
#endif\r
\r
#if __VERSION__ <= 120\r
#ifdef in\r
#undef in\r
#endif\r
#ifdef out\r
#undef out\r
#endif\r
#endif\r
\r
#if defined(TEXTURE_ATLAS)\r
void CalculateDerivatives(inout highp vec2 v, inout highp vec2 d, inout highp vec3 g, inout highp vec3 h, highp vec2 S, highp vec3 T)\r
{\r
#if defined(STANDARD_DERIVATIVES)\r
    v = dFdx(S);\r
    d = dFdy(S);\r
#if defined(PER_FRAGMENT_TANGENTS)\r
    g = dFdxFine(T);\r
    h = dFdyFine(T);\r
#endif\r
\r
#endif\r
}\r
#if defined(RT7_MATERIAL)\r
void SampleTexturesRT7(inout vec4 v, inout vec4 d, inout vec4 S, vec2 T, TextureSettings h, float g, vec2 i, vec2 u)\r
{\r
#if defined(TEXTURE_ATLAS)\r
\r
#if !defined(TEXTURE_ALBEDO_GLOBAL)\r
    if (fract(g * 8.) > .5)\r
    {\r
#endif\r
        getTexel(T, h.textureMeta1, h.textureMeta2, h.textureMeta3, uAtlasMeta, i, u, h.wrapping, uTextureAtlas, v, d, S);\r
#if defined(ETC_CHANNEL_SWIZZLE)\r
        d = d.qtps;\r
        S = S.sqpt;\r
#endif\r
\r
#if !defined(TEXTURE_ALBEDO_GLOBAL)\r
    }\r
#endif\r
\r
#endif\r
}\r
#else\r
void SampleTextures(inout vec4 v, inout vec4 d, vec2 T, TextureSettings h, float S, vec2 i, vec2 u)\r
{\r
#if defined(TEXTURE_ATLAS)\r
\r
#if !defined(TEXTURE_ALBEDO_GLOBAL)\r
    if (fract(S * 8.) > .5)\r
    {\r
#endif\r
\r
#if defined(HDR_SCALE) || defined(USE_NORMAL_MAP)\r
        getTexel(T, h.textureMeta1, h.textureMeta2, uAtlasMeta, i, u, h.wrapping, uTextureAtlas, v, d);\r
#if defined(ETC_CHANNEL_SWIZZLE)\r
        d = d.qtps;\r
#endif\r
\r
#else\r
    getTexel(T, h.textureMeta1, uAtlasMeta, i, u, h.wrapping, uTextureAtlas, v);\r
#endif\r
\r
#if !defined(TEXTURE_ALBEDO_GLOBAL)\r
    }\r
#endif\r
\r
#if defined(HDR_SCALE)\r
    v = HDRScale(v, d.s);\r
#endif\r
\r
#endif\r
}\r
#endif\r
#endif\r
#if __VERSION__ <= 120\r
#define in varying\r
#define out varying\r
#endif\r
\r
void ComputeTangentBitangentFromDerivatives(inout vec3 v, inout vec3 p, highp vec3 h, highp vec3 d, highp vec3 A, highp vec2 r, highp vec2 S)\r
{\r
    highp vec3 q = cross(h, d), c = cross(A, h), n = c * r.s + q * S.s, s = c * r.t + q * S.t;\r
    highp float D = dot(n, n), a = dot(s, s), i = max(D, a), t = inversesqrt(i);\r
    n *= t;\r
    s *= t;\r
    if (isNaN(D + a) || i <= 0.)\r
        n = s = h;\r
    v = n;\r
    p = s;\r
}\r
vec3 ComputeBitangent(vec3 v, vec4 h)\r
{\r
    highp vec3 p = cross(v, h.stp);\r
    p *= h.q;\r
    return p;\r
}\r
vec3 ApplyNormalMap(highp vec3 v, highp vec3 h, highp vec3 d, highp vec3 A, highp vec2 p, highp vec2 S)\r
{\r
    highp vec3 D, s;\r
    ComputeTangentBitangentFromDerivatives(D, s, h, d, A, p, S);\r
#if defined(DEBUG_TANGENTS)\r
    gl_FragColor.stp = normalize(D) * .5 + .5;\r
    gl_FragColor.q = 1.;\r
#endif\r
\r
#if defined(DEBUG_BITANGENTS)\r
    gl_FragColor.stp = normalize(s) * .5 + .5;\r
    gl_FragColor.q = 1.;\r
#endif\r
    highp vec3 r = v.s * D + v.t * s + v.p * h;\r
    r = normalize(r);\r
    return abs(r.s) + abs(r.t) + abs(r.p) < .5 ? h : r;\r
}\r
vec3 ApplyNormalMap(vec3 v, vec3 A, vec3 s, vec3 S)\r
{\r
#if defined(DEBUG_TANGENTS)\r
    gl_FragColor.stp = s * .5 + .5;\r
    gl_FragColor.q = 1.;\r
#endif\r
\r
#if defined(DEBUG_BITANGENTS)\r
    gl_FragColor.stp = S * .5 + .5;\r
    gl_FragColor.q = 1.;\r
#endif\r
    highp vec3 p = v.s * s + v.t * S + v.p * A;\r
    p = normalize(p);\r
    return p;\r
}\r
vec3 ApplyNormalMap(vec3 v, vec3 h, vec4 r)\r
{\r
    vec3 p = ComputeBitangent(h, r);\r
    return ApplyNormalMap(v, h, r.stp, p);\r
}\r
vec3 ApplyNormalMapTerrain(vec3 v, highp vec3 h, highp vec3 r, highp vec3 S)\r
{\r
    highp vec3 p = cross(h, r), s = cross(S, h), D = s * r.s + p * S.s, n = s * r.p + p * S.p;\r
    highp float A = inversesqrt(max(dot(D, D), dot(n, n)));\r
    D *= A;\r
    n *= A;\r
#if defined(DEBUG_TANGENTS)\r
    gl_FragColor.stp = normalize(D) * .5 + .5;\r
    gl_FragColor.q = 1.;\r
#endif\r
\r
#if defined(DEBUG_BITANGENTS)\r
    gl_FragColor.stp = normalize(n) * .5 + .5;\r
    gl_FragColor.q = 1.;\r
#endif\r
    highp vec3 d = v.s * D + v.t * n + v.p * h;\r
    d = normalize(d);\r
    return isNaN(d.s) ? h : d;\r
}\r
vec3 ApplyNormalMapTerrain(vec3 v, vec3 h)\r
{\r
    const vec3 p = vec3(0., 0., 1.);\r
    vec3 D = cross(p, h), s = cross(D, h);\r
    return ApplyNormalMap(v, h, D, s);\r
}\r
\r
vec3 UnpackCompressedNormal(vec3 U)\r
{\r
    vec3 v = vec3(U.ps * 255. / 127. - 1.00787, 0.);\r
    v.p = sqrt(1. - min(1., dot(v.st, v.st)));\r
    v.t = -v.t;\r
    return v;\r
}\r
vec3 UnpackNormal(vec3 v, float U)\r
{\r
    vec3 t;\r
#if defined(COMPRESSED_NORMALS)\r
    t = UnpackCompressedNormal(v);\r
#else\r
    t = v.pst * 255. / 127. - 1.00787;\r
    t.t = -t.t;\r
#endif\r
    t.st *= U;\r
    return t;\r
}\r
vec3 UnpackNormal(vec3 U) { return UnpackNormal(U, 1.); }\r
vec3 UnpackNormal(vec4 v) { return UnpackNormal(v.tpq, 1.); }\r
vec3 UnpackNormal(vec4 v, float U) { return UnpackNormal(v.tpq, U); }\r
\r
#if defined(VIEWPORTMAP)\r
vec3 SampleViewportMapColour(highp vec2 v, highp vec4 e)\r
{\r
    v = v * uViewportLookupScale.st;\r
    vec2 t;\r
#if defined(OGLES2_BACKEND)\r
    t = uViewportMapTextureSize.st;\r
#else\r
    t = vec2(textureSize(uViewportMap, 0));\r
#endif\r
    v.s *= uViewportLookupScale.p * uViewportLookupScale.t / (t.s / t.t);\r
    v *= e.st;\r
    highp float u = uTextureAnimationTime;\r
    v += e.pq * u;\r
    return texture2DLodCompat(uViewportMap, v, 0.).stp;\r
}\r
#endif\r
\r
#ifndef VOLUMETRIC_FUNCTIONS_INC\r
#define VOLUMETRIC_FUNCTIONS_INC\r
#if defined(SUNLIGHT_SHADOWS) && defined(VOLUMETRIC_SCATTERING) && defined(SUNLIGHT_DIRECT_LIGHTING)\r
#define VOLUMETRIC_SCATTERING_SUPPORTED\r
uniform vec4 uMieG, uVolumetricScatteringParameters;\r
#if defined(VOLUMETRIC_GROUND_FOG)\r
uniform vec4 uGroundFogHeight_Falloff;\r
#endif\r
#if defined(VOLUMETRIC_SCATTERING_NOISE)\r
uniform sampler3D sNoiseTex;\r
uniform vec4 u3DNoiseFrequency_Strength, u3DNoiseWind_Power;\r
#endif\r
uniform float uTime;\r
float ShadowSample(vec4 u, vec4 v, float s)\r
{\r
    int d = int(uMappingParams.q);\r
    vec4 f;\r
    int G;\r
#if defined(CASCADE_SPLIT_SELECTION)\r
    G = ShadowMapSelectCascadeBySplit(s, uCascadeFrustumViewDepths, uCascadeSplitSelectionFlags);\r
#if defined(USE_LIGHT_VIEW_PROJ_TEX_MATRIX)\r
    f = uSunlightViewProjTexMatrix[G] * u;\r
#else\r
    f = v * uSunlightProjTexMatScale[G] + uSunlightProjTexMatOffset[G];\r
#endif\r
\r
#else\r
\r
#if defined(USE_LIGHT_VIEW_PROJ_TEX_MATRIX)\r
    G = ShadowMapSelectCascadeByMap(f, u, uSunlightViewProjTexMatrix, uCascadeMinAtlasExtents);\r
#else\r
    G = ShadowMapSelectCascadeByMap(f, v, uSunlightProjTexMatScale, uSunlightProjTexMatOffset, uCascadeMinAtlasExtents);\r
#endif\r
\r
#endif\r
    return G >= d ? 1. : ShadowDepthMapFilter1x1(uSunlightShadowMap, f);\r
}\r
float PhaseFunction(float v, vec4 s) { return s.q * (s.s / pow(s.t - s.p * v, 1.5)); }\r
vec4 GetScatteredInRay(int s, vec3 u, float v, float d, vec4 f)\r
{\r
    float G = uSunlightFadeAttenParams.t * 1.4, m = min(G, v);\r
    vec3 V = uCameraPosition, t = V + u * m;\r
    vec4 x = uSunlightViewMatrix * vec4(V, 1.), e = uSunlightViewMatrix * vec4(t, 1.), i = uSunlightViewMatrix * vec4(V, 0.), n = uSunlightViewMatrix * vec4(t, 0.);\r
    vec3 E = vec3(uViewMatrix[0][2], uViewMatrix[1][2], uViewMatrix[2][2]);\r
    int S = int(uMappingParams.q);\r
    float q = 0., p = 1. / float(s), N = d * p, h = m * p;\r
    vec2 r = vec2(0., 0.);\r
#if defined(VOLUMETRIC_SCATTERING_NOISE)\r
    vec3 P = vec3(.05 * uTime), a = u3DNoiseWind_Power.stp * uTime;\r
    const float o = .31;\r
    float c = u3DNoiseFrequency_Strength.s * o;\r
    vec3 l = a * u3DNoiseFrequency_Strength.s, T = a * c;\r
#endif\r
    for (int X = 0; X < s; ++X)\r
    {\r
        vec3 U = mix(V, t, N);\r
        vec4 I = mix(x, e, N);\r
#if defined(VOLUMETRIC_SCATTERING_NOISE)\r
        vec4 M = mix(i, n, N);\r
        vec3 C = M.sts * vec3(.001) + P, g = M.sts * vec3(.001) - P;\r
        I.sp += vec2(texture3D(sNoiseTex, g).s, texture3D(sNoiseTex, g).s) * 128. - 64.;\r
#endif\r
        float R = 0.;\r
#if defined(USE_CASCADE_SPLIT_SELECTION)\r
        vec3 O = U.stp - uCameraPosition;\r
        R = abs(dot(O, E));\r
#endif\r
        float F = ShadowSample(vec4(U, 1.f), I, R), D = 1., w = 1.;\r
#if defined(VOLUMETRIC_GROUND_FOG)\r
        if (uGroundFogHeight_Falloff.t != 0.)\r
        {\r
            float L = max(0., (U.t - uGroundFogHeight_Falloff.s) * uGroundFogHeight_Falloff.t);\r
            w = exp(-L) * 100.;\r
        }\r
#endif\r
\r
#if defined(VOLUMETRIC_SCATTERING_NOISE)\r
        if (u3DNoiseFrequency_Strength.t != 0.)\r
        {\r
            vec3 L = U * u3DNoiseFrequency_Strength.s + l;\r
            float y = float(texture3D(sNoiseTex, L));\r
            vec3 A = U * c + T;\r
            float H = float(texture3D(sNoiseTex, A)), W = pow(mix(y, H, .8) + .5, u3DNoiseWind_Power.q);\r
            w *= max(0, mix(1., W, u3DNoiseFrequency_Strength.t));\r
        }\r
#endif\r
        D += w;\r
        float L = D * h, W = uVolumetricScatteringParameters.s * L;\r
        q += uVolumetricScatteringParameters.t * L;\r
        r += W * exp(-q) * vec2(F, 1. - F);\r
        N += p;\r
    }\r
    if (v > G)\r
    {\r
        float L = v - G, U = uVolumetricScatteringParameters.s * L;\r
        q += uVolumetricScatteringParameters.t * L;\r
        r += vec2(U * exp(-q), 0.);\r
    }\r
    float U = r.s + r.t;\r
    if (U > 0.)\r
    {\r
        float L = r.s / U, g = uVolumetricScatteringParameters.q;\r
        L = pow(L, g);\r
        r.st = U * vec2(L, 1. - L);\r
        r.s = r.s * PhaseFunction(dot(u, uInvSunDirection), f);\r
    }\r
    return vec4(r.s, q, r.t, 1.);\r
}\r
vec4 GetScatteredInRay2(int s, vec3 u, float v, float f) { return GetScatteredInRay(s, u, v, f, uMieG); }\r
vec4 GetScatteredInRayLine(int s, vec3 u, float v, vec3 f, float d, float G)\r
{\r
    vec4 L = GetScatteredInRay2(s, u, v, G), t = GetScatteredInRay2(s, mix(u, f, .33), mix(v, d, .33), G), m = GetScatteredInRay2(s, mix(u, f, .66), mix(v, d, .66), G), U = GetScatteredInRay2(s, f, d, G);\r
    return L * .15 + t * .2 + m * .3 + U * .35;\r
}\r
#endif\r
#endif\r
\r
#ifndef APPLY_VOLUMETRICS_INC\r
#define APPLY_VOLUMETRICS_INC\r
#ifndef VOLUMETRIC_FUNCTIONS_INC\r
#define VOLUMETRIC_FUNCTIONS_INC\r
#if defined(SUNLIGHT_SHADOWS) && defined(VOLUMETRIC_SCATTERING) && defined(SUNLIGHT_DIRECT_LIGHTING)\r
#define VOLUMETRIC_SCATTERING_SUPPORTED\r
uniform vec4 uMieG, uVolumetricScatteringParameters;\r
#if defined(VOLUMETRIC_GROUND_FOG)\r
uniform vec4 uGroundFogHeight_Falloff;\r
#endif\r
#if defined(VOLUMETRIC_SCATTERING_NOISE)\r
uniform sampler3D sNoiseTex;\r
uniform vec4 u3DNoiseFrequency_Strength, u3DNoiseWind_Power;\r
#endif\r
uniform float uTime;\r
float ShadowSample(vec4 u, vec4 v, float s)\r
{\r
    int d = int(uMappingParams.q);\r
    vec4 f;\r
    int G;\r
#if defined(CASCADE_SPLIT_SELECTION)\r
    G = ShadowMapSelectCascadeBySplit(s, uCascadeFrustumViewDepths, uCascadeSplitSelectionFlags);\r
#if defined(USE_LIGHT_VIEW_PROJ_TEX_MATRIX)\r
    f = uSunlightViewProjTexMatrix[G] * u;\r
#else\r
    f = v * uSunlightProjTexMatScale[G] + uSunlightProjTexMatOffset[G];\r
#endif\r
\r
#else\r
\r
#if defined(USE_LIGHT_VIEW_PROJ_TEX_MATRIX)\r
    G = ShadowMapSelectCascadeByMap(f, u, uSunlightViewProjTexMatrix, uCascadeMinAtlasExtents);\r
#else\r
    G = ShadowMapSelectCascadeByMap(f, v, uSunlightProjTexMatScale, uSunlightProjTexMatOffset, uCascadeMinAtlasExtents);\r
#endif\r
\r
#endif\r
    return G >= d ? 1. : ShadowDepthMapFilter1x1(uSunlightShadowMap, f);\r
}\r
float PhaseFunction(float v, vec4 s) { return s.q * (s.s / pow(s.t - s.p * v, 1.5)); }\r
vec4 GetScatteredInRay(int s, vec3 u, float v, float d, vec4 f)\r
{\r
    float G = uSunlightFadeAttenParams.t * 1.4, m = min(G, v);\r
    vec3 V = uCameraPosition, t = V + u * m;\r
    vec4 x = uSunlightViewMatrix * vec4(V, 1.), e = uSunlightViewMatrix * vec4(t, 1.), i = uSunlightViewMatrix * vec4(V, 0.), n = uSunlightViewMatrix * vec4(t, 0.);\r
    vec3 E = vec3(uViewMatrix[0][2], uViewMatrix[1][2], uViewMatrix[2][2]);\r
    int S = int(uMappingParams.q);\r
    float q = 0., p = 1. / float(s), N = d * p, h = m * p;\r
    vec2 r = vec2(0., 0.);\r
#if defined(VOLUMETRIC_SCATTERING_NOISE)\r
    vec3 P = vec3(.05 * uTime), a = u3DNoiseWind_Power.stp * uTime;\r
    const float o = .31;\r
    float c = u3DNoiseFrequency_Strength.s * o;\r
    vec3 l = a * u3DNoiseFrequency_Strength.s, T = a * c;\r
#endif\r
    for (int X = 0; X < s; ++X)\r
    {\r
        vec3 U = mix(V, t, N);\r
        vec4 I = mix(x, e, N);\r
#if defined(VOLUMETRIC_SCATTERING_NOISE)\r
        vec4 M = mix(i, n, N);\r
        vec3 C = M.sts * vec3(.001) + P, g = M.sts * vec3(.001) - P;\r
        I.sp += vec2(texture3D(sNoiseTex, g).s, texture3D(sNoiseTex, g).s) * 128. - 64.;\r
#endif\r
        float R = 0.;\r
#if defined(USE_CASCADE_SPLIT_SELECTION)\r
        vec3 O = U.stp - uCameraPosition;\r
        R = abs(dot(O, E));\r
#endif\r
        float F = ShadowSample(vec4(U, 1.f), I, R), D = 1., w = 1.;\r
#if defined(VOLUMETRIC_GROUND_FOG)\r
        if (uGroundFogHeight_Falloff.t != 0.)\r
        {\r
            float L = max(0., (U.t - uGroundFogHeight_Falloff.s) * uGroundFogHeight_Falloff.t);\r
            w = exp(-L) * 100.;\r
        }\r
#endif\r
\r
#if defined(VOLUMETRIC_SCATTERING_NOISE)\r
        if (u3DNoiseFrequency_Strength.t != 0.)\r
        {\r
            vec3 L = U * u3DNoiseFrequency_Strength.s + l;\r
            float y = float(texture3D(sNoiseTex, L));\r
            vec3 A = U * c + T;\r
            float H = float(texture3D(sNoiseTex, A)), W = pow(mix(y, H, .8) + .5, u3DNoiseWind_Power.q);\r
            w *= max(0, mix(1., W, u3DNoiseFrequency_Strength.t));\r
        }\r
#endif\r
        D += w;\r
        float L = D * h, W = uVolumetricScatteringParameters.s * L;\r
        q += uVolumetricScatteringParameters.t * L;\r
        r += W * exp(-q) * vec2(F, 1. - F);\r
        N += p;\r
    }\r
    if (v > G)\r
    {\r
        float L = v - G, U = uVolumetricScatteringParameters.s * L;\r
        q += uVolumetricScatteringParameters.t * L;\r
        r += vec2(U * exp(-q), 0.);\r
    }\r
    float U = r.s + r.t;\r
    if (U > 0.)\r
    {\r
        float L = r.s / U, g = uVolumetricScatteringParameters.q;\r
        L = pow(L, g);\r
        r.st = U * vec2(L, 1. - L);\r
        r.s = r.s * PhaseFunction(dot(u, uInvSunDirection), f);\r
    }\r
    return vec4(r.s, q, r.t, 1.);\r
}\r
vec4 GetScatteredInRay2(int s, vec3 u, float v, float f) { return GetScatteredInRay(s, u, v, f, uMieG); }\r
vec4 GetScatteredInRayLine(int s, vec3 u, float v, vec3 f, float d, float G)\r
{\r
    vec4 L = GetScatteredInRay2(s, u, v, G), t = GetScatteredInRay2(s, mix(u, f, .33), mix(v, d, .33), G), m = GetScatteredInRay2(s, mix(u, f, .66), mix(v, d, .66), G), U = GetScatteredInRay2(s, f, d, G);\r
    return L * .15 + t * .2 + m * .3 + U * .35;\r
}\r
#endif\r
#endif\r
\r
#if defined(VOLUMETRIC_SCATTERING) && defined(SUNLIGHT_DIRECT_LIGHTING)\r
uniform vec3 uVolumetricLitFogColour, uVolumetricUnlitFogColour;\r
uniform mat4 uVolumetricDitherMat;\r
#if __VERSION__ <= 120\r
#ifdef in\r
#undef in\r
#endif\r
#ifdef out\r
#undef out\r
#endif\r
#endif\r
\r
void GetInAndOutScattering(vec4 v, out vec3 u, out vec3 G)\r
{\r
    vec3 A = uSunColour * uVolumetricLitFogColour, o = uAmbientColour * uVolumetricUnlitFogColour;\r
    u = vec3(exp(-v.t));\r
    G = v.s * A + v.p * o;\r
}\r
#if __VERSION__ <= 120\r
#define in varying\r
#define out varying\r
#endif\r
\r
vec4 ApplyVolumetricScattering(vec4 v, vec4 u)\r
{\r
    vec3 A = vec3(1.), o = vec3(0.);\r
    GetInAndOutScattering(u, A, o);\r
    return vec4(v.stp * A + o, v.q);\r
}\r
float CalculateScatteringOffset(vec2 v)\r
{\r
    vec2 u = vec2(floor(mod(v.st, 4.)));\r
    return uVolumetricDitherMat[int(u.s)][int(u.t)];\r
}\r
#endif\r
#endif\r
\r
#ifndef LIGHTING_UTILS_H\r
#define LIGHTING_UTILS_H\r
#ifndef LIGHTING_INC\r
#define LIGHTING_INC\r
#if __VERSION__ <= 120\r
#ifdef in\r
#undef in\r
#endif\r
#ifdef out\r
#undef out\r
#endif\r
#endif\r
\r
#ifndef FRESNEL_INC\r
#define FRESNEL_INC\r
vec3 FresnelSchlick(vec3 F, float f, highp float h)\r
{\r
    vec3 c = F + (1. - F) * pow(1. - f, h);\r
    return c;\r
}\r
vec3 FresnelSchlickRoughness(vec3 f, float F, highp float h, float v)\r
{\r
    vec3 c = f + (max(vec3(v), f) - f) * pow(1. - F, h);\r
    return c;\r
}\r
float FresnelSchlick(float F, float f, highp float h)\r
{\r
    float c = F + (1. - F) * pow(1. - f, h);\r
    return c;\r
}\r
float FresnelSchlickRoughness(float f, float F, highp float h, float v)\r
{\r
    float c = f + (max(v, f) - f) * pow(1. - F, h);\r
    return c;\r
}\r
float FresnelSchlick(vec3 F, vec3 f, float c)\r
{\r
    float h = max(0., dot(F, f));\r
    return c + (1. - c) * pow(1. - h, 5.);\r
}\r
float Fresnel(vec3 F, vec3 f, float c, float h)\r
{\r
    float p = 1. - max(0., dot(F, f)), v = p * p;\r
    v = v * v;\r
    v = v * p;\r
    return clamp(v * (1. - clamp(h, 0., 1.)) + h - c, 0., 1.);\r
}\r
#endif\r
\r
#ifndef BRDF_INC\r
#define BRDF_INC\r
#ifndef NDF_INC\r
#define NDF_INC\r
#ifndef MATH_UTILS_INC\r
#define MATH_UTILS_INC\r
const float PI = 3.14159, INV_PI = .31831, TWOPI = PI * 2., INV_TWOPI = 1. / TWOPI, PI_OVER_4 = PI / 4., PI_OVER_2 = PI / 2., SQRT_2_PI = .797885, INV_EIGHT = .125;\r
float SpecPowToBeckmannRoughness(float f) { return sqrt(2. / (f + 2.)); }\r
float PerceptualRoughnessToRoughness(float f) { return f * f; }\r
float RoughnessToPerceptualRoughness(float f) { return sqrt(f); }\r
#endif\r
\r
float BlinnPhongNDF(float f, float N)\r
{\r
    return (f + 2.) * INV_EIGHT * pow(N, f);\r
}\r
float GGXTrowbridgeReitzNDF(float N, float f)\r
{\r
    float P = N * N, I = f * f, T = I * (P - 1.) + 1.;\r
    return P / (PI * (T * T + .0001));\r
}\r
float BeckmannNDF(float N, float f)\r
{\r
    float P = N * N, I = f * f;\r
    return exp((I - 1.) / (P * I)) / (PI * P * (I * I));\r
}\r
#endif\r
\r
#ifndef VISIBILITY_FUNC_INC\r
#define VISIBILITY_FUNC_INC\r
#ifndef MATH_UTILS_INC\r
#define MATH_UTILS_INC\r
const float PI = 3.14159, INV_PI = .31831, TWOPI = PI * 2., INV_TWOPI = 1. / TWOPI, PI_OVER_4 = PI / 4., PI_OVER_2 = PI / 2., SQRT_2_PI = .797885, INV_EIGHT = .125;\r
float SpecPowToBeckmannRoughness(float f) { return sqrt(2. / (f + 2.)); }\r
float PerceptualRoughnessToRoughness(float f) { return f * f; }\r
float RoughnessToPerceptualRoughness(float f) { return sqrt(f); }\r
#endif\r
\r
float SchlickSmithVis(float V, float f, float S)\r
{\r
    float P = 1. / sqrt(PI_OVER_4 * V + PI_OVER_2), d = 1. - P, v = (f * d + P) * (S * d + P);\r
    return 1. / (v + .0001);\r
}\r
float KelemenSzirmayKalosVis(vec3 V, vec3 P)\r
{\r
    vec3 f = V + P;\r
    return 4. / max(0., dot(f, f));\r
}\r
#endif\r
\r
#define GGX_NDF\r
#define SCHLICK_SMITH_VIS\r
vec3 CookTorranceBRDF(float d, float S, vec3 n, vec3 v, vec3 f, vec3 B, vec3 R, float F)\r
{\r
    float m = max(0., dot(v, f)), r = 1.;\r
#if defined(BLINN_PHONG_NDF)\r
    r = BlinnPhongNDF(d, m);\r
#elif defined(GGX_NDF)\r
    r = GGXTrowbridgeReitzNDF(PerceptualRoughnessToRoughness(S), m);\r
#elif defined(BECKMANN_NDF)\r
    r = max(0.f, BeckmannNDF(SpecPowToBeckmannRoughness(d), m));\r
#else\r
\r
#error CookTorranceBRDF normal distribution function not specified\r
\r
#endif\r
    float C = 1.;\r
#if defined(SCHLICK_SMITH_VIS)\r
    C = SchlickSmithVis(d, F, max(0., dot(v, B)));\r
#elif defined(KELEMEN_SZIRMAY_KALOS_VIS)\r
    C = KelemenSzirmayKalosVis(R, B);\r
#endif\r
    return n * (r * C);\r
}\r
float RunescapeLegacyBRDF(vec3 d, vec3 v, vec3 f, float B, float S)\r
{\r
    vec3 n = reflect(-d, f);\r
    float C = pow(max(0., dot(n, v)), B);\r
    return C * S;\r
}\r
float RunescapeRT5BRDF(vec3 d, vec3 v, float S) { return BlinnPhongNDF(S, max(0., dot(d, v))); }\r
vec3 ShiftTangent(vec3 d, vec3 S, float B) { return normalize(d + B * S); }\r
vec3 AnisotropicBRDF(vec3 v, vec3 d, vec3 S, vec3 f, vec3 B, float n, float m, float R, float C)\r
{\r
    const float F = 7.5, r = 1., e = .5, o = 1.;\r
    float s = R - .5;\r
    S = ShiftTangent(S, d, e + (C * 2. - 1.) * o + s);\r
    float p = abs(dot(S, f)), a = 1. - p, t = 1. - abs(dot(S, B)), K = p * dot(d, B);\r
    K += a * t;\r
    K = pow(K, F) * n;\r
    K = mix(K, K * C, o);\r
    float G = pow(dot(d, v), m), P = mix(G, K, r);\r
    return vec3(P, P, P);\r
}\r
#endif\r
\r
struct LightingTerms\r
{\r
    vec3 Diffuse;\r
    vec3 Specular;\r
};\r
void ClearLightingTerms(inout LightingTerms v) { v.Diffuse = vec3(0., 0., 0.), v.Specular = vec3(0., 0., 0.); }\r
void AddLightingTerms(inout LightingTerms v, LightingTerms L) { v.Diffuse += L.Diffuse, v.Specular += L.Specular; }\r
void EvaluateDirLightRT5(inout LightingTerms v, vec3 f, vec3 L, vec3 d, vec3 i, float S, float c, float F, float e, float E, vec3 A)\r
{\r
    v.Diffuse += A * e;\r
#if defined(SPECULAR_LIGHTING)\r
    vec3 G = normalize(d + i);\r
    float r = FresnelSchlick(S, clamp(dot(i, G), 0., 1.), F);\r
#if defined(ANISOTROPY_BRDF)\r
    vec3 D = AnisotropicBRDF(G, f, L, i, d, E, c, .5, .5);\r
#else\r
    vec3 n = vec3(r) * vec3(RunescapeRT5BRDF(G, f, c));\r
#endif\r
    n *= A * e;\r
    v.Specular += n;\r
#endif\r
}\r
void EvaluateDirLightRT7(inout LightingTerms v, vec3 f, vec3 L, vec3 d, vec3 i, vec3 S, float c, float E, float G, float e, float F, vec3 A)\r
{\r
    v.Diffuse += A * e;\r
#if defined(SPECULAR_LIGHTING)\r
    vec3 r = normalize(d + i), n = FresnelSchlick(S, clamp(dot(i, r), 0., 1.), G);\r
#if defined(ANISOTROPY_BRDF)\r
    vec3 D = AnisotropicBRDF(r, f, L, i, d, F, c, .5, .5);\r
#else\r
    vec3 C = CookTorranceBRDF(c, E, n, f, r, d, i, F);\r
#endif\r
    C *= A * e;\r
    v.Specular += C;\r
#endif\r
}\r
float SpecularHorizonOcclusion(float L, vec3 i, vec3 v)\r
{\r
    vec3 d = reflect(i, v);\r
    float A = clamp(1. + L * dot(d, v), 0., 1.);\r
    A *= A;\r
    return A;\r
}\r
#if __VERSION__ <= 120\r
#define in varying\r
#define out varying\r
#endif\r
\r
#endif\r
\r
#if !defined(DEFERRED_SHADOWS)\r
LightingTerms EvaluateSunlightRT5(inout int i, inout float E, highp vec4 v, vec3 u, vec3 f, float d, vec3 n, float p, float S, float r)\r
{\r
    float t = max(0., dot(u, uInvSunDirection)), L = t;\r
    E = 1.;\r
#if defined(SUNLIGHT_SHADOWS)\r
    if (S == 0. && uMappingParams.p != 0.)\r
    {\r
        if (L > 0.)\r
        {\r
            highp vec4 h = uSunlightViewMatrix * v, e = vec4(u.st, 0., 0.) * 32.;\r
            E = DirLightShadowAtten(i, v + e, h + e, d, uSunlightShadowMap, uSunlightShadowTranslucencyMap, r);\r
        }\r
    }\r
#endif\r
    L *= E;\r
    float h = .65;\r
    LightingTerms D;\r
    ClearLightingTerms(D);\r
    EvaluateDirLightRT5(D, u, f, n, uInvSunDirection, h, p, 5., L, t, uSunColour);\r
    return D;\r
}\r
#else\r
LightingTerms EvaluateSunlightRT5(inout float E, vec3 u, vec3 v, vec3 f, vec2 d, float n, float S)\r
{\r
    float t = max(0., dot(u, uInvSunDirection)), L = t;\r
    E = 1.;\r
#if defined(SUNLIGHT_SHADOWS) && defined(DEFERRED_SHADOWS)\r
    if (S == 0. && uMappingParams.p != 0.)\r
        E = texture2DLod(uShadowBuffer, d, 0.).s;\r
#endif\r
    L *= E;\r
    float h = .65;\r
    LightingTerms D;\r
    ClearLightingTerms(D);\r
    EvaluateDirLightRT5(D, u, v, f, uInvSunDirection, h, n, 5., L, uSunColour);\r
    return D;\r
}\r
#endif\r
#if !defined(DEFERRED_SHADOWS)\r
LightingTerms EvaluateSunlightRT7(inout int u, inout float E, highp vec4 v, vec3 f, vec3 d, float n, vec3 h, vec3 L, float p, float i, float t, float S)\r
{\r
    float D = max(0., dot(f, uInvSunDirection)), e = D;\r
    E = 1.;\r
#if defined(SUNLIGHT_SHADOWS)\r
    if (uMappingParams.p != 0.)\r
    {\r
        if (D > 0.)\r
        {\r
            highp vec4 r = uSunlightViewMatrix * v, a = vec4(f.st, 0., 0.) * 32.;\r
            E = DirLightShadowAtten(u, v + a, r + a, n, uSunlightShadowMap, uSunlightShadowTranslucencyMap, S);\r
        }\r
    }\r
#endif\r
    e *= E;\r
    LightingTerms r;\r
    ClearLightingTerms(r);\r
    EvaluateDirLightRT7(r, f, d, h, uInvSunDirection, L, p, i, t, e, D, uSunColour);\r
    return r;\r
}\r
#else\r
LightingTerms EvaluateSunlightRT7(inout float E, vec3 u, vec3 v, vec3 f, vec2 d, vec3 n, float h, float L, float r)\r
{\r
    float t = max(0., dot(u, uInvSunDirection)), p = t;\r
    E = 1.;\r
#if defined(SUNLIGHT_SHADOWS) && defined(DEFERRED_SHADOWS)\r
    if (uMappingParams.p != 0.)\r
        E = texture2DLod(uShadowBuffer, d, 0.).s;\r
#endif\r
    LightingTerms D;\r
    ClearLightingTerms(D);\r
    EvaluateDirLightRT7(D, u, v, f, uInvSunDirection, n, h, L, r, t, p, uSunColour);\r
    return D;\r
}\r
#endif\r
#endif\r
\r
#ifndef STIPPLE_TRANSPARENCY_UTILS_INC\r
#define STIPPLE_TRANSPARENCY_UTILS_INC\r
#if defined(STIPPLE_TRANSPARENCY_CLIP_NEAR) || defined(STIPPLE_TRANSPARENCY_CLIP_FAR) || defined(STIPPLE_TRANSPARENCY_ALPHA)\r
#ifndef STIPPLE_COMMON_INC\r
#define STIPPLE_COMMON_INC\r
highp float GetStippleViewSpaceDepthFromPos(vec3 S)\r
{\r
    vec3 u = vec3(uViewMatrix[0][2], uViewMatrix[1][2], uViewMatrix[2][2]);\r
    return dot(S, u);\r
}\r
#endif\r
\r
#ifndef NOISE_UTILS_INC\r
#define NOISE_UTILS_INC\r
vec4 permute(vec4 t)\r
{\r
    return mod((t * 34. + 1.) * t, 289.);\r
}\r
vec2 fade(vec2 t) { return t * t * t * (t * (t * 6. - 15.) + 10.); }\r
float cnoise(highp vec2 t)\r
{\r
    highp vec4 v = floor(t.stst) + vec4(0., 0., 1., 1.), d = fract(t.stst) - vec4(0., 0., 1., 1.);\r
    v = mod(v, 289.);\r
    vec4 p = v.spsp, s = v.ttqq, h = d.spsp, e = d.ttqq, f = permute(permute(p) + s), m = 2. * fract(f * .0243902) - 1., c = abs(m) - .5, q = floor(m + .5);\r
    m = m - q;\r
    vec2 N = vec2(m.s, c.s), r = vec2(m.t, c.t), o = vec2(m.p, c.p), a = vec2(m.q, c.q);\r
    vec4 G = 1.79284 - .853735 * vec4(dot(N, N), dot(o, o), dot(r, r), dot(a, a));\r
    N *= G.s;\r
    o *= G.t;\r
    r *= G.p;\r
    a *= G.q;\r
    float i = dot(N, vec2(h.s, e.s)), n = dot(r, vec2(h.t, e.t)), l = dot(o, vec2(h.p, e.p)), I = dot(a, vec2(h.q, e.q));\r
    vec2 u = fade(d.st), S = mix(vec2(i, l), vec2(n, I), u.s);\r
    float g = mix(S.s, S.t, u.t);\r
    return 2.3 * g;\r
}\r
highp float GetInterleavedGradientNoise(highp vec2 t) { return clamp(fract(52.9829 * fract(.0671106 * t.s + .00583715 * t.t)), 0., .999); }\r
#endif\r
\r
#define STIPPLE_TRANSPARENCY_ENABLED\r
#if defined(STIPPLE_TRANSPARENCY_CLIP_NEAR) || defined(STIPPLE_TRANSPARENCY_CLIP_FAR)\r
uniform vec4 uStippleTransparencyClipParams;\r
#endif\r
#if __VERSION__ <= 120\r
#ifdef in\r
#undef in\r
#endif\r
#ifdef out\r
#undef out\r
#endif\r
#endif\r
\r
float GetStippleTransparencyAlpha(float S, inout float R)\r
{\r
    float f = 1.;\r
#if defined(STIPPLE_TRANSPARENCY_CLIP_NEAR)\r
    float d = (S - (uZBufferParams.q + uStippleTransparencyClipParams.s)) * uStippleTransparencyClipParams.t;\r
    f *= clamp(d, 0., 1.);\r
#endif\r
\r
#if defined(STIPPLE_TRANSPARENCY_CLIP_FAR)\r
    float u = 1. - (S - (abs(uZBufferParams.p) - uStippleTransparencyClipParams.p)) * uStippleTransparencyClipParams.q;\r
    f *= clamp(u, 0., 1.);\r
#endif\r
\r
#if defined(STIPPLE_TRANSPARENCY_ALPHA)\r
    f *= clamp(R + .005, 0., 1.);\r
    R = 1.;\r
#endif\r
    return f;\r
}\r
bool IsStipplePixelVisible(highp vec3 S, highp vec2 R, inout float d)\r
{\r
    float u = GetStippleViewSpaceDepthFromPos(S);\r
    return GetStippleTransparencyAlpha(u, d) > GetInterleavedGradientNoise(R);\r
}\r
#if __VERSION__ <= 120\r
#define in varying\r
#define out varying\r
#endif\r
\r
#endif\r
#endif\r
\r
#ifndef STIPPLE_CUTOUT_UTILS_INC\r
#define STIPPLE_CUTOUT_UTILS_INC\r
#if defined(STIPPLE_TRANSPARENCY_CUTOUT)\r
#ifndef STIPPLE_COMMON_INC\r
#define STIPPLE_COMMON_INC\r
highp float GetStippleViewSpaceDepthFromPos(vec3 S)\r
{\r
    vec3 u = vec3(uViewMatrix[0][2], uViewMatrix[1][2], uViewMatrix[2][2]);\r
    return dot(S, u);\r
}\r
#endif\r
\r
#ifndef NOISE_UTILS_INC\r
#define NOISE_UTILS_INC\r
vec4 permute(vec4 t)\r
{\r
    return mod((t * 34. + 1.) * t, 289.);\r
}\r
vec2 fade(vec2 t) { return t * t * t * (t * (t * 6. - 15.) + 10.); }\r
float cnoise(highp vec2 t)\r
{\r
    highp vec4 v = floor(t.stst) + vec4(0., 0., 1., 1.), d = fract(t.stst) - vec4(0., 0., 1., 1.);\r
    v = mod(v, 289.);\r
    vec4 p = v.spsp, s = v.ttqq, h = d.spsp, e = d.ttqq, f = permute(permute(p) + s), m = 2. * fract(f * .0243902) - 1., c = abs(m) - .5, q = floor(m + .5);\r
    m = m - q;\r
    vec2 N = vec2(m.s, c.s), r = vec2(m.t, c.t), o = vec2(m.p, c.p), a = vec2(m.q, c.q);\r
    vec4 G = 1.79284 - .853735 * vec4(dot(N, N), dot(o, o), dot(r, r), dot(a, a));\r
    N *= G.s;\r
    o *= G.t;\r
    r *= G.p;\r
    a *= G.q;\r
    float i = dot(N, vec2(h.s, e.s)), n = dot(r, vec2(h.t, e.t)), l = dot(o, vec2(h.p, e.p)), I = dot(a, vec2(h.q, e.q));\r
    vec2 u = fade(d.st), S = mix(vec2(i, l), vec2(n, I), u.s);\r
    float g = mix(S.s, S.t, u.t);\r
    return 2.3 * g;\r
}\r
highp float GetInterleavedGradientNoise(highp vec2 t) { return clamp(fract(52.9829 * fract(.0671106 * t.s + .00583715 * t.t)), 0., .999); }\r
#endif\r
\r
#define STIPPLE_CUTOUT_STIPPLED_ALPHA_MULTIPLIER 2.0\r
float GetStippleCutoutAdjustedAlpha(vec3 S, vec2 u, float G)\r
{\r
    float v = uStippleCutoutPosDepthVisibility.p, p = GetStippleViewSpaceDepthFromPos(S);\r
    const float T = 500., f = 500., t = 1. / f;\r
    float i = 0.f;\r
    if (p < v + T)\r
    {\r
        float l = abs(p - (v + T));\r
        l = clamp(l * t, 0., 1.);\r
        vec2 c = u * 2. - vec2(1.), a = c - uStippleCutoutPosDepthVisibility.st;\r
        a = a;\r
        float d = uProjectionMatrix[1][1] / uProjectionMatrix[0][0];\r
        a.s *= d;\r
        float I = uStippleCutoutPosDepthVisibility.q, R = uStippleCutoutStartRangeAndMinAlpha.s, s = uStippleCutoutStartRangeAndMinAlpha.t, e = uStippleCutoutStartRangeAndMinAlpha.p, o = clamp((length(a) - R) * s, 0., 1.);\r
        i = mix(pow(l * (1. - o), 2.), 0., I) - e;\r
    }\r
    return i;\r
}\r
bool IsStippleCutoutVisible(vec3 S, vec2 v, vec2 l) { return GetStippleCutoutAdjustedAlpha(S, v, STIPPLE_CUTOUT_STIPPLED_ALPHA_MULTIPLIER) > GetInterleavedGradientNoise(l); }\r
#endif\r
#endif\r
\r
#ifndef FRESNEL_INC\r
#define FRESNEL_INC\r
vec3 FresnelSchlick(vec3 F, float f, highp float h)\r
{\r
    vec3 c = F + (1. - F) * pow(1. - f, h);\r
    return c;\r
}\r
vec3 FresnelSchlickRoughness(vec3 f, float F, highp float h, float v)\r
{\r
    vec3 c = f + (max(vec3(v), f) - f) * pow(1. - F, h);\r
    return c;\r
}\r
float FresnelSchlick(float F, float f, highp float h)\r
{\r
    float c = F + (1. - F) * pow(1. - f, h);\r
    return c;\r
}\r
float FresnelSchlickRoughness(float f, float F, highp float h, float v)\r
{\r
    float c = f + (max(v, f) - f) * pow(1. - F, h);\r
    return c;\r
}\r
float FresnelSchlick(vec3 F, vec3 f, float c)\r
{\r
    float h = max(0., dot(F, f));\r
    return c + (1. - c) * pow(1. - h, 5.);\r
}\r
float Fresnel(vec3 F, vec3 f, float c, float h)\r
{\r
    float p = 1. - max(0., dot(F, f)), v = p * p;\r
    v = v * v;\r
    v = v * p;\r
    return clamp(v * (1. - clamp(h, 0., 1.)) + h - c, 0., 1.);\r
}\r
#endif\r
\r
#ifndef LIGHTING_INC\r
#define LIGHTING_INC\r
#if __VERSION__ <= 120\r
#ifdef in\r
#undef in\r
#endif\r
#ifdef out\r
#undef out\r
#endif\r
#endif\r
\r
#ifndef FRESNEL_INC\r
#define FRESNEL_INC\r
vec3 FresnelSchlick(vec3 F, float f, highp float h)\r
{\r
    vec3 c = F + (1. - F) * pow(1. - f, h);\r
    return c;\r
}\r
vec3 FresnelSchlickRoughness(vec3 f, float F, highp float h, float v)\r
{\r
    vec3 c = f + (max(vec3(v), f) - f) * pow(1. - F, h);\r
    return c;\r
}\r
float FresnelSchlick(float F, float f, highp float h)\r
{\r
    float c = F + (1. - F) * pow(1. - f, h);\r
    return c;\r
}\r
float FresnelSchlickRoughness(float f, float F, highp float h, float v)\r
{\r
    float c = f + (max(v, f) - f) * pow(1. - F, h);\r
    return c;\r
}\r
float FresnelSchlick(vec3 F, vec3 f, float c)\r
{\r
    float h = max(0., dot(F, f));\r
    return c + (1. - c) * pow(1. - h, 5.);\r
}\r
float Fresnel(vec3 F, vec3 f, float c, float h)\r
{\r
    float p = 1. - max(0., dot(F, f)), v = p * p;\r
    v = v * v;\r
    v = v * p;\r
    return clamp(v * (1. - clamp(h, 0., 1.)) + h - c, 0., 1.);\r
}\r
#endif\r
\r
#ifndef BRDF_INC\r
#define BRDF_INC\r
#ifndef NDF_INC\r
#define NDF_INC\r
#ifndef MATH_UTILS_INC\r
#define MATH_UTILS_INC\r
const float PI = 3.14159, INV_PI = .31831, TWOPI = PI * 2., INV_TWOPI = 1. / TWOPI, PI_OVER_4 = PI / 4., PI_OVER_2 = PI / 2., SQRT_2_PI = .797885, INV_EIGHT = .125;\r
float SpecPowToBeckmannRoughness(float f) { return sqrt(2. / (f + 2.)); }\r
float PerceptualRoughnessToRoughness(float f) { return f * f; }\r
float RoughnessToPerceptualRoughness(float f) { return sqrt(f); }\r
#endif\r
\r
float BlinnPhongNDF(float f, float N)\r
{\r
    return (f + 2.) * INV_EIGHT * pow(N, f);\r
}\r
float GGXTrowbridgeReitzNDF(float N, float f)\r
{\r
    float P = N * N, I = f * f, T = I * (P - 1.) + 1.;\r
    return P / (PI * (T * T + .0001));\r
}\r
float BeckmannNDF(float N, float f)\r
{\r
    float P = N * N, I = f * f;\r
    return exp((I - 1.) / (P * I)) / (PI * P * (I * I));\r
}\r
#endif\r
\r
#ifndef VISIBILITY_FUNC_INC\r
#define VISIBILITY_FUNC_INC\r
#ifndef MATH_UTILS_INC\r
#define MATH_UTILS_INC\r
const float PI = 3.14159, INV_PI = .31831, TWOPI = PI * 2., INV_TWOPI = 1. / TWOPI, PI_OVER_4 = PI / 4., PI_OVER_2 = PI / 2., SQRT_2_PI = .797885, INV_EIGHT = .125;\r
float SpecPowToBeckmannRoughness(float f) { return sqrt(2. / (f + 2.)); }\r
float PerceptualRoughnessToRoughness(float f) { return f * f; }\r
float RoughnessToPerceptualRoughness(float f) { return sqrt(f); }\r
#endif\r
\r
float SchlickSmithVis(float V, float f, float S)\r
{\r
    float P = 1. / sqrt(PI_OVER_4 * V + PI_OVER_2), d = 1. - P, v = (f * d + P) * (S * d + P);\r
    return 1. / (v + .0001);\r
}\r
float KelemenSzirmayKalosVis(vec3 V, vec3 P)\r
{\r
    vec3 f = V + P;\r
    return 4. / max(0., dot(f, f));\r
}\r
#endif\r
\r
#define GGX_NDF\r
#define SCHLICK_SMITH_VIS\r
vec3 CookTorranceBRDF(float d, float S, vec3 n, vec3 v, vec3 f, vec3 B, vec3 R, float F)\r
{\r
    float m = max(0., dot(v, f)), r = 1.;\r
#if defined(BLINN_PHONG_NDF)\r
    r = BlinnPhongNDF(d, m);\r
#elif defined(GGX_NDF)\r
    r = GGXTrowbridgeReitzNDF(PerceptualRoughnessToRoughness(S), m);\r
#elif defined(BECKMANN_NDF)\r
    r = max(0.f, BeckmannNDF(SpecPowToBeckmannRoughness(d), m));\r
#else\r
\r
#error CookTorranceBRDF normal distribution function not specified\r
\r
#endif\r
    float C = 1.;\r
#if defined(SCHLICK_SMITH_VIS)\r
    C = SchlickSmithVis(d, F, max(0., dot(v, B)));\r
#elif defined(KELEMEN_SZIRMAY_KALOS_VIS)\r
    C = KelemenSzirmayKalosVis(R, B);\r
#endif\r
    return n * (r * C);\r
}\r
float RunescapeLegacyBRDF(vec3 d, vec3 v, vec3 f, float B, float S)\r
{\r
    vec3 n = reflect(-d, f);\r
    float C = pow(max(0., dot(n, v)), B);\r
    return C * S;\r
}\r
float RunescapeRT5BRDF(vec3 d, vec3 v, float S) { return BlinnPhongNDF(S, max(0., dot(d, v))); }\r
vec3 ShiftTangent(vec3 d, vec3 S, float B) { return normalize(d + B * S); }\r
vec3 AnisotropicBRDF(vec3 v, vec3 d, vec3 S, vec3 f, vec3 B, float n, float m, float R, float C)\r
{\r
    const float F = 7.5, r = 1., e = .5, o = 1.;\r
    float s = R - .5;\r
    S = ShiftTangent(S, d, e + (C * 2. - 1.) * o + s);\r
    float p = abs(dot(S, f)), a = 1. - p, t = 1. - abs(dot(S, B)), K = p * dot(d, B);\r
    K += a * t;\r
    K = pow(K, F) * n;\r
    K = mix(K, K * C, o);\r
    float G = pow(dot(d, v), m), P = mix(G, K, r);\r
    return vec3(P, P, P);\r
}\r
#endif\r
\r
struct LightingTerms\r
{\r
    vec3 Diffuse;\r
    vec3 Specular;\r
};\r
void ClearLightingTerms(inout LightingTerms v) { v.Diffuse = vec3(0., 0., 0.), v.Specular = vec3(0., 0., 0.); }\r
void AddLightingTerms(inout LightingTerms v, LightingTerms L) { v.Diffuse += L.Diffuse, v.Specular += L.Specular; }\r
void EvaluateDirLightRT5(inout LightingTerms v, vec3 f, vec3 L, vec3 d, vec3 i, float S, float c, float F, float e, float E, vec3 A)\r
{\r
    v.Diffuse += A * e;\r
#if defined(SPECULAR_LIGHTING)\r
    vec3 G = normalize(d + i);\r
    float r = FresnelSchlick(S, clamp(dot(i, G), 0., 1.), F);\r
#if defined(ANISOTROPY_BRDF)\r
    vec3 D = AnisotropicBRDF(G, f, L, i, d, E, c, .5, .5);\r
#else\r
    vec3 n = vec3(r) * vec3(RunescapeRT5BRDF(G, f, c));\r
#endif\r
    n *= A * e;\r
    v.Specular += n;\r
#endif\r
}\r
void EvaluateDirLightRT7(inout LightingTerms v, vec3 f, vec3 L, vec3 d, vec3 i, vec3 S, float c, float E, float G, float e, float F, vec3 A)\r
{\r
    v.Diffuse += A * e;\r
#if defined(SPECULAR_LIGHTING)\r
    vec3 r = normalize(d + i), n = FresnelSchlick(S, clamp(dot(i, r), 0., 1.), G);\r
#if defined(ANISOTROPY_BRDF)\r
    vec3 D = AnisotropicBRDF(r, f, L, i, d, F, c, .5, .5);\r
#else\r
    vec3 C = CookTorranceBRDF(c, E, n, f, r, d, i, F);\r
#endif\r
    C *= A * e;\r
    v.Specular += C;\r
#endif\r
}\r
float SpecularHorizonOcclusion(float L, vec3 i, vec3 v)\r
{\r
    vec3 d = reflect(i, v);\r
    float A = clamp(1. + L * dot(d, v), 0., 1.);\r
    A *= A;\r
    return A;\r
}\r
#if __VERSION__ <= 120\r
#define in varying\r
#define out varying\r
#endif\r
\r
#endif\r
\r
void main()\r
{\r
#if defined(DEBUG_VERTEX_BONE_COLOUR)\r
    gl_FragColor = vec4(vVertexAlbedo);\r
    if (uDebugReturn != 0.)\r
    {\r
        return;\r
    }\r
#endif\r
\r
#if defined(ALPHA_ENABLED)\r
    if (vVertexAlbedo.q == 0.)\r
    {\r
        discard;\r
    }\r
#endif\r
    highp vec4 d = vec4(vWorldPosition.stp, 1.);\r
#if defined(CLIP_PLANE) && !defined(PUSH_TO_FARPLANE)\r
    if (dot(d, uClipPlane) < 0.)\r
    {\r
        discard;\r
        return;\r
    }\r
#endif\r
\r
#if defined(TEXTURE_ATLAS)\r
    TextureSettings D;\r
    getTextureSettings(vMaterialSettingsSlotXY_BatchFlags.st, D);\r
#endif\r
    highp vec2 v = vec2(0.), p = vec2(0.);\r
    highp vec3 r = vec3(0.), q = vec3(0.);\r
    vec4 u = vec4(1.), s;\r
#if defined(COMPRESSED_NORMALS)\r
    s = vec4(0., .5, 0., .5);\r
#else\r
    s = vec4(0., .5, 1., .5);\r
#endif\r
    highp vec3 S = d.stp - uCameraPosition;\r
#if defined(TEXTURE_ATLAS)\r
    highp float G = uTextureAnimationTime;\r
    vec2 t = vTextureUV + fract(D.uvAnim * G);\r
    CalculateDerivatives(v, p, r, q, t, S);\r
    SampleTextures(u, s, t, D, vMaterialSettingsSlotXY_BatchFlags.p, v, p);\r
#endif\r
    float i = 1., g = 0., C = 0.;\r
    vec3 n = step(.5, fract(vMaterialSettingsSlotXY_BatchFlags.p * vec3(64., 32., 16.)));\r
#if !defined(TEXTURE_ALBEDO_GLOBAL)\r
    n.sp *= step(.5, fract(vMaterialSettingsSlotXY_BatchFlags.p * 8.));\r
#endif\r
    i += n.s * u.q * 4.;\r
    g = n.t;\r
    C = n.p * u.q;\r
    u.q = min(u.q + n.s + n.p, 1.);\r
    vec4 f = u * vVertexAlbedo;\r
#if defined(DEBUG_GEOMETRY_INSTANCE_COLOUR)\r
    gl_FragColor = vec4(uDebugInstanceColour.stp, f.q);\r
    if (uDebugReturn != 0.)\r
    {\r
        return;\r
    }\r
#endif\r
\r
#if defined(ALPHA_ENABLED)\r
    if (f.q <= uAlphaTestThreshold)\r
    {\r
        discard;\r
    }\r
#endif\r
\r
#if defined(STIPPLE_TRANSPARENCY_CUTOUT) && defined(VIEWPORTLOOKUPSCALE)\r
    if (fract(vMaterialSettingsSlotXY_BatchFlags.p * 4.) > .5)\r
    {\r
#if defined(ALPHA_ENABLED)\r
        if (uAlphaTestThreshold > .01)\r
        {\r
            if (IsStippleCutoutVisible(S, gl_FragCoord.st * uViewportLookupScale.st, gl_FragCoord.st))\r
            {\r
                discard;\r
            }\r
        }\r
        else\r
            f.q *= 1.f - GetStippleCutoutAdjustedAlpha(S, gl_FragCoord.st * uViewportLookupScale.st, 1.);\r
#else\r
        if (IsStippleCutoutVisible(S, gl_FragCoord.st * uViewportLookupScale.st, gl_FragCoord.st))\r
        {\r
            discard;\r
        }\r
#endif\r
    }\r
#endif\r
\r
#if defined(STIPPLE_TRANSPARENCY_ENABLED)\r
    if (!IsStipplePixelVisible(S, gl_FragCoord.st, f.q))\r
    {\r
        discard;\r
    }\r
#endif\r
\r
#if defined(GOURAUD_SHADING)\r
    gl_FragColor = f;\r
    return;\r
#endif\r
    highp vec3 e = normalize(vNormal), T = vec3(0., 1., 0.), P = vec3(0., 1., 0.);\r
#if defined(PER_FRAGMENT_TANGENTS)\r
    ComputeTangentBitangentFromDerivatives(T, P, e, r, q, v, p);\r
#endif\r
\r
#if defined(USE_NORMAL_MAP)\r
\r
#if !defined(PER_FRAGMENT_TANGENTS)\r
    T = normalize(vTangent.stp);\r
    P = ComputeBitangent(e, vTangent);\r
#endif\r
    vec3 A = UnpackNormal(s.tpq, D.normalScale);\r
    e = ApplyNormalMap(A, e, T, P);\r
#endif\r
\r
#if defined(DEBUG_TANGENTS) || defined(DEBUG_BITANGENTS)\r
\r
#if defined(DEBUG_TANGENTS)\r
    gl_FragColor.stp = normalize(T) * .5 + .5;\r
    gl_FragColor.q = 1.;\r
#endif\r
\r
#if defined(DEBUG_BITANGENTS)\r
    gl_FragColor.stp = normalize(P) * .5 + .5;\r
    gl_FragColor.q = 1.;\r
#endif\r
    if (uDebugReturn != 0.)\r
    {\r
        return;\r
    }\r
#endif\r
\r
#if defined(VIEWPORTMAP)\r
    f.stp = SampleViewportMapColour(gl_FragCoord.st, D.viewportMapUVScaleAndAnim);\r
#endif\r
\r
#if defined(DEBUG_TEXEL_DENSITY)\r
\r
#if defined(TEXTURE_ATLAS)\r
    gl_FragColor = vec4(GetTexelDensityDebugColour(vTextureUV, D.textureMeta1.p, S), 1.);\r
#else\r
    gl_FragColor = vec4(1.);\r
#endif\r
    if (uDebugReturn != 0.)\r
    {\r
        return;\r
    }\r
#endif\r
\r
#if defined(VIEWPORTLOOKUPSCALE)\r
    vec2 E = gl_FragCoord.st * uFullScreenLookupScale.st;\r
#endif\r
    float h = 1.;\r
#if defined(SSAO) && !defined(REFRACTION)\r
    h = texture2D(uSSAOMap, E).s;\r
#endif\r
    LightingTerms m;\r
    ClearLightingTerms(m);\r
    m.Diffuse = uAmbientColour;\r
    vec3 l = vec3(1., 1., 1.);\r
#if defined(IRRADIANCE_LIGHTING)\r
    l = EvaluateSHLighting2ndOrder(e, uIrradianceSHCoefs);\r
    m.Diffuse *= l;\r
#endif\r
\r
#if defined(SSAO)\r
    m.Diffuse *= h;\r
#endif\r
    highp float V = length(S);\r
    highp vec3 a = S / V;\r
    LightingTerms R;\r
    ClearLightingTerms(R);\r
#if defined(SUNLIGHT_DIRECT_LIGHTING)\r
    int I = -1;\r
    float F = 0.;\r
#if defined(DEFERRED_SHADOWS)\r
    R = EvaluateSunlightRT5(F, e, P, -a, E, D.specular, g);\r
#else\r
    highp vec3 O = vec3(uViewMatrix[0][2], uViewMatrix[1][2], uViewMatrix[2][2]);\r
    highp float o = abs(dot(S, O));\r
    float L = step(.5, fract(vMaterialSettingsSlotXY_BatchFlags.p * 2.));\r
    R = EvaluateSunlightRT5(I, F, d, e, P, o, -a, D.specular, g, L);\r
#endif\r
\r
#else\r
    R.Diffuse = vec3(1.);\r
#endif\r
\r
#if defined(TEXTURE_ATLAS) && defined(DEBUG_MATERIAL_HIGHLIGHT)\r
    if (uDebugMaterialHighlight != -1.)\r
    {\r
        float c = mix(.1, .5, length(R.Diffuse)), N = .1;\r
        vec3 U = mix(vec3(N) * c, vec3(0, 1, 0), D.materialID == uDebugMaterialHighlight ? 1 : 0);\r
        gl_FragColor = vec4(U, 1);\r
        if (uDebugReturn != 0.)\r
        {\r
            return;\r
        }\r
    }\r
#endif\r
    float N = FresnelSchlick(.8, max(0., dot(-a, e)), 5.);\r
#if defined(TEXTURE_ATLAS) && defined(GLOBAL_ENVIRONMENTMAPPING)\r
    if (C > 0.)\r
    {\r
        vec3 c = reflect(-a, e);\r
        c.s = -c.s;\r
        c.t = -c.t;\r
        m.Specular = textureCubeSRGB(uGlobalEnvironmentMap, c).stp * h;\r
#if defined(NORMALIZED_ENVIRONMENTMAPPING)\r
        m.Specular *= l * uGlobalEnvironmentMappingParams.q;\r
#endif\r
        f.stp = mix(f.stp, m.Specular, C * N);\r
    }\r
#endif\r
    vec4 c = vec4(0., 0., 0., f.q);\r
#if defined(POINT_LIGHTING)\r
    vec3 U = vec3(0., 0., 0.), M = vec3(0., 0., 0.);\r
    const vec3 B = vec3(.65, .65, .65);\r
    const float H = 1., b = 5.;\r
    EvaluatePointLights(U, M, B, D.specular, H, b, -a, vWorldPosition.stp, e, o, vTilePosition);\r
#if defined(DEBUG_POINTLIGHTS)\r
    gl_FragColor = vec4(U, f.q);\r
    if (uDebugReturn != 0.)\r
    {\r
        return;\r
    }\r
#endif\r
\r
#if defined(DEBUG_POINTLIGHTS_SPECULAR)\r
    gl_FragColor = vec4(M, f.q);\r
    if (uDebugReturn != 0.)\r
    {\r
        return;\r
    }\r
#endif\r
\r
#if defined(DIFFUSE_LIGHTING)\r
    R.Diffuse += U;\r
#else\r
    R.Diffuse = U;\r
#endif\r
\r
#if defined(POINT_LIGHTING_SPECULAR)\r
    R.Specular += M;\r
#endif\r
\r
#else\r
\r
#if defined(DEBUG_POINTLIGHTS)\r
    gl_FragColor = vec4(0., 0., 0., 1.);\r
    if (uDebugReturn != 0.)\r
    {\r
        return;\r
    }\r
#endif\r
\r
#if defined(DEBUG_POINTLIGHTS_SPECULAR)\r
    gl_FragColor = vec4(0., 0., 0., 1.);\r
    if (uDebugReturn != 0.)\r
    {\r
        return;\r
    }\r
#endif\r
\r
#if !defined(DIFFUSE_LIGHTING)\r
    R.Diffuse = vec3(0.);\r
#endif\r
\r
#endif\r
    float x = 0.;\r
#if defined(CAUSTICS)\r
    x = CalculateCausticsTerm(vWorldPosition.stp, F, e);\r
#endif\r
\r
#if defined(AMBIENT_LIGHTING)\r
    c.stp += m.Diffuse;\r
#endif\r
    c.stp += R.Diffuse;\r
#if defined(SPECULAR_LIGHTING)\r
    c.stp += R.Specular * i;\r
#endif\r
\r
#if defined(CAUSTICS)\r
    c.stp += uSunColour * x;\r
#endif\r
\r
#if defined(ALBEDO_LIGHTING)\r
    c.stp *= f.stp;\r
#endif\r
\r
#if defined(DEBUG_EMISSIVE_MAP)\r
    c.stp = vec3(g);\r
#else\r
    if (g > 0.)\r
        c.q *= c.q;\r
    c.stp = mix(c.stp, f.stp, g);\r
#endif\r
\r
#if defined(REFRACTION)\r
    if (D.refraction.s > 0. || D.refraction.p > 0.)\r
        c.stp = CalculateRefractionColour(vWorldPosition.stp, e, -a, D.specular, D.refraction, e.sp, c);\r
#endif\r
\r
#if defined(LIGHT_SCATTERING) || defined(FOG_DISTANCE)\r
    c.stp = ApplyInOutScattering(c.stp, vOutScattering, vInScattering);\r
#endif\r
\r
#if defined(VOLUMETRIC_SCATTERING_SUPPORTED)\r
    vec4 Y = GetScatteredInRay2(8, a, V, CalculateScatteringOffset(gl_FragCoord.st));\r
    c = ApplyVolumetricScattering(c, Y);\r
#endif\r
\r
#if defined(TINT) && defined(PUSH_TO_FARPLANE)\r
    c.stp += uTint.stp;\r
#endif\r
\r
#if defined(DEBUG_ALBEDO)\r
    c = f;\r
#endif\r
\r
#if defined(DEBUG_NORMALS)\r
    c.stp = e * .5 + .5;\r
    c.q = 1.;\r
#endif\r
\r
#if defined(DEBUG_FRESNEL)\r
    c.stp = vec3(N, N, N);\r
    c.q = 1.;\r
#endif\r
\r
#if defined(DEBUG_SPECULAR_MAP)\r
    c.stp = vec3(max(0., (i - .5) / 4.));\r
#endif\r
\r
#if defined(SUNLIGHT_SHADOWS) && defined(DEBUG_SUNLIGHT_SHADOW_CASCADE) && !defined(DEFERRED_SHADOWS)\r
    c.stp = ShadowMapCascadeColour(I, int(uMappingParams.q)).stp;\r
#endif\r
\r
#if defined(DEBUG_RT7_EMISSIVE) || defined(DEBUG_RT7_METALNESS) || defined(DEBUG_RT7_ROUGHNESS)\r
    c = vec4(1., 0., 1., 1.);\r
#endif\r
\r
#if defined(FORCE_OPAQUE)\r
    c.q = 1.;\r
#endif\r
\r
#if defined(PREMULTIPLY_ALPHA)\r
    c.stp *= c.q;\r
#endif\r
    gl_FragColor = c;\r
}`,Ti={uModelMatrix:"#define uModelMatrix modelMatrix",uViewProjMatrix:"#define uViewProjMatrix (projectionMatrix*viewMatrix)",uViewMatrix:"#define uViewMatrix viewMatrix",uProjectionMatrix:"#define uProjectionMatrix projectionMatrix",uCameraPosition:"#define uCameraPosition cameraPosition",aVertexPosition:"#define aVertexPosition position",aTextureUV:"#define aTextureUV uv",aVertexColour:"#define aVertexColour vec4(color.rgb,1.0)",aVertexNormal_FogProportion:"#define aVertexNormal_FogProportion vec4(normal,0.0)",gl_FragColor:"FragColor",attribute:"in",varying:"out"},Fi={UNIFORM_BUFFER_BEGIN:t=>`// UNIFORM_BUFFER_BEGIN(${t})`,UNIFORM_BUFFER_END:"// UNIFORM_BUFFER_END",TEXTURE_GRAD:""};function ki(t){return["#version 300 es","precision highp float;","precision mediump sampler2D;","#define fma(a,b,c) ((a)*(b)+(c))","#define texture2D texture","#define textureCube texture","#define texture2DLod textureLod","#define textureCubeLod textureLod","#define texture2DGrad textureGrad"].join(`
`)+`

`+t.replace(/^#version ([\w ]+)$/m,"// original version $1").replace(/\bprecise\b/g,"highp")}function Ii(t,e){return t.replace(/^((flat) )*(in|out|uniform|attribute|varying) ((highp|mediump|lowp) )*(float|vec\d|mat\d) ((\w|,\s*)+);$/mg,(n,r,i,s,u,h,l,y)=>y.split(/,\s*/g).map(p=>{let m=e[p];if(m!=null){let f=typeof m=="function"?m():m;return f=Array.isArray(f)?f.join(`
`):f+`
`,n.split(`
`).map(x=>`// ${x}`).join(`
`)+`
`+f}return`${r??""}${s} ${u??""}${l??""} ${p};`}).join(`
`))}function Bi(t,e){return t.replace(/^#define (\w+)(\(.*?\))?($| (\\\r?\n|.)*$)/mg,(n,r)=>{let i=e[r];if(i!=null){let s=typeof i=="function"?i(n.match(/\((.*?)\)/)?.[1]||""):i;return s=Array.isArray(s)?s.join(`
`):s+`
`,n.split(`
`).map(u=>`// ${u}`).join(`
`)+`
`+s}return n})}function Pu(t,e){let n=ki(Lu);n=Ii(n,Ti),n=Bi(n,Fi);let r=ki(Ru);r=Ii(r,Ti),r=Bi(r,Fi),r=`out vec4 FragColor;
`+r.replace(/\bgl_FragColor\b/g,"FragColor");const i={uTextureAtlas:{value:t},uTextureAnimationTime:{value:0},uSunDirection:{value:new Be(.5,.8,.2).normalize()},uAmbientColour:{value:new Rn(.2,.2,.2)},uSunColour:{value:new Rn(1,1,1)},uAlphaTestThreshold:{value:e.alphamode==="cutoff"?.5:.01},uAtlasMeta:{value:new Ta(1,1,1,1)},uFade:{value:0},uInvSunDirection:{value:new Be(-.5,-.8,-.2).normalize()}};return new Or({uniforms:i,vertexShader:n,fragmentShader:r,transparent:e.alphamode==="blend",side:Fa})}const yt=1e6,Xe={materialCube:yt+1,classicWall:yt+2,classicWallDiag:yt+3,classicRoof10:yt+10,classicRoof12:yt+12,classicRoof13:yt+13,classicRoof14:yt+14,classicRoof15:yt+15,classicRoof16:yt+16,classicRoof17:yt+17};class Ea extends po{hasOldModels=!1;hasNewModels=!1;materialArchive=new Map;materialCache=new Map;mapUnderlays=[];mapOverlays=[];mapMapscenes=[];mapMaplabels=[];legacyData=null;classicData=null;jsonSearchCache=new Map;dependencyGraph=null;static create(e){return new Ea(e).preload()}constructor(e){super(e)}async getArchiveById(e,n){return super.getArchiveById(e,n)}async getFileById(e,n){return super.getFileById(e,n)}async preload(){if(this.getBuildNr()>dt){for(let n of await this.getArchiveById(N.config,ze.mapunderlays))this.mapUnderlays[n.fileid]=K.mapsquareUnderlays.read(n.buffer,this.rawsource);for(let n of await this.getArchiveById(N.config,ze.mapoverlays))this.mapOverlays[n.fileid]=K.mapsquareOverlays.read(n.buffer,this.rawsource);if(this.getBuildNr()>=527)for(let n of await this.getArchiveById(N.config,ze.mapscenes))this.mapMapscenes[n.fileid]=K.mapscenes.read(n.buffer,this.rawsource);if(this.getBuildNr()>=548)for(let n of await this.getArchiveById(N.config,ze.maplabels))this.mapMaplabels[n.fileid]=K.maplabels.read(n.buffer,this.rawsource);if(this.getBuildNr()<=471)for(let n of await this.getArchiveById(N.texturesOldPng,0))this.materialArchive.set(n.fileid,n.buffer);else if(!(this.getBuildNr()<=498))if(this.getBuildNr()<=753){let n=await this.getFile(N.materials,0);this.materialArchive.set(0,n)}else for(let n of await this.getArchiveById(N.materials,0))this.materialArchive.set(n.fileid,n.buffer);let e=await this.getCacheIndex(N.index);this.hasNewModels=!!e[N.models],this.hasOldModels=!!e[N.oldmodels]}else if(this.getBuildNr()>gr){const{legacyPreload:e}=await it(async()=>{const{legacyPreload:r}=await Promise.resolve().then(()=>ln);return{legacyPreload:r}},void 0);this.legacyData=await e(this);let n=this.legacyData.overlays.map(r=>K.mapsquareOverlays.read(r,this));this.mapOverlays=n,this.mapUnderlays=n,this.hasNewModels=!1,this.hasOldModels=!0}else{const{ClassicFileSource:e,classicConfig:n,classicGroups:r}=await it(async()=>{const{ClassicFileSource:u,classicConfig:h,classicGroups:l}=await Promise.resolve().then(()=>En);return{ClassicFileSource:u,classicConfig:h,classicGroups:l}},void 0),{classicUnderlays:i,classicOverlays:s}=await it(async()=>{const{classicUnderlays:u,classicOverlays:h}=await Promise.resolve().then(()=>tu);return{classicUnderlays:u,classicOverlays:h}},void 0);if(!(this.rawsource instanceof e))throw new Error("can only load classic caches from a classic source");this.classicData=await n(this.rawsource,this.getBuildNr()),this.mapUnderlays=i(),this.mapOverlays=await s(this),this.hasNewModels=!1,this.hasOldModels=!0}return this}async getDependencyGraph(){return this.dependencyGraph??=Nu(this,{lazyMapChunks:!0}),this.dependencyGraph}async getGameFile(e,n){return this.legacyData?this.legacyData[e][n]:this.getFileById(N[e],n)}getMaterialData(e){let n=this.materialCache.get(e);if(!n){if(e==-1)n=Vt();else if(this.getBuildNr()<=dt)n=Vt(),n.textures.diffuse=e,n.baseColorFraction=1,n.texmodes="mirror",n.texmodet="mirror";else if(this.getBuildNr()<=471){let r=this.materialArchive.get(e);if(!r)throw new Error("material "+e+" not found");let i=K.oldproctexture.read(r,this);n=Vt(),n.textures.diffuse=i.spriteid,n.baseColorFraction=1}else if(this.getBuildNr()<=753){if(n=Vt(),this.getBuildNr()>=500){let i=K.oldmaterials.read(this.materialArchive.get(0),this).mats[e];i.basecolorfraction!=null&&i.basecolor!=null&&(n.baseColorFraction=i.basecolorfraction/255,n.baseColor=gn(qt(i.basecolor))),n.textures.diffuse=i.id}}else{let r=this.materialArchive.get(e);if(!r)throw new Error("material "+e+" not found");n=Hi(r,e,this.rawsource)}this.materialCache.set(e,n)}return n}getJsonSearchData(e){let n=this.jsonSearchCache.get(e);if(!n){let r=fa[e];if(!r)throw new Error("unknown decode mode "+e);n={files:(async()=>{await r.prepareDump?.(this);let s=await r.lookup.logicalRangeToFiles(this,[0,0],[1/0,1/0]),u=null,h=[];for(let l of s){let y;u&&u.index==l.index?y=u.subfiles:(y=await this.getFileArchive(l.index),u={index:l.index,subfiles:y});let p=y[l.subindex],m=r.lookup.fileToLogical(this,l.index.major,l.index.minor,p.fileid),f=r.parser.read(p.buffer,this.rawsource);f.$fileid=m.length==1?m[0]:m,h.push(f)}return h})(),schema:r.parser.parser.getJsonSchema()},this.jsonSearchCache.set(e,n)}return n}}class fn{modelCache=new Map;threejsTextureCache=new Map;threejsMaterialCache=new Map;engine;textureType="dds";modelType="nxt";static textureIndices={diffuse:{png:N.texturesPng,dds:N.texturesDds,bmp:N.texturesBmp,ktx:N.texturesKtx,png2014:N.textures2015Png,dds2014:N.textures2015Dds,oldpng:N.texturesOldPng,oldproc:N.sprites,fullproc:N.texturesOldPng,legacy:ct.data,legacytga:0},normal:{png:N.texturesPng,dds:N.texturesDds,bmp:N.texturesBmp,ktx:N.texturesKtx,png2014:N.textures2015CompoundPng,dds2014:N.textures2015CompoundDds,oldpng:N.texturesOldCompoundPng,oldproc:0,fullproc:0,legacy:0,legacytga:0},compound:{png:N.texturesPng,dds:N.texturesDds,bmp:N.texturesBmp,ktx:N.texturesKtx,png2014:N.textures2015CompoundPng,dds2014:N.textures2015CompoundDds,oldpng:N.texturesOldCompoundPng,oldproc:0,fullproc:0,legacy:0,legacytga:0}};constructor(e,n){this.engine=e,n!="auto"?this.modelType=n:e.getBuildNr()<=gr?this.modelType="classic":e.hasOldModels&&!e.hasNewModels?this.modelType="old":this.modelType="nxt"}static async create(e,n="auto",r="auto"){let i=new fn(e,r);return i.textureType=n=="auto"?await Ou(e.rawsource):n,i}async getTextureFile(e,n,r){const{ParsedTexture:i}=await it(async()=>{const{ParsedTexture:l}=await Promise.resolve().then(()=>Mo);return{ParsedTexture:l}},void 0);let s=fn.textureIndices[e][this.textureType],u=(s|255)<<23|n,h=this.textureType;return this.engine.fetchCachedObject(this.threejsTextureCache,u,async()=>{if(h=="fullproc"){const{loadProcTexture:l}=await it(async()=>{const{loadProcTexture:m}=await import("./proceduraltexture-CT0768Da.js");return{loadProcTexture:m}},__vite__mapDeps([0,1,2,3]));let y=await l(this.engine,n),p=new i(y.img,!1,!1);return p.filesize=y.filesize,p}else if(h=="legacytga"||h=="legacy"){const{combineLegacyTexture:l}=await it(async()=>{const{combineLegacyTexture:p}=await Promise.resolve().then(()=>ln);return{combineLegacyTexture:p}},void 0);let y;if(this.engine.classicData){let p=this.engine.classicData.textures[n-1];y=await l(this.engine,p.name,p.subname,h=="legacytga")}else{const{legacyGroups:p,parseLegacyImageFile:m}=await it(async()=>{const{legacyGroups:x,parseLegacyImageFile:d}=await Promise.resolve().then(()=>ln);return{legacyGroups:x,parseLegacyImageFile:d}},void 0);let f=await this.engine.getArchiveById(ct.data,p.textures);y=await m(this.engine,f[n].buffer)}return new i(y.img,r,!1)}else{let l=await this.engine.getFileById(s,n);if(h=="oldproc"){const{parseSprite:y}=await it(async()=>{const{parseSprite:m}=await Promise.resolve().then(()=>_o);return{parseSprite:m}},void 0);let p=y(l);return new i(p[0].img,r,!1)}else return new i(l,r,!0)}},l=>l.filesize?l.filesize*2:1e3)}async getModelData(e){if(e>=yt){const{materialPreviewCube:n,classicWall:r,classicWallDiag:i,classicRoof10:s,classicRoof12:u,classicRoof13:h,classicRoof14:l,classicRoof15:y,classicRoof16:p,classicRoof17:m}=await it(async()=>{const{materialPreviewCube:d,classicWall:a,classicWallDiag:o,classicRoof10:c,classicRoof12:g,classicRoof13:v,classicRoof14:E,classicRoof15:_,classicRoof16:S,classicRoof17:C}=await Promise.resolve().then(()=>el);return{materialPreviewCube:d,classicWall:a,classicWallDiag:o,classicRoof10:c,classicRoof12:g,classicRoof13:v,classicRoof14:E,classicRoof15:_,classicRoof16:S,classicRoof17:C}},void 0);let x=new Map([[Xe.materialCube,Promise.resolve(n)],[Xe.classicWall,Promise.resolve(r)],[Xe.classicWallDiag,Promise.resolve(i)],[Xe.classicRoof10,Promise.resolve(s)],[Xe.classicRoof12,Promise.resolve(u)],[Xe.classicRoof13,Promise.resolve(h)],[Xe.classicRoof14,Promise.resolve(l)],[Xe.classicRoof15,Promise.resolve(y)],[Xe.classicRoof16,Promise.resolve(p)],[Xe.classicRoof17,Promise.resolve(m)]]).get(e);if(!x)throw new Error(`constmodel ${e} does not exist`);return x}return this.engine.fetchCachedObject(this.modelCache,e,async()=>{if(this.modelType=="nxt"){let n=await this.engine.getFileById(N.models,e);const{parseOb3Model:r}=await it(async()=>{const{parseOb3Model:i}=await Promise.resolve().then(()=>ll);return{parseOb3Model:i}},void 0);return r(n,this.engine)}else if(this.modelType=="old"){let n=this.engine.legacyData?ct.oldmodels:N.oldmodels,r=await this.engine.getFileById(n,e);const{parseRT5Model:i}=await it(async()=>{const{parseRT5Model:s}=await import("./rt5model-DXgb3RVj.js");return{parseRT5Model:s}},__vite__mapDeps([4,3,1,2]));return i(r,this.engine.rawsource)}else if(this.modelType=="classic"){const{classicGroups:n}=await it(async()=>{const{classicGroups:s}=await Promise.resolve().then(()=>En);return{classicGroups:s}},void 0);let r=await this.engine.getArchiveById(0,n.models);const{parseRT2Model:i}=await it(async()=>{const{parseRT2Model:s}=await import("./rt2model-zn_0-OzO.js");return{parseRT2Model:s}},__vite__mapDeps([5,3,1,2]));return i(r[e].buffer,this.engine)}else throw new Error("unexpected")},n=>n.meshes?n.meshes.reduce((r,i)=>r+i.indices.count,0)*30:1e3)}getMaterial(e,n,r){let i=e+(n?16777216:0)+(r?33554432:0);return this.engine.fetchCachedObject(this.threejsMaterialCache,i,async()=>{let s=this.engine.getMaterialData(e);return Uu(this,s,n,r)},s=>256*256*4*2)}}async function Uu(t,e,n,r){let i=new ka;i.alphaTest=e.alphamode=="cutoff"?.5:.1,i.transparent=n||e.alphamode=="blend";const s=e.texmodes=="clamp"?Pn:e.texmodes=="repeat"?Un:On,u=e.texmodet=="clamp"?Pn:e.texmodet=="repeat"?Un:On;if(typeof e.textures.diffuse<"u"&&t.textureType!="none"){let h=await(await t.getTextureFile("diffuse",e.textures.diffuse,e.stripDiffuseAlpha)).toImageData(),l=new ur(h.data,h.width,h.height,cr);if(l.needsUpdate=!0,l.wrapS=s,l.wrapT=u,l.colorSpace=Ir,l.magFilter=lr,l.minFilter=Ia,l.generateMipmaps=!0,i.map=l,e.textures.normal){let p=await(await t.getTextureFile("normal",e.textures.normal,!1)).toImageData(),m=pt(null,p.width,p.height),f=pt(null,p.width,p.height);const x=p.data;for(let d=0;d<x.length;d+=4){let a=x[d+1]/127.5-1,o=x[d+3]/127.5-1;m.data[d+0]=x[d+1],m.data[d+1]=x[d+3],m.data[d+2]=(Math.sqrt(Math.max(1-a*a-o*o,0))+1)*127.5,m.data[d+3]=255;const c=x[d+0]/255;f.data[d+0]=h.data[d+0]*c,f.data[d+1]=h.data[d+1]*c,f.data[d+2]=h.data[d+2]*c,f.data[d+3]=255}i.normalMap=new ur(m.data,m.width,m.height,cr),i.normalMap.needsUpdate=!0,i.normalMap.wrapS=s,i.normalMap.wrapT=u,i.normalMap.magFilter=lr,i.emissiveMap=new ur(f.data,f.width,f.height,cr),i.emissiveMap.needsUpdate=!0,i.emissiveMap.wrapS=s,i.emissiveMap.wrapT=u,i.emissiveMap.magFilter=lr,i.emissive.setRGB(1,1,1)}if(e.textures.compound){let y=await(await t.getTextureFile("compound",e.textures.compound,!1)).toImageData(),p=pt(null,y.width,y.height);for(let f=0;f<y.data.length;f+=4)p.data[f+1]=y.data[f+1],p.data[f+2]=y.data[f+0],p.data[f+3]=255;let m=new ur(p.data,p.width,p.height,cr);m.needsUpdate=!0,m.wrapS=s,m.wrapT=u,m.colorSpace=Ir,m.magFilter=lr,i.metalnessMap=m,i.roughnessMap=m,i.metalness=1}}return i.vertexColors=e.baseColorFraction!=1||!e.textures.diffuse||n,i.userData=e,e.uvAnim&&((i.userData.gltfExtensions??={}).RA_materials_uvanim={uvAnim:[e.uvAnim.u,e.uvAnim.v]}),r?i=ru(i.map,e.alphamode,e.alphacutoff):t.engine.hasNewModels&&(i=Pu(i.map,e)),{mat:i,matmeta:e}}async function Ou(t){let e=async r=>{let i=-1;try{let s=await t.getCacheIndex(r),u=s[s.length-1];await t.getFile(u.major,u.minor,u.crc),i=u.minor}catch{}return i},n="none";if(t.getBuildNr()<=gr){const{classicGroups:r}=await it(async()=>{const{classicGroups:s}=await Promise.resolve().then(()=>En);return{classicGroups:s}},void 0);n=await t.findSubfileByName(0,r.textures,"INDEX.DAT")?"legacy":"legacytga"}else if(t.getBuildNr()<=dt)n="legacy";else if(t.getBuildNr()<=471)n="oldproc";else if(t.getBuildNr()<=736)n="fullproc";else{let r=await e(N.texturesBmp),i=await e(N.texturesDds);if(r>0||i>0)n=r>i?"bmp":"dds";else{let s=await e(N.textures2015Png),u=await e(N.textures2015Dds);s>0||u>=0?n=u>s?"dds2014":"png2014":await e(N.texturesOldPng)>0?n="oldpng":n="none"}}return n}async function*Ln(t,e){if(t.legacyData){let n=null;if(e==N.items?n=t.legacyData.items:e==N.npcs?n=t.legacyData.npcs:e==N.objects?n=t.legacyData.objects:e==N.spotanims&&(n=t.legacyData.spotanims),!n)throw new Error(`cache major ${e} can not be iterated`);yield*n.map((r,i)=>({id:i,file:r}))}else if(t.getBuildNr()<=488)yield*(await t.getArchiveById(N.config,qi[e])).map(r=>({id:r.fileid,file:r.buffer}));else{let n=await t.getCacheIndex(e),r=xn[e];for(let i of n){if(!i)continue;yield*(await t.getFileArchive(i)).map(u=>({id:i.minor*r+u.fileid,file:u.buffer}))}}}export{Xi as C,Ea as E,gn as H,oa as R,at as S,fn as T,wn as a,Oo as b,N as c,ji as d,$u as e,Lt as f,ao as g,qt as h,Xu as i,K as p,Ju as r,_o as s,Hu as u};
