var container = document.querySelector(".b");
// container.innerHTML = container.innerHTML + "<i>hello world</i>";

// container.querySelector('i');
// container.innerHTML="";

var newEl = document.createElement('div');

newEl.style.color="#f00";

newEl.innerHTML="bangladesh";
// document.body.appendChild(newEl);
// document.querySelector(".b").appendChild(newEl);
// document.querySelector(".b").removeChild(newEl);

// document.body.innerHTML="";

// for(let i=0;i<10;i++){
// let divcol = document.createElement("div");
// divcol.innerHTML=`element ${i}`;
// document.body.appendChild(divcol);
// }

// var t = document.querySelectorAll("div");
// [].map.call(t,e=>console.log(e))



var input = document.querySelector(".inp");
var list = document.querySelector(".tasklist");
var tasklist = [];

function f(e) {

  list.innerHTML = "";

  e.forEach(e=>{
    let newEl = document.createElement("li");
    newEl.innerHTML= e;
    list.appendChild(newEl);
  })
}

input.addEventListener("keyup", e=>{
  if(e.which === 13 && input.value !== ""){
    tasklist.push(input.value);
  input.value = "";
    f(tasklist);
  }
})







