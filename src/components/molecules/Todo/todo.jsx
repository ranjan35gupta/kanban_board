import React, { useState } from "react";
import uuid from 'react-uuid'

import styles from "./todo.module.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {BiPencil, BiSolidPencil, BiUser} from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'

import { useDispatch,useSelector } from "react-redux";
import { addTitle,addTodo,addBeforeCartTitle,addCartItems } from "../../../Redux/Reduxslice/todoSlice";


const Todo = () => {
  // useEffect(()=>{
 
  // },[title])
  
  
  const dispatch = useDispatch();
  const values = useSelector(state=>state.newState)
  const {title,todo,beforeCartTitle} = values
  const [input1,setInput1]=useState([{in:<input/>}])
  const [showList, setShowList] = useState(false);
  const [addlist,setAddList]=useState('')
  const [titleName1,setTitleName1]=useState('')
  
  const [isClicked, setIsClicked] = useState(true);

  const handleAddList = () => {
    setIsClicked(false);
    
    
  };
  


  const handleCard = () => {
    if(localStorage.todolists===undefined){
      localStorage.setItem("todolists",JSON.stringify([{id:uuid(),cartName:beforeCartTitle,cartItems:[]}]))
      
     dispatch(addTodo(JSON.parse(localStorage.getItem("todolists"))))
    
    }
    else{
    const data1 = [...(JSON.parse(localStorage.getItem("todolists"))),{id:uuid(),cartName:beforeCartTitle,cartItems:[]}]
    localStorage.setItem("todolists",JSON.stringify(data1))
   
    
    dispatch(addTodo(JSON.parse(localStorage.getItem("todolists"))))
    
     const ran = JSON.parse(localStorage.todolists)
     
  }
    
    
    setIsClicked(true)
   
  }
  console.log(todo,"this is the todo list after rendering")
  
  function handleranjan(e){
    // dispatch(addTitle({element:e.target.value,cartId:id}))
    setTitleName1(e.target.value)

    

  }
  function handleTitle(e,id){
    e.preventDefault()
    dispatch(addTitle({element:titleName1,cartId:id}))
    
    // setTitleName1(titleName)

  }
  function addCartList(e,cartItemId){
    e.preventDefault()
    
    dispatch(addCartItems({cartItemId:cartItemId,lists:addlist}))
    setShowList(true);
  }
  
  return (
    <div className={styles.container}>
    <div>
      {isClicked ? (
        <div className={styles.add_list}>
          <button onClick={handleAddList} className={styles.add_list_btn}>
            + Add a List
          </button>
        </div>
      ) : (
        <div className={styles.add_list_field}>
          <input className={styles.text_field}
          placeholder="Enter list title..."
            onChange={(e) => {
              dispatch(addBeforeCartTitle(e.target.value));
            }}
          />
          <button className={styles.list_btn} onClick={handleCard}>Add Card</button>
          <div className={styles.cross}>
          <RxCross2 />
           </div> 
        </div>
      )}
      </div>

      <div>

    
        <div className={styles.todo_container_list}>
          {todo.map((item) => {
            return (
              <div className={styles.wraperContainer}>
                <div className={styles.todoContainer}>
                  <div className={styles.titles}>
                  <form className={styles.forms} onSubmit={(e)=>handleTitle(e,item.id)}>
                  <input type="text" className={styles.input1}   defaultValue={item.cartName} onChange={handleranjan} />
                 <MoreHorizIcon sx={{marginTop: "10px"}}/>
                  </form>
                  </div>
                  {item.cartItems.map(ele=>{
                    return( <>
                      <div className={styles.element}> {ele}</div> 
                      <BiPencil className={styles.pencil}/>
                      </>
                    )
                  })}
                  <form className={styles.form2} onSubmit={(e)=>addCartList(e,item.id)} >
                <input className={styles.input2} type="text" onChange={(e)=>setAddList(e.target.value)} placeholder="Enter a little for this card..."/>
                  </form>
                 
                 <button className={styles.addbtn}>Add Card</button>
                 <div className={styles.cross1}>
          <RxCross2 />
           </div> 
                 
               
                </div>
              </div>
            );
          })}

          
        </div>
     
    </div>
    </div>
  );
};

export default Todo;
// defaultValue={title}
{/* <List/> */}