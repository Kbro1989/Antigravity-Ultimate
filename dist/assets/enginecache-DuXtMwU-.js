const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/proceduraltexture-DJLKCvWn.js","assets/main-BHK012E1.js","assets/main-7iHSeSaG.css","assets/three.module-DqfR4SX2.js","assets/rt5model-DocvX6NS.js","assets/rt2model-s-rEJhHD.js"])))=>i.map(i=>d[i]);
import{g as ga,_ as Ze}from"./main-BHK012E1.js";import{x as Be,aL as Ai,a$ as Qt,aZ as Ar,o as nr,aW as Cr,h as qt,p as Xe,b2 as er,b3 as yr,b7 as Ci,a3 as tt,b5 as Jr,a_ as tn,ad as Ke,aO as At,b8 as Ti,G as Fi,n as xa,V as va,k as Tr,S as br,az as rn,ai as Wr,b9 as ya,L as Kt,ba,ah as Yt,Z as Zt,q as wa,C as Cn,j as Ea,s as _a,ae as Tn,aT as Fn,aU as kn,bb as Sa}from"./three.module-DqfR4SX2.js";import{prepareClientScript as Fr,compileClientScript as Da,renderClientScript as Aa,writeOpcodeFile as Ca,writeClientVarFile as Ta}from"../src/services/rsmv/clientscript/index.ts";import{ClientScriptInterpreter as Fa}from"../src/services/rsmv/clientscript/interpreter.ts";const In=3988292384,ki=new Uint32Array(256),ka=new Uint32Array(256);function Ia(){for(let t=0;t<256;t++){let e=t,n=t<<24;for(let r=8;r>0;r--)(e&1)==1?e=e>>>1^In:e>>>=1,(n&2147483648)!=0?n=(n^In)<<1|1:n<<=1,n&=4294967295;ki[t]=e&4294967295,ka[t]=n}}Ia();function He(t,e=0,n=0,r=t.length){e=e^4294967295;for(let i=n;i<r;i++)e=e>>>8^ki[(e^t[i])&255];return(e^4294967295)>>>0}const Bn=Buffer.alloc(4);function ct(t,e){return Bn.writeUInt32BE(t>>>0),He(Bn,e)}const B={framemaps:1,config:2,interfaces:3,mapsquares:5,oldmodels:7,sprites:8,clientscript:12,fontmetricsOld:13,sounds:14,objects:16,enums:17,npcs:18,items:19,sequences:20,spotanims:21,structs:22,quickchat:24,materials:26,particles:27,worldmap:23,music:40,models:47,frames:48,texturesOldPng:9,texturesOldCompoundPng:37,textures2015Png:43,textures2015CompoundPng:44,textures2015Dds:45,textures2015CompoundPngMips:46,textures2015CompoundDds:50,textures2015PngMips:51,texturesDds:52,texturesPng:53,texturesBmp:54,texturesKtx:55,skeletalAnims:56,achievements:57,fontmetrics:58,vectorfonts:59,cutscenes:66,index:255},Ba=940,Ct={locations:0,squares:3,square_nxt:5,env:6},Re={mapunderlays:1,identityKit:3,mapoverlays:4,params:11,environments:29,animgroups:32,mapscenes:34,maplabels:36,dbtables:40,dbrows:41,locs_old:6,npcs_old:9,items_old:10,spotanim_old:13},it=377,ir=235,Na=`\r
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
`,Ma=`{\r
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
}`,La=`["struct",\r
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
]`,Ra=`["struct",\r
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
]`,Pa=`["struct",\r
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
]`,Ua=`["struct",\r
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
]`,Oa=`["struct",\r
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
]`,Ga=`["struct",\r
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
]`,za=`["struct",\r
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
]`,Va=`["struct",\r
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
]`,ja=`{\r
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
}`,qa=`{\r
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
// ]`,Xa=`{\r
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
}`,Ha=`{\r
	"0x01": { "name": "unk01", "read":"ushort" },\r
	"0x04": { "name": "unk04", "read":"bool" },\r
	"0x05": { "name": "model", "read":"varuint" },\r
	"0x06": { "name": "unk06", "read":"ushort" }\r
}`,$a=`["struct",\r
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
]`,Ja=`["struct",\r
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
]`,Wa=`["struct",\r
	["header_always_2","ubyte"],\r
	["probably_framemap_id","ushort"],\r
	["flags",["array","ushort","ubyte"]],\r
	["animdata",["buffer",["bytesleft"],"ubyte"]]\r
]`,Ka=`{\r
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
}`,Ya=`//works from 500 to 932, system is entirely different below 500\r
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
]`,Za=`{\r
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
}`,Qa=`{\r
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
}`,es=`{\r
	"0x01": { "name":                           "sprite_id", "read": "variable unsigned int" },\r
	"0x02": { "name":                           "unknown_2", "read": "unsigned int" },\r
	"0x03": { "name":                           "unknown_3", "read": "true" },\r
	"0x04": { "name":                           "unknown_4", "read": "true" },\r
	"0x05": { "name":                           "unknown_5", "read": "true" }\r
}`,ts=`["struct",\r
    //TODO\r
    ["unk","ubyte"]\r
]`,rs=`["struct",\r
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
]`,ns=`{\r
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
}`,is=`["struct",\r
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
]`,as=`{\r
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
}`,ss=`{\r
	"0x01": { "name":                           "color", "read": ["array",3,"unsigned byte"] },\r
	"0x02": { "name":                        "material", "read": "unsigned short" },\r
	"0x03": { "name":                 "material_tiling", "read": "unsigned short" },\r
	"0x04": { "name":                    "unknown_0x04", "read": "true" },\r
	"0x05": { "name":                    "unknown_0x05", "read": "true" }\r
}`,os=`["array",4096,["struct",\r
	["flags","unsigned byte"],\r
	["shape",["opt",["flags",0,"bitflag"],"unsigned byte"]],\r
	["overlay",["opt",["flags",0,"bitflag"],"variable unsigned short"]],\r
	["settings",["opt",["flags",1,"bitflag"],"unsigned byte"]],\r
	["underlay",["opt",["flags",2,"bitflag"],"variable unsigned short"]],\r
	["height",["opt",["flags",3,"bitflag"],"unsigned byte"]]\r
]]`,ls=`["struct",\r
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
]`,us=`["struct",\r
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
]`,cs=`["struct",\r
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
]`,fs=`{\r
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
}`,hs=`{\r
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
}`,ds=`["struct",\r
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
]`,ps=`["struct",\r
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
]`,ms=`["struct",\r
    ["color","ushort"],\r
    ["bool0","bool"],\r
    ["bool1","bool"],//always true\r
    ["spriteid","ushort"],\r
    ["always00",["buffer",6,"hex"]]\r
]`,gs=`{\r
	"0x04": { "name":              "unk04", "read": "true" },\r
	"0x65": { "name":              "type", "read": ["struct",\r
		["vartype","varushort"],\r
		["$primitive","ubyte"],\r
		["defaultint",["opt",["$primitive",2],"int"]],\r
		["defaultstring",["opt",["$primitive",5],"string"]]\r
	] }\r
}`,xs=`{\r
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
}`,vs=`{\r
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
}`,ys=`["nullarray",["struct",\r
    ["op",["ref","$opcode"]],\r
    ["args",["match",["ref","$opcode"],{\r
        "0x01":["buffer",8,"hex"]\r
    }]]\r
]]`,bs=`{\r
	"0x01": { "name":                     "text", "read": "string" },\r
	"0x02": { "name":            "subcategories", "read": ["array","ubyte",["struct",["id","ushort"],["hotkey","ubyte"]]]},\r
	"0x03": { "name":                    "lines", "read": ["array","ubyte",["struct",["id","ushort"],["hotkey","ubyte"]]]},\r
	"0x04": { "name":            "nonsearchable", "read": "true" }\r
}`,ws=`{\r
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
}`,Es=`["struct",\r
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
]`,_s=`{\r
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
}`,Ss=`["struct",\r
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
]`,Ds=`{\r
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
}`,As=`{\r
	"0xF9": { "name":              "extra", "read": "extrasmap" }\r
}`,Cs=`{\r
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
}`,Nn={buffer:{constr:Buffer},hex:{constr:Uint8Array},byte:{constr:Int8Array},ubyte:{constr:Uint8Array},short:{constr:Int16Array},ushort:{constr:Uint16Array},int:{constr:Int32Array},uint:{constr:Uint32Array},float:{constr:Float32Array}};function Ii(t,e,n){if(!Object.hasOwn(n,t))throw new Error(`Type '${t}' not found in typedef.json`);let r=n[t];return typeof r!="string"?Pe(e,r,n):Object.hasOwn(tr,r)?tr[r]:Ii(r,e,n)}function Pe(t,e,n){switch(t??=()=>{throw new Error("reference failed to resolve")},typeof e){case"boolean":case"number":return Ln(e);case"string":return Object.hasOwn(tr,e)?tr[e]:Ii(e,t,n);case"object":if(e==null)return Ln(null);if(Array.isArray(e)){if(e.length<1)throw new Error(`'read' variables must either be a valid type-defining string, an array of type-defining strings / objects, or a valid type-defining object: ${JSON.stringify(e)}`);let r=e.slice(1);if(Pn[e[0]])return Pn[e[0]](r,t,n)}else return Ts(e,t,n);default:throw new Error(`'read' variables must either be a valid type-defining string, an array of type-defining strings / objects, or a valid type-defining object: ${JSON.stringify(e)}`)}}function Ts(t,e,n){let r={read(p){let m={},h={$opcode:0};for(p.stack.push(m),p.hiddenstack.push(h);;){if(p.scan==p.endoffset){v||console.log("ended reading opcode struct at end of file without 0x00 opcode");break}let g=u.read(p);if(h.$opcode=g,!v&&g==0)break;let d=l.get(g);if(!d)throw new Error("unknown chunk 0x"+g.toString(16).toUpperCase());m[d.key]=d.parser.read(p)}return p.stack.pop(),p.hiddenstack.pop(),m},write(p,m){if(typeof m!="object"||!m)throw new Error("oject expected");p.stack.push(m),p.hiddenstack.push({});for(let h in m){if(h.startsWith("$"))continue;let g=c[h];if(!g)throw new Error("unknown property "+h);u.write(p,g.op),g.parser.write(p,m[h])}v||u.write(p,0),p.stack.pop(),p.hiddenstack.pop()},getTypescriptType(p){let m=`{
`,h=p+"	";for(let g of l.values())m+=h+g.key+"?: "+g.parser.getTypescriptType(h)+` | null
`;return m+=p+"}",m},getJsonSchema(){return{type:"object",properties:Object.fromEntries([...l.values()].filter(p=>!p.key.startsWith("$")).map(p=>[p.key,{oneOf:[p.parser.getJsonSchema(),{type:"null"}]}]))}}},i=function(p,m,h){let g={stackdepth:h.stackdepth+1,resolve(d,a){if(typeof d!="object"||!d)throw new Error("object expected");let o=d[p];return h.resolve(o,a)}};return m=="$opcode"||Object.prototype.hasOwnProperty.call(c,m)?(s[m]??=[],s[m].push(g),g):st(m,e,g)},s={},u=Pe(null,t.$opcode??"unsigned byte",n),c={};for(let p in t){if(p.startsWith("$"))continue;let m=t[p];if(typeof m!="object"||!m)throw new Error("op name expected");let h=m.name;if(typeof h!="string")throw new Error("op name expected");if(c[h])throw new Error("duplicate opcode key "+h);c[h]={op:parseInt(p),parser:Pe(i.bind(null,p),m.read,n)}}let l=new Map;for(let p in c){let m=c[p];l.set(m.op,{key:p,parser:m.parser})}let v=!!l.get(0);return r}function Fs(t,e,n){let r={read(u){let c=[];for(let l of s){let v=l.read(u);c.push(v)}return c},write(u,c){if(!Array.isArray(c))throw new Error("array expected");for(let[l,v]of s.entries())v.write(u,c[l])},getTypescriptType(u){let c=`[
`,l=u+"	";for(let v of s)c+=l+v.getTypescriptType(l)+`,
`;return c+=u+"]",c},getJsonSchema(){return{type:"array",items:Object.entries(s).map(([u,c])=>c.getJsonSchema()),minItems:Object.keys(s).length,maxItems:Object.keys(s).length}}};const i=function(u,c,l){return st(c,e,{stackdepth:l.stackdepth,resolve(v,p){if(!Array.isArray(v))throw new Error("Array expected");return l.resolve(v[u],p)}})};let s=t.map((u,c)=>Pe(i.bind(null,c),u,n));return r}function st(t,e,n){if(!e)throw new Error("reference "+t+" could not be resolved");return e(t,n)}function nn(t,e,n){let i=st(e,t,{stackdepth:0,resolve:n}).stackdepth,s=e.startsWith("$");return{read(u){let c=s?u.hiddenstack:u.stack;return c[c.length-i][e]},write(u,c){if(u.isWrite&&!s)throw new Error(`can update ref values in write mode when they are hidden (prefixed with $) in ${e}`);let l=s?u.hiddenstack:u.stack;l[l.length-i][e]=c}}}function ks(t,e,n){let r={},i={read(l){let v={},p={};l.stack.push(v),l.hiddenstack.push(p);for(let m of c){let h=u[m].read(l);h!==void 0&&(m[0]=="$"?p[m]=h:v[m]=h)}return l.stack.pop(),l.hiddenstack.pop(),v},write(l,v){if(typeof v!="object"||!v)throw new Error("object expected");let p={};l.stack.push(v),l.hiddenstack.push(p);for(let m of c){let h=v[m],g=u[m];if(m.startsWith("$")){if(g.readConst!=null)h=g.readConst(l);else{let d=r[m];if(!d)throw new Error("cannot write hidden values if they are not constant or not referenced");h??=0;for(let a of d)h=a.resolve(v,h)}p[m]=h}g.write(l,h)}l.stack.pop(),l.hiddenstack.pop()},getTypescriptType(l){let v=`{
`,p=l+"	";for(let m of c)m[0]!="$"&&(v+=p+m+": "+u[m].getTypescriptType(p)+`,
`);return v+=l+"}",v},getJsonSchema(){return{type:"object",properties:Object.fromEntries([...Object.entries(u)].filter(([l])=>!l.startsWith("$")).map(([l,v])=>[l,v.getJsonSchema()])),required:c.filter(l=>!l.startsWith("$"))}}},s=function(l,v,p){let m={stackdepth:p.stackdepth+1,resolve(h,g){if(typeof h!="object"||!h)throw new Error("object expected");let d=h[l];return p.resolve(d,g)}};return Object.prototype.hasOwnProperty.call(u,v)?(r[v]??=[],r[v].push(m),m):st(v,e,m)},u={};for(let l of t){if(!Array.isArray(l)||l.length!=2)throw new Error("each struct args should be a [name,type] pair");if(typeof l[0]!="string")throw new Error("prop name should be string");if(u[l[0]])throw new Error("duplicate struct prop "+l[0]);u[l[0]]=Pe(s.bind(null,l[0]),l[1],n)}let c=Object.keys(u);return i}function Is(t,e,n){let r={read(v){return c.match(v)==-1?null:l.read(v)},write(v,p){if(p!=null)return l.write(v,p)},getTypescriptType(v){return l.getTypescriptType(v)+" | null"},getJsonSchema(){return{oneOf:[l.getJsonSchema(),{type:"null"}]}}},i=function(v,p){return st(v,e,{stackdepth:p.stackdepth,resolve(m,h){return m!=null?p.resolve(m,h):h}})};if(t.length<2)throw new Error("2 arguments exptected for proprety with type opt");let s=t[0],u="";if(typeof s=="string")u=s;else{let v,p,m="eq";if(Array.isArray(s)){if(typeof s[1]!="number")throw new Error("only literal ints as condition value are supported");v=s[0],m=s[2]??"eq",p=s[1]}else{if(typeof s!="number")throw new Error("");v="$opcode",p=s}let g={bitand:"&=",bitflag:"&",bitflagnot:"!&",bitor:"&",eq:"==",eqnot:"!=",gteq:">=",lteq:"<="}[m];(m=="bitflag"||m=="bitflagnot")&&(p=1<<p),u=`${v}${g}${p}`}let c=Bi(i,[u],v=>v==null?-1:0),l=Pe(i,t[1],n);return r}function Bs(t,e,n){let r={read(h){let g=c.read(h),d=[],a=[];for(let o=0;o<p.length;o++){let f=p[o];for(let x=0;x<g;x++){let y,E;o==0?(E={},d.push(E),y={},a.push(y)):(E=d[x],y=a[x]),h.stack.push(E),h.hiddenstack.push(y);for(let _ in f){let S=f[_].read(h);_.startsWith("$")?y[_]=S:E[_]=S}h.stack.pop(),h.hiddenstack.pop()}}return d},write(h,g){if(!Array.isArray(g))throw new Error("array expected");c.write(h,g.length);let d=[];for(let a=0;a<p.length;a++){let o=p[a];for(let f=0;f<g.length;f++){let x=g[f],y=a==0?d[f]={}:d[f];if(h.stack.push(x),h.hiddenstack.push(y),typeof x!="object"||!x)throw new Error("object expected");for(let E in o){let _=o[E],S=x[E];if(E.startsWith("$")){if(_.readConst!=null)S=_.readConst(h);else{let T=l[E];if(!T)throw new Error("cannot write hidden values if they are not constant or not referenced");S??=0;for(let A of T)S=A.resolve(x,S)}y[E]=S}_.write(h,S)}h.stack.pop(),h.hiddenstack.pop()}}},getTypescriptType(h){let g=`{
`,d=h+"	";for(let[a,o]of Object.entries(v))a[0]!="$"&&(g+=d+a+": "+o.getTypescriptType(d)+`,
`);return g+=h+"}[]",g},getJsonSchema(){return{type:"array",items:{type:"object",properties:Object.fromEntries([...Object.entries(v)].filter(([h])=>!h.startsWith("$")).map(([h,g])=>[h,g.getJsonSchema()])),required:m.filter(h=>!h.startsWith("$"))}}}};const i=function(h,g){return st(h,e,{stackdepth:g.stackdepth,resolve(d,a){if(!Array.isArray(d))throw new Error("array expected");return g.resolve(d.length,a)}})},s=function(h,g,d){let a={stackdepth:d.stackdepth+1,resolve(o,f){if(typeof o!="object"||!o)throw new Error("object expected");let x=o[h];return d.resolve(x,f)}};return Object.prototype.hasOwnProperty.call(v,g)?(l[g]??=[],l[g].push(a),a):st(g,e,a)};let u=t.slice(1),c=Pe(i,t[0],n),l={},v={},p=[];for(let h of u){if(!Array.isArray(h))throw new Error("each argument for composed chunk should be an array");let g={};p.push(g);for(let d of h){if(!Array.isArray(d)||d.length!=2||typeof d[0]!="string")throw new Error("each composedchunk should be a [name,type] pair");let a=Pe(s.bind(null,d[0]),d[1],n);g[d[0]]=a,v[d[0]]=a}}let m=p.flatMap(Object.keys);return r}function Mn(t,e,n){if(typeof t=="string"){if(n=="hex")return Buffer.from(t,"hex");{let r=t.match(/^buffer ([\w\[\]]+){([\d,\-\.]*)}/);if(!r)throw new Error("invalid arraybuffer string");return new e.constr(r[2].split(",").map(i=>+i))}}if(!(t instanceof e.constr))throw new Error("arraybuffer expected");return t}function Ns(t,e,n){let r={read(m){let h=v.read(m),g=h*c*p.constr.BYTES_PER_ELEMENT,d=new ArrayBuffer(g);if(m.scan+g>m.endoffset)throw new Error("trying to read outside buffer bounds");let a=Buffer.from(d);a.set(m.buffer.subarray(m.scan,m.scan+g)),m.scan+=g;let o=l=="buffer"?a:new p.constr(d);return l=="hex"?o.toJSON=()=>a.toString("hex"):m.args.keepBufferJson===!0?o.toJSON=()=>`buffer ${l}${c!=1?`[${c}]`:""}[${h}]`:o.toJSON=()=>`buffer ${l}${c!=1?`[${c}]`:""}[]{${[...o].join(",")}}`,o},write(m,h){let g=Mn(h,p,l);if(g.length%c!=0)throw new Error("araybuffer is not integer multiple of vectorlength");v.write(m,g.length/c);let d=new Uint8Array(g.buffer,g.byteOffset,g.byteLength);m.buffer.set(d,m.scan),m.scan+=d.byteLength},getTypescriptType(m){return p.constr.name},getJsonSchema(){return{type:"string"}}};const i=function(m,h){return st(m,e,{stackdepth:h.stackdepth,resolve(g,d){let a=Mn(g,p,l);return h.resolve(a.length/c,d)}})};if(t.length<1)throw new Error(`'read' variables interpretted as an array must contain items: ${JSON.stringify(t)}`);let s=t[1]??"buffer",u=t[2]??1;if(typeof s!="string"||!Object.hasOwn(Nn,s))throw new Error("unknown buffer type "+t[1]);if(typeof u!="number")throw new Error("vectorlength should be a number");let c=u,l=s,v=Pe(i,t[0],n);const p=Nn[s];return r}function Ms(t,e,n){let r={read(v){let p=c.read(v),m=[];for(let h=0;h<p;h++)m.push(l.read(v));return m},write(v,p){if(!Array.isArray(p))throw new Error("array expected");c.write(v,p.length);for(let m=0;m<p.length;m++)l.write(v,p[m])},getTypescriptType(v){return`${l.getTypescriptType(v)}[]`},getJsonSchema(){return{type:"array",items:l.getJsonSchema()}}};const i=function(v,p){return st(v,e,{stackdepth:p.stackdepth,resolve(m,h){if(!Array.isArray(m))throw new Error("array expected");return p.resolve(m.length,h)}})},s=function(v,p){return st(v,e,{stackdepth:p.stackdepth,resolve(m,h){if(!Array.isArray(m))throw new Error("array expected");return p.resolve(m[0],h)}})};if(t.length<1)throw new Error(`'read' variables interpretted as an array must contain items: ${JSON.stringify(t)}`);let u=t.length>=2?t[0]:"variable unsigned short",c=Pe(i,u,n),l=Pe(s,t[t.length>=2?1:0],n);return r}function Ls(t,e,n){let r={read(p){let m=[],h={$opcode:0};for(p.hiddenstack.push(h),p.stack.push({});;){p.scan;let g=c.read(p);h.$opcode=g;let d=l.read(p);if(g==d)break;m.push(v.read(p))}return p.hiddenstack.pop(),p.stack.pop(),m},write(p,m){if(!Array.isArray(m))throw new Error("array expected");p.stack.push(m),p.hiddenstack.push({});for(let h of m)c.write(p,1),v.write(p,h);c.write(p,0),p.stack.pop(),p.hiddenstack.pop()},getTypescriptType(p){return`${v.getTypescriptType(p)}[]`},getJsonSchema(){return{type:"array",items:v.getJsonSchema()}}};const i=function(p,m){return p=="$opcode"?{stackdepth:m.stackdepth+1,resolve(h,g){throw new Error("not implemented")}}:st(p,e,{stackdepth:m.stackdepth+1,resolve(h,g){if(!Array.isArray(h))throw new Error("array expected");return m.resolve(h[0],g)}})};if(t.length<1)throw new Error(`'read' variables interpretted as an array must contain items: ${JSON.stringify(t)}`);let s=t.length>=2?t[0]:"variable unsigned short",u=t.length>=3?t[1]:0,c=Pe(null,s,n),l=Pe(null,u,n),v=Pe(i,t[t.length-1],n);return r}function Ln(t){if(typeof t!="number"&&typeof t!="string"&&typeof t!="boolean"&&t!=null)throw new Error("only bool, number, string or null literals allowed");return{read(n){return t},readConst(){return t},write(n,r){if(r!=t)throw new Error(`expected constant ${t} was not present during write`)},getTypescriptType(){return JSON.stringify(t)},getJsonSchema(){return{const:t}}}}function Rs(t,e,n){let r=p=>{let m=v.read(p);return u!=-1&&(m=m>>u&~(-1<<c)),m+l},i={read:r,readConst:r,write(p,m){},getTypescriptType(){return"number"},getJsonSchema(){return{type:"integer",minimum:c==-1?void 0:0,maximum:c==-1?void 0:2**c-1}}};if(t.length<1)throw new Error("1 argument exptected for proprety with type ref");if(typeof t[0]!="string")throw new Error("ref propname expected");let s=t[0],[u,c]=[-1,-1];if(t[1])if(Array.isArray(t[1])&&t[1].length==2&&typeof t[1][0]=="number"&&typeof t[1][1]=="number")u=t[1][0],c=t[1][1];else throw new Error("second argument for ref should be [minbit,bitlen] pair");let l=t[2]??0;if(typeof l!="number")throw new Error("ref offset should be a number");let v=nn(e,s,(p,m)=>{if(typeof p!="number")throw new Error("number expected");if(u!=-1){let h=~(-1<<c)<<u;return m&~h|p<<u}else return p});return i}function Ps(){return{read(t){return t.endoffset-t.scan},write(t,e){},getTypescriptType(){return"number"},getJsonSchema(){return{type:"integer"}}}}function Us(t,e,n){let r={read(l){let v=s.read(l),p,m=c.read(l)??0;if(u=="add"||u=="add-1"||u=="postadd")p=m+(v??0)+(u=="add-1"?-1:0);else if(u=="hold")p=v??m;else throw new Error("unknown accumolator mode");return c.write(l,p),u=="postadd"?m:p},write(l,v){if(typeof v!="number")throw new Error("number expected");let p=c.read(l)??0,m;if(u=="add"||u=="add-1")m=v-p+(u=="add-1"?1:0);else throw u=="hold"?new Error("writing accum intaccum hold not implemented"):u=="postadd"?new Error("writing accum intaccum postadd not implemented"):new Error("unknown accumolator mode");s.write(l,m),c.write(l,v)},getTypescriptType(){return"number"},getJsonSchema(){return{type:"integer"}}};if(t.length<2)throw new Error("2 arguments exptected for proprety with type accum");let i=t[0],s=Pe(e,t[1],n),u=t[2]??"add";if(typeof i!="string")throw new Error("ref name should be a string");let c=nn(e,i,(l,v)=>v);return r}function Rn(t){const e="latin1";return{read(n){let r=wr(n.args)<=it?10:0;for(let u=0;u<t.length;u++,n.scan++)if(n.buffer.readUInt8(n.scan)!=t[u])throw new Error("failed to match string header bytes");let i=n.scan;for(;;){if(i==n.endoffset)throw new Error("reading string without null termination");if(n.buffer.readUInt8(i)==r)break;i++}let s=n.buffer.toString(e,n.scan,i);return n.scan=i+1,s},write(n,r){if(typeof r!="string")throw new Error("string expected");let i=wr(n.args)<=it?10:0,s=[...t,...Buffer.from(r,e),i];n.buffer.set(s,n.scan),n.scan+=s.length},getTypescriptType(){return"string"},getJsonSchema(){return{type:"string"}}}}function Bi(t,e,n){let r=[],i=[];for(let u of e){u=u.replace(/\s/g,"");let c=u.split(/&&/g),l=[];for(let v of c){let p,m,h=0;if(v=="default"||v=="other")continue;{let d=v.match(/^((?<var>[\$a-zA-Z]\w*)?(?<op><|<=|>|>=|&|==|=|!&|&=|!=)?)?(?<version>0x[\da-fA=F]+|-?\d+)$/);if(!d)throw new Error("invalid match value, expected <op><version>. For example '>10'");h=parseInt(d.groups.version),p=d.groups.op??"=",p=="=="&&(p="="),m=d.groups.var??"$opcode"}let g=r.findIndex(d=>d.name==m);g==-1&&(g=r.length,r.push({name:m,parser:nn(t,m,(d,a)=>{if(!n)throw new Error("write not implemented");let o=n(d);for(let f=0;f<i.length;f++){let x=i[f];for(let y of x){if(y.varindex!=g)continue;let E=f==o,_=y.value;switch(y.op){case"=":a=E?_:a;break;case"!=":a=E?a:_;break;case"&":a=E?a|_:a&~_;break;case"&=":a=E?a|_:a&~_;break;case"!&":a=E?a&~_:a|_;break;case">=":a=E?Math.max(_,a):a;break;case">":a=E?Math.max(_+1,a):a;break;case"<=":a=E?Math.min(_,a):a;break;case"<":a=E?Math.min(_-1,a):a;break;default:throw new Error("unknown condition "+y.op)}}}return a})})),l.push({op:p,value:h,varname:m,varindex:g})}i.push(l)}return{match:u=>{let c=r.map(l=>l.parser.read(u));for(let l=0;l<i.length;l++){let v=i[l],p=!0;for(let m of v){let h=c[m.varindex];switch(m.op){case"=":p=h==m.value;break;case"!=":p=h!=m.value;break;case"<":p=h<m.value;break;case"<=":p=h<=m.value;break;case">":p=h>m.value;break;case">=":p=h>=m.value;break;case"&":p=(h&m.value)!=0;break;case"!&":p=(h&m.value)==0;break;case"&=":p=(h&m.value)==m.value;break;default:throw new Error("unknown op"+m.op)}if(!p)break}if(p)return l}return-1}}}const Os={playeritem:function(){return{read(t){let e=t.buffer.readUInt8(t.scan++);if(e==0)return 0;let n=t.buffer.readUInt8(t.scan++);return n==255&&e==255?-1:e<<8|n},write(t,e){if(typeof e!="number")throw new Error("number expected");e==0?t.buffer.writeUInt8(0,t.scan++):(t.buffer.writeUint16BE(e==-1?65535:e&65535,t.scan),t.scan+=2)},getTypescriptType(){return"number"},getJsonSchema(){return{type:"integer",minimum:-1,maximum:49150}}}},itemvar:function(t){let e=t[0];if(typeof e!="string"||!["ref","matcount","colorcount","modelcount"].includes(e))throw new Error;return{read(n){let r=typeof n.args.activeitem=="number"?n.args.activeitem:-1;if(e=="ref"&&(r++,n.args.activeitem=r),!Array.isArray(n.args.slots))throw new Error("");let i=n.args.slots[r];if(e=="ref")return i;if(e=="matcount")return i?.replaceMaterials?.length??0;if(e=="colorcount")return i?.replaceColors?.length??0;if(e=="modelcount")return i?.models.length;throw new Error},write(){},getTypescriptType(){return e=="ref"?"any":"number"},getJsonSchema(){return{type:e=="ref"?"any":"integer"}}}},buildnr:function(t,e){return{readConst(n){return wr(n.args)},read(n){return wr(n.args)},write(n,r){},getTypescriptType(n){return"number"},getJsonSchema(){return{type:"number"}}}},match:function(t,e,n){let r={read(v){let p={$opcode:0};v.stack.push({}),v.hiddenstack.push(p);let m=s?s.read(v):0;p.$opcode=m;let h=l.match(v);if(h==-1)throw new Error("no opcode matched");let g=c[h].read(v);return v.stack.pop(),v.hiddenstack.pop(),g},write(v,p){let m={$opcode:0};if(v.stack.push({}),v.hiddenstack.push(m),s){if(!s.readConst)throw new Error("non-const or non-reference match value not implemented in write mode");m.$opcode=s.readConst(v)}let h=l.match(v);if(h==-1)throw new Error("no opcode matched");c[h].write(v,p),v.stack.pop(),v.hiddenstack.pop()},getTypescriptType(v){return"("+c.map(p=>p.getTypescriptType(v+"	")).join("|")+")"},getJsonSchema(){return{anyOf:c.map(v=>v.getJsonSchema())}}};const i=function(v,p){let m={stackdepth:p.stackdepth+1,resolve(h,g){throw new Error("write not supported")}};return v=="$opcode"?m:st(v,e,m)};if(t.length==1&&(t=[null,t[0]]),t.length!=2)throw new Error("match chunks needs 2 arguments");if(typeof t[1]!="object")throw new Error("match chunk requires 2n+2 arguments");let s=t[0]?Pe(i,t[0],n):null,u=Object.keys(t[1]),c=Object.values(t[1]).map(v=>Pe(i,v,n)),l=Bi(i,u);return r},footer:function(t,e,n){if(t.length!=2)throw new Error("footer requires length and subtype arguments");let r=Pe(e,t[0],n),i=Pe(e,t[1],n);return{read(s){let u=r.read(s),c=s.scan,l=s.endoffset-u;s.scan=l;let v=i.read(s);return s.scan!=s.endoffset&&console.log(`didn't read full footer, ${s.endoffset-s.scan} bytes left`),s.scan=c,s.endoffset=s.endoffset-u,v},write(s,u){let c=s.scan;i.write(s,u);let l=s.scan-c;s.buffer.copyWithin(s.endoffset-l,c,s.scan),s.scan=c,s.endoffset-=l},getTypescriptType(s){return i.getTypescriptType(s)},getJsonSchema(){return i.getJsonSchema()}}},"tailed varushort":function(t,e,n){return{read(i){let s=0;for(;;){let u=i.buffer.readUint8(i.scan++),c;if((u&128)==0)c=u;else{let l=i.buffer.readUint8(i.scan++);c=(u&127)<<8|l}if(s+=c,c!=32767)return s}},write(i,s){if(typeof s!="number")throw new Error("number expected");for(;s>=0;){let u=Math.min(32767,s);u<128?i.buffer.writeUint8(u,i.scan++):(i.buffer.writeUint16BE(u|32768,i.scan),i.scan+=2),s-=u}},getTypescriptType(i){return"number"},getJsonSchema(){return{type:"number"}}}},legacy_maptile:function(t,e,n){return{read(r){let i={flags:0,shape:null,overlay:null,settings:null,underlay:null,height:null};for(;;){let s=r.buffer.readUint8(r.scan++);if(s==0)break;if(s==1){i.height=r.buffer.readUint8(r.scan++);break}s>=2&&s<=49&&(i.shape=s-2,i.overlay=r.buffer.readUint8(r.scan),r.scan+=1),s>=50&&s<=81&&(i.settings=s-49),s>=82&&(i.underlay=s-81)}return i},write(r){throw new Error("not implemented")},getTypescriptType(r){let i=r+"	";return`{
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
${r}}`}}}};function wr(t){if(typeof t.clientVersion!="number")throw new Error("client version not set");return t.clientVersion}const Gs={ubyte:{read(t){let e=t.buffer.readUInt8(t.scan);return t.scan+=1,e},write(t,e){t.buffer.writeUInt8(e,t.scan),t.scan+=1},min:0,max:255},byte:{read(t){let e=t.buffer.readInt8(t.scan);return t.scan+=1,e},write(t,e){t.buffer.writeInt8(e,t.scan),t.scan+=1},min:-128,max:127},ushort:{read(t){let e=t.buffer.readUInt16BE(t.scan);return t.scan+=2,e},write(t,e){t.buffer.writeUInt16BE(e,t.scan),t.scan+=2},min:0,max:2**16-1},short:{read(t){let e=t.buffer.readInt16BE(t.scan);return t.scan+=2,e},write(t,e){t.buffer.writeInt16BE(e,t.scan),t.scan+=2},min:-32768,max:2**15-1},uint:{read(t){let e=t.buffer.readUInt32BE(t.scan);return t.scan+=4,e},write(t,e){t.buffer.writeUInt32BE(e,t.scan),t.scan+=4},min:0,max:2**32-1},int:{read(t){let e=t.buffer.readInt32BE(t.scan);return t.scan+=4,e},write(t,e){t.buffer.writeInt32BE(e,t.scan),t.scan+=4},min:-2147483648,max:2**31-1},uint_le:{read(t){let e=t.buffer.readUInt32LE(t.scan);return t.scan+=4,e},write(t,e){t.buffer.writeUint32LE(e,t.scan),t.scan+=4},min:0,max:2**32-1},ushort_le:{read(t){let e=t.buffer.readUInt16LE(t.scan);return t.scan+=2,e},write(t,e){t.buffer.writeUint16LE(e,t.scan),t.scan+=2},min:0,max:2**16-1},utribyte:{read(t){let e=t.buffer.readUIntBE(t.scan,3);return t.scan+=3,e},write(t,e){t.buffer.writeUintBE(e,t.scan,3),t.scan+=3},min:0,max:2**24-1},float:{read(t){let e=t.buffer.readFloatBE(t.scan);return t.scan+=4,e},write(t,e){t.buffer.writeFloatBE(e,t.scan),t.scan+=4},min:Number.MIN_VALUE,max:Number.MAX_VALUE},varushort:{read(t){let e=t.buffer.readUInt8(t.scan++);if((e&128)==0)return e;let n=t.buffer.readUInt8(t.scan++);return(e&127)<<8|n},write(t,e){e<128?(t.buffer.writeUInt8(e,t.scan),t.scan+=1):(t.buffer.writeUint16BE(e|32768,t.scan),t.scan+=2)},min:0,max:2**15-1},varshort:{read(t){let e=t.buffer.readUInt8(t.scan++);if((e&128)==0)return e<<25>>25;let n=t.buffer.readUInt8(t.scan++);return((e&127)<<8|n)<<17>>17},write(t,e){e<64&&e>=-64?(t.buffer.writeUInt8(e&127,t.scan),t.scan+=1):(t.buffer.writeInt16BE(e|32768,t.scan),t.scan+=2)},min:-16384,max:2**14-1},varuint:{read(t){let e=t.buffer.readUInt16BE(t.scan);if(t.scan+=2,(e&32768)==0)return e;{let n=t.buffer.readUInt16BE(t.scan);return t.scan+=2,(e&32767)<<16|n}},write(t,e){e<32768?(t.buffer.writeUInt16BE(e,t.scan),t.scan+=2):(t.buffer.writeUint32BE((e|2147483648)>>>0,t.scan),t.scan+=4)},min:0,max:2**31-1},varnullint:{read(t){let e=t.buffer.readUInt16BE(t.scan);if(t.scan+=2,e==32767)return-1;if((e&32768)==0)return e;{let n=t.buffer.readUInt16BE(t.scan);return t.scan+=2,(e&32767)<<16|n}},write(t,e){e==-1?(t.buffer.writeUint16BE(32767,t.scan),t.scan+=2):e<32768?(t.buffer.writeUInt16BE(e,t.scan),t.scan+=2):(t.buffer.writeUint32BE((e|2147483648)>>>0,t.scan),t.scan+=4)},min:-1,max:2**31-1},varint:{read(t){let e=t.buffer.readUInt16BE(t.scan);if(t.scan+=2,(e&32768)==0)return e<<17>>17;let n=t.buffer.readUInt16BE(t.scan);return t.scan+=2,((e&32767)<<16|n)<<1>>1},write(t,e){e<16384&&e>=-16384?(t.buffer.writeUInt16BE(e&32767,t.scan),t.scan+=2):(t.buffer.writeInt32BE(e|8388608,t.scan),t.scan+=4)},min:-1073741824,max:2**30-1}},tr={...Object.fromEntries(Object.entries(Gs).map(([t,e])=>[t,{read:e.read,write:(n,r)=>{if(typeof r!="number"||r>e.max||r<e.min)throw new Error;e.write(n,r)},getJsonSchema(){return{type:"number",maximum:e.max,minimum:e.min}},getTypescriptType(n){return"number"}}])),bool:{read(t){let e=t.buffer.readUInt8(t.scan++);if(e!=0&&e!=1)throw new Error("1 or 0 expected boolean value");return e!=0},write(t,e){if(typeof e!="boolean")throw new Error("boolean expected");t.buffer.writeUInt8(+e,t.scan++)},getJsonSchema(){return{type:"boolean"}},getTypescriptType(t){return"boolean"}},string:Rn([]),paddedstring:Rn([0])},Pn={ref:Rs,accum:Us,opt:Is,chunkedarray:Bs,bytesleft:Ps,buffer:Ns,nullarray:Ls,array:Ms,struct:ks,tuple:Fs,...Os,...tr};var dr={exports:{}},zs=dr.exports,Un;function Vs(){return Un||(Un=1,(function(t,e){(function(r,i){t.exports=i()})(zs,function(){return(function(n){var r={};function i(s){if(r[s])return r[s].exports;var u=r[s]={exports:{},id:s,loaded:!1};return n[s].call(u.exports,u,u.exports,i),u.loaded=!0,u.exports}return i.m=n,i.c=r,i.p="",i(0)})([function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(1),u=i(3),c=i(8),l=i(15);function v(d,a,o){var f=null,x=function(N,F){o&&o(N,F),f&&f.visit(N,F)},y=typeof o=="function"?x:null,E=!1;if(a){E=typeof a.comment=="boolean"&&a.comment;var _=typeof a.attachComment=="boolean"&&a.attachComment;(E||_)&&(f=new s.CommentHandler,f.attach=_,a.comment=!0,y=x)}var S=!1;a&&typeof a.sourceType=="string"&&(S=a.sourceType==="module");var T;a&&typeof a.jsx=="boolean"&&a.jsx?T=new u.JSXParser(d,a,y):T=new c.Parser(d,a,y);var A=S?T.parseModule():T.parseScript(),I=A;return E&&f&&(I.comments=f.comments),T.config.tokens&&(I.tokens=T.tokens),T.config.tolerant&&(I.errors=T.errorHandler.errors),I}r.parse=v;function p(d,a,o){var f=a||{};return f.sourceType="module",v(d,f,o)}r.parseModule=p;function m(d,a,o){var f=a||{};return f.sourceType="script",v(d,f,o)}r.parseScript=m;function h(d,a,o){var f=new l.Tokenizer(d,a),x;x=[];try{for(;;){var y=f.getNextToken();if(!y)break;o&&(y=o(y)),x.push(y)}}catch(E){f.errorHandler.tolerate(E)}return f.errorHandler.tolerant&&(x.errors=f.errors()),x}r.tokenize=h;var g=i(2);r.Syntax=g.Syntax,r.version="4.0.1"},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(2),u=(function(){function c(){this.attach=!1,this.comments=[],this.stack=[],this.leading=[],this.trailing=[]}return c.prototype.insertInnerComments=function(l,v){if(l.type===s.Syntax.BlockStatement&&l.body.length===0){for(var p=[],m=this.leading.length-1;m>=0;--m){var h=this.leading[m];v.end.offset>=h.start&&(p.unshift(h.comment),this.leading.splice(m,1),this.trailing.splice(m,1))}p.length&&(l.innerComments=p)}},c.prototype.findTrailingComments=function(l){var v=[];if(this.trailing.length>0){for(var p=this.trailing.length-1;p>=0;--p){var m=this.trailing[p];m.start>=l.end.offset&&v.unshift(m.comment)}return this.trailing.length=0,v}var h=this.stack[this.stack.length-1];if(h&&h.node.trailingComments){var g=h.node.trailingComments[0];g&&g.range[0]>=l.end.offset&&(v=h.node.trailingComments,delete h.node.trailingComments)}return v},c.prototype.findLeadingComments=function(l){for(var v=[],p;this.stack.length>0;){var m=this.stack[this.stack.length-1];if(m&&m.start>=l.start.offset)p=m.node,this.stack.pop();else break}if(p){for(var h=p.leadingComments?p.leadingComments.length:0,g=h-1;g>=0;--g){var d=p.leadingComments[g];d.range[1]<=l.start.offset&&(v.unshift(d),p.leadingComments.splice(g,1))}return p.leadingComments&&p.leadingComments.length===0&&delete p.leadingComments,v}for(var g=this.leading.length-1;g>=0;--g){var m=this.leading[g];m.start<=l.start.offset&&(v.unshift(m.comment),this.leading.splice(g,1))}return v},c.prototype.visitNode=function(l,v){if(!(l.type===s.Syntax.Program&&l.body.length>0)){this.insertInnerComments(l,v);var p=this.findTrailingComments(v),m=this.findLeadingComments(v);m.length>0&&(l.leadingComments=m),p.length>0&&(l.trailingComments=p),this.stack.push({node:l,start:v.start.offset})}},c.prototype.visitComment=function(l,v){var p=l.type[0]==="L"?"Line":"Block",m={type:p,value:l.value};if(l.range&&(m.range=l.range),l.loc&&(m.loc=l.loc),this.comments.push(m),this.attach){var h={comment:{type:p,value:l.value,range:[v.start.offset,v.end.offset]},start:v.start.offset};l.loc&&(h.comment.loc=l.loc),l.type=p,this.leading.push(h),this.trailing.push(h)}},c.prototype.visit=function(l,v){l.type==="LineComment"?this.visitComment(l,v):l.type==="BlockComment"?this.visitComment(l,v):this.attach&&this.visitNode(l,v)},c})();r.CommentHandler=u},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.Syntax={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DoWhileStatement:"DoWhileStatement",DebuggerStatement:"DebuggerStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForOfStatement:"ForOfStatement",ForInStatement:"ForInStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",Program:"Program",Property:"Property",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchCase:"SwitchCase",SwitchStatement:"SwitchStatement",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"}},function(n,r,i){var s=this&&this.__extends||(function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,f){o.__proto__=f}||function(o,f){for(var x in f)f.hasOwnProperty(x)&&(o[x]=f[x])};return function(o,f){a(o,f);function x(){this.constructor=o}o.prototype=f===null?Object.create(f):(x.prototype=f.prototype,new x)}})();Object.defineProperty(r,"__esModule",{value:!0});var u=i(4),c=i(5),l=i(6),v=i(7),p=i(8),m=i(13),h=i(14);m.TokenName[100]="JSXIdentifier",m.TokenName[101]="JSXText";function g(a){var o;switch(a.type){case l.JSXSyntax.JSXIdentifier:var f=a;o=f.name;break;case l.JSXSyntax.JSXNamespacedName:var x=a;o=g(x.namespace)+":"+g(x.name);break;case l.JSXSyntax.JSXMemberExpression:var y=a;o=g(y.object)+"."+g(y.property);break}return o}var d=(function(a){s(o,a);function o(f,x,y){return a.call(this,f,x,y)||this}return o.prototype.parsePrimaryExpression=function(){return this.match("<")?this.parseJSXRoot():a.prototype.parsePrimaryExpression.call(this)},o.prototype.startJSX=function(){this.scanner.index=this.startMarker.index,this.scanner.lineNumber=this.startMarker.line,this.scanner.lineStart=this.startMarker.index-this.startMarker.column},o.prototype.finishJSX=function(){this.nextToken()},o.prototype.reenterJSX=function(){this.startJSX(),this.expectJSX("}"),this.config.tokens&&this.tokens.pop()},o.prototype.createJSXNode=function(){return this.collectComments(),{index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}},o.prototype.createJSXChildNode=function(){return{index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}},o.prototype.scanXHTMLEntity=function(f){for(var x="&",y=!0,E=!1,_=!1,S=!1;!this.scanner.eof()&&y&&!E;){var T=this.scanner.source[this.scanner.index];if(T===f)break;if(E=T===";",x+=T,++this.scanner.index,!E)switch(x.length){case 2:_=T==="#";break;case 3:_&&(S=T==="x",y=S||u.Character.isDecimalDigit(T.charCodeAt(0)),_=_&&!S);break;default:y=y&&!(_&&!u.Character.isDecimalDigit(T.charCodeAt(0))),y=y&&!(S&&!u.Character.isHexDigit(T.charCodeAt(0)));break}}if(y&&E&&x.length>2){var A=x.substr(1,x.length-2);_&&A.length>1?x=String.fromCharCode(parseInt(A.substr(1),10)):S&&A.length>2?x=String.fromCharCode(parseInt("0"+A.substr(1),16)):!_&&!S&&h.XHTMLEntities[A]&&(x=h.XHTMLEntities[A])}return x},o.prototype.lexJSX=function(){var f=this.scanner.source.charCodeAt(this.scanner.index);if(f===60||f===62||f===47||f===58||f===61||f===123||f===125){var x=this.scanner.source[this.scanner.index++];return{type:7,value:x,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:this.scanner.index-1,end:this.scanner.index}}if(f===34||f===39){for(var y=this.scanner.index,E=this.scanner.source[this.scanner.index++],_="";!this.scanner.eof();){var S=this.scanner.source[this.scanner.index++];if(S===E)break;S==="&"?_+=this.scanXHTMLEntity(E):_+=S}return{type:8,value:_,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:y,end:this.scanner.index}}if(f===46){var T=this.scanner.source.charCodeAt(this.scanner.index+1),A=this.scanner.source.charCodeAt(this.scanner.index+2),x=T===46&&A===46?"...":".",y=this.scanner.index;return this.scanner.index+=x.length,{type:7,value:x,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:y,end:this.scanner.index}}if(f===96)return{type:10,value:"",lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:this.scanner.index,end:this.scanner.index};if(u.Character.isIdentifierStart(f)&&f!==92){var y=this.scanner.index;for(++this.scanner.index;!this.scanner.eof();){var S=this.scanner.source.charCodeAt(this.scanner.index);if(u.Character.isIdentifierPart(S)&&S!==92)++this.scanner.index;else if(S===45)++this.scanner.index;else break}var I=this.scanner.source.slice(y,this.scanner.index);return{type:100,value:I,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:y,end:this.scanner.index}}return this.scanner.lex()},o.prototype.nextJSXToken=function(){this.collectComments(),this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart;var f=this.lexJSX();return this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart,this.config.tokens&&this.tokens.push(this.convertToken(f)),f},o.prototype.nextJSXText=function(){this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart;for(var f=this.scanner.index,x="";!this.scanner.eof();){var y=this.scanner.source[this.scanner.index];if(y==="{"||y==="<")break;++this.scanner.index,x+=y,u.Character.isLineTerminator(y.charCodeAt(0))&&(++this.scanner.lineNumber,y==="\r"&&this.scanner.source[this.scanner.index]===`
`&&++this.scanner.index,this.scanner.lineStart=this.scanner.index)}this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart;var E={type:101,value:x,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:f,end:this.scanner.index};return x.length>0&&this.config.tokens&&this.tokens.push(this.convertToken(E)),E},o.prototype.peekJSXToken=function(){var f=this.scanner.saveState();this.scanner.scanComments();var x=this.lexJSX();return this.scanner.restoreState(f),x},o.prototype.expectJSX=function(f){var x=this.nextJSXToken();(x.type!==7||x.value!==f)&&this.throwUnexpectedToken(x)},o.prototype.matchJSX=function(f){var x=this.peekJSXToken();return x.type===7&&x.value===f},o.prototype.parseJSXIdentifier=function(){var f=this.createJSXNode(),x=this.nextJSXToken();return x.type!==100&&this.throwUnexpectedToken(x),this.finalize(f,new c.JSXIdentifier(x.value))},o.prototype.parseJSXElementName=function(){var f=this.createJSXNode(),x=this.parseJSXIdentifier();if(this.matchJSX(":")){var y=x;this.expectJSX(":");var E=this.parseJSXIdentifier();x=this.finalize(f,new c.JSXNamespacedName(y,E))}else if(this.matchJSX("."))for(;this.matchJSX(".");){var _=x;this.expectJSX(".");var S=this.parseJSXIdentifier();x=this.finalize(f,new c.JSXMemberExpression(_,S))}return x},o.prototype.parseJSXAttributeName=function(){var f=this.createJSXNode(),x,y=this.parseJSXIdentifier();if(this.matchJSX(":")){var E=y;this.expectJSX(":");var _=this.parseJSXIdentifier();x=this.finalize(f,new c.JSXNamespacedName(E,_))}else x=y;return x},o.prototype.parseJSXStringLiteralAttribute=function(){var f=this.createJSXNode(),x=this.nextJSXToken();x.type!==8&&this.throwUnexpectedToken(x);var y=this.getTokenRaw(x);return this.finalize(f,new v.Literal(x.value,y))},o.prototype.parseJSXExpressionAttribute=function(){var f=this.createJSXNode();this.expectJSX("{"),this.finishJSX(),this.match("}")&&this.tolerateError("JSX attributes must only be assigned a non-empty expression");var x=this.parseAssignmentExpression();return this.reenterJSX(),this.finalize(f,new c.JSXExpressionContainer(x))},o.prototype.parseJSXAttributeValue=function(){return this.matchJSX("{")?this.parseJSXExpressionAttribute():this.matchJSX("<")?this.parseJSXElement():this.parseJSXStringLiteralAttribute()},o.prototype.parseJSXNameValueAttribute=function(){var f=this.createJSXNode(),x=this.parseJSXAttributeName(),y=null;return this.matchJSX("=")&&(this.expectJSX("="),y=this.parseJSXAttributeValue()),this.finalize(f,new c.JSXAttribute(x,y))},o.prototype.parseJSXSpreadAttribute=function(){var f=this.createJSXNode();this.expectJSX("{"),this.expectJSX("..."),this.finishJSX();var x=this.parseAssignmentExpression();return this.reenterJSX(),this.finalize(f,new c.JSXSpreadAttribute(x))},o.prototype.parseJSXAttributes=function(){for(var f=[];!this.matchJSX("/")&&!this.matchJSX(">");){var x=this.matchJSX("{")?this.parseJSXSpreadAttribute():this.parseJSXNameValueAttribute();f.push(x)}return f},o.prototype.parseJSXOpeningElement=function(){var f=this.createJSXNode();this.expectJSX("<");var x=this.parseJSXElementName(),y=this.parseJSXAttributes(),E=this.matchJSX("/");return E&&this.expectJSX("/"),this.expectJSX(">"),this.finalize(f,new c.JSXOpeningElement(x,E,y))},o.prototype.parseJSXBoundaryElement=function(){var f=this.createJSXNode();if(this.expectJSX("<"),this.matchJSX("/")){this.expectJSX("/");var x=this.parseJSXElementName();return this.expectJSX(">"),this.finalize(f,new c.JSXClosingElement(x))}var y=this.parseJSXElementName(),E=this.parseJSXAttributes(),_=this.matchJSX("/");return _&&this.expectJSX("/"),this.expectJSX(">"),this.finalize(f,new c.JSXOpeningElement(y,_,E))},o.prototype.parseJSXEmptyExpression=function(){var f=this.createJSXChildNode();return this.collectComments(),this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart,this.finalize(f,new c.JSXEmptyExpression)},o.prototype.parseJSXExpressionContainer=function(){var f=this.createJSXNode();this.expectJSX("{");var x;return this.matchJSX("}")?(x=this.parseJSXEmptyExpression(),this.expectJSX("}")):(this.finishJSX(),x=this.parseAssignmentExpression(),this.reenterJSX()),this.finalize(f,new c.JSXExpressionContainer(x))},o.prototype.parseJSXChildren=function(){for(var f=[];!this.scanner.eof();){var x=this.createJSXChildNode(),y=this.nextJSXText();if(y.start<y.end){var E=this.getTokenRaw(y),_=this.finalize(x,new c.JSXText(y.value,E));f.push(_)}if(this.scanner.source[this.scanner.index]==="{"){var S=this.parseJSXExpressionContainer();f.push(S)}else break}return f},o.prototype.parseComplexJSXElement=function(f){for(var x=[];!this.scanner.eof();){f.children=f.children.concat(this.parseJSXChildren());var y=this.createJSXChildNode(),E=this.parseJSXBoundaryElement();if(E.type===l.JSXSyntax.JSXOpeningElement){var _=E;if(_.selfClosing){var S=this.finalize(y,new c.JSXElement(_,[],null));f.children.push(S)}else x.push(f),f={node:y,opening:_,closing:null,children:[]}}if(E.type===l.JSXSyntax.JSXClosingElement){f.closing=E;var T=g(f.opening.name),A=g(f.closing.name);if(T!==A&&this.tolerateError("Expected corresponding JSX closing tag for %0",T),x.length>0){var S=this.finalize(f.node,new c.JSXElement(f.opening,f.children,f.closing));f=x[x.length-1],f.children.push(S),x.pop()}else break}}return f},o.prototype.parseJSXElement=function(){var f=this.createJSXNode(),x=this.parseJSXOpeningElement(),y=[],E=null;if(!x.selfClosing){var _=this.parseComplexJSXElement({node:f,opening:x,closing:E,children:y});y=_.children,E=_.closing}return this.finalize(f,new c.JSXElement(x,y,E))},o.prototype.parseJSXRoot=function(){this.config.tokens&&this.tokens.pop(),this.startJSX();var f=this.parseJSXElement();return this.finishJSX(),f},o.prototype.isStartOfExpression=function(){return a.prototype.isStartOfExpression.call(this)||this.match("<")},o})(p.Parser);r.JSXParser=d},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,NonAsciiIdentifierPart:/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/};r.Character={fromCodePoint:function(s){return s<65536?String.fromCharCode(s):String.fromCharCode(55296+(s-65536>>10))+String.fromCharCode(56320+(s-65536&1023))},isWhiteSpace:function(s){return s===32||s===9||s===11||s===12||s===160||s>=5760&&[5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279].indexOf(s)>=0},isLineTerminator:function(s){return s===10||s===13||s===8232||s===8233},isIdentifierStart:function(s){return s===36||s===95||s>=65&&s<=90||s>=97&&s<=122||s===92||s>=128&&i.NonAsciiIdentifierStart.test(r.Character.fromCodePoint(s))},isIdentifierPart:function(s){return s===36||s===95||s>=65&&s<=90||s>=97&&s<=122||s>=48&&s<=57||s===92||s>=128&&i.NonAsciiIdentifierPart.test(r.Character.fromCodePoint(s))},isDecimalDigit:function(s){return s>=48&&s<=57},isHexDigit:function(s){return s>=48&&s<=57||s>=65&&s<=70||s>=97&&s<=102},isOctalDigit:function(s){return s>=48&&s<=55}}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(6),u=(function(){function f(x){this.type=s.JSXSyntax.JSXClosingElement,this.name=x}return f})();r.JSXClosingElement=u;var c=(function(){function f(x,y,E){this.type=s.JSXSyntax.JSXElement,this.openingElement=x,this.children=y,this.closingElement=E}return f})();r.JSXElement=c;var l=(function(){function f(){this.type=s.JSXSyntax.JSXEmptyExpression}return f})();r.JSXEmptyExpression=l;var v=(function(){function f(x){this.type=s.JSXSyntax.JSXExpressionContainer,this.expression=x}return f})();r.JSXExpressionContainer=v;var p=(function(){function f(x){this.type=s.JSXSyntax.JSXIdentifier,this.name=x}return f})();r.JSXIdentifier=p;var m=(function(){function f(x,y){this.type=s.JSXSyntax.JSXMemberExpression,this.object=x,this.property=y}return f})();r.JSXMemberExpression=m;var h=(function(){function f(x,y){this.type=s.JSXSyntax.JSXAttribute,this.name=x,this.value=y}return f})();r.JSXAttribute=h;var g=(function(){function f(x,y){this.type=s.JSXSyntax.JSXNamespacedName,this.namespace=x,this.name=y}return f})();r.JSXNamespacedName=g;var d=(function(){function f(x,y,E){this.type=s.JSXSyntax.JSXOpeningElement,this.name=x,this.selfClosing=y,this.attributes=E}return f})();r.JSXOpeningElement=d;var a=(function(){function f(x){this.type=s.JSXSyntax.JSXSpreadAttribute,this.argument=x}return f})();r.JSXSpreadAttribute=a;var o=(function(){function f(x,y){this.type=s.JSXSyntax.JSXText,this.value=x,this.raw=y}return f})();r.JSXText=o},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.JSXSyntax={JSXAttribute:"JSXAttribute",JSXClosingElement:"JSXClosingElement",JSXElement:"JSXElement",JSXEmptyExpression:"JSXEmptyExpression",JSXExpressionContainer:"JSXExpressionContainer",JSXIdentifier:"JSXIdentifier",JSXMemberExpression:"JSXMemberExpression",JSXNamespacedName:"JSXNamespacedName",JSXOpeningElement:"JSXOpeningElement",JSXSpreadAttribute:"JSXSpreadAttribute",JSXText:"JSXText"}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(2),u=(function(){function M(R){this.type=s.Syntax.ArrayExpression,this.elements=R}return M})();r.ArrayExpression=u;var c=(function(){function M(R){this.type=s.Syntax.ArrayPattern,this.elements=R}return M})();r.ArrayPattern=c;var l=(function(){function M(R,H,me){this.type=s.Syntax.ArrowFunctionExpression,this.id=null,this.params=R,this.body=H,this.generator=!1,this.expression=me,this.async=!1}return M})();r.ArrowFunctionExpression=l;var v=(function(){function M(R,H,me){this.type=s.Syntax.AssignmentExpression,this.operator=R,this.left=H,this.right=me}return M})();r.AssignmentExpression=v;var p=(function(){function M(R,H){this.type=s.Syntax.AssignmentPattern,this.left=R,this.right=H}return M})();r.AssignmentPattern=p;var m=(function(){function M(R,H,me){this.type=s.Syntax.ArrowFunctionExpression,this.id=null,this.params=R,this.body=H,this.generator=!1,this.expression=me,this.async=!0}return M})();r.AsyncArrowFunctionExpression=m;var h=(function(){function M(R,H,me){this.type=s.Syntax.FunctionDeclaration,this.id=R,this.params=H,this.body=me,this.generator=!1,this.expression=!1,this.async=!0}return M})();r.AsyncFunctionDeclaration=h;var g=(function(){function M(R,H,me){this.type=s.Syntax.FunctionExpression,this.id=R,this.params=H,this.body=me,this.generator=!1,this.expression=!1,this.async=!0}return M})();r.AsyncFunctionExpression=g;var d=(function(){function M(R){this.type=s.Syntax.AwaitExpression,this.argument=R}return M})();r.AwaitExpression=d;var a=(function(){function M(R,H,me){var Ne=R==="||"||R==="&&";this.type=Ne?s.Syntax.LogicalExpression:s.Syntax.BinaryExpression,this.operator=R,this.left=H,this.right=me}return M})();r.BinaryExpression=a;var o=(function(){function M(R){this.type=s.Syntax.BlockStatement,this.body=R}return M})();r.BlockStatement=o;var f=(function(){function M(R){this.type=s.Syntax.BreakStatement,this.label=R}return M})();r.BreakStatement=f;var x=(function(){function M(R,H){this.type=s.Syntax.CallExpression,this.callee=R,this.arguments=H}return M})();r.CallExpression=x;var y=(function(){function M(R,H){this.type=s.Syntax.CatchClause,this.param=R,this.body=H}return M})();r.CatchClause=y;var E=(function(){function M(R){this.type=s.Syntax.ClassBody,this.body=R}return M})();r.ClassBody=E;var _=(function(){function M(R,H,me){this.type=s.Syntax.ClassDeclaration,this.id=R,this.superClass=H,this.body=me}return M})();r.ClassDeclaration=_;var S=(function(){function M(R,H,me){this.type=s.Syntax.ClassExpression,this.id=R,this.superClass=H,this.body=me}return M})();r.ClassExpression=S;var T=(function(){function M(R,H){this.type=s.Syntax.MemberExpression,this.computed=!0,this.object=R,this.property=H}return M})();r.ComputedMemberExpression=T;var A=(function(){function M(R,H,me){this.type=s.Syntax.ConditionalExpression,this.test=R,this.consequent=H,this.alternate=me}return M})();r.ConditionalExpression=A;var I=(function(){function M(R){this.type=s.Syntax.ContinueStatement,this.label=R}return M})();r.ContinueStatement=I;var N=(function(){function M(){this.type=s.Syntax.DebuggerStatement}return M})();r.DebuggerStatement=N;var F=(function(){function M(R,H){this.type=s.Syntax.ExpressionStatement,this.expression=R,this.directive=H}return M})();r.Directive=F;var P=(function(){function M(R,H){this.type=s.Syntax.DoWhileStatement,this.body=R,this.test=H}return M})();r.DoWhileStatement=P;var U=(function(){function M(){this.type=s.Syntax.EmptyStatement}return M})();r.EmptyStatement=U;var O=(function(){function M(R){this.type=s.Syntax.ExportAllDeclaration,this.source=R}return M})();r.ExportAllDeclaration=O;var V=(function(){function M(R){this.type=s.Syntax.ExportDefaultDeclaration,this.declaration=R}return M})();r.ExportDefaultDeclaration=V;var J=(function(){function M(R,H,me){this.type=s.Syntax.ExportNamedDeclaration,this.declaration=R,this.specifiers=H,this.source=me}return M})();r.ExportNamedDeclaration=J;var z=(function(){function M(R,H){this.type=s.Syntax.ExportSpecifier,this.exported=H,this.local=R}return M})();r.ExportSpecifier=z;var X=(function(){function M(R){this.type=s.Syntax.ExpressionStatement,this.expression=R}return M})();r.ExpressionStatement=X;var Y=(function(){function M(R,H,me){this.type=s.Syntax.ForInStatement,this.left=R,this.right=H,this.body=me,this.each=!1}return M})();r.ForInStatement=Y;var W=(function(){function M(R,H,me){this.type=s.Syntax.ForOfStatement,this.left=R,this.right=H,this.body=me}return M})();r.ForOfStatement=W;var q=(function(){function M(R,H,me,Ne){this.type=s.Syntax.ForStatement,this.init=R,this.test=H,this.update=me,this.body=Ne}return M})();r.ForStatement=q;var re=(function(){function M(R,H,me,Ne){this.type=s.Syntax.FunctionDeclaration,this.id=R,this.params=H,this.body=me,this.generator=Ne,this.expression=!1,this.async=!1}return M})();r.FunctionDeclaration=re;var xe=(function(){function M(R,H,me,Ne){this.type=s.Syntax.FunctionExpression,this.id=R,this.params=H,this.body=me,this.generator=Ne,this.expression=!1,this.async=!1}return M})();r.FunctionExpression=xe;var de=(function(){function M(R){this.type=s.Syntax.Identifier,this.name=R}return M})();r.Identifier=de;var be=(function(){function M(R,H,me){this.type=s.Syntax.IfStatement,this.test=R,this.consequent=H,this.alternate=me}return M})();r.IfStatement=be;var ae=(function(){function M(R,H){this.type=s.Syntax.ImportDeclaration,this.specifiers=R,this.source=H}return M})();r.ImportDeclaration=ae;var ne=(function(){function M(R){this.type=s.Syntax.ImportDefaultSpecifier,this.local=R}return M})();r.ImportDefaultSpecifier=ne;var te=(function(){function M(R){this.type=s.Syntax.ImportNamespaceSpecifier,this.local=R}return M})();r.ImportNamespaceSpecifier=te;var oe=(function(){function M(R,H){this.type=s.Syntax.ImportSpecifier,this.local=R,this.imported=H}return M})();r.ImportSpecifier=oe;var le=(function(){function M(R,H){this.type=s.Syntax.LabeledStatement,this.label=R,this.body=H}return M})();r.LabeledStatement=le;var j=(function(){function M(R,H){this.type=s.Syntax.Literal,this.value=R,this.raw=H}return M})();r.Literal=j;var ee=(function(){function M(R,H){this.type=s.Syntax.MetaProperty,this.meta=R,this.property=H}return M})();r.MetaProperty=ee;var se=(function(){function M(R,H,me,Ne,Ht){this.type=s.Syntax.MethodDefinition,this.key=R,this.computed=H,this.value=me,this.kind=Ne,this.static=Ht}return M})();r.MethodDefinition=se;var ce=(function(){function M(R){this.type=s.Syntax.Program,this.body=R,this.sourceType="module"}return M})();r.Module=ce;var Ie=(function(){function M(R,H){this.type=s.Syntax.NewExpression,this.callee=R,this.arguments=H}return M})();r.NewExpression=Ie;var Me=(function(){function M(R){this.type=s.Syntax.ObjectExpression,this.properties=R}return M})();r.ObjectExpression=Me;var Ae=(function(){function M(R){this.type=s.Syntax.ObjectPattern,this.properties=R}return M})();r.ObjectPattern=Ae;var Ue=(function(){function M(R,H,me,Ne,Ht,Br){this.type=s.Syntax.Property,this.key=H,this.computed=me,this.value=Ne,this.kind=R,this.method=Ht,this.shorthand=Br}return M})();r.Property=Ue;var fe=(function(){function M(R,H,me,Ne){this.type=s.Syntax.Literal,this.value=R,this.raw=H,this.regex={pattern:me,flags:Ne}}return M})();r.RegexLiteral=fe;var Z=(function(){function M(R){this.type=s.Syntax.RestElement,this.argument=R}return M})();r.RestElement=Z;var ue=(function(){function M(R){this.type=s.Syntax.ReturnStatement,this.argument=R}return M})();r.ReturnStatement=ue;var $=(function(){function M(R){this.type=s.Syntax.Program,this.body=R,this.sourceType="script"}return M})();r.Script=$;var we=(function(){function M(R){this.type=s.Syntax.SequenceExpression,this.expressions=R}return M})();r.SequenceExpression=we;var Ve=(function(){function M(R){this.type=s.Syntax.SpreadElement,this.argument=R}return M})();r.SpreadElement=Ve;var _e=(function(){function M(R,H){this.type=s.Syntax.MemberExpression,this.computed=!1,this.object=R,this.property=H}return M})();r.StaticMemberExpression=_e;var Se=(function(){function M(){this.type=s.Syntax.Super}return M})();r.Super=Se;var D=(function(){function M(R,H){this.type=s.Syntax.SwitchCase,this.test=R,this.consequent=H}return M})();r.SwitchCase=D;var b=(function(){function M(R,H){this.type=s.Syntax.SwitchStatement,this.discriminant=R,this.cases=H}return M})();r.SwitchStatement=b;var w=(function(){function M(R,H){this.type=s.Syntax.TaggedTemplateExpression,this.tag=R,this.quasi=H}return M})();r.TaggedTemplateExpression=w;var C=(function(){function M(R,H){this.type=s.Syntax.TemplateElement,this.value=R,this.tail=H}return M})();r.TemplateElement=C;var k=(function(){function M(R,H){this.type=s.Syntax.TemplateLiteral,this.quasis=R,this.expressions=H}return M})();r.TemplateLiteral=k;var L=(function(){function M(){this.type=s.Syntax.ThisExpression}return M})();r.ThisExpression=L;var G=(function(){function M(R){this.type=s.Syntax.ThrowStatement,this.argument=R}return M})();r.ThrowStatement=G;var ge=(function(){function M(R,H,me){this.type=s.Syntax.TryStatement,this.block=R,this.handler=H,this.finalizer=me}return M})();r.TryStatement=ge;var Te=(function(){function M(R,H){this.type=s.Syntax.UnaryExpression,this.operator=R,this.argument=H,this.prefix=!0}return M})();r.UnaryExpression=Te;var Ce=(function(){function M(R,H,me){this.type=s.Syntax.UpdateExpression,this.operator=R,this.argument=H,this.prefix=me}return M})();r.UpdateExpression=Ce;var Fe=(function(){function M(R,H){this.type=s.Syntax.VariableDeclaration,this.declarations=R,this.kind=H}return M})();r.VariableDeclaration=Fe;var Ee=(function(){function M(R,H){this.type=s.Syntax.VariableDeclarator,this.id=R,this.init=H}return M})();r.VariableDeclarator=Ee;var Et=(function(){function M(R,H){this.type=s.Syntax.WhileStatement,this.test=R,this.body=H}return M})();r.WhileStatement=Et;var _t=(function(){function M(R,H){this.type=s.Syntax.WithStatement,this.object=R,this.body=H}return M})();r.WithStatement=_t;var St=(function(){function M(R,H){this.type=s.Syntax.YieldExpression,this.argument=R,this.delegate=H}return M})();r.YieldExpression=St},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(9),u=i(10),c=i(11),l=i(7),v=i(12),p=i(2),m=i(13),h="ArrowParameterPlaceHolder",g=(function(){function d(a,o,f){o===void 0&&(o={}),this.config={range:typeof o.range=="boolean"&&o.range,loc:typeof o.loc=="boolean"&&o.loc,source:null,tokens:typeof o.tokens=="boolean"&&o.tokens,comment:typeof o.comment=="boolean"&&o.comment,tolerant:typeof o.tolerant=="boolean"&&o.tolerant},this.config.loc&&o.source&&o.source!==null&&(this.config.source=String(o.source)),this.delegate=f,this.errorHandler=new u.ErrorHandler,this.errorHandler.tolerant=this.config.tolerant,this.scanner=new v.Scanner(a,this.errorHandler),this.scanner.trackComment=this.config.comment,this.operatorPrecedence={")":0,";":0,",":0,"=":0,"]":0,"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":11,"/":11,"%":11},this.lookahead={type:2,value:"",lineNumber:this.scanner.lineNumber,lineStart:0,start:0,end:0},this.hasLineTerminator=!1,this.context={isModule:!1,await:!1,allowIn:!0,allowStrictDirective:!0,allowYield:!0,firstCoverInitializedNameError:null,isAssignmentTarget:!1,isBindingElement:!1,inFunctionBody:!1,inIteration:!1,inSwitch:!1,labelSet:{},strict:!1},this.tokens=[],this.startMarker={index:0,line:this.scanner.lineNumber,column:0},this.lastMarker={index:0,line:this.scanner.lineNumber,column:0},this.nextToken(),this.lastMarker={index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}}return d.prototype.throwError=function(a){var o=Array.prototype.slice.call(arguments,1),f=a.replace(/%(\d)/g,function(_,S){return s.assert(S<o.length,"Message reference must be in range"),o[S]}),x=this.lastMarker.index,y=this.lastMarker.line,E=this.lastMarker.column+1;throw this.errorHandler.createError(x,y,E,f)},d.prototype.tolerateError=function(a){var o=Array.prototype.slice.call(arguments,1),f=a.replace(/%(\d)/g,function(_,S){return s.assert(S<o.length,"Message reference must be in range"),o[S]}),x=this.lastMarker.index,y=this.scanner.lineNumber,E=this.lastMarker.column+1;this.errorHandler.tolerateError(x,y,E,f)},d.prototype.unexpectedTokenError=function(a,o){var f=o||c.Messages.UnexpectedToken,x;if(a?(o||(f=a.type===2?c.Messages.UnexpectedEOS:a.type===3?c.Messages.UnexpectedIdentifier:a.type===6?c.Messages.UnexpectedNumber:a.type===8?c.Messages.UnexpectedString:a.type===10?c.Messages.UnexpectedTemplate:c.Messages.UnexpectedToken,a.type===4&&(this.scanner.isFutureReservedWord(a.value)?f=c.Messages.UnexpectedReserved:this.context.strict&&this.scanner.isStrictModeReservedWord(a.value)&&(f=c.Messages.StrictReservedWord))),x=a.value):x="ILLEGAL",f=f.replace("%0",x),a&&typeof a.lineNumber=="number"){var y=a.start,E=a.lineNumber,_=this.lastMarker.index-this.lastMarker.column,S=a.start-_+1;return this.errorHandler.createError(y,E,S,f)}else{var y=this.lastMarker.index,E=this.lastMarker.line,S=this.lastMarker.column+1;return this.errorHandler.createError(y,E,S,f)}},d.prototype.throwUnexpectedToken=function(a,o){throw this.unexpectedTokenError(a,o)},d.prototype.tolerateUnexpectedToken=function(a,o){this.errorHandler.tolerate(this.unexpectedTokenError(a,o))},d.prototype.collectComments=function(){if(!this.config.comment)this.scanner.scanComments();else{var a=this.scanner.scanComments();if(a.length>0&&this.delegate)for(var o=0;o<a.length;++o){var f=a[o],x=void 0;x={type:f.multiLine?"BlockComment":"LineComment",value:this.scanner.source.slice(f.slice[0],f.slice[1])},this.config.range&&(x.range=f.range),this.config.loc&&(x.loc=f.loc);var y={start:{line:f.loc.start.line,column:f.loc.start.column,offset:f.range[0]},end:{line:f.loc.end.line,column:f.loc.end.column,offset:f.range[1]}};this.delegate(x,y)}}},d.prototype.getTokenRaw=function(a){return this.scanner.source.slice(a.start,a.end)},d.prototype.convertToken=function(a){var o={type:m.TokenName[a.type],value:this.getTokenRaw(a)};if(this.config.range&&(o.range=[a.start,a.end]),this.config.loc&&(o.loc={start:{line:this.startMarker.line,column:this.startMarker.column},end:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}}),a.type===9){var f=a.pattern,x=a.flags;o.regex={pattern:f,flags:x}}return o},d.prototype.nextToken=function(){var a=this.lookahead;this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart,this.collectComments(),this.scanner.index!==this.startMarker.index&&(this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart);var o=this.scanner.lex();return this.hasLineTerminator=a.lineNumber!==o.lineNumber,o&&this.context.strict&&o.type===3&&this.scanner.isStrictModeReservedWord(o.value)&&(o.type=4),this.lookahead=o,this.config.tokens&&o.type!==2&&this.tokens.push(this.convertToken(o)),a},d.prototype.nextRegexToken=function(){this.collectComments();var a=this.scanner.scanRegExp();return this.config.tokens&&(this.tokens.pop(),this.tokens.push(this.convertToken(a))),this.lookahead=a,this.nextToken(),a},d.prototype.createNode=function(){return{index:this.startMarker.index,line:this.startMarker.line,column:this.startMarker.column}},d.prototype.startNode=function(a,o){o===void 0&&(o=0);var f=a.start-a.lineStart,x=a.lineNumber;return f<0&&(f+=o,x--),{index:a.start,line:x,column:f}},d.prototype.finalize=function(a,o){if(this.config.range&&(o.range=[a.index,this.lastMarker.index]),this.config.loc&&(o.loc={start:{line:a.line,column:a.column},end:{line:this.lastMarker.line,column:this.lastMarker.column}},this.config.source&&(o.loc.source=this.config.source)),this.delegate){var f={start:{line:a.line,column:a.column,offset:a.index},end:{line:this.lastMarker.line,column:this.lastMarker.column,offset:this.lastMarker.index}};this.delegate(o,f)}return o},d.prototype.expect=function(a){var o=this.nextToken();(o.type!==7||o.value!==a)&&this.throwUnexpectedToken(o)},d.prototype.expectCommaSeparator=function(){if(this.config.tolerant){var a=this.lookahead;a.type===7&&a.value===","?this.nextToken():a.type===7&&a.value===";"?(this.nextToken(),this.tolerateUnexpectedToken(a)):this.tolerateUnexpectedToken(a,c.Messages.UnexpectedToken)}else this.expect(",")},d.prototype.expectKeyword=function(a){var o=this.nextToken();(o.type!==4||o.value!==a)&&this.throwUnexpectedToken(o)},d.prototype.match=function(a){return this.lookahead.type===7&&this.lookahead.value===a},d.prototype.matchKeyword=function(a){return this.lookahead.type===4&&this.lookahead.value===a},d.prototype.matchContextualKeyword=function(a){return this.lookahead.type===3&&this.lookahead.value===a},d.prototype.matchAssign=function(){if(this.lookahead.type!==7)return!1;var a=this.lookahead.value;return a==="="||a==="*="||a==="**="||a==="/="||a==="%="||a==="+="||a==="-="||a==="<<="||a===">>="||a===">>>="||a==="&="||a==="^="||a==="|="},d.prototype.isolateCoverGrammar=function(a){var o=this.context.isBindingElement,f=this.context.isAssignmentTarget,x=this.context.firstCoverInitializedNameError;this.context.isBindingElement=!0,this.context.isAssignmentTarget=!0,this.context.firstCoverInitializedNameError=null;var y=a.call(this);return this.context.firstCoverInitializedNameError!==null&&this.throwUnexpectedToken(this.context.firstCoverInitializedNameError),this.context.isBindingElement=o,this.context.isAssignmentTarget=f,this.context.firstCoverInitializedNameError=x,y},d.prototype.inheritCoverGrammar=function(a){var o=this.context.isBindingElement,f=this.context.isAssignmentTarget,x=this.context.firstCoverInitializedNameError;this.context.isBindingElement=!0,this.context.isAssignmentTarget=!0,this.context.firstCoverInitializedNameError=null;var y=a.call(this);return this.context.isBindingElement=this.context.isBindingElement&&o,this.context.isAssignmentTarget=this.context.isAssignmentTarget&&f,this.context.firstCoverInitializedNameError=x||this.context.firstCoverInitializedNameError,y},d.prototype.consumeSemicolon=function(){this.match(";")?this.nextToken():this.hasLineTerminator||(this.lookahead.type!==2&&!this.match("}")&&this.throwUnexpectedToken(this.lookahead),this.lastMarker.index=this.startMarker.index,this.lastMarker.line=this.startMarker.line,this.lastMarker.column=this.startMarker.column)},d.prototype.parsePrimaryExpression=function(){var a=this.createNode(),o,f,x;switch(this.lookahead.type){case 3:(this.context.isModule||this.context.await)&&this.lookahead.value==="await"&&this.tolerateUnexpectedToken(this.lookahead),o=this.matchAsyncFunction()?this.parseFunctionExpression():this.finalize(a,new l.Identifier(this.nextToken().value));break;case 6:case 8:this.context.strict&&this.lookahead.octal&&this.tolerateUnexpectedToken(this.lookahead,c.Messages.StrictOctalLiteral),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,f=this.nextToken(),x=this.getTokenRaw(f),o=this.finalize(a,new l.Literal(f.value,x));break;case 1:this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,f=this.nextToken(),x=this.getTokenRaw(f),o=this.finalize(a,new l.Literal(f.value==="true",x));break;case 5:this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,f=this.nextToken(),x=this.getTokenRaw(f),o=this.finalize(a,new l.Literal(null,x));break;case 10:o=this.parseTemplateLiteral();break;case 7:switch(this.lookahead.value){case"(":this.context.isBindingElement=!1,o=this.inheritCoverGrammar(this.parseGroupExpression);break;case"[":o=this.inheritCoverGrammar(this.parseArrayInitializer);break;case"{":o=this.inheritCoverGrammar(this.parseObjectInitializer);break;case"/":case"/=":this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,this.scanner.index=this.startMarker.index,f=this.nextRegexToken(),x=this.getTokenRaw(f),o=this.finalize(a,new l.RegexLiteral(f.regex,x,f.pattern,f.flags));break;default:o=this.throwUnexpectedToken(this.nextToken())}break;case 4:!this.context.strict&&this.context.allowYield&&this.matchKeyword("yield")?o=this.parseIdentifierName():!this.context.strict&&this.matchKeyword("let")?o=this.finalize(a,new l.Identifier(this.nextToken().value)):(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,this.matchKeyword("function")?o=this.parseFunctionExpression():this.matchKeyword("this")?(this.nextToken(),o=this.finalize(a,new l.ThisExpression)):this.matchKeyword("class")?o=this.parseClassExpression():o=this.throwUnexpectedToken(this.nextToken()));break;default:o=this.throwUnexpectedToken(this.nextToken())}return o},d.prototype.parseSpreadElement=function(){var a=this.createNode();this.expect("...");var o=this.inheritCoverGrammar(this.parseAssignmentExpression);return this.finalize(a,new l.SpreadElement(o))},d.prototype.parseArrayInitializer=function(){var a=this.createNode(),o=[];for(this.expect("[");!this.match("]");)if(this.match(","))this.nextToken(),o.push(null);else if(this.match("...")){var f=this.parseSpreadElement();this.match("]")||(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,this.expect(",")),o.push(f)}else o.push(this.inheritCoverGrammar(this.parseAssignmentExpression)),this.match("]")||this.expect(",");return this.expect("]"),this.finalize(a,new l.ArrayExpression(o))},d.prototype.parsePropertyMethod=function(a){this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;var o=this.context.strict,f=this.context.allowStrictDirective;this.context.allowStrictDirective=a.simple;var x=this.isolateCoverGrammar(this.parseFunctionSourceElements);return this.context.strict&&a.firstRestricted&&this.tolerateUnexpectedToken(a.firstRestricted,a.message),this.context.strict&&a.stricted&&this.tolerateUnexpectedToken(a.stricted,a.message),this.context.strict=o,this.context.allowStrictDirective=f,x},d.prototype.parsePropertyMethodFunction=function(){var a=!1,o=this.createNode(),f=this.context.allowYield;this.context.allowYield=!0;var x=this.parseFormalParameters(),y=this.parsePropertyMethod(x);return this.context.allowYield=f,this.finalize(o,new l.FunctionExpression(null,x.params,y,a))},d.prototype.parsePropertyMethodAsyncFunction=function(){var a=this.createNode(),o=this.context.allowYield,f=this.context.await;this.context.allowYield=!1,this.context.await=!0;var x=this.parseFormalParameters(),y=this.parsePropertyMethod(x);return this.context.allowYield=o,this.context.await=f,this.finalize(a,new l.AsyncFunctionExpression(null,x.params,y))},d.prototype.parseObjectPropertyKey=function(){var a=this.createNode(),o=this.nextToken(),f;switch(o.type){case 8:case 6:this.context.strict&&o.octal&&this.tolerateUnexpectedToken(o,c.Messages.StrictOctalLiteral);var x=this.getTokenRaw(o);f=this.finalize(a,new l.Literal(o.value,x));break;case 3:case 1:case 5:case 4:f=this.finalize(a,new l.Identifier(o.value));break;case 7:o.value==="["?(f=this.isolateCoverGrammar(this.parseAssignmentExpression),this.expect("]")):f=this.throwUnexpectedToken(o);break;default:f=this.throwUnexpectedToken(o)}return f},d.prototype.isPropertyKey=function(a,o){return a.type===p.Syntax.Identifier&&a.name===o||a.type===p.Syntax.Literal&&a.value===o},d.prototype.parseObjectProperty=function(a){var o=this.createNode(),f=this.lookahead,x,y=null,E=null,_=!1,S=!1,T=!1,A=!1;if(f.type===3){var I=f.value;this.nextToken(),_=this.match("["),A=!this.hasLineTerminator&&I==="async"&&!this.match(":")&&!this.match("(")&&!this.match("*")&&!this.match(","),y=A?this.parseObjectPropertyKey():this.finalize(o,new l.Identifier(I))}else this.match("*")?this.nextToken():(_=this.match("["),y=this.parseObjectPropertyKey());var N=this.qualifiedPropertyName(this.lookahead);if(f.type===3&&!A&&f.value==="get"&&N)x="get",_=this.match("["),y=this.parseObjectPropertyKey(),this.context.allowYield=!1,E=this.parseGetterMethod();else if(f.type===3&&!A&&f.value==="set"&&N)x="set",_=this.match("["),y=this.parseObjectPropertyKey(),E=this.parseSetterMethod();else if(f.type===7&&f.value==="*"&&N)x="init",_=this.match("["),y=this.parseObjectPropertyKey(),E=this.parseGeneratorMethod(),S=!0;else if(y||this.throwUnexpectedToken(this.lookahead),x="init",this.match(":")&&!A)!_&&this.isPropertyKey(y,"__proto__")&&(a.value&&this.tolerateError(c.Messages.DuplicateProtoProperty),a.value=!0),this.nextToken(),E=this.inheritCoverGrammar(this.parseAssignmentExpression);else if(this.match("("))E=A?this.parsePropertyMethodAsyncFunction():this.parsePropertyMethodFunction(),S=!0;else if(f.type===3){var I=this.finalize(o,new l.Identifier(f.value));if(this.match("=")){this.context.firstCoverInitializedNameError=this.lookahead,this.nextToken(),T=!0;var F=this.isolateCoverGrammar(this.parseAssignmentExpression);E=this.finalize(o,new l.AssignmentPattern(I,F))}else T=!0,E=I}else this.throwUnexpectedToken(this.nextToken());return this.finalize(o,new l.Property(x,y,_,E,S,T))},d.prototype.parseObjectInitializer=function(){var a=this.createNode();this.expect("{");for(var o=[],f={value:!1};!this.match("}");)o.push(this.parseObjectProperty(f)),this.match("}")||this.expectCommaSeparator();return this.expect("}"),this.finalize(a,new l.ObjectExpression(o))},d.prototype.parseTemplateHead=function(){s.assert(this.lookahead.head,"Template literal must start with a template head");var a=this.createNode(),o=this.nextToken(),f=o.value,x=o.cooked;return this.finalize(a,new l.TemplateElement({raw:f,cooked:x},o.tail))},d.prototype.parseTemplateElement=function(){this.lookahead.type!==10&&this.throwUnexpectedToken();var a=this.createNode(),o=this.nextToken(),f=o.value,x=o.cooked;return this.finalize(a,new l.TemplateElement({raw:f,cooked:x},o.tail))},d.prototype.parseTemplateLiteral=function(){var a=this.createNode(),o=[],f=[],x=this.parseTemplateHead();for(f.push(x);!x.tail;)o.push(this.parseExpression()),x=this.parseTemplateElement(),f.push(x);return this.finalize(a,new l.TemplateLiteral(f,o))},d.prototype.reinterpretExpressionAsPattern=function(a){switch(a.type){case p.Syntax.Identifier:case p.Syntax.MemberExpression:case p.Syntax.RestElement:case p.Syntax.AssignmentPattern:break;case p.Syntax.SpreadElement:a.type=p.Syntax.RestElement,this.reinterpretExpressionAsPattern(a.argument);break;case p.Syntax.ArrayExpression:a.type=p.Syntax.ArrayPattern;for(var o=0;o<a.elements.length;o++)a.elements[o]!==null&&this.reinterpretExpressionAsPattern(a.elements[o]);break;case p.Syntax.ObjectExpression:a.type=p.Syntax.ObjectPattern;for(var o=0;o<a.properties.length;o++)this.reinterpretExpressionAsPattern(a.properties[o].value);break;case p.Syntax.AssignmentExpression:a.type=p.Syntax.AssignmentPattern,delete a.operator,this.reinterpretExpressionAsPattern(a.left);break}},d.prototype.parseGroupExpression=function(){var a;if(this.expect("("),this.match(")"))this.nextToken(),this.match("=>")||this.expect("=>"),a={type:h,params:[],async:!1};else{var o=this.lookahead,f=[];if(this.match("..."))a=this.parseRestElement(f),this.expect(")"),this.match("=>")||this.expect("=>"),a={type:h,params:[a],async:!1};else{var x=!1;if(this.context.isBindingElement=!0,a=this.inheritCoverGrammar(this.parseAssignmentExpression),this.match(",")){var y=[];for(this.context.isAssignmentTarget=!1,y.push(a);this.lookahead.type!==2&&this.match(",");){if(this.nextToken(),this.match(")")){this.nextToken();for(var E=0;E<y.length;E++)this.reinterpretExpressionAsPattern(y[E]);x=!0,a={type:h,params:y,async:!1}}else if(this.match("...")){this.context.isBindingElement||this.throwUnexpectedToken(this.lookahead),y.push(this.parseRestElement(f)),this.expect(")"),this.match("=>")||this.expect("=>"),this.context.isBindingElement=!1;for(var E=0;E<y.length;E++)this.reinterpretExpressionAsPattern(y[E]);x=!0,a={type:h,params:y,async:!1}}else y.push(this.inheritCoverGrammar(this.parseAssignmentExpression));if(x)break}x||(a=this.finalize(this.startNode(o),new l.SequenceExpression(y)))}if(!x){if(this.expect(")"),this.match("=>")&&(a.type===p.Syntax.Identifier&&a.name==="yield"&&(x=!0,a={type:h,params:[a],async:!1}),!x)){if(this.context.isBindingElement||this.throwUnexpectedToken(this.lookahead),a.type===p.Syntax.SequenceExpression)for(var E=0;E<a.expressions.length;E++)this.reinterpretExpressionAsPattern(a.expressions[E]);else this.reinterpretExpressionAsPattern(a);var _=a.type===p.Syntax.SequenceExpression?a.expressions:[a];a={type:h,params:_,async:!1}}this.context.isBindingElement=!1}}}return a},d.prototype.parseArguments=function(){this.expect("(");var a=[];if(!this.match(")"))for(;;){var o=this.match("...")?this.parseSpreadElement():this.isolateCoverGrammar(this.parseAssignmentExpression);if(a.push(o),this.match(")")||(this.expectCommaSeparator(),this.match(")")))break}return this.expect(")"),a},d.prototype.isIdentifierName=function(a){return a.type===3||a.type===4||a.type===1||a.type===5},d.prototype.parseIdentifierName=function(){var a=this.createNode(),o=this.nextToken();return this.isIdentifierName(o)||this.throwUnexpectedToken(o),this.finalize(a,new l.Identifier(o.value))},d.prototype.parseNewExpression=function(){var a=this.createNode(),o=this.parseIdentifierName();s.assert(o.name==="new","New expression must start with `new`");var f;if(this.match("."))if(this.nextToken(),this.lookahead.type===3&&this.context.inFunctionBody&&this.lookahead.value==="target"){var x=this.parseIdentifierName();f=new l.MetaProperty(o,x)}else this.throwUnexpectedToken(this.lookahead);else{var y=this.isolateCoverGrammar(this.parseLeftHandSideExpression),E=this.match("(")?this.parseArguments():[];f=new l.NewExpression(y,E),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}return this.finalize(a,f)},d.prototype.parseAsyncArgument=function(){var a=this.parseAssignmentExpression();return this.context.firstCoverInitializedNameError=null,a},d.prototype.parseAsyncArguments=function(){this.expect("(");var a=[];if(!this.match(")"))for(;;){var o=this.match("...")?this.parseSpreadElement():this.isolateCoverGrammar(this.parseAsyncArgument);if(a.push(o),this.match(")")||(this.expectCommaSeparator(),this.match(")")))break}return this.expect(")"),a},d.prototype.parseLeftHandSideExpressionAllowCall=function(){var a=this.lookahead,o=this.matchContextualKeyword("async"),f=this.context.allowIn;this.context.allowIn=!0;var x;for(this.matchKeyword("super")&&this.context.inFunctionBody?(x=this.createNode(),this.nextToken(),x=this.finalize(x,new l.Super),!this.match("(")&&!this.match(".")&&!this.match("[")&&this.throwUnexpectedToken(this.lookahead)):x=this.inheritCoverGrammar(this.matchKeyword("new")?this.parseNewExpression:this.parsePrimaryExpression);;)if(this.match(".")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect(".");var y=this.parseIdentifierName();x=this.finalize(this.startNode(a),new l.StaticMemberExpression(x,y))}else if(this.match("(")){var E=o&&a.lineNumber===this.lookahead.lineNumber;this.context.isBindingElement=!1,this.context.isAssignmentTarget=!1;var _=E?this.parseAsyncArguments():this.parseArguments();if(x=this.finalize(this.startNode(a),new l.CallExpression(x,_)),E&&this.match("=>")){for(var S=0;S<_.length;++S)this.reinterpretExpressionAsPattern(_[S]);x={type:h,params:_,async:!0}}}else if(this.match("[")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("[");var y=this.isolateCoverGrammar(this.parseExpression);this.expect("]"),x=this.finalize(this.startNode(a),new l.ComputedMemberExpression(x,y))}else if(this.lookahead.type===10&&this.lookahead.head){var T=this.parseTemplateLiteral();x=this.finalize(this.startNode(a),new l.TaggedTemplateExpression(x,T))}else break;return this.context.allowIn=f,x},d.prototype.parseSuper=function(){var a=this.createNode();return this.expectKeyword("super"),!this.match("[")&&!this.match(".")&&this.throwUnexpectedToken(this.lookahead),this.finalize(a,new l.Super)},d.prototype.parseLeftHandSideExpression=function(){s.assert(this.context.allowIn,"callee of new expression always allow in keyword.");for(var a=this.startNode(this.lookahead),o=this.matchKeyword("super")&&this.context.inFunctionBody?this.parseSuper():this.inheritCoverGrammar(this.matchKeyword("new")?this.parseNewExpression:this.parsePrimaryExpression);;)if(this.match("[")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("[");var f=this.isolateCoverGrammar(this.parseExpression);this.expect("]"),o=this.finalize(a,new l.ComputedMemberExpression(o,f))}else if(this.match(".")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect(".");var f=this.parseIdentifierName();o=this.finalize(a,new l.StaticMemberExpression(o,f))}else if(this.lookahead.type===10&&this.lookahead.head){var x=this.parseTemplateLiteral();o=this.finalize(a,new l.TaggedTemplateExpression(o,x))}else break;return o},d.prototype.parseUpdateExpression=function(){var a,o=this.lookahead;if(this.match("++")||this.match("--")){var f=this.startNode(o),x=this.nextToken();a=this.inheritCoverGrammar(this.parseUnaryExpression),this.context.strict&&a.type===p.Syntax.Identifier&&this.scanner.isRestrictedWord(a.name)&&this.tolerateError(c.Messages.StrictLHSPrefix),this.context.isAssignmentTarget||this.tolerateError(c.Messages.InvalidLHSInAssignment);var y=!0;a=this.finalize(f,new l.UpdateExpression(x.value,a,y)),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}else if(a=this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall),!this.hasLineTerminator&&this.lookahead.type===7&&(this.match("++")||this.match("--"))){this.context.strict&&a.type===p.Syntax.Identifier&&this.scanner.isRestrictedWord(a.name)&&this.tolerateError(c.Messages.StrictLHSPostfix),this.context.isAssignmentTarget||this.tolerateError(c.Messages.InvalidLHSInAssignment),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;var E=this.nextToken().value,y=!1;a=this.finalize(this.startNode(o),new l.UpdateExpression(E,a,y))}return a},d.prototype.parseAwaitExpression=function(){var a=this.createNode();this.nextToken();var o=this.parseUnaryExpression();return this.finalize(a,new l.AwaitExpression(o))},d.prototype.parseUnaryExpression=function(){var a;if(this.match("+")||this.match("-")||this.match("~")||this.match("!")||this.matchKeyword("delete")||this.matchKeyword("void")||this.matchKeyword("typeof")){var o=this.startNode(this.lookahead),f=this.nextToken();a=this.inheritCoverGrammar(this.parseUnaryExpression),a=this.finalize(o,new l.UnaryExpression(f.value,a)),this.context.strict&&a.operator==="delete"&&a.argument.type===p.Syntax.Identifier&&this.tolerateError(c.Messages.StrictDelete),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}else this.context.await&&this.matchContextualKeyword("await")?a=this.parseAwaitExpression():a=this.parseUpdateExpression();return a},d.prototype.parseExponentiationExpression=function(){var a=this.lookahead,o=this.inheritCoverGrammar(this.parseUnaryExpression);if(o.type!==p.Syntax.UnaryExpression&&this.match("**")){this.nextToken(),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;var f=o,x=this.isolateCoverGrammar(this.parseExponentiationExpression);o=this.finalize(this.startNode(a),new l.BinaryExpression("**",f,x))}return o},d.prototype.binaryPrecedence=function(a){var o=a.value,f;return a.type===7?f=this.operatorPrecedence[o]||0:a.type===4?f=o==="instanceof"||this.context.allowIn&&o==="in"?7:0:f=0,f},d.prototype.parseBinaryExpression=function(){var a=this.lookahead,o=this.inheritCoverGrammar(this.parseExponentiationExpression),f=this.lookahead,x=this.binaryPrecedence(f);if(x>0){this.nextToken(),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;for(var y=[a,this.lookahead],E=o,_=this.isolateCoverGrammar(this.parseExponentiationExpression),S=[E,f.value,_],T=[x];x=this.binaryPrecedence(this.lookahead),!(x<=0);){for(;S.length>2&&x<=T[T.length-1];){_=S.pop();var A=S.pop();T.pop(),E=S.pop(),y.pop();var I=this.startNode(y[y.length-1]);S.push(this.finalize(I,new l.BinaryExpression(A,E,_)))}S.push(this.nextToken().value),T.push(x),y.push(this.lookahead),S.push(this.isolateCoverGrammar(this.parseExponentiationExpression))}var N=S.length-1;o=S[N];for(var F=y.pop();N>1;){var P=y.pop(),U=F&&F.lineStart,I=this.startNode(P,U),A=S[N-1];o=this.finalize(I,new l.BinaryExpression(A,S[N-2],o)),N-=2,F=P}}return o},d.prototype.parseConditionalExpression=function(){var a=this.lookahead,o=this.inheritCoverGrammar(this.parseBinaryExpression);if(this.match("?")){this.nextToken();var f=this.context.allowIn;this.context.allowIn=!0;var x=this.isolateCoverGrammar(this.parseAssignmentExpression);this.context.allowIn=f,this.expect(":");var y=this.isolateCoverGrammar(this.parseAssignmentExpression);o=this.finalize(this.startNode(a),new l.ConditionalExpression(o,x,y)),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}return o},d.prototype.checkPatternParam=function(a,o){switch(o.type){case p.Syntax.Identifier:this.validateParam(a,o,o.name);break;case p.Syntax.RestElement:this.checkPatternParam(a,o.argument);break;case p.Syntax.AssignmentPattern:this.checkPatternParam(a,o.left);break;case p.Syntax.ArrayPattern:for(var f=0;f<o.elements.length;f++)o.elements[f]!==null&&this.checkPatternParam(a,o.elements[f]);break;case p.Syntax.ObjectPattern:for(var f=0;f<o.properties.length;f++)this.checkPatternParam(a,o.properties[f].value);break}a.simple=a.simple&&o instanceof l.Identifier},d.prototype.reinterpretAsCoverFormalsList=function(a){var o=[a],f,x=!1;switch(a.type){case p.Syntax.Identifier:break;case h:o=a.params,x=a.async;break;default:return null}f={simple:!0,paramSet:{}};for(var y=0;y<o.length;++y){var E=o[y];E.type===p.Syntax.AssignmentPattern?E.right.type===p.Syntax.YieldExpression&&(E.right.argument&&this.throwUnexpectedToken(this.lookahead),E.right.type=p.Syntax.Identifier,E.right.name="yield",delete E.right.argument,delete E.right.delegate):x&&E.type===p.Syntax.Identifier&&E.name==="await"&&this.throwUnexpectedToken(this.lookahead),this.checkPatternParam(f,E),o[y]=E}if(this.context.strict||!this.context.allowYield)for(var y=0;y<o.length;++y){var E=o[y];E.type===p.Syntax.YieldExpression&&this.throwUnexpectedToken(this.lookahead)}if(f.message===c.Messages.StrictParamDupe){var _=this.context.strict?f.stricted:f.firstRestricted;this.throwUnexpectedToken(_,f.message)}return{simple:f.simple,params:o,stricted:f.stricted,firstRestricted:f.firstRestricted,message:f.message}},d.prototype.parseAssignmentExpression=function(){var a;if(!this.context.allowYield&&this.matchKeyword("yield"))a=this.parseYieldExpression();else{var o=this.lookahead,f=o;if(a=this.parseConditionalExpression(),f.type===3&&f.lineNumber===this.lookahead.lineNumber&&f.value==="async"&&(this.lookahead.type===3||this.matchKeyword("yield"))){var x=this.parsePrimaryExpression();this.reinterpretExpressionAsPattern(x),a={type:h,params:[x],async:!0}}if(a.type===h||this.match("=>")){this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;var y=a.async,E=this.reinterpretAsCoverFormalsList(a);if(E){this.hasLineTerminator&&this.tolerateUnexpectedToken(this.lookahead),this.context.firstCoverInitializedNameError=null;var _=this.context.strict,S=this.context.allowStrictDirective;this.context.allowStrictDirective=E.simple;var T=this.context.allowYield,A=this.context.await;this.context.allowYield=!0,this.context.await=y;var I=this.startNode(o);this.expect("=>");var N=void 0;if(this.match("{")){var F=this.context.allowIn;this.context.allowIn=!0,N=this.parseFunctionSourceElements(),this.context.allowIn=F}else N=this.isolateCoverGrammar(this.parseAssignmentExpression);var P=N.type!==p.Syntax.BlockStatement;this.context.strict&&E.firstRestricted&&this.throwUnexpectedToken(E.firstRestricted,E.message),this.context.strict&&E.stricted&&this.tolerateUnexpectedToken(E.stricted,E.message),a=y?this.finalize(I,new l.AsyncArrowFunctionExpression(E.params,N,P)):this.finalize(I,new l.ArrowFunctionExpression(E.params,N,P)),this.context.strict=_,this.context.allowStrictDirective=S,this.context.allowYield=T,this.context.await=A}}else if(this.matchAssign()){if(this.context.isAssignmentTarget||this.tolerateError(c.Messages.InvalidLHSInAssignment),this.context.strict&&a.type===p.Syntax.Identifier){var U=a;this.scanner.isRestrictedWord(U.name)&&this.tolerateUnexpectedToken(f,c.Messages.StrictLHSAssignment),this.scanner.isStrictModeReservedWord(U.name)&&this.tolerateUnexpectedToken(f,c.Messages.StrictReservedWord)}this.match("=")?this.reinterpretExpressionAsPattern(a):(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1),f=this.nextToken();var O=f.value,V=this.isolateCoverGrammar(this.parseAssignmentExpression);a=this.finalize(this.startNode(o),new l.AssignmentExpression(O,a,V)),this.context.firstCoverInitializedNameError=null}}return a},d.prototype.parseExpression=function(){var a=this.lookahead,o=this.isolateCoverGrammar(this.parseAssignmentExpression);if(this.match(",")){var f=[];for(f.push(o);this.lookahead.type!==2&&this.match(",");)this.nextToken(),f.push(this.isolateCoverGrammar(this.parseAssignmentExpression));o=this.finalize(this.startNode(a),new l.SequenceExpression(f))}return o},d.prototype.parseStatementListItem=function(){var a;if(this.context.isAssignmentTarget=!0,this.context.isBindingElement=!0,this.lookahead.type===4)switch(this.lookahead.value){case"export":this.context.isModule||this.tolerateUnexpectedToken(this.lookahead,c.Messages.IllegalExportDeclaration),a=this.parseExportDeclaration();break;case"import":this.context.isModule||this.tolerateUnexpectedToken(this.lookahead,c.Messages.IllegalImportDeclaration),a=this.parseImportDeclaration();break;case"const":a=this.parseLexicalDeclaration({inFor:!1});break;case"function":a=this.parseFunctionDeclaration();break;case"class":a=this.parseClassDeclaration();break;case"let":a=this.isLexicalDeclaration()?this.parseLexicalDeclaration({inFor:!1}):this.parseStatement();break;default:a=this.parseStatement();break}else a=this.parseStatement();return a},d.prototype.parseBlock=function(){var a=this.createNode();this.expect("{");for(var o=[];!this.match("}");)o.push(this.parseStatementListItem());return this.expect("}"),this.finalize(a,new l.BlockStatement(o))},d.prototype.parseLexicalBinding=function(a,o){var f=this.createNode(),x=[],y=this.parsePattern(x,a);this.context.strict&&y.type===p.Syntax.Identifier&&this.scanner.isRestrictedWord(y.name)&&this.tolerateError(c.Messages.StrictVarName);var E=null;return a==="const"?!this.matchKeyword("in")&&!this.matchContextualKeyword("of")&&(this.match("=")?(this.nextToken(),E=this.isolateCoverGrammar(this.parseAssignmentExpression)):this.throwError(c.Messages.DeclarationMissingInitializer,"const")):(!o.inFor&&y.type!==p.Syntax.Identifier||this.match("="))&&(this.expect("="),E=this.isolateCoverGrammar(this.parseAssignmentExpression)),this.finalize(f,new l.VariableDeclarator(y,E))},d.prototype.parseBindingList=function(a,o){for(var f=[this.parseLexicalBinding(a,o)];this.match(",");)this.nextToken(),f.push(this.parseLexicalBinding(a,o));return f},d.prototype.isLexicalDeclaration=function(){var a=this.scanner.saveState();this.scanner.scanComments();var o=this.scanner.lex();return this.scanner.restoreState(a),o.type===3||o.type===7&&o.value==="["||o.type===7&&o.value==="{"||o.type===4&&o.value==="let"||o.type===4&&o.value==="yield"},d.prototype.parseLexicalDeclaration=function(a){var o=this.createNode(),f=this.nextToken().value;s.assert(f==="let"||f==="const","Lexical declaration must be either let or const");var x=this.parseBindingList(f,a);return this.consumeSemicolon(),this.finalize(o,new l.VariableDeclaration(x,f))},d.prototype.parseBindingRestElement=function(a,o){var f=this.createNode();this.expect("...");var x=this.parsePattern(a,o);return this.finalize(f,new l.RestElement(x))},d.prototype.parseArrayPattern=function(a,o){var f=this.createNode();this.expect("[");for(var x=[];!this.match("]");)if(this.match(","))this.nextToken(),x.push(null);else{if(this.match("...")){x.push(this.parseBindingRestElement(a,o));break}else x.push(this.parsePatternWithDefault(a,o));this.match("]")||this.expect(",")}return this.expect("]"),this.finalize(f,new l.ArrayPattern(x))},d.prototype.parsePropertyPattern=function(a,o){var f=this.createNode(),x=!1,y=!1,E=!1,_,S;if(this.lookahead.type===3){var T=this.lookahead;_=this.parseVariableIdentifier();var A=this.finalize(f,new l.Identifier(T.value));if(this.match("=")){a.push(T),y=!0,this.nextToken();var I=this.parseAssignmentExpression();S=this.finalize(this.startNode(T),new l.AssignmentPattern(A,I))}else this.match(":")?(this.expect(":"),S=this.parsePatternWithDefault(a,o)):(a.push(T),y=!0,S=A)}else x=this.match("["),_=this.parseObjectPropertyKey(),this.expect(":"),S=this.parsePatternWithDefault(a,o);return this.finalize(f,new l.Property("init",_,x,S,E,y))},d.prototype.parseObjectPattern=function(a,o){var f=this.createNode(),x=[];for(this.expect("{");!this.match("}");)x.push(this.parsePropertyPattern(a,o)),this.match("}")||this.expect(",");return this.expect("}"),this.finalize(f,new l.ObjectPattern(x))},d.prototype.parsePattern=function(a,o){var f;return this.match("[")?f=this.parseArrayPattern(a,o):this.match("{")?f=this.parseObjectPattern(a,o):(this.matchKeyword("let")&&(o==="const"||o==="let")&&this.tolerateUnexpectedToken(this.lookahead,c.Messages.LetInLexicalBinding),a.push(this.lookahead),f=this.parseVariableIdentifier(o)),f},d.prototype.parsePatternWithDefault=function(a,o){var f=this.lookahead,x=this.parsePattern(a,o);if(this.match("=")){this.nextToken();var y=this.context.allowYield;this.context.allowYield=!0;var E=this.isolateCoverGrammar(this.parseAssignmentExpression);this.context.allowYield=y,x=this.finalize(this.startNode(f),new l.AssignmentPattern(x,E))}return x},d.prototype.parseVariableIdentifier=function(a){var o=this.createNode(),f=this.nextToken();return f.type===4&&f.value==="yield"?this.context.strict?this.tolerateUnexpectedToken(f,c.Messages.StrictReservedWord):this.context.allowYield||this.throwUnexpectedToken(f):f.type!==3?this.context.strict&&f.type===4&&this.scanner.isStrictModeReservedWord(f.value)?this.tolerateUnexpectedToken(f,c.Messages.StrictReservedWord):(this.context.strict||f.value!=="let"||a!=="var")&&this.throwUnexpectedToken(f):(this.context.isModule||this.context.await)&&f.type===3&&f.value==="await"&&this.tolerateUnexpectedToken(f),this.finalize(o,new l.Identifier(f.value))},d.prototype.parseVariableDeclaration=function(a){var o=this.createNode(),f=[],x=this.parsePattern(f,"var");this.context.strict&&x.type===p.Syntax.Identifier&&this.scanner.isRestrictedWord(x.name)&&this.tolerateError(c.Messages.StrictVarName);var y=null;return this.match("=")?(this.nextToken(),y=this.isolateCoverGrammar(this.parseAssignmentExpression)):x.type!==p.Syntax.Identifier&&!a.inFor&&this.expect("="),this.finalize(o,new l.VariableDeclarator(x,y))},d.prototype.parseVariableDeclarationList=function(a){var o={inFor:a.inFor},f=[];for(f.push(this.parseVariableDeclaration(o));this.match(",");)this.nextToken(),f.push(this.parseVariableDeclaration(o));return f},d.prototype.parseVariableStatement=function(){var a=this.createNode();this.expectKeyword("var");var o=this.parseVariableDeclarationList({inFor:!1});return this.consumeSemicolon(),this.finalize(a,new l.VariableDeclaration(o,"var"))},d.prototype.parseEmptyStatement=function(){var a=this.createNode();return this.expect(";"),this.finalize(a,new l.EmptyStatement)},d.prototype.parseExpressionStatement=function(){var a=this.createNode(),o=this.parseExpression();return this.consumeSemicolon(),this.finalize(a,new l.ExpressionStatement(o))},d.prototype.parseIfClause=function(){return this.context.strict&&this.matchKeyword("function")&&this.tolerateError(c.Messages.StrictFunction),this.parseStatement()},d.prototype.parseIfStatement=function(){var a=this.createNode(),o,f=null;this.expectKeyword("if"),this.expect("(");var x=this.parseExpression();return!this.match(")")&&this.config.tolerant?(this.tolerateUnexpectedToken(this.nextToken()),o=this.finalize(this.createNode(),new l.EmptyStatement)):(this.expect(")"),o=this.parseIfClause(),this.matchKeyword("else")&&(this.nextToken(),f=this.parseIfClause())),this.finalize(a,new l.IfStatement(x,o,f))},d.prototype.parseDoWhileStatement=function(){var a=this.createNode();this.expectKeyword("do");var o=this.context.inIteration;this.context.inIteration=!0;var f=this.parseStatement();this.context.inIteration=o,this.expectKeyword("while"),this.expect("(");var x=this.parseExpression();return!this.match(")")&&this.config.tolerant?this.tolerateUnexpectedToken(this.nextToken()):(this.expect(")"),this.match(";")&&this.nextToken()),this.finalize(a,new l.DoWhileStatement(f,x))},d.prototype.parseWhileStatement=function(){var a=this.createNode(),o;this.expectKeyword("while"),this.expect("(");var f=this.parseExpression();if(!this.match(")")&&this.config.tolerant)this.tolerateUnexpectedToken(this.nextToken()),o=this.finalize(this.createNode(),new l.EmptyStatement);else{this.expect(")");var x=this.context.inIteration;this.context.inIteration=!0,o=this.parseStatement(),this.context.inIteration=x}return this.finalize(a,new l.WhileStatement(f,o))},d.prototype.parseForStatement=function(){var a=null,o=null,f=null,x=!0,y,E,_=this.createNode();if(this.expectKeyword("for"),this.expect("("),this.match(";"))this.nextToken();else if(this.matchKeyword("var")){a=this.createNode(),this.nextToken();var S=this.context.allowIn;this.context.allowIn=!1;var T=this.parseVariableDeclarationList({inFor:!0});if(this.context.allowIn=S,T.length===1&&this.matchKeyword("in")){var A=T[0];A.init&&(A.id.type===p.Syntax.ArrayPattern||A.id.type===p.Syntax.ObjectPattern||this.context.strict)&&this.tolerateError(c.Messages.ForInOfLoopInitializer,"for-in"),a=this.finalize(a,new l.VariableDeclaration(T,"var")),this.nextToken(),y=a,E=this.parseExpression(),a=null}else T.length===1&&T[0].init===null&&this.matchContextualKeyword("of")?(a=this.finalize(a,new l.VariableDeclaration(T,"var")),this.nextToken(),y=a,E=this.parseAssignmentExpression(),a=null,x=!1):(a=this.finalize(a,new l.VariableDeclaration(T,"var")),this.expect(";"))}else if(this.matchKeyword("const")||this.matchKeyword("let")){a=this.createNode();var I=this.nextToken().value;if(!this.context.strict&&this.lookahead.value==="in")a=this.finalize(a,new l.Identifier(I)),this.nextToken(),y=a,E=this.parseExpression(),a=null;else{var S=this.context.allowIn;this.context.allowIn=!1;var T=this.parseBindingList(I,{inFor:!0});this.context.allowIn=S,T.length===1&&T[0].init===null&&this.matchKeyword("in")?(a=this.finalize(a,new l.VariableDeclaration(T,I)),this.nextToken(),y=a,E=this.parseExpression(),a=null):T.length===1&&T[0].init===null&&this.matchContextualKeyword("of")?(a=this.finalize(a,new l.VariableDeclaration(T,I)),this.nextToken(),y=a,E=this.parseAssignmentExpression(),a=null,x=!1):(this.consumeSemicolon(),a=this.finalize(a,new l.VariableDeclaration(T,I)))}}else{var N=this.lookahead,S=this.context.allowIn;if(this.context.allowIn=!1,a=this.inheritCoverGrammar(this.parseAssignmentExpression),this.context.allowIn=S,this.matchKeyword("in"))(!this.context.isAssignmentTarget||a.type===p.Syntax.AssignmentExpression)&&this.tolerateError(c.Messages.InvalidLHSInForIn),this.nextToken(),this.reinterpretExpressionAsPattern(a),y=a,E=this.parseExpression(),a=null;else if(this.matchContextualKeyword("of"))(!this.context.isAssignmentTarget||a.type===p.Syntax.AssignmentExpression)&&this.tolerateError(c.Messages.InvalidLHSInForLoop),this.nextToken(),this.reinterpretExpressionAsPattern(a),y=a,E=this.parseAssignmentExpression(),a=null,x=!1;else{if(this.match(",")){for(var F=[a];this.match(",");)this.nextToken(),F.push(this.isolateCoverGrammar(this.parseAssignmentExpression));a=this.finalize(this.startNode(N),new l.SequenceExpression(F))}this.expect(";")}}typeof y>"u"&&(this.match(";")||(o=this.parseExpression()),this.expect(";"),this.match(")")||(f=this.parseExpression()));var P;if(!this.match(")")&&this.config.tolerant)this.tolerateUnexpectedToken(this.nextToken()),P=this.finalize(this.createNode(),new l.EmptyStatement);else{this.expect(")");var U=this.context.inIteration;this.context.inIteration=!0,P=this.isolateCoverGrammar(this.parseStatement),this.context.inIteration=U}return typeof y>"u"?this.finalize(_,new l.ForStatement(a,o,f,P)):x?this.finalize(_,new l.ForInStatement(y,E,P)):this.finalize(_,new l.ForOfStatement(y,E,P))},d.prototype.parseContinueStatement=function(){var a=this.createNode();this.expectKeyword("continue");var o=null;if(this.lookahead.type===3&&!this.hasLineTerminator){var f=this.parseVariableIdentifier();o=f;var x="$"+f.name;Object.prototype.hasOwnProperty.call(this.context.labelSet,x)||this.throwError(c.Messages.UnknownLabel,f.name)}return this.consumeSemicolon(),o===null&&!this.context.inIteration&&this.throwError(c.Messages.IllegalContinue),this.finalize(a,new l.ContinueStatement(o))},d.prototype.parseBreakStatement=function(){var a=this.createNode();this.expectKeyword("break");var o=null;if(this.lookahead.type===3&&!this.hasLineTerminator){var f=this.parseVariableIdentifier(),x="$"+f.name;Object.prototype.hasOwnProperty.call(this.context.labelSet,x)||this.throwError(c.Messages.UnknownLabel,f.name),o=f}return this.consumeSemicolon(),o===null&&!this.context.inIteration&&!this.context.inSwitch&&this.throwError(c.Messages.IllegalBreak),this.finalize(a,new l.BreakStatement(o))},d.prototype.parseReturnStatement=function(){this.context.inFunctionBody||this.tolerateError(c.Messages.IllegalReturn);var a=this.createNode();this.expectKeyword("return");var o=!this.match(";")&&!this.match("}")&&!this.hasLineTerminator&&this.lookahead.type!==2||this.lookahead.type===8||this.lookahead.type===10,f=o?this.parseExpression():null;return this.consumeSemicolon(),this.finalize(a,new l.ReturnStatement(f))},d.prototype.parseWithStatement=function(){this.context.strict&&this.tolerateError(c.Messages.StrictModeWith);var a=this.createNode(),o;this.expectKeyword("with"),this.expect("(");var f=this.parseExpression();return!this.match(")")&&this.config.tolerant?(this.tolerateUnexpectedToken(this.nextToken()),o=this.finalize(this.createNode(),new l.EmptyStatement)):(this.expect(")"),o=this.parseStatement()),this.finalize(a,new l.WithStatement(f,o))},d.prototype.parseSwitchCase=function(){var a=this.createNode(),o;this.matchKeyword("default")?(this.nextToken(),o=null):(this.expectKeyword("case"),o=this.parseExpression()),this.expect(":");for(var f=[];!(this.match("}")||this.matchKeyword("default")||this.matchKeyword("case"));)f.push(this.parseStatementListItem());return this.finalize(a,new l.SwitchCase(o,f))},d.prototype.parseSwitchStatement=function(){var a=this.createNode();this.expectKeyword("switch"),this.expect("(");var o=this.parseExpression();this.expect(")");var f=this.context.inSwitch;this.context.inSwitch=!0;var x=[],y=!1;for(this.expect("{");!this.match("}");){var E=this.parseSwitchCase();E.test===null&&(y&&this.throwError(c.Messages.MultipleDefaultsInSwitch),y=!0),x.push(E)}return this.expect("}"),this.context.inSwitch=f,this.finalize(a,new l.SwitchStatement(o,x))},d.prototype.parseLabelledStatement=function(){var a=this.createNode(),o=this.parseExpression(),f;if(o.type===p.Syntax.Identifier&&this.match(":")){this.nextToken();var x=o,y="$"+x.name;Object.prototype.hasOwnProperty.call(this.context.labelSet,y)&&this.throwError(c.Messages.Redeclaration,"Label",x.name),this.context.labelSet[y]=!0;var E=void 0;if(this.matchKeyword("class"))this.tolerateUnexpectedToken(this.lookahead),E=this.parseClassDeclaration();else if(this.matchKeyword("function")){var _=this.lookahead,S=this.parseFunctionDeclaration();this.context.strict?this.tolerateUnexpectedToken(_,c.Messages.StrictFunction):S.generator&&this.tolerateUnexpectedToken(_,c.Messages.GeneratorInLegacyContext),E=S}else E=this.parseStatement();delete this.context.labelSet[y],f=new l.LabeledStatement(x,E)}else this.consumeSemicolon(),f=new l.ExpressionStatement(o);return this.finalize(a,f)},d.prototype.parseThrowStatement=function(){var a=this.createNode();this.expectKeyword("throw"),this.hasLineTerminator&&this.throwError(c.Messages.NewlineAfterThrow);var o=this.parseExpression();return this.consumeSemicolon(),this.finalize(a,new l.ThrowStatement(o))},d.prototype.parseCatchClause=function(){var a=this.createNode();this.expectKeyword("catch"),this.expect("("),this.match(")")&&this.throwUnexpectedToken(this.lookahead);for(var o=[],f=this.parsePattern(o),x={},y=0;y<o.length;y++){var E="$"+o[y].value;Object.prototype.hasOwnProperty.call(x,E)&&this.tolerateError(c.Messages.DuplicateBinding,o[y].value),x[E]=!0}this.context.strict&&f.type===p.Syntax.Identifier&&this.scanner.isRestrictedWord(f.name)&&this.tolerateError(c.Messages.StrictCatchVariable),this.expect(")");var _=this.parseBlock();return this.finalize(a,new l.CatchClause(f,_))},d.prototype.parseFinallyClause=function(){return this.expectKeyword("finally"),this.parseBlock()},d.prototype.parseTryStatement=function(){var a=this.createNode();this.expectKeyword("try");var o=this.parseBlock(),f=this.matchKeyword("catch")?this.parseCatchClause():null,x=this.matchKeyword("finally")?this.parseFinallyClause():null;return!f&&!x&&this.throwError(c.Messages.NoCatchOrFinally),this.finalize(a,new l.TryStatement(o,f,x))},d.prototype.parseDebuggerStatement=function(){var a=this.createNode();return this.expectKeyword("debugger"),this.consumeSemicolon(),this.finalize(a,new l.DebuggerStatement)},d.prototype.parseStatement=function(){var a;switch(this.lookahead.type){case 1:case 5:case 6:case 8:case 10:case 9:a=this.parseExpressionStatement();break;case 7:var o=this.lookahead.value;o==="{"?a=this.parseBlock():o==="("?a=this.parseExpressionStatement():o===";"?a=this.parseEmptyStatement():a=this.parseExpressionStatement();break;case 3:a=this.matchAsyncFunction()?this.parseFunctionDeclaration():this.parseLabelledStatement();break;case 4:switch(this.lookahead.value){case"break":a=this.parseBreakStatement();break;case"continue":a=this.parseContinueStatement();break;case"debugger":a=this.parseDebuggerStatement();break;case"do":a=this.parseDoWhileStatement();break;case"for":a=this.parseForStatement();break;case"function":a=this.parseFunctionDeclaration();break;case"if":a=this.parseIfStatement();break;case"return":a=this.parseReturnStatement();break;case"switch":a=this.parseSwitchStatement();break;case"throw":a=this.parseThrowStatement();break;case"try":a=this.parseTryStatement();break;case"var":a=this.parseVariableStatement();break;case"while":a=this.parseWhileStatement();break;case"with":a=this.parseWithStatement();break;default:a=this.parseExpressionStatement();break}break;default:a=this.throwUnexpectedToken(this.lookahead)}return a},d.prototype.parseFunctionSourceElements=function(){var a=this.createNode();this.expect("{");var o=this.parseDirectivePrologues(),f=this.context.labelSet,x=this.context.inIteration,y=this.context.inSwitch,E=this.context.inFunctionBody;for(this.context.labelSet={},this.context.inIteration=!1,this.context.inSwitch=!1,this.context.inFunctionBody=!0;this.lookahead.type!==2&&!this.match("}");)o.push(this.parseStatementListItem());return this.expect("}"),this.context.labelSet=f,this.context.inIteration=x,this.context.inSwitch=y,this.context.inFunctionBody=E,this.finalize(a,new l.BlockStatement(o))},d.prototype.validateParam=function(a,o,f){var x="$"+f;this.context.strict?(this.scanner.isRestrictedWord(f)&&(a.stricted=o,a.message=c.Messages.StrictParamName),Object.prototype.hasOwnProperty.call(a.paramSet,x)&&(a.stricted=o,a.message=c.Messages.StrictParamDupe)):a.firstRestricted||(this.scanner.isRestrictedWord(f)?(a.firstRestricted=o,a.message=c.Messages.StrictParamName):this.scanner.isStrictModeReservedWord(f)?(a.firstRestricted=o,a.message=c.Messages.StrictReservedWord):Object.prototype.hasOwnProperty.call(a.paramSet,x)&&(a.stricted=o,a.message=c.Messages.StrictParamDupe)),typeof Object.defineProperty=="function"?Object.defineProperty(a.paramSet,x,{value:!0,enumerable:!0,writable:!0,configurable:!0}):a.paramSet[x]=!0},d.prototype.parseRestElement=function(a){var o=this.createNode();this.expect("...");var f=this.parsePattern(a);return this.match("=")&&this.throwError(c.Messages.DefaultRestParameter),this.match(")")||this.throwError(c.Messages.ParameterAfterRestParameter),this.finalize(o,new l.RestElement(f))},d.prototype.parseFormalParameter=function(a){for(var o=[],f=this.match("...")?this.parseRestElement(o):this.parsePatternWithDefault(o),x=0;x<o.length;x++)this.validateParam(a,o[x],o[x].value);a.simple=a.simple&&f instanceof l.Identifier,a.params.push(f)},d.prototype.parseFormalParameters=function(a){var o;if(o={simple:!0,params:[],firstRestricted:a},this.expect("("),!this.match(")"))for(o.paramSet={};this.lookahead.type!==2&&(this.parseFormalParameter(o),!(this.match(")")||(this.expect(","),this.match(")")))););return this.expect(")"),{simple:o.simple,params:o.params,stricted:o.stricted,firstRestricted:o.firstRestricted,message:o.message}},d.prototype.matchAsyncFunction=function(){var a=this.matchContextualKeyword("async");if(a){var o=this.scanner.saveState();this.scanner.scanComments();var f=this.scanner.lex();this.scanner.restoreState(o),a=o.lineNumber===f.lineNumber&&f.type===4&&f.value==="function"}return a},d.prototype.parseFunctionDeclaration=function(a){var o=this.createNode(),f=this.matchContextualKeyword("async");f&&this.nextToken(),this.expectKeyword("function");var x=f?!1:this.match("*");x&&this.nextToken();var y,E=null,_=null;if(!a||!this.match("(")){var S=this.lookahead;E=this.parseVariableIdentifier(),this.context.strict?this.scanner.isRestrictedWord(S.value)&&this.tolerateUnexpectedToken(S,c.Messages.StrictFunctionName):this.scanner.isRestrictedWord(S.value)?(_=S,y=c.Messages.StrictFunctionName):this.scanner.isStrictModeReservedWord(S.value)&&(_=S,y=c.Messages.StrictReservedWord)}var T=this.context.await,A=this.context.allowYield;this.context.await=f,this.context.allowYield=!x;var I=this.parseFormalParameters(_),N=I.params,F=I.stricted;_=I.firstRestricted,I.message&&(y=I.message);var P=this.context.strict,U=this.context.allowStrictDirective;this.context.allowStrictDirective=I.simple;var O=this.parseFunctionSourceElements();return this.context.strict&&_&&this.throwUnexpectedToken(_,y),this.context.strict&&F&&this.tolerateUnexpectedToken(F,y),this.context.strict=P,this.context.allowStrictDirective=U,this.context.await=T,this.context.allowYield=A,f?this.finalize(o,new l.AsyncFunctionDeclaration(E,N,O)):this.finalize(o,new l.FunctionDeclaration(E,N,O,x))},d.prototype.parseFunctionExpression=function(){var a=this.createNode(),o=this.matchContextualKeyword("async");o&&this.nextToken(),this.expectKeyword("function");var f=o?!1:this.match("*");f&&this.nextToken();var x,y=null,E,_=this.context.await,S=this.context.allowYield;if(this.context.await=o,this.context.allowYield=!f,!this.match("(")){var T=this.lookahead;y=!this.context.strict&&!f&&this.matchKeyword("yield")?this.parseIdentifierName():this.parseVariableIdentifier(),this.context.strict?this.scanner.isRestrictedWord(T.value)&&this.tolerateUnexpectedToken(T,c.Messages.StrictFunctionName):this.scanner.isRestrictedWord(T.value)?(E=T,x=c.Messages.StrictFunctionName):this.scanner.isStrictModeReservedWord(T.value)&&(E=T,x=c.Messages.StrictReservedWord)}var A=this.parseFormalParameters(E),I=A.params,N=A.stricted;E=A.firstRestricted,A.message&&(x=A.message);var F=this.context.strict,P=this.context.allowStrictDirective;this.context.allowStrictDirective=A.simple;var U=this.parseFunctionSourceElements();return this.context.strict&&E&&this.throwUnexpectedToken(E,x),this.context.strict&&N&&this.tolerateUnexpectedToken(N,x),this.context.strict=F,this.context.allowStrictDirective=P,this.context.await=_,this.context.allowYield=S,o?this.finalize(a,new l.AsyncFunctionExpression(y,I,U)):this.finalize(a,new l.FunctionExpression(y,I,U,f))},d.prototype.parseDirective=function(){var a=this.lookahead,o=this.createNode(),f=this.parseExpression(),x=f.type===p.Syntax.Literal?this.getTokenRaw(a).slice(1,-1):null;return this.consumeSemicolon(),this.finalize(o,x?new l.Directive(f,x):new l.ExpressionStatement(f))},d.prototype.parseDirectivePrologues=function(){for(var a=null,o=[];;){var f=this.lookahead;if(f.type!==8)break;var x=this.parseDirective();o.push(x);var y=x.directive;if(typeof y!="string")break;y==="use strict"?(this.context.strict=!0,a&&this.tolerateUnexpectedToken(a,c.Messages.StrictOctalLiteral),this.context.allowStrictDirective||this.tolerateUnexpectedToken(f,c.Messages.IllegalLanguageModeDirective)):!a&&f.octal&&(a=f)}return o},d.prototype.qualifiedPropertyName=function(a){switch(a.type){case 3:case 8:case 1:case 5:case 6:case 4:return!0;case 7:return a.value==="["}return!1},d.prototype.parseGetterMethod=function(){var a=this.createNode(),o=!1,f=this.context.allowYield;this.context.allowYield=!o;var x=this.parseFormalParameters();x.params.length>0&&this.tolerateError(c.Messages.BadGetterArity);var y=this.parsePropertyMethod(x);return this.context.allowYield=f,this.finalize(a,new l.FunctionExpression(null,x.params,y,o))},d.prototype.parseSetterMethod=function(){var a=this.createNode(),o=!1,f=this.context.allowYield;this.context.allowYield=!o;var x=this.parseFormalParameters();x.params.length!==1?this.tolerateError(c.Messages.BadSetterArity):x.params[0]instanceof l.RestElement&&this.tolerateError(c.Messages.BadSetterRestParameter);var y=this.parsePropertyMethod(x);return this.context.allowYield=f,this.finalize(a,new l.FunctionExpression(null,x.params,y,o))},d.prototype.parseGeneratorMethod=function(){var a=this.createNode(),o=!0,f=this.context.allowYield;this.context.allowYield=!0;var x=this.parseFormalParameters();this.context.allowYield=!1;var y=this.parsePropertyMethod(x);return this.context.allowYield=f,this.finalize(a,new l.FunctionExpression(null,x.params,y,o))},d.prototype.isStartOfExpression=function(){var a=!0,o=this.lookahead.value;switch(this.lookahead.type){case 7:a=o==="["||o==="("||o==="{"||o==="+"||o==="-"||o==="!"||o==="~"||o==="++"||o==="--"||o==="/"||o==="/=";break;case 4:a=o==="class"||o==="delete"||o==="function"||o==="let"||o==="new"||o==="super"||o==="this"||o==="typeof"||o==="void"||o==="yield";break}return a},d.prototype.parseYieldExpression=function(){var a=this.createNode();this.expectKeyword("yield");var o=null,f=!1;if(!this.hasLineTerminator){var x=this.context.allowYield;this.context.allowYield=!1,f=this.match("*"),f?(this.nextToken(),o=this.parseAssignmentExpression()):this.isStartOfExpression()&&(o=this.parseAssignmentExpression()),this.context.allowYield=x}return this.finalize(a,new l.YieldExpression(o,f))},d.prototype.parseClassElement=function(a){var o=this.lookahead,f=this.createNode(),x="",y=null,E=null,_=!1,S=!1,T=!1,A=!1;if(this.match("*"))this.nextToken();else{_=this.match("["),y=this.parseObjectPropertyKey();var I=y;if(I.name==="static"&&(this.qualifiedPropertyName(this.lookahead)||this.match("*"))&&(o=this.lookahead,T=!0,_=this.match("["),this.match("*")?this.nextToken():y=this.parseObjectPropertyKey()),o.type===3&&!this.hasLineTerminator&&o.value==="async"){var N=this.lookahead.value;N!==":"&&N!=="("&&N!=="*"&&(A=!0,o=this.lookahead,y=this.parseObjectPropertyKey(),o.type===3&&o.value==="constructor"&&this.tolerateUnexpectedToken(o,c.Messages.ConstructorIsAsync))}}var F=this.qualifiedPropertyName(this.lookahead);return o.type===3?o.value==="get"&&F?(x="get",_=this.match("["),y=this.parseObjectPropertyKey(),this.context.allowYield=!1,E=this.parseGetterMethod()):o.value==="set"&&F&&(x="set",_=this.match("["),y=this.parseObjectPropertyKey(),E=this.parseSetterMethod()):o.type===7&&o.value==="*"&&F&&(x="init",_=this.match("["),y=this.parseObjectPropertyKey(),E=this.parseGeneratorMethod(),S=!0),!x&&y&&this.match("(")&&(x="init",E=A?this.parsePropertyMethodAsyncFunction():this.parsePropertyMethodFunction(),S=!0),x||this.throwUnexpectedToken(this.lookahead),x==="init"&&(x="method"),_||(T&&this.isPropertyKey(y,"prototype")&&this.throwUnexpectedToken(o,c.Messages.StaticPrototype),!T&&this.isPropertyKey(y,"constructor")&&((x!=="method"||!S||E&&E.generator)&&this.throwUnexpectedToken(o,c.Messages.ConstructorSpecialMethod),a.value?this.throwUnexpectedToken(o,c.Messages.DuplicateConstructor):a.value=!0,x="constructor")),this.finalize(f,new l.MethodDefinition(y,_,E,x,T))},d.prototype.parseClassElementList=function(){var a=[],o={value:!1};for(this.expect("{");!this.match("}");)this.match(";")?this.nextToken():a.push(this.parseClassElement(o));return this.expect("}"),a},d.prototype.parseClassBody=function(){var a=this.createNode(),o=this.parseClassElementList();return this.finalize(a,new l.ClassBody(o))},d.prototype.parseClassDeclaration=function(a){var o=this.createNode(),f=this.context.strict;this.context.strict=!0,this.expectKeyword("class");var x=a&&this.lookahead.type!==3?null:this.parseVariableIdentifier(),y=null;this.matchKeyword("extends")&&(this.nextToken(),y=this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));var E=this.parseClassBody();return this.context.strict=f,this.finalize(o,new l.ClassDeclaration(x,y,E))},d.prototype.parseClassExpression=function(){var a=this.createNode(),o=this.context.strict;this.context.strict=!0,this.expectKeyword("class");var f=this.lookahead.type===3?this.parseVariableIdentifier():null,x=null;this.matchKeyword("extends")&&(this.nextToken(),x=this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));var y=this.parseClassBody();return this.context.strict=o,this.finalize(a,new l.ClassExpression(f,x,y))},d.prototype.parseModule=function(){this.context.strict=!0,this.context.isModule=!0,this.scanner.isModule=!0;for(var a=this.createNode(),o=this.parseDirectivePrologues();this.lookahead.type!==2;)o.push(this.parseStatementListItem());return this.finalize(a,new l.Module(o))},d.prototype.parseScript=function(){for(var a=this.createNode(),o=this.parseDirectivePrologues();this.lookahead.type!==2;)o.push(this.parseStatementListItem());return this.finalize(a,new l.Script(o))},d.prototype.parseModuleSpecifier=function(){var a=this.createNode();this.lookahead.type!==8&&this.throwError(c.Messages.InvalidModuleSpecifier);var o=this.nextToken(),f=this.getTokenRaw(o);return this.finalize(a,new l.Literal(o.value,f))},d.prototype.parseImportSpecifier=function(){var a=this.createNode(),o,f;return this.lookahead.type===3?(o=this.parseVariableIdentifier(),f=o,this.matchContextualKeyword("as")&&(this.nextToken(),f=this.parseVariableIdentifier())):(o=this.parseIdentifierName(),f=o,this.matchContextualKeyword("as")?(this.nextToken(),f=this.parseVariableIdentifier()):this.throwUnexpectedToken(this.nextToken())),this.finalize(a,new l.ImportSpecifier(f,o))},d.prototype.parseNamedImports=function(){this.expect("{");for(var a=[];!this.match("}");)a.push(this.parseImportSpecifier()),this.match("}")||this.expect(",");return this.expect("}"),a},d.prototype.parseImportDefaultSpecifier=function(){var a=this.createNode(),o=this.parseIdentifierName();return this.finalize(a,new l.ImportDefaultSpecifier(o))},d.prototype.parseImportNamespaceSpecifier=function(){var a=this.createNode();this.expect("*"),this.matchContextualKeyword("as")||this.throwError(c.Messages.NoAsAfterImportNamespace),this.nextToken();var o=this.parseIdentifierName();return this.finalize(a,new l.ImportNamespaceSpecifier(o))},d.prototype.parseImportDeclaration=function(){this.context.inFunctionBody&&this.throwError(c.Messages.IllegalImportDeclaration);var a=this.createNode();this.expectKeyword("import");var o,f=[];if(this.lookahead.type===8)o=this.parseModuleSpecifier();else{if(this.match("{")?f=f.concat(this.parseNamedImports()):this.match("*")?f.push(this.parseImportNamespaceSpecifier()):this.isIdentifierName(this.lookahead)&&!this.matchKeyword("default")?(f.push(this.parseImportDefaultSpecifier()),this.match(",")&&(this.nextToken(),this.match("*")?f.push(this.parseImportNamespaceSpecifier()):this.match("{")?f=f.concat(this.parseNamedImports()):this.throwUnexpectedToken(this.lookahead))):this.throwUnexpectedToken(this.nextToken()),!this.matchContextualKeyword("from")){var x=this.lookahead.value?c.Messages.UnexpectedToken:c.Messages.MissingFromClause;this.throwError(x,this.lookahead.value)}this.nextToken(),o=this.parseModuleSpecifier()}return this.consumeSemicolon(),this.finalize(a,new l.ImportDeclaration(f,o))},d.prototype.parseExportSpecifier=function(){var a=this.createNode(),o=this.parseIdentifierName(),f=o;return this.matchContextualKeyword("as")&&(this.nextToken(),f=this.parseIdentifierName()),this.finalize(a,new l.ExportSpecifier(o,f))},d.prototype.parseExportDeclaration=function(){this.context.inFunctionBody&&this.throwError(c.Messages.IllegalExportDeclaration);var a=this.createNode();this.expectKeyword("export");var o;if(this.matchKeyword("default"))if(this.nextToken(),this.matchKeyword("function")){var f=this.parseFunctionDeclaration(!0);o=this.finalize(a,new l.ExportDefaultDeclaration(f))}else if(this.matchKeyword("class")){var f=this.parseClassDeclaration(!0);o=this.finalize(a,new l.ExportDefaultDeclaration(f))}else if(this.matchContextualKeyword("async")){var f=this.matchAsyncFunction()?this.parseFunctionDeclaration(!0):this.parseAssignmentExpression();o=this.finalize(a,new l.ExportDefaultDeclaration(f))}else{this.matchContextualKeyword("from")&&this.throwError(c.Messages.UnexpectedToken,this.lookahead.value);var f=this.match("{")?this.parseObjectInitializer():this.match("[")?this.parseArrayInitializer():this.parseAssignmentExpression();this.consumeSemicolon(),o=this.finalize(a,new l.ExportDefaultDeclaration(f))}else if(this.match("*")){if(this.nextToken(),!this.matchContextualKeyword("from")){var x=this.lookahead.value?c.Messages.UnexpectedToken:c.Messages.MissingFromClause;this.throwError(x,this.lookahead.value)}this.nextToken();var y=this.parseModuleSpecifier();this.consumeSemicolon(),o=this.finalize(a,new l.ExportAllDeclaration(y))}else if(this.lookahead.type===4){var f=void 0;switch(this.lookahead.value){case"let":case"const":f=this.parseLexicalDeclaration({inFor:!1});break;case"var":case"class":case"function":f=this.parseStatementListItem();break;default:this.throwUnexpectedToken(this.lookahead)}o=this.finalize(a,new l.ExportNamedDeclaration(f,[],null))}else if(this.matchAsyncFunction()){var f=this.parseFunctionDeclaration();o=this.finalize(a,new l.ExportNamedDeclaration(f,[],null))}else{var E=[],_=null,S=!1;for(this.expect("{");!this.match("}");)S=S||this.matchKeyword("default"),E.push(this.parseExportSpecifier()),this.match("}")||this.expect(",");if(this.expect("}"),this.matchContextualKeyword("from"))this.nextToken(),_=this.parseModuleSpecifier(),this.consumeSemicolon();else if(S){var x=this.lookahead.value?c.Messages.UnexpectedToken:c.Messages.MissingFromClause;this.throwError(x,this.lookahead.value)}else this.consumeSemicolon();o=this.finalize(a,new l.ExportNamedDeclaration(null,E,_))}return o},d})();r.Parser=g},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});function i(s,u){if(!s)throw new Error("ASSERT: "+u)}r.assert=i},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=(function(){function s(){this.errors=[],this.tolerant=!1}return s.prototype.recordError=function(u){this.errors.push(u)},s.prototype.tolerate=function(u){if(this.tolerant)this.recordError(u);else throw u},s.prototype.constructError=function(u,c){var l=new Error(u);try{throw l}catch(v){Object.create&&Object.defineProperty&&(l=Object.create(v),Object.defineProperty(l,"column",{value:c}))}return l},s.prototype.createError=function(u,c,l,v){var p="Line "+c+": "+v,m=this.constructError(p,l);return m.index=u,m.lineNumber=c,m.description=v,m},s.prototype.throwError=function(u,c,l,v){throw this.createError(u,c,l,v)},s.prototype.tolerateError=function(u,c,l,v){var p=this.createError(u,c,l,v);if(this.tolerant)this.recordError(p);else throw p},s})();r.ErrorHandler=i},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.Messages={BadGetterArity:"Getter must not have any formal parameters",BadSetterArity:"Setter must have exactly one formal parameter",BadSetterRestParameter:"Setter function argument must not be a rest parameter",ConstructorIsAsync:"Class constructor may not be an async method",ConstructorSpecialMethod:"Class constructor may not be an accessor",DeclarationMissingInitializer:"Missing initializer in %0 declaration",DefaultRestParameter:"Unexpected token =",DuplicateBinding:"Duplicate binding %0",DuplicateConstructor:"A class may only have one constructor",DuplicateProtoProperty:"Duplicate __proto__ fields are not allowed in object literals",ForInOfLoopInitializer:"%0 loop variable declaration may not have an initializer",GeneratorInLegacyContext:"Generator declarations are not allowed in legacy contexts",IllegalBreak:"Illegal break statement",IllegalContinue:"Illegal continue statement",IllegalExportDeclaration:"Unexpected token",IllegalImportDeclaration:"Unexpected token",IllegalLanguageModeDirective:"Illegal 'use strict' directive in function with non-simple parameter list",IllegalReturn:"Illegal return statement",InvalidEscapedReservedWord:"Keyword must not contain escaped characters",InvalidHexEscapeSequence:"Invalid hexadecimal escape sequence",InvalidLHSInAssignment:"Invalid left-hand side in assignment",InvalidLHSInForIn:"Invalid left-hand side in for-in",InvalidLHSInForLoop:"Invalid left-hand side in for-loop",InvalidModuleSpecifier:"Unexpected token",InvalidRegExp:"Invalid regular expression",LetInLexicalBinding:"let is disallowed as a lexically bound name",MissingFromClause:"Unexpected token",MultipleDefaultsInSwitch:"More than one default clause in switch statement",NewlineAfterThrow:"Illegal newline after throw",NoAsAfterImportNamespace:"Unexpected token",NoCatchOrFinally:"Missing catch or finally after try",ParameterAfterRestParameter:"Rest parameter must be last formal parameter",Redeclaration:"%0 '%1' has already been declared",StaticPrototype:"Classes may not have static property named prototype",StrictCatchVariable:"Catch variable may not be eval or arguments in strict mode",StrictDelete:"Delete of an unqualified identifier in strict mode.",StrictFunction:"In strict mode code, functions can only be declared at top level or inside a block",StrictFunctionName:"Function name may not be eval or arguments in strict mode",StrictLHSAssignment:"Assignment to eval or arguments is not allowed in strict mode",StrictLHSPostfix:"Postfix increment/decrement may not have eval or arguments operand in strict mode",StrictLHSPrefix:"Prefix increment/decrement may not have eval or arguments operand in strict mode",StrictModeWith:"Strict mode code may not include a with statement",StrictOctalLiteral:"Octal literals are not allowed in strict mode.",StrictParamDupe:"Strict mode function may not have duplicate parameter names",StrictParamName:"Parameter name eval or arguments is not allowed in strict mode",StrictReservedWord:"Use of future reserved word in strict mode",StrictVarName:"Variable name may not be eval or arguments in strict mode",TemplateOctalLiteral:"Octal literals are not allowed in template strings.",UnexpectedEOS:"Unexpected end of input",UnexpectedIdentifier:"Unexpected identifier",UnexpectedNumber:"Unexpected number",UnexpectedReserved:"Unexpected reserved word",UnexpectedString:"Unexpected string",UnexpectedTemplate:"Unexpected quasi %0",UnexpectedToken:"Unexpected token %0",UnexpectedTokenIllegal:"Unexpected token ILLEGAL",UnknownLabel:"Undefined label '%0'",UnterminatedRegExp:"Invalid regular expression: missing /"}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(9),u=i(4),c=i(11);function l(m){return"0123456789abcdef".indexOf(m.toLowerCase())}function v(m){return"01234567".indexOf(m)}var p=(function(){function m(h,g){this.source=h,this.errorHandler=g,this.trackComment=!1,this.isModule=!1,this.length=h.length,this.index=0,this.lineNumber=h.length>0?1:0,this.lineStart=0,this.curlyStack=[]}return m.prototype.saveState=function(){return{index:this.index,lineNumber:this.lineNumber,lineStart:this.lineStart}},m.prototype.restoreState=function(h){this.index=h.index,this.lineNumber=h.lineNumber,this.lineStart=h.lineStart},m.prototype.eof=function(){return this.index>=this.length},m.prototype.throwUnexpectedToken=function(h){return h===void 0&&(h=c.Messages.UnexpectedTokenIllegal),this.errorHandler.throwError(this.index,this.lineNumber,this.index-this.lineStart+1,h)},m.prototype.tolerateUnexpectedToken=function(h){h===void 0&&(h=c.Messages.UnexpectedTokenIllegal),this.errorHandler.tolerateError(this.index,this.lineNumber,this.index-this.lineStart+1,h)},m.prototype.skipSingleLineComment=function(h){var g=[],d,a;for(this.trackComment&&(g=[],d=this.index-h,a={start:{line:this.lineNumber,column:this.index-this.lineStart-h},end:{}});!this.eof();){var o=this.source.charCodeAt(this.index);if(++this.index,u.Character.isLineTerminator(o)){if(this.trackComment){a.end={line:this.lineNumber,column:this.index-this.lineStart-1};var f={multiLine:!1,slice:[d+h,this.index-1],range:[d,this.index-1],loc:a};g.push(f)}return o===13&&this.source.charCodeAt(this.index)===10&&++this.index,++this.lineNumber,this.lineStart=this.index,g}}if(this.trackComment){a.end={line:this.lineNumber,column:this.index-this.lineStart};var f={multiLine:!1,slice:[d+h,this.index],range:[d,this.index],loc:a};g.push(f)}return g},m.prototype.skipMultiLineComment=function(){var h=[],g,d;for(this.trackComment&&(h=[],g=this.index-2,d={start:{line:this.lineNumber,column:this.index-this.lineStart-2},end:{}});!this.eof();){var a=this.source.charCodeAt(this.index);if(u.Character.isLineTerminator(a))a===13&&this.source.charCodeAt(this.index+1)===10&&++this.index,++this.lineNumber,++this.index,this.lineStart=this.index;else if(a===42){if(this.source.charCodeAt(this.index+1)===47){if(this.index+=2,this.trackComment){d.end={line:this.lineNumber,column:this.index-this.lineStart};var o={multiLine:!0,slice:[g+2,this.index-2],range:[g,this.index],loc:d};h.push(o)}return h}++this.index}else++this.index}if(this.trackComment){d.end={line:this.lineNumber,column:this.index-this.lineStart};var o={multiLine:!0,slice:[g+2,this.index],range:[g,this.index],loc:d};h.push(o)}return this.tolerateUnexpectedToken(),h},m.prototype.scanComments=function(){var h;this.trackComment&&(h=[]);for(var g=this.index===0;!this.eof();){var d=this.source.charCodeAt(this.index);if(u.Character.isWhiteSpace(d))++this.index;else if(u.Character.isLineTerminator(d))++this.index,d===13&&this.source.charCodeAt(this.index)===10&&++this.index,++this.lineNumber,this.lineStart=this.index,g=!0;else if(d===47)if(d=this.source.charCodeAt(this.index+1),d===47){this.index+=2;var a=this.skipSingleLineComment(2);this.trackComment&&(h=h.concat(a)),g=!0}else if(d===42){this.index+=2;var a=this.skipMultiLineComment();this.trackComment&&(h=h.concat(a))}else break;else if(g&&d===45)if(this.source.charCodeAt(this.index+1)===45&&this.source.charCodeAt(this.index+2)===62){this.index+=3;var a=this.skipSingleLineComment(3);this.trackComment&&(h=h.concat(a))}else break;else if(d===60&&!this.isModule)if(this.source.slice(this.index+1,this.index+4)==="!--"){this.index+=4;var a=this.skipSingleLineComment(4);this.trackComment&&(h=h.concat(a))}else break;else break}return h},m.prototype.isFutureReservedWord=function(h){switch(h){case"enum":case"export":case"import":case"super":return!0;default:return!1}},m.prototype.isStrictModeReservedWord=function(h){switch(h){case"implements":case"interface":case"package":case"private":case"protected":case"public":case"static":case"yield":case"let":return!0;default:return!1}},m.prototype.isRestrictedWord=function(h){return h==="eval"||h==="arguments"},m.prototype.isKeyword=function(h){switch(h.length){case 2:return h==="if"||h==="in"||h==="do";case 3:return h==="var"||h==="for"||h==="new"||h==="try"||h==="let";case 4:return h==="this"||h==="else"||h==="case"||h==="void"||h==="with"||h==="enum";case 5:return h==="while"||h==="break"||h==="catch"||h==="throw"||h==="const"||h==="yield"||h==="class"||h==="super";case 6:return h==="return"||h==="typeof"||h==="delete"||h==="switch"||h==="export"||h==="import";case 7:return h==="default"||h==="finally"||h==="extends";case 8:return h==="function"||h==="continue"||h==="debugger";case 10:return h==="instanceof";default:return!1}},m.prototype.codePointAt=function(h){var g=this.source.charCodeAt(h);if(g>=55296&&g<=56319){var d=this.source.charCodeAt(h+1);if(d>=56320&&d<=57343){var a=g;g=(a-55296)*1024+d-56320+65536}}return g},m.prototype.scanHexEscape=function(h){for(var g=h==="u"?4:2,d=0,a=0;a<g;++a)if(!this.eof()&&u.Character.isHexDigit(this.source.charCodeAt(this.index)))d=d*16+l(this.source[this.index++]);else return null;return String.fromCharCode(d)},m.prototype.scanUnicodeCodePointEscape=function(){var h=this.source[this.index],g=0;for(h==="}"&&this.throwUnexpectedToken();!this.eof()&&(h=this.source[this.index++],!!u.Character.isHexDigit(h.charCodeAt(0)));)g=g*16+l(h);return(g>1114111||h!=="}")&&this.throwUnexpectedToken(),u.Character.fromCodePoint(g)},m.prototype.getIdentifier=function(){for(var h=this.index++;!this.eof();){var g=this.source.charCodeAt(this.index);if(g===92)return this.index=h,this.getComplexIdentifier();if(g>=55296&&g<57343)return this.index=h,this.getComplexIdentifier();if(u.Character.isIdentifierPart(g))++this.index;else break}return this.source.slice(h,this.index)},m.prototype.getComplexIdentifier=function(){var h=this.codePointAt(this.index),g=u.Character.fromCodePoint(h);this.index+=g.length;var d;for(h===92&&(this.source.charCodeAt(this.index)!==117&&this.throwUnexpectedToken(),++this.index,this.source[this.index]==="{"?(++this.index,d=this.scanUnicodeCodePointEscape()):(d=this.scanHexEscape("u"),(d===null||d==="\\"||!u.Character.isIdentifierStart(d.charCodeAt(0)))&&this.throwUnexpectedToken()),g=d);!this.eof()&&(h=this.codePointAt(this.index),!!u.Character.isIdentifierPart(h));)d=u.Character.fromCodePoint(h),g+=d,this.index+=d.length,h===92&&(g=g.substr(0,g.length-1),this.source.charCodeAt(this.index)!==117&&this.throwUnexpectedToken(),++this.index,this.source[this.index]==="{"?(++this.index,d=this.scanUnicodeCodePointEscape()):(d=this.scanHexEscape("u"),(d===null||d==="\\"||!u.Character.isIdentifierPart(d.charCodeAt(0)))&&this.throwUnexpectedToken()),g+=d);return g},m.prototype.octalToDecimal=function(h){var g=h!=="0",d=v(h);return!this.eof()&&u.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(g=!0,d=d*8+v(this.source[this.index++]),"0123".indexOf(h)>=0&&!this.eof()&&u.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(d=d*8+v(this.source[this.index++]))),{code:d,octal:g}},m.prototype.scanIdentifier=function(){var h,g=this.index,d=this.source.charCodeAt(g)===92?this.getComplexIdentifier():this.getIdentifier();if(d.length===1?h=3:this.isKeyword(d)?h=4:d==="null"?h=5:d==="true"||d==="false"?h=1:h=3,h!==3&&g+d.length!==this.index){var a=this.index;this.index=g,this.tolerateUnexpectedToken(c.Messages.InvalidEscapedReservedWord),this.index=a}return{type:h,value:d,lineNumber:this.lineNumber,lineStart:this.lineStart,start:g,end:this.index}},m.prototype.scanPunctuator=function(){var h=this.index,g=this.source[this.index];switch(g){case"(":case"{":g==="{"&&this.curlyStack.push("{"),++this.index;break;case".":++this.index,this.source[this.index]==="."&&this.source[this.index+1]==="."&&(this.index+=2,g="...");break;case"}":++this.index,this.curlyStack.pop();break;case")":case";":case",":case"[":case"]":case":":case"?":case"~":++this.index;break;default:g=this.source.substr(this.index,4),g===">>>="?this.index+=4:(g=g.substr(0,3),g==="==="||g==="!=="||g===">>>"||g==="<<="||g===">>="||g==="**="?this.index+=3:(g=g.substr(0,2),g==="&&"||g==="||"||g==="=="||g==="!="||g==="+="||g==="-="||g==="*="||g==="/="||g==="++"||g==="--"||g==="<<"||g===">>"||g==="&="||g==="|="||g==="^="||g==="%="||g==="<="||g===">="||g==="=>"||g==="**"?this.index+=2:(g=this.source[this.index],"<>=!+-*%&|^/".indexOf(g)>=0&&++this.index)))}return this.index===h&&this.throwUnexpectedToken(),{type:7,value:g,lineNumber:this.lineNumber,lineStart:this.lineStart,start:h,end:this.index}},m.prototype.scanHexLiteral=function(h){for(var g="";!this.eof()&&u.Character.isHexDigit(this.source.charCodeAt(this.index));)g+=this.source[this.index++];return g.length===0&&this.throwUnexpectedToken(),u.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:6,value:parseInt("0x"+g,16),lineNumber:this.lineNumber,lineStart:this.lineStart,start:h,end:this.index}},m.prototype.scanBinaryLiteral=function(h){for(var g="",d;!this.eof()&&(d=this.source[this.index],!(d!=="0"&&d!=="1"));)g+=this.source[this.index++];return g.length===0&&this.throwUnexpectedToken(),this.eof()||(d=this.source.charCodeAt(this.index),(u.Character.isIdentifierStart(d)||u.Character.isDecimalDigit(d))&&this.throwUnexpectedToken()),{type:6,value:parseInt(g,2),lineNumber:this.lineNumber,lineStart:this.lineStart,start:h,end:this.index}},m.prototype.scanOctalLiteral=function(h,g){var d="",a=!1;for(u.Character.isOctalDigit(h.charCodeAt(0))?(a=!0,d="0"+this.source[this.index++]):++this.index;!this.eof()&&u.Character.isOctalDigit(this.source.charCodeAt(this.index));)d+=this.source[this.index++];return!a&&d.length===0&&this.throwUnexpectedToken(),(u.Character.isIdentifierStart(this.source.charCodeAt(this.index))||u.Character.isDecimalDigit(this.source.charCodeAt(this.index)))&&this.throwUnexpectedToken(),{type:6,value:parseInt(d,8),octal:a,lineNumber:this.lineNumber,lineStart:this.lineStart,start:g,end:this.index}},m.prototype.isImplicitOctalLiteral=function(){for(var h=this.index+1;h<this.length;++h){var g=this.source[h];if(g==="8"||g==="9")return!1;if(!u.Character.isOctalDigit(g.charCodeAt(0)))return!0}return!0},m.prototype.scanNumericLiteral=function(){var h=this.index,g=this.source[h];s.assert(u.Character.isDecimalDigit(g.charCodeAt(0))||g===".","Numeric literal must start with a decimal digit or a decimal point");var d="";if(g!=="."){if(d=this.source[this.index++],g=this.source[this.index],d==="0"){if(g==="x"||g==="X")return++this.index,this.scanHexLiteral(h);if(g==="b"||g==="B")return++this.index,this.scanBinaryLiteral(h);if(g==="o"||g==="O")return this.scanOctalLiteral(g,h);if(g&&u.Character.isOctalDigit(g.charCodeAt(0))&&this.isImplicitOctalLiteral())return this.scanOctalLiteral(g,h)}for(;u.Character.isDecimalDigit(this.source.charCodeAt(this.index));)d+=this.source[this.index++];g=this.source[this.index]}if(g==="."){for(d+=this.source[this.index++];u.Character.isDecimalDigit(this.source.charCodeAt(this.index));)d+=this.source[this.index++];g=this.source[this.index]}if(g==="e"||g==="E")if(d+=this.source[this.index++],g=this.source[this.index],(g==="+"||g==="-")&&(d+=this.source[this.index++]),u.Character.isDecimalDigit(this.source.charCodeAt(this.index)))for(;u.Character.isDecimalDigit(this.source.charCodeAt(this.index));)d+=this.source[this.index++];else this.throwUnexpectedToken();return u.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:6,value:parseFloat(d),lineNumber:this.lineNumber,lineStart:this.lineStart,start:h,end:this.index}},m.prototype.scanStringLiteral=function(){var h=this.index,g=this.source[h];s.assert(g==="'"||g==='"',"String literal must starts with a quote"),++this.index;for(var d=!1,a="";!this.eof();){var o=this.source[this.index++];if(o===g){g="";break}else if(o==="\\")if(o=this.source[this.index++],!o||!u.Character.isLineTerminator(o.charCodeAt(0)))switch(o){case"u":if(this.source[this.index]==="{")++this.index,a+=this.scanUnicodeCodePointEscape();else{var f=this.scanHexEscape(o);f===null&&this.throwUnexpectedToken(),a+=f}break;case"x":var x=this.scanHexEscape(o);x===null&&this.throwUnexpectedToken(c.Messages.InvalidHexEscapeSequence),a+=x;break;case"n":a+=`
`;break;case"r":a+="\r";break;case"t":a+="	";break;case"b":a+="\b";break;case"f":a+="\f";break;case"v":a+="\v";break;case"8":case"9":a+=o,this.tolerateUnexpectedToken();break;default:if(o&&u.Character.isOctalDigit(o.charCodeAt(0))){var y=this.octalToDecimal(o);d=y.octal||d,a+=String.fromCharCode(y.code)}else a+=o;break}else++this.lineNumber,o==="\r"&&this.source[this.index]===`
`&&++this.index,this.lineStart=this.index;else{if(u.Character.isLineTerminator(o.charCodeAt(0)))break;a+=o}}return g!==""&&(this.index=h,this.throwUnexpectedToken()),{type:8,value:a,octal:d,lineNumber:this.lineNumber,lineStart:this.lineStart,start:h,end:this.index}},m.prototype.scanTemplate=function(){var h="",g=!1,d=this.index,a=this.source[d]==="`",o=!1,f=2;for(++this.index;!this.eof();){var x=this.source[this.index++];if(x==="`"){f=1,o=!0,g=!0;break}else if(x==="$"){if(this.source[this.index]==="{"){this.curlyStack.push("${"),++this.index,g=!0;break}h+=x}else if(x==="\\")if(x=this.source[this.index++],u.Character.isLineTerminator(x.charCodeAt(0)))++this.lineNumber,x==="\r"&&this.source[this.index]===`
`&&++this.index,this.lineStart=this.index;else switch(x){case"n":h+=`
`;break;case"r":h+="\r";break;case"t":h+="	";break;case"u":if(this.source[this.index]==="{")++this.index,h+=this.scanUnicodeCodePointEscape();else{var y=this.index,E=this.scanHexEscape(x);E!==null?h+=E:(this.index=y,h+=x)}break;case"x":var _=this.scanHexEscape(x);_===null&&this.throwUnexpectedToken(c.Messages.InvalidHexEscapeSequence),h+=_;break;case"b":h+="\b";break;case"f":h+="\f";break;case"v":h+="\v";break;default:x==="0"?(u.Character.isDecimalDigit(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(c.Messages.TemplateOctalLiteral),h+="\0"):u.Character.isOctalDigit(x.charCodeAt(0))?this.throwUnexpectedToken(c.Messages.TemplateOctalLiteral):h+=x;break}else u.Character.isLineTerminator(x.charCodeAt(0))?(++this.lineNumber,x==="\r"&&this.source[this.index]===`
`&&++this.index,this.lineStart=this.index,h+=`
`):h+=x}return g||this.throwUnexpectedToken(),a||this.curlyStack.pop(),{type:10,value:this.source.slice(d+1,this.index-f),cooked:h,head:a,tail:o,lineNumber:this.lineNumber,lineStart:this.lineStart,start:d,end:this.index}},m.prototype.testRegExp=function(h,g){var d="￿",a=h,o=this;g.indexOf("u")>=0&&(a=a.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,function(f,x,y){var E=parseInt(x||y,16);return E>1114111&&o.throwUnexpectedToken(c.Messages.InvalidRegExp),E<=65535?String.fromCharCode(E):d}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,d));try{RegExp(a)}catch{this.throwUnexpectedToken(c.Messages.InvalidRegExp)}try{return new RegExp(h,g)}catch{return null}},m.prototype.scanRegExpBody=function(){var h=this.source[this.index];s.assert(h==="/","Regular expression literal must start with a slash");for(var g=this.source[this.index++],d=!1,a=!1;!this.eof();)if(h=this.source[this.index++],g+=h,h==="\\")h=this.source[this.index++],u.Character.isLineTerminator(h.charCodeAt(0))&&this.throwUnexpectedToken(c.Messages.UnterminatedRegExp),g+=h;else if(u.Character.isLineTerminator(h.charCodeAt(0)))this.throwUnexpectedToken(c.Messages.UnterminatedRegExp);else if(d)h==="]"&&(d=!1);else if(h==="/"){a=!0;break}else h==="["&&(d=!0);return a||this.throwUnexpectedToken(c.Messages.UnterminatedRegExp),g.substr(1,g.length-2)},m.prototype.scanRegExpFlags=function(){for(var h="",g="";!this.eof();){var d=this.source[this.index];if(!u.Character.isIdentifierPart(d.charCodeAt(0)))break;if(++this.index,d==="\\"&&!this.eof())if(d=this.source[this.index],d==="u"){++this.index;var a=this.index,o=this.scanHexEscape("u");if(o!==null)for(g+=o,h+="\\u";a<this.index;++a)h+=this.source[a];else this.index=a,g+="u",h+="\\u";this.tolerateUnexpectedToken()}else h+="\\",this.tolerateUnexpectedToken();else g+=d,h+=d}return g},m.prototype.scanRegExp=function(){var h=this.index,g=this.scanRegExpBody(),d=this.scanRegExpFlags(),a=this.testRegExp(g,d);return{type:9,value:"",pattern:g,flags:d,regex:a,lineNumber:this.lineNumber,lineStart:this.lineStart,start:h,end:this.index}},m.prototype.lex=function(){if(this.eof())return{type:2,value:"",lineNumber:this.lineNumber,lineStart:this.lineStart,start:this.index,end:this.index};var h=this.source.charCodeAt(this.index);return u.Character.isIdentifierStart(h)?this.scanIdentifier():h===40||h===41||h===59?this.scanPunctuator():h===39||h===34?this.scanStringLiteral():h===46?u.Character.isDecimalDigit(this.source.charCodeAt(this.index+1))?this.scanNumericLiteral():this.scanPunctuator():u.Character.isDecimalDigit(h)?this.scanNumericLiteral():h===96||h===125&&this.curlyStack[this.curlyStack.length-1]==="${"?this.scanTemplate():h>=55296&&h<57343&&u.Character.isIdentifierStart(this.codePointAt(this.index))?this.scanIdentifier():this.scanPunctuator()},m})();r.Scanner=p},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.TokenName={},r.TokenName[1]="Boolean",r.TokenName[2]="<end>",r.TokenName[3]="Identifier",r.TokenName[4]="Keyword",r.TokenName[5]="Null",r.TokenName[6]="Numeric",r.TokenName[7]="Punctuator",r.TokenName[8]="String",r.TokenName[9]="RegularExpression",r.TokenName[10]="Template"},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.XHTMLEntities={quot:'"',amp:"&",apos:"'",gt:">",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",frasl:"⁄",euro:"€",image:"ℑ",weierp:"℘",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",lang:"⟨",rang:"⟩"}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(10),u=i(12),c=i(13),l=(function(){function p(){this.values=[],this.curly=this.paren=-1}return p.prototype.beforeFunctionExpression=function(m){return["(","{","[","in","typeof","instanceof","new","return","case","delete","throw","void","=","+=","-=","*=","**=","/=","%=","<<=",">>=",">>>=","&=","|=","^=",",","+","-","*","**","/","%","++","--","<<",">>",">>>","&","|","^","!","~","&&","||","?",":","===","==",">=","<=","<",">","!=","!=="].indexOf(m)>=0},p.prototype.isRegexStart=function(){var m=this.values[this.values.length-1],h=m!==null;switch(m){case"this":case"]":h=!1;break;case")":var g=this.values[this.paren-1];h=g==="if"||g==="while"||g==="for"||g==="with";break;case"}":if(h=!1,this.values[this.curly-3]==="function"){var d=this.values[this.curly-4];h=d?!this.beforeFunctionExpression(d):!1}else if(this.values[this.curly-4]==="function"){var d=this.values[this.curly-5];h=d?!this.beforeFunctionExpression(d):!0}break}return h},p.prototype.push=function(m){m.type===7||m.type===4?(m.value==="{"?this.curly=this.values.length:m.value==="("&&(this.paren=this.values.length),this.values.push(m.value)):this.values.push(null)},p})(),v=(function(){function p(m,h){this.errorHandler=new s.ErrorHandler,this.errorHandler.tolerant=h?typeof h.tolerant=="boolean"&&h.tolerant:!1,this.scanner=new u.Scanner(m,this.errorHandler),this.scanner.trackComment=h?typeof h.comment=="boolean"&&h.comment:!1,this.trackRange=h?typeof h.range=="boolean"&&h.range:!1,this.trackLoc=h?typeof h.loc=="boolean"&&h.loc:!1,this.buffer=[],this.reader=new l}return p.prototype.errors=function(){return this.errorHandler.errors},p.prototype.getNextToken=function(){if(this.buffer.length===0){var m=this.scanner.scanComments();if(this.scanner.trackComment)for(var h=0;h<m.length;++h){var g=m[h],d=this.scanner.source.slice(g.slice[0],g.slice[1]),a={type:g.multiLine?"BlockComment":"LineComment",value:d};this.trackRange&&(a.range=g.range),this.trackLoc&&(a.loc=g.loc),this.buffer.push(a)}if(!this.scanner.eof()){var o=void 0;this.trackLoc&&(o={start:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},end:{}});var f=this.scanner.source[this.scanner.index]==="/"&&this.reader.isRegexStart(),x=f?this.scanner.scanRegExp():this.scanner.lex();this.reader.push(x);var y={type:c.TokenName[x.type],value:this.scanner.source.slice(x.start,x.end)};if(this.trackRange&&(y.range=[x.start,x.end]),this.trackLoc&&(o.end={line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},y.loc=o),x.type===9){var E=x.pattern,_=x.flags;y.regex={pattern:E,flags:_}}this.buffer.push(y)}}return this.buffer.shift()},p})();r.Tokenizer=v}])})})(dr)),dr.exports}var qe={},Nr={},$t={},On;function js(){if(On)return $t;On=1,$t.byteLength=c,$t.toByteArray=v,$t.fromByteArray=h;for(var t=[],e=[],n=typeof Uint8Array<"u"?Uint8Array:Array,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,s=r.length;i<s;++i)t[i]=r[i],e[r.charCodeAt(i)]=i;e[45]=62,e[95]=63;function u(g){var d=g.length;if(d%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var a=g.indexOf("=");a===-1&&(a=d);var o=a===d?0:4-a%4;return[a,o]}function c(g){var d=u(g),a=d[0],o=d[1];return(a+o)*3/4-o}function l(g,d,a){return(d+a)*3/4-a}function v(g){var d,a=u(g),o=a[0],f=a[1],x=new n(l(g,o,f)),y=0,E=f>0?o-4:o,_;for(_=0;_<E;_+=4)d=e[g.charCodeAt(_)]<<18|e[g.charCodeAt(_+1)]<<12|e[g.charCodeAt(_+2)]<<6|e[g.charCodeAt(_+3)],x[y++]=d>>16&255,x[y++]=d>>8&255,x[y++]=d&255;return f===2&&(d=e[g.charCodeAt(_)]<<2|e[g.charCodeAt(_+1)]>>4,x[y++]=d&255),f===1&&(d=e[g.charCodeAt(_)]<<10|e[g.charCodeAt(_+1)]<<4|e[g.charCodeAt(_+2)]>>2,x[y++]=d>>8&255,x[y++]=d&255),x}function p(g){return t[g>>18&63]+t[g>>12&63]+t[g>>6&63]+t[g&63]}function m(g,d,a){for(var o,f=[],x=d;x<a;x+=3)o=(g[x]<<16&16711680)+(g[x+1]<<8&65280)+(g[x+2]&255),f.push(p(o));return f.join("")}function h(g){for(var d,a=g.length,o=a%3,f=[],x=16383,y=0,E=a-o;y<E;y+=x)f.push(m(g,y,y+x>E?E:y+x));return o===1?(d=g[a-1],f.push(t[d>>2]+t[d<<4&63]+"==")):o===2&&(d=(g[a-2]<<8)+g[a-1],f.push(t[d>>10]+t[d>>4&63]+t[d<<2&63]+"=")),f.join("")}return $t}var sr={};var Gn;function qs(){return Gn||(Gn=1,sr.read=function(t,e,n,r,i){var s,u,c=i*8-r-1,l=(1<<c)-1,v=l>>1,p=-7,m=n?i-1:0,h=n?-1:1,g=t[e+m];for(m+=h,s=g&(1<<-p)-1,g>>=-p,p+=c;p>0;s=s*256+t[e+m],m+=h,p-=8);for(u=s&(1<<-p)-1,s>>=-p,p+=r;p>0;u=u*256+t[e+m],m+=h,p-=8);if(s===0)s=1-v;else{if(s===l)return u?NaN:(g?-1:1)*(1/0);u=u+Math.pow(2,r),s=s-v}return(g?-1:1)*u*Math.pow(2,s-r)},sr.write=function(t,e,n,r,i,s){var u,c,l,v=s*8-i-1,p=(1<<v)-1,m=p>>1,h=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=r?0:s-1,d=r?1:-1,a=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(c=isNaN(e)?1:0,u=p):(u=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-u))<1&&(u--,l*=2),u+m>=1?e+=h/l:e+=h*Math.pow(2,1-m),e*l>=2&&(u++,l/=2),u+m>=p?(c=0,u=p):u+m>=1?(c=(e*l-1)*Math.pow(2,i),u=u+m):(c=e*Math.pow(2,m-1)*Math.pow(2,i),u=0));i>=8;t[n+g]=c&255,g+=d,c/=256,i-=8);for(u=u<<i|c,v+=i;v>0;t[n+g]=u&255,g+=d,u/=256,v-=8);t[n+g-d]|=a*128}),sr}var zn;function Xs(){return zn||(zn=1,(function(t){const e=js(),n=qs(),r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=c,t.SlowBuffer=x,t.INSPECT_MAX_BYTES=50;const i=2147483647;t.kMaxLength=i,c.TYPED_ARRAY_SUPPORT=s(),!c.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function s(){try{const D=new Uint8Array(1),b={foo:function(){return 42}};return Object.setPrototypeOf(b,Uint8Array.prototype),Object.setPrototypeOf(D,b),D.foo()===42}catch{return!1}}Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}});function u(D){if(D>i)throw new RangeError('The value "'+D+'" is invalid for option "size"');const b=new Uint8Array(D);return Object.setPrototypeOf(b,c.prototype),b}function c(D,b,w){if(typeof D=="number"){if(typeof b=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return m(D)}return l(D,b,w)}c.poolSize=8192;function l(D,b,w){if(typeof D=="string")return h(D,b);if(ArrayBuffer.isView(D))return d(D);if(D==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof D);if($(D,ArrayBuffer)||D&&$(D.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&($(D,SharedArrayBuffer)||D&&$(D.buffer,SharedArrayBuffer)))return a(D,b,w);if(typeof D=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const C=D.valueOf&&D.valueOf();if(C!=null&&C!==D)return c.from(C,b,w);const k=o(D);if(k)return k;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof D[Symbol.toPrimitive]=="function")return c.from(D[Symbol.toPrimitive]("string"),b,w);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof D)}c.from=function(D,b,w){return l(D,b,w)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array);function v(D){if(typeof D!="number")throw new TypeError('"size" argument must be of type number');if(D<0)throw new RangeError('The value "'+D+'" is invalid for option "size"')}function p(D,b,w){return v(D),D<=0?u(D):b!==void 0?typeof w=="string"?u(D).fill(b,w):u(D).fill(b):u(D)}c.alloc=function(D,b,w){return p(D,b,w)};function m(D){return v(D),u(D<0?0:f(D)|0)}c.allocUnsafe=function(D){return m(D)},c.allocUnsafeSlow=function(D){return m(D)};function h(D,b){if((typeof b!="string"||b==="")&&(b="utf8"),!c.isEncoding(b))throw new TypeError("Unknown encoding: "+b);const w=y(D,b)|0;let C=u(w);const k=C.write(D,b);return k!==w&&(C=C.slice(0,k)),C}function g(D){const b=D.length<0?0:f(D.length)|0,w=u(b);for(let C=0;C<b;C+=1)w[C]=D[C]&255;return w}function d(D){if($(D,Uint8Array)){const b=new Uint8Array(D);return a(b.buffer,b.byteOffset,b.byteLength)}return g(D)}function a(D,b,w){if(b<0||D.byteLength<b)throw new RangeError('"offset" is outside of buffer bounds');if(D.byteLength<b+(w||0))throw new RangeError('"length" is outside of buffer bounds');let C;return b===void 0&&w===void 0?C=new Uint8Array(D):w===void 0?C=new Uint8Array(D,b):C=new Uint8Array(D,b,w),Object.setPrototypeOf(C,c.prototype),C}function o(D){if(c.isBuffer(D)){const b=f(D.length)|0,w=u(b);return w.length===0||D.copy(w,0,0,b),w}if(D.length!==void 0)return typeof D.length!="number"||we(D.length)?u(0):g(D);if(D.type==="Buffer"&&Array.isArray(D.data))return g(D.data)}function f(D){if(D>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return D|0}function x(D){return+D!=D&&(D=0),c.alloc(+D)}c.isBuffer=function(b){return b!=null&&b._isBuffer===!0&&b!==c.prototype},c.compare=function(b,w){if($(b,Uint8Array)&&(b=c.from(b,b.offset,b.byteLength)),$(w,Uint8Array)&&(w=c.from(w,w.offset,w.byteLength)),!c.isBuffer(b)||!c.isBuffer(w))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(b===w)return 0;let C=b.length,k=w.length;for(let L=0,G=Math.min(C,k);L<G;++L)if(b[L]!==w[L]){C=b[L],k=w[L];break}return C<k?-1:k<C?1:0},c.isEncoding=function(b){switch(String(b).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(b,w){if(!Array.isArray(b))throw new TypeError('"list" argument must be an Array of Buffers');if(b.length===0)return c.alloc(0);let C;if(w===void 0)for(w=0,C=0;C<b.length;++C)w+=b[C].length;const k=c.allocUnsafe(w);let L=0;for(C=0;C<b.length;++C){let G=b[C];if($(G,Uint8Array))L+G.length>k.length?(c.isBuffer(G)||(G=c.from(G)),G.copy(k,L)):Uint8Array.prototype.set.call(k,G,L);else if(c.isBuffer(G))G.copy(k,L);else throw new TypeError('"list" argument must be an Array of Buffers');L+=G.length}return k};function y(D,b){if(c.isBuffer(D))return D.length;if(ArrayBuffer.isView(D)||$(D,ArrayBuffer))return D.byteLength;if(typeof D!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof D);const w=D.length,C=arguments.length>2&&arguments[2]===!0;if(!C&&w===0)return 0;let k=!1;for(;;)switch(b){case"ascii":case"latin1":case"binary":return w;case"utf8":case"utf-8":return Ae(D).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return w*2;case"hex":return w>>>1;case"base64":return Z(D).length;default:if(k)return C?-1:Ae(D).length;b=(""+b).toLowerCase(),k=!0}}c.byteLength=y;function E(D,b,w){let C=!1;if((b===void 0||b<0)&&(b=0),b>this.length||((w===void 0||w>this.length)&&(w=this.length),w<=0)||(w>>>=0,b>>>=0,w<=b))return"";for(D||(D="utf8");;)switch(D){case"hex":return Y(this,b,w);case"utf8":case"utf-8":return O(this,b,w);case"ascii":return z(this,b,w);case"latin1":case"binary":return X(this,b,w);case"base64":return U(this,b,w);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return W(this,b,w);default:if(C)throw new TypeError("Unknown encoding: "+D);D=(D+"").toLowerCase(),C=!0}}c.prototype._isBuffer=!0;function _(D,b,w){const C=D[b];D[b]=D[w],D[w]=C}c.prototype.swap16=function(){const b=this.length;if(b%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let w=0;w<b;w+=2)_(this,w,w+1);return this},c.prototype.swap32=function(){const b=this.length;if(b%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let w=0;w<b;w+=4)_(this,w,w+3),_(this,w+1,w+2);return this},c.prototype.swap64=function(){const b=this.length;if(b%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let w=0;w<b;w+=8)_(this,w,w+7),_(this,w+1,w+6),_(this,w+2,w+5),_(this,w+3,w+4);return this},c.prototype.toString=function(){const b=this.length;return b===0?"":arguments.length===0?O(this,0,b):E.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(b){if(!c.isBuffer(b))throw new TypeError("Argument must be a Buffer");return this===b?!0:c.compare(this,b)===0},c.prototype.inspect=function(){let b="";const w=t.INSPECT_MAX_BYTES;return b=this.toString("hex",0,w).replace(/(.{2})/g,"$1 ").trim(),this.length>w&&(b+=" ... "),"<Buffer "+b+">"},r&&(c.prototype[r]=c.prototype.inspect),c.prototype.compare=function(b,w,C,k,L){if($(b,Uint8Array)&&(b=c.from(b,b.offset,b.byteLength)),!c.isBuffer(b))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof b);if(w===void 0&&(w=0),C===void 0&&(C=b?b.length:0),k===void 0&&(k=0),L===void 0&&(L=this.length),w<0||C>b.length||k<0||L>this.length)throw new RangeError("out of range index");if(k>=L&&w>=C)return 0;if(k>=L)return-1;if(w>=C)return 1;if(w>>>=0,C>>>=0,k>>>=0,L>>>=0,this===b)return 0;let G=L-k,ge=C-w;const Te=Math.min(G,ge),Ce=this.slice(k,L),Fe=b.slice(w,C);for(let Ee=0;Ee<Te;++Ee)if(Ce[Ee]!==Fe[Ee]){G=Ce[Ee],ge=Fe[Ee];break}return G<ge?-1:ge<G?1:0};function S(D,b,w,C,k){if(D.length===0)return-1;if(typeof w=="string"?(C=w,w=0):w>2147483647?w=2147483647:w<-2147483648&&(w=-2147483648),w=+w,we(w)&&(w=k?0:D.length-1),w<0&&(w=D.length+w),w>=D.length){if(k)return-1;w=D.length-1}else if(w<0)if(k)w=0;else return-1;if(typeof b=="string"&&(b=c.from(b,C)),c.isBuffer(b))return b.length===0?-1:T(D,b,w,C,k);if(typeof b=="number")return b=b&255,typeof Uint8Array.prototype.indexOf=="function"?k?Uint8Array.prototype.indexOf.call(D,b,w):Uint8Array.prototype.lastIndexOf.call(D,b,w):T(D,[b],w,C,k);throw new TypeError("val must be string, number or Buffer")}function T(D,b,w,C,k){let L=1,G=D.length,ge=b.length;if(C!==void 0&&(C=String(C).toLowerCase(),C==="ucs2"||C==="ucs-2"||C==="utf16le"||C==="utf-16le")){if(D.length<2||b.length<2)return-1;L=2,G/=2,ge/=2,w/=2}function Te(Fe,Ee){return L===1?Fe[Ee]:Fe.readUInt16BE(Ee*L)}let Ce;if(k){let Fe=-1;for(Ce=w;Ce<G;Ce++)if(Te(D,Ce)===Te(b,Fe===-1?0:Ce-Fe)){if(Fe===-1&&(Fe=Ce),Ce-Fe+1===ge)return Fe*L}else Fe!==-1&&(Ce-=Ce-Fe),Fe=-1}else for(w+ge>G&&(w=G-ge),Ce=w;Ce>=0;Ce--){let Fe=!0;for(let Ee=0;Ee<ge;Ee++)if(Te(D,Ce+Ee)!==Te(b,Ee)){Fe=!1;break}if(Fe)return Ce}return-1}c.prototype.includes=function(b,w,C){return this.indexOf(b,w,C)!==-1},c.prototype.indexOf=function(b,w,C){return S(this,b,w,C,!0)},c.prototype.lastIndexOf=function(b,w,C){return S(this,b,w,C,!1)};function A(D,b,w,C){w=Number(w)||0;const k=D.length-w;C?(C=Number(C),C>k&&(C=k)):C=k;const L=b.length;C>L/2&&(C=L/2);let G;for(G=0;G<C;++G){const ge=parseInt(b.substr(G*2,2),16);if(we(ge))return G;D[w+G]=ge}return G}function I(D,b,w,C){return ue(Ae(b,D.length-w),D,w,C)}function N(D,b,w,C){return ue(Ue(b),D,w,C)}function F(D,b,w,C){return ue(Z(b),D,w,C)}function P(D,b,w,C){return ue(fe(b,D.length-w),D,w,C)}c.prototype.write=function(b,w,C,k){if(w===void 0)k="utf8",C=this.length,w=0;else if(C===void 0&&typeof w=="string")k=w,C=this.length,w=0;else if(isFinite(w))w=w>>>0,isFinite(C)?(C=C>>>0,k===void 0&&(k="utf8")):(k=C,C=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const L=this.length-w;if((C===void 0||C>L)&&(C=L),b.length>0&&(C<0||w<0)||w>this.length)throw new RangeError("Attempt to write outside buffer bounds");k||(k="utf8");let G=!1;for(;;)switch(k){case"hex":return A(this,b,w,C);case"utf8":case"utf-8":return I(this,b,w,C);case"ascii":case"latin1":case"binary":return N(this,b,w,C);case"base64":return F(this,b,w,C);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,b,w,C);default:if(G)throw new TypeError("Unknown encoding: "+k);k=(""+k).toLowerCase(),G=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function U(D,b,w){return b===0&&w===D.length?e.fromByteArray(D):e.fromByteArray(D.slice(b,w))}function O(D,b,w){w=Math.min(D.length,w);const C=[];let k=b;for(;k<w;){const L=D[k];let G=null,ge=L>239?4:L>223?3:L>191?2:1;if(k+ge<=w){let Te,Ce,Fe,Ee;switch(ge){case 1:L<128&&(G=L);break;case 2:Te=D[k+1],(Te&192)===128&&(Ee=(L&31)<<6|Te&63,Ee>127&&(G=Ee));break;case 3:Te=D[k+1],Ce=D[k+2],(Te&192)===128&&(Ce&192)===128&&(Ee=(L&15)<<12|(Te&63)<<6|Ce&63,Ee>2047&&(Ee<55296||Ee>57343)&&(G=Ee));break;case 4:Te=D[k+1],Ce=D[k+2],Fe=D[k+3],(Te&192)===128&&(Ce&192)===128&&(Fe&192)===128&&(Ee=(L&15)<<18|(Te&63)<<12|(Ce&63)<<6|Fe&63,Ee>65535&&Ee<1114112&&(G=Ee))}}G===null?(G=65533,ge=1):G>65535&&(G-=65536,C.push(G>>>10&1023|55296),G=56320|G&1023),C.push(G),k+=ge}return J(C)}const V=4096;function J(D){const b=D.length;if(b<=V)return String.fromCharCode.apply(String,D);let w="",C=0;for(;C<b;)w+=String.fromCharCode.apply(String,D.slice(C,C+=V));return w}function z(D,b,w){let C="";w=Math.min(D.length,w);for(let k=b;k<w;++k)C+=String.fromCharCode(D[k]&127);return C}function X(D,b,w){let C="";w=Math.min(D.length,w);for(let k=b;k<w;++k)C+=String.fromCharCode(D[k]);return C}function Y(D,b,w){const C=D.length;(!b||b<0)&&(b=0),(!w||w<0||w>C)&&(w=C);let k="";for(let L=b;L<w;++L)k+=Ve[D[L]];return k}function W(D,b,w){const C=D.slice(b,w);let k="";for(let L=0;L<C.length-1;L+=2)k+=String.fromCharCode(C[L]+C[L+1]*256);return k}c.prototype.slice=function(b,w){const C=this.length;b=~~b,w=w===void 0?C:~~w,b<0?(b+=C,b<0&&(b=0)):b>C&&(b=C),w<0?(w+=C,w<0&&(w=0)):w>C&&(w=C),w<b&&(w=b);const k=this.subarray(b,w);return Object.setPrototypeOf(k,c.prototype),k};function q(D,b,w){if(D%1!==0||D<0)throw new RangeError("offset is not uint");if(D+b>w)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUintLE=c.prototype.readUIntLE=function(b,w,C){b=b>>>0,w=w>>>0,C||q(b,w,this.length);let k=this[b],L=1,G=0;for(;++G<w&&(L*=256);)k+=this[b+G]*L;return k},c.prototype.readUintBE=c.prototype.readUIntBE=function(b,w,C){b=b>>>0,w=w>>>0,C||q(b,w,this.length);let k=this[b+--w],L=1;for(;w>0&&(L*=256);)k+=this[b+--w]*L;return k},c.prototype.readUint8=c.prototype.readUInt8=function(b,w){return b=b>>>0,w||q(b,1,this.length),this[b]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(b,w){return b=b>>>0,w||q(b,2,this.length),this[b]|this[b+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(b,w){return b=b>>>0,w||q(b,2,this.length),this[b]<<8|this[b+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(b,w){return b=b>>>0,w||q(b,4,this.length),(this[b]|this[b+1]<<8|this[b+2]<<16)+this[b+3]*16777216},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(b,w){return b=b>>>0,w||q(b,4,this.length),this[b]*16777216+(this[b+1]<<16|this[b+2]<<8|this[b+3])},c.prototype.readBigUInt64LE=_e(function(b){b=b>>>0,se(b,"offset");const w=this[b],C=this[b+7];(w===void 0||C===void 0)&&ce(b,this.length-8);const k=w+this[++b]*2**8+this[++b]*2**16+this[++b]*2**24,L=this[++b]+this[++b]*2**8+this[++b]*2**16+C*2**24;return BigInt(k)+(BigInt(L)<<BigInt(32))}),c.prototype.readBigUInt64BE=_e(function(b){b=b>>>0,se(b,"offset");const w=this[b],C=this[b+7];(w===void 0||C===void 0)&&ce(b,this.length-8);const k=w*2**24+this[++b]*2**16+this[++b]*2**8+this[++b],L=this[++b]*2**24+this[++b]*2**16+this[++b]*2**8+C;return(BigInt(k)<<BigInt(32))+BigInt(L)}),c.prototype.readIntLE=function(b,w,C){b=b>>>0,w=w>>>0,C||q(b,w,this.length);let k=this[b],L=1,G=0;for(;++G<w&&(L*=256);)k+=this[b+G]*L;return L*=128,k>=L&&(k-=Math.pow(2,8*w)),k},c.prototype.readIntBE=function(b,w,C){b=b>>>0,w=w>>>0,C||q(b,w,this.length);let k=w,L=1,G=this[b+--k];for(;k>0&&(L*=256);)G+=this[b+--k]*L;return L*=128,G>=L&&(G-=Math.pow(2,8*w)),G},c.prototype.readInt8=function(b,w){return b=b>>>0,w||q(b,1,this.length),this[b]&128?(255-this[b]+1)*-1:this[b]},c.prototype.readInt16LE=function(b,w){b=b>>>0,w||q(b,2,this.length);const C=this[b]|this[b+1]<<8;return C&32768?C|4294901760:C},c.prototype.readInt16BE=function(b,w){b=b>>>0,w||q(b,2,this.length);const C=this[b+1]|this[b]<<8;return C&32768?C|4294901760:C},c.prototype.readInt32LE=function(b,w){return b=b>>>0,w||q(b,4,this.length),this[b]|this[b+1]<<8|this[b+2]<<16|this[b+3]<<24},c.prototype.readInt32BE=function(b,w){return b=b>>>0,w||q(b,4,this.length),this[b]<<24|this[b+1]<<16|this[b+2]<<8|this[b+3]},c.prototype.readBigInt64LE=_e(function(b){b=b>>>0,se(b,"offset");const w=this[b],C=this[b+7];(w===void 0||C===void 0)&&ce(b,this.length-8);const k=this[b+4]+this[b+5]*2**8+this[b+6]*2**16+(C<<24);return(BigInt(k)<<BigInt(32))+BigInt(w+this[++b]*2**8+this[++b]*2**16+this[++b]*2**24)}),c.prototype.readBigInt64BE=_e(function(b){b=b>>>0,se(b,"offset");const w=this[b],C=this[b+7];(w===void 0||C===void 0)&&ce(b,this.length-8);const k=(w<<24)+this[++b]*2**16+this[++b]*2**8+this[++b];return(BigInt(k)<<BigInt(32))+BigInt(this[++b]*2**24+this[++b]*2**16+this[++b]*2**8+C)}),c.prototype.readFloatLE=function(b,w){return b=b>>>0,w||q(b,4,this.length),n.read(this,b,!0,23,4)},c.prototype.readFloatBE=function(b,w){return b=b>>>0,w||q(b,4,this.length),n.read(this,b,!1,23,4)},c.prototype.readDoubleLE=function(b,w){return b=b>>>0,w||q(b,8,this.length),n.read(this,b,!0,52,8)},c.prototype.readDoubleBE=function(b,w){return b=b>>>0,w||q(b,8,this.length),n.read(this,b,!1,52,8)};function re(D,b,w,C,k,L){if(!c.isBuffer(D))throw new TypeError('"buffer" argument must be a Buffer instance');if(b>k||b<L)throw new RangeError('"value" argument is out of bounds');if(w+C>D.length)throw new RangeError("Index out of range")}c.prototype.writeUintLE=c.prototype.writeUIntLE=function(b,w,C,k){if(b=+b,w=w>>>0,C=C>>>0,!k){const ge=Math.pow(2,8*C)-1;re(this,b,w,C,ge,0)}let L=1,G=0;for(this[w]=b&255;++G<C&&(L*=256);)this[w+G]=b/L&255;return w+C},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(b,w,C,k){if(b=+b,w=w>>>0,C=C>>>0,!k){const ge=Math.pow(2,8*C)-1;re(this,b,w,C,ge,0)}let L=C-1,G=1;for(this[w+L]=b&255;--L>=0&&(G*=256);)this[w+L]=b/G&255;return w+C},c.prototype.writeUint8=c.prototype.writeUInt8=function(b,w,C){return b=+b,w=w>>>0,C||re(this,b,w,1,255,0),this[w]=b&255,w+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(b,w,C){return b=+b,w=w>>>0,C||re(this,b,w,2,65535,0),this[w]=b&255,this[w+1]=b>>>8,w+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(b,w,C){return b=+b,w=w>>>0,C||re(this,b,w,2,65535,0),this[w]=b>>>8,this[w+1]=b&255,w+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(b,w,C){return b=+b,w=w>>>0,C||re(this,b,w,4,4294967295,0),this[w+3]=b>>>24,this[w+2]=b>>>16,this[w+1]=b>>>8,this[w]=b&255,w+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(b,w,C){return b=+b,w=w>>>0,C||re(this,b,w,4,4294967295,0),this[w]=b>>>24,this[w+1]=b>>>16,this[w+2]=b>>>8,this[w+3]=b&255,w+4};function xe(D,b,w,C,k){ee(b,C,k,D,w,7);let L=Number(b&BigInt(4294967295));D[w++]=L,L=L>>8,D[w++]=L,L=L>>8,D[w++]=L,L=L>>8,D[w++]=L;let G=Number(b>>BigInt(32)&BigInt(4294967295));return D[w++]=G,G=G>>8,D[w++]=G,G=G>>8,D[w++]=G,G=G>>8,D[w++]=G,w}function de(D,b,w,C,k){ee(b,C,k,D,w,7);let L=Number(b&BigInt(4294967295));D[w+7]=L,L=L>>8,D[w+6]=L,L=L>>8,D[w+5]=L,L=L>>8,D[w+4]=L;let G=Number(b>>BigInt(32)&BigInt(4294967295));return D[w+3]=G,G=G>>8,D[w+2]=G,G=G>>8,D[w+1]=G,G=G>>8,D[w]=G,w+8}c.prototype.writeBigUInt64LE=_e(function(b,w=0){return xe(this,b,w,BigInt(0),BigInt("0xffffffffffffffff"))}),c.prototype.writeBigUInt64BE=_e(function(b,w=0){return de(this,b,w,BigInt(0),BigInt("0xffffffffffffffff"))}),c.prototype.writeIntLE=function(b,w,C,k){if(b=+b,w=w>>>0,!k){const Te=Math.pow(2,8*C-1);re(this,b,w,C,Te-1,-Te)}let L=0,G=1,ge=0;for(this[w]=b&255;++L<C&&(G*=256);)b<0&&ge===0&&this[w+L-1]!==0&&(ge=1),this[w+L]=(b/G>>0)-ge&255;return w+C},c.prototype.writeIntBE=function(b,w,C,k){if(b=+b,w=w>>>0,!k){const Te=Math.pow(2,8*C-1);re(this,b,w,C,Te-1,-Te)}let L=C-1,G=1,ge=0;for(this[w+L]=b&255;--L>=0&&(G*=256);)b<0&&ge===0&&this[w+L+1]!==0&&(ge=1),this[w+L]=(b/G>>0)-ge&255;return w+C},c.prototype.writeInt8=function(b,w,C){return b=+b,w=w>>>0,C||re(this,b,w,1,127,-128),b<0&&(b=255+b+1),this[w]=b&255,w+1},c.prototype.writeInt16LE=function(b,w,C){return b=+b,w=w>>>0,C||re(this,b,w,2,32767,-32768),this[w]=b&255,this[w+1]=b>>>8,w+2},c.prototype.writeInt16BE=function(b,w,C){return b=+b,w=w>>>0,C||re(this,b,w,2,32767,-32768),this[w]=b>>>8,this[w+1]=b&255,w+2},c.prototype.writeInt32LE=function(b,w,C){return b=+b,w=w>>>0,C||re(this,b,w,4,2147483647,-2147483648),this[w]=b&255,this[w+1]=b>>>8,this[w+2]=b>>>16,this[w+3]=b>>>24,w+4},c.prototype.writeInt32BE=function(b,w,C){return b=+b,w=w>>>0,C||re(this,b,w,4,2147483647,-2147483648),b<0&&(b=4294967295+b+1),this[w]=b>>>24,this[w+1]=b>>>16,this[w+2]=b>>>8,this[w+3]=b&255,w+4},c.prototype.writeBigInt64LE=_e(function(b,w=0){return xe(this,b,w,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),c.prototype.writeBigInt64BE=_e(function(b,w=0){return de(this,b,w,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function be(D,b,w,C,k,L){if(w+C>D.length)throw new RangeError("Index out of range");if(w<0)throw new RangeError("Index out of range")}function ae(D,b,w,C,k){return b=+b,w=w>>>0,k||be(D,b,w,4),n.write(D,b,w,C,23,4),w+4}c.prototype.writeFloatLE=function(b,w,C){return ae(this,b,w,!0,C)},c.prototype.writeFloatBE=function(b,w,C){return ae(this,b,w,!1,C)};function ne(D,b,w,C,k){return b=+b,w=w>>>0,k||be(D,b,w,8),n.write(D,b,w,C,52,8),w+8}c.prototype.writeDoubleLE=function(b,w,C){return ne(this,b,w,!0,C)},c.prototype.writeDoubleBE=function(b,w,C){return ne(this,b,w,!1,C)},c.prototype.copy=function(b,w,C,k){if(!c.isBuffer(b))throw new TypeError("argument should be a Buffer");if(C||(C=0),!k&&k!==0&&(k=this.length),w>=b.length&&(w=b.length),w||(w=0),k>0&&k<C&&(k=C),k===C||b.length===0||this.length===0)return 0;if(w<0)throw new RangeError("targetStart out of bounds");if(C<0||C>=this.length)throw new RangeError("Index out of range");if(k<0)throw new RangeError("sourceEnd out of bounds");k>this.length&&(k=this.length),b.length-w<k-C&&(k=b.length-w+C);const L=k-C;return this===b&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(w,C,k):Uint8Array.prototype.set.call(b,this.subarray(C,k),w),L},c.prototype.fill=function(b,w,C,k){if(typeof b=="string"){if(typeof w=="string"?(k=w,w=0,C=this.length):typeof C=="string"&&(k=C,C=this.length),k!==void 0&&typeof k!="string")throw new TypeError("encoding must be a string");if(typeof k=="string"&&!c.isEncoding(k))throw new TypeError("Unknown encoding: "+k);if(b.length===1){const G=b.charCodeAt(0);(k==="utf8"&&G<128||k==="latin1")&&(b=G)}}else typeof b=="number"?b=b&255:typeof b=="boolean"&&(b=Number(b));if(w<0||this.length<w||this.length<C)throw new RangeError("Out of range index");if(C<=w)return this;w=w>>>0,C=C===void 0?this.length:C>>>0,b||(b=0);let L;if(typeof b=="number")for(L=w;L<C;++L)this[L]=b;else{const G=c.isBuffer(b)?b:c.from(b,k),ge=G.length;if(ge===0)throw new TypeError('The value "'+b+'" is invalid for argument "value"');for(L=0;L<C-w;++L)this[L+w]=G[L%ge]}return this};const te={};function oe(D,b,w){te[D]=class extends w{constructor(){super(),Object.defineProperty(this,"message",{value:b.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${D}]`,this.stack,delete this.name}get code(){return D}set code(k){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:k,writable:!0})}toString(){return`${this.name} [${D}]: ${this.message}`}}}oe("ERR_BUFFER_OUT_OF_BOUNDS",function(D){return D?`${D} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),oe("ERR_INVALID_ARG_TYPE",function(D,b){return`The "${D}" argument must be of type number. Received type ${typeof b}`},TypeError),oe("ERR_OUT_OF_RANGE",function(D,b,w){let C=`The value of "${D}" is out of range.`,k=w;return Number.isInteger(w)&&Math.abs(w)>2**32?k=le(String(w)):typeof w=="bigint"&&(k=String(w),(w>BigInt(2)**BigInt(32)||w<-(BigInt(2)**BigInt(32)))&&(k=le(k)),k+="n"),C+=` It must be ${b}. Received ${k}`,C},RangeError);function le(D){let b="",w=D.length;const C=D[0]==="-"?1:0;for(;w>=C+4;w-=3)b=`_${D.slice(w-3,w)}${b}`;return`${D.slice(0,w)}${b}`}function j(D,b,w){se(b,"offset"),(D[b]===void 0||D[b+w]===void 0)&&ce(b,D.length-(w+1))}function ee(D,b,w,C,k,L){if(D>w||D<b){const G=typeof b=="bigint"?"n":"";let ge;throw b===0||b===BigInt(0)?ge=`>= 0${G} and < 2${G} ** ${(L+1)*8}${G}`:ge=`>= -(2${G} ** ${(L+1)*8-1}${G}) and < 2 ** ${(L+1)*8-1}${G}`,new te.ERR_OUT_OF_RANGE("value",ge,D)}j(C,k,L)}function se(D,b){if(typeof D!="number")throw new te.ERR_INVALID_ARG_TYPE(b,"number",D)}function ce(D,b,w){throw Math.floor(D)!==D?(se(D,w),new te.ERR_OUT_OF_RANGE("offset","an integer",D)):b<0?new te.ERR_BUFFER_OUT_OF_BOUNDS:new te.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${b}`,D)}const Ie=/[^+/0-9A-Za-z-_]/g;function Me(D){if(D=D.split("=")[0],D=D.trim().replace(Ie,""),D.length<2)return"";for(;D.length%4!==0;)D=D+"=";return D}function Ae(D,b){b=b||1/0;let w;const C=D.length;let k=null;const L=[];for(let G=0;G<C;++G){if(w=D.charCodeAt(G),w>55295&&w<57344){if(!k){if(w>56319){(b-=3)>-1&&L.push(239,191,189);continue}else if(G+1===C){(b-=3)>-1&&L.push(239,191,189);continue}k=w;continue}if(w<56320){(b-=3)>-1&&L.push(239,191,189),k=w;continue}w=(k-55296<<10|w-56320)+65536}else k&&(b-=3)>-1&&L.push(239,191,189);if(k=null,w<128){if((b-=1)<0)break;L.push(w)}else if(w<2048){if((b-=2)<0)break;L.push(w>>6|192,w&63|128)}else if(w<65536){if((b-=3)<0)break;L.push(w>>12|224,w>>6&63|128,w&63|128)}else if(w<1114112){if((b-=4)<0)break;L.push(w>>18|240,w>>12&63|128,w>>6&63|128,w&63|128)}else throw new Error("Invalid code point")}return L}function Ue(D){const b=[];for(let w=0;w<D.length;++w)b.push(D.charCodeAt(w)&255);return b}function fe(D,b){let w,C,k;const L=[];for(let G=0;G<D.length&&!((b-=2)<0);++G)w=D.charCodeAt(G),C=w>>8,k=w%256,L.push(k),L.push(C);return L}function Z(D){return e.toByteArray(Me(D))}function ue(D,b,w,C){let k;for(k=0;k<C&&!(k+w>=b.length||k>=D.length);++k)b[k+w]=D[k];return k}function $(D,b){return D instanceof b||D!=null&&D.constructor!=null&&D.constructor.name!=null&&D.constructor.name===b.name}function we(D){return D!==D}const Ve=(function(){const D="0123456789abcdef",b=new Array(256);for(let w=0;w<16;++w){const C=w*16;for(let k=0;k<16;++k)b[C+k]=D[w]+D[k]}return b})();function _e(D){return typeof BigInt>"u"?Se:D}function Se(){throw new Error("BigInt not supported")}})(Nr)),Nr}var Vn;function an(){if(Vn)return qe;Vn=1;function t(a){return Array.isArray?Array.isArray(a):d(a)==="[object Array]"}qe.isArray=t;function e(a){return typeof a=="boolean"}qe.isBoolean=e;function n(a){return a===null}qe.isNull=n;function r(a){return a==null}qe.isNullOrUndefined=r;function i(a){return typeof a=="number"}qe.isNumber=i;function s(a){return typeof a=="string"}qe.isString=s;function u(a){return typeof a=="symbol"}qe.isSymbol=u;function c(a){return a===void 0}qe.isUndefined=c;function l(a){return d(a)==="[object RegExp]"}qe.isRegExp=l;function v(a){return typeof a=="object"&&a!==null}qe.isObject=v;function p(a){return d(a)==="[object Date]"}qe.isDate=p;function m(a){return d(a)==="[object Error]"||a instanceof Error}qe.isError=m;function h(a){return typeof a=="function"}qe.isFunction=h;function g(a){return a===null||typeof a=="boolean"||typeof a=="number"||typeof a=="string"||typeof a=="symbol"||typeof a>"u"}qe.isPrimitive=g,qe.isBuffer=Xs().Buffer.isBuffer;function d(a){return Object.prototype.toString.call(a)}return qe}var Mr,jn;function Hs(){if(jn)return Mr;jn=1;const t=32,e=7,n=256,r=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9];let i;const s=a=>a<1e5?a<100?a<10?0:1:a<1e4?a<1e3?2:3:4:a<1e7?a<1e6?5:6:a<1e9?a<1e8?7:8:9;function u(a,o){if(a===o)return 0;if(~~a===a&&~~o===o){if(a===0||o===0)return a<o?-1:1;if(a<0||o<0){if(o>=0)return-1;if(a>=0)return 1;a=-a,o=-o}const y=s(a),E=s(o);let _=0;return y<E?(a*=r[E-y-1],o/=10,_=-1):y>E&&(o*=r[y-E-1],a/=10,_=1),a===o?_:a<o?-1:1}const f=String(a),x=String(o);return f===x?0:f<x?-1:1}function c(a){let o=0;for(;a>=t;)o|=a&1,a>>=1;return a+o}function l(a,o,f,x){let y=o+1;if(y===f)return 1;if(x(a[y++],a[o])<0){for(;y<f&&x(a[y],a[y-1])<0;)y++;v(a,o,y),v(i,o,y)}else for(;y<f&&x(a[y],a[y-1])>=0;)y++;return y-o}function v(a,o,f){for(f--;o<f;){const x=a[o];a[o++]=a[f],a[f--]=x}}function p(a,o,f,x,y){for(x===o&&x++;x<f;x++){const E=a[x],_=i[x];let S=o,T=x;for(;S<T;){const I=S+T>>>1;y(E,a[I])<0?T=I:S=I+1}let A=x-S;switch(A){case 3:a[S+3]=a[S+2],i[S+3]=i[S+2];case 2:a[S+2]=a[S+1],i[S+2]=i[S+1];case 1:a[S+1]=a[S],i[S+1]=i[S];break;default:for(;A>0;)a[S+A]=a[S+A-1],i[S+A]=i[S+A-1],A--}a[S]=E,i[S]=_}}function m(a,o,f,x,y,E){let _=0,S=0,T=1;if(E(a,o[f+y])>0){for(S=x-y;T<S&&E(a,o[f+y+T])>0;)_=T,T=(T<<1)+1,T<=0&&(T=S);T>S&&(T=S),_+=y,T+=y}else{for(S=y+1;T<S&&E(a,o[f+y-T])<=0;)_=T,T=(T<<1)+1,T<=0&&(T=S);T>S&&(T=S);const A=_;_=y-T,T=y-A}for(_++;_<T;){const A=_+(T-_>>>1);E(a,o[f+A])>0?_=A+1:T=A}return T}function h(a,o,f,x,y,E){let _=0,S=0,T=1;if(E(a,o[f+y])<0){for(S=y+1;T<S&&E(a,o[f+y-T])<0;)_=T,T=(T<<1)+1,T<=0&&(T=S);T>S&&(T=S);const A=_;_=y-T,T=y-A}else{for(S=x-y;T<S&&E(a,o[f+y+T])>=0;)_=T,T=(T<<1)+1,T<=0&&(T=S);T>S&&(T=S),_+=y,T+=y}for(_++;_<T;){const A=_+(T-_>>>1);E(a,o[f+A])<0?T=A:_=A+1}return T}class g{constructor(o,f){this.array=o,this.compare=f;const{length:x}=o;this.length=x,this.minGallop=e,this.tmpStorageLength=x<2*n?x>>>1:n,this.tmp=new Array(this.tmpStorageLength),this.tmpIndex=new Array(this.tmpStorageLength),this.stackLength=x<120?5:x<1542?10:x<119151?19:40,this.runStart=new Array(this.stackLength),this.runLength=new Array(this.stackLength),this.stackSize=0}pushRun(o,f){this.runStart[this.stackSize]=o,this.runLength[this.stackSize]=f,this.stackSize+=1}mergeRuns(){for(;this.stackSize>1;){let o=this.stackSize-2;if(o>=1&&this.runLength[o-1]<=this.runLength[o]+this.runLength[o+1]||o>=2&&this.runLength[o-2]<=this.runLength[o]+this.runLength[o-1])this.runLength[o-1]<this.runLength[o+1]&&o--;else if(this.runLength[o]>this.runLength[o+1])break;this.mergeAt(o)}}forceMergeRuns(){for(;this.stackSize>1;){let o=this.stackSize-2;o>0&&this.runLength[o-1]<this.runLength[o+1]&&o--,this.mergeAt(o)}}mergeAt(o){const{compare:f}=this,{array:x}=this;let y=this.runStart[o],E=this.runLength[o];const _=this.runStart[o+1];let S=this.runLength[o+1];this.runLength[o]=E+S,o===this.stackSize-3&&(this.runStart[o+1]=this.runStart[o+2],this.runLength[o+1]=this.runLength[o+2]),this.stackSize--;const T=h(x[_],x,y,E,0,f);y+=T,E-=T,E!==0&&(S=m(x[y+E-1],x,_,S,S-1,f),S!==0&&(E<=S?this.mergeLow(y,E,_,S):this.mergeHigh(y,E,_,S)))}mergeLow(o,f,x,y){const{compare:E}=this,{array:_}=this,{tmp:S}=this,{tmpIndex:T}=this;let A=0;for(A=0;A<f;A++)S[A]=_[o+A],T[A]=i[o+A];let I=0,N=x,F=o;if(_[F]=_[N],i[F]=i[N],F++,N++,--y===0){for(A=0;A<f;A++)_[F+A]=S[I+A],i[F+A]=T[I+A];return}if(f===1){for(A=0;A<y;A++)_[F+A]=_[N+A],i[F+A]=i[N+A];_[F+y]=S[I],i[F+y]=T[I];return}let{minGallop:P}=this;for(;;){let U=0,O=0,V=!1;do if(E(_[N],S[I])<0){if(_[F]=_[N],i[F]=i[N],F++,N++,O++,U=0,--y===0){V=!0;break}}else if(_[F]=S[I],i[F]=T[I],F++,I++,U++,O=0,--f===1){V=!0;break}while((U|O)<P);if(V)break;do{if(U=h(_[N],S,I,f,0,E),U!==0){for(A=0;A<U;A++)_[F+A]=S[I+A],i[F+A]=T[I+A];if(F+=U,I+=U,f-=U,f<=1){V=!0;break}}if(_[F]=_[N],i[F]=i[N],F++,N++,--y===0){V=!0;break}if(O=m(S[I],_,N,y,0,E),O!==0){for(A=0;A<O;A++)_[F+A]=_[N+A],i[F+A]=i[N+A];if(F+=O,N+=O,y-=O,y===0){V=!0;break}}if(_[F]=S[I],i[F]=T[I],F++,I++,--f===1){V=!0;break}P--}while(U>=e||O>=e);if(V)break;P<0&&(P=0),P+=2}if(this.minGallop=P,P<1&&(this.minGallop=1),f===1){for(A=0;A<y;A++)_[F+A]=_[N+A],i[F+A]=i[N+A];_[F+y]=S[I],i[F+y]=T[I]}else{if(f===0)throw new Error("mergeLow preconditions were not respected");for(A=0;A<f;A++)_[F+A]=S[I+A],i[F+A]=T[I+A]}}mergeHigh(o,f,x,y){const{compare:E}=this,{array:_}=this,{tmp:S}=this,{tmpIndex:T}=this;let A=0;for(A=0;A<y;A++)S[A]=_[x+A],T[A]=i[x+A];let I=o+f-1,N=y-1,F=x+y-1,P=0,U=0;if(_[F]=_[I],i[F]=i[I],F--,I--,--f===0){for(P=F-(y-1),A=0;A<y;A++)_[P+A]=S[A],i[P+A]=T[A];return}if(y===1){for(F-=f,I-=f,U=F+1,P=I+1,A=f-1;A>=0;A--)_[U+A]=_[P+A],i[U+A]=i[P+A];_[F]=S[N],i[F]=T[N];return}let{minGallop:O}=this;for(;;){let V=0,J=0,z=!1;do if(E(S[N],_[I])<0){if(_[F]=_[I],i[F]=i[I],F--,I--,V++,J=0,--f===0){z=!0;break}}else if(_[F]=S[N],i[F]=T[N],F--,N--,J++,V=0,--y===1){z=!0;break}while((V|J)<O);if(z)break;do{if(V=f-h(S[N],_,o,f,f-1,E),V!==0){for(F-=V,I-=V,f-=V,U=F+1,P=I+1,A=V-1;A>=0;A--)_[U+A]=_[P+A],i[U+A]=i[P+A];if(f===0){z=!0;break}}if(_[F]=S[N],i[F]=T[N],F--,N--,--y===1){z=!0;break}if(J=y-m(_[I],S,0,y,y-1,E),J!==0){for(F-=J,N-=J,y-=J,U=F+1,P=N+1,A=0;A<J;A++)_[U+A]=S[P+A],i[U+A]=T[P+A];if(y<=1){z=!0;break}}if(_[F]=_[I],i[F]=i[I],F--,I--,--f===0){z=!0;break}O--}while(V>=e||J>=e);if(z)break;O<0&&(O=0),O+=2}if(this.minGallop=O,O<1&&(this.minGallop=1),y===1){for(F-=f,I-=f,U=F+1,P=I+1,A=f-1;A>=0;A--)_[U+A]=_[P+A],i[U+A]=i[P+A];_[F]=S[N],i[F]=T[N]}else{if(y===0)throw new Error("mergeHigh preconditions were not respected");for(P=F-(y-1),A=0;A<y;A++)_[P+A]=S[A],i[P+A]=T[A]}}}function d(a,o,f,x){if(!Array.isArray(a))throw new TypeError(`The "array" argument must be an array. Received ${a}`);i=[];const{length:y}=a;let E=0;for(;E<y;)i[E]=E++;o?typeof o!="function"&&(x=f,f=o,o=u):o=u,f||(f=0),x||(x=y);let _=x-f;if(_<2)return i;let S=0;if(_<t)return S=l(a,f,x,o),p(a,f,x,f+S,o),i;const T=new g(a,o),A=c(_);do{if(S=l(a,f,x,o),S<A){let I=_;I>A&&(I=A),p(a,f,f+I,f+S,o),S=I}T.pushRun(f,S),T.mergeRuns(),_-=S,f+=S}while(_!==0);return T.forceMergeRuns(),i}return Mr={sort:d},Mr}var Lr,qn;function kr(){if(qn)return Lr;qn=1;const{isObject:t,isArray:e,isString:n,isNumber:r,isFunction:i}=an(),s="before",u="after-prop",c="after-colon",l="after-value",v="after",p="before-all",m="after-all",h="[",g="]",d="{",a="}",o=",",f="",x="-",y=[s,u,c,l,v],E=[s,v,p,m],_=E.map(Symbol.for),S=":",T=void 0,A=(z,X)=>Symbol.for(z+S+X),I=(z,X)=>{if(X){if(y.includes(z))return A(z,X);throw new RangeError(`Unsupported comment position ${z} with key ${X}`)}if(E.includes(z))return Symbol.for(z);throw new RangeError(`Unsupported comment position ${z}`)},N=(z,X,Y)=>Object.defineProperty(z,X,{value:Y,writable:!0,configurable:!0}),F=(z,X,Y,W,q,re)=>{const xe=A(q,W);if(!Object.hasOwn(X,xe))return;const de=Y===W?xe:A(q,Y);N(z,de,X[xe]),re&&delete X[xe]},P=(z,X,Y,W,q)=>{y.forEach(re=>{F(z,X,Y,W,re,q)})},U=(z,X,Y)=>{X!==Y&&y.forEach(W=>{const q=A(W,Y);if(!Object.hasOwn(z,q)){F(z,z,Y,X,W,!0);return}const re=z[q];delete z[q],F(z,z,Y,X,W,!0),N(z,A(W,X),re)})},O=(z,X)=>{_.forEach(Y=>{const W=X[Y];W&&N(z,Y,W)})},V=(z,X,Y)=>(Y.forEach(W=>{!n(W)&&!r(W)||Object.hasOwn(X,W)&&(z[W]=X[W],P(z,X,W,W))}),z),J=i(JSON.isRawJSON)?JSON.isRawJSON:()=>!1;return Lr={PROP_SYMBOL_PREFIXES:y,PREFIX_BEFORE:s,PREFIX_AFTER_PROP:u,PREFIX_AFTER_COLON:c,PREFIX_AFTER_VALUE:l,PREFIX_AFTER:v,PREFIX_BEFORE_ALL:p,PREFIX_AFTER_ALL:m,BRACKET_OPEN:h,BRACKET_CLOSE:g,CURLY_BRACKET_OPEN:d,CURLY_BRACKET_CLOSE:a,COLON:S,COMMA:o,MINUS:x,EMPTY:f,UNDEFINED:T,symbol:A,define:N,copy_comments:P,swap_comments:U,assign_non_prop_comments:O,is_raw_json:J,assign(z,X,Y){if(!t(z))throw new TypeError("Cannot convert undefined or null to object");if(!t(X))return z;if(Y===T)Y=Object.keys(X),O(z,X);else if(e(Y))Y.length===0&&O(z,X);else throw new TypeError("keys must be array or undefined");return V(z,X,Y)},moveComments(z,X,{where:Y,key:W},{where:q,key:re},xe=!1){if(!t(z))throw new TypeError("source must be an object");if(X||(X=z),!t(X))return;const de=I(Y,W),be=I(q,re);if(!Object.hasOwn(z,de))return;const ae=z[de];if(delete z[de],xe||!Object.hasOwn(X,be)){N(X,be,ae);return}const ne=X[be];ne&&ne.push(...ae)},removeComments(z,{where:X,key:Y}){if(!t(z))throw new TypeError("target must be an object");const W=I(X,Y);Object.hasOwn(z,W)&&delete z[W]}},Lr}var Rr,Xn;function Ni(){if(Xn)return Rr;Xn=1;const{isArray:t}=an(),{sort:e}=Hs(),{PROP_SYMBOL_PREFIXES:n,UNDEFINED:r,symbol:i,copy_comments:s,swap_comments:u}=kr(),c=g=>{const{length:d}=g;let a=0;const o=d/2;for(;a<o;a++)u(g,a,d-a-1)},l=(g,d,a,o,f)=>{s(g,d,a+o,a,f)},v=(g,d,a,o,f,x)=>{if(f>0){let E=o;for(;E-- >0;)l(g,d,a+E,f,x);return}let y=0;for(;y<o;){const E=y++;l(g,d,a+E,f,x)}},p=(g,d)=>{n.forEach(a=>{const o=i(a,d);delete g[o]})},m=(g,d)=>{let a=d;for(;a in g;)a=g[a];return a};class h extends Array{splice(...d){const{length:a}=this,o=super.splice(...d);let[f,x,...y]=d;f<0&&(f+=a),arguments.length===1?x=a-f:x=Math.min(a-f,x);const{length:E}=y,_=E-x,S=f+x,T=a-S;return v(this,this,S,T,_,!0),o}slice(...d){const{length:a}=this,o=super.slice(...d);if(!o.length)return new h;let[f,x]=d;return x===r?x=a:x<0&&(x+=a),f<0?f+=a:f===r&&(f=0),v(o,this,f,x-f,-f),o}unshift(...d){const{length:a}=this,o=super.unshift(...d),{length:f}=d;return f>0&&v(this,this,0,a,f,!0),o}shift(){const d=super.shift(),{length:a}=this;return p(this,0),v(this,this,1,a,-1,!0),d}reverse(){return super.reverse(),c(this),this}pop(){const d=super.pop();return p(this,this.length),d}concat(...d){let{length:a}=this;const o=super.concat(...d);return d.length&&(v(o,this,0,this.length,0),d.forEach(f=>{const x=a;a+=t(f)?f.length:1,f instanceof h&&v(o,f,0,f.length,x)})),o}sort(...d){const a=e(this,...d.slice(0,1)),o=Object.create(null);return a.forEach((f,x)=>{if(f===x)return;const y=m(o,f);y!==x&&(o[x]=y,u(this,x,y))}),this}}return Rr={CommentArray:h},Rr}var Pr,Hn;function $s(){if(Hn)return Pr;Hn=1;const t=Vs(),{CommentArray:e}=Ni(),{PREFIX_BEFORE:n,PREFIX_AFTER_PROP:r,PREFIX_AFTER_COLON:i,PREFIX_AFTER_VALUE:s,PREFIX_AFTER:u,PREFIX_BEFORE_ALL:c,PREFIX_AFTER_ALL:l,BRACKET_OPEN:v,BRACKET_CLOSE:p,CURLY_BRACKET_OPEN:m,CURLY_BRACKET_CLOSE:h,COLON:g,COMMA:d,MINUS:a,EMPTY:o,UNDEFINED:f,define:x,assign_non_prop_comments:y}=kr(),E=Z=>t.tokenize(Z,{comment:!0,loc:!0});let _;const S=[];let T=null,A=null;const I=[];let N,F=!1,P=!1,U=null,O=null,V=null,J,z=null;const X=()=>{_=f,I.length=S.length=0,O=null,N=f},Y=()=>{X(),U.length=0,A=T=U=O=V=z=null,_=f},W=Z=>Symbol.for(N!==f?Z+g+N:Z),q=(Z,{value:ue,context:$={}})=>z?z(Z,ue,$):ue,re=()=>{const Z=new SyntaxError(`Unexpected token '${V.value.slice(0,1)}', "${_}" is not valid JSON`);throw Object.assign(Z,V.loc.start),Y(),Z},xe=()=>{const Z=new SyntaxError("Unexpected end of JSON input");throw Object.assign(Z,O?O.loc.end:{line:1,column:0}),Y(),Z},de=()=>{const Z=U[++J];P=V&&Z&&V.loc.end.line===Z.loc.start.line||!1,O=V,V=Z},be=()=>(V||xe(),V.type==="Punctuator"?V.value:V.type),ae=Z=>be()===Z,ne=Z=>{ae(Z)||re()},te=Z=>{S.push(T),T=Z},oe=()=>{T=S.pop()},le=()=>{if(!A)return;const Z=[];for(const $ of A)if($.inline)Z.push($);else break;const{length:ue}=Z;ue&&(ue===A.length?A=null:A.splice(0,ue),x(T,W(u),Z))},j=Z=>{A&&(x(T,W(Z),A),A=null)},ee=Z=>{const ue=[];for(;V&&(ae("LineComment")||ae("BlockComment"));){const $={...V,inline:P};ue.push($),de()}if(!F&&ue.length){if(Z){x(T,W(Z),ue);return}A=ue}},se=(Z,ue)=>{ue&&I.push(N),N=Z},ce=()=>{N=I.pop()},Ie=()=>{const Z={};te(Z),se(f,!0);let ue=!1,$;for(ee();!ae(h)&&!(ue&&(j(s),ne(d),de(),ee(),le(),ae(h)));)ue=!0,ne("String"),$=JSON.parse(V.value),se($),j(n),de(),ee(r),ne(g),de(),ee(i),Z[$]=q($,Ae()),ee();return ue&&j(u),de(),N=void 0,ue||j(n),oe(),ce(),Z},Me=()=>{const Z=new e;te(Z),se(f,!0);let ue=!1,$=0;for(ee();!ae(p)&&!(ue&&(j(s),ne(d),de(),ee(),le(),ae(p)));)ue=!0,se($),j(n),Z[$]=q($,Ae()),$++,ee();return ue&&j(u),de(),N=void 0,ue||j(n),oe(),ce(),Z};function Ae(){let Z=be();if(Z===m)return de(),{value:Ie()};if(Z===v)return de(),{value:Me()};let ue=o;Z===a&&(de(),Z=be(),ue=a);let $,we;switch(Z){case"String":case"Boolean":case"Null":case"Numeric":return $=V.value,de(),we=ue+$,{value:JSON.parse(we),context:{source:we}};default:return{}}}const Ue=Z=>Object(Z)===Z;return Pr={parse:(Z,ue,$)=>{X(),_=Z,U=E(Z),z=ue,F=$,U.length||xe(),J=-1,de(),te({}),ee(c);const we=Ae();ee(l),V&&re();let Ve=q("",we);return!$&&Ve!==null&&(Ue(Ve)||(Ve=new Object(Ve)),y(Ve,T)),oe(),Y(),Ve},tokenize:E},Pr}var Ur,$n;function Js(){if($n)return Ur;$n=1;const{isArray:t,isObject:e,isFunction:n,isNumber:r,isString:i}=an(),{PREFIX_BEFORE_ALL:s,PREFIX_BEFORE:u,PREFIX_AFTER_PROP:c,PREFIX_AFTER_COLON:l,PREFIX_AFTER_VALUE:v,PREFIX_AFTER:p,PREFIX_AFTER_ALL:m,BRACKET_OPEN:h,BRACKET_CLOSE:g,CURLY_BRACKET_OPEN:d,CURLY_BRACKET_CLOSE:a,COLON:o,COMMA:f,EMPTY:x,UNDEFINED:y,is_raw_json:E}=kr(),_=/[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,S=" ",T=`
`,A="null",I=j=>`${u}:${j}`,N=j=>`${c}:${j}`,F=j=>`${l}:${j}`,P=j=>`${v}:${j}`,U=j=>`${p}:${j}`,O={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},V=j=>(_.lastIndex=0,_.test(j)?j.replace(_,ee=>{const se=O[ee];return typeof se=="string"?se:ee}):j),J=j=>`"${V(j)}"`,z=(j,ee)=>ee?`//${j}`:`/*${j}*/`,X=(j,ee,se,ce)=>{const Ie=j[Symbol.for(ee)];if(!Ie||!Ie.length)return x;let Me=!1;const Ae=Ie.reduce((Ue,{inline:fe,type:Z,value:ue})=>{const $=fe?S:T+se;return Me=Z==="LineComment",Ue+$+z(ue,Me)},x);return ce||Me?Ae+T+se:Ae};let Y=null,W=x;const q=()=>{Y=null,W=x},re=(j,ee,se)=>j?ee?j+ee.trim()+T+se:j.trimRight()+T+se:ee?ee.trimRight()+T+se:x,xe=(j,ee,se)=>{const ce=X(ee,u,se+W,!0);return re(ce,j,se)},de=(j,ee)=>{const se=ee+W,{length:ce}=j;let Ie=x,Me=x;for(let Ae=0;Ae<ce;Ae++){Ae!==0&&(Ie+=f);const Ue=re(Me,X(j,I(Ae),se),se);Ie+=Ue||T+se,Ie+=ae(Ae,j,se)||A,Ie+=X(j,P(Ae),se),Me=X(j,U(Ae),se)}return Ie+=re(Me,X(j,p,se),se),h+xe(Ie,j,ee)+g},be=(j,ee)=>{if(!j)return"null";const se=ee+W;let ce=x,Ie=x,Me=!0;const Ae=t(Y)?Y:Object.keys(j),Ue=fe=>{const Z=ae(fe,j,se);if(Z===y)return;Me||(ce+=f),Me=!1;const ue=re(Ie,X(j,I(fe),se),se);ce+=ue||T+se,ce+=J(fe)+X(j,N(fe),se)+o+X(j,F(fe),se)+S+Z+X(j,P(fe),se),Ie=X(j,U(fe),se)};return Ae.forEach(Ue),ce+=re(Ie,X(j,p,se),se),d+xe(ce,j,ee)+a};function ae(j,ee,se){let ce=ee[j];switch(e(ce)&&n(ce.toJSON)&&(ce=ce.toJSON(j)),n(Y)&&(ce=Y.call(ee,j,ce)),typeof ce){case"string":return J(ce);case"number":return Number.isFinite(ce)?String(ce):A;case"boolean":case"null":return String(ce);case"object":return E(ce)?ce.rawJSON:t(ce)?de(ce,se):be(ce,se)}}const ne=j=>i(j)?j:r(j)?S.repeat(j):x,{toString:te}=Object.prototype,oe=["[object Number]","[object String]","[object Boolean]"],le=j=>{if(typeof j!="object")return!1;const ee=te.call(j);return oe.includes(ee)};return Ur=(j,ee,se)=>{const ce=ne(se);if(!ce)return JSON.stringify(j,ee);!n(ee)&&!t(ee)&&(ee=null),Y=ee,W=ce;const Ie=le(j)?JSON.stringify(j):ae("",{"":j},x);return q(),e(j)?X(j,s,x,!0).trimLeft()+Ie+X(j,m,x).trimRight():Ie},Ur}var Or,Jn;function Ws(){if(Jn)return Or;Jn=1;const{parse:t,tokenize:e}=$s(),n=Js(),{CommentArray:r}=Ni(),{PREFIX_BEFORE:i,PREFIX_AFTER_PROP:s,PREFIX_AFTER_COLON:u,PREFIX_AFTER_VALUE:c,PREFIX_AFTER:l,PREFIX_BEFORE_ALL:v,PREFIX_AFTER_ALL:p,assign:m,moveComments:h,removeComments:g}=kr();return Or={PREFIX_BEFORE:i,PREFIX_AFTER_PROP:s,PREFIX_AFTER_COLON:u,PREFIX_AFTER_VALUE:c,PREFIX_AFTER:l,PREFIX_BEFORE_ALL:v,PREFIX_AFTER_ALL:p,parse:t,stringify:n,tokenize:e,CommentArray:r,assign:m,moveComments:h,removeComments:g},Or}var Ks=Ws();const Mi=ga(Ks),Ys=Object.assign({"./opcodes/achievements.jsonc":Na,"./opcodes/animgroupconfigs.jsonc":Ma,"./opcodes/audio.jsonc":La,"./opcodes/avataroverrides.jsonc":Ra,"./opcodes/avatars.jsonc":Pa,"./opcodes/cacheindex.json":Ua,"./opcodes/classicmodels.jsonc":Oa,"./opcodes/clientscript.jsonc":Ga,"./opcodes/clientscriptdata.jsonc":za,"./opcodes/cutscenes.jsonc":Va,"./opcodes/dbrows.jsonc":ja,"./opcodes/dbtables.jsonc":qa,"./opcodes/enums.json":Xa,"./opcodes/environments.jsonc":Ha,"./opcodes/fontmetrics.jsonc":$a,"./opcodes/framemaps.jsonc":Ja,"./opcodes/frames.json":Wa,"./opcodes/identitykit.jsonc":Ka,"./opcodes/interfaces.jsonc":Ya,"./opcodes/items.jsonc":Za,"./opcodes/maplabels.jsonc":Qa,"./opcodes/mapscenes.json":es,"./opcodes/mapsquare_envs.jsonc":ts,"./opcodes/mapsquare_locations.json":rs,"./opcodes/mapsquare_overlays.jsonc":ns,"./opcodes/mapsquare_tiles.jsonc":is,"./opcodes/mapsquare_tiles_nxt.jsonc":as,"./opcodes/mapsquare_underlays.jsonc":ss,"./opcodes/mapsquare_watertiles.json":os,"./opcodes/mapzones.json":ls,"./opcodes/materials.jsonc":us,"./opcodes/models.jsonc":cs,"./opcodes/npcs.jsonc":fs,"./opcodes/objects.jsonc":hs,"./opcodes/oldmaterials.jsonc":ds,"./opcodes/oldmodels.jsonc":ps,"./opcodes/oldproctexture.jsonc":ms,"./opcodes/params.jsonc":gs,"./opcodes/particles_0.jsonc":xs,"./opcodes/particles_1.jsonc":vs,"./opcodes/proctexture.jsonc":ys,"./opcodes/quickchatcategories.jsonc":bs,"./opcodes/quickchatlines.jsonc":ws,"./opcodes/rootcacheindex.jsonc":Es,"./opcodes/sequences.json":_s,"./opcodes/skeletalanim.jsonc":Ss,"./opcodes/spotanims.json":Ds,"./opcodes/structs.jsonc":As,"./opcodes/typedef.jsonc":Cs});function pe(t){const e=Ys[`./opcodes/${t}`];if(!e)throw new Error(`Opcode file not found: ${t}`);return Mi.parse(e)}const Zs=pe("typedef.jsonc"),It=Buffer.alloc(2*1024*1024);let Gr=0;class he{parser;originalSource;totaltime=0;static fromJson(e){let n=Mi.parse(e,void 0,!0);return new he(n,e)}constructor(e,n){this.parser=Pe(null,e,Zs),this.originalSource=n??JSON.stringify(e,void 0,"	")}readInternal(e){let n=performance.now(),r=this.parser.read(e);if(this.totaltime+=performance.now()-n,e.scan!=e.endoffset&&(Gr++,Gr<100&&console.log(`bytes left over after decoding file: ${e.endoffset-e.scan}`),Gr==100&&console.log("too many bytes left over warning, no more warnings will be logged"),e.buffer.byteLength<1e5))throw new Error(`bytes left over after decoding file: ${e.endoffset-e.scan}`);return r}read(e,n,r){let i={isWrite:!1,buffer:e,stack:[],hiddenstack:[],scan:0,endoffset:e.byteLength,args:{...n.getDecodeArgs(),...r}};return this.readInternal(i)}write(e,n){let r={isWrite:!0,stack:[],hiddenstack:[],buffer:It,scan:0,endoffset:It.byteLength,args:{clientVersion:1e3,...n}};if(this.parser.write(r,e),r.scan>r.endoffset)throw new Error("tried to write file larger than scratchbuffer size");r.buffer.copyWithin(r.scan,r.endoffset,It.byteLength),r.scan+=It.byteLength-r.endoffset;let i=Buffer.from(Uint8Array.prototype.slice.call(It,0,r.scan));return It.fill(0,0,r.scan),i}}globalThis.parserTimings=()=>{let t=Object.entries(K).map(e=>({name:e[0],t:e[1].totaltime}));t.sort((e,n)=>n.t-e.t),t.slice(0,10).filter(e=>e.t>.01).forEach(e=>console.log(`${e.name} ${e.t.toFixed(3)}s`))};const K=Qs();function Qs(){return{cacheIndex:new he(pe("cacheindex.json")),npc:new he(pe("npcs.jsonc")),item:new he(pe("items.jsonc")),object:new he(pe("objects.jsonc")),achievement:new he(pe("achievements.jsonc")),mapsquareTiles:new he(pe("mapsquare_tiles.jsonc")),mapsquareTilesNxt:new he(pe("mapsquare_tiles_nxt.jsonc")),mapsquareWaterTiles:new he(pe("mapsquare_watertiles.json")),mapsquareUnderlays:new he(pe("mapsquare_underlays.jsonc")),mapsquareOverlays:new he(pe("mapsquare_overlays.jsonc")),mapsquareLocations:new he(pe("mapsquare_locations.json")),mapsquareEnvironment:new he(pe("mapsquare_envs.jsonc")),mapZones:new he(pe("mapzones.json")),enums:new he(pe("enums.json")),fontmetrics:new he(pe("fontmetrics.jsonc")),mapscenes:new he(pe("mapscenes.json")),sequences:new he(pe("sequences.json")),framemaps:new he(pe("framemaps.jsonc")),frames:new he(pe("frames.json")),animgroupConfigs:new he(pe("animgroupconfigs.jsonc")),models:new he(pe("models.jsonc")),oldmodels:new he(pe("oldmodels.jsonc")),classicmodels:new he(pe("classicmodels.jsonc")),spotAnims:new he(pe("spotanims.json")),rootCacheIndex:new he(pe("rootcacheindex.jsonc")),skeletalAnim:new he(pe("skeletalanim.jsonc")),materials:new he(pe("materials.jsonc")),oldmaterials:new he(pe("oldmaterials.jsonc")),quickchatCategories:new he(pe("quickchatcategories.jsonc")),quickchatLines:new he(pe("quickchatlines.jsonc")),environments:new he(pe("environments.jsonc")),avatars:new he(pe("avatars.jsonc")),avatarOverrides:new he(pe("avataroverrides.jsonc")),identitykit:new he(pe("identitykit.jsonc")),structs:new he(pe("structs.jsonc")),params:new he(pe("params.jsonc")),particles_0:new he(pe("particles_0.jsonc")),particles_1:new he(pe("particles_1.jsonc")),audio:new he(pe("audio.jsonc")),proctexture:new he(pe("proctexture.jsonc")),oldproctexture:new he(pe("oldproctexture.jsonc")),maplabels:new he(pe("maplabels.jsonc")),cutscenes:new he(pe("cutscenes.jsonc")),clientscript:new he(pe("clientscript.jsonc")),clientscriptdata:new he(pe("clientscriptdata.jsonc")),interfaces:new he(pe("interfaces.jsonc")),dbtables:new he(pe("dbtables.jsonc")),dbrows:new he(pe("dbrows.jsonc"))}}function mt(t,e){let n=0;if(e){t=t.toUpperCase();for(let r of t)n=Math.imul(n,61)+r.charCodeAt(0)-32|0}else for(let r of t)n=((n<<5)-n|0)+r.charCodeAt(0)|0;return n>>>0}function Li(t,e,n){let r=t.get(e);return r===void 0&&(r=n(),t.set(e,r)),r}function Wn(t,e){return(t%e+e)%e}function Ft(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Kn(t){let e="",n=[];try{for(;t;){let r=t.match(/<(\/?)(\w+)(=(\w+))?>/);if(!r)e+=Ft(t),t="";else{e+=Ft(t.slice(0,r.index)),t=t.slice(r.index+r[0].length);let i=!!r[1],s=r[2];if(i){let u=n.pop();if(u!=s)throw new Error("markup token mismatch");if(u=="col")e+="</span>";else throw new Error("unknown markup closing token "+u)}else if(s=="br")e+="<br/>";else if(s=="col")e+=`<span style="color:#${r[4].replace(/\W/g,"")};">`,n.push("col");else throw new Error("unknown token "+s)}}for(;n.length!=0;){let r=n.pop();if(r=="col")e+="</span>";else throw new Error("non-autocloseable token left unclosed "+r)}}catch(r){console.log(r.message),e=Ft(t)}return e}function Xt(){return function(t){return t}}const Qe=function t(e,n=0){this.getData=function(){return e},this.bytesLeft=function(){return e.length-n},this.readBuffer=function(r=e.length-n){let i=e.slice(n,n+r);return n+=r,i},this.tee=function(){return new t(e,n)},this.eof=function(){if(n>e.length)throw new Error("reading past end of buffer");return n>=e.length},this.skip=function(r){return n+=r,this},this.scanloc=function(){return n},this.readByte=function(){var r=this.readUByte();return r>127?r-256:r},this.readUShortSmart=function(){let r=this.readUByte();if((r&128)==0)return r;let i=this.readUByte();return(r&127)<<8|i},this.readShortSmart=function(){let r=this.readUByte(),i=r&127;if(i=r<64?r:r-128,(r&128)==0)return i;let s=this.readUByte();return i<<8|s},this.readShortSmartBias=function(){let r=this.readUByte();if((r&128)==0)return r-64;let i=this.readUByte();return((r&127)<<8|i)-16384},this.readUIntSmart=function(){let r=this.readUByte(),i=this.readUByte();if((r&128)==0)return r<<8|i;let s=this.readUByte(),u=this.readUByte();return(r&127)<<24|i<<16|s<<8|u},this.readUByte=function(){return e[n++]},this.readShort=function(r=!1){var i=this.readUShort(r);return i>32767?i-65536:i},this.readTribyte=function(){let r=e.readIntBE(n,3);return n+=3,r},this.readUShort=function(r=!1){return r?e[n++]<<8&65280|e[n++]:e[n++]|e[n++]<<8&65280},this.readUInt=function(r=!1){return r?(e[n++]<<24&4278190080|e[n++]<<16&16711680|e[n++]<<8&65280|e[n++])>>>0:(e[n++]|e[n++]<<8&65280|e[n++]<<16&16711680|e[n++]<<24&4278190080)>>>0},this.readInt=function(r=!1){return this.readUInt(r)|0},this.readStringLine=function(){let r=n;for(;n<e.length&&e[n]!=10&&e[n]!=13;)n++;let i=e.toString("utf8",r,n);return e[n]==13&&n++,e[n]==10&&n++,i},this.readFloat=function(r=!1,i=!1){var s,u,c,l;r?(l=e[n++],c=e[n++]<<16&16711680,u=e[n++]<<8&65280,s=e[n++]):(s=e[n++],u=e[n++]<<8&65280,c=e[n++]<<16&16711680,l=e[n++]);var v=s|u|c;return i&&(l=l<<1&254,(v&8388608)==8388608&&(l|=1),v&=8388607),(1+v*Math.pow(2,i?-23:-24))*Math.pow(2,l-127)},this.readHalf=function(r=!1){var i=e[n++],s=e[n++],u=s|i<<8&768,c=i>>2&31;return u=u*Math.pow(2,-10)+(c==0?0:1),u*=Math.pow(2,c-15),(i&128)==128&&(u*=-1),u}};function eo(t){return(t&255)<<8|(t&65280)>>>8}function to(t){t=eo(t);let e=(t&32768)==0,n=(t&31744)>>10,i=(t&1023)*Math.pow(2,-10)+(n==0?0:1);return i*=Math.pow(2,n-15),e?i:-i}function sn(t){var e=t[0],n=t[1],r=t[2],i,s,u;if(n==0)i=s=u=r;else{var c=function(m,h,g){return g<0&&(g+=1),g>1&&(g-=1),g<.16666666666666666?m+(h-m)*6*g:g<.5?h:g<.6666666666666666?m+(h-m)*(.6666666666666666-g)*6:m},l=r<.5?r*(1+n):r+n-r*n,v=2*r-l;i=c(v,l,e+1/3),s=c(v,l,e),u=c(v,l,e-1/3)}return[i,s,u]}function rr(t){let e=sn(t);return[Math.round(e[0]*255),Math.round(e[1]*255),Math.round(e[2]*255)]}function ro(t,e,n){t/=255,e/=255,n/=255;var r=Math.max(t,e,n),i=Math.min(t,e,n),s=0,u=0;let c=(r+i)/2;if(r!=i){var l=r-i;switch(u=c>.5?l/(2-r-i):l/(r+i),r){case t:s=(e-n)/l+(e<n?6:0);break;case e:s=(n-t)/l+2;break;case n:s=(t-e)/l+4;break}s/=6}return[s,u,c]}function no(t,e,n){return t<0&&(t+=1),Math.round(t*63)<<10|Math.round(e*7)<<7|Math.round(n*127)}function kt(t){var e=(t>>10&63)/63,n=(t>>7&7)/7,r=(t&127)/127;return e>.5&&(e=e-1),[e,n,r]}class Ri{listeners={};on(e,n){(this.listeners[e]??(this.listeners[e]=new Set)).add(n)}once(e,n){let r=this.listeners[e]??(this.listeners[e]=new Set),i=s=>{r.delete(i),n(s)};r.add(i)}off(e,n){(this.listeners[e]??(this.listeners[e]=new Set)).delete(n)}emit(e,n){(this.listeners[e]??(this.listeners[e]=new Set)).forEach(i=>i(n))}}class io extends Promise{done;err;constructor(e=(n,r)=>{}){let n,r;super((i,s)=>(n=i,r=s,e(i,s))),this.done=n,this.err=r}}async function ao(t,e,n){let r=0,i=0,s=new Array(t).fill(null);for(let u of e()){let c=r++;if(s[c%t]=u,r>=i+t&&r>=t){let l=await s[i%t];i++,n(l)}}for(;i<r;){let u=await s[i%t];i++,n(u)}}globalThis.ignoreCache=!1;const on={[B.items]:256,[B.npcs]:128,[B.structs]:32,[B.enums]:256,[B.objects]:256,[B.sequences]:128,[B.spotanims]:256,[B.achievements]:128,[B.materials]:Number.MAX_SAFE_INTEGER},Pi={[B.items]:Re.items_old,[B.npcs]:Re.npcs_old,[B.objects]:Re.locs_old,[B.spotanims]:Re.spotanim_old};function pr(t,e,n){if(n<488){let s=Pi[t];if(s!==void 0)return{major:B.config,minor:s,subid:e}}let r=on[t]??1;return{minor:Math.floor(e/r),major:t,subid:e%r}}function so(t,e,n){let r=on[t]??1;return e*r+n}class Ui{decodeArgs={};getCacheMeta(){return{name:"unkown",descr:"",timestamp:new Date(0)}}getFile(e,n,r){throw new Error("not implemented")}getFileArchive(e){throw new Error("not implemented")}getCacheIndex(e){throw new Error("not implemented")}getBuildNr(){return Ba}getDecodeArgs(){return this.decodeArgs.clientVersion=this.getBuildNr(),this.decodeArgs}writeFile(e,n,r){throw new Error("not implemented")}writeFileArchive(e,n,r){throw new Error("not implemented")}async getIndexEntryById(e,n){let r;if(this.getBuildNr()<=it?r={major:e,minor:n,crc:0,name:null,subindexcount:1,subindices:[0],subnames:null,version:0}:r=(await this.getCacheIndex(e))[n],!r)throw new Error(`minor id ${n} does not exist in major ${e}.`);return r}async getArchiveById(e,n){let r=await this.getIndexEntryById(e,n);return this.getFileArchive(r)}async getFileById(e,n){let r=pr(e,n,this.getBuildNr()),s=(await this.getArchiveById(r.major,r.minor)).find(u=>u.fileid==r.subid);if(!s)throw new Error(`File ${n} in major ${e} not found, (redirected to ${r.major}.${r.minor}.${r.subid})`);return s.buffer}async findFileByName(e,n){let r=mt(n,this.getBuildNr()<=it);return(await this.getCacheIndex(e)).find(s=>s&&s.name==r)}async findSubfileByName(e,n,r){let i=mt(r,this.getBuildNr()<=it);return(await this.getArchiveById(e,n)).find(u=>u&&u.namehash==i)}async bruteForceFindAnyNamedFile(e){let n=await this.getCacheIndex(B.index);for(let r of n){if(!r)continue;let i=await this.findFileByName(r.minor,e);if(i)return this.getFileArchive(i)}return null}close(){}}function oo(t,e){return K.rootCacheIndex.read(t,e).cachemajors.map(r=>r.crc==0?void 0:{major:255,minor:r.minor,crc:r.crc,version:r.version,size:0,name:null,subindexcount:r.subindexcount,subindices:[0],subnames:null,uncompressed_crc:0,uncompressed_size:0})}function Gu(t,e,n){if(t==B.index)return oo(e,n);let i=K.cacheIndex.read(e,n).indices,s=[];for(let u of i)s[u.minor]=Object.assign(u,{major:t});return s}function zu(t,e,n){if(e.length==1)return[{buffer:t,offset:0,size:t.byteLength,fileid:e[0],namehash:n?.[0]??null}];let r=0;t.readUInt8(r),r++;let i=t.readUInt32BE(r);r+=4;let s=[],u=i;for(let c=0;c<e.length;c++){let l=t.readUInt32BE(r);r+=4;let v=l-u;s.push({buffer:t.slice(u,u+v),offset:u,size:v,fileid:e[c],namehash:n?.[c]??null}),u=l}return s}class lo extends Ui{archieveCache=new Map;cachedObjects=[];cacheFetchCounter=0;cacheAddCounter=0;maxcachesize=2e8;rawsource;constructor(e){super(),this.rawsource=e}fetchCachedObject(e,n,r,i){let s=e.get(n);if(!s||globalThis.ignoreCache){let u=r();s={promise:u,data:null,owner:e,id:n,lastuse:0,size:0,usecount:0},u.then(c=>{s.size=i(c),s.promise=null,s.data=c}),this.cachedObjects.push(s),e.set(n,s),++this.cacheAddCounter%100==0&&this.sweepCachedObjects()}return s.usecount++,s.lastuse=this.cacheFetchCounter++,s.data?Promise.resolve(s.data):s.promise}sweepCachedObjects(){let e=i=>Math.min(100,this.cacheFetchCounter-i.lastuse)+Math.max(-100,-i.usecount*10);this.cachedObjects.sort((i,s)=>e(i)-e(s));let n=this.cachedObjects.length,r=0;for(let i=0;i<this.cachedObjects.length;i++){let s=this.cachedObjects[i];r+=s.size,r>this.maxcachesize?(n=Math.min(n,i),s.owner.delete(s.id)):s.usecount=0}this.cachedObjects.length=n}getCacheIndex(e){return this.rawsource.getCacheIndex(e)}getFile(e,n,r){return this.rawsource.getFile(e,n,r)}getFileArchive(e){let n=()=>this.rawsource.getFileArchive(e);if(e.major==B.models||e.major==B.texturesBmp||e.major==B.texturesDds||e.major==B.texturesPng)return n();{let r=e.major<<23|e.minor;return this.fetchCachedObject(this.archieveCache,r,n,i=>i.reduce((s,u)=>s+u.size,0))}}getBuildNr(){return this.rawsource.getBuildNr()}getCacheMeta(){return this.rawsource.getCacheMeta()}}function Tt(){return{textures:{},texmodes:"repeat",texmodet:"repeat",uvAnim:void 0,baseColorFraction:0,baseColor:[1,1,1],alphamode:"opaque",alphacutoff:.1,stripDiffuseAlpha:!1,raw:null}}function uo(t,e,n){return(t==-1?4194303:t)|(e?8388608:0)|(n?4194304:0)}function Oi(t,e,n){let r=K.materials.read(t,n),i=Tt();if(i.raw=r,r.v0){let s=r.v0,u=s.arr.find(v=>v.op==1);u?n.getBuildNr()<=838?i.textures.diffuse=u.value:i.textures.diffuse=e:s.diffuse?i.textures.diffuse=s.diffuse:s.textureflags&17&&(i.textures.diffuse=e),s.normal?i.textures.normal=s.normal:s.textureflags&10&&(i.textures.normal=e);let c=s.texrepeatflags&7,l=s.textureflags>>2&7;if(i.texmodes=c==0?"mirror":c==1?"repeat":"clamp",i.texmodet=l==0?"mirror":l==1?"repeat":"clamp",i.alphamode=s.alphamode==0?"opaque":s.alphamode==1?"cutoff":"blend",s.alphacutoff&&(i.alphacutoff=s.alphacutoff/255),s.animtexU||s.animtexV){let v=30517578125e-15;i.uvAnim={u:(s.animtexU??0)*v,v:(s.animtexV??0)*v}}s.extra&&(i.baseColorFraction=s.extra.baseColorFraction/255,i.baseColor=s.extra.baseColor==0?[1,1,1]:sn(kt(s.extra.baseColor))),i.stripDiffuseAlpha=i.alphamode=="opaque"}else if(r.v1||r.v2){let s=r.v1||r.v2;if(i.alphamode=s.opaque_2&&!s.hasUVanimU?"cutoff":"blend",i.baseColorFraction=1,s.diffuse&&(i.textures.diffuse=s.diffuse.texture),s.normal&&(i.textures.normal=s.normal.texture),s.compound&&(i.textures.compound=s.compound.texture),s.uvanim_u||s.uvanim_v){let u=30517578125e-15;i.uvAnim={u:(s.uvanim_u??0)*u,v:(s.uvanim_v??0)*u}}}else throw new Error("unkown material version "+r.version);return i}const co=/("(?:[^\\"]|\\.)*")|[:,]/g;function mr(t,e={}){const n=JSON.stringify([1],void 0,e.indent===void 0?2:e.indent).slice(2,-3),r=n===""?1/0:e.maxLength===void 0?80:e.maxLength;let{replacer:i}=e;return(function s(u,c,l){u&&typeof u.toJSON=="function"&&(u=u.toJSON());const v=JSON.stringify(u,i);if(v===void 0)return v;const p=r-c.length-l;if(v.length<=p){const m=v.replace(co,(h,g)=>g||`${h} `);if(m.length<=p)return m}if(i!=null&&(u=JSON.parse(v),i=void 0),typeof u=="object"&&u!==null){const m=c+n,h=[];let g=0,d,a;if(Array.isArray(u)){d="[",a="]";const{length:o}=u;for(;g<o;g++)h.push(s(u[g],m,g===o-1?0:1)||"null")}else{d="{",a="}";const o=Object.keys(u),{length:f}=o;for(;g<f;g++){const x=o[g],y=`${JSON.stringify(x)}: `,E=s(u[x],m,y.length+(g===f-1?0:1));E!==void 0&&h.push(y+E)}}if(h.length>0)return[d,n+h.join(`,
${m}`),a].join(`
${c}`)}return v})(t,"",0)}function at(t,e,n){return t||(t=new Uint8ClampedArray(e*n*4)),t instanceof Uint8Array&&(t=new Uint8ClampedArray(t.buffer,t.byteOffset,t.length)),typeof ImageData<"u"?new ImageData(t,e,n):{data:t,width:e,height:n,colorSpace:"srgb"}}async function Ir(t,e,n){if(typeof HTMLCanvasElement<"u"){let r=document.createElement("canvas");return r.width=t.width,r.height=t.height,r.getContext("2d",{willReadFrequently:!0}).putImageData(t,0,0),ho(r,e,n)}else{const r=globalThis.__non_webpack_require__;return r("sharp")(t.data,{raw:{width:t.width,height:t.height,channels:4}}).png().toBuffer()}}async function fo(t,e,n){if(typeof ImageDecoder<"u"){let i=await new ImageDecoder({data:t,type:e,premultiplyAlpha:n?"none":"default",colorSpaceConversion:"none"}).decode(),s=new Uint8Array(i.image.allocationSize());i.image.copyTo(s);let u=i.image.visibleRect.width*i.image.visibleRect.height;if((i.image.format=="BGRX"||i.image.format=="RGBX")&&(n=!0),i.image.format=="BGRA"||i.image.format=="BGRX")for(let c=0;c<u;c++){let l=s[c*4+0];s[c*4+0]=s[c*4+2],s[c*4+1]=s[c*4+1],s[c*4+2]=l,s[c*4+3]=n?255:s[c*4+3]}else if(i.image.format=="RGBA"||i.image.format=="RGBX"){if(n)for(let c=0;c<u;c++)s[c*4+3]=255}else throw new Error("unexpected image format");return at(s,i.image.visibleRect.width,i.image.visibleRect.height)}else if(typeof HTMLCanvasElement<"u"){n&&console.warn("can not strip alpha in browser context that does not support ImageDecoder");let r=new Image,i=new Blob([t.buffer],{type:e}),s=URL.createObjectURL(i);r.src=s,await r.decode();let u=document.createElement("canvas");u.width=r.naturalWidth,u.height=r.naturalHeight;let c=u.getContext("2d",{willReadFrequently:!0});return c.drawImage(r,0,0),URL.revokeObjectURL(s),c.getImageData(0,0,u.width,u.height)}else{const r=globalThis.__non_webpack_require__;let s=r("sharp")(t);n&&s.removeAlpha();let u=await s.raw().toBuffer({resolveWithObject:!0}),c=new Uint8ClampedArray(u.data.buffer,u.data.byteOffset,u.data.byteLength);return at(c,u.info.width,u.info.height)}}async function Gi(t){if(typeof HTMLCanvasElement<"u"){let e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d",{willReadFrequently:!0}).putImageData(t,0,0),e.toDataURL("image/png")}else{const e=globalThis.__non_webpack_require__;return"data:image/png;base64,"+(await e("sharp")(t.data,{raw:{width:t.width,height:t.height,channels:4}}).png().toBuffer()).toString("base64")}}async function ho(t,e,n){let r=await new Promise(s=>t.toBlob(s,`image/${e}`,n));if(!r)throw new Error("image compression failed");let i=await r.arrayBuffer();return Buffer.from(i)}function po(t){let e=t.width*4,n=new Uint8Array(e);for(let r=0;r<t.height/2;r++){let i=r*e,s=(t.height-1-r)*e;n.set(t.data.slice(i,i+e),0),t.data.copyWithin(i,s,s+e),t.data.set(n,s)}}function mo(t,e){let n=new Uint8ClampedArray(e.width*e.height*4),r=e.width*4,i=t.width*4,s=i*e.y+e.x*4;for(let u=0;u<e.height;u++)n.set(t.data.slice(s+u*i,s+u*i+r),r*u);return new ImageData(n,e.width,e.height)}function go(t,e=!1){let n=document.createElement("canvas"),r=n.getContext("2d",{willReadFrequently:!0});if(e){if(!(t instanceof ImageData))throw new Error("can only flip imagedata textures");po(t)}return xo(r,t),n.style.cssText="position:absolute;top:0px;left:0px;border:1px solid red;background:purple;",document.body.appendChild(n),n.onclick=i=>{navigator.clipboard.write([new ClipboardItem({"image/png":new Promise(s=>n.toBlob(s))})]),n.remove()},n}globalThis.dumptex=go;function xo(t,e){const n=t.canvas;"data"in e?(typeof ImageData<"u"&&!(e instanceof ImageData)&&(e=new ImageData(e.data,e.width,e.height)),n.width=e.width,n.height=e.height,t.putImageData(e,0,0)):"source"in e?(n.width=e.source.data.width,n.height=e.source.data.height,t.drawImage(e.source.data,0,0)):(n.width=e.width,n.height=e.height,t.drawImage(e,0,0))}function ln(t,e,n,r,i,s){let u=n*r,c=0,l=new Uint8ClampedArray(u*4),v=c,p=c+u;c+=u+(i?u:0);for(let m=0;m<r;m++)for(let h=0;h<n;h++){let g=h*4+m*n*4,d=s?m+h*r:h+m*n,a=t.readUInt8(v+d);if(a==0)l[g+0]=0,l[g+1]=0,l[g+2]=0,l[g+3]=0;else{let o=(a-1)*3;l[g+0]=e[o+0],l[g+1]=e[o+1],l[g+2]=e[o+2],l[g+3]=i?t.readUInt8(p+d):255}}return{img:at(l,n,r),bytesused:c}}function un(t,e){let n=new Qe(e),r=n.readUShort(!0);if(!t)throw new Error("sprite meta file not found");let i=new Qe(t);i.skip(r);let s=i.readUShort(!0),u=i.readUShort(!0),c=i.readUByte()-1,l=i.readBuffer(c*3),v=[];for(;!n.eof();){let p=i.readUByte(),m=i.readUByte(),h=i.readUShort(!0),g=i.readUShort(!0),d=i.readUByte()!=0,a=n.readBuffer(h*g);v.push({x:p,y:m,fullwidth:s,fullheight:u,img:ln(a,l,h,g,!1,d).img})}return v.length!=1&&console.log(v),v[0]}function zi(t){if(t.x==0&&t.y==0&&t.fullwidth==t.img.width&&t.fullheight==t.img.height)return t.img;let e=new ImageData(t.fullwidth,t.fullheight);for(let n=0;n<t.img.height;n++){let r=t.img.width*4,i=n*r,s=e.width*4,u=(n+t.y)*s+t.x*4;e.data.set(t.img.data.subarray(i,i+r),u)}return e}function wt(t){let e=t.readUInt16BE(t.length-2),n=e>>15,r=e&32767,i=[];if(n==0){let s=7+8*r,u=t.length-s,c=t.readUInt16BE(u);u+=2;let l=t.readUInt16BE(u);u+=2;let v=t.readUInt8(u);u++;let p=[];for(let h=0;h<r;h++)p.push({x:t.readUInt16BE(u+r*0+h*2),y:t.readUInt16BE(u+r*2+h*2),width:t.readUInt16BE(u+r*4+h*2),height:t.readUInt16BE(u+r*6+h*2)});let m=t.slice(t.length-s-3*v,t.length-s);u=0;for(let h of p)if(h.width!=0&&h.height!=0){let g=t.readUInt8(u);u++;let d=(g&1)!=0,a=(g&2)!=0,o=ln(t.slice(u),m,h.width,h.height,a,d);u+=o.bytesused,i.push({x:h.x,y:h.y,fullwidth:c,fullheight:l,img:o.img})}}else{let s=0,u=t.readUInt8(s);if(s++,u!=0)throw new Error("unknown type");let c=t.readUInt8(s);s++;let l=(c&1)!=0,v=t.readUInt16BE(s);s+=2;let p=t.readUInt16BE(s);s+=2;let m=s;s+=v*p*3;let h=s;s+=l?v*p:0;let g=new Uint8ClampedArray(v*p*4);for(let d=0;d<p;d++)for(let a=0;a<v;a++){let o=a*4+d*v*4,f=a+d*v;g[o+0]=t.readUInt8(m+f*3+0),g[o+1]=t.readUInt8(m+f*3+1),g[o+2]=t.readUInt8(m+f*3+2),g[o+3]=l?t.readUInt8(h+f+2):255}i.push({x:0,y:0,fullwidth:v,fullheight:p,img:at(g,v,p)})}return i}function Vi(t){let e=new Qe(t),n=e.readUByte(),r=e.readUByte();e.readUByte(),e.readUShort(!1);let i=e.readUShort(!1),s=e.readUByte(),u=e.readUShort(!1),c=e.readUShort(!1),l=e.readUShort(!1),v=e.readUShort(!1),p=e.readUByte(),m=e.readUByte();if(e.skip(n),r!=1||p!=8)throw new Error("only palette based uncompressed TGA supported");if(s!=24)throw new Error("only 24bpp rgb TGA supported");if(m!=0)throw new Error("no fancy TGA's allowed");let h=e.readBuffer(i*3),g=new Uint8ClampedArray(l*v*4);for(let a=0;a<v;a++)for(let o=0;o<l;o++){let f=o*4+a*l*4,y=e.readUByte()*3;g[f+0]=h[y+2],g[f+1]=h[y+1],g[f+2]=h[y+0],g[f+3]=255,g[f+0]==255&&g[f+1]==0&&g[f+2]==255&&(g[f+0]=0,g[f+1]=0,g[f+2]=0,g[f+3]=0)}return e.eof||console.warn("didn't parse TGA sprite to completion"),{x:u,y:c,fullwidth:l,fullheight:v,img:at(g,l,v)}}function Er(t){const e=t.data.slice();for(let n=0;n<e.length;n+=4)e[n+2]==0&&(e[n+2]=1);return He(e)}const vo=Object.freeze(Object.defineProperty({__proto__:null,expandSprite:zi,parseLegacySprite:un,parseSprite:wt,parseSubsprite:ln,parseTgaSprite:Vi,spriteHash:Er},Symbol.toStringTag,{value:"Module"}));function yo(t){return(t&255)<<24|(t&65280)<<8|(t&16711680)>>>8|(t&4278190080)>>>24}function bo(t){let e=0;t.readUInt32BE(e),e+=4,t.readUInt32BE(e),e+=4,t.readUInt32BE(e),e+=4;let n=t.readUint32BE(e);e+=4;let r=n!=67305985,i=()=>{let g=t.readUint32BE(e);return e+=4,r?yo(g):g};i(),i(),i();let s=i();i();let u=i(),c=i();i(),i(),i();let l=i(),v=i();e+=v;let p=s==37496,m=s==37492;if(!m&&!p)throw new Error("dds file is not dxt1 or dxt5 encoded as expected, continuing as dxt5");let h=[];for(let g=0;g<l;g++){let d=u>>g,a=c>>g,o=i();h.push({width:d,height:a,data:t.slice(e,e+o)}),e+=o}return{isDxt1:m,isDxt5:p,mips:h,width:u,height:c}}function wo(t){let e=0,n=t.readUInt32LE(e);e+=4,t.readUInt32LE(e),e+=4;let r=t.readUInt32LE(e);e+=4;let i=t.readUInt32LE(e);e+=4;let s=t.readUInt32LE(e);e+=4;let u=t.readUInt32LE(e);e+=4;let c=t.readUInt32LE(e);e+=4;let l=t.readUInt32LE(e);e+=4,e+=44;let v=t.readUInt32LE(e+8);e+=32,e+=20;let p=v==894720068,m=v==827611204;if(!m&&!p)throw new Error("dds file is not dxt1 or dxt5 encoded as expected, continuing as dxt5");let h=[];for(let g=0;g<l;g++){let d=s>>g,a=i>>g,o=d*a*(p?16:8);h.push({width:d,height:a,data:t.slice(e,e+o)}),e+=o}return{magic:n,flags:r,height:i,width:s,pitchorlinearsize:u,depth:c,isDxt1:m,isDxt5:p,mips:h}}function Eo(t,e=-1,n=!0){let r=wo(t);e==-1&&(r.isDxt5?e=32:e=0);let i=r.width-e*2,s=r.height-e*2,u=Buffer.alloc(i*s*4);if(So(u,i*4,r.mips[0].data,r.mips[0].width,e,e,i,s,r.isDxt5),n)for(let c=0;c<u.length;c+=4)u[c+3]=255;return{data:u,width:i,height:s}}function _o(t,e=-1,n=!0){let r=bo(t);e==-1&&(r.isDxt5?e=32:e=0);let i=r.width-e*2,s=r.height-e*2,u=Buffer.alloc(i*s*4);if(Ao(u,i*4,r.mips[0].data,r.mips[0].width,e,e,i,s,r.isDxt5),n)for(let c=0;c<u.length;c+=4)u[c+3]=255;return{data:u,width:i,height:s}}function gt(t,e,n){return((t>>e&(1<<n)-1)*2*255+(1<<n)-1)/((1<<n)-1)/2}function ie(t,e,n){let r=32-n-e;return t<<r>>>r+e}function zr(t,e,n){let r=32-n-e;return t<<r>>r+e}function xt(t,e){return t[e]|t[e+1]<<8}function or(t,e){return(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}function So(t,e,n,r,i,s,u,c,l){const v=l?16:8,p=l?8:0,m=new Uint8Array(4),h=new Uint8Array(4),g=new Uint8Array(4),d=new Uint8Array(8),a=new Uint16Array(8);for(let o=s/4;o<(s+c)/4;o++)for(let f=i/4;f<(i+u)/4;f++){let y=(r/4*o+f)*v;a[4]=xt(n,y+p+0),a[5]=xt(n,y+p+2),a[6]=xt(n,y+p+4),a[7]=xt(n,y+p+6),m[0]=gt(a[4],11,5),h[0]=gt(a[4],5,6),g[0]=gt(a[4],0,5),m[1]=gt(a[5],11,5),h[1]=gt(a[5],5,6),g[1]=gt(a[5],0,5),d[0]=255,d[1]=255,d[2]=255,d[3]=255,a[4]>a[5]?(m[2]=(2*m[0]+m[1]+1)/3,h[2]=(2*h[0]+h[1]+1)/3,g[2]=(2*g[0]+g[1]+1)/3,m[3]=(m[0]+2*m[1]+1)/3,h[3]=(h[0]+2*h[1]+1)/3,g[3]=(g[0]+2*g[1]+1)/3):(m[2]=(m[0]+m[1])/2,h[2]=(h[0]+h[1])/2,g[2]=(g[0]+g[1])/2,m[3]=0,h[3]=0,g[3]=0,d[3]=0);for(let E=0;E<16;E++){let _=(f*4+E%4-i)*4+(o*4+(E/4|0)-s)*e,S=a[E<8?6:7]>>E%8*2&3;t[_+0]=m[S],t[_+1]=h[S],t[_+2]=g[S],t[_+3]=d[S]}if(l){if(a[0]=xt(n,y+0),a[1]=xt(n,y+2),a[2]=xt(n,y+4),a[3]=xt(n,y+6),d[0]=gt(a[0],0,8),d[1]=gt(a[0],8,8),d[0]>d[1])for(let S=0;S<6;S++)d[2+S]=((6-S)*d[0]+(1+S)*d[1]+3)/7;else{for(let S=0;S<4;S++)d[2+S]=((4-S)*d[0]+(1+S)*d[1]+2)/5;d[6]=0,d[7]=255}let E=0,_=1;for(let S=0;S<16;S++){let T=(f*4+S%4-i)*4+(o*4+(S/4|0)-s)*e,A=a[_]>>E&7;E+=3,E>=16&&(E-=16,_++,A|=a[_]&1<<E-1),t[T+3]=d[A]}}}}const Vr=new Int16Array([2,8,-2,-8,5,17,-5,-17,9,29,-9,-29,13,42,-13,-42,18,60,-18,-60,24,80,-24,-80,33,106,-33,-106,47,183,-47,-183]),Do=new Int8Array([-3,-6,-9,-15,2,5,8,14,-3,-7,-10,-13,2,6,9,12,-2,-5,-8,-13,1,4,7,12,-2,-4,-6,-13,1,3,5,12,-3,-6,-8,-12,2,5,7,11,-3,-7,-9,-11,2,6,8,10,-4,-7,-8,-11,3,6,7,10,-3,-5,-8,-11,2,4,7,10,-2,-6,-8,-10,1,5,7,9,-2,-5,-8,-10,1,4,7,9,-2,-4,-8,-10,1,3,7,9,-2,-5,-7,-10,1,4,6,9,-3,-4,-7,-10,2,3,6,9,-1,-2,-3,-10,0,1,2,9,-4,-6,-8,-9,3,5,7,8,-3,-5,-7,-9,2,4,6,8]),Yn=new Uint8Array([3,6,11,16,23,32,41,64]);function ke(t){return t>255?255:t<0?0:t}function $e(t,e,n,r){return ke(t+Do[e<<3|r]*n)}function je(t){return t<<4|t}function Bt(t){return t<<3|t>>2}function Nt(t){return t<<2|t>>4}function jr(t){return t<<1|t>>7}function Ao(t,e,n,r,i,s,u,c,l){const v=l?16:8,p=l?8:0,m=new Uint8Array(16);for(let h=s/4;h<(s+c)/4;h++)for(let g=i/4;g<(i+u)/4;g++){let a=(r/4*h+g)*v,o=or(n,a+p),f=or(n,a+p+4),x=ie(o,0,1),y=ie(o,1,1),E=ie(o,27,5),_=ie(o,19,5),S=ie(o,11,5),T=zr(o,24,3),A=zr(o,16,3),I=zr(o,8,3),N=E+T,F=_+A,P=S+I,U=N>=0&&N<32,O=F>=0&&F<32,V=P>=0&&P<32,J=U&&O&&V,z,X,Y,W,q,re,xe,de,be;if(y==0||J){y==0?(z=je(ie(o,28,4)),W=je(ie(o,24,4)),X=je(ie(o,20,4)),q=je(ie(o,16,4)),Y=je(ie(o,12,4)),re=je(ie(o,8,4))):(z=Bt(E),X=Bt(_),Y=Bt(S),W=Bt(N),q=Bt(F),re=Bt(P));let ae=ie(o,5,3),ne=ie(o,2,3);for(let te=0;te<16;te++){let oe=f>>>te+15&2|f>>>te&1,le=(g*4+(te/4|0)-i)*4+(h*4+te%4-s)*e,j=x==1?te%4<2:te<8,ee=j?ae:ne;t[le+0]=ke((j?z:W)+Vr[ee<<2|oe]),t[le+1]=ke((j?X:q)+Vr[ee<<2|oe]),t[le+2]=ke((j?Y:re)+Vr[ee<<2|oe]),t[le+3]=255}}else if(!U||!O){if(U){z=je(ie(o,27,4)),X=je(ie(o,24,3)<<1|ie(o,20,1)),Y=je(ie(o,19,1)<<3|ie(o,15,3)),W=je(ie(o,11,4)),q=je(ie(o,7,4)),re=je(ie(o,3,4));let ae=z<<16|X<<8|Y,ne=W<<16|q<<8|re,te=ae>=ne?1:0,oe=ie(o,2,1)<<2|ie(o,0,1)<<1|te,le=Yn[oe];m[0]=ke(z+le),m[1]=ke(X+le),m[2]=ke(Y+le),m[4]=ke(z-le),m[5]=ke(X-le),m[6]=ke(Y-le),m[8]=ke(W+le),m[9]=ke(q+le),m[10]=ke(re+le),m[12]=ke(W-le),m[13]=ke(q-le),m[14]=ke(re-le)}else{m[0]=je(ie(o,27,2)<<2|ie(o,24,2)),m[1]=je(ie(o,20,4)),m[2]=je(ie(o,16,4)),m[8]=je(ie(o,12,4)),m[9]=je(ie(o,8,4)),m[10]=je(ie(o,4,4));let ae=ie(o,2,2)<<1|ie(o,0,1),ne=Yn[ae];m[4]=ke(m[8]+ne),m[5]=ke(m[9]+ne),m[6]=ke(m[10]+ne),m[12]=ke(m[4]-ne),m[13]=ke(m[5]-ne),m[14]=ke(m[6]-ne)}for(let ae=0;ae<16;ae++){let ne=f>>>ae+15&2|f>>>ae&1,te=(g*4+(ae/4|0)-i)*4+(h*4+ae%4-s)*e;t[te+0]=ke(m[ne<<2|0]),t[te+1]=ke(m[ne<<2|1]),t[te+2]=ke(m[ne<<2|2]),t[te+3]=255}}else if(!V){z=Nt(ie(o,25,6)),X=jr(ie(o,24,1)<<6|ie(o,17,6)),Y=Nt(ie(o,16,1)<<5|ie(o,11,2)<<3|ie(o,7,3)),W=Nt(ie(o,2,5)<<1|ie(o,0,1)),q=jr(ie(f,25,7)),re=Nt(ie(f,19,6)),xe=Nt(ie(f,13,6)),de=jr(ie(f,6,7)),be=Nt(ie(f,0,6));for(let ae=0;ae<16;ae++){let ne=ae%4,te=ae/4|0,oe=(g*4+ne-i)*4+(h*4+te-s)*e;t[oe+0]=ke(ne*(W-z)+te*(xe-z)+4*z+2>>2),t[oe+1]=ke(ne*(q-X)+te*(de-X)+4*X+2>>2),t[oe+2]=ke(ne*(re-Y)+te*(be-Y)+4*Y+2>>2),t[oe+3]=255}}if(l){let ae=or(n,a),ne=or(n,a+4),te=ie(ae,24,8),oe=ie(ae,20,4),le=ie(ae,16,4),j=(g*4-i)*4+(h*4-s)*e+3;t[j+0+0*e]=$e(te,le,oe,ie(ae,13,3)),t[j+0+1*e]=$e(te,le,oe,ie(ae,10,3)),t[j+0+2*e]=$e(te,le,oe,ie(ae,7,3)),t[j+0+3*e]=$e(te,le,oe,ie(ae,4,3)),t[j+4+0*e]=$e(te,le,oe,ie(ae,1,3)),t[j+4+1*e]=$e(te,le,oe,ie(ae,0,1)<<2|ie(ne,30,2)),t[j+4+2*e]=$e(te,le,oe,ie(ne,27,3)),t[j+4+3*e]=$e(te,le,oe,ie(ne,24,3)),t[j+8+0*e]=$e(te,le,oe,ie(ne,21,3)),t[j+8+1*e]=$e(te,le,oe,ie(ne,18,3)),t[j+8+2*e]=$e(te,le,oe,ie(ne,15,3)),t[j+8+3*e]=$e(te,le,oe,ie(ne,12,3)),t[j+12+0*e]=$e(te,le,oe,ie(ne,9,3)),t[j+12+1*e]=$e(te,le,oe,ie(ne,6,3)),t[j+12+2*e]=$e(te,le,oe,ie(ne,3,3)),t[j+12+3*e]=$e(te,le,oe,ie(ne,0,3))}}}class ji{imagefiles;stripAlpha;isMaterialTexture;type;mipmaps;cachedDrawables;cachedImageDatas;bmpWidth=-1;bmpHeight=-1;filesize;constructor(e,n,r){if(this.isMaterialTexture=!!r,this.stripAlpha=n,this.imagefiles=[],this.cachedDrawables=[],this.cachedImageDatas=[],e instanceof ImageData)this.filesize=e.data.byteLength,this.type="imagedata",this.mipmaps=1,this.cachedImageDatas=[Promise.resolve(e)];else if(this.filesize=e.byteLength,e.readUint32BE(0)==2303741511)this.type="png",this.imagefiles.push(e),this.mipmaps=1;else{let s=0,u=0;for(;;){let c=e.readUInt8(u+s+1+4+0),l=e.readUInt8(u+s+1+4+1);if(c==0&&l==0){this.type="bmpmips";break}else if(c==68&&l==68){this.type="dds";break}else if(c==137&&l==80){this.type="png";break}else if(c==171&&l==75){this.type="ktx";break}else if(u++<=1)continue;throw new Error("failed to detect texture")}u==1&&e.readUint8(s++),this.mipmaps=e.readUInt8(s++),this.type=="bmpmips"&&(this.bmpWidth=e.readUInt32BE(s),s+=4,this.bmpHeight=e.readUInt32BE(s),s+=4);for(let c=0;c<this.mipmaps;c++){let l;this.type=="bmpmips"?l=(this.bmpWidth>>c)*(this.bmpHeight>>c)*4:(l=e.readUInt32BE(s),s+=4),this.imagefiles.push(e.slice(s,s+l)),s+=l,this.cachedDrawables.push(null),this.cachedImageDatas.push(null)}}}toImageData(e=0){let n=this.cachedImageDatas[e];return n||(n=(async()=>{const r=this.isMaterialTexture?32:void 0;if(this.type=="bmpmips"){let i=this.bmpWidth>>e,s=this.bmpHeight>>e,u=Co(this.imagefiles[e],i,s,r,this.stripAlpha);return at(u.data,u.width,u.height)}else{if(this.type=="png")return fo(this.imagefiles[e],"image/png",this.stripAlpha);if(this.type=="dds"){let i=Eo(this.imagefiles[e],r,this.stripAlpha);return at(i.data,i.width,i.height)}else if(this.type=="ktx"){let i=_o(this.imagefiles[e],r,this.stripAlpha);return at(i.data,i.width,i.height)}else throw this.type=="imagedata"?new Error("image not found"):new Error("unknown format")}})(),this.cachedImageDatas[e]=n),n}async toWebgl(e=0){let n=this.cachedDrawables[e];return n||(this.type=="png"?n=new Promise((r,i)=>{let s=new Image;s.onload=()=>{URL.revokeObjectURL(s.src),r(s)},s.onerror=i;let u=new Blob([this.imagefiles[e]],{type:"image/png"});s.src=URL.createObjectURL(u)}):n=this.toImageData(e).then(r=>createImageBitmap(r)),this.cachedDrawables[e]=n),n}}function Co(t,e,n,r=-1,i=!0){r==-1&&(r=0,console.warn("cannot infer padding size on bmp textures"));const s=e*4,u=r*s+r*4,c=n-2*r,l=e-2*r,v=l*4,p=new Uint8Array(v*c);for(let m=0;m<c;m++){const h=m*v;if(p.set(t.subarray(u+s*m,u+s*m+v),h),i)for(let g=h;g<h+v;g+=4)p[g+3]=255}return{data:p,width:l,height:c}}const To=Object.freeze(Object.defineProperty({__proto__:null,ParsedTexture:ji},Symbol.toStringTag,{value:"Module"}));async function cn(t,e,n,r,i=!1){let s=r??await t.getFileById(e,n);if(s.readUint32BE()!=1245792065)return s;let c=K.audio.read(s,t),l=i?await Fo(c.chunks,h=>h.data??t.getFileById(e,h.fileid),8):c.chunks.filter(h=>h.data).map(h=>h.data),v=[],p=0n,m=0;for(let[h,g]of l.entries()){let d=0n;for(let a=0;a<g.length;){let o=a;g.readUint32BE(a),a+=4,g.readUint8(a),a+=1,g.readUint8(a),a+=1;let f=g.readBigInt64LE(a);a+=8,g.readUint32LE(a),a+=4,g.readUint32LE(a),a+=4,g.readUint32LE(a),a+=4;let x=g.readUint8(a);a+=1;let y=0;for(let I=0;I<x;I++)y+=g.readUint8(a),a+=1;let E=Uint8Array.prototype.slice.call(g,o,a),_=g.slice(a,a+y);a+=y;let S=o==0&&h==0,T=h==l.length-1&&a==g.length;E.writeUint8(+S<<1|+T<<2,5),E.writeBigInt64LE(f+p,6),E.writeUint32LE(m++,18),E.writeUInt32LE(0,22);let A=Zn(_,Zn(E));E.writeUint32LE(A,22),(h==0||a!=0)&&(v.push(E),v.push(_)),d=f}p+=d}return Buffer.concat(v)}async function Fo(t,e,n=4){let r=[],i=0,s=0,u=[];for(let c of t)i>=s+n&&(u.push(await r[s%n]),s++),r[i%n]=e(c,i),i++;for(;s<i;)u.push(await r[s%n]),s++;return u}const ko=new Uint32Array([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188]);function Zn(t,e=0,n=0,r=t.length){e=e^0;for(let i=n;i<r;i++)e=e<<8^ko[e>>>24&255^t[i]];return(e^0)>>>0}var lr=new Uint8Array(1e7);const yt={};yt.array=function(t){var e=0,n=0,r=[0,1,3,7,15,31,63,127,255];return function(i){for(var s=0;i>0;){var u=8-e;i>=u?(s<<=u,s|=r[u]&t[n++],e=0,i-=u):(s<<=i,s|=(t[n]&r[i]<<8-i-e)>>8-i-e,e+=i,i=0)}return s}};yt.simple=function(t){var e=yt.header(t),n,r,i=[],s=0;do r=yt.decompress(t,e),r!=-1&&(i.push(r),s+=r.byteLength);while(r!=-1);n=new Uint8Array(s),s=0;for(var u=0;u<i.length;++u)r=i[u],n.set(r,s),s+=r.byteLength;return n};yt.header=function(t){if(t(24)!=4348520)throw"No magic number found";var e=t(8)-48;if(e<1||e>9)throw"Not a BZIP archive";return e};yt.decompress=function(t,e,n){for(var r=20,i=258,s=0,u=1,c=50,l=1e5*9,v="",p=0;p<6;p++)v+=t(8).toString(16);if(v=="177245385090")return-1;if(v!="314159265359")throw"eek not valid bzip data";if(t(32),t(1))throw"unsupported obsolete version";var m=t(24);if(m>l)throw"Initial position larger than buffer size";var h=t(16),g=new Uint8Array(256),d=0;for(p=0;p<16;p++)if(h&1<<15-p){var a=t(16);for(q=0;q<16;q++)a&1<<15-q&&(g[d++]=16*p+q)}var o=t(3);if(o<2||o>6)throw"another error";var f=t(15);if(f==0)throw"meh";for(var x=[],p=0;p<o;p++)x[p]=p;for(var y=new Uint8Array(32768),p=0;p<f;p++){for(var q=0;t(1);q++)if(q>=o)throw"whoops another error";var E=x[q];x.splice(q,1),x.splice(0,0,E),y[p]=E}for(var z=d+2,_=[],q=0;q<o;q++){var S=new Uint8Array(i),T=new Uint8Array(r+1);h=t(5);for(var p=0;p<z;p++){for(;;){if(h<1||h>r)throw"I gave up a while ago on writing error messages";if(!t(1))break;t(1)?h--:h++}S[p]=h}var A,I;A=I=S[0];for(var p=1;p<z;p++)S[p]>I?I=S[p]:S[p]<A&&(A=S[p]);var N;N=_[q]={},N.permute=new Uint32Array(i),N.limit=new Uint32Array(r+1),N.base=new Uint32Array(r+1),N.minLen=A,N.maxLen=I;for(var F=N.base.subarray(1),P=N.limit.subarray(1),U=0,p=A;p<=I;p++)for(var h=0;h<z;h++)S[h]==p&&(N.permute[U++]=h);for(p=A;p<=I;p++)T[p]=P[p]=0;for(p=0;p<z;p++)T[S[p]]++;for(U=h=0,p=A;p<I;p++)U+=T[p],P[p]=U-1,U<<=1,F[p+1]=U-(h+=T[p]);P[I]=U+T[I]-1,F[A]=0}for(var O=new Uint32Array(256),p=0;p<256;p++)x[p]=p;var V,J,z,X;V=J=z=X=0;for(var Y=new Uint32Array(l);;){if(!z--){if(z=c-1,X>=f)throw"meow i'm a kitty, that's an error";N=_[y[X++]],F=N.base.subarray(1),P=N.limit.subarray(1)}for(p=N.minLen,q=t(p);;){if(p>N.maxLen)throw"rawr i'm a dinosaur";if(q<=P[p])break;p++,q=q<<1|t(1)}if(q-=F[p],q<0||q>=i)throw"moo i'm a cow";var W=N.permute[q];if(W==s||W==u){V||(V=1,h=0),W==s?h+=V:h+=2*V,V<<=1;continue}if(V){if(V=0,J+h>=l)throw"Boom.";for(E=g[x[0]],O[E]+=h;h--;)Y[J++]=E}if(W>d)break;if(J>=l)throw"I can't think of anything. Error";p=W-1,E=x[p],x.splice(p,1),x.splice(0,0,E),E=g[E],O[E]++,Y[J++]=E}if(m<0||m>=J)throw"I'm a monkey and I'm throwing something at someone, namely you";for(var q=0,p=0;p<256;p++)a=q+O[p],O[p]=q,q=a;for(var p=0;p<J;p++)E=Y[p]&255,Y[O[E]]|=p<<8,O[E]++;var re=0,xe=0,de=0;J&&(re=Y[m],xe=re&255,re>>=8,de=-1),J=J;var be,ae,ne,te=0;for(n||(n=1/0);J;){for(J--,ae=xe,re=Y[re],xe=re&255,re>>=8,de++==3?(be=xe,ne=ae,xe=-1):(be=1,ne=xe);be--;)if(lr[te++]=ne,!--n)return lr;xe!=ae&&(de=0)}if(te>lr.length)throw new Error("not enough memory reserved");return lr.slice(0,te)};function Qn(t){var e=Buffer.alloc(t.byteLength+4);return t.copy(e,4),e.writeUInt16BE(16986,0),e.writeUInt8(104,2),e.writeUInt8(56,3),Buffer.from(yt.simple(yt.array(e)))}const nt={data:0,oldmodels:1,oldframebases:2,map:4},bt={config:2,sprites:4,index:5,textures:6};function Kr(t,e,n){let r=new Qe(t),i=r.readTribyte();if(r.readTribyte()!=i&&(r=new Qe(Qn(r.readBuffer())),r.bytesLeft()!=i))throw new Error("decompress failed");let u=[],c=r.readUShort(!0),l=r.tee().skip(c*10);for(let v=0;v<c;v++){let p=r.readUInt(!0),m=r.readTribyte(),h=r.readTribyte(),g=l.scanloc(),d=l.readBuffer(h);if(m!=h&&(d=Qn(d),d.length!=m))throw new Error("decompress failed");u.push({fileid:v,buffer:d,offset:g,size:m,namehash:p})}return u}async function Io(t){let e=await t.getArchiveById(nt.data,bt.index),n=await t.getArchiveById(nt.data,bt.config);return{items:ur(n,"OBJ"),objects:ur(n,"LOC"),overlays:ur(n,"FLO"),npcs:ur(n,"NPC"),underlays:[],spotanims:[],mapmeta:Bo(e)}}function Bo(t){let e=mt("MAP_INDEX",!0),n=mt("MAP_VERSION",!0),r=mt("MAP_CRC",!0),i=t.find(m=>m.namehash==e),s=t.find(m=>m.namehash==n),u=t.find(m=>m.namehash==r);if(!i||!s||!u)throw new Error;let c=new Qe(i.buffer),l=new Qe(s.buffer),v=new Qe(u.buffer),p=new Map;for(;!c.eof();)p.set(c.readUShort(!0),{map:c.readUShort(!0),loc:c.readUShort(!0),crc:v.readUInt(!0),version:l.readUShort(!0)}),c.readUByte();return p}function ur(t,e){let n=mt(`${e}.IDX`,!0),r=mt(`${e}.DAT`,!0),i=t.find(p=>p.namehash==n),s=t.find(p=>p.namehash==r);if(!i||!s)throw new Error;let u=new Qe(i.buffer),c=u.readUShort(!0),l=2,v=[];for(let p=0;p<c;p++){let m=u.readUShort(!0);v.push(s.buffer.slice(l,l+m)),l+=m}return v}async function ei(t,e,n){let r=`${e}.${n?"tga":"dat"}`,i=await t.findSubfileByName(nt.data,bt.textures,r);return n?Vi(i.buffer):qi(t,i.buffer)}async function qi(t,e){let n=await t.findSubfileByName(nt.data,bt.textures,"INDEX.DAT");return un(n.buffer,e)}async function Xi(t,e,n,r){let i=await ei(t,e,r);if(!n)return i;let s=await ei(t,n,r);if(s.img.width+s.x>i.img.width||s.img.height+s.y>i.img.height)return console.warn("tried to overlay image outside of dest bounds"),i;let u=at(i.img.data.slice(),i.img.width,i.img.height);for(let c=0;c<s.img.height;c++)for(let l=0;l<s.img.width;l++){let v=(c*s.img.width+l)*4,p=((c+s.y)*i.img.width+(l+s.x))*4,m=s.img.data[v+0],h=s.img.data[v+1],g=s.img.data[v+2],d=s.img.data[v+3],a=m==0&&h==255&&g==0&&d==255,o=d==255;u.data[p+0]=a?0:o?m:i.img.data[p+0],u.data[p+1]=a?0:o?h:i.img.data[p+1],u.data[p+2]=a?0:o?g:i.img.data[p+2],u.data[p+3]=a?0:o?d:i.img.data[p+3]}return{x:i.x,y:i.y,fullwidth:i.fullwidth,fullheight:i.fullheight,img:u}}const Yr=Object.freeze(Object.defineProperty({__proto__:null,combineLegacyTexture:Xi,legacyGroups:bt,legacyMajors:nt,legacyPreload:Io,parseLegacyArchive:Kr,parseLegacyImageFile:qi},Symbol.toStringTag,{value:"Module"})),dt={textures:6,models:101,entity:102,maps:103,land:104,filter:105,jagex:106,media:107,sounds:108,config:110};function qr(t,e,n,r,i,s,u,c,l,v,p,m,h){return{buildnr:t,locsjson:m,name:h,date:e,versions:{config:n,maps:r,land:i,media:s,models:u,textures:c,entity:l,sounds:v,filter:p}}}const Hi=[qr(115,new Date("2001-12-24 20:28"),48,27,0,28,12,8,10,0,0,null,"dec 2001 - last original world data"),qr(203,new Date("2003-12-01"),85,63,0,58,36,17,24,1,2,null,"Build 203 - User provided"),qr(230,new Date("2004-02-18 11:43"),100,100,100,100,100,100,100,100,100,"SceneryLocs.json","Last version of entered files")],No=Object.fromEntries(Object.entries(dt).map(([t,e])=>[e,t]));function $i(t){let e=[];for(let n of Hi)e.push({buildnr:n.buildnr,iscomplete:!1,locsjson:n.locsjson,target:n.versions,foundjag:Object.fromEntries(Object.entries(n.versions).map(([r])=>[r,0])),foundmem:Object.fromEntries(Object.entries(n.versions).map(([r])=>[r,0]))});for(let n of t){let r=n.match(/^(?<name>[a-zA-Z]+)(?<version>\d+)\.(?<type>jag|mem)$/);if(r){let i=+r.groups.version,s=r.groups.type=="mem",u=r.groups.name;for(let c of e){let l=s?c.foundmem:c.foundjag;c.target[u]&&i<=c.target[u]&&i>l[u]&&(l[u]=i)}}}for(let n of e){let r=!0;for(let i in n.target)n.foundjag[i]!=n.target[i]&&(r=!1),n.foundmem[i]!=0&&n.foundmem[i]!=n.target[i]&&(r=!1);n.iscomplete=r}return e}class fn extends Ui{usingversion;fs;constructor(e,n){super(),this.fs=e,this.usingversion=n}static async create(e,n){if(!n){let r=await e.readDir("."),i=$i(r.map(u=>u.name)),s=localStorage.rsmv_classicversion??"-1";n=i.at(+s)}return new fn(e,n)}async getFileArchive(e){if(e.major!=0)throw new Error("all files are placed in index 0 for classic caches");let n=No[e.minor],r=await this.getNamedFile(n,!1),i=await this.getNamedFile(n,!0),s=r?Kr(r,e.major):[],u=i?Kr(i,e.major):[];if(s.length==0&&u.length==0)throw new Error("no files found in index "+e.minor);return[...s,...u]}async getNamedFile(e,n){if(!this.usingversion||!this.fs)throw new Error("no classic files loaded in classic cache loader");let r=(n?this.usingversion.foundmem:this.usingversion.foundjag)[e];if(!r)return null;let i=`${e}${r}.${n?"mem":"jag"}`;return console.log("loading",i),this.fs.readFileBuffer(i)}getBuildNr(){return this.usingversion?.buildnr??200}getCacheMeta(){return this.usingversion?{name:`Classic ${this.getBuildNr()}`,descr:`${Object.entries(this.usingversion.foundjag).map(([e,n])=>`${e}: ${n}`).join(`
`)}`,timestamp:new Date(0)}:{name:"Classic",descr:"no files loaded",timestamp:new Date(0)}}async getFile(e,n){throw new Error("can only load archives in a classic cache")}}function ot(t,e){let n=new Array(t).fill(null).map(()=>({}));for(let[r,i]of Object.entries(e))for(let s=0;s<t;s++)n[s][r]=i();return n}async function Mo(t,e){let n=await t.getArchiveById(0,dt.models),r=(await t.findSubfileByName(0,dt.config,"STRING.DAT")).buffer,i=(await t.findSubfileByName(0,dt.config,"INTEGER.DAT")).buffer,s=0,u=()=>{let I=s;for(;s<r.length&&r[s++]!=0;);return r.toString("latin1",I,s-1)},c=0,l=()=>{let I=i.readUint32BE(c);return c+=4,I},v=()=>{let I=i.readInt32BE(c);return c+=4,I},p=()=>{let I=i.readUint16BE(c);return c+=2,I},m=()=>i.readUint8(c++),h=()=>!!m(),g=ot(p(),{name:u,examine:u,command:u,sprite:p,price:e<180?p:l,stackable:h,special:h,equip:p,color:l,untradeable:e<180?()=>!1:h,member:e<180?()=>!1:h}),d=ot(p(),{name:u,examine:u,command:e<180?()=>"":u,attack:m,strength:m,hits:m,defence:m,hostility:m,anims:()=>new Array(12).fill(null).map(m),haircolor:l,topcolor:l,bottomcolor:l,skincolor:l,width:p,height:p,walkmodel:m,combatmodel:m,combatanim:m}),a=ot(p(),{name:u,subname:u}),o=ot(p(),{name:u,color:l,gendermodel:m,has_a:h,has_f:h,unk:m}),f=ot(p(),{name:u,examine:u,command_0:u,command_1:u,model:()=>{let I=u(),N=mt(`${I}.ob3`,!0),F=n.find(P=>P.namehash==N)?.fileid;return{name:I,id:F}},xsize:m,zsize:m,type:m,item_height:m}),x=ot(p(),{name:u,examine:u,command_0:u,command_1:u,height:p,frontdecor:v,backdecor:v,blocked:h,invisible:h}),y=ot(p(),{height:m,texture:m}),E=ot(p(),{decor:l,type:()=>{let I=m();return{type:I,autoconnect:I==1||I==3,indoors:I==2,iswater:I==3,bridge:I==4}},blocked:h}),_=ot(p(),{}),S=ot(p(),{name:u,examine:u,level:m,num_runes:m,type:m,runetypes:()=>new Array(m()).fill(null).map(p),runeamounts:()=>new Array(m()).fill(null).map(m)}),T=ot(p(),{name:u,examine:u,level:m,drain:m});console.log(`decoded rsc config, ints ${c}/${i.length}, strings ${s}/${r.length}`);let A=[];if(t.usingversion.locsjson)try{let I=JSON.parse(await t.fs.readFileText(t.usingversion.locsjson)),N=944;A=I.sceneries.map(F=>({id:F.id,dir:F.direction,level:Math.floor(F.pos.Y/N),x:2304+F.pos.X,z:1776+F.pos.Y%N}))}catch{console.warn("failed to load external classic locs")}return{items:g,npcs:d,textures:a,anims:o,objects:f,wallobjects:x,roofs:y,tiles:E,projectile:_,spells:S,prayers:T,jsonlocs:A}}const hn=Object.freeze(Object.defineProperty({__proto__:null,ClassicFileSource:fn,classicBuilds:Hi,classicConfig:Mo,classicGroups:dt,detectClassicVersions:$i},Symbol.toStringTag,{value:"Module"}));async function Lo(t,e){let n=K.cutscenes.read(e,t),r=document.createElement("div");r.style.width=`${n.width}px`,r.style.height=`${n.height}px`,console.log(n);let i=`cutscene-${He(e)>>>0}`,s="",u="",c=n.elements.reduce((g,d)=>Math.max(g,d.end),0),l=g=>`${Math.max(0,g/c*100).toFixed(2)}%`,v=new Map,p=function(g,d,a,o){return s+=`@keyframes ${d}{
`,s+=`  from{${o(a[0])}}
`,s+=a.map(f=>`  ${l(g.start+f[0])}{${o(f)}}
`).join(""),s+=`  to{${o(a.at(-1))}}
`,s+=`}
`,`${c}s infinite ${d} linear`};s+=`.subtitle{
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
`;for(let g=n.elements.length-1;g>=0;g--){let d=n.elements[g],a=`${i}-${g}-visibility`;if(s+=`@keyframes ${a}{
`,s+=`  0%{visibility:hidden}
`,s+=`  ${l(d.start)}{visibility:visible}
`,s+=`  ${l(d.end)}{visibility:hidden}
`,s+=`}
`,u+=`<div style="animation:${c}s step-end infinite ${a}">
`,d.subtitle&&(u+=`<div class="subtitle"><div>${Ft(d.subtitle)}</div></div>
`),d.soundid)try{let o=await cn(t,B.sounds,d.soundid,null,!0);u+=`<audio src="data:audio/ogg;base64,${o.toString("base64")}" data-timestart="${d.start}" data-timeend="${d.end}"></audio>
`}catch{console.warn(`missing sound ${d.soundid} ${d.sound}`)}if(d.graphics){if(d.graphics.length!=0)for(let o=d.graphics.length-1;o>=0;o--){let f=d.graphics[o],x=v.get(f.spriteid);if(!x){let _=await t.getFileById(B.sprites,f.spriteid);x=await Gi(wt(_)[0].img),v.set(f.spriteid,x)}let y=[];if(f.opacityframes.length!=0){let _=`${i}-${g}-${o}-opacity`;y.push(p(d,_,f.opacityframes,S=>`opacity:${S[1].toFixed(2)}`))}if(f.rotateframes.length!=0){let _=`${i}-${g}-${o}-rotate`;y.push(p(d,_,f.rotateframes,S=>`rotate:${S[1].toFixed(2)}deg;`))}if(f.translateframes.length!=0){let _=`${i}-${g}-${o}-translate`;y.push(p(d,_,f.translateframes,S=>`translate:${S[1].toFixed(2)}px ${S[2].toFixed(2)}px`))}if(f.scaleframes.length!=0){let _=`${i}-${g}-${o}-scale`;y.push(p(d,_,f.scaleframes,S=>`scale:${S[1].toFixed(3)} ${S[2].toFixed(2)};`))}let E=`position:absolute; top:0px; left:0px; transform-origin:center;margin-left:${-f.width/2}px; margin-top:${-f.height/2}px;`;u+=`<img data-spriteid="${f.spriteid}" src="${x}" width="${f.width}" height="${f.height}" style="${E} animation:${y.join()};">
`}u+="</div>"}}function m(g){console.log("module init");let d=0,a=Date.now(),o=1,f=0;function x(){return d+(Date.now()-a)/1e3*o}function y(T){let A=T.currentTarget.valueAsNumber;S(A,0)}function E(){S(x(),1)}function _(){S(x(),0)}function S(T,A=1){if(d=T,o=A,a=Date.now(),f&&(clearTimeout(f),f=0),A!=0){let F=(g-T/A)*1e3;f=+setTimeout(()=>{S(0,A)},F)}let I=document.getAnimations();for(let F of I)F.currentTime=1e3*T,F.playbackRate=A,A!=0?F.play():F.pause();let N=Array.from(document.querySelectorAll("audio"));for(let F of N){let P=T-+(F.dataset.timestart??0);F.dataset.delaytimer&&(clearTimeout(+F.dataset.delaytimer),F.dataset.delaytimer=void 0),A!=0?(F.playbackRate=A,P<0?F.dataset.delaytimer=""+ +setTimeout(()=>{F.currentTime=0,F.play()},-P/A*1e3):(F.currentTime=P,F.play())):F.pause()}}return{seek:S,play:E,pause:_,onRangeChange:y}}let h=`<!DOCTYPE html>
`;return h+=`<html>
`,h+=`<head>
`,h+=`<style>
`,h+=s,h+=`</style>
`,h+=`</head>
`,h+=`<body>
`,h+=`<input type="range" min="0" max="${c}" step="0.01" style="width:400px;" oninput="controls.onRangeChange(event)">
`,h+=`<input type="button" value="play" onclick="controls.play()">
`,h+=`<input type="button" value="pause" onclick="controls.pause()">
`,h+=`<div style="position:relative; width:${n.width}px; height:${n.height}px; overflow:hidden; zoom:0.5;">
`,h+=u,h+=`</div>
`,h+=`<script>
`,h+=`var controls=(${m})(${c});
`,h+=`controls.play()
`,h+=`<\/script>
`,h+=`</body>
`,h+=`</html>
`,{html:u,css:s,doc:h}}function dn(t,e){t.customProgramCacheKey=()=>"zoffset"+e,t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace(/#include <(\w+)>/g,(r,i)=>`// == ${i} ==
${r}`),n.vertexShader=n.vertexShader.replace("#include <project_vertex>",`
			#include <project_vertex>
			mvPosition.xyz -= normalize(mvPosition.xyz) * ${e.toExponential()};
			gl_Position = projectionMatrix * mvPosition;
		`)}}function Ji(t,e){t.customProgramCacheKey=()=>"floortex",t.onBeforeCompile=n=>{n.vertexShader=`#ifdef USE_MAP
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
`)}}const Ge=[255,255,255],Ro=[255,0,0],rt=512,Q=256,Wi=rt*192/128,ze=Wi+rt/2,Je=Q+rt/5,vt=Wi,Pt=ze-(ze-vt)/(Q+Je)*rt;function ti(t,e,n){let r=(n[1]-t[1])*(e[2]-t[2])-(e[1]-t[1])*(n[2]-t[2]),i=(n[2]-t[2])*(e[0]-t[0])-(e[2]-t[2])*(n[0]-t[0]),s=(n[0]-t[0])*(e[1]-t[1])-(e[0]-t[0])*(n[1]-t[1]),u=1/Math.hypot(r,i,s);return[r*u,i*u,s*u]}class pn{pos=[];color=[];uvs=[];index=[];normals=[];vertindex=0;parent;constructor(e){this.parent=e}addParallelogram(e,n,r,i){let s=[n[0]+i[0]-r[0],n[1]+i[1]-r[1],n[2]+i[2]-r[2]],u=ti(n,r,i);return this.pos.push(...n,...r,...i,...s),this.color.push(...e,...e,...e,...e),this.normals.push(...u,...u,...u,...u),this.uvs.push(0,0,1,0,1,1,0,1),this.index.push(this.vertindex+0,this.vertindex+2,this.vertindex+1,this.vertindex+0,this.vertindex+3,this.vertindex+2),this.vertindex+=4,this}addTriangle(e,n,r,i){let s=ti(n,i,r);return this.color.push(...e,...e,...e),this.pos.push(...n,...r,...i),this.uvs.push(0,0,0,1,1,1),this.normals.push(...s,...s,...s),this.index.push(this.vertindex+0,this.vertindex+1,this.vertindex+2),this.vertindex+=3,this}addCube(e,[n,r,i],[s,u,c]){let l=n-s/2,v=r-u/2,p=i-c/2,m=l+s,h=v+u,g=p+c;return this.addParallelogram(e,[l,v,p],[m,v,p],[m,h,p]),this.addParallelogram(e,[m,v,p],[m,v,g],[m,h,g]),this.addParallelogram(e,[m,v,g],[l,v,g],[l,h,g]),this.addParallelogram(e,[l,v,g],[l,v,p],[l,h,p]),this.addParallelogram(e,[l,v,g],[m,v,g],[m,v,p]),this.addParallelogram(e,[l,h,p],[m,h,p],[m,h,g]),this}addExtrusion(e,n,r){let i=r[r.length-1];if(Math.hypot(...n)!=0)for(let s=0;s<r.length;s++){let u=r[s];this.addParallelogram(e,i,u,[u[0]+n[0],u[1]+n[1],u[2]+n[2]]),i=u}if(r.length>2){let s=r[2][0]-r[1][0],u=r[2][1]-r[1][1],c=r[2][2]-r[1][2],l=r[0][0]-r[1][0],v=r[0][1]-r[1][1],p=r[0][2]-r[1][2],m=v*c-u*p,h=p*s-c*l,g=l*u-s*v,d=Math.hypot(m,h,g);m/=d,h/=d,g/=d,this.index.length;let a=-1,o=-1;for(let f=0;f<r.length;f++){let x=r[f];this.pos.push(...x),this.color.push(...e),this.uvs.push(0,0),this.normals.push(m,h,g);let y=this.vertindex++;a==-1?a=y:(o==-1||this.index.push(a,o,y),o=y)}a=-1,o=-1;for(let f=r.length;f>0;f--){let x=r[f%r.length];this.pos.push(...x),this.color.push(...e),this.uvs.push(0,0),this.normals.push(-m,-h,-g);let y=this.vertindex++;a==-1?a=y:(o==-1||this.index.push(a,o,y),o=y)}}return this}convertSubmesh(e){let n=new Xe(new Uint16Array(this.index),1);return{indices:n,vertexstart:0,vertexend:this.pos.length/3|0,attributes:{pos:new Xe(new Float32Array(this.pos),3),color:new Xe(new Uint8Array(this.color),3,!0),texuvs:new Xe(new Float32Array(this.uvs),2),normals:new Xe(new Float32Array(this.normals),3)},indexLODs:[n],hasVertexAlpha:!1,materialId:e,needsNormalBlending:!1}}mat(e){return this.parent.mat(e)}convert(){return this.parent.convert()}}function pt(t){if(t instanceof er){let e=t.data.array;if(!ArrayBuffer.isView(e))throw new Error("typed array backing store expected");return[e,t.offset,t.data.stride]}else{let e=t.array;if(!ArrayBuffer.isView(e))throw new Error("typed array backing store expected");return[e,0,t.itemSize]}}function Ki(t,e,n,r,i){const s=new Be,u=new Be,c=new Be,l=new Be;for(let v=r;v<i;v+=3){const p=t.getX(v+0),m=t.getX(v+1),h=t.getX(v+2);s.fromBufferAttribute(e,p),u.fromBufferAttribute(e,m),c.fromBufferAttribute(e,h),c.sub(u),s.sub(u),l.crossVectors(c,s),s.fromBufferAttribute(n,p),u.fromBufferAttribute(n,m),c.fromBufferAttribute(n,h),s.add(l),u.add(l),c.add(l),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,u.x,u.y,u.z),n.setXYZ(h,c.x,c.y,c.z)}for(let v=r;v<i;v++)l.fromBufferAttribute(n,v),l.normalize(),n.setXYZ(v,l.x,l.y,l.z)}function Po(t){let e=0,n=0,r=[];return t.forEach((i,s)=>{let u=i.convertSubmesh(s);r.push(u);let c=u.attributes.pos;for(let l=0;l<c.count;l++){let v=c.getY(l);e=Math.min(e,v),n=Math.max(n,v)}}),{miny:e,maxy:n,bonecount:0,skincount:0,meshes:r}}class We{meshes=new Map;mat(e){let n=this.meshes.get(e);return n||(n=new pn(this),this.meshes.set(e,n)),n}convert(){return Po(this.meshes)}}const Uo=new We().mat(0).addCube(Ge,[0,300,0],[600,600,600]).convert(),Oo=new We().mat(0).addParallelogram(Ge,[-Q,0,Q],[-Q,rt,Q],[-Q,rt,-Q]).mat(1).addParallelogram(Ro,[-Q,0,-Q],[-Q,rt,-Q],[-Q,rt,Q]).convert(),Go=new We().mat(0).addParallelogram(Ge,[Q,0,Q],[Q,rt,Q],[-Q,rt,-Q]).mat(1).addParallelogram(Ge,[-Q,0,-Q],[-Q,rt,-Q],[Q,rt,Q]).convert(),zo=new We().mat(0).addParallelogram(Ge,[-Je,Pt,-Je],[Je,Pt,-Je],[Je,Pt,Je]).convert(),Vo=new We().mat(0).addParallelogram(Ge,[-Q,ze,Q],[-Q,ze,-Q],[Je,vt,-Q]).convert(),jo=new We().mat(0).addTriangle(Ge,[Je,vt,Q],[-Q,vt,-Je],[-Q,ze,Q]).convert(),qo=new We().mat(0).addTriangle(Ge,[-Q,ze,-Q],[-Q,ze,Q],[Q,ze,Q]).mat(0).addTriangle(Ge,[-Q,ze,-Q],[Q,ze,Q],[Q,Pt,-Q]).convert(),Xo=new We().mat(0).addTriangle(Ge,[Q,ze,Q],[-Q,ze,-Q],[-Q,Pt,Q]).mat(0).addTriangle(Ge,[-Q,ze,-Q],[Q,ze,Q],[Q,Pt,-Q]).convert(),Ho=new We().mat(0).addTriangle(Ge,[Je,vt,-Je],[-Q,vt,-Je],[-Q,ze,Q]).mat(0).addTriangle(Ge,[Je,vt,Q],[Je,vt,-Je],[-Q,ze,Q]).convert(),$o=new We().mat(0).addParallelogram(Ge,[-Q,ze,-Q],[Q,ze,-Q],[Q,ze,Q]).convert(),Mt=Jo();function Jo(){const t=Q,e=Q-rt/8,r=[0,0,0];return{wall:new We().mat(-1).addExtrusion(Ge,r,[[-t,0,-t],[-t,0,t],[-e,0,t],[-e,0,-t]]).convert(),shortcorner:new We().mat(-1).addExtrusion(Ge,r,[[-t,0,t],[-e,0,t],[-e,0,e],[-t,0,e]]).convert(),longcorner:new We().mat(-1).addExtrusion(Ge,r,[[-e,0,e],[-e,0,-t],[-t,0,-t],[-t,0,t],[t,0,t],[t,0,e]]).convert(),pillar:new We().mat(-1).addExtrusion(Ge,r,[[-t,0,t],[-e,0,t],[-e,0,e],[-t,0,e]]).convert(),diagonal:new We().mat(-1).addExtrusion(Ge,r,[[-t,0,-t],[-t,0,-e],[e,0,t],[t,0,t],[t,0,e],[-e,0,-t]]).convert()}}function Yi(t){let e=t.meshes.reduce((c,l)=>c+l.vertexend-l.vertexstart,0),n=new Uint32Array(e),r=0;for(let c=0;c<t.meshes.length;c++){let l=t.meshes[c];for(let v=l.vertexstart;v<l.vertexend;v++)n[r++]=c<<23|v}function i(c,l,v){const p=c.meshes[l>>23],m=c.meshes[v>>23],h=l&8388607,g=v&8388607,d=p.attributes.pos,a=m.attributes.pos;return d.getX(h)-a.getX(g)||d.getY(h)-a.getY(g)||d.getZ(h)-a.getZ(g)}let s=new Be,u=new Be;n.sort((c,l)=>i(t,c,l));for(let c=0;c<n.length;){let l=c;for(c++;c<n.length&&i(t,n[l],n[c])==0;)c++;if(c>l+1){const v=t.meshes[n[l]>>23],p=n[l]&8388607;u.set(0,0,0);for(let m=l;m<c;m++){const h=t.meshes[n[m]>>23],g=n[m]&8388607;h.needsNormalBlending&&h.attributes.normals&&(s.fromBufferAttribute(h.attributes.normals,g),u.add(s))}u.normalize();for(let m=l;m<c;m++){const h=t.meshes[n[m]>>23],g=n[m]&8388607;if(m!=l&&v.attributes.boneids&&h.attributes.boneids)for(let d=0;d<v.attributes.boneids.itemSize;d++)h.attributes.boneids.setComponent(g,d,v.attributes.boneids.getComponent(p,d)),h.attributes.boneweights.setComponent(g,d,v.attributes.boneweights.getComponent(p,d));h.needsNormalBlending&&h.attributes.normals&&u.lengthSq()>.001&&h.attributes.normals.setXYZ(g,u.x,u.y,u.z)}}}}function Zi(t){return{bonecount:Math.max(...t.map(e=>e.bonecount)),skincount:Math.max(...t.map(e=>e.skincount)),maxy:Math.max(...t.map(e=>e.maxy)),miny:Math.max(...t.map(e=>e.miny)),meshes:t.flatMap(e=>e.meshes),debugmeshes:t.flatMap(e=>e.debugmeshes??[])}}function mn(t,e){let n=e.replaceMaterials?.find(s=>s[0]==t.materialId)?.[1],r={...t};n!=null&&(r.materialId=n==65535?-1:n),typeof e.lodLevel=="number"&&e.lodLevel!=-1&&(r.indices=t.indexLODs[Math.min(e.lodLevel,t.indexLODs.length-1)]);let i;if(e.replaceColors&&e.replaceColors.length!=0&&t.attributes.color){let s=t.attributes.color,u=[];for(let c of e.replaceColors){let l=rr(kt(c[0])),v=rr(kt(c[1]));u.push([l[0]<<16|l[1]<<8|l[2],v])}for(let c=0;c<s.count;c++){let l=s.getX(c)*255<<16|s.getY(c)*255<<8|s.getZ(c)*255;for(let v of u)if(l==v[0]){i||(i=s.clone()),i.setXYZ(c,v[1][0]/255,v[1][1]/255,v[1][2]/255);break}}}return i&&(r.attributes={...t.attributes,color:i}),r}function gn(t,e,n,r=!1){let i=t.geometry.getAttribute("color"),s=!!i&&i.itemSize==4;t.material=e.mat;let u=n&&e.matmeta.baseColorFraction==1?[.5,.5,.5]:e.matmeta.baseColor;if(e.matmeta.baseColorFraction!=1||u.some(v=>v!=1)||n||!e.matmeta.textures.diffuse||s){if(e.matmeta.baseColorFraction!=0){let v=t.geometry.getAttribute("position").count,p=t.geometry.getAttribute("color"),m=1-e.matmeta.baseColorFraction,h=e.matmeta.baseColorFraction*u[0]*255,g=e.matmeta.baseColorFraction*u[1]*255,d=e.matmeta.baseColorFraction*u[2]*255,a=s?4:3,o=r&&p?p:new Xe(new Uint8Array(a*v),a,!0),[f,x,y]=pt(o),[E,_,S]=p?pt(p):[null,0,0];for(let T=0;T<v;T++){let A=x+y*T,I=_+S*T,N=E?E[I+0]:255,F=E?E[I+1]:255,P=E?E[I+2]:255;f[A+0]=Math.min(255,N*m+h),f[A+1]=Math.min(255,F*m+g),f[A+2]=Math.min(255,P*m+d),s&&(f[A+3]=E?E[I+3]:255)}t.geometry.setAttribute("color",o)}}else t.geometry.getAttribute("color")&&t.geometry.deleteAttribute("color")}async function xn(t,e){let n=new Ai,r=null;if(e.bonecount!=0||e.skincount!=0){let i=[],s=Math.max(e.bonecount,e.skincount),u=new Qt;n.add(u);for(let c=0;c<s;c++)i.push(u);r=new Ar(i)}for(let i of e.meshes){let s=i.attributes,u=new nr;u.setAttribute("position",s.pos),s.color&&u.setAttribute("color",s.color),s.normals&&u.setAttribute("normal",s.normals),s.texuvs&&u.setAttribute("uv",s.texuvs),s.skinids&&u.setAttribute("RA_skinIndex_skin",s.skinids),s.skinweights&&u.setAttribute("RA_skinWeight_skin",s.skinweights),s.boneids&&u.setAttribute("RA_skinIndex_bone",s.boneids),s.boneweights&&u.setAttribute("RA_skinWeight_bone",s.boneweights),u.index=i.indices;let c;if(s.skinids||s.boneids){c=new Cr(u);let v=!!u.attributes.RA_skinIndex_bone;u.attributes.skinIndex||(u.setAttribute("skinIndex",v?u.attributes.RA_skinIndex_bone:u.attributes.RA_skinIndex_skin),u.setAttribute("skinWeight",v?u.attributes.RA_skinWeight_bone:u.attributes.RA_skinWeight_skin)),c.bind(r)}else c=new qt(u);let l=await t.getMaterial(i.materialId,i.hasVertexAlpha,!1);gn(c,l,!1),n.add(c)}return e.debugmeshes&&e.debugmeshes.length!=0&&n.add(...e.debugmeshes),n}const Wo=Object.freeze(Object.defineProperty({__proto__:null,MeshBuilder:pn,ModelBuilder:We,applyMaterial:gn,augmentThreeJsFloorMaterial:Ji,augmentZOffsetMaterial:dn,classicRoof10:zo,classicRoof12:Vo,classicRoof13:jo,classicRoof14:qo,classicRoof15:Xo,classicRoof16:Ho,classicRoof17:$o,classicWall:Oo,classicWallDiag:Go,computePartialNormals:Ki,getAttributeBackingStore:pt,materialPreviewCube:Uo,mergeBoneids:Yi,mergeModelDatas:Zi,modifyMesh:mn,ob3ModelToThree:xn,topdown2dWallModels:Mt},Symbol.toStringTag,{value:"Module"}));function gr(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?gr=function(n){return typeof n}:gr=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},gr(t)}function Ko(t,e,n){var r=n.value;if(typeof r!="function")throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(gr(r)));var i=!1;return{configurable:!0,get:function(){if(i||this===t.prototype||this.hasOwnProperty(e)||typeof r!="function")return r;var u=r.bind(this);return i=!0,Object.defineProperty(this,e,{configurable:!0,get:function(){return u},set:function(l){r=l,delete this[e]}}),i=!1,u},set:function(u){r=u}}}function Xr(t,e){for(let n=0;n<t.length-1;n++){let r=t[n],i=t[n+1];if(r.time<=e&&i.time>=e){let s=r.value[0],u=i.value[0],c=r.time,l=i.time,v=s+r.value[2],p=c+r.value[1],m=u-r.value[4],h=l-r.value[3],g=Zo(c,p,h,l,e);return Yo(s,v,m,u,g)}}throw new Error("out of track bounds")}function Yo(t,e,n,r,i){let s=3*e-t-3*n+r,u=3*t-6*e+3*n,c=3*e-3*t,l=t;return i*i*i*s+i*i*u+i*c+l}function Zo(t,e,n,r,i){let s=1e-5,u=3*e-t-3*n+r,c=3*t-6*e+3*n,l=3*e-3*t,v=t-i;if(Math.abs(u)<s){let O=l*l-4*c*v;if(O<0)throw new Error("no solution for quadratic interpolation");let V=2*v/(-l-Math.sqrt(O)),J=2*v/(-l+Math.sqrt(O)),z=V>=-s&&V<=1+s,X=J>=-s&&J<=1+s;if(!z&&!X)throw new Error("no valid solutions for quadratic interpolation");return z?V:J}let p=-c/(3*u),m=p*p*p+(c*l-3*u*v)/(6*u*u),h=l/(3*u),g=m*m+Math.pow(h-p*p,3),d=g>=0?Math.sqrt(g):0,a=g>=0?0:Math.sqrt(-g),o=m+d,f=a,x=m-d,y=-a,E=Math.hypot(o,f),_=Math.atan2(f,o),S=Math.hypot(x,y),T=Math.atan2(y,x),A=Math.pow(E,1/3),I=_/3,N=Math.pow(S,1/3),F=T/3,P=0,U=0;for(let O of[0,1,2])for(let V of[0,1,2]){let J=A*Math.sin(I+O*Math.PI/3*2)+N*Math.sin(F+V*Math.PI/3*2),z=A*Math.cos(I+O*Math.PI/3*2)+N*Math.cos(F+V*Math.PI/3*2)+p;Math.abs(J)<s&&z>=-s&&z<=1+s&&(P=A*Math.cos(I+O*Math.PI/3*2)+N*Math.cos(F+V*Math.PI/3*2)+p,U++)}if(U==0)throw new Error("no solution found");return P}async function Qo(t,e,n){let r=K.framemaps.read(await e.engine.getFileById(B.framemaps,n),e.engine.rawsource);if(!r.skeleton)throw new Error("framebase does not have skeleton");let i=[],s=[],u=new Ke,c=new Ke().makeScale(1,1,-1);for(let[p,m]of r.skeleton.entries()){let h=new Qt,g=new Ke().fromArray(m.bonematrix);h.name="bone_"+p,m.nonskinboneid==65535?(s.push(h),g.multiply(c)):i[m.nonskinboneid].add(h),u.copy(g).decompose(h.position,h.quaternion,h.scale),h.updateMatrixWorld(),i[p]=h}let l=new Ar(i);s.length!=0&&t.add(...s),t.updateMatrixWorld(!0);let v=new Ke().copy(t.matrixWorld);l.calculateInverses(),t.traverse(p=>{if(p instanceof Cr){p.bind(l,v);let m=p.geometry;m.attributes.skinIndex=m.attributes.RA_skinIndex_skin,m.attributes.skinWeight=m.attributes.RA_skinWeight_skin}})}async function el(t,e){let n=K.skeletalAnim.read(await t.engine.getFileById(B.skeletalAnims,e),t.engine.rawsource),r=[],i=n.tracks.sort((c,l)=>c.boneid!=l.boneid?c.boneid-l.boneid:c.type_0to9-l.type_0to9),s=[{t:"unknown",a:0},{t:"rotate",a:0},{t:"rotate",a:1},{t:"rotate",a:2},{t:"translate",a:0},{t:"translate",a:1},{t:"translate",a:2},{t:"scale",a:0},{t:"scale",a:1},{t:"scale",a:2},{t:"unknown",a:0},{t:"unknown",a:0},{t:"unknown",a:0},{t:"unknown",a:0},{t:"unknown",a:0},{t:"unknown",a:0},{t:"unknown",a:0}];for(let c=0;c<i.length;){let l=i[c],v=null,p=null,m=null,h=s[l.type_0to9],g=l.boneid<16e3?l.boneid-64:l.boneid-16384;for(;c<i.length;){let T=i[c],A=s[T.type_0to9];if(T.boneid!=l.boneid||A.t!=h.t)break;A.a==0&&(v=T.chunks),A.a==1&&(p=T.chunks),A.a==2&&(m=T.chunks),c++}let d="bone_"+g,a=h.t=="scale"?1:0,o=[],f=[],x=new Ci,y=new tt,E=v?.at(-1)?.time??p?.at(-1)?.time??m?.at(-1)?.time??0,_=0;for(let T=0;T<E;T+=5)f[_++]=v?Xr(v,T):a,f[_++]=p?Xr(p,T):a,f[_++]=m?Xr(m,T):a,o.push(T);let S=new Float32Array(o.map(T=>T*.02));if(h.t=="translate"&&r.push(new yr(`${d}.position`,S,f)),h.t=="scale"){if(g==0)for(let T=0;T<f.length;T+=3)f[T+2]*=-1;r.push(new yr(`${d}.scale`,S,f))}if(h.t=="rotate"){let T=new Float32Array(o.length*4);for(let A=0;A*3<f.length;A++)x.set(f[A*3+0],f[A*3+1],f[A*3+2],"YXZ"),y.setFromEuler(x),y.toArray(T,A*4);r.push(new Jr(`${d}.quaternion`,S,T))}}return{clip:new tn("anim_"+(Math.random()*1e3|0),void 0,r),framebaseid:n.framebase}}typeof TextEncoder<"u"||require("util").TextEncoder;const ri={i8:{gltype:5120,constr:Int8Array},u8:{gltype:5121,constr:Uint8Array},i16:{gltype:5122,constr:Int16Array},u16:{gltype:5123,constr:Uint16Array},i32:{gltype:5124,constr:Int32Array},u32:{gltype:5124,constr:Uint32Array},f32:{gltype:5126,constr:Float32Array},f64:{gltype:5130,constr:Float64Array},f16:{gltype:5131,constr:Uint16Array}};function tl(t){let e={},n={},r=0,i=4,s=-1;for(let l in t){let v=t[l];if(!v)continue;let p=ri[v.newtype],m=Math.max(4,p.constr.BYTES_PER_ELEMENT);i=Math.max(i,m),r=Math.ceil(r/m)*m,e[l]={offset:r,stride:0,source:v},r+=p.constr.BYTES_PER_ELEMENT*v.vecsize,s==-1&&(s=v.source.length/v.vecsize)}let u=Math.ceil(r/i)*i,c=new Uint8Array(u*s);for(let l in e){let v=e[l],p=ri[v.source.newtype],m=new p.constr(c.buffer),h=u/p.constr.BYTES_PER_ELEMENT|0,g=v.source.vecsize,d=v.offset/p.constr.BYTES_PER_ELEMENT|0,a=v.source.source,o=[],f=[];for(let x=0;x<g;x++)f[x]=o[x]=a[x];for(let x=0;x<s;x++)for(let y=0;y<g;y++){let E=a[x*g+y];m[x*h+d+y]=E,E>f[y]&&(f[y]=E),E<o[y]&&(o[y]=E)}n[l]={byteoffset:v.offset,bytestride:u,gltype:p.gltype,min:o,max:f,name:l,normalize:!1,veclength:v.source.vecsize}}return{buffer:c,attributes:n,bytestride:u,vertexcount:s}}function vn(t){let e=[];for(let n=0;n<t.bonecount;n++)e.push({xsum:0,ysum:0,zsum:0,weightsum:0});for(let n of t.meshes){let r=n.attributes.boneids,i=n.attributes.boneweights,s=n.attributes.pos,u=n.indices;if(!(!r||!i))for(let c=0;c<u.count;c++){let l=u.array[c];for(let v=0;v<r.itemSize;v++){let p=r.array[l*r.itemSize+v],m=i.array[l*i.itemSize+v],h=e[p];h.xsum+=s.array[s.itemSize*l+0]*m,h.ysum+=s.array[s.itemSize*l+1]*m,h.zsum+=s.array[s.itemSize*l+2]*m,h.weightsum+=m}}}return e}function ni(t){return new Float32Array(t)}function ii(t){let e={};t.pos&&(e.pos={source:t.pos,vecsize:3,newtype:"f32"}),t.normals&&(e.normals={source:t.normals,vecsize:3,newtype:"i8"}),t.color&&(e.color={source:t.color,vecsize:4,newtype:"u8"}),t.texuvs&&(e.texuvs={source:t.texuvs,vecsize:2,newtype:"f32"}),t.skinids&&(e.skinids={source:t.skinids,vecsize:4,newtype:"u16"}),t.skinweights&&(e.skinweights={source:t.skinweights,vecsize:4,newtype:"u8"}),t.boneids&&(e.boneids={source:t.boneids,vecsize:4,newtype:"u8"}),t.boneweights&&(e.boneweights={source:t.boneweights,vecsize:4,newtype:"u8"});let n=tl(e),r={};n.bytestride%4==0&&(r.f32=new At(new Float32Array(n.buffer.buffer),n.bytestride/4)),r.u8=new At(n.buffer,n.bytestride),r.i8=new At(new Int8Array(n.buffer.buffer),n.bytestride),n.bytestride%2==0&&(r.u16=new At(new Uint16Array(n.buffer.buffer),n.bytestride/2));let i={};function s(u,c,l,v,p=!1){if(n.attributes[c]){let m=n.attributes[c],h=r[l];if(!h)throw new Error(`Stride mismatch for ${u} type ${l}`);let g=m.byteoffset/(l=="f32"?4:l=="u16"?2:1);i[u]=new er(h,v,g,p)}}return s("pos","pos","f32",3),s("normals","normals","i8",3,!0),s("color","color","u8",4,!0),s("texuvs","texuvs","f32",2),s("skinids","skinids","u16",4),s("skinweights","skinweights","u8",4,!0),s("boneids","boneids","u8",4),s("boneweights","boneweights","u8",4,!0),i}function ai(t){let e=new Uint8Array(t.length*4),n=new Uint8Array(t.length*4);const r=65535;for(let i=0;i<t.length;i++){let s=t[i];s=s==r?0:s+1,e[i*4]=s,n[i*4]=255}return{boneids:e,boneweights:n}}function si(t,e){if(e instanceof Uint16Array){let n=new Float32Array(t*2);for(let r=0;r<t*2;r++)n[r]=to(e[r]);return n}else return new Float32Array(e)}function oi(t){let e=new Int8Array(t.length);for(let n=0;n<t.length;n+=3){let r=t[n+0],i=t[n+1],s=t[n+2],u=Math.hypot(r,i,s);u==0&&(u=1);let c=127/u;e[n+0]=Math.round(r*c),e[n+1]=Math.round(i*c),e[n+2]=Math.round(s*c)}return e}function rl(t,e){let n=K.models.read(t,e),r=[];if(n.meshes)for(let i of n.meshes){if(i.isHidden)continue;let u=i.indexBuffers.map(o=>new Xe(o,1)),c=ni(i.positionBuffer),l=null,v=null,p=null,m=null,h=null,g=null,d=null;if(i.skin){let o=new Uint16Array(i.vertexCount*4),f=new Uint8Array(i.vertexCount*4),x=i.skin.skinWeightBuffer,y=i.skin.skinBoneBuffer,E=0,_=0;for(let S=0;S<i.vertexCount;S++){let T=255;for(let A=0;A<4;A++){let I=x[_++],N=y[E++],F=I!=0?I:T;if(T-=I,o[S*4+A]=N==65535?0:N,f[S*4+A]=F,I==0)break}}(E!=i.skin.skinWeightCount||_!=i.skin.skinWeightCount)&&console.log("model skin decode failed"),l=o,v=f}if(i.colourBuffer){if(!u[0])throw new Error("need index buf in order to read per-face colors");let o=u[0].array,f=new Uint8Array(i.vertexCount*4),x=i.alphaBuffer;for(let y=0;y<i.faceCount;y++){let[E,_,S]=rr(kt(i.colourBuffer[y]));for(let T=0;T<3;T++){let A=o[y*3+T]*4;f[A+0]=E,f[A+1]=_,f[A+2]=S,x?f[A+3]=x[y]:f[A+3]=255}}p=f}if(i.boneidBuffer){let o=ai(i.boneidBuffer);m=o.boneids,h=o.boneweights}i.uvBuffer&&(g=si(i.vertexCount,i.uvBuffer)),i.normalBuffer&&(d=oi(i.normalBuffer));let a=ii({pos:c,normals:d,color:p,texuvs:g,skinids:l,skinweights:v,boneids:m,boneweights:h,vertexCount:i.vertexCount});r.push({indices:u[0],vertexstart:0,vertexend:a.pos.count,indexLODs:u,materialId:i.materialArgument-1,hasVertexAlpha:!!i.alphaBuffer,needsNormalBlending:!1,attributes:a})}else if(n.meshdata){let i=n.meshdata,s=ni(i.positionBuffer),u=null,c=null,l=null,v=null,p=null,m=null,h=null;if(i.vertexColours){let d=new Uint8Array(i.vertexCount*4),a=i.vertexAlpha;for(let o=0;o<i.vertexColours.length;o++){let[f,x,y]=rr(kt(i.vertexColours[o])),E=a?a[o]:255,_=o*4;d[_+0]=f,d[_+1]=x,d[_+2]=y,d[_+3]=E}l=d}if(i.skin){let d=new Uint16Array(i.vertexCount*4),a=new Uint8Array(i.vertexCount*4);for(let o=0;o<i.skin.length;o++){let f=i.skin[o],x=255;if(f.ids.length!=f.weights.length)throw new Error("unexpected length difference in skin weights/ids");for(let y=0;y<f.ids.length;y++){let E=f.weights[y],_=f.ids[y],S=E!=0?E:x;if(x-=E,d[o*4+y]=_==65535?0:_,a[o*4+y]=S,E==0)break}}u=d,c=a}if(i.boneidBuffer){let d=ai(i.boneidBuffer);v=d.boneids,p=d.boneweights}i.uvBuffer&&(m=si(i.vertexCount,i.uvBuffer)),i.normalBuffer&&(h=oi(i.normalBuffer));let g=ii({pos:s,normals:h,color:l,texuvs:m,skinids:u,skinweights:c,boneids:v,boneweights:p,vertexCount:i.vertexCount});for(let d of i.renders){if(d.isHidden||d.buf.length==0)continue;let a=d.buf;if(a.BYTES_PER_ELEMENT==4){let y=new Uint32Array(a.length);for(let E=0;E<a.length;E++){let _=a[E];y[E]=_>>24&255|_>>8&65280|_<<8&16711680|_<<24&4278190080}a=y}let o=a[0],f=a[0];for(let y=0;y<a.length;y++){let E=a[y];E<o&&(o=E),E>f&&(f=E)}let x=new Xe(a,1);r.push({indices:x,vertexstart:o,vertexend:f+1,indexLODs:[x],materialId:d.materialArgument-1,hasVertexAlpha:!!d.hasVertexAlpha,needsNormalBlending:!1,attributes:g})}}return Qi(r)}function Qi(t){let e=0,n=0,r=0,i=0;for(let u of t){let c=u.attributes.pos;for(let p=0;p<c.count;p++){let m=c.getY(p);m>e&&(e=m),m<n&&(n=m)}let l=u.attributes.boneids;if(l){for(let p=0;p<l.count;p++)r=Math.max(r,l.getX(p),l.getY(p),l.getZ(p),l.getW(p));r+=2}let v=u.attributes.skinids;if(v){for(let p=0;p<v.count;p++)i=Math.max(i,v.getX(p),v.getY(p),v.getZ(p),v.getW(p));i+=2}}return{maxy:e,miny:n,meshes:t,bonecount:r,skincount:i}}const nl=Object.freeze(Object.defineProperty({__proto__:null,getBoneCenters:vn,makeModelData:Qi,parseOb3Model:rl},Symbol.toStringTag,{value:"Module"}));function il(t,e){let n=vn(e),r=new Qt;t.add(r);let i=[r],s=[],u=[new Ke];for(let p=1;p<e.bonecount;p++){let m=new Qt,h=new Qt;m.name=`root_${p}`,h.name=`bone_${p}`,m.add(h),s.push(m),i.push(h);let g=new Ke,d=n[p];d&&d.weightsum!=0&&(m.position.set(d.xsum/d.weightsum,d.ysum/d.weightsum,d.zsum/d.weightsum),g.setPosition(m.position)),g.invert(),u.push(g)}let c=new Ar(i,u);s.length!=0&&r.add(...s),r.updateMatrixWorld(!0);let l=new Ke().copy(r.matrixWorld);return c.calculateInverses(),t.traverse(p=>{if(p instanceof Cr){p.bind(c,l);let m=p.geometry;m.attributes.skinIndex=m.attributes.RA_skinIndex_bone,m.attributes.skinWeight=m.attributes.RA_skinWeight_bone}}),{mixer:new Ti(t)}}async function al(t,e){let n=e[0];if(!n)throw new Error("animation has no frames");let r=await t.engine.getArchiveById(B.frames,n.frameidhi),i=Object.fromEntries(r.map(m=>[m.fileid,K.frames.read(m.buffer,t.engine.rawsource)])),s=0,u=[],c=[];for(let m=0;m<e.length;m++){let h=e[m];i[h.frameidlow]?(u.push(s),s+=h.framelength*.02,c.push(i[h.frameidlow])):console.log(`missing animation frame ${h.frameidlow} in sequence ${h.frameidhi}`)}c.push(c[0]),u.push(s);let l=K.framemaps.read(await t.engine.getFileById(B.framemaps,c[0].probably_framemap_id),t.engine.rawsource),v=new Float32Array(u),p=ll(l,c);return m=>{let h=vn(m),g=ol(l,p,v,h).map((T,A)=>({id:A,trans:T})),d=v.length,a=[],o=new Ke,f=new Be,x=new Be,y=new tt,E=new tt,_=0;for(let T of g){if(T.id==0)continue;if(T.id>=m.bonecount){_++;continue}let A=`root_${T.id}`,I=`bone_${T.id}`,N=new Float32Array(d*3),F=new Float32Array(d*3),P=new Float32Array(d*4),U=new Float32Array(d*4);for(let O=0;O<d;O++)o.fromArray(T.trans,O*16),sl(o,x,y,f,E),x.toArray(F,O*3),y.toArray(P,O*4),f.toArray(N,O*3),E.toArray(U,O*4);a.push(new yr(`${A}.position`,v,F)),a.push(new Jr(`${A}.quaternion`,v,P)),a.push(new yr(`${A}.scale`,v,N)),a.push(new Jr(`${I}.quaternion`,v,U))}return _!=0&&console.log("skipped "+_+" bone animations since the model didn't have them"),new tn("anim",void 0,a)}}function sl(t,e,n,r,i){t.decompose(e,n,r),i.identity()}function ol(t,e,n,r){let i=n.length,s=new Ke,u=new Ke,c=new tt,l=new Ke,v=new Ke,p=Math.max(...t.data.flatMap(g=>g.data))+1+1,m=[];for(let g=0;g<p;g++){let d=new Float32Array(16*i),a=r[g],o=!a||a.weightsum==0?0:a.xsum/a.weightsum,f=!a||a.weightsum==0?0:a.ysum/a.weightsum,x=!a||a.weightsum==0?0:a.zsum/a.weightsum;for(let y=0;y<i;y++)d[y*16+0]=1,d[y*16+5]=1,d[y*16+10]=1,d[y*16+15]=1,d[y*16+12]=o,d[y*16+13]=f,d[y*16+14]=x;m.push(d)}let h=new Be;for(let g=0;g<i;g++){h.set(0,0,0);let d=g*16;for(let[a,o]of t.data.entries()){let f=e[a];if(o.type==0){h.fromArray(f,g*3);let x=0,y=0,E=0,_=0;for(let S of o.data){let T=r[S+1],A=m[S+1];T&&(x+=A[d+12]*T.weightsum,y+=A[d+13]*T.weightsum,E+=A[d+14]*T.weightsum,_+=T.weightsum)}_!=0&&h.set(h.x+x/_,h.y+y/_,h.z+E/_),l.makeTranslation(-h.x,-h.y,-h.z),v.makeTranslation(h.x,h.y,h.z)}if(o.type==1)for(let x of o.data){let y=m[x+1];y[d+12]+=f[g*3+0],y[d+13]+=f[g*3+1],y[d+14]+=f[g*3+2]}if(o.type==2){c.fromArray(f,g*4),u.makeRotationFromQuaternion(c),u.multiply(l),u.premultiply(v);for(let x of o.data){let y=m[x+1];s.fromArray(y,d),s.premultiply(u),s.toArray(y,d)}}if(o.type==3){u.makeScale(f[g*3+0],f[g*3+1],f[g*3+2]),u.multiply(l),u.premultiply(v);for(let x of o.data){let y=m[x+1];s.fromArray(y,d),s.premultiply(u),s.toArray(y,d)}}}}return m}function ll(t,e){let n=e.map(i=>({flags:i.flags,animdata:i.animdata,dataindex:0,baseid:i.probably_framemap_id,stream:new Qe(Buffer.from(i.animdata))})),r=[];for(let[i,s]of t.data.entries()){let u=[3,3,4,3,3,4,3,3,3,3,3][s.type],c=new Float32Array(u*n.length),l=0,v=new tt,p=new Ci;for(let m of n){let h=m?.flags[i]??0;if(h&-8&&console.log("unexpexted frame data flag "+(h&-8)),s.type==0&&(c[l++]=h&1?m.stream.readShortSmartBias():0,c[l++]=h&2?m.stream.readShortSmartBias():0,c[l++]=h&4?m.stream.readShortSmartBias():0,h&7&&console.log("type 0 data",h,[...c.slice(l-3,l)])),s.type==1&&(c[l++]=h&1?m.stream.readShortSmartBias():0,c[l++]=-(h&2?m.stream.readShortSmartBias():0),c[l++]=h&4?m.stream.readShortSmartBias():0),s.type==2){let g=0;if(h&1){let o=m.stream.readShortSmartBias(),f=m.stream.readShortSmartBias();g=Math.atan2(o,f)}let d=0;if(h&2){let o=m.stream.readShortSmartBias(),f=m.stream.readShortSmartBias();d=Math.atan2(o,f)}let a=0;if(h&4){let o=m.stream.readShortSmartBias(),f=m.stream.readShortSmartBias();a=Math.atan2(o,f)}p.set(g,d,a,"YXZ"),v.setFromEuler(p),v.toArray(c,l),l+=4}s.type==3&&(c[l++]=(h&1?m.stream.readShortSmartBias():128)/128,c[l++]=(h&2?m.stream.readShortSmartBias():128)/128,c[l++]=(h&4?m.stream.readShortSmartBias():128)/128),(s.type==5||s.type>=4)&&(c[l++]=h&1?m.stream.readUShortSmart():0,c[l++]=h&2?m.stream.readUShortSmart():0,c[l++]=h&4?m.stream.readUShortSmart():0)}r.push(c)}return n.forEach((i,s)=>{let u=i.stream.bytesLeft();if(u!=0){console.warn("ints left in anim decode: "+u,s);let c={};t.data.map((l,v)=>{c[l.type]=(c[l.type]??0)+(i.flags[v]??0).toString(2).replaceAll("0","").length}),console.log(c)}}),r}var ul=Object.defineProperty,cl=Object.getOwnPropertyDescriptor,fl=(t,e,n,r)=>{for(var i=cl(e,n),s=t.length-1,u;s>=0;s--)(u=t[s])&&(i=u(e,n,i)||i);return i&&ul(e,n,i),i};class ea extends Ri{model;loaded=null;cache;rootnode=new Fi;nullAnimPromise={clip:null,prom:new io};anims={"-1":this.nullAnimPromise};mountedanim=null;mixer=new Ti(this.rootnode);renderscene=null;targetAnimId=-1;skeletontype="none";skeletonHelper=null;cleanup(){this.listeners={},this.renderscene?.removeSceneElement(this),this.skeletonHelper?.removeFromParent(),this.renderscene=null}getSceneElements(){return{modelnode:this.rootnode,updateAnimation:this.updateAnimation}}addToScene(e){this.renderscene=e,e.addSceneElement(this)}onModelLoaded(){this.emit("loaded",void 0),this.renderscene?.forceFrame(),this.renderscene?.setCameraLimits()}updateAnimation(e,n){this.mixer.update(e),this.loaded?.matUvAnims.forEach(r=>r.tex.offset.copy(r.v).multiplyScalar(n))}constructor(e,n,r=""){super(),this.cache=e,this.model=(async()=>{let i=await Promise.all(n.map(async m=>{let h=await e.getModelData(m.modelid);return{...h,meshes:h.meshes.map(d=>mn(d,m.mods))}})),s=Zi(i);Yi(s);let u=await xn(this.cache,s);u.name=r;let c=[];for(let m=0;m<Math.max(s.bonecount,s.skincount);m++)c.push(u);let l=new Ar(c),v=[];u.traverse(m=>{if(m instanceof Cr&&m.bind(l),m instanceof qt&&m.material instanceof xa){let h=m.material.userData.gltfExtensions?.RA_materials_uvanim;if(h){let g=m.material,d=new va(h.uvAnim[0],h.uvAnim[1]);g.map&&v.push({tex:g.map,v:d}),g.normalMap&&v.push({tex:g.normalMap,v:d}),g.emissiveMap&&v.push({tex:g.emissiveMap,v:d}),g.metalnessMap&&v.push({tex:g.metalnessMap,v:d}),g.roughnessMap&&v.push({tex:g.roughnessMap,v:d})}}});let p=new tn(void 0,void 0,[]);return this.nullAnimPromise.clip=p,this.nullAnimPromise.prom.done(p),this.rootnode.add(u),this.rootnode.scale.set(1/512,1/512,-1/512),this.loaded={mesh:u,modeldata:s,nullAnim:p,matUvAnims:v},this.targetAnimId==-1&&this.setAnimation(-1),this.onModelLoaded(),this.loaded})()}mountAnim(e){if(!this.loaded)throw new Error("attempting to mount anim before model is loaded");if(this.mountedanim==e||this.loaded.modeldata.bonecount==0&&this.loaded.modeldata.skincount==0)return;let n=this.loaded.mesh;n.animations.indexOf(e)==-1&&n.animations.push(e),this.mixer.stopAllAction(),this.mixer.clipAction(e,n).play(),this.mountedanim=e}loadAnimation(e){return this.anims[e]?this.anims[e]:(this.anims[e]={clip:null,prom:(async()=>{let n=await this.cache.engine.getFileById(B.sequences,e),r=K.sequences.read(n,this.cache.engine.rawsource),i;if(r.skeletal_animation){let s=await el(this.cache,r.skeletal_animation);i=s.clip;let u=this.loaded??await this.model;if(this.skeletontype!="full"){if(this.skeletontype!="none")throw new Error("wrong skeleton type already mounted to model");await Qo(u.mesh,this.cache,s.framebaseid),this.skeletontype="full"}}else if(r.frames){let s=await al(this.cache,r.frames),u=this.loaded??await this.model;if(this.skeletontype!="baked"){if(this.skeletontype!="none")throw new Error("wrong skeleton type already mounted to model");il(u.mesh,u.modeldata),this.skeletontype="baked"}i=s(u.modeldata)}else throw new Error("animation has no frames");return this.anims[e]={clip:i,prom:Promise.resolve(i)},this.loaded?.modeldata||await this.model,this.anims[e].clip=i,i})()},this.anims[e])}async setAnimation(e){this.targetAnimId=e;const n=this.loadAnimation(e);return this.mountAnim(n.clip??await n.prom)}}fl([Ko],ea.prototype,"updateAnimation");const hl=-2147483643;class dl extends Ri{source;sceneCache=null;renderer=null;comps=new Map;highlightstack=[];interpreterprom=null;touchedComps=new Set;runOnloadScripts=!1;constructor(e){super(),this.source=e}toggleHighLightComp(e,n){let r=this.comps.get(e)?.element;r&&(n?(this.highlightstack.length!=0&&this.highlightstack.at(-1).classList.remove("rs-component--highlight"),r.classList.add("rs-component--highlight"),this.highlightstack.push(r)):(r.classList.remove("rs-component--highlight"),this.highlightstack.pop()!=r&&console.log("wrong unlightlight order"),this.highlightstack.length!=0&&this.highlightstack.at(-1).classList.add("rs-component--highlight")))}async runClientScriptCallback(e,n){if(n.length==0)return;let r=await(this.interpreterprom??=Fr(this.source).then(i=>new Fa(i,this)));if(typeof n[0]!="number")throw new Error("expected callback script id but got string");r.reset(),r.pushlist(n.slice(1)),r.activecompid=e,await r.callscriptid(n[0]),await r.runToEnd(),this.updateInvalidatedComps()}updateInvalidatedComps(){this.touchedComps.forEach(e=>e.updateDom()),this.touchedComps.clear()}}function pl(){let t="";return t+=`html{color:white;font-size:12px;}
`,t+=`.rs-component{position:absolute;pointer-events:none;}
`,t+=`.rs-component--highlight{outline:1px solid red;}
`,t+=`.rs-image{width:100%;height:100%;}
`,t+=".rs-image--cover{background-size:100% 100%; background-repeat:no-repeat;}",t+=".rs-interface-container{position:absolute;top:0px;left:0px;right:0px;bottom:0px;display:flex;align-items:center;justify-content:center;}",t+=".rs-interface-container-sub{position:relative;outline:1px solid green;}",t+=".rs-model{position:absolute;top:0px;left:0px;width:100%;height:100%;}",t+=".rs-componentmeta{}",t+=".rs-componentmeta--active{outline:1px solid red;}",t+=".rs-componentmeta-children{padding-left:15px;}",t}function ml(t){let e=r=>t[r];return{getcomp:e,click:r=>{console.log(e(+r.target.dataset.compid)),r.stopPropagation()}}}async function gl(t,e){let n=await t.source.getArchiveById(B.interfaces,e),r=new Map;for(let c of n)try{let l=e<<16|c.fileid;if(t.comps.has(l))throw new Error("ui render context already had comp with same id");let v=new ta(t,K.interfaces.read(c.buffer,t.source),l);r.set(c.fileid,v),t.comps.set(l,v)}catch{console.log(`failed to parse interface ${e}:${c.fileid}`)}for(let[c,l]of r)if(l.data.parentid!=65535){let v=r.get(l.data.parentid);if(!v){console.log("missing parent");continue}v.children.push(l)}let i=[];for(let c of r.values())(c.data.parentid==65535||!r.has(c.data.parentid))&&i.push(c);return{comps:r,rootcomps:i,basewidth:520,baseheight:340,id:e}}async function xl(t,e){let{comps:n,rootcomps:r,basewidth:i,baseheight:s}=await gl(t,e),u="";for(let l of r)u+=await l.toHtml(t);let c=`<!DOCTYPE html>
`;return c+=`<html>
`,c+=`<head>
`,c+=`<style>
`,c+=pl(),c+=`</style>
`,c+=`<script>
`,c+=`var mod=(${ml+""})(${JSON.stringify(Object.fromEntries([...n].map(l=>[l[0],l[1].data])))});
`,c+=`<\/script>
`,c+=`</head>
`,c+=`<body>
`,c+=`<div class="rs-interface-container">
`,c+=`<div style="width:${i}px; height:${s}px;">
`,c+=u,c+=`</div>
`,c+=`</div>
`,c+=`</body>
`,c+=`</html>
`,c}function xr(t){return`#${(t&16777215).toString(16).padStart(6,"0")}`}function vl(t){let e="",r="0px",i="0px";return t.aspectxtype==0?e+=`left:${t.baseposx}px;`:t.aspectxtype==1?(e+=`left:50%;margin-left:${t.baseposx}px;`,r="-50%"):t.aspectxtype==2?e+=`right:${t.baseposx}px;`:t.aspectxtype==3?e+=`left:${t.baseposx*100/16384}%;`:t.aspectxtype==4?(e+=`left:${50+t.baseposx*100/16384}%;`,r="-50%"):t.aspectxtype==5&&(e+=`right:${t.baseposx*100/16384}%;`),t.aspectytype==0?e+=`top:${t.baseposy}px;`:t.aspectytype==1?(e+=`top:50%;margin-top:${t.baseposy}px;`,i="-50%"):t.aspectytype==2?e+=`bottom:${t.baseposy}px;`:t.aspectytype==3?e+=`top:${t.baseposy*100/16384};`:t.aspectytype==4?(e+=`top:${50+t.baseposy*100/16384}%;`,i="-50%"):t.aspectytype==5&&(e+=`bottom:${t.baseposy*100/16384}%;`),(r!="0px"||i!="0px")&&(e+=`translate:${r} ${i};`),e}function yl(t){let e="";return t.aspectwidthtype==0?e+=`width:${t.basewidth}px;`:t.aspectwidthtype==1?e+=`width:calc(100% - ${t.basewidth}px);`:t.aspectwidthtype==2&&(e+=`width:${t.basewidth*100/16384}%;`),t.aspectheighttype==0?e+=`height:${t.baseheight}px;`:t.aspectheighttype==1?e+=`height:calc(100% - ${t.baseheight}px);`:t.aspectheighttype==2&&(e+=`height:${t.baseheight*100/16384}%;`),e}function bl(t,e,n){let r={rotx:n.rotate_x,roty:n.rotate_y,rotz:n.rotate_z,translatex:n.translate_x/4,translatey:n.translate_y/4,zoom:n.zoom*8},i=document.createElement("canvas");i.classList.add("rs-model");let s=t.makeUIRenderer(),u=null,c=d=>{u=new ea(e,[{modelid:d,mods:{}}],`model_${d}`),s.setmodel(u.getSceneElements(),0),u.model.then(l)},l=()=>{let d=i.clientWidth,a=i.clientHeight;if(d==0||a==0)return;let o=s.takePicture(d,a,r);i.width=o.width,i.height=o.height,i.getContext("2d").putImageData(o,0,0),p&&!v&&requestAnimationFrame(l)},v=0,p=!1,m=d=>{(d==32767||d==65535)&&(d=-1),u?.setAnimation(d),p=d!=-1,l()},h=new ResizeObserver(l);h.observe(i);let g=()=>{cancelAnimationFrame(v),v=0,h.disconnect(),s.dispose(),i.remove()};return i.render=l,{dispose:g,canvas:i,setmodel:c,setanim:m}}function li(t){let e="";return(t.hflip||t.vflip)&&(e+=`scale:${t.hflip?-1:1} ${t.vflip?-1:1};`),t.rotation!=0&&(e+=`rotate:${(-t.rotation/65536*360).toFixed(2)}deg;`),(t.color&16777215)!=16777215&&(e+=`background-color:${xr(t.color)};background-blend-mode:multiply;`),e}async function ui(t,e){let n="none",r=e&16777215;if(r!=16777215){let i=e>>24;i!=0&&console.log("sprite flags",i);let s=await t.source.getFileById(B.sprites,r),u=zi(wt(s)[0]);n=`url('${await Gi(u)}')`}return{imgcss:n,spriteid:e}}class ta{ctx;data;parent=null;children=[];clientChildren=[];compid;modelrenderer=null;spriteChild=null;textChild=null;loadingSprite=-1;element=null;api;constructor(e,n,r){this.ctx=e,this.data=n,this.compid=r,this.api=new yn(this)}isCompType(e){return!(e=="container"&&!this.data.containerdata||e=="model"&&!this.data.modeldata||e=="sprite"&&!this.data.spritedata||e=="text"&&!this.data.textdata||e=="figure"&&!this.data.figuredata)}async toHtml(e){let{style:n,title:r}=this.getStyle(),i="";for(let u of this.children)i+=await u.toHtml(e);if(this.data.textdata&&(i+=Kn(this.data.textdata.text)),this.data.modeldata){let u=this.data.modeldata.modelid==32767||this.data.modeldata.modelid==65535;n+="background:rgba(0,255,0,0.5);outline:blue;",i+=u?"placeholder":this.data.modeldata.modelid}if(this.data.spritedata){let u=li(this.data.spritedata),c=await ui(e,this.data.spritedata.spriteid);u+=`background-image:${c.imgcss};`,i+=`<div class="rs-image${this.data.spritedata.tiling?"":" rs-image--cover"}" style="${Ft(u)}"></div>`}let s="";return s+=`<div class="rs-component" data-compid=${this.compid} style="${Ft(n)}" onclick="mod.click(event)" title="${Ft(r)}">
`,s+=i,s+=`</div>
`,s}dispose(){this.ctx.comps.delete(this.compid),this.modelrenderer?.dispose(),this.element?.remove(),this.children.forEach(e=>e.dispose()),this.clientChildren.forEach(e=>e.dispose())}initDom(){return this.element??=document.createElement("div"),this.updateDom(),this.children.forEach(e=>{this.element.appendChild(e.initDom())}),this.clientChildren.forEach(e=>{this.element.appendChild(e.initDom())}),this.element.classList.add("rs-component"),this.element.ui=this.data,this.element.compid=this.compid,this.element}updateDom(){if(!this.element)throw new Error("element not set");let{style:e,title:n}=this.getStyle();if(this.data.modeldata){let r=this.data.modeldata.modelid==32767||this.data.modeldata.modelid==65535;!r&&this.ctx.renderer&&this.ctx.sceneCache?(this.modelrenderer??=bl(this.ctx.renderer,this.ctx.sceneCache,this.data.modeldata.positiondata),this.modelrenderer.setmodel(this.data.modeldata.modelid),this.modelrenderer.setanim(this.data.modeldata.animid),this.element.appendChild(this.modelrenderer.canvas)):this.modelrenderer&&(this.modelrenderer.dispose(),this.modelrenderer=null,e+="background:rgba(0,255,0,0.5);outline:blue;",this.element.innerText=r?"placeholder":"")}this.data.textdata?(this.textChild||(this.textChild=document.createElement("span"),this.element.appendChild(this.textChild)),this.textChild.innerHTML=Kn(this.data.textdata.text)):this.textChild&&(this.textChild.remove(),this.textChild=null),this.data.spritedata?this.loadingSprite!=this.data.spritedata.spriteid&&(this.spriteChild||(this.spriteChild=document.createElement("div"),this.element.appendChild(this.spriteChild),this.spriteChild.classList.add("rs-image")),this.spriteChild.style.cssText=li(this.data.spritedata),this.spriteChild.classList.toggle("rs-image--cover",!this.data.spritedata.tiling),ui(this.ctx,this.data.spritedata.spriteid).then(({imgcss:r,spriteid:i})=>{this.spriteChild&&i==this.data.spritedata?.spriteid&&(this.spriteChild.style.backgroundImage=r)}),this.loadingSprite=this.data.spritedata.spriteid):this.spriteChild&&(this.spriteChild.remove(),this.spriteChild=null),this.element.style.cssText=e,this.element.title=n}getStyle(){let e="";e+=vl(this.data),e+=yl(this.data);let n=!1;return this.data.figuredata?this.data.figuredata.filled?(e+=`background:${xr(this.data.figuredata.color)};`,n=!0):e+=`border:1px solid ${xr(this.data.figuredata.color)};`:this.data.textdata?(n=!0,e+="display:flex;",e+=`color:${xr(this.data.textdata.color)};`,this.data.textdata.alignhor==1?(e+="justify-content:center;",e+="text-align:center;"):this.data.textdata.alignhor&&(e+="justify-content:right;",e+="text-align:right;"),this.data.textdata.alignver==1?e+="align-items:center;":this.data.textdata.alignver&&(e+="align-items:bottom;"),n=!0):this.data.containerdata||this.data.spritedata||(this.data.modeldata||(e+="background:rgba(0,128,128,0.5);outline:red;"),n=!0),n&&(e+="pointer-events:initial;"),{title:this.data.rightclickopts.filter(i=>i).join(`
`),style:e}}}class yn{data;comp;constructor(e){this.data=e?.data??null,this.comp=e}changed(){this.comp?.ctx.touchedComps.add(this.comp)}findChild(e){return e==hl?this:this.comp?.clientChildren.find(n=>n.compid==e)?.api}getNextChildId(){return this.comp?this.comp.clientChildren.reduce((n,r)=>Math.max(n,r.compid),-1)+1:0}createChild(e,n){let r={type:n,aspectxtype:0,aspectytype:0,aspectwidthtype:0,aspectheighttype:0,basewidth:0,baseheight:0,baseposx:0,baseposy:0,bit4data:0,containerdata:null,spritedata:null,modeldata:null,figuredata:null,textdata:null,linedata:null,contenttype:-1,cursor:-1,hidden:0,menucounts:0,name:null,name2:"",optmask:0,optmask1data_bit40:null,parentid:this.comp?.compid??-1,rightclickcursors:[],rightclickopts:[],scripts:{},unkdata:null,unk10data:null,unk11data:null,unk12data:null,unk15data:null,unk16data:null,unk2:0,unk3:[],unk4:0,unk5:0,unk6:0,unkdatadata:null,unkffff:null,unkpre3:null,unkprepre3:null,unkstring1:null,unkstuff123:"",unk13data:null,version:7};n==0?r.containerdata={layerwidth:0,layerheight:0,disablehover:null,layerheightextra:null,v6unk1:null,v6unk2:null}:n==3?r.figuredata={color:0,filled:0,trans:0}:n==4?r.textdata={alignhor:0,alignver:0,color:0,fontid:0,multiline:null,shadow:!1,text:"",trans:0,unk1:0,unk2:0}:n==5?r.spritedata={spriteid:-1,aspectheightdata:0,aspectwidthdata:0,borderthickness:0,clickmask:null,color:16777215,tiling:0,hflip:!1,vflip:!1,transparency:0,rotation:0,unk2:0,v6unk:0}:n==6?r.modeldata={modelid:-1,animid:-1,aspectheightdata:0,aspectwidthdata:0,mode:0,positiondata:{rotate_x:0,rotate_y:0,rotate_z:0,translate_x:0,translate_y:0,unkextra:null,zoom:0},unkdata:null}:console.log(`creating unknown cc type, type=${n}, id=${e}`);let i;if(this.comp){let s=new ta(this.comp.ctx,r,e);this.comp.clientChildren.push(s),this.changed(),s.api.changed(),this.comp?.element&&this.comp.initDom(),i=s.api}else i=new yn(null);return i}setSize(e,n,r,i){this.data&&(this.data.basewidth=e,this.data.baseheight=n,this.data.aspectwidthtype=r,this.data.aspectheighttype=i),this.changed()}setPosition(e,n,r,i){this.data&&(this.data.baseposx=e,this.data.baseposy=n,this.data.aspectxtype=r,this.data.aspectytype=i),this.changed()}setHide(e){this.data&&(this.data.hidden=e)}setWidth(e){this.data&&(this.data.basewidth=e)}setHeight(e){this.data&&(this.data.basewidth=e)}setX(e){this.data&&(this.data.baseposx=e)}setY(e){this.data&&(this.data.baseposy=e)}getHide(){return this.data?.hidden??0}getWidth(){return this.data?.basewidth??0}getHeight(){return this.data?.baseheight??0}getX(){return this.data?.baseposx??0}getY(){return this.data?.baseposy??0}setOp(e,n){console.log(`setop ${this.comp?.compid??-1} ${e} ${n}`)}getOp(e){return this.data?.rightclickopts[e]??""}setText(e){this.data?.textdata&&(this.data.textdata.text=e)}getText(){return this.data?.textdata?.text??""}setTextAlign(e,n,r){this.data?.textdata&&(this.data.textdata.alignhor=r,this.data.textdata.alignver=n,this.data.textdata.multiline=e|0)}getTextAlign(){return[this.data?.textdata?.alignhor??0,this.data?.textdata?.alignver??0,this.data?.textdata?.multiline??0]}getGraphic(){return this.data?.spritedata?.spriteid??-1}getHFlip(){return this.data?.spritedata?.hflip??!1}getVFlip(){return this.data?.spritedata?.vflip??!1}getTiling(){return this.data?.spritedata?.tiling??0}getRotation(){return this.data?.spritedata?.rotation??0}setGraphic(e){this.data?.spritedata&&(this.data.spritedata.spriteid=e),this.changed()}setHFlip(e){this.data?.spritedata&&(this.data.spritedata.hflip=e),this.changed()}setVFlip(e){this.data?.spritedata&&(this.data.spritedata.vflip=e),this.changed()}setTiling(e){this.data?.spritedata&&(this.data.spritedata.tiling=e),this.changed()}setRotation(e){this.data?.spritedata&&(this.data.spritedata.rotation=e),this.changed()}setModel(e){this.data?.modeldata&&(this.data.modeldata.modelid=e),this.changed()}getModel(){return this.data?.modeldata?.modelid??-1}getTrans(){return this.data?.figuredata?.trans??0}setTrans(e){this.data?.figuredata&&(this.data.figuredata.trans=e),this.changed()}getFilled(){return this.data?.figuredata?.filled??0}setFilled(e){this.data?.figuredata&&(this.data.figuredata.filled=e),this.changed()}getColor(){return this.data?.figuredata?.color??0}setColor(e){this.data?.figuredata&&(this.data.figuredata.color=e),this.changed()}}async function ra(t,e,n){let r=K.fontmetrics.read(e,t);if(!r.sprite)throw new Error("fontmetrics missing sprite data");let i=await t.getFileById(B.sprites,r.sprite.sourceid),s=wt(i);if(s.length!=1)throw new Error("fontmetrics sprite did not contain exactly 1 image");let u=s[0];if(u.fullwidth!=r.sprite.sheetwidth||u.fullheight!=r.sprite.sheetheight)throw new Error("fontmetrics sprite image dimensions do not match metadata");let c={fontid:n,spriteid:r.sprite.sourceid,characters:[],median:r.sprite.median,baseline:r.sprite.baseline,maxascent:r.sprite.maxascent,maxdescent:r.sprite.maxdescent,scale:r.sprite.scale,sheethash:Er(u.img),sheetwidth:r.sprite.sheetwidth,sheetheight:r.sprite.sheetheight,sheet:""};for(let l=0;l<r.sprite.positions.length;l++){let v=r.sprite.positions[l],p=r.sprite.chars[l];if(p.width===0||p.height===0){c.characters.push(null);continue}let m=mo(u.img,{x:v.x,y:v.y,width:p.width,height:p.height});c.characters.push({chr:String.fromCharCode(l),charcode:l,x:v.x,y:v.y,width:p.width,height:p.height,bearingy:p.bearingy,hash:Er(m)})}return c}async function ar(t,e,n){if(e.major!=n.major)throw new Error("range must span one major");let r=[];if(t.getBuildNr()<=it){let i=0;for(let s=e.minor;s<=n.minor&&!(i++>1e3);s++)try{let u=[];u=await t.getArchiveById(e.major,s);let c={major:e.major,minor:s,crc:0,name:null,subindexcount:u.length,subindices:u.map(l=>l.fileid),subnames:u.map(l=>l.fileid),version:0};for(let l of u)l.fileid>=e.subid&&l.fileid<=n.subid&&r.push({index:c,subindex:l.fileid})}catch{}}else{let i=await t.getCacheIndex(e.major);for(let s of i)if(s&&s.minor>=e.minor&&s.minor<=n.minor)for(let u=0;u<s.subindices.length;u++){let c=s.subindices[u];s.minor==e.minor&&c<e.subid||s.minor==n.minor&&c>n.subid||r.push({index:s,subindex:u})}}return r}const et={prepareDump(){},prepareWrite(){},write(t){throw new Error("write not supported")},combineSubs(t){throw new Error("batch output mode not supported")}};function ci(t){return{major:B.mapsquares,minor:void 0,logicalDimensions:2,usesArchieves:!1,fileToLogical(e,n,r,i){return[255,r]},logicalToFile(e,n){throw new Error("not implemented")},async logicalRangeToFiles(e,n,r){let i=await e.getCacheIndex(B.mapsquares),s=[];for(let u=n[0];u<=Math.min(r[0],100);u++)for(let c=n[1];c<=Math.min(r[1],200);c++){let l=mt(`${t}${u}_${c}`,e.getBuildNr()<=it),v=i.find(p=>p.name==l);v&&s.push({index:v,subindex:0})}return s}}}function cr(t){const e=B.mapsquares,n=128;return{major:e,minor:void 0,logicalDimensions:2,usesArchieves:!0,fileToLogical(r,i,s,u){return[s%n,Math.floor(s/n)]},logicalToFile(r,i){return{major:e,minor:i[0]+i[1]*n,subid:t}},async logicalRangeToFiles(r,i,s){let u=await r.getCacheIndex(e),c=[];for(let l of u){if(!l)continue;let v=l.minor%n,p=Math.floor(l.minor/n);if(v>=i[0]&&v<=s[0]&&p>=i[1]&&p<=s[1])for(let m=0;m<l.subindices.length;m++)l.subindices[m]==t&&c.push({index:l,subindex:m})}return c}}}function Le(t,e){return{major:t,minor:e,logicalDimensions:1,usesArchieves:!0,fileToLogical(n,r,i,s){return[s]},logicalToFile(n,r){return{major:t,minor:e,subid:r[0]}},async logicalRangeToFiles(n,r,i){return ar(n,{major:t,minor:e,subid:r[0]},{major:t,minor:e,subid:i[0]})}}}function lt(t){return{major:t,minor:void 0,logicalDimensions:1,usesArchieves:!0,fileToLogical(e,n,r,i){return[so(n,r,i)]},logicalToFile(e,n){return pr(t,n[0],e.getBuildNr())},async logicalRangeToFiles(e,n,r){let i=pr(t,n[0],e.getBuildNr()),s=pr(t,r[0],e.getBuildNr());return ar(e,i,s)}}}function na(){return{major:void 0,minor:void 0,logicalDimensions:3,usesArchieves:!0,fileToLogical(t,e,n,r){return[e,n,r]},logicalToFile(t,e){return{major:e[0],minor:e[1],subid:e[2]}},async logicalRangeToFiles(t,e,n){if(e[0]!=n[0])throw new Error("can only do one major at a time");let r=e[0];return ar(t,{major:r,minor:e[1],subid:e[2]},{major:r,minor:n[1],subid:n[2]})}}}function Ye(t){return{major:t,minor:void 0,logicalDimensions:1,usesArchieves:!1,fileToLogical(e,n,r,i){if(i!=0)throw new Error("nonzero subfile in noarch index");return[r]},logicalToFile(e,n){return{major:t,minor:n[0],subid:0}},async logicalRangeToFiles(e,n,r){return ar(e,{major:t,minor:n[0],subid:0},{major:t,minor:r[0],subid:0})}}}function Jt(t){return{major:t,minor:void 0,logicalDimensions:2,usesArchieves:!0,fileToLogical(e,n,r,i){return[r,i]},logicalToFile(e,n){return{major:t,minor:n[0],subid:n[1]}},async logicalRangeToFiles(e,n,r){return ar(e,{major:t,minor:n[0],subid:n[1]},{major:t,minor:r[0],subid:r[1]})}}}function fi(t,e){return{...t,async logicalRangeToFiles(n,r,i){return(await t.logicalRangeToFiles(n,r,i)).filter(u=>!e.some(c=>c.major==u.index.major&&c.minor==u.index.minor))}}}function wl(){return{major:B.index,minor:void 0,logicalDimensions:1,usesArchieves:!1,fileToLogical(t,e,n,r){return[n]},logicalToFile(t,e){return{major:B.index,minor:e[0],subid:0}},async logicalRangeToFiles(t,e,n){return(await t.getCacheIndex(B.index)).filter(i=>i&&i.minor>=e[0]&&i.minor<=n[0]).map(i=>({index:i,subindex:0}))}}}function El(){return{major:B.index,minor:255,logicalDimensions:0,usesArchieves:!1,fileToLogical(t,e,n,r){return[]},logicalToFile(t,e){return{major:B.index,minor:255,subid:0}},async logicalRangeToFiles(t,e,n){return[{index:{major:255,minor:255,crc:0,size:0,version:0,name:null,subindexcount:1,subindices:[0],subnames:null},subindex:0}]}}}function _l(t,e,n,r){let i=s=>{let u="",c="";return{...e,ext:"json",parser:t,async prepareDump(l,v){await r?.(v),await n?.(v);let p=Object.entries(Xl).find(h=>h[1]==i);if(!p)throw new Error;let m=t.parser.getJsonSchema();if(s.batched=="true"){let h={type:"object",properties:{files:{type:"array",items:m}}},g=`.schema-${p[0]}_batch.json`;l.writeFile(g,mr(h)),c=g}else{let h=`.schema-${p[0]}.json`;l.writeFile(h,mr(m)),u=h}},prepareWrite(l){return r?.(l)},read(l,v,p){let m=t.read(l,p,{keepbuffers:s.keepbuffers});return s.batched?m.$fileid=v.length==1?v[0]:v:m.$schema=u,mr(m)},write(l,v,p){return t.write(JSON.parse(l.toString("utf8")),p.getDecodeArgs())},combineSubs(l){return`{"$schema":"${c}","files":[

${l.join(`
,

`)}]}`},description:"View the JSON representation of a file",flagtemplate:{keepbuffers:{text:"Keep binary buffers (can be very large)",type:"boolean"}}}};return i}const Sl=()=>({...na(),ext:"bin",prepareDump(){},prepareWrite(){},read(t){return t},write(t){return t},combineSubs(t){return Buffer.concat(t)},description:"Outputs the raw files as they are in the cache"}),Dl=()=>({ext:"ogg",major:B.music,minor:void 0,logicalDimensions:1,usesArchieves:!1,fileToLogical(t,e,n,r){return[n]},logicalToFile(t,e){return{major:B.music,minor:e[0],subid:0}},async logicalRangeToFiles(t,e,n){let r=await t.getFileById(B.enums,1351),i=K.enums.read(r,t),s=await t.getCacheIndex(B.music);return i.intArrayValue2.values.filter(u=>u[1]>=e[0]&&u[1]<=n[0]).sort((u,c)=>u[1]-c[1]).filter((u,c,l)=>c==0||l[c-1][1]!=u[1]).map(u=>({index:s[u[1]],subindex:0}))},...et,read(t,e,n){return cn(n,B.music,e[0],t,!0)},description:"Stitches child music fragments onto header fragments, only a small number of music fragments are header fragments, ids that lead to child fragments are ignored."}),hi=(t,e)=>()=>({ext:"ogg",...Ye(t),...et,read(n,r,i){return cn(i,t,r[0],n,e)},description:"Extracts sound files from cache"}),Al=()=>({ext:"html",...Ye(B.cutscenes),...et,async read(t,e,n){return(await Lo(n,t)).doc},description:"Decodes and assembles 2d vector cutscenes (first added in 2023). These cutscenes are saved in cache without image compression so take a while to decode. Sounds effects might be missing if you use a local game cache since the game normally only downloads them on demand."}),Cl=()=>({ext:"html",major:B.interfaces,minor:void 0,logicalDimensions:1,usesArchieves:!0,fileToLogical(t,e,n,r){if(r!=0)throw new Error("subfile 0 expected");return[n]},logicalToFile(t,e){return{major:B.interfaces,minor:e[0],subid:0}},async logicalRangeToFiles(t,e,n){return(await t.getCacheIndex(B.interfaces)).filter(i=>i&&i.minor>=e[0]&&i.minor<=n[0]).map(i=>({index:i,subindex:0}))},...et,async read(t,e,n){return await xl(new dl(n),e[0])},description:"Extracts an interface and converts the template to a html file. Model and scripts will be missing and therefore the result might be incomplete."}),Tl=()=>({ext:"ui.json",major:B.interfaces,minor:void 0,logicalDimensions:1,usesArchieves:!0,fileToLogical(t,e,n,r){if(r!=0)throw new Error("subfile 0 expected");return[n]},logicalToFile(t,e){return{major:B.interfaces,minor:e[0],subid:0}},async logicalRangeToFiles(t,e,n){return(await t.getCacheIndex(B.interfaces)).filter(i=>i&&i.minor>=e[0]&&i.minor<=n[0]).map(i=>({index:i,subindex:0}))},...et,async read(t,e,n){return JSON.stringify({id:e[0]})},description:"Doesn't extract anything but invokes the built-in RSMV interface viewer."}),Fl=()=>({ext:"font.json",major:B.fontmetrics,minor:void 0,logicalDimensions:1,usesArchieves:!1,fileToLogical(t,e,n,r){if(r!=0)throw new Error("subfile 0 expected");return[n]},logicalToFile(t,e){return{major:B.fontmetrics,minor:e[0],subid:0}},async logicalRangeToFiles(t,e,n){return(await t.getCacheIndex(B.fontmetrics)).filter(i=>i&&i.minor>=e[0]&&i.minor<=n[0]).map(i=>({index:i,subindex:0}))},...et,async read(t,e,n){return JSON.stringify(await ra(n,t,e[0]))},description:"Opens the built-in font viewer. Does not support newer vector fonts"}),kl=t=>({ext:"ts",...Ye(B.clientscript),...et,async prepareDump(e,n){let r=await Fr(n);e.writeFile("tsconfig.json",JSON.stringify({compilerOptions:{lib:[],target:"ESNext"}},void 0,"	")),e.writeFile("opcodes.d.ts",Ca(r)),e.writeFile("clientvars.d.ts",Ta(r))},read(e,n,r){return Aa(r,e,n[0],t.cs2relativecomps=="true",t.cs2notypes=="true",t.cs2intcasts=="true")},async write(e,n,r){let i=await Da(r,e.toString("utf8"));return K.clientscript.write(i,r.getDecodeArgs())},description:"Extracts clientscript VM code (cs2) and converts it to something that is typescript-compatible.",flagtemplate:{cs2relativecomps:{text:"Hide subcomponent ids (can't be compiled, but offers stable diffing)",type:"boolean"},cs2notypes:{text:"Don't output TS types (can't be compiled)",type:"boolean"},cs2intcasts:{text:"Explicit JS int32 casts during math (can't be compiled)",type:"boolean"}}}),Il=()=>({ext:"cs2.json",...Ye(B.clientscript),...et,async prepareDump(t,e){await Fr(e)},read(t,e,n){return JSON.stringify(K.clientscript.read(t,n))},description:"Basic implementation of the clientscript VM (cs2). Can be used to debug programs and step through code."}),Bl=()=>({ext:"png",...Le(B.texturesOldPng,0),...et,async read(t,e,n){let r=K.oldproctexture.read(t,n),i=await n.getFileById(B.sprites,r.spriteid),s=wt(i);if(s.length!=1)throw new Error("exactly one subsprite expected");return Ir(s[0].img,"png",1)},description:"Procedural textures are highly compressed textures used in early rshd."}),di=t=>()=>({ext:"png",...Le(nt.data,t),...et,async read(e,n,r){let i=await r.findSubfileByName(nt.data,t,"INDEX.DAT"),s=un(i.buffer,e);return Ir(s.img,"png",1)},description:"Textures from the 'legacy' era, very early rs2"}),Nl=t=>()=>({ext:"png",...Ye(t),...et,read(e,n){return Ir(wt(e)[0].img,"png",1)},description:"Sprites are all images that are used in ui. The client stores sprites are uncompressed bitmaps. Currently only the first frame for multi-frame sprites is extracted."}),ft=t=>()=>({ext:"png",...Ye(t),prepareDump(){},prepareWrite(){},read(e,n){return new ji(e,!1,!0).toImageData().then(i=>Ir(i,"png",1))},write(e){throw new Error("write not supported")},combineSubs(e){if(e.length!=1)throw new Error("texture batching not supported");return e[0]},description:"Textures are images that are wrapped around models to display colors are fine details."}),Ml=()=>({ext:"json",...Ye(B.sprites),...et,async read(t,e){let n=wt(t),r="";for(let[i,s]of n.entries()){let u=Er(s.img);r+=(r==""?"":",")+`{"id":${e[0]},"sub":${i},"hash":${u}}`}return r},combineSubs(t){return"["+t.join(`,
`)+"]"},description:"Used to efficiently compare images."}),Ll=()=>({ext:"json",...Ye(B.fontmetrics),...et,async read(t,e,n){return JSON.stringify(await ra(n,t,e[0]))},combineSubs(t){return"["+t.join(`,
`)+"]"},description:"Used to efficiently compare fonts."}),Rl=()=>({ext:"json",...Ye(B.models),...et,read(t,e,n){return"{}"},combineSubs(t){return"["+t.filter(e=>e).join(`,
`)+"]"},description:"Used to efficiently compare models."}),ia=Xt()({framemaps:{parser:K.framemaps,lookup:lt(B.framemaps)},items:{parser:K.item,lookup:lt(B.items)},enums:{parser:K.enums,lookup:lt(B.enums)},npcs:{parser:K.npc,lookup:lt(B.npcs)},soundjson:{parser:K.audio,lookup:fi(Jt(B.sounds),[{major:B.sounds,minor:0}])},musicjson:{parser:K.audio,lookup:fi(Jt(B.music),[{major:B.music,minor:0}])},objects:{parser:K.object,lookup:lt(B.objects)},achievements:{parser:K.achievement,lookup:lt(B.achievements)},structs:{parser:K.structs,lookup:lt(B.structs)},sequences:{parser:K.sequences,lookup:lt(B.sequences)},spotanims:{parser:K.spotAnims,lookup:lt(B.spotanims)},materials:{parser:K.materials,lookup:lt(B.materials)},oldmaterials:{parser:K.oldmaterials,lookup:Le(B.materials,0)},quickchatcats:{parser:K.quickchatCategories,lookup:Le(B.quickchat,0)},quickchatlines:{parser:K.quickchatLines,lookup:Le(B.quickchat,1)},dbtables:{parser:K.dbtables,lookup:Le(B.config,Re.dbtables)},dbrows:{parser:K.dbrows,lookup:Le(B.config,Re.dbrows)},overlays:{parser:K.mapsquareOverlays,lookup:Le(B.config,Re.mapoverlays)},identitykit:{parser:K.identitykit,lookup:Le(B.config,Re.identityKit)},params:{parser:K.params,lookup:Le(B.config,Re.params)},underlays:{parser:K.mapsquareUnderlays,lookup:Le(B.config,Re.mapunderlays)},mapscenes:{parser:K.mapscenes,lookup:Le(B.config,Re.mapscenes)},environments:{parser:K.environments,lookup:Le(B.config,Re.environments)},animgroupconfigs:{parser:K.animgroupConfigs,lookup:Le(B.config,Re.animgroups)},maplabels:{parser:K.maplabels,lookup:Le(B.config,Re.maplabels)},mapzones:{parser:K.mapZones,lookup:Le(B.worldmap,0)},cutscenes:{parser:K.cutscenes,lookup:Ye(B.cutscenes)},particles0:{parser:K.particles_0,lookup:Le(B.particles,0)},particles1:{parser:K.particles_1,lookup:Le(B.particles,1)},maptiles:{parser:K.mapsquareTiles,lookup:cr(Ct.squares)},maptiles_nxt:{parser:K.mapsquareTilesNxt,lookup:cr(Ct.square_nxt)},maplocations:{parser:K.mapsquareLocations,lookup:cr(Ct.locations)},mapenvs:{parser:K.mapsquareEnvironment,lookup:cr(Ct.env)},maptiles_old:{parser:K.mapsquareTiles,lookup:ci("m")},maplocations_old:{parser:K.mapsquareLocations,lookup:ci("l")},frames:{parser:K.frames,lookup:Jt(B.frames)},models:{parser:K.models,lookup:Ye(B.models)},oldmodels:{parser:K.oldmodels,lookup:Ye(B.oldmodels)},skeletons:{parser:K.skeletalAnim,lookup:Ye(B.skeletalAnims)},proctextures:{parser:K.proctexture,lookup:Ye(B.texturesOldPng)},oldproctextures:{parser:K.oldproctexture,lookup:Le(B.texturesOldPng,0)},interfaces:{parser:K.interfaces,lookup:Jt(B.interfaces)},fontmetrics:{parser:K.fontmetrics,lookup:Jt(B.fontmetrics)},classicmodels:{parser:K.classicmodels,lookup:Le(0,dt.models)},indices:{parser:K.cacheIndex,lookup:wl()},rootindex:{parser:K.rootCacheIndex,lookup:El()},test:{parser:he.fromJson(`["struct",
  
]`),lookup:na()},clientscriptops:{parser:K.clientscript,lookup:Ye(B.clientscript),prepareParser:t=>Fr(t).then(()=>{})}}),Pl=function(){return{...lt(B.npcs),ext:"json",prepareDump(t){},prepareWrite(){},read(t,e,n){let r=K.npc.read(t,n);return mr({id:e[0],size:r.boundSize??1,name:r.name??"",models:r.models??[]})},write(t){throw new Error("")},combineSubs(t){return`[${t.join(`,
`)}]`},description:"Extract model metadata from npc configs."}},Ul=Xt()({sprites:Nl(B.sprites),textures_dds:ft(B.texturesDds),textures_png:ft(B.texturesPng),textures_bmp:ft(B.texturesBmp),textures_ktx:ft(B.texturesKtx)}),Ol=Xt()({legacy_sprites:di(bt.sprites),legacy_textures:di(bt.textures),textures_proc:Bl,textures_oldpng:ft(B.texturesOldPng),textures_2015png:ft(B.textures2015Png),textures_2015dds:ft(B.textures2015Dds),textures_2015pngmips:ft(B.textures2015PngMips),textures_2015compoundpng:ft(B.textures2015CompoundPng),textures_2015compounddds:ft(B.textures2015CompoundDds),textures_2015compoundpngmips:ft(B.textures2015CompoundPngMips)}),Gl=Xt()({sounds:hi(B.sounds,!0),musicfragments:hi(B.music,!1),music:Dl}),zl=Xt()({cutscenehtml:Al,interfacehtml:Cl,interfaceviewer:Tl,fontviewer:Fl,clientscript:kl,clientscriptviewer:Il}),Vl=Xt()({bin:Sl,spritehash:Ml,fonthash:Ll,modelhash:Rl,npcmodels:Pl}),jl=Object.fromEntries(Object.entries(ia).map(([t,e])=>[t,_l(e.parser,e.lookup,e.prepareDump,e.prepareParser)])),ql={image:Ul,legacyImage:Ol,interactive:zl,sound:Gl,other:Vl,json:jl},Xl=Object.fromEntries(Object.values(ql).flatMap(t=>Object.entries(t))),De=48,ve=De*De,Rt=1e6,vr=2e6;function Wt(t){const e=De-1;let n=e-(t/De|0),r=e-t%De;return{rs2index:n*De+r,x:n,z:r}}function pi(t,e){return(De-1-t)*De+(De-1-e)}async function aa(t,e,n){let r=n>=100,i=0;const s=t.classicData;let u=100-e,c=100-(r?n-100:n),l=`${u.toString().padStart(2,"0")}${c.toString().padStart(2,"0")}`,v=[],p=r?1:3;for(let g=0;g<p;g++){let d=r?3:g,a=t.getBuildNr()<=115?void 0:await t.findSubfileByName(0,dt.land,`m${d}${l}.hei`),o=await t.findSubfileByName(0,dt.maps,`m${d}${l}.jm`);if(!a&&!o&&g==0)return null;v.push({sourcelevel:d,hei:a?.buffer,jm:o?.buffer,loc:void 0,dat:void 0})}let m=new Hl(s,p);for(let g=0;g<p;g++){let d=v[g];if(!d.jm){let a=await t.findSubfileByName(0,dt.maps,`M${d.sourcelevel}${l}.DAT`),o=await t.findSubfileByName(0,dt.maps,`M${d.sourcelevel}${l}.LOC`);d.dat=a?.buffer,d.loc=o?.buffer}}for(let g=0;g<p;g++){let d=v[g];d.jm?(m.loadJmFile(d.jm,g),i=He(d.jm,i)):d.hei&&(m.loadHeiFile(d.hei,g),i=He(d.hei,i))}for(let g=0;g<p;g++){let d=v[g];if(!d.jm)if(d.dat&&(m.loadDatfile(d.dat,g),i=He(d.dat,i)),d.loc)m.loadLocFile(d.loc,g),i=He(d.loc,i);else{let a=Wl(s,u,c,d.sourcelevel);i=He(Buffer.from(a.buffer),i),m.addLocBuffer(a,g)}}return{rect:{x:e*De,z:n*De,xsize:De,zsize:De},mapfilehash:i,tiles:m.convertTiles(),locs:m.locs,levels:p}}class Hl{levels;tiles;locs=[];config;constructor(e,n){this.config=e,this.levels=n,this.tiles=new Array(ve*n).fill(null).map((r,i)=>({height:i>ve?96:0,hasbridge:!1,overlayobj:null,overlay:0,underlay:0,locrotation:0}))}getTile(e,n,r){if(!(n<0||r<0||n>=De||r>=De)&&!(e<0||e>=this.levels))return this.tiles[e*ve+n*De+r]}getTileClassic(e,n){const r=De-1;let i=r-(n/De|0),s=r-n%De;return this.getTile(e,i,s)}placeLoc(e,n,r,i,s,u,c=null){(this.getTile(i+1,s,u)?.overlayobj?.type.bridge||n==0&&(r==2?this.getTile(i+1,s+1,u):this.getTile(i+1,s,u+1))?.overlayobj?.type.bridge)&&i++,this.locs.push({id:e,uses:[{x:s,y:u,plane:i,rotation:r,type:n,extra:c}]})}convertTiles(){return this.tiles.map((e,n)=>{let r=Math.floor(n/ve),i=this.tiles[n-ve];return{height:e.hasbridge?r==1&&i.hasbridge?i.height/4:0:e.height/4,flags:0,settings:r==1&&e.hasbridge?2:0,overlay:e.overlay,underlay:e.underlay,shape:e.overlay?0:null}})}loadJmFile(e,n){let r=new Qe(e),i=0,s=Buffer.alloc(ve);for(let o=0;o<ve;o++)i+=r.readUByte(),s[o]=i&255;let u=0,c=Buffer.alloc(ve);for(let o=0;o<ve;o++)u+=r.readUByte(),c[o]=u&255;let l=r.readBuffer(ve),v=r.readBuffer(ve),p=Buffer.alloc(ve),m=Buffer.alloc(ve),h=new Uint32Array(ve);for(let o=0;o<ve;o++){let f=r.readUShort(!0);if(f!=0){let x=f/12e3|0,y=f%12e3,E=Wt(o);x==0?p[o]=y:x==1?m[o]=y:x==2||x==3||(x==4?h[o]=y:console.log(E.x,E.z,o," type"+(f/12e3|0),f%12e3))}}let g=r.readBuffer(ve),d=r.readBuffer(ve),a=r.readBuffer(ve);if(!r.eof())throw new Error("didn't end reading map.jm at end of file");n==0&&this.addFloorBuffers(s,c,n,!1),this.addWallBuffers(l,v,p,m,g,d,a,n),this.addLocBuffer(h,n)}loadHeiFile(e,n){let r=new Qe(e),i=0,s=Buffer.alloc(ve),u=Buffer.alloc(ve);for(let c=0;c<ve;){let l=r.readUByte();if(l<128&&(s[c++]=l&255,i=l),l>=128)for(let v=0;v<l-128;v++)s[c++]=i&255}for(let c=0;c<ve;){let l=r.readUByte();if(l<128&&(u[c++]=l&255,i=l),l>=128)for(let v=0;v<l-128;v++)u[c++]=i&255}if(!r.eof())throw new Error("unexpected height file length");this.addFloorBuffers(s,u,n,!0)}addDatfile(e,n){}loadDatfile(e,n){let r=new Qe(e),i=r.readBuffer(ve),s=r.readBuffer(ve),u=r.readBuffer(ve),c=r.readBuffer(ve),l=Buffer.alloc(ve);for(let h=0;h<ve;){let g=r.readUByte();g<128?(l[h]=g,h++):h+=g-128}let v=Buffer.alloc(ve),p=0;for(let h=0;h<ve;){let g=r.readUByte(),d=1;g<128?p=g:d=g-128;for(let a=0;a<d;a++)v[h]=p,h++}let m=Buffer.alloc(ve);for(let h=0;h<ve;){let g=r.readUByte();g<128?(m[h]=g,h++):h+=g-128}if(!r.eof())throw new Error("didn't end reading map.dat at end of file");this.addWallBuffers(i,s,u,c,l,v,m,n)}addFloorBuffers(e,n,r,i){let s=64,u=35;for(let c=0;c<De;c++)for(let l=0;l<De;l++){let v=l*De+c,p=e[v],m=n[v];i&&(s=p+(s&127),p=s*2&255,u=n[v]+u&127,m=u*2&255);let h=this.getTileClassic(r,v);h&&(h.height=p,h.underlay=m+1)}}addWallBuffers(e,n,r,i,s,u,c,l){let v=(d,a,o)=>{let f=this.getTile(d,a,o),x=this.getTile(d,a-1,o),y=this.getTile(d,a,o-1),E=this.getTile(d,a-1,o-1);f&&(f.hasbridge=!0),x&&(x.hasbridge=!0),y&&(y.hasbridge=!0),E&&(E.hasbridge=!0)},p=(d,a,o,f,x)=>{let y=this.getTile(d,a,o);if(y&&y.overlay!=x&&y.overlay!=f){let E=this.getTile(d+1,a,o);E&&(E.overlay=f,E.overlayobj=this.config.tiles[f-1]),v(d+1,a,o)}};for(let d=0;d<ve;d++){let a=u[d],o=this.getTileClassic(l,d);if(o&&a!=0){let f=this.config.tiles[a-1];o.overlay=a,o.overlayobj=f}}for(let d=0;d<ve;d++){let a=this.getTileClassic(0,d);if(a?.overlayobj?.type.bridge){let o=a.overlay==12?11:2,f=Wt(d),x=this.getTile(l+1,f.x,f.z);a.hasbridge=!0,v(l,f.x,f.z),v(l+1,f.x,f.z),p(l,f.x+1,f.z,a.overlay,o),p(l,f.x-1,f.z,a.overlay,o),p(l,f.x,f.z+1,a.overlay,o),p(l,f.x,f.z-1,a.overlay,o),x&&(x.height=a.height,x.overlay=a.overlay,x.overlayobj=a.overlayobj);let y=this.config.tiles[o-1];a.overlay=o,a.overlayobj=y}}let m=d=>({flags:0,rotation:null,scale:null,scaleX:null,scaleY:this.config.wallobjects[d-1].height,scaleZ:null,translateX:null,translateY:null,translateZ:null});for(let d=0;d<ve;d++){let a=e[d],o=n[d],f=r[d],x=i[d],y=Wt(d);a&&this.placeLoc(Rt+(a-1),0,2,l,y.x,y.z,m(a)),o&&this.placeLoc(Rt+(o-1),0,1,l,y.x,y.z,m(o)),f&&this.placeLoc(Rt+(f-1),9,0,l,y.x,y.z,m(f)),x&&this.placeLoc(Rt+(x-1),9,1,l,y.x,y.z,m(x))}let h=(d,a)=>{if(d<0||d>=De||a<0||a>=De)return"none";let o=pi(d,a);return s[o]==0?"none":r[o]!=0||i[o]!=0?"diagedge":"full"},g=(d,a)=>{let o=[h(d+1,a),h(d+1,a-1),h(d,a-1),h(d-1,a-1),h(d-1,a),h(d-1,a+1),h(d,a+1),h(d+1,a+1)],f=h(d,a);if(o.every((x,y)=>y%2==0?x=="full":x!="none"))return{type:17,rot:0};for(let x=0;x<4;x++){let y=o[(x*2+0)%8],E=o[(x*2+2)%8],_=o[(x*2+4)%8],S=o[(x*2+6)%8],T=o[(x*2+1)%8],A=o[(x*2+3)%8],I=o[(x*2+5)%8];if(y=="none"&&E=="none"&&S!="none"&&_!="none"&&I!="none")return{type:f=="diagedge"?13:16,rot:x};if(y=="none"&&E!="none"&&S!="none"&&_!="none")return A=="none"?{type:16,rot:x}:I=="none"?{type:16,rot:(x+3)%4}:{type:12,rot:x};if(y!="none"&&E!="none"&&S=="full"&&_=="full"&&T=="none")return{type:14,rot:x};if(y!="none"&&E!="none"&&S!="none"&&_!="none"&&T=="none"&&I=="none")return{type:15,rot:x}}return{type:10,rot:0}};for(let d=0;d<s.length;d++){let a=s[d];if(a!=0){let o=Wt(d),f=g(o.x,o.z);this.placeLoc(vr+a-1,f.type,f.rot,l,o.x,o.z)}}for(let d=0;d<ve;d++){let a=this.getTileClassic(l,d);a&&(a.locrotation=c[d])}}loadLocFile(e,n){let r=new Qe(e),i=new Uint32Array(ve);for(let s=0;s<ve;){let u=r.readUByte();u<128?i[s++]=u:s+=u-128}if(!r.eof())throw new Error("didn't end reading map.loc at end of file");this.addLocBuffer(i,n)}addLocBuffer(e,n){for(let r=0;r<ve;r++){let i=e[r];if(i){let s=Wt(r),u=this.config.objects[i-1];if(!u){console.warn(`loc for ${i-1} is missing`);continue}let c=!1;for(let l=0;l<u.xsize;l++)for(let v=0;v<u.zsize;v++){if(l==0&&v==0||s.x+l>=De||s.z+v>=De)continue;let p=pi(s.x+l,s.z+v);e[p]==i&&(c=!0)}if(!c){let l=this.getTileClassic(n,r);if(l){let v=(4+l.locrotation)%8,p=v%2==0?10:11,m=s.x,h=s.z;v%4!=0?(m-=u.zsize-1,h-=u.xsize-1):(m-=u.xsize-1,h-=u.zsize-1),this.placeLoc(i-1,p,Math.floor(v/2),n,m,h)}}}}}}function sa(t){for(let n=0;n<t.levels;n++)for(let r=t.zsize-1;r>=1;r--)for(let i=t.xsize-1;i>=1;i--){let s=t.getTile(t.xoffset+i,t.zoffset+r,n),u=t.getTile(t.xoffset+i-1,t.zoffset+r-1,n);!s||!u||(s.y=u.y,s.underlayprops=u.underlayprops,s.effectiveLevel=n,s.effectiveVisualLevel=n)}let e=n=>n?.debug_raw?.overlay?t.engine.classicData.tiles[n.debug_raw?.overlay-1]:void 0;for(let n=0;n<t.levels;n++)for(let r=t.zsize-1;r>=1;r--)for(let i=t.xsize-1;i>=1;i--){let s=t.getTile(t.xoffset+i,t.zoffset+r,n),u=e(s);if(s&&(u?.type.autoconnect||u?.type.indoors)){u.blocked&&(s.rawCollision&&(s.rawCollision.walk[0]=!0),s.effectiveCollision&&(s.effectiveCollision.walk[0]=!0));let c=e(t.getTile(t.xoffset+i,t.zoffset+r+1,n)),l=e(t.getTile(t.xoffset+i-1,t.zoffset+r,n)),v=e(t.getTile(t.xoffset+i+1,t.zoffset+r,n)),p=e(t.getTile(t.xoffset+i,t.zoffset+r-1,n)),m=u.type.indoors?c?.type.indoors:c?.type.autoconnect,h=u.type.indoors?l?.type.indoors:l?.type.autoconnect,g=u.type.indoors?v?.type.indoors:v?.type.autoconnect,d=u.type.indoors?p?.type.indoors:p?.type.autoconnect;m&&h&&!d&&!g&&(s.shape=ht[5]),m&&!h&&!d&&g&&(s.shape=ht[6]),!m&&!h&&d&&g&&(s.shape=ht[7]),!m&&h&&d&&!g&&(s.shape=ht[4])}}}function bn(t){let e=0,n=!1,r=[255,255,255];if(t>99999999&&(t=99999999-t),t==12345678)n=!0;else if(t<0){let i=-t-1,s=i>>10&31,u=i>>5&31,c=i>>0&31;r=[s,u,c]}else e=t+1;return{color:r,colorint:no(...ro(...r)),material:e,invisible:n}}function oa(t,e){const n=t.classicData;let r={};if(e>=vr){let i=n.roofs[e-vr];r={name:`roof_${e-vr}`,models:[{type:10,values:[Oe.classicRoof10]},{type:12,values:[Oe.classicRoof12]},{type:13,values:[Oe.classicRoof13]},{type:14,values:[Oe.classicRoof14]},{type:15,values:[Oe.classicRoof15]},{type:16,values:[Oe.classicRoof16]},{type:17,values:[Oe.classicRoof17]}],...Zr(i.texture)}}else if(e>=Rt){let i=n.wallobjects[e-Rt];r={name:i.name,probably_morphFloor:!0,models:[{type:0,values:[Oe.classicWall]},{type:9,values:[Oe.classicWallDiag]}],...Zr(i.frontdecor,i.backdecor)}}else{let i=n.objects[e];i.model.id==null&&console.warn(`model for ${i.name} is missing`),r={name:i.name,width:i.xsize,length:i.zsize,models:[{type:10,values:i.model.id==null?[]:[i.model.id]}]}}return r}function Zr(...t){let e={color_replacements:[],material_replacements:[]};for(let[n,r]of t.entries()){let i=bn(r);e.color_replacements.push([n,i.colorint]),e.material_replacements.push([n,i.material]),i.invisible&&(e.models=null)}return e}async function $l(t){let e=t.classicData,r=!await t.findSubfileByName(0,dt.textures,"INDEX.DAT");return Promise.all(e.tiles.map(async i=>{let s=bn(i.decor),u=s.color;if(s.material){let c=e.textures[s.material-1],l=await Xi(t,c.name,c.subname,r),v=0,p=0,m=0;for(let g=0;g<l.img.data.length;g+=4)v+=l.img.data[g+0],p+=l.img.data[g+1],m+=l.img.data[g+2];let h=l.img.width*l.img.height;u=[v/h|0,p/h|0,m/h|0]}return{color:i.type.type==5?[255,0,255]:u,material:s.material}}))}function Jl(){let t=[];for(let e=0;e<64;e+=1){const n=255-e*4,r=255-(e*1.75|0),i=255-e*4;t.push({color:[n,r,i]})}for(let e=0;e<64;e+=1){const n=e*3;t.push({color:[n,144,0]})}for(let e=0;e<64;e+=1){const n=192-(e*1.5|0),r=144-(e*1.5|0);t.push({color:[n,r,0]})}for(let e=0;e<64;e++){const n=96-(e*1.5|0),r=48+(e*1.5|0);t.push({color:[n,r,0]})}return t.forEach(e=>{e.color[0]/=2,e.color[1]/=2,e.color[2]/=2}),t}function Wl(t,e,n,r){let i=e*De,s=n*De,u=i+De,c=s+De,l=new Uint32Array(ve),v=t.jsonlocs.filter(p=>p.level==r&&p.x>=i&&p.x<u&&p.z>=s&&p.z<c);for(let p of v){let m=p.x-i,h=p.z-s;l[m*De+h]=p.id+1}return l}const Kl=Object.freeze(Object.defineProperty({__proto__:null,classicDecodeMaterialInt:bn,classicIntsToModelMods:Zr,classicModifyTileGrid:sa,classicOverlays:$l,classicUnderlays:Jl,getClassicLoc:oa,getClassicMapData:aa},Symbol.toStringTag,{value:"Module"}));let Ot={uModelMatrix:"#define uModelMatrix modelMatrix",uViewProjMatrix:"#define uViewProjMatrix (projectionMatrix*viewMatrix)",uViewMatrix:"#define uViewMatrix viewMatrix",uProjectionMatrix:"#define uProjectionMatrix projectionMatrix",uCameraPosition:"#define uCameraPosition cameraPosition",aWaterPosition_Depth:"#define aWaterPosition_Depth vec4(position,10.0)",aVertexPosition:"#define aVertexPosition position",aVertexPosition_BoneLabel:"#define aVertexPosition_BoneLabel vec4(position,0.0)",aTextureUV:"#define aTextureUV uv",aVertexColour:"#define aVertexColour vec4(color.rgb,1.0)",aTextureWeight:["attribute vec3 color_1;","#define aTextureWeight vec4(color_1,1.0)"],aMaterialProperties:["attribute vec3 color_2;","#define aMaterialProperties vec4(256.0-color_2*256.0,0.0)"],aVertexNormal_FogProportion:"#define aVertexNormal_FogProportion vec4(normal,0.0)",gl_FragColor:""},_r={UNIFORM_BUFFER_BEGIN:"#define UNIFORM_BUFFER_BEGIN(name)",UNIFORM_BUFFER_END:"#define UNIFORM_BUFFER_END",TEXTURE_GRAD:"",gl_FragColor:""},mi={UNIFORM_BUFFER_BEGIN:"#define UNIFORM_BUFFER_BEGIN(name)",UNIFORM_BUFFER_END:"#define UNIFORM_BUFFER_END",TEXTURE_GRAD:"",gl_FragColor:""};function Yl(t,e,n){let r=new Tr;r.uniforms={uAlphaTestThreshold:{value:[-1]},uAmbientColour:{value:[.6059895753860474,.5648590922355652,.5127604007720947]},uAtlasMeta:{value:[512,16,.0001220703125,4]},uCameraPosition:{value:[1638400,17248,1671168]},uDummy:{value:[1]},uFade:{value:[0]},uFullScreenLookupScale:{value:[0,5960465188081798e-23,1,0]},uInscatteringAmount:{value:[1,0,0]},uInvSunDirection:{value:[-.5391638875007629,.6469966173171997,-.5391638875007629]},uModelMatrix:{value:[1,0,0,0,0,1,0,0,0,0,1,0,1630208,0,1654784,1]},uOutscatteringAmount:{value:[1638400,17248,1671168]},uProjectionMatrix:{value:[152587890625e-16,0,0,0,0,-152587890625e-16,0,0,0,0,-6200397183420137e-20,0,0,0,-1.0317461490631104,1]},uScatteringParameters:{value:[0,-1,5960465188081798e-23,0]},uScatteringTintColour:{value:[0,5960465188081798e-23,1]},uSunColour:{value:[.8666666746139526,.8078431487083435,.7333333492279053]},uTextureAnimationTime:{value:[459.7019958496094]},uTextureAtlas:{value:[5]},uTextureAtlasSettings:{value:[6]},uTint:{value:[0,0,0,0]},uVertexScale:{value:[1]},uViewMatrix:{value:[1,0,0,0,0,5960465188081798e-23,1,0,0,-1,5960465188081798e-23,0,-1638400,1671168,-17248.099609375,1]},uViewProjMatrix:{value:[152587890625e-16,0,0,0,0,-9094948101931455e-28,-6200397183420137e-20,0,0,152587890625e-16,-3695725149521767e-27,0,-25,-25.5,.03770458698272705,1]},uViewportLookupScale:{value:[1638400,17248,1671168,0]},uViewportOffsetScale:{value:[1,0,0,0]},uZBufferParams:{value:[16777248,32256,-32768,-512.0009765625]}},r.vertexColors=!0;let i=require("./minimap-loc-vert.glsl.c");i=Vt(i),i=Gt(i,Ot),i=zt(i,mi);let s=require("./minimap-loc-frag.glsl.c");return s=Vt(s),s=Gt(s,Ot),s=zt(s,mi),s=s.replace(/#undef gl_FragColor/,"// $&"),s=s.replace(/void getTextureSettings\(/,`void getTextureSettings(vec2 s, out TextureSettings settings){
settings.textureMeta1 = vec3(0.0,0.0,8196.0);
settings.textureMeta2 = vec3(0.0,0.0,8196.0);
settings.uvAnim = vec2(0.0,0.0);
settings.wrapping = 0.0;
settings.specular = 0.0;
settings.normalScale = 0.0;
}
void getTextureSettingsOld(`),s=s.replace(/(?<!void )getTexel\(\w+,/gm,()=>"getTexel(vTextureUV,"),s=eu(s,`
        void main(){
            super();
            //pre-multiply alpha
            // gl_FragColor.rgb *= gl_FragColor.a;
            // gl_FragColor.rgb = vec3( gl_FragColor.a);
            gl_FragColor.a=1.0;
            
        }
    `),r.vertexShader=i,r.fragmentShader=s,r.uniforms.uTextureAtlas={value:t},r.uniforms.uInvSunDirection.value[2]*=-1,r.uniforms.uAlphaTestThreshold={value:[n]},r.uniformsNeedUpdate=!0,e=="blend"&&(r.transparent=!0),t&&(t.colorSpace=br),r}function Zl(t){let e=new Tr;e.uniforms={uAmbientColour:{value:[.6059895753860474,.5648590922355652,.5127604007720947]},uAtlasMeta:{value:[512,16,.0001220703125,4]},uCameraPosition:{value:[1638400,17632,1769472]},uDummy:{value:[1]},uFade:{value:[0]},uFullScreenLookupScale:{value:[0,5960465188081798e-23,1,0]},uGridSize:{value:[512]},uInscatteringAmount:{value:[1,0,0]},uInvSunDirection:{value:[-.5391638875007629,.6469966173171997,-.5391638875007629]},uModelMatrix:{value:[1,0,0,0,0,1,0,0,0,0,1,0,1622015,100,1753087,1]},uOutscatteringAmount:{value:[1638400,17632,1769472]},uProjectionMatrix:{value:[152587890625e-16,0,0,0,0,-152587890625e-16,0,0,0,0,-6200397183420137e-20,0,0,0,-1.0317461490631104,1]},uScatteringParameters:{value:[0,-1,5960465188081798e-23,0]},uScatteringTintColour:{value:[0,5960465188081798e-23,1]},uSunColour:{value:[.8666666746139526,.8078431487083435,.7333333492279053]},uTextureAtlas:{value:[5]},uTextureAtlasSettings:{value:[6]},uViewMatrix:{value:[1,0,0,0,0,5960465188081798e-23,1,0,0,-1,5960465188081798e-23,0,-1638400,1769472,-17632.10546875,1]},uViewProjMatrix:{value:[152587890625e-16,0,0,0,0,-9094948101931455e-28,-6200397183420137e-20,0,0,152587890625e-16,-3695725149521767e-27,0,-25,-27,.06151437759399414,1]},uViewportLookupScale:{value:[1638400,17632,1769472,0]},uViewportOffsetScale:{value:[1,0,0,0]},uZBufferParams:{value:[16777248,32256,-32768,-512.0009765625]}},e.vertexColors=!0;let n=require("./minimap-floor-vert.glsl.c");n=Vt(n),n=Gt(n,Ot),n=zt(n,_r);let r=require("./minimap-floor-frag.glsl.c");r=Vt(r),r=Gt(r,Ot),r=zt(r,_r),r=r.replace(/#undef gl_FragColor/,"// $&"),r=r.replace(/void getTextureSettings\(/,`void getTextureSettings(vec2 s, out TextureSettings settings){
settings.textureMeta1 = vec3(0.0,0.0,8196.0);
settings.textureMeta2 = vec3(0.0,0.0,8196.0);
settings.uvAnim = vec2(0.0,0.0);
settings.wrapping = 0.0;
settings.specular = 0.0;
settings.normalScale = 0.0;
}
void getTextureSettingsOld(`);let i=0;return r=Ut(r,`in highp vec2 v_texcoord_0;
in highp vec2 v_texcoord_1;
in highp vec2 v_texcoord_2;`),n=Ut(n,`in highp vec2 texcoord_0;
in highp vec2 texcoord_1;
in highp vec2 texcoord_2;`),n=Ut(n,`out highp vec2 v_texcoord_0;
out highp vec2 v_texcoord_1;
out highp vec2 v_texcoord_2;`),n=la(n,`v_texcoord_0=texcoord_0;
v_texcoord_1=texcoord_1;
v_texcoord_2=texcoord_2;
`),r=r.replace(/(?<!void )getTexel\(\w+,/gm,()=>`getTexel(v_texcoord_${i++%3},`),e.vertexShader=n,e.fragmentShader=r,e.uniforms.uTextureAtlas={value:t},e.uniforms.uInvSunDirection.value[2]*=-1,e.uniformsNeedUpdate=!0,e}function Ql(t){let e=new Tr;e.customProgramCacheKey=()=>"water",e.uniforms={uAmbientColour:{value:[.6,.6,.6]},uCameraPosition:{value:[1671168,17344,1638400]},uDummy:{value:[0]},uFullScreenLookupScale:{value:[0,5960465188081798e-23,1,0]},uInvSunDirection:{value:[-.5,.8,-.5]},uModelMatrix:{value:[1,0,0,0,0,1,0,0,0,0,1,0,1654783,100,1622015,1]},uProjectionMatrix:{value:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]},uSunColour:{value:[1,.9,.8]},uViewMatrix:{value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},uViewProjMatrix:{value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},uViewportLookupScale:{value:[1,1,1,1]},uViewportOffsetScale:{value:[1,0,0,0]},uZBufferParams:{value:[16777248,32256,-32768,-512.0009765625]},uWaterFeatureFlags:{value:[1,1,1,1]},uWaterNormalMapTextureScales_FlowNoiseScale:{value:[1,1,1,.5]},uWaterTickFade:{value:[0,0]},uWaterNormalBRDFParams:{value:[.5,.5,.5,.5]},uWaterSpecularColour:{value:[1,1,1]},uWaterReflectionStrength:{value:1},uWaterReflectionMapContribution:{value:.5},uWaterExtinctionVisibilityMetres:{value:10},uWaterExtinctionOpaqueWaterColour:{value:[.1,.2,.3]},uWaterExtinctionRGBDepthMetres:{value:[5,10,20]},uWaterFoamScaleFoamDepth:{value:[1,1]},uWaterStillWaterNormalStrength_spareyzw:{value:[.5,0,0,0]},uSampleWeight_uvDistortion_sparezw:{value:[1,0,0,0,0,1,0,0,0,0,1,0]},uMacroSampleWeight_uvDistortion_sparezw:{value:[1,0,0,0,0,1,0,0,0,0,1,0]},uWaterNormalMapTexture0:{value:t},uWaterNormalMapTexture1:{value:t},uWaterNormalMapTexture2:{value:t},uWaterTextureFoam:{value:t},uReflectionMap:{value:t},uRefractionMap:{value:t},uRefractionDepth:{value:t}},e.defines={WATER_NORMAL_MAPS:1,WATER_FOAM_MAP:1,WATER_EXTINCTION:1,REFLECTION:1,REFRACTION:1,GLOBAL_ENVIRONMENTMAPPING:1,SUNLIGHT_DIRECT_LIGHTING:1,SPECULAR_LIGHTING:1},e.vertexColors=!0;let n=require("./minimap-water-vert.glsl.c");n=Vt(n),n=Gt(n,Ot),n=zt(n,_r);let r=require("./minimap-water-frag.glsl.c");r=Vt(r),r=Gt(r,Ot),r=zt(r,_r),r=r.replace(/#undef gl_FragColor/,"// $&"),r=r.replace(/void getTextureSettings\(/,`void getTextureSettings(vec2 s, out TextureSettings settings){
settings.textureMeta1 = vec3(0.0,0.0,8196.0);
settings.textureMeta2 = vec3(0.0,0.0,8196.0);
settings.uvAnim = vec2(0.0,0.0);
settings.wrapping = 0.0;
settings.specular = 0.0;
settings.normalScale = 0.0;
}
void getTextureSettingsOld(`);let i=0;return r=Ut(r,`in highp vec2 v_texcoord_0;
in highp vec2 v_texcoord_1;
in highp vec2 v_texcoord_2;`),n=Ut(n,`in highp vec2 texcoord_0;
in highp vec2 texcoord_1;
in highp vec2 texcoord_2;`),n=Ut(n,`out highp vec2 v_texcoord_0;
out highp vec2 v_texcoord_1;
out highp vec2 v_texcoord_2;`),n=la(n,`v_texcoord_0=texcoord_0;
v_texcoord_1=texcoord_1;
v_texcoord_2=texcoord_2;
`),r=r.replace(/(?<!void )getTexel\(\w+,/gm,()=>`getTexel(v_texcoord_${i++%3},`),e.vertexShader=n,e.fragmentShader=r,e.uniforms.uTextureAtlas={value:t},e.uniforms.uInvSunDirection.value[2]*=-1,e.uniformsNeedUpdate=!0,e}function la(t,e){return t.replace(/void main\(\)[\s\r\n]*\{/,`$&
`+e)}function Ut(t,e){return e+`
`+t}function Gt(t,e){return t.replace(/^((flat) )*(in|out|uniform|attribute|varying) ((highp|mediump|lowp) )*(float|vec\d|mat\d) ((\w|,\s*)+);$/mg,(n,r,i,s,u,c,l,v)=>v.split(/,\s*/g).map(p=>{let m=e[p];if(m!=null){let h=typeof m=="function"?m():m;return h=Array.isArray(h)?h.join(`
`):h+`
`,n.split(`
`).map(g=>`// ${g}`).join(`
`)+`
`+h}return`${r??""}${s} ${u??""}${l??""} ${p};`}).join(`
`))}function zt(t,e){return t.replace(/^#define (\w+)(\(.*?\))?($| (\\\r?\n|.)*$)/mg,(n,r)=>{let i=e[r];if(i!=null){let s=typeof i=="function"?i():i;return s=Array.isArray(s)?s.join(`
`):s+`
`,n.split(`
`).map(u=>`// ${u}`).join(`
`)+`
`+s}return n})}function eu(t,e){return t=t.replace(/\bvoid main\(/,"void originalMain("),t=t+`
`+e.replace(/super\(/,"originalMain("),t}function Vt(t){return["precision highp float;","precision mediump sampler3D;","#define fma(a,b,c) ((a)*(b)+(c))"].join(`
`)+`

`+t.replace(/^#version ([\w ]+)$/m,"//original version $1").replace(/\bprecise\b/g,"highp")}async function tu(...t){return null}async function ru(...t){return null}const ye=512,wn=64,En=48,Sr=4,_n=128,gi=1/16,Lt=new Be(0,1,0),Dr={material:-1,materialTiling:128,materialBleedpriority:-1,color:[255,0,255]},{tileshapes:ht,defaulttileshape:Qr,defaulttileshapeflipped:ua}=iu();function nu(t,e){return!(t.x>=e.x+e.xsize||t.x+t.xsize<=e.x||t.z>=e.z+e.zsize||t.z+t.zsize<=e.z)}function xi(t,e,n){return!(e<t.x||e>=t.x+t.xsize||n<t.z||n>=t.z+t.zsize)}let Hr=new Map,fr=new Set;function jt(t,e="default"){fr.has(e)&&(console.error("scratchbuffer hasn't been returned since last use, leaking memory by creating new buffer."),fr.delete(e),Hr.delete(e));let n=Hr.get(e);return(!n||n&&n.byteLength<t)&&(n=new ArrayBuffer(t),Hr.set(e,n),console.log("allocating new scratchbuf mb:",(t/1e6).toFixed(2))),fr.add(e),[n,i=>{if(fr.delete(e),i>t)throw new Error("larger slice of scratchbuffer requested than was reserved");return n.slice(0,i)}]}class vi{debug_nxttile=null;debug_raw=null;rawOverlay=void 0;rawUnderlay=void 0;settings;next01=void 0;next10=void 0;next11=void 0;x;y;z;y10;y01;y11;playery00;playery01;playery10;playery11;shape=Qr;underlayVisible=!1;overlayVisible=!1;normalX=0;normalZ=0;bleedsOverlayMaterial=!1;vertexprops;overlayprops;underlayprops;originalUnderlayColor=Dr.color;rawCollision=void 0;effectiveCollision=void 0;effectiveLevel;effectiveVisualLevel;waterProps=null;addUnderlay(e,n){let r=n!=null?e.mapUnderlays[n-1]:void 0;r&&(r.color&&(r.color[0]!=255||r.color[1]!=0||r.color[2]!=255)&&(this.underlayVisible=!0),this.underlayprops={material:r.material??-1,materialTiling:r.material_tiling??128,materialBleedpriority:-1,color:r.color??[255,0,255]},this.rawUnderlay=r,this.originalUnderlayColor=this.underlayprops.color,this.vertexprops.fill(this.underlayprops))}addOverlay(e,n,r){let i=n!=null?e.mapOverlays[n-1]:void 0;i&&(i.color&&(i.color[0]!=255||i.color[1]!=0||i.color[2]!=255)&&(this.overlayVisible=!0),this.overlayprops={material:i.materialbyte??i.material??-1,materialTiling:i.material_tiling??128,materialBleedpriority:i.bleedpriority??0,color:i.color??(i.materialbyte!=null?[255,255,255]:[255,0,255])},this.bleedsOverlayMaterial=!!i.bleedToUnderlay,this.rawOverlay=i),r!=null&&(this.shape=ht[r])}addUnderWater(e,n,r,i){this.waterProps={y00:this.y,y01:this.y,y10:this.y,y11:this.y,props:this.overlayprops,shape:this.shape.overlay,isoriginal:this.shape==Qr||this.shape==ua,rawOverlay:this.rawOverlay};let s=this.underlayprops;this.underlayVisible=!1,this.overlayVisible=!1,this.bleedsOverlayMaterial=!1,this.rawOverlay=void 0,this.addUnderlay(e,i),this.addOverlay(e,r,null),this.overlayVisible||(this.overlayVisible=!0,this.overlayprops=s,this.bleedsOverlayMaterial=!0),this.y=this.y01=this.y10=this.y11=this.y-n*ye*gi}constructor(e,n,r,i,s,u){let c=e*ye*gi;this.settings=n,this.x=r,this.y=c,this.z=i,this.y01=c,this.y10=c,this.y11=c,this.playery00=c,this.playery01=c,this.playery10=c,this.playery11=c,this.effectiveLevel=s,this.effectiveVisualLevel=0;let l={...Dr};this.vertexprops=[l,l,l,l],this.underlayprops=l,this.overlayprops=l;let v;if(u){let p=((n??0)&1)!=0;v={settings:n??0,walk:[p,!1,!1,!1,!1,!1,!1,!1,!1],sight:[!1,!1,!1,!1,!1,!1,!1,!1,!1]}}this.rawCollision=v,this.effectiveCollision=v}}function iu(){let t=[{subvertex:0,nextx:!1,nextz:!0,subx:0,subz:1},{subvertex:1,nextx:!1,nextz:!0,subx:.5,subz:1},{subvertex:0,nextx:!0,nextz:!0,subx:1,subz:1},{subvertex:2,nextx:!0,nextz:!1,subx:1,subz:.5},{subvertex:0,nextx:!0,nextz:!1,subx:1,subz:0},{subvertex:1,nextx:!1,nextz:!1,subx:.5,subz:0},{subvertex:0,nextx:!1,nextz:!1,subx:0,subz:0},{subvertex:2,nextx:!1,nextz:!1,subx:0,subz:.5},{subvertex:3,nextx:!1,nextz:!1,subx:.5,subz:.5}];function e(s,u){return s==8?t[8]:(s=(s+u*2)%8,t[s])}let n=[];for(let s=0;s<48;s++){let u=[],c=[],l=s%4,v=s-l;if(v==0)u.push(0,2,4,6);else if(v==4||v==36||v==40)u.push(0,4,6),c.push(0,2,4),v==36&&(l+=1),v==40&&(l+=3);else if(v==8)u.push(0,1,6),c.push(1,2,4,6);else if(v==12)u.push(1,2,4),c.push(0,1,4,6);else if(v==16)u.push(1,2,4,6),c.push(0,1,6);else if(v==20)u.push(0,1,4,6),c.push(1,2,4);else if(v==24)u.push(0,1,5,6),c.push(1,2,4,5);else if(v==28)u.push(5,6,7),c.push(2,4,5,7,0);else if(v==32)u.push(2,4,5,7,0),c.push(5,6,7);else if(v==44)u.push(4,6,8),c.push(8,6,0,2,4);else throw new Error("shouldnt happen");n[s]={overlay:u.map(p=>e(p,l)),underlay:c.map(p=>e(p,l))}}let r={overlay:[],underlay:[0,2,4,6].map(s=>e(s,0))},i={overlay:[],underlay:[2,4,6,0].map(s=>e(s,0))};return{tileshapes:n,defaulttileshape:r,defaulttileshapeflipped:i}}function au(t){let e=t%4,n=(e+2)%4,r=t-e;if(r==0)return 0+n;if(r==4)return 4+n;if(r==8)return 16+e;if(r==12)return 20+e;if(r==16)return 8+e;if(r==20)return 12+e;if(r==24)return 24+n;if(r==28)return 32+e;if(r==36)return 40+e;if(r==40)return 36+e;if(r==32)return 28+e;if(r==44)return console.log("unknown inverse shape"),0;throw new Error("unexpected")}function ca(t,e,n){return new Ke().makeTranslation(t.translate.x-e,t.translate.y,t.translate.z-n).multiply(new Ke().makeRotationFromQuaternion(t.rotation)).multiply(new Ke().makeScale(t.scale.x,t.scale.y,t.scale.z))}function su(t,e,n,r,i,s,u,c=0,l=0,v=t.count){let p=ca(e,i,s),m=hr(n,e.originx/ye,e.originz/ye,e.level),h=new Be,g=e.placementMode=="followfloor"||e.placementMode=="followfloorceiling",d=e.placementMode=="followfloorceiling",a=d&&r>0?1/r:1,o=v-l;u??=new Xe(new Float32Array(o*3),3);let[f,x,y]=pt(t),[E,_,S]=pt(u),T=_+c*S,A=x+l*y;for(let I=0;I<o;I++){let N=T+S*I,F=A+y*I;h.x=f[F+0],h.y=f[F+1],h.z=f[F+2];let P=h.y;if(h.applyMatrix4(p),g){let U=(h.x+i)/ye,O=(h.z+s)/ye;if(d){let V=P*a,J=hr(n,U,O,e.level),z=hr(n,U,O,e.level+1)-e.scaleModelHeightOffset;h.y+=-P+z*V+J*(1-V)}else h.y+=hr(n,U,O,e.level)}else h.y+=m;E[N+0]=h.x,E[N+1]=h.y,E[N+2]=h.z}return u}function hr(t,e,n,r){let i=Math.floor(e),s=Math.floor(n),u=t.getTile(i,s,r);if(!u)return 0;if(u.waterProps)return u.waterProps.y00;let c=(1-(e-i))*(1-(n-s)),l=(e-i)*(1-(n-s)),v=(1-(e-i))*(n-s),p=(e-i)*(n-s);return u.y*c+u.y01*l+u.y10*v+u.y11*p}class ou{engine;area;tilemask;xsize;zsize;levels=4;xoffset;zoffset;tiles;xstep;zstep;levelstep;constructor(e,n,r){this.area=n,this.tilemask=r?.filter(i=>nu(i,n)),this.engine=e,this.xoffset=n.x,this.zoffset=n.z,this.xsize=n.xsize,this.zsize=n.zsize,this.xstep=1,this.zstep=this.xstep*n.xsize,this.levelstep=this.zstep*n.zsize,this.tiles=new Array(this.levelstep*this.levels).fill(void 0)}getHeightCollisionFile(e,n,r,i,s){let u=new Uint16Array(i*s*2);for(let c=0;c<s;c++)for(let l=0;l<i;l++){let v=this.getTile(e+l,n+c,r);if(v){let p=(l+c*i)*2,m=(v.playery00+v.playery01+v.playery10+v.playery11)/4;u[p+0]=m/16;let h=0,g=v.effectiveCollision;for(let d=0;d<9;d++){let a=g.walk[d]?g.sight[d]?2:1:0;h+=Math.pow(3,d)*a}u[p+1]=h}}return u}getTile(e,n,r){if(e-=this.xoffset,n-=this.zoffset,!(e<0||n<0||e>=this.xsize||n>=this.zsize))return this.tiles[this.levelstep*r+n*this.zstep+e*this.xstep]}blendUnderlays(){for(let e=this.zoffset;e<this.zoffset+this.zsize;e++)for(let n=this.xoffset;n<this.xoffset+this.xsize;n++){let r=0,u=((this.getTile(n,e,1)?.settings??0)&2)!=0?-1:0;for(let c=0;c<this.levels;c++){let l=this.getTile(n,e,c);if(!l)continue;if(!l.debug_nxttile){let T=0,A=0,I=0,N=0;for(let F=-4;F<=5;F++)for(let P=-4;P<=5;P++){let U=this.getTile(n+P,e+F,c);if(!U||!U.underlayVisible)continue;let O=U.originalUnderlayColor;T+=O[0],A+=O[1],I+=O[2],N++}N>0&&(l.underlayprops.color=[T/N,A/N,I/N])}this.getTile(n-1,e-1,c);let v=this.getTile(n,e-1,c),p=this.getTile(n+1,e-1,c),m=this.getTile(n+1,e,c),h=this.getTile(n+1,e+1,c),g=this.getTile(n,e+1,c),d=this.getTile(n-1,e+1,c),a=this.getTile(n-1,e,c),o=0,f=0;a&&m&&(o=(m.y-a.y)/(2*ye)),v&&g&&(f=(g.y-v.y)/(2*ye));let x=Math.hypot(o,f,1);l.normalZ=-o/x,l.normalX=-f/x,l.y01=m?.y??l.y,l.y10=g?.y??l.y,l.y11=h?.y??l.y,l.playery00=l.y,l.playery01=m?.y??l.y01,l.playery10=g?.y??l.y10,l.playery11=h?.y??l.y11,l.waterProps&&(l.playery00=Math.max(l.playery00,l.waterProps.y00),l.playery01=Math.max(l.playery01,l.waterProps.y01),l.playery10=Math.max(l.playery10,l.waterProps.y10),l.playery11=Math.max(l.playery11,l.waterProps.y11)),l.next01=m,l.next10=g,l.next11=h;let y=((l.settings??0)&8)!=0,E=c+u;y&&(r=0);let _=this.getTile(n,e,E),S=((_?.settings??0)&4)!=0;_&&E!=c&&(_.effectiveCollision=l.rawCollision,_.playery00=l.playery00,_.playery01=l.playery01,_.playery10=l.playery10,_.playery11=l.playery11),l.effectiveLevel=E,l.effectiveVisualLevel=Math.max(l.effectiveVisualLevel,r);for(let T=-1;T<=1;T++)for(let A=-1;A<=1;A++){let I=this.getTile(n+A,e+T,c);I&&((I.settings??0)&8)==0&&(I.effectiveVisualLevel=Math.max(I.effectiveVisualLevel,r))}if(S&&(r=E+1),l.waterProps)l.waterProps.shape.length==0&&(h?.waterProps||g?.waterProps||m?.waterProps?l.waterProps.shape=ht[0].overlay:l.waterProps.shape=ht[4].overlay);else{let T=g?.waterProps?.isoriginal||m?.waterProps?.isoriginal;h?.waterProps?.isoriginal&&T?l.waterProps={...h.waterProps,isoriginal:!1,shape:ht[0].overlay}:h?.waterProps?.isoriginal?l.waterProps={...h.waterProps,isoriginal:!1,shape:ht[6].overlay}:d?.waterProps?.isoriginal&&g?.waterProps?.isoriginal?l.waterProps={...d.waterProps,isoriginal:!1,shape:ht[5].overlay}:p?.waterProps?.isoriginal&&m?.waterProps?.isoriginal&&(l.waterProps={...p.waterProps,isoriginal:!1,shape:ht[7].overlay})}l.waterProps&&(m?.waterProps&&(l.waterProps.y01=m.waterProps.y00),g?.waterProps&&(l.waterProps.y10=g.waterProps.y00),h?.waterProps?l.waterProps.y11=h.waterProps.y00:m?.waterProps?l.waterProps.y11=m.waterProps.y10:g?.waterProps&&(l.waterProps.y11=g.waterProps.y01))}}for(let e=this.zoffset;e<this.zoffset+this.zsize;e++)for(let n=this.xoffset;n<this.xoffset+this.xsize;n++)for(let r=0;r<this.levels;r++){let i=this.getTile(n,e,r);if(i&&i.bleedsOverlayMaterial)for(let s of i.shape.overlay){let u=i;s.nextx&&s.nextz?u=u.next11:s.nextx?u=u.next01:s.nextz&&(u=u.next10),u&&u.vertexprops[s.subvertex].materialBleedpriority<i.overlayprops.materialBleedpriority&&(u.vertexprops[s.subvertex]=i.overlayprops)}}}gatherMaterials(e,n,r,i){let s=new Map,u=(c,l)=>{let v=1;const p=128;l<p?v=p/l+1:l%p!=0&&(v=1+p/l);let m=s.get(c);(!m||m<v)&&s.set(c,v)};for(let c=0;c<this.levels;c++)for(let l=0;l<i;l++)for(let v=0;v<r;v++){let p=this.getTile(e+v,n+l,c);p&&(p.underlayprops.material!=-1&&u(p.underlayprops.material,p.underlayprops.materialTiling),p.overlayprops.material!=-1&&u(p.overlayprops.material,p.overlayprops.materialTiling),p.waterProps&&p.waterProps.props.material!=-1&&u(p.waterProps.props.material,p.waterProps.props.materialTiling))}return s}addMapsquare(e,n,r,i,s=!1){if(e.length!=r.xsize*r.zsize*i)throw new Error;let u=(r.x-this.xoffset)*this.xstep+(r.z-this.zoffset)*this.zstep;for(let c=0;c<r.zsize;c++)for(let l=0;l<r.xsize;l++){if(!xi(this.area,r.x+l,r.z+c)||this.tilemask&&!this.tilemask.some(g=>xi(g,r.x+l,r.z+c)))continue;let v=(r.x+l)*ye,p=(r.z+c)*ye,m=c+l*r.zsize,h=0;for(let g=0;g<this.levels;g++){let d=g<i?e[m]:{},a=null,o=d.height;if(n){let y=[n.level0,n.level1,n.level2,n.level3][g];y&&(a=y[(l+1)*66+c+1],o=a.flags&16?a.rest?.waterheight:a.height)}o!=null&&o!=0?h+=o==1?0:o:h+=30;let f;if(a){let y=a.flags,E=(y&16)!=0,_=(y&2?1:0)|(y&4?2:0)|(y&8?4:0)|(y&32?8:0)|(y&64?16:0);E&&(_|=128),f=new vi(h,_,v,p,g,s);let S=a.rest?.overlay_under??a.rest?.overlay,T=a.rest?.underlay_under??a.rest?.underlay,A=E?au(a.rest?.shape??0):a.rest?.shape;f.addUnderlay(this.engine,T),f.addOverlay(this.engine,S,A),E&&f.addUnderWater(this.engine,a.height,a.rest?.overlay,a.rest?.underlay),f.debug_raw=d,f.debug_nxttile=a,f.originalUnderlayColor=rr(kt(a.rest?.underlaycolor??0)),f.underlayprops.color=f.originalUnderlayColor}else f=new vi(h,d.settings??0,v,p,g,s),f.addUnderlay(this.engine,d.underlay),f.addOverlay(this.engine,d.overlay,d.shape),f.debug_raw=d;let x=u+this.xstep*l+this.zstep*c+this.levelstep*g;this.tiles[x]=f,m+=r.xsize*r.zsize}}}}async function fa(t,e,n){let r=t.classicData?En:wn,i=e+n*_n,s,u=null,c={},l=[],v,p=Sr,m=0,h=0;if(t.getBuildNr()>ir){let d=null,a=null,o=null;if(t.getBuildNr()>=759){let y=(await t.getCacheIndex(B.mapsquares))[i];if(!y)return null;m=y.crc,h=y.version;let E=await t.getFileArchive(y),_=y.subindices.indexOf(Ct.squares);if(_==-1)return null;d=E[_].buffer;let S=y.subindices.indexOf(Ct.locations);if(S!=-1&&(o=E[S].buffer),t.getBuildNr()>=861){let T=y.subindices.indexOf(Ct.square_nxt);T!=-1&&(a=E[T].buffer)}}else if(t.getBuildNr()>it){try{let x=await t.findFileByName(B.mapsquares,`m${e}_${n}`);if(!x)return null;m=x.crc,h=x.version,d=await t.getFile(x.major,x.minor,x.crc)}catch{return null}try{let x=await t.findFileByName(B.mapsquares,`l${e}_${n}`);x&&(m=ct(x.crc,m),h=Math.max(h,x.version),o=await t.getFile(x.major,x.minor,x.crc))}catch{}}else{let x=e*256+n,y=t.legacyData?.mapmeta.get(x);if(!y)return null;try{m=y.crc,h=y.version,d=await t.getFile(nt.map,y.map),o=await t.getFile(nt.map,y.loc)}catch{console.warn(`map for ${e}_${n} declared but file did not exist`)}}if(!d)return null;let f=K.mapsquareTiles.read(d,t.rawsource);a&&(u=K.mapsquareTilesNxt.read(a,t.rawsource)),s=f.tiles,c=f.extra,o&&(l=K.mapsquareLocations.read(o,t.rawsource).locations),v={x:e*r,z:n*r,xsize:r,zsize:r}}else{let d=await aa(t,e,n);if(!d)return null;s=d.tiles,v=d.rect,p=d.levels,l=d.locs,m=d.mapfilehash}return{tilerect:v,levelcount:p,mapsquarex:e,mapsquarez:n,chunkfilehash:m,chunkfileversion:h,tiles:s,nxttiles:u,extra:c,rawlocs:l,locs:[]}}async function Vu(t,e,n,r){let i=r?.padfloor?20:0,s=t.classicData?En:wn,u=Math.ceil(i/s),c=new ou(t,{x:e*s-i,z:n*s-i,xsize:s+i*2,zsize:s+i*2},r?.mask),l=null;for(let v=-u;v<=u;v++)for(let p=-u;p<=u;p++){let m=await fa(t,e+p,n+v);m&&(c.addMapsquare(m.tiles,m.nxttiles,m.tilerect,m.levelcount,!!r?.collision),m.mapsquarex==e&&m.mapsquarez==n&&(l=m))}return t.classicData&&sa(c),c.blendUnderlays(),l&&(l.locs=await pu(t,c,l.rawlocs,l.tilerect.x,l.tilerect.z,!!r?.collision)),{grid:c,chunk:l,chunkSize:s,chunkx:e,chunkz:n}}async function lu(t,e){let n=new Ai,r=[0,0,0,0],i=-1;if(e?.extra.unk00?.unk20&&(r=e.extra.unk00.unk20.slice(1)),e?.extra.unk80){let u=(await t.engine.getArchiveById(B.config,Re.environments)).find(l=>l.fileid==e.extra.unk80.environment),c=K.environments.read(u.buffer,t.engine.rawsource);typeof c.model=="number"&&(i=c.model,n=await xn(t,await t.getModelData(c.model)))}return{skybox:n,fogColor:r,skyboxModelid:i}}async function uu(t,e,n,r){let i=[],s=e.gatherMaterials(n.tilerect.x,n.tilerect.z,n.tilerect.xsize+1,n.tilerect.zsize+1),u=new Map,c=[];for(let[m,h]of s.entries()){let g=t.engine.getMaterialData(m);g.textures.diffuse&&t.textureType!="none"&&c.push(t.getTextureFile("diffuse",g.textures.diffuse,g.stripDiffuseAlpha).then(d=>d.toWebgl()).then(d=>{u.set(g.textures.diffuse,{tex:d,repeat:h})}))}await Promise.all(c);let l,v=[...u.entries()].sort((m,h)=>h[1].tex.width*h[1].repeat-m[1].tex.width*m[1].repeat),p=[[256,256],[512,512],[1024,512],[1024,1024],[1024,2048],[2048,1024],[2048,2048],[2048,3072],[2048,4096],[3072,4096],[4096,4096]];e:for(let m of p){l=new cu(m[0],m[1]);for(let[h,{tex:g,repeat:d}]of v)if(!l.addTexture(h,g,d))continue e;break}for(let m=0;m<Sr;m++)i.push(Dt(e,n,m,l,!0,"default")),i.push(Dt(e,n,m,l,!0,"default",!0)),r?.map2d&&(i.push(Dt(e,n,m,l,!1,"worldmap")),i.push(Dt(e,n,m,l,!1,"worldmap",!0))),r?.invisibleLayers&&(i.push(Dt(e,n,m,l,!1,"wireframe")),i.push(xu(e,n,m))),r?.minimap&&(i.push(Dt(e,n,m,l,!1,"minimap")),i.push(Dt(e,n,m,l,!1,"minimap",!0)));return i}async function ju(t,e,n,r,i){let{grid:s,chunk:u}=await e,c,l=new Fi;l.name=`mapsquare ${n}.${r}`;let v=new Map;if(u){let h=await uu(t,s,u,i),g=i?.map2d?await hu(t.engine,s,u.locs):[],d=await bi(t,u.locs),a=[...d.byMaterial,...g];if(i.minimap){let y=await bi(t,u.locs,!0);a.push(...y.byMaterial)}let o=u.tilerect.x*ye,f=u.tilerect.z*ye;if(l.matrixAutoUpdate=!1,l.position.set(o,0,f),l.updateMatrix(),a.length!=0){let y=await Promise.all(a.map(E=>E.material??t.getMaterial(E.materialId,E.hasVertexAlpha,E.minimapVariant)));l.add(...a.map((E,_)=>gu(s,E,o,f,y[_],v)))}let x=(await Promise.all(h.map(y=>vu(t,y)))).filter(y=>y);x.length!=0&&l.add(...x);for(let y=0;y<Sr;y++){let E=yi(s,u,y);E&&l.add(E);let _=yi(s,u,y,!0);_&&l.add(_)}if(i.hashboxes)for(let y=0;y<Sr;y++)l.add(await tu(t,d.byLogical,s,u.mapsquarex,u.mapsquarez,y)),l.add(await ru(t,s,u,y));c=d.byLogical}else c=new Map;let p=u&&i?.skybox?await lu(t,u):null,m=t.engine.classicData?En:wn;return l?.traverse(h=>{if(h instanceof qt){let g=h,d=!1;for(;g;)g.userData.modeltype=="floorhidden"&&(d=!0),g=g.parent;d&&h.material instanceof rn&&(h.material.wireframe=!0)}}),{chunkx:n,chunkz:r,grid:s,chunk:u,sky:p,modeldata:c,chunkroot:l,chunkSize:m,locRenders:v}}class cu{padsize=32;width;height;allocs=[];map=new Map;allocx=0;allocy=0;allocLineHeight=0;result=null;resultSource=null;constructor(e,n){this.width=e,this.height=n}addTexture(e,n,r){this.result!=null&&(this.result=null,console.log("adding textures to atlas after creation of texture"));let i=Math.floor(n.width*r),s=Math.floor(n.height*r),u=i+2*this.padsize,c=s+2*this.padsize;if(this.allocx+u>this.width&&(this.allocx=0,this.allocy+=this.allocLineHeight,this.allocLineHeight=0),this.allocLineHeight=Math.max(this.allocLineHeight,c),this.allocy+this.allocLineHeight>this.height)return!1;let l={u:(this.allocx+this.padsize)/this.width,v:(this.allocy+this.padsize)/this.height,usize:n.width/this.width,vsize:n.height/this.height,x:this.allocx+this.padsize,y:this.allocy+this.padsize,repeatWidth:i,repeatHeight:s,totalpixels:(this.padsize+i+this.padsize)*(this.padsize+s+this.padsize),img:n};return this.allocs.push(l),this.allocx+=u,this.map.set(e,l),!0}convertToThreeTexture(){return this.resultSource??=(()=>{let e=new ya(this.convert());return e.flipY=!1,e.magFilter=Kt,e.minFilter=ba,e.generateMipmaps=!0,e.colorSpace=br,e})()}convert(){if(this.result)return this.result;let e=document.createElement("canvas");e.width=this.width,e.height=this.height;let n=e.getContext("2d",{willReadFrequently:!0}),r=(u,c,l,v=0,p=0,m=u.width,h=u.height)=>{n.drawImage(u,v,p,m,h,c,l,m,h)};for(let u of this.allocs){let c=-this.padsize,l=u.repeatWidth+this.padsize,v=-this.padsize,p=u.repeatHeight+this.padsize;for(let m=v;m<p;m=i){var i=Math.min(p,Math.ceil((m+1)/u.img.height)*u.img.height);for(let h=c;h<l;h=s){var s=Math.min(l,Math.ceil((h+1)/u.img.width)*u.img.width);r(u.img,u.x+h,u.y+m,Wn(h,u.img.width),Wn(m,u.img.height),s-h,i-m)}}}return this.result=e,e}}function ha(t){let e=-1;return t.morphs_1&&(e=t.morphs_1.unk2[0]??t.morphs_1.unk3),t.morphs_2&&(e=t.morphs_2.unk2),e==32767&&(e=-1),e==65535&&(e=-1),e}async function fu(t,e){let n=e;if(t.classicData){let r=oa(t,e);return{rawloc:r,morphedloc:r,resolvedid:n}}else{let r=await t.getGameFile("objects",e),i=K.object.read(r,t),s=i;if(i.morphs_1||i.morphs_2){let u=ha(i);if(u!=-1){let c=await t.getGameFile("objects",u);s={...i,...K.object.read(c,t)},n=u}}return{rawloc:i,morphedloc:s,resolvedid:n}}}async function hu(t,e,n){let r=new Wr;r.transparent=!0,r.depthTest=!1;let i=l=>({wallgroup:{models:[],groupid:"walls"+l,minimapVariant:!1,hasVertexAlpha:!1,materialId:-1,material:{mat:r,matmeta:{...Tt()}},overlayIndex:1},mapscenes:new Map}),s=[i(0),i(1),i(2),i(3)],u=(l,v)=>{let p=new Be().set((v.x+v.sizex/2)*ye,0,(v.z+v.sizez/2)*ye),m=new tt().setFromAxisAngle(Lt,v.rotation/2*Math.PI),h=new Be(1,1,1);s[v.effectiveLevel].wallgroup.models.push({model:l.meshes[0],morph:{level:v.plane,placementMode:"followfloor",translate:p,rotation:m,scale:h,scaleModelHeightOffset:0,originx:p.x,originz:p.z},miny:l.miny,maxy:l.maxy,extras:{modeltype:"overlay",isclickable:!1,modelgroup:"walls"+v.visualLevel,level:v.effectiveLevel}})},c=async(l,v)=>{let p=s[l.effectiveLevel].mapscenes.get(v),m=e.engine.mapMapscenes[v];if(m.sprite_id==null)return;let h=await t.getFileById(B.sprites,m.sprite_id),g=wt(h),d=new Wr;d.map=new Yt(g[0].img.data,g[0].img.width,g[0].img.height,Zt),d.depthTest=!1,d.transparent=!0,d.needsUpdate=!0,p={groupid:"mapscenes"+l.effectiveLevel,hasVertexAlpha:!1,materialId:-1,minimapVariant:!1,material:{mat:d,matmeta:{...Tt(),alphamode:"cutoff"}},models:[],overlayIndex:2},s[l.effectiveLevel].mapscenes.set(v,p),console.warn("using very inefficient code path for 3d mapscenes");let a=d.map;const o=128;let f=a.image.width*o,x=a.image.height*o,y=new pn(null).addParallelogram([255,255,255],[-f/2,0,-x/2],[f,0,0],[0,0,x]).convertSubmesh(0),E=new Be((l.x+l.sizex/2)*ye,0,(l.z+l.sizez/2)*ye);p.models.push({model:y,morph:{level:l.plane,placementMode:"simple",rotation:new tt,scale:new Be(1,1,1),translate:E,scaleModelHeightOffset:0,originx:E.x,originz:E.z},miny:0,maxy:0,extras:{modeltype:"overlay",isclickable:!1,level:l.visualLevel,modelgroup:"mapscenes"}})};for(let l of n)l.effectiveLevel!=-1&&(l.type==0?u(Mt.wall,l):l.type==1?u(Mt.shortcorner,l):l.type==2?u(Mt.longcorner,l):l.type==3?u(Mt.pillar,l):l.type==9&&u(Mt.diagonal,l),l.location.mapscene!=null&&await c(l,l.location.mapscene));return s.flatMap(l=>[l.wallgroup,...l.mapscenes.values()])}function du(t,e,n=!1){let r=[],i=e.location,s=e.type==22&&!i.unknown_49,u={replaceColors:i.color_replacements??void 0,replaceMaterials:i.material_replacements??void 0,lodLevel:n?100:void 0};t.getBuildNr()>ir&&t.getBuildNr()<377&&(u.replaceMaterials=u.replaceColors);const c=4;let l=new Be((i.translateX??0)*c,-(i.translateY??0)*c,(i.translateZ??0)*c);const v=1/128;let p=new Be((i.scaleX??128)*v,(i.scaleY??128)*v,(i.scaleZ??128)*v),m=(e.x+e.sizex/2)*ye,h=(e.z+e.sizez/2)*ye,g=new tt().setFromAxisAngle(Lt,e.rotation/2*Math.PI);if(e.rotation%2==1){let y=p.x;p.x=p.z,p.z=y}if(i.mirror&&(p.z*=-1),l.add(new Be(m,0,h)),n&&(l.y-=.2*ye),e.placement&&(l.add(new Be().set(e.placement.translateX??0,-(e.placement.translateY??0),e.placement.translateZ??0)),e.placement.scale&&p.multiplyScalar((e.placement.scale??128)/128),(e.placement.scaleX||e.placement.scaleY||e.placement.scaleZ)&&p.multiply(new Be().set((e.placement.scaleX??128)/128,(e.placement.scaleY??128)/128,(e.placement.scaleZ??128)/128)),e.placement.rotation)){let y=30517578125e-15,E=new tt(-e.placement.rotation[0]*y,e.placement.rotation[1]*y,-e.placement.rotation[2]*y,e.placement.rotation[3]*y);g.premultiply(E)}let d=typeof i.probably_morphCeilingOffset<"u",a=d||!!i.probably_morphFloor,o={translate:l,rotation:g,scale:p,level:e.plane,placementMode:d?"followfloorceiling":a?"followfloor":"simple",scaleModelHeightOffset:i.probably_morphCeilingOffset??0,originx:m,originz:h},f={modeltype:"location",isclickable:!1,modelgroup:n?`mini_objects${e.resolvedlocid==e.locid&&e.location.probably_animation==null?e.visualLevel:0}`:`objects${e.visualLevel}`,locationid:e.locid,worldx:e.x,worldz:e.z,rotation:e.rotation,mirror:!!i.mirror,isGroundDecor:s,level:e.visualLevel,locationInstance:e},x=(y,E)=>{if(!(n&&s)){if(i.models){for(let _ of i.models)if(_.type==y)for(let S of _.values)r.push({model:S,morph:E})}else if(i.models_05){for(let _ of i.models_05.models)if(_.type==y)for(let S of _.values)r.push({model:S,morph:E})}}};if(e.type==11)x(10,{...o,rotation:new tt().setFromAxisAngle(Lt,Math.PI/4).premultiply(o.rotation)});else if(e.type==8||e.type==7||e.type==6){if(e.type==6||e.type==8){let y=ye*.6,E=Math.PI/4,_=new tt().setFromAxisAngle(Lt,E).premultiply(o.rotation);x(4,{...o,rotation:_,translate:new Be(y,0,0).applyQuaternion(_).add(o.translate)})}if(e.type==7||e.type==8){let y=ye*.5,E=Math.PI/4*5,_=new tt().setFromAxisAngle(Lt,E).premultiply(o.rotation);x(4,{...o,rotation:_,translate:new Be(y,0,0).applyQuaternion(_).add(o.translate)})}}else if(e.type==2)x(2,{...o,scale:new Be(1,1,-1).multiply(o.scale)}),x(2,{...o,rotation:new tt().setFromAxisAngle(Lt,Math.PI/2).premultiply(o.rotation)});else if(e.type==5){let y=ye/6;x(4,{...o,translate:new Be(y,0,0).applyQuaternion(o.rotation).add(o.translate)})}else x(e.type,o);return{models:r,mods:u,extras:f}}async function pu(t,e,n,r,i,s=!1){let u=[],c=await Promise.all(n.map(l=>fu(t,l.id)));for(let l=0;l<n.length;l++){let v=n[l],{morphedloc:p,rawloc:m,resolvedid:h}=c[l];if(p)for(let g of v.uses){let d=e.getTile(g.x+r,g.y+i,g.plane);if(!d)continue;let a=p.width??1,o=p.length??1;g.rotation%2==1&&([a,o]=[o,a]);let f=d.effectiveVisualLevel;for(let y=0;y<o;y++)for(let E=0;E<a;E++){let _=e.getTile(g.x+r+E,g.y+i+y,g.plane);_&&_.effectiveVisualLevel>f&&(f=_.effectiveVisualLevel)}u.push({location:p,locid:v.id,resolvedlocid:h,placement:g.extra,sizex:a,sizez:o,x:g.x+r,z:g.y+i,type:g.type,rotation:g.rotation,plane:g.plane,visualLevel:f,effectiveLevel:d.effectiveLevel,forceVisible:!!(d.settings&8)});const x=[9,10,11,12,13,14,15,16,17,18,19,20,21];if(s&&!m.probably_nocollision)for(let y=0;y<o;y++)for(let E=0;E<a;E++){let _=e.getTile(g.x+r+E,g.y+i+y,d.effectiveLevel);if(_){let S=_.effectiveCollision;g.type==22&&m.maybe_blocks_movement&&(S.walk[0]=!0),g.type==0?(S.walk[1+g.rotation]=!0,m.maybe_allows_lineofsight||(S.sight[1+g.rotation]=!0)):g.type==2?(S.walk[1+g.rotation]=!0,S.walk[1+(g.rotation+1)%4]=!0,m.maybe_allows_lineofsight||(S.sight[1+g.rotation]=!0,S.sight[1+(g.rotation+1)%4]=!0)):g.type==1||g.type==3?(S.walk[5+g.rotation]=!0,m.maybe_allows_lineofsight||(S.sight[5+g.rotation]=!0)):x.includes(g.type)&&(S.walk[0]=!0,m.maybe_allows_lineofsight||(S.sight[0]=!0))}}}}return u}function mu(t,e,n,r=!1){const i=e.xsize*e.zsize*5*6*2;let s=0,u=12,c=16;const l=c/4|0,v=c;let[p,m]=jt(c*i*3),[h,g]=jt(i*3*4,"index"),d=new Uint32Array(h),a=new Float32Array(p),o=new Uint8Array(p),f=e.x*ye,x=e.z*ye,y=0,E=0,_=(N,F,P,U,O)=>{const V=y*l+s,J=y*v+u,z=(r?N.y:N.playery00)*(1-F)*(1-U),X=(r?N.y01:N.playery01)*F*(1-U),Y=(r?N.y10:N.playery10)*(1-F)*U,W=(r?N.y11:N.playery11)*F*U;return a[V+0]=N.x+F*ye-f,a[V+1]=z+X+Y+W+P*ye,a[V+2]=N.z+U*ye-x,o[J+0]=O[0],o[J+1]=O[1],o[J+2]=O[2],o[J+3]=O[3],y++},S=(N,F,P,U,O,V,J,z)=>{let X=_(N,F,P,U,z),Y=_(N,F+O,P,U,z),W=_(N,F,P+V,U,z),q=_(N,F+O,P+V,U,z),re=_(N,F,P,U+J,z),xe=_(N,F+O,P,U+J,z),de=_(N,F,P+V,U+J,z),be=_(N,F+O,P+V,U+J,z);d[E++]=X,d[E++]=q,d[E++]=Y,d[E++]=X,d[E++]=W,d[E++]=q,d[E++]=Y,d[E++]=be,d[E++]=xe,d[E++]=Y,d[E++]=q,d[E++]=be,d[E++]=X,d[E++]=de,d[E++]=W,d[E++]=X,d[E++]=re,d[E++]=de,d[E++]=W,d[E++]=be,d[E++]=q,d[E++]=W,d[E++]=de,d[E++]=be,d[E++]=X,d[E++]=xe,d[E++]=re,d[E++]=X,d[E++]=Y,d[E++]=xe,d[E++]=re,d[E++]=be,d[E++]=de,d[E++]=re,d[E++]=xe,d[E++]=be};for(let N=e.z;N<e.z+e.zsize;N++)for(let F=e.x;F<e.x+e.xsize;F++){let P=t.getTile(F,N,n),U=r?P?.rawCollision:P?.effectiveCollision;if(P&&U){if(U.walk[0]){let O=U.sight[0]?1.8:.3;S(P,.05,0,.05,.9,O,.9,[100,50,50,255])}if(r&&U.settings&30){let O=0,V=0,J=0;U.settings&2&&(O+=0,V+=127,J+=127),U.settings&4&&(O+=0,V+=127,J+=0),U.settings&8&&(O+=127,V+=0,J+=0),U.settings&-16&&(O+=0,V+=0,J+=127),S(P,-.05,-.05,0,1.1,.25,1.1,[O,V,J,255])}for(let O=0;O<4;O++){if(U.walk[1+O]){let V=U.sight[1+O]?2:.5,J=[255,60,60,255];O==0&&S(P,0,0,0,.15,V,1,J),O==1&&S(P,0,0,.85,1,V,.15,J),O==2&&S(P,.85,0,0,.15,V,1,J),O==3&&S(P,0,0,0,1,V,.15,J)}if(U.walk[5+O]){let V=U.sight[5+O]?2:.5,J=[255,60,60,255];O==0&&S(P,0,0,.85,.15,V,.15,J),O==1&&S(P,.85,0,.85,.15,V,.15,J),O==2&&S(P,.85,0,0,.15,V,.15,J),O==3&&S(P,0,0,0,.15,V,.15,J)}}}}let T={modeltype:"overlay",isclickable:!1,modelgroup:(r?"collision-raw":"collision")+n,level:n},A=m(y*c),I=g(E*4);return{pos:new Float32Array(A),color:new Uint8Array(A),indices:new Uint32Array(I),posstride:l,colorstride:v,posoffset:s,coloroffset:u,extra:T}}function yi(t,e,n,r=!1){let{color:i,indices:s,pos:u,coloroffset:c,colorstride:l,posoffset:v,posstride:p,extra:m}=mu(t,e.tilerect,n,r);if(s.length==0)return;let h=new nr;h.setAttribute("position",new er(new At(u,p),3,v,!1)),h.setAttribute("color",new er(new At(i,l),4,c,!0)),h.index=new Xe(s,1,!1);let g=new rn({shininess:0});g.flatShading=!0,dn(g,1),g.vertexColors=!0;let d=new qt(h,g);return d.userData=m,d.name=`${r?"raw ":""}collision ${e.mapsquarex},${e.mapsquarez} (${n})`,d}async function bi(t,e,n=!1){let r=new Map,i=new Map,s=new Map,u=e.map(p=>du(t.engine,p,n)),c=[],l=new Set;for(let p of u)for(let m of p.models)l.has(m.model)||(l.add(m.model),c.push(t.getModelData(m.model).catch(h=>(console.warn("ignoring missing model",m.model,"in loc",p.extras.locationInstance.location.name??p.extras.locationid),{bonecount:0,skincount:0,miny:0,maxy:0,meshes:[]})).then(h=>r.set(m.model,h))));await Promise.all(c);for(let p=0;p<u.length;p++){let m=u[p],h=0,g=0;for(let a of m.models){let o=r.get(a.model);h=Math.min(o.miny,h),g=Math.max(o.maxy,g)}let d=[];for(let a of m.models){let o=r.get(a.model);for(let f of o.meshes){let x=mn(f,m.mods),y=uo(x.materialId,x.hasVertexAlpha,n),E=i.get(m.extras.modelgroup);E||(E=new Map,i.set(m.extras.modelgroup,E));let _=Li(E,y,()=>({materialId:x.materialId,material:null,hasVertexAlpha:x.hasVertexAlpha,minimapVariant:n,models:[],groupid:m.extras.modelgroup,overlayIndex:0})),S={model:x,morph:a.morph,miny:h,maxy:g,extras:m.extras};d.push(S),_.models.push(S)}}d.length!=0&&s.set(e[p],d)}let v=[];for(let p of i.values())v.push(...p.values());return{byMaterial:v,byLogical:s}}class Sn extends qt{renderSections=[];constructor(e,n){super(e,n)}cloneSection(e){let n=new nr;for(let u in this.geometry.attributes){let c=this.geometry.attributes[u],l=new Xe(c.array.slice(e.startvertex*c.itemSize,e.endvertex*c.itemSize),c.itemSize,c.normalized);n.setAttribute(u,l)}let r=this.geometry.index.array.slice(e.startindex,e.endindex);for(let u=0;u<r.length;u++)r[u]-=e.startvertex;n.setIndex(new Xe(r,1));let i=new Sn(n,this.material),s={mesh:i,startindex:0,endindex:e.endindex-e.startindex,startvertex:0,endvertex:e.endvertex-e.startvertex,hidden:!1};return i.renderSections.push(s),s}setSectionHide(e,n){if(e.hidden==n)return;e.hidden=n;let r=this.geometry.drawRange.count;if(this.geometry.drawRange.start!=0)throw new Error("unexpected");if(!this.geometry.index)throw new Error("unexpected");isFinite(r)||(r=this.geometry.index.count);let i=e.endindex-e.startindex,s=n?r-i:r;if(n){let v=this.geometry.index.array.slice(e.startindex,e.endindex);this.geometry.index.array.copyWithin(e.startindex,e.endindex,r),this.geometry.index.array.set(v,s)}else{let v=this.geometry.index.array.slice(e.startindex,e.endindex);this.geometry.index.array.copyWithin(r+i,r,e.startindex),this.geometry.index.array.set(v,s)}let u=n?e.startindex:s,c=n?r:e.endindex,l=n?-i:i;for(let v=0;v<this.renderSections.length;v++){let p=this.renderSections[v];p!=e&&(p.startindex<u||p.startindex>=c||(p.startindex+=l,p.endindex+=l))}e.startindex=s,e.endindex=s+i,this.geometry.setDrawRange(0,r+l),this.geometry.index.needsUpdate=!0}}function gu(t,e,n,r,i,s){let u=e.models.reduce((_,S)=>_+S.model.vertexend-S.model.vertexstart,0),c=e.models.reduce((_,S)=>_+S.model.indices.count,0),l=e.models.reduce((_,S)=>_+ +S.model.hasVertexAlpha,0);if(l!=0&&l!=e.models.length)throw new Error("all meshes are expected to have same vertexAlpha setting");let v=l!=0,p=0,m=0,h=new Xe(new Float32Array(u*3),3),g=new Xe(new Float32Array(u*2),2),d=new Xe(new Uint8Array(u*(v?4:3)),v?4:3,!0),a=new Xe(new Int8Array(u*3),3,!0),o=new Xe(u>65535?new Uint32Array(c):new Uint16Array(c),1),f=new nr;f.setAttribute("position",h),f.setAttribute("normal",a),f.setAttribute("color",d),f.setAttribute("uv",g),f.setIndex(o);let x=new Sn(f),y=[];for(let _ of e.models){let S=_.model,T=ca(_.morph,n,r),A=S.vertexend-S.vertexstart,I=S.indices.count;y.push(m);let N={mesh:x,startindex:m,endindex:m+I,startvertex:p,endvertex:p+A,hidden:!1};x.renderSections.push(N),_.extras.modeltype=="location"&&Li(s,_.extras.locationInstance,()=>[]).push(N);{let F=p-S.vertexstart,P=S.indices;if(T.determinant()<0)for(let U=0;U<I;U+=3){let O=m+U;o.setX(O+0,F+P.getX(U+0)),o.setX(O+1,F+P.getX(U+2)),o.setX(O+2,F+P.getX(U+1))}else for(let U=0;U<I;U+=3){let O=m+U;o.setX(O+0,F+P.getX(U+0)),o.setX(O+1,F+P.getX(U+1)),o.setX(O+2,F+P.getX(U+2))}}su(S.attributes.pos,_.morph,t,_.maxy-_.miny,n,r,h,p,S.vertexstart,S.vertexend);{let F=new Be;if(S.attributes.normals){let P=S.attributes.normals,[U,O,V]=pt(P),[J,z,X]=pt(a),Y=S.vertexstart*V+O,W=p*X+z,q=new Ke().makeRotationFromQuaternion(_.morph.rotation);for(let re=0;re<A;re++){let xe=W+re*X,de=Y+re*V;F.set(U[de+0],U[de+1],U[de+2]),F.applyMatrix4(q),J[xe+0]=Math.round(F.x),J[xe+1]=Math.round(F.y),J[xe+2]=Math.round(F.z)}}else Ki(o,h,a,m,m+I)}{let[F,P,U]=pt(d),O=p*U+P;if(S.attributes.color){let[V,J,z]=pt(S.attributes.color),X=S.vertexstart*z+J;if(v)for(let Y=0;Y<A;Y++){let W=O+Y*U,q=X+Y*z;F[W+0]=V[q+0],F[W+1]=V[q+1],F[W+2]=V[q+2],F[W+3]=V[q+3]}else for(let Y=0;Y<A;Y++){let W=O+Y*U,q=X+Y*z;F[W+0]=V[q+0],F[W+1]=V[q+1],F[W+2]=V[q+2]}}else for(let V=0;V<A;V++){let J=O+V*U;F[J+0]=1,F[J+1]=1,F[J+2]=1,v&&(F[J+3]=1)}}{let F=S.attributes.texuvs;if(F)for(let P=0;P<A;P++)g.setXY(p+P,F.getX(S.vertexstart+P),F.getY(S.vertexstart+P));else for(let P=0;P<A;P++)g.setXY(p+P,0,0)}p+=A,m+=I}gn(x,i,e.minimapVariant);let E={modeltype:"locationgroup",modelgroup:e.groupid,isclickable:!0,subranges:y,searchPeers:!0,subobjects:e.models.map(_=>_.extras)};return x.renderOrder=e.overlayIndex,x.userData=E,x.matrixAutoUpdate=!1,x.updateMatrix(),x.name="merged locs",x}function xu(t,e,n){const r=e.tilerect.xsize*e.tilerect.zsize*t.levels,i=6,s=0,u=3,c=24,l=28,v=32,p=18,m=52;let[h,g]=jt(r*m*i),[d,a]=jt(r*i*4,"index"),o=new Uint32Array(d),f=new Float32Array(h),x=new Uint8Array(h);const y=m/4|0,E=m|0;let _=0,S=0;const T=e.tilerect.x*ye,A=e.tilerect.z*ye;let I=[],N=[],F=1/0,P=1/0,U=1/0,O=-1/0,V=-1/0,J=-1/0;const z=(ae,ne,te,oe,le)=>{const j=_*y+s,ee=_*E+c,se=(1-ne)*(1-te),ce=ne*(1-te),Ie=(1-ne)*te,Me=ne*te,Ae=ae.x+ne*ye-T,Ue=ae.z+te*ye-A,fe=ae.playery00*se+ae.playery01*ce+ae.playery10*Ie+ae.playery11*Me;F=Math.min(F,Ae),P=Math.min(P,fe),U=Math.min(U,Ue),O=Math.max(O,Ae),V=Math.max(V,fe),J=Math.max(J,Ue),f[j+0]=Ae,f[j+1]=fe,f[j+2]=Ue;let Z=oe[le].color[0],ue=oe[le].color[1],$=oe[le].color[2];return x[ee+0]=Z,x[ee+1]=ue,x[ee+2]=$,x[ee+3]=255,_++};let X=[{material:-1,materialTiling:128,materialBleedpriority:0,color:[0,0,0]}],Y=[{material:-1,materialTiling:128,materialBleedpriority:0,color:[255,0,255]}];for(let ae of[!0,!1])for(let ne=0;ne<e.tilerect.zsize;ne++)for(let te=0;te<e.tilerect.xsize;te++){let oe=t.getTile(e.tilerect.x+te,e.tilerect.z+ne,n),le=oe;for(let se=n+1;se<e.levelcount;se++){let ce=t.getTile(e.tilerect.x+te,e.tilerect.z+ne,se);ce&&ce.effectiveLevel==n&&(le=ce)}if(!oe||!le)continue;let j=!!oe.effectiveCollision?.walk[0],ee=j?Y:X;j==ae&&(o[S++]=z(oe,0,0,ee,0),o[S++]=z(oe,0,1,ee,0),o[S++]=z(oe,1,1,ee,0),o[S++]=z(oe,0,0,ee,0),o[S++]=z(oe,1,1,ee,0),o[S++]=z(oe,1,0,ee,0))}let W={modelgroup:"walkmesh"+n,modeltype:"floorhidden",mapsquarex:e.mapsquarex,mapsquarez:e.mapsquarez,level:n,isclickable:!0,searchPeers:!1,subobjects:I,subranges:N},q=g(_*m),re=a(S*4),xe=new Float32Array(q),de=new Uint8Array(q),be=new Uint16Array(q);return{chunk:e,level:n,tileinfos:I,mode:"walkmesh",iswater:!1,vertexstride:m,indices:new Uint32Array(re),nvertices:_,atlas:null,pos:{src:xe,offset:s,vecsize:3,normalized:!1},normal:{src:xe,offset:u,vecsize:3,normalized:!1},color:{src:de,offset:c,vecsize:4,normalized:!0},_RA_FLOORTEX_UV0:{src:be,offset:p+0,vecsize:2,normalized:!0},_RA_FLOORTEX_UV1:{src:be,offset:p+2,vecsize:2,normalized:!0},_RA_FLOORTEX_UV2:{src:be,offset:p+4,vecsize:2,normalized:!0},_RA_FLOORTEX_WEIGHTS:{src:de,offset:v,vecsize:3,normalized:!0},_RA_FLOORTEX_USESCOLOR:{src:de,offset:l,vecsize:3,normalized:!0},posmax:[O,V,J],posmin:[F,P,U],extra:W}}function Dt(t,e,n,r,i=!1,s="default",u=!1){const c=s=="wireframe",l=s=="worldmap",v=s=="minimap",p=e.tilerect.xsize*e.tilerect.zsize*t.levels,m=8,h=0,g=3,d=24,a=28,o=32,f=18,x=52;let[y,E]=jt(p*x*m),[_,S]=jt(p*m*4,"index"),T=new Uint32Array(_),A=new Float32Array(y),I=new Float32Array(y),N=new Uint8Array(y),F=new Uint8Array(y),P=new Uint8Array(y),U=new Uint16Array(y);const O=x/4|0,V=x/4|0,J=x|0,z=x|0,X=x|0,Y=x/2|0;let W=0,q=0;const re=e.tilerect.x*ye,xe=e.tilerect.z*ye;let de=[],be=[],ae=1/0,ne=1/0,te=1/0,oe=-1/0,le=-1/0,j=-1/0;const ee=(fe,Z,ue,$,we)=>{const Ve=W*O+h,_e=W*V+g,Se=W*J+d,D=W*X+o,b=W*z+a,w=W*Y+f,C=(1-Z)*(1-ue),k=Z*(1-ue),L=(1-Z)*ue,G=Z*ue,ge=fe.x+Z*ye-re,Te=fe.z+ue*ye-xe,Ce=u?fe.waterProps.y00*C+fe.waterProps.y01*k+fe.waterProps.y10*L+fe.waterProps.y11*G:fe.y*C+fe.y01*k+fe.y10*L+fe.y11*G,Fe=u?0:fe.normalX*C+(fe.next01??fe).normalX*k+(fe.next10??fe).normalX*L+(fe.next11??fe).normalX*G,Ee=u?0:fe.normalZ*C+(fe.next01??fe).normalZ*k+(fe.next10??fe).normalZ*L+(fe.next11??fe).normalZ*G;ae=Math.min(ae,ge),ne=Math.min(ne,Ce),te=Math.min(te,Te),oe=Math.max(oe,ge),le=Math.max(le,Ce),j=Math.max(j,Te),A[Ve+0]=ge,A[Ve+1]=Ce,A[Ve+2]=Te,I[_e+0]=Fe,I[_e+1]=Math.sqrt(1-Fe*Fe-Ee*Ee),I[_e+2]=Ee;let Et=$[we].color[0],_t=$[we].color[1],St=$[we].color[2];v&&(Et=20+.656*Et,_t=28+.577*_t,St=23+.604*St,u&&(Et=Math.pow(Et/255,2.2)*255,_t=Math.pow(_t/255,2.2)*255,St=Math.pow(St/255,2.2)*255)),N[Se+0]=Et,N[Se+1]=_t,N[Se+2]=St,N[Se+3]=255;for(let M=0;M<3;M++)if(U[w+2*M+0]=0,U[w+2*M+1]=0,P[D+M]=0,F[b+M]=0,M<$.length){const R=$[M];let H,me=0;if(R&&R.material!=-1){let Ne=t.engine.getMaterialData(R.material);me=Ne.baseColorFraction,Ne.textures.diffuse&&(H=r.map.get(Ne.textures.diffuse))}if(H){let Ne=R.materialTiling/128,Ht=fe.x/ye%Ne,Br=fe.z/ye%Ne;const An=65536;U[w+2*M+0]=(H.u+H.usize*(Ht+Z)/Ne)*An,U[w+2*M+1]=(H.v+H.vsize*(Br+ue)/Ne)*An,P[D+M]=M==we?255:0,F[b+M]=255-me*255}}return W++};for(let fe=n;fe<e.levelcount;fe++)if(!(c&&fe!=n))for(let Z=0;Z<e.tilerect.zsize;Z++)for(let ue=0;ue<e.tilerect.xsize;ue++){let $=t.getTile(e.tilerect.x+ue,e.tilerect.z+Z,fe);if(!$||!c&&$.effectiveVisualLevel!=n)continue;let we=$.shape,Ve=$.next01&&$.next10&&$.next11;if(we==Qr&&Ve){let _e=Math.abs($.underlayprops.color[0]-$.next11.underlayprops.color[0])+Math.abs($.underlayprops.color[1]-$.next11.underlayprops.color[1])+Math.abs($.underlayprops.color[2]-$.next11.underlayprops.color[2]),Se=Math.abs($.next01.underlayprops.color[0]-$.next10.underlayprops.color[0])+Math.abs($.next01.underlayprops.color[1]-$.next10.underlayprops.color[1])+Math.abs($.next01.underlayprops.color[2]-$.next10.underlayprops.color[2]);_e<Se&&(we=ua)}if(i&&(de.push({tile:$.debug_raw,x:ue,z:Z,level:fe,tilenxt:$.debug_nxttile,underlaycolor:$.originalUnderlayColor}),be.push(q)),u){if($.waterProps){let _e=$.waterProps.props,Se=[_e,_e,_e],D=$.waterProps.shape;for(let b=2;b<D.length;b++){let w=D[0],C=D[b-1],k=D[b];!w||!C||!k||(T[q++]=ee($,w.subx,w.subz,Se,0),T[q++]=ee($,C.subx,C.subz,Se,1),T[q++]=ee($,k.subx,k.subz,Se,2))}}}else{if(Ve&&we.overlay.length!=0){let _e=$.rawOverlay,Se=_e?.color??(_e&&typeof _e.materialbyte<"u"?[255,255,255]:[255,0,255]),D=$.overlayVisible;if(l&&!D&&_e?.secondary_colour&&(Se=_e.secondary_colour,D=!0),D||c){let b;if(!l)b=we.overlay.map(w=>{if($.bleedsOverlayMaterial){let C=$;if(w.nextx&&w.nextz?C=$.next11:w.nextx?C=$.next01:w.nextz&&(C=$.next10),C)return C.vertexprops[w.subvertex]}else return $.overlayprops;return Dr});else{let w={material:0,materialTiling:128,materialBleedpriority:0,color:Se};b=Array(we.overlay.length).fill(w)}for(let w=2;w<we.overlay.length;w++){let C=we.overlay[0],k=we.overlay[w-1],L=we.overlay[w];if(!C||!k||!L)continue;let G=[b[0],b[w-1],b[w]];T[q++]=ee($,C.subx,C.subz,G,0),T[q++]=ee($,k.subx,k.subz,G,1),T[q++]=ee($,L.subx,L.subz,G,2)}}}if(Ve&&we.underlay.length!=0&&($.underlayVisible||c)){let _e;if(!l)_e=we.underlay.map(Se=>{let D=$;if(Se.nextx&&Se.nextz?D=$.next11:Se.nextx?D=$.next01:Se.nextz&&(D=$.next10),D){let b=D.vertexprops[Se.subvertex];return b.material==-1?{...b,material:$.underlayprops.material}:b}return Dr});else{let Se={material:0,materialTiling:128,materialBleedpriority:-1,color:$.underlayprops.color};_e=Array(we.underlay.length).fill(Se)}for(let Se=2;Se<we.underlay.length;Se++){let D=we.underlay[0],b=we.underlay[Se-1],w=we.underlay[Se];if(!D||!b||!w)continue;let C=[_e[0],_e[Se-1],_e[Se]];T[q++]=ee($,D.subx,D.subz,C,0),T[q++]=ee($,b.subx,b.subz,C,1),T[q++]=ee($,w.subx,w.subz,C,2)}}}}let se={modelgroup:(s=="wireframe"?"floorhidden":s=="worldmap"?"map":s=="minimap"?"mini_floor":"floor")+n,modeltype:c?"floorhidden":"floor",mapsquarex:e.mapsquarex,mapsquarez:e.mapsquarez,level:n,isclickable:!0,searchPeers:!1,subobjects:de,subranges:be},ce=E(W*x),Ie=S(q*4),Me=new Float32Array(ce),Ae=new Uint8Array(ce),Ue=new Uint16Array(ce);return{chunk:e,level:n,tileinfos:de,mode:s,iswater:u,vertexstride:x,indices:new Uint32Array(Ie),nvertices:W,atlas:s!="worldmap"?r:null,pos:{src:Me,offset:h,vecsize:3,normalized:!1},normal:{src:Me,offset:g,vecsize:3,normalized:!1},color:{src:Ae,offset:d,vecsize:4,normalized:!0},_RA_FLOORTEX_UV0:{src:Ue,offset:f+0,vecsize:2,normalized:!0},_RA_FLOORTEX_UV1:{src:Ue,offset:f+2,vecsize:2,normalized:!0},_RA_FLOORTEX_UV2:{src:Ue,offset:f+4,vecsize:2,normalized:!0},_RA_FLOORTEX_WEIGHTS:{src:Ae,offset:o,vecsize:3,normalized:!0},_RA_FLOORTEX_USESCOLOR:{src:Ae,offset:a,vecsize:3,normalized:!0},posmax:[oe,le,j],posmin:[ae,ne,te],extra:se}}function vu(t,e){if(e.nvertices==0)return;let n=u=>{let c=new At(u.src,e.vertexstride/u.src.BYTES_PER_ELEMENT);return new er(c,u.vecsize,u.offset,u.normalized)},r=new nr;r.setAttribute("position",n(e.pos)),r.setAttribute("color",n(e.color)),r.setAttribute("normal",n(e.normal)),r.setAttribute("texcoord_0",n(e._RA_FLOORTEX_UV0)),r.setAttribute("texcoord_1",n(e._RA_FLOORTEX_UV1)),r.setAttribute("texcoord_2",n(e._RA_FLOORTEX_UV2)),r.setAttribute("color_1",n(e._RA_FLOORTEX_WEIGHTS)),r.setAttribute("color_2",n(e._RA_FLOORTEX_USESCOLOR));let i=e.mode!="worldmap"?new rn({shininess:0}):new Wr;if(i.vertexColors=!0,e.mode=="walkmesh"&&dn(i,1),e.mode=="wireframe"&&(i.wireframe=!0),e.atlas){let u=e.atlas.convertToThreeTexture();e.mode=="minimap"?e.iswater?i=Ql(u):i=Zl(u):(Ji(i),i.map=u)}let s=new qt(r,i);return s.userData=e.extra,s.name=`floor ${e.chunk.mapsquarex},${e.chunk.mapsquarez} (${e.level})`,s}const yu=["material","model","item","loc","mapsquare","sequence","skeleton","frameset","animgroup","npc","framebase","texture","enum","overlay","underlay"],bu=Object.fromEntries(yu.map((t,e)=>[t,e]));function da(t,e,n){let r=t.mapsquarex+t.mapsquarez*_n;n("mapsquare",r,t.chunkfilehash,t.chunkfileversion);for(let u of t.rawlocs)e("loc",u.id,"mapsquare",r);let i=new Set,s=new Set;for(let u of t.tiles)u.overlay!=null&&i.add(u.overlay),u.underlay!=null&&s.add(u.underlay);i.forEach(u=>e("overlay",u,"mapsquare",r)),s.forEach(u=>e("underlay",u,"mapsquare",r))}const wu=async(t,e,n,r)=>{await ao(20,function*(){let i=r?.area??{x:0,z:0,xsize:100,zsize:200};for(let s=i.z;s<i.z+i.zsize;s++)for(let u=i.x;u<i.x+i.xsize;u++)yield fa(t,u,s)},i=>{i&&da(i,e,n)})};function $r(t){return t?t[0]<<16|t[1]<<8|t[2]:16711935}function pa(t,e){return e=ct(+!!t.bleedToUnderlay,e),e=ct(t.bleedpriority??-1,e),e=ct(t.materialbyte??t.material??-1,e),e=ct($r(t.color),e),e=ct($r(t.secondary_colour),e),e=ct($r(t.tertiary_colour),e),e=ct(t.material_tiling??-1,e),e}const Eu=async(t,e,n)=>{for(let[r,i]of t.mapUnderlays.entries()){if(!i)continue;let s=pa(i,0);n("underlay",r,s,0),i.material&&e("material",i.material,"underlay",r)}},_u=async(t,e,n)=>{for(let[r,i]of t.mapOverlays.entries()){if(!i)continue;let s=pa(i,0);i.material&&e("material",i.material,"overlay",r),n("overlay",r,s,0)}},Su=async(t,e,n)=>{if(t.classicData)for(let[r,i]of t.classicData.objects.entries()){let s=He(Buffer.from(JSON.stringify(i)));n("loc",r,s,0),i.model.id!=null&&e("model",i.model.id,"loc",r)}else for await(let{id:r,file:i}of Dn(t,B.objects)){n("loc",r,He(i),0);let s=K.object.read(i,t);if(s.probably_animation&&e("sequence",s.probably_animation,"loc",r),s.models)for(let u of s.models)for(let c of u.values)e("model",c,"loc",r);if(s.models_05)for(let u of s.models_05.models)for(let c of u.values)e("model",c,"loc",r);if(s.morphs_1||s.morphs_2){let u=ha(s);u!=-1&&e("loc",u,"loc",r)}}},Du=async(t,e,n)=>{if(t.classicData)for(let[r,i]of t.classicData.items.entries()){let s=He(Buffer.from(JSON.stringify(i)));n("item",r,s,0)}else for await(let{id:r,file:i}of Dn(t,B.items)){n("item",r,He(i),0);let s=K.item.read(i,t),u=[].concat(s.baseModel,s.maleModels_0?.id,s.maleModels_1,s.maleModels_2,s.femaleModels_0?.id,s.femaleModels_1,s.femaleModels_2,s.maleHeads_0,s.maleHeads_1,s.femaleHeads_0,s.femaleHeads_1).filter(c=>typeof c=="number");for(let c of u)e("model",c,"item",r);s.noteTemplate&&e("item",s.noteTemplate,"item",r)}},Au=async(t,e,n)=>{if(t.getBuildNr()<526)return;let r=await t.getArchiveById(B.config,Re.animgroups);for(let i of r){n("animgroup",i.fileid,He(i.buffer),0);let s=K.animgroupConfigs.read(i.buffer,t),u=s.unknown_26??s.baseAnims?.idle;u&&e("sequence",u,"animgroup",i.fileid)}},Cu=async(t,e,n)=>{if(t.getBuildNr()<=it){let r=await t.getArchiveById(nt.data,bt.textures);for(let i of r.map(s=>s.fileid))n("material",i,0,0),e("texture",i,"material",i)}else if(t.getBuildNr()<=471){let r=await t.getArchiveById(B.texturesOldPng,0);for(let i of r){n("material",i.fileid,He(i.buffer),0);let s=K.oldproctexture.read(i.buffer,t);e("texture",s.spriteid,"material",i.fileid)}}else if(!(t.getBuildNr()<759)){let r=await t.getArchiveById(B.materials,0);for(let i of r){n("material",i.fileid,He(i.buffer),0);let s=Oi(i.buffer,i.fileid,t);for(let u of Object.values(s.textures))typeof u=="number"&&e("texture",u,"material",i.fileid)}}},Tu=async(t,e,n)=>{if(t.classicData)for(let[r,i]of t.classicData.npcs.entries()){let s=He(Buffer.from(JSON.stringify(i)));n("npc",r,s,0)}else for await(let{id:r,file:i}of Dn(t,B.npcs)){n("npc",r,He(i),0);let s=K.npc.read(i,t);if(s.animation_group&&e("animgroup",s.animation_group,"npc",r),s.models)for(let u of s.models)e("model",u,"npc",r);if(s.headModels)for(let u of s.headModels)e("model",u,"npc",r)}};async function Fu(t,e){let n=new Map,r=new Map,i=new Map,s=(a,o,f,x)=>{let y=`${a}-${o}`,E=`${f}-${x}`,_=r.get(E);_||(_=[],r.set(E,_)),_.indexOf(y)==-1&&_.push(y);let S=n.get(y);S||(S=[],n.set(y,S)),S.indexOf(E)==-1&&S.push(E)},u=(a,o,f,x)=>{let y=`${a}-${o}`;i.set(y,f)},c=async(a,o)=>{try{console.log(`starting ${a.name}`);let f=Date.now();await a(t,s,u,o),console.log(`finished ${a.name}, duration ${((Date.now()-f)/1e3).toFixed(1)}`)}catch(f){throw f}},l=[Su,Du,Au,Cu,Tu,_u,Eu];for(let a of l)await c(a,e);let v=a=>c(wu,a),p=(a,o)=>`${a}-${o}`,m=(a,o=[])=>{let f=i.get(a)??0,x=`${a}-${f}`;if(!o.includes(x)){o.push(x);let y=r.get(a);if(y)for(let E of y)m(E,o)}return o},h=(a,o=0)=>{let f=i.get(a)??0,[x,y]=a.split("-"),E=o;E=ct(bu[x],E),E=ct(+y,E),E=ct(+f,E);let _=r.get(a);if(_)for(let S of _)E=h(S,E);return E};return{dependencyMap:r,dependentsMap:n,cascadeDependencies:m,makeDeptName:p,hashDependencies:h,hasEntry:(a,o)=>i.has(p(a,o)),insertMapChunk:a=>{da(a,s,u);let o=a.mapsquarex+a.mapsquarez*_n;return p("mapsquare",o)},preloadChunkDependencies:v}}const ku=`#version 460\r
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
}`,Iu=`#version 460\r
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
}`,wi={uModelMatrix:"#define uModelMatrix modelMatrix",uViewProjMatrix:"#define uViewProjMatrix (projectionMatrix*viewMatrix)",uViewMatrix:"#define uViewMatrix viewMatrix",uProjectionMatrix:"#define uProjectionMatrix projectionMatrix",uCameraPosition:"#define uCameraPosition cameraPosition",aVertexPosition:"#define aVertexPosition position",aTextureUV:"#define aTextureUV uv",aVertexColour:"#define aVertexColour vec4(color.rgb,1.0)",aVertexNormal_FogProportion:"#define aVertexNormal_FogProportion vec4(normal,0.0)",gl_FragColor:"FragColor",attribute:"in",varying:"out"},Ei={UNIFORM_BUFFER_BEGIN:t=>`// UNIFORM_BUFFER_BEGIN(${t})`,UNIFORM_BUFFER_END:"// UNIFORM_BUFFER_END",TEXTURE_GRAD:""};function _i(t){return["#version 300 es","precision highp float;","precision mediump sampler2D;","#define fma(a,b,c) ((a)*(b)+(c))","#define texture2D texture","#define textureCube texture","#define texture2DLod textureLod","#define textureCubeLod textureLod","#define texture2DGrad textureGrad"].join(`
`)+`

`+t.replace(/^#version ([\w ]+)$/m,"// original version $1").replace(/\bprecise\b/g,"highp")}function Si(t,e){return t.replace(/^((flat) )*(in|out|uniform|attribute|varying) ((highp|mediump|lowp) )*(float|vec\d|mat\d) ((\w|,\s*)+);$/mg,(n,r,i,s,u,c,l,v)=>v.split(/,\s*/g).map(p=>{let m=e[p];if(m!=null){let h=typeof m=="function"?m():m;return h=Array.isArray(h)?h.join(`
`):h+`
`,n.split(`
`).map(g=>`// ${g}`).join(`
`)+`
`+h}return`${r??""}${s} ${u??""}${l??""} ${p};`}).join(`
`))}function Di(t,e){return t.replace(/^#define (\w+)(\(.*?\))?($| (\\\r?\n|.)*$)/mg,(n,r)=>{let i=e[r];if(i!=null){let s=typeof i=="function"?i(n.match(/\((.*?)\)/)?.[1]||""):i;return s=Array.isArray(s)?s.join(`
`):s+`
`,n.split(`
`).map(u=>`// ${u}`).join(`
`)+`
`+s}return n})}function Bu(t,e){let n=_i(ku);n=Si(n,wi),n=Di(n,Ei);let r=_i(Iu);r=Si(r,wi),r=Di(r,Ei),r=`out vec4 FragColor;
`+r.replace(/\bgl_FragColor\b/g,"FragColor");const i={uTextureAtlas:{value:t},uTextureAnimationTime:{value:0},uSunDirection:{value:new Be(.5,.8,.2).normalize()},uAmbientColour:{value:new Cn(.2,.2,.2)},uSunColour:{value:new Cn(1,1,1)},uAlphaTestThreshold:{value:e.alphamode==="cutoff"?.5:.01},uAtlasMeta:{value:new wa(1,1,1,1)},uFade:{value:0},uInvSunDirection:{value:new Be(-.5,-.8,-.2).normalize()}};return new Tr({uniforms:i,vertexShader:n,fragmentShader:r,transparent:e.alphamode==="blend",side:Ea})}const ut=1e6,Oe={materialCube:ut+1,classicWall:ut+2,classicWallDiag:ut+3,classicRoof10:ut+10,classicRoof12:ut+12,classicRoof13:ut+13,classicRoof14:ut+14,classicRoof15:ut+15,classicRoof16:ut+16,classicRoof17:ut+17};class ma extends lo{hasOldModels=!1;hasNewModels=!1;materialArchive=new Map;materialCache=new Map;mapUnderlays=[];mapOverlays=[];mapMapscenes=[];mapMaplabels=[];legacyData=null;classicData=null;jsonSearchCache=new Map;dependencyGraph=null;static create(e){return new ma(e).preload()}constructor(e){super(e)}async getArchiveById(e,n){return super.getArchiveById(e,n)}async getFileById(e,n){return super.getFileById(e,n)}async preload(){if(this.getBuildNr()>it){for(let n of await this.getArchiveById(B.config,Re.mapunderlays))this.mapUnderlays[n.fileid]=K.mapsquareUnderlays.read(n.buffer,this.rawsource);for(let n of await this.getArchiveById(B.config,Re.mapoverlays))this.mapOverlays[n.fileid]=K.mapsquareOverlays.read(n.buffer,this.rawsource);if(this.getBuildNr()>=527)for(let n of await this.getArchiveById(B.config,Re.mapscenes))this.mapMapscenes[n.fileid]=K.mapscenes.read(n.buffer,this.rawsource);if(this.getBuildNr()>=548)for(let n of await this.getArchiveById(B.config,Re.maplabels))this.mapMaplabels[n.fileid]=K.maplabels.read(n.buffer,this.rawsource);if(this.getBuildNr()<=471)for(let n of await this.getArchiveById(B.texturesOldPng,0))this.materialArchive.set(n.fileid,n.buffer);else if(!(this.getBuildNr()<=498))if(this.getBuildNr()<=753){let n=await this.getFile(B.materials,0);this.materialArchive.set(0,n)}else for(let n of await this.getArchiveById(B.materials,0))this.materialArchive.set(n.fileid,n.buffer);let e=await this.getCacheIndex(B.index);this.hasNewModels=!!e[B.models],this.hasOldModels=!!e[B.oldmodels]}else if(this.getBuildNr()>ir){const{legacyPreload:e}=await Ze(async()=>{const{legacyPreload:r}=await Promise.resolve().then(()=>Yr);return{legacyPreload:r}},void 0);this.legacyData=await e(this);let n=this.legacyData.overlays.map(r=>K.mapsquareOverlays.read(r,this));this.mapOverlays=n,this.mapUnderlays=n,this.hasNewModels=!1,this.hasOldModels=!0}else{const{ClassicFileSource:e,classicConfig:n,classicGroups:r}=await Ze(async()=>{const{ClassicFileSource:u,classicConfig:c,classicGroups:l}=await Promise.resolve().then(()=>hn);return{ClassicFileSource:u,classicConfig:c,classicGroups:l}},void 0),{classicUnderlays:i,classicOverlays:s}=await Ze(async()=>{const{classicUnderlays:u,classicOverlays:c}=await Promise.resolve().then(()=>Kl);return{classicUnderlays:u,classicOverlays:c}},void 0);if(!(this.rawsource instanceof e))throw new Error("can only load classic caches from a classic source");this.classicData=await n(this.rawsource,this.getBuildNr()),this.mapUnderlays=i(),this.mapOverlays=await s(this),this.hasNewModels=!1,this.hasOldModels=!0}return this}async getDependencyGraph(){return this.dependencyGraph??=Fu(this,{lazyMapChunks:!0}),this.dependencyGraph}async getGameFile(e,n){return this.legacyData?this.legacyData[e][n]:this.getFileById(B[e],n)}getMaterialData(e){let n=this.materialCache.get(e);if(!n){if(e==-1)n=Tt();else if(this.getBuildNr()<=it)n=Tt(),n.textures.diffuse=e,n.baseColorFraction=1,n.texmodes="mirror",n.texmodet="mirror";else if(this.getBuildNr()<=471){let r=this.materialArchive.get(e);if(!r)throw new Error("material "+e+" not found");let i=K.oldproctexture.read(r,this);n=Tt(),n.textures.diffuse=i.spriteid,n.baseColorFraction=1}else if(this.getBuildNr()<=753){if(n=Tt(),this.getBuildNr()>=500){let i=K.oldmaterials.read(this.materialArchive.get(0),this).mats[e];i.basecolorfraction!=null&&i.basecolor!=null&&(n.baseColorFraction=i.basecolorfraction/255,n.baseColor=sn(kt(i.basecolor))),n.textures.diffuse=i.id}}else{let r=this.materialArchive.get(e);if(!r)throw new Error("material "+e+" not found");n=Oi(r,e,this.rawsource)}this.materialCache.set(e,n)}return n}getJsonSearchData(e){let n=this.jsonSearchCache.get(e);if(!n){let r=ia[e];if(!r)throw new Error("unknown decode mode "+e);n={files:(async()=>{await r.prepareDump?.(this);let s=await r.lookup.logicalRangeToFiles(this,[0,0],[1/0,1/0]),u=null,c=[];for(let l of s){let v;u&&u.index==l.index?v=u.subfiles:(v=await this.getFileArchive(l.index),u={index:l.index,subfiles:v});let p=v[l.subindex],m=r.lookup.fileToLogical(this,l.index.major,l.index.minor,p.fileid),h=r.parser.read(p.buffer,this.rawsource);h.$fileid=m.length==1?m[0]:m,c.push(h)}return c})(),schema:r.parser.parser.getJsonSchema()},this.jsonSearchCache.set(e,n)}return n}}class en{modelCache=new Map;threejsTextureCache=new Map;threejsMaterialCache=new Map;engine;textureType="dds";modelType="nxt";static textureIndices={diffuse:{png:B.texturesPng,dds:B.texturesDds,bmp:B.texturesBmp,ktx:B.texturesKtx,png2014:B.textures2015Png,dds2014:B.textures2015Dds,oldpng:B.texturesOldPng,oldproc:B.sprites,fullproc:B.texturesOldPng,legacy:nt.data,legacytga:0},normal:{png:B.texturesPng,dds:B.texturesDds,bmp:B.texturesBmp,ktx:B.texturesKtx,png2014:B.textures2015CompoundPng,dds2014:B.textures2015CompoundDds,oldpng:B.texturesOldCompoundPng,oldproc:0,fullproc:0,legacy:0,legacytga:0},compound:{png:B.texturesPng,dds:B.texturesDds,bmp:B.texturesBmp,ktx:B.texturesKtx,png2014:B.textures2015CompoundPng,dds2014:B.textures2015CompoundDds,oldpng:B.texturesOldCompoundPng,oldproc:0,fullproc:0,legacy:0,legacytga:0}};constructor(e,n){this.engine=e,n!="auto"?this.modelType=n:e.getBuildNr()<=ir?this.modelType="classic":e.hasOldModels&&!e.hasNewModels?this.modelType="old":this.modelType="nxt"}static async create(e,n="auto",r="auto"){let i=new en(e,r);return i.textureType=n=="auto"?await Mu(e.rawsource):n,i}async getTextureFile(e,n,r){const{ParsedTexture:i}=await Ze(async()=>{const{ParsedTexture:l}=await Promise.resolve().then(()=>To);return{ParsedTexture:l}},void 0);let s=en.textureIndices[e][this.textureType],u=(s|255)<<23|n,c=this.textureType;return this.engine.fetchCachedObject(this.threejsTextureCache,u,async()=>{if(c=="fullproc"){const{loadProcTexture:l}=await Ze(async()=>{const{loadProcTexture:m}=await import("./proceduraltexture-DJLKCvWn.js");return{loadProcTexture:m}},__vite__mapDeps([0,1,2,3]));let v=await l(this.engine,n),p=new i(v.img,!1,!1);return p.filesize=v.filesize,p}else if(c=="legacytga"||c=="legacy"){const{combineLegacyTexture:l}=await Ze(async()=>{const{combineLegacyTexture:p}=await Promise.resolve().then(()=>Yr);return{combineLegacyTexture:p}},void 0);let v;if(this.engine.classicData){let p=this.engine.classicData.textures[n-1];v=await l(this.engine,p.name,p.subname,c=="legacytga")}else{const{legacyGroups:p,parseLegacyImageFile:m}=await Ze(async()=>{const{legacyGroups:g,parseLegacyImageFile:d}=await Promise.resolve().then(()=>Yr);return{legacyGroups:g,parseLegacyImageFile:d}},void 0);let h=await this.engine.getArchiveById(nt.data,p.textures);v=await m(this.engine,h[n].buffer)}return new i(v.img,r,!1)}else{let l=await this.engine.getFileById(s,n);if(c=="oldproc"){const{parseSprite:v}=await Ze(async()=>{const{parseSprite:m}=await Promise.resolve().then(()=>vo);return{parseSprite:m}},void 0);let p=v(l);return new i(p[0].img,r,!1)}else return new i(l,r,!0)}},l=>l.filesize?l.filesize*2:1e3)}async getModelData(e){if(e>=ut){const{materialPreviewCube:n,classicWall:r,classicWallDiag:i,classicRoof10:s,classicRoof12:u,classicRoof13:c,classicRoof14:l,classicRoof15:v,classicRoof16:p,classicRoof17:m}=await Ze(async()=>{const{materialPreviewCube:d,classicWall:a,classicWallDiag:o,classicRoof10:f,classicRoof12:x,classicRoof13:y,classicRoof14:E,classicRoof15:_,classicRoof16:S,classicRoof17:T}=await Promise.resolve().then(()=>Wo);return{materialPreviewCube:d,classicWall:a,classicWallDiag:o,classicRoof10:f,classicRoof12:x,classicRoof13:y,classicRoof14:E,classicRoof15:_,classicRoof16:S,classicRoof17:T}},void 0);let g=new Map([[Oe.materialCube,Promise.resolve(n)],[Oe.classicWall,Promise.resolve(r)],[Oe.classicWallDiag,Promise.resolve(i)],[Oe.classicRoof10,Promise.resolve(s)],[Oe.classicRoof12,Promise.resolve(u)],[Oe.classicRoof13,Promise.resolve(c)],[Oe.classicRoof14,Promise.resolve(l)],[Oe.classicRoof15,Promise.resolve(v)],[Oe.classicRoof16,Promise.resolve(p)],[Oe.classicRoof17,Promise.resolve(m)]]).get(e);if(!g)throw new Error(`constmodel ${e} does not exist`);return g}return this.engine.fetchCachedObject(this.modelCache,e,async()=>{if(this.modelType=="nxt"){let n=await this.engine.getFileById(B.models,e);const{parseOb3Model:r}=await Ze(async()=>{const{parseOb3Model:i}=await Promise.resolve().then(()=>nl);return{parseOb3Model:i}},void 0);return r(n,this.engine)}else if(this.modelType=="old"){let n=this.engine.legacyData?nt.oldmodels:B.oldmodels,r=await this.engine.getFileById(n,e);const{parseRT5Model:i}=await Ze(async()=>{const{parseRT5Model:s}=await import("./rt5model-DocvX6NS.js");return{parseRT5Model:s}},__vite__mapDeps([4,3,1,2]));return i(r,this.engine.rawsource)}else if(this.modelType=="classic"){const{classicGroups:n}=await Ze(async()=>{const{classicGroups:s}=await Promise.resolve().then(()=>hn);return{classicGroups:s}},void 0);let r=await this.engine.getArchiveById(0,n.models);const{parseRT2Model:i}=await Ze(async()=>{const{parseRT2Model:s}=await import("./rt2model-s-rEJhHD.js");return{parseRT2Model:s}},__vite__mapDeps([5,3,1,2]));return i(r[e].buffer,this.engine)}else throw new Error("unexpected")},n=>n.meshes?n.meshes.reduce((r,i)=>r+i.indices.count,0)*30:1e3)}getMaterial(e,n,r){let i=e+(n?16777216:0)+(r?33554432:0);return this.engine.fetchCachedObject(this.threejsMaterialCache,i,async()=>{let s=this.engine.getMaterialData(e);return Nu(this,s,n,r)},s=>256*256*4*2)}}async function Nu(t,e,n,r){let i=new _a;i.alphaTest=e.alphamode=="cutoff"?.5:.1,i.transparent=n||e.alphamode=="blend";const s=e.texmodes=="clamp"?Tn:e.texmodes=="repeat"?Fn:kn,u=e.texmodet=="clamp"?Tn:e.texmodet=="repeat"?Fn:kn;if(typeof e.textures.diffuse<"u"&&t.textureType!="none"){let c=await(await t.getTextureFile("diffuse",e.textures.diffuse,e.stripDiffuseAlpha)).toImageData(),l=new Yt(c.data,c.width,c.height,Zt);if(l.needsUpdate=!0,l.wrapS=s,l.wrapT=u,l.colorSpace=br,l.magFilter=Kt,l.minFilter=Sa,l.generateMipmaps=!0,i.map=l,e.textures.normal){let p=await(await t.getTextureFile("normal",e.textures.normal,!1)).toImageData(),m=at(null,p.width,p.height),h=at(null,p.width,p.height);const g=p.data;for(let d=0;d<g.length;d+=4){let a=g[d+1]/127.5-1,o=g[d+3]/127.5-1;m.data[d+0]=g[d+1],m.data[d+1]=g[d+3],m.data[d+2]=(Math.sqrt(Math.max(1-a*a-o*o,0))+1)*127.5,m.data[d+3]=255;const f=g[d+0]/255;h.data[d+0]=c.data[d+0]*f,h.data[d+1]=c.data[d+1]*f,h.data[d+2]=c.data[d+2]*f,h.data[d+3]=255}i.normalMap=new Yt(m.data,m.width,m.height,Zt),i.normalMap.needsUpdate=!0,i.normalMap.wrapS=s,i.normalMap.wrapT=u,i.normalMap.magFilter=Kt,i.emissiveMap=new Yt(h.data,h.width,h.height,Zt),i.emissiveMap.needsUpdate=!0,i.emissiveMap.wrapS=s,i.emissiveMap.wrapT=u,i.emissiveMap.magFilter=Kt,i.emissive.setRGB(1,1,1)}if(e.textures.compound){let v=await(await t.getTextureFile("compound",e.textures.compound,!1)).toImageData(),p=at(null,v.width,v.height);for(let h=0;h<v.data.length;h+=4)p.data[h+1]=v.data[h+1],p.data[h+2]=v.data[h+0],p.data[h+3]=255;let m=new Yt(p.data,p.width,p.height,Zt);m.needsUpdate=!0,m.wrapS=s,m.wrapT=u,m.colorSpace=br,m.magFilter=Kt,i.metalnessMap=m,i.roughnessMap=m,i.metalness=1}}return i.vertexColors=e.baseColorFraction!=1||!e.textures.diffuse||n,i.userData=e,e.uvAnim&&((i.userData.gltfExtensions??={}).RA_materials_uvanim={uvAnim:[e.uvAnim.u,e.uvAnim.v]}),r?i=Yl(i.map,e.alphamode,e.alphacutoff):t.engine.hasNewModels&&(i=Bu(i.map,e)),{mat:i,matmeta:e}}async function Mu(t){let e=async r=>{let i=-1;try{let s=await t.getCacheIndex(r),u=s[s.length-1];await t.getFile(u.major,u.minor,u.crc),i=u.minor}catch{}return i},n="none";if(t.getBuildNr()<=ir){const{classicGroups:r}=await Ze(async()=>{const{classicGroups:s}=await Promise.resolve().then(()=>hn);return{classicGroups:s}},void 0);n=await t.findSubfileByName(0,r.textures,"INDEX.DAT")?"legacy":"legacytga"}else if(t.getBuildNr()<=it)n="legacy";else if(t.getBuildNr()<=471)n="oldproc";else if(t.getBuildNr()<=736)n="fullproc";else{let r=await e(B.texturesBmp),i=await e(B.texturesDds);if(r>0||i>0)n=r>i?"bmp":"dds";else{let s=await e(B.textures2015Png),u=await e(B.textures2015Dds);s>0||u>=0?n=u>s?"dds2014":"png2014":await e(B.texturesOldPng)>0?n="oldpng":n="none"}}return n}async function*Dn(t,e){if(t.legacyData){let n=null;if(e==B.items?n=t.legacyData.items:e==B.npcs?n=t.legacyData.npcs:e==B.objects?n=t.legacyData.objects:e==B.spotanims&&(n=t.legacyData.spotanims),!n)throw new Error(`cache major ${e} can not be iterated`);yield*n.map((r,i)=>({id:i,file:r}))}else if(t.getBuildNr()<=488)yield*(await t.getArchiveById(B.config,Pi[e])).map(r=>({id:r.fileid,file:r.buffer}));else{let n=await t.getCacheIndex(e),r=on[e];for(let i of n){if(!i)continue;yield*(await t.getFileArchive(i)).map(u=>({id:i.minor*r+u.fileid,file:u.buffer}))}}}export{Ui as C,ma as E,sn as H,ea as R,Qe as S,en as T,fn as a,Mo as b,B as c,Ri as d,Vu as e,wt as f,eo as g,kt as h,Gu as i,K as p,ju as r,vo as s,zu as u};
