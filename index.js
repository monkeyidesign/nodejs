//run: node file.js
let name = "Mr.Sam";
const d = new Date().getFullYear();
let age = d - 1983;
const hasHobbies = true;

const userInfo = function (uName, uAge, uFav){
    return(
        [{'name': uName, 'age': uAge, 'hobbies': uFav}]
    );
}

const newUserInfo = (uName, uAge, uFav) => {
    return(
        [{'name': uName, 'age': uAge, 'hobbies': uFav}]
    );
}

age = d - 2014;
name = "Joseph";

console.log(userInfo(name, age, hasHobbies));
console.log(newUserInfo(name, age, hasHobbies));


//short form
const add = (x, y) => x + y;
console.log(add(5,7));

const noAugment = () => 5 + 7;
console.log(noAugment());

const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map(sweetItem => {
    return sweetItem * age
})

console.log(sweeterArray)
//[ 12, 18, 24, 30, 210 ]

//add element to array
const initArray = [2, 3, 4, 5, 35]
initArray.push(100);
console.log(initArray);
//[ 2, 3, 4, 5, 35, 100 ]
