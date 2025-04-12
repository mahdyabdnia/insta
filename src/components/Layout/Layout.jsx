import React from 'react'
import {Outlet} from 'react-router-dom'
import useStyles from './styles'
import Navbar from '../Navbar/Navbar'
import StoryModal from '../StoryModal/StoryModal'
export default function Layout() {
const classes=useStyles()
  return (
    <div className={classes.root}>
    <div className={classes.left}>
       <StoryModal/>
    </div>
    
   <div className={classes.main}>
    <Outlet/>
    
    </div>  

   <div className={classes.right}>

    <Navbar/>
   </div>
    </div>
  )
}
