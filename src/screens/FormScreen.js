import { useRef, useState } from "react";
import styles from "./FormScreen.module.css";
import PrivacyPolicy from "../components/privacy/Privacy";

const FormScreen = ({ title }) => {
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const reasonRef = useRef(null);
  const [agreed, setAgreed] = useState(false);

  const reciver = "nikolmelayev20@gmail.com";

  const submitHandler = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const reason = reasonRef.current.value;

    if (name.trim().length <= 2) {
      alert("אנא הכנס שם מלא");
      return;
    }

    if (phone.trim().length !== 10) {
      alert("אנא הכנס מספר טלפון הכולל 10 ספרות");
      return;
    }

    if (!email.includes("@")) {
      alert("אנא הכנס מייל תקין");
      return;
    }

    if (!agreed) {
      alert("עליך לאשר את תנאי השימוש ומדיניות הפרטיות");
      return;
    }

    const formData = {
      name,
      phone,
      email,
      reason,
      reciver,
    };

    const response = await fetch(
      "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים");
      nameRef.current.value = "";
      phoneRef.current.value = "";
      emailRef.current.value = "";
      setAgreed(false);
    }

    console.log(formData);
  };

  // פונקציה שמונעת מהטופס להגיב על קליק בקישור
  const handlePrivacyClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      <div id="צור קשר" className={styles.title}>
        {title}
      </div>
      <div className={styles.description}>תשאירי פרטים ואחזור אלייך בהקדם!</div>

      <form className={styles.form}>
        <div className={styles.row}>
          <input ref={nameRef} className={styles.input} placeholder="שם מלא" />
          <input ref={emailRef} className={styles.input} placeholder="מייל" />
          <input ref={phoneRef} className={styles.input} placeholder="מספר טלפון" />
          <select ref={reasonRef} className={styles.input}>
            <option value="קורס עיצוב גבות">קורס עיצוב גבות</option>
            <option value="קורס הלחמת ריסים">קורס הלחמת ריסים</option>
            <option value="שני הקורסים מעניינים אותי">שני הקורסים מעניינים אותי</option>
          </select>
        </div>

        {/* הוצאת את התיבת האישור מחוץ לטופס */}
      </form>

      {/* תיבת האישור מחוץ לטופס */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <label style={{ 
          direction: "rtl", 
          fontFamily: "RubikR", 
          fontSize: "0.9rem", 
          textAlign: "right", 
          maxWidth: "90%", 
          display: "flex", 
          alignItems: "center", 
          flexWrap: "wrap", 
          gap: "5px" 
        }}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            style={{ marginLeft: "10px" }}
          />
          קראתי את
          <span onClick={handlePrivacyClick}>
            <PrivacyPolicy
              ownerName="ניקול ולארי"
              email="nikolmelayev20@gmail.com"
              phone="+972537133055"
              domain="https://nikolvalerie.co.il"
            />
          </span>
          ואני מאשר/ת
        </label>
      </div>

      {/* כפתור השליחה גם מחוץ לטופס */}
      <div className={styles.center}>
        <button 
          type="button" 
          className={styles.button} 
          onClick={submitHandler}
        >
          שלח
        </button>
      </div>
    </>
  );
};

export default FormScreen;