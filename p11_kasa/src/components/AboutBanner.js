import React from 'react'
import styled from 'styled-components';
import img from '../assets/Img/AboutBanner.svg'

const Banner = styled.div`
  width: 90%;
  margin: 0 auto 57px;
  img {
    height: 223px;
    width: 100%;
    border-radius: 25px;
    object-fit: cover;
  }

  @media screen and (max-width: 820px) {
    margin: 0 auto 10px;
  }
`
export default class AboutPageBanner extends React.Component {
  render() {
    return (
      <Banner>
        <img src={img} alt="joli décor" />
      </Banner>
    )
  }
}