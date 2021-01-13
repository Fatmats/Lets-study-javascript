//TODO--Number--------

var num = 15.123456789
//!--toplamda 3 basamaklı sayı kullanalım--------
console.log(num.toPrecision(3));
//!--ondalık kısmı 3 basamaklı alalım--------
 console.log(num.toFixed(3));
 //!--en yakın sayıya yuvarlayalım--------
console.log(Math.round(num));
//!--aşaği yuvarlayalım--------
console.log(Math.floor(num));
//!--yukarı yuvarlayalım--------
console.log(Math.ceil(num));
 //!--En küçük bulmak-----
 console.log(Math.min(1,2,10,56,20,5.15));
  //!--En büyük bulmak-----
 console.log(Math.max(1,2,10,56,20,5.15))
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
