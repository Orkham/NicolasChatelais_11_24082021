import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import datas from '../../utils/data/datas';
import GalleryCard from './Card.js'

const GalleryContent = styled.div`
  max-width: 90%;
  margin: 57px auto;
  display: flex;
  flex-wrap: wrap;
  background: #f7f7f7;
  border-radius: 25px;
  height: auto;
  justify-content: space-around;
  @media screen and (max-width: 820px) {
    margin: auto;
    background: #ffffff;
    max-width: 92%;
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
