function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(5);

console.log('Number of minutes: ', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('Andrew');

console.log('Greeting: ', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addTimes5 = addAndMultiplyBy5(15, 31);

console.log('Quintuplify = ', addTimes5, '!');

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var timesDivide5 = multiplyAndDivideBy5(90, 30);

console.log('PEMDAS = ', timesDivide5, '!');

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(77, 29);

console.log('Difference = ', difference);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}

var circumference = getCircleCircumference(5);

console.log('Circumference = ', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var name = getFullName('Andrew', 'Almeida');

console.log('Hi, my name is', name + '.');

function cube(number) {
  return number * number * number;
}

var numCubed = cube(15);

console.log('Parameter cubed = ', numCubed);
