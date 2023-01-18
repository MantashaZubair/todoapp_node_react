import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
const ToDoItem = (props) => {

    const ondelete =()=>{
        props.onDelete(props.id)
    }
   return (
    <>
    <div className='liststyle'>
   <li>{props.text}</li>
   <FontAwesomeIcon icon={faDeleteLeft} onClick={ondelete} className="icon"/>
   </div>
   </>
  
  )
}

export default ToDoItem