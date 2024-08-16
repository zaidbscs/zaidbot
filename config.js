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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_32_08_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk0LFxuICAgICAgICA4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzLFxuICAgICAgICA0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDksXG4gICAgICAgIDg5LFxuICAgICAgICA5MixcbiAgICAgICAgODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDksXG4gICAgICAgIDI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDk5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDgzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDYyLFxuICAgICAgICA4NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUVGNpaTdBOHllZGxndjF2UmtBNFZ6c04vdnBuSjg4SFRXb3ZPVjZKZUdRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5azZPWkZfd1RvR3hmTDl6aFZaU0t3XCIsXG4gIFwicGhvbmVJZFwiOiBcImIyY2JlZDUyLTMzZWItNGFiMy05ZjVmLWRiMzY3YjA1ZDFmMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICAxNTksXG4gICAgICAxMzUsXG4gICAgICA4LFxuICAgICAgMTMyLFxuICAgICAgNjcsXG4gICAgICA1MCxcbiAgICAgIDUsXG4gICAgICAxMjAsXG4gICAgICAxODQsXG4gICAgICAyMTksXG4gICAgICA5LFxuICAgICAgNTMsXG4gICAgICA4NyxcbiAgICAgIDE2OSxcbiAgICAgIDgwLFxuICAgICAgMTMxLFxuICAgICAgODAsXG4gICAgICA5NSxcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICAxMjcsXG4gICAgICAxOTcsXG4gICAgICAxNjYsXG4gICAgICAxNTYsXG4gICAgICAxMzAsXG4gICAgICAyMDQsXG4gICAgICAxNixcbiAgICAgIDM0LFxuICAgICAgMTk0LFxuICAgICAgMTk4LFxuICAgICAgNjMsXG4gICAgICAxMzIsXG4gICAgICAxNzksXG4gICAgICAyMDksXG4gICAgICAyMzksXG4gICAgICAxNTIsXG4gICAgICA3MyxcbiAgICAgIDE0LFxuICAgICAgODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUxKRUxHSFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEzMDMzMzczNjozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjI5Mjk4Nzc2NTU2NTk6MzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVNYb09RREVQL2gvYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6QUtUQWM1RWl4OU95MlJmT3h0TUJwS0l4QW0vNkNDdHhFN3EzVDZVdFg0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVQV0VwN3NWOHIvN0p1cElQYjZXczhyOTI5SVJxN0Y3Qkd6eE9yeTNwZ0RFbTRwejcwbGhMMUgxN0ltYkxYYzk1US9mMHFNdUFFMjkvcGIwUVVmdEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdXdmcrRHNva0N6WklJUDJUK3Rld1JmM0NLdVNxSWxFcXg1c0F0dFFpQU9vb1ZMYkZ0UExaMXJGUFdIUVB3Y3ZScm5SWjdyZWdTSk1oL1dnOERyMGlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEzMDMzMzczNjozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzgyMjMzOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxKcVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTEpxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQmEyc3JRR3pCeDFhd3VMSnpMbHVxZkhKckVDaDE2R1RmTkgwZ0xlNWJGND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDE1NTQ4ODAyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
