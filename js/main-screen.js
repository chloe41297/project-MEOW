const input = document.querySelector(".profile__name");
const USER_LS = "currentUser";
const arrow = document.getElementById("down__btn");
const box = document.querySelector(".main__box");
const UNFOLD = "unfold";


function handleFold(event){
    event.preventDefault();
    if(box.classList.contains(UNFOLD)){
        box.classList.remove(UNFOLD);
    }else{
        box.classList.add(UNFOLD);
    }
}

function foldMenu(){
    arrow.addEventListener("click",handleFold);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    input.innerText = `${currentUser}`;

}

function init(){
    loadName();
    foldMenu();
}
init();