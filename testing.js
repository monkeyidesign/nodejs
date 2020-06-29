var x = Buffer.from('abcdef');
var y = x.slice(2,5);//slide(start, end)

console.log(y.toString());
// cde

const buf = Buffer.from([1, 2, 3]);
console.log(buf);
// <Buffer 01 02 03>

for (const b of buf) {
    console.log(b);
}
// Prints:
//   1
//   2
//   3


const buf1 = Buffer.from('1234');
const buf2 = Buffer.from('0123');
const arr = [buf1, buf2];

console.log(arr.sort(Buffer.compare));