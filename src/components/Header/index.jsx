import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import './style.css'

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="logo" alt="Logo" />
      </Link>
      <nav className="nav-bar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
