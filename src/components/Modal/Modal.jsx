import React,{useRef} from 'react'
import useStyles from './styles'
import {Close} from './../Consts/Icons'
import classnames from 'classnames'
export default function Modal({children,className}){
    const classes=useStyles();
    const modalRef=useRef(null)
    const closeModal=()=>{
        if(modalRef.current){
              modalRef.current.style.display="none"
        }
    }
    return(
        <div className={classnames(classes.modal_root,className)} ref={modalRef}>
        <button className={classes.close_btn} onClick={closeModal}>
            <Close/>
        </button>
            <div className={classes.modal_content}>

                {children}
            </div>
        </div>
        
    )
}