var innerDiv = document.getElementById('innerDiv');
 
var outerDiv = document.getElementById('outerDiv');

var mainDiv = document.getElementById('mainDiv');

var h1 = document.getElementById('h1');

innerDiv.addEventListener('click' , shiftColor);

function shiftColor(){

      innerDiv.style.position = 'relative';
      innerDiv.style.left = '84%';
      mainDiv.style.backgroundColor = 'black';
      h1.style.color = 'white';
      outerDiv.style.backgroundColor = 'white';
}