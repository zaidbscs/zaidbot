const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://zaidhussain:zaidhussain@ziasbd.pcrlnpl.mongodb.net/?retryWrites=true&w=majority&appName=ziasbd"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_39_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODksXG4gICAgICAgIDMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAzMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM0LFxuICAgICAgICA4MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU1LFxuICAgICAgICA5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMixcbiAgICAgICAgODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNixcbiAgICAgICAgMjEyLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDk3LFxuICAgICAgICAzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTE3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDczLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTczLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5LFxuICAgICAgICAxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDY0LFxuICAgICAgICAyNixcbiAgICAgICAgMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MyxcbiAgICAgICAgNTksXG4gICAgICAgIDI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMk5ITGk1eHZxMXZ2UitxdDc5YzVza1J4N0w2eFpPVy9jcmh4Q2xQeVQxUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRzZ4WHBmT01UaDZ3eDVwZ05tNVhRd1wiLFxuICBcInBob25lSWRcIjogXCIyMDU3ZjkxMy1kM2NlLTQyOWYtODdkYy02NjgwMmFiNzU5MWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICAxODAsXG4gICAgICA3NixcbiAgICAgIDIxNixcbiAgICAgIDE4MSxcbiAgICAgIDU1LFxuICAgICAgMjMwLFxuICAgICAgNTQsXG4gICAgICAxMzEsXG4gICAgICAxMTgsXG4gICAgICA3NyxcbiAgICAgIDE1MSxcbiAgICAgIDExOSxcbiAgICAgIDE0MixcbiAgICAgIDIzOSxcbiAgICAgIDk5LFxuICAgICAgMjAyLFxuICAgICAgMjM2LFxuICAgICAgMTMwLFxuICAgICAgMjMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDgxLFxuICAgICAgMTkwLFxuICAgICAgMjI5LFxuICAgICAgMjcsXG4gICAgICAxMzksXG4gICAgICA1NyxcbiAgICAgIDE0NSxcbiAgICAgIDc3LFxuICAgICAgMjAwLFxuICAgICAgNjMsXG4gICAgICAxNjIsXG4gICAgICAwLFxuICAgICAgNDUsXG4gICAgICAxNTUsXG4gICAgICA5NSxcbiAgICAgIDM5LFxuICAgICAgNyxcbiAgICAgIDEyLFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ3WjZISDRQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNTc0MzM4NjI6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJaYWlkIEh1c3NhaW5cIixcbiAgICBcImxpZFwiOiBcIjEzNDY2ODk1MTI0MDczMjoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNM20wZEVHRU1UUnlMTUdHQThnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNNREowM1NWUEJIUmVMN2hiZ0VBdzdJWE1GUzdKVzFFMkJRRUZXeDExaEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUDBiSEJ4aFlXeHkxbFNPUHdvUEFxc3VuWjdzcWJHTElkZmJFVUJycjh0TlZmRk9zNnB3VTZ6VjU0UHVOdzgyTUY3aGloVkJWLzFicWZwS1J2bmwyREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR1h2dk12Qm5YL3Jwc0dzYkNLcW9pTFd5V3lHRk1OMCtNZ3pTb3FwOC9UeFlJdDNSTFFEa25tTXFzRVpVRVQwUm0zMDFDZHljUXozM1lhdkZuZlI1Qmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzU3NDMzODYyOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg3NTc1NzZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ²²¹-ᴍᴅ 』```","),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "zᴀɪᴅ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "zaid Hussain ",


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
