import React,{useState} from 'react'
import { emitter } from './Notification'

const AddTodo = ({addTodo}) => {
    const todoStyle ={
        position:'fixed', bottom: 20, display:'block', width:'100%'
    }
const [title, setTitle] = useState('')
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {id:Math.random(), title: title, done: false}
    addTodo(newTodo);
    emitter.emit('NOTIFICATION', "New task added")
    setTitle('')
}
  return (
    <div style={todoStyle}>
        <form onSubmit={handleSubmit}>
            <input placeholder='Enter Something...' 
                    style={{width:'85%', padding:10}} required 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}/>
            <input type="submit" style={{width:'10%', padding:10, margin:'0 10px'}} />
            
        </form>
    </div>
  )
}

export default AddTodo