//conditional statements in js

//if else
let a= prompt("enter the age");
a=Number.parseInt(a)
if(a>18){
    alert("can go for a party");
}else{
    alert("cant go for a party cause below permissible age");
}

//if..else if..else
let a= prompt("enter the age")
a=Number.parseInt(a)
if(a>18){
    alert("can go for a party");
}
else if(a==18){
    alert("have fun");
}
else{
    alert("cant go for a party cause below permissible age");
}

//switch
const expr =prompt("write a fruit name")

switch(expr) {
  case "orange": console.log("Oranges are orange in colour");
  case "apple" : console.log("Apple is red in colour");
  case "papaya": console.log("papaya is green in colour");
}
