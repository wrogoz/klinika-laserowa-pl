import React from "react";
import store from '../store/store';
import Header from "./header";
import styled from "styled-components";
import TitleSectionComponent from './cuteraPageComponents/TitleSection';
import MainSection from './cuteraPageComponents/mainSection';
import HowItWorks from './cuteraPageComponents/howItWorks';
import InvervetionCourse from './cuteraPageComponents/IntervetionCourse';
import { observer, inject } from "mobx-react";
import BurgerNavigation from './globalComponents/burgerNavigation';


@inject("store")
@observer
export default class CuteraV extends React.Component<any, any> {
  render() {
    return (
      <MainContainer>
        <Header pageName="Cutera Excel V" />
        {store.BurgerNavVisible?<BurgerNavigation/>:null}
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


