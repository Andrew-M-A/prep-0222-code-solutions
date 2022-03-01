var person = {
  firstName: 'Andrew',
  lastName: 'Almeida',
  hobby: 'climbing and coding'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log('My name is: ' + fullName);

person.job = 'Optician';

console.log('My current job is: ' + person.job + ' :)');

person.previousJob = 'Optician ;)';

console.log('My previous job will be: ' + person.previousJob);

console.log('Me as an object: ', person);
