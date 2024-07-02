import './App.css';
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom';
import Layout from './pages/layout.tsx';
import Movies from './pages/movies.tsx';

function App() {
  return (
    <Routes>
      <Route path='/movies' element={<Movies />}>
        Movies
      </Route>
      <Route path='/' element={<Layout />}>
        Layout
      </Route>
    </Routes>
  );
}

export default App;
