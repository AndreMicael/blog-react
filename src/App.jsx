import './App.css';

import { BrowserRouter,Routes, Route,Navigate } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
         
   <AuthProvider>
   <BrowserRouter>
   <Navbar/>
   <div className='Container'>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
   </AuthProvider>

    </div>
  );
}

export default App;
