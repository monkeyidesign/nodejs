//run: node file.js
const name = "Mr.Sam";
let age = (new Date().getFullYear()) - 1983;
const hasHobbies = true;

age = 18;

function userInfo(uName, uAge, uFav){
    return(
        [{'name': uName, 'age': uAge, 'hobbies': uFav}]
    );
}
console.log(userInfo(name, age, hasHobbies));