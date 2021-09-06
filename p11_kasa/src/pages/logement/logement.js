import React from 'react';
import styled from 'styled-components';
import img from '../../assets/Img/Host.png'
import Carousel from '../../components/Carousel';
import Red from '../../assets/Icons/RedStar.png'
import Grey from '../../assets/Icons/GreyStar.png'
//import LogementDescription from '../../components/LogementDescription';
import Collapse from '../../components/Collapse';
//import LogementEquipements from '../../components/LogementEquipements';

const TitleSection = styled.div`
    width: 50%;
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
    width: 50%;
    margin: auto;
    display: flex; 
    justify-content: flex-end;
    align-items: center;
    h3{
        color:#FF6060;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 142.6%;
        margin-right: 10px;
        width: 100px;
    }
    .circle{
        width:64px;
        height: 64px;
    }
`
const RateSection = styled.div`
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: flex-end;
    .star{
        margin-left:10px;
    }
`

const TagsList = styled.section`
    width: 50%;
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
    position: relative;
    &>div{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: end;
        &>div{
            margin:0;
            &:nth-child(2){
                height:249px;
                ul{
                    display: flex;
                    flex-direction: column;
                    padding: 0;
                    li{
                    list-style-type: none;
                    }
                }
            }
        }
    }
    .collapseContainer:first-child{
            align-items: start;
            
        }
`
const ContainerArticle = styled.article`
    display: flex;
    width: 90%;
    margin: auto;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 24px;
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

                    <TagsList>
                        <div>Cozy</div>
                        <div>Canal</div>
                        <div>Paris</div>
                    </TagsList>

                    <RateSection>
                        <img src={Red} alt="étoile rouge" className='star' />
                        <img src={Red} alt="étoile rouge" className='star'/>
                        <img src={Red} alt="étoile rouge" className='star'/>
                        <img src={Grey} alt="étoile grise" className='star'/>
                        <img src={Grey} alt="étoile grise" className='star'/>
                    </RateSection>

                    

                </ContainerArticle>

                <DropdownSection>
                    <Collapse title ="Description" content ={
                        <p>
                            Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1 station de la gare de l'est (7 minutes à pied).
                        </p>
                    }/>
                    <Collapse title ="Equipements" content ={
                        <ul>
                            <li>Climatisation</li>
                            <li>Wi-Fi</li>
                            <li>Cuisine</li>
                            <li>Espace de travail</li>
                            <li>Fer à repasser</li>
                            <li>Sèche-cheveux</li>
                            <li>Cintres</li>
                        </ul>
                        
                    } />
                </DropdownSection>
            </div>
        )
    }
}

