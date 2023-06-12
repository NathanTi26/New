import logo from '../../assets/img/logo-footer.png'
import './style.scss'

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} className="logo-footer" alt="Logo Kasa" />
      <p className="legal-footer">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
