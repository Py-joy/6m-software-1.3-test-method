/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson"]

function printStudentNames(){
    // Add code here
    // Using the for of method for arrays 
    for (const student of studentList) {
        console.log(student);
    }

    // Alternatively,
    // for (let i=0; i<studentList.length; i++) {
    //     console.log(studentList[i]);
    // }
}

printStudentNames();

// Ignore the code below this line
module.exports = {
    studentList,
    printStudentNames
}