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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_34_12_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDY0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc4LFxuICAgICAgICA0MixcbiAgICAgICAgMjUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgODYsXG4gICAgICAgIDEzLFxuICAgICAgICAxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjExLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIyLFxuICAgICAgICA2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4LFxuICAgICAgICA3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwick9oL0NFSnAxQ0tlelhTblh5RGJEaVI3QnhhSUhlN1gwcDZKWEE4ZUNlND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTU45TGRpRFRRMC1IOWtpUC1kYVI1d1wiLFxuICBcInBob25lSWRcIjogXCI1YzVjNDlhNS03MTM1LTRlYjEtOGQ4Ny1lMjcwMTQ3NzM4NTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAxODIsXG4gICAgICAxNjgsXG4gICAgICAxNzcsXG4gICAgICAyNDAsXG4gICAgICAxOTAsXG4gICAgICAxODYsXG4gICAgICA1OCxcbiAgICAgIDE0OSxcbiAgICAgIDYzLFxuICAgICAgMjI5LFxuICAgICAgNzIsXG4gICAgICA5MCxcbiAgICAgIDIxNCxcbiAgICAgIDU5LFxuICAgICAgMjMxLFxuICAgICAgOTIsXG4gICAgICAxMDcsXG4gICAgICAxODUsXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgMjAwLFxuICAgICAgODUsXG4gICAgICAxNzYsXG4gICAgICAxNDgsXG4gICAgICAyMTUsXG4gICAgICA3NyxcbiAgICAgIDMsXG4gICAgICA2NixcbiAgICAgIDM0LFxuICAgICAgMjA2LFxuICAgICAgMjExLFxuICAgICAgMjUxLFxuICAgICAgNTEsXG4gICAgICAxNDMsXG4gICAgICAxOCxcbiAgICAgIDYwLFxuICAgICAgMTcwLFxuICAgICAgMTQ3LFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0tlemVnSEVMYThnTHNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3VEZaT05hejRWYm5LZ1RJTU00dXJ3aUpUenludWhKd3hHQkF2U2NPR1JrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlR3ZmJ0dmZhM05CdWVybW8ydTl5YkdTQVpIN3FTREdBVGpXRnZsNEFBakEwak14dE1KTTBSbHQ4TnBWbW9xamVOb2hWVWNvYXFJZjl0ZFlxa1daaGh3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJqenB1eFMwYVIyVGVHSzMzcXUxTUMxSU15Yy9CZXpqQ0FRY2Zaa0M3SUp5SERDbndSdmFGU2Vvd01mRWRDVUNYeGx6bGFHUzgvcnhmMGxNQWRhSWdnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTM1MzY0MDY4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJsb3JkaHlkcmFcIixcbiAgICBcImxpZFwiOiBcIjI1NDMzMTMzNzA5NzM4Njo1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTM1MzY0MDY4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MzUyNDQyXG59Igp9"  // PUT your SESSION_ID 


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
