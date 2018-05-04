// Object.create

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
}

// ONE way to inherit the prototype
var john = Object.create(PersonProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

// SECOND way to inherit the prototype
var jane = Object.create(PersonProto, 
{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }   
});