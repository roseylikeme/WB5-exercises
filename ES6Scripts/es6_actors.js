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

    function memID(value){
        return(value.memID == _memID)
    }
}
// Who is the Academy Member whose ID is 187?
// getAcademyMemberByID(187); //COMMENT OUT

// Who has have been in at least 3 films?
let films = academyMembers.filter(arrayValue => arrayValue.films.length >= 3);
films.forEach( arrayValue => console.log(arrayValue.name))

// Who has a name that starts with "Bob"?
// HARDER: Which Academy Members have been in a film
// that starts with "A"