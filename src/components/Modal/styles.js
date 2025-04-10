import {makeStyles} from '@mui/styles'
const useStyles=makeStyles({
modal_root:{
    display:'none',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'100%',
    position:'fixed',
    top:'0',
    left:'0',
    right:'0',
    bottom:'0',
    backgroundColor:'rgb(0,0,0)',
    backgroundColor:'rgba(0,0,0,0.5)',
    zIndex:'2000',
    boxSizing:'border-box',
    overflow:'hidden'

},
modal_content:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    borderRadius:'5px',
    minWidth:'60%',
    maxWidth:'80%',
    width:'auto',
    height:'auto',
    minHeight:'85%',
    position:'relative',
    boxSizing:'border-box'
},
close_btn:{
    display:'flex',
    flexDirection:'row',
    border:'none',
     backgroundColor:'transparent',
    position:'absolute',
    top:'10px',
    right:'10px',
    cursor:'pointer',
    zIndex:'22222',
    
    '& svg':{
      color:'white'
    }
}
})


export default useStyles;