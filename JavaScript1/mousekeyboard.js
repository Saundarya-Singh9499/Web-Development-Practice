/*Mouse Event*/

var div = document.getElementById('div');

div.addEventListener('mouseover' , mouseOver);

function mouseOver(){

    console.log("Mouse Over");
}

div.addEventListener('mouseout' , mouseOut);

function mouseOut(){

    console.log("Mouse Out");
}

/*Keyboard Event*/ 

var input = document.getElementById('input');

input.addEventListener('keypress' , keyPress);

function keyPress(){

    console.log("Key Pressed");
}

input.addEventListener('keyup' , keyPress);

function keyPress(event){

    console.log("Key Pressed" , event.keyCode);
}

/*Keyboard Press Anywhere in the Screen*/

document.addEventListener('keyup' , keyPress);
