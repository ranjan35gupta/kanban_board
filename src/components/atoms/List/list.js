import React from 'react';
import styles from './list.module.css'
import { useSelector} from 'react-redux';
import {useState} from 'react'
import CreateIcon from '@mui/icons-material/Create';

const List = () => {
  const [data,setData] = useState([])
  const [item,setItem] = useState()
    const titleState = useSelector((state) => state.newState)
    const {title} = titleState;

    function handleSubmit(e){
      e.preventDefault();
       const dummyData = [...data,{task:item}]
       console.log(item,"hello")
       setData(dummyData)
       setItem("")

    }
    console.log(item)
  return (
    <div className={styles.wraper}>
        <div>
          <div>{data.map(ele=>{
            return(
              <div>{ele.task}
               <CreateIcon/></div>
            )
           })}</div>

           <form onSubmit={handleSubmit}>
            <div>
           <input type='text' value={item} onChange={(e)=>setItem(e.target.value)}  />
          
           </div>
           
           </form>
           <button onClick={handleSubmit}>add cart</button>
           
           
           </div> 
        
        

    </div>
  )
}

export default List