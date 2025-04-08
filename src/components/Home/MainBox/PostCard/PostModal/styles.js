import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
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
rowGap:'10px'
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
}


})


export default useStyles;