const {EmbedBuilder} = require("discord.js");

const bicaklar = [
  "Yağmacı Bıçak",
  "Gösterişli Bıçak",
  "Prizma Bıçak",
  "Asil Balta",
  "Fatih Kılıç",
  "Kingdom Bıçak",
  "Ejder Ateşi Hançer",
  "Oni Pençe",
  "Kolektif Bıçak",
  "Glitchpop",
  "Nebula Bıçak",
  "Sarmal Hançer",
  "Flaş Bıçak",
  "EGO Bıçak",
  "Yerçekimsel Uranyum Nöroateşleyici Sopa",
  "Altın Afet Hançer",
  "Anomali Bıçak",
  "İyon Enerji Kılıcı",
  "Kış Harikası Baston Şeker",
  "Blastx Polimer Knifetech Kaplamalı Bıçak",
  "Delipop Balta",
  "Delipop Hançer",
  "VALORANT GO! 1. Cilt Bıçak",
  "Karakol Yakın Dövüş",
  "Asil 2.0 Karambit",
  "Prizma 3 Balta",
  "Sihirpunk ElectroBıçak",
  "Sihirpunk Şok Eldiveni",
  "Şakıyançelik",
  "Yitik Ritüel Bıçağı",
  "Çapraşık Alemler Refah Bıçağı",
  "Köken Hilal Bıçağı",
  "K/TAK Bıçağı",
  "Mahvolmuş Kralın Kırık Kılıcı",
  "Işık Muhafızı Yadigarı",
  "Özel Hareket Kelebek",
  "Artizan Flore",
  "Waveform",
  "Yoru'nun Janti Kelebek Tarağı",
  "Semavi Yelpaze",
  "RGX 11Z PRO Bıçak",
  "Radyan Krizi 001 Beyzbol Sopası",
  "Kar Diyarı Asası",
  "Champions 2021 Karambit",
  "Catrina Bıçak",
  "Başlangıç Muşta",
  "Protokol 781-A Bireysel İdari Yakın Dövüş Birimi",
  "Hızlı ve Ölümcül Karambit",
  "Kaplan Dişi",
  "Altşehir Balta",
  "Gaia'nın Hiddeti",
  "Hücum Bıçağı",
  "RGX 11Z Pro 2 Kelebek",
  ".SYS Balta",
  "Demirdiken Topuz",
  "Neptün Çapa",
  "Uzaylı Avcısı Bıçağı",
  "Kaosun Kılıcı",
  "09. Özel Kuvvet Bıçak",
  "Serket'in Bıçağı",
  "Yağmacı Karambit",
  "Champions 2022 Kelebek",
  "Obsidiyen",
  "Denge",
  "Zamanın Kökeni",
  "Kızıl Musibet Çekiç",
  "İyon 2 Karambit",
  "İridyum Bıçağı",
  "Ruh Azabı Tırpan",
  "Vurgun",
  "Soğuk Çekiç"
];

const cikanbicak = Math.floor(Math.random() * bicaklar.length);

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setTitle("Bıçak Kasası")
    .setColor("#ffcc00")
    .setTimestamp()
    .addFields(
      { name: 'Kasadan Çıkan Bıçak:', value: (`${bicaklar[cikanbicak]}`) },
    )
    .setFooter({ text: 'Made by AenR', iconURL: 'https://cdn.discordapp.com/attachments/966752496410320967/1056901415269834822/tan-yellow-pp.jpg' });
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "bicak"
};
