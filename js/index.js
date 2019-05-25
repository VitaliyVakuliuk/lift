function func(){
    for(let i = 1; i < 10; i++){
        let elem = document.createElement('div');
        let num = document.createTextNode(i);
        elem.appendChild(num);
        document.body.appendChild(elem);
    }
};
func();