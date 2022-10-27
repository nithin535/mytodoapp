import React,{useState} from 'react'
import {EventEmitter} from 'fbemitter'


export const emitter = new EventEmitter();
const Notification = () => {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState()
    const notificationStyle = {
        padding: 5,
        backgroundColor : '#7bd57b',
        borderRadius : 5,
        margin:"10px 20%",
        textAlign:"center",
    }
    const reset = () => {
        setOpen(false)
    }
    const autoHideAfterTimeout = () => {
        setTimeout(() => reset(), 1000)
    }
    emitter.addListener("NOTIFICATION", (msg) => {
        setMessage(msg)
        setOpen(true)
        autoHideAfterTimeout()
    })
    if(!open){
        return null;
    }
  return  <div style={notificationStyle}>{message} successfully</div>
  
}

export default Notification