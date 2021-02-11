let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Ajhe
╠➥ Script: @Nurotomo
║
╠➥ Github: https://github.com/Aje7/Aki-Aki
╠➥ Instagram: @_sindiran_kehidupan
╠➥ YouTube: Belum Punya
║
╠═〘 Thanks To 〙 ═
╠➥ Trouble Squad
╠➥ Malika People
╠➥ Aki²
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Tsel: 0813-8898-1898
║
║>Request? Wa.me/6281388981898
║
╠═〘 NfQ BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

