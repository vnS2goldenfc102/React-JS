// Spread operator
// Ví dụ
Math.max(1,3,5) // output: 5
// Không dùng spread 
Math.max([1,3,5]) // output: NaN
// Dùng spread
Math.max(...[1,3,5]) // output: 5

// Những ví dụ khác về spread operator ...
var array = ['Javascript', 'Ruby', 'PHP'];

var array2 = ['ReactJS', 'Dart']

var array3 = [...array2, ...array];

console.log(array3) // ['Javascript', 'Ruby', 'PHP', 'ReactJS', 'Dart']

// 1. Sao chép mảng
var food = ['bread', 'chocolate', 'banana'];
var food_cp = [...food]

console.log(food_cp) // ['bread', 'chocolate', 'banana']

// 2. Sử dụng mảng như danh sách các tham số
// Hàm Math.min() và Math.max() chỉ nhận danh sách 
// các tham số chứ không nhận tham số là mảng

const numbers = [1 ,9 ,5 ,7 ,0]
console.log(Math.max(numbers)) // output NaN
// Sử dụng spread
console.log(Math.max(...numbers)) // 9

// 3. Thao tác với state trong React

// Khi làm việc với React, đặc biệt là React Hook, việc thêm một phần tử vào React state sẽ được 
// thực hiện dễ dàng hơn rất nhiều, nếu chúng ta sử dụng ....

import React, { useState } from "react"
import ReactDOM from "react-dom"

import "./styles.css"

function App() {
  // Khai báo React Hook
  const [searches, setSearches] = useState([])
  const [query, setQuery] = useState("")

  const handleClick = () => {
     
    // Thêm một phần tử vào trong state searches của React Hook
    setSearches(searches => [...searches, query])
  }
}

// 4. Kết hợp 2 hay nhiều object với nhau

var list1 = {
    a: '1',
    b: '2',
    c: '3'
}

var list2 = {
    d: '4',
    e: '5'
}

var list3 = {...list1, ...list2}
console.log(list3) // {a: '1',b: '2',c: '3',d: '4',e: '5'}

// 5. Một số lưu ý khi sử dụng spread operator
const array = ['😉','😊','😇']
const copyWithEquals = array // Thay đổi mảng array đồng nghĩa cũng sẽ thay đổi mảng copyWithEquals
const copyWithSpread = [...array] // Thay đổi mảng array sẽ không ảnh hưởng đến mảng copyWithSpread

array[0] = '😡' //thay đổi phần tử đầu tiên của mảng array

console.log(...array) // 😡 😊 😇
console.log(...copyWithEquals) // 😡 😊 😇
console.log(...copyWithSpread) // 😉 😊 😇
