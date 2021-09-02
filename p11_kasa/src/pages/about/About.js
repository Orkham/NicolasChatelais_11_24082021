import React from 'react';
import AboutPageBanner from '../../components/AboutBanner'
import Dropdown from '../../components/Dropdown';
import styled from 'styled-components';

const AboutSection = styled.div`
    display: flex; 
    flex-direction : column;
    
    `

export default class About extends React.Component{
    render(){
        return(
            <AboutSection>
                <AboutPageBanner />
                <Dropdown />
            </AboutSection>
        )
    }
}