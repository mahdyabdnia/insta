import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({

    box_root:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        boxSizing:'border-box',
        overflowX:'hidden',
        columnGap:'10px'
        
    },
    story_item:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'50%',
        aspectRatio:'1/1',
        border:'1px solid rgba(0,0,0,0.4)',
        width:'50px'
    }
})

export default useStyles;