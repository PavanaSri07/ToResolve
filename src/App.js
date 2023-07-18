import './App.css';
import C1Slider from './Components/C1-Slider';
import C2Counter from './Components/C2-Counterup'
import C8Forms from './Components/C8-Forms';
import MyComponent from './Components/C7-Brands';
import AboutBanner from './Components/C6-TechnicalPartner';
import CardLayout from './Components/C5-MatterAndCards';
import C4ScrollingUp from './Components/C4-ScrollingUp';
import C3Testimonials from './Components/C3-Testimonials';
import C9About from './Components/C9-About';
import BackgroundSlider from './ToBeResolved/NS';


function App() {
  return (
    <div>
     <BackgroundSlider/>
      <C2Counter/>
      <C9About/>
      <MyComponent/>
      <C4ScrollingUp/>
      <C8Forms/>
      <AboutBanner/>
      <CardLayout/>
      <C3Testimonials/>
     
    </div>
  );
}

export default App;
