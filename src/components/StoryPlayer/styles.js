import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
player_root:{
    display:'flex',
    flexDirection:'column',
    width:'100%',
    height:'100%',
    margin:'auto',
    boxSizing:'border-box',
    borderRadius:'5px',
    color:'white',
    alignItems:'center',
    justifyContent:'center',
    

},
media:{
    display:'flex',
    flexDirection:'column',
    objectFit:'cover',
    height:'100%',
    width:'100%',
    overflow:'hidden',
    objectPosition:'center center',
    borderRadius:'5px'
}
})

export default useStyles;