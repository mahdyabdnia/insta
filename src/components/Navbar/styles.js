import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
nav_root:{
    display:'flex',
    flexDirection:'column',
    height:'100vh',
    boxSizing:'border-box',
    padding:'1vmax 1vmax',
 
     
    borderLeft:'1px groove rgba(0,0,0,0.5)'
},
header_box:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    fontSize:'20px',
    fontWeight:'bolder',
    color:'black',
   
    textAlign:'center'
},
menu_box:{
    display:'flex',
    flexDirection:'column',
    rowGap:'10px',
    alignItems:'flex-end',
    width:'100%',
    marginTop:'30px'
},
menu_link:{
    display:'flex',
    flexDirection:'row-reverse',
    alignItems:'center',
    justifyContent:'flex-start',
    columnGap:'20px',
    color:'black',
    boxSizing:'border-box',
    padding:'1vh 1vmax',
    direction:'ltr',
    fontSize:'22px',
    width:'100%',
    '& span':{
        '& svg':{
            fontSize:'32px'
        }
    }

}
})

export default useStyles;