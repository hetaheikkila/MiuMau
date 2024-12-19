import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Etusivu from './components/Etusivu';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Etusivu</Link>
        <Link to="/Madot">Madot</Link>
        <Link to="/Scolopendra">Scolopendra</Link>
        <Link to="/Tarantula">Tarantula</Link>
        <Link to="/Tiikerikotilo">Tiikerikotilo</Link>
        <Link to="/Torakat">Torakat</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Etusivu />} />
        <Route path="madot" element={<Madot />} />
        <Route path="scolopendra" element={<Scolopendra />} />
        <Route path="tarantula" element={<Tarantula />} />
        <Route path="tiikerikotilo" element={<Tiikerikotilo />} />
        <Route path="torakat" element={<Torakat />} />
        <Route path="etusivu" element={<Etusivu />} />
      </Routes>
    </Router>
  );
}

export default App;