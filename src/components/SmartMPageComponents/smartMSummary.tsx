import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Contact from '../globalComponents/contactComponent';
import { ChangingWindowWidth } from "../../redux/actions/actions";
interface SmartMSummaryProps{
  dispatch:any
  WindowWidth:number | string
}

class SmartMSummary extends React.Component<SmartMSummaryProps, {}> {
  windowResize = ()=>{
    this.props.dispatch(ChangingWindowWidth(window.innerWidth))

  }
  render() {

    return (

        <SummaryBox>
          <Contact
            title="Gdzie i kiedy możesz skorzystać z zabiegu evlt?"
            descriptionText="Zabiegi wykonywane są w Szpitalu Jednego Dnia w Będzinie.
            Skorzystaj z rejestracji telefonicznej, która czynna jest od poniedziałku do piątku,
             w godzinach od 8:00 do 19:00 i umów się na konsultację.
              Otrzymasz wówczas wyczerpujące informacje na temat zabiegu i dowiesz się,
               czy oraz kiedy,
            może być wykonany."
          />
        </SummaryBox>




    );
  }
}


  const SummaryBox = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;



  `

  const mapStateToProps = (state: {WindowWidth:number | string }) => {
    return {

      WindowWidth:state.WindowWidth
    };
  };

export default connect(mapStateToProps)(SmartMSummary);
