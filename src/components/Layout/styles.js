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
    width:'20%'
},
main:{
    width:'50%'
}
})


export default useStyles;