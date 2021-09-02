import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const DropdownItem = styled.div`
    background: #FF6060;
    color: white;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 142.6%;
    border-radius: 5px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 6px 18px;
    margin-bottom: 32px;
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
    width: 80%;
    display: flex;
    margin: -36px auto 31px;
    padding: 6px 18px;
    `

export default class Dropdown extends React.Component {
    render(){
        return(
            <div>
                <DropdownItem>Fiabilité
                    <FontAwesomeIcon icon={faChevronDown} className='chevron' />
                </DropdownItem>
                <DropdownItem>Respect
                    <FontAwesomeIcon icon={faChevronUp} className='chevron' />
                </DropdownItem>
                <DropdownContent>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </DropdownContent>
                <DropdownItem>Service
                    <FontAwesomeIcon icon={faChevronDown} className='chevron' />
                </DropdownItem>
                <DropdownItem>Responsabilité
                    <FontAwesomeIcon icon={faChevronDown} className='chevron' />
                </DropdownItem>
            </div>
        );
    }
}