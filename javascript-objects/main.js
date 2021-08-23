var student = {
  firstName: 'Jamie',
  lastName: 'Cafirma',
  age: 18
};
var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'server';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Tesla',
  model: 'Model 3',
  year: 2019
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Oliver',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
