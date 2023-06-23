
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Logement from './pages/Logement/logement';
import Error from './pages/Error/Error';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';

function App() { //page principale du site

  return (
    <div className="App">
      <Banner className="banner"/>
      <Routes className="routes">
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Logement/:id" element={<Logement/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer className="appFooter"/>
    </div>
  );
}

export default App;
