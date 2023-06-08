import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import aboutData from '../../assets/data/about.json'
import '../../style.css'

function About() {
  return (
    <main>
      <Banner page="about" />
      <section className="collapse">
        {aboutData.map(({ title, description }, index) => (
          <Collapse
            key={`${title}-${index}`}
            collapseTitle={<h2 className="title-about-collapse">{title}</h2>}
            collapseDesc={
              <p className="description-about-collapse">{description}</p>
            }
          />
        ))}
      </section>
    </main>
  )
}

export default About
