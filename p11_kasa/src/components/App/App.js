import React from 'react'
import Header from '../Header'
import Accueil from '../../pages/accueil/Accueil'
import Logement from '../../pages/logement/logement'
import Error from '../../pages/error/Error'
import About from '../../pages/about/About'
import Footer from '../Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
`

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route
            path="/logement/:id"
            render={(props) => <Logement {...props} />}
          ></Route>
          <Route>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    )
  }
}
