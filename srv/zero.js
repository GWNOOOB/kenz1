//JANGAN DI HAPUS YA

//BASE BARU NIH
//CREATOR BASE : ZERO YT7
//KLO MAU RECODE / EDIT KASIH NAMA CREATOR ASLI NYA
//HARGAI PEMBUAT BASE YA

//JANGAN LUPA FOLLOW
//ALL SOSIAL MEDIAKU

//INSTAGRAM : @Zero_YT7
//YOUTUBE : ZeroYT7
//TIKTOK : @_zeroyt7
//GITHUB : Zero-YT7

//THANKS UDAH MAKE BASE INI


var {
WAConnection,
MessageType,
ChatModification,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
var { color, bgcolor } = require('../mess/color')
var speed = require('performance-now')
var translate = require('@vitalets/google-translate-api')
var { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../mess/myfunc')
var { fetchJson, kyun, fetchText } = require('../mess/fetcher')
var { y2mateA, y2mateV } = require('../mess/y2mate')
var { herolist } = require('../mess/herolist')
var { herodetails } = require('../mess/herodetail')
var Exif = require('../mess/exif')
var { uploadimg, upload } = require('../mess/uploadimg')
var { wikiSearch } = require('../mess/wiki')
var { mediafireDl } = require('../mess/mediafire')
var { lirikLagu } = require('../mess/lirik.js')
var { webp2mp4File } = require('../mess/webp2mp4')
var exif = new Exif()
var request = require('request')
var Math_js = require('mathjs')
var fs = require('fs')
var hx = require('hxz-api')
var brainly = require('brainly-scraper')
var axios = require("axios")
var os = require('os');
var ggs = require('google-it')
var googleImage = require('g-i-s')
var yts = require( 'yt-search')
var ytsd = require('ytsr')
var ffmpeg = require('fluent-ffmpeg')
var fetch = require('node-fetch')
var crypto = require('crypto')  
var simple = require('../mess/simple.js')
var { EmojiAPI } = require("emoji-api")
var emoji = new EmojiAPI()
var { removeBackgroundFromImageFile } = require('remove.bg')
var moment = require('moment-timezone')
var { exec, spawn, execSync } = require('child_process')
var { sizeFormatter } = require('human-readable')
var { performance } = require('perf_hooks')
fakeimg = fs.readFileSync('./img/zero.jpg')
fakethumb = fs.readFileSync('./img/thumbnail.jpg')
faketeks = 'ʀɪғǫɪ ʙᴏᴛᴢ'
blocked = []
multi =true
offline = false
nopref = false
allpref = false
simple != false

//━━━━━━━━━━━━━━━[ STORAGE ]━━━━━━━━━━━━━━━━━//

var welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var config = JSON.parse(fs.readFileSync('./srv/config.js'))
var mute = JSON.parse(fs.readFileSync('./storage/mute.json'))
var antilink = JSON.parse(fs.readFileSync('./storage/antilink.json'))
var antivirtex = JSON.parse(fs.readFileSync('./storage/antivirtex.json'))
var imagi = JSON.parse(fs.readFileSync('./storage/imagi.json'))
var setik = JSON.parse(fs.readFileSync('./storage/setik.json'))
var vien = JSON.parse(fs.readFileSync('./storage/vien.json'))
// GAME
var game = require("../mess/game");
const atm = require("../mess/atm");
let _uang = JSON.parse(fs.readFileSync('./storage/user/uang.json'))
let tebakanime = JSON.parse(fs.readFileSync('./storage/game/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./storage/game/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./storage/game/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./storage/game/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./storage/game/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./storage/game/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./storage/game/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./storage/game/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./storage/game/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./storage/game/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./storage/game/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./storage/game/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./storage/game/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./storage/game/tebaktebakan.json'))
let family100 = [];
//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

NomorOwner = setting.NomorOwner
NameBot = setting.NameBot
NameOwner = setting.NameOwner
readGc = false; 
readPc = true;
hit_today = []
//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

var apikey1 = config.Lolkey
var apikey2 = config.Xteam
var apikey3 = config.Vhtear
var apikey4 = config.Zeks
var apikey5 = config.Zero
var apikey6 = config.Nurutomo
var apikey7 = config.Hunter

//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━━━//

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
}
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
var sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var datw = new Date();
var tahun = datw.getFullYear();
  var bulan = datw.getMonth();
    var tanggal = datw.getDate();
      var hari = datw.getDay();
        var jams = datw.getHours();
          var menit = datw.getMinutes();
            var detik = datw.getSeconds();
switch(hari) {
          case 0: hari = "Minggu"; break;
         case 1: hari = "Senin"; break;
       case 2: hari = "Selasa"; break;
     case 3: hari = "Rabu"; break;
   case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
case 6: hari = "Sabtu"; break;
        }
switch(bulan) {
case 0: bulan = "Januari"; break;
        case 1: bulan = "Februari"; break;
                 case 2: bulan = "Maret"; break;
                          case 3: bulan = "April"; break;
                                   case 4: bulan = "Mei"; break;
                                            case 5: bulan = "Juni"; break;
                                                     case 6: bulan = "Juli"; break;
                                                              case 7: bulan = "Agustus"; break;
                                                                       case 8: bulan = "September"; break;
                                                                                case 9: bulan = "Oktober"; break;
                                                                                         case 10: bulan = "November"; break;
                                                                                                  case 11: bulan = "Desember"; break;
        }

//━━━━━━━━━━━━━━━[ MODULE EXPORT ]━━━━━━━━━━━━━━━━━//
 
module.exports = zero = async (zero, zer) => {
try {
if (!zer.hasNewMessage) return
zer = zer.messages.all()[0]
if (!zer.message) return
if (zer.key && !zer.key.remoteJid == 'status@broadcast') return
global.blocked
zer.message = (Object.keys(zer.message)[0] === 'ephemeralMessage') ? zer.message.ephemeralMessage.message : zer.message
var typei = Object.keys(zer.message)[0]
global.prefix
var content = JSON.stringify(zer.message)
var from = zer.key.remoteJid
var type = Object.keys(zer.message)[0]
var { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var datre = new Date().toLocaleDateString()
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm :ss')
var d = new Date
var locale = 'id'
var gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
var weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
var week = d.toLocaleDateString(locale, { weekday: 'long' })
var datee = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
var waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
var calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
       })
var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var haris = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
var petik = '```'
var math = (teks) => {
           return Math.floor(teks)
       }
var cmd = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
} else {
if (nopref){
prefix = ''
} else {
if (allpref){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
} else {
prefix = prefa
}
}
}
body = (type === 'conversation' && zer.message.conversation.startsWith(prefix)) ? zer.message.conversation : (type == 'imageMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'videoMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'extendedTextMessage') && zer.message[type].text.startsWith(prefix) ? zer.message[type].text : (type == 'listResponseMessage') && zer.message[type].singleSelectReply.selectedRowId ? zer.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && zer.message[type].selectedButtonId ? zer.message[type].selectedButtonId : ''
var budo = (typei === 'conversation') ? zer.message.conversation : (typei === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var budy = (type === 'conversation') ? zer.message.conversation : (type === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var isCmd = body.startsWith(prefix)
var arg = budy.slice(command.length + 2, budy.length)
var q = args.join(' ')
hit_today.push(command)
var timestampi = speed();
var latensyi = speed() - timestampi
var sender = isGroup ? zer.participant : zer.key.remoteJid
var senderr = zer.key.fromMe ? zero.user.jid : zer.key.remoteJid.endsWith('@g.us') ? zer.participant : zer.key.remoteJid
var pes = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''
var messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
var botNumber = zero.user.jid
var Verived = "0@s.whatsapp.net"
var num = "6285157740529@s.whatsapp.net"
var ownerNumber = ["6285866295942@s.whatsapp.net",`${NomorOwner}@s.whatsapp.net`]
var isGroup = from.endsWith('@g.us')
var sender = zer.key.fromMe ? zero.user.jid : isGroup ? zer.participant : zer.key.remoteJid
var senderNumber = sender.split("@")[0] 
var conts = zer.key.fromMe ? zero.user.jid : zero.contacts[sender] || { notify: jid.replace(/@.+/, '') }
var pushname = zer.key.fromMe ? zero.user.name : conts.notify || conts.vname || conts.name || '-'
var groupMetadata = isGroup ? await zero.groupMetadata(from) : ''
var groupName = isGroup ? groupMetadata.subject : ''
var groupId = isGroup ? groupMetadata.jid : ''
var groupMembers = isGroup ? groupMetadata.participants : ''
var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
var groupDesc = isGroup ? groupMetadata.desc : ''
var groupOwner = isGroup ? groupMetadata.owner : ''
var isOwner = ownerNumber.includes(sender)
var isMuted = isGroup ? mute.includes(from) : false
var isWelcome = isGroup ? welcome.includes(from) : false
var isGroupAdmins = groupAdmins.includes(sender) || false
var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
var isAntilink = isGroup ? antilink.includes(from) : false
var isAntivirtex = isGroup ? antivirtex.includes(from) : false
var isButton = (type == 'buttonsResponseMessage') ? zer.message.buttonsResponseMessage.selectedButtonId : ''
function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━━━//
		
mess = {
wait: 'Mohon Tunggu... Sedang Proses',
success: 'Done...Jangam Lupa Subscribe Zero YT7',
wrongFormat: 'Format salah, Silahkan Cek Lagi Di List Menu',
error: {
stick: 'Sticker Salah Mohon Coba Lagi',
Iv: 'Link Error Silahkan Ganti Yg Lain'
},
only: {
owner: 'Khusus Owner Bot',
group: 'Khusus Di Group',
bodmin: 'Jadikan Bot Admin Dulu',
admin: 'Khusus Admin Group'
}
}
//━━━━━━━━━━━━━━━[ FAKE STORE ]━━━━━━━━━━━━━━━━━//
       //FAKE STORE
      const fakeitem = (teks) => {
            zero.sendMessage(from, teks, text, {
                quoted: {
        key:{
        fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`img/thumbnail.jpg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`TERIMA KASIH TELAH SEWA BOT DI RIFQII STORE`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}

        
        const p1 = (teks) => {
            zero.sendMessage(from, teks, text, {
                quoted: {
        key:{
        fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`img/thumbnail.jpg`),"itemCount":2021,"status":"INQUIRY","surface":"CATALOG","message":`STATUS PESANAN :DI PROSES\n${groupMetadata.subject}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}

const d1 = (teks) => {
            zero.sendMessage(from, teks, text, {
                quoted: {
        key:{
        fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`img/thumbnail.jpg`),"itemCount":2021,"status":"INQUIRY","surface":"CATALOG","message":`STATUS PESANAN :DONE\n${groupMetadata.subject}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}

//━━━━━━━━━━━━━━━[ CONNECTION ]━━━━━━━━━━━━━━━━━//
		
var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
/**var reply = (teks) => {
zero.sendMessage(from, teks, text, {quoted: zer})
}**/
var reply = (teks) => {
zero.sendMessage(from, teks, text, { thumbnail: fakethumb, sendEphemeral: true, quoted: zer, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${hari} - ${tanggal} - ${bulan} - ${tahun}`,body:"SEWA BOT? PENCET INI",previewType:"PHOTO",thumbnail:fakethumb,sourceUrl:`https://wa.me/6289636634511?text=sewa+bot`}}})
}
var sendMess = (hehe, teks) => {
zero.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? zero.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zero.sendMessage(from, teks.trim(), extendedText, { quoted: zer, contextInfo: { "mentionedJid": memberr } })
}
var costum = (pesan, tipe, target, target2) => {
zero.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}

            //━━━━━━━━━━━━━━━[ auto read ]━━━━━━━━━━━━━━━━━// 
    // 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙂𝙘
var ampun = await zero.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await zero.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙋𝙘
var chatss = await zero.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await zero.chatRead(jid)
})

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

var ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 169,
status: 1,
surface : 1,
message: `Subscribe Zero YT7`, 
orderTitle: `Subscribe Zero YT7`,
thumbnail: fakethumb,
sellerJid: '0@s.whatsapp.net' 
}
}
}

// BOT STAT
var { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = zero.user.phone
//━━━━━━━━━━━━━━━[ bot status ]━━━━━━━━━━━━━━━━━//
const formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })

//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
zero.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
)
}
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButImage = async (
id,
text1,
desc1,
gam1,
but = [],
options = {}
) => {
kma = gam1;
mhan = await zero.prepareMessage(from, kma, image);
var buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4,
}
zero.sendMessage(
id,
buttonMessages,
MessageType.buttonsMessage,
options
)
}
//━━━━━━━━━━━━━━━[ game  ]━━━━━━━━━━━━━━━━━// 
             game.cekWaktuFam(zer, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./storage/game/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                zero.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./storage/game/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./storage/game/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_?? Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./storage/game/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./storage/game/kuismath.json", JSON.stringify(kuismath))
                } 
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./storage/game/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./storage/game/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./storage/game/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./storage/game/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./storage/game/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar??*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./storage/game/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./storage/game/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./storage/game/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./storage/game/tebakata.json", JSON.stringify(tebakata))
                }
            }
//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

var sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
zero.sendMessage(to, media, MessageType.sticker,{quoted:zer})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
var sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           zero.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted: zer})
           fs.unlinkSync(asw)
});
});
});
}
var sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
var fn = Date.now() / 10000;
var filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
zero.sendMessage(to, media, type, { quoted: zer, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}
var sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
zero.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
zero.sendMessage(from, hasil, type, options).catch(e => {
zero.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}	
var sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${NameBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        zero.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:zer, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            var hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await zero.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        zero.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }

//━━━━━━━━━━━━━━━[ MESSAGE GROUP ]━━━━━━━━━━━━━━━━━//

if (isGroup && isAntilink && !zer.key.fromMe) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply("admin bebas");
reply("ANTILINK DETECTED!! Maaf Kamu Dikick Dari Group");
zero.groupRemove(from, [sender]);
}
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntivirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 VIRTEX DETECTED!! 」\n\nKamu Mengirimkan Virus, Maaf Kamu Di Kick Dari Group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
zero.groupRemove(from, [sender])
}     
if (isMuted){
            if (!isGroupAdmins && !isOwner && !zer.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./storage/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }

//━━━━━━━━━━━━━━━[ MEDIA ]━━━━━━━━━━━━━━━━━//
            
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
var sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]

//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

switch (command) {                              
   case 'command':

stod = `${sender}`
listMsg = {
buttonText: 'LIST MENU',
footerText: '*_© Rifqi Botz_*',
description: `Hai kak @${stod.split('@')[0]}, Silahkan pilih menu disini`,
sections: [
                     {
                      "title": `${time}`,
rows: [
       {
           "title": "Owner Menu",
           "rowId": `ownermenu`
           },
	       {
           "title": "Download Menu",
           "rowId": `downloadmenu`
           },
	       {
           "title": "Group Menu",
           "rowId": `groupmenu`
           },
	       {
	       "title": "Tools Menu",
           "rowId": `toolsmenu`
           },
           {
	       "title": "Storage Menu",
           "rowId": `storagemenu`
           },
           {
           "title": "Fun Menu",
           "rowId": `funmenu`
           },
           {
           "title": "Game Menu",
           "rowId": `game`
           },
           {
           "title": "Ephoto Menu",
           "rowId": `ephotomenu`
           },
           {
	       "title": "Maker Menu",
           "rowId": `makermenu`
           },
           {
           "title": "All Menu",
           "rowId": `allmenu`
           },
           {
           "title": "Owner Bot",
           "rowId": `owner`
           },
	       {
           "title": "Info Bot",
           "rowId": `infobot`
           },
           {
           "title": "Sticker Menu",
           "rowId": `stikermenu`
           },
          {
           "title": "Textpro2 Menu",
           "rowId": `textpro2`
           }
                        ]
                     }],
listType: 1
}
zero.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted: zer})
break
 case 'menu': 
    yoi = await fetchJson(`https://api.lolhuman.xyz/api/countdown/1/1/2022?apikey=${config.Lolkey}`)
            tahunBaru = yoi.result
            yoii = await fetchJson(`https://api.lolhuman.xyz/api/countdown/2/4/2022?apikey=${config.Lolkey}`)
            puasa = yoii.result
            yoiii = await fetchJson(`https://api.lolhuman.xyz/api/countdown/2/5/2022?apikey=${config.Lolkey}`)
            bada = yoiii.result
             thu = await zero.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text) 
              groups = zero.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zero.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zero.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
                            try {
	        charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
               var pic = await zero.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
        menu =`  
${ucapanWaktu} Kak ${pushname}

┌❏ 「 *INDONESIA TIME* 」
│◦➛WIB : ${wib}
│◦➛WITA : ${wita}
└❏ WIT : ${wit}
                          
┌❏ 「 *TODAY* 」
│◦➛${ucapanWaktu}
│◦➛Jam : ${jam} WIB
└❏ Tanggal : ${tanggal}-${bulan}-${tahun}}

┌❏ 「 *WAKTU MENUJU* 」
│◦➛Menuju Tahun Baru : ${tahunBaru}
│◦➛Menuju Ramadhan : ${puasa}
└❏ Menuju Idul Fitri : ${bada}

┌❏ 「 *DEVICE* 」
│◦➛Whatsapp : ${zero.user.phone.wa_version}
│◦➛Merk HP : ${device_manufacturer}
│◦➛Versi HP : ${device_model}
│◦➛Versi OS : ${os_version}
│◦➛RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◦➛MCC : ${mcc}
└❏ MNC : ${mnc}

┌─❑「 *BOT INFO* 」
│◦➛ Owner :${NameOwner}
│◦➛Group Chats : ${groups.length}
│◦➛Private Chat : ${privat.length}
│◦➛Total Chat : ${totalChat.length}
│◦➛Baterai : ${baterai}% ${charger}
│◦➛Total Hit : ${hit_today.length}
│◦➛Active : ${runtime(process.uptime())}
│◦➛▢ Platform : ${os.platform()}
└❏ 
`
wibu = `${time}`
/**zero.sendMessage(m.chat, { contentText: `${menu}`, footerText: `${wibu}`, "buttons": [
{buttonId:`${prefix}command`,buttonText:{displayText:'⬡ LIST MENU\n\njika bot tidak merespon ketik !command'},type:1},
{buttonId:`${prefix}allmenu`,buttonText:{displayText:'⬡ ALL MENU\n\njika bot tidak merespon ketik !allmenu'},type:1},
{buttonId:`${prefix}sewabot`,buttonText:{displayText:'🔖SEWA BOT\n\njika bot tidak merespon ketik !sewabot'},type:1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "mimetype": "application/zip", "title": `${ucapanWaktu}`, "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": " Rifqi Botz", "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": ikyads2}}, MessageType.buttonsMessage, { quoted: floc, thumbnail: ikyads2})**/
     zero.sendMessage(from, { contentText: `${menu}`, footerText: `${wibu}`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: `⬡ LIST MENU\n\n_jika bot tidak merespon ketik ${prefix}command_` }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: `⬡ ALL MENU\n\n_jika bot tidak merespon ketik ${prefix}allmenu_` }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: `⬡ SEWA BOT\n\n_jika bot tidak merespon ketik ${prefix}sewabot_` }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakethumb, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
     break
 case 'ownermenu':
 menu = `❏ 「 \`\`\`OWNER MENU\`\`\` 」
 
 ➤ ${prefix}bc [  _teks/reply gif/image/video with caption_ ]
 ➤ ${prefix}delchat
 ➤ ${prefix}mute
 ➤ ${prefix}unmute
 ➤ ${prefix}spam [ _teks|jumlah_ ]
 ➤ ${prefix}demoteall
 ➤ ${prefix}promoteall
 ➤ ${prefix}spamsw [ _teks|jumlah_ ]
 ➤ ${prefix}upswteks [ _teks_ ]
 ➤ ${prefix}upswlokasi [ _teks_ ]
 ➤ ${prefix}upswaudio [ _reply audio_ ]
 ➤ ${prefix}upswvoice [ _reply audio_ ]
 ➤ ${prefix}upswsticker [ _reply sticker_ ]
 ➤ ${prefix}upswimage [ _reply image with caption_ ]
 ➤ ${prefix}upswgif  [ _reply gif with caption_ ]
 ➤ ${prefix}upswvideo [ _reply video with caption_ ]
 ➤ ${prefix}shutdown
 ➤ ${prefix}offline
 ➤ ${prefix}online
 ➤ ${prefix}exif [ _nama|author_ ]
 ➤ ${prefix}setppbot [ _reply image_ ]
 ➤ ${prefix}setnamebot [ _teks_ ]
 ➤ ${prefix}setprefix [ _multi/nopref/prefix_ ]
 ➤ ${prefix}setbio [ _teks_ ]
 ➤ ${prefix}leave
 ➤ ${prefix}restart
 ➤ ${prefix}join [ _link group_ ]
 ➤ ${prefix}readall
 ➤ ${prefix}unreadall
 ➤ ${prefix}pin
 ➤ ${prefix}unpin
 ➤ ${prefix}nano [ _nama file_ ]
 ➤ ${prefix}report [ _teks_ ]
 ➤ ${prefix}runtime
 ➤ ${prefix}speed`
 but = [
               { buttonId: 'command', buttonText: { displayText: 'back to menu' }, type: 1 }, 
                { buttonId: 'iklan', buttonText: { displayText: 'sewa bot' }, type: 1 }
                 ]
sendButLocation(from, menu, "ʀɪғǫɪʙᴏᴛᴢ", fakeimg, but, zer)
break
case 'downloadmenu':
menu = `❏ 「 \`\`\`DOWNLOAD MENU\`\`\` 」

➤ ${prefix}infogempa
➤ ${prefix}herolist 
➤ ${prefix}herodetail [ _hero_ ]
➤ ${prefix}google [ _search_ ]
➤ ${prefix}gimage [ _search_ ]
➤ ${prefix}wiki [ _search_ ]
➤ ${prefix}mediafire [ _link_ ]
➤ ${prefix}ytsearch [ _judul_ ]
➤ ${prefix}ytmp4 [ _link yt_ ]
➤ ${prefix}ytmp3 [ _link yt_ ]
➤ ${prefix}play [ _judul lagu_ ]
➤ ${prefix}tinyurl  [ _link_ ]
➤ ${prefix}fetch [ _link_ ]
➤ ${prefix}igdl [ _link_ ]
➤ ${prefix}tiktokdl [ _link_ ]
➤ ${prefix}lirik [ _judul_ ]
➤ ${prefix}tourl [ _reply image/video_ ]
➤ ${prefix}resepmasakan [ _judul_ ]
➤ ${prefix}artimimpi [ _teks_ ]
➤ ${prefix}bilangangka [ _angka_ ]
➤ ${prefix}kalkulator [ _angka_ ]
➤ ${prefix}fancytext [ _teks_ ]
➤ ${prefix}githubstalk  [ _username_ ]
➤ ${prefix}translate [ _teks kodebhs_ ]
➤ ${prefix}playstore [ _search_ ]
➤ ${prefix}brainly [ _search_ ]
➤ ${prefix}igstalk [ _link_ ]
➤ ${prefix}twitter [ _link_ ]
➤ ${prefix}twmp3 [ _link_ ]
➤ ${prefix}linkwa [ _search_ ]
➤ ${prefix}fb [ _link_ ]
➤ ${prefix}chara [ _search_ ]
➤ ${prefix}otaku [ _search_ ]
➤ ${prefix}komiku [ _search_ ]`
but = [
               { buttonId: 'command', buttonText: { displayText: 'back to menu' }, type: 1 }, 
                { buttonId: 'iklan', buttonText: { displayText: 'sewa bot' }, type: 1 }
                 ]
sendButLocation(from, menu, "ʀɪғǫɪʙᴏᴛᴢ", fakeimg, but, zer)
break
case 'groupmenu':
menu =`❏ 「 \`\`\`GROUP MENU\`\`\` 」

➤ ${prefix}getpict [ _@tag_ ]
➤ ${prefix}getname [ _reply target_ ]
➤ ${prefix}getbio [ _reply target_ ]
➤ ${prefix}creategrup [ _nama|@tag_ ]
➤ ${prefix}getpp
➤ ${prefix}mute
➤ ${prefix}unmute
➤ ${prefix}promoteall
➤ ${prefix}demoteall
➤ ${prefix}getdeskgc [ _teks_ ]
➤ ${prefix}sider [ _reply pesan bot_ ]
➤ ${prefix}hacked [ _teks_ ]
➤ ${prefix}fitnah [ _@tag|teks1|teks2_ ]
➤ ${prefix}kontak [ _@tag|nama_ ]
➤ ${prefix}kontag [ _@tag|nama_ ]
➤ ${prefix}resetlinkgc
➤ ${prefix}sticktag [ _nama sticker_ ]
➤ ${prefix}totag [ _reply media_ ]
➤ ${prefix}antilink [ _enable / disable_ ]
➤ ${prefix}antivirtex [ _enable / disable_ ]
➤ ${prefix}welcome [ _enable / disable_ ]
➤ ${prefix}group [ _open / close_ ]
➤ ${prefix}linkgrup
➤ ${prefix}hidetag [ _teks_ ]
➤ ${prefix}tagall
➤ ${prefix}setdesc [ _teks_ ]
➤ ${prefix}setname [ _teks_ ]
➤ ${prefix}setpp [ _reply image_ ]
➤ ${prefix}kick [ _@tag_ ]
➤ ${prefix}add [ _nomor_ ]
➤ ${prefix}promote [ _@tag_ ]
➤ ${prefix}demote [ _@tag_ ]`
but = [
               { buttonId: 'command', buttonText: { displayText: 'back to menu' }, type: 1 }, 
                { buttonId: 'iklan', buttonText: { displayText: 'sewa bot' }, type: 1 }
                 ]
sendButLocation(from, menu, "ʀɪғǫɪʙᴏᴛᴢ", fakeimg, but, zer)
break
case 'toolsmenu':
menu = `❏ 「 \`\`\`TOOLS MENU\`\`\` 」

➤ ${prefix}stickerwm [ _nama|author_ ]
➤ ${prefix}takestick [ _nama|author_ ]
➤ ${prefix}dadu
➤ ${prefix}tomp3 [ _reply video_ ]
➤ ${prefix}tomp4 [ _reply sticker gif_ ]
➤ ${prefix}robot [ _reply audio_ ]
➤ ${prefix}balik [ _reply audio_ ]
➤ ${prefix}bass [ _reply audio_ ]
➤ ${prefix}gemuk [ _reply audio_ ]
➤ ${prefix}detikvn [ _reply audio caption angka_ ]
➤ ${prefix}detikvideo [ _reply video caption angka_ ]
➤ ${prefix}sticker
➤ ${prefix}attp [ _teks_ ]
➤ ${prefix}toimg`
but = [
               { buttonId: 'command', buttonText: { displayText: 'back to menu' }, type: 1 }, 
                { buttonId: 'iklan', buttonText: { displayText: 'sewa bot' }, type: 1 }
                 ]
sendButLocation(from, menu, "ʀɪғǫɪʙᴏᴛᴢ", fakeimg, but, zer)
break
case 'storagemenu':
menu =`❏ 「 \`\`\`STORAGE MENU\`\`\` 」

➤ ${prefix}listimage
➤ ${prefix}liststicker
➤ ${prefix}listvn
➤ ${prefix}addsticker [ _nama_ ]
➤ ${prefix}delsticker [ _nama_ ]
➤ ${prefix}addvn [ _nama_ ]
➤ ${prefix}delvn [ _nama_ ]
➤ ${prefix}addimage [ _nama_ ]
➤ ${prefix}delimage [ _nama_ ]`
but = [
               { buttonId: 'command', buttonText: { displayText: 'back to menu' }, type: 1 }, 
                { buttonId: 'iklan', buttonText: { displayText: 'sewa bot' }, type: 1 }
                 ]
sendButLocation(from, menu, "ʀɪғǫɪʙᴏᴛᴢ", fakeimg, but, zer)
break
 case 'stikermenu':
 menu = `❏ 「 \`\`\`STICKER MENU\`\`\` 」
 
 ➤ ${prefix}stiker
 ➤ ${prefix}ttp
 ➤ ${prefix}ttp2
 ➤ ${prefix}ttp3
 ➤ ${prefix}patrick
 ➤ ${prefix}amongus
 ➤ ${prefix}gura
 ➤ ${prefix}dadu
 ➤ ${prefix}stickeranime`
 but = [
               { buttonId: 'command', buttonText: { displayText: 'back to menu' }, type: 1 }, 
                { buttonId: 'iklan', buttonText: { displayText: 'sewa bot' }, type: 1 }
                 ]
sendButLocation(from, menu, "ʀɪғǫɪʙᴏᴛᴢ", fakeimg, but, zer)
break
case 'textpro2':
 menu = `❏ 「 \`\`\`TEXTPRO2 MENU\`\`\` 」

➤ ${prefix} blackpink [ _teks_ ]
➤ ${prefix} rainbow2 [ _teks_ ]
➤ ${prefix} water_pipe [ _teks_ ]
➤ ${prefix} halloween [ _teks_ ]
➤ ${prefix} sketch [ _teks_ ]
➤ ${prefix} sircuit [ _teks_ ]
➤ ${prefix} discovery [ _teks_ ]
➤ ${prefix} metallic2 [ _teks_ ]
➤ ${prefix} fiction [ _teks_ ]
➤ ${prefix} demon [ _teks_ ]
➤ ${prefix} transformer [ _teks_ ]
➤ ${prefix} berry [ _teks_ ]
➤ ${prefix} thunder [ _teks_ ]
➤ ${prefix} magma [ _teks_ ]
➤ ${prefix} 3dstone [ _teks_ ]
➤ ${prefix} neon [ _teks_ ]
➤ ${prefix} glitch [ _teks_ ]
➤ ${prefix} harry_potter [ _teks_ ]
➤ ${prefix} embossed [ _teks_ ]
➤ ${prefix} broken [ _teks_ ]
➤ ${prefix} papercut [ _teks_ ]
➤ ${prefix} gradient [ _teks_ ]
➤ ${prefix} glossy [ _teks_ ]
➤ ${prefix} watercolor [ _teks_ ]
➤ ${prefix} multicolor [ _teks_ ]
➤ ${prefix} neon_devil [ _teks_ ]
➤ ${prefix} underwater [ _teks_ ]
➤ ${prefix} bear [ _teks_ ]
➤ ${prefix} wonderfulg [ _teks_ ]
➤ ${prefix} christmas [ _teks_ ]
➤ ${prefix} neon_light [ _teks_ ]
➤ ${prefix} snow [ _teks_ ]
➤ ${prefix} cloudsky [ _teks_ ]
➤ ${prefix} luxury2 [ _teks_ ]
➤ ${prefix} gradient2 [ _teks_ ]
➤ ${prefix} summer [ _teks_ ]
➤ ${prefix} writing [ _teks_ ]
➤ ${prefix} engraved [ _teks_ ]
➤ ${prefix} summery [ _teks_ ]
➤ ${prefix} 3dglue [ _teks_ ]
➤ ${prefix} metaldark [ _teks_ ]
➤ ${prefix} neonlight [ _teks_ ]
➤ ${prefix} oscar [ _teks_ ]
➤ ${prefix} minion [ _teks_ ]
➤ ${prefix} holographic [ _teks_ ]
➤ ${prefix} purple [ _teks_ ]
➤ ${prefix} glossyb [ _teks_ ]
➤ ${prefix} deluxe2 [ _teks_ ]
➤ ${prefix} glossyc [ _teks_ ]
➤ ${prefix} fabric [ _teks_ ]
➤ ${prefix} neonc [ _teks_ ]
➤ ${prefix} newyear [ _teks_ ]
➤ ${prefix} newyear2 [ _teks_ ]
➤ ${prefix} metals [ _teks_ ]
➤ ${prefix} xmas [ _teks_ ]
➤ ${prefix} blood [ _teks_ ]
➤ ${prefix} darkg [ _teks_ ]
➤ ${prefix} joker [ _teks_ ]
➤ ${prefix} wicker [ _teks_ ]
➤ ${prefix} natural [ _teks_ ]
➤ ${prefix} firework [ _teks_ ]
➤ ${prefix} skeleton [ _teks_ ]
➤ ${prefix} balloon [ _teks_ ]
➤ ${prefix} balloon2 [ _teks_ ]
➤ ${prefix} balloon3 [ _teks_ ]
➤ ${prefix} balloon4 [ _teks_ ]
➤ ${prefix} balloon5 [ _teks_ ]
➤ ${prefix} balloon6 [ _teks_ ]
➤ ${prefix} balloon7 [ _teks_ ]
➤ ${prefix} steel [ _teks_ ]
➤ ${prefix} gloss [ _teks_ ]
➤ ${prefix} denim [ _teks_ ]
➤ ${prefix} decorate [ _teks_ ]
➤ ${prefix} decorate2 [ _teks_ ]
➤ ${prefix} peridot [ _teks_ ]
➤ ${prefix} rock [ _teks_ ]
➤ ${prefix} glass [ _teks_ ]
➤ ${prefix} glass2 [ _teks_ ]
➤ ${prefix} glass3 [ _teks_ ]
➤ ${prefix} glass4 [ _teks_ ]
➤ ${prefix} glass5 [ _teks_ ]
➤ ${prefix} glass6 [ _teks_ ]
➤ ${prefix} glass7 [ _teks_ ]
➤ ${prefix} glass8 [ _teks_ ]
➤ ${prefix} captain_as2 [ _teks_ ]
➤ ${prefix} robot [ _teks_ ]
➤ ${prefix} equalizer [ _teks_ ]
➤ ${prefix} toxic [ _teks_ ]
➤ ${prefix} sparkling [ _teks_ ]
➤ ${prefix} sparkling2 [ _teks_ ]
➤ ${prefix} sparkling3 [ _teks_ ]
➤ ${prefix} sparkling4 [ _teks_ ]
➤ ${prefix} sparkling5 [ _teks_ ]
➤ ${prefix} sparkling6 [ _teks_ ]
➤ ${prefix} sparkling7 [ _teks_ ]
➤ ${prefix} decorative [ _teks_ ]
➤ ${prefix} chocolate [ _teks_ ]
➤ ${prefix} strawberry [ _teks_ ]
➤ ${prefix} koifish [ _teks_ ]
➤ ${prefix} bread [ _teks_ ]
➤ ${prefix} matrix [ _teks_ ]
➤ ${prefix} blood2 [ _teks_ ]
➤ ${prefix} neonligth2 [ _teks_ ]
➤ ${prefix} thunder2 [ _teks_ ]
➤ ${prefix} 3dbox [ _teks_ ]
➤ ${prefix} neon2 [ _teks_ ]
➤ ${prefix} roadw [ _teks_ ]
➤ ${prefix} bokeh [ _teks_ ]
➤ ${prefix} gneon [ _teks_ ]
➤ ${prefix} advanced [ _teks_ ]
➤ ${prefix} dropwater [ _teks_ ]
➤ ${prefix} wall [ _teks_ ]
➤ ${prefix} chrismast [ _teks_ ]
➤ ${prefix} honey [ _teks_ ]
➤ ${prefix} drug [ _teks_ ]
➤ ${prefix} marble [ _teks_ ]
➤ ${prefix} marble2 [ _teks_ ]
➤ ${prefix} ice [ _teks_ ]
➤ ${prefix} juice [ _teks_ ]
➤ ${prefix} rusty [ _teks_ ]
➤ ${prefix} abstra [ _teks_ ]
➤ ${prefix} biscuit [ _teks_ ]
➤ ${prefix} wood [ _teks_ ]
➤ ${prefix} scifi [ _teks_ ]
➤ ${prefix} metalr [ _teks_ ]
➤ ${prefix} purpleg [ _teks_ ]
➤ ${prefix} shiny [ _teks_ ] 
➤ ${prefix} jewelry [ _teks_ ]
➤ ${prefix} jewelry2 [ _teks_ ]
➤ ${prefix} jewelry3 [ _teks_ ]
➤ ${prefix} jewelry4 [ _teks_ ]
➤ ${prefix} jewelry5 [ _teks_ ]
➤ ${prefix} jewelry6 [ _teks_ ]
➤ ${prefix} jewelry7 [ _teks_ ]
➤ ${prefix} jewelry8 [ _teks_ ]
➤ ${prefix} metalh [ _teks_ ]
➤ ${prefix} golden [ _teks_ ]
➤ ${prefix} glitter [ _teks_ ]
➤ ${prefix} glitter2 [ _teks_ ]
➤ ${prefix} glitter3 [ _teks_ ]
➤ ${prefix} glitter4 [ _teks_ ]
➤ ${prefix} glitter5 [ _teks_ ]
➤ ${prefix} glitter6 [ _teks_ ]
➤ ${prefix} glitter7 [ _teks_ ]
➤ ${prefix} metale [ _teks_ ]
➤ ${prefix} carbon [ _teks_ ]
➤ ${prefix} candy [ _teks_ ]
➤ ${prefix} metalb [ _teks_ ]
➤ ${prefix} gemb [ _teks_ ]
➤ ${prefix} 3dchrome [ _teks_ ]
➤ ${prefix} metalb2 [ _teks_ ]
➤ ${prefix} metalg [ _teks_ ]`
 but = [
               { buttonId: 'command', buttonText: { displayText: 'back to menu' }, type: 1 }, 
                { buttonId: 'iklan', buttonText: { displayText: 'sewa bot' }, type: 1 }
                 ]
sendButLocation(from, menu, "ʀɪғǫɪʙᴏᴛᴢ", fakeimg, but, zer)
break
case 'game':
 menu = `❏ 「 \`\`\`GAME MENU\`\`\` 」

➤ ${prefix}siapaaku
➤ ${prefix}kuismath
➤ ${prefix}asahotak
➤ ${prefix}tebaklirik
➤ ${prefix}tebaklagu
➤ ${prefix}tebakkata
➤ ${prefix}susunkata
➤ ${prefix}kimiakuis
➤ ${prefix}caklontong
➤ ${prefix}tebakjenaka
➤ ${prefix}tebakanime
➤ ${prefix}tebaktebakan
➤ ${prefix}tebakgambar
➤ ${prefix}tebakbendera`
 but = [
               { buttonId: 'command', buttonText: { displayText: 'back to menu' }, type: 1 }, 
                { buttonId: 'iklan', buttonText: { displayText: 'sewa bot' }, type: 1 }
                 ]
sendButLocation(from, menu, "ʀɪғǫɪʙᴏᴛᴢ", fakeimg, but, zer)
break

case 'funmenu':
menu =`❏ 「 \`\`\`FUN MENU\`\`\` 」

➤ ${prefix}rate
➤ ${prefix}kapankah
➤ ${prefix}apakah
➤ ${prefix}bisakah
➤ ${prefix}caripesan [ _teks|jumlah_ ] 
➤ ${prefix}slot
➤ ${prefix}suit [ _gunting/batu/kertas_ ]
➤ ${prefix}tag [ _nomor_ ]
➤ ${prefix}tagme
➤ ${prefix}readmore [ _teks1|teks2_ ]
➤ ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
➤ ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
➤ ${prefix}pantun
➤ ${prefix}tospam  [ _reply audio/sticker/image|jumlah_ ]`
but = [
               { buttonId: 'command', buttonText: { displayText: 'back to menu' }, type: 1 }, 
                { buttonId: 'iklan', buttonText: { displayText: 'sewa bot' }, type: 1 }
                 ]
sendButLocation(from, menu, "ʀɪғǫɪʙᴏᴛᴢ", fakeimg, but, zer)
break
case 'ephotomenu':
menu =`❏ 「 \`\`\`EPHOTO MENU\`\`\` 」

➤ ${prefix}blackpink  [ _teks_ ]
➤ ${prefix}neon  [ _teks_ ]
➤ ${prefix}greenneon  [ _teks_ ]
➤ ${prefix}advanceglow  [ _teks_ ]
➤ ${prefix}futureneon  [ _teks_ ]
➤ ${prefix}sandwriting  [ _teks_ ]
➤ ${prefix}sandsummer  [ _teks_ ]
➤ ${prefix}sandengraved  [ _teks_ ]
➤ ${prefix}metaldark  [ _teks_ ]
➤ ${prefix}neonlight  [ _teks_ ]
➤ ${prefix}holographic  [ _teks_ ]
➤ ${prefix}text1917 [ _teks_ ]  [ _teks_ ]
➤ ${prefix}minion  [ _teks_ ]
➤ ${prefix}deluxesilver  [ _teks_ ]
➤ ${prefix}newyearcard  [ _teks_ ]
➤ ${prefix}bloodfrosted  [ _teks_ ]
➤ ${prefix}halloween  [ _teks_ ]
➤ ${prefix}jokerlogo  [ _teks_ ]
➤ ${prefix}fireworksparkle  [ _teks_ ]
➤ ${prefix}natureleaves  [ _teks_ ]
➤ ${prefix}bokeh  [ _teks_ ]
➤ ${prefix}toxic  [ _teks_ ]
➤ ${prefix}strawberry  [ _teks_ ]
➤ ${prefix}box3d  [ _teks_ ]
➤ ${prefix}roadwarning  [ _teks_ ]
➤ ${prefix}breakwall  [ _teks_ ]
➤ ${prefix}icecold  [ _teks_ ]
➤ ${prefix}luxury  [ _teks_ ]
➤ ${prefix}cloud  [ _teks_ ]
➤ ${prefix}summersand  [ _teks_ ]
➤ ${prefix}horrorblood  [ _teks_ ]
➤ ${prefix}thunder  [ _teks_ ]
➤ ${prefix}pornhub  [ _teks_ ]  [ _teks_ ]
➤ ${prefix}glitch  [ _teks_ ]  [ _teks_ ]
➤ ${prefix}avenger  [ _teks_ ]  [ _teks_ ]
➤ ${prefix}space  [ _teks_ ]  [ _teks_ ]
➤ ${prefix}ninjalogo  [ _teks_ ]  [ _teks_ ]
➤ ${prefix}marvelstudio  [ _teks_ ]  [ _teks_ ]
➤ ${prefix}lionlogo  [ _teks_ ]  [ _teks_ ]
➤ ${prefix}wolflogo  [ _teks_ ]  [ _teks_ ]
➤ ${prefix}steel3d  [ _teks_ ]  [ _teks_ ]
➤ ${prefix}wallgravity  [ _teks_ ]  [ _teks_ ]`
but = [
               { buttonId: 'command', buttonText: { displayText: 'back to menu' }, type: 1 }, 
                { buttonId: 'iklan', buttonText: { displayText: 'sewa bot' }, type: 1 }
                 ]
sendButLocation(from, menu, "ʀɪғǫɪʙᴏᴛᴢ", fakeimg, but, zer)
break
case 'makermenu':
menu =`❏ 「 \`\`\`MAKER MENU\`\`\` 」

➤ ${prefix}hartatahta [ _teks_ ]
➤ ${prefix}naruto [ _teks_ ]
➤ ${prefix}bneon [ _teks_ ]
➤ ${prefix}matrix [ _teks_ ]
➤ ${prefix}breakwall [ _teks_ ]
➤ ${prefix}gneon [ _teks_ ]
➤ ${prefix}dropwater [ _teks_ ]
➤ ${prefix}flowertext [ _teks_ ]
➤ ${prefix}crosslogo [ _teks_ ]
➤ ${prefix}silktext [ _teks_ ]
➤ ${prefix}flametext [ _teks_ ]
➤ ${prefix}glowtext [ _teks_ ]
➤ ${prefix}smoketext [ _teks_ ]
➤ ${prefix}skytext [ _teks_ ]
➤ ${prefix}cslogo [ _teks_ ]
➤ ${prefix}lithgtext [ _teks_ ]
➤ ${prefix}crismes [ _teks_ ]
➤ ${prefix}tfire [ _teks_ ]
➤ ${prefix}sandw [ _teks_ ]
➤ ${prefix}epep [ _teks_ ]
➤ ${prefix}text3dbox [ _teks_ ]
➤ ${prefix}logobp [ _teks_ ]
➤ ${prefix}leavest [ _teks_ ]
➤ ${prefix}thundertext [ _teks_ ]
➤ ${prefix}tlight [ _teks_ ]
➤ ${prefix}nulis [ _teks_ ]
➤ ${prefix}wolflogo [ _teks1 | teks2_ ]
➤ ${prefix}pubglogo [ _teks1 | teks2_ ]
➤ ${prefix}snowwrite [ _teks1 | teks2_ ]
➤ ${prefix}watercolour [ _teks1 | teks2_ ]
➤ ${prefix}logoaveng [ _teks1 | teks2_ ]
➤ ${prefix}phlogo [ _teks1 | teks2_ ]
➤ ${prefix}marvellogo [ _teks1 | teks2_ ]
➤ ${prefix}gtext [ _teks1 | teks2_ ]
➤ ${prefix}blackpink [ _teks_ ]
➤ ${prefix}neon [ _teks_ ]
➤ ${prefix}greenneon [ _teks_ ]
➤ ${prefix}futureneon [ _teks_ ]
➤ ${prefix}sandwriting [ _teks_ ]
➤ ${prefix}sandsummer [ _teks_ ]
➤ ${prefix}sandengraved [ _teks_ ]
➤ ${prefix}metaldark [ _teks_ ]
➤ ${prefix}neonlight [ _teks_ ]
➤ ${prefix}holographic [ _teks_ ]
➤ ${prefix}text1917 [ _teks_ ]
➤ ${prefix}minion [ _teks_ ]
➤ ${prefix}duluxesilver [ _teks_ ]
➤ ${prefix}newyearcard [ _teks_ ]
➤ ${prefix}bloodfrosted [ _teks_ ]
➤ ${prefix}halloween [ _teks_ ]
➤ ${prefix}jokerlogo [ _teks_ ]
➤ ${prefix}fireworksparkle [ _teks_ ]
➤ ${prefix}natureleaves [ _teks_ ]
➤ ${prefix}bokeh [ _teks_ ]
➤ ${prefix}toxic [ _teks_ ]
➤ ${prefix}strawberry [ _teks_ ]
➤ ${prefix}box3d [ _teks_ ]
➤ ${prefix}roadwarning [ _teks_ ]
➤ ${prefix}breakwall [ _teks_ ]
➤ ${prefix}icecold [ _teks_ ]
➤ ${prefix}luxury [ _teks_ ]
➤ ${prefix}cloud [ _teks_ ]
➤ ${prefix}summersand [ _teks_ ]
➤ ${prefix}horrorblood [ _teks_ ]
➤ ${prefix}thunder [ _teks_ ]
➤ ${prefix}magma [ _teks_ ]
➤ ${prefix}impressiveglitch [ _teks_ ]
➤ ${prefix}harrypotter [ _teks_ ]
➤ ${prefix}foggywindow [ _teks_ ]
➤ ${prefix}watercolor [ _teks_ ]
➤ ${prefix}wonderfullgraffiti [ _teks_ ]
➤ ${prefix}ssweb [ _teks_ ]`
but = [
               { buttonId: 'command', buttonText: { displayText: 'back to menu' }, type: 1 }, 
                { buttonId: 'iklan', buttonText: { displayText: 'sewa bot' }, type: 1 }
                 ]
sendButLocation(from, menu, "ʀɪғǫɪʙᴏᴛᴢ", fakeimg, but, zer)
break

case 'allmenu':
yoi = await fetchJson(`https://api.lolhuman.xyz/api/countdown/1/1/2022?apikey=${config.Lolkey}`)
            tahunBaru = yoi.result
            yoii = await fetchJson(`https://api.lolhuman.xyz/api/countdown/2/4/2022?apikey=${config.Lolkey}`)
            puasa = yoii.result
            yoiii = await fetchJson(`https://api.lolhuman.xyz/api/countdown/2/5/2022?apikey=${config.Lolkey}`)
            bada = yoiii.result
             thu = await zero.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text) 
              groups = zero.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zero.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zero.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
                            try {
               var pic = await zero.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
menu =`${ucapanWaktu} Kak ${pushname}

┌❏ 「 *INDONESIA TIME* 」
│◦➛WIB : ${wib}
│◦➛WITA : ${wita}
└❏ WIT : ${wit}
                          
┌❏ 「 *TODAY* 」
│◦➛${ucapanWaktu}
│◦➛Jam : ${jam} WIB
└❏ Tanggal : ${tanggal}-${bulan}-${tahun}}

┌❏ 「 *WAKTU MENUJU* 」
│◦➛Menuju Tahun Baru : ${tahunBaru}
│◦➛Menuju Ramadhan : ${puasa}
└❏ Menuju Idul Fitri : ${bada}

┌❏ 「 *DEVICE* 」
│◦➛Whatsapp : ${zero.user.phone.wa_version}
│◦➛Merk HP : ${device_manufacturer}
│◦➛Versi HP : ${device_model}
│◦➛Versi OS : ${os_version}
│◦➛RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◦➛MCC : ${mcc}
└❏ MNC : ${mnc}

┌─❑「 *BOT INFO* 」
│◦➛ Owner :${NameOwner}
│◦➛Group Chats : ${groups.length}
│◦➛Private Chat : ${privat.length}
│◦➛Total Chat : ${totalChat.length}
│◦➛Active : ${runtime(process.uptime())}
│◦➛▢ Platform : ${os.platform()}
└❏ 


❏ 「 \`\`\`STICKER MENU\`\`\` 」
 
 ➤ ${prefix}stiker
 ➤ ${prefix}ttp
 ➤ ${prefix}ttp2
 ➤ ${prefix}ttp3
 ➤ ${prefix}patrick
 ➤ ${prefix}amongus
 ➤ ${prefix}gura
 ➤ ${prefix}dadu
  ➤ ${prefix}stickeranime


❏ 「 \`\`\`OWNER MENU\`\`\` 」
 
 ➤ ${prefix}bc [  _teks/reply gif/image/video with caption_ ]
 ➤ ${prefix}delchat
 ➤ ${prefix}spam [ _teks|jumlah_ ]
 ➤ ${prefix}demoteall
 ➤ ${prefix}promoteall
 ➤ ${prefix}spamsw [ _teks|jumlah_ ]
 ➤ ${prefix}upswteks [ _teks_ ]
 ➤ ${prefix}upswlokasi [ _teks_ ]
 ➤ ${prefix}upswaudio [ _reply audio_ ]
 ➤ ${prefix}upswvoice [ _reply audio_ ]
 ➤ ${prefix}upswsticker [ _reply sticker_ ]
 ➤ ${prefix}upswimage [ _reply image with caption_ ]
 ➤ ${prefix}upswgif  [ _reply gif with caption_ ]
 ➤ ${prefix}upswvideo [ _reply video with caption_ ]
 ➤ ${prefix}shutdown
 ➤ ${prefix}offline
 ➤ ${prefix}online
 ➤ ${prefix}exif [ _nama|author_ ]
 ➤ ${prefix}setppbot [ _reply image_ ]
 ➤ ${prefix}setnamebot [ _teks_ ]
 ➤ ${prefix}setprefix [ _multi/nopref/prefix_ ]
 ➤ ${prefix}setbio [ _teks_ ]
 ➤ ${prefix}leave
 ➤ ${prefix}restart
 ➤ ${prefix}join [ _link group_ ]
 ➤ ${prefix}readall
 ➤ ${prefix}unreadall
 ➤ ${prefix}pin
 ➤ ${prefix}unpin
 ➤ ${prefix}nano [ _nama file_ ]
 ➤ ${prefix}report [ _teks_ ]
 ➤ ${prefix}runtime
 ➤ ${prefix}speed
 
 
 ❏ 「 \`\`\`DOWNLOAD MENU\`\`\` 」

➤ ${prefix}infogempa
➤ ${prefix}herolist 
➤ ${prefix}herodetail [ _hero_ ]
➤ ${prefix}google [ _search_ ]
➤ ${prefix}gimage [ _search_ ]
➤ ${prefix}wiki [ _search_ ]
➤ ${prefix}mediafire [ _link_ ]
➤ ${prefix}ytsearch [ _judul_ ]
➤ ${prefix}ytmp4 [ _link yt_ ]
➤ ${prefix}ytmp3 [ _link yt_ ]
➤ ${prefix}play [ _judul lagu_ ]
➤ ${prefix}tinyurl  [ _link_ ]
➤ ${prefix}fetch [ _link_ ]
➤ ${prefix}igdl [ _link_ ]
➤ ${prefix}tiktokdl [ _link_ ]
➤ ${prefix}lirik [ _judul_ ]
➤ ${prefix}tourl [ _reply image/video_ ]
➤ ${prefix}resepmasakan [ _judul_ ]
➤ ${prefix}artimimpi [ _teks_ ]
➤ ${prefix}bilangangka [ _angka_ ]
➤ ${prefix}kalkulator [ _angka_ ]
➤ ${prefix}fancytext [ _teks_ ]
➤ ${prefix}githubstalk  [ _username_ ]
➤ ${prefix}translate [ _teks kodebhs_ ]
➤ ${prefix}playstore [ _search_ ]
➤ ${prefix}brainly [ _search_ ]
➤ ${prefix}igstalk [ _link_ ]
➤ ${prefix}twitter [ _link_ ]
➤ ${prefix}twmp3 [ _link_ ]
➤ ${prefix}linkwa [ _search_ ]
➤ ${prefix}fb [ _link_ ]
➤ ${prefix}chara [ _search_ ]
➤ ${prefix}otaku [ _search_ ]
➤ ${prefix}komiku [ _search_ ]


❏ 「 \`\`\`GROUP MENU\`\`\` 」

➤ ${prefix}getpict [ _@tag_ ]
➤ ${prefix}getname [ _reply target_ ]
➤ ${prefix}getbio [ _reply target_ ]
➤ ${prefix}creategrup [ _nama|@tag_ ]
➤ ${prefix}getpp
➤ ${prefix}getdeskgc [ _teks_ ]
➤ ${prefix}sider [ _reply pesan bot_ ]
➤ ${prefix}hacked [ _teks_ ]
➤ ${prefix}fitnah [ _@tag|teks1|teks2_ ]
➤ ${prefix}kontak [ _@tag|nama_ ]
➤ ${prefix}kontag [ _@tag|nama_ ]
➤ ${prefix}resetlinkgc
➤ ${prefix}sticktag [ _nama sticker_ ]
➤ ${prefix}totag [ _reply media_ ]
➤ ${prefix}antilink [ _enable / disable_ ]
➤ ${prefix}antivirtex [ _enable / disable_ ]
➤ ${prefix}welcome [ _enable / disable_ ]
➤ ${prefix}group [ _open / close_ ]
➤ ${prefix}linkgrup
➤ ${prefix}hidetag [ _teks_ ]
➤ ${prefix}tagall
➤ ${prefix}setdesc [ _teks_ ]
➤ ${prefix}setname [ _teks_ ]
➤ ${prefix}setpp [ _reply image_ ]
➤ ${prefix}kick [ _@tag_ ]
➤ ${prefix}add [ _nomor_ ]
➤ ${prefix}promote [ _@tag_ ]
➤ ${prefix}demote [ _@tag_ ]


❏ 「 \`\`\`TOOLS MENU\`\`\` 」

➤ ${prefix}stickerwm [ _nama|author_ ]
➤ ${prefix}takestick [ _nama|author_ ]
➤ ${prefix}dadu
➤ ${prefix}tomp3 [ _reply video_ ]
➤ ${prefix}tomp4 [ _reply sticker gif_ ]
➤ ${prefix}robot [ _reply audio_ ]
➤ ${prefix}balik [ _reply audio_ ]
➤ ${prefix}bass [ _reply audio_ ]
➤ ${prefix}gemuk [ _reply audio_ ]
➤ ${prefix}detikvn [ _reply audio caption angka_ ]
➤ ${prefix}detikvideo [ _reply video caption angka_ ]
➤ ${prefix}sticker
➤ ${prefix}attp [ _teks_ ]
➤ ${prefix}toimg


❏ 「 \`\`\`STORAGE MENU\`\`\` 」

➤ ${prefix}listimage
➤ ${prefix}liststicker
➤ ${prefix}listvn
➤ ${prefix}addsticker [ _nama_ ]
➤ ${prefix}delsticker [ _nama_ ]
➤ ${prefix}addvn [ _nama_ ]
➤ ${prefix}delvn [ _nama_ ]
➤ ${prefix}addimage [ _nama_ ]
➤ ${prefix}delimage [ _nama_ ]


❏ 「 \`\`\`FUN MENU\`\`\` 」

➤ ${prefix}rate
➤ ${prefix}kapankah
➤ ${prefix}apakah
➤ ${prefix}bisakah
➤ ${prefix}caripesan [ _teks|jumlah_ ] 
➤ ${prefix}slot
➤ ${prefix}suit [ _gunting/batu/kertas_ ]
➤ ${prefix}tag [ _nomor_ ]
➤ ${prefix}tagme
➤ ${prefix}readmore [ _teks1|teks2_ ]
➤ ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
➤ ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
➤ ${prefix}pantun
➤ ${prefix}tospam  [ _reply audio/sticker/image|jumlah_ ]


❏ 「 \`\`\`GAME MENU\`\`\` 」

➤ ${prefix}siapaaku
➤ ${prefix}kuismath
➤ ${prefix}asahotak
➤ ${prefix}tebaklirik
➤ ${prefix}tebaklagu
➤ ${prefix}tebakkata
➤ ${prefix}susunkata
➤ ${prefix}kimiakuis
➤ ${prefix}caklontong
➤ ${prefix}tebakjenaka
➤ ${prefix}tebakanime
➤ ${prefix}tebaktebakan
➤ ${prefix}tebakgambar
➤ ${prefix}tebakbendera


❏ 「 \`\`\`EPHOTO MENU\`\`\` 」

➤ ${prefix}luxurygold [ _teks_ ]
➤ ${prefix}watercolor [ _teks_ ]
➤ ${prefix}multicolor3d [ _teks_ ]
➤ ${prefix}wetglass [ _teks_ ]
➤ ${prefix}galaxywallpaper [ _teks_ ]
➤ ${prefix}lighttext [ _teks_ ]
➤ ${prefix}beautifulflower [ _teks_ ]
➤ ${prefix}puppycute [ _teks_ ]
➤ ${prefix}royaltext [ _teks_ ]
➤ ${prefix}heartshaped [ _teks_ ]
➤ ${prefix}birthdaycake [ _teks_ ]
➤ ${prefix}galaxystyle [ _teks_ ]
➤ ${prefix}hologram3d [ _teks_ ]
➤ ${prefix}greenneon [ _teks_ ]
➤ ${prefix}glossychrome [ _teks_ ]
➤ ${prefix}greenbush [ _teks_ ]
➤ ${prefix}metallogo [ _teks_ ]
➤ ${prefix}noeltext [ _teks_ ]
➤ ${prefix}glittergold [ _teks_ ]
➤ ${prefix}textcake [ _teks_ ]
➤ ${prefix}starsnight [ _teks_ ]
➤ ${prefix}wooden3d [ _teks_ ]
➤ ${prefix}textbyname [ _teks_ ]
➤ ${prefix}writegalaxy [ _teks_ ]
➤ ${prefix}snow3d [ _teks_ ]
➤ ${prefix}birthdayday [ _teks_ ]
➤ ${prefix}goldplaybutton [ _teks_ ]
➤ ${prefix}silverplaybutton [ _teks_ ]
➤ ${prefix}freefire [ _teks_ ]
➤ ${prefix}cartoongravity [ _teks_ ]
➤ ${prefix}anonymhacker [ _teks_ ]
➤ ${prefix}mlwall [ _teks_ ]
➤ ${prefix}pubgmaskot [ _teks_ ]
➤ ${prefix}aovwall [ _teks_ ]
➤ ${prefix}logogaming [ _teks_ ]
➤ ${prefix}fpslogo [ _teks_ ]
➤ ${prefix}avatarlolnew [ _teks_ ]
➤ ${prefix}lolbanner [ _teks_ ]
➤ ${prefix}avatardota [ _teks_ ]
➤ ${prefix}juventusshirt [ _teks_ ]
➤ ${prefix}cutegravity [ _teks_ ]
➤ ${prefix}realvintage [ _teks_ ]
➤ ${prefix}codwarzone [ _teks_ ]
➤ ${prefix}valorantbanner [ _teks_ ]


❏ 「 \`\`\`MAKER MENU\`\`\` 」

➤ ${prefix}hartatahta [ _teks_ ]
➤ ${prefix}naruto [ _teks_ ]
➤ ${prefix}bneon [ _teks_ ]
➤ ${prefix}matrix [ _teks_ ]
➤ ${prefix}breakwall [ _teks_ ]
➤ ${prefix}gneon [ _teks_ ]
➤ ${prefix}dropwater [ _teks_ ]
➤ ${prefix}flowertext [ _teks_ ]
➤ ${prefix}crosslogo [ _teks_ ]
➤ ${prefix}silktext [ _teks_ ]
➤ ${prefix}flametext [ _teks_ ]
➤ ${prefix}glowtext [ _teks_ ]
➤ ${prefix}smoketext [ _teks_ ]
➤ ${prefix}skytext [ _teks_ ]
➤ ${prefix}cslogo [ _teks_ ]
➤ ${prefix}lithgtext [ _teks_ ]
➤ ${prefix}crismes [ _teks_ ]
➤ ${prefix}tfire [ _teks_ ]
➤ ${prefix}sandw [ _teks_ ]
➤ ${prefix}epep [ _teks_ ]
➤ ${prefix}text3dbox [ _teks_ ]
➤ ${prefix}logobp [ _teks_ ]
➤ ${prefix}leavest [ _teks_ ]
➤ ${prefix}thundertext [ _teks_ ]
➤ ${prefix}tlight [ _teks_ ]
➤ ${prefix}nulis [ _teks_ ]
➤ ${prefix}wolflogo [ _teks1 | teks2_ ]
➤ ${prefix}pubglogo [ _teks1 | teks2_ ]
➤ ${prefix}snowwrite [ _teks1 | teks2_ ]
➤ ${prefix}watercolour [ _teks1 | teks2_ ]
➤ ${prefix}logoaveng [ _teks1 | teks2_ ]
➤ ${prefix}phlogo [ _teks1 | teks2_ ]
➤ ${prefix}marvellogo [ _teks1 | teks2_ ]
➤ ${prefix}gtext [ _teks1 | teks2_ ]
➤ ${prefix}blackpink [ _teks_ ]
➤ ${prefix}neon [ _teks_ ]
➤ ${prefix}greenneon [ _teks_ ]
➤ ${prefix}futureneon [ _teks_ ]
➤ ${prefix}sandwriting [ _teks_ ]
➤ ${prefix}sandsummer [ _teks_ ]
➤ ${prefix}sandengraved [ _teks_ ]
➤ ${prefix}metaldark [ _teks_ ]
➤ ${prefix}neonlight [ _teks_ ]
➤ ${prefix}holographic [ _teks_ ]
➤ ${prefix}text1917 [ _teks_ ]
➤ ${prefix}minion [ _teks_ ]
➤ ${prefix}duluxesilver [ _teks_ ]
➤ ${prefix}newyearcard [ _teks_ ]
➤ ${prefix}bloodfrosted [ _teks_ ]
➤ ${prefix}halloween [ _teks_ ]
➤ ${prefix}jokerlogo [ _teks_ ]
➤ ${prefix}fireworksparkle [ _teks_ ]
➤ ${prefix}natureleaves [ _teks_ ]
➤ ${prefix}bokeh [ _teks_ ]
➤ ${prefix}toxic [ _teks_ ]
➤ ${prefix}strawberry [ _teks_ ]
➤ ${prefix}box3d [ _teks_ ]
➤ ${prefix}roadwarning [ _teks_ ]
➤ ${prefix}breakwall [ _teks_ ]
➤ ${prefix}icecold [ _teks_ ]
➤ ${prefix}luxury [ _teks_ ]
➤ ${prefix}cloud [ _teks_ ]
➤ ${prefix}summersand [ _teks_ ]
➤ ${prefix}horrorblood [ _teks_ ]
➤ ${prefix}thunder [ _teks_ ]
➤ ${prefix}magma [ _teks_ ]
➤ ${prefix}impressiveglitch [ _teks_ ]
➤ ${prefix}harrypotter [ _teks_ ]
➤ ${prefix}foggywindow [ _teks_ ]
➤ ${prefix}watercolor [ _teks_ ]
➤ ${prefix}wonderfullgraffiti [ _teks_ ]
➤ ${prefix}ssweb [ _teks_ ]


❏ 「 \`\`\`MAKER MENU\`\`\` 」

➤ ${prefix} blackpink [ _teks_ ]
➤ ${prefix} rainbow2 [ _teks_ ]
➤ ${prefix} water_pipe [ _teks_ ]
➤ ${prefix} halloween [ _teks_ ]
➤ ${prefix} sketch [ _teks_ ]
➤ ${prefix} sircuit [ _teks_ ]
➤ ${prefix} discovery [ _teks_ ]
➤ ${prefix} metallic2 [ _teks_ ]
➤ ${prefix} fiction [ _teks_ ]
➤ ${prefix} demon [ _teks_ ]
➤ ${prefix} transformer [ _teks_ ]
➤ ${prefix} berry [ _teks_ ]
➤ ${prefix} thunder [ _teks_ ]
➤ ${prefix} magma [ _teks_ ]
➤ ${prefix} 3dstone [ _teks_ ]
➤ ${prefix} neon [ _teks_ ]
➤ ${prefix} glitch [ _teks_ ]
➤ ${prefix} harry_potter [ _teks_ ]
➤ ${prefix} embossed [ _teks_ ]
➤ ${prefix} broken [ _teks_ ]
➤ ${prefix} papercut [ _teks_ ]
➤ ${prefix} gradient [ _teks_ ]
➤ ${prefix} glossy [ _teks_ ]
➤ ${prefix} watercolor [ _teks_ ]
➤ ${prefix} multicolor [ _teks_ ]
➤ ${prefix} neon_devil [ _teks_ ]
➤ ${prefix} underwater [ _teks_ ]
➤ ${prefix} bear [ _teks_ ]
➤ ${prefix} wonderfulg [ _teks_ ]
➤ ${prefix} christmas [ _teks_ ]
➤ ${prefix} neon_light [ _teks_ ]
➤ ${prefix} snow [ _teks_ ]
➤ ${prefix} cloudsky [ _teks_ ]
➤ ${prefix} luxury2 [ _teks_ ]
➤ ${prefix} gradient2 [ _teks_ ]
➤ ${prefix} summer [ _teks_ ]
➤ ${prefix} writing [ _teks_ ]
➤ ${prefix} engraved [ _teks_ ]
➤ ${prefix} summery [ _teks_ ]
➤ ${prefix} 3dglue [ _teks_ ]
➤ ${prefix} metaldark [ _teks_ ]
➤ ${prefix} neonlight [ _teks_ ]
➤ ${prefix} oscar [ _teks_ ]
➤ ${prefix} minion [ _teks_ ]
➤ ${prefix} holographic [ _teks_ ]
➤ ${prefix} purple [ _teks_ ]
➤ ${prefix} glossyb [ _teks_ ]
➤ ${prefix} deluxe2 [ _teks_ ]
➤ ${prefix} glossyc [ _teks_ ]
➤ ${prefix} fabric [ _teks_ ]
➤ ${prefix} neonc [ _teks_ ]
➤ ${prefix} newyear [ _teks_ ]
➤ ${prefix} newyear2 [ _teks_ ]
➤ ${prefix} metals [ _teks_ ]
➤ ${prefix} xmas [ _teks_ ]
➤ ${prefix} blood [ _teks_ ]
➤ ${prefix} darkg [ _teks_ ]
➤ ${prefix} joker [ _teks_ ]
➤ ${prefix} wicker [ _teks_ ]
➤ ${prefix} natural [ _teks_ ]
➤ ${prefix} firework [ _teks_ ]
➤ ${prefix} skeleton [ _teks_ ]
➤ ${prefix} balloon [ _teks_ ]
➤ ${prefix} balloon2 [ _teks_ ]
➤ ${prefix} balloon3 [ _teks_ ]
➤ ${prefix} balloon4 [ _teks_ ]
➤ ${prefix} balloon5 [ _teks_ ]
➤ ${prefix} balloon6 [ _teks_ ]
➤ ${prefix} balloon7 [ _teks_ ]
➤ ${prefix} steel [ _teks_ ]
➤ ${prefix} gloss [ _teks_ ]
➤ ${prefix} denim [ _teks_ ]
➤ ${prefix} decorate [ _teks_ ]
➤ ${prefix} decorate2 [ _teks_ ]
➤ ${prefix} peridot [ _teks_ ]
➤ ${prefix} rock [ _teks_ ]
➤ ${prefix} glass [ _teks_ ]
➤ ${prefix} glass2 [ _teks_ ]
➤ ${prefix} glass3 [ _teks_ ]
➤ ${prefix} glass4 [ _teks_ ]
➤ ${prefix} glass5 [ _teks_ ]
➤ ${prefix} glass6 [ _teks_ ]
➤ ${prefix} glass7 [ _teks_ ]
➤ ${prefix} glass8 [ _teks_ ]
➤ ${prefix} captain_as2 [ _teks_ ]
➤ ${prefix} robot [ _teks_ ]
➤ ${prefix} equalizer [ _teks_ ]
➤ ${prefix} toxic [ _teks_ ]
➤ ${prefix} sparkling [ _teks_ ]
➤ ${prefix} sparkling2 [ _teks_ ]
➤ ${prefix} sparkling3 [ _teks_ ]
➤ ${prefix} sparkling4 [ _teks_ ]
➤ ${prefix} sparkling5 [ _teks_ ]
➤ ${prefix} sparkling6 [ _teks_ ]
➤ ${prefix} sparkling7 [ _teks_ ]
➤ ${prefix} decorative [ _teks_ ]
➤ ${prefix} chocolate [ _teks_ ]
➤ ${prefix} strawberry [ _teks_ ]
➤ ${prefix} koifish [ _teks_ ]
➤ ${prefix} bread [ _teks_ ]
➤ ${prefix} matrix [ _teks_ ]
➤ ${prefix} blood2 [ _teks_ ]
➤ ${prefix} neonligth2 [ _teks_ ]
➤ ${prefix} thunder2 [ _teks_ ]
➤ ${prefix} 3dbox [ _teks_ ]
➤ ${prefix} neon2 [ _teks_ ]
➤ ${prefix} roadw [ _teks_ ]
➤ ${prefix} bokeh [ _teks_ ]
➤ ${prefix} gneon [ _teks_ ]
➤ ${prefix} advanced [ _teks_ ]
➤ ${prefix} dropwater [ _teks_ ]
➤ ${prefix} wall [ _teks_ ]
➤ ${prefix} chrismast [ _teks_ ]
➤ ${prefix} honey [ _teks_ ]
➤ ${prefix} drug [ _teks_ ]
➤ ${prefix} marble [ _teks_ ]
➤ ${prefix} marble2 [ _teks_ ]
➤ ${prefix} ice [ _teks_ ]
➤ ${prefix} juice [ _teks_ ]
➤ ${prefix} rusty [ _teks_ ]
➤ ${prefix} abstra [ _teks_ ]
➤ ${prefix} biscuit [ _teks_ ]
➤ ${prefix} wood [ _teks_ ]
➤ ${prefix} scifi [ _teks_ ]
➤ ${prefix} metalr [ _teks_ ]
➤ ${prefix} purpleg [ _teks_ ]
➤ ${prefix} shiny [ _teks_ ] 
➤ ${prefix} jewelry [ _teks_ ]
➤ ${prefix} jewelry2 [ _teks_ ]
➤ ${prefix} jewelry3 [ _teks_ ]
➤ ${prefix} jewelry4 [ _teks_ ]
➤ ${prefix} jewelry5 [ _teks_ ]
➤ ${prefix} jewelry6 [ _teks_ ]
➤ ${prefix} jewelry7 [ _teks_ ]
➤ ${prefix} jewelry8 [ _teks_ ]
➤ ${prefix} metalh [ _teks_ ]
➤ ${prefix} golden [ _teks_ ]
➤ ${prefix} glitter [ _teks_ ]
➤ ${prefix} glitter2 [ _teks_ ]
➤ ${prefix} glitter3 [ _teks_ ]
➤ ${prefix} glitter4 [ _teks_ ]
➤ ${prefix} glitter5 [ _teks_ ]
➤ ${prefix} glitter6 [ _teks_ ]
➤ ${prefix} glitter7 [ _teks_ ]
➤ ${prefix} metale [ _teks_ ]
➤ ${prefix} carbon [ _teks_ ]
➤ ${prefix} candy [ _teks_ ]
➤ ${prefix} metalb [ _teks_ ]
➤ ${prefix} gemb [ _teks_ ]
➤ ${prefix} 3dchrome [ _teks_ ]
➤ ${prefix} metalb2 [ _teks_ ]
➤ ${prefix} metalg [ _teks_ ]`
but = [
               { buttonId: 'command', buttonText: { displayText: 'back to menu\n\njika bot tidak merespon ketik !command' }, type: 1 }, 
                { buttonId: 'iklan', buttonText: { displayText: 'sewa bot\n\njika bot tidak merespon ketik !iklan' }, type: 1 }
                 ]
sendButLocation(from, menu, "ʀɪғǫɪʙᴏᴛᴢ", fakeimg, but, zer)
break
case 'iklan':
case 'sewabot':
reply (`*BOT INI MEMAKAI RDP BUKAN TERMUX!*

╭──「 *_SEWA BOT_* 」
│❏  1 MINGGU : IDR 4.000 (4K)
│❏  1 BULAN : IDR 6.000 (6K)
│❏   PERMANEN : IDR10.000 (10K)
╰────
╭─ [ KELEBIHAN BOT ]
│❏  ＯＮ 24 ＪＡＭ
│❏  WELCOME IMAGE
│❏  FITUR LANGKA
╰────
╭─[ KEUNTUNGAN ]
│❏  ANTI LINK ( AUTO KICK )
│❏  WELCOME ( OTOMATIS )
│❏  DAN RATUSAN FITUR LAINYA
╰────
╭─[ *MINAT CHAT* ]
│❏  🪀 wa.me/6289636634511?text=sewa+bot
╰────
╭─[ *TES BOT? MASUK GRUB DI BAWAH* ]
│❏ https://bit.ly/LinkGrubBotz
╰────
╭─[ *PAYMENT* ]
│❏  GOPAY
│❏  DANA
│❏  PULSA +10K
│❏  QRIS ALL PAYMENT
╰────
*_BOT INI MEMAKAI RDP BUKAN TERMUX/HEROKU/WIBUSOFT_*
*_DI JAMIN ANTI DELAY & 24 JAM!_*`)

              /**zero.sendMessage(from, await getBuffer(gopeynya), image, {quoted: zer, caption: teksnya, thumbnail: Buffer.alloc(0) })**/
await sleep(3000)
              txtt =`*HAI KAK ${pushname}*\n*JIKA INGIN JADIBOT ATAU MAU JOIN MURID BOT*\n*PENCET SALAH SATU DI BAWAH*`

               buttons = [{buttonId: 'jadib',buttonText:{displayText: 'JADIBOT'},type:1},{buttonId:'muridb',buttonText:{displayText:'JOIN MURID BOT'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: `${time}`,
               buttons: buttons,
               headerType: 1
}
               prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: zer})
               zero.relayWAMessage(prep)
               break
case 'jadib':
reply (`╭──「 *_JADI BOT + OWNER_* 」
│❏   RP : IDR15.000 (15K)
╰────
╭─ [ FASILITAS ]
│❏  CUMA SCAN QR DOANG JADI                
│     BOT + OWNER
│❏  FITUR BOT NYA BANYAK
│❏  BANYAK FITUR LANGKA
│❏  BUKAN BOT WIBUSOFT
╰────
╭─[ KEUNTUNGAN ]
│❏  BISA OPEN SEWA BOT
│❏  NAMA BOT, NAMA OWNER, NOMOR.OWNER,
│     DLL DI GANTI JADI TERSERAH LU
╰────
╭─[ *MINAT CHAT* ]
│❏  🪀 wa.me/6289636634511?text=jadi+bot
╰────`)
break
case 'muridb':
reply (`╭──「JOIN MURID BOT 」
│❏   RP : IDR15.000 (15K)
╰────
╭─ [ FASILITAS ]
│❏  DI AJARIN SAMPE BISA
│❏  DI KASIH BAHAN²
│❏  TESTI DI AJARIN SAMPE BISA                 
│      ADA BNYK
╰────
╭─[ KEUNTUNGAN ]
│❏  BISA OPEN SEWA BOT
│❏  BISA OPEN MURID 
╰────
╭─[ *MINAT CHAT* ]
│❏  🪀 wa.me/6289636634511?text=join+murid+bot
╰────`)
break
case 'welcome': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (args[0] === 'enable') {
if (isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
welcome.push(from)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (args[0] === 'disable') {
if (!isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐌𝐚𝐭𝐢 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
var ini = welcome.indexOf(from)
welcome.splice(ini, 1)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (!q){
anu =`SILAHKAN PILIH SALAH SATU`
punten = [{buttonId: 'welcome disable', buttonText: {displayText: 'OFF'}, type: 1},{buttonId: 'welcome enable', buttonText: {displayText: 'ON️'}, type: 1}]
var btngrass = {
contentText: `${anu}`,
footerText: 'ʀɪғǫɪʙᴏᴛᴢ',
buttons: punten,
headerType: 1
}
await zero.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: zer})
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0].toLowerCase() === 'enable'){
              if (isAntilink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./storage/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./storage/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
} else if (!q) {
sendButMessage(from, `MODE ANTILINK`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antilink enable`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antilink disable`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "enable") {
if (isAntivirtex) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antivirtex.push(from);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (args[0] == "disable") {
antivirtex.splice(from, 1);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (!q) {
sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antivirtex enable`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antivirtex disable`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break
case 'group':
case 'grup':
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
but = [
{ buttonId: 'groupbuka', buttonText: { displayText: 'BUKA' }, type: 1 },
{ buttonId: 'grouptutup', buttonText: { displayText: 'TUTUP' }, type: 1 }
]
sendButMessage(from, "Silahkan Pilih Untuk Buka/Tutup Group", faketeks, but, zer)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐛𝐮𝐤𝐚 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
zero.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐮𝐭𝐮𝐩 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
zero.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
linkgc = await zero.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩 *${groupName}*`
zero.sendMessage(from, yeh, text, { quoted: zer })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, @${mentioned[0].split('@')[0]} 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐃𝐢 𝐆𝐫𝐨𝐮𝐩 *${groupMetadata.subject}*`, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐓𝐢𝐝𝐚𝐤 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐋𝐚𝐠𝐢 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐌𝐞𝐧𝐮𝐫𝐮𝐧𝐤𝐚𝐧 : @${mentioned[0].split('@')[0]} 𝐌𝐞𝐧??𝐚𝐝𝐢 𝐌𝐞𝐦𝐛𝐞𝐫`, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
}
break
case 'tagall':
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
let arr = [];
let txti = `[ 𝗧𝗔𝗚 𝗔𝗟𝗟 ]\n${q ? q : ''}\n\n`
for (let i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateSubject(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐍𝐚𝐦𝐚 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐣𝐚𝐝??\`\`\` *${body.slice(9)}*`, text, { quoted: zer })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateDescription(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐃𝐞𝐬𝐤𝐫𝐢𝐩𝐬𝐢 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: zer })
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
ht = body.slice(9)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(ht, members_id, false)
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zero.downloadAndSaveMediaMessage(zer, './storage/media_user')
await zero.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐏𝐫𝐨𝐟𝐢𝐥 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
break

case 'bc':
case 'bcbut':
if (!isOwner && !x.key.fromMe) return reply(`Hanya Untuk @${ownerNumbers.split("@")[0]}`)
if (args.length < 1) return reply('Teksnya?')
anu = await zero.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
var btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await zero.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: zer})
}
reply(`Sukses Mengirim Broadcast:\n${q}`)
break

case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `ʀɪғǫɪ ʙᴏᴛᴢ`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && zer.message.videoMessage.seconds < 11 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, Pada Saat Mengkonversi ${tipe} Ke Stiker. Pastikan Untuk Video Yang Dikirim Tidak Lebih Dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi Kesalahan, Silahkan Coba Beberapa Saat Lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
zero.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: zer })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim Gambar Dengan Caption ${prefix}sticker Atau Tag Gambar Yang Sudah Dikirim`)
}
break
       case 'dadu': // by CHIKAA CHANTEKKXXZZ
              reply(mess.wait)
              dadu()
             .then(async (body) => {
              dadugerak = body.split('\n')
              dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
              sendWebp(from, dadugerakx)
})
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
      case 'doge':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'patrick':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr, {quoted: zer})
}
)
              break
              
              case 'amongus':
              if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
              dpuhy = args.join(' ')
                reply(mess.wait)
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/amongus?apikey=${config.Lolkey}&text=${dpuhy}`)
                zero.sendMessage(from, dapuhy, sticker, {quoted: zer})
                break
                
                
       case 'gura':
       case 'gawrgura':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr, {quoted: zer})
}
)
              break
       case 'animestick':
       case 'stickeranime':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr, {quoted: zer})
}
)
              break
       case 'telesticker': 
       case 'telestiker':
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${config.Lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              zero.sendMessage(from, ini_buffer, sticker, {})
}
              break
       case 'semoji':
       case 'emoji':
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch {
              emoji = encodeURI(emoji)
}
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${config.Lolkey}`)
              await zero.sendMessage(from, ini_buffer, sticker, { quoted: zer })
              break
case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4':
if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
  ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${config.Lolkey}&text=${ini_txt}`)
await zero.sendMessage(from, ini_buffer, sticker, { quoted: zer })
break

/***     case 'attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} ikyy`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              zero.sendMessage(from, buffer, sticker, { quoted: zer })
              break**/
case 'attp':

if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
  ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${config.Lolkey}&text=${ini_txt}`)
await zero.sendMessage(from, ini_buffer, sticker, { quoted: zer })
break

case 'attp2':

if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
  ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${config.Lolkey}&text=${ini_txt}`)
await zero.sendMessage(from, ini_buffer, sticker, { quoted: zer })
break


case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = zero.contacts[i] != undefined ? zero.contacts[i].vname || zero.contacts[i].notify : undefined
inilist.push({
"displayName": 'ʀɪғǫɪʙᴏᴛᴢ',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${NameOwner}\n`
+ `ORG: Creator ${NameOwner} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${NomorOwner}:${NomorOwner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await zero.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: zer })
button = [
{buttonId: 'gc', buttonText: {displayText: 'GROUP OWNER'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'DONASI'}, type: 1}
]
 buttons = {
contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
footerText: faketeks,
buttons: button,
headerType: 1
}
await zero.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: zer})
break
case 'gc':
reply(`https://chat.whatsapp.com/Hnb8UOsuN4t5hSEMNTUdft`)
break
case 'donasi':
reply(`GOPAY=GAADA\n\nDANA=088238487765\n\nOVO=089636634511\n\nQRIS=https://j.top4top.io/p_2062m6av35.png`)
break
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: zer })
var nomor = zer.participant
let teks1 = `[𝗥𝗘𝗣𝗢𝗥𝗧]\n𝐏𝐞𝐬𝐚𝐧 : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zero.sendMessage(`6289636634511@s.whatsapp.net`, options, text, { quoted: zer })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'runtime':
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break
case 'botstat': case 'speed': case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                groups = zero.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zero.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zero.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
                respon = `
                                 ${petik}BOT STATISTICS${petik}
\`\`\`▢ Group Chats : ${groups.length}\`\`\`
\`\`\`▢ Private Chats : ${privat.length}\`\`\`
\`\`\`▢ Total Chats : ${totalChat.length}\`\`\`
\`\`\`▢ Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\`▢ Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\`▢ Baterai : ${baterai}% ${charger}\`\`\`
\`\`\`▢ Ram Usage : ${ram2}\`\`\`
\`\`\`▢ Platform : ${os.platform()}\`\`\`
\`\`\`▢ Hostname : ${os.hostname()}\`\`\`
\`\`\`▢ Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`▢ Wa Version: ${zero.user.phone.wa_version}\`\`\`
\`\`\`▢ Os Version: ${zero.user.phone.os_version}\`\`\`
\`\`\`▢ Device Manufacturer: ${zero.user.phone.device_manufacturer}\`\`\`
\`\`\`▢ Device Model: ${zero.user.phone.device_model}\`\`\`
\`\`\`▢ Os Build Number: ${zero.user.phone.os_build_number}\`\`\`


  \`\`\`RDP STATISTICS\`\`\`
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
case 'pingg':
			const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `\`\`\`${teks}Speed: ${latensi.toFixed(4)} Second\`\`\``
					reply(pingnya)
					})
					break
					case 'p':
  p1 (`*STATUS PESANAN*


STATUS       :DIPROSES
TANGGAL    : ${datee}
WAKTU        : ${time2}

    *TUNGGU YA KAK*`)
    break
    
    case 'd':
    d1 (`*STATUS PESANAN*:


STATUS       :DONE
TANGGAL    : ${datee}
WAKTU        : ${time2}

  *TERIMA KASIH TELAH ORDER*
          >>NEXT ORDER<<`)
     break
     
     
  case 'done':
  fakeitem (`*STATUS PESANAN*:


STATUS       :DONE
TANGGAL    : ${datee}
WAKTU        : ${time2}

  *TERIMA KASIH TELAH ORDER*
          >>NEXT ORDER<<`)
          break
 case 'delchat':
                   if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                zero.modifyChat(from, ChatModification.delete)
                break
                case 'mute':
			   if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./storage/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
                case 'spam':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					zero.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
		if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.bodmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                zero.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
                if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.bodmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                zero.groupMakeAdmin(from, members_id)
                break
                case 'spamsw':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					zero.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
                    case 'upswteks':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    zero.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    zero.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NameBot}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                                        case 'upswsticker':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !zer.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
						buff = await zero.downloadMediaMessage(encmedia)
						zero.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                    case 'upswaudio':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !zer.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
						buff = await zero.downloadMediaMessage(encmedia)
						zero.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !zer.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
						buff = await zero.downloadMediaMessage(encmedia)
						zero.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
						case 'upswvideo':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await zero.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    zero.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                        case 'upswgif':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zero.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    zero.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zero.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    zero.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: zer, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
                        case 'shutdown':
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				return zero.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
				case 'online':
            if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				offline = false
				reply('Status : ONLINE')
				break
			case 'offline':
			if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				offline = true
				reply('Status : OFFLINE')
				break
				                    case 'exif':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
				case 'setprofile':
				case 'setppbot':
				zero.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					enmediau = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await zero.downloadAndSaveMediaMessage(enmediau)
					await zero.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
					case 'setnamebot':
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                zero.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
                case 'setprefix':
      if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
      if (args.length < 1) return reply(`Contoh ${prefix + command} multi/nopref`)
           if (q === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    reply(`Berhasil mengubah prefix ke ${q}`)
					}
					break
					case 'setbio':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					zero.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				zero.updatePresence(from, Presence.composing)
				zero.groupLeave(from)
						break
						case 'restart':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
reply(`_Restarting ${NameBot}_`)
exec(`cd &&  node index`)
sleep(4000)
reply('Sukses')
break
case 'join':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				 if (args.length < 1) return ephe('Link nya mana?')
					zero.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Sukses bergabung dalam group')
break
case 'readall':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                var chats = await zero.chats.all()
                chats.map( async ({ jid }) => {
                await zero.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await zero.sendMessage(from, teks, text, {quoted: zer})
		console.log(chats.length)
		break
		case 'unreadall':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                var chats = await zero.chats.all()
                chats.map( async ({ jid }) => {
                await zero.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await zero.sendMessage(from, teks, text, {quoted: zer})
		    console.log(chats.length)
	        break
	case 'pin':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                zero.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
                case 'unpin':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                zero.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
                case 'nano':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!q) return reply('Nama file nya apaa ?')
anu = fs.readFileSync(`${q}`)
reply(String(anu))
break
case 'infogempa':
                
reply(mess.wait)
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${setting.lolkey}`)
                get_result = get_result.result
                ini_txt = `Lokasi : ${get_result.lokasi}\n`
                ini_txt += `Waktu : ${get_result.waktu}\n`
                ini_txt += `Potensi : ${get_result.potensi}\n`
                ini_txt += `Magnitude : ${get_result.magnitude}\n`
                ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                ini_txt += `Koordinat : ${get_result.koordinat}`
                get_buffer = await getBuffer(get_result.map)
                zero.sendMessage(from, get_buffer, image, { quoted: zer, caption: ini_txt }) 
                break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
case 'infobot':
timestamp = speed();
latensi = speed() - timestamp
teks =
`┏━➤ *INFO BOT* 
*┃┃* Base : Zero Yt7
*┃┃* Recode : Rifqi Bofz
*┃┃* Creator Bot : Rifqi Bofz
*┃┃* Nama Owner : ${NameOwner}
*┃┃* Nama Bot : ${NameBot}
*┃┃* Prefix : Multi Prefix
*┃┃* Runtime : ${runtime(process.uptime())}
*┃┃* Speed : ${latensi.toFixed(4)} second
*┃┃* Language : Javascript
*┃┗━━━━━━━━*
*┃◗ Thanks To Allah S.W.T*
*┃◗ Thank To Ortu*
*┃◗ Thank To Zero YT7 (Base)*
*┗━━━━━━━ •*`
                  but = [
{ buttonId: `iklan`, buttonText: { displayText: '📌 SEWA BOT' }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: '👥 OWNER' }, type: 1 }
]
sendButLocation(from, teks, faketeks, fakeimg, but)
break
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: zer, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
                                    case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: zer, caption: result}).catch(e => {
  reply(result)
})
break
 case 'mediafire':
									if (args.length < 1) return reply('Masukkan link mediafire')
									if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error')
									reply(mess.wait)
									teks = args.join(' ')
									res = await mediafireDl(teks)
									result = ` MEDIAFIRE DOWNLOAD

Data Berhasil Didapatkan!

📌 Nama : ${res[0].nama}
✉️ Ukuran : ${res[0].size}
🌐 Link : ${res[0].link}

_Tunggu Proses Upload Media_`
									reply(result)
									sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: zer})
									break
									case 'ytsearch':
                if (!args.length) return reply('Judulnya apa kak?')
            try {
            	reply(mess.wait)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `*🔖 YOUTUBE SEARCH*
*🔖 Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
*🔖 Judul:* ${items[i].title}
*🔖 Id:* ${items[i].id}
*🔖 Ditonton:* ${items[i].views}
*🔖 Durasi:* ${items[i].duration}
*🔖 Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await zero.sendMessage(from, thumb, image, {quoted: zer, caption: `${hehe}───────────────\n
*🔖 DOWNLOAD*
🔖 ${prefix}ytmp3 [link yt] = Audio
🔖 ${prefix}ytmp4 [link yt] = Video`, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:`SEARCH: ${args[0]}`,body:"🔖YOUTUBE SEARCH",mediaType:"2",thumbnail:fakethumb,mediaUrl:`https://youtu.be/JN_Gw2GzuqQ`}}})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
            case 'ytmp4':
if (args.length == 0) return reply(`Link Nya Mana ?\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey1}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await zero.sendMessage(from, ini_buffer, image, { quoted: zer, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await zero.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: zer, caption: 'Nih Jangan Lupa Donasi'})
break
case 'ytmp3':
if (args.length === 0) return reply(`Link Nya Mana ?\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply('Eror')
var srch = args.join(' ')
try {
yta(srch)
.then((res) => {
var { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
var captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
await sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply('error'))
}) 
})
} catch (err) {
reply('Terjadi kesalahan')
}
break
 case 'ytmp4':
              if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							sticWait(from)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *YTmp4*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: zer, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"🔖 YTMP4",mediaType:"2",thumbnail:getBuffer(thumb),sourceUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
						case 'play':
if (args.length < 1) return reply('Masukin Judul Lagunya')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
• *Judul :* ${res.all[0].title}
• *ID Video :* ${res.all[0].videoId}
• *Diupload Pada :* ${res.all[0].ago}
• *Views :* ${res.all[0].views}
• *Durasi :* ${res.all[0].timestamp}
• *Channel :* ${res.all[0].author.name}
• *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: zer, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
var tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
• *Judul :* ${res.all[0].title}
• *ID Video :* ${res.all[0].videoId}
• *Diupload Pada :* ${res.all[0].ago}
• *Views :* ${res.all[0].views}
• *Durasi :* ${res.all[0].timestamp}
• *Channel :* ${res.all[0].author.name}
• *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: zer, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: zer, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'tinyurl':
           try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
 case 'get':
case 'fetch':
if(!q) return reply('Linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
            case 'igdl':
case 'instagram':
if (!q) return reply('Linknya?')
var { igDownloader } = require('../mess/igdown')
   res = await igDownloader(`${q}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
                    case 'tiktok':
                   case 'tiktokdl':
                   case 'tiktoknowm':
if (!q) return reply('Linknya?')
var { TiktokDownloader } = require('../mess/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break
case 'tourl':
    if ((isMedia && !zer.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zer
            owgi = await zero.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
case 'lirik':
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'resepmasakan':
              if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${apikey7}`, {method: 'get'})
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`
					reply(mess.wait)
					buff = await getBuffer(anu.results.thumb)
					zero.sendMessage(from, buff, image, {quoted: zer, caption: hasilresep})
					break 
					case 'artimimpi':
if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/artimimpi?q=${body.slice(11)}&apikey=${apikey7}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'bilangangka':
              if (args.length < 1) return reply('Angkanya?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${apikey7}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'kalkulator':
 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				case 'fancytext':
if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${apikey7}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'githubstalk':
              if (args.length < 1) return reply('Usernamenya?')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${apikey7}`, {method: 'get'})
					gstalk = `❏ *GITHUB STALK*\n\n❏ Name : ${anu.result.name}\n❏ Followers : ${anu.result.followers}\n❏ Following : ${anu.result.following}\n❏ Id : ${anu.result.id}\n❏ Node Id : ${anu.result.node_id}\n❏ Type : ${anu.result.type}\n❏ Company : ${anu.result.company}\n❏ Location : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Site Admin : ${anu.result.site_admin}\n❏ Email : ${anu.result.email}\n❏ Created At : ${anu.result.created_at}\n❏ Updated At : ${anu.result.updated_at}\n❏ Twitter Username : ${anu.result.twitter_username}\n❏ Blog : ${anu.result.blog}\n❏ Avatar Url : ${anu.result.avatar_url}\n❏ Gravatar Id : ${anu.result.gravatar_id}\n❏ Html Url : ${anu.result.html_url}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.avatar_url)
					zero.sendMessage(from, buff, image, {quoted: zer, caption: gstalk})
					break 
					case 'translate':
                //[❗] case by DappaGanz
                ct = body.slice(11)
                reply(mess.wait)
                asu = await fetchJson(`https://api-yogipw.herokuapp.com/api/translate?kata=${ct}&apikey=yogipw`)
                dapp = `English : ${ct}\nIndonesia : ${asu.result.text}`
                zero.sendMessage(from, dapp, text, {quoted: zer})
                break
				case 'playstore':
      if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(`${q}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
              case 'brainly':
  if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					zero.sendMessage(from, teks, text,{quoted:zer,detectLinks: false})                        
		            })              
					break
					case 'igstory': 
  if(!q) return reply('Usernamenya?')
            hx.igstory(`${q}`)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    zero.sendMessage(from,link,video,{quoted: zer,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    zero.sendMessage(from,link,image,{quoted: zer,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
            case 'igstalk':
try{
if (!q) return reply('Usernamenya?')
ig.fetchUser(`${args.join(' ')}`).then(Y => {
console.log(`${args.join(' ')}`)
ten = `${Y.profile_pic_url_hd}`
teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
sendMediaURL(from,ten,teks) 
})} catch {
const tod = await fetchJson(
`https://ferdiz-afk.my.id/api/stalkig?username=${q}`
);
var nih_buff = await getBuffer(tod.picurl);
const tt = `*INSTAGRAM STALK*
\nUsername: ${tod.username}\nFullname: ${tod.fullname}\npostingan: ${tod.post}\ncategory_akun: ${tod.category_name}\nverified: ${tod.verified_user}\nprivate: ${tod.private_user}\nFollowing: ${tod.following}\nFollower: ${tod.followers}\nBio:\n${tod.bio}`;
zero.sendMessage(from, nih_buff, image, { quoted: zer, caption: tt });
}
break
case 'twmp4': case 'twitter':
		if (args.length < 1) return reply('Link?')
lin = args[0]
sticWait(from)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fakethumb
sendMediaURL(from, Anu, 'Done!')
})
break
case 'twmp3':
		if (args.length < 1) return reply('Link?')
lin = args[0]
sticWait(from)
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
khs = await getBuffer(Anu)
zero.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'audio.mp3', quoted:zer, ptt:true})
})
break
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
   if(!q) return reply('cari group apa?')
            hx.linkwa(`${q}`)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break 
            case 'chara':
		if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(`${q}`)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await zero.sendMessage(from,li,image,{quoted: zer})
            break
            case 'otaku':
        if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(`${q}`)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            zero.sendMessage(from,ram,image,{quoted:zer,caption:rem})
            break
            case 'komiku':
    if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(`${q}`)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break  
            case 'getpict':
				case 'getpic':
              if (!isGroup) return reply(mess.only.group)
            mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await zero.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            zero.sendMessage(from, pict, image, {quoted: zer})
            break
            case 'getbio':
            var yy = zer.message.extendedTextMessage.contextInfo.participant
var p = await zero.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
case 'creategrup':
              if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (zer.message.extendedTextMessage != undefined){
                    mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					zero.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
				case 'tictactoe':
case 'ttt':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = zer.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
zero.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break
case 'delttt':
                case 'delttc':
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses')
break
case 'getpp':
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await zero.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await zero.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				zero.sendMessage(from, buffer, image, {quoted: zer})
		} else {
		}
			  break
			case 'getdeskgc':
              if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await zero.groupMetadata(anu)
				zero.sendMessage(from, metadete.desc, text, {quoted:zer})
				  break
				case 'sider':
              if (!isGroup) return reply(mess.only.group)
infom = await zero.messageInfo(from, zer.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'hacked':
                 if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.bodmin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   zero.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                zero.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                zero.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                zero.sendMessage(from, 'Succes Hacked', text, {quoted: zer})
					break
					case 'fitnahpc':
              if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    zero.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
					break
					case 'kontak':
              if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (zer.message.extendedTextMessage != undefined){
                    mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
              if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (zer.message.extendedTextMessage != undefined){
                    		mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'resetlinkgroup':
         case 'revoke':
                if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.bodmin)
          json = ['action', 'inviteReset', from]
         zero.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
         case 'sticktag':
              if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await zero.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./sticker/${wanu[1]}.webp`)
				zero.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
				case 'totag':
              if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
            if ((isMedia && !zer.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: zer
            }
            ini_buffer = fs.readFileSync(file)
            zero.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: zer
            }
            ini_buffer = fs.readFileSync(file)
            zero.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !zer.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: zer
            }
            ini_buffer = fs.readFileSync(file)
            zero.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !zer.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: zer
            }
            ini_buffer = fs.readFileSync(file)
            zero.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !zer.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: zer
            }
            ini_buffer = fs.readFileSync(file)
            zero.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !zer.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: zer
            }
            ini_buffer = fs.readFileSync(file)
            zero.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
        case 'stickerwm':
					case 'swm':
              if (isMedia && !zer.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
							const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: zer})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && zer.message.videoMessage.fileLength < 10000000 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
							const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: zer})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
						case 'takestick':
					case 'take':
              if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: zer})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
						case 'toimg':
              if (!isQuotedSticker) return reply('reply stickernya')
              encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await zero.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              zero.sendMessage(from, buffer, image, {quoted: zer, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
						case 'dadu':
      random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			zero.sendMessage(from, damdu, sticker, {quoted: zer})
			break
			case 'tomp3':
              zero.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await zero.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						zero.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: zer })
						fs.unlinkSync(ran)
					})
					break
					case 'tomp4':
              if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
            if ((isMedia && !zer.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            owgi = await zero.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
            case 'robot':
              encmedial = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await zero.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: zer})
fs.unlinkSync(ran)
})
break
case 'balik':
              encmediau = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await zero.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:zer})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
              encmediao = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await zero.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:zer})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
              encmediaz = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await zero.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:zer})
						fs.unlinkSync(ran)
					})
					break
					case 'detikvn':
              encmediam = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await zero.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:zer})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
            encmedian = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await zero.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						zero.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: zer})
						fs.unlinkSync(median)
				break
			case 'listimage':
              teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
					zero.sendMessage(from, teks.trim(), extendedText, { quoted: zer, contextInfo: { "mentionedJid": imagi } })
					break
					case 'stickerlist':
				case 'liststicker':
              teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					zero.sendMessage(from, teks.trim(), extendedText, { quoted: zer, contextInfo: { "mentionedJid": setik } })
					break
					case 'vnlist':
				case 'listvn':
              teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					zero.sendMessage(from, teks.trim(), extendedText, { quoted: zer, contextInfo: { "mentionedJid": vien } })
					break
					case 'addsticker':
				if (!isQuotedSticker) return reply('Reply stiker')
					nm = body.slice(12)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await zero.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./sticker/${nm}.webp`, delb)
					fs.writeFileSync('./storage/setik.json', JSON.stringify(setik))
					zero.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: zer })
					break
					case 'delsticker':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./sticker/${nmm}.webp`)
					 reply(`Sukses menghapus sticker ${body.slice(12)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'addvn':
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await zero.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./vn/${nm}.mp3`, delb)
					fs.writeFileSync('./storage/vien.json', JSON.stringify(vien))
					zero.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: zer })
					break
					case 'delvn':
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./vn/${nmm}.mp3`)
					reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'addimage':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					if (!isQuotedImage) return reply('Reply image')
					nm = body.slice(10)
					if (!nm) return reply('Nama image nya apa?')
					boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await zero.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/${nm}.jpg`, delb)
					fs.writeFileSync('./storage/imagi.json', JSON.stringify(imagi))
					zero.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: zer })
					break
					case 'delimage':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/${nmm}.jpg`)
					 reply(`Sukses menghapus image ${body.slice(10)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'rate':
  rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					zero.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: zer })
					break
					case 'kapankah':
  kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					zero.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: zer })
					break
					case 'apakah':
 apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					zero.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: zer })
					break
					case 'bisakah':
  bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					zero.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: zer })
					break
					case 'caripesan':
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await zero.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
zero.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
 case 'slot':
            case 'slots':
                const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            zero.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: zer })
            break
            case 'suit':
                if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
case 's&k':
rules = `*「 PERATURAN BOT 」*

1. DILARANG TELFON BOT!!
2. DILARANG SPAM BOT
3. DILARANG BERKATA KASAR
4. DILARANG SPAM VIRTEX
5. DILARANG TELEFON OWNER
6. DILARANG SPAM GROUP
7. DILARANG SPAM ADMIN
8. DILARANG BERKATA KASAR DI GC

⚠️JIKA KALIAN MELANGGAR.. AKAN DI BLOCK + BANNED!!`
var ZeroYT7 = {
            contextInfo: {
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast',
            isForwarded: true,
            forwardingScore: 8,
           quotedMessage: {
           imageMessage: {
           caption: `ʀɪғǫɪʙᴏᴛᴢ`,
           jpegThumbnail: fakethumb,
           mimetype: 'image/jpeg',
           }
           }
           }
           } 
           zero.sendMessage(from, rules, MessageType.text, ZeroYT7)
           break 
case 'tag':
              if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					zero.sendMessage(from, tagq, text, { quoted: zer, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
          var nomqm = zer.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					zero.sendMessage(from, tagu, text, { quoted: zer, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
					case 'readmore':
			    	case 'more':
              const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  reply(mess.error.api)
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                 case 'pantun':
              anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/pantun?apikey=${apikey7}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'tospam':
              if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  zero.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = zer.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  zero.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await zero.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  zero.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await zero.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  zero.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zer
	delb = await zero.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  zero.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
	case 'luxurygold':
case 'watercolor':
case 'multicolor3d':
case 'wetglass':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalaxy':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
case 'cartoongravity':
case 'anonymhacker':
case 'mlwall':
case 'pubgmaskot':
case 'aovwall':
case 'logogaming':
case 'fpslogo':
case 'avatarlolnew':
case 'lolbanner':
case 'avatardota':
case 'juventusshirt':
case 'cutegravity':
case 'realvintage':
case 'codwarzone':
case 'valorantbanner':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Zero YT7`)
bo = args.join(" ")
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey1}&text=${bo}`)
zero.sendMessage(from, anu, image, {quoted: zer, caption: 'Nih Jangan Lupa Donasi' })
break
case 'hartatahta':
case 'naruto':
case 'bneon':
case 'matrix':
case 'breakwall':
case 'gneon':
case 'dropwater':
case 'flowertext':
case 'crosslogo':
case 'silktext':
case 'flametext':
case 'glowtext':
case 'smoketext':
case 'skytext':
case 'cslogo':
case 'lithgtext':
case 'crismes':
case 'tfire':
case 'sandw':
case 'epep':
case 'text3dbox':
case 'logobp':
case 'leavest':
case 'thundertext':
case 'tlight':
case 'nulis':
if (args.length == 0) return reply(`Teks Nya Mana\nContoh : ${prefix + command} Zero YT7`)
bo = args.join(" ")
reply(mess.wait)
res = await getBuffer(`https://api.zeks.me/api/${command}?apikey=${apikey4}&text=${bo}`)
zero.sendMessage(from, res, image, {quoted: zer, caption: 'Nih Jangan Lupa Donasi' })
break
case 'wolflogo':
case 'pubglogo':
case 'snowwrite':
case 'watercolour':
case 'logoaveng':
case 'phlogo':
case 'marvellogo':
case 'gtext':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Zero YT7`)
txt1 = args[0]
txt2 = args[0]
reply(mess.wait)
wll = await getBuffer(`https://api.zeks.me/api/${command}?apikey=${apikey4}&text1=${txt1}&text2=${txt2}`)
zero.sendMessage(from, wll, image, {quoted: zer, caption: 'Nih Jangan Lupa Donasi' })
break
case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Zero YT7`)
bo = args.join(" ")
reply(mess.wait)
blck = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey1}&text=${bo}`)
zero.sendMessage(from, blck, image, {quoted: zer, caption: 'Nih Jangan Lupa Donasi' })
break
case 'ssweb':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh: ${prefix + command} Lexxy Gantenk`)
ini_url = args.join(" ")
reply(mess.wait)
getBuffer(`https://ziy.herokuapp.com/api/ssweb?apikey=xZiyy&url=${ini_url}`).then((hasil) => {
zero.sendMessage(from, hasil, image, { thumbnail: Buffer.alloc(0), caption: `Nih Jangan Lupa Donasi`, quoted : ftrol})
})
break
//textprome2
case 'blackpink':
case 'rainbow2':
case 'water_pipe':
case 'halloween':
case 'sketch':
case 'sircuit':
case 'discovery':
case 'metallic2':
case 'fiction':
case 'demon':
case 'transformer':
case 'berry':
case 'thunder':
case 'magma':
case '3dstone':
case 'neon':
case 'glitch':
case 'harry_potter':
case 'embossed':
case 'broken':
case 'papercut':
case 'gradient':
case 'glossy':
case 'watercolor':
case 'multicolor':
case 'neon_devil':
case 'underwater':
case 'bear':
case 'wonderfulg':
case 'christmas':
case 'neon_light':
case 'snow':
case 'cloudsky':
case 'luxury2':
case 'gradient2':
case 'summer':
case 'writing':
case 'engraved':
case 'summery':
case '3dglue':
case 'metaldark':
case 'neonlight':
case 'oscar':
case 'minion':
case 'holographic':
case 'purple':
case 'glossyb':
case 'deluxe2':
case 'glossyc':
case 'fabric':
case 'neonc':
case 'newyear':
case 'newyear2':
case 'metals':
case 'xmas':
case 'blood':
case 'darkg':
case 'joker':
case 'wicker':
case 'natural':
case 'firework':
case 'skeleton':
case 'balloon':
case 'balloon2':
case 'balloon3':
case 'balloon4':
case 'balloon5':
case 'balloon6':
case 'balloon7':
case 'steel':
case 'gloss':
case 'denim':
case 'decorate':
case 'decorate2':
case 'peridot':
case 'rock':
case 'glass':
case 'glass2':
case 'glass3':
case 'glass4':
case 'glass5':
case 'glass6':
case 'glass7':
case 'glass8':
case 'captain_as2':
case 'robot':
case 'equalizer':
case 'toxic':
case 'sparkling':
case 'sparkling2':
case 'sparkling3':
case 'sparkling4':
case 'sparkling5':
case 'sparkling6':
case 'sparkling7':
case 'decorative':
case 'chocolate':
case 'strawberry':
case 'koifish':
case 'bread':
case 'matrix':
case 'blood2':
case 'neonligth2':
case 'thunder2':
case '3dbox':
case 'neon2':
case 'roadw':
case 'bokeh':
case 'gneon':
case 'advanced':
case 'dropwater':
case 'wall':
case 'chrismast':
case 'honey':
case 'drug':
case 'marble':
case 'marble2':
case 'ice':
case 'juice':
case 'rusty':
case 'abstra':
case 'biscuit':
case 'wood':
case 'scifi':
case 'metalr':
case 'purpleg':
case 'shiny': 
case 'jewelry':
case 'jewelry2':
case 'jewelry3':
case 'jewelry4':
case 'jewelry5':
case 'jewelry6':
case 'jewelry7':
case 'jewelry8':
case 'metalh':
case 'golden':
case 'glitter':
case 'glitter2':
case 'glitter3':
case 'glitter4':
case 'glitter5':
case 'glitter6':
case 'glitter7':
case 'metale':
case 'carbon':
case 'candy':
case 'metalb':
case 'gemb':
case '3dchrome':
case 'metalb2':
case 'metalg':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Zero YT7`)
bo = args.join(" ")
reply(mess.wait)
blck = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?apikey=Alphabot&text=${q}`)
zero.sendMessage(from, blck, image, {quoted: zer, caption: 'Nih Jangan Lupa Donasi' })
break
case 'family100':
              
              if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
              anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/family100?apikey=${config.Lolkey}`)
              reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
              let anoh = anu.data.result.aswer
              let rgfds = []
              for (let i of anoh){
              let fefs = i.split('/') ? i.split('/')[0] : i
              let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
              let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
              rgfds.push(axsf.toLowerCase())
}
              game.addfam(from, rgfds, gamewaktu, family100)
              break
              break
       case 'tebakanime':
              
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakchara?apikey=${config.Lolkey}`)
              get_result = get_result.result
              ini_image = get_result.image
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              zero.sendMessage(from, ini_buffer, image, { quoted: zer, caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s' }).then(() => {
              tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./storage/game/tebakanime.json", JSON.stringify(tebakanime))
})
              await sleep(30000)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebakanime[sender.split('@')[0]]
              fs.writeFileSync("./storage/game/tebakanime.json", JSON.stringify(tebakanime))
}
              break
             
       case 'tebaklagu':
              
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=${config.Xteam}&id=4mFuArYRh3SO8jfffYLSER`)
              get_result = get_result.result
              ini_audio = get_result.preview
              jawaban = get_result.judul
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_audio)
              reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s')
              zero.sendMessage(from, ini_buffer, audio, {quoted: zer}).then(() => {
              tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./storage/game/tebaklagu.json", JSON.stringify(tebaklagu))
})
              await sleep(30000)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebaklagu[sender.split('@')[0]]
              fs.writeFileSync("./storage/game/tebaklagu.json", JSON.stringify(tebaklagu))
}
              
              break
       case 'tebaktebakan':
              
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${config.Xteam}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.soal
              zero.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: zer}).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./storage/game/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./storage/game/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              
              break
       case 'kuismath':
              
              if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              ini_buffer = await getBuffer(ini_image)
              zero.sendMessage(from, ini_buffer, image, { quoted: zer, caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s' }).then(() => {
              kuismath[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./storage/game/kuismath.json", JSON.stringify(kuismath))
})
              await sleep(50000)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete kuismath[sender.split('@')[0]]
              fs.writeFileSync("./storage/game/kuismath.json", JSON.stringify(kuismath))
}
              
              break
       case 'tebakgambar':
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/game/tebakgambar?apikey=Alphabot`)
                    //resu = anu.data
                    tebak = anu.data.image
                    jawaban = `${anu.data.jawaban.replace('Jawaban ', '')}`
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./storage/game/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    zero.sendMessage(from, tebakya, image, {quoted: zer, caption: "\n\n Waktu 30s" })
                    await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                                zero.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*➸ Jawaban :*"  + '\n' + '_'+ jawaban +'_', text, {quoted: zer}) // ur cods
								delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./storage/game/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    await limitAdd(sender, limit)
					break   
       case 'siapaaku':
              
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${config.Lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              zero.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: zer}).then(() => {
              tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./storage/game/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
              await sleep(30000)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaksiapaaku[sender.split('@')[0]]
              fs.writeFileSync("./storage/game/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
              break
              
       case 'tebakkata':
              
              if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/kata?apikey=${config.Lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              zero.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: zer}).then(() => {
              tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./storage/game/tebakata.json", JSON.stringify(tebakata))
})
              await sleep(30000)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakata[sender.split('@')[0]]
              fs.writeFileSync("./storage/game/tebakata.json", JSON.stringify(tebakata))
}
              break
              break
       case 'tebaklirik':
              
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${config.Lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              zero.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: zer}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./storage/game/tebaklirik.json", JSON.stringify(tebaklirik))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./storage/game/tebaklirik.json", JSON.stringify(tebaklirik))
}
              break
              break
      case 'tebakjenaka':
              
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/jenaka?apikey=${config.Lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              zero.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: zer}).then(() => {
              tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./storage/game/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
              await sleep(30000)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakjenaka[sender.split('@')[0]]
              fs.writeFileSync("./storage/game/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
              break
              break
       case 'kimiakuis':
              
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${config.Lolkey}`)
              get_result = get_result.result
              jawaban = get_result.lambang
              pertanyaan = get_result.nama
              zero.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: zer}).then(() => {
              tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./storage/game/tebakimia.json", JSON.stringify(tebakimia))
})
              await sleep(30000)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakimia[sender.split('@')[0]]
              fs.writeFileSync("./storage/game/tebakimia.json", JSON.stringify(tebakimia))
}
              break
              break
       case 'tebakbendera':
              
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${config.Lolkey}`)
              get_result = get_result.result
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.flag
              zero.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: zer}).then(() => {
              tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./storage/game/tebakbendera.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakbendera[sender.split('@')[0]]
              fs.writeFileSync("./storage/game/tebakbendera.json", JSON.stringify(tebakbendera))
}
              break
              break
       case 'susunkata':
              
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${config.Lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              zero.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: zer}).then(() => {
              susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./storage/game/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./storage/game/susunkata.json", JSON.stringify(susunkata))
}
              break
              break
       case 'asahotak':
              
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/asahotak?apikey=${config.Lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.pertanyaan
              zero.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: zer}).then(() => {
              asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./storage/game/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(30000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./storage/game/asahotak.json", JSON.stringify(asahotak))
}
              break
              break
       case 'caklontong':
              
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/caklontong2?apikey=${config.Lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              zero.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: zer}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./storage/game/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./storage/game/caklontong.json", JSON.stringify(caklontong))
}
              break
             case 'term':
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//
        
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return zero.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: zer })
} catch (err) {
e = String(err)
reply(e)
}
}
if (!isGroup && isCmd && !zer.key.fromMe){
return sendButMessage(from, `*Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu*`, `silahkan liat lagi di menu ya\n jangan spam bot`, [
            {
               "buttonId": ".menu",
               "buttonText": {
                  "displayText": "MENU"
               },
               "type": "RESPONSE"
            }
         ], {quoted:zer})
}
} 
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}
