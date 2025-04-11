import React, { useEffect, useRef, useState } from 'react'
import useStyles from './styles'
import MoviePlayer from '../../../MoviePlayer/MoviePlayer';
import { Divider } from '@mui/material';
import { Comment, LikeOff, LikeOn, MoreHorz, Save } from '../../../Consts/Icons';
import classnames from 'classnames'
import { Smile } from 'react-feather';
import ManagePostModal from '../../../Home/MainBox/ManagePostModal/ManagePostModal';
export default function PostModal() {
  const classes=useStyles();
  const [text, settext] = useState(' افزودن نظر')
  const [saved,setSaved]=useState(false)
  const [liked,setLiked]=useState(false)
  const modalRef = useRef(null)
  const openMnModal=()=>{
  document.getElementsByClassName('mm')[0].style.display='flex';
  }
 
  return (
    <div className={classes.post_modal_root} ref={modalRef}>
      <ManagePostModal className='mm'/>
    <div className={classes.post_body}>
       <MoviePlayer/>
    </div>
    <div className={classes.comment_body}>
      <div className={classes.info_body}>
      <div className={classes.info}>
        <div className={classes.profile_avatar}></div>
        <div className={classes.username}>@username</div>
      </div>
      <div className={classes.manage_post} onClick={openMnModal}>
        <MoreHorz/>
      </div>
      </div>
      <Divider orientation='horizontal'/>

      <div className={classes.comment_items_body}>
      
      
      
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
      
      </div></div>
      <Divider orientation='horizontal'/>
      <div className={classes.bottom_box}>
      <div>
        <div className={classes.tools_box}>
         <div className={classes.tools_left}>
         <button className={classes.icon_btn} onClick={()=>{setLiked(!liked)} }>
        {liked===false && <LikeOff/> } {liked===true && <LikeOn className={classes.like}/>}
         </button>
         <button className={classes.icon_btn}>
         <Comment/>
         </button>
         </div>
         <div className={classes.tools_right}>
         <button className={classes.icon_btn} onClick={()=>{setSaved(!saved)}}>
         <Save saved={saved}/>
         </button>
         </div>
        </div>
        <div className={classes.day}>۲ روز پیش</div>
        </div>
      <div className={classes.comment_input_box}>
       <button className={classes.send_btn}><Smile/></button>
        <textarea name="" id="" className={classes.comment_input} placeholder='افزودن نظر' value={text} onChange={(e)=>{settext(e.target.value)}}>gfgf</textarea>
        <button className={classes.send_btn}>ارسال</button>
      </div>

      </div>
    </div>
    
    </div>
  )
}
