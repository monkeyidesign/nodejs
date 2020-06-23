//run: node file.js
const info = {
    name: 'Sam',
    age: new Date().getFullYear() - 1983
};
const copiedObject = {...info};
console.log(copiedObject);

const initArray = ['PHP', 'Laravel', 'Symfony', 'Vue', 'ReactJS', 'Flutter'];
console.log(initArray);
//[ 'PHP', 'Laravel', 'Symfony', 'Vue', 'ReactJS', 'Flutter' ]

const copiedArray = [...initArray];
copiedArray.push('NodeJS');
console.log(copiedArray);
//['PHP','Laravel', 'Symfony', 'Vue', 'ReactJS', 'Flutter', 'NodeJS']


//push in object javascript
let data = [];
// ...
data[0] = { "ID": "1", "Status": "Valid" };
data[1] = { "ID": "2", "Status": "Invalid" };
data[2] = { "ID": "3", "Status": "" };
data[3] = { "ID": "3", "Status": "sgdsgsdg" };
// ...
let tempData = [];
for ( let index=0; index<data.length; index++ ) {
    //console.log(data[index].Status)
    if ( data[index].Status === "Invalid" ) {
        tempData.push( ...data );
    }
}
data = tempData;
// console.log(data);