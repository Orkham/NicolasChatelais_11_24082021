import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import '../utils/style/components/collapse.css'

export default class Collapse extends React.Component {
  constructor(props) {
    super(props)
    this.state = { display: true }
  }

  toggleDisplay = () => {
    this.setState((state) => ({
      display: !state.display,
    }))
  }
  render() {
    return (
      <div className="collapseContainer container">
        <div className="dropdownItem">
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
        </div>

        {!this.state.display ? (
          <div className="dropdownContent" onClick={this.toggleDisplay}>
            {this.props.content}
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}
