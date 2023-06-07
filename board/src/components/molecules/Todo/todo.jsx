import React, { useState } from "react";

import styles from "./todo.module.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
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
    dispatch(addTodo({id:Math.random()*1000,title:<input className={styles.inputField2} defaultValue={title}/>,inputtag:<List/>}))

    setShowList(true);
    setIsClicked(true)
  }

  return (
    <div className={styles.container}  style={{ marginLeft: "20px" }}>
      {isClicked ? (
        <div >
          <button onClick={handleAddList} className={styles.add_list_btn}>
            Add List
          </button>
        </div>
      ) : (
        <div className={styles.title} >
          <input 
          placeholder="Enter your ToDo ..."
          className={styles.inputField}
            onChange={(e) => {
              dispatch(addTitle(e.target.value));
            }}
          />
          <button onClick={handleCard} className={styles.addbtn}>Add Card</button>
        </div>
      )}

      {showList ? (
        <div className={styles.todo_container_list}>
          {todo.map((item) => {
            return (
              <>
                <div >
                  <div>{item.title}
                 <MoreHorizIcon/></div>
                 {item.inputtag}
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Todo;