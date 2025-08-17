import reccomend1 from "../../images/ניקול ביוטי יומן.png"
import reccomend2 from "../../images/ניקול ולרי ביוטי לקוחות ממליצים 1.png"
import reccomend3 from "../../images/ניקול ולרי ביוטי לקוחות ממליצים 2.png"
import reccomend4 from "../../images/ניקול ביוטי תוצאה 3.png"
import reccomend5 from "../../images/ניקול ולרי ביוטי לקוחות ממליצים 3.png"
import reccomend6 from "../../images/ניקול ולרי ביוטי לקוחות ממליצים 4.png"
import reccomend7 from "../../images/ניקול ביוטי תוצאה 1.png"
import reccomend8 from "../../images/ניקול ולרי ביוטי לקוחות ממליצים 5.png"
import reccomend9 from "../../images/ניקול ולרי ביוטי לקוחות ממליצים 6.png"
import reccomend10 from "../../images/ניקול ביוטי תוצאה 4.png"
import reccomend11 from "../../images/ניקול ולרי ביוטי לקוחות ממליצים 7.png"
import reccomend12 from "../../images/ניקול ולרי ביוטי לקוחות ממליצים 8.png"
import reccomend13 from "../../images/ניקול ביוטי תוצאה 2.png"
import reccomend14 from "../../images/ניקול ולרי ביוטי לקוחות ממליצים 9.png"
import reccomend15 from "../../images/ניקול ולרי ביוטי לקוחות ממליצים 10.png"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"
import styles from "./Clients.module.css"


const Clients=()=>{
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 1000 ? 3 : window.innerWidth > 550 ? 2 : 1,
    slidesToScroll:  window.innerWidth> 1000 ? 3 : window.innerWidth > 550 ? 2 : 1,
  };
  const content = [

       {
      type: 'image',
      src: reccomend1,
      alt:"ניקול ולרי ביוטי לקוחות ממליצים 1.png"
      },
 

      {
        type: 'image',
        src: reccomend2,
        alt:"ניקול ולרי ביוטי לקוחות ממליצים 2.png"
      },
 
      {
        type: 'image',
        src: reccomend3,
        alt:"ניקול ולרי ביוטי לקוחות ממליצים 3.png"
      },
      {
        type: 'image',
        src: reccomend4,
        alt:"ניקול ולרי ביוטי לקוחות ממליצים 4.png"
      },
      {
        type: 'image',
        src: reccomend5,
        alt:"5 ניקול ולרי ביוטי לקוחות ממליצים.png"
      },
      {
        type: 'image',
        src: reccomend6,
        alt:"6 ניקול ולרי ביוטי לקוחות ממליצים.png"
      },
      {
        type: 'image',
        src:reccomend7,
        alt:"7 ניקול ולרי ביוטי לקוחות ממליצים.png"
      },
      {
        type: 'image',
        src: reccomend8,
        alt:"8 ניקול ולרי ביוטי לקוחות ממליצים.png"
      },
      {
        type: 'image',
        src: reccomend9,
        alt:"9 ניקול ולרי ביוטי לקוחות ממליצים.png"
      },
      {
        type: 'image',
        src: reccomend10,
        alt:"10 ניקול ולרי ביוטי לקוחות ממליצים.png"
      },
   
      {
        type: 'image',
        src: reccomend11,
        alt:"11 ניקול ולרי ביוטי לקוחות ממליצים.png"
      },
      {
        type: 'image',
        src: reccomend12,
        alt:"12 ניקול ולרי ביוטי לקוחות ממליצים.png"
      },
      {
        type: 'image',
        src: reccomend13,
        alt:"10 ניקול ולרי ביוטי לקוחות ממליצים.png"
      },
   
      {
        type: 'image',
        src: reccomend14,
        alt:"11 ניקול ולרי ביוטי לקוחות ממליצים.png"
      },
      {
        type: 'image',
        src: reccomend15,
        alt:"12 ניקול ולרי ביוטי לקוחות ממליצים.png"
      },

  ];
return <>

<div className={styles.container} id="לקוחות ממליצות">

 <div className={styles.title}>קצת מהלקוחות שלי..</div>
 <div className={styles.explain}>כשלקוחה נכנסת אלי אני דואגת להוציא אותה הכי מרוצה שיש , דפדפי בין התמונות ותשמעי את זה מהן..</div>
 <div className={styles.sliderContainer}>
<Slider {...sliderSettings} style={{zIndex:0}}>
{content.map((item, index) => (
  <div key={index}>
    {item.type === 'image' && (
      <img src={item.src} className={styles.image1} alt={item.alt} />
    )}
    {item.type === 'video' && (
      <video
        style={{ width: "100%", display: "flex", objectFit: "cover", margin: "auto", height: "100%" }}
        muted
        controls
      >
        <source src={item.src} type="video/mp4" />
      </video>
    )}
  </div>
))}
</Slider></div>
</div>
</>
}
export default Clients