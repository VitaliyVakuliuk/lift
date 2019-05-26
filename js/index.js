//import  { NUMBER_FLOORS } from "../constants.js";

/*function createElements(display = null, parentEl = "#block"){
    const parentElem = document.querySelector(parentEl);

    for(let i = 1; i <= 5; i++){
        let elem = document.createElement("div");
        elem.className = display;
        elem.innerHTML = i;
        parentElem.appendChild(elem);
    }
}*/
//createElements();

function callLift(floor){
    setTimeout(()=>{
        alert('Ліфт прибув Двері відкрито');
        goLift();

    },2000); // todo time change after create all floors
};


//callLift("f");

/*let asd = document.querySelectorAll('.floor')
    .forEach( btn => btn.addEventListener('click', func));

function func(e){
    callLift(e.target.innerHTML);
};*/

let buttons = document.querySelectorAll('.btn')
    .forEach(button => button.addEventListener('click', function(){
        alert(`Ви вибрали ${button.innerHTML} поверх`);
        callLift();
}));

document.querySelector('#block')
    .addEventListener('click', function(){
        callLift();
    })


/*function showDisplay() {
    goLift();
    createElements("btn","#display");
};*/

function goLift(){
    let element = document.querySelector('#block');
    let element1 = document.querySelector('#display')
    element.classList.toggle("hide");
    element1.classList.toggle("hide");
};
