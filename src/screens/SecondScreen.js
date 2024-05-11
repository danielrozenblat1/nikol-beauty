import Box from "../components/Box/Box";
import styles from "./SecondScreen.module.css";
import eyebrows from "../icons/wired-lineal-1563-hair-clip (1).json";
import eyeleash from "../icons/wired-lineal-1575-eyelash.json";
import eye from "../icons/wired-lineal-1583-blinking-eye-with-eyelashes.json";
import nikol from "../images/ניקול ולרי ביוטי.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const SecondScreen = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.quate} itemscope itemtype="https://schema.org/Quotation">
          <span itemprop="text">
            " אם אני הייתי מקשיבה לכל הפחדים והמחסומים שהיו לי בראש לעולם לא
            הייתי מגיעה לאן שהגעתי היום "
          </span>
          <span itemprop="author" itemscope itemtype="https://schema.org/Person">
            <meta itemprop="name" content="ניקול ולארי ביוטי" />
          </span>
        </div>
        <div className={styles.name} itemprop="author" id="קצת עלי">
   ניקול ולארי
        </div>
        <div className={styles.center}>
          <img
            className={styles.image}
            src={nikol}
            alt="Nikol Beauty Course"
            itemscope
            itemtype="https://schema.org/ImageObject"
            itemprop="image"
          />
        </div>
        <div className={styles.quate} itemscope itemtype="https://schema.org/Quotation">
          <span itemprop="text">
            טסתי למקומות השווים ביותר כדי ללמוד מכל המאסטריות הגדולות בעולם והגיע
            הזמן לחלוק וללמד אתכן את כל הידע שצברתי
          </span>
        </div>
        <div className={styles.row}>
          <Box
            left={true}
            icon={eyebrows}
            subject="קורס עיצוב גבות"
            description="בתוך שני מפגשים פרונטלים עם ליווי אישי שלי, את תהפכי למעצבת גבות עם נסיון מעשי ותעודת הסמכה"
            itemscope
            itemtype="https://schema.org/Course"
            itemprop="courseOffering"
          />
          <Box
            icon={eyeleash}
            subject="קורס הלחמת ריסים"
            description="בתוך שלושה מפגשים פרונטלים עם ליווי אישי שלי, את תצאי מומחית להחלמת ריסים עם נסיון מעשי ותעודת הסמכה"
            itemscope
            itemtype="https://schema.org/Course"
            itemprop="courseOffering"
          />
        </div>
        <div className={styles.row}>
          <Box
            none={true}
            icon={eye}
            subject="קורס עיצוב גבות + הלחמת ריסים"
            description="חבילה של שני הקורסים שיוציאו אותך מומחית בתחום הביוטי עם ידע רחב ומתקדם בשני התחומים "
            itemscope
            itemtype="https://schema.org/Course"
            itemprop="courseOffering"
          />
        </div>
      </div>
    </>
  );
};

export default SecondScreen;