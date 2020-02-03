import React, { Component } from "react";

import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import MainPage from './components/mainPage';
export default class Layout extends Component<{}, {}> {
  render() {
    return (
      <LayoutContainer>

        <Router>
          <Switch>
            <Route exact path="/">
              <MainPage/>
            </Route>
            <Route exact path="/second">
              <div>second page</div>
            </Route>
            <Route exact path="/third">
              <div>third page</div>
            </Route>
          </Switch>
        </Router>
        <Footer />
      </LayoutContainer>
    );
  }
}

const LayoutContainer = styled.div`

    width:100vw;
    min-width:270px;

    display:flex;
    flex-direction:column;
    align-items:center;

`