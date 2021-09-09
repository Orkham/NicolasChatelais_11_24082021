import React from 'react'
import '../utils/style/components/aboutBanner.css'
import img from '../assets/Img/AboutBanner.svg'

export default class AboutPageBanner extends React.Component {
  render() {
    return (
      <div className="banner">
        <img src={img} alt="joli décor" />
      </div>
    )
  }
}