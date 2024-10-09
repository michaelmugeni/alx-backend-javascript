function getListStudents( ) {
    return [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'Bob', location: 'Columbia' },
        { id: 5, firstName: 'Charlie', location: 'San Francisco' },
    ];
}

function getStudentIdsSum(students) {
    return students.reduce((sum, student) => sum + student.id, 0);
}
const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);

