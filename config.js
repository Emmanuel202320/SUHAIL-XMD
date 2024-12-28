const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23409079338374";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "fals"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_53_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY0LFxuICAgICAgICA0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODksXG4gICAgICAgIDkyLFxuICAgICAgICA0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUyLFxuICAgICAgICA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICA4NixcbiAgICAgICAgOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NixcbiAgICAgICAgMjI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3LFxuICAgICAgICAxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4LFxuICAgICAgICAxNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDY3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MixcbiAgICAgICAgNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWlpKbEU0eDJ5YXlCcHBTc0FNUDVhOFovQmx0RU5jSmRFOWpaeUw5Ryt4VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDc5MzM4Mzc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1QzhDQjAwQUQyQzNDRkYzMUE5M0Q5NUFGOUVBMEMzOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzUzNjE2MTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDc5MzM4Mzc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQTBBODE1RjY0MjU5NDdDMjVEMUY1REIzMzg4QzM2RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzUzNjE2MTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia19NZWVFMkdTS1Nqanp0UWpodUNqZ1wiLFxuICBcInBob25lSWRcIjogXCJkNjIzNGIyOC02ZTE4LTRhMmQtODQ5YS01YzQ5YzY2Nzk3YmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDIyNCxcbiAgICAgIDI1MCxcbiAgICAgIDI1MyxcbiAgICAgIDI1MyxcbiAgICAgIDE0NyxcbiAgICAgIDE3NyxcbiAgICAgIDE0OCxcbiAgICAgIDU2LFxuICAgICAgMjEsXG4gICAgICAyNDEsXG4gICAgICA2MCxcbiAgICAgIDEzMCxcbiAgICAgIDE1NCxcbiAgICAgIDIyMyxcbiAgICAgIDMwLFxuICAgICAgMjA2LFxuICAgICAgMjUyLFxuICAgICAgMzMsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICAxNDEsXG4gICAgICA0OSxcbiAgICAgIDE5OSxcbiAgICAgIDI0NSxcbiAgICAgIDU1LFxuICAgICAgMTQ0LFxuICAgICAgMTE1LFxuICAgICAgMjA3LFxuICAgICAgNzIsXG4gICAgICAxNTEsXG4gICAgICAxNjYsXG4gICAgICAxMDAsXG4gICAgICA1NSxcbiAgICAgIDYzLFxuICAgICAgMTI4LFxuICAgICAgMTQ4LFxuICAgICAgMTY0LFxuICAgICAgMjAzLFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIksxWlhSQktWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDc5MzM4Mzc0OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY2MDM1NjkyNjQ2NDM1OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU2lsZW50XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFM0eFBBRkVNdUl2cnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMdVl0NVZOQUpoeXpnVjFUclFGM01UN01LYnVtVnZNQkR2cGUrTDlFQ1RjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImx3Y24vYTh6TnFwWVBWLzdkekpHY3hTSlFXdnBuc1lXYnlXR3FWekFZRDQwbEtnZHorbWxrZXlQWHVHUVJPcHRNZDFTT2h6TDI4OEJXTllFWVloaEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9NbTNSUnJPN2FtN1o2WWhuSmJudHAyc2hmeVFUamhURko3aUVYRXQvQlpnY3BHSkNwK0lBLzkwSm5kd1VLazRsT3NNcnN3RW9KSHlVKzdvczFPSWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNzkzMzgzNzQ6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MzYxNjE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkNEXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKQ0QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIMk1BV2ZVWitBckFVUnlUeG9oY2xwbkkwdkxiVXBsNGtSU0wxSWxFM1FBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NzgxNzk3MDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTM2MTYxNjU1N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
