function createTable(){
    let parentElem = document.querySelector(".block");
    for(let i = 0; i < 10; i++){
        let elem = document.createElement("div");
        elem.innerHTML = i;
        parentElem.appendChild(elem);
    }
}
createTable();