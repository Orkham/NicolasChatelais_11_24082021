import React from 'react';
import styled from 'styled-components';
import img from '../assets/Img/Logement.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const CarouselSection = styled.div`
    width: 90%;
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .chevron{
        color: white;
        position: absolute;
        top: 50%;
        font-size: 79px;
        &:hover{
            cursor: pointer;
        }
    }
    .chevron-left{
        left: 2%;
        
    }
    .chevron-right{
        right: 2%;
    }
    img{
        object-fit: cover;
        width:100%;
        border-radius: 25px;
        height: 415px;
    }
`

export default class Carousel extends React.Component{
    render(){
        return(
            <CarouselSection>
                <FontAwesomeIcon icon={faChevronLeft} className='chevron chevron-left' />
                <img src={img} alt="logement" />
                <FontAwesomeIcon icon={faChevronRight} className='chevron chevron-right' />
            </CarouselSection>
        )
    }
}

