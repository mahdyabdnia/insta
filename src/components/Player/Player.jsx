import React,{useRef,useEffect, useState} from 'react'
import useStyles from './styles'
import { PauseCircle, PlayCircle } from 'react-feather'
import { MuteIcon, Pause, VolumeIcon } from '../Consts/Icons'
import classnames from 'classnames'

export default function MoviePlayer({src,active}) {
    const classes=useStyles()
    const vidRef=useRef(null)
    const playRef=useRef(null)
    const [playState, setPlayState] = useState(0)
    const [muteState, setMuteState] = useState(1) 
    const [type,setType] = useState('')
    const muteRef=useRef(null)
    const checkMediaType=(src)=> {
            // لیست پسوندهای تصاویر
            const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
            // لیست پسوندهای ویدیوها
            const videoExtensions = ['mp4', 'mov', 'avi', 'mkv', 'flv', 'wmv'];
        
            // حذف بخش کوئری از URL (اگر وجود داشته باشد)
            const base = src.split('?')[0];
            // استخراج پسوند فایل
            const parts = base.split('.');
            
            if (parts.length < 2) return 'unknown';
            
            const extension = parts.pop().toLowerCase();
        
            if (imageExtensions.includes(extension)) {
                return 'image';
            } else if (videoExtensions.includes(extension)) {
                return 'video';
            } else {
                return 'unknown';
            }
        }
    
     
        
    
        useEffect(() => {
           if(checkMediaType(src)==='image'){
            setType('image')
           }
           else if(checkMediaType(src)==='video'){
                setType('video')
           }
           else{
            setType('unknown');
           }
        
          return () => {
             
          }
        }, [ src])
        
    useEffect(() => {
       if(vidRef.current){
       if(vidRef.current.played===true){
    setPlayState(1)
       }
       }
    
      return () => {
        
      }
    }, [vidRef.current])
    
     useEffect(() => {
       if(!active && vidRef.current){
        vidRef.current.pause()
        vidRef.current.currentTime="0"
        setPlayState(0)
       }
     
       return () => {
        
       }
     }, [active])
     useEffect(() => {
      if (vidRef.current) {
        vidRef.current.pause();
        setPlayState(0)
        vidRef.current.currentTime = 0;
      }
    }, [src]);
    useEffect(() => {
      const playMovie = () => {
        if (vidRef.current) {
          if (vidRef.current.paused) {
            vidRef.current.play();
            setPlayState(1)
          }
           else if(vidRef.current.ended){
            setPlayState(0)
        } 
          
           else {
            vidRef.current.pause();
            setPlayState(0)
          }
        }
      };
    
      // اضافه کردن Event Listener به المان playRef
      if (playRef.current) {
        playRef.current.addEventListener('click', playMovie);
      }
    
      // Cleanup: حذف Event Listener هنگام آنمونت
      return () => {
        if (playRef.current) {
          playRef.current.removeEventListener('click', playMovie);
        }
      };
    }, [playRef.current]); // dependency array خالی = فقط یک بار اجرا شود


    useEffect(() => {
       if(playRef.current ){
        if(playRef.current.style.opacity==='0'){
            
           playRef.current.style.opacity='1'
        }
        else{
           playRef.current.style.opacity='0'
        }
       }
    
      return () => {
        
      }
    }, [playState])
    
    

    useEffect(() => {
      const muteSound=()=>{
        if(vidRef.current){
          if(vidRef.current.muted===true){
            vidRef.current.muted=false
            setMuteState(1)
          }
          else{
            vidRef.current.muted=true
            setMuteState(0)
          }
        }
        }
       if(muteRef.current){
         muteRef.current.addEventListener('click',muteSound)
       }
    
      return () => {
          if(muteRef.current){
           muteRef.current.removeEventListener('click',muteSound)
       }
      }
    }, [muteRef.current])
    
    
  return (
    <div className={classes.player_root}>
    {type==='video' &&
    <>
       <video   played={true} className={classes.video} ref={vidRef} >
       <source src={src || "/media/ac.mp4"} type="video/mp4"/>
        </video>
        <button className={classnames(classes.btn,classes.play_btn)} ref={playRef}>  
         {playState===0 && <PlayCircle/>} 

         {playState===1 && <PauseCircle/>}
          
          </button>
        <button className={classnames(classes.btn,classes.mute_btn)} ref={muteRef}>
          {muteState===0 &&   <MuteIcon/>}
        
          {muteState===1 &&   <VolumeIcon/> }
          
          </button> </> }

          {type ==='image' &&
          <img  src={src} className={classes.img}/>
           
          }
    </div>
  )
}
