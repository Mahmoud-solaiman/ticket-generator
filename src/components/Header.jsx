import { Link } from 'react-router';
import './Header.css'
import Logo from '../assets/images/logo-full.svg';

export function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="App logo" />
      </Link>
    </header>
  );
}