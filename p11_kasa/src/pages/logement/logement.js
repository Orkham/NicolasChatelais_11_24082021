import React from 'react';
import styled from 'styled-components'
import Carousel from '../../components/Carousel'
import Red from '../../assets/Icons/RedStar.png'
import Grey from '../../assets/Icons/GreyStar.png'
import Collapse from '../../components/Collapse'
import datas from '../../utils/data/datas'
import '../../utils/style/pages/logement.css'

const HostSection = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  h3 {
    color: #ff6060;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    margin-right: 10px;
    width: 100px;
  }
  .circle {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  @media screen and (max-width: 820px) {
    width: 50%;
    order: 1;
    position: absolute;
    bottom: 0;
    margin-bottom: -7%;
    right: 0;

    h3 {
      font-size: 12px;
      text-align: right;
      width: 60px;
    }
    .circle {
      width: 32px;
      height: 32px;
    }
  }
`
const RateSection = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  .star {
    margin-left: 10px;
  }
  @media screen and (max-width: 820px) {
    width: 50%;
    justify-content: flex-start;
    margin: 0;
    .star {
      margin-right: 5px;
      margin-left: 0;
      width: 15px;
    }
  }
`

const TagsList = styled.section`
  width: 50%;
  margin: auto;
  display: flex;
  li {
    width: 115px;
    margin-right: 10px;
    background: #ff6060;
    border-radius: 10px;
    padding: 3px;
    color: white;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 142.6%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-top: 24px;
    margin-bottom: 24px;
    text-align: center;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    li {
      width: 84px;
      border-radius: 5px;
      font-size: 10px;
      height: 18px;
      align-items: center;
      margin-top: 12px;
    }
  }
`

const DropdownSection = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  position: relative;
  & > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: end;
    & > div {
      margin: 0;
      &:nth-child(2) {
        height: auto;
        min-height: 249px;
        ul {
          display: flex;
          flex-direction: column;
          padding: 0;
          li {
            list-style-type: none;
          }
        }
      }
    }
  }
  .collapseContainer:first-child {
    align-items: start;
  }
  @media screen and (max-width: 820px) {
    flex-wrap: wrap;
    width: 100%;
    & > div {
      margin-bottom: 24px;
      & > div:nth-child(2) {
        height: auto;
        margin-bottom: 24px;
      }
    }
    .collapseContainer {
      width: 90%;
      margin: auto;
      margin-bottom: 20px;
      align-items: center;
      &:first-child {
        align-items: center;
      }
    }

    & > div > div:nth-child(2) {
      min-height: 150px;
    }
  }
`
const ContainerArticle = styled.article`
  display: flex;
  width: 90%;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 24px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    flex-wrap: nowrap;
    position: relative;
  }
`

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

        <ContainerArticle>
          <div className="titleSection">
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
          </div>

          <HostSection>
            <h3>{logement.host.name}</h3>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="circle"
            />
          </HostSection>

          <TagsList>
            {tagsList.map((tag) => {
              return <li key={tag}>{tag}</li>
            })}
          </TagsList>

          <RateSection>
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
          </RateSection>
        </ContainerArticle>

        <DropdownSection>
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
        </DropdownSection>
      </div>
    )
  }
}

