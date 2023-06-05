import React from 'react'
import Navbar from '../molecules/navbar/Navbar'
import styles from './mainpage.module.css'

const MainPage = () => {
  return (
    <div className={styles.mainpage_container}>

        <Navbar/>
    </div>
  )
}

export default MainPage