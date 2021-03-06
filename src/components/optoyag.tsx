import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import styled from "styled-components";
import TitleSectionComponent from './optoyagPageComponent/optoyagTitleSection';
import OptoyagMainSection from './optoyagPageComponent/optoyagMainSection';

import OptoyagAdventages from './optoyagPageComponent/optoyaAdventages';

import BurgerNavigation from "./globalComponents/burgerNavigation";
import OptoyaSummary from './optoyagPageComponent/optoyagSummary';


import { ChangingWindowWidth } from "../redux/actions/actions";
interface OptoYagProps{
  BurgerNavVisible:boolean
  dispatch:any
  WindowWidth:number | string
}

class OptoYag extends React.Component<OptoYagProps, {}> {

  componentDidMount(){
    window.scroll(0,0)
  }

  windowResize = ()=>{
    this.props.dispatch(ChangingWindowWidth(window.innerWidth))

  }
  render() {

    return (
      <MainContainer>
        {this.props.BurgerNavVisible?<BurgerNavigation/>:null}
        <Header pageName="laser smart m evlt" />
        <TitleSectionComponent/>
        <OptoyagMainSection/>
        <OptoyagAdventages/>

        <OptoyaSummary/>

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
