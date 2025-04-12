import React from 'react'
import useStyles from './styles'
import PostCard from './PostCard/PostCard'
import MultiPostCard from '../MultiPostCard/MultiPostCard'
export default function MainBox() {
  const classes=useStyles()
  return (
    <div className={classes.main_root}>
      
      <PostCard src= "/media/c.mp4"/>
      <PostCard/>
      <PostCard/>
      <MultiPostCard/>
    </div>
  )
}
