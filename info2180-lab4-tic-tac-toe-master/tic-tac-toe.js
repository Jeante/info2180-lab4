window.onload=page;

function page(){
let a = document.getElementById("board").children;
for (i=0; i<9;i++){
  a[i].setAttribute("class","square");
}
}
