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

// getStartDateOfCourse("PROG200");

// What is the title of the PROJ500 course?

function getTitleOfCourse(_courseID){
    try {
        let theCourseTitle = courses.find(courseID).Title;
        console.log(theCourseTitle);
    } catch(err){
        console.log(`Could not find CourseID ${_courseID}`)
    }

    function courseID(value){
        return(value.CourseId == _courseID)
    }
}

// getTitleOfCourse("PROJ500");

// What are the titles of the courses that cost $50 or less?
function getArrayOfTitlesUnder(_fee){
    try {
        let arrayOfTitles = courses.filter(underFee);
        console.log(arrayOfTitles)
    } catch(err){
        console.log(`Could Titles with fees less than ${_fee}`)
    }

    function underFee(value){
        return(Number(value.Fee) <= _fee)
    }
}

// getArrayOfTitlesUnder("50"); // GRABS ARRAYS CORRECTLY BUT I JUST WANT TITLE

function getTitlesUnder(_fee){
    console.log(`Titles of Courses with Fees under $${_fee}:`)
    // This is the filtered array of objects
    let arrayOfTitles = courses.filter(underFee);
    // Searches through each of the arrays and grabs the title from each one
    for(let i=0; i<arrayOfTitles.length; i++){
        console.log(arrayOfTitles[i].Title);
    }
    // The function we pass through the filter
    function underFee(value){
        return(Number(value.Fee) <= _fee) //Grab the fee values of the array that is less than input
    }
}

getTitlesUnder("50") // ANSWER

// What classes meet in "Classroom 1"?