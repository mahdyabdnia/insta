import React, { useState } from 'react'

import useStyles from './styles'
import { MoreHoriz } from '@mui/icons-material';
import Player from '../Player/Player'
import { LikeOff, Save,LikeOn } from '../Consts/Icons';
import { MessageCircle, Send } from 'react-feather';
import PostModal from '../PostModal/PostModal';
export default function PostCard({src}) {
    const classes=useStyles();
    const [saved, setSaved] = useState(false)   
    const [liked,setLiked]=useState(false)
    const [open,setOpen]=useState(false)
  return (
    <div className={classes.card_root}>
      <PostModal open={open}/>
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

    <div className={classes.body_card}>
    <Player src={src}/>
    </div>

    <div className={classes.tools_card}>
      <div className={classes.left_card}>
        <button className={classes.icoon_btn} onClick={()=>{setLiked(!liked)}}>
        {liked===false && <LikeOff/>}   {liked===true && <LikeOn className={classes.like}/>}
        </button>
        <button className={classes.icoon_btn} onClick={()=>{setOpen(!open)} }>
        <MessageCircle/>
        </button>
        <button className={classes.icoon_btn}>
          <Send/>
        </button>
      </div>
      <div className={classes.right_card}>
      <button className={classes.icoon_btn} onClick={()=>{setSaved(!saved)}}>
      <Save saved={saved}/>
      </button>
      </div>
    </div>
    <hr className={classes.divider}/>
    
    </div>
  )
}
