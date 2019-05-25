
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


