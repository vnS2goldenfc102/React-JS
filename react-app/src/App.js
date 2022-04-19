import React, {Fragment} from 'react'
import Header from "./components/header"
import Todo from "./components/todo"

const App = () =>{
  return(
    <Fragment>
      <Header />
      <Todo />
    </Fragment> 
  )
}

export default App;
