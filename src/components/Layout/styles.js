import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
root:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
   
    boxSizing:'border-box',
    backgroundColor:'white',
    padding:'1vh 1vmax'
},
left:{
    width:'30%'
},
right:{
    width:'20%',
    position:'fixed',
    right:'0',

},
main:{
    width:'50%',
    marginRight:'20%'
}
})


export default useStyles;