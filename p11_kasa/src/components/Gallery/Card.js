import React from 'react'
import styled from 'styled-components';
//import datas from '../../utils/data/datas';


const Card = styled.div`
  border-radius: 10px;
  width: 340px;
  height: 340px;
  margin: 56px;
  display: flex;
  align-items: flex-end;
  position: relative;
  img {
    width: 340px;
    height: 340px;
    border-radius: 10px;
    object-fit: cover;
  }
  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    width: 30%;
    margin: 20px;
    color: #ffffff;
    position: absolute;
    bottom: 0;
  }
  @media screen and (max-width: 820px) {
    margin: 10px auto;
    width: 100%;
    img {
      width: 100%;
    }
  }
`

export default class GalleryCard extends React.Component{
    
    render(){
        return(
            <Card>
                <img src={this.props.cover} alt={this.props.title} />
                <h2>{this.props.title}</h2>
            </Card>
            
        )
    }
}

