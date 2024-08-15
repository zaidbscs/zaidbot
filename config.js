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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923002975158";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923002975158,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_03_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI4LFxuICAgICAgICA3NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICA0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU1LFxuICAgICAgICA1LFxuICAgICAgICA1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjgsXG4gICAgICAgIDM5LFxuICAgICAgICA1OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODgsXG4gICAgICAgIDcwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQwLFxuICAgICAgICA4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICA2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDg5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NixcbiAgICAgICAgODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ1LFxuICAgICAgICA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM1LFxuICAgICAgICA4MixcbiAgICAgICAgMzksXG4gICAgICAgIDIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3dVZBdGh2WG1IY2JONnpWQ1AzOFU1ZVlQNi9WY2dqSHI4blZGNnRSaUVrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5bGVLUElEcFNvcTkycG91b2x4UHhnXCIsXG4gIFwicGhvbmVJZFwiOiBcImViNzY4ZTczLTRlMmEtNDk2Yi1iNjQ5LTg2NTJlMWExYzlmNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICAyNixcbiAgICAgIDE3MixcbiAgICAgIDE4MSxcbiAgICAgIDAsXG4gICAgICA1NSxcbiAgICAgIDIwOCxcbiAgICAgIDE1LFxuICAgICAgMzksXG4gICAgICAxMDUsXG4gICAgICA1NyxcbiAgICAgIDEyOCxcbiAgICAgIDI0MSxcbiAgICAgIDIwNSxcbiAgICAgIDIwNixcbiAgICAgIDI1LFxuICAgICAgNTIsXG4gICAgICAxOTIsXG4gICAgICA4MixcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDE1NCxcbiAgICAgIDMwLFxuICAgICAgMTAwLFxuICAgICAgMTg2LFxuICAgICAgODgsXG4gICAgICAyMDIsXG4gICAgICAxODUsXG4gICAgICAxOTAsXG4gICAgICAxMTcsXG4gICAgICAyNDQsXG4gICAgICAxNzIsXG4gICAgICA1NyxcbiAgICAgIDk3LFxuICAgICAgMTc3LFxuICAgICAgMjIyLFxuICAgICAgMTI4LFxuICAgICAgMjQ5LFxuICAgICAgOSxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjY3UDhMUjFGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMzAzMzM3MzY6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYyOTI5ODc3NjU1NjU5OjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lLWG9PUURFTmoxcTdVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiekFLVEFjNUVpeDlPeTJSZk94dE1CcEtJeEFtLzZDQ3R4RTdxM1Q2VXRYND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6QU9RM2J1bXJLemdRQnk4eGhkbnlRM0kvR2dqTkl1VGdtT2tONzhTVVg4a2pZQysySEpQbzdRL09tNEY2MnBsNm9tY0RJUWdEbXVoK3Uwb1dqbk1DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtVnNsSEo1OWh2YXNVbHUzQ3Q0WDJTMVRKRDlraUdCQkJ4aXVMRk0yRkNDQlN3TERqWkNmUm1YVEszUnc1NjAxZnZJZ002cC9ZS202TmZEaDg4NFpqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxMzAzMzM3MzY6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0ODEzNzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMSnBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxKcC5qc29uIjogIntcImtleURhdGFcIjpcImlHN0VKUzZGWXcwVXpYWlcvUGp2c2RDVTBvZFN2aWRiYVBqbXgvdGRYMHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAxNTU0ODgwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxODE3MzExMjA0XCJ9Igp9=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ²²¹-ᴍᴅ 』```","),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "zᴀɪᴅ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Mangrio4u",


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
