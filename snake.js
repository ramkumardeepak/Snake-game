var cvs=document.getElementById("canvas")
var ctx=cvs.getContext("2d");
var snakeW=10;
var snakeH=10;
ctx.fillStyle="white";
ctx.fillRect(1,1,snakeW,snakeH);
ctx.fillStyle="red";
drawsnake(1,2);
