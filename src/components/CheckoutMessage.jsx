import '../pages/home/WelcomeMessage.css'

export function CheckoutMessage({ nameInput, emailInput }) {
  return (
    <div className="welcome-message-container">
      <h1 className="welcome-message">
        Congrats, <span className="person-name">{nameInput.current.value}!</span>
        <br/>
        Your ticket is ready.
      </h1>
      <p className="sub-message">
        We've emailed your ticket to
        <br/>
        <span className="person-email"> {emailInput.current.value} </span>
        and will send you updates in 
        <br/>
        the run up to the event.
      </p>
    </div>
  );
}