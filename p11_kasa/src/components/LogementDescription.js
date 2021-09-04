import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { /*faChevronDown,*/ faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Dropdown = styled.div`
    position: relative;
    
`

const DropdownItem = styled.div`
    background: #FF6060;
    color: white;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 142.6%;
    border-radius: 5px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 18px;
    margin-bottom: 32px;
    position: inherit;
    z-index:1;
    .chevron{
        color: white;
    }
`

const DropdownContent = styled.div`
    background: #F6F6F6;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 142.6%;
    color: #FF6060;
    border-radius: 5px;
    width: 90%;
    display: flex;
    padding: 6px 18px;
    min-height: 250px;
    margin-top: -36px;
    position: inherit;
    z-index:0;
    max-height:295px;
    p{
        width: 100%;
        overflow: scroll;
        overflow-x: hidden;
    }
    
`

export default class LogementDescription extends React.Component {
    render(){
        return(
            <Dropdown>
                <DropdownItem>Description
                    <FontAwesomeIcon icon={faChevronUp} className='chevron' />
                </DropdownItem>
                <DropdownContent>
                    <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1 station de la gare de l'est (7 minutes à pied).</p>
                </DropdownContent>
            </Dropdown>
        );
    }
}