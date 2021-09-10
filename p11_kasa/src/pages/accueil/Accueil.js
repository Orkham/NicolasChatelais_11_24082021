import React from 'react'
import GalleryContainer from '../../components/Gallery/GalleryBody'
import Banner from '../../components/Banner'

export default class Accueil extends React.Component {
  render() {
    return (
      <div>
        <Banner
          title={
            <h1>
              Chez vous, <br className="smallDisplay" />
              partout et ailleurs
            </h1>
          }
          img="/Banner.png"
        />
        <GalleryContainer />
      </div>
    )
  }
}
