import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import MainPage from './components/mainPage';
import CuteraV from './components/cuteraV';
import { ThemeProvider } from "styled-components";
import theme from './basicStyles/theme'

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
            <Route exact path="/cutera">
              <CuteraV/>
            </Route>
            <Route exact path="/third">
              <div>third page</div>
            </Route>
          </Switch>
        </Router>

      </LayoutContainer>
       </ThemeProvider>
    );
  }
}

const LayoutContainer = styled.div`

    width:100vw;
    min-width:270px;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family:'Roboto', sans-serif;
`