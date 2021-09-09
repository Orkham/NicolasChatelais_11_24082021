import React from 'react'
import { Link } from 'react-router-dom';
import '../utils/style/components/nav.css'

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navSection">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    )
  }
}