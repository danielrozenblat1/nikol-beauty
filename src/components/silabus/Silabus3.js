import styles from "./Silabus.module.css"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ScrollReveal from 'scrollreveal';
import nikolFirstDay2 from "../../images/ניקול ביוטי אווירה 3.png"
import nikolFirstDay3 from "../../images/ניקול ולארי קורס עיצוב גבות 5.png"
import nikolFirstDay1 from "../../images/ניקול ביוטי אווירה 2.png"
import nikolFirstDay4 from "../../images/ניקול ביוטי תוצאה 2.png"
import nikolFirstDay5 from "../../images/ניקול ולארי קורס עיצוב גבות 4.png"
import nikolFirstDay6 from "../../images/ניקול ולארי קורס עיצוב גבות 2.png"

import nikolFirstDay7 from "../../images/ניקול ביוטי תוצאה 5.png"
import nikolFirstDay8 from "../../images/ניקול ביוטי לימוד.png"
import nikolFirstDay9 from "../../images/ניקול ביוטי קורס הלחמת ריסים.png"
import nikolFirstDay10 from "../../images/ניקול ולארי קורס עיצוב גבות 6.png"
import nikolFirstDay11 from "../../images/ניקול ביוטי קורס הלחמת ריסים יום 3.png"
import nikolFirstDay12 from "../../images/ניקול ביוטי תעודה.png"
import Button from "../Button/Button";
 export function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
  
    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
       
          width: "100%",
          margin: "auto",
        
          padding:"0.2rem",
          background: "linear-gradient(35deg, rgba(253,47,154,0.8010853999803046) 0%, rgba(255,49,160,0.1988445036217612) 50%, rgba(174,0,90,0.8038865204284839) 100%);",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
       
        }}
      >
        <AccordionSummary
          expandIcon={!expanded? <AddIcon/>:<RemoveIcon/>}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              color: 'black', // Apply black color to content
              fontFamily: 'Horev',
              direction: "rtl",
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography>{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply black color to content
         
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'Horev'}}>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}



const Silabus3=(props)=>{


return <>
<div className={styles.box}>
<div className={styles.title}  id={props.title} >{props.title}</div>
<div className={styles.oneDay} >
<DropdownAccordion title={<>
<div className={styles.day}>יום מספר 1</div>

</>}content={<>
<div className={styles.description}>
                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                למידת את כל החומר העיוני על עיצוב גבות
                </span>
              
                </div>


                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                תרגול פרקטיקה של חוט, פינצטה, שעווה וצבע לגבות בנוסף לומדות פרקטיקה של הלחמת ריסים
                </span>
             
                </div>
                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                הדגמה של ניקול על המודליסטית
                </span>
        
                </div>


                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                שיחת סיכום ושיעורי בית
                </span>
            
                </div>

           
</div>

      
<div className={styles.row}>
                    <img className={styles.image} src={nikolFirstDay1} alt="ניקול ולארי קורס עיצוב גבות והלחמת ריסים יום 1 אווירה"/>
                    <img className={styles.image} src={nikolFirstDay2} alt="ניקול ולארי קורס  עיצוב גבות והלחמת ריסים יום 1 חוויה"/>
                    <img className={styles.image} src={nikolFirstDay3} alt="ניקול ולארי קורס עיצוב גבות והלחמת ריסים יום 1 לקוחה"/>
</div>     

</>}/>




</div>
<div className={styles.oneDay}>
<DropdownAccordion title={<>
<div className={styles.day}>יום מספר 2</div>

</>}content={<>
<div className={styles.description}>
                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                 עוברות יחד על שיעורי הבית
                </span>
              
                </div>


                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                לומדות את כל החלק התיאורטי של הלחמת ריסים
                </span>
             
                </div>
                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                עובדות על פרקטיקה של הלחמת ריסים
                </span>
        
                </div>


                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                ניקול מדגימה על מודליסטית את תהליך הלחמת הריסים
                </span>
            </div>
                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                הדגמה איך לצלם נכון את העבודה וטיפים לישווק
                </span>
            
                </div>

                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                שיחת סיכום + שיעורי בית
                </span>
            
                </div>
           
</div>

      
<div className={styles.row}>
                    <img className={styles.image} src={nikolFirstDay4} alt="ניקול ולארי קורס הלחמת ריסים יום 2 אווירה"/>
                    <img className={styles.image} src={nikolFirstDay5} alt="ניקול ולארי קורס הלחמת ריסים יום 2 חוויה"/>
                    <img className={styles.image} src={nikolFirstDay6} alt="ניקול ולארי קורס הלחמת ריסים יום 2 לקוחה"/>
</div>     

</>}/>
</div>


<div className={styles.oneDay}>
<DropdownAccordion title={<>
<div className={styles.day}>יום מספר 3</div>

</>}content={<>
<div className={styles.description}>
                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                אתן עוברות מבחן על כל החלק התיאורטי
                </span>
              
                </div>


                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                בדיקת שיעורי הבית
                </span>
             
                </div>
                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                שיחת סיכום לפני המודליסטית הראשונה של התלמידות
                </span>
        
                </div>

                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                אתן עושות מודליסטית ראשונה עיצוב גבות + הלחמת ריסים
                </span>
        
                </div>
                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                שיחת סיכום
                </span>
                </div>
         

           
</div>

      
<div className={styles.row}>
                    <img className={styles.image} src={nikolFirstDay7} alt="ניקול ולארי קורס הלחמת ריסים יום 3 אווירה"/>
                    <img className={styles.image} src={nikolFirstDay9} alt="ניקול ולארי קורס הלחמת ריסים יום 3 חוויה"/>
                    <img className={styles.image} src={nikolFirstDay8} alt="ניקול ולארי קורס הלחמת ריסים יום 3 לקוחה"/>
</div>     

</>}/>
</div>



<div className={styles.oneDay}>
<DropdownAccordion title={<>
<div className={styles.day}>יום מספר 4</div>

</>}content={<>
<div className={styles.description}>
                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                עושות את המבחן המעשי שלהם מודליסטית שנייה לעיצוב גבות + הלחמת ריסים באופן עצמאי
                </span>
              
                </div>


                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                צילומים
                </span>
             
                </div>
                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                טיפים לשיווק
                </span>
        
                </div>

                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
                הרמת כוסית + טקס חלוקת תעודות
                </span>
        
                </div>
        
</div>

      
<div className={styles.row}>
                    <img className={styles.image} src={nikolFirstDay10} alt="ניקול ולארי קורס עיצוב גבות והלחמת ריסים יום 4 אווירה"/>
                    <img className={styles.image} src={nikolFirstDay11} alt="ניקול ולארי קורס עיצוב גבות והלחמת ריסים יום 4 חוויה"/>
                    <img className={styles.image} src={nikolFirstDay12} alt="ניקול ולארי קורס עיצוב גבות והלחמת ריסים יום 4 לקוחה"/>
</div>     

</>}/>
</div>





</div>
</>
}
export default Silabus3
