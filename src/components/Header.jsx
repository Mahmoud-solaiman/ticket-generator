import './Header.css'
import Logo from '../assets/images/logo-full.svg';

export function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="App logo" />
    </header>
  );
}