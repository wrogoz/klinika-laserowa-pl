import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import styled from "styled-components";
import TitleSectionComponent from './cuteraPageComponents/TitleSection';
import MainSection from './cuteraPageComponents/mainSection';
import HowItWorks from './cuteraPageComponents/howItWorks';
import InvervetionCourse from './cuteraPageComponents/IntervetionCourse';
class CuteraV extends React.Component<{}, {}> {
  render() {
    return (
      <MainContainer>
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

const mapStateToProps = (state: { randomData: string }) => {
  return {
    randomData: state.randomData
  };
};

export default connect(mapStateToProps)(CuteraV);
