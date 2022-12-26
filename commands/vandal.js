const {EmbedBuilder} = require("discord.js");

const vandallar = [
"Yitik Vandal",
"Yağmacı Vandal",
"Viran Vandal",
"Valorant GO! 2. Cilt Vandal",
"Unutulmaz Vandal",
"Ufuk Vandal",
"Şenlik Vandal",
"Süvari Vandal",
"Sualtı Vandal",
"Silvanus Vandal",
"Sakura Vandal",
"RGX 11Z PRO Vandal",
"Prizma 2 Vandal",
"Nitro Vandal",
"Köken Vandal",
"Kolektif Vandal",
"Kış Harikası Vandal",
"K/TAK Vandal",
"Işık Muhafızı Vandal",
"Gösterişli Vandal",
"Ejder Ateşi Vandal",
"Ego Vandal",
"Dot Exe Vandal",
"Delipop Vandal",
"Çapraşık Alemler Vandal",
"Champions 2021 Vandal",
"Buzul Vandal",
"Asil Vandal",
"Aristokrat Vandal",
"Altın Afet Vandal",
"Gaia'nın İntikamı Vandal",
"Takımın Ası Vandal",
"Ufkun Sınırı Vandal",
"Demirdiken Vandal",
"Neptün Vandal",
"Kaosun Başlangıcı Vandal",
"Sermet Vandal",
"Zamanın Ötesi Vandal",
"Kızıl Musibet Vandal",
"İyon 2 Vandal",
"Soğuk Çelik Vandal"
];

const cikanvandal = Math.floor(Math.random() * vandallar.length);

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setTitle("Vandal Kasası")
    .setColor("#ffcc00")
    .setTimestamp()
    .addFields(
      { name: 'Kasadan Çıkan Vandal:', value: (`${vandallar[cikanvandal]}`) },
    )
    .setFooter({ text: 'Made by AenR', iconURL: 'https://cdn.discordapp.com/attachments/966752496410320967/1056901415269834822/tan-yellow-pp.jpg' });
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "vandal"
};
