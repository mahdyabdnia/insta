import React,{useRef} from 'react'
import useStyles from './styles'
export default function Auth() {
    const classes=useStyles()
    const lgRef=useRef(null)
    const rgRef=useRef(null)
    const goToRegisterForm=()=>{
    const reg=rgRef.current;
    const lg=lgRef.current;
    if(lg ) {
     lg.style.display="none"
     reg.style.display="flex"
    }
    }

    const goToLoginForm=()=>{

     const reg=rgRef.current;
    const lg=lgRef.current;
    if(reg ) {
     reg.style.display="none"
     lg.style.display="flex"
    }
    }
  return (
    <div className={classes.root_auth}>
      <div className={classes.main_box_lg} ref={lgRef}>
       
        <h2>ورود </h2>
        <div className={classes.form_box}>


            <label htmlFor="" className={classes.label_form}>نام کاربری</label>
            <div  className={classes.input_box}>
            <span></span>
            <input type="text" className={classes.input_tag} />
            </div>
        <label htmlFor=""  className={classes.label_form}>رمز ورود</label>

        <div  className={classes.input_box}>
            <span></span>
            <input type="password" className={classes.input_tag} />
            </div>
        </div>
        
        

        <button className={classes.change_btn} onClick={goToRegisterForm}>در صورت نداشتن حساب کلیک کنید</button>

        
      </div>

<div className={classes.main_box_rg} ref={rgRef}>
       
<h2>ورود </h2>
<div className={classes.form_box}>

<label htmlFor="" className={classes.label_form}> پست الکترونیکی  </label>
    <div  className={classes.input_box}>
    <span></span>
    <input type="text" className={classes.input_tag} />
    </div>
    <label htmlFor="" className={classes.label_form}>نام کاربری</label>
    <div  className={classes.input_box}>
    <span></span>
    <input type="text" className={classes.input_tag} />
    </div>
<label htmlFor=""  className={classes.label_form}>رمز ورود</label>

<div  className={classes.input_box}>
    <span></span>
    <input type="password" className={classes.input_tag} />
    </div>
</div>



<button className={classes.change_btn} onClick={goToLoginForm}>برای ورود کلیک کنید </button>

 
</div>

    </div>
  )
}
