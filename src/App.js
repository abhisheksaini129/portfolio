import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import SocalLinks from './Components/SocalLinks';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
    <BrowserRouter>
      <NavBar/>
      <SocalLinks/> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
