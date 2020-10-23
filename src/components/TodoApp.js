import React from "react";
import {connect} from "react-redux";
import { addTodo, delTodo } from "../store/actions/todoAction"


const TodoApp= ({ todos, addTodo, delTodo, input}) => {

  const addNewTodo = () => {
    let lastid = todos[todos.length - 1].id + 1;
    const data = {
      id: lastid,
      title: input,
      complete: false
    }
    addTodo(data)
  }

  const handleEmailChange = (e) => {
    console.log(e.target.value)
    input = e.target.value;
  }
  
  
  return(
      
    <div>
      <h1>cobain todo app</h1>
      <input type="text" id="fname" name="fname" onChange={handleEmailChange}/>
      <button onClick={addNewTodo}>add</button>
      {todos.map(todo =>
        <div key={todo.id}>
          <p>{todo.title}</p>
          <button onClick={() => delTodo(todo.id)}>delete</button>
        </div>
      )}
    </div>
  )
}
const mapStateToProps = state => ({
  todos: state.todoReducer.todos
})
export default connect(mapStateToProps,{addTodo, delTodo})(TodoApp);