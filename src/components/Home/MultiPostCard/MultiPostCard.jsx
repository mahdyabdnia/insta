import React,{useState,useEffect} from 'react'
import useStyles from './styles'
import {  LinkOff, MoreHoriz, } from '@mui/icons-material';
import { Share,MessageCircle } from 'react-feather';
import { LikeOff, Save ,LikeOn} from '../../Consts/Icons';

 import Modal from '../../Modal/Modal'
 import MoviePlayer from '../../MoviePlayer/MoviePlayer';
import PostModal from './PostModal/PostModal'; 
import { LeftArrow, RightArrow } from '../../Consts/Icons';
import classnames from 'classnames'
 
export default function MultiPostCard({src}) {
    const classes=useStyles();
    const [like, setLike] = useState(true)
    const [saved,setSaved]=useState(false)
    const openModal=()=>{
        document.getElementsByClassName('modal')[0].style.display="flex"
    }

  //  useEffect(() => {
 /// const interval = setInterval(nextSlide, 5000);
 // return () => clearInterval(interval);
//}, []);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 5; // یا از props بگیرید
    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
        console.log(currentSlide)
      };
    const movies=[{src:'/media/d.mp4',key:0},{src:'/media/c.mp4',key:1} , {src:'/media/d.mp4',key:2}, {src:'/media/e.mp4',key:3}, {src:'/media/d.mp4',key:4},];
      const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
        console.log(currentSlide)
      };
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
        
        <div className={classes.carousel_container}> 
            <button className={classnames(classes.arrow_btn,classes.left_ar)} onClick={prevSlide}><LeftArrow/></button>
            <button className={classnames(classes.arrow_btn,classes.right_ar)} onClick={nextSlide}><RightArrow/></button>
             

             <div className={classes.carousel}>
    { movies.map((item, index) => (
    
      <div 
       
        className={classnames(
          classes.carousel_item,item.key=== currentSlide ? classes.active_carousel : classes.hidden
          
        )}
      >
      
        <MoviePlayer src={item.src} active={index === currentSlide}
              ref={(el) => (videoRefs.current[index] = el)}/>
      </div> 
    ))}
  </div>

  {/* نقاط راهنما */}
  <div className={classes.carousel_dots}>
    {[...Array(totalSlides)].map((_, index) => (
      <span 
        key={index}
        className={classnames(
          classes.carousel_dot,
          index === currentSlide && classes.active
        )}
        onClick={() => setCurrentSlide(index)}
      />
    ))}
  </div>
             
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
