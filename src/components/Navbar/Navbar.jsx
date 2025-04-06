import React from 'react'
import useStyles from './styles'
import { Add, AddBoxOutIc, Explore, HomeIc, MessageIc, MessageOutIc, ReelsOut, Search } from '../Consts/Icons';
export default function Navbar() {
    const classes=useStyles();
  return (
    <div className={classes.nav_root}>
        <div className={classes.header_box}>
            اینستاگرام فارسی
        </div>
        <div className={classes.menu_box}>
            <div className={classes.menu_link}>
                <span>
                    <HomeIc/>
                </span>
     
     <span> خانه</span>       </div>


      <div className={classes.menu_link}>
                <span>
                   <Search/>
                </span>
     
     <span> جستجو</span>       </div>



      <div className={classes.menu_link}>
                <span>
                <Explore/>
                </span>
     
     <span> کاوش</span>       </div>



      <div className={classes.menu_link}>
                <span>
                <AddBoxOutIc/>
                </span>
     
     <span> ایجاد</span>       </div>

      <div className={classes.menu_link}>
                <span>
                <ReelsOut/>
                </span>
     
     <span> کلیپ</span>       </div>


      <div className={classes.menu_link}>
                <span>
                <MessageOutIc/>
                </span>
     
     <span> پیام‌ها</span>       </div>
        </div>
    </div>
  )
}
