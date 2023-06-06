import styles from './style.module.css'
import { useState } from 'react'
import arrow from '../../assets/img/arrow.png'

function Collapse({ collapseTitle, collapseDesc }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.collapse_container}>
      <div
        onClick={handleClick}
        className={
          isOpen
            ? `${styles.collapse_title_open}`
            : `${styles.collapse_title_closed}`
        }
      >
        {collapseTitle}
        <img
          src={arrow}
          className={isOpen ? `${styles.arrow_up}` : `${styles.arrow_down}`}
          alt="Afficher"
        />
      </div>
      {isOpen && (
        <div className={styles.collapse_description}>
          <div>{collapseDesc}</div>
        </div>
      )}
    </div>
  )
}

export default Collapse
