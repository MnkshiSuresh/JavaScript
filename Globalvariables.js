// global variables and functions

var myglobal=23;

function fun1(){
    oopsglobal=45; //its global
    var scope=43;//scope within the function
    console.log("scope within the function , oopsglobal:"+oopsglobal);
}

function fun2(){
var output="";
if (typeof oopsglobal != "undefined"){
    output="oopsglobal is:" + oopsglobal;
}
if (typeof myglobal != "undefined"){
    output="myglobal is:" + myglobal;
}
console.log(output);
}

fun1();
fun2();
