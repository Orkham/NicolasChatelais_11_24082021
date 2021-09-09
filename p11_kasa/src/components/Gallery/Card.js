import React from 'react'
import '../../utils/style/components/Gallery/card.css'

export default class GalleryCard extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.cover} alt={this.props.title} />
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

