var container = document.querySelector(".b");
// container.innerHTML = container.innerHTML + "<i>hello world</i>";

// container.querySelector('i');
// container.innerHTML="";

var newEl = document.createElement('div');

newEl.style.color="#f00";

newEl.innerHTML="bangladesh";
// document.body.appendChild(newEl);
document.querySelector(".b").appendChild(newEl);
document.querySelector(".b").removeChild(newEl);
