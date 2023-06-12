import React from 'react'
import Navbar from '../molecules/navbar/Navbar'
import styles from './mainpage.module.css'
import TodoList from '../molecules/Todo/todo'

const MainPage = () => {
  return (
    <div className={styles.mainpage_container}>
 {/* <h2 style={{color:"white"}}>this is the change</h2> */}
        <Navbar/>
       
        
    </div>
  )
}

export default MainPage