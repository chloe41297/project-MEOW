const toDoDown = document.getElementById("toDo__down__btn");
const dDayDown = document.getElementById("dDay__down__btn");
const toDoBox = document.querySelector(".toDo__main__box");
const dDayBox = document.querySelector(".dDay__main__box");
const TODOUNFOLD = "todo_unfold";
const DDAYUNFOLD = "dday-unfold";

function handletoDoFold(event){
    event.preventDefault();
    if(toDoBox.classList.contains(TODOUNFOLD)){
        toDoBox.classList.remove(TODOUNFOLD);
    }else{
        toDoBox.classList.add(TODOUNFOLD);
    }
}
function handledDayFold(event){
    event.preventDefault();
    if(dDayBox.classList.contains(DDAYUNFOLD)){
        dDayBox.classList.remove(DDAYUNFOLD);
    }else{
        dDayBox.classList.add(DDAYUNFOLD);
    }
}
function foldMenu(){
    toDoDown.addEventListener("click",handletoDoFold);
    dDayDown.addEventListener("click", handledDayFold);
}

function init(){
    
    foldMenu();
}
init();