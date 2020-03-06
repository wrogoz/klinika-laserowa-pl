import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import styled from "styled-components";
import Co2TitleSectionComponent from './co2pageComponents/co2TitleSection';
import Co2MainSection from './co2pageComponents/co2mainSection';
import Co2HowItWorks from './co2pageComponents/co2HowItWorks';
import BurgerNavigation from "./globalComponents/burgerNavigation";
import Contact from './globalComponents/contactComponent';
import womenFace from '../images/co2imgs/womenBottom.jpg'

import { ChangingWindowWidth } from "../redux/actions/actions";
interface Co2UltrafraxProps{
  BurgerNavVisible:boolean
  dispatch:any
  WindowWidth:number | string
}

class Co2Ultrafrax extends React.Component<Co2UltrafraxProps, {}> {
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
        <Header pageName="co2 ultrafrax" />
        <Co2TitleSectionComponent/>
        <Co2MainSection/>
        <Co2HowItWorks/>
        <SummaryBox>
          <Contact
            title="zabiegi z użyciem lasera co2 ultrafrax reborn gdzie można z nich skorzystać"
            descriptionText="Zabiegi wykonywane są w Szpitalu Jednego Dnia w Będzinie.
            Skorzystaj z rejestracji telefonicznej, która czynna jest od poniedziałku do piątku, w godzinach od 8:00 do 19:00 i umów się na konsultację.
            Otrzymasz wówczas wyczerpujące informacje na temat zabiegu i dowiesz się,
             czy oraz kiedy, może być wykonany."
          />
        </SummaryBox>



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
    background-image:url('${womenFace}');
    background-size: 50% auto;
    background-repeat: no-repeat;
    background-position: 3px 0%;


  `

  const mapStateToProps = (state: { BurgerNavVisible:boolean, WindowWidth:number | string }) => {
    return {
      BurgerNavVisible: state.BurgerNavVisible,
      WindowWidth:state.WindowWidth
    };
  };

export default connect(mapStateToProps)(Co2Ultrafrax);
