import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './screens/About';
import Contact from './screens/Contact';
import Homepage from './screens/Homepage';
import Projects from './screens/Projects';

function App() {
  return (
    
    <div className="wrapper">
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
