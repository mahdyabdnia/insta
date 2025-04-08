import React from 'react'
import useStyles from './styles'
import PostCard from './PostCard/PostCard'
export default function MainBox() {
  const classes=useStyles()
  return (
    <div className={classes.main_root}>
      
      <PostCard/>
    </div>
  )
}
