import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import { Close, Comment, LikeOff, SendIc, Save  } from '../Consts/Icons'
import { MoreHoriz } from '@mui/icons-material';
import Player from '../Player/Player'
import classnames from 'classnames'
import { Smile } from 'react-feather';
export default function PostModal({open}) {
    const classes=useStyles()
    const [opened, setOpen] = useState(open)
    useEffect(() => {
      setOpen(open)
      console.log(open)
    
      return () => {
         
      }
    }, [ open])
    
  return (
    <div className={classnames(classes.modal_root,opened?classes.active_modal:classes.disable_modal)}>
        <span className={classes.close_btn} onClick={()=>{setOpen(false)}}>
            <Close/>
        </span>
        <div className={classes.modal_content}>
          <div className={classes.modal_body}><Player src={'media/c.mp4'}/></div>  
            <div className={classes.modal_box_content}>
            <div className={classes.modal_head}>
            <div className={classes.header_card}>
                <div className={classes.left_head}>
                  <div className={classes.card_avatar}></div>
                  <div className={classes.card_post_info}>
                    <div className={classes.card_name}>username</div>
                    <div className={classes.card_info}>info</div>
                  </div>
                  <ul className={classes.op_list}>
                    <li className={classes.op_up_time}>3w</li>
                    <li className={classes.op_follow}>follow</li>
                  </ul>
                </div>
              <div className={classes.right_head}>
                <button className={classes.link_btn}>
                   <MoreHoriz/>
                </button>
              </div>
                </div>
                <hr className={classes.divider}/>
           </div>
                <div>sss</div>
            <div className={classes.modal_tools}>
            <div className={classes.modal_top_tools}>
            <div className={classes.left_tools}>
            <button className={classes.icon_btn}><LikeOff/></button>
            <button className={classes.icon_btn}><Comment/></button>
            <button className={classes.icon_btn}>
            <SendIc/>
            </button></div>
            <div className={classes.right_tools}>
            <button className={classes.icon_btn}>
            <Save saved={false}/>
            </button></div>
            </div>
            <div className={classes.modal_info}></div>
            </div>


            <div className={classes.comment_input_box}>
            <button className={classes.imogi_menu_btn}>
            <Smile/></button>
            <input type="text" className={classes.comment_input}/>
            </div>
            </div> 
            
        </div>
    </div>
  )
}
