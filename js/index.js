let door = document.getElementById("door");
function Resize() {
    let ob = setInterval(function () {
        door.style.width = parseInt(door.style.width) - 50 + "px";
        count++;
    }, 100);
};

let scoreboard = document.querySelector('#scoreboard');
function getRandomInt(min, max) { 
    return Math.floor(Math.random() * Math.floor(max - min + 1)) + min; 
};
scoreboard.value = `ЛІФТ НА ${getRandomInt(1, 5)} ПОВЕРСІ`

function callLift(floor){
    setTimeout(()=>{
        alert('Ліфт прибув Двері відкрито');
        goLift();

    },2000); // todo time change after create all floors
};

let buttons = document.querySelectorAll('.btn')
    .forEach(button => button.addEventListener('click', function(){
        alert(`Ви вибрали ${button.innerHTML} поверх`);
        setTimeout(()=>{
            alert(`Ліфт прибув на ${button.innerHTML} поверх`);
            goLift();
        }, 2000);
}));

document.querySelector('#block')
    .addEventListener('click', function(){
        callLift();
        Resize();
    })

function goLift(){
    let element = document.querySelector('#block');
    let element1 = document.querySelector('#display')
    element.classList.toggle("hide");
    element1.classList.toggle("hide");
    door.classList.toggle('hide')
};
