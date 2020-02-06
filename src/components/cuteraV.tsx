import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import styled from "styled-components";
import TitleSectionComponent from './cuteraPageComponents/TitleSection';
import MainSection from './cuteraPageComponents/mainSection';
import HowItWorks from './cuteraPageComponents/howItWorks';
import InvervetionCourse from './cuteraPageComponents/IntervetionCourse';
import BurgerNavigation from "./globalComponents/burgerNavigation";

interface CuteraVProps{
  BurgerNavVisible:boolean
}

class CuteraV extends React.Component<CuteraVProps, {}> {
  render() {
    return (
      <MainContainer>
        {this.props.BurgerNavVisible?<BurgerNavigation/>:null}
        <Header pageName="Cutera Excel V" />
        <TitleSectionComponent/>
        <MainSection/>
        <HowItWorks/>
        <InvervetionCourse/>
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

  const mapStateToProps = (state: { BurgerNavVisible:boolean }) => {
    return {
      BurgerNavVisible: state.BurgerNavVisible
    };
  };

export default connect(mapStateToProps)(CuteraV);
