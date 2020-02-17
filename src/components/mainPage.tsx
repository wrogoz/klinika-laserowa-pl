import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import BoxWithWomenFace from "./mainpageComponents/BoxWithWomenFace";
import WelcomeText from "./mainpageComponents/WelcomeText";
import LaserPresentation from "./mainpageComponents/LaserPresentation";
import LaserPresentationDesktop from './mainpageComponents/laserPresentationDesktop';
import BurgerNavigation from './globalComponents/burgerNavigation';
import { ChangingWindowWidth } from "../redux/actions/actions";
import SelectIntervetion from './mainpageComponents/selectIntervetion';
import SelectLaser from './mainpageComponents/selectLaser';

interface MainPageProps{
  BurgerNavVisible:boolean
  dispatch:any
  WindowWidth:string | number
}

class MainPage extends React.Component<MainPageProps, {}> {

  windowResize = ()=>{
    this.props.dispatch(ChangingWindowWidth(window.innerWidth))

  }

  render() {

    return (
      <MainContainer>
        {this.props.BurgerNavVisible?<BurgerNavigation/>:null}
        <Header pageName="strona główna" />
        <BoxWithWomenFace />
        <WelcomeText />
        <SelectIntervetion/>
        {this.props.WindowWidth>1240?<LaserPresentationDesktop />:
        <LaserPresentation/>}


        <Footer/>

        {window.addEventListener('resize',this.windowResize)}
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
        @media(min-width:1000px){

          max-width: 430px;
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

const mapStateToProps = (state: { BurgerNavVisible:boolean,WindowWidth:number | string }) => {
  return {
    BurgerNavVisible: state.BurgerNavVisible,
    WindowWidth:state.WindowWidth
  };
};

export default connect(mapStateToProps)(MainPage);
