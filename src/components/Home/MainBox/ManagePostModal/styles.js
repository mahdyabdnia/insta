import { FontDownload } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
modal_root:{
    display:'none',
    flexDirection:'column',
    width:'100%',
    height:'100%',
    position:'fixed',
    inset:'0 0 0 0 ',
    backgroundColor:'rgb(0,0,0)',
    backgroundColor:'rgba(0,0,0,0.6)',
    justifyContent:'center',
    alignItems:'center',
    zIndex:'2222222',

},
modal:{

    backgroundColor:'white',
    width:'35%',
    height:'50%',
    border:'1px solid rgba(0,0,0,0.6)',
    borderRadius:'10px',
    display:'flex',
    flexDirection:'column',
    boxSizing:'border-box',
  

},
modal_content:{
    display:'grid',
    gridTemplateColumns:'auto',
    width:'100%',
    gridTemplateRows:'repeat(6,1fr)',
    height:'100%'
},
item:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    boxSizing:'border-box',
    justifyContent:'center',
    cursor:'pointer',
    color:'black',
    boxSizing:'border-box',borderBottom:'1px solid rgba(0,0,0,0.1)',
    '&:last-child':{
        borderBottom:'none'
    },
    '&:first-child':{
        color:'red !important',
        fontWeight:'bolder'
    }
}

})


export default useStyles;