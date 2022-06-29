//Write a JavaScript program which iterates the integers from 1 to 100. But for
//multiples of three print "Fizz" instead of the number and for the multiples of five print
//"Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
function multiples(){
    for (i=1;i<=100;i++){
        if (i%3==0 && i%5==0){
            console.log("FizzBuzz")
        }
        else if(i%3==0){
            console.log("Fizz")
        }
        else if(i%5==0){
            console.log("Buzz")
        }
        else
        console.log(i)
    }
}
multiples()

// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
function addition(){
    let sum=0
    for(j=1;j<1000;j++){
        if(j%3==0 && j%5==0){
            sum+=j  
        }
    }
    console.log(sum)
}
addition()

//Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
//check if the current number is odd or even, and display a message to the screen.
//Sample Output :"0 is even","1 is odd","2 is even"

function oddeven(){
    for(z=0;z<=20;z++){
        if(z%2==0){
            console.log(z,"is even")
        }
        else
        console.log(z,"is odd")
    }
}
oddeven()

//Write a JavaScript conditional statement to find the largest of five numbers in the
//given array.

let num = [-2, 4,-5, 6,0]
largest=0
for (p=0;p<=num.length;p++){
    if(num[p]>largest){
        largest=num[p]
    }
}
console.log(largest)


//Using conditional statements, write a JavaScript program to find the largest of the
//following two numbers: 10 & 40

let a=10;
let b=40;
if(a>b){
    console.log(a)
}
else
console.log(b)

//Write a JavaScript program to find leap years from 2000 to 2022
function leapyear(){
    for(y=2000;y<=2022;y++){
        if(y%4==0 && y%100!=0 || y%400==0 ){
            console.log(y,"is a leap year")
        }
    }
}
leapyear()