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
      <Route path="/" element={<Home 
        nameInput={nameInput} 
        emailInput={emailInput} 
        githubInput={githubInput}
        image={image}
        setImage={setImage}
      />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App
