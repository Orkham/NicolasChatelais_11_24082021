import React from 'react';
import styled from 'styled-components';
import img from '../../assets/Img/Host.png'
import Carousel from '../../components/Carousel';
import Red from '../../assets/Icons/RedStar.png'
import Grey from '../../assets/Icons/GreyStar.png'
import LogementDescription from '../../components/LogementDescription';
import LogementEquipements from '../../components/LogementEquipements';

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

const HostSection = styled.div`
    width: 90%;
    margin: auto;
    display: flex; 
    h3{
        color:#FF6060;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 142.6%;
        margin-right: 10px;
    }
    .circle{
        widht:64px;
    }
`
const RateSection = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    .star{
        margin-left:10px;
    }
`

const TagsList = styled.section`
    width: 90%;
    margin: auto;
    display: flex;
    div{
        width:115px;
        margin-right: 10px;
        background: #FF6060;
        border-radius: 10px;
        padding: 3px;
        color: white;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 142.6%;
        display: flex; 
        justify-content: center;
        margin-right: 10px;
        margin-top: 24px;
        margin-bottom: 24px;
    }
`

const DropdownSection = styled.div`
    display: flex;
    width: 90%;
    margin: auto;
    justify-content: space-between;
    &>div:first-child{
        width: 50%;
        align-items: start;
        display: flex;
        flex-direction: column;
    }
    &>div{
        width: 50%;
        align-items: end;
        display: flex;
        flex-direction: column;
    }
`
const ContainerArticle = styled.article`
    
`

export default class Logement extends React.Component{
    render(){
        return(
            <div>
                <Carousel />

                <ContainerArticle>
                    <TitleSection>
                        <h1>Cozy loft on the Canal Saint-Martin</h1>
                        <h2>Paris, Ile-de-France</h2>
                    </TitleSection>

                    <HostSection>
                        <h3>Alexandre Dumas</h3>
                        <img src={img} alt="Alexandre Dumas" className='circle' />
                    </HostSection>

                    <RateSection>
                        <img src={Red} alt="étoile rouge" className='star' />
                        <img src={Red} alt="étoile rouge" className='star'/>
                        <img src={Red} alt="étoile rouge" className='star'/>
                        <img src={Grey} alt="étoile grise" className='star'/>
                        <img src={Grey} alt="étoile grise" className='star'/>
                    </RateSection>

                    <TagsList>
                        <div>Cozy</div>
                        <div>Canal</div>
                        <div>Paris</div>
                    </TagsList>

                </ContainerArticle>

                <DropdownSection>
                    <LogementDescription />
                    <LogementEquipements />
                </DropdownSection>
            </div>
        )
    }
}

