import styles from "./ThirdScreen.module.css"
import { useEffect, useRef } from "react"

import { Player } from "@lordicon/react"
import ScrollReveal from "scrollreveal"

import Button from "../components/Button/Button"
import pudra from '../icons/wired-lineal-1554-beauty-face-powder.json'
import microbuilding from "../icons/wired-lineal-1563-hair-clip (1).json"
import lecture from "../icons/wired-lineal-689-speaker-lecturer-female.json"
import  eyeleash from "../icons/wired-lineal-1575-eyelash.json"
import  lips from "../icons/wired-lineal-1597-lips.json"
const ThirdScreen=()=>{
 
 
  



    const playerRef1=useRef()
    const playerRef2=useRef()
    const playerRef3=useRef()
    const playerRef4=useRef()
    const playerRef5=useRef()
    useEffect(()=>{
  
  
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.section}`, {
              duration: 1000,
              distance: "30px",
              origin: "right", // Start from the right side
              easing: "ease-in-out",
              reset:false,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
            ScrollReveal().reveal(`.${styles.stepHeader}`, {
              duration: 1000,
              distance: "30px",
              origin: "top", // Start from the right side
              easing: "ease-in-out",
              reset:false,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
        playerRef1.current?.playFromBeginning();
        playerRef2.current?.playFromBeginning();
        playerRef3.current?.playFromBeginning();
        playerRef4.current?.playFromBeginning();    
        playerRef5.current?.playFromBeginning();  
    },[])
    return <>
        <div className={styles.background}>
<div className={styles.title}> תחומי המומחיות שלי </div>
<div className={styles.bigWrapper}>

<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef1} size="100%" onComplete={() => playerRef1.current?.playFromBeginning()}
icon={pudra}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>הצללת פודרה</div>
    <div className={styles.section}>בעזרת התאמה מיוחדת לעור שלך ולסגנון האיפור שלך אני הולכת להפוך את העור שלך לטבעי ומואר</div>
</div>
</div>
{/* חץ לשלב הבא */}

<div className={styles.step}>

<div className={styles.text}>

 
<div className={styles.stepHeader}>העברת קורסים</div>
    <div className={styles.section}> כל הידע שצברתי מהמאסטריות הטובות בעולם מחכה לך בדרך להפוך למומחית ביוטי בעצמך</div>
</div>
<div className={styles.icons}>
<Player ref={playerRef2} delay={500} size="100%" onComplete={() => playerRef2.current?.playFromBeginning()}
icon={lecture}/>
</div>
</div>

{/* חץ לשלב הבא */}

<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef3} size="100%" onComplete={() => playerRef3.current?.playFromBeginning()}
icon={lips}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>פיגמנט שפתיים</div>
    <div className={styles.section}>כל קילוף,פיגמנט וקו שפתיים שלא נראה מושלם יהפוך למושלם בעזרת הכלים המיוחדים שיש לי</div>
</div>
</div>
<div className={styles.step}>

<div className={styles.text}>

 
<div className={styles.stepHeader}>מיקרובילדינג</div>
    <div className={styles.section}>בעזרת טכניקות מיוחדות ומגוונות נוכל לייצר חצאי שיער , מילוי או שדרוג הקו הטבעי של השיער שלך</div>
</div>
<div className={styles.icons}>
<Player ref={playerRef4} delay={500} size="100%" onComplete={() => playerRef4.current?.playFromBeginning()}
icon={microbuilding}/>
</div>
</div>
<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef5} size="100%" onComplete={() => playerRef5.current?.playFromBeginning()}
icon={eyeleash}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>הלחמת ריסים </div>
    <div className={styles.section}>נוכל לשפר את עובי הריס, נוכל להדביק ריסים מלאכותיים ולעבות את הריסים שלך וליצור מראה טבעי ומואר של הריסים שלך</div>
</div>
</div>

</div>
<Button buttonText="לשיחת ייעוץ חינמית" to="צור קשר" />
</div>
 
  </>
}
export default ThirdScreen