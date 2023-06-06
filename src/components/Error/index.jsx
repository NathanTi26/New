import { Link } from 'react-router-dom'
import './style.css'

function Error() {
  return (
    <main>
      <div className="error-container">
        <p className="error-404">404</p>
        <p className="error-message">
          Oups ! La page que vous demandez n'existe pas.
        </p>
        <Link className="link-home" to="/">
          Retourner sur la page d accueil
        </Link>
      </div>
    </main>
  )
}

export default Error
