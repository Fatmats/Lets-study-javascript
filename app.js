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

const obj = {
    user: prompt("Kullanıcı Adınız?"),
    password: prompt("Şifreniz?")
};
const data = {
    user: "",
    password: ""
}

if (obj.user.length > 0) {
    const veri1 = obj.user.valueOf()
    const veri2 = obj.password.valueOf()
    data.user = veri1
    data.password = veri2
    console.log(data);
    if (confirm("Giriş Yapmak istermisiniz?")) {
        UserName = prompt("Kullanıcı Adini giriniz")
        PasswordAdd = prompt("Şifre Giriniz")
        if (data.user == UserName && data.password == PasswordAdd) {
            alert("Hoşgeldiniz!")
        } else {
            alert("Yanliş Giriş")
        }
    } else(alert("Hoşçakalın!!"))
} else {}