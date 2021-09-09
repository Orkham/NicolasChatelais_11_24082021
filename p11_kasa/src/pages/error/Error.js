import React from 'react';
import { Link } from 'react-router-dom';
import '../../utils/style/pages/error.css'

export default class Error extends React.Component {
  render() {
    return (
      <div className="errorSection">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    )
  }
}