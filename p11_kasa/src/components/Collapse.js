import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
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
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 6px 18px;
  margin-bottom: 32px;
  z-index: 1;
  position: inherit;
  .chevron {
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 820px) {
    width: 90%;
    font-size: 13px;
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
  border-radius: 5px;
  width: 80%;
  display: flex;
  margin: -36px auto 31px;
  padding: 6px 18px;
  position: inherit;
  z-index: 0;
  @media screen and (max-width: 820px) {
    width: 90%;
    font-size: 12px;
  }
`

export default class Collapse extends React.Component {
  constructor(props) {
    super(props)
    this.state = { display: true }
  }

  log = () => {
    console.log(this.state)
  }
  toggleDisplay = () => {
    this.setState((state) => ({
      display: !state.display,
    }))
  }
  render() {
    return (
      <Container className="collapseContainer">
        <DropdownItem>
          {this.props.title}
          {!this.state.display ? (
            <FontAwesomeIcon
              icon={faChevronUp}
              className="chevron"
              onClick={this.toggleDisplay}
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              className="chevron"
              onClick={this.toggleDisplay}
            />
          )}
        </DropdownItem>

        {!this.state.display ? (
          <DropdownContent>{this.props.content}</DropdownContent>
        ) : (
          ''
        )}
      </Container>
    )
  }
}
