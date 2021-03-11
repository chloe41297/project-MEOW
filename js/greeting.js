
const form = document.querySelector(".gretting");
const input = form.querySelector("input");
const USER_LS = "currentUser";
const greeting = document.querySelector(".input__username__output");
const SHOWING = "showing";
const ASK = document.querySelector(".asking");
const DISAPPEAR = "disappear";

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
    ASK.classList.remove(DISAPPEAR);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
 
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    ASK.classList.add(DISAPPEAR);
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