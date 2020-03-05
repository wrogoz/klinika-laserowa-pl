import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import styled from "styled-components";
import TitleSectionComponent from './optoyagPageComponent/optoyagTitleSection';
import SmartMainSection from './SmartMPageComponents/smartMainSection';
import SmartOverall from './SmartMPageComponents/smartOverall';
import SmartMAdventages from './SmartMPageComponents/smartMAdventages';

import BurgerNavigation from "./globalComponents/burgerNavigation";
import SmartMSummary from './SmartMPageComponents/smartMSummary';


import { ChangingWindowWidth } from "../redux/actions/actions";
interface OptoYagProps{
  BurgerNavVisible:boolean
  dispatch:any
  WindowWidth:number | string
}

class OptoYag extends React.Component<OptoYagProps, {}> {
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

export default connect(mapStateToProps)(OptoYag);
