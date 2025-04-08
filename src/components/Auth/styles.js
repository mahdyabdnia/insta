import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
root_auth:{
  display:'flex',
  flexDirection:'column',
  width:'100%',
  height:'100%',
  inset:'0 0 0 0',
  boxSizing:'border-box',
  overflow:'hidden',
  backgroundColor:'white',
  position:'absolute',
  zIndex :' 1',

},
main_box_rg:{
    display:'none',
    flexDirection:'column',
    borderRadius:'5px',
    border:'1px solid rgba(0,0,0,0.5)',
    margin:'auto',
    alignItems:'center',
    justifyContent:'center',
    boxSizing:'border-box',
    padding:'1.5vmax 1vmax',
    boxShadow:'0px 0px 5px 1px rgba(0,0,0,0.5)',
    minWidth:'50%',
    minHeight:'50%',
    width:'auto',
    height:'auto',
    rowGap:'10px'

},
main_box_lg:{
    display:'flex',
    flexDirection:'column',
    borderRadius:'5px',
    border:'1px solid rgba(0,0,0,0.5)',
    margin:'auto',
    alignItems:'center',
    justifyContent:'center',
    boxSizing:'border-box',
    padding:'1.5vmax 1vmax',
    boxShadow:'0px 0px 5px 1px rgba(0,0,0,0.5)',
    minWidth:'50%',
    minHeight:'50%',
    width:'auto',
    height:'auto',
    rowGap:'10px'

},
change_btn:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    border:'none',
    color:'blue',
    backgroundColor:'transparent',
    fontSize:'18px',
    cursor:'pointer'
},
label_form:{
    textAlign:'right',
    fontSize:'17px',
    color:'rgba(0,0,0,0.6)',
},
form_box:{
    display:'flex',
    flexDirection:'column',
    width:'100%',
    justifyContent:'flex-start',
    boxSizing:'border-box',
    rowGap:'10px'
},
input_box:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'right',
    width:'100%',
    boxSizing:'border-box',
    padding:'1vmax 1vmax',
    borderRadius:'5px',
    border:'1px solid rgba(0,0,0,0.4)',
    boxShadow:'0px 0px 3px 1px rbg(0,0,0,0.4)'

},
input_tag:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    border:'none',
    outline:'none',
    fontSize:'15px',
    width:'100%',
    boxSizing:'border-box',
    color:'rgba(0,0,0,0.7)',
    '&:focus':{
        outline:'none',
        border : 'none'
    }


},

button:{
    display:'flex',
    flexDirection: ' row',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius:' 5px ', 
    color:'white',
    fontSize:'15px',
    border:'none',
    backgroundColor:'greenyellow',
    boxShadow:'0px 0px 4px 1px greenyellow',
    boxSizing:'border-box',
    padding:'1vmax 1vmax',
    width:'50%',
    margin:'auto',
    fontWeight:'bolder'
}
})



export default useStyles;