import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Movies from './pages/movies';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App flex flex-col h-full w-full justify-between" >
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
