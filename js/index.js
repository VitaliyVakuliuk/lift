let scoreboard = document.querySelector('#scoreboard');
let openDoor = document.querySelector('#openDoor');
let exit = document.querySelector('#exit');
const cont = document.getElementById('container');

function getRandomInt(min, max) { 
    return Math.floor(Math.random() * Math.floor(max - min + 1)) + min; 
}; 
scoreboard.value = "lift on floor " + getRandomInt(1, 10);

openDoor.addEventListener('click', function(){
    openDoor.style.display = "none";
    scoreboard.style.display = "none";
    cont.style.display = "initial";
    exit.style.display = "initial";
});
exit.addEventListener('click', function(){
    cont.style.display = "none";
    exit.style.display = "none";
    openDoor.style.display = "initial";
    scoreboard.style.display = "initial";
});

const display = document.querySelector('#display');
document.querySelector('#one')
    .addEventListener('click', function(){
        display.value = "doors are closed"
        setTimeout("display.value = 'lift going to 1 floor'", 2000);
    });
document.querySelector('#six')
    .addEventListener('click', function(){
        display.value = "doors are closed"
        setTimeout("display.value = 'lift going to 6 floor'", 2000);
    });
document.querySelector('#two')
    .addEventListener('click', function(){
        display.value = "doors are closed"
        setTimeout("display.value = 'lift going to 2 floor'", 2000);
    });
document.querySelector('#three')
    .addEventListener('click', function(){
        display.value = "doors are closed"
        setTimeout("display.value = 'lift going to 3 floor'", 2000);
    });
document.querySelector('#four')
    .addEventListener('click', function(){
        display.value = "doors are closed"
        setTimeout("display.value = 'lift going to 4 floor'", 2000);
    });
document.querySelector('#seven')
    .addEventListener('click', function(){
        display.value = "doors are closed"
        setTimeout("display.value = 'lift going to 7 floor'", 2000);
    });
document.querySelector('#five')
    .addEventListener('click', function(){
        display.value = "doors are closed"
        setTimeout("display.value = 'lift going to 5 floor'", 2000);
    });
document.querySelector('#eight')
    .addEventListener('click', function(){
        display.value = "doors are closed"
        setTimeout("display.value = 'lift going to 8 floor'", 2000);
    });
document.querySelector('#nine')
    .addEventListener('click', function(){
        display.value = "doors are closed"
        setTimeout("display.value = 'lift going to 9 floor'", 2000);
    });
document.querySelector('#ten')
    .addEventListener('click', function(){
        display.value = "doors are closed"
        setTimeout("display.value = 'lift going to 10 floor'", 2000);
    });


alert("hellp world");