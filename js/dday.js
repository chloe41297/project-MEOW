const DdayForm = document.querySelector(".js-dDayForm");
const DdayInput = DdayForm.querySelector("input");
const DdaySubmit = document.getElementById("dateSubmit");

    

function handleDate(){
    event.preventDefault();
    const InputValue = document.getElementById("dateInput").value;
    
    const dateSplit = InputValue.split("-");
    const InputYear = parseInt(dateSplit[0]);
    const InputMonth = parseInt(dateSplit[1])-1;
    const InputDay =parseInt(dateSplit[2]);
    
    const currentDate = new Date();
    const dDayDate = new Date(InputYear, InputMonth, InputDay);
    
    const gap = currentDate.getTime()-dDayDate.getTime();
    const dDayResult = Math.floor(gap/(1000*24*60*60));
    const DdayOutput = document.getElementById("dDay__output");

    DdayOutput.innerText = `D${dDayResult > 0 ? `+ ${dDayResult}`: dDayResult}`;
    

}

function loadDday(){
    DdaySubmit.addEventListener("click", handleDate);
}

function init(){
 loadDday();
}
init();