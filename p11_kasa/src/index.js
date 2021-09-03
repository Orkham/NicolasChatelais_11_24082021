import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Accueil from './pages/accueil/Accueil'
import Logement from './pages/logement/logement';
import Error from './pages/error/Error';
import About from './pages/about/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
`

ReactDOM.render(
  <React.StrictMode>
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
        <Route path="/logement">
          <Logement />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);
