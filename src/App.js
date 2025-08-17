
import './App.css';
import FirstScreen from './screens/FirstScreen';
import NavBar from './components/NavBar/NavBar';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FormScreen from './screens/FormScreen';
import Clients from './components/Slider/Clients';
import ByMe from './components/ByMe/ByMe';
import BasicAccordion from './components/questions/Akordion';
import ForthScreen from './screens/ForthScreen';
import { useEffect, useState } from 'react';
import PrivacyPolicy from './components/privacy/Privacy';

function App() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return <>
  <div class="wrap" style={{overflowY:"hidden"}}>
  <NavBar/>
  <FirstScreen scrolled={scrolled}/>
  <SecondScreen/>
  <FormScreen title="הגיע הזמן לעשות את הצעד !"/>
  <ThirdScreen/>
<Clients/>
<ForthScreen/>
<BasicAccordion/>
<FormScreen title="אם הגעת עד לכאן אז את רצינית לגבי התחום"/>
<PrivacyPolicy
  ownerName="ניקול ולארי"
  email="nikolmelayev20@gmail.com"
  phone="+972537133055"
  domain="https://nikolvalerie.co.il"
/>
<ByMe/>

</div>
  </>
}

export default App;
