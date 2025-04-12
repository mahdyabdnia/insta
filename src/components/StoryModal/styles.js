import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
modal_root:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'100%',
    inset:' 0 0 0 0 ',
    position:'fixed',
    backgroundColor:'rgba(0,0,0)',
    zIndex:'222222',
    scrollBehavior:''

},
modal_close_btn:{
    display:'flex',
    flexDirection:'row',
    border:'none',
    backgroundColor:'transparent',
position:'absolute',
top:'20px',
right:'20px',
color:'white',
cursor:'pointer'
},
modal_container:{
    margin:'auto',
    display:'flex',
    width:'100%',
    height:'auto',
    boxSizing:'border-box',

},
carousel_container:{
    display:'flex',
    position:'fixed',
    height:'70%',
    width:'30%',
    backgroundColor:'white',
    top:'50%',
    left:'50%',
    transform: 'translate(-50%, -50%)'

},
arrow_btn:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    aspectRatio:'1/1'
}
})


export default useStyles;