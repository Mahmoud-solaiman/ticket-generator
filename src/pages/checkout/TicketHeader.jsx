import LogoFull from '../../assets/images/logo-full.svg';

export function TicketHeader() {
  return (
    <header className="ticket-header">
      <img src={LogoFull} alt="logo" />
      <p className="conf-info">Jan 31, 2025 / Austin, TX</p>
    </header>
  );
}