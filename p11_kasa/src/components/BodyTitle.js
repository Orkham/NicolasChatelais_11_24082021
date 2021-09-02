import React from 'react'
import styled from 'styled-components';
import img from '../assets/Img/Banner.png'

const Banner = styled.div`
    h1{
        max-width:90%;
        margin: 57px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;
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
    }   
`

export default class HomePageTitle extends React.Component{
    render(){
        return(
            <Banner>
                <h1>Chez vous, partout et ailleurs</h1>
            </Banner>
        )
    }
}