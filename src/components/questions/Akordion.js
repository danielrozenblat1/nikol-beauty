import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
import Button from "../Button/Button";
 function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
  
    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 0px 3px 1px black',
          width: "100%",
          margin: "auto",
        
          padding:"0.2rem",
          background: "radial-gradient(circle, rgba(249, 209, 247, 0.496) 0%, rgba(255, 255, 255, 0.504) 100%);",
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
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              color: 'black', // Apply black color to content
              fontFamily: 'RubikR',
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
          <Typography sx={{ fontFamily: 'RubikR'}}>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            direction:"rtl",
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
    },[])
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
     
    <div className={styles.title} id="שאלות נפוצות">שאלות נפוצות</div>
      <DropdownAccordion title="מה מבטיח לי הצלחה אחרי הקורס? " content="ממני את מקבלת את כל הכלים להצלחה , את ההסמכה המקצועית ואת הליווי האישי , משם זה תלוי מאוד בך וברצון שלך להצליח - חשוב לציין שאני כאן עבורך לכל שאלה , התייעצות ועזרה גם לאחר הקורס"/>
      <DropdownAccordion title="איך אני יודעת שתחום הביוטי מתאים לי?" content="לפני שאת ניגשת לקורס , את עוברת פגישת נסיון חינמית , שבה את מתנסה במקצוע ומרגישה את חווית העבודה בתחום ,תוך כדי ההתנסות - את עוברת אבחון שלי , שבו אני בודקת אם את מתאימה למקצוע או לא , הפגישה החינמית היא ללא עלות ולכן יש לך הזדמנות להבין אם המקצוע מתאים לך בכלל לפני שאת משלמת על הקורס " />
      <DropdownAccordion title="עד כמה בטוח לעבוד בתחום הביוטי?" content="תחום הביוטי הוא תחום שלא ייגמר לעולם ! , בכל משבר ובכל מצב ! , גם בתקופת הקורונה וגם במלחמות שהמדינה עברה , נשים עדיין מחפשות ורודפות אחרי יופי ולכן את תדעי שהתחום לא נפגע וההכנסה בו תהיה בטוחה" />
      <Button buttonText="לשיחת ייעוץ חינמית" to="צור קשר"/>
    </div>
  
  );
}
