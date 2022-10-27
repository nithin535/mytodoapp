import React from 'react'
import { emitter } from './Notification';

const todoList = ({todo, removeTodo, handleChange}) => {

  const handleCheckboxChange = () => {
    if(todo.done)
      return null;
      handleChange(todo.id);
      emitter.emit("NOTIFICATION", "Task Completed")
  }
  return (
    <>
    <div align='left'>
      <input type='checkbox' style={{margin:'0px 10px'}} defaultChecked={todo.done} onClick={() => handleCheckboxChange()}/>
      <span style={todo.done ? {textDecoration:'line-through'} : null}>{todo.title}</span> 
      <span style={{position:"fixed", 
            right:20, margin:'0 10px', 
            cursor:'pointer',  
            fontWeight:600}}
            onClick={() => {removeTodo(todo.id)
            emitter.emit("NOTIFICATION", "Task Deleted")
            }}>X</span>
      <hr/>
      
    </div>
    </>
  )
}

export default todoList