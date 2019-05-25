import  { NUMBER_FLOORS } from "../constants.js";

function createElements(){
    const parentElem = document.querySelector(".block");
    for(let i = 1; i <= NUMBER_FLOORS; i++){
        let elem = document.createElement("div");
        elem.className = "floor";
        elem.innerHTML = "floor" + " " +i;
        parentElem.appendChild(elem);
    }
}
createElements();

function callLift(floor){
    setTimeout(()=>{
        alert("Ліфт прибув Двері відкрито");
    },2000); // todo time change after create all floors
};


