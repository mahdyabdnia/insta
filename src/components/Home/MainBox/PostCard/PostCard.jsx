import React,{useState} from 'react'
import useStyles from './styles'
import {  LinkOff, MoreHoriz, } from '@mui/icons-material';
import { Share,MessageCircle } from 'react-feather';
import { LikeOff, Save ,LikeOn} from '../../../Consts/Icons';
import classnames from 'classnames'
  import Modal from '../../../Modal/Modal'
  import MoviePlayer from '../../../MoviePlayer/MoviePlayer';
import PostModal from './PostModal/PostModal';
 
export default function PostCard() {
    const classes=useStyles();
    const [like, setLike] = useState(true)
    const [saved,setSaved]=useState(false)
    const openModal=()=>{
        document.getElementsByClassName('modal')[0].style.display="flex"
    }
     
  return (
    <div className={classnames(classes.root,)}>
    <Modal className='modal'>
     <PostModal/>
     </Modal>
     
        <div className={classes.info_ctr_box}>
            <div className={classes.info_box}>
                <div className={classes.avatar}></div>
                <div className={classes.user_info}>@user</div>
            </div>
            <div className={classes.ctr_box}>
                <MoreHoriz/>
            </div>
        </div>

        <div className={classes.post_body}>
            <MoviePlayer/>
        </div>
        <div className={classes.buttons}> 
            <div className={classes.left}>
                <button className={classnames(classes.btn)} onClick={()=>{setLike(!like)}}>{like===true && <LikeOff />}{like===false && <LikeOn className={classes.like} />}
                </button>
                <button className={classnames(classes.btn)} onClick={openModal}><MessageCircle/></button>
                <button className={classnames(classes.btn)}><Share/></button>
            </div>
            <div className={classes.right}>
            <button className={classnames(classes.btn)} onClick={()=>{setSaved(!saved)}}>   <Save saved={saved}/></button>
            </div>
        </div>
    </div>
  )
}
