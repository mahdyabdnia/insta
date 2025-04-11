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
carousel_container:{
    backgroundColor:'black',
    borderRadius:'3px',
    boxSizing:'border-box',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    minHeight:'400px',
    position:'relative',
    overflow:'hidden'


},
carousel:{
transition:' transform 0.3s ease-in-out',
display:'flex'
},
carousel_item:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
boxSizing:'border-box',
width:'100%',
minWidth:'100%',
height:'100%'
},
carousel_dots:{
position:'absolute',
 bottom: '10px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: '5px',
},
carousel_dot:{
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.5)',
    border: 'none',
    cursor: 'pointer',
},
arrow_btn:{display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    cursor:'pointer',
    width:'25px',
    borderRadius:'50%',
    aspectRatio:'1/1',
    backgroundColor:'grey',
    position:'absolute',
    color:'white',
    border:'none',
    zIndex:'20000',},
   left_ar:{
       left:'10px'

    },
    right_ar:{
        right:'10px !important'
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