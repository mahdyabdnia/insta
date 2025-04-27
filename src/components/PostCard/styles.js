import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
card_root:{
    display:'flex',
    flexDirection:'column',
    boxSizing:'border-box',
    justifyContent:'space-between',
    rowGap:'10px',
    backgroundColor:'transparent',
    width:'80%'
},
header_card:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
boxSizing:'border-box',

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
  width: '50px',           /* اندازه ثابت */
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
body_card:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    boxSizing:'border-box',
    backgroundColor:'rgba(0,0,0,0.8)',
    minWidth:'100%',
    minHeight:'600px',
    marginTop:'20px'
    
},
tools_card:{display:'flex',
flexDirection:'row',
alignItems: 'center',
justifyContent:'space-between',
width:'100%',
boxSizing:'border-box',
},
left_card:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'flex-start',
columnGap:'10px',
boxSizing:'border-box'},
right_card:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'flex-end',
columnGap:'10px',
},
icoon_btn:{
display:'flex',
flexDirection:'row',
alignItems:'center',
backgroundColor:'transparent',
border:'none',
cursor:'pointer'},
like:{
  
  color:'red !important'
},
divider:{
  width:'100%',
  height:'1px',
  backgroundColor:'rgba(0,0,0,0.4)'
}
})

export default useStyles;