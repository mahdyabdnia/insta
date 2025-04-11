import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
'@ global':{
scrollbarColor:'white !important    ',
scrollbarWidth:'1px !important',

},

post_modal_root:{
    display:'grid',
    gridTemplateColumns:'40% 60%',
    boxSizing:'border-box',
    width:'100%',
    height:'100%',
    padding:'0px',
    borderRadius:'5px'



},
post_body:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'black',
    height:'100%',
    width:'auto',
    borderRadius:'5px'

},
comment_body:{
display:'flex',
flexDirection:'column',
boxSizing:'border-box',
padding:'1vh 1vmax',
backgroundColor:'white',
rowGap:'10px',
position:' relative'
},
info_body:{
display:'flex',
flexDirection:'row'
,
alignItems:'center',
justifyContent:'space-between',
boxSizing:'border-box',


},
info:{
display:'flex',
flexDirection:'row',
alignItems: 'center',
columnGap:'10px',
boxSizing:'border-box',
padding:'0.5vh 0.5vmax',
justifyContent:'flex-start'


},
profile_avatar:{



display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
boxSizing:'border-box',
aspectRatio:'1/1',
borderRadius:'50%',
width:'35px',
border:'1px solid rgba(0,0,0,0.5)',
},
username:{
textAlign:'left',
fontSize:'16px',
fontWeight:'bolder',
color:'rgba(0,0,0,0.6)'
},
manage_post:{
cursor:'pointer'

},
comment_box:{
display:'flex',
flexDirection:'column',
rowGap:'5px',
boxSizing:'border-box',



},
comment:{
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginTop:'10px',
    boxSizing:'border-box',
    padding:'1vh 1vmax',
    columnGap:'20px',
    alignItems:'flex-start'
    
},
avatar_box:{
width:'10%',

},
comment_like:{

width:'10%',

},
like_btn:{
display:'flex',
backgroundColor:'transparent',
border:'none',
color:'rgba(0,0,0,0.6)',
'& svg':{
fontSize:'14px'
}
},
comment_box_body:{
display:'flex',
flexDirection: 'column',
rowGap:'10px' ,
width:'100%'

},
comment_items_body:{
display:'flex',
flexDirection:'column',
overflow:'scroll',
rowGap:'5px',
scrollbarWidth:'1px !important  ',
scrollbarColor:'white !important'

},

comment_info_box:{
display:'flex',
flexDirection:'row',
 alignContent:'stretch',
 width:'100%',
 justifyContent:'flex-start',
 columnGap:'10px'

},
user:{
fontWeight:'bolder'},

comment_text:{
color:'rgba(0,0,0,0.5)',
fontSize:'13px'
},


bottom_box:{
display:' flex',
flexDirection:'column',
position:'absolute',
zIndex:'1000',
bottom:'0',
right:'0',
left:'0',
width:'100%',
backgroundColor:'white'
},

tools_box:{
display:'flex',
flexDirection:'row',
justifyContent:'space-between',
boxSizing:'border-box',
width:'100%',
padding:'1vmax 1vmax',
borderTop:'1px solid rgba(0,0,0,0.5)'

},
like:{
color:'red !important',
'& svg':{
color:'red !important'
}
},

day:{ boxSizing:'border',
margin:'1vmax 1vmax',
color:'rgba(0,0,0,0.6)',
textAlign:'right',
display:'flex',
flexDirection:'row',
direction:'rtl'
},
tools_left:{
display:'flex',
flexDirection : 'row',
alignItems:'center',
justifyContent:'left',
columnGap:'10px',
},
tools_right:{
display:'flex',
flexDirection:' row',
alignItems:'center',
justifyContent:'right',
rowGap:'10px'
},
icon_btn:{
color:'rgba(0,0,0,0.7)',
border:'none',
backgroundColor:'transparent',
boxSizing:'border-box',
'& svg':{
color:'rgba(0,0,0,0.6)',
fontSize:'22px',
cursor:'pointer'
}
},


comment_input_box:{
display: 'flex',
flexDirection:'row',

height:'50px',
width:'100%',
boxSizing:'border-box',
backgroundColor:'white',
borderTop:'1px solid rgba(0,0,0,0.4)',
padding:'1vmax 0.5vmax'

},
comment_input:{
resize:'none',
width:'100%',
height:'100%',
boxSizing:'border-box',
border:'none',
outline: 'none ',
padding:'1vmax 1vmax',


'&:focus':{
outline:'none',
border:'none'
}

},
send_btn:{
display:'flex',
flexDirection : 'row',
alignItems:'center',
justifyContent:'center',
border:' none' ,
backgroundColor:'transparent',
color:'blueviolet',
cursor:'pointer'
}


})


export default useStyles;