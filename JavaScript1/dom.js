var a  = document.getElementById('first');

a.innerText = "Heading 1";
a.style.color = 'red';
a.style.backgroundColor = 'aqua';

var b = document.getElementsByTagName('h1');

b[1].innerText = "Hii";

var ab = document.getElementsByClassName('para');
ab[0].innerText = "Para changed";

var c = document.querySelectorAll('.para');

var d = document.querySelector('#fourth');

d.style.color = 'blue';
d.innerText = "Database MySql";



var id = document.getElementById('third');

id.innerText = "JavaScript in Vs Code";
id.style.fontFamily = "cursive";

var second = document.getElementById('second');

second.innerText = "Learning";

function style(){

    second.style.fontFamily = "cursive";
    second.style.color = "purple";
}

setTimeout( style , 1000 );
