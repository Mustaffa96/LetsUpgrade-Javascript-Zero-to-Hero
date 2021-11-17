let a= 12
let b= 32
let c= 11
let bigger;

if(a >= b && a >= c) {
    largest = a;
}
else if (b >= a && b >= c) {
    bigger = b;
}
else {
    bigger = c;
}

console.log("The bigger number is " + bigger);


// Another step : can use for user input
// const a = parseFloat(prompt("Enter first number: "));
// const b = parseFloat(prompt("Enter second number: "));
// const c = parseFloat(prompt("Enter third number: "));
// let bigger;

