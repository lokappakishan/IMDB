import './App.css';
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom';
import Layout from './pages/layout.tsx';
import Movies from './pages/movies.tsx';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/movies' element={<Movies />}>
          Movies
        </Route>
        <Route path='/' element={<Layout />}>
          Layout
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
