import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import MainPage from './components/mainPage';
export default class Layout extends Component<{}, {}> {
  render() {
    return (
      <LayoutContainer>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
    <div><MainPage/></div>
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
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
`