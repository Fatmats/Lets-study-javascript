//TODO--İF-ELSE DÖNGÜSÜ--------------------------------

//!   Kullanıcının Ehliyet Alma durumu kontrol edildi                          
// const user=prompt("Adınız?")
// const yas=prompt("Yaşınız?")

// if( yas >= 18){
//     document.write("Sayın" +" "+ `${user}`+" "+ "Ehliyet Almaya Hak kazandınız!!") 
// }else{
//     document.write("Sayın"+" "+ `${user}`+" "+ "Yaşınız tutmuyor")
// }

//TODO---Object-ve İf döngüsü kullanılara Kullanıcı kayıt işlemi ve giriş işlemi------------------------

// const obj = {
//     user: prompt("Kullanıcı Adınız?"),
//     password: prompt("Şifreniz?")
// };
// const data = {
//     user: "",
//     password: ""
// }

// if (obj.user.length > 0) {
//     const veri1 = obj.user.valueOf()
//     const veri2 = obj.password.valueOf()
//     data.user = veri1
//     data.password = veri2
//     console.log(data);
//     if (confirm("Giriş Yapmak istermisiniz?")) {
//         UserName = prompt("Kullanıcı Adini giriniz")
//         PasswordAdd = prompt("Şifre Giriniz")
//         if (data.user == UserName && data.password == PasswordAdd) {
//             alert("Hoşgeldiniz!")
//         } else {
//             alert("Yanliş Giriş")
//         }
//     } else(alert("Hoşçakalın!!"))
// } else {}

//TODO-----------FOR & WHİLE LOOP------------------------------------------------------

// const arr =["Ali","Mert","Buse"];

// for (let i=0 ; i < arr.length ;i++){
//     console.log(arr[i]);
// } //!Basit bir For döngüsü

//! Kullanıcıdan Aldığımız verileri dizide saydırdık----
// const dizi = [];
// let input = prompt("Lütfen Bir İsim Giriniz");
// dizi.push(input)

// for (let i = 0; i < dizi.length; i++) {
//     console.log(dizi[i]);
// }
//?--VEYA Foreach yöntemiyle saydırabiliriz

// dizi.forEach(function (item) {
//     console.log(item);
// })

//!--------While döngüsü ile dizi içinde ki kullanıcıların varliğini sorguladık------------
// const life = 0
// const dizi = ["Ali", "Veli", "Ayşe"];


// while (life = 0) {

//     let input = prompt("Lütfen Bir İsim Giriniz");
//     if (dizi.includes(input)) {
//         alert("Giriş Yapıldı")
//         break;
//     } else {
//         alert("Kullanıcı Bulunamadi")
//         break;
//     }
// }


//TODO      Function   Uygulamasi     

// const messges = prompt("Lütfen yapacaginiz işlem kodunu giriniz! 1-Para yatırma | 2-Para çekme")
// anahesap = 1500;


// function islem() {

//     if (messges <= 1) {
//         toplama()
//     } else if (messges >= 2) {
//         cikarma()
//     }
// }

// function toplama() {
//     const miktar2 = prompt("Yataracağınız Miktari Girin")
//     const tpl1 = +miktar2 + anahesap
//     return alert(`Hesabınız ${tpl1} oldu`)
// };

// function cikarma() {

//     const miktar1 = prompt("Çekeceğiniz Miktari Girin")
//     if (miktar1 < anahesap) {
//         const tpl = anahesap - +miktar1
//         alert(`Hesabınız ${tpl} oldu`)
//     }

//     if (miktar1 > anahesap) {
//         alert("Yeterli Miktar Yok")
//     }

// };
// islem()