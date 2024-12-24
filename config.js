const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233535364068";




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
global.read_status = process.env.AUTO_READ_STATUS || "True"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "233535364068,233535364068";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_04_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MixcbiAgICAgICAgMjUzLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzksXG4gICAgICAgIDIxLFxuICAgICAgICAzMixcbiAgICAgICAgMTcwLFxuICAgICAgICA2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgyLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk0LFxuICAgICAgICA5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzksXG4gICAgICAgIDE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY5LFxuICAgICAgICA0MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1LFxuICAgICAgICA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU5LFxuICAgICAgICA1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgOTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4LFxuICAgICAgICA4MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNiVlhQUC9ZK01hOStBY2VjTzYxQUNOMDV5Uit3azNuN1ZhOW1hS0Jicnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk53TlEwRmpNVG1TUXdGS1VOT3l6d3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTJiMzNkYTQtYzA2NS00NDg0LTliNGItOTdhY2IzYTkxNjk2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgMTMsXG4gICAgICAyMDAsXG4gICAgICAxMzcsXG4gICAgICA0NixcbiAgICAgIDg1LFxuICAgICAgODQsXG4gICAgICA3LFxuICAgICAgMjM5LFxuICAgICAgMjAzLFxuICAgICAgMTYxLFxuICAgICAgNzAsXG4gICAgICA2NSxcbiAgICAgIDIxNixcbiAgICAgIDIxLFxuICAgICAgMjE0LFxuICAgICAgOTQsXG4gICAgICAyMDQsXG4gICAgICAzMixcbiAgICAgIDE0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA4LFxuICAgICAgMTU3LFxuICAgICAgODIsXG4gICAgICAxOTAsXG4gICAgICA3NixcbiAgICAgIDEzOSxcbiAgICAgIDIxNyxcbiAgICAgIDAsXG4gICAgICAxNTgsXG4gICAgICAxNDgsXG4gICAgICAxNzEsXG4gICAgICAyMjYsXG4gICAgICA1MSxcbiAgICAgIDQzLFxuICAgICAgMjQwLFxuICAgICAgMTY4LFxuICAgICAgMjQ4LFxuICAgICAgMTY3LFxuICAgICAgMTgyLFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOYTMzWU1QRVBtUXFMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndURlpPTmF6NFZibktnVElNTTR1cndpSlR6eW51aEp3eEdCQXZTY09HUms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMmluOWRIQnluVU9yRnF5aVdodlY5a2NST2VnSUc3VlpDUy9uaGp1amsrTEVSdHJLeGo2c21XUDdzK0lMaDhDNmJpckJjRVhybU1JWk0zdG1DQ0thZ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib05QancrcGZuQzRpZkYvMGxnRmlnRDM5cTdvaDEyNGlIYWE1WG1rZTB1RDk5TmQrcndVR01tVWdqL1dKMFpCZ0NTdTNwUDJtYzNhNE5DcVFIRHBmQkE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MzUzNjQwNjg6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJsb3JkaHlkcmFcIixcbiAgICBcImxpZFwiOiBcIjI1NDMzMTMzNzA5NzM4NjoxMUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUzNTM2NDA2ODoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUwMDIyMzdcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "lordhydra-1",


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
