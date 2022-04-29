"use strict";

var div = document.getElementById('div');

var countClicks = document.getElementById('clicks');

var count = 0; 

div.addEventListener('click' , counting);

function counting(){

      count++;

      countClicks.innerHTML = count

      if(count == 5){

          div.style.boxShadow = '1px 1px 14px 4px gray';
      }
}



