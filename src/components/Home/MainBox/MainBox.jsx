import React from 'react'
import useStyles from './styles'
import PostCard from './PostCard/PostCard'
import MultiPostCard from '../MultiPostCard/MultiPostCard'
export default function MainBox() {
  const classes=useStyles()
  return (
    <div className={classes.main_root}>
      
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <MultiPostCard/>
    </div>
  )
}
