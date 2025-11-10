import Github from "../../assets/images/icon-github.svg";
// import Avatar from "../../assets/images/image-avatar.jpg";

export function TicketInfo({ nameInput, githubInput, image }) {
  return (
    <div className="guest-info">
      <div className="person-image-container">
        <img src={image} alt="avatar" />
      </div>
      <div className="personal-info">
        <h2 className="guest-name">{nameInput.current.value}</h2>
        <div className="github-info">
          <img src={Github} alt="github icon" />
          <span className="guest-github-username">{githubInput.current.value}</span>
        </div>
      </div>
    </div>
  );
}