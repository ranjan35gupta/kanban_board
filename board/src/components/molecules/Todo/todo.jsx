import React, { useState } from "react";

import styles from "./todo.module.css";
import List from "../../atoms/List/list";
import AddIcon from '@mui/icons-material/Add';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { useDispatch, useSelector } from "react-redux";
import { addTitle, addTodo } from "../../../Redux/Reduxslice/todoSlice";
const Todo = () => {
  const dispatch = useDispatch();
  const values = useSelector((state) => state.newState);
  const { title, todo } = values;

  const [showList, setShowList] = useState(false);

  const [isClicked, setIsClicked] = useState(true);
  const [addBtnText,setAddBtnText] = useState(false);



  
  const handleAddList = () => {
    setIsClicked(false);
    setAddBtnText(true)
  };

  
  // useEffect(() => {
  //   const todoItem = JSON.parse(localStorage.getItem("boardData"))
  // })
  const handleCard = () => {
    dispatch(
      addTodo({
        id: Math.random() * 1000,
        title: <input style={{border: "none"}}
         
         Value={title}  />,
        inputTag: <List/>,
      })
    );

    setShowList(true);
    setIsClicked(true);
  };

  return (
    <div className={styles.container}>
      {isClicked ? (
        <div className={styles.add_list}>
          <button onClick={handleAddList}  className={styles.add_list_btn}>
           <AddIcon/> {addBtnText ? "Add another list" : "Add List"}
          </button>
        </div>
      ) : (
        <div className={styles.add_list_field} >
          <input  className={styles.text_field}
          placeholder="Enter a title..."
            onChange={(e) => {
              dispatch(addTitle(e.target.value));
            }}
          />
          <button className={styles.list_btn} onClick={handleCard}>Add List</button>
        </div>
      )}

      {showList ? (
        <>
          {todo.map((item) => {
            return (
              <div className={styles.wraperContainer}>
                <div className={styles.todoContainer}>
                  
                 <div className={styles.titles}>
                 {item.title}
                 <MoreHorizOutlinedIcon sx={{color: "black" , marginLeft: "0.4rem" , position: "relative", right: "1rem"}}/></div>
                 <div>
                {item.inputTag}
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Todo;
