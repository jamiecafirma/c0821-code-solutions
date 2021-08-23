var width = 5;
var height = 4;
var area = width * height;

var bill = 23;
var payment = 50;
var change = payment - bill;

var quizzes = 98;
var midterm = 76;
var final = 95;
var grade = (quizzes + midterm + final) / 3;

var firstName = 'Jamie';
var lastName = 'Cafirma';
var fullName = firstName + ' ' + lastName;

var pH = 8.2;
var isAcidic = pH < 7;

var headCount = 300;
var isSparta = headCount === 300;

var motto = fullName;
motto = motto + ' is the GOAT';

console.log('value of area:', area);
console.log('typeof area:', typeof area);

console.log('value of change:', change);
console.log('typeof change:', typeof change);

console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);

console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

console.log('this isSparta?', isSparta);
console.log('typeof isSparta:', typeof isSparta);

console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);
