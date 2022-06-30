// JSX là viết tắt của JavaScript XML, một cú pháp mở rộng cho phép lập trình
//  viên viết HTML trong React một cách dễ dàng. React sử dụng JSX để tạo khuôn
//   mẫu thay vì JavaScript thông thường. Bạn không bắt buộc phải sử dụng JSX 
//   nhưng phần mở rộng này sẽ giúp bạn viết ứng dụng dễ dàng hơn. 

// 1. Sử dụng JSX trong ReactJs
// JSX cho phép lập trình viên viết các phần tử HTML bằng JavaScript 
// và đặt chúng trong DOM mà không cần bất kỳ phương thức nào createElement()  
// và/hoặc appendChild(). 

// Không có JSX
const myElement= React.creatElement('h1',{},'I love JSX');
ReactDOM.render(myElement, document.getElementById('root'));

// Có JSX
const myElement = <h1>I love JSX</h1>;

// 2. Biẻu thức trong JSX

const myelement = <h1>React is {5 + 5} times better with JSX</h1>;
// 3. Chèn khối HTML lớn
const myelement = (

    <ul>
  
      <li>Apples</li>
  
      <li>Bananas</li>
  
      <li>Cherries</li>
  
    </ul>
  
  );
// 4. Thuộc tính JSX trong ReactJS
// Khi muốn thêm thuộc tính tùy chỉnh của JSX trong ReactJS, bạn cần sử dụng tiền tố data-, Trong ví dụ sau, 
// data-myattribute đã được thêm làm thuộc tính của phần tử p.

import React from 'react';

class App extends React.Component {

   render() {

      return (

         <div>

            <h1>Header</h1>

            <h2>Content</h2>

            <p data-myattribute = "somevalue">This is the content!!!</p>

         </div>

      );

   }

}

export default App;

// 5. Tạo kiểu JSX trong ReactJS
// React khuyên các lập trình viên nên sử dụng các kiểu nội tuyến (inline styles). 
// Khi muốn thiết lập các kiểu nội tuyến, bạn cần phải sử dụng cú pháp camelcase. 
// React sẽ tự động thêm px sau giá trị số trên các phần tử cụ thể.
import React from 'react';

class App extends React.Component {

   render() {

      var myStyle = {

         fontSize: 100,

         color: '#FF0000'

      }

      return (

         <div>

            <h1 style = {myStyle}>Header</h1>

         </div>

      );

   }

}

export default App;