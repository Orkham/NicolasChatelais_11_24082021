import React from 'react'
import styled from 'styled-components';
import img from '../assets/Img/Banner.png'

const Banner = styled.div`
  h1 {
    max-width: 90%;
    margin: 57px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: url(${img});
    background-size: cover;
    border-radius: 25px;
    width: 100%;
    height: 223px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 142.6%;
    .smallDisplay {
      display: none;
    }
    @media screen and (max-width: 820px) {
      font-size: 24px;
      line-height: 100%;
      border-radius: 10px;
      background-position: 50%;
      height: 111px;
      display: flex;
      justify-content: flex-start;
      padding-left: 16px;
      margin: 20px auto;
      .smallDisplay {
        display: flex;
      }
    }
  }
`

export default class HomePageTitle extends React.Component {
  render() {
    return (
      <Banner>
        <h1>
          Chez vous, <br className="smallDisplay" />
          partout et ailleurs
        </h1>
      </Banner>
    )
  }
}