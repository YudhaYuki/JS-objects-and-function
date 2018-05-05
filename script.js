// Closure

// Example 1
/*
function retirement(retirementAge) {
    var a = ' years before retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);


// retirement(66)(1990);
*/




function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ',  can you explain what is UX design?');            
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');            
        } else {
            console.log('Hello ' + name + ', what do you do?');            
        }        
    }
}

interviewQuestion('teacher')('John');