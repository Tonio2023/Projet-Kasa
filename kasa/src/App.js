
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Logement from './components/Pages/Logement/logement';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Logement" element={<Logement/>} />

      </Routes>

    </div>
  );
}

export default App;