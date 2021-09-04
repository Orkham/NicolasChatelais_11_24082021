import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import datas from '../../utils/data/datas';
import GalleryCard from './Card.js'

const GalleryContent = styled.div`
    max-width:90%;
    margin: 57px auto;
    display: flex;
    flex-wrap: wrap;
    background: #F7F7F7;
    border-radius: 25px;
    height: auto;
    justify-content: space-around;
    a{
        text-decoration: none;
    }
    div{
        background: #FF6060;
        border-radius: 10px;
        width: 340px;
        height:340px;
        margin: 56px;
        display: flex; 
        align-items:flex-end;
        h2{
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 142.6%;
            width:30%;
            margin : 20px;
        }
    }
`

export default class GalleryContainer extends React.Component{
    
    render(){
        return(
            <GalleryContent>
                {datas.map((data)=>(
                    <Link to="/logement" key={data.id}>
                        <GalleryCard cover={data.cover} title= {data.title} />
                    </Link>
                ))}
                
            </GalleryContent>
        )
    }
}
