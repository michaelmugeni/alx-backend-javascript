interface Student {
   firstName: string;
   lastName: string;
   age; number;
   location; string
}

const student1: Student = {
    firstName: "Michael",
    lastName: "Mugeni",
    age: 21,
    location: "Nairobi"
};

const student2: Student = {
    firstName: "Jasmine",
    lastName: "Favour",
    age: 12,
    location: "Usa"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;

