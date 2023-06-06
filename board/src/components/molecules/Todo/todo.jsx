import React, { useState } from "react";

import styles from "./todo.module.css";
import List from "../../atoms/List/list";
import { useDispatch,useSelector } from "react-redux";
import { addTitle,addTodo } from "../../../Redux/Reduxslice/todoSlice";
const Todo = () => {
  const dispatch = useDispatch();
  const values = useSelector(state=>state.newState)
  const {title,todo} = values

  const [showList, setShowList] = useState(false);
  
  const [isClicked, setIsClicked] = useState(true);

  const handleAddList = () => {
    setIsClicked(false);
    
    
  };


  const handleCard = () => {
    dispatch(addTodo({id:Math.random()*1000,title:<input  defaultValue={title}   />,inputtag:<input/>}))

    setShowList(true);
    setIsClicked(true)
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
              dispatch(addTitle(e.target.value));
            }}
          />
          <button onClick={handleCard}>Add Card</button>
        </div>
      )}

      {showList ? (
        <>
          {todo.map((item) => {
            return (
              <>
                <div>{item.title}
                {item.inputtag}
                <button>add cart</button></div>
              </>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Todo;