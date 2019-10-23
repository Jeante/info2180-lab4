
window.onload=page;

function page(){
a = document.getElementById("board").children;
for (i=0; i<9;i++){
a[i].setAttribute("class","square");
 setXorO();
 glow();

}
}



let W = [];


function setXorO() {
    let store = document.querySelectorAll("#board > div");
    for (let i = 0; i < 9; i++) {
        store[i].onclick = function() {
            if(W.length === 0 && store[i].innerHTML === "") {
                store[i].classList.add("square", "X");
                store[i].innerHTML = "X";
                W.push("X");

            }
            else {
                if (W[W.length - 1] === "X" && store[i].innerHTML === ""){
                    store[i].classList.add("square", "O");
                    store[i].innerHTML = "O";
                    W.push("O");

                }
                else if (W[W.length - 1] === "O" && store[i].innerHTML === ""){
                    store[i].classList.add("square", "X");
                    store[i].innerHTML = "X";
                    W.push("X");


                }
            }
        }
    }
}


function glow() {
    let store = document.getElementById("board").children;

    for (let i = 0; i < 9; i++) {
        store[i].onmouseover = function() {

            store[i].classList.toggle("hover", true)

        }
        store[i].onmouseout = function() {

            store[i].classList.toggle("hover", false)
            
        }
    }

}
