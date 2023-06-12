import React, { useState } from "react";
import uuid from 'react-uuid'

import styles from "./todo.module.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {BiPencil, BiSolidPencil, BiUser} from 'react-icons/bi'

import { useDispatch,useSelector } from "react-redux";
import { addTitle,addTodo,addBeforeCartTitle,addCartItems,pushCartContent } from "../../../Redux/Reduxslice/todoSlice";
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'


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

    
        <div >
          <DragDropContext onDragEnd={handleOnDragEnd}  >
            <Droppable droppableId={todo.map(ele=>ele.id)}>
            
              
              
              
              {(provided)=>(

             <div className={styles.todo_container_list}  {...provided.droppableProps} ref={provided.innerRef} >
          {todo.map((item,index) => {
            return (
              <Draggable key={item.id} draggableId={item.id} index={index} >
                {(provided)=>(
              <div  {...provided.draggableProps} {...provided.dragHandleProps}    ref={provided.innerRef}>
                <div >
                  <div>
                  <form onSubmit={(e)=>handleTitle(e,item.id)}>
                  <input type="text"   defaultValue={item.cartName} onChange={handleranjan} />
                 <MoreHorizIcon/>
                  </form>
                  </div>
                  <DragDropContext  onDragEnd={(result)=>handleOnDragEnd1(result,item.id,index)}    >
                    <Droppable  droppableId={item.cartItems.map(ele=>ele.listItemId)} >
                      {(provided)=>(
                  <div {...provided.draggableProps}   ref={provided.innerRef}       >
                  {item.cartItems.map((ele,index)=>{
                    return(
                      <Draggable key={ele.listItemId}  draggableId={ele.listItemId} index={index}  >
                        {(provided)=>(
                      <div  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}         >{ele.nameOfCardItem}   <BiPencil/> </div>
                      )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                  </div>
                  )}
                  </Droppable>
                  </DragDropContext>
                  <form onSubmit={(e)=>addCartList(e,item.id)} >
                  <input type="text" onChange={(e)=>setAddList(e.target.value)} />
                  </form>
                 
                 <button>cart</button>
                 
               
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
     
    </>
  );
};

export default Todo;
// defaultValue={title}
{/* <List/> */}