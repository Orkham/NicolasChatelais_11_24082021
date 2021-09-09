import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import datas from '../utils/data/datas'
import '../utils/style/components/carousel.css'

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
      <div className="carousel">
        {carouselImg.length > 1 ? (
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="chevron chevron-left"
            onClick={this.previousImg}
          />
        ) : (
          ''
        )}

        <img src={carouselImg[this.indexToDisplay()]} alt="logement" />
        {carouselImg.length > 1 ? (
          <div className="compteur">
            {this.state.index + 1}/{carouselImg.length}
          </div>
        ) : (
          ''
        )}

        {carouselImg.length > 1 ? (
          <FontAwesomeIcon
            icon={faChevronRight}
            className="chevron chevron-right"
            onClick={this.nextImg}
          />
        ) : (
          ''
        )}
      </div>
    )
  }
}
