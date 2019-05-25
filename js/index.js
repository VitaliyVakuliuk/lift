//import  { NUMBER_FLOORS } from "../constants.js";

function createElements(display = null, parentEl = "#block"){
    const parentElem = document.querySelector(parentEl);

    for(let i = 1; i <= 5; i++){
        let elem = document.createElement("div");
        elem.className = display || "floor";
        elem.innerHTML = display ? i : `floor ${i}`;
        parentElem.appendChild(elem);
    }
}
createElements();

function callLift(floor){
    setTimeout(()=>{
        alert(`Ліфт прибув Двері відкрито ${floor}`);
        showDisplay();
    },2000); // todo time change after create all floors
};


//callLift("f");

let asd = document.querySelectorAll('.floor')
    .forEach( btn => btn.addEventListener('click', func));

function func(e){
    callLift(e.target.innerHTML);
};

function showDisplay() {
    createElements("btn","#display",);
}
