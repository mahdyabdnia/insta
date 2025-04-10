import React, { useEffect, useRef } from 'react'
import useStyles from './styles'
import classnames from 'classnames'
export default function ManagePostModal({className}) {
    const classes=useStyles();
    const modalRef = useRef(null)
    
    

    useEffect(() => {
        const closeModal=()=>{
    if(modalRef.current){
      modalRef.current.style.display="none"
    }
    }
      if(modalRef.current
      ){
           modalRef.current.addEventListener('click', (e) => {
            if (e.target === e.currentTarget) { // فقط اگر روی خود بکدراپ کلیک شده
              closeModal();
            }
          })
      }
    
      return () => {
          if(modalRef.current){
           modalRef.current.removeEventListener('click', (e) => {
            if (e.target === e.currentTarget) { // فقط اگر روی خود بکدراپ کلیک شده
              closeModal();
            }
          })
      }
      }
    }, [ ])
    
  return (
    <div className={classnames(classes.modal_root,className)} ref={modalRef}>
        <div className={classes.modal}  >
          <div className={classes.modal_content}>

          <div className={classes.item}>گزارش پست</div>
          <div className={classes.item}>رفتن به پست</div>
          <div className={classes.item}>ارسال برای...</div>

          <div className={classes.item}>کپی لینک</div>
          <div className={classes.item}>درباره اکانت</div>
          <div className={classes.item}>انصراف</div>
          </div>

        </div>
    </div>
  )
}
