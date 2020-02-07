import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import BoxWithWomenFace from "./mainpageComponents/BoxWithWomenFace";
import WelcomeText from "./mainpageComponents/WelcomeText";
import LaserPresentation from "./mainpageComponents/LaserPresentation";
import BurgerNavigation from './globalComponents/burgerNavigation';

interface MainPageProps{
  BurgerNavVisible:boolean
}

class MainPage extends React.Component<MainPageProps, {}> {
  render() {

    return (
      <MainContainer>
        {this.props.BurgerNavVisible?<BurgerNavigation/>:null}
        <Header pageName="strona główna" />
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
        @media(min-width:700px){
          max-width:300px;
        }
        }
  }
  .row {
    width: 100%;
    .col {
      width: 100%;
      padding: 0;
      margin: 0;
    }
  }
`;

const mapStateToProps = (state: { BurgerNavVisible:boolean }) => {
  return {
    BurgerNavVisible: state.BurgerNavVisible
  };
};

export default connect(mapStateToProps)(MainPage);
