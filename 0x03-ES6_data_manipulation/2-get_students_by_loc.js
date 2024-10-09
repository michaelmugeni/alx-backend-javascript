function getListStudents() {
    return [
        { id: 1, firstName:'Guillaume',location: 'San Francisco' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ];
}

function getStudentsByLocation(students, location) {
    return students.filter(student => student.location === location);
}

const students = getListStudents();
console.log(getStudentsByLocation(students, 'San Francisco'));

