let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081388981898]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281388981898
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
