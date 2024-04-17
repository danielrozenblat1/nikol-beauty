import styles from "./FirstScreen.module.css";
import nikol from "../images/ניקול ביוטי קורס.png";

const FirstScreen = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.question} itemscope itemtype="https://schema.org/Question">
          <span itemprop="name">
            בטוחה שתחום הביוטי <div className={styles.bold} itemprop="acceptedAnswer"> הוא בול בשבילך </div>
            <br />
            ועדיין מסתכלת מהצד ?
          </span>
        </div>
        <div className={styles.title} itemprop="text">
          הגיע הזמן לעשות את הצעד !
        </div>
        <div className={styles.center}>
          <img
            className={styles.image}
            src={nikol}
            alt="ניקול ולארי ביוטי"
            itemscope
            itemtype="https://schema.org/ImageObject"
            itemprop="image"
          />
        </div>
      </div>
    </>
  );
};

export default FirstScreen;