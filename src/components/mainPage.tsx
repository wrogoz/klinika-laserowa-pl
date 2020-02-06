import React from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import BoxWithWomenFace from "./mainpageComponents/BoxWithWomenFace";
import WelcomeText from "./mainpageComponents/WelcomeText";
import BurgerNavigation from './globalComponents/burgerNavigation';
import LaserPresentation from "./mainpageComponents/LaserPresentation";
import { observer, inject } from "mobx-react";
import store from '../store/store';
@inject("store")
@observer
export default class MainPage extends React.Component<any, {}> {

  componentDidMount(){
    window.scroll(0,0);
  }

  render() {

    return (
      <MainContainer>

        <Header pageName="strona główna" />
        {store.BurgerNavVisible?<BurgerNavigation/>:null}
        <BoxWithWomenFace />
        <WelcomeText />
        <LaserPresentation />
        <Footer/>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height:100%;

    h2 {
        color: grey;
        text-transform: uppercase;
        font-size: 1em;
        text-align: center;
        min-width: 200px;
        :last-of-type {
        margin: 0 auto 15px auto;
        border-bottom: 1px solid${props=>props.theme.interBlue};
        max-width: 220px;
        padding-bottom: 10px;
        }
  }

`;


