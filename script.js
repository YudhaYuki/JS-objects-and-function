// Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ',  can you explain what is UX design?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Mike');
designerQuestion('Yudha');