import React from 'react'
import Title from './Title'
import Nav from './Nav'
import '../utils/style/components/header.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className="headerSection">
        <Title />
        <Nav />
      </div>
    )
  }
}
