//!-------------------------Ajax yapısı ile dosya açma-----------------------

// var xhr=new XMLHttpRequest();
// xhr.onreadystatechange=function(){
//     if(xhr.readyState===4 && xhr.status===200){
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('get','veri.txt',true);
// xhr.send()

//!-------------------------JSON ile veri işleme-------------------------------
//*--Bir eleman alma-----
document.querySelector('#getfamily').addEventListener("click", loadfamily);


// function loadfamily() {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "data.json", true);
//     xhr.onload = function () {
//         if (this.status === 200) {

//             let family = JSON.parse(this.responseText)

//             let html;
//             family.forEach(element => {
//                 html+=
//             `<tr>
//             <td>${element.firstName}</td>
//             <td>${element.SecondName}</td>
//             <td>${element.Age}</td>
//             <td>${element.Role}</td>
//             </tr>`
//             });;

//             document.querySelector("#members").innerHTML = html;
//         }
//     }

//     xhr.send()
// }
//?-----FETCH-------
function loadfamily() {
    fetch('data.json').then(response => {
        return response.json();
    }).then(data => {
        var html = "";
        data.forEach(element => {
            html +=
                `<tr>
            <td>${element.firstName}</td>
            <td>${element.SecondName}</td>
            <td>${element.Age}</td>
            <td>${element.Role}</td>
                 </tr>`

            document.querySelector("#members").innerHTML = html;
        });
    })
}
// loadfamily()
//*---POST------
function postExternalApi() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url).then(res => {
        var data = {
            method: "POST",
            body: JSON.stringify({
                userİD: 1,
                title: "sample title",
                body: "sample body"
            }),
            header: new Headers({
                'content-type':'application/json'
            })
        }
        fetch(url,data)
        .then(res=>{
            console.log(res);
        })
    })
}
postExternalApi()