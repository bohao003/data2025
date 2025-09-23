const readline = require('readline-sync');

var weight= readline.question("Your weight ? (Kg)");
var height= readline.question("Your height ? (cm)");
var bmi = weight/((height/100)**2);

console.log("Hello! Your BMI value is"+bmi);