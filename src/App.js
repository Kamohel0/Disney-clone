import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* Correct syntax for Route */}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
