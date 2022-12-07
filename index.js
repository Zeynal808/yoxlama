var giris=document.querySelector('#enter')
var send=document.querySelector('#send')
var ad=document.querySelector('#name')
var sifre=document.querySelector('#password')
var messageBox=document.querySelector('.message-box')
var textarea=document.querySelector('textarea')
var login=document.querySelector('.login')
var message=document.querySelector('.message')
var h2=document.querySelector('h2')
const firebaseConfig = {
    apiKey: "AIzaSyAPlWNZ3WsBsTeguSx2BCsHWsmSv2WYjpU",
    authDomain: "mesajsayti.firebaseapp.com",
    databaseURL: "https://mesajsayti-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mesajsayti",
    storageBucket: "mesajsayti.appspot.com",
    messagingSenderId: "428648803481",
    appId: "1:428648803481:web:809e8fa17142f39aa05c08"
  };
 firebase.initializeApp(firebaseConfig);
 var db=firebase.database().ref()
var users=[
    {
        ad:"nicat",
        sifre:"nicat123"
    },
    {
        ad:"ferid",
        sifre:"ferid123"
    },
    {
        ad:"pasha",
        sifre:"pasha123"
    }

]

giris.onclick=function()
{
    for(let i=0;i<users.length;i++){
        if(users[i].ad==ad.value&&users[i].sifre==sifre.value){
          
            login.style.display='none'
            message.style.display='block'
            h2.innerText=`Sehifemize xosh gelmisiniz hormetli ${ad.value}`
        }
    }
}
send.onclick=function(){
    var mesaj=textarea.value
    db.set({
        ad:ad.value,
        text:mesaj
    })

}
db.on('value',function(snapshot){
     var x=snapshot.val();
     if(x==null || x==undefined){

     }
     else{
        var p=document.createElement('p')
        p.innerText=`${x.ad} : ${x.text} `
        messageBox.append(p)
     }
})