import Github from "../../assets/images/icon-github.svg";

export function TicketInfo({ nameInput, githubInput, image }) {
  return (
    <div className="guest-info">
      <div className="person-image-container">
        <img src={image} alt="avatar" />
      </div>
      <div className="personal-info">
        <h2 className="guest-name">{nameInput}</h2>
        <div className="github-info">
          <img src={Github} alt="github icon" />
          <span className="guest-github-username">{githubInput}</span>
        </div>
      </div>
    </div>
  );
}