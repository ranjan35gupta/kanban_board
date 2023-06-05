import React, { useState } from "react";

import styles from "./todo.module.css";
import List from "../../atoms/List/list";
import { useDispatch } from "react-redux";
import { addTitle } from "./../../../Redux/Todo/todoSlice";
const Todo = () => {
  const dispatch = useDispatch();
  const [showList, setShowList] = useState(false);
  const [list, setList] = useState([]);
  const [isClicked, setIsClicked] = useState(true);

  const handleAddList = () => {
    setIsClicked(false);
    
    const listData = [...list];
    listData.push(<List />);
    setList(listData);
    console.log(listData);
  };


  const handleCard = () => {
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
        <div>
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
          {list.map((item) => {
            return (
              <>
                <div>{item}</div>
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
