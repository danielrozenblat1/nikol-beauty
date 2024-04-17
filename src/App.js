
import './App.css';
import FirstScreen from './screens/FirstScreen';
import NavBar from './components/NavBar/NavBar';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FormScreen from './screens/FormScreen';
import Clients from './components/Slider/Clients';
import ByMe from './components/ByMe/ByMe';

function App() {
  return <>
  <div class="wrap">
  <NavBar/>
  <FirstScreen/>
  <SecondScreen/>
  <FormScreen title="הגיע הזמן לעשות את הצעד !"/>
  <ThirdScreen/>
<Clients/>
<FormScreen title="אם הגעת עד לכאן אז את רצינית לגבי התחום"/>
<ByMe/>
</div>
  </>
}

export default App;
