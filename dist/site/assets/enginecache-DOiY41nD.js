const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/proceduraltexture-DZ0J7fxT.js","assets/main-Cu5wNbky.js","assets/main-BN3eHhBo.css","assets/three.module-aN59MUBe.js","assets/rt5model-B-QH9QPu.js","assets/rt2model-Bf9mffo1.js"])))=>i.map(i=>d[i]);
import{q as ca,g as fa,_ as Xe}from"./main-Cu5wNbky.js";import{x as xe,aw as bi,ax as Zt,ay as Dr,o as rr,az as Ar,h as Ut,p as Pe,aA as Qt,aB as gr,aC as wi,a3 as Je,aD as $r,aE as Qr,ad as Ve,aF as wt,aG as _i,G as Si,n as da,V as ha,k as Cr,S as vr,aH as en,ai as Jr,aI as pa,L as Wt,aJ as ma,ah as Kt,Z as Yt,q as ga,C as En,j as va,s as xa,ae as Dn,aK as An,aL as Cn,aM as ya}from"./three.module-aN59MUBe.js";import{prepareClientScript as Tr,compileClientScript as ba,renderClientScript as wa,writeOpcodeFile as _a,writeClientVarFile as Sa}from"../src/services/rsmv/clientscript/index.ts";import{ClientScriptInterpreter as Ea}from"../src/services/rsmv/clientscript/interpreter.ts";const Tn=3988292384,Ei=new Uint32Array(256),Da=new Uint32Array(256);function Aa(){for(let t=0;t<256;t++){let e=t,n=t<<24;for(let r=8;r>0;r--)(e&1)==1?e=e>>>1^Tn:e>>>=1,(n&2147483648)!=0?n=(n^Tn)<<1|1:n<<=1,n&=4294967295;Ei[t]=e&4294967295,Da[t]=n}}Aa();function Re(t,e=0,n=0,r=t.length){e=e^4294967295;for(let i=n;i<r;i++)e=e>>>8^Ei[(e^t[i])&255];return(e^4294967295)>>>0}const Fn=Buffer.alloc(4);function nt(t,e){return Fn.writeUInt32BE(t>>>0),Re(Fn,e)}const C={framemaps:1,config:2,interfaces:3,mapsquares:5,oldmodels:7,sprites:8,clientscript:12,fontmetricsOld:13,sounds:14,objects:16,enums:17,npcs:18,items:19,sequences:20,spotanims:21,structs:22,quickchat:24,materials:26,particles:27,worldmap:23,music:40,models:47,frames:48,texturesOldPng:9,texturesOldCompoundPng:37,textures2015Png:43,textures2015CompoundPng:44,textures2015Dds:45,textures2015CompoundPngMips:46,textures2015CompoundDds:50,textures2015PngMips:51,texturesDds:52,texturesPng:53,texturesBmp:54,texturesKtx:55,skeletalAnims:56,achievements:57,fontmetrics:58,vectorfonts:59,cutscenes:66,index:255},Ca=940,_t={locations:0,squares:3,square_nxt:5,env:6},Ce={mapunderlays:1,identityKit:3,mapoverlays:4,params:11,environments:29,animgroups:32,mapscenes:34,maplabels:36,dbtables:40,dbrows:41,locs_old:6,npcs_old:9,items_old:10,spotanim_old:13},Ze=377,nr=235,Ta=`\r
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
`,Fa=`{\r
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
}`,ka=`["struct",\r
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
]`,Ia=`["struct",\r
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
]`,Ba=`["struct",\r
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
]`,Ma=`["struct",\r
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
]`,Na=`["struct",\r
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
]`,La=`["struct",\r
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
]`,Pa=`["struct",\r
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
]`,Ra=`["struct",\r
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
]`,Oa=`{\r
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
}`,Ua=`{\r
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
// ]`,Ga=`{\r
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
}`,za=`{\r
	"0x01": { "name": "unk01", "read":"ushort" },\r
	"0x04": { "name": "unk04", "read":"bool" },\r
	"0x05": { "name": "model", "read":"varuint" },\r
	"0x06": { "name": "unk06", "read":"ushort" }\r
}`,Va=`["struct",\r
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
]`,ja=`["struct",\r
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
]`,qa=`["struct",\r
	["header_always_2","ubyte"],\r
	["probably_framemap_id","ushort"],\r
	["flags",["array","ushort","ubyte"]],\r
	["animdata",["buffer",["bytesleft"],"ubyte"]]\r
]`,Xa=`{\r
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
}`,Ha=`//works from 500 to 932, system is entirely different below 500\r
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
]`,$a=`{\r
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
}`,Ja=`{\r
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
}`,Wa=`{\r
	"0x01": { "name":                           "sprite_id", "read": "variable unsigned int" },\r
	"0x02": { "name":                           "unknown_2", "read": "unsigned int" },\r
	"0x03": { "name":                           "unknown_3", "read": "true" },\r
	"0x04": { "name":                           "unknown_4", "read": "true" },\r
	"0x05": { "name":                           "unknown_5", "read": "true" }\r
}`,Ka=`["struct",\r
    //TODO\r
    ["unk","ubyte"]\r
]`,Ya=`["struct",\r
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
]`,Za=`{\r
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
}`,Qa=`["struct",\r
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
]`,es=`{\r
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
}`,ts=`{\r
	"0x01": { "name":                           "color", "read": ["array",3,"unsigned byte"] },\r
	"0x02": { "name":                        "material", "read": "unsigned short" },\r
	"0x03": { "name":                 "material_tiling", "read": "unsigned short" },\r
	"0x04": { "name":                    "unknown_0x04", "read": "true" },\r
	"0x05": { "name":                    "unknown_0x05", "read": "true" }\r
}`,rs=`["array",4096,["struct",\r
	["flags","unsigned byte"],\r
	["shape",["opt",["flags",0,"bitflag"],"unsigned byte"]],\r
	["overlay",["opt",["flags",0,"bitflag"],"variable unsigned short"]],\r
	["settings",["opt",["flags",1,"bitflag"],"unsigned byte"]],\r
	["underlay",["opt",["flags",2,"bitflag"],"variable unsigned short"]],\r
	["height",["opt",["flags",3,"bitflag"],"unsigned byte"]]\r
]]`,ns=`["struct",\r
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
]`,is=`["struct",\r
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
]`,as=`["struct",\r
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
]`,ss=`{\r
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
}`,os=`{\r
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
}`,ls=`["struct",\r
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
]`,us=`["struct",\r
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
]`,cs=`["struct",\r
    ["color","ushort"],\r
    ["bool0","bool"],\r
    ["bool1","bool"],//always true\r
    ["spriteid","ushort"],\r
    ["always00",["buffer",6,"hex"]]\r
]`,fs=`{\r
	"0x04": { "name":              "unk04", "read": "true" },\r
	"0x65": { "name":              "type", "read": ["struct",\r
		["vartype","varushort"],\r
		["$primitive","ubyte"],\r
		["defaultint",["opt",["$primitive",2],"int"]],\r
		["defaultstring",["opt",["$primitive",5],"string"]]\r
	] }\r
}`,ds=`{\r
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
}`,hs=`{\r
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
}`,ps=`["nullarray",["struct",\r
    ["op",["ref","$opcode"]],\r
    ["args",["match",["ref","$opcode"],{\r
        "0x01":["buffer",8,"hex"]\r
    }]]\r
]]`,ms=`{\r
	"0x01": { "name":                     "text", "read": "string" },\r
	"0x02": { "name":            "subcategories", "read": ["array","ubyte",["struct",["id","ushort"],["hotkey","ubyte"]]]},\r
	"0x03": { "name":                    "lines", "read": ["array","ubyte",["struct",["id","ushort"],["hotkey","ubyte"]]]},\r
	"0x04": { "name":            "nonsearchable", "read": "true" }\r
}`,gs=`{\r
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
}`,vs=`["struct",\r
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
]`,xs=`{\r
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
}`,ys=`["struct",\r
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
]`,bs=`{\r
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
}`,ws=`{\r
	"0xF9": { "name":              "extra", "read": "extrasmap" }\r
}`,_s=`{\r
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
}`,kn={buffer:{constr:Buffer},hex:{constr:Uint8Array},byte:{constr:Int8Array},ubyte:{constr:Uint8Array},short:{constr:Int16Array},ushort:{constr:Uint16Array},int:{constr:Int32Array},uint:{constr:Uint32Array},float:{constr:Float32Array}};function Di(t,e,n){if(!Object.hasOwn(n,t))throw new Error(`Type '${t}' not found in typedef.json`);let r=n[t];return typeof r!="string"?Fe(e,r,n):Object.hasOwn(er,r)?er[r]:Di(r,e,n)}function Fe(t,e,n){switch(t??=()=>{throw new Error("reference failed to resolve")},typeof e){case"boolean":case"number":return Bn(e);case"string":return Object.hasOwn(er,e)?er[e]:Di(e,t,n);case"object":if(e==null)return Bn(null);if(Array.isArray(e)){if(e.length<1)throw new Error(`'read' variables must either be a valid type-defining string, an array of type-defining strings / objects, or a valid type-defining object: ${JSON.stringify(e)}`);let r=e.slice(1);if(Nn[e[0]])return Nn[e[0]](r,t,n)}else return Ss(e,t,n);default:throw new Error(`'read' variables must either be a valid type-defining string, an array of type-defining strings / objects, or a valid type-defining object: ${JSON.stringify(e)}`)}}function Ss(t,e,n){let r={read(p){let m={},f={$opcode:0};for(p.stack.push(m),p.hiddenstack.push(f);;){if(p.scan==p.endoffset){x||console.log("ended reading opcode struct at end of file without 0x00 opcode");break}let g=u.read(p);if(f.$opcode=g,!x&&g==0)break;let h=l.get(g);if(!h)throw new Error("unknown chunk 0x"+g.toString(16).toUpperCase());m[h.key]=h.parser.read(p)}return p.stack.pop(),p.hiddenstack.pop(),m},write(p,m){if(typeof m!="object"||!m)throw new Error("oject expected");p.stack.push(m),p.hiddenstack.push({});for(let f in m){if(f.startsWith("$"))continue;let g=d[f];if(!g)throw new Error("unknown property "+f);u.write(p,g.op),g.parser.write(p,m[f])}x||u.write(p,0),p.stack.pop(),p.hiddenstack.pop()},getTypescriptType(p){let m=`{
`,f=p+"	";for(let g of l.values())m+=f+g.key+"?: "+g.parser.getTypescriptType(f)+` | null
`;return m+=p+"}",m},getJsonSchema(){return{type:"object",properties:Object.fromEntries([...l.values()].filter(p=>!p.key.startsWith("$")).map(p=>[p.key,{oneOf:[p.parser.getJsonSchema(),{type:"null"}]}]))}}},i=function(p,m,f){let g={stackdepth:f.stackdepth+1,resolve(h,a){if(typeof h!="object"||!h)throw new Error("object expected");let o=h[p];return f.resolve(o,a)}};return m=="$opcode"||Object.prototype.hasOwnProperty.call(d,m)?(s[m]??=[],s[m].push(g),g):et(m,e,g)},s={},u=Fe(null,t.$opcode??"unsigned byte",n),d={};for(let p in t){if(p.startsWith("$"))continue;let m=t[p];if(typeof m!="object"||!m)throw new Error("op name expected");let f=m.name;if(typeof f!="string")throw new Error("op name expected");if(d[f])throw new Error("duplicate opcode key "+f);d[f]={op:parseInt(p),parser:Fe(i.bind(null,p),m.read,n)}}let l=new Map;for(let p in d){let m=d[p];l.set(m.op,{key:p,parser:m.parser})}let x=!!l.get(0);return r}function Es(t,e,n){let r={read(u){let d=[];for(let l of s){let x=l.read(u);d.push(x)}return d},write(u,d){if(!Array.isArray(d))throw new Error("array expected");for(let[l,x]of s.entries())x.write(u,d[l])},getTypescriptType(u){let d=`[
`,l=u+"	";for(let x of s)d+=l+x.getTypescriptType(l)+`,
`;return d+=u+"]",d},getJsonSchema(){return{type:"array",items:Object.entries(s).map(([u,d])=>d.getJsonSchema()),minItems:Object.keys(s).length,maxItems:Object.keys(s).length}}};const i=function(u,d,l){return et(d,e,{stackdepth:l.stackdepth,resolve(x,p){if(!Array.isArray(x))throw new Error("Array expected");return l.resolve(x[u],p)}})};let s=t.map((u,d)=>Fe(i.bind(null,d),u,n));return r}function et(t,e,n){if(!e)throw new Error("reference "+t+" could not be resolved");return e(t,n)}function tn(t,e,n){let i=et(e,t,{stackdepth:0,resolve:n}).stackdepth,s=e.startsWith("$");return{read(u){let d=s?u.hiddenstack:u.stack;return d[d.length-i][e]},write(u,d){if(u.isWrite&&!s)throw new Error(`can update ref values in write mode when they are hidden (prefixed with $) in ${e}`);let l=s?u.hiddenstack:u.stack;l[l.length-i][e]=d}}}function Ds(t,e,n){let r={},i={read(l){let x={},p={};l.stack.push(x),l.hiddenstack.push(p);for(let m of d){let f=u[m].read(l);f!==void 0&&(m[0]=="$"?p[m]=f:x[m]=f)}return l.stack.pop(),l.hiddenstack.pop(),x},write(l,x){if(typeof x!="object"||!x)throw new Error("object expected");let p={};l.stack.push(x),l.hiddenstack.push(p);for(let m of d){let f=x[m],g=u[m];if(m.startsWith("$")){if(g.readConst!=null)f=g.readConst(l);else{let h=r[m];if(!h)throw new Error("cannot write hidden values if they are not constant or not referenced");f??=0;for(let a of h)f=a.resolve(x,f)}p[m]=f}g.write(l,f)}l.stack.pop(),l.hiddenstack.pop()},getTypescriptType(l){let x=`{
`,p=l+"	";for(let m of d)m[0]!="$"&&(x+=p+m+": "+u[m].getTypescriptType(p)+`,
`);return x+=l+"}",x},getJsonSchema(){return{type:"object",properties:Object.fromEntries([...Object.entries(u)].filter(([l])=>!l.startsWith("$")).map(([l,x])=>[l,x.getJsonSchema()])),required:d.filter(l=>!l.startsWith("$"))}}},s=function(l,x,p){let m={stackdepth:p.stackdepth+1,resolve(f,g){if(typeof f!="object"||!f)throw new Error("object expected");let h=f[l];return p.resolve(h,g)}};return Object.prototype.hasOwnProperty.call(u,x)?(r[x]??=[],r[x].push(m),m):et(x,e,m)},u={};for(let l of t){if(!Array.isArray(l)||l.length!=2)throw new Error("each struct args should be a [name,type] pair");if(typeof l[0]!="string")throw new Error("prop name should be string");if(u[l[0]])throw new Error("duplicate struct prop "+l[0]);u[l[0]]=Fe(s.bind(null,l[0]),l[1],n)}let d=Object.keys(u);return i}function As(t,e,n){let r={read(x){return d.match(x)==-1?null:l.read(x)},write(x,p){if(p!=null)return l.write(x,p)},getTypescriptType(x){return l.getTypescriptType(x)+" | null"},getJsonSchema(){return{oneOf:[l.getJsonSchema(),{type:"null"}]}}},i=function(x,p){return et(x,e,{stackdepth:p.stackdepth,resolve(m,f){return m!=null?p.resolve(m,f):f}})};if(t.length<2)throw new Error("2 arguments exptected for proprety with type opt");let s=t[0],u="";if(typeof s=="string")u=s;else{let x,p,m="eq";if(Array.isArray(s)){if(typeof s[1]!="number")throw new Error("only literal ints as condition value are supported");x=s[0],m=s[2]??"eq",p=s[1]}else{if(typeof s!="number")throw new Error("");x="$opcode",p=s}let g={bitand:"&=",bitflag:"&",bitflagnot:"!&",bitor:"&",eq:"==",eqnot:"!=",gteq:">=",lteq:"<="}[m];(m=="bitflag"||m=="bitflagnot")&&(p=1<<p),u=`${x}${g}${p}`}let d=Ai(i,[u],x=>x==null?-1:0),l=Fe(i,t[1],n);return r}function Cs(t,e,n){let r={read(f){let g=d.read(f),h=[],a=[];for(let o=0;o<p.length;o++){let c=p[o];for(let v=0;v<g;v++){let y,b;o==0?(b={},h.push(b),y={},a.push(y)):(b=h[v],y=a[v]),f.stack.push(b),f.hiddenstack.push(y);for(let w in c){let _=c[w].read(f);w.startsWith("$")?y[w]=_:b[w]=_}f.stack.pop(),f.hiddenstack.pop()}}return h},write(f,g){if(!Array.isArray(g))throw new Error("array expected");d.write(f,g.length);let h=[];for(let a=0;a<p.length;a++){let o=p[a];for(let c=0;c<g.length;c++){let v=g[c],y=a==0?h[c]={}:h[c];if(f.stack.push(v),f.hiddenstack.push(y),typeof v!="object"||!v)throw new Error("object expected");for(let b in o){let w=o[b],_=v[b];if(b.startsWith("$")){if(w.readConst!=null)_=w.readConst(f);else{let E=l[b];if(!E)throw new Error("cannot write hidden values if they are not constant or not referenced");_??=0;for(let S of E)_=S.resolve(v,_)}y[b]=_}w.write(f,_)}f.stack.pop(),f.hiddenstack.pop()}}},getTypescriptType(f){let g=`{
`,h=f+"	";for(let[a,o]of Object.entries(x))a[0]!="$"&&(g+=h+a+": "+o.getTypescriptType(h)+`,
`);return g+=f+"}[]",g},getJsonSchema(){return{type:"array",items:{type:"object",properties:Object.fromEntries([...Object.entries(x)].filter(([f])=>!f.startsWith("$")).map(([f,g])=>[f,g.getJsonSchema()])),required:m.filter(f=>!f.startsWith("$"))}}}};const i=function(f,g){return et(f,e,{stackdepth:g.stackdepth,resolve(h,a){if(!Array.isArray(h))throw new Error("array expected");return g.resolve(h.length,a)}})},s=function(f,g,h){let a={stackdepth:h.stackdepth+1,resolve(o,c){if(typeof o!="object"||!o)throw new Error("object expected");let v=o[f];return h.resolve(v,c)}};return Object.prototype.hasOwnProperty.call(x,g)?(l[g]??=[],l[g].push(a),a):et(g,e,a)};let u=t.slice(1),d=Fe(i,t[0],n),l={},x={},p=[];for(let f of u){if(!Array.isArray(f))throw new Error("each argument for composed chunk should be an array");let g={};p.push(g);for(let h of f){if(!Array.isArray(h)||h.length!=2||typeof h[0]!="string")throw new Error("each composedchunk should be a [name,type] pair");let a=Fe(s.bind(null,h[0]),h[1],n);g[h[0]]=a,x[h[0]]=a}}let m=p.flatMap(Object.keys);return r}function In(t,e,n){if(typeof t=="string"){if(n=="hex")return Buffer.from(t,"hex");{let r=t.match(/^buffer ([\w\[\]]+){([\d,\-\.]*)}/);if(!r)throw new Error("invalid arraybuffer string");return new e.constr(r[2].split(",").map(i=>+i))}}if(!(t instanceof e.constr))throw new Error("arraybuffer expected");return t}function Ts(t,e,n){let r={read(m){let f=x.read(m),g=f*d*p.constr.BYTES_PER_ELEMENT,h=new ArrayBuffer(g);if(m.scan+g>m.endoffset)throw new Error("trying to read outside buffer bounds");let a=Buffer.from(h);a.set(m.buffer.subarray(m.scan,m.scan+g)),m.scan+=g;let o=l=="buffer"?a:new p.constr(h);return l=="hex"?o.toJSON=()=>a.toString("hex"):m.args.keepBufferJson===!0?o.toJSON=()=>`buffer ${l}${d!=1?`[${d}]`:""}[${f}]`:o.toJSON=()=>`buffer ${l}${d!=1?`[${d}]`:""}[]{${[...o].join(",")}}`,o},write(m,f){let g=In(f,p,l);if(g.length%d!=0)throw new Error("araybuffer is not integer multiple of vectorlength");x.write(m,g.length/d);let h=new Uint8Array(g.buffer,g.byteOffset,g.byteLength);m.buffer.set(h,m.scan),m.scan+=h.byteLength},getTypescriptType(m){return p.constr.name},getJsonSchema(){return{type:"string"}}};const i=function(m,f){return et(m,e,{stackdepth:f.stackdepth,resolve(g,h){let a=In(g,p,l);return f.resolve(a.length/d,h)}})};if(t.length<1)throw new Error(`'read' variables interpretted as an array must contain items: ${JSON.stringify(t)}`);let s=t[1]??"buffer",u=t[2]??1;if(typeof s!="string"||!Object.hasOwn(kn,s))throw new Error("unknown buffer type "+t[1]);if(typeof u!="number")throw new Error("vectorlength should be a number");let d=u,l=s,x=Fe(i,t[0],n);const p=kn[s];return r}function Fs(t,e,n){let r={read(x){let p=d.read(x),m=[];for(let f=0;f<p;f++)m.push(l.read(x));return m},write(x,p){if(!Array.isArray(p))throw new Error("array expected");d.write(x,p.length);for(let m=0;m<p.length;m++)l.write(x,p[m])},getTypescriptType(x){return`${l.getTypescriptType(x)}[]`},getJsonSchema(){return{type:"array",items:l.getJsonSchema()}}};const i=function(x,p){return et(x,e,{stackdepth:p.stackdepth,resolve(m,f){if(!Array.isArray(m))throw new Error("array expected");return p.resolve(m.length,f)}})},s=function(x,p){return et(x,e,{stackdepth:p.stackdepth,resolve(m,f){if(!Array.isArray(m))throw new Error("array expected");return p.resolve(m[0],f)}})};if(t.length<1)throw new Error(`'read' variables interpretted as an array must contain items: ${JSON.stringify(t)}`);let u=t.length>=2?t[0]:"variable unsigned short",d=Fe(i,u,n),l=Fe(s,t[t.length>=2?1:0],n);return r}function ks(t,e,n){let r={read(p){let m=[],f={$opcode:0};for(p.hiddenstack.push(f),p.stack.push({});;){p.scan;let g=d.read(p);f.$opcode=g;let h=l.read(p);if(g==h)break;m.push(x.read(p))}return p.hiddenstack.pop(),p.stack.pop(),m},write(p,m){if(!Array.isArray(m))throw new Error("array expected");for(let f of m)d.write(p,1),p.stack.push(f),p.hiddenstack.push({}),x.write(p,f),p.stack.pop(),p.hiddenstack.pop();d.write(p,0)},getTypescriptType(p){return`${x.getTypescriptType(p)}[]`},getJsonSchema(){return{type:"array",items:x.getJsonSchema()}}};const i=function(p,m){return p=="$opcode"?{stackdepth:m.stackdepth+1,resolve(f,g){throw new Error("not implemented")}}:et(p,e,{stackdepth:m.stackdepth+1,resolve(f,g){if(!Array.isArray(f))throw new Error("array expected");return m.resolve(f[0],g)}})};if(t.length<1)throw new Error(`'read' variables interpretted as an array must contain items: ${JSON.stringify(t)}`);let s=t.length>=2?t[0]:"variable unsigned short",u=t.length>=3?t[1]:0,d=Fe(null,s,n),l=Fe(null,u,n),x=Fe(i,t[t.length-1],n);return r}function Bn(t){if(typeof t!="number"&&typeof t!="string"&&typeof t!="boolean"&&t!=null)throw new Error("only bool, number, string or null literals allowed");return{read(n){return t},readConst(){return t},write(n,r){if(r!=t)throw new Error(`expected constant ${t} was not present during write`)},getTypescriptType(){return JSON.stringify(t)},getJsonSchema(){return{const:t}}}}function Is(t,e,n){let r=p=>{let m=x.read(p);return u!=-1&&(m=m>>u&~(-1<<d)),m+l},i={read:r,readConst:r,write(p,m){},getTypescriptType(){return"number"},getJsonSchema(){return{type:"integer",minimum:d==-1?void 0:0,maximum:d==-1?void 0:2**d-1}}};if(t.length<1)throw new Error("1 argument exptected for proprety with type ref");if(typeof t[0]!="string")throw new Error("ref propname expected");let s=t[0],[u,d]=[-1,-1];if(t[1])if(Array.isArray(t[1])&&t[1].length==2&&typeof t[1][0]=="number"&&typeof t[1][1]=="number")u=t[1][0],d=t[1][1];else throw new Error("second argument for ref should be [minbit,bitlen] pair");let l=t[2]??0;if(typeof l!="number")throw new Error("ref offset should be a number");let x=tn(e,s,(p,m)=>{if(typeof p!="number")throw new Error("number expected");if(u!=-1){let f=~(-1<<d)<<u;return m&~f|p<<u}else return p});return i}function Bs(){return{read(t){return t.endoffset-t.scan},write(t,e){},getTypescriptType(){return"number"},getJsonSchema(){return{type:"integer"}}}}function Ms(t,e,n){let r={read(l){let x=s.read(l),p,m=d.read(l)??0;if(u=="add"||u=="add-1"||u=="postadd")p=m+(x??0)+(u=="add-1"?-1:0);else if(u=="hold")p=x??m;else throw new Error("unknown accumolator mode");return d.write(l,p),u=="postadd"?m:p},write(l,x){if(typeof x!="number")throw new Error("number expected");let p=d.read(l)??0,m;if(u=="add"||u=="add-1")m=x-p+(u=="add-1"?1:0);else throw u=="hold"?new Error("writing accum intaccum hold not implemented"):u=="postadd"?new Error("writing accum intaccum postadd not implemented"):new Error("unknown accumolator mode");s.write(l,m),d.write(l,x)},getTypescriptType(){return"number"},getJsonSchema(){return{type:"integer"}}};if(t.length<2)throw new Error("2 arguments exptected for proprety with type accum");let i=t[0],s=Fe(e,t[1],n),u=t[2]??"add";if(typeof i!="string")throw new Error("ref name should be a string");let d=tn(e,i,(l,x)=>x);return r}function Mn(t){const e="latin1";return{read(n){let r=xr(n.args)<=Ze?10:0;for(let u=0;u<t.length;u++,n.scan++)if(n.buffer.readUInt8(n.scan)!=t[u])throw new Error("failed to match string header bytes");let i=n.scan;for(;;){if(i==n.endoffset)throw new Error("reading string without null termination");if(n.buffer.readUInt8(i)==r)break;i++}let s=n.buffer.toString(e,n.scan,i);return n.scan=i+1,s},write(n,r){if(typeof r!="string")throw new Error("string expected");let i=xr(n.args)<=Ze?10:0,s=[...t,...Buffer.from(r,e),i];n.buffer.set(s,n.scan),n.scan+=s.length},getTypescriptType(){return"string"},getJsonSchema(){return{type:"string"}}}}function Ai(t,e,n){let r=[],i=[];for(let u of e){u=u.replace(/\s/g,"");let d=u.split(/&&/g),l=[];for(let x of d){let p,m,f=0;if(x=="default"||x=="other")continue;{let h=x.match(/^((?<var>[\$a-zA-Z]\w*)?(?<op><|<=|>|>=|&|==|=|!&|&=|!=)?)?(?<version>0x[\da-fA=F]+|-?\d+)$/);if(!h)throw new Error("invalid match value, expected <op><version>. For example '>10'");f=parseInt(h.groups.version),p=h.groups.op??"=",p=="=="&&(p="="),m=h.groups.var??"$opcode"}let g=r.findIndex(h=>h.name==m);g==-1&&(g=r.length,r.push({name:m,parser:tn(t,m,(h,a)=>{if(!n)throw new Error("write not implemented");let o=n(h);for(let c=0;c<i.length;c++){let v=i[c];for(let y of v){if(y.varindex!=g)continue;let b=c==o,w=y.value;switch(y.op){case"=":a=b?w:a;break;case"!=":a=b?a:w;break;case"&":a=b?a|w:a&~w;break;case"&=":a=b?a|w:a&~w;break;case"!&":a=b?a&~w:a|w;break;case">=":a=b?Math.max(w,a):a;break;case">":a=b?Math.max(w+1,a):a;break;case"<=":a=b?Math.min(w,a):a;break;case"<":a=b?Math.min(w-1,a):a;break;default:throw new Error("unknown condition "+y.op)}}}return a})})),l.push({op:p,value:f,varname:m,varindex:g})}i.push(l)}return{match:u=>{let d=r.map(l=>l.parser.read(u));for(let l=0;l<i.length;l++){let x=i[l],p=!0;for(let m of x){let f=d[m.varindex];switch(m.op){case"=":p=f==m.value;break;case"!=":p=f!=m.value;break;case"<":p=f<m.value;break;case"<=":p=f<=m.value;break;case">":p=f>m.value;break;case">=":p=f>=m.value;break;case"&":p=(f&m.value)!=0;break;case"!&":p=(f&m.value)==0;break;case"&=":p=(f&m.value)==m.value;break;default:throw new Error("unknown op"+m.op)}if(!p)break}if(p)return l}return-1}}}const Ns={playeritem:function(){return{read(t){let e=t.buffer.readUInt8(t.scan++);if(e==0)return 0;let n=t.buffer.readUInt8(t.scan++);return n==255&&e==255?-1:e<<8|n},write(t,e){if(typeof e!="number")throw new Error("number expected");e==0?t.buffer.writeUInt8(0,t.scan++):(t.buffer.writeUint16BE(e==-1?65535:e&65535,t.scan),t.scan+=2)},getTypescriptType(){return"number"},getJsonSchema(){return{type:"integer",minimum:-1,maximum:49150}}}},itemvar:function(t){let e=t[0];if(typeof e!="string"||!["ref","matcount","colorcount","modelcount"].includes(e))throw new Error;return{read(n){let r=typeof n.args.activeitem=="number"?n.args.activeitem:-1;if(e=="ref"&&(r++,n.args.activeitem=r),!Array.isArray(n.args.slots))throw new Error("");let i=n.args.slots[r];if(e=="ref")return i;if(e=="matcount")return i?.replaceMaterials?.length??0;if(e=="colorcount")return i?.replaceColors?.length??0;if(e=="modelcount")return i?.models.length;throw new Error},write(){},getTypescriptType(){return e=="ref"?"any":"number"},getJsonSchema(){return{type:e=="ref"?"any":"integer"}}}},buildnr:function(t,e){return{readConst(n){return xr(n.args)},read(n){return xr(n.args)},write(n,r){},getTypescriptType(n){return"number"},getJsonSchema(){return{type:"number"}}}},match:function(t,e,n){let r={read(x){let p={$opcode:0};x.stack.push({}),x.hiddenstack.push(p);let m=s?s.read(x):0;p.$opcode=m;let f=l.match(x);if(f==-1)throw new Error("no opcode matched");let g=d[f].read(x);return x.stack.pop(),x.hiddenstack.pop(),g},write(x,p){let m={$opcode:0};if(x.stack.push({}),x.hiddenstack.push(m),s){if(!s.readConst)throw new Error("non-const or non-reference match value not implemented in write mode");m.$opcode=s.readConst(x)}let f=l.match(x);if(f==-1)throw new Error("no opcode matched");d[f].write(x,p),x.stack.pop(),x.hiddenstack.pop()},getTypescriptType(x){return"("+d.map(p=>p.getTypescriptType(x+"	")).join("|")+")"},getJsonSchema(){return{anyOf:d.map(x=>x.getJsonSchema())}}};const i=function(x,p){let m={stackdepth:p.stackdepth+1,resolve(f,g){throw new Error("write not supported")}};return x=="$opcode"?m:et(x,e,m)};if(t.length==1&&(t=[null,t[0]]),t.length!=2)throw new Error("match chunks needs 2 arguments");if(typeof t[1]!="object")throw new Error("match chunk requires 2n+2 arguments");let s=t[0]?Fe(i,t[0],n):null,u=Object.keys(t[1]),d=Object.values(t[1]).map(x=>Fe(i,x,n)),l=Ai(i,u);return r},footer:function(t,e,n){if(t.length!=2)throw new Error("footer requires length and subtype arguments");let r=Fe(e,t[0],n),i=Fe(e,t[1],n);return{read(s){let u=r.read(s),d=s.scan,l=s.endoffset-u;s.scan=l;let x=i.read(s);return s.scan!=s.endoffset&&console.log(`didn't read full footer, ${s.endoffset-s.scan} bytes left`),s.scan=d,s.endoffset=s.endoffset-u,x},write(s,u){let d=s.scan;i.write(s,u);let l=s.scan-d;s.buffer.copyWithin(s.endoffset-l,d,s.scan),s.scan=d,s.endoffset-=l},getTypescriptType(s){return i.getTypescriptType(s)},getJsonSchema(){return i.getJsonSchema()}}},"tailed varushort":function(t,e,n){return{read(i){let s=0;for(;;){let u=i.buffer.readUint8(i.scan++),d;if((u&128)==0)d=u;else{let l=i.buffer.readUint8(i.scan++);d=(u&127)<<8|l}if(s+=d,d!=32767)return s}},write(i,s){if(typeof s!="number")throw new Error("number expected");for(;s>=0;){let u=Math.min(32767,s);u<128?i.buffer.writeUint8(u,i.scan++):(i.buffer.writeUint16BE(u|32768,i.scan),i.scan+=2),s-=u}},getTypescriptType(i){return"number"},getJsonSchema(){return{type:"number"}}}},legacy_maptile:function(t,e,n){return{read(r){let i={flags:0,shape:null,overlay:null,settings:null,underlay:null,height:null};for(;;){let s=r.buffer.readUint8(r.scan++);if(s==0)break;if(s==1){i.height=r.buffer.readUint8(r.scan++);break}s>=2&&s<=49&&(i.shape=s-2,i.overlay=r.buffer.readUint8(r.scan),r.scan+=1),s>=50&&s<=81&&(i.settings=s-49),s>=82&&(i.underlay=s-81)}return i},write(r){throw new Error("not implemented")},getTypescriptType(r){let i=r+"	";return`{
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
${r}}`}}}};function xr(t){if(typeof t.clientVersion!="number")throw new Error("client version not set");return t.clientVersion}const Ls={ubyte:{read(t){let e=t.buffer.readUInt8(t.scan);return t.scan+=1,e},write(t,e){t.buffer.writeUInt8(e,t.scan),t.scan+=1},min:0,max:255},byte:{read(t){let e=t.buffer.readInt8(t.scan);return t.scan+=1,e},write(t,e){t.buffer.writeInt8(e,t.scan),t.scan+=1},min:-128,max:127},ushort:{read(t){let e=t.buffer.readUInt16BE(t.scan);return t.scan+=2,e},write(t,e){t.buffer.writeUInt16BE(e,t.scan),t.scan+=2},min:0,max:2**16-1},short:{read(t){let e=t.buffer.readInt16BE(t.scan);return t.scan+=2,e},write(t,e){t.buffer.writeInt16BE(e,t.scan),t.scan+=2},min:-32768,max:2**15-1},uint:{read(t){let e=t.buffer.readUInt32BE(t.scan);return t.scan+=4,e},write(t,e){t.buffer.writeUInt32BE(e,t.scan),t.scan+=4},min:0,max:2**32-1},int:{read(t){let e=t.buffer.readInt32BE(t.scan);return t.scan+=4,e},write(t,e){t.buffer.writeInt32BE(e,t.scan),t.scan+=4},min:-2147483648,max:2**31-1},uint_le:{read(t){let e=t.buffer.readUInt32LE(t.scan);return t.scan+=4,e},write(t,e){t.buffer.writeUint32LE(e,t.scan),t.scan+=4},min:0,max:2**32-1},ushort_le:{read(t){let e=t.buffer.readUInt16LE(t.scan);return t.scan+=2,e},write(t,e){t.buffer.writeUint16LE(e,t.scan),t.scan+=2},min:0,max:2**16-1},utribyte:{read(t){let e=t.buffer.readUIntBE(t.scan,3);return t.scan+=3,e},write(t,e){t.buffer.writeUintBE(e,t.scan,3),t.scan+=3},min:0,max:2**24-1},float:{read(t){let e=t.buffer.readFloatBE(t.scan);return t.scan+=4,e},write(t,e){t.buffer.writeFloatBE(e,t.scan),t.scan+=4},min:Number.MIN_VALUE,max:Number.MAX_VALUE},varushort:{read(t){let e=t.buffer.readUInt8(t.scan++);if((e&128)==0)return e;let n=t.buffer.readUInt8(t.scan++);return(e&127)<<8|n},write(t,e){e<128?(t.buffer.writeUInt8(e,t.scan),t.scan+=1):(t.buffer.writeUint16BE(e|32768,t.scan),t.scan+=2)},min:0,max:2**15-1},varshort:{read(t){let e=t.buffer.readUInt8(t.scan++);if((e&128)==0)return e<<25>>25;let n=t.buffer.readUInt8(t.scan++);return((e&127)<<8|n)<<17>>17},write(t,e){e<64&&e>=-64?(t.buffer.writeUInt8(e&127,t.scan),t.scan+=1):(t.buffer.writeInt16BE(e|32768,t.scan),t.scan+=2)},min:-16384,max:2**14-1},varuint:{read(t){let e=t.buffer.readUInt16BE(t.scan);if(t.scan+=2,(e&32768)==0)return e;{let n=t.buffer.readUInt16BE(t.scan);return t.scan+=2,(e&32767)<<16|n}},write(t,e){e<32768?(t.buffer.writeUInt16BE(e,t.scan),t.scan+=2):(t.buffer.writeUint32BE((e|2147483648)>>>0,t.scan),t.scan+=4)},min:0,max:2**31-1},varnullint:{read(t){let e=t.buffer.readUInt16BE(t.scan);if(t.scan+=2,e==32767)return-1;if((e&32768)==0)return e;{let n=t.buffer.readUInt16BE(t.scan);return t.scan+=2,(e&32767)<<16|n}},write(t,e){e==-1?(t.buffer.writeUint16BE(32767,t.scan),t.scan+=2):e<32768?(t.buffer.writeUInt16BE(e,t.scan),t.scan+=2):(t.buffer.writeUint32BE((e|2147483648)>>>0,t.scan),t.scan+=4)},min:-1,max:2**31-1},varint:{read(t){let e=t.buffer.readUInt16BE(t.scan);if(t.scan+=2,(e&32768)==0)return e<<17>>17;let n=t.buffer.readUInt16BE(t.scan);return t.scan+=2,((e&32767)<<16|n)<<1>>1},write(t,e){e<16384&&e>=-16384?(t.buffer.writeUInt16BE(e&32767,t.scan),t.scan+=2):(t.buffer.writeInt32BE(e|8388608,t.scan),t.scan+=4)},min:-1073741824,max:2**30-1}},er={...Object.fromEntries(Object.entries(Ls).map(([t,e])=>[t,{read:e.read,write:(n,r)=>{if(typeof r!="number"||r>e.max||r<e.min)throw new Error;e.write(n,r)},getJsonSchema(){return{type:"number",maximum:e.max,minimum:e.min}},getTypescriptType(n){return"number"}}])),bool:{read(t){let e=t.buffer.readUInt8(t.scan++);if(e!=0&&e!=1)throw new Error("1 or 0 expected boolean value");return e!=0},write(t,e){if(typeof e!="boolean")throw new Error("boolean expected");t.buffer.writeUInt8(+e,t.scan++)},getJsonSchema(){return{type:"boolean"}},getTypescriptType(t){return"boolean"}},string:Mn([]),paddedstring:Mn([0])},Nn={ref:Is,accum:Ms,opt:As,chunkedarray:Cs,bytesleft:Bs,buffer:Ts,nullarray:ks,array:Fs,struct:Ds,tuple:Es,...Ns,...er};var fr={exports:{}},Ps=fr.exports,Ln;function Rs(){return Ln||(Ln=1,(function(t,e){(function(r,i){t.exports=i()})(Ps,function(){return(function(n){var r={};function i(s){if(r[s])return r[s].exports;var u=r[s]={exports:{},id:s,loaded:!1};return n[s].call(u.exports,u,u.exports,i),u.loaded=!0,u.exports}return i.m=n,i.c=r,i.p="",i(0)})([function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(1),u=i(3),d=i(8),l=i(15);function x(h,a,o){var c=null,v=function(T,D){o&&o(T,D),c&&c.visit(T,D)},y=typeof o=="function"?v:null,b=!1;if(a){b=typeof a.comment=="boolean"&&a.comment;var w=typeof a.attachComment=="boolean"&&a.attachComment;(b||w)&&(c=new s.CommentHandler,c.attach=w,a.comment=!0,y=v)}var _=!1;a&&typeof a.sourceType=="string"&&(_=a.sourceType==="module");var E;a&&typeof a.jsx=="boolean"&&a.jsx?E=new u.JSXParser(h,a,y):E=new d.Parser(h,a,y);var S=_?E.parseModule():E.parseScript(),A=S;return b&&c&&(A.comments=c.comments),E.config.tokens&&(A.tokens=E.tokens),E.config.tolerant&&(A.errors=E.errorHandler.errors),A}r.parse=x;function p(h,a,o){var c=a||{};return c.sourceType="module",x(h,c,o)}r.parseModule=p;function m(h,a,o){var c=a||{};return c.sourceType="script",x(h,c,o)}r.parseScript=m;function f(h,a,o){var c=new l.Tokenizer(h,a),v;v=[];try{for(;;){var y=c.getNextToken();if(!y)break;o&&(y=o(y)),v.push(y)}}catch(b){c.errorHandler.tolerate(b)}return c.errorHandler.tolerant&&(v.errors=c.errors()),v}r.tokenize=f;var g=i(2);r.Syntax=g.Syntax,r.version="4.0.1"},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(2),u=(function(){function d(){this.attach=!1,this.comments=[],this.stack=[],this.leading=[],this.trailing=[]}return d.prototype.insertInnerComments=function(l,x){if(l.type===s.Syntax.BlockStatement&&l.body.length===0){for(var p=[],m=this.leading.length-1;m>=0;--m){var f=this.leading[m];x.end.offset>=f.start&&(p.unshift(f.comment),this.leading.splice(m,1),this.trailing.splice(m,1))}p.length&&(l.innerComments=p)}},d.prototype.findTrailingComments=function(l){var x=[];if(this.trailing.length>0){for(var p=this.trailing.length-1;p>=0;--p){var m=this.trailing[p];m.start>=l.end.offset&&x.unshift(m.comment)}return this.trailing.length=0,x}var f=this.stack[this.stack.length-1];if(f&&f.node.trailingComments){var g=f.node.trailingComments[0];g&&g.range[0]>=l.end.offset&&(x=f.node.trailingComments,delete f.node.trailingComments)}return x},d.prototype.findLeadingComments=function(l){for(var x=[],p;this.stack.length>0;){var m=this.stack[this.stack.length-1];if(m&&m.start>=l.start.offset)p=m.node,this.stack.pop();else break}if(p){for(var f=p.leadingComments?p.leadingComments.length:0,g=f-1;g>=0;--g){var h=p.leadingComments[g];h.range[1]<=l.start.offset&&(x.unshift(h),p.leadingComments.splice(g,1))}return p.leadingComments&&p.leadingComments.length===0&&delete p.leadingComments,x}for(var g=this.leading.length-1;g>=0;--g){var m=this.leading[g];m.start<=l.start.offset&&(x.unshift(m.comment),this.leading.splice(g,1))}return x},d.prototype.visitNode=function(l,x){if(!(l.type===s.Syntax.Program&&l.body.length>0)){this.insertInnerComments(l,x);var p=this.findTrailingComments(x),m=this.findLeadingComments(x);m.length>0&&(l.leadingComments=m),p.length>0&&(l.trailingComments=p),this.stack.push({node:l,start:x.start.offset})}},d.prototype.visitComment=function(l,x){var p=l.type[0]==="L"?"Line":"Block",m={type:p,value:l.value};if(l.range&&(m.range=l.range),l.loc&&(m.loc=l.loc),this.comments.push(m),this.attach){var f={comment:{type:p,value:l.value,range:[x.start.offset,x.end.offset]},start:x.start.offset};l.loc&&(f.comment.loc=l.loc),l.type=p,this.leading.push(f),this.trailing.push(f)}},d.prototype.visit=function(l,x){l.type==="LineComment"?this.visitComment(l,x):l.type==="BlockComment"?this.visitComment(l,x):this.attach&&this.visitNode(l,x)},d})();r.CommentHandler=u},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.Syntax={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DoWhileStatement:"DoWhileStatement",DebuggerStatement:"DebuggerStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForOfStatement:"ForOfStatement",ForInStatement:"ForInStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",Program:"Program",Property:"Property",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchCase:"SwitchCase",SwitchStatement:"SwitchStatement",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"}},function(n,r,i){var s=this&&this.__extends||(function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,c){o.__proto__=c}||function(o,c){for(var v in c)c.hasOwnProperty(v)&&(o[v]=c[v])};return function(o,c){a(o,c);function v(){this.constructor=o}o.prototype=c===null?Object.create(c):(v.prototype=c.prototype,new v)}})();Object.defineProperty(r,"__esModule",{value:!0});var u=i(4),d=i(5),l=i(6),x=i(7),p=i(8),m=i(13),f=i(14);m.TokenName[100]="JSXIdentifier",m.TokenName[101]="JSXText";function g(a){var o;switch(a.type){case l.JSXSyntax.JSXIdentifier:var c=a;o=c.name;break;case l.JSXSyntax.JSXNamespacedName:var v=a;o=g(v.namespace)+":"+g(v.name);break;case l.JSXSyntax.JSXMemberExpression:var y=a;o=g(y.object)+"."+g(y.property);break}return o}var h=(function(a){s(o,a);function o(c,v,y){return a.call(this,c,v,y)||this}return o.prototype.parsePrimaryExpression=function(){return this.match("<")?this.parseJSXRoot():a.prototype.parsePrimaryExpression.call(this)},o.prototype.startJSX=function(){this.scanner.index=this.startMarker.index,this.scanner.lineNumber=this.startMarker.line,this.scanner.lineStart=this.startMarker.index-this.startMarker.column},o.prototype.finishJSX=function(){this.nextToken()},o.prototype.reenterJSX=function(){this.startJSX(),this.expectJSX("}"),this.config.tokens&&this.tokens.pop()},o.prototype.createJSXNode=function(){return this.collectComments(),{index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}},o.prototype.createJSXChildNode=function(){return{index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}},o.prototype.scanXHTMLEntity=function(c){for(var v="&",y=!0,b=!1,w=!1,_=!1;!this.scanner.eof()&&y&&!b;){var E=this.scanner.source[this.scanner.index];if(E===c)break;if(b=E===";",v+=E,++this.scanner.index,!b)switch(v.length){case 2:w=E==="#";break;case 3:w&&(_=E==="x",y=_||u.Character.isDecimalDigit(E.charCodeAt(0)),w=w&&!_);break;default:y=y&&!(w&&!u.Character.isDecimalDigit(E.charCodeAt(0))),y=y&&!(_&&!u.Character.isHexDigit(E.charCodeAt(0)));break}}if(y&&b&&v.length>2){var S=v.substr(1,v.length-2);w&&S.length>1?v=String.fromCharCode(parseInt(S.substr(1),10)):_&&S.length>2?v=String.fromCharCode(parseInt("0"+S.substr(1),16)):!w&&!_&&f.XHTMLEntities[S]&&(v=f.XHTMLEntities[S])}return v},o.prototype.lexJSX=function(){var c=this.scanner.source.charCodeAt(this.scanner.index);if(c===60||c===62||c===47||c===58||c===61||c===123||c===125){var v=this.scanner.source[this.scanner.index++];return{type:7,value:v,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:this.scanner.index-1,end:this.scanner.index}}if(c===34||c===39){for(var y=this.scanner.index,b=this.scanner.source[this.scanner.index++],w="";!this.scanner.eof();){var _=this.scanner.source[this.scanner.index++];if(_===b)break;_==="&"?w+=this.scanXHTMLEntity(b):w+=_}return{type:8,value:w,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:y,end:this.scanner.index}}if(c===46){var E=this.scanner.source.charCodeAt(this.scanner.index+1),S=this.scanner.source.charCodeAt(this.scanner.index+2),v=E===46&&S===46?"...":".",y=this.scanner.index;return this.scanner.index+=v.length,{type:7,value:v,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:y,end:this.scanner.index}}if(c===96)return{type:10,value:"",lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:this.scanner.index,end:this.scanner.index};if(u.Character.isIdentifierStart(c)&&c!==92){var y=this.scanner.index;for(++this.scanner.index;!this.scanner.eof();){var _=this.scanner.source.charCodeAt(this.scanner.index);if(u.Character.isIdentifierPart(_)&&_!==92)++this.scanner.index;else if(_===45)++this.scanner.index;else break}var A=this.scanner.source.slice(y,this.scanner.index);return{type:100,value:A,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:y,end:this.scanner.index}}return this.scanner.lex()},o.prototype.nextJSXToken=function(){this.collectComments(),this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart;var c=this.lexJSX();return this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart,this.config.tokens&&this.tokens.push(this.convertToken(c)),c},o.prototype.nextJSXText=function(){this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart;for(var c=this.scanner.index,v="";!this.scanner.eof();){var y=this.scanner.source[this.scanner.index];if(y==="{"||y==="<")break;++this.scanner.index,v+=y,u.Character.isLineTerminator(y.charCodeAt(0))&&(++this.scanner.lineNumber,y==="\r"&&this.scanner.source[this.scanner.index]===`
`&&++this.scanner.index,this.scanner.lineStart=this.scanner.index)}this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart;var b={type:101,value:v,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:c,end:this.scanner.index};return v.length>0&&this.config.tokens&&this.tokens.push(this.convertToken(b)),b},o.prototype.peekJSXToken=function(){var c=this.scanner.saveState();this.scanner.scanComments();var v=this.lexJSX();return this.scanner.restoreState(c),v},o.prototype.expectJSX=function(c){var v=this.nextJSXToken();(v.type!==7||v.value!==c)&&this.throwUnexpectedToken(v)},o.prototype.matchJSX=function(c){var v=this.peekJSXToken();return v.type===7&&v.value===c},o.prototype.parseJSXIdentifier=function(){var c=this.createJSXNode(),v=this.nextJSXToken();return v.type!==100&&this.throwUnexpectedToken(v),this.finalize(c,new d.JSXIdentifier(v.value))},o.prototype.parseJSXElementName=function(){var c=this.createJSXNode(),v=this.parseJSXIdentifier();if(this.matchJSX(":")){var y=v;this.expectJSX(":");var b=this.parseJSXIdentifier();v=this.finalize(c,new d.JSXNamespacedName(y,b))}else if(this.matchJSX("."))for(;this.matchJSX(".");){var w=v;this.expectJSX(".");var _=this.parseJSXIdentifier();v=this.finalize(c,new d.JSXMemberExpression(w,_))}return v},o.prototype.parseJSXAttributeName=function(){var c=this.createJSXNode(),v,y=this.parseJSXIdentifier();if(this.matchJSX(":")){var b=y;this.expectJSX(":");var w=this.parseJSXIdentifier();v=this.finalize(c,new d.JSXNamespacedName(b,w))}else v=y;return v},o.prototype.parseJSXStringLiteralAttribute=function(){var c=this.createJSXNode(),v=this.nextJSXToken();v.type!==8&&this.throwUnexpectedToken(v);var y=this.getTokenRaw(v);return this.finalize(c,new x.Literal(v.value,y))},o.prototype.parseJSXExpressionAttribute=function(){var c=this.createJSXNode();this.expectJSX("{"),this.finishJSX(),this.match("}")&&this.tolerateError("JSX attributes must only be assigned a non-empty expression");var v=this.parseAssignmentExpression();return this.reenterJSX(),this.finalize(c,new d.JSXExpressionContainer(v))},o.prototype.parseJSXAttributeValue=function(){return this.matchJSX("{")?this.parseJSXExpressionAttribute():this.matchJSX("<")?this.parseJSXElement():this.parseJSXStringLiteralAttribute()},o.prototype.parseJSXNameValueAttribute=function(){var c=this.createJSXNode(),v=this.parseJSXAttributeName(),y=null;return this.matchJSX("=")&&(this.expectJSX("="),y=this.parseJSXAttributeValue()),this.finalize(c,new d.JSXAttribute(v,y))},o.prototype.parseJSXSpreadAttribute=function(){var c=this.createJSXNode();this.expectJSX("{"),this.expectJSX("..."),this.finishJSX();var v=this.parseAssignmentExpression();return this.reenterJSX(),this.finalize(c,new d.JSXSpreadAttribute(v))},o.prototype.parseJSXAttributes=function(){for(var c=[];!this.matchJSX("/")&&!this.matchJSX(">");){var v=this.matchJSX("{")?this.parseJSXSpreadAttribute():this.parseJSXNameValueAttribute();c.push(v)}return c},o.prototype.parseJSXOpeningElement=function(){var c=this.createJSXNode();this.expectJSX("<");var v=this.parseJSXElementName(),y=this.parseJSXAttributes(),b=this.matchJSX("/");return b&&this.expectJSX("/"),this.expectJSX(">"),this.finalize(c,new d.JSXOpeningElement(v,b,y))},o.prototype.parseJSXBoundaryElement=function(){var c=this.createJSXNode();if(this.expectJSX("<"),this.matchJSX("/")){this.expectJSX("/");var v=this.parseJSXElementName();return this.expectJSX(">"),this.finalize(c,new d.JSXClosingElement(v))}var y=this.parseJSXElementName(),b=this.parseJSXAttributes(),w=this.matchJSX("/");return w&&this.expectJSX("/"),this.expectJSX(">"),this.finalize(c,new d.JSXOpeningElement(y,w,b))},o.prototype.parseJSXEmptyExpression=function(){var c=this.createJSXChildNode();return this.collectComments(),this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart,this.finalize(c,new d.JSXEmptyExpression)},o.prototype.parseJSXExpressionContainer=function(){var c=this.createJSXNode();this.expectJSX("{");var v;return this.matchJSX("}")?(v=this.parseJSXEmptyExpression(),this.expectJSX("}")):(this.finishJSX(),v=this.parseAssignmentExpression(),this.reenterJSX()),this.finalize(c,new d.JSXExpressionContainer(v))},o.prototype.parseJSXChildren=function(){for(var c=[];!this.scanner.eof();){var v=this.createJSXChildNode(),y=this.nextJSXText();if(y.start<y.end){var b=this.getTokenRaw(y),w=this.finalize(v,new d.JSXText(y.value,b));c.push(w)}if(this.scanner.source[this.scanner.index]==="{"){var _=this.parseJSXExpressionContainer();c.push(_)}else break}return c},o.prototype.parseComplexJSXElement=function(c){for(var v=[];!this.scanner.eof();){c.children=c.children.concat(this.parseJSXChildren());var y=this.createJSXChildNode(),b=this.parseJSXBoundaryElement();if(b.type===l.JSXSyntax.JSXOpeningElement){var w=b;if(w.selfClosing){var _=this.finalize(y,new d.JSXElement(w,[],null));c.children.push(_)}else v.push(c),c={node:y,opening:w,closing:null,children:[]}}if(b.type===l.JSXSyntax.JSXClosingElement){c.closing=b;var E=g(c.opening.name),S=g(c.closing.name);if(E!==S&&this.tolerateError("Expected corresponding JSX closing tag for %0",E),v.length>0){var _=this.finalize(c.node,new d.JSXElement(c.opening,c.children,c.closing));c=v[v.length-1],c.children.push(_),v.pop()}else break}}return c},o.prototype.parseJSXElement=function(){var c=this.createJSXNode(),v=this.parseJSXOpeningElement(),y=[],b=null;if(!v.selfClosing){var w=this.parseComplexJSXElement({node:c,opening:v,closing:b,children:y});y=w.children,b=w.closing}return this.finalize(c,new d.JSXElement(v,y,b))},o.prototype.parseJSXRoot=function(){this.config.tokens&&this.tokens.pop(),this.startJSX();var c=this.parseJSXElement();return this.finishJSX(),c},o.prototype.isStartOfExpression=function(){return a.prototype.isStartOfExpression.call(this)||this.match("<")},o})(p.Parser);r.JSXParser=h},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,NonAsciiIdentifierPart:/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/};r.Character={fromCodePoint:function(s){return s<65536?String.fromCharCode(s):String.fromCharCode(55296+(s-65536>>10))+String.fromCharCode(56320+(s-65536&1023))},isWhiteSpace:function(s){return s===32||s===9||s===11||s===12||s===160||s>=5760&&[5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279].indexOf(s)>=0},isLineTerminator:function(s){return s===10||s===13||s===8232||s===8233},isIdentifierStart:function(s){return s===36||s===95||s>=65&&s<=90||s>=97&&s<=122||s===92||s>=128&&i.NonAsciiIdentifierStart.test(r.Character.fromCodePoint(s))},isIdentifierPart:function(s){return s===36||s===95||s>=65&&s<=90||s>=97&&s<=122||s>=48&&s<=57||s===92||s>=128&&i.NonAsciiIdentifierPart.test(r.Character.fromCodePoint(s))},isDecimalDigit:function(s){return s>=48&&s<=57},isHexDigit:function(s){return s>=48&&s<=57||s>=65&&s<=70||s>=97&&s<=102},isOctalDigit:function(s){return s>=48&&s<=55}}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(6),u=(function(){function c(v){this.type=s.JSXSyntax.JSXClosingElement,this.name=v}return c})();r.JSXClosingElement=u;var d=(function(){function c(v,y,b){this.type=s.JSXSyntax.JSXElement,this.openingElement=v,this.children=y,this.closingElement=b}return c})();r.JSXElement=d;var l=(function(){function c(){this.type=s.JSXSyntax.JSXEmptyExpression}return c})();r.JSXEmptyExpression=l;var x=(function(){function c(v){this.type=s.JSXSyntax.JSXExpressionContainer,this.expression=v}return c})();r.JSXExpressionContainer=x;var p=(function(){function c(v){this.type=s.JSXSyntax.JSXIdentifier,this.name=v}return c})();r.JSXIdentifier=p;var m=(function(){function c(v,y){this.type=s.JSXSyntax.JSXMemberExpression,this.object=v,this.property=y}return c})();r.JSXMemberExpression=m;var f=(function(){function c(v,y){this.type=s.JSXSyntax.JSXAttribute,this.name=v,this.value=y}return c})();r.JSXAttribute=f;var g=(function(){function c(v,y){this.type=s.JSXSyntax.JSXNamespacedName,this.namespace=v,this.name=y}return c})();r.JSXNamespacedName=g;var h=(function(){function c(v,y,b){this.type=s.JSXSyntax.JSXOpeningElement,this.name=v,this.selfClosing=y,this.attributes=b}return c})();r.JSXOpeningElement=h;var a=(function(){function c(v){this.type=s.JSXSyntax.JSXSpreadAttribute,this.argument=v}return c})();r.JSXSpreadAttribute=a;var o=(function(){function c(v,y){this.type=s.JSXSyntax.JSXText,this.value=v,this.raw=y}return c})();r.JSXText=o},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.JSXSyntax={JSXAttribute:"JSXAttribute",JSXClosingElement:"JSXClosingElement",JSXElement:"JSXElement",JSXEmptyExpression:"JSXEmptyExpression",JSXExpressionContainer:"JSXExpressionContainer",JSXIdentifier:"JSXIdentifier",JSXMemberExpression:"JSXMemberExpression",JSXNamespacedName:"JSXNamespacedName",JSXOpeningElement:"JSXOpeningElement",JSXSpreadAttribute:"JSXSpreadAttribute",JSXText:"JSXText"}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(2),u=(function(){function F(k){this.type=s.Syntax.ArrayExpression,this.elements=k}return F})();r.ArrayExpression=u;var d=(function(){function F(k){this.type=s.Syntax.ArrayPattern,this.elements=k}return F})();r.ArrayPattern=d;var l=(function(){function F(k,R,le){this.type=s.Syntax.ArrowFunctionExpression,this.id=null,this.params=k,this.body=R,this.generator=!1,this.expression=le,this.async=!1}return F})();r.ArrowFunctionExpression=l;var x=(function(){function F(k,R,le){this.type=s.Syntax.AssignmentExpression,this.operator=k,this.left=R,this.right=le}return F})();r.AssignmentExpression=x;var p=(function(){function F(k,R){this.type=s.Syntax.AssignmentPattern,this.left=k,this.right=R}return F})();r.AssignmentPattern=p;var m=(function(){function F(k,R,le){this.type=s.Syntax.ArrowFunctionExpression,this.id=null,this.params=k,this.body=R,this.generator=!1,this.expression=le,this.async=!0}return F})();r.AsyncArrowFunctionExpression=m;var f=(function(){function F(k,R,le){this.type=s.Syntax.FunctionDeclaration,this.id=k,this.params=R,this.body=le,this.generator=!1,this.expression=!1,this.async=!0}return F})();r.AsyncFunctionDeclaration=f;var g=(function(){function F(k,R,le){this.type=s.Syntax.FunctionExpression,this.id=k,this.params=R,this.body=le,this.generator=!1,this.expression=!1,this.async=!0}return F})();r.AsyncFunctionExpression=g;var h=(function(){function F(k){this.type=s.Syntax.AwaitExpression,this.argument=k}return F})();r.AwaitExpression=h;var a=(function(){function F(k,R,le){var De=k==="||"||k==="&&";this.type=De?s.Syntax.LogicalExpression:s.Syntax.BinaryExpression,this.operator=k,this.left=R,this.right=le}return F})();r.BinaryExpression=a;var o=(function(){function F(k){this.type=s.Syntax.BlockStatement,this.body=k}return F})();r.BlockStatement=o;var c=(function(){function F(k){this.type=s.Syntax.BreakStatement,this.label=k}return F})();r.BreakStatement=c;var v=(function(){function F(k,R){this.type=s.Syntax.CallExpression,this.callee=k,this.arguments=R}return F})();r.CallExpression=v;var y=(function(){function F(k,R){this.type=s.Syntax.CatchClause,this.param=k,this.body=R}return F})();r.CatchClause=y;var b=(function(){function F(k){this.type=s.Syntax.ClassBody,this.body=k}return F})();r.ClassBody=b;var w=(function(){function F(k,R,le){this.type=s.Syntax.ClassDeclaration,this.id=k,this.superClass=R,this.body=le}return F})();r.ClassDeclaration=w;var _=(function(){function F(k,R,le){this.type=s.Syntax.ClassExpression,this.id=k,this.superClass=R,this.body=le}return F})();r.ClassExpression=_;var E=(function(){function F(k,R){this.type=s.Syntax.MemberExpression,this.computed=!0,this.object=k,this.property=R}return F})();r.ComputedMemberExpression=E;var S=(function(){function F(k,R,le){this.type=s.Syntax.ConditionalExpression,this.test=k,this.consequent=R,this.alternate=le}return F})();r.ConditionalExpression=S;var A=(function(){function F(k){this.type=s.Syntax.ContinueStatement,this.label=k}return F})();r.ContinueStatement=A;var T=(function(){function F(){this.type=s.Syntax.DebuggerStatement}return F})();r.DebuggerStatement=T;var D=(function(){function F(k,R){this.type=s.Syntax.ExpressionStatement,this.expression=k,this.directive=R}return F})();r.Directive=D;var I=(function(){function F(k,R){this.type=s.Syntax.DoWhileStatement,this.body=k,this.test=R}return F})();r.DoWhileStatement=I;var B=(function(){function F(){this.type=s.Syntax.EmptyStatement}return F})();r.EmptyStatement=B;var M=(function(){function F(k){this.type=s.Syntax.ExportAllDeclaration,this.source=k}return F})();r.ExportAllDeclaration=M;var L=(function(){function F(k){this.type=s.Syntax.ExportDefaultDeclaration,this.declaration=k}return F})();r.ExportDefaultDeclaration=L;var U=(function(){function F(k,R,le){this.type=s.Syntax.ExportNamedDeclaration,this.declaration=k,this.specifiers=R,this.source=le}return F})();r.ExportNamedDeclaration=U;var N=(function(){function F(k,R){this.type=s.Syntax.ExportSpecifier,this.exported=R,this.local=k}return F})();r.ExportSpecifier=N;var O=(function(){function F(k){this.type=s.Syntax.ExpressionStatement,this.expression=k}return F})();r.ExpressionStatement=O;var q=(function(){function F(k,R,le){this.type=s.Syntax.ForInStatement,this.left=k,this.right=R,this.body=le,this.each=!1}return F})();r.ForInStatement=q;var V=(function(){function F(k,R,le){this.type=s.Syntax.ForOfStatement,this.left=k,this.right=R,this.body=le}return F})();r.ForOfStatement=V;var G=(function(){function F(k,R,le,De){this.type=s.Syntax.ForStatement,this.init=k,this.test=R,this.update=le,this.body=De}return F})();r.ForStatement=G;var re=(function(){function F(k,R,le,De){this.type=s.Syntax.FunctionDeclaration,this.id=k,this.params=R,this.body=le,this.generator=De,this.expression=!1,this.async=!1}return F})();r.FunctionDeclaration=re;var ce=(function(){function F(k,R,le,De){this.type=s.Syntax.FunctionExpression,this.id=k,this.params=R,this.body=le,this.generator=De,this.expression=!1,this.async=!1}return F})();r.FunctionExpression=ce;var se=(function(){function F(k){this.type=s.Syntax.Identifier,this.name=k}return F})();r.Identifier=se;var de=(function(){function F(k,R,le){this.type=s.Syntax.IfStatement,this.test=k,this.consequent=R,this.alternate=le}return F})();r.IfStatement=de;var Y=(function(){function F(k,R){this.type=s.Syntax.ImportDeclaration,this.specifiers=k,this.source=R}return F})();r.ImportDeclaration=Y;var K=(function(){function F(k){this.type=s.Syntax.ImportDefaultSpecifier,this.local=k}return F})();r.ImportDefaultSpecifier=K;var W=(function(){function F(k){this.type=s.Syntax.ImportNamespaceSpecifier,this.local=k}return F})();r.ImportNamespaceSpecifier=W;var Z=(function(){function F(k,R){this.type=s.Syntax.ImportSpecifier,this.local=k,this.imported=R}return F})();r.ImportSpecifier=Z;var Q=(function(){function F(k,R){this.type=s.Syntax.LabeledStatement,this.label=k,this.body=R}return F})();r.LabeledStatement=Q;var P=(function(){function F(k,R){this.type=s.Syntax.Literal,this.value=k,this.raw=R}return F})();r.Literal=P;var $=(function(){function F(k,R){this.type=s.Syntax.MetaProperty,this.meta=k,this.property=R}return F})();r.MetaProperty=$;var ee=(function(){function F(k,R,le,De,Ht){this.type=s.Syntax.MethodDefinition,this.key=k,this.computed=R,this.value=le,this.kind=De,this.static=Ht}return F})();r.MethodDefinition=ee;var oe=(function(){function F(k){this.type=s.Syntax.Program,this.body=k,this.sourceType="module"}return F})();r.Module=oe;var be=(function(){function F(k,R){this.type=s.Syntax.NewExpression,this.callee=k,this.arguments=R}return F})();r.NewExpression=be;var ke=(function(){function F(k){this.type=s.Syntax.ObjectExpression,this.properties=k}return F})();r.ObjectExpression=ke;var ye=(function(){function F(k){this.type=s.Syntax.ObjectPattern,this.properties=k}return F})();r.ObjectPattern=ye;var Ne=(function(){function F(k,R,le,De,Ht,Br){this.type=s.Syntax.Property,this.key=R,this.computed=le,this.value=De,this.kind=k,this.method=Ht,this.shorthand=Br}return F})();r.Property=Ne;var ne=(function(){function F(k,R,le,De){this.type=s.Syntax.Literal,this.value=k,this.raw=R,this.regex={pattern:le,flags:De}}return F})();r.RegexLiteral=ne;var X=(function(){function F(k){this.type=s.Syntax.RestElement,this.argument=k}return F})();r.RestElement=X;var ae=(function(){function F(k){this.type=s.Syntax.ReturnStatement,this.argument=k}return F})();r.ReturnStatement=ae;var j=(function(){function F(k){this.type=s.Syntax.Program,this.body=k,this.sourceType="script"}return F})();r.Script=j;var me=(function(){function F(k){this.type=s.Syntax.SequenceExpression,this.expressions=k}return F})();r.SequenceExpression=me;var Oe=(function(){function F(k){this.type=s.Syntax.SpreadElement,this.argument=k}return F})();r.SpreadElement=Oe;var _e=(function(){function F(k,R){this.type=s.Syntax.MemberExpression,this.computed=!1,this.object=k,this.property=R}return F})();r.StaticMemberExpression=_e;var pe=(function(){function F(){this.type=s.Syntax.Super}return F})();r.Super=pe;var Se=(function(){function F(k,R){this.type=s.Syntax.SwitchCase,this.test=k,this.consequent=R}return F})();r.SwitchCase=Se;var Ee=(function(){function F(k,R){this.type=s.Syntax.SwitchStatement,this.discriminant=k,this.cases=R}return F})();r.SwitchStatement=Ee;var ge=(function(){function F(k,R){this.type=s.Syntax.TaggedTemplateExpression,this.tag=k,this.quasi=R}return F})();r.TaggedTemplateExpression=ge;var we=(function(){function F(k,R){this.type=s.Syntax.TemplateElement,this.value=k,this.tail=R}return F})();r.TemplateElement=we;var qe=(function(){function F(k,R){this.type=s.Syntax.TemplateLiteral,this.quasis=k,this.expressions=R}return F})();r.TemplateLiteral=qe;var ot=(function(){function F(){this.type=s.Syntax.ThisExpression}return F})();r.ThisExpression=ot;var lt=(function(){function F(k){this.type=s.Syntax.ThrowStatement,this.argument=k}return F})();r.ThrowStatement=lt;var zt=(function(){function F(k,R,le){this.type=s.Syntax.TryStatement,this.block=k,this.handler=R,this.finalizer=le}return F})();r.TryStatement=zt;var Vt=(function(){function F(k,R){this.type=s.Syntax.UnaryExpression,this.operator=k,this.argument=R,this.prefix=!0}return F})();r.UnaryExpression=Vt;var jt=(function(){function F(k,R,le){this.type=s.Syntax.UpdateExpression,this.operator=k,this.argument=R,this.prefix=le}return F})();r.UpdateExpression=jt;var qt=(function(){function F(k,R){this.type=s.Syntax.VariableDeclaration,this.declarations=k,this.kind=R}return F})();r.VariableDeclaration=qt;var Xt=(function(){function F(k,R){this.type=s.Syntax.VariableDeclarator,this.id=k,this.init=R}return F})();r.VariableDeclarator=Xt;var vt=(function(){function F(k,R){this.type=s.Syntax.WhileStatement,this.test=k,this.body=R}return F})();r.WhileStatement=vt;var xt=(function(){function F(k,R){this.type=s.Syntax.WithStatement,this.object=k,this.body=R}return F})();r.WithStatement=xt;var yt=(function(){function F(k,R){this.type=s.Syntax.YieldExpression,this.argument=k,this.delegate=R}return F})();r.YieldExpression=yt},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(9),u=i(10),d=i(11),l=i(7),x=i(12),p=i(2),m=i(13),f="ArrowParameterPlaceHolder",g=(function(){function h(a,o,c){o===void 0&&(o={}),this.config={range:typeof o.range=="boolean"&&o.range,loc:typeof o.loc=="boolean"&&o.loc,source:null,tokens:typeof o.tokens=="boolean"&&o.tokens,comment:typeof o.comment=="boolean"&&o.comment,tolerant:typeof o.tolerant=="boolean"&&o.tolerant},this.config.loc&&o.source&&o.source!==null&&(this.config.source=String(o.source)),this.delegate=c,this.errorHandler=new u.ErrorHandler,this.errorHandler.tolerant=this.config.tolerant,this.scanner=new x.Scanner(a,this.errorHandler),this.scanner.trackComment=this.config.comment,this.operatorPrecedence={")":0,";":0,",":0,"=":0,"]":0,"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":11,"/":11,"%":11},this.lookahead={type:2,value:"",lineNumber:this.scanner.lineNumber,lineStart:0,start:0,end:0},this.hasLineTerminator=!1,this.context={isModule:!1,await:!1,allowIn:!0,allowStrictDirective:!0,allowYield:!0,firstCoverInitializedNameError:null,isAssignmentTarget:!1,isBindingElement:!1,inFunctionBody:!1,inIteration:!1,inSwitch:!1,labelSet:{},strict:!1},this.tokens=[],this.startMarker={index:0,line:this.scanner.lineNumber,column:0},this.lastMarker={index:0,line:this.scanner.lineNumber,column:0},this.nextToken(),this.lastMarker={index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}}return h.prototype.throwError=function(a){var o=Array.prototype.slice.call(arguments,1),c=a.replace(/%(\d)/g,function(w,_){return s.assert(_<o.length,"Message reference must be in range"),o[_]}),v=this.lastMarker.index,y=this.lastMarker.line,b=this.lastMarker.column+1;throw this.errorHandler.createError(v,y,b,c)},h.prototype.tolerateError=function(a){var o=Array.prototype.slice.call(arguments,1),c=a.replace(/%(\d)/g,function(w,_){return s.assert(_<o.length,"Message reference must be in range"),o[_]}),v=this.lastMarker.index,y=this.scanner.lineNumber,b=this.lastMarker.column+1;this.errorHandler.tolerateError(v,y,b,c)},h.prototype.unexpectedTokenError=function(a,o){var c=o||d.Messages.UnexpectedToken,v;if(a?(o||(c=a.type===2?d.Messages.UnexpectedEOS:a.type===3?d.Messages.UnexpectedIdentifier:a.type===6?d.Messages.UnexpectedNumber:a.type===8?d.Messages.UnexpectedString:a.type===10?d.Messages.UnexpectedTemplate:d.Messages.UnexpectedToken,a.type===4&&(this.scanner.isFutureReservedWord(a.value)?c=d.Messages.UnexpectedReserved:this.context.strict&&this.scanner.isStrictModeReservedWord(a.value)&&(c=d.Messages.StrictReservedWord))),v=a.value):v="ILLEGAL",c=c.replace("%0",v),a&&typeof a.lineNumber=="number"){var y=a.start,b=a.lineNumber,w=this.lastMarker.index-this.lastMarker.column,_=a.start-w+1;return this.errorHandler.createError(y,b,_,c)}else{var y=this.lastMarker.index,b=this.lastMarker.line,_=this.lastMarker.column+1;return this.errorHandler.createError(y,b,_,c)}},h.prototype.throwUnexpectedToken=function(a,o){throw this.unexpectedTokenError(a,o)},h.prototype.tolerateUnexpectedToken=function(a,o){this.errorHandler.tolerate(this.unexpectedTokenError(a,o))},h.prototype.collectComments=function(){if(!this.config.comment)this.scanner.scanComments();else{var a=this.scanner.scanComments();if(a.length>0&&this.delegate)for(var o=0;o<a.length;++o){var c=a[o],v=void 0;v={type:c.multiLine?"BlockComment":"LineComment",value:this.scanner.source.slice(c.slice[0],c.slice[1])},this.config.range&&(v.range=c.range),this.config.loc&&(v.loc=c.loc);var y={start:{line:c.loc.start.line,column:c.loc.start.column,offset:c.range[0]},end:{line:c.loc.end.line,column:c.loc.end.column,offset:c.range[1]}};this.delegate(v,y)}}},h.prototype.getTokenRaw=function(a){return this.scanner.source.slice(a.start,a.end)},h.prototype.convertToken=function(a){var o={type:m.TokenName[a.type],value:this.getTokenRaw(a)};if(this.config.range&&(o.range=[a.start,a.end]),this.config.loc&&(o.loc={start:{line:this.startMarker.line,column:this.startMarker.column},end:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}}),a.type===9){var c=a.pattern,v=a.flags;o.regex={pattern:c,flags:v}}return o},h.prototype.nextToken=function(){var a=this.lookahead;this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart,this.collectComments(),this.scanner.index!==this.startMarker.index&&(this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart);var o=this.scanner.lex();return this.hasLineTerminator=a.lineNumber!==o.lineNumber,o&&this.context.strict&&o.type===3&&this.scanner.isStrictModeReservedWord(o.value)&&(o.type=4),this.lookahead=o,this.config.tokens&&o.type!==2&&this.tokens.push(this.convertToken(o)),a},h.prototype.nextRegexToken=function(){this.collectComments();var a=this.scanner.scanRegExp();return this.config.tokens&&(this.tokens.pop(),this.tokens.push(this.convertToken(a))),this.lookahead=a,this.nextToken(),a},h.prototype.createNode=function(){return{index:this.startMarker.index,line:this.startMarker.line,column:this.startMarker.column}},h.prototype.startNode=function(a,o){o===void 0&&(o=0);var c=a.start-a.lineStart,v=a.lineNumber;return c<0&&(c+=o,v--),{index:a.start,line:v,column:c}},h.prototype.finalize=function(a,o){if(this.config.range&&(o.range=[a.index,this.lastMarker.index]),this.config.loc&&(o.loc={start:{line:a.line,column:a.column},end:{line:this.lastMarker.line,column:this.lastMarker.column}},this.config.source&&(o.loc.source=this.config.source)),this.delegate){var c={start:{line:a.line,column:a.column,offset:a.index},end:{line:this.lastMarker.line,column:this.lastMarker.column,offset:this.lastMarker.index}};this.delegate(o,c)}return o},h.prototype.expect=function(a){var o=this.nextToken();(o.type!==7||o.value!==a)&&this.throwUnexpectedToken(o)},h.prototype.expectCommaSeparator=function(){if(this.config.tolerant){var a=this.lookahead;a.type===7&&a.value===","?this.nextToken():a.type===7&&a.value===";"?(this.nextToken(),this.tolerateUnexpectedToken(a)):this.tolerateUnexpectedToken(a,d.Messages.UnexpectedToken)}else this.expect(",")},h.prototype.expectKeyword=function(a){var o=this.nextToken();(o.type!==4||o.value!==a)&&this.throwUnexpectedToken(o)},h.prototype.match=function(a){return this.lookahead.type===7&&this.lookahead.value===a},h.prototype.matchKeyword=function(a){return this.lookahead.type===4&&this.lookahead.value===a},h.prototype.matchContextualKeyword=function(a){return this.lookahead.type===3&&this.lookahead.value===a},h.prototype.matchAssign=function(){if(this.lookahead.type!==7)return!1;var a=this.lookahead.value;return a==="="||a==="*="||a==="**="||a==="/="||a==="%="||a==="+="||a==="-="||a==="<<="||a===">>="||a===">>>="||a==="&="||a==="^="||a==="|="},h.prototype.isolateCoverGrammar=function(a){var o=this.context.isBindingElement,c=this.context.isAssignmentTarget,v=this.context.firstCoverInitializedNameError;this.context.isBindingElement=!0,this.context.isAssignmentTarget=!0,this.context.firstCoverInitializedNameError=null;var y=a.call(this);return this.context.firstCoverInitializedNameError!==null&&this.throwUnexpectedToken(this.context.firstCoverInitializedNameError),this.context.isBindingElement=o,this.context.isAssignmentTarget=c,this.context.firstCoverInitializedNameError=v,y},h.prototype.inheritCoverGrammar=function(a){var o=this.context.isBindingElement,c=this.context.isAssignmentTarget,v=this.context.firstCoverInitializedNameError;this.context.isBindingElement=!0,this.context.isAssignmentTarget=!0,this.context.firstCoverInitializedNameError=null;var y=a.call(this);return this.context.isBindingElement=this.context.isBindingElement&&o,this.context.isAssignmentTarget=this.context.isAssignmentTarget&&c,this.context.firstCoverInitializedNameError=v||this.context.firstCoverInitializedNameError,y},h.prototype.consumeSemicolon=function(){this.match(";")?this.nextToken():this.hasLineTerminator||(this.lookahead.type!==2&&!this.match("}")&&this.throwUnexpectedToken(this.lookahead),this.lastMarker.index=this.startMarker.index,this.lastMarker.line=this.startMarker.line,this.lastMarker.column=this.startMarker.column)},h.prototype.parsePrimaryExpression=function(){var a=this.createNode(),o,c,v;switch(this.lookahead.type){case 3:(this.context.isModule||this.context.await)&&this.lookahead.value==="await"&&this.tolerateUnexpectedToken(this.lookahead),o=this.matchAsyncFunction()?this.parseFunctionExpression():this.finalize(a,new l.Identifier(this.nextToken().value));break;case 6:case 8:this.context.strict&&this.lookahead.octal&&this.tolerateUnexpectedToken(this.lookahead,d.Messages.StrictOctalLiteral),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,c=this.nextToken(),v=this.getTokenRaw(c),o=this.finalize(a,new l.Literal(c.value,v));break;case 1:this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,c=this.nextToken(),v=this.getTokenRaw(c),o=this.finalize(a,new l.Literal(c.value==="true",v));break;case 5:this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,c=this.nextToken(),v=this.getTokenRaw(c),o=this.finalize(a,new l.Literal(null,v));break;case 10:o=this.parseTemplateLiteral();break;case 7:switch(this.lookahead.value){case"(":this.context.isBindingElement=!1,o=this.inheritCoverGrammar(this.parseGroupExpression);break;case"[":o=this.inheritCoverGrammar(this.parseArrayInitializer);break;case"{":o=this.inheritCoverGrammar(this.parseObjectInitializer);break;case"/":case"/=":this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,this.scanner.index=this.startMarker.index,c=this.nextRegexToken(),v=this.getTokenRaw(c),o=this.finalize(a,new l.RegexLiteral(c.regex,v,c.pattern,c.flags));break;default:o=this.throwUnexpectedToken(this.nextToken())}break;case 4:!this.context.strict&&this.context.allowYield&&this.matchKeyword("yield")?o=this.parseIdentifierName():!this.context.strict&&this.matchKeyword("let")?o=this.finalize(a,new l.Identifier(this.nextToken().value)):(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,this.matchKeyword("function")?o=this.parseFunctionExpression():this.matchKeyword("this")?(this.nextToken(),o=this.finalize(a,new l.ThisExpression)):this.matchKeyword("class")?o=this.parseClassExpression():o=this.throwUnexpectedToken(this.nextToken()));break;default:o=this.throwUnexpectedToken(this.nextToken())}return o},h.prototype.parseSpreadElement=function(){var a=this.createNode();this.expect("...");var o=this.inheritCoverGrammar(this.parseAssignmentExpression);return this.finalize(a,new l.SpreadElement(o))},h.prototype.parseArrayInitializer=function(){var a=this.createNode(),o=[];for(this.expect("[");!this.match("]");)if(this.match(","))this.nextToken(),o.push(null);else if(this.match("...")){var c=this.parseSpreadElement();this.match("]")||(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,this.expect(",")),o.push(c)}else o.push(this.inheritCoverGrammar(this.parseAssignmentExpression)),this.match("]")||this.expect(",");return this.expect("]"),this.finalize(a,new l.ArrayExpression(o))},h.prototype.parsePropertyMethod=function(a){this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;var o=this.context.strict,c=this.context.allowStrictDirective;this.context.allowStrictDirective=a.simple;var v=this.isolateCoverGrammar(this.parseFunctionSourceElements);return this.context.strict&&a.firstRestricted&&this.tolerateUnexpectedToken(a.firstRestricted,a.message),this.context.strict&&a.stricted&&this.tolerateUnexpectedToken(a.stricted,a.message),this.context.strict=o,this.context.allowStrictDirective=c,v},h.prototype.parsePropertyMethodFunction=function(){var a=!1,o=this.createNode(),c=this.context.allowYield;this.context.allowYield=!0;var v=this.parseFormalParameters(),y=this.parsePropertyMethod(v);return this.context.allowYield=c,this.finalize(o,new l.FunctionExpression(null,v.params,y,a))},h.prototype.parsePropertyMethodAsyncFunction=function(){var a=this.createNode(),o=this.context.allowYield,c=this.context.await;this.context.allowYield=!1,this.context.await=!0;var v=this.parseFormalParameters(),y=this.parsePropertyMethod(v);return this.context.allowYield=o,this.context.await=c,this.finalize(a,new l.AsyncFunctionExpression(null,v.params,y))},h.prototype.parseObjectPropertyKey=function(){var a=this.createNode(),o=this.nextToken(),c;switch(o.type){case 8:case 6:this.context.strict&&o.octal&&this.tolerateUnexpectedToken(o,d.Messages.StrictOctalLiteral);var v=this.getTokenRaw(o);c=this.finalize(a,new l.Literal(o.value,v));break;case 3:case 1:case 5:case 4:c=this.finalize(a,new l.Identifier(o.value));break;case 7:o.value==="["?(c=this.isolateCoverGrammar(this.parseAssignmentExpression),this.expect("]")):c=this.throwUnexpectedToken(o);break;default:c=this.throwUnexpectedToken(o)}return c},h.prototype.isPropertyKey=function(a,o){return a.type===p.Syntax.Identifier&&a.name===o||a.type===p.Syntax.Literal&&a.value===o},h.prototype.parseObjectProperty=function(a){var o=this.createNode(),c=this.lookahead,v,y=null,b=null,w=!1,_=!1,E=!1,S=!1;if(c.type===3){var A=c.value;this.nextToken(),w=this.match("["),S=!this.hasLineTerminator&&A==="async"&&!this.match(":")&&!this.match("(")&&!this.match("*")&&!this.match(","),y=S?this.parseObjectPropertyKey():this.finalize(o,new l.Identifier(A))}else this.match("*")?this.nextToken():(w=this.match("["),y=this.parseObjectPropertyKey());var T=this.qualifiedPropertyName(this.lookahead);if(c.type===3&&!S&&c.value==="get"&&T)v="get",w=this.match("["),y=this.parseObjectPropertyKey(),this.context.allowYield=!1,b=this.parseGetterMethod();else if(c.type===3&&!S&&c.value==="set"&&T)v="set",w=this.match("["),y=this.parseObjectPropertyKey(),b=this.parseSetterMethod();else if(c.type===7&&c.value==="*"&&T)v="init",w=this.match("["),y=this.parseObjectPropertyKey(),b=this.parseGeneratorMethod(),_=!0;else if(y||this.throwUnexpectedToken(this.lookahead),v="init",this.match(":")&&!S)!w&&this.isPropertyKey(y,"__proto__")&&(a.value&&this.tolerateError(d.Messages.DuplicateProtoProperty),a.value=!0),this.nextToken(),b=this.inheritCoverGrammar(this.parseAssignmentExpression);else if(this.match("("))b=S?this.parsePropertyMethodAsyncFunction():this.parsePropertyMethodFunction(),_=!0;else if(c.type===3){var A=this.finalize(o,new l.Identifier(c.value));if(this.match("=")){this.context.firstCoverInitializedNameError=this.lookahead,this.nextToken(),E=!0;var D=this.isolateCoverGrammar(this.parseAssignmentExpression);b=this.finalize(o,new l.AssignmentPattern(A,D))}else E=!0,b=A}else this.throwUnexpectedToken(this.nextToken());return this.finalize(o,new l.Property(v,y,w,b,_,E))},h.prototype.parseObjectInitializer=function(){var a=this.createNode();this.expect("{");for(var o=[],c={value:!1};!this.match("}");)o.push(this.parseObjectProperty(c)),this.match("}")||this.expectCommaSeparator();return this.expect("}"),this.finalize(a,new l.ObjectExpression(o))},h.prototype.parseTemplateHead=function(){s.assert(this.lookahead.head,"Template literal must start with a template head");var a=this.createNode(),o=this.nextToken(),c=o.value,v=o.cooked;return this.finalize(a,new l.TemplateElement({raw:c,cooked:v},o.tail))},h.prototype.parseTemplateElement=function(){this.lookahead.type!==10&&this.throwUnexpectedToken();var a=this.createNode(),o=this.nextToken(),c=o.value,v=o.cooked;return this.finalize(a,new l.TemplateElement({raw:c,cooked:v},o.tail))},h.prototype.parseTemplateLiteral=function(){var a=this.createNode(),o=[],c=[],v=this.parseTemplateHead();for(c.push(v);!v.tail;)o.push(this.parseExpression()),v=this.parseTemplateElement(),c.push(v);return this.finalize(a,new l.TemplateLiteral(c,o))},h.prototype.reinterpretExpressionAsPattern=function(a){switch(a.type){case p.Syntax.Identifier:case p.Syntax.MemberExpression:case p.Syntax.RestElement:case p.Syntax.AssignmentPattern:break;case p.Syntax.SpreadElement:a.type=p.Syntax.RestElement,this.reinterpretExpressionAsPattern(a.argument);break;case p.Syntax.ArrayExpression:a.type=p.Syntax.ArrayPattern;for(var o=0;o<a.elements.length;o++)a.elements[o]!==null&&this.reinterpretExpressionAsPattern(a.elements[o]);break;case p.Syntax.ObjectExpression:a.type=p.Syntax.ObjectPattern;for(var o=0;o<a.properties.length;o++)this.reinterpretExpressionAsPattern(a.properties[o].value);break;case p.Syntax.AssignmentExpression:a.type=p.Syntax.AssignmentPattern,delete a.operator,this.reinterpretExpressionAsPattern(a.left);break}},h.prototype.parseGroupExpression=function(){var a;if(this.expect("("),this.match(")"))this.nextToken(),this.match("=>")||this.expect("=>"),a={type:f,params:[],async:!1};else{var o=this.lookahead,c=[];if(this.match("..."))a=this.parseRestElement(c),this.expect(")"),this.match("=>")||this.expect("=>"),a={type:f,params:[a],async:!1};else{var v=!1;if(this.context.isBindingElement=!0,a=this.inheritCoverGrammar(this.parseAssignmentExpression),this.match(",")){var y=[];for(this.context.isAssignmentTarget=!1,y.push(a);this.lookahead.type!==2&&this.match(",");){if(this.nextToken(),this.match(")")){this.nextToken();for(var b=0;b<y.length;b++)this.reinterpretExpressionAsPattern(y[b]);v=!0,a={type:f,params:y,async:!1}}else if(this.match("...")){this.context.isBindingElement||this.throwUnexpectedToken(this.lookahead),y.push(this.parseRestElement(c)),this.expect(")"),this.match("=>")||this.expect("=>"),this.context.isBindingElement=!1;for(var b=0;b<y.length;b++)this.reinterpretExpressionAsPattern(y[b]);v=!0,a={type:f,params:y,async:!1}}else y.push(this.inheritCoverGrammar(this.parseAssignmentExpression));if(v)break}v||(a=this.finalize(this.startNode(o),new l.SequenceExpression(y)))}if(!v){if(this.expect(")"),this.match("=>")&&(a.type===p.Syntax.Identifier&&a.name==="yield"&&(v=!0,a={type:f,params:[a],async:!1}),!v)){if(this.context.isBindingElement||this.throwUnexpectedToken(this.lookahead),a.type===p.Syntax.SequenceExpression)for(var b=0;b<a.expressions.length;b++)this.reinterpretExpressionAsPattern(a.expressions[b]);else this.reinterpretExpressionAsPattern(a);var w=a.type===p.Syntax.SequenceExpression?a.expressions:[a];a={type:f,params:w,async:!1}}this.context.isBindingElement=!1}}}return a},h.prototype.parseArguments=function(){this.expect("(");var a=[];if(!this.match(")"))for(;;){var o=this.match("...")?this.parseSpreadElement():this.isolateCoverGrammar(this.parseAssignmentExpression);if(a.push(o),this.match(")")||(this.expectCommaSeparator(),this.match(")")))break}return this.expect(")"),a},h.prototype.isIdentifierName=function(a){return a.type===3||a.type===4||a.type===1||a.type===5},h.prototype.parseIdentifierName=function(){var a=this.createNode(),o=this.nextToken();return this.isIdentifierName(o)||this.throwUnexpectedToken(o),this.finalize(a,new l.Identifier(o.value))},h.prototype.parseNewExpression=function(){var a=this.createNode(),o=this.parseIdentifierName();s.assert(o.name==="new","New expression must start with `new`");var c;if(this.match("."))if(this.nextToken(),this.lookahead.type===3&&this.context.inFunctionBody&&this.lookahead.value==="target"){var v=this.parseIdentifierName();c=new l.MetaProperty(o,v)}else this.throwUnexpectedToken(this.lookahead);else{var y=this.isolateCoverGrammar(this.parseLeftHandSideExpression),b=this.match("(")?this.parseArguments():[];c=new l.NewExpression(y,b),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}return this.finalize(a,c)},h.prototype.parseAsyncArgument=function(){var a=this.parseAssignmentExpression();return this.context.firstCoverInitializedNameError=null,a},h.prototype.parseAsyncArguments=function(){this.expect("(");var a=[];if(!this.match(")"))for(;;){var o=this.match("...")?this.parseSpreadElement():this.isolateCoverGrammar(this.parseAsyncArgument);if(a.push(o),this.match(")")||(this.expectCommaSeparator(),this.match(")")))break}return this.expect(")"),a},h.prototype.parseLeftHandSideExpressionAllowCall=function(){var a=this.lookahead,o=this.matchContextualKeyword("async"),c=this.context.allowIn;this.context.allowIn=!0;var v;for(this.matchKeyword("super")&&this.context.inFunctionBody?(v=this.createNode(),this.nextToken(),v=this.finalize(v,new l.Super),!this.match("(")&&!this.match(".")&&!this.match("[")&&this.throwUnexpectedToken(this.lookahead)):v=this.inheritCoverGrammar(this.matchKeyword("new")?this.parseNewExpression:this.parsePrimaryExpression);;)if(this.match(".")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect(".");var y=this.parseIdentifierName();v=this.finalize(this.startNode(a),new l.StaticMemberExpression(v,y))}else if(this.match("(")){var b=o&&a.lineNumber===this.lookahead.lineNumber;this.context.isBindingElement=!1,this.context.isAssignmentTarget=!1;var w=b?this.parseAsyncArguments():this.parseArguments();if(v=this.finalize(this.startNode(a),new l.CallExpression(v,w)),b&&this.match("=>")){for(var _=0;_<w.length;++_)this.reinterpretExpressionAsPattern(w[_]);v={type:f,params:w,async:!0}}}else if(this.match("[")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("[");var y=this.isolateCoverGrammar(this.parseExpression);this.expect("]"),v=this.finalize(this.startNode(a),new l.ComputedMemberExpression(v,y))}else if(this.lookahead.type===10&&this.lookahead.head){var E=this.parseTemplateLiteral();v=this.finalize(this.startNode(a),new l.TaggedTemplateExpression(v,E))}else break;return this.context.allowIn=c,v},h.prototype.parseSuper=function(){var a=this.createNode();return this.expectKeyword("super"),!this.match("[")&&!this.match(".")&&this.throwUnexpectedToken(this.lookahead),this.finalize(a,new l.Super)},h.prototype.parseLeftHandSideExpression=function(){s.assert(this.context.allowIn,"callee of new expression always allow in keyword.");for(var a=this.startNode(this.lookahead),o=this.matchKeyword("super")&&this.context.inFunctionBody?this.parseSuper():this.inheritCoverGrammar(this.matchKeyword("new")?this.parseNewExpression:this.parsePrimaryExpression);;)if(this.match("[")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("[");var c=this.isolateCoverGrammar(this.parseExpression);this.expect("]"),o=this.finalize(a,new l.ComputedMemberExpression(o,c))}else if(this.match(".")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect(".");var c=this.parseIdentifierName();o=this.finalize(a,new l.StaticMemberExpression(o,c))}else if(this.lookahead.type===10&&this.lookahead.head){var v=this.parseTemplateLiteral();o=this.finalize(a,new l.TaggedTemplateExpression(o,v))}else break;return o},h.prototype.parseUpdateExpression=function(){var a,o=this.lookahead;if(this.match("++")||this.match("--")){var c=this.startNode(o),v=this.nextToken();a=this.inheritCoverGrammar(this.parseUnaryExpression),this.context.strict&&a.type===p.Syntax.Identifier&&this.scanner.isRestrictedWord(a.name)&&this.tolerateError(d.Messages.StrictLHSPrefix),this.context.isAssignmentTarget||this.tolerateError(d.Messages.InvalidLHSInAssignment);var y=!0;a=this.finalize(c,new l.UpdateExpression(v.value,a,y)),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}else if(a=this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall),!this.hasLineTerminator&&this.lookahead.type===7&&(this.match("++")||this.match("--"))){this.context.strict&&a.type===p.Syntax.Identifier&&this.scanner.isRestrictedWord(a.name)&&this.tolerateError(d.Messages.StrictLHSPostfix),this.context.isAssignmentTarget||this.tolerateError(d.Messages.InvalidLHSInAssignment),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;var b=this.nextToken().value,y=!1;a=this.finalize(this.startNode(o),new l.UpdateExpression(b,a,y))}return a},h.prototype.parseAwaitExpression=function(){var a=this.createNode();this.nextToken();var o=this.parseUnaryExpression();return this.finalize(a,new l.AwaitExpression(o))},h.prototype.parseUnaryExpression=function(){var a;if(this.match("+")||this.match("-")||this.match("~")||this.match("!")||this.matchKeyword("delete")||this.matchKeyword("void")||this.matchKeyword("typeof")){var o=this.startNode(this.lookahead),c=this.nextToken();a=this.inheritCoverGrammar(this.parseUnaryExpression),a=this.finalize(o,new l.UnaryExpression(c.value,a)),this.context.strict&&a.operator==="delete"&&a.argument.type===p.Syntax.Identifier&&this.tolerateError(d.Messages.StrictDelete),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}else this.context.await&&this.matchContextualKeyword("await")?a=this.parseAwaitExpression():a=this.parseUpdateExpression();return a},h.prototype.parseExponentiationExpression=function(){var a=this.lookahead,o=this.inheritCoverGrammar(this.parseUnaryExpression);if(o.type!==p.Syntax.UnaryExpression&&this.match("**")){this.nextToken(),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;var c=o,v=this.isolateCoverGrammar(this.parseExponentiationExpression);o=this.finalize(this.startNode(a),new l.BinaryExpression("**",c,v))}return o},h.prototype.binaryPrecedence=function(a){var o=a.value,c;return a.type===7?c=this.operatorPrecedence[o]||0:a.type===4?c=o==="instanceof"||this.context.allowIn&&o==="in"?7:0:c=0,c},h.prototype.parseBinaryExpression=function(){var a=this.lookahead,o=this.inheritCoverGrammar(this.parseExponentiationExpression),c=this.lookahead,v=this.binaryPrecedence(c);if(v>0){this.nextToken(),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;for(var y=[a,this.lookahead],b=o,w=this.isolateCoverGrammar(this.parseExponentiationExpression),_=[b,c.value,w],E=[v];v=this.binaryPrecedence(this.lookahead),!(v<=0);){for(;_.length>2&&v<=E[E.length-1];){w=_.pop();var S=_.pop();E.pop(),b=_.pop(),y.pop();var A=this.startNode(y[y.length-1]);_.push(this.finalize(A,new l.BinaryExpression(S,b,w)))}_.push(this.nextToken().value),E.push(v),y.push(this.lookahead),_.push(this.isolateCoverGrammar(this.parseExponentiationExpression))}var T=_.length-1;o=_[T];for(var D=y.pop();T>1;){var I=y.pop(),B=D&&D.lineStart,A=this.startNode(I,B),S=_[T-1];o=this.finalize(A,new l.BinaryExpression(S,_[T-2],o)),T-=2,D=I}}return o},h.prototype.parseConditionalExpression=function(){var a=this.lookahead,o=this.inheritCoverGrammar(this.parseBinaryExpression);if(this.match("?")){this.nextToken();var c=this.context.allowIn;this.context.allowIn=!0;var v=this.isolateCoverGrammar(this.parseAssignmentExpression);this.context.allowIn=c,this.expect(":");var y=this.isolateCoverGrammar(this.parseAssignmentExpression);o=this.finalize(this.startNode(a),new l.ConditionalExpression(o,v,y)),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}return o},h.prototype.checkPatternParam=function(a,o){switch(o.type){case p.Syntax.Identifier:this.validateParam(a,o,o.name);break;case p.Syntax.RestElement:this.checkPatternParam(a,o.argument);break;case p.Syntax.AssignmentPattern:this.checkPatternParam(a,o.left);break;case p.Syntax.ArrayPattern:for(var c=0;c<o.elements.length;c++)o.elements[c]!==null&&this.checkPatternParam(a,o.elements[c]);break;case p.Syntax.ObjectPattern:for(var c=0;c<o.properties.length;c++)this.checkPatternParam(a,o.properties[c].value);break}a.simple=a.simple&&o instanceof l.Identifier},h.prototype.reinterpretAsCoverFormalsList=function(a){var o=[a],c,v=!1;switch(a.type){case p.Syntax.Identifier:break;case f:o=a.params,v=a.async;break;default:return null}c={simple:!0,paramSet:{}};for(var y=0;y<o.length;++y){var b=o[y];b.type===p.Syntax.AssignmentPattern?b.right.type===p.Syntax.YieldExpression&&(b.right.argument&&this.throwUnexpectedToken(this.lookahead),b.right.type=p.Syntax.Identifier,b.right.name="yield",delete b.right.argument,delete b.right.delegate):v&&b.type===p.Syntax.Identifier&&b.name==="await"&&this.throwUnexpectedToken(this.lookahead),this.checkPatternParam(c,b),o[y]=b}if(this.context.strict||!this.context.allowYield)for(var y=0;y<o.length;++y){var b=o[y];b.type===p.Syntax.YieldExpression&&this.throwUnexpectedToken(this.lookahead)}if(c.message===d.Messages.StrictParamDupe){var w=this.context.strict?c.stricted:c.firstRestricted;this.throwUnexpectedToken(w,c.message)}return{simple:c.simple,params:o,stricted:c.stricted,firstRestricted:c.firstRestricted,message:c.message}},h.prototype.parseAssignmentExpression=function(){var a;if(!this.context.allowYield&&this.matchKeyword("yield"))a=this.parseYieldExpression();else{var o=this.lookahead,c=o;if(a=this.parseConditionalExpression(),c.type===3&&c.lineNumber===this.lookahead.lineNumber&&c.value==="async"&&(this.lookahead.type===3||this.matchKeyword("yield"))){var v=this.parsePrimaryExpression();this.reinterpretExpressionAsPattern(v),a={type:f,params:[v],async:!0}}if(a.type===f||this.match("=>")){this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;var y=a.async,b=this.reinterpretAsCoverFormalsList(a);if(b){this.hasLineTerminator&&this.tolerateUnexpectedToken(this.lookahead),this.context.firstCoverInitializedNameError=null;var w=this.context.strict,_=this.context.allowStrictDirective;this.context.allowStrictDirective=b.simple;var E=this.context.allowYield,S=this.context.await;this.context.allowYield=!0,this.context.await=y;var A=this.startNode(o);this.expect("=>");var T=void 0;if(this.match("{")){var D=this.context.allowIn;this.context.allowIn=!0,T=this.parseFunctionSourceElements(),this.context.allowIn=D}else T=this.isolateCoverGrammar(this.parseAssignmentExpression);var I=T.type!==p.Syntax.BlockStatement;this.context.strict&&b.firstRestricted&&this.throwUnexpectedToken(b.firstRestricted,b.message),this.context.strict&&b.stricted&&this.tolerateUnexpectedToken(b.stricted,b.message),a=y?this.finalize(A,new l.AsyncArrowFunctionExpression(b.params,T,I)):this.finalize(A,new l.ArrowFunctionExpression(b.params,T,I)),this.context.strict=w,this.context.allowStrictDirective=_,this.context.allowYield=E,this.context.await=S}}else if(this.matchAssign()){if(this.context.isAssignmentTarget||this.tolerateError(d.Messages.InvalidLHSInAssignment),this.context.strict&&a.type===p.Syntax.Identifier){var B=a;this.scanner.isRestrictedWord(B.name)&&this.tolerateUnexpectedToken(c,d.Messages.StrictLHSAssignment),this.scanner.isStrictModeReservedWord(B.name)&&this.tolerateUnexpectedToken(c,d.Messages.StrictReservedWord)}this.match("=")?this.reinterpretExpressionAsPattern(a):(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1),c=this.nextToken();var M=c.value,L=this.isolateCoverGrammar(this.parseAssignmentExpression);a=this.finalize(this.startNode(o),new l.AssignmentExpression(M,a,L)),this.context.firstCoverInitializedNameError=null}}return a},h.prototype.parseExpression=function(){var a=this.lookahead,o=this.isolateCoverGrammar(this.parseAssignmentExpression);if(this.match(",")){var c=[];for(c.push(o);this.lookahead.type!==2&&this.match(",");)this.nextToken(),c.push(this.isolateCoverGrammar(this.parseAssignmentExpression));o=this.finalize(this.startNode(a),new l.SequenceExpression(c))}return o},h.prototype.parseStatementListItem=function(){var a;if(this.context.isAssignmentTarget=!0,this.context.isBindingElement=!0,this.lookahead.type===4)switch(this.lookahead.value){case"export":this.context.isModule||this.tolerateUnexpectedToken(this.lookahead,d.Messages.IllegalExportDeclaration),a=this.parseExportDeclaration();break;case"import":this.context.isModule||this.tolerateUnexpectedToken(this.lookahead,d.Messages.IllegalImportDeclaration),a=this.parseImportDeclaration();break;case"const":a=this.parseLexicalDeclaration({inFor:!1});break;case"function":a=this.parseFunctionDeclaration();break;case"class":a=this.parseClassDeclaration();break;case"let":a=this.isLexicalDeclaration()?this.parseLexicalDeclaration({inFor:!1}):this.parseStatement();break;default:a=this.parseStatement();break}else a=this.parseStatement();return a},h.prototype.parseBlock=function(){var a=this.createNode();this.expect("{");for(var o=[];!this.match("}");)o.push(this.parseStatementListItem());return this.expect("}"),this.finalize(a,new l.BlockStatement(o))},h.prototype.parseLexicalBinding=function(a,o){var c=this.createNode(),v=[],y=this.parsePattern(v,a);this.context.strict&&y.type===p.Syntax.Identifier&&this.scanner.isRestrictedWord(y.name)&&this.tolerateError(d.Messages.StrictVarName);var b=null;return a==="const"?!this.matchKeyword("in")&&!this.matchContextualKeyword("of")&&(this.match("=")?(this.nextToken(),b=this.isolateCoverGrammar(this.parseAssignmentExpression)):this.throwError(d.Messages.DeclarationMissingInitializer,"const")):(!o.inFor&&y.type!==p.Syntax.Identifier||this.match("="))&&(this.expect("="),b=this.isolateCoverGrammar(this.parseAssignmentExpression)),this.finalize(c,new l.VariableDeclarator(y,b))},h.prototype.parseBindingList=function(a,o){for(var c=[this.parseLexicalBinding(a,o)];this.match(",");)this.nextToken(),c.push(this.parseLexicalBinding(a,o));return c},h.prototype.isLexicalDeclaration=function(){var a=this.scanner.saveState();this.scanner.scanComments();var o=this.scanner.lex();return this.scanner.restoreState(a),o.type===3||o.type===7&&o.value==="["||o.type===7&&o.value==="{"||o.type===4&&o.value==="let"||o.type===4&&o.value==="yield"},h.prototype.parseLexicalDeclaration=function(a){var o=this.createNode(),c=this.nextToken().value;s.assert(c==="let"||c==="const","Lexical declaration must be either let or const");var v=this.parseBindingList(c,a);return this.consumeSemicolon(),this.finalize(o,new l.VariableDeclaration(v,c))},h.prototype.parseBindingRestElement=function(a,o){var c=this.createNode();this.expect("...");var v=this.parsePattern(a,o);return this.finalize(c,new l.RestElement(v))},h.prototype.parseArrayPattern=function(a,o){var c=this.createNode();this.expect("[");for(var v=[];!this.match("]");)if(this.match(","))this.nextToken(),v.push(null);else{if(this.match("...")){v.push(this.parseBindingRestElement(a,o));break}else v.push(this.parsePatternWithDefault(a,o));this.match("]")||this.expect(",")}return this.expect("]"),this.finalize(c,new l.ArrayPattern(v))},h.prototype.parsePropertyPattern=function(a,o){var c=this.createNode(),v=!1,y=!1,b=!1,w,_;if(this.lookahead.type===3){var E=this.lookahead;w=this.parseVariableIdentifier();var S=this.finalize(c,new l.Identifier(E.value));if(this.match("=")){a.push(E),y=!0,this.nextToken();var A=this.parseAssignmentExpression();_=this.finalize(this.startNode(E),new l.AssignmentPattern(S,A))}else this.match(":")?(this.expect(":"),_=this.parsePatternWithDefault(a,o)):(a.push(E),y=!0,_=S)}else v=this.match("["),w=this.parseObjectPropertyKey(),this.expect(":"),_=this.parsePatternWithDefault(a,o);return this.finalize(c,new l.Property("init",w,v,_,b,y))},h.prototype.parseObjectPattern=function(a,o){var c=this.createNode(),v=[];for(this.expect("{");!this.match("}");)v.push(this.parsePropertyPattern(a,o)),this.match("}")||this.expect(",");return this.expect("}"),this.finalize(c,new l.ObjectPattern(v))},h.prototype.parsePattern=function(a,o){var c;return this.match("[")?c=this.parseArrayPattern(a,o):this.match("{")?c=this.parseObjectPattern(a,o):(this.matchKeyword("let")&&(o==="const"||o==="let")&&this.tolerateUnexpectedToken(this.lookahead,d.Messages.LetInLexicalBinding),a.push(this.lookahead),c=this.parseVariableIdentifier(o)),c},h.prototype.parsePatternWithDefault=function(a,o){var c=this.lookahead,v=this.parsePattern(a,o);if(this.match("=")){this.nextToken();var y=this.context.allowYield;this.context.allowYield=!0;var b=this.isolateCoverGrammar(this.parseAssignmentExpression);this.context.allowYield=y,v=this.finalize(this.startNode(c),new l.AssignmentPattern(v,b))}return v},h.prototype.parseVariableIdentifier=function(a){var o=this.createNode(),c=this.nextToken();return c.type===4&&c.value==="yield"?this.context.strict?this.tolerateUnexpectedToken(c,d.Messages.StrictReservedWord):this.context.allowYield||this.throwUnexpectedToken(c):c.type!==3?this.context.strict&&c.type===4&&this.scanner.isStrictModeReservedWord(c.value)?this.tolerateUnexpectedToken(c,d.Messages.StrictReservedWord):(this.context.strict||c.value!=="let"||a!=="var")&&this.throwUnexpectedToken(c):(this.context.isModule||this.context.await)&&c.type===3&&c.value==="await"&&this.tolerateUnexpectedToken(c),this.finalize(o,new l.Identifier(c.value))},h.prototype.parseVariableDeclaration=function(a){var o=this.createNode(),c=[],v=this.parsePattern(c,"var");this.context.strict&&v.type===p.Syntax.Identifier&&this.scanner.isRestrictedWord(v.name)&&this.tolerateError(d.Messages.StrictVarName);var y=null;return this.match("=")?(this.nextToken(),y=this.isolateCoverGrammar(this.parseAssignmentExpression)):v.type!==p.Syntax.Identifier&&!a.inFor&&this.expect("="),this.finalize(o,new l.VariableDeclarator(v,y))},h.prototype.parseVariableDeclarationList=function(a){var o={inFor:a.inFor},c=[];for(c.push(this.parseVariableDeclaration(o));this.match(",");)this.nextToken(),c.push(this.parseVariableDeclaration(o));return c},h.prototype.parseVariableStatement=function(){var a=this.createNode();this.expectKeyword("var");var o=this.parseVariableDeclarationList({inFor:!1});return this.consumeSemicolon(),this.finalize(a,new l.VariableDeclaration(o,"var"))},h.prototype.parseEmptyStatement=function(){var a=this.createNode();return this.expect(";"),this.finalize(a,new l.EmptyStatement)},h.prototype.parseExpressionStatement=function(){var a=this.createNode(),o=this.parseExpression();return this.consumeSemicolon(),this.finalize(a,new l.ExpressionStatement(o))},h.prototype.parseIfClause=function(){return this.context.strict&&this.matchKeyword("function")&&this.tolerateError(d.Messages.StrictFunction),this.parseStatement()},h.prototype.parseIfStatement=function(){var a=this.createNode(),o,c=null;this.expectKeyword("if"),this.expect("(");var v=this.parseExpression();return!this.match(")")&&this.config.tolerant?(this.tolerateUnexpectedToken(this.nextToken()),o=this.finalize(this.createNode(),new l.EmptyStatement)):(this.expect(")"),o=this.parseIfClause(),this.matchKeyword("else")&&(this.nextToken(),c=this.parseIfClause())),this.finalize(a,new l.IfStatement(v,o,c))},h.prototype.parseDoWhileStatement=function(){var a=this.createNode();this.expectKeyword("do");var o=this.context.inIteration;this.context.inIteration=!0;var c=this.parseStatement();this.context.inIteration=o,this.expectKeyword("while"),this.expect("(");var v=this.parseExpression();return!this.match(")")&&this.config.tolerant?this.tolerateUnexpectedToken(this.nextToken()):(this.expect(")"),this.match(";")&&this.nextToken()),this.finalize(a,new l.DoWhileStatement(c,v))},h.prototype.parseWhileStatement=function(){var a=this.createNode(),o;this.expectKeyword("while"),this.expect("(");var c=this.parseExpression();if(!this.match(")")&&this.config.tolerant)this.tolerateUnexpectedToken(this.nextToken()),o=this.finalize(this.createNode(),new l.EmptyStatement);else{this.expect(")");var v=this.context.inIteration;this.context.inIteration=!0,o=this.parseStatement(),this.context.inIteration=v}return this.finalize(a,new l.WhileStatement(c,o))},h.prototype.parseForStatement=function(){var a=null,o=null,c=null,v=!0,y,b,w=this.createNode();if(this.expectKeyword("for"),this.expect("("),this.match(";"))this.nextToken();else if(this.matchKeyword("var")){a=this.createNode(),this.nextToken();var _=this.context.allowIn;this.context.allowIn=!1;var E=this.parseVariableDeclarationList({inFor:!0});if(this.context.allowIn=_,E.length===1&&this.matchKeyword("in")){var S=E[0];S.init&&(S.id.type===p.Syntax.ArrayPattern||S.id.type===p.Syntax.ObjectPattern||this.context.strict)&&this.tolerateError(d.Messages.ForInOfLoopInitializer,"for-in"),a=this.finalize(a,new l.VariableDeclaration(E,"var")),this.nextToken(),y=a,b=this.parseExpression(),a=null}else E.length===1&&E[0].init===null&&this.matchContextualKeyword("of")?(a=this.finalize(a,new l.VariableDeclaration(E,"var")),this.nextToken(),y=a,b=this.parseAssignmentExpression(),a=null,v=!1):(a=this.finalize(a,new l.VariableDeclaration(E,"var")),this.expect(";"))}else if(this.matchKeyword("const")||this.matchKeyword("let")){a=this.createNode();var A=this.nextToken().value;if(!this.context.strict&&this.lookahead.value==="in")a=this.finalize(a,new l.Identifier(A)),this.nextToken(),y=a,b=this.parseExpression(),a=null;else{var _=this.context.allowIn;this.context.allowIn=!1;var E=this.parseBindingList(A,{inFor:!0});this.context.allowIn=_,E.length===1&&E[0].init===null&&this.matchKeyword("in")?(a=this.finalize(a,new l.VariableDeclaration(E,A)),this.nextToken(),y=a,b=this.parseExpression(),a=null):E.length===1&&E[0].init===null&&this.matchContextualKeyword("of")?(a=this.finalize(a,new l.VariableDeclaration(E,A)),this.nextToken(),y=a,b=this.parseAssignmentExpression(),a=null,v=!1):(this.consumeSemicolon(),a=this.finalize(a,new l.VariableDeclaration(E,A)))}}else{var T=this.lookahead,_=this.context.allowIn;if(this.context.allowIn=!1,a=this.inheritCoverGrammar(this.parseAssignmentExpression),this.context.allowIn=_,this.matchKeyword("in"))(!this.context.isAssignmentTarget||a.type===p.Syntax.AssignmentExpression)&&this.tolerateError(d.Messages.InvalidLHSInForIn),this.nextToken(),this.reinterpretExpressionAsPattern(a),y=a,b=this.parseExpression(),a=null;else if(this.matchContextualKeyword("of"))(!this.context.isAssignmentTarget||a.type===p.Syntax.AssignmentExpression)&&this.tolerateError(d.Messages.InvalidLHSInForLoop),this.nextToken(),this.reinterpretExpressionAsPattern(a),y=a,b=this.parseAssignmentExpression(),a=null,v=!1;else{if(this.match(",")){for(var D=[a];this.match(",");)this.nextToken(),D.push(this.isolateCoverGrammar(this.parseAssignmentExpression));a=this.finalize(this.startNode(T),new l.SequenceExpression(D))}this.expect(";")}}typeof y>"u"&&(this.match(";")||(o=this.parseExpression()),this.expect(";"),this.match(")")||(c=this.parseExpression()));var I;if(!this.match(")")&&this.config.tolerant)this.tolerateUnexpectedToken(this.nextToken()),I=this.finalize(this.createNode(),new l.EmptyStatement);else{this.expect(")");var B=this.context.inIteration;this.context.inIteration=!0,I=this.isolateCoverGrammar(this.parseStatement),this.context.inIteration=B}return typeof y>"u"?this.finalize(w,new l.ForStatement(a,o,c,I)):v?this.finalize(w,new l.ForInStatement(y,b,I)):this.finalize(w,new l.ForOfStatement(y,b,I))},h.prototype.parseContinueStatement=function(){var a=this.createNode();this.expectKeyword("continue");var o=null;if(this.lookahead.type===3&&!this.hasLineTerminator){var c=this.parseVariableIdentifier();o=c;var v="$"+c.name;Object.prototype.hasOwnProperty.call(this.context.labelSet,v)||this.throwError(d.Messages.UnknownLabel,c.name)}return this.consumeSemicolon(),o===null&&!this.context.inIteration&&this.throwError(d.Messages.IllegalContinue),this.finalize(a,new l.ContinueStatement(o))},h.prototype.parseBreakStatement=function(){var a=this.createNode();this.expectKeyword("break");var o=null;if(this.lookahead.type===3&&!this.hasLineTerminator){var c=this.parseVariableIdentifier(),v="$"+c.name;Object.prototype.hasOwnProperty.call(this.context.labelSet,v)||this.throwError(d.Messages.UnknownLabel,c.name),o=c}return this.consumeSemicolon(),o===null&&!this.context.inIteration&&!this.context.inSwitch&&this.throwError(d.Messages.IllegalBreak),this.finalize(a,new l.BreakStatement(o))},h.prototype.parseReturnStatement=function(){this.context.inFunctionBody||this.tolerateError(d.Messages.IllegalReturn);var a=this.createNode();this.expectKeyword("return");var o=!this.match(";")&&!this.match("}")&&!this.hasLineTerminator&&this.lookahead.type!==2||this.lookahead.type===8||this.lookahead.type===10,c=o?this.parseExpression():null;return this.consumeSemicolon(),this.finalize(a,new l.ReturnStatement(c))},h.prototype.parseWithStatement=function(){this.context.strict&&this.tolerateError(d.Messages.StrictModeWith);var a=this.createNode(),o;this.expectKeyword("with"),this.expect("(");var c=this.parseExpression();return!this.match(")")&&this.config.tolerant?(this.tolerateUnexpectedToken(this.nextToken()),o=this.finalize(this.createNode(),new l.EmptyStatement)):(this.expect(")"),o=this.parseStatement()),this.finalize(a,new l.WithStatement(c,o))},h.prototype.parseSwitchCase=function(){var a=this.createNode(),o;this.matchKeyword("default")?(this.nextToken(),o=null):(this.expectKeyword("case"),o=this.parseExpression()),this.expect(":");for(var c=[];!(this.match("}")||this.matchKeyword("default")||this.matchKeyword("case"));)c.push(this.parseStatementListItem());return this.finalize(a,new l.SwitchCase(o,c))},h.prototype.parseSwitchStatement=function(){var a=this.createNode();this.expectKeyword("switch"),this.expect("(");var o=this.parseExpression();this.expect(")");var c=this.context.inSwitch;this.context.inSwitch=!0;var v=[],y=!1;for(this.expect("{");!this.match("}");){var b=this.parseSwitchCase();b.test===null&&(y&&this.throwError(d.Messages.MultipleDefaultsInSwitch),y=!0),v.push(b)}return this.expect("}"),this.context.inSwitch=c,this.finalize(a,new l.SwitchStatement(o,v))},h.prototype.parseLabelledStatement=function(){var a=this.createNode(),o=this.parseExpression(),c;if(o.type===p.Syntax.Identifier&&this.match(":")){this.nextToken();var v=o,y="$"+v.name;Object.prototype.hasOwnProperty.call(this.context.labelSet,y)&&this.throwError(d.Messages.Redeclaration,"Label",v.name),this.context.labelSet[y]=!0;var b=void 0;if(this.matchKeyword("class"))this.tolerateUnexpectedToken(this.lookahead),b=this.parseClassDeclaration();else if(this.matchKeyword("function")){var w=this.lookahead,_=this.parseFunctionDeclaration();this.context.strict?this.tolerateUnexpectedToken(w,d.Messages.StrictFunction):_.generator&&this.tolerateUnexpectedToken(w,d.Messages.GeneratorInLegacyContext),b=_}else b=this.parseStatement();delete this.context.labelSet[y],c=new l.LabeledStatement(v,b)}else this.consumeSemicolon(),c=new l.ExpressionStatement(o);return this.finalize(a,c)},h.prototype.parseThrowStatement=function(){var a=this.createNode();this.expectKeyword("throw"),this.hasLineTerminator&&this.throwError(d.Messages.NewlineAfterThrow);var o=this.parseExpression();return this.consumeSemicolon(),this.finalize(a,new l.ThrowStatement(o))},h.prototype.parseCatchClause=function(){var a=this.createNode();this.expectKeyword("catch"),this.expect("("),this.match(")")&&this.throwUnexpectedToken(this.lookahead);for(var o=[],c=this.parsePattern(o),v={},y=0;y<o.length;y++){var b="$"+o[y].value;Object.prototype.hasOwnProperty.call(v,b)&&this.tolerateError(d.Messages.DuplicateBinding,o[y].value),v[b]=!0}this.context.strict&&c.type===p.Syntax.Identifier&&this.scanner.isRestrictedWord(c.name)&&this.tolerateError(d.Messages.StrictCatchVariable),this.expect(")");var w=this.parseBlock();return this.finalize(a,new l.CatchClause(c,w))},h.prototype.parseFinallyClause=function(){return this.expectKeyword("finally"),this.parseBlock()},h.prototype.parseTryStatement=function(){var a=this.createNode();this.expectKeyword("try");var o=this.parseBlock(),c=this.matchKeyword("catch")?this.parseCatchClause():null,v=this.matchKeyword("finally")?this.parseFinallyClause():null;return!c&&!v&&this.throwError(d.Messages.NoCatchOrFinally),this.finalize(a,new l.TryStatement(o,c,v))},h.prototype.parseDebuggerStatement=function(){var a=this.createNode();return this.expectKeyword("debugger"),this.consumeSemicolon(),this.finalize(a,new l.DebuggerStatement)},h.prototype.parseStatement=function(){var a;switch(this.lookahead.type){case 1:case 5:case 6:case 8:case 10:case 9:a=this.parseExpressionStatement();break;case 7:var o=this.lookahead.value;o==="{"?a=this.parseBlock():o==="("?a=this.parseExpressionStatement():o===";"?a=this.parseEmptyStatement():a=this.parseExpressionStatement();break;case 3:a=this.matchAsyncFunction()?this.parseFunctionDeclaration():this.parseLabelledStatement();break;case 4:switch(this.lookahead.value){case"break":a=this.parseBreakStatement();break;case"continue":a=this.parseContinueStatement();break;case"debugger":a=this.parseDebuggerStatement();break;case"do":a=this.parseDoWhileStatement();break;case"for":a=this.parseForStatement();break;case"function":a=this.parseFunctionDeclaration();break;case"if":a=this.parseIfStatement();break;case"return":a=this.parseReturnStatement();break;case"switch":a=this.parseSwitchStatement();break;case"throw":a=this.parseThrowStatement();break;case"try":a=this.parseTryStatement();break;case"var":a=this.parseVariableStatement();break;case"while":a=this.parseWhileStatement();break;case"with":a=this.parseWithStatement();break;default:a=this.parseExpressionStatement();break}break;default:a=this.throwUnexpectedToken(this.lookahead)}return a},h.prototype.parseFunctionSourceElements=function(){var a=this.createNode();this.expect("{");var o=this.parseDirectivePrologues(),c=this.context.labelSet,v=this.context.inIteration,y=this.context.inSwitch,b=this.context.inFunctionBody;for(this.context.labelSet={},this.context.inIteration=!1,this.context.inSwitch=!1,this.context.inFunctionBody=!0;this.lookahead.type!==2&&!this.match("}");)o.push(this.parseStatementListItem());return this.expect("}"),this.context.labelSet=c,this.context.inIteration=v,this.context.inSwitch=y,this.context.inFunctionBody=b,this.finalize(a,new l.BlockStatement(o))},h.prototype.validateParam=function(a,o,c){var v="$"+c;this.context.strict?(this.scanner.isRestrictedWord(c)&&(a.stricted=o,a.message=d.Messages.StrictParamName),Object.prototype.hasOwnProperty.call(a.paramSet,v)&&(a.stricted=o,a.message=d.Messages.StrictParamDupe)):a.firstRestricted||(this.scanner.isRestrictedWord(c)?(a.firstRestricted=o,a.message=d.Messages.StrictParamName):this.scanner.isStrictModeReservedWord(c)?(a.firstRestricted=o,a.message=d.Messages.StrictReservedWord):Object.prototype.hasOwnProperty.call(a.paramSet,v)&&(a.stricted=o,a.message=d.Messages.StrictParamDupe)),typeof Object.defineProperty=="function"?Object.defineProperty(a.paramSet,v,{value:!0,enumerable:!0,writable:!0,configurable:!0}):a.paramSet[v]=!0},h.prototype.parseRestElement=function(a){var o=this.createNode();this.expect("...");var c=this.parsePattern(a);return this.match("=")&&this.throwError(d.Messages.DefaultRestParameter),this.match(")")||this.throwError(d.Messages.ParameterAfterRestParameter),this.finalize(o,new l.RestElement(c))},h.prototype.parseFormalParameter=function(a){for(var o=[],c=this.match("...")?this.parseRestElement(o):this.parsePatternWithDefault(o),v=0;v<o.length;v++)this.validateParam(a,o[v],o[v].value);a.simple=a.simple&&c instanceof l.Identifier,a.params.push(c)},h.prototype.parseFormalParameters=function(a){var o;if(o={simple:!0,params:[],firstRestricted:a},this.expect("("),!this.match(")"))for(o.paramSet={};this.lookahead.type!==2&&(this.parseFormalParameter(o),!(this.match(")")||(this.expect(","),this.match(")")))););return this.expect(")"),{simple:o.simple,params:o.params,stricted:o.stricted,firstRestricted:o.firstRestricted,message:o.message}},h.prototype.matchAsyncFunction=function(){var a=this.matchContextualKeyword("async");if(a){var o=this.scanner.saveState();this.scanner.scanComments();var c=this.scanner.lex();this.scanner.restoreState(o),a=o.lineNumber===c.lineNumber&&c.type===4&&c.value==="function"}return a},h.prototype.parseFunctionDeclaration=function(a){var o=this.createNode(),c=this.matchContextualKeyword("async");c&&this.nextToken(),this.expectKeyword("function");var v=c?!1:this.match("*");v&&this.nextToken();var y,b=null,w=null;if(!a||!this.match("(")){var _=this.lookahead;b=this.parseVariableIdentifier(),this.context.strict?this.scanner.isRestrictedWord(_.value)&&this.tolerateUnexpectedToken(_,d.Messages.StrictFunctionName):this.scanner.isRestrictedWord(_.value)?(w=_,y=d.Messages.StrictFunctionName):this.scanner.isStrictModeReservedWord(_.value)&&(w=_,y=d.Messages.StrictReservedWord)}var E=this.context.await,S=this.context.allowYield;this.context.await=c,this.context.allowYield=!v;var A=this.parseFormalParameters(w),T=A.params,D=A.stricted;w=A.firstRestricted,A.message&&(y=A.message);var I=this.context.strict,B=this.context.allowStrictDirective;this.context.allowStrictDirective=A.simple;var M=this.parseFunctionSourceElements();return this.context.strict&&w&&this.throwUnexpectedToken(w,y),this.context.strict&&D&&this.tolerateUnexpectedToken(D,y),this.context.strict=I,this.context.allowStrictDirective=B,this.context.await=E,this.context.allowYield=S,c?this.finalize(o,new l.AsyncFunctionDeclaration(b,T,M)):this.finalize(o,new l.FunctionDeclaration(b,T,M,v))},h.prototype.parseFunctionExpression=function(){var a=this.createNode(),o=this.matchContextualKeyword("async");o&&this.nextToken(),this.expectKeyword("function");var c=o?!1:this.match("*");c&&this.nextToken();var v,y=null,b,w=this.context.await,_=this.context.allowYield;if(this.context.await=o,this.context.allowYield=!c,!this.match("(")){var E=this.lookahead;y=!this.context.strict&&!c&&this.matchKeyword("yield")?this.parseIdentifierName():this.parseVariableIdentifier(),this.context.strict?this.scanner.isRestrictedWord(E.value)&&this.tolerateUnexpectedToken(E,d.Messages.StrictFunctionName):this.scanner.isRestrictedWord(E.value)?(b=E,v=d.Messages.StrictFunctionName):this.scanner.isStrictModeReservedWord(E.value)&&(b=E,v=d.Messages.StrictReservedWord)}var S=this.parseFormalParameters(b),A=S.params,T=S.stricted;b=S.firstRestricted,S.message&&(v=S.message);var D=this.context.strict,I=this.context.allowStrictDirective;this.context.allowStrictDirective=S.simple;var B=this.parseFunctionSourceElements();return this.context.strict&&b&&this.throwUnexpectedToken(b,v),this.context.strict&&T&&this.tolerateUnexpectedToken(T,v),this.context.strict=D,this.context.allowStrictDirective=I,this.context.await=w,this.context.allowYield=_,o?this.finalize(a,new l.AsyncFunctionExpression(y,A,B)):this.finalize(a,new l.FunctionExpression(y,A,B,c))},h.prototype.parseDirective=function(){var a=this.lookahead,o=this.createNode(),c=this.parseExpression(),v=c.type===p.Syntax.Literal?this.getTokenRaw(a).slice(1,-1):null;return this.consumeSemicolon(),this.finalize(o,v?new l.Directive(c,v):new l.ExpressionStatement(c))},h.prototype.parseDirectivePrologues=function(){for(var a=null,o=[];;){var c=this.lookahead;if(c.type!==8)break;var v=this.parseDirective();o.push(v);var y=v.directive;if(typeof y!="string")break;y==="use strict"?(this.context.strict=!0,a&&this.tolerateUnexpectedToken(a,d.Messages.StrictOctalLiteral),this.context.allowStrictDirective||this.tolerateUnexpectedToken(c,d.Messages.IllegalLanguageModeDirective)):!a&&c.octal&&(a=c)}return o},h.prototype.qualifiedPropertyName=function(a){switch(a.type){case 3:case 8:case 1:case 5:case 6:case 4:return!0;case 7:return a.value==="["}return!1},h.prototype.parseGetterMethod=function(){var a=this.createNode(),o=!1,c=this.context.allowYield;this.context.allowYield=!o;var v=this.parseFormalParameters();v.params.length>0&&this.tolerateError(d.Messages.BadGetterArity);var y=this.parsePropertyMethod(v);return this.context.allowYield=c,this.finalize(a,new l.FunctionExpression(null,v.params,y,o))},h.prototype.parseSetterMethod=function(){var a=this.createNode(),o=!1,c=this.context.allowYield;this.context.allowYield=!o;var v=this.parseFormalParameters();v.params.length!==1?this.tolerateError(d.Messages.BadSetterArity):v.params[0]instanceof l.RestElement&&this.tolerateError(d.Messages.BadSetterRestParameter);var y=this.parsePropertyMethod(v);return this.context.allowYield=c,this.finalize(a,new l.FunctionExpression(null,v.params,y,o))},h.prototype.parseGeneratorMethod=function(){var a=this.createNode(),o=!0,c=this.context.allowYield;this.context.allowYield=!0;var v=this.parseFormalParameters();this.context.allowYield=!1;var y=this.parsePropertyMethod(v);return this.context.allowYield=c,this.finalize(a,new l.FunctionExpression(null,v.params,y,o))},h.prototype.isStartOfExpression=function(){var a=!0,o=this.lookahead.value;switch(this.lookahead.type){case 7:a=o==="["||o==="("||o==="{"||o==="+"||o==="-"||o==="!"||o==="~"||o==="++"||o==="--"||o==="/"||o==="/=";break;case 4:a=o==="class"||o==="delete"||o==="function"||o==="let"||o==="new"||o==="super"||o==="this"||o==="typeof"||o==="void"||o==="yield";break}return a},h.prototype.parseYieldExpression=function(){var a=this.createNode();this.expectKeyword("yield");var o=null,c=!1;if(!this.hasLineTerminator){var v=this.context.allowYield;this.context.allowYield=!1,c=this.match("*"),c?(this.nextToken(),o=this.parseAssignmentExpression()):this.isStartOfExpression()&&(o=this.parseAssignmentExpression()),this.context.allowYield=v}return this.finalize(a,new l.YieldExpression(o,c))},h.prototype.parseClassElement=function(a){var o=this.lookahead,c=this.createNode(),v="",y=null,b=null,w=!1,_=!1,E=!1,S=!1;if(this.match("*"))this.nextToken();else{w=this.match("["),y=this.parseObjectPropertyKey();var A=y;if(A.name==="static"&&(this.qualifiedPropertyName(this.lookahead)||this.match("*"))&&(o=this.lookahead,E=!0,w=this.match("["),this.match("*")?this.nextToken():y=this.parseObjectPropertyKey()),o.type===3&&!this.hasLineTerminator&&o.value==="async"){var T=this.lookahead.value;T!==":"&&T!=="("&&T!=="*"&&(S=!0,o=this.lookahead,y=this.parseObjectPropertyKey(),o.type===3&&o.value==="constructor"&&this.tolerateUnexpectedToken(o,d.Messages.ConstructorIsAsync))}}var D=this.qualifiedPropertyName(this.lookahead);return o.type===3?o.value==="get"&&D?(v="get",w=this.match("["),y=this.parseObjectPropertyKey(),this.context.allowYield=!1,b=this.parseGetterMethod()):o.value==="set"&&D&&(v="set",w=this.match("["),y=this.parseObjectPropertyKey(),b=this.parseSetterMethod()):o.type===7&&o.value==="*"&&D&&(v="init",w=this.match("["),y=this.parseObjectPropertyKey(),b=this.parseGeneratorMethod(),_=!0),!v&&y&&this.match("(")&&(v="init",b=S?this.parsePropertyMethodAsyncFunction():this.parsePropertyMethodFunction(),_=!0),v||this.throwUnexpectedToken(this.lookahead),v==="init"&&(v="method"),w||(E&&this.isPropertyKey(y,"prototype")&&this.throwUnexpectedToken(o,d.Messages.StaticPrototype),!E&&this.isPropertyKey(y,"constructor")&&((v!=="method"||!_||b&&b.generator)&&this.throwUnexpectedToken(o,d.Messages.ConstructorSpecialMethod),a.value?this.throwUnexpectedToken(o,d.Messages.DuplicateConstructor):a.value=!0,v="constructor")),this.finalize(c,new l.MethodDefinition(y,w,b,v,E))},h.prototype.parseClassElementList=function(){var a=[],o={value:!1};for(this.expect("{");!this.match("}");)this.match(";")?this.nextToken():a.push(this.parseClassElement(o));return this.expect("}"),a},h.prototype.parseClassBody=function(){var a=this.createNode(),o=this.parseClassElementList();return this.finalize(a,new l.ClassBody(o))},h.prototype.parseClassDeclaration=function(a){var o=this.createNode(),c=this.context.strict;this.context.strict=!0,this.expectKeyword("class");var v=a&&this.lookahead.type!==3?null:this.parseVariableIdentifier(),y=null;this.matchKeyword("extends")&&(this.nextToken(),y=this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));var b=this.parseClassBody();return this.context.strict=c,this.finalize(o,new l.ClassDeclaration(v,y,b))},h.prototype.parseClassExpression=function(){var a=this.createNode(),o=this.context.strict;this.context.strict=!0,this.expectKeyword("class");var c=this.lookahead.type===3?this.parseVariableIdentifier():null,v=null;this.matchKeyword("extends")&&(this.nextToken(),v=this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));var y=this.parseClassBody();return this.context.strict=o,this.finalize(a,new l.ClassExpression(c,v,y))},h.prototype.parseModule=function(){this.context.strict=!0,this.context.isModule=!0,this.scanner.isModule=!0;for(var a=this.createNode(),o=this.parseDirectivePrologues();this.lookahead.type!==2;)o.push(this.parseStatementListItem());return this.finalize(a,new l.Module(o))},h.prototype.parseScript=function(){for(var a=this.createNode(),o=this.parseDirectivePrologues();this.lookahead.type!==2;)o.push(this.parseStatementListItem());return this.finalize(a,new l.Script(o))},h.prototype.parseModuleSpecifier=function(){var a=this.createNode();this.lookahead.type!==8&&this.throwError(d.Messages.InvalidModuleSpecifier);var o=this.nextToken(),c=this.getTokenRaw(o);return this.finalize(a,new l.Literal(o.value,c))},h.prototype.parseImportSpecifier=function(){var a=this.createNode(),o,c;return this.lookahead.type===3?(o=this.parseVariableIdentifier(),c=o,this.matchContextualKeyword("as")&&(this.nextToken(),c=this.parseVariableIdentifier())):(o=this.parseIdentifierName(),c=o,this.matchContextualKeyword("as")?(this.nextToken(),c=this.parseVariableIdentifier()):this.throwUnexpectedToken(this.nextToken())),this.finalize(a,new l.ImportSpecifier(c,o))},h.prototype.parseNamedImports=function(){this.expect("{");for(var a=[];!this.match("}");)a.push(this.parseImportSpecifier()),this.match("}")||this.expect(",");return this.expect("}"),a},h.prototype.parseImportDefaultSpecifier=function(){var a=this.createNode(),o=this.parseIdentifierName();return this.finalize(a,new l.ImportDefaultSpecifier(o))},h.prototype.parseImportNamespaceSpecifier=function(){var a=this.createNode();this.expect("*"),this.matchContextualKeyword("as")||this.throwError(d.Messages.NoAsAfterImportNamespace),this.nextToken();var o=this.parseIdentifierName();return this.finalize(a,new l.ImportNamespaceSpecifier(o))},h.prototype.parseImportDeclaration=function(){this.context.inFunctionBody&&this.throwError(d.Messages.IllegalImportDeclaration);var a=this.createNode();this.expectKeyword("import");var o,c=[];if(this.lookahead.type===8)o=this.parseModuleSpecifier();else{if(this.match("{")?c=c.concat(this.parseNamedImports()):this.match("*")?c.push(this.parseImportNamespaceSpecifier()):this.isIdentifierName(this.lookahead)&&!this.matchKeyword("default")?(c.push(this.parseImportDefaultSpecifier()),this.match(",")&&(this.nextToken(),this.match("*")?c.push(this.parseImportNamespaceSpecifier()):this.match("{")?c=c.concat(this.parseNamedImports()):this.throwUnexpectedToken(this.lookahead))):this.throwUnexpectedToken(this.nextToken()),!this.matchContextualKeyword("from")){var v=this.lookahead.value?d.Messages.UnexpectedToken:d.Messages.MissingFromClause;this.throwError(v,this.lookahead.value)}this.nextToken(),o=this.parseModuleSpecifier()}return this.consumeSemicolon(),this.finalize(a,new l.ImportDeclaration(c,o))},h.prototype.parseExportSpecifier=function(){var a=this.createNode(),o=this.parseIdentifierName(),c=o;return this.matchContextualKeyword("as")&&(this.nextToken(),c=this.parseIdentifierName()),this.finalize(a,new l.ExportSpecifier(o,c))},h.prototype.parseExportDeclaration=function(){this.context.inFunctionBody&&this.throwError(d.Messages.IllegalExportDeclaration);var a=this.createNode();this.expectKeyword("export");var o;if(this.matchKeyword("default"))if(this.nextToken(),this.matchKeyword("function")){var c=this.parseFunctionDeclaration(!0);o=this.finalize(a,new l.ExportDefaultDeclaration(c))}else if(this.matchKeyword("class")){var c=this.parseClassDeclaration(!0);o=this.finalize(a,new l.ExportDefaultDeclaration(c))}else if(this.matchContextualKeyword("async")){var c=this.matchAsyncFunction()?this.parseFunctionDeclaration(!0):this.parseAssignmentExpression();o=this.finalize(a,new l.ExportDefaultDeclaration(c))}else{this.matchContextualKeyword("from")&&this.throwError(d.Messages.UnexpectedToken,this.lookahead.value);var c=this.match("{")?this.parseObjectInitializer():this.match("[")?this.parseArrayInitializer():this.parseAssignmentExpression();this.consumeSemicolon(),o=this.finalize(a,new l.ExportDefaultDeclaration(c))}else if(this.match("*")){if(this.nextToken(),!this.matchContextualKeyword("from")){var v=this.lookahead.value?d.Messages.UnexpectedToken:d.Messages.MissingFromClause;this.throwError(v,this.lookahead.value)}this.nextToken();var y=this.parseModuleSpecifier();this.consumeSemicolon(),o=this.finalize(a,new l.ExportAllDeclaration(y))}else if(this.lookahead.type===4){var c=void 0;switch(this.lookahead.value){case"let":case"const":c=this.parseLexicalDeclaration({inFor:!1});break;case"var":case"class":case"function":c=this.parseStatementListItem();break;default:this.throwUnexpectedToken(this.lookahead)}o=this.finalize(a,new l.ExportNamedDeclaration(c,[],null))}else if(this.matchAsyncFunction()){var c=this.parseFunctionDeclaration();o=this.finalize(a,new l.ExportNamedDeclaration(c,[],null))}else{var b=[],w=null,_=!1;for(this.expect("{");!this.match("}");)_=_||this.matchKeyword("default"),b.push(this.parseExportSpecifier()),this.match("}")||this.expect(",");if(this.expect("}"),this.matchContextualKeyword("from"))this.nextToken(),w=this.parseModuleSpecifier(),this.consumeSemicolon();else if(_){var v=this.lookahead.value?d.Messages.UnexpectedToken:d.Messages.MissingFromClause;this.throwError(v,this.lookahead.value)}else this.consumeSemicolon();o=this.finalize(a,new l.ExportNamedDeclaration(null,b,w))}return o},h})();r.Parser=g},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});function i(s,u){if(!s)throw new Error("ASSERT: "+u)}r.assert=i},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=(function(){function s(){this.errors=[],this.tolerant=!1}return s.prototype.recordError=function(u){this.errors.push(u)},s.prototype.tolerate=function(u){if(this.tolerant)this.recordError(u);else throw u},s.prototype.constructError=function(u,d){var l=new Error(u);try{throw l}catch(x){Object.create&&Object.defineProperty&&(l=Object.create(x),Object.defineProperty(l,"column",{value:d}))}return l},s.prototype.createError=function(u,d,l,x){var p="Line "+d+": "+x,m=this.constructError(p,l);return m.index=u,m.lineNumber=d,m.description=x,m},s.prototype.throwError=function(u,d,l,x){throw this.createError(u,d,l,x)},s.prototype.tolerateError=function(u,d,l,x){var p=this.createError(u,d,l,x);if(this.tolerant)this.recordError(p);else throw p},s})();r.ErrorHandler=i},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.Messages={BadGetterArity:"Getter must not have any formal parameters",BadSetterArity:"Setter must have exactly one formal parameter",BadSetterRestParameter:"Setter function argument must not be a rest parameter",ConstructorIsAsync:"Class constructor may not be an async method",ConstructorSpecialMethod:"Class constructor may not be an accessor",DeclarationMissingInitializer:"Missing initializer in %0 declaration",DefaultRestParameter:"Unexpected token =",DuplicateBinding:"Duplicate binding %0",DuplicateConstructor:"A class may only have one constructor",DuplicateProtoProperty:"Duplicate __proto__ fields are not allowed in object literals",ForInOfLoopInitializer:"%0 loop variable declaration may not have an initializer",GeneratorInLegacyContext:"Generator declarations are not allowed in legacy contexts",IllegalBreak:"Illegal break statement",IllegalContinue:"Illegal continue statement",IllegalExportDeclaration:"Unexpected token",IllegalImportDeclaration:"Unexpected token",IllegalLanguageModeDirective:"Illegal 'use strict' directive in function with non-simple parameter list",IllegalReturn:"Illegal return statement",InvalidEscapedReservedWord:"Keyword must not contain escaped characters",InvalidHexEscapeSequence:"Invalid hexadecimal escape sequence",InvalidLHSInAssignment:"Invalid left-hand side in assignment",InvalidLHSInForIn:"Invalid left-hand side in for-in",InvalidLHSInForLoop:"Invalid left-hand side in for-loop",InvalidModuleSpecifier:"Unexpected token",InvalidRegExp:"Invalid regular expression",LetInLexicalBinding:"let is disallowed as a lexically bound name",MissingFromClause:"Unexpected token",MultipleDefaultsInSwitch:"More than one default clause in switch statement",NewlineAfterThrow:"Illegal newline after throw",NoAsAfterImportNamespace:"Unexpected token",NoCatchOrFinally:"Missing catch or finally after try",ParameterAfterRestParameter:"Rest parameter must be last formal parameter",Redeclaration:"%0 '%1' has already been declared",StaticPrototype:"Classes may not have static property named prototype",StrictCatchVariable:"Catch variable may not be eval or arguments in strict mode",StrictDelete:"Delete of an unqualified identifier in strict mode.",StrictFunction:"In strict mode code, functions can only be declared at top level or inside a block",StrictFunctionName:"Function name may not be eval or arguments in strict mode",StrictLHSAssignment:"Assignment to eval or arguments is not allowed in strict mode",StrictLHSPostfix:"Postfix increment/decrement may not have eval or arguments operand in strict mode",StrictLHSPrefix:"Prefix increment/decrement may not have eval or arguments operand in strict mode",StrictModeWith:"Strict mode code may not include a with statement",StrictOctalLiteral:"Octal literals are not allowed in strict mode.",StrictParamDupe:"Strict mode function may not have duplicate parameter names",StrictParamName:"Parameter name eval or arguments is not allowed in strict mode",StrictReservedWord:"Use of future reserved word in strict mode",StrictVarName:"Variable name may not be eval or arguments in strict mode",TemplateOctalLiteral:"Octal literals are not allowed in template strings.",UnexpectedEOS:"Unexpected end of input",UnexpectedIdentifier:"Unexpected identifier",UnexpectedNumber:"Unexpected number",UnexpectedReserved:"Unexpected reserved word",UnexpectedString:"Unexpected string",UnexpectedTemplate:"Unexpected quasi %0",UnexpectedToken:"Unexpected token %0",UnexpectedTokenIllegal:"Unexpected token ILLEGAL",UnknownLabel:"Undefined label '%0'",UnterminatedRegExp:"Invalid regular expression: missing /"}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(9),u=i(4),d=i(11);function l(m){return"0123456789abcdef".indexOf(m.toLowerCase())}function x(m){return"01234567".indexOf(m)}var p=(function(){function m(f,g){this.source=f,this.errorHandler=g,this.trackComment=!1,this.isModule=!1,this.length=f.length,this.index=0,this.lineNumber=f.length>0?1:0,this.lineStart=0,this.curlyStack=[]}return m.prototype.saveState=function(){return{index:this.index,lineNumber:this.lineNumber,lineStart:this.lineStart}},m.prototype.restoreState=function(f){this.index=f.index,this.lineNumber=f.lineNumber,this.lineStart=f.lineStart},m.prototype.eof=function(){return this.index>=this.length},m.prototype.throwUnexpectedToken=function(f){return f===void 0&&(f=d.Messages.UnexpectedTokenIllegal),this.errorHandler.throwError(this.index,this.lineNumber,this.index-this.lineStart+1,f)},m.prototype.tolerateUnexpectedToken=function(f){f===void 0&&(f=d.Messages.UnexpectedTokenIllegal),this.errorHandler.tolerateError(this.index,this.lineNumber,this.index-this.lineStart+1,f)},m.prototype.skipSingleLineComment=function(f){var g=[],h,a;for(this.trackComment&&(g=[],h=this.index-f,a={start:{line:this.lineNumber,column:this.index-this.lineStart-f},end:{}});!this.eof();){var o=this.source.charCodeAt(this.index);if(++this.index,u.Character.isLineTerminator(o)){if(this.trackComment){a.end={line:this.lineNumber,column:this.index-this.lineStart-1};var c={multiLine:!1,slice:[h+f,this.index-1],range:[h,this.index-1],loc:a};g.push(c)}return o===13&&this.source.charCodeAt(this.index)===10&&++this.index,++this.lineNumber,this.lineStart=this.index,g}}if(this.trackComment){a.end={line:this.lineNumber,column:this.index-this.lineStart};var c={multiLine:!1,slice:[h+f,this.index],range:[h,this.index],loc:a};g.push(c)}return g},m.prototype.skipMultiLineComment=function(){var f=[],g,h;for(this.trackComment&&(f=[],g=this.index-2,h={start:{line:this.lineNumber,column:this.index-this.lineStart-2},end:{}});!this.eof();){var a=this.source.charCodeAt(this.index);if(u.Character.isLineTerminator(a))a===13&&this.source.charCodeAt(this.index+1)===10&&++this.index,++this.lineNumber,++this.index,this.lineStart=this.index;else if(a===42){if(this.source.charCodeAt(this.index+1)===47){if(this.index+=2,this.trackComment){h.end={line:this.lineNumber,column:this.index-this.lineStart};var o={multiLine:!0,slice:[g+2,this.index-2],range:[g,this.index],loc:h};f.push(o)}return f}++this.index}else++this.index}if(this.trackComment){h.end={line:this.lineNumber,column:this.index-this.lineStart};var o={multiLine:!0,slice:[g+2,this.index],range:[g,this.index],loc:h};f.push(o)}return this.tolerateUnexpectedToken(),f},m.prototype.scanComments=function(){var f;this.trackComment&&(f=[]);for(var g=this.index===0;!this.eof();){var h=this.source.charCodeAt(this.index);if(u.Character.isWhiteSpace(h))++this.index;else if(u.Character.isLineTerminator(h))++this.index,h===13&&this.source.charCodeAt(this.index)===10&&++this.index,++this.lineNumber,this.lineStart=this.index,g=!0;else if(h===47)if(h=this.source.charCodeAt(this.index+1),h===47){this.index+=2;var a=this.skipSingleLineComment(2);this.trackComment&&(f=f.concat(a)),g=!0}else if(h===42){this.index+=2;var a=this.skipMultiLineComment();this.trackComment&&(f=f.concat(a))}else break;else if(g&&h===45)if(this.source.charCodeAt(this.index+1)===45&&this.source.charCodeAt(this.index+2)===62){this.index+=3;var a=this.skipSingleLineComment(3);this.trackComment&&(f=f.concat(a))}else break;else if(h===60&&!this.isModule)if(this.source.slice(this.index+1,this.index+4)==="!--"){this.index+=4;var a=this.skipSingleLineComment(4);this.trackComment&&(f=f.concat(a))}else break;else break}return f},m.prototype.isFutureReservedWord=function(f){switch(f){case"enum":case"export":case"import":case"super":return!0;default:return!1}},m.prototype.isStrictModeReservedWord=function(f){switch(f){case"implements":case"interface":case"package":case"private":case"protected":case"public":case"static":case"yield":case"let":return!0;default:return!1}},m.prototype.isRestrictedWord=function(f){return f==="eval"||f==="arguments"},m.prototype.isKeyword=function(f){switch(f.length){case 2:return f==="if"||f==="in"||f==="do";case 3:return f==="var"||f==="for"||f==="new"||f==="try"||f==="let";case 4:return f==="this"||f==="else"||f==="case"||f==="void"||f==="with"||f==="enum";case 5:return f==="while"||f==="break"||f==="catch"||f==="throw"||f==="const"||f==="yield"||f==="class"||f==="super";case 6:return f==="return"||f==="typeof"||f==="delete"||f==="switch"||f==="export"||f==="import";case 7:return f==="default"||f==="finally"||f==="extends";case 8:return f==="function"||f==="continue"||f==="debugger";case 10:return f==="instanceof";default:return!1}},m.prototype.codePointAt=function(f){var g=this.source.charCodeAt(f);if(g>=55296&&g<=56319){var h=this.source.charCodeAt(f+1);if(h>=56320&&h<=57343){var a=g;g=(a-55296)*1024+h-56320+65536}}return g},m.prototype.scanHexEscape=function(f){for(var g=f==="u"?4:2,h=0,a=0;a<g;++a)if(!this.eof()&&u.Character.isHexDigit(this.source.charCodeAt(this.index)))h=h*16+l(this.source[this.index++]);else return null;return String.fromCharCode(h)},m.prototype.scanUnicodeCodePointEscape=function(){var f=this.source[this.index],g=0;for(f==="}"&&this.throwUnexpectedToken();!this.eof()&&(f=this.source[this.index++],!!u.Character.isHexDigit(f.charCodeAt(0)));)g=g*16+l(f);return(g>1114111||f!=="}")&&this.throwUnexpectedToken(),u.Character.fromCodePoint(g)},m.prototype.getIdentifier=function(){for(var f=this.index++;!this.eof();){var g=this.source.charCodeAt(this.index);if(g===92)return this.index=f,this.getComplexIdentifier();if(g>=55296&&g<57343)return this.index=f,this.getComplexIdentifier();if(u.Character.isIdentifierPart(g))++this.index;else break}return this.source.slice(f,this.index)},m.prototype.getComplexIdentifier=function(){var f=this.codePointAt(this.index),g=u.Character.fromCodePoint(f);this.index+=g.length;var h;for(f===92&&(this.source.charCodeAt(this.index)!==117&&this.throwUnexpectedToken(),++this.index,this.source[this.index]==="{"?(++this.index,h=this.scanUnicodeCodePointEscape()):(h=this.scanHexEscape("u"),(h===null||h==="\\"||!u.Character.isIdentifierStart(h.charCodeAt(0)))&&this.throwUnexpectedToken()),g=h);!this.eof()&&(f=this.codePointAt(this.index),!!u.Character.isIdentifierPart(f));)h=u.Character.fromCodePoint(f),g+=h,this.index+=h.length,f===92&&(g=g.substr(0,g.length-1),this.source.charCodeAt(this.index)!==117&&this.throwUnexpectedToken(),++this.index,this.source[this.index]==="{"?(++this.index,h=this.scanUnicodeCodePointEscape()):(h=this.scanHexEscape("u"),(h===null||h==="\\"||!u.Character.isIdentifierPart(h.charCodeAt(0)))&&this.throwUnexpectedToken()),g+=h);return g},m.prototype.octalToDecimal=function(f){var g=f!=="0",h=x(f);return!this.eof()&&u.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(g=!0,h=h*8+x(this.source[this.index++]),"0123".indexOf(f)>=0&&!this.eof()&&u.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(h=h*8+x(this.source[this.index++]))),{code:h,octal:g}},m.prototype.scanIdentifier=function(){var f,g=this.index,h=this.source.charCodeAt(g)===92?this.getComplexIdentifier():this.getIdentifier();if(h.length===1?f=3:this.isKeyword(h)?f=4:h==="null"?f=5:h==="true"||h==="false"?f=1:f=3,f!==3&&g+h.length!==this.index){var a=this.index;this.index=g,this.tolerateUnexpectedToken(d.Messages.InvalidEscapedReservedWord),this.index=a}return{type:f,value:h,lineNumber:this.lineNumber,lineStart:this.lineStart,start:g,end:this.index}},m.prototype.scanPunctuator=function(){var f=this.index,g=this.source[this.index];switch(g){case"(":case"{":g==="{"&&this.curlyStack.push("{"),++this.index;break;case".":++this.index,this.source[this.index]==="."&&this.source[this.index+1]==="."&&(this.index+=2,g="...");break;case"}":++this.index,this.curlyStack.pop();break;case")":case";":case",":case"[":case"]":case":":case"?":case"~":++this.index;break;default:g=this.source.substr(this.index,4),g===">>>="?this.index+=4:(g=g.substr(0,3),g==="==="||g==="!=="||g===">>>"||g==="<<="||g===">>="||g==="**="?this.index+=3:(g=g.substr(0,2),g==="&&"||g==="||"||g==="=="||g==="!="||g==="+="||g==="-="||g==="*="||g==="/="||g==="++"||g==="--"||g==="<<"||g===">>"||g==="&="||g==="|="||g==="^="||g==="%="||g==="<="||g===">="||g==="=>"||g==="**"?this.index+=2:(g=this.source[this.index],"<>=!+-*%&|^/".indexOf(g)>=0&&++this.index)))}return this.index===f&&this.throwUnexpectedToken(),{type:7,value:g,lineNumber:this.lineNumber,lineStart:this.lineStart,start:f,end:this.index}},m.prototype.scanHexLiteral=function(f){for(var g="";!this.eof()&&u.Character.isHexDigit(this.source.charCodeAt(this.index));)g+=this.source[this.index++];return g.length===0&&this.throwUnexpectedToken(),u.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:6,value:parseInt("0x"+g,16),lineNumber:this.lineNumber,lineStart:this.lineStart,start:f,end:this.index}},m.prototype.scanBinaryLiteral=function(f){for(var g="",h;!this.eof()&&(h=this.source[this.index],!(h!=="0"&&h!=="1"));)g+=this.source[this.index++];return g.length===0&&this.throwUnexpectedToken(),this.eof()||(h=this.source.charCodeAt(this.index),(u.Character.isIdentifierStart(h)||u.Character.isDecimalDigit(h))&&this.throwUnexpectedToken()),{type:6,value:parseInt(g,2),lineNumber:this.lineNumber,lineStart:this.lineStart,start:f,end:this.index}},m.prototype.scanOctalLiteral=function(f,g){var h="",a=!1;for(u.Character.isOctalDigit(f.charCodeAt(0))?(a=!0,h="0"+this.source[this.index++]):++this.index;!this.eof()&&u.Character.isOctalDigit(this.source.charCodeAt(this.index));)h+=this.source[this.index++];return!a&&h.length===0&&this.throwUnexpectedToken(),(u.Character.isIdentifierStart(this.source.charCodeAt(this.index))||u.Character.isDecimalDigit(this.source.charCodeAt(this.index)))&&this.throwUnexpectedToken(),{type:6,value:parseInt(h,8),octal:a,lineNumber:this.lineNumber,lineStart:this.lineStart,start:g,end:this.index}},m.prototype.isImplicitOctalLiteral=function(){for(var f=this.index+1;f<this.length;++f){var g=this.source[f];if(g==="8"||g==="9")return!1;if(!u.Character.isOctalDigit(g.charCodeAt(0)))return!0}return!0},m.prototype.scanNumericLiteral=function(){var f=this.index,g=this.source[f];s.assert(u.Character.isDecimalDigit(g.charCodeAt(0))||g===".","Numeric literal must start with a decimal digit or a decimal point");var h="";if(g!=="."){if(h=this.source[this.index++],g=this.source[this.index],h==="0"){if(g==="x"||g==="X")return++this.index,this.scanHexLiteral(f);if(g==="b"||g==="B")return++this.index,this.scanBinaryLiteral(f);if(g==="o"||g==="O")return this.scanOctalLiteral(g,f);if(g&&u.Character.isOctalDigit(g.charCodeAt(0))&&this.isImplicitOctalLiteral())return this.scanOctalLiteral(g,f)}for(;u.Character.isDecimalDigit(this.source.charCodeAt(this.index));)h+=this.source[this.index++];g=this.source[this.index]}if(g==="."){for(h+=this.source[this.index++];u.Character.isDecimalDigit(this.source.charCodeAt(this.index));)h+=this.source[this.index++];g=this.source[this.index]}if(g==="e"||g==="E")if(h+=this.source[this.index++],g=this.source[this.index],(g==="+"||g==="-")&&(h+=this.source[this.index++]),u.Character.isDecimalDigit(this.source.charCodeAt(this.index)))for(;u.Character.isDecimalDigit(this.source.charCodeAt(this.index));)h+=this.source[this.index++];else this.throwUnexpectedToken();return u.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:6,value:parseFloat(h),lineNumber:this.lineNumber,lineStart:this.lineStart,start:f,end:this.index}},m.prototype.scanStringLiteral=function(){var f=this.index,g=this.source[f];s.assert(g==="'"||g==='"',"String literal must starts with a quote"),++this.index;for(var h=!1,a="";!this.eof();){var o=this.source[this.index++];if(o===g){g="";break}else if(o==="\\")if(o=this.source[this.index++],!o||!u.Character.isLineTerminator(o.charCodeAt(0)))switch(o){case"u":if(this.source[this.index]==="{")++this.index,a+=this.scanUnicodeCodePointEscape();else{var c=this.scanHexEscape(o);c===null&&this.throwUnexpectedToken(),a+=c}break;case"x":var v=this.scanHexEscape(o);v===null&&this.throwUnexpectedToken(d.Messages.InvalidHexEscapeSequence),a+=v;break;case"n":a+=`
`;break;case"r":a+="\r";break;case"t":a+="	";break;case"b":a+="\b";break;case"f":a+="\f";break;case"v":a+="\v";break;case"8":case"9":a+=o,this.tolerateUnexpectedToken();break;default:if(o&&u.Character.isOctalDigit(o.charCodeAt(0))){var y=this.octalToDecimal(o);h=y.octal||h,a+=String.fromCharCode(y.code)}else a+=o;break}else++this.lineNumber,o==="\r"&&this.source[this.index]===`
`&&++this.index,this.lineStart=this.index;else{if(u.Character.isLineTerminator(o.charCodeAt(0)))break;a+=o}}return g!==""&&(this.index=f,this.throwUnexpectedToken()),{type:8,value:a,octal:h,lineNumber:this.lineNumber,lineStart:this.lineStart,start:f,end:this.index}},m.prototype.scanTemplate=function(){var f="",g=!1,h=this.index,a=this.source[h]==="`",o=!1,c=2;for(++this.index;!this.eof();){var v=this.source[this.index++];if(v==="`"){c=1,o=!0,g=!0;break}else if(v==="$"){if(this.source[this.index]==="{"){this.curlyStack.push("${"),++this.index,g=!0;break}f+=v}else if(v==="\\")if(v=this.source[this.index++],u.Character.isLineTerminator(v.charCodeAt(0)))++this.lineNumber,v==="\r"&&this.source[this.index]===`
`&&++this.index,this.lineStart=this.index;else switch(v){case"n":f+=`
`;break;case"r":f+="\r";break;case"t":f+="	";break;case"u":if(this.source[this.index]==="{")++this.index,f+=this.scanUnicodeCodePointEscape();else{var y=this.index,b=this.scanHexEscape(v);b!==null?f+=b:(this.index=y,f+=v)}break;case"x":var w=this.scanHexEscape(v);w===null&&this.throwUnexpectedToken(d.Messages.InvalidHexEscapeSequence),f+=w;break;case"b":f+="\b";break;case"f":f+="\f";break;case"v":f+="\v";break;default:v==="0"?(u.Character.isDecimalDigit(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(d.Messages.TemplateOctalLiteral),f+="\0"):u.Character.isOctalDigit(v.charCodeAt(0))?this.throwUnexpectedToken(d.Messages.TemplateOctalLiteral):f+=v;break}else u.Character.isLineTerminator(v.charCodeAt(0))?(++this.lineNumber,v==="\r"&&this.source[this.index]===`
`&&++this.index,this.lineStart=this.index,f+=`
`):f+=v}return g||this.throwUnexpectedToken(),a||this.curlyStack.pop(),{type:10,value:this.source.slice(h+1,this.index-c),cooked:f,head:a,tail:o,lineNumber:this.lineNumber,lineStart:this.lineStart,start:h,end:this.index}},m.prototype.testRegExp=function(f,g){var h="￿",a=f,o=this;g.indexOf("u")>=0&&(a=a.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,function(c,v,y){var b=parseInt(v||y,16);return b>1114111&&o.throwUnexpectedToken(d.Messages.InvalidRegExp),b<=65535?String.fromCharCode(b):h}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,h));try{RegExp(a)}catch{this.throwUnexpectedToken(d.Messages.InvalidRegExp)}try{return new RegExp(f,g)}catch{return null}},m.prototype.scanRegExpBody=function(){var f=this.source[this.index];s.assert(f==="/","Regular expression literal must start with a slash");for(var g=this.source[this.index++],h=!1,a=!1;!this.eof();)if(f=this.source[this.index++],g+=f,f==="\\")f=this.source[this.index++],u.Character.isLineTerminator(f.charCodeAt(0))&&this.throwUnexpectedToken(d.Messages.UnterminatedRegExp),g+=f;else if(u.Character.isLineTerminator(f.charCodeAt(0)))this.throwUnexpectedToken(d.Messages.UnterminatedRegExp);else if(h)f==="]"&&(h=!1);else if(f==="/"){a=!0;break}else f==="["&&(h=!0);return a||this.throwUnexpectedToken(d.Messages.UnterminatedRegExp),g.substr(1,g.length-2)},m.prototype.scanRegExpFlags=function(){for(var f="",g="";!this.eof();){var h=this.source[this.index];if(!u.Character.isIdentifierPart(h.charCodeAt(0)))break;if(++this.index,h==="\\"&&!this.eof())if(h=this.source[this.index],h==="u"){++this.index;var a=this.index,o=this.scanHexEscape("u");if(o!==null)for(g+=o,f+="\\u";a<this.index;++a)f+=this.source[a];else this.index=a,g+="u",f+="\\u";this.tolerateUnexpectedToken()}else f+="\\",this.tolerateUnexpectedToken();else g+=h,f+=h}return g},m.prototype.scanRegExp=function(){var f=this.index,g=this.scanRegExpBody(),h=this.scanRegExpFlags(),a=this.testRegExp(g,h);return{type:9,value:"",pattern:g,flags:h,regex:a,lineNumber:this.lineNumber,lineStart:this.lineStart,start:f,end:this.index}},m.prototype.lex=function(){if(this.eof())return{type:2,value:"",lineNumber:this.lineNumber,lineStart:this.lineStart,start:this.index,end:this.index};var f=this.source.charCodeAt(this.index);return u.Character.isIdentifierStart(f)?this.scanIdentifier():f===40||f===41||f===59?this.scanPunctuator():f===39||f===34?this.scanStringLiteral():f===46?u.Character.isDecimalDigit(this.source.charCodeAt(this.index+1))?this.scanNumericLiteral():this.scanPunctuator():u.Character.isDecimalDigit(f)?this.scanNumericLiteral():f===96||f===125&&this.curlyStack[this.curlyStack.length-1]==="${"?this.scanTemplate():f>=55296&&f<57343&&u.Character.isIdentifierStart(this.codePointAt(this.index))?this.scanIdentifier():this.scanPunctuator()},m})();r.Scanner=p},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.TokenName={},r.TokenName[1]="Boolean",r.TokenName[2]="<end>",r.TokenName[3]="Identifier",r.TokenName[4]="Keyword",r.TokenName[5]="Null",r.TokenName[6]="Numeric",r.TokenName[7]="Punctuator",r.TokenName[8]="String",r.TokenName[9]="RegularExpression",r.TokenName[10]="Template"},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.XHTMLEntities={quot:'"',amp:"&",apos:"'",gt:">",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",frasl:"⁄",euro:"€",image:"ℑ",weierp:"℘",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",lang:"⟨",rang:"⟩"}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(10),u=i(12),d=i(13),l=(function(){function p(){this.values=[],this.curly=this.paren=-1}return p.prototype.beforeFunctionExpression=function(m){return["(","{","[","in","typeof","instanceof","new","return","case","delete","throw","void","=","+=","-=","*=","**=","/=","%=","<<=",">>=",">>>=","&=","|=","^=",",","+","-","*","**","/","%","++","--","<<",">>",">>>","&","|","^","!","~","&&","||","?",":","===","==",">=","<=","<",">","!=","!=="].indexOf(m)>=0},p.prototype.isRegexStart=function(){var m=this.values[this.values.length-1],f=m!==null;switch(m){case"this":case"]":f=!1;break;case")":var g=this.values[this.paren-1];f=g==="if"||g==="while"||g==="for"||g==="with";break;case"}":if(f=!1,this.values[this.curly-3]==="function"){var h=this.values[this.curly-4];f=h?!this.beforeFunctionExpression(h):!1}else if(this.values[this.curly-4]==="function"){var h=this.values[this.curly-5];f=h?!this.beforeFunctionExpression(h):!0}break}return f},p.prototype.push=function(m){m.type===7||m.type===4?(m.value==="{"?this.curly=this.values.length:m.value==="("&&(this.paren=this.values.length),this.values.push(m.value)):this.values.push(null)},p})(),x=(function(){function p(m,f){this.errorHandler=new s.ErrorHandler,this.errorHandler.tolerant=f?typeof f.tolerant=="boolean"&&f.tolerant:!1,this.scanner=new u.Scanner(m,this.errorHandler),this.scanner.trackComment=f?typeof f.comment=="boolean"&&f.comment:!1,this.trackRange=f?typeof f.range=="boolean"&&f.range:!1,this.trackLoc=f?typeof f.loc=="boolean"&&f.loc:!1,this.buffer=[],this.reader=new l}return p.prototype.errors=function(){return this.errorHandler.errors},p.prototype.getNextToken=function(){if(this.buffer.length===0){var m=this.scanner.scanComments();if(this.scanner.trackComment)for(var f=0;f<m.length;++f){var g=m[f],h=this.scanner.source.slice(g.slice[0],g.slice[1]),a={type:g.multiLine?"BlockComment":"LineComment",value:h};this.trackRange&&(a.range=g.range),this.trackLoc&&(a.loc=g.loc),this.buffer.push(a)}if(!this.scanner.eof()){var o=void 0;this.trackLoc&&(o={start:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},end:{}});var c=this.scanner.source[this.scanner.index]==="/"&&this.reader.isRegexStart(),v=c?this.scanner.scanRegExp():this.scanner.lex();this.reader.push(v);var y={type:d.TokenName[v.type],value:this.scanner.source.slice(v.start,v.end)};if(this.trackRange&&(y.range=[v.start,v.end]),this.trackLoc&&(o.end={line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},y.loc=o),v.type===9){var b=v.pattern,w=v.flags;y.regex={pattern:b,flags:w}}this.buffer.push(y)}}return this.buffer.shift()},p})();r.Tokenizer=x}])})})(fr)),fr.exports}var Le={},Pn;function rn(){if(Pn)return Le;Pn=1;function t(a){return Array.isArray?Array.isArray(a):h(a)==="[object Array]"}Le.isArray=t;function e(a){return typeof a=="boolean"}Le.isBoolean=e;function n(a){return a===null}Le.isNull=n;function r(a){return a==null}Le.isNullOrUndefined=r;function i(a){return typeof a=="number"}Le.isNumber=i;function s(a){return typeof a=="string"}Le.isString=s;function u(a){return typeof a=="symbol"}Le.isSymbol=u;function d(a){return a===void 0}Le.isUndefined=d;function l(a){return h(a)==="[object RegExp]"}Le.isRegExp=l;function x(a){return typeof a=="object"&&a!==null}Le.isObject=x;function p(a){return h(a)==="[object Date]"}Le.isDate=p;function m(a){return h(a)==="[object Error]"||a instanceof Error}Le.isError=m;function f(a){return typeof a=="function"}Le.isFunction=f;function g(a){return a===null||typeof a=="boolean"||typeof a=="number"||typeof a=="string"||typeof a=="symbol"||typeof a>"u"}Le.isPrimitive=g,Le.isBuffer=ca().Buffer.isBuffer;function h(a){return Object.prototype.toString.call(a)}return Le}var Mr,Rn;function Os(){if(Rn)return Mr;Rn=1;const t=32,e=7,n=256,r=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9];let i;const s=a=>a<1e5?a<100?a<10?0:1:a<1e4?a<1e3?2:3:4:a<1e7?a<1e6?5:6:a<1e9?a<1e8?7:8:9;function u(a,o){if(a===o)return 0;if(~~a===a&&~~o===o){if(a===0||o===0)return a<o?-1:1;if(a<0||o<0){if(o>=0)return-1;if(a>=0)return 1;a=-a,o=-o}const y=s(a),b=s(o);let w=0;return y<b?(a*=r[b-y-1],o/=10,w=-1):y>b&&(o*=r[y-b-1],a/=10,w=1),a===o?w:a<o?-1:1}const c=String(a),v=String(o);return c===v?0:c<v?-1:1}function d(a){let o=0;for(;a>=t;)o|=a&1,a>>=1;return a+o}function l(a,o,c,v){let y=o+1;if(y===c)return 1;if(v(a[y++],a[o])<0){for(;y<c&&v(a[y],a[y-1])<0;)y++;x(a,o,y),x(i,o,y)}else for(;y<c&&v(a[y],a[y-1])>=0;)y++;return y-o}function x(a,o,c){for(c--;o<c;){const v=a[o];a[o++]=a[c],a[c--]=v}}function p(a,o,c,v,y){for(v===o&&v++;v<c;v++){const b=a[v],w=i[v];let _=o,E=v;for(;_<E;){const A=_+E>>>1;y(b,a[A])<0?E=A:_=A+1}let S=v-_;switch(S){case 3:a[_+3]=a[_+2],i[_+3]=i[_+2];case 2:a[_+2]=a[_+1],i[_+2]=i[_+1];case 1:a[_+1]=a[_],i[_+1]=i[_];break;default:for(;S>0;)a[_+S]=a[_+S-1],i[_+S]=i[_+S-1],S--}a[_]=b,i[_]=w}}function m(a,o,c,v,y,b){let w=0,_=0,E=1;if(b(a,o[c+y])>0){for(_=v-y;E<_&&b(a,o[c+y+E])>0;)w=E,E=(E<<1)+1,E<=0&&(E=_);E>_&&(E=_),w+=y,E+=y}else{for(_=y+1;E<_&&b(a,o[c+y-E])<=0;)w=E,E=(E<<1)+1,E<=0&&(E=_);E>_&&(E=_);const S=w;w=y-E,E=y-S}for(w++;w<E;){const S=w+(E-w>>>1);b(a,o[c+S])>0?w=S+1:E=S}return E}function f(a,o,c,v,y,b){let w=0,_=0,E=1;if(b(a,o[c+y])<0){for(_=y+1;E<_&&b(a,o[c+y-E])<0;)w=E,E=(E<<1)+1,E<=0&&(E=_);E>_&&(E=_);const S=w;w=y-E,E=y-S}else{for(_=v-y;E<_&&b(a,o[c+y+E])>=0;)w=E,E=(E<<1)+1,E<=0&&(E=_);E>_&&(E=_),w+=y,E+=y}for(w++;w<E;){const S=w+(E-w>>>1);b(a,o[c+S])<0?E=S:w=S+1}return E}class g{constructor(o,c){this.array=o,this.compare=c;const{length:v}=o;this.length=v,this.minGallop=e,this.tmpStorageLength=v<2*n?v>>>1:n,this.tmp=new Array(this.tmpStorageLength),this.tmpIndex=new Array(this.tmpStorageLength),this.stackLength=v<120?5:v<1542?10:v<119151?19:40,this.runStart=new Array(this.stackLength),this.runLength=new Array(this.stackLength),this.stackSize=0}pushRun(o,c){this.runStart[this.stackSize]=o,this.runLength[this.stackSize]=c,this.stackSize+=1}mergeRuns(){for(;this.stackSize>1;){let o=this.stackSize-2;if(o>=1&&this.runLength[o-1]<=this.runLength[o]+this.runLength[o+1]||o>=2&&this.runLength[o-2]<=this.runLength[o]+this.runLength[o-1])this.runLength[o-1]<this.runLength[o+1]&&o--;else if(this.runLength[o]>this.runLength[o+1])break;this.mergeAt(o)}}forceMergeRuns(){for(;this.stackSize>1;){let o=this.stackSize-2;o>0&&this.runLength[o-1]<this.runLength[o+1]&&o--,this.mergeAt(o)}}mergeAt(o){const{compare:c}=this,{array:v}=this;let y=this.runStart[o],b=this.runLength[o];const w=this.runStart[o+1];let _=this.runLength[o+1];this.runLength[o]=b+_,o===this.stackSize-3&&(this.runStart[o+1]=this.runStart[o+2],this.runLength[o+1]=this.runLength[o+2]),this.stackSize--;const E=f(v[w],v,y,b,0,c);y+=E,b-=E,b!==0&&(_=m(v[y+b-1],v,w,_,_-1,c),_!==0&&(b<=_?this.mergeLow(y,b,w,_):this.mergeHigh(y,b,w,_)))}mergeLow(o,c,v,y){const{compare:b}=this,{array:w}=this,{tmp:_}=this,{tmpIndex:E}=this;let S=0;for(S=0;S<c;S++)_[S]=w[o+S],E[S]=i[o+S];let A=0,T=v,D=o;if(w[D]=w[T],i[D]=i[T],D++,T++,--y===0){for(S=0;S<c;S++)w[D+S]=_[A+S],i[D+S]=E[A+S];return}if(c===1){for(S=0;S<y;S++)w[D+S]=w[T+S],i[D+S]=i[T+S];w[D+y]=_[A],i[D+y]=E[A];return}let{minGallop:I}=this;for(;;){let B=0,M=0,L=!1;do if(b(w[T],_[A])<0){if(w[D]=w[T],i[D]=i[T],D++,T++,M++,B=0,--y===0){L=!0;break}}else if(w[D]=_[A],i[D]=E[A],D++,A++,B++,M=0,--c===1){L=!0;break}while((B|M)<I);if(L)break;do{if(B=f(w[T],_,A,c,0,b),B!==0){for(S=0;S<B;S++)w[D+S]=_[A+S],i[D+S]=E[A+S];if(D+=B,A+=B,c-=B,c<=1){L=!0;break}}if(w[D]=w[T],i[D]=i[T],D++,T++,--y===0){L=!0;break}if(M=m(_[A],w,T,y,0,b),M!==0){for(S=0;S<M;S++)w[D+S]=w[T+S],i[D+S]=i[T+S];if(D+=M,T+=M,y-=M,y===0){L=!0;break}}if(w[D]=_[A],i[D]=E[A],D++,A++,--c===1){L=!0;break}I--}while(B>=e||M>=e);if(L)break;I<0&&(I=0),I+=2}if(this.minGallop=I,I<1&&(this.minGallop=1),c===1){for(S=0;S<y;S++)w[D+S]=w[T+S],i[D+S]=i[T+S];w[D+y]=_[A],i[D+y]=E[A]}else{if(c===0)throw new Error("mergeLow preconditions were not respected");for(S=0;S<c;S++)w[D+S]=_[A+S],i[D+S]=E[A+S]}}mergeHigh(o,c,v,y){const{compare:b}=this,{array:w}=this,{tmp:_}=this,{tmpIndex:E}=this;let S=0;for(S=0;S<y;S++)_[S]=w[v+S],E[S]=i[v+S];let A=o+c-1,T=y-1,D=v+y-1,I=0,B=0;if(w[D]=w[A],i[D]=i[A],D--,A--,--c===0){for(I=D-(y-1),S=0;S<y;S++)w[I+S]=_[S],i[I+S]=E[S];return}if(y===1){for(D-=c,A-=c,B=D+1,I=A+1,S=c-1;S>=0;S--)w[B+S]=w[I+S],i[B+S]=i[I+S];w[D]=_[T],i[D]=E[T];return}let{minGallop:M}=this;for(;;){let L=0,U=0,N=!1;do if(b(_[T],w[A])<0){if(w[D]=w[A],i[D]=i[A],D--,A--,L++,U=0,--c===0){N=!0;break}}else if(w[D]=_[T],i[D]=E[T],D--,T--,U++,L=0,--y===1){N=!0;break}while((L|U)<M);if(N)break;do{if(L=c-f(_[T],w,o,c,c-1,b),L!==0){for(D-=L,A-=L,c-=L,B=D+1,I=A+1,S=L-1;S>=0;S--)w[B+S]=w[I+S],i[B+S]=i[I+S];if(c===0){N=!0;break}}if(w[D]=_[T],i[D]=E[T],D--,T--,--y===1){N=!0;break}if(U=y-m(w[A],_,0,y,y-1,b),U!==0){for(D-=U,T-=U,y-=U,B=D+1,I=T+1,S=0;S<U;S++)w[B+S]=_[I+S],i[B+S]=E[I+S];if(y<=1){N=!0;break}}if(w[D]=w[A],i[D]=i[A],D--,A--,--c===0){N=!0;break}M--}while(L>=e||U>=e);if(N)break;M<0&&(M=0),M+=2}if(this.minGallop=M,M<1&&(this.minGallop=1),y===1){for(D-=c,A-=c,B=D+1,I=A+1,S=c-1;S>=0;S--)w[B+S]=w[I+S],i[B+S]=i[I+S];w[D]=_[T],i[D]=E[T]}else{if(y===0)throw new Error("mergeHigh preconditions were not respected");for(I=D-(y-1),S=0;S<y;S++)w[I+S]=_[S],i[I+S]=E[S]}}}function h(a,o,c,v){if(!Array.isArray(a))throw new TypeError(`The "array" argument must be an array. Received ${a}`);i=[];const{length:y}=a;let b=0;for(;b<y;)i[b]=b++;o?typeof o!="function"&&(v=c,c=o,o=u):o=u,c||(c=0),v||(v=y);let w=v-c;if(w<2)return i;let _=0;if(w<t)return _=l(a,c,v,o),p(a,c,v,c+_,o),i;const E=new g(a,o),S=d(w);do{if(_=l(a,c,v,o),_<S){let A=w;A>S&&(A=S),p(a,c,c+A,c+_,o),_=A}E.pushRun(c,_),E.mergeRuns(),w-=_,c+=_}while(w!==0);return E.forceMergeRuns(),i}return Mr={sort:h},Mr}var Nr,On;function Fr(){if(On)return Nr;On=1;const{isObject:t,isArray:e,isString:n,isNumber:r,isFunction:i}=rn(),s="before",u="after-prop",d="after-colon",l="after-value",x="after",p="before-all",m="after-all",f="[",g="]",h="{",a="}",o=",",c="",v="-",y=[s,u,d,l,x],b=[s,x,p,m],w=b.map(Symbol.for),_=":",E=void 0,S=(N,O)=>Symbol.for(N+_+O),A=(N,O)=>{if(O){if(y.includes(N))return S(N,O);throw new RangeError(`Unsupported comment position ${N} with key ${O}`)}if(b.includes(N))return Symbol.for(N);throw new RangeError(`Unsupported comment position ${N}`)},T=(N,O,q)=>Object.defineProperty(N,O,{value:q,writable:!0,configurable:!0}),D=(N,O,q,V,G,re)=>{const ce=S(G,V);if(!Object.hasOwn(O,ce))return;const se=q===V?ce:S(G,q);T(N,se,O[ce]),re&&delete O[ce]},I=(N,O,q,V,G)=>{y.forEach(re=>{D(N,O,q,V,re,G)})},B=(N,O,q)=>{O!==q&&y.forEach(V=>{const G=S(V,q);if(!Object.hasOwn(N,G)){D(N,N,q,O,V,!0);return}const re=N[G];delete N[G],D(N,N,q,O,V,!0),T(N,S(V,O),re)})},M=(N,O)=>{w.forEach(q=>{const V=O[q];V&&T(N,q,V)})},L=(N,O,q)=>(q.forEach(V=>{!n(V)&&!r(V)||Object.hasOwn(O,V)&&(N[V]=O[V],I(N,O,V,V))}),N),U=i(JSON.isRawJSON)?JSON.isRawJSON:()=>!1;return Nr={PROP_SYMBOL_PREFIXES:y,PREFIX_BEFORE:s,PREFIX_AFTER_PROP:u,PREFIX_AFTER_COLON:d,PREFIX_AFTER_VALUE:l,PREFIX_AFTER:x,PREFIX_BEFORE_ALL:p,PREFIX_AFTER_ALL:m,BRACKET_OPEN:f,BRACKET_CLOSE:g,CURLY_BRACKET_OPEN:h,CURLY_BRACKET_CLOSE:a,COLON:_,COMMA:o,MINUS:v,EMPTY:c,UNDEFINED:E,symbol:S,define:T,copy_comments:I,swap_comments:B,assign_non_prop_comments:M,is_raw_json:U,assign(N,O,q){if(!t(N))throw new TypeError("Cannot convert undefined or null to object");if(!t(O))return N;if(q===E)q=Object.keys(O),M(N,O);else if(e(q))q.length===0&&M(N,O);else throw new TypeError("keys must be array or undefined");return L(N,O,q)},moveComments(N,O,{where:q,key:V},{where:G,key:re},ce=!1){if(!t(N))throw new TypeError("source must be an object");if(O||(O=N),!t(O))return;const se=A(q,V),de=A(G,re);if(!Object.hasOwn(N,se))return;const Y=N[se];if(delete N[se],ce||!Object.hasOwn(O,de)){T(O,de,Y);return}const K=O[de];K&&K.push(...Y)},removeComments(N,{where:O,key:q}){if(!t(N))throw new TypeError("target must be an object");const V=A(O,q);Object.hasOwn(N,V)&&delete N[V]}},Nr}var Lr,Un;function Ci(){if(Un)return Lr;Un=1;const{isArray:t}=rn(),{sort:e}=Os(),{PROP_SYMBOL_PREFIXES:n,UNDEFINED:r,symbol:i,copy_comments:s,swap_comments:u}=Fr(),d=g=>{const{length:h}=g;let a=0;const o=h/2;for(;a<o;a++)u(g,a,h-a-1)},l=(g,h,a,o,c)=>{s(g,h,a+o,a,c)},x=(g,h,a,o,c,v)=>{if(c>0){let b=o;for(;b-- >0;)l(g,h,a+b,c,v);return}let y=0;for(;y<o;){const b=y++;l(g,h,a+b,c,v)}},p=(g,h)=>{n.forEach(a=>{const o=i(a,h);delete g[o]})},m=(g,h)=>{let a=h;for(;a in g;)a=g[a];return a};class f extends Array{splice(...h){const{length:a}=this,o=super.splice(...h);let[c,v,...y]=h;c<0&&(c+=a),arguments.length===1?v=a-c:v=Math.min(a-c,v);const{length:b}=y,w=b-v,_=c+v,E=a-_;return x(this,this,_,E,w,!0),o}slice(...h){const{length:a}=this,o=super.slice(...h);if(!o.length)return new f;let[c,v]=h;return v===r?v=a:v<0&&(v+=a),c<0?c+=a:c===r&&(c=0),x(o,this,c,v-c,-c),o}unshift(...h){const{length:a}=this,o=super.unshift(...h),{length:c}=h;return c>0&&x(this,this,0,a,c,!0),o}shift(){const h=super.shift(),{length:a}=this;return p(this,0),x(this,this,1,a,-1,!0),h}reverse(){return super.reverse(),d(this),this}pop(){const h=super.pop();return p(this,this.length),h}concat(...h){let{length:a}=this;const o=super.concat(...h);return h.length&&(x(o,this,0,this.length,0),h.forEach(c=>{const v=a;a+=t(c)?c.length:1,c instanceof f&&x(o,c,0,c.length,v)})),o}sort(...h){const a=e(this,...h.slice(0,1)),o=Object.create(null);return a.forEach((c,v)=>{if(c===v)return;const y=m(o,c);y!==v&&(o[v]=y,u(this,v,y))}),this}}return Lr={CommentArray:f},Lr}var Pr,Gn;function Us(){if(Gn)return Pr;Gn=1;const t=Rs(),{CommentArray:e}=Ci(),{PREFIX_BEFORE:n,PREFIX_AFTER_PROP:r,PREFIX_AFTER_COLON:i,PREFIX_AFTER_VALUE:s,PREFIX_AFTER:u,PREFIX_BEFORE_ALL:d,PREFIX_AFTER_ALL:l,BRACKET_OPEN:x,BRACKET_CLOSE:p,CURLY_BRACKET_OPEN:m,CURLY_BRACKET_CLOSE:f,COLON:g,COMMA:h,MINUS:a,EMPTY:o,UNDEFINED:c,define:v,assign_non_prop_comments:y}=Fr(),b=X=>t.tokenize(X,{comment:!0,loc:!0});let w;const _=[];let E=null,S=null;const A=[];let T,D=!1,I=!1,B=null,M=null,L=null,U,N=null;const O=()=>{w=c,A.length=_.length=0,M=null,T=c},q=()=>{O(),B.length=0,S=E=B=M=L=N=null,w=c},V=X=>Symbol.for(T!==c?X+g+T:X),G=(X,{value:ae,context:j={}})=>N?N(X,ae,j):ae,re=()=>{const X=new SyntaxError(`Unexpected token '${L.value.slice(0,1)}', "${w}" is not valid JSON`);throw Object.assign(X,L.loc.start),q(),X},ce=()=>{const X=new SyntaxError("Unexpected end of JSON input");throw Object.assign(X,M?M.loc.end:{line:1,column:0}),q(),X},se=()=>{const X=B[++U];I=L&&X&&L.loc.end.line===X.loc.start.line||!1,M=L,L=X},de=()=>(L||ce(),L.type==="Punctuator"?L.value:L.type),Y=X=>de()===X,K=X=>{Y(X)||re()},W=X=>{_.push(E),E=X},Z=()=>{E=_.pop()},Q=()=>{if(!S)return;const X=[];for(const j of S)if(j.inline)X.push(j);else break;const{length:ae}=X;ae&&(ae===S.length?S=null:S.splice(0,ae),v(E,V(u),X))},P=X=>{S&&(v(E,V(X),S),S=null)},$=X=>{const ae=[];for(;L&&(Y("LineComment")||Y("BlockComment"));){const j={...L,inline:I};ae.push(j),se()}if(!D&&ae.length){if(X){v(E,V(X),ae);return}S=ae}},ee=(X,ae)=>{ae&&A.push(T),T=X},oe=()=>{T=A.pop()},be=()=>{const X={};W(X),ee(c,!0);let ae=!1,j;for($();!Y(f)&&!(ae&&(P(s),K(h),se(),$(),Q(),Y(f)));)ae=!0,K("String"),j=JSON.parse(L.value),ee(j),P(n),se(),$(r),K(g),se(),$(i),X[j]=G(j,ye()),$();return ae&&P(u),se(),T=void 0,ae||P(n),Z(),oe(),X},ke=()=>{const X=new e;W(X),ee(c,!0);let ae=!1,j=0;for($();!Y(p)&&!(ae&&(P(s),K(h),se(),$(),Q(),Y(p)));)ae=!0,ee(j),P(n),X[j]=G(j,ye()),j++,$();return ae&&P(u),se(),T=void 0,ae||P(n),Z(),oe(),X};function ye(){let X=de();if(X===m)return se(),{value:be()};if(X===x)return se(),{value:ke()};let ae=o;X===a&&(se(),X=de(),ae=a);let j,me;switch(X){case"String":case"Boolean":case"Null":case"Numeric":return j=L.value,se(),me=ae+j,{value:JSON.parse(me),context:{source:me}};default:return{}}}const Ne=X=>Object(X)===X;return Pr={parse:(X,ae,j)=>{O(),w=X,B=b(X),N=ae,D=j,B.length||ce(),U=-1,se(),W({}),$(d);const me=ye();$(l),L&&re();let Oe=G("",me);return!j&&Oe!==null&&(Ne(Oe)||(Oe=new Object(Oe)),y(Oe,E)),Z(),q(),Oe},tokenize:b},Pr}var Rr,zn;function Gs(){if(zn)return Rr;zn=1;const{isArray:t,isObject:e,isFunction:n,isNumber:r,isString:i}=rn(),{PREFIX_BEFORE_ALL:s,PREFIX_BEFORE:u,PREFIX_AFTER_PROP:d,PREFIX_AFTER_COLON:l,PREFIX_AFTER_VALUE:x,PREFIX_AFTER:p,PREFIX_AFTER_ALL:m,BRACKET_OPEN:f,BRACKET_CLOSE:g,CURLY_BRACKET_OPEN:h,CURLY_BRACKET_CLOSE:a,COLON:o,COMMA:c,EMPTY:v,UNDEFINED:y,is_raw_json:b}=Fr(),w=/[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,_=" ",E=`
`,S="null",A=P=>`${u}:${P}`,T=P=>`${d}:${P}`,D=P=>`${l}:${P}`,I=P=>`${x}:${P}`,B=P=>`${p}:${P}`,M={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},L=P=>(w.lastIndex=0,w.test(P)?P.replace(w,$=>{const ee=M[$];return typeof ee=="string"?ee:$}):P),U=P=>`"${L(P)}"`,N=(P,$)=>$?`//${P}`:`/*${P}*/`,O=(P,$,ee,oe)=>{const be=P[Symbol.for($)];if(!be||!be.length)return v;let ke=!1;const ye=be.reduce((Ne,{inline:ne,type:X,value:ae})=>{const j=ne?_:E+ee;return ke=X==="LineComment",Ne+j+N(ae,ke)},v);return oe||ke?ye+E+ee:ye};let q=null,V=v;const G=()=>{q=null,V=v},re=(P,$,ee)=>P?$?P+$.trim()+E+ee:P.trimRight()+E+ee:$?$.trimRight()+E+ee:v,ce=(P,$,ee)=>{const oe=O($,u,ee+V,!0);return re(oe,P,ee)},se=(P,$)=>{const ee=$+V,{length:oe}=P;let be=v,ke=v;for(let ye=0;ye<oe;ye++){ye!==0&&(be+=c);const Ne=re(ke,O(P,A(ye),ee),ee);be+=Ne||E+ee,be+=Y(ye,P,ee)||S,be+=O(P,I(ye),ee),ke=O(P,B(ye),ee)}return be+=re(ke,O(P,p,ee),ee),f+ce(be,P,$)+g},de=(P,$)=>{if(!P)return"null";const ee=$+V;let oe=v,be=v,ke=!0;const ye=t(q)?q:Object.keys(P),Ne=ne=>{const X=Y(ne,P,ee);if(X===y)return;ke||(oe+=c),ke=!1;const ae=re(be,O(P,A(ne),ee),ee);oe+=ae||E+ee,oe+=U(ne)+O(P,T(ne),ee)+o+O(P,D(ne),ee)+_+X+O(P,I(ne),ee),be=O(P,B(ne),ee)};return ye.forEach(Ne),oe+=re(be,O(P,p,ee),ee),h+ce(oe,P,$)+a};function Y(P,$,ee){let oe=$[P];switch(e(oe)&&n(oe.toJSON)&&(oe=oe.toJSON(P)),n(q)&&(oe=q.call($,P,oe)),typeof oe){case"string":return U(oe);case"number":return Number.isFinite(oe)?String(oe):S;case"boolean":case"null":return String(oe);case"object":return b(oe)?oe.rawJSON:t(oe)?se(oe,ee):de(oe,ee)}}const K=P=>i(P)?P:r(P)?_.repeat(P):v,{toString:W}=Object.prototype,Z=["[object Number]","[object String]","[object Boolean]"],Q=P=>{if(typeof P!="object")return!1;const $=W.call(P);return Z.includes($)};return Rr=(P,$,ee)=>{const oe=K(ee);if(!oe)return JSON.stringify(P,$);!n($)&&!t($)&&($=null),q=$,V=oe;const be=Q(P)?JSON.stringify(P):Y("",{"":P},v);return G(),e(P)?O(P,s,v,!0).trimLeft()+be+O(P,m,v).trimRight():be},Rr}var Or,Vn;function zs(){if(Vn)return Or;Vn=1;const{parse:t,tokenize:e}=Us(),n=Gs(),{CommentArray:r}=Ci(),{PREFIX_BEFORE:i,PREFIX_AFTER_PROP:s,PREFIX_AFTER_COLON:u,PREFIX_AFTER_VALUE:d,PREFIX_AFTER:l,PREFIX_BEFORE_ALL:x,PREFIX_AFTER_ALL:p,assign:m,moveComments:f,removeComments:g}=Fr();return Or={PREFIX_BEFORE:i,PREFIX_AFTER_PROP:s,PREFIX_AFTER_COLON:u,PREFIX_AFTER_VALUE:d,PREFIX_AFTER:l,PREFIX_BEFORE_ALL:x,PREFIX_AFTER_ALL:p,parse:t,stringify:n,tokenize:e,CommentArray:r,assign:m,moveComments:f,removeComments:g},Or}var Vs=zs();const Ti=fa(Vs),js=Object.assign({"./opcodes/achievements.jsonc":Ta,"./opcodes/animgroupconfigs.jsonc":Fa,"./opcodes/audio.jsonc":ka,"./opcodes/avataroverrides.jsonc":Ia,"./opcodes/avatars.jsonc":Ba,"./opcodes/cacheindex.json":Ma,"./opcodes/classicmodels.jsonc":Na,"./opcodes/clientscript.jsonc":La,"./opcodes/clientscriptdata.jsonc":Pa,"./opcodes/cutscenes.jsonc":Ra,"./opcodes/dbrows.jsonc":Oa,"./opcodes/dbtables.jsonc":Ua,"./opcodes/enums.json":Ga,"./opcodes/environments.jsonc":za,"./opcodes/fontmetrics.jsonc":Va,"./opcodes/framemaps.jsonc":ja,"./opcodes/frames.json":qa,"./opcodes/identitykit.jsonc":Xa,"./opcodes/interfaces.jsonc":Ha,"./opcodes/items.jsonc":$a,"./opcodes/maplabels.jsonc":Ja,"./opcodes/mapscenes.json":Wa,"./opcodes/mapsquare_envs.jsonc":Ka,"./opcodes/mapsquare_locations.json":Ya,"./opcodes/mapsquare_overlays.jsonc":Za,"./opcodes/mapsquare_tiles.jsonc":Qa,"./opcodes/mapsquare_tiles_nxt.jsonc":es,"./opcodes/mapsquare_underlays.jsonc":ts,"./opcodes/mapsquare_watertiles.json":rs,"./opcodes/mapzones.json":ns,"./opcodes/materials.jsonc":is,"./opcodes/models.jsonc":as,"./opcodes/npcs.jsonc":ss,"./opcodes/objects.jsonc":os,"./opcodes/oldmaterials.jsonc":ls,"./opcodes/oldmodels.jsonc":us,"./opcodes/oldproctexture.jsonc":cs,"./opcodes/params.jsonc":fs,"./opcodes/particles_0.jsonc":ds,"./opcodes/particles_1.jsonc":hs,"./opcodes/proctexture.jsonc":ps,"./opcodes/quickchatcategories.jsonc":ms,"./opcodes/quickchatlines.jsonc":gs,"./opcodes/rootcacheindex.jsonc":vs,"./opcodes/sequences.json":xs,"./opcodes/skeletalanim.jsonc":ys,"./opcodes/spotanims.json":bs,"./opcodes/structs.jsonc":ws,"./opcodes/typedef.jsonc":_s});function ie(t){const e=js[`./opcodes/${t}`];if(!e)throw new Error(`Opcode file not found: ${t}`);return Ti.parse(e)}const qs=ie("typedef.jsonc"),At=Buffer.alloc(2*1024*1024);let Ur=0;class te{parser;originalSource;totaltime=0;static fromJson(e){let n=Ti.parse(e,void 0,!0);return new te(n,e)}constructor(e,n){this.parser=Fe(null,e,qs),this.originalSource=n??JSON.stringify(e,void 0,"	")}readInternal(e){let n=performance.now(),r=this.parser.read(e);return this.totaltime+=performance.now()-n,e.scan!=e.endoffset&&(Ur++,Ur<100&&console.log(`bytes left over after decoding file: ${e.endoffset-e.scan}`),Ur==100&&console.log("too many bytes left over warning, no more warnings will be logged")),r}read(e,n,r){let i={isWrite:!1,buffer:e,stack:[],hiddenstack:[],scan:0,endoffset:e.byteLength,args:{...n.getDecodeArgs(),...r}};return this.readInternal(i)}write(e,n){let r={isWrite:!0,stack:[],hiddenstack:[],buffer:At,scan:0,endoffset:At.byteLength,args:{clientVersion:1e3,...n}};if(this.parser.write(r,e),r.scan>r.endoffset)throw new Error("tried to write file larger than scratchbuffer size");r.buffer.copyWithin(r.scan,r.endoffset,At.byteLength),r.scan+=At.byteLength-r.endoffset;let i=Buffer.from(Uint8Array.prototype.slice.call(At,0,r.scan));return At.fill(0,0,r.scan),i}}globalThis.parserTimings=()=>{let t=Object.entries(z).map(e=>({name:e[0],t:e[1].totaltime}));t.sort((e,n)=>n.t-e.t),t.slice(0,10).filter(e=>e.t>.01).forEach(e=>console.log(`${e.name} ${e.t.toFixed(3)}s`))};const z=Xs();function Xs(){return{cacheIndex:new te(ie("cacheindex.json")),npc:new te(ie("npcs.jsonc")),item:new te(ie("items.jsonc")),object:new te(ie("objects.jsonc")),achievement:new te(ie("achievements.jsonc")),mapsquareTiles:new te(ie("mapsquare_tiles.jsonc")),mapsquareTilesNxt:new te(ie("mapsquare_tiles_nxt.jsonc")),mapsquareWaterTiles:new te(ie("mapsquare_watertiles.json")),mapsquareUnderlays:new te(ie("mapsquare_underlays.jsonc")),mapsquareOverlays:new te(ie("mapsquare_overlays.jsonc")),mapsquareLocations:new te(ie("mapsquare_locations.json")),mapsquareEnvironment:new te(ie("mapsquare_envs.jsonc")),mapZones:new te(ie("mapzones.json")),enums:new te(ie("enums.json")),fontmetrics:new te(ie("fontmetrics.jsonc")),mapscenes:new te(ie("mapscenes.json")),sequences:new te(ie("sequences.json")),framemaps:new te(ie("framemaps.jsonc")),frames:new te(ie("frames.json")),animgroupConfigs:new te(ie("animgroupconfigs.jsonc")),models:new te(ie("models.jsonc")),oldmodels:new te(ie("oldmodels.jsonc")),classicmodels:new te(ie("classicmodels.jsonc")),spotAnims:new te(ie("spotanims.json")),rootCacheIndex:new te(ie("rootcacheindex.jsonc")),skeletalAnim:new te(ie("skeletalanim.jsonc")),materials:new te(ie("materials.jsonc")),oldmaterials:new te(ie("oldmaterials.jsonc")),quickchatCategories:new te(ie("quickchatcategories.jsonc")),quickchatLines:new te(ie("quickchatlines.jsonc")),environments:new te(ie("environments.jsonc")),avatars:new te(ie("avatars.jsonc")),avatarOverrides:new te(ie("avataroverrides.jsonc")),identitykit:new te(ie("identitykit.jsonc")),structs:new te(ie("structs.jsonc")),params:new te(ie("params.jsonc")),particles_0:new te(ie("particles_0.jsonc")),particles_1:new te(ie("particles_1.jsonc")),audio:new te(ie("audio.jsonc")),proctexture:new te(ie("proctexture.jsonc")),oldproctexture:new te(ie("oldproctexture.jsonc")),maplabels:new te(ie("maplabels.jsonc")),cutscenes:new te(ie("cutscenes.jsonc")),clientscript:new te(ie("clientscript.jsonc")),clientscriptdata:new te(ie("clientscriptdata.jsonc")),interfaces:new te(ie("interfaces.jsonc")),dbtables:new te(ie("dbtables.jsonc")),dbrows:new te(ie("dbrows.jsonc"))}}function ct(t,e){let n=0;if(e){t=t.toUpperCase();for(let r of t)n=Math.imul(n,61)+r.charCodeAt(0)-32|0}else for(let r of t)n=((n<<5)-n|0)+r.charCodeAt(0)|0;return n>>>0}function Fi(t,e,n){let r=t.get(e);return r===void 0&&(r=n(),t.set(e,r)),r}function jn(t,e){return(t%e+e)%e}function Et(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function qn(t){let e="",n=[];try{for(;t;){let r=t.match(/<(\/?)(\w+)(=(\w+))?>/);if(!r)e+=Et(t),t="";else{e+=Et(t.slice(0,r.index)),t=t.slice(r.index+r[0].length);let i=!!r[1],s=r[2];if(i){let u=n.pop();if(u!=s)throw new Error("markup token mismatch");if(u=="col")e+="</span>";else throw new Error("unknown markup closing token "+u)}else if(s=="br")e+="<br/>";else if(s=="col")e+=`<span style="color:#${r[4].replace(/\W/g,"")};">`,n.push("col");else throw new Error("unknown token "+s)}}for(;n.length!=0;){let r=n.pop();if(r=="col")e+="</span>";else throw new Error("non-autocloseable token left unclosed "+r)}}catch(r){console.log(r.message),e=Et(t)}return e}function Gt(){return function(t){return t}}const He=function t(e,n=0){this.getData=function(){return e},this.bytesLeft=function(){return e.length-n},this.readBuffer=function(r=e.length-n){let i=e.slice(n,n+r);return n+=r,i},this.tee=function(){return new t(e,n)},this.eof=function(){if(n>e.length)throw new Error("reading past end of buffer");return n>=e.length},this.skip=function(r){return n+=r,this},this.scanloc=function(){return n},this.readByte=function(){var r=this.readUByte();return r>127?r-256:r},this.readUShortSmart=function(){let r=this.readUByte();if((r&128)==0)return r;let i=this.readUByte();return(r&127)<<8|i},this.readShortSmart=function(){let r=this.readUByte(),i=r&127;if(i=r<64?r:r-128,(r&128)==0)return i;let s=this.readUByte();return i<<8|s},this.readShortSmartBias=function(){let r=this.readUByte();if((r&128)==0)return r-64;let i=this.readUByte();return((r&127)<<8|i)-16384},this.readUIntSmart=function(){let r=this.readUByte(),i=this.readUByte();if((r&128)==0)return r<<8|i;let s=this.readUByte(),u=this.readUByte();return(r&127)<<24|i<<16|s<<8|u},this.readUByte=function(){return e[n++]},this.readShort=function(r=!1){var i=this.readUShort(r);return i>32767?i-65536:i},this.readTribyte=function(){let r=e.readIntBE(n,3);return n+=3,r},this.readUShort=function(r=!1){return r?e[n++]<<8&65280|e[n++]:e[n++]|e[n++]<<8&65280},this.readUInt=function(r=!1){return r?(e[n++]<<24&4278190080|e[n++]<<16&16711680|e[n++]<<8&65280|e[n++])>>>0:(e[n++]|e[n++]<<8&65280|e[n++]<<16&16711680|e[n++]<<24&4278190080)>>>0},this.readInt=function(r=!1){return this.readUInt(r)|0},this.readStringLine=function(){let r=n;for(;n<e.length&&e[n]!=10&&e[n]!=13;)n++;let i=e.toString("utf8",r,n);return e[n]==13&&n++,e[n]==10&&n++,i},this.readFloat=function(r=!1,i=!1){var s,u,d,l;r?(l=e[n++],d=e[n++]<<16&16711680,u=e[n++]<<8&65280,s=e[n++]):(s=e[n++],u=e[n++]<<8&65280,d=e[n++]<<16&16711680,l=e[n++]);var x=s|u|d;return i&&(l=l<<1&254,(x&8388608)==8388608&&(l|=1),x&=8388607),(1+x*Math.pow(2,i?-23:-24))*Math.pow(2,l-127)},this.readHalf=function(r=!1){var i=e[n++],s=e[n++],u=s|i<<8&768,d=i>>2&31;return u=u*Math.pow(2,-10)+(d==0?0:1),u*=Math.pow(2,d-15),(i&128)==128&&(u*=-1),u}};function Hs(t){return(t&255)<<8|(t&65280)>>>8}function $s(t){t=Hs(t);let e=(t&32768)==0,n=(t&31744)>>10,i=(t&1023)*Math.pow(2,-10)+(n==0?0:1);return i*=Math.pow(2,n-15),e?i:-i}function nn(t){var e=t[0],n=t[1],r=t[2],i,s,u;if(n==0)i=s=u=r;else{var d=function(m,f,g){return g<0&&(g+=1),g>1&&(g-=1),g<.16666666666666666?m+(f-m)*6*g:g<.5?f:g<.6666666666666666?m+(f-m)*(.6666666666666666-g)*6:m},l=r<.5?r*(1+n):r+n-r*n,x=2*r-l;i=d(x,l,e+1/3),s=d(x,l,e),u=d(x,l,e-1/3)}return[i,s,u]}function tr(t){let e=nn(t);return[Math.round(e[0]*255),Math.round(e[1]*255),Math.round(e[2]*255)]}function Js(t,e,n){t/=255,e/=255,n/=255;var r=Math.max(t,e,n),i=Math.min(t,e,n),s=0,u=0;let d=(r+i)/2;if(r!=i){var l=r-i;switch(u=d>.5?l/(2-r-i):l/(r+i),r){case t:s=(e-n)/l+(e<n?6:0);break;case e:s=(n-t)/l+2;break;case n:s=(t-e)/l+4;break}s/=6}return[s,u,d]}function Ws(t,e,n){return t<0&&(t+=1),Math.round(t*63)<<10|Math.round(e*7)<<7|Math.round(n*127)}function Dt(t){var e=(t>>10&63)/63,n=(t>>7&7)/7,r=(t&127)/127;return e>.5&&(e=e-1),[e,n,r]}class ki{listeners={};on(e,n){(this.listeners[e]??(this.listeners[e]=new Set)).add(n)}once(e,n){let r=this.listeners[e]??(this.listeners[e]=new Set),i=s=>{r.delete(i),n(s)};r.add(i)}off(e,n){(this.listeners[e]??(this.listeners[e]=new Set)).delete(n)}emit(e,n){(this.listeners[e]??(this.listeners[e]=new Set)).forEach(i=>i(n))}}class Ks extends Promise{done;err;constructor(e=(n,r)=>{}){let n,r;super((i,s)=>(n=i,r=s,e(i,s))),this.done=n,this.err=r}}async function Ys(t,e,n){let r=0,i=0,s=new Array(t).fill(null);for(let u of e()){let d=r++;if(s[d%t]=u,r>=i+t&&r>=t){let l=await s[i%t];i++,n(l)}}for(;i<r;){let u=await s[i%t];i++,n(u)}}globalThis.ignoreCache=!1;const an={[C.items]:256,[C.npcs]:128,[C.structs]:32,[C.enums]:256,[C.objects]:256,[C.sequences]:128,[C.spotanims]:256,[C.achievements]:128,[C.materials]:Number.MAX_SAFE_INTEGER},Ii={[C.items]:Ce.items_old,[C.npcs]:Ce.npcs_old,[C.objects]:Ce.locs_old,[C.spotanims]:Ce.spotanim_old};function dr(t,e,n){if(n<488){let s=Ii[t];if(s!==void 0)return{major:C.config,minor:s,subid:e}}let r=an[t]??1;return{minor:Math.floor(e/r),major:t,subid:e%r}}function Zs(t,e,n){let r=an[t]??1;return e*r+n}class Bi{decodeArgs={};getCacheMeta(){return{name:"unkown",descr:"",timestamp:new Date(0)}}getFile(e,n,r){throw new Error("not implemented")}getFileArchive(e){throw new Error("not implemented")}getCacheIndex(e){throw new Error("not implemented")}getBuildNr(){return Ca}getDecodeArgs(){return this.decodeArgs.clientVersion=this.getBuildNr(),this.decodeArgs}writeFile(e,n,r){throw new Error("not implemented")}writeFileArchive(e,n,r){throw new Error("not implemented")}async getIndexEntryById(e,n){let r;if(this.getBuildNr()<=Ze?r={major:e,minor:n,crc:0,name:null,subindexcount:1,subindices:[0],subnames:null,version:0}:r=(await this.getCacheIndex(e))[n],!r)throw new Error(`minor id ${n} does not exist in major ${e}.`);return r}async getArchiveById(e,n){let r=await this.getIndexEntryById(e,n);return this.getFileArchive(r)}async getFileById(e,n){let r=dr(e,n,this.getBuildNr()),s=(await this.getArchiveById(r.major,r.minor)).find(u=>u.fileid==r.subid);if(!s)throw new Error(`File ${n} in major ${e} not found, (redirected to ${r.major}.${r.minor}.${r.subid})`);return s.buffer}async findFileByName(e,n){let r=ct(n,this.getBuildNr()<=Ze);return(await this.getCacheIndex(e)).find(s=>s&&s.name==r)}async findSubfileByName(e,n,r){let i=ct(r,this.getBuildNr()<=Ze);return(await this.getArchiveById(e,n)).find(u=>u&&u.namehash==i)}async bruteForceFindAnyNamedFile(e){let n=await this.getCacheIndex(C.index);for(let r of n){if(!r)continue;let i=await this.findFileByName(r.minor,e);if(i)return this.getFileArchive(i)}return null}close(){}}function Qs(t,e){return z.rootCacheIndex.read(t,e).cachemajors.map(r=>r.crc==0?void 0:{major:255,minor:r.minor,crc:r.crc,version:r.version,size:0,name:null,subindexcount:r.subindexcount,subindices:[0],subnames:null,uncompressed_crc:0,uncompressed_size:0})}function Tu(t,e,n){if(t==C.index)return Qs(e,n);let i=z.cacheIndex.read(e,n).indices,s=[];for(let u of i)s[u.minor]=Object.assign(u,{major:t});return s}function Fu(t,e,n){if(e.length==1)return[{buffer:t,offset:0,size:t.byteLength,fileid:e[0],namehash:n?.[0]??null}];let r=0;t.readUInt8(r),r++;let i=t.readUInt32BE(r);r+=4;let s=[],u=i;for(let d=0;d<e.length;d++){let l=t.readUInt32BE(r);r+=4;let x=l-u;s.push({buffer:t.slice(u,u+x),offset:u,size:x,fileid:e[d],namehash:n?.[d]??null}),u=l}return s}class eo extends Bi{archieveCache=new Map;cachedObjects=[];cacheFetchCounter=0;cacheAddCounter=0;maxcachesize=2e8;rawsource;constructor(e){super(),this.rawsource=e}fetchCachedObject(e,n,r,i){let s=e.get(n);if(!s||globalThis.ignoreCache){let u=r();s={promise:u,data:null,owner:e,id:n,lastuse:0,size:0,usecount:0},u.then(d=>{s.size=i(d),s.promise=null,s.data=d}),this.cachedObjects.push(s),e.set(n,s),++this.cacheAddCounter%100==0&&this.sweepCachedObjects()}return s.usecount++,s.lastuse=this.cacheFetchCounter++,s.data?Promise.resolve(s.data):s.promise}sweepCachedObjects(){let e=i=>Math.min(100,this.cacheFetchCounter-i.lastuse)+Math.max(-100,-i.usecount*10);this.cachedObjects.sort((i,s)=>e(i)-e(s));let n=this.cachedObjects.length,r=0;for(let i=0;i<this.cachedObjects.length;i++){let s=this.cachedObjects[i];r+=s.size,r>this.maxcachesize?(n=Math.min(n,i),s.owner.delete(s.id)):s.usecount=0}this.cachedObjects.length=n}getCacheIndex(e){return this.rawsource.getCacheIndex(e)}getFile(e,n,r){return this.rawsource.getFile(e,n,r)}getFileArchive(e){let n=()=>this.rawsource.getFileArchive(e);if(e.major==C.models||e.major==C.texturesBmp||e.major==C.texturesDds||e.major==C.texturesPng)return n();{let r=e.major<<23|e.minor;return this.fetchCachedObject(this.archieveCache,r,n,i=>i.reduce((s,u)=>s+u.size,0))}}getBuildNr(){return this.rawsource.getBuildNr()}getCacheMeta(){return this.rawsource.getCacheMeta()}}function St(){return{textures:{},texmodes:"repeat",texmodet:"repeat",uvAnim:void 0,baseColorFraction:0,baseColor:[1,1,1],alphamode:"opaque",alphacutoff:.1,stripDiffuseAlpha:!1,raw:null}}function to(t,e,n){return(t==-1?4194303:t)|(e?8388608:0)|(n?4194304:0)}function Mi(t,e,n){let r=z.materials.read(t,n),i=St();if(i.raw=r,r.v0){let s=r.v0,u=s.arr.find(x=>x.op==1);u?n.getBuildNr()<=838?i.textures.diffuse=u.value:i.textures.diffuse=e:s.diffuse?i.textures.diffuse=s.diffuse:s.textureflags&17&&(i.textures.diffuse=e),s.normal?i.textures.normal=s.normal:s.textureflags&10&&(i.textures.normal=e);let d=s.texrepeatflags&7,l=s.textureflags>>2&7;if(i.texmodes=d==0?"mirror":d==1?"repeat":"clamp",i.texmodet=l==0?"mirror":l==1?"repeat":"clamp",i.alphamode=s.alphamode==0?"opaque":s.alphamode==1?"cutoff":"blend",s.alphacutoff&&(i.alphacutoff=s.alphacutoff/255),s.animtexU||s.animtexV){let x=30517578125e-15;i.uvAnim={u:(s.animtexU??0)*x,v:(s.animtexV??0)*x}}s.extra&&(i.baseColorFraction=s.extra.baseColorFraction/255,i.baseColor=s.extra.baseColor==0?[1,1,1]:nn(Dt(s.extra.baseColor))),i.stripDiffuseAlpha=i.alphamode=="opaque"}else if(r.v1||r.v2){let s=r.v1||r.v2;if(i.alphamode=s.opaque_2&&!s.hasUVanimU?"cutoff":"blend",i.baseColorFraction=1,s.diffuse&&(i.textures.diffuse=s.diffuse.texture),s.normal&&(i.textures.normal=s.normal.texture),s.compound&&(i.textures.compound=s.compound.texture),s.uvanim_u||s.uvanim_v){let u=30517578125e-15;i.uvAnim={u:(s.uvanim_u??0)*u,v:(s.uvanim_v??0)*u}}}else throw new Error("unkown material version "+r.version);return i}const ro=/("(?:[^\\"]|\\.)*")|[:,]/g;function hr(t,e={}){const n=JSON.stringify([1],void 0,e.indent===void 0?2:e.indent).slice(2,-3),r=n===""?1/0:e.maxLength===void 0?80:e.maxLength;let{replacer:i}=e;return(function s(u,d,l){u&&typeof u.toJSON=="function"&&(u=u.toJSON());const x=JSON.stringify(u,i);if(x===void 0)return x;const p=r-d.length-l;if(x.length<=p){const m=x.replace(ro,(f,g)=>g||`${f} `);if(m.length<=p)return m}if(i!=null&&(u=JSON.parse(x),i=void 0),typeof u=="object"&&u!==null){const m=d+n,f=[];let g=0,h,a;if(Array.isArray(u)){h="[",a="]";const{length:o}=u;for(;g<o;g++)f.push(s(u[g],m,g===o-1?0:1)||"null")}else{h="{",a="}";const o=Object.keys(u),{length:c}=o;for(;g<c;g++){const v=o[g],y=`${JSON.stringify(v)}: `,b=s(u[v],m,y.length+(g===c-1?0:1));b!==void 0&&f.push(y+b)}}if(f.length>0)return[h,n+f.join(`,
${m}`),a].join(`
${d}`)}return x})(t,"",0)}function Qe(t,e,n){return t||(t=new Uint8ClampedArray(e*n*4)),t instanceof Uint8Array&&(t=new Uint8ClampedArray(t.buffer,t.byteOffset,t.length)),typeof ImageData<"u"?new ImageData(t,e,n):{data:t,width:e,height:n,colorSpace:"srgb"}}async function kr(t,e,n){if(typeof HTMLCanvasElement<"u"){let r=document.createElement("canvas");return r.width=t.width,r.height=t.height,r.getContext("2d",{willReadFrequently:!0}).putImageData(t,0,0),io(r,e,n)}else{const r=globalThis.__non_webpack_require__;return r("sharp")(t.data,{raw:{width:t.width,height:t.height,channels:4}}).png().toBuffer()}}async function no(t,e,n){if(typeof ImageDecoder<"u"){let i=await new ImageDecoder({data:t,type:e,premultiplyAlpha:n?"none":"default",colorSpaceConversion:"none"}).decode(),s=new Uint8Array(i.image.allocationSize());i.image.copyTo(s);let u=i.image.visibleRect.width*i.image.visibleRect.height;if((i.image.format=="BGRX"||i.image.format=="RGBX")&&(n=!0),i.image.format=="BGRA"||i.image.format=="BGRX")for(let d=0;d<u;d++){let l=s[d*4+0];s[d*4+0]=s[d*4+2],s[d*4+1]=s[d*4+1],s[d*4+2]=l,s[d*4+3]=n?255:s[d*4+3]}else if(i.image.format=="RGBA"||i.image.format=="RGBX"){if(n)for(let d=0;d<u;d++)s[d*4+3]=255}else throw new Error("unexpected image format");return Qe(s,i.image.visibleRect.width,i.image.visibleRect.height)}else if(typeof HTMLCanvasElement<"u"){n&&console.warn("can not strip alpha in browser context that does not support ImageDecoder");let r=new Image,i=new Blob([t.buffer],{type:e}),s=URL.createObjectURL(i);r.src=s,await r.decode();let u=document.createElement("canvas");u.width=r.naturalWidth,u.height=r.naturalHeight;let d=u.getContext("2d",{willReadFrequently:!0});return d.drawImage(r,0,0),URL.revokeObjectURL(s),d.getImageData(0,0,u.width,u.height)}else{const r=globalThis.__non_webpack_require__;let s=r("sharp")(t);n&&s.removeAlpha();let u=await s.raw().toBuffer({resolveWithObject:!0}),d=new Uint8ClampedArray(u.data.buffer,u.data.byteOffset,u.data.byteLength);return Qe(d,u.info.width,u.info.height)}}async function Ni(t){if(typeof HTMLCanvasElement<"u"){let e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d",{willReadFrequently:!0}).putImageData(t,0,0),e.toDataURL("image/png")}else{const e=globalThis.__non_webpack_require__;return"data:image/png;base64,"+(await e("sharp")(t.data,{raw:{width:t.width,height:t.height,channels:4}}).png().toBuffer()).toString("base64")}}async function io(t,e,n){let r=await new Promise(s=>t.toBlob(s,`image/${e}`,n));if(!r)throw new Error("image compression failed");let i=await r.arrayBuffer();return Buffer.from(i)}function ao(t){let e=t.width*4,n=new Uint8Array(e);for(let r=0;r<t.height/2;r++){let i=r*e,s=(t.height-1-r)*e;n.set(t.data.slice(i,i+e),0),t.data.copyWithin(i,s,s+e),t.data.set(n,s)}}function so(t,e){let n=new Uint8ClampedArray(e.width*e.height*4),r=e.width*4,i=t.width*4,s=i*e.y+e.x*4;for(let u=0;u<e.height;u++)n.set(t.data.slice(s+u*i,s+u*i+r),r*u);return new ImageData(n,e.width,e.height)}function oo(t,e=!1){let n=document.createElement("canvas"),r=n.getContext("2d",{willReadFrequently:!0});if(e){if(!(t instanceof ImageData))throw new Error("can only flip imagedata textures");ao(t)}return lo(r,t),n.style.cssText="position:absolute;top:0px;left:0px;border:1px solid red;background:purple;",document.body.appendChild(n),n.onclick=i=>{navigator.clipboard.write([new ClipboardItem({"image/png":new Promise(s=>n.toBlob(s))})]),n.remove()},n}globalThis.dumptex=oo;function lo(t,e){const n=t.canvas;"data"in e?(typeof ImageData<"u"&&!(e instanceof ImageData)&&(e=new ImageData(e.data,e.width,e.height)),n.width=e.width,n.height=e.height,t.putImageData(e,0,0)):"source"in e?(n.width=e.source.data.width,n.height=e.source.data.height,t.drawImage(e.source.data,0,0)):(n.width=e.width,n.height=e.height,t.drawImage(e,0,0))}function sn(t,e,n,r,i,s){let u=n*r,d=0,l=new Uint8ClampedArray(u*4),x=d,p=d+u;d+=u+(i?u:0);for(let m=0;m<r;m++)for(let f=0;f<n;f++){let g=f*4+m*n*4,h=s?m+f*r:f+m*n,a=t.readUInt8(x+h);if(a==0)l[g+0]=0,l[g+1]=0,l[g+2]=0,l[g+3]=0;else{let o=(a-1)*3;l[g+0]=e[o+0],l[g+1]=e[o+1],l[g+2]=e[o+2],l[g+3]=i?t.readUInt8(p+h):255}}return{img:Qe(l,n,r),bytesused:d}}function on(t,e){let n=new He(e),r=n.readUShort(!0);if(!t)throw new Error("sprite meta file not found");let i=new He(t);i.skip(r);let s=i.readUShort(!0),u=i.readUShort(!0),d=i.readUByte()-1,l=i.readBuffer(d*3),x=[];for(;!n.eof();){let p=i.readUByte(),m=i.readUByte(),f=i.readUShort(!0),g=i.readUShort(!0),h=i.readUByte()!=0,a=n.readBuffer(f*g);x.push({x:p,y:m,fullwidth:s,fullheight:u,img:sn(a,l,f,g,!1,h).img})}return x.length!=1&&console.log(x),x[0]}function Li(t){if(t.x==0&&t.y==0&&t.fullwidth==t.img.width&&t.fullheight==t.img.height)return t.img;let e=new ImageData(t.fullwidth,t.fullheight);for(let n=0;n<t.img.height;n++){let r=t.img.width*4,i=n*r,s=e.width*4,u=(n+t.y)*s+t.x*4;e.data.set(t.img.data.subarray(i,i+r),u)}return e}function gt(t){let e=t.readUInt16BE(t.length-2),n=e>>15,r=e&32767,i=[];if(n==0){let s=7+8*r,u=t.length-s,d=t.readUInt16BE(u);u+=2;let l=t.readUInt16BE(u);u+=2;let x=t.readUInt8(u);u++;let p=[];for(let f=0;f<r;f++)p.push({x:t.readUInt16BE(u+r*0+f*2),y:t.readUInt16BE(u+r*2+f*2),width:t.readUInt16BE(u+r*4+f*2),height:t.readUInt16BE(u+r*6+f*2)});let m=t.slice(t.length-s-3*x,t.length-s);u=0;for(let f of p)if(f.width!=0&&f.height!=0){let g=t.readUInt8(u);u++;let h=(g&1)!=0,a=(g&2)!=0,o=sn(t.slice(u),m,f.width,f.height,a,h);u+=o.bytesused,i.push({x:f.x,y:f.y,fullwidth:d,fullheight:l,img:o.img})}}else{let s=0,u=t.readUInt8(s);if(s++,u!=0)throw new Error("unknown type");let d=t.readUInt8(s);s++;let l=(d&1)!=0,x=t.readUInt16BE(s);s+=2;let p=t.readUInt16BE(s);s+=2;let m=s;s+=x*p*3;let f=s;s+=l?x*p:0;let g=new Uint8ClampedArray(x*p*4);for(let h=0;h<p;h++)for(let a=0;a<x;a++){let o=a*4+h*x*4,c=a+h*x;g[o+0]=t.readUInt8(m+c*3+0),g[o+1]=t.readUInt8(m+c*3+1),g[o+2]=t.readUInt8(m+c*3+2),g[o+3]=l?t.readUInt8(f+c+2):255}i.push({x:0,y:0,fullwidth:x,fullheight:p,img:Qe(g,x,p)})}return i}function Pi(t){let e=new He(t),n=e.readUByte(),r=e.readUByte();e.readUByte(),e.readUShort(!1);let i=e.readUShort(!1),s=e.readUByte(),u=e.readUShort(!1),d=e.readUShort(!1),l=e.readUShort(!1),x=e.readUShort(!1),p=e.readUByte(),m=e.readUByte();if(e.skip(n),r!=1||p!=8)throw new Error("only palette based uncompressed TGA supported");if(s!=24)throw new Error("only 24bpp rgb TGA supported");if(m!=0)throw new Error("no fancy TGA's allowed");let f=e.readBuffer(i*3),g=new Uint8ClampedArray(l*x*4);for(let a=0;a<x;a++)for(let o=0;o<l;o++){let c=o*4+a*l*4,y=e.readUByte()*3;g[c+0]=f[y+2],g[c+1]=f[y+1],g[c+2]=f[y+0],g[c+3]=255,g[c+0]==255&&g[c+1]==0&&g[c+2]==255&&(g[c+0]=0,g[c+1]=0,g[c+2]=0,g[c+3]=0)}return e.eof||console.warn("didn't parse TGA sprite to completion"),{x:u,y:d,fullwidth:l,fullheight:x,img:Qe(g,l,x)}}function yr(t){const e=t.data.slice();for(let n=0;n<e.length;n+=4)e[n+2]==0&&(e[n+2]=1);return Re(e)}const uo=Object.freeze(Object.defineProperty({__proto__:null,expandSprite:Li,parseLegacySprite:on,parseSprite:gt,parseSubsprite:sn,parseTgaSprite:Pi,spriteHash:yr},Symbol.toStringTag,{value:"Module"}));function co(t){return(t&255)<<24|(t&65280)<<8|(t&16711680)>>>8|(t&4278190080)>>>24}function fo(t){let e=0;t.readUInt32BE(e),e+=4,t.readUInt32BE(e),e+=4,t.readUInt32BE(e),e+=4;let n=t.readUint32BE(e);e+=4;let r=n!=67305985,i=()=>{let g=t.readUint32BE(e);return e+=4,r?co(g):g};i(),i(),i();let s=i();i();let u=i(),d=i();i(),i(),i();let l=i(),x=i();e+=x;let p=s==37496,m=s==37492;if(!m&&!p)throw new Error("dds file is not dxt1 or dxt5 encoded as expected, continuing as dxt5");let f=[];for(let g=0;g<l;g++){let h=u>>g,a=d>>g,o=i();f.push({width:h,height:a,data:t.slice(e,e+o)}),e+=o}return{isDxt1:m,isDxt5:p,mips:f,width:u,height:d}}function ho(t){let e=0,n=t.readUInt32LE(e);e+=4,t.readUInt32LE(e),e+=4;let r=t.readUInt32LE(e);e+=4;let i=t.readUInt32LE(e);e+=4;let s=t.readUInt32LE(e);e+=4;let u=t.readUInt32LE(e);e+=4;let d=t.readUInt32LE(e);e+=4;let l=t.readUInt32LE(e);e+=4,e+=44;let x=t.readUInt32LE(e+8);e+=32,e+=20;let p=x==894720068,m=x==827611204;if(!m&&!p)throw new Error("dds file is not dxt1 or dxt5 encoded as expected, continuing as dxt5");let f=[];for(let g=0;g<l;g++){let h=s>>g,a=i>>g,o=h*a*(p?16:8);f.push({width:h,height:a,data:t.slice(e,e+o)}),e+=o}return{magic:n,flags:r,height:i,width:s,pitchorlinearsize:u,depth:d,isDxt1:m,isDxt5:p,mips:f}}function po(t,e=-1,n=!0){let r=ho(t);e==-1&&(r.isDxt5?e=32:e=0);let i=r.width-e*2,s=r.height-e*2,u=Buffer.alloc(i*s*4);if(go(u,i*4,r.mips[0].data,r.mips[0].width,e,e,i,s,r.isDxt5),n)for(let d=0;d<u.length;d+=4)u[d+3]=255;return{data:u,width:i,height:s}}function mo(t,e=-1,n=!0){let r=fo(t);e==-1&&(r.isDxt5?e=32:e=0);let i=r.width-e*2,s=r.height-e*2,u=Buffer.alloc(i*s*4);if(xo(u,i*4,r.mips[0].data,r.mips[0].width,e,e,i,s,r.isDxt5),n)for(let d=0;d<u.length;d+=4)u[d+3]=255;return{data:u,width:i,height:s}}function ft(t,e,n){return((t>>e&(1<<n)-1)*2*255+(1<<n)-1)/((1<<n)-1)/2}function J(t,e,n){let r=32-n-e;return t<<r>>>r+e}function Gr(t,e,n){let r=32-n-e;return t<<r>>r+e}function dt(t,e){return t[e]|t[e+1]<<8}function ar(t,e){return(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}function go(t,e,n,r,i,s,u,d,l){const x=l?16:8,p=l?8:0,m=new Uint8Array(4),f=new Uint8Array(4),g=new Uint8Array(4),h=new Uint8Array(8),a=new Uint16Array(8);for(let o=s/4;o<(s+d)/4;o++)for(let c=i/4;c<(i+u)/4;c++){let y=(r/4*o+c)*x;a[4]=dt(n,y+p+0),a[5]=dt(n,y+p+2),a[6]=dt(n,y+p+4),a[7]=dt(n,y+p+6),m[0]=ft(a[4],11,5),f[0]=ft(a[4],5,6),g[0]=ft(a[4],0,5),m[1]=ft(a[5],11,5),f[1]=ft(a[5],5,6),g[1]=ft(a[5],0,5),h[0]=255,h[1]=255,h[2]=255,h[3]=255,a[4]>a[5]?(m[2]=(2*m[0]+m[1]+1)/3,f[2]=(2*f[0]+f[1]+1)/3,g[2]=(2*g[0]+g[1]+1)/3,m[3]=(m[0]+2*m[1]+1)/3,f[3]=(f[0]+2*f[1]+1)/3,g[3]=(g[0]+2*g[1]+1)/3):(m[2]=(m[0]+m[1])/2,f[2]=(f[0]+f[1])/2,g[2]=(g[0]+g[1])/2,m[3]=0,f[3]=0,g[3]=0,h[3]=0);for(let b=0;b<16;b++){let w=(c*4+b%4-i)*4+(o*4+(b/4|0)-s)*e,_=a[b<8?6:7]>>b%8*2&3;t[w+0]=m[_],t[w+1]=f[_],t[w+2]=g[_],t[w+3]=h[_]}if(l){if(a[0]=dt(n,y+0),a[1]=dt(n,y+2),a[2]=dt(n,y+4),a[3]=dt(n,y+6),h[0]=ft(a[0],0,8),h[1]=ft(a[0],8,8),h[0]>h[1])for(let _=0;_<6;_++)h[2+_]=((6-_)*h[0]+(1+_)*h[1]+3)/7;else{for(let _=0;_<4;_++)h[2+_]=((4-_)*h[0]+(1+_)*h[1]+2)/5;h[6]=0,h[7]=255}let b=0,w=1;for(let _=0;_<16;_++){let E=(c*4+_%4-i)*4+(o*4+(_/4|0)-s)*e,S=a[w]>>b&7;b+=3,b>=16&&(b-=16,w++,S|=a[w]&1<<b-1),t[E+3]=h[S]}}}}const zr=new Int16Array([2,8,-2,-8,5,17,-5,-17,9,29,-9,-29,13,42,-13,-42,18,60,-18,-60,24,80,-24,-80,33,106,-33,-106,47,183,-47,-183]),vo=new Int8Array([-3,-6,-9,-15,2,5,8,14,-3,-7,-10,-13,2,6,9,12,-2,-5,-8,-13,1,4,7,12,-2,-4,-6,-13,1,3,5,12,-3,-6,-8,-12,2,5,7,11,-3,-7,-9,-11,2,6,8,10,-4,-7,-8,-11,3,6,7,10,-3,-5,-8,-11,2,4,7,10,-2,-6,-8,-10,1,5,7,9,-2,-5,-8,-10,1,4,7,9,-2,-4,-8,-10,1,3,7,9,-2,-5,-7,-10,1,4,6,9,-3,-4,-7,-10,2,3,6,9,-1,-2,-3,-10,0,1,2,9,-4,-6,-8,-9,3,5,7,8,-3,-5,-7,-9,2,4,6,8]),Xn=new Uint8Array([3,6,11,16,23,32,41,64]);function ve(t){return t>255?255:t<0?0:t}function Ue(t,e,n,r){return ve(t+vo[e<<3|r]*n)}function Me(t){return t<<4|t}function Ct(t){return t<<3|t>>2}function Tt(t){return t<<2|t>>4}function Vr(t){return t<<1|t>>7}function xo(t,e,n,r,i,s,u,d,l){const x=l?16:8,p=l?8:0,m=new Uint8Array(16);for(let f=s/4;f<(s+d)/4;f++)for(let g=i/4;g<(i+u)/4;g++){let a=(r/4*f+g)*x,o=ar(n,a+p),c=ar(n,a+p+4),v=J(o,0,1),y=J(o,1,1),b=J(o,27,5),w=J(o,19,5),_=J(o,11,5),E=Gr(o,24,3),S=Gr(o,16,3),A=Gr(o,8,3),T=b+E,D=w+S,I=_+A,B=T>=0&&T<32,M=D>=0&&D<32,L=I>=0&&I<32,U=B&&M&&L,N,O,q,V,G,re,ce,se,de;if(y==0||U){y==0?(N=Me(J(o,28,4)),V=Me(J(o,24,4)),O=Me(J(o,20,4)),G=Me(J(o,16,4)),q=Me(J(o,12,4)),re=Me(J(o,8,4))):(N=Ct(b),O=Ct(w),q=Ct(_),V=Ct(T),G=Ct(D),re=Ct(I));let Y=J(o,5,3),K=J(o,2,3);for(let W=0;W<16;W++){let Z=c>>>W+15&2|c>>>W&1,Q=(g*4+(W/4|0)-i)*4+(f*4+W%4-s)*e,P=v==1?W%4<2:W<8,$=P?Y:K;t[Q+0]=ve((P?N:V)+zr[$<<2|Z]),t[Q+1]=ve((P?O:G)+zr[$<<2|Z]),t[Q+2]=ve((P?q:re)+zr[$<<2|Z]),t[Q+3]=255}}else if(!B||!M){if(B){N=Me(J(o,27,4)),O=Me(J(o,24,3)<<1|J(o,20,1)),q=Me(J(o,19,1)<<3|J(o,15,3)),V=Me(J(o,11,4)),G=Me(J(o,7,4)),re=Me(J(o,3,4));let Y=N<<16|O<<8|q,K=V<<16|G<<8|re,W=Y>=K?1:0,Z=J(o,2,1)<<2|J(o,0,1)<<1|W,Q=Xn[Z];m[0]=ve(N+Q),m[1]=ve(O+Q),m[2]=ve(q+Q),m[4]=ve(N-Q),m[5]=ve(O-Q),m[6]=ve(q-Q),m[8]=ve(V+Q),m[9]=ve(G+Q),m[10]=ve(re+Q),m[12]=ve(V-Q),m[13]=ve(G-Q),m[14]=ve(re-Q)}else{m[0]=Me(J(o,27,2)<<2|J(o,24,2)),m[1]=Me(J(o,20,4)),m[2]=Me(J(o,16,4)),m[8]=Me(J(o,12,4)),m[9]=Me(J(o,8,4)),m[10]=Me(J(o,4,4));let Y=J(o,2,2)<<1|J(o,0,1),K=Xn[Y];m[4]=ve(m[8]+K),m[5]=ve(m[9]+K),m[6]=ve(m[10]+K),m[12]=ve(m[4]-K),m[13]=ve(m[5]-K),m[14]=ve(m[6]-K)}for(let Y=0;Y<16;Y++){let K=c>>>Y+15&2|c>>>Y&1,W=(g*4+(Y/4|0)-i)*4+(f*4+Y%4-s)*e;t[W+0]=ve(m[K<<2|0]),t[W+1]=ve(m[K<<2|1]),t[W+2]=ve(m[K<<2|2]),t[W+3]=255}}else if(!L){N=Tt(J(o,25,6)),O=Vr(J(o,24,1)<<6|J(o,17,6)),q=Tt(J(o,16,1)<<5|J(o,11,2)<<3|J(o,7,3)),V=Tt(J(o,2,5)<<1|J(o,0,1)),G=Vr(J(c,25,7)),re=Tt(J(c,19,6)),ce=Tt(J(c,13,6)),se=Vr(J(c,6,7)),de=Tt(J(c,0,6));for(let Y=0;Y<16;Y++){let K=Y%4,W=Y/4|0,Z=(g*4+K-i)*4+(f*4+W-s)*e;t[Z+0]=ve(K*(V-N)+W*(ce-N)+4*N+2>>2),t[Z+1]=ve(K*(G-O)+W*(se-O)+4*O+2>>2),t[Z+2]=ve(K*(re-q)+W*(de-q)+4*q+2>>2),t[Z+3]=255}}if(l){let Y=ar(n,a),K=ar(n,a+4),W=J(Y,24,8),Z=J(Y,20,4),Q=J(Y,16,4),P=(g*4-i)*4+(f*4-s)*e+3;t[P+0+0*e]=Ue(W,Q,Z,J(Y,13,3)),t[P+0+1*e]=Ue(W,Q,Z,J(Y,10,3)),t[P+0+2*e]=Ue(W,Q,Z,J(Y,7,3)),t[P+0+3*e]=Ue(W,Q,Z,J(Y,4,3)),t[P+4+0*e]=Ue(W,Q,Z,J(Y,1,3)),t[P+4+1*e]=Ue(W,Q,Z,J(Y,0,1)<<2|J(K,30,2)),t[P+4+2*e]=Ue(W,Q,Z,J(K,27,3)),t[P+4+3*e]=Ue(W,Q,Z,J(K,24,3)),t[P+8+0*e]=Ue(W,Q,Z,J(K,21,3)),t[P+8+1*e]=Ue(W,Q,Z,J(K,18,3)),t[P+8+2*e]=Ue(W,Q,Z,J(K,15,3)),t[P+8+3*e]=Ue(W,Q,Z,J(K,12,3)),t[P+12+0*e]=Ue(W,Q,Z,J(K,9,3)),t[P+12+1*e]=Ue(W,Q,Z,J(K,6,3)),t[P+12+2*e]=Ue(W,Q,Z,J(K,3,3)),t[P+12+3*e]=Ue(W,Q,Z,J(K,0,3))}}}class Ri{imagefiles;stripAlpha;isMaterialTexture;type;mipmaps;cachedDrawables;cachedImageDatas;bmpWidth=-1;bmpHeight=-1;filesize;constructor(e,n,r){if(this.isMaterialTexture=!!r,this.stripAlpha=n,this.imagefiles=[],this.cachedDrawables=[],this.cachedImageDatas=[],e instanceof ImageData)this.filesize=e.data.byteLength,this.type="imagedata",this.mipmaps=1,this.cachedImageDatas=[Promise.resolve(e)];else if(this.filesize=e.byteLength,e.readUint32BE(0)==2303741511)this.type="png",this.imagefiles.push(e),this.mipmaps=1;else{let s=0,u=0;for(;;){let d=e.readUInt8(u+s+1+4+0),l=e.readUInt8(u+s+1+4+1);if(d==0&&l==0){this.type="bmpmips";break}else if(d==68&&l==68){this.type="dds";break}else if(d==137&&l==80){this.type="png";break}else if(d==171&&l==75){this.type="ktx";break}else if(u++<=1)continue;throw new Error("failed to detect texture")}u==1&&e.readUint8(s++),this.mipmaps=e.readUInt8(s++),this.type=="bmpmips"&&(this.bmpWidth=e.readUInt32BE(s),s+=4,this.bmpHeight=e.readUInt32BE(s),s+=4);for(let d=0;d<this.mipmaps;d++){let l;this.type=="bmpmips"?l=(this.bmpWidth>>d)*(this.bmpHeight>>d)*4:(l=e.readUInt32BE(s),s+=4),this.imagefiles.push(e.slice(s,s+l)),s+=l,this.cachedDrawables.push(null),this.cachedImageDatas.push(null)}}}toImageData(e=0){let n=this.cachedImageDatas[e];return n||(n=(async()=>{const r=this.isMaterialTexture?32:void 0;if(this.type=="bmpmips"){let i=this.bmpWidth>>e,s=this.bmpHeight>>e,u=yo(this.imagefiles[e],i,s,r,this.stripAlpha);return Qe(u.data,u.width,u.height)}else{if(this.type=="png")return no(this.imagefiles[e],"image/png",this.stripAlpha);if(this.type=="dds"){let i=po(this.imagefiles[e],r,this.stripAlpha);return Qe(i.data,i.width,i.height)}else if(this.type=="ktx"){let i=mo(this.imagefiles[e],r,this.stripAlpha);return Qe(i.data,i.width,i.height)}else throw this.type=="imagedata"?new Error("image not found"):new Error("unknown format")}})(),this.cachedImageDatas[e]=n),n}async toWebgl(e=0){let n=this.cachedDrawables[e];return n||(this.type=="png"?n=new Promise((r,i)=>{let s=new Image;s.onload=()=>{URL.revokeObjectURL(s.src),r(s)},s.onerror=i;let u=new Blob([this.imagefiles[e]],{type:"image/png"});s.src=URL.createObjectURL(u)}):n=this.toImageData(e).then(r=>createImageBitmap(r)),this.cachedDrawables[e]=n),n}}function yo(t,e,n,r=-1,i=!0){r==-1&&(r=0,console.warn("cannot infer padding size on bmp textures"));const s=e*4,u=r*s+r*4,d=n-2*r,l=e-2*r,x=l*4,p=new Uint8Array(x*d);for(let m=0;m<d;m++){const f=m*x;if(p.set(t.subarray(u+s*m,u+s*m+x),f),i)for(let g=f;g<f+x;g+=4)p[g+3]=255}return{data:p,width:l,height:d}}const bo=Object.freeze(Object.defineProperty({__proto__:null,ParsedTexture:Ri},Symbol.toStringTag,{value:"Module"}));async function ln(t,e,n,r,i=!1){let s=r??await t.getFileById(e,n);if(s.readUint32BE()!=1245792065)return s;let d=z.audio.read(s,t),l=i?await wo(d.chunks,f=>f.data??t.getFileById(e,f.fileid),8):d.chunks.filter(f=>f.data).map(f=>f.data),x=[],p=0n,m=0;for(let[f,g]of l.entries()){let h=0n;for(let a=0;a<g.length;){let o=a;g.readUint32BE(a),a+=4,g.readUint8(a),a+=1,g.readUint8(a),a+=1;let c=g.readBigInt64LE(a);a+=8,g.readUint32LE(a),a+=4,g.readUint32LE(a),a+=4,g.readUint32LE(a),a+=4;let v=g.readUint8(a);a+=1;let y=0;for(let A=0;A<v;A++)y+=g.readUint8(a),a+=1;let b=Uint8Array.prototype.slice.call(g,o,a),w=g.slice(a,a+y);a+=y;let _=o==0&&f==0,E=f==l.length-1&&a==g.length;b.writeUint8(+_<<1|+E<<2,5),b.writeBigInt64LE(c+p,6),b.writeUint32LE(m++,18),b.writeUInt32LE(0,22);let S=Hn(w,Hn(b));b.writeUint32LE(S,22),(f==0||a!=0)&&(x.push(b),x.push(w)),h=c}p+=h}return Buffer.concat(x)}async function wo(t,e,n=4){let r=[],i=0,s=0,u=[];for(let d of t)i>=s+n&&(u.push(await r[s%n]),s++),r[i%n]=e(d,i),i++;for(;s<i;)u.push(await r[s%n]),s++;return u}const _o=new Uint32Array([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188]);function Hn(t,e=0,n=0,r=t.length){e=e^0;for(let i=n;i<r;i++)e=e<<8^_o[e>>>24&255^t[i]];return(e^0)>>>0}var sr=new Uint8Array(1e7);const pt={};pt.array=function(t){var e=0,n=0,r=[0,1,3,7,15,31,63,127,255];return function(i){for(var s=0;i>0;){var u=8-e;i>=u?(s<<=u,s|=r[u]&t[n++],e=0,i-=u):(s<<=i,s|=(t[n]&r[i]<<8-i-e)>>8-i-e,e+=i,i=0)}return s}};pt.simple=function(t){var e=pt.header(t),n,r,i=[],s=0;do r=pt.decompress(t,e),r!=-1&&(i.push(r),s+=r.byteLength);while(r!=-1);n=new Uint8Array(s),s=0;for(var u=0;u<i.length;++u)r=i[u],n.set(r,s),s+=r.byteLength;return n};pt.header=function(t){if(t(24)!=4348520)throw"No magic number found";var e=t(8)-48;if(e<1||e>9)throw"Not a BZIP archive";return e};pt.decompress=function(t,e,n){for(var r=20,i=258,s=0,u=1,d=50,l=1e5*9,x="",p=0;p<6;p++)x+=t(8).toString(16);if(x=="177245385090")return-1;if(x!="314159265359")throw"eek not valid bzip data";if(t(32),t(1))throw"unsupported obsolete version";var m=t(24);if(m>l)throw"Initial position larger than buffer size";var f=t(16),g=new Uint8Array(256),h=0;for(p=0;p<16;p++)if(f&1<<15-p){var a=t(16);for(G=0;G<16;G++)a&1<<15-G&&(g[h++]=16*p+G)}var o=t(3);if(o<2||o>6)throw"another error";var c=t(15);if(c==0)throw"meh";for(var v=[],p=0;p<o;p++)v[p]=p;for(var y=new Uint8Array(32768),p=0;p<c;p++){for(var G=0;t(1);G++)if(G>=o)throw"whoops another error";var b=v[G];v.splice(G,1),v.splice(0,0,b),y[p]=b}for(var N=h+2,w=[],G=0;G<o;G++){var _=new Uint8Array(i),E=new Uint8Array(r+1);f=t(5);for(var p=0;p<N;p++){for(;;){if(f<1||f>r)throw"I gave up a while ago on writing error messages";if(!t(1))break;t(1)?f--:f++}_[p]=f}var S,A;S=A=_[0];for(var p=1;p<N;p++)_[p]>A?A=_[p]:_[p]<S&&(S=_[p]);var T;T=w[G]={},T.permute=new Uint32Array(i),T.limit=new Uint32Array(r+1),T.base=new Uint32Array(r+1),T.minLen=S,T.maxLen=A;for(var D=T.base.subarray(1),I=T.limit.subarray(1),B=0,p=S;p<=A;p++)for(var f=0;f<N;f++)_[f]==p&&(T.permute[B++]=f);for(p=S;p<=A;p++)E[p]=I[p]=0;for(p=0;p<N;p++)E[_[p]]++;for(B=f=0,p=S;p<A;p++)B+=E[p],I[p]=B-1,B<<=1,D[p+1]=B-(f+=E[p]);I[A]=B+E[A]-1,D[S]=0}for(var M=new Uint32Array(256),p=0;p<256;p++)v[p]=p;var L,U,N,O;L=U=N=O=0;for(var q=new Uint32Array(l);;){if(!N--){if(N=d-1,O>=c)throw"meow i'm a kitty, that's an error";T=w[y[O++]],D=T.base.subarray(1),I=T.limit.subarray(1)}for(p=T.minLen,G=t(p);;){if(p>T.maxLen)throw"rawr i'm a dinosaur";if(G<=I[p])break;p++,G=G<<1|t(1)}if(G-=D[p],G<0||G>=i)throw"moo i'm a cow";var V=T.permute[G];if(V==s||V==u){L||(L=1,f=0),V==s?f+=L:f+=2*L,L<<=1;continue}if(L){if(L=0,U+f>=l)throw"Boom.";for(b=g[v[0]],M[b]+=f;f--;)q[U++]=b}if(V>h)break;if(U>=l)throw"I can't think of anything. Error";p=V-1,b=v[p],v.splice(p,1),v.splice(0,0,b),b=g[b],M[b]++,q[U++]=b}if(m<0||m>=U)throw"I'm a monkey and I'm throwing something at someone, namely you";for(var G=0,p=0;p<256;p++)a=G+M[p],M[p]=G,G=a;for(var p=0;p<U;p++)b=q[p]&255,q[M[b]]|=p<<8,M[b]++;var re=0,ce=0,se=0;U&&(re=q[m],ce=re&255,re>>=8,se=-1),U=U;var de,Y,K,W=0;for(n||(n=1/0);U;){for(U--,Y=ce,re=q[re],ce=re&255,re>>=8,se++==3?(de=ce,K=Y,ce=-1):(de=1,K=ce);de--;)if(sr[W++]=K,!--n)return sr;ce!=Y&&(se=0)}if(W>sr.length)throw new Error("not enough memory reserved");return sr.slice(0,W)};function $n(t){var e=Buffer.alloc(t.byteLength+4);return t.copy(e,4),e.writeUInt16BE(16986,0),e.writeUInt8(104,2),e.writeUInt8(56,3),Buffer.from(pt.simple(pt.array(e)))}const Ke={data:0,oldmodels:1,oldframebases:2,map:4},mt={config:2,sprites:4,index:5,textures:6};function Wr(t,e,n){let r=new He(t),i=r.readTribyte();if(r.readTribyte()!=i&&(r=new He($n(r.readBuffer())),r.bytesLeft()!=i))throw new Error("decompress failed");let u=[],d=r.readUShort(!0),l=r.tee().skip(d*10);for(let x=0;x<d;x++){let p=r.readUInt(!0),m=r.readTribyte(),f=r.readTribyte(),g=l.scanloc(),h=l.readBuffer(f);if(m!=f&&(h=$n(h),h.length!=m))throw new Error("decompress failed");u.push({fileid:x,buffer:h,offset:g,size:m,namehash:p})}return u}async function So(t){let e=await t.getArchiveById(Ke.data,mt.index),n=await t.getArchiveById(Ke.data,mt.config);return{items:or(n,"OBJ"),objects:or(n,"LOC"),overlays:or(n,"FLO"),npcs:or(n,"NPC"),underlays:[],spotanims:[],mapmeta:Eo(e)}}function Eo(t){let e=ct("MAP_INDEX",!0),n=ct("MAP_VERSION",!0),r=ct("MAP_CRC",!0),i=t.find(m=>m.namehash==e),s=t.find(m=>m.namehash==n),u=t.find(m=>m.namehash==r);if(!i||!s||!u)throw new Error;let d=new He(i.buffer),l=new He(s.buffer),x=new He(u.buffer),p=new Map;for(;!d.eof();)p.set(d.readUShort(!0),{map:d.readUShort(!0),loc:d.readUShort(!0),crc:x.readUInt(!0),version:l.readUShort(!0)}),d.readUByte();return p}function or(t,e){let n=ct(`${e}.IDX`,!0),r=ct(`${e}.DAT`,!0),i=t.find(p=>p.namehash==n),s=t.find(p=>p.namehash==r);if(!i||!s)throw new Error;let u=new He(i.buffer),d=u.readUShort(!0),l=2,x=[];for(let p=0;p<d;p++){let m=u.readUShort(!0);x.push(s.buffer.slice(l,l+m)),l+=m}return x}async function Jn(t,e,n){let r=`${e}.${n?"tga":"dat"}`,i=await t.findSubfileByName(Ke.data,mt.textures,r);return n?Pi(i.buffer):Oi(t,i.buffer)}async function Oi(t,e){let n=await t.findSubfileByName(Ke.data,mt.textures,"INDEX.DAT");return on(n.buffer,e)}async function Ui(t,e,n,r){let i=await Jn(t,e,r);if(!n)return i;let s=await Jn(t,n,r);if(s.img.width+s.x>i.img.width||s.img.height+s.y>i.img.height)return console.warn("tried to overlay image outside of dest bounds"),i;let u=Qe(i.img.data.slice(),i.img.width,i.img.height);for(let d=0;d<s.img.height;d++)for(let l=0;l<s.img.width;l++){let x=(d*s.img.width+l)*4,p=((d+s.y)*i.img.width+(l+s.x))*4,m=s.img.data[x+0],f=s.img.data[x+1],g=s.img.data[x+2],h=s.img.data[x+3],a=m==0&&f==255&&g==0&&h==255,o=h==255;u.data[p+0]=a?0:o?m:i.img.data[p+0],u.data[p+1]=a?0:o?f:i.img.data[p+1],u.data[p+2]=a?0:o?g:i.img.data[p+2],u.data[p+3]=a?0:o?h:i.img.data[p+3]}return{x:i.x,y:i.y,fullwidth:i.fullwidth,fullheight:i.fullheight,img:u}}const Kr=Object.freeze(Object.defineProperty({__proto__:null,combineLegacyTexture:Ui,legacyGroups:mt,legacyMajors:Ke,legacyPreload:So,parseLegacyArchive:Wr,parseLegacyImageFile:Oi},Symbol.toStringTag,{value:"Module"})),st={textures:6,models:101,entity:102,maps:103,land:104,filter:105,jagex:106,media:107,sounds:108,config:110};function jr(t,e,n,r,i,s,u,d,l,x,p,m,f){return{buildnr:t,locsjson:m,name:f,date:e,versions:{config:n,maps:r,land:i,media:s,models:u,textures:d,entity:l,sounds:x,filter:p}}}const Gi=[jr(115,new Date("2001-12-24 20:28"),48,27,0,28,12,8,10,0,0,null,"dec 2001 - last original world data"),jr(203,new Date("2003-12-01"),85,63,0,58,36,17,24,1,2,null,"Build 203 - User provided"),jr(230,new Date("2004-02-18 11:43"),100,100,100,100,100,100,100,100,100,"SceneryLocs.json","Last version of entered files")],Do=Object.fromEntries(Object.entries(st).map(([t,e])=>[e,t]));function zi(t){let e=[];for(let n of Gi)e.push({buildnr:n.buildnr,iscomplete:!1,locsjson:n.locsjson,target:n.versions,foundjag:Object.fromEntries(Object.entries(n.versions).map(([r])=>[r,0])),foundmem:Object.fromEntries(Object.entries(n.versions).map(([r])=>[r,0]))});for(let n of t){let r=n.match(/^(?<name>[a-zA-Z]+)(?<version>\d+)\.(?<type>jag|mem)$/);if(r){let i=+r.groups.version,s=r.groups.type=="mem",u=r.groups.name;for(let d of e){let l=s?d.foundmem:d.foundjag;d.target[u]&&i<=d.target[u]&&i>l[u]&&(l[u]=i)}}}for(let n of e){let r=!0;for(let i in n.target)n.foundjag[i]!=n.target[i]&&(r=!1),n.foundmem[i]!=0&&n.foundmem[i]!=n.target[i]&&(r=!1);n.iscomplete=r}return e}class un extends Bi{usingversion;fs;constructor(e,n){super(),this.fs=e,this.usingversion=n}static async create(e,n){if(!n){let r=await e.readDir("."),i=zi(r.map(u=>u.name)),s=localStorage.rsmv_classicversion??"-1";n=i.at(+s)}return new un(e,n)}async getFileArchive(e){if(e.major!=0)throw new Error("all files are placed in index 0 for classic caches");let n=Do[e.minor],r=await this.getNamedFile(n,!1),i=await this.getNamedFile(n,!0),s=r?Wr(r,e.major):[],u=i?Wr(i,e.major):[];if(s.length==0&&u.length==0)throw new Error("no files found in index "+e.minor);return[...s,...u]}async getNamedFile(e,n){if(!this.usingversion||!this.fs)throw new Error("no classic files loaded in classic cache loader");let r=(n?this.usingversion.foundmem:this.usingversion.foundjag)[e];if(!r)return null;let i=`${e}${r}.${n?"mem":"jag"}`;return console.log("loading",i),this.fs.readFileBuffer(i)}getBuildNr(){return this.usingversion?.buildnr??200}getCacheMeta(){return this.usingversion?{name:`Classic ${this.getBuildNr()}`,descr:`${Object.entries(this.usingversion.foundjag).map(([e,n])=>`${e}: ${n}`).join(`
`)}`,timestamp:new Date(0)}:{name:"Classic",descr:"no files loaded",timestamp:new Date(0)}}async getFile(e,n){throw new Error("can only load archives in a classic cache")}}function tt(t,e){let n=new Array(t).fill(null).map(()=>({}));for(let[r,i]of Object.entries(e))for(let s=0;s<t;s++)n[s][r]=i();return n}async function Ao(t,e){let n=await t.getArchiveById(0,st.models),r=(await t.findSubfileByName(0,st.config,"STRING.DAT")).buffer,i=(await t.findSubfileByName(0,st.config,"INTEGER.DAT")).buffer,s=0,u=()=>{let A=s;for(;s<r.length&&r[s++]!=0;);return r.toString("latin1",A,s-1)},d=0,l=()=>{let A=i.readUint32BE(d);return d+=4,A},x=()=>{let A=i.readInt32BE(d);return d+=4,A},p=()=>{let A=i.readUint16BE(d);return d+=2,A},m=()=>i.readUint8(d++),f=()=>!!m(),g=tt(p(),{name:u,examine:u,command:u,sprite:p,price:l,stackable:f,special:f,equip:p,color:l,untradeable:f,member:f}),h=tt(p(),{name:u,examine:u,command:u,attack:m,strength:m,hits:m,defence:m,hostility:m,anims:()=>new Array(12).fill(null).map(m),haircolor:l,topcolor:l,bottomcolor:l,skincolor:l,width:p,height:p,walkmodel:m,combatmodel:m,combatanim:m}),a=tt(p(),{name:u,subname:u}),o=tt(p(),{name:u,color:l,gendermodel:m,has_a:f,has_f:f,unk:m}),c=tt(p(),{name:u,examine:u,command_0:u,command_1:u,model:()=>{let A=u(),T=ct(`${A}.ob3`,!0),D=n.find(I=>I.namehash==T)?.fileid;return{name:A,id:D}},xsize:m,zsize:m,type:m,item_height:m}),v=tt(p(),{name:u,examine:u,command_0:u,command_1:u,height:p,frontdecor:x,backdecor:x,blocked:f,invisible:f}),y=tt(p(),{height:m,texture:m}),b=tt(p(),{decor:l,type:()=>{let A=m();return{type:A,autoconnect:A==1||A==3,indoors:A==2,iswater:A==3,bridge:A==4}},blocked:f}),w=tt(p(),{}),_=tt(p(),{name:u,examine:u,level:m,num_runes:m,type:m,runetypes:()=>new Array(m()).fill(null).map(p),runeamounts:()=>new Array(m()).fill(null).map(m)}),E=tt(p(),{name:u,examine:u,level:m,drain:m});console.log(`decoded rsc config, ints ${d}/${i.length}, strings ${s}/${r.length}`);let S=[];if(t.usingversion.locsjson)try{let A=JSON.parse(await t.fs.readFileText(t.usingversion.locsjson)),T=944;S=A.sceneries.map(D=>({id:D.id,dir:D.direction,level:Math.floor(D.pos.Y/T),x:2304+D.pos.X,z:1776+D.pos.Y%T}))}catch{console.warn("failed to load external classic locs")}return{items:g,npcs:h,textures:a,anims:o,objects:c,wallobjects:v,roofs:y,tiles:b,projectile:w,spells:_,prayers:E,jsonlocs:S}}const cn=Object.freeze(Object.defineProperty({__proto__:null,ClassicFileSource:un,classicBuilds:Gi,classicConfig:Ao,classicGroups:st,detectClassicVersions:zi},Symbol.toStringTag,{value:"Module"}));async function Co(t,e){let n=z.cutscenes.read(e,t),r=document.createElement("div");r.style.width=`${n.width}px`,r.style.height=`${n.height}px`,console.log(n);let i=`cutscene-${Re(e)>>>0}`,s="",u="",d=n.elements.reduce((g,h)=>Math.max(g,h.end),0),l=g=>`${Math.max(0,g/d*100).toFixed(2)}%`,x=new Map,p=function(g,h,a,o){return s+=`@keyframes ${h}{
`,s+=`  from{${o(a[0])}}
`,s+=a.map(c=>`  ${l(g.start+c[0])}{${o(c)}}
`).join(""),s+=`  to{${o(a.at(-1))}}
`,s+=`}
`,`${d}s infinite ${h} linear`};s+=`.subtitle{
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
`;for(let g=n.elements.length-1;g>=0;g--){let h=n.elements[g],a=`${i}-${g}-visibility`;if(s+=`@keyframes ${a}{
`,s+=`  0%{visibility:hidden}
`,s+=`  ${l(h.start)}{visibility:visible}
`,s+=`  ${l(h.end)}{visibility:hidden}
`,s+=`}
`,u+=`<div style="animation:${d}s step-end infinite ${a}">
`,h.subtitle&&(u+=`<div class="subtitle"><div>${Et(h.subtitle)}</div></div>
`),h.soundid)try{let o=await ln(t,C.sounds,h.soundid,null,!0);u+=`<audio src="data:audio/ogg;base64,${o.toString("base64")}" data-timestart="${h.start}" data-timeend="${h.end}"></audio>
`}catch{console.warn(`missing sound ${h.soundid} ${h.sound}`)}if(h.graphics){if(h.graphics.length!=0)for(let o=h.graphics.length-1;o>=0;o--){let c=h.graphics[o],v=x.get(c.spriteid);if(!v){let w=await t.getFileById(C.sprites,c.spriteid);v=await Ni(gt(w)[0].img),x.set(c.spriteid,v)}let y=[];if(c.opacityframes.length!=0){let w=`${i}-${g}-${o}-opacity`;y.push(p(h,w,c.opacityframes,_=>`opacity:${_[1].toFixed(2)}`))}if(c.rotateframes.length!=0){let w=`${i}-${g}-${o}-rotate`;y.push(p(h,w,c.rotateframes,_=>`rotate:${_[1].toFixed(2)}deg;`))}if(c.translateframes.length!=0){let w=`${i}-${g}-${o}-translate`;y.push(p(h,w,c.translateframes,_=>`translate:${_[1].toFixed(2)}px ${_[2].toFixed(2)}px`))}if(c.scaleframes.length!=0){let w=`${i}-${g}-${o}-scale`;y.push(p(h,w,c.scaleframes,_=>`scale:${_[1].toFixed(3)} ${_[2].toFixed(2)};`))}let b=`position:absolute; top:0px; left:0px; transform-origin:center;margin-left:${-c.width/2}px; margin-top:${-c.height/2}px;`;u+=`<img data-spriteid="${c.spriteid}" src="${v}" width="${c.width}" height="${c.height}" style="${b} animation:${y.join()};">
`}u+="</div>"}}function m(g){console.log("module init");let h=0,a=Date.now(),o=1,c=0;function v(){return h+(Date.now()-a)/1e3*o}function y(E){let S=E.currentTarget.valueAsNumber;_(S,0)}function b(){_(v(),1)}function w(){_(v(),0)}function _(E,S=1){if(h=E,o=S,a=Date.now(),c&&(clearTimeout(c),c=0),S!=0){let D=(g-E/S)*1e3;c=+setTimeout(()=>{_(0,S)},D)}let A=document.getAnimations();for(let D of A)D.currentTime=1e3*E,D.playbackRate=S,S!=0?D.play():D.pause();let T=Array.from(document.querySelectorAll("audio"));for(let D of T){let I=E-+(D.dataset.timestart??0);D.dataset.delaytimer&&(clearTimeout(+D.dataset.delaytimer),D.dataset.delaytimer=void 0),S!=0?(D.playbackRate=S,I<0?D.dataset.delaytimer=""+ +setTimeout(()=>{D.currentTime=0,D.play()},-I/S*1e3):(D.currentTime=I,D.play())):D.pause()}}return{seek:_,play:b,pause:w,onRangeChange:y}}let f=`<!DOCTYPE html>
`;return f+=`<html>
`,f+=`<head>
`,f+=`<style>
`,f+=s,f+=`</style>
`,f+=`</head>
`,f+=`<body>
`,f+=`<input type="range" min="0" max="${d}" step="0.01" style="width:400px;" oninput="controls.onRangeChange(event)">
`,f+=`<input type="button" value="play" onclick="controls.play()">
`,f+=`<input type="button" value="pause" onclick="controls.pause()">
`,f+=`<div style="position:relative; width:${n.width}px; height:${n.height}px; overflow:hidden; zoom:0.5;">
`,f+=u,f+=`</div>
`,f+=`<script>
`,f+=`var controls=(${m})(${d});
`,f+=`controls.play()
`,f+=`<\/script>
`,f+=`</body>
`,f+=`</html>
`,{html:u,css:s,doc:f}}function fn(t,e){t.customProgramCacheKey=()=>"zoffset"+e,t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace(/#include <(\w+)>/g,(r,i)=>`// == ${i} ==
${r}`),n.vertexShader=n.vertexShader.replace("#include <project_vertex>",`
			#include <project_vertex>
			mvPosition.xyz -= normalize(mvPosition.xyz) * ${e.toExponential()};
			gl_Position = projectionMatrix * mvPosition;
		`)}}function Vi(t,e){t.customProgramCacheKey=()=>"floortex",t.onBeforeCompile=n=>{n.vertexShader=`#ifdef USE_MAP
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
`)}}const Ie=[255,255,255],To=[255,0,0],We=512,H=256,ji=We*192/128,Be=ji+We/2,Ge=H+We/5,ht=ji,Bt=Be-(Be-ht)/(H+Ge)*We;function Wn(t,e,n){let r=(n[1]-t[1])*(e[2]-t[2])-(e[1]-t[1])*(n[2]-t[2]),i=(n[2]-t[2])*(e[0]-t[0])-(e[2]-t[2])*(n[0]-t[0]),s=(n[0]-t[0])*(e[1]-t[1])-(e[0]-t[0])*(n[1]-t[1]),u=1/Math.hypot(r,i,s);return[r*u,i*u,s*u]}class dn{pos=[];color=[];uvs=[];index=[];normals=[];vertindex=0;parent;constructor(e){this.parent=e}addParallelogram(e,n,r,i){let s=[n[0]+i[0]-r[0],n[1]+i[1]-r[1],n[2]+i[2]-r[2]],u=Wn(n,r,i);return this.pos.push(...n,...r,...i,...s),this.color.push(...e,...e,...e,...e),this.normals.push(...u,...u,...u,...u),this.uvs.push(0,0,1,0,1,1,0,1),this.index.push(this.vertindex+0,this.vertindex+2,this.vertindex+1,this.vertindex+0,this.vertindex+3,this.vertindex+2),this.vertindex+=4,this}addTriangle(e,n,r,i){let s=Wn(n,i,r);return this.color.push(...e,...e,...e),this.pos.push(...n,...r,...i),this.uvs.push(0,0,0,1,1,1),this.normals.push(...s,...s,...s),this.index.push(this.vertindex+0,this.vertindex+1,this.vertindex+2),this.vertindex+=3,this}addCube(e,[n,r,i],[s,u,d]){let l=n-s/2,x=r-u/2,p=i-d/2,m=l+s,f=x+u,g=p+d;return this.addParallelogram(e,[l,x,p],[m,x,p],[m,f,p]),this.addParallelogram(e,[m,x,p],[m,x,g],[m,f,g]),this.addParallelogram(e,[m,x,g],[l,x,g],[l,f,g]),this.addParallelogram(e,[l,x,g],[l,x,p],[l,f,p]),this.addParallelogram(e,[l,x,g],[m,x,g],[m,x,p]),this.addParallelogram(e,[l,f,p],[m,f,p],[m,f,g]),this}addExtrusion(e,n,r){let i=r[r.length-1];if(Math.hypot(...n)!=0)for(let s=0;s<r.length;s++){let u=r[s];this.addParallelogram(e,i,u,[u[0]+n[0],u[1]+n[1],u[2]+n[2]]),i=u}if(r.length>2){let s=r[2][0]-r[1][0],u=r[2][1]-r[1][1],d=r[2][2]-r[1][2],l=r[0][0]-r[1][0],x=r[0][1]-r[1][1],p=r[0][2]-r[1][2],m=x*d-u*p,f=p*s-d*l,g=l*u-s*x,h=Math.hypot(m,f,g);m/=h,f/=h,g/=h,this.index.length;let a=-1,o=-1;for(let c=0;c<r.length;c++){let v=r[c];this.pos.push(...v),this.color.push(...e),this.uvs.push(0,0),this.normals.push(m,f,g);let y=this.vertindex++;a==-1?a=y:(o==-1||this.index.push(a,o,y),o=y)}a=-1,o=-1;for(let c=r.length;c>0;c--){let v=r[c%r.length];this.pos.push(...v),this.color.push(...e),this.uvs.push(0,0),this.normals.push(-m,-f,-g);let y=this.vertindex++;a==-1?a=y:(o==-1||this.index.push(a,o,y),o=y)}}return this}convertSubmesh(e){let n=new Pe(new Uint16Array(this.index),1);return{indices:n,vertexstart:0,vertexend:this.pos.length/3|0,attributes:{pos:new Pe(new Float32Array(this.pos),3),color:new Pe(new Uint8Array(this.color),3,!0),texuvs:new Pe(new Float32Array(this.uvs),2),normals:new Pe(new Float32Array(this.normals),3)},indexLODs:[n],hasVertexAlpha:!1,materialId:e,needsNormalBlending:!1}}mat(e){return this.parent.mat(e)}convert(){return this.parent.convert()}}function ut(t){if(t instanceof Qt){let e=t.data.array;if(!ArrayBuffer.isView(e))throw new Error("typed array backing store expected");return[e,t.offset,t.data.stride]}else{let e=t.array;if(!ArrayBuffer.isView(e))throw new Error("typed array backing store expected");return[e,0,t.itemSize]}}function qi(t,e,n,r,i){const s=new xe,u=new xe,d=new xe,l=new xe;for(let x=r;x<i;x+=3){const p=t.getX(x+0),m=t.getX(x+1),f=t.getX(x+2);s.fromBufferAttribute(e,p),u.fromBufferAttribute(e,m),d.fromBufferAttribute(e,f),d.sub(u),s.sub(u),l.crossVectors(d,s),s.fromBufferAttribute(n,p),u.fromBufferAttribute(n,m),d.fromBufferAttribute(n,f),s.add(l),u.add(l),d.add(l),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,u.x,u.y,u.z),n.setXYZ(f,d.x,d.y,d.z)}for(let x=r;x<i;x++)l.fromBufferAttribute(n,x),l.normalize(),n.setXYZ(x,l.x,l.y,l.z)}function Fo(t){let e=0,n=0,r=[];return t.forEach((i,s)=>{let u=i.convertSubmesh(s);r.push(u);let d=u.attributes.pos;for(let l=0;l<d.count;l++){let x=d.getY(l);e=Math.min(e,x),n=Math.max(n,x)}}),{miny:e,maxy:n,bonecount:0,skincount:0,meshes:r}}class ze{meshes=new Map;mat(e){let n=this.meshes.get(e);return n||(n=new dn(this),this.meshes.set(e,n)),n}convert(){return Fo(this.meshes)}}const ko=new ze().mat(0).addCube(Ie,[0,300,0],[600,600,600]).convert(),Io=new ze().mat(0).addParallelogram(Ie,[-H,0,H],[-H,We,H],[-H,We,-H]).mat(1).addParallelogram(To,[-H,0,-H],[-H,We,-H],[-H,We,H]).convert(),Bo=new ze().mat(0).addParallelogram(Ie,[H,0,H],[H,We,H],[-H,We,-H]).mat(1).addParallelogram(Ie,[-H,0,-H],[-H,We,-H],[H,We,H]).convert(),Mo=new ze().mat(0).addParallelogram(Ie,[-Ge,Bt,-Ge],[Ge,Bt,-Ge],[Ge,Bt,Ge]).convert(),No=new ze().mat(0).addParallelogram(Ie,[-H,Be,H],[-H,Be,-H],[Ge,ht,-H]).convert(),Lo=new ze().mat(0).addTriangle(Ie,[Ge,ht,H],[-H,ht,-Ge],[-H,Be,H]).convert(),Po=new ze().mat(0).addTriangle(Ie,[-H,Be,-H],[-H,Be,H],[H,Be,H]).mat(0).addTriangle(Ie,[-H,Be,-H],[H,Be,H],[H,Bt,-H]).convert(),Ro=new ze().mat(0).addTriangle(Ie,[H,Be,H],[-H,Be,-H],[-H,Bt,H]).mat(0).addTriangle(Ie,[-H,Be,-H],[H,Be,H],[H,Bt,-H]).convert(),Oo=new ze().mat(0).addTriangle(Ie,[Ge,ht,-Ge],[-H,ht,-Ge],[-H,Be,H]).mat(0).addTriangle(Ie,[Ge,ht,H],[Ge,ht,-Ge],[-H,Be,H]).convert(),Uo=new ze().mat(0).addParallelogram(Ie,[-H,Be,-H],[H,Be,-H],[H,Be,H]).convert(),Ft=Go();function Go(){const t=H,e=H-We/8,r=[0,0,0];return{wall:new ze().mat(-1).addExtrusion(Ie,r,[[-t,0,-t],[-t,0,t],[-e,0,t],[-e,0,-t]]).convert(),shortcorner:new ze().mat(-1).addExtrusion(Ie,r,[[-t,0,t],[-e,0,t],[-e,0,e],[-t,0,e]]).convert(),longcorner:new ze().mat(-1).addExtrusion(Ie,r,[[-e,0,e],[-e,0,-t],[-t,0,-t],[-t,0,t],[t,0,t],[t,0,e]]).convert(),pillar:new ze().mat(-1).addExtrusion(Ie,r,[[-t,0,t],[-e,0,t],[-e,0,e],[-t,0,e]]).convert(),diagonal:new ze().mat(-1).addExtrusion(Ie,r,[[-t,0,-t],[-t,0,-e],[e,0,t],[t,0,t],[t,0,e],[-e,0,-t]]).convert()}}function Xi(t){let e=t.meshes.reduce((d,l)=>d+l.vertexend-l.vertexstart,0),n=new Uint32Array(e),r=0;for(let d=0;d<t.meshes.length;d++){let l=t.meshes[d];for(let x=l.vertexstart;x<l.vertexend;x++)n[r++]=d<<23|x}function i(d,l,x){const p=d.meshes[l>>23],m=d.meshes[x>>23],f=l&8388607,g=x&8388607,h=p.attributes.pos,a=m.attributes.pos;return h.getX(f)-a.getX(g)||h.getY(f)-a.getY(g)||h.getZ(f)-a.getZ(g)}let s=new xe,u=new xe;n.sort((d,l)=>i(t,d,l));for(let d=0;d<n.length;){let l=d;for(d++;d<n.length&&i(t,n[l],n[d])==0;)d++;if(d>l+1){const x=t.meshes[n[l]>>23],p=n[l]&8388607;u.set(0,0,0);for(let m=l;m<d;m++){const f=t.meshes[n[m]>>23],g=n[m]&8388607;f.needsNormalBlending&&f.attributes.normals&&(s.fromBufferAttribute(f.attributes.normals,g),u.add(s))}u.normalize();for(let m=l;m<d;m++){const f=t.meshes[n[m]>>23],g=n[m]&8388607;if(m!=l&&x.attributes.boneids&&f.attributes.boneids)for(let h=0;h<x.attributes.boneids.itemSize;h++)f.attributes.boneids.setComponent(g,h,x.attributes.boneids.getComponent(p,h)),f.attributes.boneweights.setComponent(g,h,x.attributes.boneweights.getComponent(p,h));f.needsNormalBlending&&f.attributes.normals&&u.lengthSq()>.001&&f.attributes.normals.setXYZ(g,u.x,u.y,u.z)}}}}function Hi(t){return{bonecount:Math.max(...t.map(e=>e.bonecount)),skincount:Math.max(...t.map(e=>e.skincount)),maxy:Math.max(...t.map(e=>e.maxy)),miny:Math.max(...t.map(e=>e.miny)),meshes:t.flatMap(e=>e.meshes),debugmeshes:t.flatMap(e=>e.debugmeshes??[])}}function hn(t,e){let n=e.replaceMaterials?.find(s=>s[0]==t.materialId)?.[1],r={...t};n!=null&&(r.materialId=n==65535?-1:n),typeof e.lodLevel=="number"&&e.lodLevel!=-1&&(r.indices=t.indexLODs[Math.min(e.lodLevel,t.indexLODs.length-1)]);let i;if(e.replaceColors&&e.replaceColors.length!=0&&t.attributes.color){let s=t.attributes.color,u=[];for(let d of e.replaceColors){let l=tr(Dt(d[0])),x=tr(Dt(d[1]));u.push([l[0]<<16|l[1]<<8|l[2],x])}for(let d=0;d<s.count;d++){let l=s.getX(d)*255<<16|s.getY(d)*255<<8|s.getZ(d)*255;for(let x of u)if(l==x[0]){i||(i=s.clone()),i.setXYZ(d,x[1][0]/255,x[1][1]/255,x[1][2]/255);break}}}return i&&(r.attributes={...t.attributes,color:i}),r}function pn(t,e,n,r=!1){let i=t.geometry.getAttribute("color"),s=!!i&&i.itemSize==4;t.material=e.mat;let u=n&&e.matmeta.baseColorFraction==1?[.5,.5,.5]:e.matmeta.baseColor;if(e.matmeta.baseColorFraction!=1||u.some(x=>x!=1)||n||!e.matmeta.textures.diffuse||s){if(e.matmeta.baseColorFraction!=0){let x=t.geometry.getAttribute("position").count,p=t.geometry.getAttribute("color"),m=1-e.matmeta.baseColorFraction,f=e.matmeta.baseColorFraction*u[0]*255,g=e.matmeta.baseColorFraction*u[1]*255,h=e.matmeta.baseColorFraction*u[2]*255,a=s?4:3,o=r&&p?p:new Pe(new Uint8Array(a*x),a,!0),[c,v,y]=ut(o),[b,w,_]=p?ut(p):[null,0,0];for(let E=0;E<x;E++){let S=v+y*E,A=w+_*E,T=b?b[A+0]:255,D=b?b[A+1]:255,I=b?b[A+2]:255;c[S+0]=Math.min(255,T*m+f),c[S+1]=Math.min(255,D*m+g),c[S+2]=Math.min(255,I*m+h),s&&(c[S+3]=b?b[A+3]:255)}t.geometry.setAttribute("color",o)}}else t.geometry.getAttribute("color")&&t.geometry.deleteAttribute("color")}async function mn(t,e){let n=new bi,r=null;if(e.bonecount!=0||e.skincount!=0){let i=[],s=Math.max(e.bonecount,e.skincount),u=new Zt;n.add(u);for(let d=0;d<s;d++)i.push(u);r=new Dr(i)}for(let i of e.meshes){let s=i.attributes,u=new rr;u.setAttribute("position",s.pos),s.color&&u.setAttribute("color",s.color),s.normals&&u.setAttribute("normal",s.normals),s.texuvs&&u.setAttribute("uv",s.texuvs),s.skinids&&u.setAttribute("RA_skinIndex_skin",s.skinids),s.skinweights&&u.setAttribute("RA_skinWeight_skin",s.skinweights),s.boneids&&u.setAttribute("RA_skinIndex_bone",s.boneids),s.boneweights&&u.setAttribute("RA_skinWeight_bone",s.boneweights),u.index=i.indices;let d;if(s.skinids||s.boneids){d=new Ar(u);let x=!!u.attributes.RA_skinIndex_bone;u.attributes.skinIndex||(u.setAttribute("skinIndex",x?u.attributes.RA_skinIndex_bone:u.attributes.RA_skinIndex_skin),u.setAttribute("skinWeight",x?u.attributes.RA_skinWeight_bone:u.attributes.RA_skinWeight_skin)),d.bind(r)}else d=new Ut(u);let l=await t.getMaterial(i.materialId,i.hasVertexAlpha,!1);pn(d,l,!1),n.add(d)}return e.debugmeshes&&e.debugmeshes.length!=0&&n.add(...e.debugmeshes),n}const zo=Object.freeze(Object.defineProperty({__proto__:null,MeshBuilder:dn,ModelBuilder:ze,applyMaterial:pn,augmentThreeJsFloorMaterial:Vi,augmentZOffsetMaterial:fn,classicRoof10:Mo,classicRoof12:No,classicRoof13:Lo,classicRoof14:Po,classicRoof15:Ro,classicRoof16:Oo,classicRoof17:Uo,classicWall:Io,classicWallDiag:Bo,computePartialNormals:qi,getAttributeBackingStore:ut,materialPreviewCube:ko,mergeBoneids:Xi,mergeModelDatas:Hi,modifyMesh:hn,ob3ModelToThree:mn,topdown2dWallModels:Ft},Symbol.toStringTag,{value:"Module"}));function pr(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pr=function(n){return typeof n}:pr=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pr(t)}function Vo(t,e,n){var r=n.value;if(typeof r!="function")throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(pr(r)));var i=!1;return{configurable:!0,get:function(){if(i||this===t.prototype||this.hasOwnProperty(e)||typeof r!="function")return r;var u=r.bind(this);return i=!0,Object.defineProperty(this,e,{configurable:!0,get:function(){return u},set:function(l){r=l,delete this[e]}}),i=!1,u},set:function(u){r=u}}}function qr(t,e){for(let n=0;n<t.length-1;n++){let r=t[n],i=t[n+1];if(r.time<=e&&i.time>=e){let s=r.value[0],u=i.value[0],d=r.time,l=i.time,x=s+r.value[2],p=d+r.value[1],m=u-r.value[4],f=l-r.value[3],g=qo(d,p,f,l,e);return jo(s,x,m,u,g)}}throw new Error("out of track bounds")}function jo(t,e,n,r,i){let s=3*e-t-3*n+r,u=3*t-6*e+3*n,d=3*e-3*t,l=t;return i*i*i*s+i*i*u+i*d+l}function qo(t,e,n,r,i){let s=1e-5,u=3*e-t-3*n+r,d=3*t-6*e+3*n,l=3*e-3*t,x=t-i;if(Math.abs(u)<s){let M=l*l-4*d*x;if(M<0)throw new Error("no solution for quadratic interpolation");let L=2*x/(-l-Math.sqrt(M)),U=2*x/(-l+Math.sqrt(M)),N=L>=-s&&L<=1+s,O=U>=-s&&U<=1+s;if(!N&&!O)throw new Error("no valid solutions for quadratic interpolation");return N?L:U}let p=-d/(3*u),m=p*p*p+(d*l-3*u*x)/(6*u*u),f=l/(3*u),g=m*m+Math.pow(f-p*p,3),h=g>=0?Math.sqrt(g):0,a=g>=0?0:Math.sqrt(-g),o=m+h,c=a,v=m-h,y=-a,b=Math.hypot(o,c),w=Math.atan2(c,o),_=Math.hypot(v,y),E=Math.atan2(y,v),S=Math.pow(b,1/3),A=w/3,T=Math.pow(_,1/3),D=E/3,I=0,B=0;for(let M of[0,1,2])for(let L of[0,1,2]){let U=S*Math.sin(A+M*Math.PI/3*2)+T*Math.sin(D+L*Math.PI/3*2),N=S*Math.cos(A+M*Math.PI/3*2)+T*Math.cos(D+L*Math.PI/3*2)+p;Math.abs(U)<s&&N>=-s&&N<=1+s&&(I=S*Math.cos(A+M*Math.PI/3*2)+T*Math.cos(D+L*Math.PI/3*2)+p,B++)}if(B==0)throw new Error("no solution found");return I}async function Xo(t,e,n){let r=z.framemaps.read(await e.engine.getFileById(C.framemaps,n),e.engine.rawsource);if(!r.skeleton)throw new Error("framebase does not have skeleton");let i=[],s=[],u=new Ve,d=new Ve().makeScale(1,1,-1);for(let[p,m]of r.skeleton.entries()){let f=new Zt,g=new Ve().fromArray(m.bonematrix);f.name="bone_"+p,m.nonskinboneid==65535?(s.push(f),g.multiply(d)):i[m.nonskinboneid].add(f),u.copy(g).decompose(f.position,f.quaternion,f.scale),f.updateMatrixWorld(),i[p]=f}let l=new Dr(i);s.length!=0&&t.add(...s),t.updateMatrixWorld(!0);let x=new Ve().copy(t.matrixWorld);l.calculateInverses(),t.traverse(p=>{if(p instanceof Ar){p.bind(l,x);let m=p.geometry;m.attributes.skinIndex=m.attributes.RA_skinIndex_skin,m.attributes.skinWeight=m.attributes.RA_skinWeight_skin}})}async function Ho(t,e){let n=z.skeletalAnim.read(await t.engine.getFileById(C.skeletalAnims,e),t.engine.rawsource),r=[],i=n.tracks.sort((d,l)=>d.boneid!=l.boneid?d.boneid-l.boneid:d.type_0to9-l.type_0to9),s=[{t:"unknown",a:0},{t:"rotate",a:0},{t:"rotate",a:1},{t:"rotate",a:2},{t:"translate",a:0},{t:"translate",a:1},{t:"translate",a:2},{t:"scale",a:0},{t:"scale",a:1},{t:"scale",a:2},{t:"unknown",a:0},{t:"unknown",a:0},{t:"unknown",a:0},{t:"unknown",a:0},{t:"unknown",a:0},{t:"unknown",a:0},{t:"unknown",a:0}];for(let d=0;d<i.length;){let l=i[d],x=null,p=null,m=null,f=s[l.type_0to9],g=l.boneid<16e3?l.boneid-64:l.boneid-16384;for(;d<i.length;){let E=i[d],S=s[E.type_0to9];if(E.boneid!=l.boneid||S.t!=f.t)break;S.a==0&&(x=E.chunks),S.a==1&&(p=E.chunks),S.a==2&&(m=E.chunks),d++}let h="bone_"+g,a=f.t=="scale"?1:0,o=[],c=[],v=new wi,y=new Je,b=x?.at(-1)?.time??p?.at(-1)?.time??m?.at(-1)?.time??0,w=0;for(let E=0;E<b;E+=5)c[w++]=x?qr(x,E):a,c[w++]=p?qr(p,E):a,c[w++]=m?qr(m,E):a,o.push(E);let _=new Float32Array(o.map(E=>E*.02));if(f.t=="translate"&&r.push(new gr(`${h}.position`,_,c)),f.t=="scale"){if(g==0)for(let E=0;E<c.length;E+=3)c[E+2]*=-1;r.push(new gr(`${h}.scale`,_,c))}if(f.t=="rotate"){let E=new Float32Array(o.length*4);for(let S=0;S*3<c.length;S++)v.set(c[S*3+0],c[S*3+1],c[S*3+2],"YXZ"),y.setFromEuler(v),y.toArray(E,S*4);r.push(new $r(`${h}.quaternion`,_,E))}}return{clip:new Qr("anim_"+(Math.random()*1e3|0),void 0,r),framebaseid:n.framebase}}typeof TextEncoder<"u"||require("util").TextEncoder;const Kn={i8:{gltype:5120,constr:Int8Array},u8:{gltype:5121,constr:Uint8Array},i16:{gltype:5122,constr:Int16Array},u16:{gltype:5123,constr:Uint16Array},i32:{gltype:5124,constr:Int32Array},u32:{gltype:5124,constr:Uint32Array},f32:{gltype:5126,constr:Float32Array},f64:{gltype:5130,constr:Float64Array},f16:{gltype:5131,constr:Uint16Array}};function $o(t){let e={},n={},r=0,i=4,s=-1;for(let l in t){let x=t[l];if(!x)continue;let p=Kn[x.newtype],m=Math.max(4,p.constr.BYTES_PER_ELEMENT);i=Math.max(i,m),r=Math.ceil(r/m)*m,e[l]={offset:r,stride:0,source:x},r+=p.constr.BYTES_PER_ELEMENT*x.vecsize,s==-1&&(s=x.source.length/x.vecsize)}let u=Math.ceil(r/i)*i,d=new Uint8Array(u*s);for(let l in e){let x=e[l],p=Kn[x.source.newtype],m=new p.constr(d.buffer),f=u/p.constr.BYTES_PER_ELEMENT|0,g=x.source.vecsize,h=x.offset/p.constr.BYTES_PER_ELEMENT|0,a=x.source.source,o=[],c=[];for(let v=0;v<g;v++)c[v]=o[v]=a[v];for(let v=0;v<s;v++)for(let y=0;y<g;y++){let b=a[v*g+y];m[v*f+h+y]=b,b>c[y]&&(c[y]=b),b<o[y]&&(o[y]=b)}n[l]={byteoffset:x.offset,bytestride:u,gltype:p.gltype,min:o,max:c,name:l,normalize:!1,veclength:x.source.vecsize}}return{buffer:d,attributes:n,bytestride:u,vertexcount:s}}function gn(t){let e=[];for(let n=0;n<t.bonecount;n++)e.push({xsum:0,ysum:0,zsum:0,weightsum:0});for(let n of t.meshes){let r=n.attributes.boneids,i=n.attributes.boneweights,s=n.attributes.pos,u=n.indices;if(!(!r||!i))for(let d=0;d<u.count;d++){let l=u.array[d];for(let x=0;x<r.itemSize;x++){let p=r.array[l*r.itemSize+x],m=i.array[l*i.itemSize+x],f=e[p];f.xsum+=s.array[s.itemSize*l+0]*m,f.ysum+=s.array[s.itemSize*l+1]*m,f.zsum+=s.array[s.itemSize*l+2]*m,f.weightsum+=m}}}return e}function Yn(t){return new Float32Array(t)}function Zn(t){let e={};t.pos&&(e.pos={source:t.pos,vecsize:3,newtype:"f32"}),t.normals&&(e.normals={source:t.normals,vecsize:3,newtype:"i8"}),t.color&&(e.color={source:t.color,vecsize:4,newtype:"u8"}),t.texuvs&&(e.texuvs={source:t.texuvs,vecsize:2,newtype:"f32"}),t.skinids&&(e.skinids={source:t.skinids,vecsize:4,newtype:"u16"}),t.skinweights&&(e.skinweights={source:t.skinweights,vecsize:4,newtype:"u8"}),t.boneids&&(e.boneids={source:t.boneids,vecsize:4,newtype:"u8"}),t.boneweights&&(e.boneweights={source:t.boneweights,vecsize:4,newtype:"u8"});let n=$o(e),r={};n.bytestride%4==0&&(r.f32=new wt(new Float32Array(n.buffer.buffer),n.bytestride/4)),r.u8=new wt(n.buffer,n.bytestride),r.i8=new wt(new Int8Array(n.buffer.buffer),n.bytestride),n.bytestride%2==0&&(r.u16=new wt(new Uint16Array(n.buffer.buffer),n.bytestride/2));let i={};function s(u,d,l,x,p=!1){if(n.attributes[d]){let m=n.attributes[d],f=r[l];if(!f)throw new Error(`Stride mismatch for ${u} type ${l}`);let g=m.byteoffset/(l=="f32"?4:l=="u16"?2:1);i[u]=new Qt(f,x,g,p)}}return s("pos","pos","f32",3),s("normals","normals","i8",3,!0),s("color","color","u8",4,!0),s("texuvs","texuvs","f32",2),s("skinids","skinids","u16",4),s("skinweights","skinweights","u8",4,!0),s("boneids","boneids","u8",4),s("boneweights","boneweights","u8",4,!0),i}function Qn(t){let e=new Uint8Array(t.length*4),n=new Uint8Array(t.length*4);const r=65535;for(let i=0;i<t.length;i++){let s=t[i];s=s==r?0:s+1,e[i*4]=s,n[i*4]=255}return{boneids:e,boneweights:n}}function ei(t,e){if(e instanceof Uint16Array){let n=new Float32Array(t*2);for(let r=0;r<t*2;r++)n[r]=$s(e[r]);return n}else return new Float32Array(e)}function ti(t){let e=new Int8Array(t.length);for(let n=0;n<t.length;n+=3){let r=t[n+0],i=t[n+1],s=t[n+2],u=Math.hypot(r,i,s);u==0&&(u=1);let d=127/u;e[n+0]=Math.round(r*d),e[n+1]=Math.round(i*d),e[n+2]=Math.round(s*d)}return e}function Jo(t,e){let n=z.models.read(t,e),r=[];if(n.meshes)for(let i of n.meshes){if(i.isHidden)continue;let u=i.indexBuffers.map(o=>new Pe(o,1)),d=Yn(i.positionBuffer),l=null,x=null,p=null,m=null,f=null,g=null,h=null;if(i.skin){let o=new Uint16Array(i.vertexCount*4),c=new Uint8Array(i.vertexCount*4),v=i.skin.skinWeightBuffer,y=i.skin.skinBoneBuffer,b=0,w=0;for(let _=0;_<i.vertexCount;_++){let E=255;for(let S=0;S<4;S++){let A=v[w++],T=y[b++],D=A!=0?A:E;if(E-=A,o[_*4+S]=T==65535?0:T,c[_*4+S]=D,A==0)break}}(b!=i.skin.skinWeightCount||w!=i.skin.skinWeightCount)&&console.log("model skin decode failed"),l=o,x=c}if(i.colourBuffer){if(!u[0])throw new Error("need index buf in order to read per-face colors");let o=u[0].array,c=new Uint8Array(i.vertexCount*4),v=i.alphaBuffer;for(let y=0;y<i.faceCount;y++){let[b,w,_]=tr(Dt(i.colourBuffer[y]));for(let E=0;E<3;E++){let S=o[y*3+E]*4;c[S+0]=b,c[S+1]=w,c[S+2]=_,v?c[S+3]=v[y]:c[S+3]=255}}p=c}if(i.boneidBuffer){let o=Qn(i.boneidBuffer);m=o.boneids,f=o.boneweights}i.uvBuffer&&(g=ei(i.vertexCount,i.uvBuffer)),i.normalBuffer&&(h=ti(i.normalBuffer));let a=Zn({pos:d,normals:h,color:p,texuvs:g,skinids:l,skinweights:x,boneids:m,boneweights:f,vertexCount:i.vertexCount});r.push({indices:u[0],vertexstart:0,vertexend:a.pos.count,indexLODs:u,materialId:i.materialArgument-1,hasVertexAlpha:!!i.alphaBuffer,needsNormalBlending:!1,attributes:a})}else if(n.meshdata){let i=n.meshdata,s=Yn(i.positionBuffer),u=null,d=null,l=null,x=null,p=null,m=null,f=null;if(i.vertexColours){let h=new Uint8Array(i.vertexCount*4),a=i.vertexAlpha;for(let o=0;o<i.vertexColours.length;o++){let[c,v,y]=tr(Dt(i.vertexColours[o])),b=a?a[o]:255,w=o*4;h[w+0]=c,h[w+1]=v,h[w+2]=y,h[w+3]=b}l=h}if(i.skin){let h=new Uint16Array(i.vertexCount*4),a=new Uint8Array(i.vertexCount*4);for(let o=0;o<i.skin.length;o++){let c=i.skin[o],v=255;if(c.ids.length!=c.weights.length)throw new Error("unexpected length difference in skin weights/ids");for(let y=0;y<c.ids.length;y++){let b=c.weights[y],w=c.ids[y],_=b!=0?b:v;if(v-=b,h[o*4+y]=w==65535?0:w,a[o*4+y]=_,b==0)break}}u=h,d=a}if(i.boneidBuffer){let h=Qn(i.boneidBuffer);x=h.boneids,p=h.boneweights}i.uvBuffer&&(m=ei(i.vertexCount,i.uvBuffer)),i.normalBuffer&&(f=ti(i.normalBuffer));let g=Zn({pos:s,normals:f,color:l,texuvs:m,skinids:u,skinweights:d,boneids:x,boneweights:p,vertexCount:i.vertexCount});for(let h of i.renders){if(h.isHidden||h.buf.length==0)continue;let a=h.buf;if(a.BYTES_PER_ELEMENT==4){let y=new Uint32Array(a.length);for(let b=0;b<a.length;b++){let w=a[b];y[b]=w>>24&255|w>>8&65280|w<<8&16711680|w<<24&4278190080}a=y}let o=a[0],c=a[0];for(let y=0;y<a.length;y++){let b=a[y];b<o&&(o=b),b>c&&(c=b)}let v=new Pe(a,1);r.push({indices:v,vertexstart:o,vertexend:c+1,indexLODs:[v],materialId:h.materialArgument-1,hasVertexAlpha:!!h.hasVertexAlpha,needsNormalBlending:!1,attributes:g})}}return $i(r)}function $i(t){let e=0,n=0,r=0,i=0;for(let u of t){let d=u.attributes.pos;for(let p=0;p<d.count;p++){let m=d.getY(p);m>e&&(e=m),m<n&&(n=m)}let l=u.attributes.boneids;if(l){for(let p=0;p<l.count;p++)r=Math.max(r,l.getX(p),l.getY(p),l.getZ(p),l.getW(p));r+=2}let x=u.attributes.skinids;if(x){for(let p=0;p<x.count;p++)i=Math.max(i,x.getX(p),x.getY(p),x.getZ(p),x.getW(p));i+=2}}return{maxy:e,miny:n,meshes:t,bonecount:r,skincount:i}}const Wo=Object.freeze(Object.defineProperty({__proto__:null,getBoneCenters:gn,makeModelData:$i,parseOb3Model:Jo},Symbol.toStringTag,{value:"Module"}));function Ko(t,e){let n=gn(e),r=new Zt;t.add(r);let i=[r],s=[],u=[new Ve];for(let p=1;p<e.bonecount;p++){let m=new Zt,f=new Zt;m.name=`root_${p}`,f.name=`bone_${p}`,m.add(f),s.push(m),i.push(f);let g=new Ve,h=n[p];h&&h.weightsum!=0&&(m.position.set(h.xsum/h.weightsum,h.ysum/h.weightsum,h.zsum/h.weightsum),g.setPosition(m.position)),g.invert(),u.push(g)}let d=new Dr(i,u);s.length!=0&&r.add(...s),r.updateMatrixWorld(!0);let l=new Ve().copy(r.matrixWorld);return d.calculateInverses(),t.traverse(p=>{if(p instanceof Ar){p.bind(d,l);let m=p.geometry;m.attributes.skinIndex=m.attributes.RA_skinIndex_bone,m.attributes.skinWeight=m.attributes.RA_skinWeight_bone}}),{mixer:new _i(t)}}async function Yo(t,e){let n=e[0];if(!n)throw new Error("animation has no frames");let r=await t.engine.getArchiveById(C.frames,n.frameidhi),i=Object.fromEntries(r.map(m=>[m.fileid,z.frames.read(m.buffer,t.engine.rawsource)])),s=0,u=[],d=[];for(let m=0;m<e.length;m++){let f=e[m];i[f.frameidlow]?(u.push(s),s+=f.framelength*.02,d.push(i[f.frameidlow])):console.log(`missing animation frame ${f.frameidlow} in sequence ${f.frameidhi}`)}d.push(d[0]),u.push(s);let l=z.framemaps.read(await t.engine.getFileById(C.framemaps,d[0].probably_framemap_id),t.engine.rawsource),x=new Float32Array(u),p=el(l,d);return m=>{let f=gn(m),g=Qo(l,p,x,f).map((E,S)=>({id:S,trans:E})),h=x.length,a=[],o=new Ve,c=new xe,v=new xe,y=new Je,b=new Je,w=0;for(let E of g){if(E.id==0)continue;if(E.id>=m.bonecount){w++;continue}let S=`root_${E.id}`,A=`bone_${E.id}`,T=new Float32Array(h*3),D=new Float32Array(h*3),I=new Float32Array(h*4),B=new Float32Array(h*4);for(let M=0;M<h;M++)o.fromArray(E.trans,M*16),Zo(o,v,y,c,b),v.toArray(D,M*3),y.toArray(I,M*4),c.toArray(T,M*3),b.toArray(B,M*4);a.push(new gr(`${S}.position`,x,D)),a.push(new $r(`${S}.quaternion`,x,I)),a.push(new gr(`${S}.scale`,x,T)),a.push(new $r(`${A}.quaternion`,x,B))}return w!=0&&console.log("skipped "+w+" bone animations since the model didn't have them"),new Qr("anim",void 0,a)}}function Zo(t,e,n,r,i){t.decompose(e,n,r),i.identity()}function Qo(t,e,n,r){let i=n.length,s=new Ve,u=new Ve,d=new Je,l=new Ve,x=new Ve,p=Math.max(...t.data.flatMap(g=>g.data))+1+1,m=[];for(let g=0;g<p;g++){let h=new Float32Array(16*i),a=r[g],o=!a||a.weightsum==0?0:a.xsum/a.weightsum,c=!a||a.weightsum==0?0:a.ysum/a.weightsum,v=!a||a.weightsum==0?0:a.zsum/a.weightsum;for(let y=0;y<i;y++)h[y*16+0]=1,h[y*16+5]=1,h[y*16+10]=1,h[y*16+15]=1,h[y*16+12]=o,h[y*16+13]=c,h[y*16+14]=v;m.push(h)}let f=new xe;for(let g=0;g<i;g++){f.set(0,0,0);let h=g*16;for(let[a,o]of t.data.entries()){let c=e[a];if(o.type==0){f.fromArray(c,g*3);let v=0,y=0,b=0,w=0;for(let _ of o.data){let E=r[_+1],S=m[_+1];E&&(v+=S[h+12]*E.weightsum,y+=S[h+13]*E.weightsum,b+=S[h+14]*E.weightsum,w+=E.weightsum)}w!=0&&f.set(f.x+v/w,f.y+y/w,f.z+b/w),l.makeTranslation(-f.x,-f.y,-f.z),x.makeTranslation(f.x,f.y,f.z)}if(o.type==1)for(let v of o.data){let y=m[v+1];y[h+12]+=c[g*3+0],y[h+13]+=c[g*3+1],y[h+14]+=c[g*3+2]}if(o.type==2){d.fromArray(c,g*4),u.makeRotationFromQuaternion(d),u.multiply(l),u.premultiply(x);for(let v of o.data){let y=m[v+1];s.fromArray(y,h),s.premultiply(u),s.toArray(y,h)}}if(o.type==3){u.makeScale(c[g*3+0],c[g*3+1],c[g*3+2]),u.multiply(l),u.premultiply(x);for(let v of o.data){let y=m[v+1];s.fromArray(y,h),s.premultiply(u),s.toArray(y,h)}}}}return m}function el(t,e){let n=e.map(i=>({flags:i.flags,animdata:i.animdata,dataindex:0,baseid:i.probably_framemap_id,stream:new He(Buffer.from(i.animdata))})),r=[];for(let[i,s]of t.data.entries()){let u=[3,3,4,3,3,4,3,3,3,3,3][s.type],d=new Float32Array(u*n.length),l=0,x=new Je,p=new wi;for(let m of n){let f=m?.flags[i]??0;if(f&-8&&console.log("unexpexted frame data flag "+(f&-8)),s.type==0&&(d[l++]=f&1?m.stream.readShortSmartBias():0,d[l++]=f&2?m.stream.readShortSmartBias():0,d[l++]=f&4?m.stream.readShortSmartBias():0,f&7&&console.log("type 0 data",f,[...d.slice(l-3,l)])),s.type==1&&(d[l++]=f&1?m.stream.readShortSmartBias():0,d[l++]=-(f&2?m.stream.readShortSmartBias():0),d[l++]=f&4?m.stream.readShortSmartBias():0),s.type==2){let g=0;if(f&1){let o=m.stream.readShortSmartBias(),c=m.stream.readShortSmartBias();g=Math.atan2(o,c)}let h=0;if(f&2){let o=m.stream.readShortSmartBias(),c=m.stream.readShortSmartBias();h=Math.atan2(o,c)}let a=0;if(f&4){let o=m.stream.readShortSmartBias(),c=m.stream.readShortSmartBias();a=Math.atan2(o,c)}p.set(g,h,a,"YXZ"),x.setFromEuler(p),x.toArray(d,l),l+=4}s.type==3&&(d[l++]=(f&1?m.stream.readShortSmartBias():128)/128,d[l++]=(f&2?m.stream.readShortSmartBias():128)/128,d[l++]=(f&4?m.stream.readShortSmartBias():128)/128),(s.type==5||s.type>=4)&&(d[l++]=f&1?m.stream.readUShortSmart():0,d[l++]=f&2?m.stream.readUShortSmart():0,d[l++]=f&4?m.stream.readUShortSmart():0)}r.push(d)}return n.forEach((i,s)=>{let u=i.stream.bytesLeft();if(u!=0){console.warn("ints left in anim decode: "+u,s);let d={};t.data.map((l,x)=>{d[l.type]=(d[l.type]??0)+(i.flags[x]??0).toString(2).replaceAll("0","").length}),console.log(d)}}),r}var tl=Object.defineProperty,rl=Object.getOwnPropertyDescriptor,nl=(t,e,n,r)=>{for(var i=rl(e,n),s=t.length-1,u;s>=0;s--)(u=t[s])&&(i=u(e,n,i)||i);return i&&tl(e,n,i),i};class Ji extends ki{model;loaded=null;cache;rootnode=new Si;nullAnimPromise={clip:null,prom:new Ks};anims={"-1":this.nullAnimPromise};mountedanim=null;mixer=new _i(this.rootnode);renderscene=null;targetAnimId=-1;skeletontype="none";skeletonHelper=null;cleanup(){this.listeners={},this.renderscene?.removeSceneElement(this),this.skeletonHelper?.removeFromParent(),this.renderscene=null}getSceneElements(){return{modelnode:this.rootnode,updateAnimation:this.updateAnimation}}addToScene(e){this.renderscene=e,e.addSceneElement(this)}onModelLoaded(){this.emit("loaded",void 0),this.renderscene?.forceFrame(),this.renderscene?.setCameraLimits()}updateAnimation(e,n){this.mixer.update(e),this.loaded?.matUvAnims.forEach(r=>r.tex.offset.copy(r.v).multiplyScalar(n))}constructor(e,n,r=""){super(),this.cache=e,this.model=(async()=>{let i=await Promise.all(n.map(async m=>{let f=await e.getModelData(m.modelid);return{...f,meshes:f.meshes.map(h=>hn(h,m.mods))}})),s=Hi(i);Xi(s);let u=await mn(this.cache,s);u.name=r;let d=[];for(let m=0;m<Math.max(s.bonecount,s.skincount);m++)d.push(u);let l=new Dr(d),x=[];u.traverse(m=>{if(m instanceof Ar&&m.bind(l),m instanceof Ut&&m.material instanceof da){let f=m.material.userData.gltfExtensions?.RA_materials_uvanim;if(f){let g=m.material,h=new ha(f.uvAnim[0],f.uvAnim[1]);g.map&&x.push({tex:g.map,v:h}),g.normalMap&&x.push({tex:g.normalMap,v:h}),g.emissiveMap&&x.push({tex:g.emissiveMap,v:h}),g.metalnessMap&&x.push({tex:g.metalnessMap,v:h}),g.roughnessMap&&x.push({tex:g.roughnessMap,v:h})}}});let p=new Qr(void 0,void 0,[]);return this.nullAnimPromise.clip=p,this.nullAnimPromise.prom.done(p),this.rootnode.add(u),this.rootnode.scale.set(1/512,1/512,-1/512),this.loaded={mesh:u,modeldata:s,nullAnim:p,matUvAnims:x},this.targetAnimId==-1&&this.setAnimation(-1),this.onModelLoaded(),this.loaded})()}mountAnim(e){if(!this.loaded)throw new Error("attempting to mount anim before model is loaded");if(this.mountedanim==e||this.loaded.modeldata.bonecount==0&&this.loaded.modeldata.skincount==0)return;let n=this.loaded.mesh;n.animations.indexOf(e)==-1&&n.animations.push(e),this.mixer.stopAllAction(),this.mixer.clipAction(e,n).play(),this.mountedanim=e}loadAnimation(e){return this.anims[e]?this.anims[e]:(this.anims[e]={clip:null,prom:(async()=>{let n=await this.cache.engine.getFileById(C.sequences,e),r=z.sequences.read(n,this.cache.engine.rawsource),i;if(r.skeletal_animation){let s=await Ho(this.cache,r.skeletal_animation);i=s.clip;let u=this.loaded??await this.model;if(this.skeletontype!="full"){if(this.skeletontype!="none")throw new Error("wrong skeleton type already mounted to model");await Xo(u.mesh,this.cache,s.framebaseid),this.skeletontype="full"}}else if(r.frames){let s=await Yo(this.cache,r.frames),u=this.loaded??await this.model;if(this.skeletontype!="baked"){if(this.skeletontype!="none")throw new Error("wrong skeleton type already mounted to model");Ko(u.mesh,u.modeldata),this.skeletontype="baked"}i=s(u.modeldata)}else throw new Error("animation has no frames");return this.anims[e]={clip:i,prom:Promise.resolve(i)},this.loaded?.modeldata||await this.model,this.anims[e].clip=i,i})()},this.anims[e])}async setAnimation(e){this.targetAnimId=e;const n=this.loadAnimation(e);return this.mountAnim(n.clip??await n.prom)}}nl([Vo],Ji.prototype,"updateAnimation");class il extends ki{source;sceneCache=null;renderer=null;comps=new Map;highlightstack=[];interpreterprom=null;touchedComps=new Set;runOnloadScripts=!1;constructor(e){super(),this.source=e}toggleHighLightComp(e,n){let r=this.comps.get(e)?.element;r&&(n?(this.highlightstack.length!=0&&this.highlightstack.at(-1).classList.remove("rs-component--highlight"),r.classList.add("rs-component--highlight"),this.highlightstack.push(r)):(r.classList.remove("rs-component--highlight"),this.highlightstack.pop()!=r&&console.log("wrong unlightlight order"),this.highlightstack.length!=0&&this.highlightstack.at(-1).classList.add("rs-component--highlight")))}async runClientScriptCallback(e,n){if(n.length==0)return;let r=await(this.interpreterprom??=Tr(this.source).then(i=>new Ea(i,this)));if(typeof n[0]!="number")throw new Error("expected callback script id but got string");r.reset(),r.pushlist(n.slice(1)),r.activecompid=e,await r.callscriptid(n[0]),await r.runToEnd(),this.updateInvalidatedComps()}updateInvalidatedComps(){this.touchedComps.forEach(e=>e.updateDom()),this.touchedComps.clear()}}function al(){let t="";return t+=`html{color:white;font-size:12px;}
`,t+=`.rs-component{position:absolute;pointer-events:none;}
`,t+=`.rs-component--highlight{outline:1px solid red;}
`,t+=`.rs-image{width:100%;height:100%;}
`,t+=".rs-image--cover{background-size:100% 100%; background-repeat:no-repeat;}",t+=".rs-interface-container{position:absolute;top:0px;left:0px;right:0px;bottom:0px;display:flex;align-items:center;justify-content:center;}",t+=".rs-interface-container-sub{position:relative;outline:1px solid green;}",t+=".rs-model{position:absolute;top:0px;left:0px;width:100%;height:100%;}",t+=".rs-componentmeta{}",t+=".rs-componentmeta--active{outline:1px solid red;}",t+=".rs-componentmeta-children{padding-left:15px;}",t}function sl(t){let e=r=>t[r];return{getcomp:e,click:r=>{console.log(e(+r.target.dataset.compid)),r.stopPropagation()}}}async function ol(t,e){let n=await t.source.getArchiveById(C.interfaces,e),r=new Map;for(let d of n)try{let l=e<<16|d.fileid;if(t.comps.has(l))throw new Error("ui render context already had comp with same id");let x=new fl(t,z.interfaces.read(d.buffer,t.source),l);r.set(d.fileid,x),t.comps.set(l,x)}catch{console.log(`failed to parse interface ${e}:${d.fileid}`)}for(let[d,l]of r)if(l.data.parentid!=65535){let x=r.get(l.data.parentid);if(!x){console.log("missing parent");continue}x.children.push(l)}let i=[];for(let d of r.values())(d.data.parentid==65535||!r.has(d.data.parentid))&&i.push(d);return{comps:r,rootcomps:i,basewidth:520,baseheight:340,id:e}}async function ll(t,e){let{comps:n,rootcomps:r,basewidth:i,baseheight:s}=await ol(t,e),u="";for(let l of r)u+=await l.toHtml(t);let d=`<!DOCTYPE html>
`;return d+=`<html>
`,d+=`<head>
`,d+=`<style>
`,d+=al(),d+=`</style>
`,d+=`<script>
`,d+=`var mod=(${sl+""})(${JSON.stringify(Object.fromEntries([...n].map(l=>[l[0],l[1].data])))});
`,d+=`<\/script>
`,d+=`</head>
`,d+=`<body>
`,d+=`<div class="rs-interface-container">
`,d+=`<div style="width:${i}px; height:${s}px;">
`,d+=u,d+=`</div>
`,d+=`</div>
`,d+=`</body>
`,d+=`</html>
`,d}function ul(t){return`#${(t&16777215).toString(16).padStart(6,"0")}`}function cl(t,e,n){let r={rotx:n.rotate_x,roty:n.rotate_y,rotz:n.rotate_z,translatex:n.translate_x/4,translatey:n.translate_y/4,zoom:n.zoom*8},i=document.createElement("canvas");i.classList.add("rs-model");let s=t.makeUIRenderer(),u=null,d=h=>{u=new Ji(e,[{modelid:h,mods:{}}],`model_${h}`),s.setmodel(u.getSceneElements(),0),u.model.then(l)},l=()=>{let h=i.clientWidth,a=i.clientHeight;if(h==0||a==0)return;let o=s.takePicture(h,a,r);i.width=o.width,i.height=o.height,i.getContext("2d").putImageData(o,0,0),p&&!x&&requestAnimationFrame(l)},x=0,p=!1,m=h=>{(h==32767||h==65535)&&(h=-1),u?.setAnimation(h),p=h!=-1,l()},f=new ResizeObserver(l);f.observe(i);let g=()=>{cancelAnimationFrame(x),x=0,f.disconnect(),s.dispose(),i.remove()};return i.render=l,{dispose:g,canvas:i,setmodel:d,setanim:m}}function ri(t){let e="";return(t.hflip||t.vflip)&&(e+=`scale:${t.hflip?-1:1} ${t.vflip?-1:1};`),t.rotation!=0&&(e+=`rotate:${(-t.rotation/65536*360).toFixed(2)}deg;`),(t.color&16777215)!=16777215&&(e+=`background-color:${ul(t.color)};background-blend-mode:multiply;`),e}async function ni(t,e){let n="none",r=e&16777215;if(r!=16777215){let i=e>>24;i!=0&&console.log("sprite flags",i);let s=await t.source.getFileById(C.sprites,r),u=Li(gt(s)[0]);n=`url('${await Ni(u)}')`}return{imgcss:n,spriteid:e}}class fl{ctx;data;parent=null;children=[];clientChildren=[];compid;modelrenderer=null;spriteChild=null;textChild=null;loadingSprite=-1;element=null;api;constructor(e,n,r){this.ctx=e,this.data=n,this.compid=r,this.api=new vn(this)}isCompType(e){return!(e=="container"&&!this.data.containerdata||e=="model"&&!this.data.modeldata||e=="sprite"&&!this.data.spritedata||e=="text"&&!this.data.textdata||e=="figure"&&!this.data.figuredata)}async toHtml(e){let{style:n,title:r}=this.getStyle(),i="";for(let u of this.children)i+=await u.toHtml(e);if(this.data.textdata&&(i+=qn(this.data.textdata.text)),this.data.modeldata){let u=this.data.modeldata.modelid==32767||this.data.modeldata.modelid==65535;n+="background:rgba(0,255,0,0.5);outline:blue;",i+=u?"placeholder":this.data.modeldata.modelid}if(this.data.spritedata){let u=ri(this.data.spritedata),d=await ni(e,this.data.spritedata.spriteid);u+=`background-image:${d.imgcss};`,i+=`<div class="rs-image${this.data.spritedata.tiling?"":" rs-image--cover"}" style="${Et(u)}"></div>`}let s="";return s+=`<div class="rs-component" data-compid=${this.compid} style="${Et(n)}" onclick="mod.click(event)" title="${Et(r)}">
`,s+=i,s+=`</div>
`,s}dispose(){this.ctx.comps.delete(this.compid),this.modelrenderer?.dispose(),this.element?.remove(),this.children.forEach(e=>e.dispose()),this.clientChildren.forEach(e=>e.dispose())}initDom(){return this.element??=document.createElement("div"),this.updateDom(),this.children.forEach(e=>{this.element.appendChild(e.initDom())}),this.clientChildren.forEach(e=>{this.element.appendChild(e.initDom())}),this.element.classList.add("rs-component"),this.element.ui=this.data,this.element.compid=this.compid,this.element}changed(){this.updateDom()}getStyle(){let e="",n="";return this.data&&(e=`left:${this.data.baseposx}px;top:${this.data.baseposy}px;width:${this.data.basewidth}px;height:${this.data.baseheight}px;`,this.data.hidden&&(e+="display:none;")),{style:e,title:n}}updateDom(){if(!this.element)throw new Error("element not set");let{style:e,title:n}=this.getStyle();if(this.data.modeldata){let r=this.data.modeldata.modelid==32767||this.data.modeldata.modelid==65535;!r&&this.ctx.renderer&&this.ctx.sceneCache?(this.modelrenderer??=cl(this.ctx.renderer,this.ctx.sceneCache,this.data.modeldata.positiondata),this.modelrenderer.setmodel(this.data.modeldata.modelid),this.modelrenderer.setanim(this.data.modeldata.animid),this.element.appendChild(this.modelrenderer.canvas)):this.modelrenderer&&(this.modelrenderer.dispose(),this.modelrenderer=null,e+="background:rgba(0,255,0,0.5);outline:blue;",this.element.innerText=r?"placeholder":"")}this.data.textdata?(this.textChild||(this.textChild=document.createElement("span"),this.element.appendChild(this.textChild)),this.textChild.innerHTML=qn(this.data.textdata.text)):this.textChild&&(this.textChild.remove(),this.textChild=null),this.data.spritedata?this.loadingSprite!=this.data.spritedata.spriteid&&(this.spriteChild||(this.spriteChild=document.createElement("div"),this.element.appendChild(this.spriteChild),this.spriteChild.classList.add("rs-image")),this.spriteChild.style.cssText=ri(this.data.spritedata),this.spriteChild.classList.toggle("rs-image--cover",!this.data.spritedata.tiling),ni(this.ctx,this.data.spritedata.spriteid).then(({imgcss:r,spriteid:i})=>{this.spriteChild&&i==this.data.spritedata?.spriteid&&(this.spriteChild.style.backgroundImage=r)}),this.loadingSprite=this.data.spritedata.spriteid):this.spriteChild&&(this.spriteChild.remove(),this.spriteChild=null),this.element.style.cssText=e,this.element.title=n}setSize(e,n,r,i){this.data&&(this.data.basewidth=e,this.data.baseheight=n,this.data.aspectwidthtype=r,this.data.aspectheighttype=i),this.changed()}setPosition(e,n,r,i){this.data&&(this.data.baseposx=e,this.data.baseposy=n,this.data.aspectxtype=r,this.data.aspectytype=i),this.changed()}setHide(e){this.data&&(this.data.hidden=e)}setWidth(e){this.data&&(this.data.basewidth=e)}setHeight(e){this.data&&(this.data.basewidth=e)}setX(e){this.data&&(this.data.baseposx=e)}setY(e){this.data&&(this.data.baseposy=e)}getHide(){return this.data?.hidden??0}getWidth(){return this.data?.basewidth??0}getHeight(){return this.data?.baseheight??0}getX(){return this.data?.baseposx??0}getY(){return this.data?.baseposy??0}setOp(e,n){console.log(`setop ${this.compid??-1} ${e} ${n}`)}getOp(e){return this.data?.rightclickopts[e]??""}setText(e){this.data?.textdata&&(this.data.textdata.text=e)}getText(){return this.data?.textdata?.text??""}setTextAlign(e,n,r){this.data?.textdata&&(this.data.textdata.alignhor=r,this.data.textdata.alignver=n,this.data.textdata.multiline=e|0)}getTextAlign(){return[this.data?.textdata?.alignhor??0,this.data?.textdata?.alignver??0,this.data?.textdata?.multiline??0]}getGraphic(){return this.data?.spritedata?.spriteid??-1}getHFlip(){return this.data?.spritedata?.hflip??!1}getVFlip(){return this.data?.spritedata?.vflip??!1}getTiling(){return this.data?.spritedata?.tiling??0}getRotation(){return this.data?.spritedata?.rotation??0}setGraphic(e){this.data?.spritedata&&(this.data.spritedata.spriteid=e),this.changed()}setHFlip(e){this.data?.spritedata&&(this.data.spritedata.hflip=e),this.changed()}setVFlip(e){this.data?.spritedata&&(this.data.spritedata.vflip=e),this.changed()}setTiling(e){this.data?.spritedata&&(this.data.spritedata.tiling=e),this.changed()}setRotation(e){this.data?.spritedata&&(this.data.spritedata.rotation=e),this.changed()}setModel(e){this.data?.modeldata&&(this.data.modeldata.modelid=e),this.changed()}getModel(){return this.data?.modeldata?.modelid??-1}getTrans(){return this.data?.figuredata?.trans??0}setTrans(e){this.data?.figuredata&&(this.data.figuredata.trans=e),this.changed()}getFilled(){return this.data?.figuredata?.filled??0}setFilled(e){this.data?.figuredata&&(this.data.figuredata.filled=e),this.changed()}getColor(){return this.data?.figuredata?.color??0}setColor(e){this.data?.figuredata&&(this.data.figuredata.color=e),this.changed()}}class vn{comp;constructor(e){this.comp=e}createChild(e,n){return console.warn("createChild not implemented fully"),new vn(null)}findChild(e){if(!this.comp)return;let n=this.comp.children.find(r=>r.compid==e)??this.comp.clientChildren.find(r=>r.compid==e);return n?n.api:void 0}getNextChildId(){return-1}setHide(e){this.comp?.setHide(e)}getHeight(){return this.comp?.getHeight()??0}getWidth(){return this.comp?.getWidth()??0}getX(){return this.comp?.getX()??0}getY(){return this.comp?.getY()??0}setOp(e,n){this.comp?.setOp(e,n)}getHide(){return this.comp?.getHide()??0}getText(){return this.comp?.getText()??""}setText(e){this.comp?.setText(e)}setTextAlign(e,n,r){this.comp?.setTextAlign(e,n,r)}getGraphic(){return this.comp?.getGraphic()??-1}getHFlip(){return this.comp?.getHFlip()??!1}getVFlip(){return this.comp?.getVFlip()??!1}setGraphic(e){this.comp?.setGraphic(e)}setHFlip(e){this.comp?.setHFlip(e)}setVFlip(e){this.comp?.setVFlip(e)}setModel(e){this.comp?.setModel(e)}getTrans(){return this.comp?.getTrans()??0}getColor(){return this.comp?.getColor()??0}getFilled(){return this.comp?.getFilled()??0}setTrans(e){this.comp?.setTrans(e)}setColor(e){this.comp?.setColor(e)}setFilled(e){this.comp?.setFilled(e)}setSize(e,n,r,i){this.comp?.setSize(e,n,r,i)}setPosition(e,n,r,i){this.comp?.setPosition(e,n,r,i)}setTiling(e){this.comp?.setTiling(e)}getTiling(){return this.comp?.getTiling()??0}setRotation(e){this.comp?.setRotation(e)}getRotation(){return this.comp?.getRotation()??0}}async function Wi(t,e,n){let r=z.fontmetrics.read(e,t);if(!r.sprite)throw new Error("fontmetrics missing sprite data");let i=await t.getFileById(C.sprites,r.sprite.sourceid),s=gt(i);if(s.length!=1)throw new Error("fontmetrics sprite did not contain exactly 1 image");let u=s[0];if(u.fullwidth!=r.sprite.sheetwidth||u.fullheight!=r.sprite.sheetheight)throw new Error("fontmetrics sprite image dimensions do not match metadata");let d={fontid:n,spriteid:r.sprite.sourceid,characters:[],median:r.sprite.median,baseline:r.sprite.baseline,maxascent:r.sprite.maxascent,maxdescent:r.sprite.maxdescent,scale:r.sprite.scale,sheethash:yr(u.img),sheetwidth:r.sprite.sheetwidth,sheetheight:r.sprite.sheetheight,sheet:""};for(let l=0;l<r.sprite.positions.length;l++){let x=r.sprite.positions[l],p=r.sprite.chars[l];if(p.width===0||p.height===0){d.characters.push(null);continue}let m=so(u.img,{x:x.x,y:x.y,width:p.width,height:p.height});d.characters.push({chr:String.fromCharCode(l),charcode:l,x:x.x,y:x.y,width:p.width,height:p.height,bearingy:p.bearingy,hash:yr(m)})}return d}async function ir(t,e,n){if(e.major!=n.major)throw new Error("range must span one major");let r=[];if(t.getBuildNr()<=Ze){let i=0;for(let s=e.minor;s<=n.minor&&!(i++>1e3);s++)try{let u=[];u=await t.getArchiveById(e.major,s);let d={major:e.major,minor:s,crc:0,name:null,subindexcount:u.length,subindices:u.map(l=>l.fileid),subnames:u.map(l=>l.fileid),version:0};for(let l of u)l.fileid>=e.subid&&l.fileid<=n.subid&&r.push({index:d,subindex:l.fileid})}catch{}}else{let i=await t.getCacheIndex(e.major);for(let s of i)if(s&&s.minor>=e.minor&&s.minor<=n.minor)for(let u=0;u<s.subindices.length;u++){let d=s.subindices[u];s.minor==e.minor&&d<e.subid||s.minor==n.minor&&d>n.subid||r.push({index:s,subindex:u})}}return r}const $e={prepareDump(){},prepareWrite(){},write(t){throw new Error("write not supported")},combineSubs(t){throw new Error("batch output mode not supported")}};function ii(t){return{major:C.mapsquares,minor:void 0,logicalDimensions:2,usesArchieves:!1,fileToLogical(e,n,r,i){return[255,r]},logicalToFile(e,n){throw new Error("not implemented")},async logicalRangeToFiles(e,n,r){let i=await e.getCacheIndex(C.mapsquares),s=[];for(let u=n[0];u<=Math.min(r[0],100);u++)for(let d=n[1];d<=Math.min(r[1],200);d++){let l=ct(`${t}${u}_${d}`,e.getBuildNr()<=Ze),x=i.find(p=>p.name==l);x&&s.push({index:x,subindex:0})}return s}}}function lr(t){const e=C.mapsquares,n=128;return{major:e,minor:void 0,logicalDimensions:2,usesArchieves:!0,fileToLogical(r,i,s,u){return[s%n,Math.floor(s/n)]},logicalToFile(r,i){return{major:e,minor:i[0]+i[1]*n,subid:t}},async logicalRangeToFiles(r,i,s){let u=await r.getCacheIndex(e),d=[];for(let l of u){if(!l)continue;let x=l.minor%n,p=Math.floor(l.minor/n);if(x>=i[0]&&x<=s[0]&&p>=i[1]&&p<=s[1])for(let m=0;m<l.subindices.length;m++)l.subindices[m]==t&&d.push({index:l,subindex:m})}return d}}}function Ae(t,e){return{major:t,minor:e,logicalDimensions:1,usesArchieves:!0,fileToLogical(n,r,i,s){return[s]},logicalToFile(n,r){return{major:t,minor:e,subid:r[0]}},async logicalRangeToFiles(n,r,i){return ir(n,{major:t,minor:e,subid:r[0]},{major:t,minor:e,subid:i[0]})}}}function rt(t){return{major:t,minor:void 0,logicalDimensions:1,usesArchieves:!0,fileToLogical(e,n,r,i){return[Zs(n,r,i)]},logicalToFile(e,n){return dr(t,n[0],e.getBuildNr())},async logicalRangeToFiles(e,n,r){let i=dr(t,n[0],e.getBuildNr()),s=dr(t,r[0],e.getBuildNr());return ir(e,i,s)}}}function Ki(){return{major:void 0,minor:void 0,logicalDimensions:3,usesArchieves:!0,fileToLogical(t,e,n,r){return[e,n,r]},logicalToFile(t,e){return{major:e[0],minor:e[1],subid:e[2]}},async logicalRangeToFiles(t,e,n){if(e[0]!=n[0])throw new Error("can only do one major at a time");let r=e[0];return ir(t,{major:r,minor:e[1],subid:e[2]},{major:r,minor:n[1],subid:n[2]})}}}function je(t){return{major:t,minor:void 0,logicalDimensions:1,usesArchieves:!1,fileToLogical(e,n,r,i){if(i!=0)throw new Error("nonzero subfile in noarch index");return[r]},logicalToFile(e,n){return{major:t,minor:n[0],subid:0}},async logicalRangeToFiles(e,n,r){return ir(e,{major:t,minor:n[0],subid:0},{major:t,minor:r[0],subid:0})}}}function $t(t){return{major:t,minor:void 0,logicalDimensions:2,usesArchieves:!0,fileToLogical(e,n,r,i){return[r,i]},logicalToFile(e,n){return{major:t,minor:n[0],subid:n[1]}},async logicalRangeToFiles(e,n,r){return ir(e,{major:t,minor:n[0],subid:n[1]},{major:t,minor:r[0],subid:r[1]})}}}function ai(t,e){return{...t,async logicalRangeToFiles(n,r,i){return(await t.logicalRangeToFiles(n,r,i)).filter(u=>!e.some(d=>d.major==u.index.major&&d.minor==u.index.minor))}}}function dl(){return{major:C.index,minor:void 0,logicalDimensions:1,usesArchieves:!1,fileToLogical(t,e,n,r){return[n]},logicalToFile(t,e){return{major:C.index,minor:e[0],subid:0}},async logicalRangeToFiles(t,e,n){return(await t.getCacheIndex(C.index)).filter(i=>i&&i.minor>=e[0]&&i.minor<=n[0]).map(i=>({index:i,subindex:0}))}}}function hl(){return{major:C.index,minor:255,logicalDimensions:0,usesArchieves:!1,fileToLogical(t,e,n,r){return[]},logicalToFile(t,e){return{major:C.index,minor:255,subid:0}},async logicalRangeToFiles(t,e,n){return[{index:{major:255,minor:255,crc:0,size:0,version:0,name:null,subindexcount:1,subindices:[0],subnames:null},subindex:0}]}}}function pl(t,e,n,r){let i=s=>{let u="",d="";return{...e,ext:"json",parser:t,async prepareDump(l,x){await r?.(x),await n?.(x);let p=Object.entries(Pl).find(f=>f[1]==i);if(!p)throw new Error;let m=t.parser.getJsonSchema();if(s.batched=="true"){let f={type:"object",properties:{files:{type:"array",items:m}}},g=`.schema-${p[0]}_batch.json`;l.writeFile(g,hr(f)),d=g}else{let f=`.schema-${p[0]}.json`;l.writeFile(f,hr(m)),u=f}},prepareWrite(l){return r?.(l)},read(l,x,p){let m=t.read(l,p,{keepbuffers:s.keepbuffers});return s.batched?m.$fileid=x.length==1?x[0]:x:m.$schema=u,hr(m)},write(l,x,p){return t.write(JSON.parse(l.toString("utf8")),p.getDecodeArgs())},combineSubs(l){return`{"$schema":"${d}","files":[

${l.join(`
,

`)}]}`},description:"View the JSON representation of a file",flagtemplate:{keepbuffers:{text:"Keep binary buffers (can be very large)",type:"boolean"}}}};return i}const ml=()=>({...Ki(),ext:"bin",prepareDump(){},prepareWrite(){},read(t){return t},write(t){return t},combineSubs(t){return Buffer.concat(t)},description:"Outputs the raw files as they are in the cache"}),gl=()=>({ext:"ogg",major:C.music,minor:void 0,logicalDimensions:1,usesArchieves:!1,fileToLogical(t,e,n,r){return[n]},logicalToFile(t,e){return{major:C.music,minor:e[0],subid:0}},async logicalRangeToFiles(t,e,n){let r=await t.getFileById(C.enums,1351),i=z.enums.read(r,t),s=await t.getCacheIndex(C.music);return i.intArrayValue2.values.filter(u=>u[1]>=e[0]&&u[1]<=n[0]).sort((u,d)=>u[1]-d[1]).filter((u,d,l)=>d==0||l[d-1][1]!=u[1]).map(u=>({index:s[u[1]],subindex:0}))},...$e,read(t,e,n){return ln(n,C.music,e[0],t,!0)},description:"Stitches child music fragments onto header fragments, only a small number of music fragments are header fragments, ids that lead to child fragments are ignored."}),si=(t,e)=>()=>({ext:"ogg",...je(t),...$e,read(n,r,i){return ln(i,t,r[0],n,e)},description:"Extracts sound files from cache"}),vl=()=>({ext:"html",...je(C.cutscenes),...$e,async read(t,e,n){return(await Co(n,t)).doc},description:"Decodes and assembles 2d vector cutscenes (first added in 2023). These cutscenes are saved in cache without image compression so take a while to decode. Sounds effects might be missing if you use a local game cache since the game normally only downloads them on demand."}),xl=()=>({ext:"html",major:C.interfaces,minor:void 0,logicalDimensions:1,usesArchieves:!0,fileToLogical(t,e,n,r){if(r!=0)throw new Error("subfile 0 expected");return[n]},logicalToFile(t,e){return{major:C.interfaces,minor:e[0],subid:0}},async logicalRangeToFiles(t,e,n){return(await t.getCacheIndex(C.interfaces)).filter(i=>i&&i.minor>=e[0]&&i.minor<=n[0]).map(i=>({index:i,subindex:0}))},...$e,async read(t,e,n){return await ll(new il(n),e[0])},description:"Extracts an interface and converts the template to a html file. Model and scripts will be missing and therefore the result might be incomplete."}),yl=()=>({ext:"ui.json",major:C.interfaces,minor:void 0,logicalDimensions:1,usesArchieves:!0,fileToLogical(t,e,n,r){if(r!=0)throw new Error("subfile 0 expected");return[n]},logicalToFile(t,e){return{major:C.interfaces,minor:e[0],subid:0}},async logicalRangeToFiles(t,e,n){return(await t.getCacheIndex(C.interfaces)).filter(i=>i&&i.minor>=e[0]&&i.minor<=n[0]).map(i=>({index:i,subindex:0}))},...$e,async read(t,e,n){return JSON.stringify({id:e[0]})},description:"Doesn't extract anything but invokes the built-in RSMV interface viewer."}),bl=()=>({ext:"font.json",major:C.fontmetrics,minor:void 0,logicalDimensions:1,usesArchieves:!1,fileToLogical(t,e,n,r){if(r!=0)throw new Error("subfile 0 expected");return[n]},logicalToFile(t,e){return{major:C.fontmetrics,minor:e[0],subid:0}},async logicalRangeToFiles(t,e,n){return(await t.getCacheIndex(C.fontmetrics)).filter(i=>i&&i.minor>=e[0]&&i.minor<=n[0]).map(i=>({index:i,subindex:0}))},...$e,async read(t,e,n){return JSON.stringify(await Wi(n,t,e[0]))},description:"Opens the built-in font viewer. Does not support newer vector fonts"}),wl=t=>({ext:"ts",...je(C.clientscript),...$e,async prepareDump(e,n){let r=await Tr(n);e.writeFile("tsconfig.json",JSON.stringify({compilerOptions:{lib:[],target:"ESNext"}},void 0,"	")),e.writeFile("opcodes.d.ts",_a(r)),e.writeFile("clientvars.d.ts",Sa(r))},read(e,n,r){return wa(r,e,n[0],t.cs2relativecomps=="true",t.cs2notypes=="true",t.cs2intcasts=="true")},async write(e,n,r){let i=await ba(r,e.toString("utf8"));return z.clientscript.write(i,r.getDecodeArgs())},description:"Extracts clientscript VM code (cs2) and converts it to something that is typescript-compatible.",flagtemplate:{cs2relativecomps:{text:"Hide subcomponent ids (can't be compiled, but offers stable diffing)",type:"boolean"},cs2notypes:{text:"Don't output TS types (can't be compiled)",type:"boolean"},cs2intcasts:{text:"Explicit JS int32 casts during math (can't be compiled)",type:"boolean"}}}),_l=()=>({ext:"cs2.json",...je(C.clientscript),...$e,async prepareDump(t,e){await Tr(e)},read(t,e,n){return JSON.stringify(z.clientscript.read(t,n))},description:"Basic implementation of the clientscript VM (cs2). Can be used to debug programs and step through code."}),Sl=()=>({ext:"png",...Ae(C.texturesOldPng,0),...$e,async read(t,e,n){let r=z.oldproctexture.read(t,n),i=await n.getFileById(C.sprites,r.spriteid),s=gt(i);if(s.length!=1)throw new Error("exactly one subsprite expected");return kr(s[0].img,"png",1)},description:"Procedural textures are highly compressed textures used in early rshd."}),oi=t=>()=>({ext:"png",...Ae(Ke.data,t),...$e,async read(e,n,r){let i=await r.findSubfileByName(Ke.data,t,"INDEX.DAT"),s=on(i.buffer,e);return kr(s.img,"png",1)},description:"Textures from the 'legacy' era, very early rs2"}),El=t=>()=>({ext:"png",...je(t),...$e,read(e,n){return kr(gt(e)[0].img,"png",1)},description:"Sprites are all images that are used in ui. The client stores sprites are uncompressed bitmaps. Currently only the first frame for multi-frame sprites is extracted."}),it=t=>()=>({ext:"png",...je(t),prepareDump(){},prepareWrite(){},read(e,n){return new Ri(e,!1,!0).toImageData().then(i=>kr(i,"png",1))},write(e){throw new Error("write not supported")},combineSubs(e){if(e.length!=1)throw new Error("texture batching not supported");return e[0]},description:"Textures are images that are wrapped around models to display colors are fine details."}),Dl=()=>({ext:"json",...je(C.sprites),...$e,async read(t,e){let n=gt(t),r="";for(let[i,s]of n.entries()){let u=yr(s.img);r+=(r==""?"":",")+`{"id":${e[0]},"sub":${i},"hash":${u}}`}return r},combineSubs(t){return"["+t.join(`,
`)+"]"},description:"Used to efficiently compare images."}),Al=()=>({ext:"json",...je(C.fontmetrics),...$e,async read(t,e,n){return JSON.stringify(await Wi(n,t,e[0]))},combineSubs(t){return"["+t.join(`,
`)+"]"},description:"Used to efficiently compare fonts."}),Cl=()=>({ext:"json",...je(C.models),...$e,read(t,e,n){return"{}"},combineSubs(t){return"["+t.filter(e=>e).join(`,
`)+"]"},description:"Used to efficiently compare models."}),Yi=Gt()({framemaps:{parser:z.framemaps,lookup:rt(C.framemaps)},items:{parser:z.item,lookup:rt(C.items)},enums:{parser:z.enums,lookup:rt(C.enums)},npcs:{parser:z.npc,lookup:rt(C.npcs)},soundjson:{parser:z.audio,lookup:ai($t(C.sounds),[{major:C.sounds,minor:0}])},musicjson:{parser:z.audio,lookup:ai($t(C.music),[{major:C.music,minor:0}])},objects:{parser:z.object,lookup:rt(C.objects)},achievements:{parser:z.achievement,lookup:rt(C.achievements)},structs:{parser:z.structs,lookup:rt(C.structs)},sequences:{parser:z.sequences,lookup:rt(C.sequences)},spotanims:{parser:z.spotAnims,lookup:rt(C.spotanims)},materials:{parser:z.materials,lookup:rt(C.materials)},oldmaterials:{parser:z.oldmaterials,lookup:Ae(C.materials,0)},quickchatcats:{parser:z.quickchatCategories,lookup:Ae(C.quickchat,0)},quickchatlines:{parser:z.quickchatLines,lookup:Ae(C.quickchat,1)},dbtables:{parser:z.dbtables,lookup:Ae(C.config,Ce.dbtables)},dbrows:{parser:z.dbrows,lookup:Ae(C.config,Ce.dbrows)},overlays:{parser:z.mapsquareOverlays,lookup:Ae(C.config,Ce.mapoverlays)},identitykit:{parser:z.identitykit,lookup:Ae(C.config,Ce.identityKit)},params:{parser:z.params,lookup:Ae(C.config,Ce.params)},underlays:{parser:z.mapsquareUnderlays,lookup:Ae(C.config,Ce.mapunderlays)},mapscenes:{parser:z.mapscenes,lookup:Ae(C.config,Ce.mapscenes)},environments:{parser:z.environments,lookup:Ae(C.config,Ce.environments)},animgroupconfigs:{parser:z.animgroupConfigs,lookup:Ae(C.config,Ce.animgroups)},maplabels:{parser:z.maplabels,lookup:Ae(C.config,Ce.maplabels)},mapzones:{parser:z.mapZones,lookup:Ae(C.worldmap,0)},cutscenes:{parser:z.cutscenes,lookup:je(C.cutscenes)},particles0:{parser:z.particles_0,lookup:Ae(C.particles,0)},particles1:{parser:z.particles_1,lookup:Ae(C.particles,1)},maptiles:{parser:z.mapsquareTiles,lookup:lr(_t.squares)},maptiles_nxt:{parser:z.mapsquareTilesNxt,lookup:lr(_t.square_nxt)},maplocations:{parser:z.mapsquareLocations,lookup:lr(_t.locations)},mapenvs:{parser:z.mapsquareEnvironment,lookup:lr(_t.env)},maptiles_old:{parser:z.mapsquareTiles,lookup:ii("m")},maplocations_old:{parser:z.mapsquareLocations,lookup:ii("l")},frames:{parser:z.frames,lookup:$t(C.frames)},models:{parser:z.models,lookup:je(C.models)},oldmodels:{parser:z.oldmodels,lookup:je(C.oldmodels)},skeletons:{parser:z.skeletalAnim,lookup:je(C.skeletalAnims)},proctextures:{parser:z.proctexture,lookup:je(C.texturesOldPng)},oldproctextures:{parser:z.oldproctexture,lookup:Ae(C.texturesOldPng,0)},interfaces:{parser:z.interfaces,lookup:$t(C.interfaces)},fontmetrics:{parser:z.fontmetrics,lookup:$t(C.fontmetrics)},classicmodels:{parser:z.classicmodels,lookup:Ae(0,st.models)},indices:{parser:z.cacheIndex,lookup:dl()},rootindex:{parser:z.rootCacheIndex,lookup:hl()},test:{parser:te.fromJson(`["struct",
  
]`),lookup:Ki()},clientscriptops:{parser:z.clientscript,lookup:je(C.clientscript),prepareParser:t=>Tr(t).then(()=>{})}}),Tl=function(){return{...rt(C.npcs),ext:"json",prepareDump(t){},prepareWrite(){},read(t,e,n){let r=z.npc.read(t,n);return hr({id:e[0],size:r.boundSize??1,name:r.name??"",models:r.models??[]})},write(t){throw new Error("")},combineSubs(t){return`[${t.join(`,
`)}]`},description:"Extract model metadata from npc configs."}},Fl=Gt()({sprites:El(C.sprites),textures_dds:it(C.texturesDds),textures_png:it(C.texturesPng),textures_bmp:it(C.texturesBmp),textures_ktx:it(C.texturesKtx)}),kl=Gt()({legacy_sprites:oi(mt.sprites),legacy_textures:oi(mt.textures),textures_proc:Sl,textures_oldpng:it(C.texturesOldPng),textures_2015png:it(C.textures2015Png),textures_2015dds:it(C.textures2015Dds),textures_2015pngmips:it(C.textures2015PngMips),textures_2015compoundpng:it(C.textures2015CompoundPng),textures_2015compounddds:it(C.textures2015CompoundDds),textures_2015compoundpngmips:it(C.textures2015CompoundPngMips)}),Il=Gt()({sounds:si(C.sounds,!0),musicfragments:si(C.music,!1),music:gl}),Bl=Gt()({cutscenehtml:vl,interfacehtml:xl,interfaceviewer:yl,fontviewer:bl,clientscript:wl,clientscriptviewer:_l}),Ml=Gt()({bin:ml,spritehash:Dl,fonthash:Al,modelhash:Cl,npcmodels:Tl}),Nl=Object.fromEntries(Object.entries(Yi).map(([t,e])=>[t,pl(e.parser,e.lookup,e.prepareDump,e.prepareParser)])),Ll={image:Fl,legacyImage:kl,interactive:Bl,sound:Il,other:Ml,json:Nl},Pl=Object.fromEntries(Object.values(Ll).flatMap(t=>Object.entries(t))),he=48,ue=he*he,It=1e6,mr=2e6;function Jt(t){const e=he-1;let n=e-(t/he|0),r=e-t%he;return{rs2index:n*he+r,x:n,z:r}}function li(t,e){return(he-1-t)*he+(he-1-e)}async function Zi(t,e,n){let r=n>=100,i=0;const s=t.classicData;let u=100-e,d=100-(r?n-100:n),l=`${u.toString().padStart(2,"0")}${d.toString().padStart(2,"0")}`,x=[],p=r?1:3;for(let g=0;g<p;g++){let h=r?3:g,a=t.getBuildNr()<=115?void 0:await t.findSubfileByName(0,st.land,`m${h}${l}.hei`),o=await t.findSubfileByName(0,st.maps,`m${h}${l}.jm`);if(!a&&!o&&g==0)return null;x.push({sourcelevel:h,hei:a?.buffer,jm:o?.buffer,loc:void 0,dat:void 0})}let m=new Rl(s,p);for(let g=0;g<p;g++){let h=x[g];if(!h.jm){let a=await t.findSubfileByName(0,st.maps,`M${h.sourcelevel}${l}.DAT`),o=await t.findSubfileByName(0,st.maps,`M${h.sourcelevel}${l}.LOC`);h.dat=a?.buffer,h.loc=o?.buffer}}for(let g=0;g<p;g++){let h=x[g];h.jm?(m.loadJmFile(h.jm,g),i=Re(h.jm,i)):h.hei&&(m.loadHeiFile(h.hei,g),i=Re(h.hei,i))}for(let g=0;g<p;g++){let h=x[g];if(!h.jm)if(h.dat&&(m.loadDatfile(h.dat,g),i=Re(h.dat,i)),h.loc)m.loadLocFile(h.loc,g),i=Re(h.loc,i);else{let a=Gl(s,u,d,h.sourcelevel);i=Re(Buffer.from(a.buffer),i),m.addLocBuffer(a,g)}}return{rect:{x:e*he,z:n*he,xsize:he,zsize:he},mapfilehash:i,tiles:m.convertTiles(),locs:m.locs,levels:p}}class Rl{levels;tiles;locs=[];config;constructor(e,n){this.config=e,this.levels=n,this.tiles=new Array(ue*n).fill(null).map((r,i)=>({height:i>ue?96:0,hasbridge:!1,overlayobj:null,overlay:0,underlay:0,locrotation:0}))}getTile(e,n,r){if(!(n<0||r<0||n>=he||r>=he)&&!(e<0||e>=this.levels))return this.tiles[e*ue+n*he+r]}getTileClassic(e,n){const r=he-1;let i=r-(n/he|0),s=r-n%he;return this.getTile(e,i,s)}placeLoc(e,n,r,i,s,u,d=null){(this.getTile(i+1,s,u)?.overlayobj?.type.bridge||n==0&&(r==2?this.getTile(i+1,s+1,u):this.getTile(i+1,s,u+1))?.overlayobj?.type.bridge)&&i++,this.locs.push({id:e,uses:[{x:s,y:u,plane:i,rotation:r,type:n,extra:d}]})}convertTiles(){return this.tiles.map((e,n)=>{let r=Math.floor(n/ue),i=this.tiles[n-ue];return{height:e.hasbridge?r==1&&i.hasbridge?i.height/4:0:e.height/4,flags:0,settings:r==1&&e.hasbridge?2:0,overlay:e.overlay,underlay:e.underlay,shape:e.overlay?0:null}})}loadJmFile(e,n){let r=new He(e),i=0,s=Buffer.alloc(ue);for(let o=0;o<ue;o++)i+=r.readUByte(),s[o]=i&255;let u=0,d=Buffer.alloc(ue);for(let o=0;o<ue;o++)u+=r.readUByte(),d[o]=u&255;let l=r.readBuffer(ue),x=r.readBuffer(ue),p=Buffer.alloc(ue),m=Buffer.alloc(ue),f=new Uint32Array(ue);for(let o=0;o<ue;o++){let c=r.readUShort(!0);if(c!=0){let v=c/12e3|0,y=c%12e3,b=Jt(o);v==0?p[o]=y:v==1?m[o]=y:v==2||v==3||(v==4?f[o]=y:console.log(b.x,b.z,o," type"+(c/12e3|0),c%12e3))}}let g=r.readBuffer(ue),h=r.readBuffer(ue),a=r.readBuffer(ue);if(!r.eof())throw new Error("didn't end reading map.jm at end of file");n==0&&this.addFloorBuffers(s,d,n,!1),this.addWallBuffers(l,x,p,m,g,h,a,n),this.addLocBuffer(f,n)}loadHeiFile(e,n){let r=new He(e),i=0,s=Buffer.alloc(ue),u=Buffer.alloc(ue);for(let d=0;d<ue;){let l=r.readUByte();if(l<128&&(s[d++]=l&255,i=l),l>=128)for(let x=0;x<l-128;x++)s[d++]=i&255}for(let d=0;d<ue;){let l=r.readUByte();if(l<128&&(u[d++]=l&255,i=l),l>=128)for(let x=0;x<l-128;x++)u[d++]=i&255}if(!r.eof())throw new Error("unexpected height file length");this.addFloorBuffers(s,u,n,!0)}addDatfile(e,n){}loadDatfile(e,n){let r=new He(e),i=r.readBuffer(ue),s=r.readBuffer(ue),u=r.readBuffer(ue),d=r.readBuffer(ue),l=Buffer.alloc(ue);for(let f=0;f<ue;){let g=r.readUByte();g<128?(l[f]=g,f++):f+=g-128}let x=Buffer.alloc(ue),p=0;for(let f=0;f<ue;){let g=r.readUByte(),h=1;g<128?p=g:h=g-128;for(let a=0;a<h;a++)x[f]=p,f++}let m=Buffer.alloc(ue);for(let f=0;f<ue;){let g=r.readUByte();g<128?(m[f]=g,f++):f+=g-128}if(!r.eof())throw new Error("didn't end reading map.dat at end of file");this.addWallBuffers(i,s,u,d,l,x,m,n)}addFloorBuffers(e,n,r,i){let s=64,u=35;for(let d=0;d<he;d++)for(let l=0;l<he;l++){let x=l*he+d,p=e[x],m=n[x];i&&(s=p+(s&127),p=s*2&255,u=n[x]+u&127,m=u*2&255);let f=this.getTileClassic(r,x);f&&(f.height=p,f.underlay=m+1)}}addWallBuffers(e,n,r,i,s,u,d,l){let x=(h,a,o)=>{let c=this.getTile(h,a,o),v=this.getTile(h,a-1,o),y=this.getTile(h,a,o-1),b=this.getTile(h,a-1,o-1);c&&(c.hasbridge=!0),v&&(v.hasbridge=!0),y&&(y.hasbridge=!0),b&&(b.hasbridge=!0)},p=(h,a,o,c,v)=>{let y=this.getTile(h,a,o);if(y&&y.overlay!=v&&y.overlay!=c){let b=this.getTile(h+1,a,o);b&&(b.overlay=c,b.overlayobj=this.config.tiles[c-1]),x(h+1,a,o)}};for(let h=0;h<ue;h++){let a=u[h],o=this.getTileClassic(l,h);if(o&&a!=0){let c=this.config.tiles[a-1];o.overlay=a,o.overlayobj=c}}for(let h=0;h<ue;h++){let a=this.getTileClassic(0,h);if(a?.overlayobj?.type.bridge){let o=a.overlay==12?11:2,c=Jt(h),v=this.getTile(l+1,c.x,c.z);a.hasbridge=!0,x(l,c.x,c.z),x(l+1,c.x,c.z),p(l,c.x+1,c.z,a.overlay,o),p(l,c.x-1,c.z,a.overlay,o),p(l,c.x,c.z+1,a.overlay,o),p(l,c.x,c.z-1,a.overlay,o),v&&(v.height=a.height,v.overlay=a.overlay,v.overlayobj=a.overlayobj);let y=this.config.tiles[o-1];a.overlay=o,a.overlayobj=y}}let m=h=>({flags:0,rotation:null,scale:null,scaleX:null,scaleY:this.config.wallobjects[h-1].height,scaleZ:null,translateX:null,translateY:null,translateZ:null});for(let h=0;h<ue;h++){let a=e[h],o=n[h],c=r[h],v=i[h],y=Jt(h);a&&this.placeLoc(It+(a-1),0,2,l,y.x,y.z,m(a)),o&&this.placeLoc(It+(o-1),0,1,l,y.x,y.z,m(o)),c&&this.placeLoc(It+(c-1),9,0,l,y.x,y.z,m(c)),v&&this.placeLoc(It+(v-1),9,1,l,y.x,y.z,m(v))}let f=(h,a)=>{if(h<0||h>=he||a<0||a>=he)return"none";let o=li(h,a);return s[o]==0?"none":r[o]!=0||i[o]!=0?"diagedge":"full"},g=(h,a)=>{let o=[f(h+1,a),f(h+1,a-1),f(h,a-1),f(h-1,a-1),f(h-1,a),f(h-1,a+1),f(h,a+1),f(h+1,a+1)],c=f(h,a);if(o.every((v,y)=>y%2==0?v=="full":v!="none"))return{type:17,rot:0};for(let v=0;v<4;v++){let y=o[(v*2+0)%8],b=o[(v*2+2)%8],w=o[(v*2+4)%8],_=o[(v*2+6)%8],E=o[(v*2+1)%8],S=o[(v*2+3)%8],A=o[(v*2+5)%8];if(y=="none"&&b=="none"&&_!="none"&&w!="none"&&A!="none")return{type:c=="diagedge"?13:16,rot:v};if(y=="none"&&b!="none"&&_!="none"&&w!="none")return S=="none"?{type:16,rot:v}:A=="none"?{type:16,rot:(v+3)%4}:{type:12,rot:v};if(y!="none"&&b!="none"&&_=="full"&&w=="full"&&E=="none")return{type:14,rot:v};if(y!="none"&&b!="none"&&_!="none"&&w!="none"&&E=="none"&&A=="none")return{type:15,rot:v}}return{type:10,rot:0}};for(let h=0;h<s.length;h++){let a=s[h];if(a!=0){let o=Jt(h),c=g(o.x,o.z);this.placeLoc(mr+a-1,c.type,c.rot,l,o.x,o.z)}}for(let h=0;h<ue;h++){let a=this.getTileClassic(l,h);a&&(a.locrotation=d[h])}}loadLocFile(e,n){let r=new He(e),i=new Uint32Array(ue);for(let s=0;s<ue;){let u=r.readUByte();u<128?i[s++]=u:s+=u-128}if(!r.eof())throw new Error("didn't end reading map.loc at end of file");this.addLocBuffer(i,n)}addLocBuffer(e,n){for(let r=0;r<ue;r++){let i=e[r];if(i){let s=Jt(r),u=this.config.objects[i-1];if(!u){console.warn(`loc for ${i-1} is missing`);continue}let d=!1;for(let l=0;l<u.xsize;l++)for(let x=0;x<u.zsize;x++){if(l==0&&x==0||s.x+l>=he||s.z+x>=he)continue;let p=li(s.x+l,s.z+x);e[p]==i&&(d=!0)}if(!d){let l=this.getTileClassic(n,r);if(l){let x=(4+l.locrotation)%8,p=x%2==0?10:11,m=s.x,f=s.z;x%4!=0?(m-=u.zsize-1,f-=u.xsize-1):(m-=u.xsize-1,f-=u.zsize-1),this.placeLoc(i-1,p,Math.floor(x/2),n,m,f)}}}}}}function Qi(t){for(let n=0;n<t.levels;n++)for(let r=t.zsize-1;r>=1;r--)for(let i=t.xsize-1;i>=1;i--){let s=t.getTile(t.xoffset+i,t.zoffset+r,n),u=t.getTile(t.xoffset+i-1,t.zoffset+r-1,n);!s||!u||(s.y=u.y,s.underlayprops=u.underlayprops,s.effectiveLevel=n,s.effectiveVisualLevel=n)}let e=n=>n?.debug_raw?.overlay?t.engine.classicData.tiles[n.debug_raw?.overlay-1]:void 0;for(let n=0;n<t.levels;n++)for(let r=t.zsize-1;r>=1;r--)for(let i=t.xsize-1;i>=1;i--){let s=t.getTile(t.xoffset+i,t.zoffset+r,n),u=e(s);if(s&&(u?.type.autoconnect||u?.type.indoors)){u.blocked&&(s.rawCollision&&(s.rawCollision.walk[0]=!0),s.effectiveCollision&&(s.effectiveCollision.walk[0]=!0));let d=e(t.getTile(t.xoffset+i,t.zoffset+r+1,n)),l=e(t.getTile(t.xoffset+i-1,t.zoffset+r,n)),x=e(t.getTile(t.xoffset+i+1,t.zoffset+r,n)),p=e(t.getTile(t.xoffset+i,t.zoffset+r-1,n)),m=u.type.indoors?d?.type.indoors:d?.type.autoconnect,f=u.type.indoors?l?.type.indoors:l?.type.autoconnect,g=u.type.indoors?x?.type.indoors:x?.type.autoconnect,h=u.type.indoors?p?.type.indoors:p?.type.autoconnect;m&&f&&!h&&!g&&(s.shape=at[5]),m&&!f&&!h&&g&&(s.shape=at[6]),!m&&!f&&h&&g&&(s.shape=at[7]),!m&&f&&h&&!g&&(s.shape=at[4])}}}function xn(t){let e=0,n=!1,r=[255,255,255];if(t>99999999&&(t=99999999-t),t==12345678)n=!0;else if(t<0){let i=-t-1,s=i>>10&31,u=i>>5&31,d=i>>0&31;r=[s,u,d]}else e=t+1;return{color:r,colorint:Ws(...Js(...r)),material:e,invisible:n}}function ea(t,e){const n=t.classicData;let r={};if(e>=mr){let i=n.roofs[e-mr];r={name:`roof_${e-mr}`,models:[{type:10,values:[Te.classicRoof10]},{type:12,values:[Te.classicRoof12]},{type:13,values:[Te.classicRoof13]},{type:14,values:[Te.classicRoof14]},{type:15,values:[Te.classicRoof15]},{type:16,values:[Te.classicRoof16]},{type:17,values:[Te.classicRoof17]}],...Yr(i.texture)}}else if(e>=It){let i=n.wallobjects[e-It];r={name:i.name,probably_morphFloor:!0,models:[{type:0,values:[Te.classicWall]},{type:9,values:[Te.classicWallDiag]}],...Yr(i.frontdecor,i.backdecor)}}else{let i=n.objects[e];i.model.id==null&&console.warn(`model for ${i.name} is missing`),r={name:i.name,width:i.xsize,length:i.zsize,models:[{type:10,values:i.model.id==null?[]:[i.model.id]}]}}return r}function Yr(...t){let e={color_replacements:[],material_replacements:[]};for(let[n,r]of t.entries()){let i=xn(r);e.color_replacements.push([n,i.colorint]),e.material_replacements.push([n,i.material]),i.invisible&&(e.models=null)}return e}async function Ol(t){let e=t.classicData,r=!await t.findSubfileByName(0,st.textures,"INDEX.DAT");return Promise.all(e.tiles.map(async i=>{let s=xn(i.decor),u=s.color;if(s.material){let d=e.textures[s.material-1],l=await Ui(t,d.name,d.subname,r),x=0,p=0,m=0;for(let g=0;g<l.img.data.length;g+=4)x+=l.img.data[g+0],p+=l.img.data[g+1],m+=l.img.data[g+2];let f=l.img.width*l.img.height;u=[x/f|0,p/f|0,m/f|0]}return{color:i.type.type==5?[255,0,255]:u,material:s.material}}))}function Ul(){let t=[];for(let e=0;e<64;e+=1){const n=255-e*4,r=255-(e*1.75|0),i=255-e*4;t.push({color:[n,r,i]})}for(let e=0;e<64;e+=1){const n=e*3;t.push({color:[n,144,0]})}for(let e=0;e<64;e+=1){const n=192-(e*1.5|0),r=144-(e*1.5|0);t.push({color:[n,r,0]})}for(let e=0;e<64;e++){const n=96-(e*1.5|0),r=48+(e*1.5|0);t.push({color:[n,r,0]})}return t.forEach(e=>{e.color[0]/=2,e.color[1]/=2,e.color[2]/=2}),t}function Gl(t,e,n,r){let i=e*he,s=n*he,u=i+he,d=s+he,l=new Uint32Array(ue),x=t.jsonlocs.filter(p=>p.level==r&&p.x>=i&&p.x<u&&p.z>=s&&p.z<d);for(let p of x){let m=p.x-i,f=p.z-s;l[m*he+f]=p.id+1}return l}const zl=Object.freeze(Object.defineProperty({__proto__:null,classicDecodeMaterialInt:xn,classicIntsToModelMods:Yr,classicModifyTileGrid:Qi,classicOverlays:Ol,classicUnderlays:Ul,getClassicLoc:ea,getClassicMapData:Zi},Symbol.toStringTag,{value:"Module"}));let Nt={uModelMatrix:"#define uModelMatrix modelMatrix",uViewProjMatrix:"#define uViewProjMatrix (projectionMatrix*viewMatrix)",uViewMatrix:"#define uViewMatrix viewMatrix",uProjectionMatrix:"#define uProjectionMatrix projectionMatrix",uCameraPosition:"#define uCameraPosition cameraPosition",aWaterPosition_Depth:"#define aWaterPosition_Depth vec4(position,10.0)",aVertexPosition:"#define aVertexPosition position",aVertexPosition_BoneLabel:"#define aVertexPosition_BoneLabel vec4(position,0.0)",aTextureUV:"#define aTextureUV uv",aVertexColour:"#define aVertexColour vec4(color.rgb,1.0)",aTextureWeight:["attribute vec3 color_1;","#define aTextureWeight vec4(color_1,1.0)"],aMaterialProperties:["attribute vec3 color_2;","#define aMaterialProperties vec4(256.0-color_2*256.0,0.0)"],aVertexNormal_FogProportion:"#define aVertexNormal_FogProportion vec4(normal,0.0)",gl_FragColor:""},br={UNIFORM_BUFFER_BEGIN:"#define UNIFORM_BUFFER_BEGIN(name)",UNIFORM_BUFFER_END:"#define UNIFORM_BUFFER_END",TEXTURE_GRAD:"",gl_FragColor:""},ui={UNIFORM_BUFFER_BEGIN:"#define UNIFORM_BUFFER_BEGIN(name)",UNIFORM_BUFFER_END:"#define UNIFORM_BUFFER_END",TEXTURE_GRAD:"",gl_FragColor:""};function Vl(t,e,n){let r=new Cr;r.uniforms={uAlphaTestThreshold:{value:[-1]},uAmbientColour:{value:[.6059895753860474,.5648590922355652,.5127604007720947]},uAtlasMeta:{value:[512,16,.0001220703125,4]},uCameraPosition:{value:[1638400,17248,1671168]},uDummy:{value:[1]},uFade:{value:[0]},uFullScreenLookupScale:{value:[0,5960465188081798e-23,1,0]},uInscatteringAmount:{value:[1,0,0]},uInvSunDirection:{value:[-.5391638875007629,.6469966173171997,-.5391638875007629]},uModelMatrix:{value:[1,0,0,0,0,1,0,0,0,0,1,0,1630208,0,1654784,1]},uOutscatteringAmount:{value:[1638400,17248,1671168]},uProjectionMatrix:{value:[152587890625e-16,0,0,0,0,-152587890625e-16,0,0,0,0,-6200397183420137e-20,0,0,0,-1.0317461490631104,1]},uScatteringParameters:{value:[0,-1,5960465188081798e-23,0]},uScatteringTintColour:{value:[0,5960465188081798e-23,1]},uSunColour:{value:[.8666666746139526,.8078431487083435,.7333333492279053]},uTextureAnimationTime:{value:[459.7019958496094]},uTextureAtlas:{value:[5]},uTextureAtlasSettings:{value:[6]},uTint:{value:[0,0,0,0]},uVertexScale:{value:[1]},uViewMatrix:{value:[1,0,0,0,0,5960465188081798e-23,1,0,0,-1,5960465188081798e-23,0,-1638400,1671168,-17248.099609375,1]},uViewProjMatrix:{value:[152587890625e-16,0,0,0,0,-9094948101931455e-28,-6200397183420137e-20,0,0,152587890625e-16,-3695725149521767e-27,0,-25,-25.5,.03770458698272705,1]},uViewportLookupScale:{value:[1638400,17248,1671168,0]},uViewportOffsetScale:{value:[1,0,0,0]},uZBufferParams:{value:[16777248,32256,-32768,-512.0009765625]}},r.vertexColors=!0;let i=require("./minimap-loc-vert.glsl.c");i=Rt(i),i=Lt(i,Nt),i=Pt(i,ui);let s=require("./minimap-loc-frag.glsl.c");return s=Rt(s),s=Lt(s,Nt),s=Pt(s,ui),s=s.replace(/#undef gl_FragColor/,"// $&"),s=s.replace(/void getTextureSettings\(/,`void getTextureSettings(vec2 s, out TextureSettings settings){
settings.textureMeta1 = vec3(0.0,0.0,8196.0);
settings.textureMeta2 = vec3(0.0,0.0,8196.0);
settings.uvAnim = vec2(0.0,0.0);
settings.wrapping = 0.0;
settings.specular = 0.0;
settings.normalScale = 0.0;
}
void getTextureSettingsOld(`),s=s.replace(/(?<!void )getTexel\(\w+,/gm,()=>"getTexel(vTextureUV,"),s=Xl(s,`
        void main(){
            super();
            //pre-multiply alpha
            // gl_FragColor.rgb *= gl_FragColor.a;
            // gl_FragColor.rgb = vec3( gl_FragColor.a);
            gl_FragColor.a=1.0;
            
        }
    `),r.vertexShader=i,r.fragmentShader=s,r.uniforms.uTextureAtlas={value:t},r.uniforms.uInvSunDirection.value[2]*=-1,r.uniforms.uAlphaTestThreshold={value:[n]},r.uniformsNeedUpdate=!0,e=="blend"&&(r.transparent=!0),t&&(t.colorSpace=vr),r}function jl(t){let e=new Cr;e.uniforms={uAmbientColour:{value:[.6059895753860474,.5648590922355652,.5127604007720947]},uAtlasMeta:{value:[512,16,.0001220703125,4]},uCameraPosition:{value:[1638400,17632,1769472]},uDummy:{value:[1]},uFade:{value:[0]},uFullScreenLookupScale:{value:[0,5960465188081798e-23,1,0]},uGridSize:{value:[512]},uInscatteringAmount:{value:[1,0,0]},uInvSunDirection:{value:[-.5391638875007629,.6469966173171997,-.5391638875007629]},uModelMatrix:{value:[1,0,0,0,0,1,0,0,0,0,1,0,1622015,100,1753087,1]},uOutscatteringAmount:{value:[1638400,17632,1769472]},uProjectionMatrix:{value:[152587890625e-16,0,0,0,0,-152587890625e-16,0,0,0,0,-6200397183420137e-20,0,0,0,-1.0317461490631104,1]},uScatteringParameters:{value:[0,-1,5960465188081798e-23,0]},uScatteringTintColour:{value:[0,5960465188081798e-23,1]},uSunColour:{value:[.8666666746139526,.8078431487083435,.7333333492279053]},uTextureAtlas:{value:[5]},uTextureAtlasSettings:{value:[6]},uViewMatrix:{value:[1,0,0,0,0,5960465188081798e-23,1,0,0,-1,5960465188081798e-23,0,-1638400,1769472,-17632.10546875,1]},uViewProjMatrix:{value:[152587890625e-16,0,0,0,0,-9094948101931455e-28,-6200397183420137e-20,0,0,152587890625e-16,-3695725149521767e-27,0,-25,-27,.06151437759399414,1]},uViewportLookupScale:{value:[1638400,17632,1769472,0]},uViewportOffsetScale:{value:[1,0,0,0]},uZBufferParams:{value:[16777248,32256,-32768,-512.0009765625]}},e.vertexColors=!0;let n=require("./minimap-floor-vert.glsl.c");n=Rt(n),n=Lt(n,Nt),n=Pt(n,br);let r=require("./minimap-floor-frag.glsl.c");r=Rt(r),r=Lt(r,Nt),r=Pt(r,br),r=r.replace(/#undef gl_FragColor/,"// $&"),r=r.replace(/void getTextureSettings\(/,`void getTextureSettings(vec2 s, out TextureSettings settings){
settings.textureMeta1 = vec3(0.0,0.0,8196.0);
settings.textureMeta2 = vec3(0.0,0.0,8196.0);
settings.uvAnim = vec2(0.0,0.0);
settings.wrapping = 0.0;
settings.specular = 0.0;
settings.normalScale = 0.0;
}
void getTextureSettingsOld(`);let i=0;return r=Mt(r,`in highp vec2 v_texcoord_0;
in highp vec2 v_texcoord_1;
in highp vec2 v_texcoord_2;`),n=Mt(n,`in highp vec2 texcoord_0;
in highp vec2 texcoord_1;
in highp vec2 texcoord_2;`),n=Mt(n,`out highp vec2 v_texcoord_0;
out highp vec2 v_texcoord_1;
out highp vec2 v_texcoord_2;`),n=ta(n,`v_texcoord_0=texcoord_0;
v_texcoord_1=texcoord_1;
v_texcoord_2=texcoord_2;
`),r=r.replace(/(?<!void )getTexel\(\w+,/gm,()=>`getTexel(v_texcoord_${i++%3},`),e.vertexShader=n,e.fragmentShader=r,e.uniforms.uTextureAtlas={value:t},e.uniforms.uInvSunDirection.value[2]*=-1,e.uniformsNeedUpdate=!0,e}function ql(t){let e=new Cr;e.customProgramCacheKey=()=>"water",e.uniforms={uAmbientColour:{value:[.6,.6,.6]},uCameraPosition:{value:[1671168,17344,1638400]},uDummy:{value:[0]},uFullScreenLookupScale:{value:[0,5960465188081798e-23,1,0]},uInvSunDirection:{value:[-.5,.8,-.5]},uModelMatrix:{value:[1,0,0,0,0,1,0,0,0,0,1,0,1654783,100,1622015,1]},uProjectionMatrix:{value:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]},uSunColour:{value:[1,.9,.8]},uViewMatrix:{value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},uViewProjMatrix:{value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},uViewportLookupScale:{value:[1,1,1,1]},uViewportOffsetScale:{value:[1,0,0,0]},uZBufferParams:{value:[16777248,32256,-32768,-512.0009765625]},uWaterFeatureFlags:{value:[1,1,1,1]},uWaterNormalMapTextureScales_FlowNoiseScale:{value:[1,1,1,.5]},uWaterTickFade:{value:[0,0]},uWaterNormalBRDFParams:{value:[.5,.5,.5,.5]},uWaterSpecularColour:{value:[1,1,1]},uWaterReflectionStrength:{value:1},uWaterReflectionMapContribution:{value:.5},uWaterExtinctionVisibilityMetres:{value:10},uWaterExtinctionOpaqueWaterColour:{value:[.1,.2,.3]},uWaterExtinctionRGBDepthMetres:{value:[5,10,20]},uWaterFoamScaleFoamDepth:{value:[1,1]},uWaterStillWaterNormalStrength_spareyzw:{value:[.5,0,0,0]},uSampleWeight_uvDistortion_sparezw:{value:[1,0,0,0,0,1,0,0,0,0,1,0]},uMacroSampleWeight_uvDistortion_sparezw:{value:[1,0,0,0,0,1,0,0,0,0,1,0]},uWaterNormalMapTexture0:{value:t},uWaterNormalMapTexture1:{value:t},uWaterNormalMapTexture2:{value:t},uWaterTextureFoam:{value:t},uReflectionMap:{value:t},uRefractionMap:{value:t},uRefractionDepth:{value:t}},e.defines={WATER_NORMAL_MAPS:1,WATER_FOAM_MAP:1,WATER_EXTINCTION:1,REFLECTION:1,REFRACTION:1,GLOBAL_ENVIRONMENTMAPPING:1,SUNLIGHT_DIRECT_LIGHTING:1,SPECULAR_LIGHTING:1},e.vertexColors=!0;let n=require("./minimap-water-vert.glsl.c");n=Rt(n),n=Lt(n,Nt),n=Pt(n,br);let r=require("./minimap-water-frag.glsl.c");r=Rt(r),r=Lt(r,Nt),r=Pt(r,br),r=r.replace(/#undef gl_FragColor/,"// $&"),r=r.replace(/void getTextureSettings\(/,`void getTextureSettings(vec2 s, out TextureSettings settings){
settings.textureMeta1 = vec3(0.0,0.0,8196.0);
settings.textureMeta2 = vec3(0.0,0.0,8196.0);
settings.uvAnim = vec2(0.0,0.0);
settings.wrapping = 0.0;
settings.specular = 0.0;
settings.normalScale = 0.0;
}
void getTextureSettingsOld(`);let i=0;return r=Mt(r,`in highp vec2 v_texcoord_0;
in highp vec2 v_texcoord_1;
in highp vec2 v_texcoord_2;`),n=Mt(n,`in highp vec2 texcoord_0;
in highp vec2 texcoord_1;
in highp vec2 texcoord_2;`),n=Mt(n,`out highp vec2 v_texcoord_0;
out highp vec2 v_texcoord_1;
out highp vec2 v_texcoord_2;`),n=ta(n,`v_texcoord_0=texcoord_0;
v_texcoord_1=texcoord_1;
v_texcoord_2=texcoord_2;
`),r=r.replace(/(?<!void )getTexel\(\w+,/gm,()=>`getTexel(v_texcoord_${i++%3},`),e.vertexShader=n,e.fragmentShader=r,e.uniforms.uTextureAtlas={value:t},e.uniforms.uInvSunDirection.value[2]*=-1,e.uniformsNeedUpdate=!0,e}function ta(t,e){return t.replace(/void main\(\)[\s\r\n]*\{/,`$&
`+e)}function Mt(t,e){return e+`
`+t}function Lt(t,e){return t.replace(/^((flat) )*(in|out|uniform|attribute|varying) ((highp|mediump|lowp) )*(float|vec\d|mat\d) ((\w|,\s*)+);$/mg,(n,r,i,s,u,d,l,x)=>x.split(/,\s*/g).map(p=>{let m=e[p];if(m!=null){let f=typeof m=="function"?m():m;return f=Array.isArray(f)?f.join(`
`):f+`
`,n.split(`
`).map(g=>`// ${g}`).join(`
`)+`
`+f}return`${r??""}${s} ${u??""}${l??""} ${p};`}).join(`
`))}function Pt(t,e){return t.replace(/^#define (\w+)(\(.*?\))?($| (\\\r?\n|.)*$)/mg,(n,r)=>{let i=e[r];if(i!=null){let s=typeof i=="function"?i():i;return s=Array.isArray(s)?s.join(`
`):s+`
`,n.split(`
`).map(u=>`// ${u}`).join(`
`)+`
`+s}return n})}function Xl(t,e){return t=t.replace(/\bvoid main\(/,"void originalMain("),t=t+`
`+e.replace(/super\(/,"originalMain("),t}function Rt(t){return["precision highp float;","precision mediump sampler3D;","#define fma(a,b,c) ((a)*(b)+(c))"].join(`
`)+`

`+t.replace(/^#version ([\w ]+)$/m,"//original version $1").replace(/\bprecise\b/g,"highp")}async function Hl(...t){return null}async function $l(...t){return null}const fe=512,yn=64,bn=48,wr=4,wn=128,ci=1/16,kt=new xe(0,1,0),_r={material:-1,materialTiling:128,materialBleedpriority:-1,color:[255,0,255]},{tileshapes:at,defaulttileshape:Zr,defaulttileshapeflipped:ra}=Wl();function Jl(t,e){return!(t.x>=e.x+e.xsize||t.x+t.xsize<=e.x||t.z>=e.z+e.zsize||t.z+t.zsize<=e.z)}function fi(t,e,n){return!(e<t.x||e>=t.x+t.xsize||n<t.z||n>=t.z+t.zsize)}let Xr=new Map,ur=new Set;function Ot(t,e="default"){ur.has(e)&&(console.error("scratchbuffer hasn't been returned since last use, leaking memory by creating new buffer."),ur.delete(e),Xr.delete(e));let n=Xr.get(e);return(!n||n&&n.byteLength<t)&&(n=new ArrayBuffer(t),Xr.set(e,n),console.log("allocating new scratchbuf mb:",(t/1e6).toFixed(2))),ur.add(e),[n,i=>{if(ur.delete(e),i>t)throw new Error("larger slice of scratchbuffer requested than was reserved");return n.slice(0,i)}]}class di{debug_nxttile=null;debug_raw=null;rawOverlay=void 0;rawUnderlay=void 0;settings;next01=void 0;next10=void 0;next11=void 0;x;y;z;y10;y01;y11;playery00;playery01;playery10;playery11;shape=Zr;underlayVisible=!1;overlayVisible=!1;normalX=0;normalZ=0;bleedsOverlayMaterial=!1;vertexprops;overlayprops;underlayprops;originalUnderlayColor=_r.color;rawCollision=void 0;effectiveCollision=void 0;effectiveLevel;effectiveVisualLevel;waterProps=null;addUnderlay(e,n){let r=n!=null?e.mapUnderlays[n-1]:void 0;r&&(r.color&&(r.color[0]!=255||r.color[1]!=0||r.color[2]!=255)&&(this.underlayVisible=!0),this.underlayprops={material:r.material??-1,materialTiling:r.material_tiling??128,materialBleedpriority:-1,color:r.color??[255,0,255]},this.rawUnderlay=r,this.originalUnderlayColor=this.underlayprops.color,this.vertexprops.fill(this.underlayprops))}addOverlay(e,n,r){let i=n!=null?e.mapOverlays[n-1]:void 0;i&&(i.color&&(i.color[0]!=255||i.color[1]!=0||i.color[2]!=255)&&(this.overlayVisible=!0),this.overlayprops={material:i.materialbyte??i.material??-1,materialTiling:i.material_tiling??128,materialBleedpriority:i.bleedpriority??0,color:i.color??(i.materialbyte!=null?[255,255,255]:[255,0,255])},this.bleedsOverlayMaterial=!!i.bleedToUnderlay,this.rawOverlay=i),r!=null&&(this.shape=at[r])}addUnderWater(e,n,r,i){this.waterProps={y00:this.y,y01:this.y,y10:this.y,y11:this.y,props:this.overlayprops,shape:this.shape.overlay,isoriginal:this.shape==Zr||this.shape==ra,rawOverlay:this.rawOverlay};let s=this.underlayprops;this.underlayVisible=!1,this.overlayVisible=!1,this.bleedsOverlayMaterial=!1,this.rawOverlay=void 0,this.addUnderlay(e,i),this.addOverlay(e,r,null),this.overlayVisible||(this.overlayVisible=!0,this.overlayprops=s,this.bleedsOverlayMaterial=!0),this.y=this.y01=this.y10=this.y11=this.y-n*fe*ci}constructor(e,n,r,i,s,u){let d=e*fe*ci;this.settings=n,this.x=r,this.y=d,this.z=i,this.y01=d,this.y10=d,this.y11=d,this.playery00=d,this.playery01=d,this.playery10=d,this.playery11=d,this.effectiveLevel=s,this.effectiveVisualLevel=0;let l={..._r};this.vertexprops=[l,l,l,l],this.underlayprops=l,this.overlayprops=l;let x;if(u){let p=((n??0)&1)!=0;x={settings:n??0,walk:[p,!1,!1,!1,!1,!1,!1,!1,!1],sight:[!1,!1,!1,!1,!1,!1,!1,!1,!1]}}this.rawCollision=x,this.effectiveCollision=x}}function Wl(){let t=[{subvertex:0,nextx:!1,nextz:!0,subx:0,subz:1},{subvertex:1,nextx:!1,nextz:!0,subx:.5,subz:1},{subvertex:0,nextx:!0,nextz:!0,subx:1,subz:1},{subvertex:2,nextx:!0,nextz:!1,subx:1,subz:.5},{subvertex:0,nextx:!0,nextz:!1,subx:1,subz:0},{subvertex:1,nextx:!1,nextz:!1,subx:.5,subz:0},{subvertex:0,nextx:!1,nextz:!1,subx:0,subz:0},{subvertex:2,nextx:!1,nextz:!1,subx:0,subz:.5},{subvertex:3,nextx:!1,nextz:!1,subx:.5,subz:.5}];function e(s,u){return s==8?t[8]:(s=(s+u*2)%8,t[s])}let n=[];for(let s=0;s<48;s++){let u=[],d=[],l=s%4,x=s-l;if(x==0)u.push(0,2,4,6);else if(x==4||x==36||x==40)u.push(0,4,6),d.push(0,2,4),x==36&&(l+=1),x==40&&(l+=3);else if(x==8)u.push(0,1,6),d.push(1,2,4,6);else if(x==12)u.push(1,2,4),d.push(0,1,4,6);else if(x==16)u.push(1,2,4,6),d.push(0,1,6);else if(x==20)u.push(0,1,4,6),d.push(1,2,4);else if(x==24)u.push(0,1,5,6),d.push(1,2,4,5);else if(x==28)u.push(5,6,7),d.push(2,4,5,7,0);else if(x==32)u.push(2,4,5,7,0),d.push(5,6,7);else if(x==44)u.push(4,6,8),d.push(8,6,0,2,4);else throw new Error("shouldnt happen");n[s]={overlay:u.map(p=>e(p,l)),underlay:d.map(p=>e(p,l))}}let r={overlay:[],underlay:[0,2,4,6].map(s=>e(s,0))},i={overlay:[],underlay:[2,4,6,0].map(s=>e(s,0))};return{tileshapes:n,defaulttileshape:r,defaulttileshapeflipped:i}}function Kl(t){let e=t%4,n=(e+2)%4,r=t-e;if(r==0)return 0+n;if(r==4)return 4+n;if(r==8)return 16+e;if(r==12)return 20+e;if(r==16)return 8+e;if(r==20)return 12+e;if(r==24)return 24+n;if(r==28)return 32+e;if(r==36)return 40+e;if(r==40)return 36+e;if(r==32)return 28+e;if(r==44)return console.log("unknown inverse shape"),0;throw new Error("unexpected")}function na(t,e,n){return new Ve().makeTranslation(t.translate.x-e,t.translate.y,t.translate.z-n).multiply(new Ve().makeRotationFromQuaternion(t.rotation)).multiply(new Ve().makeScale(t.scale.x,t.scale.y,t.scale.z))}function Yl(t,e,n,r,i,s,u,d=0,l=0,x=t.count){let p=na(e,i,s),m=cr(n,e.originx/fe,e.originz/fe,e.level),f=new xe,g=e.placementMode=="followfloor"||e.placementMode=="followfloorceiling",h=e.placementMode=="followfloorceiling",a=h&&r>0?1/r:1,o=x-l;u??=new Pe(new Float32Array(o*3),3);let[c,v,y]=ut(t),[b,w,_]=ut(u),E=w+d*_,S=v+l*y;for(let A=0;A<o;A++){let T=E+_*A,D=S+y*A;f.x=c[D+0],f.y=c[D+1],f.z=c[D+2];let I=f.y;if(f.applyMatrix4(p),g){let B=(f.x+i)/fe,M=(f.z+s)/fe;if(h){let L=I*a,U=cr(n,B,M,e.level),N=cr(n,B,M,e.level+1)-e.scaleModelHeightOffset;f.y+=-I+N*L+U*(1-L)}else f.y+=cr(n,B,M,e.level)}else f.y+=m;b[T+0]=f.x,b[T+1]=f.y,b[T+2]=f.z}return u}function cr(t,e,n,r){let i=Math.floor(e),s=Math.floor(n),u=t.getTile(i,s,r);if(!u)return 0;if(u.waterProps)return u.waterProps.y00;let d=(1-(e-i))*(1-(n-s)),l=(e-i)*(1-(n-s)),x=(1-(e-i))*(n-s),p=(e-i)*(n-s);return u.y*d+u.y01*l+u.y10*x+u.y11*p}class Zl{engine;area;tilemask;xsize;zsize;levels=4;xoffset;zoffset;tiles;xstep;zstep;levelstep;constructor(e,n,r){this.area=n,this.tilemask=r?.filter(i=>Jl(i,n)),this.engine=e,this.xoffset=n.x,this.zoffset=n.z,this.xsize=n.xsize,this.zsize=n.zsize,this.xstep=1,this.zstep=this.xstep*n.xsize,this.levelstep=this.zstep*n.zsize,this.tiles=new Array(this.levelstep*this.levels).fill(void 0)}getHeightCollisionFile(e,n,r,i,s){let u=new Uint16Array(i*s*2);for(let d=0;d<s;d++)for(let l=0;l<i;l++){let x=this.getTile(e+l,n+d,r);if(x){let p=(l+d*i)*2,m=(x.playery00+x.playery01+x.playery10+x.playery11)/4;u[p+0]=m/16;let f=0,g=x.effectiveCollision;for(let h=0;h<9;h++){let a=g.walk[h]?g.sight[h]?2:1:0;f+=Math.pow(3,h)*a}u[p+1]=f}}return u}getTile(e,n,r){if(e-=this.xoffset,n-=this.zoffset,!(e<0||n<0||e>=this.xsize||n>=this.zsize))return this.tiles[this.levelstep*r+n*this.zstep+e*this.xstep]}blendUnderlays(){for(let e=this.zoffset;e<this.zoffset+this.zsize;e++)for(let n=this.xoffset;n<this.xoffset+this.xsize;n++){let r=0,u=((this.getTile(n,e,1)?.settings??0)&2)!=0?-1:0;for(let d=0;d<this.levels;d++){let l=this.getTile(n,e,d);if(!l)continue;if(!l.debug_nxttile){let E=0,S=0,A=0,T=0;for(let D=-4;D<=5;D++)for(let I=-4;I<=5;I++){let B=this.getTile(n+I,e+D,d);if(!B||!B.underlayVisible)continue;let M=B.originalUnderlayColor;E+=M[0],S+=M[1],A+=M[2],T++}T>0&&(l.underlayprops.color=[E/T,S/T,A/T])}this.getTile(n-1,e-1,d);let x=this.getTile(n,e-1,d),p=this.getTile(n+1,e-1,d),m=this.getTile(n+1,e,d),f=this.getTile(n+1,e+1,d),g=this.getTile(n,e+1,d),h=this.getTile(n-1,e+1,d),a=this.getTile(n-1,e,d),o=0,c=0;a&&m&&(o=(m.y-a.y)/(2*fe)),x&&g&&(c=(g.y-x.y)/(2*fe));let v=Math.hypot(o,c,1);l.normalZ=-o/v,l.normalX=-c/v,l.y01=m?.y??l.y,l.y10=g?.y??l.y,l.y11=f?.y??l.y,l.playery00=l.y,l.playery01=m?.y??l.y01,l.playery10=g?.y??l.y10,l.playery11=f?.y??l.y11,l.waterProps&&(l.playery00=Math.max(l.playery00,l.waterProps.y00),l.playery01=Math.max(l.playery01,l.waterProps.y01),l.playery10=Math.max(l.playery10,l.waterProps.y10),l.playery11=Math.max(l.playery11,l.waterProps.y11)),l.next01=m,l.next10=g,l.next11=f;let y=((l.settings??0)&8)!=0,b=d+u;y&&(r=0);let w=this.getTile(n,e,b),_=((w?.settings??0)&4)!=0;w&&b!=d&&(w.effectiveCollision=l.rawCollision,w.playery00=l.playery00,w.playery01=l.playery01,w.playery10=l.playery10,w.playery11=l.playery11),l.effectiveLevel=b,l.effectiveVisualLevel=Math.max(l.effectiveVisualLevel,r);for(let E=-1;E<=1;E++)for(let S=-1;S<=1;S++){let A=this.getTile(n+S,e+E,d);A&&((A.settings??0)&8)==0&&(A.effectiveVisualLevel=Math.max(A.effectiveVisualLevel,r))}if(_&&(r=b+1),l.waterProps)l.waterProps.shape.length==0&&(f?.waterProps||g?.waterProps||m?.waterProps?l.waterProps.shape=at[0].overlay:l.waterProps.shape=at[4].overlay);else{let E=g?.waterProps?.isoriginal||m?.waterProps?.isoriginal;f?.waterProps?.isoriginal&&E?l.waterProps={...f.waterProps,isoriginal:!1,shape:at[0].overlay}:f?.waterProps?.isoriginal?l.waterProps={...f.waterProps,isoriginal:!1,shape:at[6].overlay}:h?.waterProps?.isoriginal&&g?.waterProps?.isoriginal?l.waterProps={...h.waterProps,isoriginal:!1,shape:at[5].overlay}:p?.waterProps?.isoriginal&&m?.waterProps?.isoriginal&&(l.waterProps={...p.waterProps,isoriginal:!1,shape:at[7].overlay})}l.waterProps&&(m?.waterProps&&(l.waterProps.y01=m.waterProps.y00),g?.waterProps&&(l.waterProps.y10=g.waterProps.y00),f?.waterProps?l.waterProps.y11=f.waterProps.y00:m?.waterProps?l.waterProps.y11=m.waterProps.y10:g?.waterProps&&(l.waterProps.y11=g.waterProps.y01))}}for(let e=this.zoffset;e<this.zoffset+this.zsize;e++)for(let n=this.xoffset;n<this.xoffset+this.xsize;n++)for(let r=0;r<this.levels;r++){let i=this.getTile(n,e,r);if(i&&i.bleedsOverlayMaterial)for(let s of i.shape.overlay){let u=i;s.nextx&&s.nextz?u=u.next11:s.nextx?u=u.next01:s.nextz&&(u=u.next10),u&&u.vertexprops[s.subvertex].materialBleedpriority<i.overlayprops.materialBleedpriority&&(u.vertexprops[s.subvertex]=i.overlayprops)}}}gatherMaterials(e,n,r,i){let s=new Map,u=(d,l)=>{let x=1;const p=128;l<p?x=p/l+1:l%p!=0&&(x=1+p/l);let m=s.get(d);(!m||m<x)&&s.set(d,x)};for(let d=0;d<this.levels;d++)for(let l=0;l<i;l++)for(let x=0;x<r;x++){let p=this.getTile(e+x,n+l,d);p&&(p.underlayprops.material!=-1&&u(p.underlayprops.material,p.underlayprops.materialTiling),p.overlayprops.material!=-1&&u(p.overlayprops.material,p.overlayprops.materialTiling),p.waterProps&&p.waterProps.props.material!=-1&&u(p.waterProps.props.material,p.waterProps.props.materialTiling))}return s}addMapsquare(e,n,r,i,s=!1){if(e.length!=r.xsize*r.zsize*i)throw new Error;let u=(r.x-this.xoffset)*this.xstep+(r.z-this.zoffset)*this.zstep;for(let d=0;d<r.zsize;d++)for(let l=0;l<r.xsize;l++){if(!fi(this.area,r.x+l,r.z+d)||this.tilemask&&!this.tilemask.some(g=>fi(g,r.x+l,r.z+d)))continue;let x=(r.x+l)*fe,p=(r.z+d)*fe,m=d+l*r.zsize,f=0;for(let g=0;g<this.levels;g++){let h=g<i?e[m]:{},a=null,o=h.height;if(n){let y=[n.level0,n.level1,n.level2,n.level3][g];y&&(a=y[(l+1)*66+d+1],o=a.flags&16?a.rest?.waterheight:a.height)}o!=null&&o!=0?f+=o==1?0:o:f+=30;let c;if(a){let y=a.flags,b=(y&16)!=0,w=(y&2?1:0)|(y&4?2:0)|(y&8?4:0)|(y&32?8:0)|(y&64?16:0);b&&(w|=128),c=new di(f,w,x,p,g,s);let _=a.rest?.overlay_under??a.rest?.overlay,E=a.rest?.underlay_under??a.rest?.underlay,S=b?Kl(a.rest?.shape??0):a.rest?.shape;c.addUnderlay(this.engine,E),c.addOverlay(this.engine,_,S),b&&c.addUnderWater(this.engine,a.height,a.rest?.overlay,a.rest?.underlay),c.debug_raw=h,c.debug_nxttile=a,c.originalUnderlayColor=tr(Dt(a.rest?.underlaycolor??0)),c.underlayprops.color=c.originalUnderlayColor}else c=new di(f,h.settings??0,x,p,g,s),c.addUnderlay(this.engine,h.underlay),c.addOverlay(this.engine,h.overlay,h.shape),c.debug_raw=h;let v=u+this.xstep*l+this.zstep*d+this.levelstep*g;this.tiles[v]=c,m+=r.xsize*r.zsize}}}}async function ia(t,e,n){let r=t.classicData?bn:yn,i=e+n*wn,s,u=null,d={},l=[],x,p=wr,m=0,f=0;if(t.getBuildNr()>nr){let h=null,a=null,o=null;if(t.getBuildNr()>=759){let y=(await t.getCacheIndex(C.mapsquares))[i];if(!y)return null;m=y.crc,f=y.version;let b=await t.getFileArchive(y),w=y.subindices.indexOf(_t.squares);if(w==-1)return null;h=b[w].buffer;let _=y.subindices.indexOf(_t.locations);if(_!=-1&&(o=b[_].buffer),t.getBuildNr()>=861){let E=y.subindices.indexOf(_t.square_nxt);E!=-1&&(a=b[E].buffer)}}else if(t.getBuildNr()>Ze){try{let v=await t.findFileByName(C.mapsquares,`m${e}_${n}`);if(!v)return null;m=v.crc,f=v.version,h=await t.getFile(v.major,v.minor,v.crc)}catch{return null}try{let v=await t.findFileByName(C.mapsquares,`l${e}_${n}`);v&&(m=nt(v.crc,m),f=Math.max(f,v.version),o=await t.getFile(v.major,v.minor,v.crc))}catch{}}else{let v=e*256+n,y=t.legacyData?.mapmeta.get(v);if(!y)return null;try{m=y.crc,f=y.version,h=await t.getFile(Ke.map,y.map),o=await t.getFile(Ke.map,y.loc)}catch{console.warn(`map for ${e}_${n} declared but file did not exist`)}}if(!h)return null;let c=z.mapsquareTiles.read(h,t.rawsource);a&&(u=z.mapsquareTilesNxt.read(a,t.rawsource)),s=c.tiles,d=c.extra,o&&(l=z.mapsquareLocations.read(o,t.rawsource).locations),x={x:e*r,z:n*r,xsize:r,zsize:r}}else{let h=await Zi(t,e,n);if(!h)return null;s=h.tiles,x=h.rect,p=h.levels,l=h.locs,m=h.mapfilehash}return{tilerect:x,levelcount:p,mapsquarex:e,mapsquarez:n,chunkfilehash:m,chunkfileversion:f,tiles:s,nxttiles:u,extra:d,rawlocs:l,locs:[]}}async function ku(t,e,n,r){let i=r?.padfloor?20:0,s=t.classicData?bn:yn,u=Math.ceil(i/s),d=new Zl(t,{x:e*s-i,z:n*s-i,xsize:s+i*2,zsize:s+i*2},r?.mask),l=null;for(let x=-u;x<=u;x++)for(let p=-u;p<=u;p++){let m=await ia(t,e+p,n+x);m&&(d.addMapsquare(m.tiles,m.nxttiles,m.tilerect,m.levelcount,!!r?.collision),m.mapsquarex==e&&m.mapsquarez==n&&(l=m))}return t.classicData&&Qi(d),d.blendUnderlays(),l&&(l.locs=await au(t,d,l.rawlocs,l.tilerect.x,l.tilerect.z,!!r?.collision)),{grid:d,chunk:l,chunkSize:s,chunkx:e,chunkz:n}}async function Ql(t,e){let n=new bi,r=[0,0,0,0],i=-1;if(e?.extra.unk00?.unk20&&(r=e.extra.unk00.unk20.slice(1)),e?.extra.unk80){let u=(await t.engine.getArchiveById(C.config,Ce.environments)).find(l=>l.fileid==e.extra.unk80.environment),d=z.environments.read(u.buffer,t.engine.rawsource);typeof d.model=="number"&&(i=d.model,n=await mn(t,await t.getModelData(d.model)))}return{skybox:n,fogColor:r,skyboxModelid:i}}async function eu(t,e,n,r){let i=[],s=e.gatherMaterials(n.tilerect.x,n.tilerect.z,n.tilerect.xsize+1,n.tilerect.zsize+1),u=new Map,d=[];for(let[m,f]of s.entries()){let g=t.engine.getMaterialData(m);g.textures.diffuse&&t.textureType!="none"&&d.push(t.getTextureFile("diffuse",g.textures.diffuse,g.stripDiffuseAlpha).then(h=>h.toWebgl()).then(h=>{u.set(g.textures.diffuse,{tex:h,repeat:f})}))}await Promise.all(d);let l,x=[...u.entries()].sort((m,f)=>f[1].tex.width*f[1].repeat-m[1].tex.width*m[1].repeat),p=[[256,256],[512,512],[1024,512],[1024,1024],[1024,2048],[2048,1024],[2048,2048],[2048,3072],[2048,4096],[3072,4096],[4096,4096]];e:for(let m of p){l=new tu(m[0],m[1]);for(let[f,{tex:g,repeat:h}]of x)if(!l.addTexture(f,g,h))continue e;break}for(let m=0;m<wr;m++)i.push(bt(e,n,m,l,!0,"default")),i.push(bt(e,n,m,l,!0,"default",!0)),r?.map2d&&(i.push(bt(e,n,m,l,!1,"worldmap")),i.push(bt(e,n,m,l,!1,"worldmap",!0))),r?.invisibleLayers&&(i.push(bt(e,n,m,l,!1,"wireframe")),i.push(lu(e,n,m))),r?.minimap&&(i.push(bt(e,n,m,l,!1,"minimap")),i.push(bt(e,n,m,l,!1,"minimap",!0)));return i}async function Iu(t,e,n,r,i){let{grid:s,chunk:u}=await e,d,l=new Si;l.name=`mapsquare ${n}.${r}`;let x=new Map;if(u){let f=await eu(t,s,u,i),g=i?.map2d?await nu(t.engine,s,u.locs):[],h=await pi(t,u.locs),a=[...h.byMaterial,...g];if(i.minimap){let y=await pi(t,u.locs,!0);a.push(...y.byMaterial)}let o=u.tilerect.x*fe,c=u.tilerect.z*fe;if(l.matrixAutoUpdate=!1,l.position.set(o,0,c),l.updateMatrix(),a.length!=0){let y=await Promise.all(a.map(b=>b.material??t.getMaterial(b.materialId,b.hasVertexAlpha,b.minimapVariant)));l.add(...a.map((b,w)=>ou(s,b,o,c,y[w],x)))}let v=(await Promise.all(f.map(y=>uu(t,y)))).filter(y=>y);v.length!=0&&l.add(...v);for(let y=0;y<wr;y++){let b=hi(s,u,y);b&&l.add(b);let w=hi(s,u,y,!0);w&&l.add(w)}if(i.hashboxes)for(let y=0;y<wr;y++)l.add(await Hl(t,h.byLogical,s,u.mapsquarex,u.mapsquarez,y)),l.add(await $l(t,s,u,y));d=h.byLogical}else d=new Map;let p=u&&i?.skybox?await Ql(t,u):null,m=t.engine.classicData?bn:yn;return l?.traverse(f=>{if(f instanceof Ut){let g=f,h=!1;for(;g;)g.userData.modeltype=="floorhidden"&&(h=!0),g=g.parent;h&&f.material instanceof en&&(f.material.wireframe=!0)}}),{chunkx:n,chunkz:r,grid:s,chunk:u,sky:p,modeldata:d,chunkroot:l,chunkSize:m,locRenders:x}}class tu{padsize=32;width;height;allocs=[];map=new Map;allocx=0;allocy=0;allocLineHeight=0;result=null;resultSource=null;constructor(e,n){this.width=e,this.height=n}addTexture(e,n,r){this.result!=null&&(this.result=null,console.log("adding textures to atlas after creation of texture"));let i=Math.floor(n.width*r),s=Math.floor(n.height*r),u=i+2*this.padsize,d=s+2*this.padsize;if(this.allocx+u>this.width&&(this.allocx=0,this.allocy+=this.allocLineHeight,this.allocLineHeight=0),this.allocLineHeight=Math.max(this.allocLineHeight,d),this.allocy+this.allocLineHeight>this.height)return!1;let l={u:(this.allocx+this.padsize)/this.width,v:(this.allocy+this.padsize)/this.height,usize:n.width/this.width,vsize:n.height/this.height,x:this.allocx+this.padsize,y:this.allocy+this.padsize,repeatWidth:i,repeatHeight:s,totalpixels:(this.padsize+i+this.padsize)*(this.padsize+s+this.padsize),img:n};return this.allocs.push(l),this.allocx+=u,this.map.set(e,l),!0}convertToThreeTexture(){return this.resultSource??=(()=>{let e=new pa(this.convert());return e.flipY=!1,e.magFilter=Wt,e.minFilter=ma,e.generateMipmaps=!0,e.colorSpace=vr,e})()}convert(){if(this.result)return this.result;let e=document.createElement("canvas");e.width=this.width,e.height=this.height;let n=e.getContext("2d",{willReadFrequently:!0}),r=(u,d,l,x=0,p=0,m=u.width,f=u.height)=>{n.drawImage(u,x,p,m,f,d,l,m,f)};for(let u of this.allocs){let d=-this.padsize,l=u.repeatWidth+this.padsize,x=-this.padsize,p=u.repeatHeight+this.padsize;for(let m=x;m<p;m=i){var i=Math.min(p,Math.ceil((m+1)/u.img.height)*u.img.height);for(let f=d;f<l;f=s){var s=Math.min(l,Math.ceil((f+1)/u.img.width)*u.img.width);r(u.img,u.x+f,u.y+m,jn(f,u.img.width),jn(m,u.img.height),s-f,i-m)}}}return this.result=e,e}}function aa(t){let e=-1;return t.morphs_1&&(e=t.morphs_1.unk2[0]??t.morphs_1.unk3),t.morphs_2&&(e=t.morphs_2.unk2),e==32767&&(e=-1),e==65535&&(e=-1),e}async function ru(t,e){let n=e;if(t.classicData){let r=ea(t,e);return{rawloc:r,morphedloc:r,resolvedid:n}}else{let r=await t.getGameFile("objects",e),i=z.object.read(r,t),s=i;if(i.morphs_1||i.morphs_2){let u=aa(i);if(u!=-1){let d=await t.getGameFile("objects",u);s={...i,...z.object.read(d,t)},n=u}}return{rawloc:i,morphedloc:s,resolvedid:n}}}async function nu(t,e,n){let r=new Jr;r.transparent=!0,r.depthTest=!1;let i=l=>({wallgroup:{models:[],groupid:"walls"+l,minimapVariant:!1,hasVertexAlpha:!1,materialId:-1,material:{mat:r,matmeta:{...St()}},overlayIndex:1},mapscenes:new Map}),s=[i(0),i(1),i(2),i(3)],u=(l,x)=>{let p=new xe().set((x.x+x.sizex/2)*fe,0,(x.z+x.sizez/2)*fe),m=new Je().setFromAxisAngle(kt,x.rotation/2*Math.PI),f=new xe(1,1,1);s[x.effectiveLevel].wallgroup.models.push({model:l.meshes[0],morph:{level:x.plane,placementMode:"followfloor",translate:p,rotation:m,scale:f,scaleModelHeightOffset:0,originx:p.x,originz:p.z},miny:l.miny,maxy:l.maxy,extras:{modeltype:"overlay",isclickable:!1,modelgroup:"walls"+x.visualLevel,level:x.effectiveLevel}})},d=async(l,x)=>{let p=s[l.effectiveLevel].mapscenes.get(x),m=e.engine.mapMapscenes[x];if(m.sprite_id==null)return;let f=await t.getFileById(C.sprites,m.sprite_id),g=gt(f),h=new Jr;h.map=new Kt(g[0].img.data,g[0].img.width,g[0].img.height,Yt),h.depthTest=!1,h.transparent=!0,h.needsUpdate=!0,p={groupid:"mapscenes"+l.effectiveLevel,hasVertexAlpha:!1,materialId:-1,minimapVariant:!1,material:{mat:h,matmeta:{...St(),alphamode:"cutoff"}},models:[],overlayIndex:2},s[l.effectiveLevel].mapscenes.set(x,p),console.warn("using very inefficient code path for 3d mapscenes");let a=h.map;const o=128;let c=a.image.width*o,v=a.image.height*o,y=new dn(null).addParallelogram([255,255,255],[-c/2,0,-v/2],[c,0,0],[0,0,v]).convertSubmesh(0),b=new xe((l.x+l.sizex/2)*fe,0,(l.z+l.sizez/2)*fe);p.models.push({model:y,morph:{level:l.plane,placementMode:"simple",rotation:new Je,scale:new xe(1,1,1),translate:b,scaleModelHeightOffset:0,originx:b.x,originz:b.z},miny:0,maxy:0,extras:{modeltype:"overlay",isclickable:!1,level:l.visualLevel,modelgroup:"mapscenes"}})};for(let l of n)l.effectiveLevel!=-1&&(l.type==0?u(Ft.wall,l):l.type==1?u(Ft.shortcorner,l):l.type==2?u(Ft.longcorner,l):l.type==3?u(Ft.pillar,l):l.type==9&&u(Ft.diagonal,l),l.location.mapscene!=null&&await d(l,l.location.mapscene));return s.flatMap(l=>[l.wallgroup,...l.mapscenes.values()])}function iu(t,e,n=!1){let r=[],i=e.location,s=e.type==22&&!i.unknown_49,u={replaceColors:i.color_replacements??void 0,replaceMaterials:i.material_replacements??void 0,lodLevel:n?100:void 0};t.getBuildNr()>nr&&t.getBuildNr()<377&&(u.replaceMaterials=u.replaceColors);const d=4;let l=new xe((i.translateX??0)*d,-(i.translateY??0)*d,(i.translateZ??0)*d);const x=1/128;let p=new xe((i.scaleX??128)*x,(i.scaleY??128)*x,(i.scaleZ??128)*x),m=(e.x+e.sizex/2)*fe,f=(e.z+e.sizez/2)*fe,g=new Je().setFromAxisAngle(kt,e.rotation/2*Math.PI);if(e.rotation%2==1){let y=p.x;p.x=p.z,p.z=y}if(i.mirror&&(p.z*=-1),l.add(new xe(m,0,f)),n&&(l.y-=.2*fe),e.placement&&(l.add(new xe().set(e.placement.translateX??0,-(e.placement.translateY??0),e.placement.translateZ??0)),e.placement.scale&&p.multiplyScalar((e.placement.scale??128)/128),(e.placement.scaleX||e.placement.scaleY||e.placement.scaleZ)&&p.multiply(new xe().set((e.placement.scaleX??128)/128,(e.placement.scaleY??128)/128,(e.placement.scaleZ??128)/128)),e.placement.rotation)){let y=30517578125e-15,b=new Je(-e.placement.rotation[0]*y,e.placement.rotation[1]*y,-e.placement.rotation[2]*y,e.placement.rotation[3]*y);g.premultiply(b)}let h=typeof i.probably_morphCeilingOffset<"u",a=h||!!i.probably_morphFloor,o={translate:l,rotation:g,scale:p,level:e.plane,placementMode:h?"followfloorceiling":a?"followfloor":"simple",scaleModelHeightOffset:i.probably_morphCeilingOffset??0,originx:m,originz:f},c={modeltype:"location",isclickable:!1,modelgroup:n?`mini_objects${e.resolvedlocid==e.locid&&e.location.probably_animation==null?e.visualLevel:0}`:`objects${e.visualLevel}`,locationid:e.locid,worldx:e.x,worldz:e.z,rotation:e.rotation,mirror:!!i.mirror,isGroundDecor:s,level:e.visualLevel,locationInstance:e},v=(y,b)=>{if(!(n&&s)){if(i.models){for(let w of i.models)if(w.type==y)for(let _ of w.values)r.push({model:_,morph:b})}else if(i.models_05){for(let w of i.models_05.models)if(w.type==y)for(let _ of w.values)r.push({model:_,morph:b})}}};if(e.type==11)v(10,{...o,rotation:new Je().setFromAxisAngle(kt,Math.PI/4).premultiply(o.rotation)});else if(e.type==8||e.type==7||e.type==6){if(e.type==6||e.type==8){let y=fe*.6,b=Math.PI/4,w=new Je().setFromAxisAngle(kt,b).premultiply(o.rotation);v(4,{...o,rotation:w,translate:new xe(y,0,0).applyQuaternion(w).add(o.translate)})}if(e.type==7||e.type==8){let y=fe*.5,b=Math.PI/4*5,w=new Je().setFromAxisAngle(kt,b).premultiply(o.rotation);v(4,{...o,rotation:w,translate:new xe(y,0,0).applyQuaternion(w).add(o.translate)})}}else if(e.type==2)v(2,{...o,scale:new xe(1,1,-1).multiply(o.scale)}),v(2,{...o,rotation:new Je().setFromAxisAngle(kt,Math.PI/2).premultiply(o.rotation)});else if(e.type==5){let y=fe/6;v(4,{...o,translate:new xe(y,0,0).applyQuaternion(o.rotation).add(o.translate)})}else v(e.type,o);return{models:r,mods:u,extras:c}}async function au(t,e,n,r,i,s=!1){let u=[],d=await Promise.all(n.map(l=>ru(t,l.id)));for(let l=0;l<n.length;l++){let x=n[l],{morphedloc:p,rawloc:m,resolvedid:f}=d[l];if(p)for(let g of x.uses){let h=e.getTile(g.x+r,g.y+i,g.plane);if(!h)continue;let a=p.width??1,o=p.length??1;g.rotation%2==1&&([a,o]=[o,a]);let c=h.effectiveVisualLevel;for(let y=0;y<o;y++)for(let b=0;b<a;b++){let w=e.getTile(g.x+r+b,g.y+i+y,g.plane);w&&w.effectiveVisualLevel>c&&(c=w.effectiveVisualLevel)}u.push({location:p,locid:x.id,resolvedlocid:f,placement:g.extra,sizex:a,sizez:o,x:g.x+r,z:g.y+i,type:g.type,rotation:g.rotation,plane:g.plane,visualLevel:c,effectiveLevel:h.effectiveLevel,forceVisible:!!(h.settings&8)});const v=[9,10,11,12,13,14,15,16,17,18,19,20,21];if(s&&!m.probably_nocollision)for(let y=0;y<o;y++)for(let b=0;b<a;b++){let w=e.getTile(g.x+r+b,g.y+i+y,h.effectiveLevel);if(w){let _=w.effectiveCollision;g.type==22&&m.maybe_blocks_movement&&(_.walk[0]=!0),g.type==0?(_.walk[1+g.rotation]=!0,m.maybe_allows_lineofsight||(_.sight[1+g.rotation]=!0)):g.type==2?(_.walk[1+g.rotation]=!0,_.walk[1+(g.rotation+1)%4]=!0,m.maybe_allows_lineofsight||(_.sight[1+g.rotation]=!0,_.sight[1+(g.rotation+1)%4]=!0)):g.type==1||g.type==3?(_.walk[5+g.rotation]=!0,m.maybe_allows_lineofsight||(_.sight[5+g.rotation]=!0)):v.includes(g.type)&&(_.walk[0]=!0,m.maybe_allows_lineofsight||(_.sight[0]=!0))}}}}return u}function su(t,e,n,r=!1){const i=e.xsize*e.zsize*5*6*2;let s=0,u=12,d=16;const l=d/4|0,x=d;let[p,m]=Ot(d*i*3),[f,g]=Ot(i*3*4,"index"),h=new Uint32Array(f),a=new Float32Array(p),o=new Uint8Array(p),c=e.x*fe,v=e.z*fe,y=0,b=0,w=(T,D,I,B,M)=>{const L=y*l+s,U=y*x+u,N=(r?T.y:T.playery00)*(1-D)*(1-B),O=(r?T.y01:T.playery01)*D*(1-B),q=(r?T.y10:T.playery10)*(1-D)*B,V=(r?T.y11:T.playery11)*D*B;return a[L+0]=T.x+D*fe-c,a[L+1]=N+O+q+V+I*fe,a[L+2]=T.z+B*fe-v,o[U+0]=M[0],o[U+1]=M[1],o[U+2]=M[2],o[U+3]=M[3],y++},_=(T,D,I,B,M,L,U,N)=>{let O=w(T,D,I,B,N),q=w(T,D+M,I,B,N),V=w(T,D,I+L,B,N),G=w(T,D+M,I+L,B,N),re=w(T,D,I,B+U,N),ce=w(T,D+M,I,B+U,N),se=w(T,D,I+L,B+U,N),de=w(T,D+M,I+L,B+U,N);h[b++]=O,h[b++]=G,h[b++]=q,h[b++]=O,h[b++]=V,h[b++]=G,h[b++]=q,h[b++]=de,h[b++]=ce,h[b++]=q,h[b++]=G,h[b++]=de,h[b++]=O,h[b++]=se,h[b++]=V,h[b++]=O,h[b++]=re,h[b++]=se,h[b++]=V,h[b++]=de,h[b++]=G,h[b++]=V,h[b++]=se,h[b++]=de,h[b++]=O,h[b++]=ce,h[b++]=re,h[b++]=O,h[b++]=q,h[b++]=ce,h[b++]=re,h[b++]=de,h[b++]=se,h[b++]=re,h[b++]=ce,h[b++]=de};for(let T=e.z;T<e.z+e.zsize;T++)for(let D=e.x;D<e.x+e.xsize;D++){let I=t.getTile(D,T,n),B=r?I?.rawCollision:I?.effectiveCollision;if(I&&B){if(B.walk[0]){let M=B.sight[0]?1.8:.3;_(I,.05,0,.05,.9,M,.9,[100,50,50,255])}if(r&&B.settings&30){let M=0,L=0,U=0;B.settings&2&&(M+=0,L+=127,U+=127),B.settings&4&&(M+=0,L+=127,U+=0),B.settings&8&&(M+=127,L+=0,U+=0),B.settings&-16&&(M+=0,L+=0,U+=127),_(I,-.05,-.05,0,1.1,.25,1.1,[M,L,U,255])}for(let M=0;M<4;M++){if(B.walk[1+M]){let L=B.sight[1+M]?2:.5,U=[255,60,60,255];M==0&&_(I,0,0,0,.15,L,1,U),M==1&&_(I,0,0,.85,1,L,.15,U),M==2&&_(I,.85,0,0,.15,L,1,U),M==3&&_(I,0,0,0,1,L,.15,U)}if(B.walk[5+M]){let L=B.sight[5+M]?2:.5,U=[255,60,60,255];M==0&&_(I,0,0,.85,.15,L,.15,U),M==1&&_(I,.85,0,.85,.15,L,.15,U),M==2&&_(I,.85,0,0,.15,L,.15,U),M==3&&_(I,0,0,0,.15,L,.15,U)}}}}let E={modeltype:"overlay",isclickable:!1,modelgroup:(r?"collision-raw":"collision")+n,level:n},S=m(y*d),A=g(b*4);return{pos:new Float32Array(S),color:new Uint8Array(S),indices:new Uint32Array(A),posstride:l,colorstride:x,posoffset:s,coloroffset:u,extra:E}}function hi(t,e,n,r=!1){let{color:i,indices:s,pos:u,coloroffset:d,colorstride:l,posoffset:x,posstride:p,extra:m}=su(t,e.tilerect,n,r);if(s.length==0)return;let f=new rr;f.setAttribute("position",new Qt(new wt(u,p),3,x,!1)),f.setAttribute("color",new Qt(new wt(i,l),4,d,!0)),f.index=new Pe(s,1,!1);let g=new en({shininess:0});g.flatShading=!0,fn(g,1),g.vertexColors=!0;let h=new Ut(f,g);return h.userData=m,h.name=`${r?"raw ":""}collision ${e.mapsquarex},${e.mapsquarez} (${n})`,h}async function pi(t,e,n=!1){let r=new Map,i=new Map,s=new Map,u=e.map(p=>iu(t.engine,p,n)),d=[],l=new Set;for(let p of u)for(let m of p.models)l.has(m.model)||(l.add(m.model),d.push(t.getModelData(m.model).catch(f=>(console.warn("ignoring missing model",m.model,"in loc",p.extras.locationInstance.location.name??p.extras.locationid),{bonecount:0,skincount:0,miny:0,maxy:0,meshes:[]})).then(f=>r.set(m.model,f))));await Promise.all(d);for(let p=0;p<u.length;p++){let m=u[p],f=0,g=0;for(let a of m.models){let o=r.get(a.model);f=Math.min(o.miny,f),g=Math.max(o.maxy,g)}let h=[];for(let a of m.models){let o=r.get(a.model);for(let c of o.meshes){let v=hn(c,m.mods),y=to(v.materialId,v.hasVertexAlpha,n),b=i.get(m.extras.modelgroup);b||(b=new Map,i.set(m.extras.modelgroup,b));let w=Fi(b,y,()=>({materialId:v.materialId,material:null,hasVertexAlpha:v.hasVertexAlpha,minimapVariant:n,models:[],groupid:m.extras.modelgroup,overlayIndex:0})),_={model:v,morph:a.morph,miny:f,maxy:g,extras:m.extras};h.push(_),w.models.push(_)}}h.length!=0&&s.set(e[p],h)}let x=[];for(let p of i.values())x.push(...p.values());return{byMaterial:x,byLogical:s}}class _n extends Ut{renderSections=[];constructor(e,n){super(e,n)}cloneSection(e){let n=new rr;for(let u in this.geometry.attributes){let d=this.geometry.attributes[u],l=new Pe(d.array.slice(e.startvertex*d.itemSize,e.endvertex*d.itemSize),d.itemSize,d.normalized);n.setAttribute(u,l)}let r=this.geometry.index.array.slice(e.startindex,e.endindex);for(let u=0;u<r.length;u++)r[u]-=e.startvertex;n.setIndex(new Pe(r,1));let i=new _n(n,this.material),s={mesh:i,startindex:0,endindex:e.endindex-e.startindex,startvertex:0,endvertex:e.endvertex-e.startvertex,hidden:!1};return i.renderSections.push(s),s}setSectionHide(e,n){if(e.hidden==n)return;e.hidden=n;let r=this.geometry.drawRange.count;if(this.geometry.drawRange.start!=0)throw new Error("unexpected");if(!this.geometry.index)throw new Error("unexpected");isFinite(r)||(r=this.geometry.index.count);let i=e.endindex-e.startindex,s=n?r-i:r;if(n){let x=this.geometry.index.array.slice(e.startindex,e.endindex);this.geometry.index.array.copyWithin(e.startindex,e.endindex,r),this.geometry.index.array.set(x,s)}else{let x=this.geometry.index.array.slice(e.startindex,e.endindex);this.geometry.index.array.copyWithin(r+i,r,e.startindex),this.geometry.index.array.set(x,s)}let u=n?e.startindex:s,d=n?r:e.endindex,l=n?-i:i;for(let x=0;x<this.renderSections.length;x++){let p=this.renderSections[x];p!=e&&(p.startindex<u||p.startindex>=d||(p.startindex+=l,p.endindex+=l))}e.startindex=s,e.endindex=s+i,this.geometry.setDrawRange(0,r+l),this.geometry.index.needsUpdate=!0}}function ou(t,e,n,r,i,s){let u=e.models.reduce((w,_)=>w+_.model.vertexend-_.model.vertexstart,0),d=e.models.reduce((w,_)=>w+_.model.indices.count,0),l=e.models.reduce((w,_)=>w+ +_.model.hasVertexAlpha,0);if(l!=0&&l!=e.models.length)throw new Error("all meshes are expected to have same vertexAlpha setting");let x=l!=0,p=0,m=0,f=new Pe(new Float32Array(u*3),3),g=new Pe(new Float32Array(u*2),2),h=new Pe(new Uint8Array(u*(x?4:3)),x?4:3,!0),a=new Pe(new Int8Array(u*3),3,!0),o=new Pe(u>65535?new Uint32Array(d):new Uint16Array(d),1),c=new rr;c.setAttribute("position",f),c.setAttribute("normal",a),c.setAttribute("color",h),c.setAttribute("uv",g),c.setIndex(o);let v=new _n(c),y=[];for(let w of e.models){let _=w.model,E=na(w.morph,n,r),S=_.vertexend-_.vertexstart,A=_.indices.count;y.push(m);let T={mesh:v,startindex:m,endindex:m+A,startvertex:p,endvertex:p+S,hidden:!1};v.renderSections.push(T),w.extras.modeltype=="location"&&Fi(s,w.extras.locationInstance,()=>[]).push(T);{let D=p-_.vertexstart,I=_.indices;if(E.determinant()<0)for(let B=0;B<A;B+=3){let M=m+B;o.setX(M+0,D+I.getX(B+0)),o.setX(M+1,D+I.getX(B+2)),o.setX(M+2,D+I.getX(B+1))}else for(let B=0;B<A;B+=3){let M=m+B;o.setX(M+0,D+I.getX(B+0)),o.setX(M+1,D+I.getX(B+1)),o.setX(M+2,D+I.getX(B+2))}}Yl(_.attributes.pos,w.morph,t,w.maxy-w.miny,n,r,f,p,_.vertexstart,_.vertexend);{let D=new xe;if(_.attributes.normals){let I=_.attributes.normals,[B,M,L]=ut(I),[U,N,O]=ut(a),q=_.vertexstart*L+M,V=p*O+N,G=new Ve().makeRotationFromQuaternion(w.morph.rotation);for(let re=0;re<S;re++){let ce=V+re*O,se=q+re*L;D.set(B[se+0],B[se+1],B[se+2]),D.applyMatrix4(G),U[ce+0]=Math.round(D.x),U[ce+1]=Math.round(D.y),U[ce+2]=Math.round(D.z)}}else qi(o,f,a,m,m+A)}{let[D,I,B]=ut(h),M=p*B+I;if(_.attributes.color){let[L,U,N]=ut(_.attributes.color),O=_.vertexstart*N+U;if(x)for(let q=0;q<S;q++){let V=M+q*B,G=O+q*N;D[V+0]=L[G+0],D[V+1]=L[G+1],D[V+2]=L[G+2],D[V+3]=L[G+3]}else for(let q=0;q<S;q++){let V=M+q*B,G=O+q*N;D[V+0]=L[G+0],D[V+1]=L[G+1],D[V+2]=L[G+2]}}else for(let L=0;L<S;L++){let U=M+L*B;D[U+0]=1,D[U+1]=1,D[U+2]=1,x&&(D[U+3]=1)}}{let D=_.attributes.texuvs;if(D)for(let I=0;I<S;I++)g.setXY(p+I,D.getX(_.vertexstart+I),D.getY(_.vertexstart+I));else for(let I=0;I<S;I++)g.setXY(p+I,0,0)}p+=S,m+=A}pn(v,i,e.minimapVariant);let b={modeltype:"locationgroup",modelgroup:e.groupid,isclickable:!0,subranges:y,searchPeers:!0,subobjects:e.models.map(w=>w.extras)};return v.renderOrder=e.overlayIndex,v.userData=b,v.matrixAutoUpdate=!1,v.updateMatrix(),v.name="merged locs",v}function lu(t,e,n){const r=e.tilerect.xsize*e.tilerect.zsize*t.levels,i=6,s=0,u=3,d=24,l=28,x=32,p=18,m=52;let[f,g]=Ot(r*m*i),[h,a]=Ot(r*i*4,"index"),o=new Uint32Array(h),c=new Float32Array(f),v=new Uint8Array(f);const y=m/4|0,b=m|0;let w=0,_=0;const E=e.tilerect.x*fe,S=e.tilerect.z*fe;let A=[],T=[],D=1/0,I=1/0,B=1/0,M=-1/0,L=-1/0,U=-1/0;const N=(Y,K,W,Z,Q)=>{const P=w*y+s,$=w*b+d,ee=(1-K)*(1-W),oe=K*(1-W),be=(1-K)*W,ke=K*W,ye=Y.x+K*fe-E,Ne=Y.z+W*fe-S,ne=Y.playery00*ee+Y.playery01*oe+Y.playery10*be+Y.playery11*ke;D=Math.min(D,ye),I=Math.min(I,ne),B=Math.min(B,Ne),M=Math.max(M,ye),L=Math.max(L,ne),U=Math.max(U,Ne),c[P+0]=ye,c[P+1]=ne,c[P+2]=Ne;let X=Z[Q].color[0],ae=Z[Q].color[1],j=Z[Q].color[2];return v[$+0]=X,v[$+1]=ae,v[$+2]=j,v[$+3]=255,w++};let O=[{material:-1,materialTiling:128,materialBleedpriority:0,color:[0,0,0]}],q=[{material:-1,materialTiling:128,materialBleedpriority:0,color:[255,0,255]}];for(let Y of[!0,!1])for(let K=0;K<e.tilerect.zsize;K++)for(let W=0;W<e.tilerect.xsize;W++){let Z=t.getTile(e.tilerect.x+W,e.tilerect.z+K,n),Q=Z;for(let ee=n+1;ee<e.levelcount;ee++){let oe=t.getTile(e.tilerect.x+W,e.tilerect.z+K,ee);oe&&oe.effectiveLevel==n&&(Q=oe)}if(!Z||!Q)continue;let P=!!Z.effectiveCollision?.walk[0],$=P?q:O;P==Y&&(o[_++]=N(Z,0,0,$,0),o[_++]=N(Z,0,1,$,0),o[_++]=N(Z,1,1,$,0),o[_++]=N(Z,0,0,$,0),o[_++]=N(Z,1,1,$,0),o[_++]=N(Z,1,0,$,0))}let V={modelgroup:"walkmesh"+n,modeltype:"floorhidden",mapsquarex:e.mapsquarex,mapsquarez:e.mapsquarez,level:n,isclickable:!0,searchPeers:!1,subobjects:A,subranges:T},G=g(w*m),re=a(_*4),ce=new Float32Array(G),se=new Uint8Array(G),de=new Uint16Array(G);return{chunk:e,level:n,tileinfos:A,mode:"walkmesh",iswater:!1,vertexstride:m,indices:new Uint32Array(re),nvertices:w,atlas:null,pos:{src:ce,offset:s,vecsize:3,normalized:!1},normal:{src:ce,offset:u,vecsize:3,normalized:!1},color:{src:se,offset:d,vecsize:4,normalized:!0},_RA_FLOORTEX_UV0:{src:de,offset:p+0,vecsize:2,normalized:!0},_RA_FLOORTEX_UV1:{src:de,offset:p+2,vecsize:2,normalized:!0},_RA_FLOORTEX_UV2:{src:de,offset:p+4,vecsize:2,normalized:!0},_RA_FLOORTEX_WEIGHTS:{src:se,offset:x,vecsize:3,normalized:!0},_RA_FLOORTEX_USESCOLOR:{src:se,offset:l,vecsize:3,normalized:!0},posmax:[M,L,U],posmin:[D,I,B],extra:V}}function bt(t,e,n,r,i=!1,s="default",u=!1){const d=s=="wireframe",l=s=="worldmap",x=s=="minimap",p=e.tilerect.xsize*e.tilerect.zsize*t.levels,m=8,f=0,g=3,h=24,a=28,o=32,c=18,v=52;let[y,b]=Ot(p*v*m),[w,_]=Ot(p*m*4,"index"),E=new Uint32Array(w),S=new Float32Array(y),A=new Float32Array(y),T=new Uint8Array(y),D=new Uint8Array(y),I=new Uint8Array(y),B=new Uint16Array(y);const M=v/4|0,L=v/4|0,U=v|0,N=v|0,O=v|0,q=v/2|0;let V=0,G=0;const re=e.tilerect.x*fe,ce=e.tilerect.z*fe;let se=[],de=[],Y=1/0,K=1/0,W=1/0,Z=-1/0,Q=-1/0,P=-1/0;const $=(ne,X,ae,j,me)=>{const Oe=V*M+f,_e=V*L+g,pe=V*U+h,Se=V*O+o,Ee=V*N+a,ge=V*q+c,we=(1-X)*(1-ae),qe=X*(1-ae),ot=(1-X)*ae,lt=X*ae,zt=ne.x+X*fe-re,Vt=ne.z+ae*fe-ce,jt=u?ne.waterProps.y00*we+ne.waterProps.y01*qe+ne.waterProps.y10*ot+ne.waterProps.y11*lt:ne.y*we+ne.y01*qe+ne.y10*ot+ne.y11*lt,qt=u?0:ne.normalX*we+(ne.next01??ne).normalX*qe+(ne.next10??ne).normalX*ot+(ne.next11??ne).normalX*lt,Xt=u?0:ne.normalZ*we+(ne.next01??ne).normalZ*qe+(ne.next10??ne).normalZ*ot+(ne.next11??ne).normalZ*lt;Y=Math.min(Y,zt),K=Math.min(K,jt),W=Math.min(W,Vt),Z=Math.max(Z,zt),Q=Math.max(Q,jt),P=Math.max(P,Vt),S[Oe+0]=zt,S[Oe+1]=jt,S[Oe+2]=Vt,A[_e+0]=qt,A[_e+1]=Math.sqrt(1-qt*qt-Xt*Xt),A[_e+2]=Xt;let vt=j[me].color[0],xt=j[me].color[1],yt=j[me].color[2];x&&(vt=20+.656*vt,xt=28+.577*xt,yt=23+.604*yt,u&&(vt=Math.pow(vt/255,2.2)*255,xt=Math.pow(xt/255,2.2)*255,yt=Math.pow(yt/255,2.2)*255)),T[pe+0]=vt,T[pe+1]=xt,T[pe+2]=yt,T[pe+3]=255;for(let F=0;F<3;F++)if(B[ge+2*F+0]=0,B[ge+2*F+1]=0,I[Se+F]=0,D[Ee+F]=0,F<j.length){const k=j[F];let R,le=0;if(k&&k.material!=-1){let De=t.engine.getMaterialData(k.material);le=De.baseColorFraction,De.textures.diffuse&&(R=r.map.get(De.textures.diffuse))}if(R){let De=k.materialTiling/128,Ht=ne.x/fe%De,Br=ne.z/fe%De;const Sn=65536;B[ge+2*F+0]=(R.u+R.usize*(Ht+X)/De)*Sn,B[ge+2*F+1]=(R.v+R.vsize*(Br+ae)/De)*Sn,I[Se+F]=F==me?255:0,D[Ee+F]=255-le*255}}return V++};for(let ne=n;ne<e.levelcount;ne++)if(!(d&&ne!=n))for(let X=0;X<e.tilerect.zsize;X++)for(let ae=0;ae<e.tilerect.xsize;ae++){let j=t.getTile(e.tilerect.x+ae,e.tilerect.z+X,ne);if(!j||!d&&j.effectiveVisualLevel!=n)continue;let me=j.shape,Oe=j.next01&&j.next10&&j.next11;if(me==Zr&&Oe){let _e=Math.abs(j.underlayprops.color[0]-j.next11.underlayprops.color[0])+Math.abs(j.underlayprops.color[1]-j.next11.underlayprops.color[1])+Math.abs(j.underlayprops.color[2]-j.next11.underlayprops.color[2]),pe=Math.abs(j.next01.underlayprops.color[0]-j.next10.underlayprops.color[0])+Math.abs(j.next01.underlayprops.color[1]-j.next10.underlayprops.color[1])+Math.abs(j.next01.underlayprops.color[2]-j.next10.underlayprops.color[2]);_e<pe&&(me=ra)}if(i&&(se.push({tile:j.debug_raw,x:ae,z:X,level:ne,tilenxt:j.debug_nxttile,underlaycolor:j.originalUnderlayColor}),de.push(G)),u){if(j.waterProps){let _e=j.waterProps.props,pe=[_e,_e,_e],Se=j.waterProps.shape;for(let Ee=2;Ee<Se.length;Ee++){let ge=Se[0],we=Se[Ee-1],qe=Se[Ee];!ge||!we||!qe||(E[G++]=$(j,ge.subx,ge.subz,pe,0),E[G++]=$(j,we.subx,we.subz,pe,1),E[G++]=$(j,qe.subx,qe.subz,pe,2))}}}else{if(Oe&&me.overlay.length!=0){let _e=j.rawOverlay,pe=_e?.color??(_e&&typeof _e.materialbyte<"u"?[255,255,255]:[255,0,255]),Se=j.overlayVisible;if(l&&!Se&&_e?.secondary_colour&&(pe=_e.secondary_colour,Se=!0),Se||d){let Ee;if(!l)Ee=me.overlay.map(ge=>{if(j.bleedsOverlayMaterial){let we=j;if(ge.nextx&&ge.nextz?we=j.next11:ge.nextx?we=j.next01:ge.nextz&&(we=j.next10),we)return we.vertexprops[ge.subvertex]}else return j.overlayprops;return _r});else{let ge={material:0,materialTiling:128,materialBleedpriority:0,color:pe};Ee=Array(me.overlay.length).fill(ge)}for(let ge=2;ge<me.overlay.length;ge++){let we=me.overlay[0],qe=me.overlay[ge-1],ot=me.overlay[ge];if(!we||!qe||!ot)continue;let lt=[Ee[0],Ee[ge-1],Ee[ge]];E[G++]=$(j,we.subx,we.subz,lt,0),E[G++]=$(j,qe.subx,qe.subz,lt,1),E[G++]=$(j,ot.subx,ot.subz,lt,2)}}}if(Oe&&me.underlay.length!=0&&(j.underlayVisible||d)){let _e;if(!l)_e=me.underlay.map(pe=>{let Se=j;if(pe.nextx&&pe.nextz?Se=j.next11:pe.nextx?Se=j.next01:pe.nextz&&(Se=j.next10),Se){let Ee=Se.vertexprops[pe.subvertex];return Ee.material==-1?{...Ee,material:j.underlayprops.material}:Ee}return _r});else{let pe={material:0,materialTiling:128,materialBleedpriority:-1,color:j.underlayprops.color};_e=Array(me.underlay.length).fill(pe)}for(let pe=2;pe<me.underlay.length;pe++){let Se=me.underlay[0],Ee=me.underlay[pe-1],ge=me.underlay[pe];if(!Se||!Ee||!ge)continue;let we=[_e[0],_e[pe-1],_e[pe]];E[G++]=$(j,Se.subx,Se.subz,we,0),E[G++]=$(j,Ee.subx,Ee.subz,we,1),E[G++]=$(j,ge.subx,ge.subz,we,2)}}}}let ee={modelgroup:(s=="wireframe"?"floorhidden":s=="worldmap"?"map":s=="minimap"?"mini_floor":"floor")+n,modeltype:d?"floorhidden":"floor",mapsquarex:e.mapsquarex,mapsquarez:e.mapsquarez,level:n,isclickable:!0,searchPeers:!1,subobjects:se,subranges:de},oe=b(V*v),be=_(G*4),ke=new Float32Array(oe),ye=new Uint8Array(oe),Ne=new Uint16Array(oe);return{chunk:e,level:n,tileinfos:se,mode:s,iswater:u,vertexstride:v,indices:new Uint32Array(be),nvertices:V,atlas:s!="worldmap"?r:null,pos:{src:ke,offset:f,vecsize:3,normalized:!1},normal:{src:ke,offset:g,vecsize:3,normalized:!1},color:{src:ye,offset:h,vecsize:4,normalized:!0},_RA_FLOORTEX_UV0:{src:Ne,offset:c+0,vecsize:2,normalized:!0},_RA_FLOORTEX_UV1:{src:Ne,offset:c+2,vecsize:2,normalized:!0},_RA_FLOORTEX_UV2:{src:Ne,offset:c+4,vecsize:2,normalized:!0},_RA_FLOORTEX_WEIGHTS:{src:ye,offset:o,vecsize:3,normalized:!0},_RA_FLOORTEX_USESCOLOR:{src:ye,offset:a,vecsize:3,normalized:!0},posmax:[Z,Q,P],posmin:[Y,K,W],extra:ee}}function uu(t,e){if(e.nvertices==0)return;let n=u=>{let d=new wt(u.src,e.vertexstride/u.src.BYTES_PER_ELEMENT);return new Qt(d,u.vecsize,u.offset,u.normalized)},r=new rr;r.setAttribute("position",n(e.pos)),r.setAttribute("color",n(e.color)),r.setAttribute("normal",n(e.normal)),r.setAttribute("texcoord_0",n(e._RA_FLOORTEX_UV0)),r.setAttribute("texcoord_1",n(e._RA_FLOORTEX_UV1)),r.setAttribute("texcoord_2",n(e._RA_FLOORTEX_UV2)),r.setAttribute("color_1",n(e._RA_FLOORTEX_WEIGHTS)),r.setAttribute("color_2",n(e._RA_FLOORTEX_USESCOLOR));let i=e.mode!="worldmap"?new en({shininess:0}):new Jr;if(i.vertexColors=!0,e.mode=="walkmesh"&&fn(i,1),e.mode=="wireframe"&&(i.wireframe=!0),e.atlas){let u=e.atlas.convertToThreeTexture();e.mode=="minimap"?e.iswater?i=ql(u):i=jl(u):(Vi(i),i.map=u)}let s=new Ut(r,i);return s.userData=e.extra,s.name=`floor ${e.chunk.mapsquarex},${e.chunk.mapsquarez} (${e.level})`,s}const cu=["material","model","item","loc","mapsquare","sequence","skeleton","frameset","animgroup","npc","framebase","texture","enum","overlay","underlay"],fu=Object.fromEntries(cu.map((t,e)=>[t,e]));function sa(t,e,n){let r=t.mapsquarex+t.mapsquarez*wn;n("mapsquare",r,t.chunkfilehash,t.chunkfileversion);for(let u of t.rawlocs)e("loc",u.id,"mapsquare",r);let i=new Set,s=new Set;for(let u of t.tiles)u.overlay!=null&&i.add(u.overlay),u.underlay!=null&&s.add(u.underlay);i.forEach(u=>e("overlay",u,"mapsquare",r)),s.forEach(u=>e("underlay",u,"mapsquare",r))}const du=async(t,e,n,r)=>{await Ys(20,function*(){let i=r?.area??{x:0,z:0,xsize:100,zsize:200};for(let s=i.z;s<i.z+i.zsize;s++)for(let u=i.x;u<i.x+i.xsize;u++)yield ia(t,u,s)},i=>{i&&sa(i,e,n)})};function Hr(t){return t?t[0]<<16|t[1]<<8|t[2]:16711935}function oa(t,e){return e=nt(+!!t.bleedToUnderlay,e),e=nt(t.bleedpriority??-1,e),e=nt(t.materialbyte??t.material??-1,e),e=nt(Hr(t.color),e),e=nt(Hr(t.secondary_colour),e),e=nt(Hr(t.tertiary_colour),e),e=nt(t.material_tiling??-1,e),e}const hu=async(t,e,n)=>{for(let[r,i]of t.mapUnderlays.entries()){if(!i)continue;let s=oa(i,0);n("underlay",r,s,0),i.material&&e("material",i.material,"underlay",r)}},pu=async(t,e,n)=>{for(let[r,i]of t.mapOverlays.entries()){if(!i)continue;let s=oa(i,0);i.material&&e("material",i.material,"overlay",r),n("overlay",r,s,0)}},mu=async(t,e,n)=>{if(t.classicData)for(let[r,i]of t.classicData.objects.entries()){let s=Re(Buffer.from(JSON.stringify(i)));n("loc",r,s,0),i.model.id!=null&&e("model",i.model.id,"loc",r)}else for await(let{id:r,file:i}of Ir(t,C.objects)){n("loc",r,Re(i),0);let s=z.object.read(i,t);if(s.probably_animation&&e("sequence",s.probably_animation,"loc",r),s.models)for(let u of s.models)for(let d of u.values)e("model",d,"loc",r);if(s.models_05)for(let u of s.models_05.models)for(let d of u.values)e("model",d,"loc",r);if(s.morphs_1||s.morphs_2){let u=aa(s);u!=-1&&e("loc",u,"loc",r)}}},gu=async(t,e,n)=>{if(t.classicData)for(let[r,i]of t.classicData.items.entries()){let s=Re(Buffer.from(JSON.stringify(i)));n("item",r,s,0)}else for await(let{id:r,file:i}of Ir(t,C.items)){n("item",r,Re(i),0);let s=z.item.read(i,t),u=[].concat(s.baseModel,s.maleModels_0?.id,s.maleModels_1,s.maleModels_2,s.femaleModels_0?.id,s.femaleModels_1,s.femaleModels_2,s.maleHeads_0,s.maleHeads_1,s.femaleHeads_0,s.femaleHeads_1).filter(d=>typeof d=="number");for(let d of u)e("model",d,"item",r);s.noteTemplate&&e("item",s.noteTemplate,"item",r)}},vu=async(t,e,n)=>{if(t.getBuildNr()<526)return;let r=await t.getArchiveById(C.config,Ce.animgroups);for(let i of r){n("animgroup",i.fileid,Re(i.buffer),0);let s=z.animgroupConfigs.read(i.buffer,t),u=s.unknown_26??s.baseAnims?.idle;u&&e("sequence",u,"animgroup",i.fileid)}},xu=async(t,e,n)=>{if(t.getBuildNr()<=Ze){let r=await t.getArchiveById(Ke.data,mt.textures);for(let i of r.map(s=>s.fileid))n("material",i,0,0),e("texture",i,"material",i)}else if(t.getBuildNr()<=471){let r=await t.getArchiveById(C.texturesOldPng,0);for(let i of r){n("material",i.fileid,Re(i.buffer),0);let s=z.oldproctexture.read(i.buffer,t);e("texture",s.spriteid,"material",i.fileid)}}else if(!(t.getBuildNr()<759)){let r=await t.getArchiveById(C.materials,0);for(let i of r){n("material",i.fileid,Re(i.buffer),0);let s=Mi(i.buffer,i.fileid,t);for(let u of Object.values(s.textures))typeof u=="number"&&e("texture",u,"material",i.fileid)}}},yu=async(t,e,n)=>{if(t.classicData)for(let[r,i]of t.classicData.npcs.entries()){let s=Re(Buffer.from(JSON.stringify(i)));n("npc",r,s,0)}else for await(let{id:r,file:i}of Ir(t,C.npcs)){n("npc",r,Re(i),0);let s=z.npc.read(i,t);if(s.animation_group&&e("animgroup",s.animation_group,"npc",r),s.models)for(let u of s.models)e("model",u,"npc",r);if(s.headModels)for(let u of s.headModels)e("model",u,"npc",r)}};async function bu(t,e){let n=new Map,r=new Map,i=new Map,s=(a,o,c,v)=>{let y=`${a}-${o}`,b=`${c}-${v}`,w=r.get(b);w||(w=[],r.set(b,w)),w.indexOf(y)==-1&&w.push(y);let _=n.get(y);_||(_=[],n.set(y,_)),_.indexOf(b)==-1&&_.push(b)},u=(a,o,c,v)=>{let y=`${a}-${o}`;i.set(y,c)},d=async(a,o)=>{try{console.log(`starting ${a.name}`);let c=Date.now();await a(t,s,u,o),console.log(`finished ${a.name}, duration ${((Date.now()-c)/1e3).toFixed(1)}`)}catch(c){throw c}},l=[mu,gu,vu,xu,yu,pu,hu];for(let a of l)await d(a,e);let x=a=>d(du,a),p=(a,o)=>`${a}-${o}`,m=(a,o=[])=>{let c=i.get(a)??0,v=`${a}-${c}`;if(!o.includes(v)){o.push(v);let y=r.get(a);if(y)for(let b of y)m(b,o)}return o},f=(a,o=0)=>{let c=i.get(a)??0,[v,y]=a.split("-"),b=o;b=nt(fu[v],b),b=nt(+y,b),b=nt(+c,b);let w=r.get(a);if(w)for(let _ of w)b=f(_,b);return b};return{dependencyMap:r,dependentsMap:n,cascadeDependencies:m,makeDeptName:p,hashDependencies:f,hasEntry:(a,o)=>i.has(p(a,o)),insertMapChunk:a=>{sa(a,s,u);let o=a.mapsquarex+a.mapsquarez*wn;return p("mapsquare",o)},preloadChunkDependencies:x}}const wu=`#version 460\r
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
}`,_u=`#version 460\r
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
}`,mi={uModelMatrix:"#define uModelMatrix modelMatrix",uViewProjMatrix:"#define uViewProjMatrix (projectionMatrix*viewMatrix)",uViewMatrix:"#define uViewMatrix viewMatrix",uProjectionMatrix:"#define uProjectionMatrix projectionMatrix",uCameraPosition:"#define uCameraPosition cameraPosition",aVertexPosition:"#define aVertexPosition position",aTextureUV:"#define aTextureUV uv",aVertexColour:"#define aVertexColour vec4(color.rgb,1.0)",aVertexNormal_FogProportion:"#define aVertexNormal_FogProportion vec4(normal,0.0)",gl_FragColor:"FragColor",attribute:"in",varying:"out"},gi={UNIFORM_BUFFER_BEGIN:t=>`// UNIFORM_BUFFER_BEGIN(${t})`,UNIFORM_BUFFER_END:"// UNIFORM_BUFFER_END",TEXTURE_GRAD:""};function vi(t){return["#version 300 es","precision highp float;","precision mediump sampler2D;","#define fma(a,b,c) ((a)*(b)+(c))","#define texture2D texture","#define textureCube texture","#define texture2DLod textureLod","#define textureCubeLod textureLod","#define texture2DGrad textureGrad"].join(`
`)+`

`+t.replace(/^#version ([\w ]+)$/m,"// original version $1").replace(/\bprecise\b/g,"highp")}function xi(t,e){return t.replace(/^((flat) )*(in|out|uniform|attribute|varying) ((highp|mediump|lowp) )*(float|vec\d|mat\d) ((\w|,\s*)+);$/mg,(n,r,i,s,u,d,l,x)=>x.split(/,\s*/g).map(p=>{let m=e[p];if(m!=null){let f=typeof m=="function"?m():m;return f=Array.isArray(f)?f.join(`
`):f+`
`,n.split(`
`).map(g=>`// ${g}`).join(`
`)+`
`+f}return`${r??""}${s} ${u??""}${l??""} ${p};`}).join(`
`))}function yi(t,e){return t.replace(/^#define (\w+)(\(.*?\))?($| (\\\r?\n|.)*$)/mg,(n,r)=>{let i=e[r];if(i!=null){let s=typeof i=="function"?i(n.match(/\((.*?)\)/)?.[1]||""):i;return s=Array.isArray(s)?s.join(`
`):s+`
`,n.split(`
`).map(u=>`// ${u}`).join(`
`)+`
`+s}return n})}function Su(t,e){let n=vi(wu);n=xi(n,mi),n=yi(n,gi);let r=vi(_u);r=xi(r,mi),r=yi(r,gi),r=`out vec4 FragColor;
`+r.replace(/\bgl_FragColor\b/g,"FragColor");const i={uTextureAtlas:{value:t},uTextureAnimationTime:{value:0},uSunDirection:{value:new xe(.5,.8,.2).normalize()},uAmbientColour:{value:new En(.2,.2,.2)},uSunColour:{value:new En(1,1,1)},uAlphaTestThreshold:{value:e.alphamode==="cutoff"?.5:.01},uAtlasMeta:{value:new ga(1,1,1,1)},uFade:{value:0},uInvSunDirection:{value:new xe(-.5,-.8,-.2).normalize()}};return new Cr({uniforms:i,vertexShader:n,fragmentShader:r,transparent:e.alphamode==="blend",side:va})}const Ye=1e6,Te={materialCube:Ye+1,classicWall:Ye+2,classicWallDiag:Ye+3,classicRoof10:Ye+10,classicRoof12:Ye+12,classicRoof13:Ye+13,classicRoof14:Ye+14,classicRoof15:Ye+15,classicRoof16:Ye+16,classicRoof17:Ye+17};class Sr extends eo{hasOldModels=!1;hasNewModels=!1;materialArchive=new Map;materialCache=new Map;mapUnderlays=[];mapOverlays=[];mapMapscenes=[];mapMaplabels=[];legacyData=null;classicData=null;jsonSearchCache=new Map;dependencyGraph=null;static create(e){return new Sr(e).preload()}constructor(e){super(e)}async getArchiveById(e,n){return super.getArchiveById(e,n)}async getFileById(e,n){return super.getFileById(e,n)}async preload(){if(this.getBuildNr()>Ze){for(let n of await this.getArchiveById(C.config,Ce.mapunderlays))this.mapUnderlays[n.fileid]=z.mapsquareUnderlays.read(n.buffer,this.rawsource);for(let n of await this.getArchiveById(C.config,Ce.mapoverlays))this.mapOverlays[n.fileid]=z.mapsquareOverlays.read(n.buffer,this.rawsource);if(this.getBuildNr()>=527)for(let n of await this.getArchiveById(C.config,Ce.mapscenes))this.mapMapscenes[n.fileid]=z.mapscenes.read(n.buffer,this.rawsource);if(this.getBuildNr()>=548)for(let n of await this.getArchiveById(C.config,Ce.maplabels))this.mapMaplabels[n.fileid]=z.maplabels.read(n.buffer,this.rawsource);if(this.getBuildNr()<=471)for(let n of await this.getArchiveById(C.texturesOldPng,0))this.materialArchive.set(n.fileid,n.buffer);else if(!(this.getBuildNr()<=498))if(this.getBuildNr()<=753){let n=await this.getFile(C.materials,0);this.materialArchive.set(0,n)}else for(let n of await this.getArchiveById(C.materials,0))this.materialArchive.set(n.fileid,n.buffer);let e=await this.getCacheIndex(C.index);this.hasNewModels=!!e[C.models],this.hasOldModels=!!e[C.oldmodels]}else if(this.getBuildNr()>nr){const{legacyPreload:e}=await Xe(async()=>{const{legacyPreload:r}=await Promise.resolve().then(()=>Kr);return{legacyPreload:r}},void 0);this.legacyData=await e(this);let n=this.legacyData.overlays.map(r=>z.mapsquareOverlays.read(r,this));this.mapOverlays=n,this.mapUnderlays=n,this.hasNewModels=!1,this.hasOldModels=!0}else{const{ClassicFileSource:e,classicConfig:n,classicGroups:r}=await Xe(async()=>{const{ClassicFileSource:u,classicConfig:d,classicGroups:l}=await Promise.resolve().then(()=>cn);return{ClassicFileSource:u,classicConfig:d,classicGroups:l}},void 0),{classicUnderlays:i,classicOverlays:s}=await Xe(async()=>{const{classicUnderlays:u,classicOverlays:d}=await Promise.resolve().then(()=>zl);return{classicUnderlays:u,classicOverlays:d}},void 0);if(!(this.rawsource instanceof e))throw new Error("can only load classic caches from a classic source");this.classicData=await n(this.rawsource,this.getBuildNr()),this.mapUnderlays=i(),this.mapOverlays=await s(this),this.hasNewModels=!1,this.hasOldModels=!0}return this}async getDependencyGraph(){return this.dependencyGraph??=bu(this,{lazyMapChunks:!0}),this.dependencyGraph}async getGameFile(e,n){return this.legacyData?this.legacyData[e][n]:this.getFileById(C[e],n)}getMaterialData(e){let n=this.materialCache.get(e);if(!n){if(e==-1)n=St();else if(this.getBuildNr()<=Ze)n=St(),n.textures.diffuse=e,n.baseColorFraction=1,n.texmodes="mirror",n.texmodet="mirror";else if(this.getBuildNr()<=471){let r=this.materialArchive.get(e);if(!r)throw new Error("material "+e+" not found");let i=z.oldproctexture.read(r,this);n=St(),n.textures.diffuse=i.spriteid,n.baseColorFraction=1}else if(this.getBuildNr()<=753){if(n=St(),this.getBuildNr()>=500){let i=z.oldmaterials.read(this.materialArchive.get(0),this).mats[e];i.basecolorfraction!=null&&i.basecolor!=null&&(n.baseColorFraction=i.basecolorfraction/255,n.baseColor=nn(Dt(i.basecolor))),n.textures.diffuse=i.id}}else{let r=this.materialArchive.get(e);if(!r)throw new Error("material "+e+" not found");n=Mi(r,e,this.rawsource)}this.materialCache.set(e,n)}return n}getJsonSearchData(e){let n=this.jsonSearchCache.get(e);if(!n){let r=Yi[e];if(!r)throw new Error("unknown decode mode "+e);n={files:(async()=>{await r.prepareDump?.(this);let s=await r.lookup.logicalRangeToFiles(this,[0,0],[1/0,1/0]),u=null,d=[];for(let l of s){let x;u&&u.index==l.index?x=u.subfiles:(x=await this.getFileArchive(l.index),u={index:l.index,subfiles:x});let p=x[l.subindex],m=r.lookup.fileToLogical(this,l.index.major,l.index.minor,p.fileid),f=r.parser.read(p.buffer,this.rawsource);f.$fileid=m.length==1?m[0]:m,d.push(f)}return d})(),schema:r.parser.parser.getJsonSchema()},this.jsonSearchCache.set(e,n)}return n}}class Er{modelCache=new Map;threejsTextureCache=new Map;threejsMaterialCache=new Map;engine;textureType="dds";modelType="nxt";static textureIndices={diffuse:{png:C.texturesPng,dds:C.texturesDds,bmp:C.texturesBmp,ktx:C.texturesKtx,png2014:C.textures2015Png,dds2014:C.textures2015Dds,oldpng:C.texturesOldPng,oldproc:C.sprites,fullproc:C.texturesOldPng,legacy:Ke.data,legacytga:0},normal:{png:C.texturesPng,dds:C.texturesDds,bmp:C.texturesBmp,ktx:C.texturesKtx,png2014:C.textures2015CompoundPng,dds2014:C.textures2015CompoundDds,oldpng:C.texturesOldCompoundPng,oldproc:0,fullproc:0,legacy:0,legacytga:0},compound:{png:C.texturesPng,dds:C.texturesDds,bmp:C.texturesBmp,ktx:C.texturesKtx,png2014:C.textures2015CompoundPng,dds2014:C.textures2015CompoundDds,oldpng:C.texturesOldCompoundPng,oldproc:0,fullproc:0,legacy:0,legacytga:0}};constructor(e,n){this.engine=e,n!="auto"?this.modelType=n:e.getBuildNr()<=nr?this.modelType="classic":e.hasOldModels&&!e.hasNewModels?this.modelType="old":this.modelType="nxt"}static async create(e,n="auto",r="auto"){let i=new Er(e,r);return i.textureType=n=="auto"?await ua(e.rawsource):n,i}async getTextureFile(e,n,r){const{ParsedTexture:i}=await Xe(async()=>{const{ParsedTexture:l}=await Promise.resolve().then(()=>bo);return{ParsedTexture:l}},void 0);let s=Er.textureIndices[e][this.textureType],u=(s|255)<<23|n,d=this.textureType;return this.engine.fetchCachedObject(this.threejsTextureCache,u,async()=>{if(d=="fullproc"){const{loadProcTexture:l}=await Xe(async()=>{const{loadProcTexture:m}=await import("./proceduraltexture-DZ0J7fxT.js");return{loadProcTexture:m}},__vite__mapDeps([0,1,2,3]));let x=await l(this.engine,n),p=new i(x.img,!1,!1);return p.filesize=x.filesize,p}else if(d=="legacytga"||d=="legacy"){const{combineLegacyTexture:l}=await Xe(async()=>{const{combineLegacyTexture:p}=await Promise.resolve().then(()=>Kr);return{combineLegacyTexture:p}},void 0);let x;if(this.engine.classicData){let p=this.engine.classicData.textures[n-1];x=await l(this.engine,p.name,p.subname,d=="legacytga")}else{const{legacyGroups:p,parseLegacyImageFile:m}=await Xe(async()=>{const{legacyGroups:g,parseLegacyImageFile:h}=await Promise.resolve().then(()=>Kr);return{legacyGroups:g,parseLegacyImageFile:h}},void 0);let f=await this.engine.getArchiveById(Ke.data,p.textures);x=await m(this.engine,f[n].buffer)}return new i(x.img,r,!1)}else{let l=await this.engine.getFileById(s,n);if(d=="oldproc"){const{parseSprite:x}=await Xe(async()=>{const{parseSprite:m}=await Promise.resolve().then(()=>uo);return{parseSprite:m}},void 0);let p=x(l);return new i(p[0].img,r,!1)}else return new i(l,r,!0)}},l=>l.filesize?l.filesize*2:1e3)}async getModelData(e){if(e>=Ye){const{materialPreviewCube:n,classicWall:r,classicWallDiag:i,classicRoof10:s,classicRoof12:u,classicRoof13:d,classicRoof14:l,classicRoof15:x,classicRoof16:p,classicRoof17:m}=await Xe(async()=>{const{materialPreviewCube:h,classicWall:a,classicWallDiag:o,classicRoof10:c,classicRoof12:v,classicRoof13:y,classicRoof14:b,classicRoof15:w,classicRoof16:_,classicRoof17:E}=await Promise.resolve().then(()=>zo);return{materialPreviewCube:h,classicWall:a,classicWallDiag:o,classicRoof10:c,classicRoof12:v,classicRoof13:y,classicRoof14:b,classicRoof15:w,classicRoof16:_,classicRoof17:E}},void 0);let g=new Map([[Te.materialCube,Promise.resolve(n)],[Te.classicWall,Promise.resolve(r)],[Te.classicWallDiag,Promise.resolve(i)],[Te.classicRoof10,Promise.resolve(s)],[Te.classicRoof12,Promise.resolve(u)],[Te.classicRoof13,Promise.resolve(d)],[Te.classicRoof14,Promise.resolve(l)],[Te.classicRoof15,Promise.resolve(x)],[Te.classicRoof16,Promise.resolve(p)],[Te.classicRoof17,Promise.resolve(m)]]).get(e);if(!g)throw new Error(`constmodel ${e} does not exist`);return g}return this.engine.fetchCachedObject(this.modelCache,e,async()=>{if(this.modelType=="nxt"){let n=await this.engine.getFileById(C.models,e);const{parseOb3Model:r}=await Xe(async()=>{const{parseOb3Model:i}=await Promise.resolve().then(()=>Wo);return{parseOb3Model:i}},void 0);return r(n,this.engine)}else if(this.modelType=="old"){let n=this.engine.legacyData?Ke.oldmodels:C.oldmodels,r=await this.engine.getFileById(n,e);const{parseRT5Model:i}=await Xe(async()=>{const{parseRT5Model:s}=await import("./rt5model-B-QH9QPu.js");return{parseRT5Model:s}},__vite__mapDeps([4,3,1,2]));return i(r,this.engine.rawsource)}else if(this.modelType=="classic"){const{classicGroups:n}=await Xe(async()=>{const{classicGroups:s}=await Promise.resolve().then(()=>cn);return{classicGroups:s}},void 0);let r=await this.engine.getArchiveById(0,n.models);const{parseRT2Model:i}=await Xe(async()=>{const{parseRT2Model:s}=await import("./rt2model-Bf9mffo1.js");return{parseRT2Model:s}},__vite__mapDeps([5,3,1,2]));return i(r[e].buffer,this.engine)}else throw new Error("unexpected")},n=>n.meshes?n.meshes.reduce((r,i)=>r+i.indices.count,0)*30:1e3)}getMaterial(e,n,r){let i=e+(n?16777216:0)+(r?33554432:0);return this.engine.fetchCachedObject(this.threejsMaterialCache,i,async()=>{let s=this.engine.getMaterialData(e);return la(this,s,n,r)},s=>256*256*4*2)}}async function la(t,e,n,r){let i=new xa;i.alphaTest=e.alphamode=="cutoff"?.5:.1,i.transparent=n||e.alphamode=="blend";const s=e.texmodes=="clamp"?Dn:e.texmodes=="repeat"?An:Cn,u=e.texmodet=="clamp"?Dn:e.texmodet=="repeat"?An:Cn;if(typeof e.textures.diffuse<"u"&&t.textureType!="none"){let d=await(await t.getTextureFile("diffuse",e.textures.diffuse,e.stripDiffuseAlpha)).toImageData(),l=new Kt(d.data,d.width,d.height,Yt);if(l.needsUpdate=!0,l.wrapS=s,l.wrapT=u,l.colorSpace=vr,l.magFilter=Wt,l.minFilter=ya,l.generateMipmaps=!0,i.map=l,e.textures.normal){let p=await(await t.getTextureFile("normal",e.textures.normal,!1)).toImageData(),m=Qe(null,p.width,p.height),f=Qe(null,p.width,p.height);const g=p.data;for(let h=0;h<g.length;h+=4){let a=g[h+1]/127.5-1,o=g[h+3]/127.5-1;m.data[h+0]=g[h+1],m.data[h+1]=g[h+3],m.data[h+2]=(Math.sqrt(Math.max(1-a*a-o*o,0))+1)*127.5,m.data[h+3]=255;const c=g[h+0]/255;f.data[h+0]=d.data[h+0]*c,f.data[h+1]=d.data[h+1]*c,f.data[h+2]=d.data[h+2]*c,f.data[h+3]=255}i.normalMap=new Kt(m.data,m.width,m.height,Yt),i.normalMap.needsUpdate=!0,i.normalMap.wrapS=s,i.normalMap.wrapT=u,i.normalMap.magFilter=Wt,i.emissiveMap=new Kt(f.data,f.width,f.height,Yt),i.emissiveMap.needsUpdate=!0,i.emissiveMap.wrapS=s,i.emissiveMap.wrapT=u,i.emissiveMap.magFilter=Wt,i.emissive.setRGB(1,1,1)}if(e.textures.compound){let x=await(await t.getTextureFile("compound",e.textures.compound,!1)).toImageData(),p=Qe(null,x.width,x.height);for(let f=0;f<x.data.length;f+=4)p.data[f+1]=x.data[f+1],p.data[f+2]=x.data[f+0],p.data[f+3]=255;let m=new Kt(p.data,p.width,p.height,Yt);m.needsUpdate=!0,m.wrapS=s,m.wrapT=u,m.colorSpace=vr,m.magFilter=Wt,i.metalnessMap=m,i.roughnessMap=m,i.metalness=1}}return i.vertexColors=e.baseColorFraction!=1||!e.textures.diffuse||n,i.userData=e,e.uvAnim&&((i.userData.gltfExtensions??={}).RA_materials_uvanim={uvAnim:[e.uvAnim.u,e.uvAnim.v]}),r?i=Vl(i.map,e.alphamode,e.alphacutoff):t.engine.hasNewModels&&(i=Su(i.map,e)),{mat:i,matmeta:e}}async function ua(t){let e=async r=>{let i=-1;try{let s=await t.getCacheIndex(r),u=s[s.length-1];await t.getFile(u.major,u.minor,u.crc),i=u.minor}catch{}return i},n="none";if(t.getBuildNr()<=nr){const{classicGroups:r}=await Xe(async()=>{const{classicGroups:s}=await Promise.resolve().then(()=>cn);return{classicGroups:s}},void 0);n=await t.findSubfileByName(0,r.textures,"INDEX.DAT")?"legacy":"legacytga"}else if(t.getBuildNr()<=Ze)n="legacy";else if(t.getBuildNr()<=471)n="oldproc";else if(t.getBuildNr()<=736)n="fullproc";else{let r=await e(C.texturesBmp),i=await e(C.texturesDds);if(r>0||i>0)n=r>i?"bmp":"dds";else{let s=await e(C.textures2015Png),u=await e(C.textures2015Dds);s>0||u>=0?n=u>s?"dds2014":"png2014":await e(C.texturesOldPng)>0?n="oldpng":n="none"}}return n}async function*Ir(t,e){if(t.legacyData){let n=null;if(e==C.items?n=t.legacyData.items:e==C.npcs?n=t.legacyData.npcs:e==C.objects?n=t.legacyData.objects:e==C.spotanims&&(n=t.legacyData.spotanims),!n)throw new Error(`cache major ${e} can not be iterated`);yield*n.map((r,i)=>({id:i,file:r}))}else if(t.getBuildNr()<=488)yield*(await t.getArchiveById(C.config,Ii[e])).map(r=>({id:r.fileid,file:r.buffer}));else{let n=await t.getCacheIndex(e),r=an[e];for(let i of n){if(!i)continue;yield*(await t.getFileArchive(i)).map(u=>({id:i.minor*r+u.fileid,file:u.buffer}))}}}const Bu=Object.freeze(Object.defineProperty({__proto__:null,EngineCache:Sr,ModelConverter:Sr,ThreejsSceneCache:Er,constModelOffset:Ye,constModelsIds:Te,convertMaterialToThree:la,detectTextureMode:ua,iterateConfigFiles:Ir},Symbol.toStringTag,{value:"Module"}));export{Bi as C,Sr as E,nn as H,Ji as R,He as S,Er as T,un as a,Ao as b,C as c,ki as d,ku as e,gt as f,Hs as g,Dt as h,Tu as i,Bu as j,z as p,Iu as r,uo as s,Fu as u};
