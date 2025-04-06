import React from 'react'
import useStyles from './styles'
import MoviePlayer from '../../../../MoviePlayer/MoviePlayer';
import { Divider } from '@mui/material';
import { LikeOff, MoreHorz } from '../../../../Consts/Icons';
import classnames from 'classnames'
export default function PostModal() {
  const classes=useStyles();
  return (
    <div className={classes.post_modal_root}>
    <div className={classes.post_body}>
       <MoviePlayer/>
    </div>
    <div className={classes.comment_body}>
      <div className={classes.info_body}>
      <div className={classes.info}>
        <div className={classes.profile_avatar}></div>
        <div className={classes.username}>@username</div>
      </div>
      <div className={classes.manage_post}>
        <MoreHorz/>
      </div>
      </div>
      <Divider orientation='horizontal'/>
      <div className={classes.comment_box}>
      <div className={classes.caption}></div>

      <div className={classes.comment}>
        <div className={classes.avatar_box}>
          <div className={classes.profile_avatar}></div>
        </div>
        <div className={classes.comment_box_body}> 
        <div className={classes.comment_info_box}>
        <span className={classes.user}>@username</span>
        <span className={classes.comment_text}>comment</span>
        </div>
        
        </div>
        <div className={classes.comment_like}>
          <button className={classes.like_btn}>
            <LikeOff/>
          </button>
        </div>
      </div>
      
      </div>
    </div>
    
    </div>
  )
}
