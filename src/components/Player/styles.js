import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
player_root:{
    display:'flex',
    flexDirection:'column',
    boxSizing:'border-box',
    position:'relative',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
    minWidth:'100%'
},
btn:{
    display:'flex',
    flexDirection:'row',
    alignItmes:'center',
    justifyContent:'center',
    backgroundColor:'black',
    borderRadius:'50%',
    border:'inherit',
    '& svg':{
    color:'white'
    }
},
play_btn:{
zIndex:'10',
transform:'translate(50%,50%)',
position:'absolute'

},
mute_btn:{
position:'absolute',
right:'10px',
bottom:'10px'
},
video:{
width:'100%',
objectFit:'contain',
height:'auto',
margin:'auto'
},
img:{
objectFit:'contain',
width:'100%'

}
})


export default useStyles;