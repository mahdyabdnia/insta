import React,{useRef,useEffect} from 'react'
import useStyles from './styles'
import {Close} from './../Consts/Icons'
import classnames from 'classnames'
export default function Modal({children,open}){
    const classes=useStyles();
    const modalRef=useRef(null)
    const closeModal=()=>{
        if(modalRef.current){
              modalRef.current.style.display="none"
        }
    }
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

          useEffect(() => {
             if(modalRef.current){
            
              modalRef.current.style.display==='flex'}
            
          
            return () => {
            
            }
          }, [open])
          
    return(
        <div className={classnames(classes.modal_root)} ref={modalRef}>
        <button className={classes.close_btn} onClick={closeModal}>
            <Close/>
        </button>
            <div className={classes.modal_content}>

                {children}
            </div>
        </div>
        
    )
}