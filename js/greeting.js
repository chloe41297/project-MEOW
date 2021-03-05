
const form = document.querySelector(".gretting");
const input = form.querySelector("input");
const USER_LS = "currentUser";
const greeting = document.querySelector(".input__username__output");
const SHOWING = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue= input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
 
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText=` Hello. \n ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();