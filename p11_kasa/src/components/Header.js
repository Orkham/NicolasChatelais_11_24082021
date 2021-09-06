import React from 'react'
import styled from 'styled-components';
import Title from './Title';
import Nav from './Nav';

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  margin: 57px auto;
  @media screen and (max-width: 820px) {
    margin: 20px auto;
  }
`
export default class Header extends React.Component {
  
  render(){
    return (
      <HeaderSection>
        <Title />
        <Nav />
      </HeaderSection>
    );
  }
}
