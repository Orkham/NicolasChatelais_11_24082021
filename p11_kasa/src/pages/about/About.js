import React from 'react';
import AboutPageBanner from '../../components/AboutBanner'
import styled from 'styled-components'
import Collapse from '../../components/Collapse'

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 820px) {
    &>div: nth-child(2) {
      & > div {
        width: 90%;
        margin: auto;
      }
    }
  }
`

export default class About extends React.Component {
  render() {
    return (
      <AboutSection>
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
      </AboutSection>
    )
  }
}