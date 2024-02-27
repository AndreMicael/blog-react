import './App.css';
import { BrowserRouter,Routes, Route,Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
         
   <BrowserRouter>
   <Navbar/>
   <div className='Container'>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>

    </div>
  );
}

export default App;
