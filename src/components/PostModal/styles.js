import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
modal_root:{
    display:'none',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'100%',
    position:'fixed',
    inset:' 0 0 0 0',
    backgroundColor:'rgb(0,0,0)',
    backgroundColor:'rgba(0,0,0,0.9)',
    zIndex:'20',
    boxSizing:'border-box',
    overflow:'hidden',


},
active_modal:{
display:'flex !important'
},
disable_modal:{
display:'none !important'
},

close_btn:{
    border:'none',
    color:'rgba(0,0,0,0.3)',
    position:'absolute',
    top:'20px',
    left:'20px',
    backgroundColor:'transparent',
    zIndex:'29',
    color:'white',
    cursor:'pointer'

},
modal_content:{
    display:'grid',
     
    boxSizing:'border-box',
    backgroundColor:'white',
    borderRadius:'5px',
    boxShadow:'0px 0px 4px 1px rgba(0,0,0,0.5)',
    alignItems:'center',
    justifyContent:'space-between',
    margin:'auto',
    width:'70%',
    height:'90%',
  
    gridTemplateColumns:'40% 60%'


},
modal_body:{
    display:'flex',
    flexDirection:'column',
     
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
    width:'100%',
    height:'100%'
},
modal_box_content:{
    display:'grid',
    
    boxSizing:'border-box',
    gridTemplateRows:'10% 65% 15% 10%',
    
     
    width:'100%',
    height:'100%'
},

header_card:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    boxSizing:'border-box',
    padding:'0.5vmax 1vmax'
   
    
    },
    left_head:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    columnGap:'20px',
    },
    right_head:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    
    },
    card_avatar: {
      aspectRatio: '1/1',       /* نسبت ۱:۱ برای دایره شدن */
      borderRadius: '50%',      /* گرد کامل */
      width: '30px',           /* اندازه ثابت */
      border: '2px solid transparent', /* حاشیه شفاف */
      background: 
        'linear-gradient(white, white) padding-box,  linear-gradient(45deg, red, yellow) border-box', 
      padding: '2px',          /* فاصله داخلی */
      boxSizing: 'border-box'  /* محاسبه صحیح اندازه‌ها */
    },
    card_post_info:{
    display:'flex',
    flexDirection:'column',
    rowGap:'5px',
    alignItems:'flex-start',
    
    },
    card_name:{
    color:'black',
    fontSize:'16px',
    
    },
    card_info:{
    fontSize:'15px',
    color:'rgba(0,0,0,0.7)'},
    time_up:{
    color:'rgba(0,0,0,0.4)',
    fontSize:'13px'
    },
    
    op_list:{
    display:'flex',
    flexDirection:'row',
    columnGap:'20px',
    listStyleType:'disc',
    boxSizing:'border-box',
    margin:'0px',
    padding:'0px'
    },
    op_up_time:{
    color:'rgba(0,0,0,0.4)',
    fontSize:'13px',
    },
    op_follow:{
    color:'blueviolet',
    fontSize:'15px',
    cursor:'pointer'
    },
    link_btn:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        border:'none',
        backgroundColor:'transparent',
        cursor:'pointer'
    
    },
    divider:{
        width:'100%',
        borderBottom:'1px solid rgba(0,0,0,0.2)',
        height:'0.1px'
    },
    modal_head:{},

    modal_tools:{
    display:'flex',
    flexDirection:'column',
    borderTop:'1px solid rgba(0,0,0,0.1)',
    alignItems:'center',
    justifyContent:'space-between',
    boxSizing:'border-box',
    padding:'0.5vmax 0.5vmax',
    },
    modal_top_tools:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    boxSizing:'border-box',
    width:'100%'
    
    },
    icon_btn:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    boxSizing:'border-box',
    border:'none',
    backgroundColor:'transparent',
    
    cursor:'pointer'},

    left_tools:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    boxSizing:'border-box',
    columnGap:'10px'},
    right_tools:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    boxSizing:'border-box',
    },
    modal_info:{
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    boxSizing:'border-box',
    justifyContent:'center',
    rowGap:'5px',
    },

    comment_input_box:{
    borderTop:'1px solid rgba(0,0,0,0.3)',
    display:'flex',
    flexDirection:'row',
    alignItems:' center',
    justifyContent:'flex-start',
    width:'100%',
    boxSizing:'border-box',
    padding:'0.5vmax 0.5vmax'
    },
    imogi_menu_btn:{
     border:'none',
     display:'flex',
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:'transparent',
     boxSizing:'border-box',
     cursor:'pointer',
    },
    comment_input:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    border:'none',
    outline:'100%', 
    height:'100%',
    boxSizing:'border-box',
    resize:'vertical',
    overflow:'hidden',
    '&:focus':{outline:'none'}
    }
})

export default useStyles;