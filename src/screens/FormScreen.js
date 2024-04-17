import { useRef } from "react"
import styles from "./FormScreen.module.css"
const FormScreen=({title})=>{

    const phoneRef=useRef(null)
    const mailRef=useRef(null)
    const nameRef=useRef(null)
    const reasonRef=useRef(null)
return <>
<div id="צור קשר" className={styles.title}>{title}</div>
<div className={styles.description}>תשאירי פרטים ואחזור אלייך בהקדם!</div>
<form className={styles.form}>
<div className={styles.row}>
<input ref={nameRef} className={styles.input} placeholder="שם מלא"/>

<input ref={mailRef} className={styles.input} placeholder="מייל"/>
<input ref={phoneRef} className={styles.input} placeholder="מספר טלפון"/>
<select ref={reasonRef} className={styles.input}>
<option>קורס עיצוב גבות</option>
<option>קורס הלחמת ריסים</option>
<option>שני הקורסים מעניינים אותי</option>
</select>
</div>


<div className={styles.center}><button className={styles.button}>שלח</button></div>
</form>

</>

}
export default FormScreen