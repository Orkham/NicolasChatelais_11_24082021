import React from 'react';
import styled from 'styled-components';
import img from '../assets/Img/Logement.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const CarouselSection = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .chevron {
    color: white;
    position: absolute;
    top: 40%;
    font-size: 79px;
    &:hover {
      cursor: pointer;
    }
  }
  .chevron-left {
    left: 2%;
  }
  .chevron-right {
    right: 2%;
  }
  img {
    object-fit: cover;
    width: 100%;
    border-radius: 25px;
    height: 415px;
  }
  .compteur {
    color: white;
    margin-top: -33px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
  }
  @media screen and (max-width: 820px) {
    img {
      height: 255px;
      border-radius: 10px;
    }
    .chevron {
      font-size: 30px;
      top: 45%;
    }
  }
`

export default class Carousel extends React.Component {
  render() {
    return (
      <CarouselSection>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="chevron chevron-left"
        />
        <img src={img} alt="logement" />
        <div className="compteur">1/4</div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="chevron chevron-right"
        />
      </CarouselSection>
    )
  }
}

