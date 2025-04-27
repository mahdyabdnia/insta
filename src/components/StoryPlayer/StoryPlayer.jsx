import React, { useEffect, useRef, useState } from 'react'
import useStyles from './styles'
export default function StoryPlayer({src,isPlaying}) {
    useEffect(() => {
        if (!vidRef.current) return;
        
        if (isPlaying) {
          vidRef.current.play();
        } else {
          vidRef.current.pause();
        }
      }, [isPlaying]);
    
    const classes=useStyles()
    const [type, setType] = useState('')
    const vidRef = useRef(null)
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
    
  return (
    <div className={classes.player_root}>
        {type==='image' &&
              <img src={src} alt="" className={classes.media}/>


        
        }

        {type==='video' &&
             <video className={classes.media}  ref={vidRef}>
             <source  src={src}/>
             </video>


        
        }
    </div>
  )
}
