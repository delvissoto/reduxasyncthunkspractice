import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';
import Post from './pages/Post';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
    </div>
      <Routes>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/' index element={<Home/>}/>
        <Route path='/post' index element={<Post/>}/>
        <Route path="*" element={<NoPage />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
