import React from 'react'
import useStyles from './styles'
import PostCard from '../PostCard/PostCard'
export default function Home() {
  const classes=useStyles();
  return (
    <div className={classes.root}>
     <PostCard src={'images/unnamed.jpg'}/>
      <PostCard src={'media/ac.mp4'}/>
 
    </div>
  )
}
