import React from 'react'
import '../../utils/style/components/Gallery/galleryBody.css'
import { Link } from 'react-router-dom'
import datas from '../../utils/data/datas'
import GalleryCard from './Card.js'

export default class GalleryContainer extends React.Component {
  render() {
    return (
      <div className="galleryContent">
        {datas.map((data) => (
          <Link to={`/logement/${data.id}`} key={data.id}>
            <GalleryCard cover={data.cover} title={data.title} />
          </Link>
        ))}
      </div>
    )
  }
}
