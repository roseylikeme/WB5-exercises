let academyMembers = [
    {memID: 101, name: "Bob Brown", films: ["Bob I", "Bob II", "Bob III", "Bob IV"]},
    {memID: 142, name: "Sallie Smith", films: ["A Good Day", "A Better Day"]},
    {memID: 187, name: "Fred Flanders", films: ["Who is Fred?", "Where is Fred?","What is Fred?", "Why Fred?"]},
    {memID: 203, name: "Bobbie Boots", films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]},
];

/*--------Create Functions-----------*/
function getAcademyMemberByID(_memID){
    let actorName = academyMembers.find(memID).name;
    console.log(actorName)
    console.log("--------------------")

    function memID(value){
        return(value.memID == _memID)
    }
}

function getByNumberOfFilms(_films){
    let actorName = academyMembers.filter(arrayValue => arrayValue.films.length >= _films);
    actorName.forEach(arrayValue => console.log(arrayValue.name))
    console.log("--------------------")
}

function getNameThatStartsWith(_name){
    let actorName = academyMembers.filter(arrayValue => arrayValue.name.includes(_name));
    actorName.forEach(arrayValue => console.log(arrayValue.name))
    console.log("--------------------")
}

function getActorFromFilmThatStartsWith(_filmStart){
    let actorName = academyMembers.filter(arrayValue => (arrayValue.films.findIndex(filmStartsAtAFunction) != -1));
    actorName.forEach(arrayValue => console.log(arrayValue.name))
    console.log("--------------------")

    function filmStartsAtAFunction(element){
        return (element.substring(0,1) == _filmStart);
    } 
}

/*--------QUESTIONS & ANSWERS-----------*/

// * Who is the Academy Member whose ID is 187?
getAcademyMemberByID(187); //ANS

// * Who has have been in at least 3 films?
getByNumberOfFilms(3); //ANS

// * Who has a name that starts with "Bob"?
getNameThatStartsWith("Bob"); //ANS

// * HARDER: Which Academy Members have been in a film that starts with "A"?
getActorFromFilmThatStartsWith("A"); //ANS 














// ! 💩 function
// let filteredfilms = academyMembers.filter( (actor) => (actor.films.findIndex(filmStartsAtAFunction) != -1));

// function filmStartsAtAFunction(element){
//     return (element.substring(0,1) == "A");
// }


// console.log(filteredfilms);