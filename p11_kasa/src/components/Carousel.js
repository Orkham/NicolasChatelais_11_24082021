import React from 'react';
import styled from 'styled-components';
import img from '../assets/Img/Logement.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import datas from '../utils/data/datas'

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
  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  getDatas() {
    return datas.find((data) => data.id === this.props.id)
  }

  indexToDisplay = () => {
    return this.state.index
  }
  nextImg = () => {
    this.state.index < this.getDatas().pictures.length - 1
      ? this.setState({ index: this.state.index + 1 })
      : this.setState({ index: 0 })
  }

  previousImg = () => {
    this.state.index > 0
      ? this.setState({ index: this.state.index - 1 })
      : this.setState({ index: this.getDatas().pictures.length - 1 })
  }

  render() {
    const carouselImg = this.getDatas().pictures

    return (
      <CarouselSection>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="chevron chevron-left"
          onClick={this.previousImg}
        />
        <img src={carouselImg[this.indexToDisplay()]} alt="logement" />
        <div className="compteur">
          {this.state.index + 1}/{carouselImg.length}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="chevron chevron-right"
          onClick={this.nextImg}
        />
      </CarouselSection>
    )
  }
}

