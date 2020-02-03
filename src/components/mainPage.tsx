import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import styled from "styled-components";
import BoxWithWomenFace from "./mainpageComponents/BoxWithWomenFace";
import WelcomeText from "./mainpageComponents/WelcomeText";
import SelectLaserIntervetion from "./mainpageComponents/selectLaserIntervetion";
import LaserPresentation from "./mainpageComponents/LaserPresentation";
class MainPage extends React.Component<{}, {}> {
  render() {
    return (
      <MainContainer>
        <Header pageName="strona główna" />
        <BoxWithWomenFace />
        <WelcomeText />
        <SelectLaserIntervetion />
        <LaserPresentation />
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
        border-bottom: 1px solid #204f9f;
        max-width: 220px;
        padding-bottom: 10px;
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

const mapStateToProps = (state: { randomData: string }) => {
  return {
    randomData: state.randomData
  };
};

export default connect(mapStateToProps)(MainPage);
