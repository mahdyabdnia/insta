import React from 'react'
import useStyles from './styles'
import { Close } from '../Consts/Icons'
import classnames from 'classnames'
export default function StoryModal() {
    const classes=useStyles()
  return (
    <div className={classes.modal_root}>
        
        <span className={classes.modal_close_btn}>
            <Close/>
        </span>

        <div className={classes.modal_container}>
            <div className={classes.carousel_container}>
                <button className={classnames(classes.arrow_btn,classes.arrow_left)}></button>
                <button className={classnames(classes.arrow_btn,classes.arrow_right)}></button>
            </div>
        </div>
    </div>
  )
}
