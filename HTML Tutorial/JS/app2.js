age=20;

console.log(age)

myName="Adarsh"

console.log(myName)

//string concatnation

details="My name is " +myName +"My age is" +age


age=35 //age is declare before details so op is 35 but now is 30

console.log(details)

var x="good" //has a global scope
// but you can declare again and again
console.log(x)

let x1=true
//let is local scope
//it cannot use again and again
console.log(x1)

const holiday='Sunday'
//const is constant we cannot change it
console.log(holiday)


//print 10-1 using for loop

for(let i=10;i>0;i--){
    console.log(i)
}

//print 2-6 table
//2x1=2--2x10=20

for(i=2;i<7;i++){
    for(j=1;j<11;j++){
        console.log(i +"x" + j +"=" + i *j)
    }
    console.log("_______")
}

//using while loop print good morning 5 times
i=1
while(i<6){
    console.log("Good Morning")
    i++
}














//if else

//if speed is less than 50 print good going
//else be carefull
let speed=prompt("Enter speed:")
if(speed<50){
   console.log("Good going")
}
else{
console.log("Be carefull")
}