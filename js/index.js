function openDoorLift() {
    setTimeout(() => {
        $('#door_left').animate({ left: '-250px' });
        $('#door_right').animate({ right: '-250px' });
    }, 3000);
    setTimeout(() => {
        goLift();
        scoreboard.value = `Ви у ліфті, виберіть поверх`;
    }, 4000);
};

function shutDoorLift() {
    setTimeout(() => {
        $('#door_left').animate({ left: '0px' });
        $('#door_right').animate({ right: '0px' });
        scoreboard.value = `обережно двері закриваються`;
    }, 2000);
};

let scoreboard = document.querySelector('#scoreboard');
function getRandomInt(min, max) {
    return Math.floor(Math.random() * Math.floor(max - min + 1)) + min;
};
scoreboard.value = `ЛІФТ НА ${getRandomInt(1, 5)} ПОВЕРСІ`

function callLift(floor) {
    setTimeout(() => {
        scoreboard.value = `Ліфт прибув Двері відкриваються`;
    }, 2000); // to do time change after create all floors
};

let buttons = document.querySelectorAll('.btn')
    .forEach(button => button.addEventListener('click', function () {
        scoreboard.value = `Ви вибрали ${button.innerHTML} поверх`;
        shutDoorLift();
        setTimeout(() => {
            scoreboard.value = `Ліфт їде на ${button.innerHTML} поверх`;
        }, 4000);
        setTimeout(() => {
            scoreboard.value = `Ліфт прибув на ${button.innerHTML} поверх`;
            $('#door_left').animate({ left: '-250px' });
            $('#door_right').animate({ right: '-250px' });
        }, 6000);
        setTimeout(() => {
            goLift();
            $('#door_left').animate({ left: '0px' });
            $('#door_right').animate({ right: '0px' });
            scoreboard.value = `ЛІФТ НА ${button.innerHTML} ПОВЕРСІ`
        }, 8000);
    }));

document.querySelector('#block')
    .addEventListener('click', function () {
        scoreboard.value = `Ліфт опускається`;
        callLift();
        openDoorLift()
    })

function goLift() {
    let element = document.querySelector('#block');
    let element1 = document.querySelector('#display')
    element.classList.toggle("hide");
    element1.classList.toggle("hide");
};
