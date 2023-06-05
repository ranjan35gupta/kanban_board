import React from 'react'
import styles from './navbar.module.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PeopleIcon from '@mui/icons-material/People';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
        <div className={styles.nav_first}>
            <h3>Home Task Management</h3>
            <StarBorderIcon/>
            <PeopleIcon/>
            <select defaultValue="Board">
                
                <option value="Board">Board</option>
                </select>
                </div>
               
             <div className={styles.nav_second}>
             <RocketLaunchOutlinedIcon/>    
        <span>Power-Ups</span>
        <ElectricBoltOutlinedIcon/>
                <span>Automation</span>
                <FilterListIcon/>
                <span>Filter</span>
                <AccountCircleIcon/>
         <div>
              <PersonAddAltOutlinedIcon/>
                 Share
             <MoreHorizOutlinedIcon/>
                </div>
            
        </div>

             </div>
              
        
        

        
    
  )
}

export default Navbar