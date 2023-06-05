import React from 'react';
import styles from './list.module.css'
import { useSelector} from 'react-redux';
const List = () => {
    const titleState = useSelector((state) => state.newState)
    const {title} = titleState;
  return (
    <div className={styles.wraper}>
        <div>
            <span style={{color: "white"}}>{title}</span>
        <input type='text' />
        <button>Add</button>
        </div> 
        
        

    </div>
  )
}

export default List