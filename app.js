//TODO--Number-------------------------------------------------------------------------------

//var num = 15.123456789
//!--toplamda 3 basamaklı sayı kullanalım--------
//console.log(num.toPrecision(3));
//!--ondalık kısmı 3 basamaklı alalım--------
// console.log(num.toFixed(3));
 //!--en yakın sayıya yuvarlayalım--------
//console.log(Math.round(num));
//!--aşaği yuvarlayalım--------
//console.log(Math.floor(num));
//!--yukarı yuvarlayalım--------
//console.log(Math.ceil(num));
//!--En küçük bulmak-----
//console.log(Math.min(1,2,10,56,20,5.15));
//!--En büyük bulmak-----
//console.log(Math.max(1,2,10,56,20,5.15))
//!--sayı aralığı kullanıdan alıncak ve o aralıkta rastgele sayı üretilcek--

// const a = prompt("Bir sayı giriniz")

// console.log(Math.random()*+a);

//TODO Number Uygulaması-------
//* Bir personelın yaptığı mesai'ye göre aldığı maaşı hesaplayalım
//* Brüt maaş: 3700TL
//* Brüt mesai: 10.3TL
//*Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaşi nedir?
//*Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir?

const maaş = 3700;
const mesai = 10.3;
const saat = 42;
//? //*Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaşi nedir?
const brutmaaş=maaş+(mesai*saat);
console.log("brüt maş",brutmaaş);

//? Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir?

console.log("toplam net maaş",brutmaaş- (brutmaaş*0.25));

//TODO------STRİNG------------------------------------------------------------------------------------

//var sentence =   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed neque a atque distinctio adipisci iste inventore fugiat obcaecati maxime";

//var sentence2 ="  Lorem ipsum dolor sit amet.    "

//var url = "https://github.com/Fatmats/Lets-study-javascript";

//!----Kaç karakter olduğunu bulalım.---
//console.log("kaç karekter:",sentence.length,url.length);

//!-----Küçük kelimeden oluşur---------
//console.log(sentence.split(" "));

//!-----Cümlenin başındaki ve sonundaki boşlukları silin
//console.log("Trimsiz:",sentence2);
//console.log("Trimli:",sentence2.trim());

//!-----Tüm cümleyi küçük ve büyük harfe çevirelim---
 //console.log("Küçük harf:",sentence.toLowerCase());
// console.log("Büyük harf:",sentence.toUpperCase());

 //!----"Lorem" karekterini gösterelim-----
//console.log(sentence.substring(0,5));

  //!-----"lorem" karakterini değiştirelim------
//console.log(sentence2.replace("Lorem","Selamlar"));
 //! url'den str'yi çıkralım------
//const str = "https://github.com/"

//console.log(url.substr(str.length));
 //!--url http ile mi https ilemi başliyor--
//console.log(url.startsWith("http"));

  //!--url ".com" ile mi içeriyor-----
//console.log(url.includes(".com"));
//TODO-----Diziler------------------------------------
const markalar=["BMW","Mercedes","Opel","Mazda"]

//!----Dizi eleman sayısını bulalım---
//console.log(markalar.length);

//!---Dizinin ilk ve son elemanı nedir?----
console.log(markalar[0]);
console.log(markalar[3]);

//!--Sonuna dizi ekleyelim-------
const sonaeklendi=markalar.push("Renault")
console.log("Sonuna dizi eklendi:",markalar);

//!--Başina dizi ekleyelim----------
 const basaeklendi=markalar.unshift("Toyota")
 console.log("Bşina dizi eklendi:",markalar);

 //!-Sondan dizi silelim--------
const sondansilindi=markalar.pop()
 console.log("Sonuncu index silindi:",markalar);

//!-Baştaki diziyi silelim------
const bastansil=markalar.shift()
console.log("Baştaki veriyi siler",markalar);

//!-Elemanlari ters çevirelim---------
console.log(markalar.reverse())
//!--Elemanları sıralayalım-----------
console.log(markalar.sort());
//!--Eleman sorgulayalım--------------
console.log(markalar.indexOf("Opel"));
console.log(markalar.includes("BMW"));
//!--Stringi diziye çevirelim---------
var sth="selam,dünya"
var dizi2=sth.split(",")
console.log(dizi2);
//!--Dizileri birleştirelim
console.log(markalar.concat(dizi2));