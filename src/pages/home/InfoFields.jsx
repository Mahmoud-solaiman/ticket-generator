import './InfoFields.css';

export function InfoFields() {
  return (
    <div className="inputs-form">
      <div className="fields-container">
        <div className="field-container">
          <label className="input-label" htmlFor="name-input">Full Name*</label>
          <input required type="text" id="name-input" className="input-field" placeholder="Mahmoud Solaiman" />
        </div>
        <div className="field-container">
          <label className="input-label" htmlFor="email-input">Email Address*</label>
          <input required type="email" id="email-input" className="input-field" placeholder="mahmoudsolaiman69@gmail.com" />
        </div>
        <div className="field-container">
          <label className="input-label" htmlFor="github-input">GitHub Username*</label>
          <input required type="text" id="github-input" className="input-field" placeholder="@yourusername" />
        </div>
        <button class="generate-btn">Generate My Ticket</button>
      </div>
    </div>
  );
}