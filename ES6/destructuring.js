// Từ định nghĩa trên chúng ta có thể chia Destructuring Assignment ra thành hai nhóm chính:

// - Object Destructuring
// - Array Destructuring

// 1. Obj Destructuring
const person = { first: 'Foo', last: 'Bar' };
const {first, last} = person;

console.log(first); // Foo
console.log(last);  // Bar

//------------------------------------------
// Aliases

let characters = {a: 'a', b: 'b', c: 'c'};
let {a: d, b: e, c: f} = characters;

console.log(d, e, f); // a b c
console.log(a);       // Uncaught ReferenceError: a is not defined


// 2.Array Destructuring

let character = ['Java','Ruby','R' ];
let [a, b, c] = character;

console.log(a,b,c); // 

// Như vậy, hiểu một cách đơn giản, Destructuring Assignment sẽ là 
// sự đảo ngược của Normal Assignment? Hay hiểu đơn giản hơn nữa, 
// chúng ta lấy một phép gán thông thường và flip nó, kết quả 
// thu được sẽ là một Destructuring Assignment?

// String

let message = 'Hello';
let [a, b] = message;
let [x, y, ...z] = message;

console.log(a, b);    // H e
console.log(x, y, z); // H e ['l', 'l', 'o']

// Arrays






