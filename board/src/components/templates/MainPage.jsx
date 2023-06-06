import React from 'react'
import Navbar from '../molecules/navbar/Navbar'
import styles from './mainpage.module.css'
import TodoList from '../molecules/todolist/TodoList'

const MainPage = () => {
  return (
    <div className={styles.mainpage_container}>

        <Navbar/>
        <TodoList/>
        
    </div>
  )
}

export default MainPage