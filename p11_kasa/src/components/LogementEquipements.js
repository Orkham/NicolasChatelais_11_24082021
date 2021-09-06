import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  /*faChevronDown,*/ faChevronUp,
} from '@fortawesome/free-solid-svg-icons'

const Dropdown = styled.div`
  position: relative;
`

const DropdownItem = styled.div`
  background: #ff6060;
  color: white;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 142.6%;
  border-radius: 5px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 18px;
  margin-bottom: 32px;
  position: inherit;
  z-index: 1;
  .chevron {
    color: white;
  }
`

const DropdownContent = styled.div`
  background: #f6f6f6;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 142.6%;
  color: #ff6060;
  border-radius: 10px;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 6px 18px;
  height: 249px;
  margin-top: -36px;
  z-index: 0;
  position: inherit;
  padding-top: 30px;
  p {
    margin: 0;
  }
`

export default class LogementEquipements extends React.Component {
  render() {
    return (
      <Dropdown>
        <DropdownItem>
          Equipements
          <FontAwesomeIcon icon={faChevronUp} className="chevron" />
        </DropdownItem>
        <DropdownContent>
          <p>Climatisation</p>
          <p>Wi-Fi</p>
          <p>Cuisine</p>
          <p>Espace de travail</p>
          <p>Fer à repasser</p>
          <p>Sèche-cheveux</p>
          <p>Cintres</p>
        </DropdownContent>
      </Dropdown>
    )
  }
}
