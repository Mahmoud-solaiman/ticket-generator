import { Routes, Route } from 'react-router';
import { useRef, useState } from 'react';
import { Home } from './pages/home/Home';
import { Checkout } from './pages/checkout/Checkout';
import './App.css'

function App() {
  const [ image, setImage ] = useState('');
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const githubInput = useRef(null);
  return (
    <Routes>
      <Route path="/ticket-generator" element={<Home 
        nameInput={nameInput} 
        emailInput={emailInput} 
        githubInput={githubInput} 
        setImage={setImage}
      />} />
      <Route path="/ticket-generator/checkout" element={<Checkout 
        nameInput={nameInput} 
        emailInput={emailInput} 
        githubInput={githubInput} 
        image={image}
      />} />
    </Routes>
  );
}

export default App
