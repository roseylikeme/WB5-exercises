let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

// Write code that searhes the courses array using the find() or filter() functions

// When does the PROG200 course start?

function getStartDateOfCourse(_courseID){
    try {
        let theCourseStartDate = courses.find(courseID).StartDate;
        console.log(theCourseStartDate);
    } catch(err){
        console.log(`Could not find CourseID ${_courseID}`)
    }

    function courseID(value){
        return(value.CourseId == _courseID)
    }
}

getStartDateOfCourse("PROG200");

// What is the title of the PROJ500 course?

// What are the titles of the courses that cost $50 or less?

// What classes meet in "Classroom 1"?