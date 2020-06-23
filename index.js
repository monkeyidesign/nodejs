//run: node file.js
const info = {
    name: 'Sam',
    age: new Date().getFullYear() - 1983
};

const getInfo = ({ name }) => {
    console.log(name);
}
getInfo(info)

const {name, age } = info;
console.log(age, name);

const serverScript = ['PHP', 'Laravel', 'Symfony'];
const [FisrtKey, SecondKey] = serverScript;
console.log(SecondKey);
