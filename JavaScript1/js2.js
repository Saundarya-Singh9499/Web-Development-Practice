var student = {

           name: "Gajodhar",
           age: 22,
           marks: 98,
           sem: 6,
           address:{

              city: "Ranchi",
              pincode: 834002 
           }

};

for(var prop in student){

    console.log(prop , student[prop]); 
}

var keys = Object.keys(student);

/*setInterval*/

var num = 10;

function counter(){

    console.log(num);
     
    num--;

    if(num == 0){

        clearInterval(id);
    }

}

var id = setInterval(counter , 1000);

var numb = 1;

function increament(){

    console.log(numb);
     
    numb++;

    if(numb == 10){

        clearInterval(id);
    }

}

var id = setInterval(increament , 1000);

/*setTimeout*/

function mssg(){

    console.log("Hello World");
}

setTimeout(mssg , 2000);