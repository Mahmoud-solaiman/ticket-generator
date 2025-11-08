import Github from "../../assets/images/icon-github.svg";
import Avatar from "../../assets/images/image-avatar.jpg";

export function TicketInfo() {
  return (
    <div className="guest-info">
      <div className="person-image-container">
        <img src={Avatar} alt="avatar" />
      </div>
      <div className="personal-info">
        <h2 className="guest-name">Jonatan Kristof</h2>
        <div className="github-info">
          <img src={Github} alt="github icon" />
          <span className="guest-github-username">@jonatankristof0101</span>
        </div>
      </div>
    </div>
  );
}