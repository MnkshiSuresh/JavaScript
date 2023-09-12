//loops in js

//for loop
let sum=0;
let n=prompt("enter the limit")
for(let i=1;i<=n;i++){
    sum+=i
}
console.log(sum)

//for in loop
let obj={
    meenakshi: 20,
    ammu: 20,
    anna: 10,
    diya: 40,
    nemu: 15
}
for(let a in obj){
console.log("mark of "+a+" are "+obj[a])}

//for of loop
for(let b of "meenakshi"){
console.log(b)}

//while loop
let a=prompt("enter the limit:")
a=Number.parseInt(a);
let i=0;

while(i<a){
    console.log(i)
    i++
}

//do-while
let a=prompt("enter the limit:")
a=Number.parseInt(a);
let sum=0;
let i=1;
do{
    sum+=i
    i++
}while(i<=a)

console.log(sum)
