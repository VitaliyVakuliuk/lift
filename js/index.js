
<<<<<<< HEAD
function createTable(){
    const parentElem = document.querySelector(".block");
    for(let i = 1; i < 6; i++){
        let elem = document.createElement("div");
        let floor = document.createElement("class");
        floor.className = "floor";
        elem.appendChild(floor);
        elem.innerHTML = i;
        parentElem.appendChild(elem);
    }
}
createTable();


=======

function callLift(floor){
    setTimeout(()=>{
        alert("Ліфт прибувю Двері відкрито");
    },2000); // todo time change after create all floors
};
callLift("f");
>>>>>>> 5adce6caf1324f4d33568bc58d60eae03d633d84
