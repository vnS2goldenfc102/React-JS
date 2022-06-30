// 4. Arrow function

// 1. Cách sử dụng arrow function
// Cú pháp cơ bản với nhiều tham số
// ES5
function sum(a,b){
    return a+b;
}
// ES6
const sum = (a,b) => {
    return a+b;
}
// Cú pháp cơ với 1 tham số
// ES5
var splitsentence = function splitsent(sent){
    return sent.split(' ')
}
//ES6
const splitsentence = sent =>{return sent;}
// Không tham số
// ES5
const docLogEs5 = function docLog(){
    console.log('Hello ^^')
}
// ES6 
const docLogEs6 = () => {console.log('Hello');};
docLogEs6();
// 2.Cú pháp Object literals
// ES5
let setNameIdEs5 = function setNameId(id, name){
    return {
        id: id,
        name: name
    };
};
//ES6 
let setNameIdEs6 = (id, name) =>({id: id, name: name});
// 2.Những lưu ý để tối viết
// Obj method
var person = {
    points: 23,
    score: () => {
    this.points++;
    }
}
// Chúng ta có một method được gọi là  score  và có thể gọi nó ra bằng  person.score .  
// score  có sẽ tăng dần  points  tùy vào số lần nó được  run  và  points  hiện tại là 23.
// Khi sử dụng arrow function  this  không bị ràng buộc bởi thứ gì cả. Nó chỉ kế thừa từ phạm vi cha mà trong trường hợp này là  window .
// Và khi dùng function thông thường nếu chúng ta chạy  person.score();  , trong một vài lần,  points  sẽ có giá trị > 23
    const person = {
    points: 23,
    score: function() {
    this.points++;
    }
}

// Prototype Methods

class Car {
    constructor(make, colour) {
    this.make = make;
    this.colour = colour;
    }
}

const beemer = new Car('BMW', 'blue');
const subie = new Car('Subaru', 'white');
// Trường hợp này khi sử dụng arrow function  this.car  trả về
//   undefined  và  this.colour  cũng trả về  undefined .
Car.prototype.summarize = () => {
    return `This car is a ${this.make} in the colour ${this.colour}`;  
    };

// Sau tất cả những gì chúng ta đã tạo ra, chúng ta có thể thêm được tất cả các 
    // methods vào tất cả chúng. Bởi vậy  Car.prototype.summarize 
    //  được thiết lập, vì vậy hãy viết vào console  subie.summarize    
Car.prototype.summarize = function() {
        return `This car is a ${this.make} in the colour ${this.colour}`;  
        };
