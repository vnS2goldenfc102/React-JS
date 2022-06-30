// 1. Khai báo đối tượng từ các biến
// ES5 code
var
  a = 1, b = 2, c = 3;
  obj = {
    a: a,
    b: b,
    c: c
  };

obj.a = 1, obj.b = 2, obj.c = 3

// ES6 code
var 
   a = 1, b = 2, c = 3;
   obj = {
       a,
       b,
       c
   };

console.log(obj.a)

// 2. Định nghĩa phương thức của đối tượng nhanh hơn

// ES5 code
var lib = {
    sum:  function(a, b) { return a + b; },
    mult: function(a, b) { return a * b; }
  };
  
 

// ES6 code

var lib = {
    sum: (a,b) => {a + b},
    mult: (a,b) => {a * b}
}

console.log( lib.sum(2, 3) );  // 5
console.log( lib.mult(2, 3) ); // 6

// 3.Key thuộc tính tự động
// Trong ES5, không thể sử dụng một biến cho tên key,
//  mặc dù nó có thể được thêm sau khi đối tượng đã được tạo
// ES5 code
var
  key1 = 'one',
  obj = {
    two: 2,
    three: 3
  };

obj[key1] = 1;

// obj.one = 1, obj.two = 2, obj.three = 3

// Các khóa đối tượng có thể được gán động trong 
// ES6 bằng cách đặt một biểu thức trong dấu ngoặc vuông.

// ES6 code
const
  key1 = 'one',
  obj = {
    [key1]: 1,
    two: 2,
    three: 3
  };

// obj.one = 1, obj.two = 2, obj.three = 3

// 4.Destructuring
// ES5 code
var myObject = {
    one:   'a',
    two:   'b',
    three: 'c'
  };
  
  var
    one   = myObject.one, // 'a'
    two   = myObject.two, // 'b'
    three = myObject.three; // 'c'
// ES6 code
const myObject = {
    one:   'a',
    two:   'b',
    three: 'c'
  };
  
  const { one, two, three } = myObject;
  // one = 'a', two = 'b', three = 'c'
  
//   Cũng có thể gán thuộc tính cho các biến với bất kỳ tên 
//   nào bằng cách sử dụng ký hiệu { propertyName: newVariable }.
// ES6 code
const myObject = {
    one:   'a',
    two:   'b',
    three: 'c'
  };
  
  const { one: first, two: second, three: third } = myObject;
  // first = 'a', second = 'b', third = 'c'
  


// ?? && .?

// a ?? b //  a !== null && a !== unde 

// a && b && c && d 

// a?.b // null

var course = {
    name,
    price,
    getName: () => {name}         
}

// console.log(course)

// var fieldName = 'name';
// var fieldPrice = 'price';

// const course = {
//     [fieldName]: 'Javascript',
//     [fieldPrice]: 1000
// }