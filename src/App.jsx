//Estilo
import './App.css';

//React e Firebase
import { BrowserRouter,Routes, Route,Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

//Hooks
import { useState, useEffect } from 'react';
import { useAuth } from './hooks/useAuth';

//Contexto
import { AuthProvider } from './context/AuthContext';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost'
import Dashboard from './pages/Dashboard';

function App() {

  const [user,setUser] = useState(undefined);
  const {auth} = useAuth();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      setUser(user)
    })
  },[auth]);


  if(loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
         
   <AuthProvider value={{user}}>
    <BrowserRouter>
    <Navbar/>
    <div className='Container'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/posts/create' element={<CreatePost/>}/>
          <Route path='/dashboard' element={<CreatePost/>}/>
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
   </AuthProvider>

    </div>
  );
}

export default App;
