const fs = require('fs');

// Class to represent the data structure
class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = null; // Variable to hold the data collection

// Function to initialize data by reading from JSON files
function initialize() {
    return new Promise((resolve, reject) => {
        // Read students.json file
        fs.readFile('./data/students.json', 'utf8', (err, studentDataFromFile) => {
            if (err) {
                reject("Unable to read students.json");
                return;
            }

            // Read courses.json file
            fs.readFile('./data/courses.json', 'utf8', (err, courseDataFromFile) => {
                if (err) {
                    reject("Unable to read courses.json");
                    return;
                }

                // Create a Data instance with parsed data and resolve the promise
                dataCollection = new Data(JSON.parse(studentDataFromFile), JSON.parse(courseDataFromFile));
                resolve();
            });
        });
    });
}

// Function to get all students
function getAllStudents() {
    return new Promise((resolve, reject) => {
        if (dataCollection && dataCollection.students.length > 0) {
            resolve(`Successfully retrieved ${dataCollection.students.length} students`);
        } else {
            reject("No results returned");
        }
    });
}

// Function to get TAs (Teaching Assistants)
function getTAs() {
    return new Promise((resolve, reject) => {
        if (dataCollection && dataCollection.students.length > 0) {
            // Filter students with TA property true
            const tas = dataCollection.students.filter(student => student.TA);
            resolve(`Successfully retrieved ${tas.length} TAs`);
        } else {
            reject("No results returned");
        }
    });
}

// Function to get all courses
function getCourses() {
    return new Promise((resolve, reject) => {
        if (dataCollection && dataCollection.courses.length > 0) {
            resolve(`Successfully retrieved ${dataCollection.courses.length} courses`);
        } else {
            reject("No results returned");
        }
    });
}

// Exported module functions
module.exports = {
    initialize,
    getAllStudents,
    getTAs,
    getCourses
};
