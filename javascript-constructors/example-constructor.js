function ExampleConstructor() {}

console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var aValue = new ExampleConstructor();

console.log('value of aValue:', aValue);

var isAnInstanceOf = aValue instanceof ExampleConstructor;

console.log('value of isAnInstanceOf:', isAnInstanceOf);
