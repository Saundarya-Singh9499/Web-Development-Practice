var outerDiv = document.getElementById('outerDiv');
var innerDiv = document.getElementById('innerDiv');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');

btn1.addEventListener('click' , changeColor);
 
function changeColor(){

     
     outerDiv.style.backgroundColor = 'green';
     outerDiv.style.border = '2px solid green';
     btn1.style.boxShadow = '1px 1px 14px 4px gray';
}

btn2.addEventListener('click' , changeShape);

function changeShape(){

     innerDiv.style.position = 'relative';
     innerDiv.style.left = '20%';
     innerDiv.style.top = '20%';
     innerDiv.style.height = '14px';
     innerDiv.style.width = '0px'; 
     innerDiv.style.borderBottom = '100px solid white';
     innerDiv.style.borderRight = '100px solid transparent';
     btn2.style.boxShadow = '1px 1px 14px 4px gray';
     
}

