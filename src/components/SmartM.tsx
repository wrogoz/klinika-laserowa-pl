import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import styled from "styled-components";
import TitleSectionComponent from './SmartMPageComponents/SmartMTitleSection';
import SmartMainSection from './SmartMPageComponents/smartMainSection';
import SmartOverall from './SmartMPageComponents/smartOverall';
import SmartMAdventages from './SmartMPageComponents/smartMAdventages';
import Co2HowItWorks from './co2pageComponents/co2HowItWorks';
import BurgerNavigation from "./globalComponents/burgerNavigation";
import SmartMSummary from './SmartMPageComponents/smartMSummary';
import womenFace from '../images/co2imgs/womenBottom.jpg'

import { ChangingWindowWidth } from "../redux/actions/actions";
interface SmartMProps{
  BurgerNavVisible:boolean
  dispatch:any
  WindowWidth:number | string
}

class SmartM extends React.Component<SmartMProps, {}> {
  windowResize = ()=>{
    this.props.dispatch(ChangingWindowWidth(window.innerWidth))

  }
  render() {

    return (
      <MainContainer>
        {this.props.BurgerNavVisible?<BurgerNavigation/>:null}
        <Header pageName="laser smart m evlt" />
        <TitleSectionComponent/>
        <SmartOverall/>
        <SmartMainSection/>
        <SmartMAdventages/>

        <SmartMSummary/>

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
  `


  const mapStateToProps = (state: { BurgerNavVisible:boolean, WindowWidth:number | string }) => {
    return {
      BurgerNavVisible: state.BurgerNavVisible,
      WindowWidth:state.WindowWidth
    };
  };

export default connect(mapStateToProps)(SmartM);
