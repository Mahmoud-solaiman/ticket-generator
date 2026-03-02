import { Link } from 'react-router';
import validator from 'validator';
import { useState } from 'react';
import './InfoFields.css';

export function InfoFields({ nameInput, emailInput, githubInput }) {
  const [ isDisabled, setIsDisabled ] = useState(true);

  const toggleDisabled = () => {
    if (
        emailInput.current.value !== '' 
        && githubInput.current.value !== '' 
        && nameInput.current.value !== ''
        && validator.isEmail(emailInput.current.value)
      ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  return (
    <div className="inputs-form">
      <div className="fields-container">
        <div className="field-container">
          <label className="input-label" htmlFor="name-input">Full Name*</label>
          <input 
            ref={nameInput} 
            type="text" 
            id="name-input" 
            className="input-field" 
            placeholder="Mahmoud Solaiman" 
            onChange={toggleDisabled}
          />
        </div>
        <div className="field-container">
          <label className="input-label" htmlFor="email-input">Email Address*</label>
          <input 
            ref={emailInput} 
            type="email" 
            id="email-input" 
            className="input-field" 
            placeholder="mahmoudsolaiman69@gmail.com" 
            onChange={toggleDisabled}
          />
        </div>
        <div className="field-container">
          <label className="input-label" htmlFor="github-input">GitHub Username*</label>
          <input 
            ref={githubInput} 
            type="text" 
            id="github-input" 
            className="input-field" 
            placeholder="@yourusername" 
            onChange={toggleDisabled}  
          />
        </div>
        <Link to="checkout">
          <button 
            disabled={isDisabled} 
            className="generate-btn"
          >Generate My Ticket</button>
        </Link>
      </div>
    </div>
  );
}