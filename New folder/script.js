
var leftBox = document.querySelector(".left");
var optional = document.querySelector("#optional");
var rightBox = document.querySelector(".right");
var signUPBtn = document.querySelector("#sign-up");
var signInBtn = document.querySelector("#sign-in");
signUPBtn.addEventListener("click", ()=>{
    leftBox.classList.toggle("ll");
    rightBox.classList.toggle("rr");
    signUPBtn.innerHTML = "SIGN IN";
    optional.classList.toggle("sojib")
})
var namess = document.querySelector("#namess")
var emails = document.querySelector("#emailss")
var okee = document.querySelector(".ok")
var body = document.querySelector(".body")
var noti = document.querySelector(".noti")


var emailfeild = document.querySelector(".emailfeild")
var passwordfeild = document.querySelector(".passwordfeild")
var repasswordfeild = document.querySelector(".repasswordfeild")


signInBtn.addEventListener("click",()=>{
    body.style.transform =  "scale(.3)";
    body.style.transition = ".3s all linear";
    noti.classList.add("mans");
    if(repasswordfeild.value == "" || passwordfeild.value == "" ||emailfeild.value == ""){
        alert("murubbi")
        noti.classList.remove("mans");
        body.style.transform =  "scale(1)";
    }
    namess.value = emailfeild.value;
    emails.value = passwordfeild.value;
})
okee.addEventListener("click",(event)=>{
    body.style.display = "flex"
    body.style.transform =  "scale(1)";
    body.style.transition = ".3s all linear";
    noti.classList.remove("mans")
    event.preventDefault();
    emailfeild.value = "";
    passwordfeild.value = "";
    repasswordfeild.value = "";
})