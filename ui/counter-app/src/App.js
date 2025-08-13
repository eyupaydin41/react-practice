import HomePage from './pages/HomePage';
import Counter from './components/Counter';
import Form from './components/Form';
import Weather from './components/Weather';
import Todo from './components/Todo';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './css/Navbar.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav className= 'navbar' style={{ gap: '10px', display: 'flex', borderStyle: 'solid', borderWidth: '1px', padding: '20px', borderRadius: '28px', marginBottom: '20px' }}>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/form">Form</Link>
          <Link to="/weather">Weather</Link>
          <Link to="/todo">To do</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<Form />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </Router>
  );
}
