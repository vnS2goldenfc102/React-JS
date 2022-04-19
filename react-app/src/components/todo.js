import React, {Fragment, useState} from "react";

const Todo = () =>{
    const [todoState, setTodoState] = useState(['Việc 1', 'Việc 2','Việc 3'])

//     const allTodo = []

//    for(let todo of todoState){
//        allTodo.push(<p>{todo}</p>)
//    }

    return(
        <Fragment>
            {todoState.map(todo  =>{
                return <p>{todo}</p>
            })}
        </Fragment>
    )
}

export default Todo