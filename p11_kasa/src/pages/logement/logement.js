import React from 'react';
import styled from 'styled-components';
import Carousel from '../../components/Carousel';

const TitleSection = styled.div`
width: 90%;
    margin: auto;
    color: #FF6060;
    font-family: Montserrat;
    font-style: normal;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    h1{
        font-weight: 500;
        font-size: 36px;
        line-height: 142.6%;
        margin-bottom: 0;
    }
    h2{
        margin-top: 0;
        font-weight: 500;
        font-size: 18px;
        line-height: 142.6%;
    }
`

export default class Logement extends React.Component{
    render(){
        return(
            <div>
                <Carousel />
                    
                <TitleSection>
                        <h1>Cozy loft on the Canal Saint-Martin</h1>
                        <h2>Paris, Ile-de-France</h2>
                </TitleSection>
            </div>
        )
    }
}

