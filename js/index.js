let door = document.getElementById("door_right");
let door1 = document.getElementById("door_left");
function resize() {
    setTimeout(()=>{
        for(let i = 250, k = 250 ; i > door.style.width.length; i--, k--){
        door.style.width = parseInt(door.style.width) - i + "px";
        door1.style.width = parseInt(door1.style.width) - i + "px";
        };
        goLift();
        scoreboard.value = `Ви у ліфті, виберіть поверх`;
    }, 3000);
};

let scoreboard = document.querySelector('#scoreboard');
function getRandomInt(min, max) { 
    return Math.floor(Math.random() * Math.floor(max - min + 1)) + min; 
};
scoreboard.value = `ЛІФТ НА ${getRandomInt(1, 5)} ПОВЕРСІ`

function callLift(floor){
    setTimeout(()=>{
        scoreboard.value = `Ліфт прибув Двері відкриваються`;
    },2000); // todo time change after create all floors
};

let buttons = document.querySelectorAll('.btn')
    .forEach(button => button.addEventListener('click', function () {
        scoreboard.value = `Ви вибрали ${button.innerHTML} поверх`;
        setTimeout(() => {
            scoreboard.value = `Ліфт прибув на ${button.innerHTML} поверх`;
        }, 2000);
        setTimeout(() => {
            goLift();
            scoreboard.value = `ЛІФТ НА ${button.innerHTML} ПОВЕРСІ`
        }, 4000);

    }));

document.querySelector('#block')
    .addEventListener('click', function(){
        scoreboard.value = `Ліфт опускається`;
        callLift();
        resize();
    })

function goLift(){
    let element = document.querySelector('#block');
    let element1 = document.querySelector('#display')
    element.classList.toggle("hide");
    element1.classList.toggle("hide");
    door.classList.toggle('hide')
    door1.classList.toggle('hide');
};
