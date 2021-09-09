import React from 'react'
import '../utils/style/components/bodyTitle.css'

export default class HomePageTitle extends React.Component {
  render() {
    return (
      <div className="titleBanner">
        <h1>
          Chez vous, <br className="smallDisplay" />
          partout et ailleurs
        </h1>
      </div>
    )
  }
}