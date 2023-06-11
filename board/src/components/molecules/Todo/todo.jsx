import React, { useState } from "react";
import uuid from 'react-uuid'

import styles from "./todo.module.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {BiPencil, BiSolidPencil, BiUser} from 'react-icons/bi'

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
    <>
      {isClicked ? (
        <div>
          <button onClick={handleAddList} className={styles.add_list_btn}>
            Add List
          </button>
        </div>
      ) : (
        <div className={styles.title} >
          <input 
            onChange={(e) => {
              dispatch(addBeforeCartTitle(e.target.value));
            }}
          />
          <button onClick={handleCard}>Add Card</button>
        </div>
      )}

    
        <div className={styles.todo_container_list}>
          {todo.map((item) => {
            return (
              <>
                <div >
                  <div>
                  <form onSubmit={(e)=>handleTitle(e,item.id)}>
                  <input type="text"   defaultValue={item.cartName} onChange={handleranjan} />
                 <MoreHorizIcon/>
                  </form>
                  </div>
                  {item.cartItems.map(ele=>{
                    return(
                      <div>{ele}   <BiPencil/> </div>
                    )
                  })}
                  <form onSubmit={(e)=>addCartList(e,item.id)} >
                  <input type="text" onChange={(e)=>setAddList(e.target.value)} />
                  </form>
                 
                 <button>cart</button>
                 
               
                </div>
              </>
            );
          })}

          
        </div>
     
    </>
  );
};

export default Todo;
// defaultValue={title}
{/* <List/> */}