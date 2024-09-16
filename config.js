const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/zaidbscs/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/dqV1E3N.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ²²¹-ᴍᴅ" 


global.devs = "923357433862" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923357433862";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923357433862,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_47_09_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDcwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg5LFxuICAgICAgICA2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICA2LFxuICAgICAgICA0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYwLFxuICAgICAgICA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OCxcbiAgICAgICAgMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDU1LFxuICAgICAgICA2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZIKzkxOHRNaDQzMHlrSlZ5cDE3aDZBTzJqcDlSWUx0L2dtcEx5Z1VrY2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFNZ2ZGd0ZjUUVHaUJoR2hsckdfNWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTc2YmIwOWMtNTgxMC00MjY0LTgwZmMtNjRiNWUxODU4YjdlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0OSxcbiAgICAgIDM0LFxuICAgICAgMjMzLFxuICAgICAgMTk3LFxuICAgICAgMTI2LFxuICAgICAgMjQ3LFxuICAgICAgMTMxLFxuICAgICAgMjE5LFxuICAgICAgMTQ5LFxuICAgICAgNjYsXG4gICAgICAxNDgsXG4gICAgICAyMixcbiAgICAgIDI0MCxcbiAgICAgIDEyMCxcbiAgICAgIDE4MCxcbiAgICAgIDE5OSxcbiAgICAgIDE2MCxcbiAgICAgIDM4LFxuICAgICAgNDgsXG4gICAgICA1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICA5NSxcbiAgICAgIDE0OSxcbiAgICAgIDU3LFxuICAgICAgOTMsXG4gICAgICAxNzksXG4gICAgICA5NCxcbiAgICAgIDY3LFxuICAgICAgMTQzLFxuICAgICAgMixcbiAgICAgIDIzMSxcbiAgICAgIDIyNyxcbiAgICAgIDI1MSxcbiAgICAgIDU1LFxuICAgICAgMTc2LFxuICAgICAgMjI1LFxuICAgICAgMjA3LFxuICAgICAgMjMzLFxuICAgICAgMTQxLFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkc1TEoxUUVDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNTc0MzM4NjI6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJaYWlkIEh1c3NhaW5cIixcbiAgICBcImxpZFwiOiBcIjEzNDY2ODk1MTI0MDczMjo1OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKWFp0cElFRUpDS29iY0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjIyYXArS3B1R2FVQk9NdnBsSkk0RTM4Tkl4Q0tnZThMODEvT2hjSi9SWG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibEZLRTRFOGx1YTEzMkZ1ck02TGhxUFBOOGc5amcyeVRMMkhydUx2TkZ0MUFENHZBNEFtREZudHdxNG0xT2tmS1FlSGZreWhkTGJlQlZUQ3dVUDJBQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNG9wREpwV1BDakZOVkZrMnZLTHUvRmdMQW5qN2ZmNW5mUG96ZFNDYjJMbHNDS1dBOFdtcDBtODN2L3YraU5pU0l0ZzNKREZCL2prQUxZYWd0ako5Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzU3NDMzODYyOjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2NDk4MDY5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ²²¹-ᴍᴅ 』```","),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "zᴀɪᴅ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "zaid",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "ZAID"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
