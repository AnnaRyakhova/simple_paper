import './App.css';
import Header from '../components/Header';
import FirstScreen from '../components/FirstScreen';
import Results from '../components/Results';
import Products from '../components/Products';
import Clients from '../components/Clients';
import Sketcbook from '../components/Sketchbook';
import Footer from '../components/Footer';

export const App = () => (
  <>
    <Header />
    <FirstScreen />
    <Results /> 
    <Products />
    <Clients />
    <Sketcbook />
    <Footer />
  </>
)
