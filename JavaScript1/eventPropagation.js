"use strict";

var outerDiv = document.getElementById('outerDiv');

var innerDiv = document.getElementById('innerDiv');

outerDiv.addEventListener('click', function(event) {

    console.log("Clicked the Outer Div");

    event.stopPropagation();
});

innerDiv.addEventListener('click', function(event) {

    console.log("Clicked the Inner Div");
    
    event.stopPropagation();
});

document.addEventListener('click', function () {

    console.log("Clicked the Document");
});

var count = 0;

var clickCount = document.getElementById('click-time');

outerDiv.addEventListener('click' , counting);

function counting(){
      
    count++;
    
    console.log(count);
    
    clickCount.innerHTML = count;

    
}