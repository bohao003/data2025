const readline = require('readline-sync');

var weight= readline.questionFloat("Your weight ? (Kg)");
var height= readline.questionInt("Your height ? (cm)");
var bmi = weight/((height/100)**2);

console.log("Hello! Your BMI value is"+bmi);