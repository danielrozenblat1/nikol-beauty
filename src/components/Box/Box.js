import { useEffect, useRef } from "react";
import styles from "./Box.module.css"
import { Player } from "@lordicon/react"
import Button from "../Button/Button";
import ScrollReveal from "scrollreveal";
const Box=(props)=>{

    const playerRef1=useRef(null)
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2000); // play again after 2.5 seconds
      };
      
      useEffect(()=>{
        playerRef1?.current?.playFromBeginning()
      },[])
      

      useEffect(()=>{

        ScrollReveal().reveal(`#ימין`, {
            duration: 1000,
            distance: "30px",
            origin: "right", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`#שמאל`, {
            duration: 1000,
            distance: "30px",
            origin: "left", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
     
    },[])

return <>

<div className={styles.box} style={{ borderRadius: props.none ? "50px" : (props.left ? "50px 50px 50px 0" : "50px 50px 0 50px") }}>
<h1 className={styles.subject} id="ימין">{props.subject}</h1>
<div className={styles.icon}><Player icon={props.icon} size="100%" onComplete={handleComplete} ref={playerRef1}/></div>
<div className={styles.description} id="שמאל">{props.description}</div>
<Button buttonText="לסילבוס המלא לחצי כאן" to={props.subject}/>
</div>
</>
}
export default Box