import React, { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoForm = () => {
    const [state ,setState] = useState("")
    const[itemList , setItemlist]=useState([])
    const onsubmitHandler =async (e)=>{
      e.preventDefault()
      try{
        const body =  setItemlist((itemList)=>{
            return [...itemList,state]
          })
          await fetch("http://localhost:8000/todolist",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
          });
          
      }catch(err){
  console.log(err.message)
      }
    
    setState("")
    }
    const onChangeHandler=(e)=>{
        setState(e.target.value)

    }
    const ondelete =(id)=>{
    console.log("delete")
    setItemlist((itemList)=>{
        return itemList.filter((item,index)=>{
            return  index!== id
        })
    })
    }
  return (
    <>
        <form onSubmit={onsubmitHandler}>
            <div className='inputbox'>
            <input placeholder='Enter to do'  value={state} onChange={onChangeHandler}/>
            <button type='submit'>Add Task</button>
            </div>
            <ol >
                {itemList.map((item, index)=>{
                    return <ToDoItem text={item} id={index} key={index} onDelete={ondelete}/>
                })}
            </ol>
            </form>
    </>
  )
}

export default ToDoForm