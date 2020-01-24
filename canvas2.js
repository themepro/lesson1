var can = document.querySelector("canvas");

var ctx = can.getContext('2d');

var drawing = false;

var oldX = 0;
var oldY = 0;
ctx.strokeStyle = "#f00";
can.addEventListener("mousedown", e =>{
  drawing = true;
  oldX = e.offsetX;
  oldY = e.offsetY;
});
can.addEventListener("mouseup", e =>{
  drawing = false;
});

can.addEventListener("mousemove", e =>{
  if(!drawing) return false;
ctx.moveTo(oldX,oldY);
ctx.lineTo(e.offsetX,e.offsetY);
ctx.stroke();
oldX = e.offsetX;
oldY = e.offsetY;
});