import React,{useState} from 'react'
import AddTodo from '../components/AddTodo'
import Notification from '../components/Notification'
import TodoList from '../components/todoList'


const todoList = [
  {id:1, title: 'Learn react', done: true},
  {id:2, title: 'Create task', done: false},
]

function TodoContainer() {
  const [todos, setTodos] = useState(todoList)
  const handleAddTodo = (newTodo) => {
    const newTodoList =[...todos, newTodo]
    setTodos(newTodoList);
  }
  const handleRemoveTodo = (id) => {
   const newTodoList =  todos.filter((todo) =>todo.id !== id )
   setTodos(newTodoList);
  }
  const handleCheckboxChange = (id) => {
    const newTodoList = todos.map((todo) => {
    if(todo.id === id)
        return {...todo, done:!todo.done}
     return todo;   
  })
  setTodos(newTodoList)
  }
  
  return (
    <div>
      <h4>Todo Application</h4>
      <Notification/>
      {/* <TodoList/> */}
      {todos.length > 0 ? todos.map((todo) => <TodoList key = {todo.id} todo={todo} 
                    removeTodo= {handleRemoveTodo} 
                    handleChange = {handleCheckboxChange}/>) 
                    : "No Todos" 
        
        }
      <AddTodo addTodo={handleAddTodo}/>
    </div>
  )
}

export default TodoContainer