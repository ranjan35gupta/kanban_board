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
        <h2>Made With 🙂</h2>
        <StarBorderIcon className={styles.borderIcons}/>
        <PeopleIcon className={styles.peopleIcone}/>
        {/* <select defaultValue="Board" className={styles.select}>
            
            <option value="Board">Board</option>
            </select> */}
            </div>
           
         <div className={styles.nav_second}>
         <RocketLaunchOutlinedIcon className={styles.Rocket}/>    
    <span className={styles.power}>Power-Ups</span>
    <ElectricBoltOutlinedIcon className={styles.electric}/>
            <span className={styles.Auto}>Automation</span>
            <FilterListIcon className={styles.Filter}/>
            <span className={styles.Filters}>Filter</span>
            <AccountCircleIcon className={styles.Account}/>
     <div>
          <PersonAddAltOutlinedIcon className={styles.personAdd}/>
           <span className={styles.span1}>Share</span>  
         <MoreHorizOutlinedIcon className={styles.moreHoriz}/>
            </div>
        
    </div>

         </div>
              
        
        

        
    
  )
}

export default Navbar