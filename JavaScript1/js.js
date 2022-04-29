// window.alert("Hello World");
/*variable*/
var a = 10;
console.log(a);
var b = "Hello World";
console.log(b);
var c = 90;
var d = a + c;
console.log(d);
var e = 10;
console.log(typeof d);
/*variable*/

// function showMssg(){

//     alert("Hiiii");
// }
// showMssg();

/*function*/
function showMssg(mssg){

    console.log(mssg);
}

showMssg("Hello");

function sum( a , b ){

    return a + b;
}

var result = sum( 80 , 20); 
console.log(result);

function evenOdd(a){

    if( a%2 == 0){
        console.log("Even");
    }else{

        console.log("Odd")
    }
    
}

evenOdd(4);

function mult( a , b ){

    return a * b;
}

var resultmult = mult(50,2);  
console.log(resultmult);

var nam = "global";

function outer(){

    var mssg = "Hii";
    var nam = "outer";

    function inner(){
        
        var nam = "inner";
        console.log(nam);
    }
      inner();
      console.log(nam);
}
outer();

console.log(nam);

var adding = function add(n){

    if(n == 0){
        return 0;
    }

        return add( n - 1 ) + n;
}

var result = adding(4);
console.log(result);

/*Arrays*/
var arr = [1 , 2 , 3 , 4 , 5 , 6 ];
var arr1 = new Array(10 , 20 , 40 , 80 , 100);
arr1.push(200);
arr1.pop();
arr1.shift();
arr1.unshift(10);
   
arr.splice(2 , 2 , 100 , 200 );

var arr2 = new Array( 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 );

function print(elem){

    console.log(elem);
}

arr2.forEach(print);



