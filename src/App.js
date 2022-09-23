import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import AboutTest from './components/Home/AboutCard';
import Navbar from './components/Navbar/Navbar';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Projects from './screens/Projects';

function App() {
  return (
    
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/a" element={<AboutTest/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
  );
}

export default App;
