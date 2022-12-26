const {EmbedBuilder} = require("discord.js");

const phantomlar = [
"Afet Phantom",
"Akıncı Phantom",
"Anomali Phantom",
"Artizan Phantom",
"Asil 2.0 Phantom",
"Blastx Phantom",
"Buzul Phantom",
"Delipop Phantom",
"Flaş Phantom",
"Galeri Phantom",
"Havai Phantom",
"Işık Dalgası Phantom",
"İyon Phantom",
"Kar Diyarı Phantom",
"Kingdom Phantom",
"Kış Harikası Phantom",
"Minima Phantom",
"Nebula Phantom",
"Oni Phantom",
"Özel Harekat Phantom",
"Prizma Phantom",
"Radyan Krizi 001 Phantom",
"Sarmal Phantom",
"Semavi Phantom",
"Silvanus Phantom",
"Sonsuz Phantom",
"Spectrum Phantom",
"Vakur Phantom",
"Valorant GO! 1.Cilt Phantom",
"Protokol 781-A Phantom",
"Kaplan Phantom",
"Altşehir Phantom",
"Takımın Ası Phantom",
"Karikatürize Phantom",
"RGX 11Z PRO Phantom",
"Uzaylı Avcısı Phantom",
"Sermet Phantom",
"Yağmacı Phantom",
"Champions 2022 Phantom",
"Kohaku ve Matsuba Phantom",
"Zamanın Ötesi Phantom",
"Ruh Azabı Phantom",
"Derin Sular Phantom"
];

const cikanphantom = Math.floor(Math.random() * phantomlar.length);

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setTitle("Phantom Kasası")
    .setColor("#ffcc00")
    .setTimestamp()
    .addFields(
      { name: 'Kasadan Çıkan Phantom:', value: (`${phantomlar[cikanphantom]}`) },
    )
    .setFooter({ text: 'Made by AenR', iconURL: 'https://cdn.discordapp.com/attachments/966752496410320967/1056901415269834822/tan-yellow-pp.jpg' });
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "phantom"
};
