import sliderhome from '../../assets/img/slide-home.png'
import sliderabout from '../../assets/img/slide-about.png'
import './style.css'

function Banner(props) {
  if (props.page === 'home') {
    return (
      <section className="banner">
        <div className="banner-frame">
          <img
            src={sliderhome}
            className="banner-img"
            alt="Bannière"
            title="Chez vous, partout et ailleurs"
          />
        </div>
        <div className="banner-frame">
          <p className="banner-title">Chez vous, partout et ailleurs</p>
        </div>
      </section>
    )
  } else if (props.page === 'about') {
    return (
      <section className="banner-about">
        <div className="banner-frame-about">
          <img
            src={sliderabout}
            className="banner-img-about"
            alt="Bannière page about"
            title="Montagnes"
          />
        </div>
      </section>
    )
  }
}

export default Banner
