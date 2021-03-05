const input = document.querySelector(".profile__name");
const USER_LS = "currentUser";

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    input.innerText = `${currentUser}`;

}

function init(){
    loadName();
}
init();