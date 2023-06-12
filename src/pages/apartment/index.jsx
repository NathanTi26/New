/*import Collapse from "../../components/collapse";*/
import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import Error from '../../components/Error'
import ApartmentsDatas from '../../assets/data/logements.json'
import React from 'react'
import '../../css/style.scss'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'

function Apartment() {
  const { id } = useParams()
  const data = ApartmentsDatas.find((data) => data.id === id)
  if (!data) {
    return <Error />
  }
  return (
    <main>
      <Slideshow
        pictures={data.pictures}
        picturesLength={data.pictures.length}
      />
      <article className="apartment-details">
        <div className="details-left">
          <h2 className="apartment-title">{data.title}</h2>
          <p className="apartment-location">{data.location}</p>
          <div className="apartment-tags">
            {data.tags.map((tags, index) => (
              <Tags key={`${index}-${tags}`} tag={tags} />
            ))}
          </div>
        </div>
        <div className="details-right">
          <div className="apartment-host">
            <p className="apartment-host-name">{data.host.name}</p>
            <img
              className="apartment-host-picture"
              src={data.host.picture}
              alt={data.host.name}
            />
          </div>
          <Rating rate={data.rating} />
        </div>
      </article>
      <article className="apartment-information">
        <div className="collapse-left">
          <Collapse
            collapseTitle={<h2 className="collapse-title">Description</h2>}
            collapseDesc={<p className="description">{data.description}</p>}
          />
        </div>
        <div className="collapse-right">
          <Collapse
            className="collapse-right"
            collapseTitle={<h2 className="collapse-title">Equipements</h2>}
            collapseDesc={data.equipments.map((equipments, index) => (
              <li key={`${index}-${equipments}`} className="equipments-list">
                {equipments}
              </li>
            ))}
          />
        </div>
      </article>
    </main>
  )
}

export default Apartment
