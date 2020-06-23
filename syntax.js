const name = "Mr.Sam";
const age = (new Date().getFullYear()) - 1983;
const hasHobbies = true;

function userInfo(uName, uAge, uFav){
    return(
        [{'name': uName, 'age': uAge, 'hobbies': uFav}]
    );
}
console.log(userInfo(name, age, hasHobbies));