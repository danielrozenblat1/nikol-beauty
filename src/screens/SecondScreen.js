import Box from "../components/Box/Box"
import styles from "./SecondScreen.module.css"
import eyebrows from "../icons/wired-lineal-1563-hair-clip (1).json"
import eyeleash from "../icons/wired-lineal-1575-eyelash.json"
import eye from "../icons/wired-lineal-1583-blinking-eye-with-eyelashes.json"
import nikol from "../images/ניקול ולרי ביוטי.png"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
const SecondScreen=()=>{





    return <>
    <div className={styles.background}>
    <div className={styles.quate}>" אם אני הייתי מקשיבה לכל הפחדים והמחסומים שהיו לי בראש לעולם לא הייתי מגיעה לאן שהגעתי היום "</div>
    <div className={styles.name}>ניקול ולרי ביוטי</div>
 <div className={styles.center}><img className={styles.image} src={nikol}/></div>
 <div className={styles.quate}>טסתי למקומות השווים בעולם ללמוד מכל המאסטריות הגדולות בעולם והגיע הזמן לחלוק וללמד אתכן את כל הידע שצברתי</div>
    

<div className={styles.row}>
    <Box  left={true} icon={eyebrows} subject="קורס עיצוב גבות" description="בתוך שלושה מפגשים פרונטלים עם ליווי אישי שלי, את תהפכי למעצבת גבות עם נסיון מעשי ותעודת הסמכה"/>
    <Box  icon={eyeleash} subject="קורס הלחמת ריסים" description="בתוך שלושה מפגשים פרונטלים עם ליווי אישי שלי, את תצאי מומחית להחלמת ריסים עם נסיון מעשי ותעודת הסמכה"/>
    </div>
    <div className={styles.row}>
    <Box none={true} icon={eye} subject="קורס עיצוב גבות + הלחמת ריסים" description="שני הקורסים שיוציאו אותך מומחית בתחום הביוטי עם ידע של90% מהמתחרות שלך אין ! , יש הנחה מיוחדת על המסלול הזה "/>
 
    </div>
    </div>
    </>
}
export default SecondScreen