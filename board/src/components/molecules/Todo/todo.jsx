import React, { useState } from "react";
import uuid from 'react-uuid'
import {RxCross2} from 'react-icons/rx';
import { Dialog,DialogContent } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import styles from "./todo.module.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {BiPencil, BiSolidPencil, BiUser} from 'react-icons/bi'

import { useDispatch,useSelector } from "react-redux";
import { addTitle,addTodo,addBeforeCartTitle,addCartItems,pushCartContent } from "../../../Redux/Reduxslice/todoSlice";
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'


const Todo = () => {
  const [open,setOpen] = useState(false)
  const [showDialog,setShowDialog] =  useState(false)
  // useEffect(()=>{
 
  // },[title])
  
  
  const dispatch = useDispatch();
  const values = useSelector(state=>state.newState)
  const {title,todo,beforeCartTitle} = values
  const [input1,setInput1]=useState([{in:<input/>}])
  const [showList, setShowList] = useState(false);
  const [addlist,setAddList]=useState('')
  const [titleName1,setTitleName1]=useState('')
  const [characters,setCharacters]=useState(todo)
  
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

function handleOnDragEnd(result){
  console.log(result,"htis is result")
  const items = Array.from(todo)
  const [reorderedItem]=items.splice(result.source.index,1)
  items.splice(result.destination.index,0,reorderedItem)
  dispatch(addTodo(items))
 

}
function handleOnDragEnd1(result,id,index){
 
  
  console.log(result,"showing result")
  console.log(todo[index],"mine items")
  // console.log(items,"updated one")
  
    const items = Array.from(todo[index].cartItems)
    // const items1 = Array.from(todo[index+1].cartItems)
  
  const [reorderedItem]= items.splice(result.source.index,1)
  
  items.splice(result.destination.index,0,reorderedItem)
 
    dispatch(pushCartContent({item:items,id:id}))
}


function handleClick() {
  setOpen(true)
  setShowDialog(!showDialog)
}
const handleDelete = (index) => {
  const newList  = [...todo];
  newList.splice(index,1);
  dispatch(addTodo(newList))
  setOpen(false)
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
        <div className={styles.add_list_field} >
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

    
        <div className={styles.container1} >
          <DragDropContext onDragEnd={handleOnDragEnd}  >
            <Droppable droppableId={todo.map(ele=>ele.id)}>
              {(provided)=>(

             <div className={styles.todo_container_list}  {...provided.droppableProps} ref={provided.innerRef} >
          {todo.map((item,index) => {
            return (
              <Draggable key={item.id} draggableId={item.id} index={index} >
                {(provided)=>(
              <div  {...provided.draggableProps} {...provided.dragHandleProps}  className={styles.wraperContainer}  ref={provided.innerRef}>
                <div className={styles.todoContainer}>
                  <div className={styles.titles}>
                  <form className={styles.forms} onSubmit={(e)=>handleTitle(e,item.id)}>
                    <div className={styles.horizontalIcons}>
                  <input type="text" className={styles.input1}   defaultValue={item.cartName} onChange={handleranjan} />
                 <MoreHorizIcon  onClick={handleClick} />
               <div>{showDialog ?  <Dialog 
                
                hideBackdrop open={open} onClose= {() =>  setOpen(false)}>
                  <DialogContent >
                  <DeleteOutlineIcon onClick={() => handleDelete(index)}/>
                  </DialogContent>
                 </Dialog> : <>
                 </>}</div>
                 </div>
                  </form>
                  </div>
                  <DragDropContext  onDragEnd={(result)=>handleOnDragEnd1(result,item.id,index)}    >
                    <Droppable  droppableId={item.cartItems.map(ele=>ele.listItemId)} >
                      {(provided)=>(
                  <div {...provided.draggableProps}   ref={provided.innerRef}    className={styles.cartitem}   >
                  {item.cartItems.map((ele,index)=>{
                    return(
                      <Draggable key={ele.listItemId}  draggableId={ele.listItemId} index={index}  >
                        {(provided)=>(
                          <>
                      <div className={styles.element} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>{ele.nameOfCardItem}  </div>
                      <BiPencil className={styles.pencil}/>
                      </>
                      )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                  </div>
                  )}
                  </Droppable>
                  </DragDropContext>
                  <form onSubmit={(e)=>addCartList(e,item.id)} className={styles.form2} >
                  <input className={styles.input2} type="text" onChange={(e)=>setAddList(e.target.value)} />
                  </form>
                 
                 <button className={styles.addbtn} onClick={(e)=>addCartList(e,item.id)}>cart</button>
                 <div className={styles.cross1}>
          <RxCross2 />
           </div> 
                 
               
                </div>
              </div>
              )}
              </Draggable>
            )
            
          })}
          {provided.placeholder}
          </div> 
          )

              }
           
          </Droppable>
          </DragDropContext>

          
        </div>
     
    </div>
  );
};

export default Todo;
// defaultValue={title}
{/* <List/> */}