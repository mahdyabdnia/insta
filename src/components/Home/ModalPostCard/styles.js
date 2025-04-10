import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
root:{
    display:'flex',
    flexDirection:'column',
    boxSizing:'border-box',
    padding:'1vh 2vmax',
    rowGap:'20px'

},
info_ctr_box:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    boxSizing:'border-box',
    alignItems:'center'

},
info_box:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'flex-start',
boxSizing:'border-box',
columnGap:'20px'
},
ctr_box:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end'
},
avatar:{
    display:'flex',
    flexDirection:'row',
    aspectRatio:'1/1',
    width:'30px',
    borderRadius:'50%',
    border:'1px solid red',

},
user_info:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    textAlign:'left',
    fontSize:'18px',
    fontWeight:'bolder',
    color:'rgba(0,0,0,0.7)'
},
post_body:{
    backgroundColor:'black',
    borderRadius:'3px',
    boxSizing:'border-box',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    minHeight:'400px',

},
buttons:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent: 'space-between'


},
left:{
display:'flex',
flexDirection:'row',
alignItems:'center',
columnGap:'10px'
},
btn:{
display:'flex',
backgroundColor:'inherit',
border:'none',
},
like:{
color:'red !important',
'& path':{
color:'red !important'
}
}})

export default useStyles;