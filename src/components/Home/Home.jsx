import React from 'react'
import useStyles from './styles'
import StoryBox from './StoryBox/StoryBox';
import MainBox from './MainBox/MainBox';
export default function Home() {
  const classes=useStyles();
  return (
    <div className={classes.root}>
     <StoryBox/>
     <MainBox/>
    </div>
  )
}
