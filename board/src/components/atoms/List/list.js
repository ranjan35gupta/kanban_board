import React from "react";
import styles from "./list.module.css";
import CreateIcon from "@mui/icons-material/Create";
import ClearIcon from "@mui/icons-material/Clear";

import { useState } from "react";

const List = () => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState("");
  const [show, setShow] = useState(false);

  // useEffect(()=> {
  //   if(localStorage.getItem("listData")){
  //     const details = JSON.parse(localStorage.getItem("listdata"))
  //     setData(details)
  //   }
  // },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    const newtask = { id: new Date().getTime().toString(), task: item };
    const newData = [...data, newtask];
    localStorage.setItem("listData", JSON.stringify({ newData }));
    if (item.trim().length !== 0) {
      setData(newData);
    }
    setItem("");
  };
  return (
    <div className={styles.wraper}>
      {data.map((ele) => {
        return (
          <div className={styles.task_list}>
            {ele.task}

            <CreateIcon
              sx={{ position: "relative", right: "0.8rem", fontSize: "0.8rem" }}
            />
          </div>
        );
      })}
      <div>
        {show ? (
          <form onSubmit={handleSubmit}>
            <input
              className={styles.add_List}
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </form>
        ) : (
          <></>
        )}
      </div>
      <div>
        <button className={styles.card_btn} onClick={handleSubmit}>
          Add Card
        </button>
        <ClearIcon
          onClick={() => setShow(false)}
          sx={{
            position: "relative",
            left: "0.6rem",
            top: "0.5rem",
            color: "black",
            fontSize: "1.9rem",
          }}
        />
      </div>
    </div>
  );
};

export default List;
