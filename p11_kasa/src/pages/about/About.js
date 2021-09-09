import React from 'react';
import AboutPageBanner from '../../components/AboutBanner'
import Collapse from '../../components/Collapse'
import '../../utils/style/pages/about.css'

export default class About extends React.Component {
  render() {
    return (
      <div className="aboutSection">
        <AboutPageBanner />
        <div>
          <Collapse
            title="Fiabilité"
            content={
              <p>
                "La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme."
              </p>
            }
          />
          <Collapse
            title="Respect"
            content={
              <p>
                "La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme."
              </p>
            }
          />
          <Collapse
            title="Service"
            content={
              <p>
                "La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme."
              </p>
            }
          />
          <Collapse
            title="Responsabilité"
            content={
              <p>
                "La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme."
              </p>
            }
          />
        </div>
      </div>
    )
  }
}