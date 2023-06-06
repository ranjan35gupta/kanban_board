import React from 'react'
import styles from './todolist.module.css'
import {useState} from 'react'


const TodoList = () => {




    //[]



    const [isClicked,setIsClicked] = useState(false)
  return (
    <>
    <div>
        <button onClick={()=>setIsClicked(true)}>AddList</button>
       
       
    </div>
    <div>
    {/* onChange={handleAddList}  */}
        {isClicked?<div>
            <input  type="text" />
            <button>AddCart</button>
        </div>:""}
    </div>
    </>

  )
}

export default TodoList