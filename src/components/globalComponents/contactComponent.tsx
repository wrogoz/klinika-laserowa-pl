import React, { Component } from 'react'
import ChapterTitleDesktop from './chapterTitleDesktop';
import DescriptionText from './descriptionText';
import styled from 'styled-components';
import { connect } from "react-redux";
import Button from '../globalComponents/button';

interface ContactComponentProps{
    WindowWidth:string | number
}
class ContactComponent extends Component<ContactComponentProps,{}> {
    render() {
        return (
            <>
            <ChapterTitleDesktop
                title='zabiegi z użyciem lasera co2 ultrafrax reborn gdzie można z nich skorzystać'
            />
            <DescriptionText
                descriptionText="Zabiegi z użyciem lasera CO2 UltraFrax Reborn - gdzie można z nich
                skorzystać
                Jeśli chcesz zadbać o swoją skórę, uwolnić ją od zmarszczek, blizn, przebarwień, czy
                rozstępów, przywracając jej jednocześnie zdrowy wygląd, umów się na konsultację w
                Centrum Medycznym INTER-MED.
                Po wstępnej analizie zmian, które mają zostać poddane działaniu promieni lasera
                frakcyjnego CO2, będziesz mógł podjąć decyzję o skorzystaniu z zabiegu, w ustalonym
                przez lekarza terminie."
                />
                <Address>
                    {this.props.WindowWidth<1240?<Button btnText='Zapisz się'/>:<><p>Centrum Medyczne INTER-MED</p>
                <p>Rejestracja telefoniczna: (32) 360 10 30</p></>}


                </Address>

            </>
        )
    }
}
const Address = styled.div`
display:flex;
justify-content:center;
width: 60%;
padding-top:15px;
padding-bottom:20px;
font-size: 0.9em;
    p:last-of-type{
        color: #999;
        margin-left:10px;
    }
`

const mapStateToProps = (state: {WindowWidth:number | string }) => {
    return {

      WindowWidth:state.WindowWidth
    };
  };

  export default connect(mapStateToProps)(ContactComponent);
