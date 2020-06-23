//run: node file.js
let name = "Mr.Sam";
const d = new Date().getFullYear();
let age = d - 1983;
const hasHobbies = true;

function userInfo(uName, uAge, uFav){
    return(
        [{'name': uName, 'age': uAge, 'hobbies': uFav}]
    );
}

age = d - 2014;
name = "Joseph";

console.log(userInfo(name, age, hasHobbies));