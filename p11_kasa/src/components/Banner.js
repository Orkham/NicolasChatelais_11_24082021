import React from 'react'
import '../utils/style/components/bodyTitle.css'

export default class Banner extends React.Component {
  render() {
    return (
      <div
        className="titleBanner"
        style={{ backgroundImage: `url(${this.props.img})` }}
      >
        {this.props.title}
      </div>
    )
  }
}
