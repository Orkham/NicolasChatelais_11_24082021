import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavSection = styled.nav`

    display:flex;
    a{
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 142.6%;
        margin-left: 57px;
        color: #FF6060;
        text-decoration:none;
        &:hover{
            text-decoration-line: underline;
        }
    }
`

export default class Nav extends React.Component {
    render(){
      return (
        <NavSection>
            <Link to="/">Accueil</Link>
            <Link to="/about">A Propos</Link>
        </NavSection>
      );
    }
  }