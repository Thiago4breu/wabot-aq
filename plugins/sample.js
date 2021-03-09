const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {

  const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
  + 'VERSION:3.0\n' 
  + 'FN:Jeff Singh\n' // full name
  + 'ORG:Ashoka Uni;\n' // the organization of the contact
  + 'TEL;type=CELL;type=VOICE;waid=911234567890:+91 12345 67890\n' // WhatsApp ID + phone number
  + 'END:VCARD'
  return await conn.sendMessage(m.chat, {displayname: 'jeeff', vcard: vcard}, MessageType.contact)

  //return m.send('teste');

}
handler.help = ['cmd'].map(v => v + ' <>')
handler.tags = ['advanced']
handler.command = /^cmd$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

