const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const TODO__LS = "toDos__ls";
let toDoArray = [];

function handleDelete(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDo = toDoArray.filter(function(toDo){
        return toDo.id !== parseInt(li.id) ;
    });
    toDoArray = cleanToDo;
    saveToDo();
}

function saveToDo(text){
    localStorage.setItem(TODO__LS, JSON.stringify(toDoArray));
}

function writeToDo(text){
    const li = document.createElement("li");
    const delBTN = document.createElement("button");
    delBTN.innerText = "X";
    delBTN.addEventListener("click",handleDelete);
    const span = document.createElement("span");
    const newId = toDoArray.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBTN);
    li.id = newId
    toDoList.appendChild(li);
    const toDoObj = {
        text:text,
        id: newId
    };
    toDoArray.push(toDoObj);
    saveToDo();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    writeToDo(currentValue);
    toDoInput.value = "";
}

function loadToDoList(){
    const loadedToDo = localStorage.getItem(TODO__LS);
    if(loadedToDo !==null){
        const parsedToDo = JSON.parse(loadedToDo);
        parsedToDo.forEach(function(toDo){
            writeToDo(toDo.text);
        })
    }
}

function init(){
    loadToDoList();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();