//import  { NUMBER_FLOORS } from "../constants.js";

function createElements(){
    const parentElem = document.querySelector(".block");
    for(let i = 1; i <= 5; i++){
        let elem = document.createElement("div");
        elem.className = "floor";
        elem.innerHTML = `floor ${i}`;
        parentElem.appendChild(elem);
    }
}
createElements();

function callLift(floor){
    setTimeout(()=>{
        alert(`Ліфт прибув Двері відкрито ${floor}`);
    },2000); // todo time change after create all floors
};


//callLift("f");

let asd = document.querySelectorAll('.floor')
    .forEach( btn => btn.addEventListener('click', func));

function func(e){
    callLift(e.target.innerHTML);
};
console.log(asd)
