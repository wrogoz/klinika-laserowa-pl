import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import styled from "styled-components";
import Co2TitleSectionComponent from './co2pageComponents/co2TitleSection';
import EffectOfCo2Laser from './co2pageComponents/effectsOfCo2Laser';
import Co2MainSection from './co2pageComponents/co2mainSection';
import Co2HowItWorks from './co2pageComponents/co2HowItWorks';
import Testimonials from './co2pageComponents/testimonials';
import BurgerNavigation from "./globalComponents/burgerNavigation";
import Contact from './globalComponents/contactComponent';
import SignIn from './globalComponents/signIn';

import { ChangingWindowWidth } from "../redux/actions/actions";
interface CuteraVProps{
  BurgerNavVisible:boolean
  SignInVisible:boolean
  dispatch:any
}

class Co2Ultrafrax extends React.Component<CuteraVProps, {}> {
  windowResize = ()=>{
    this.props.dispatch(ChangingWindowWidth(window.innerWidth))

  }
  render() {
    return (
      <MainContainer>
        {this.props.BurgerNavVisible?<BurgerNavigation/>:null}
        <Header pageName="co2 ultrafrax" />
        <Co2TitleSectionComponent/>
        <Co2MainSection/>
        <Co2HowItWorks/>
        <EffectOfCo2Laser/>

        <SummaryBox>
          <Testimonials/>
          <Contact/>
        </SummaryBox>
        {this.props.SignInVisible?<SignIn/>:null}


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
  const SummaryBox = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;

  `

  const mapStateToProps = (state: { BurgerNavVisible:boolean,SignInVisible:boolean,WindowWidth:number }) => {
    return {
      BurgerNavVisible: state.BurgerNavVisible,
      SignInVisible:state.SignInVisible,
      WIndowWidth:state.WindowWidth
    };
  };

export default connect(mapStateToProps)(Co2Ultrafrax);
