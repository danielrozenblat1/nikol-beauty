import Silabus1 from "../components/silabus/Silabus1"
import Silabus2 from "../components/silabus/Silabus2"
import Silabus3 from "../components/silabus/Silabus3"
import styles from "./ForthScreen.module.css"

const ForthScreen = () => {
  return (
    <>
      <h1 className={styles.header}>הסילבוסים המלאים לקורסים</h1>
      <div className={styles.description}>
        הקורסים מתקיימים בין השעות 9:00-15:00 <br/>
        וכמובן שיכילו כיבוד קל ונישנושים
      </div>
      <div className={styles.row}>
        <Silabus1
          title="קורס הלחמת ריסים"
          itemScope
          itemType="https://schema.org/Product"
          itemProp="itemListElement"
        />
      </div>
      <div className={styles.row}>
        <Silabus2
          title="קורס עיצוב גבות"
          itemScope
          itemType="https://schema.org/Product"
          itemProp="itemListElement"
        />

        <Silabus3
              title="קורס עיצוב גבות + הלחמת ריסים"
              itemScope
              itemType="https://schema.org/Product"
              itemProp="itemListElement"
        />
      </div>
    </>
  )
}

export default ForthScreen
