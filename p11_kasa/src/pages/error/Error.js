import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorSection = styled.div`
  color: #ff6060;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 288px;
    line-height: 142.6%;
    margin: 0;
  }
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 142.6%;
  }
  a {
    color: #ff6060;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    margin-bottom: 64px;
  }
  @media screen and (max-width: 820px) {
    width: 80%;
    margin: 10% auto;
    h2 {
      font-size: 96px;
      margin-top: 25%;
    }
    p {
      font-size: 18px;
      width: 80%;
      display: flex;
      text-align: center;
      margin-bottom: 130px;
    }
    a {
      font-size: 14px;
    }
  }
`

export default class Error extends React.Component {
  render() {
    return (
      <ErrorSection>
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </ErrorSection>
    )
  }
}