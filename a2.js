/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Regan Basnet Student ID: 130377237 Date: 3rd feb, 2024
*
********************************************************************************/ 

// Require the collegeData module
const collegeData = require('./modules/collegeData');

// Initialize the data retrieval process
collegeData.initialize()
    .then(() => {
        console.log("Data initialization successful!");

        // Testing functions after successful initialization

        // Get all students
        collegeData.getAllStudents()
            .then(result => console.log(result))
            .catch(error => console.error(error));

        // Get all courses
        collegeData.getCourses()
            .then(result => console.log(result))
            .catch(error => console.error(error));

        // Get Teaching Assistants (TAs)
        collegeData.getTAs()
            .then(result => console.log(result))
            .catch(error => console.error(error));
    })
    .catch(error => console.error(error));

