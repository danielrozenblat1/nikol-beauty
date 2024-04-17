import styles from "./FirstScreen.module.css"
import nikol from "../images/ניקול ביוטי קורס.png"

const FirstScreen=()=>{

return <>

<div className={styles.background}>

<div className={styles.question}>בטוחה שתחום הביוטי <div className={styles.bold}>הוא בול בשבילך </div><br/>ועדיין מסתכלת מהצד ? </div>
<div className={styles.title}>הגיע הזמן לעשות את הצעד !</div>
<div className={styles.center}><img className={styles.image} src={nikol}/></div>

</div>

</>
}
export default FirstScreen