import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import styled from "styled-components";
import TitleSectionComponent from './cuteraPageComponents/TitleSection';
import MainSection from './cuteraPageComponents/mainSection';
import HowItWorks from './cuteraPageComponents/howItWorks';
import InvervetionCourse from './cuteraPageComponents/IntervetionCourse';
import BurgerNavigation from "./globalComponents/burgerNavigation";
import SignIn from './cuteraPageComponents/signIn';
import { ChangingWindowWidth } from "../redux/actions/actions";
interface CuteraVProps{
  BurgerNavVisible:boolean
  SignInVisible:boolean
  dispatch:any
}

class CuteraV extends React.Component<CuteraVProps, {}> {
  windowResize = ()=>{
    this.props.dispatch(ChangingWindowWidth(window.innerWidth))

  }
  render() {
    return (
      <MainContainer>
        {this.props.BurgerNavVisible?<BurgerNavigation/>:null}
        <Header pageName="Cutera Excel V" />
        <TitleSectionComponent/>
        <MainSection/>
        <HowItWorks/>
        <InvervetionCourse/>
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

  const mapStateToProps = (state: { BurgerNavVisible:boolean,SignInVisible:boolean,WindowWidth:number }) => {
    return {
      BurgerNavVisible: state.BurgerNavVisible,
      SignInVisible:state.SignInVisible,
      WIndowWidth:state.WindowWidth
    };
  };

export default connect(mapStateToProps)(CuteraV);
