import '../pages/home/WelcomeMessage.css'

export function CheckoutMessage() {
  return (
    <div className="welcome-message-container">
      <h1 className="welcome-message">
        Congrats, <span className="person-name">Jonatan Kristof!</span>
        <br/>
        Your ticket is ready.
      </h1>
      <p className="sub-message">
        We've emailed your ticket to
        <br/>
        <span className="person-email"> Jonatan@email.com </span>
        and will send you updates in 
        <br/>
        the run up to the event.
      </p>
    </div>
  );
}