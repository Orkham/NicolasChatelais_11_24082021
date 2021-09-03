import React from 'react'
import styled from 'styled-components';
import * as data from './../../utils/data/datas.json';

const Card = styled.div`
    border-radius: 10px;
    width: 340px;
    height:340px;
    margin: 56px;
    display: flex; 
    align-items:flex-end;
    img{
        width: 340px;
        height:340px;
        border-radius: 10px;
        object-fit: cover;
    }
    h2{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 142.6%;
        color: #FFFFFF;
        width:30%;
        margin : 20px;
    }
`

export default class GalleryCard extends React.Component{
    render(){
        return(
            <Card>
                <img src={data[0].cover} alt={data[0].title} />
                <h2>Titre de la location</h2>
            </Card> 
        )
    }
}