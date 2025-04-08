import React from 'react'
import {Outlet} from 'react-router-dom'
import useStyles from './styles'
import Navbar from '../Navbar/Navbar'
export default function Layout() {
const classes=useStyles()
  return (
    <div className={classes.root}>
    <div className={classes.left}>
        
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
