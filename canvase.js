var can = document.querySelector("canvas");

var ctx = can.getContext("2d");

ctx.fillStyle = '#f00';

ctx.fillRect(50, 50, 100, 100);

ctx.strokeStyle = '#dddd'
ctx.strokeRect(30,30,100,100);