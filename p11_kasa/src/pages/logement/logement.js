import React from 'react'
import Carousel from '../../components/Carousel'
import Red from '../../assets/Icons/RedStar.png'
import Grey from '../../assets/Icons/GreyStar.png'
import Collapse from '../../components/Collapse'
import datas from '../../utils/data/datas'
import '../../utils/style/pages/logement.css'

export default class Logement extends React.Component {
  getDatas() {
    return datas.find((data) => data.id === this.props.match.params.id)
  }

  getTagsList() {
    const tagsList = this.getDatas().tags.map((tag) => {
      return tag
    })
    return tagsList
  }

  getEquimentsList() {
    const equipementsList = this.getDatas().equipments.map((equipement) => {
      return equipement
    })
    return equipementsList
  }

  render() {
    const logement = this.getDatas()
    const tagsList = this.getTagsList()
    const equipementsList = this.getEquimentsList()

    return (
      <div>
        <Carousel id={this.props.match.params.id} />

        <article className="containerArticle">
          <div className="titleSection">
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
          </div>

          <div className="hostSection">
            <h3>{logement.host.name}</h3>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="circle"
            />
          </div>

          <div className="tagsList">
            {tagsList.map((tag) => {
              return <li key={tag}>{tag}</li>
            })}
          </div>

          <div className="rateSection">
            <img
              src={logement.rating >= 1 ? Red : Grey}
              alt="étoile rouge"
              className="star"
            />
            <img
              src={logement.rating >= 2 ? Red : Grey}
              alt="étoile rouge"
              className="star"
            />
            <img
              src={logement.rating >= 3 ? Red : Grey}
              alt="étoile rouge"
              className="star"
            />
            <img
              src={logement.rating >= 4 ? Red : Grey}
              alt="étoile grise"
              className="star"
            />
            <img
              src={logement.rating >= 5 ? Red : Grey}
              alt="étoile grise"
              className="star"
            />
          </div>
        </article>

        <div className="dropdownSectionLgt">
          <Collapse
            title="Description"
            content={<p>{logement.description}</p>}
          />
          <Collapse
            title="Equipements"
            content={
              <ul>
                {equipementsList.map((equipement) => {
                  return <li key={equipement}>{equipement}</li>
                })}
              </ul>
            }
          />
        </div>
      </div>
    )
  }
}
