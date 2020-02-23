import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import MainPage from './components/mainPage';
import CuteraV from './components/cuteraV';
import Contact from './components/contact';
import { ThemeProvider } from "styled-components";
import {theme} from './basicStyles/theme'
export default class Layout extends Component<{}, {}> {
  render() {
    return (<
      ThemeProvider theme={theme}>
      <LayoutContainer>

        <Router>
          <Switch>
            <Route exact path="/">
              <MainPage/>
            </Route>
            <Route exact path="/cuteraexcelV">
              <CuteraV/>
            </Route>
            <Route exact path="/lasotronix">
              <div>lasotronix page</div>
            </Route>
            <Route exact path="/laserco2">
              <div>laser co2 page</div>
            </Route>
            <Route exact path="/optoslt">
              <div>optoslt page</div>
            </Route>
            <Route exact path="/kontakt">
              <Contact/>
            </Route>
          </Switch>
        </Router>

      </LayoutContainer>
       </ThemeProvider>
    );
  }
}

const LayoutContainer = styled.div`

    width:100%;
    min-width:270px;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family:'Roboto', sans-serif;
`