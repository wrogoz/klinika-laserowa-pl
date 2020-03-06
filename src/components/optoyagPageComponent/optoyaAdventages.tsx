import React, { Component } from 'react'
import ChapterTitleDesktop from '../globalComponents/chapterTitleDesktop';
import adventageIcon from '../../images/optoyag/adventageIcon.png';
import BoxUnderList from '../globalComponents/boxUnderList';
import laserBottom from '../../images/optoyag/laserBottom.jpg';
import styled from 'styled-components';

export class Optoyadventages extends Component {
    render() {
        return (
            <AdventagesSection>
                <ChapterTitleDesktop
            title='Zalety optoyag&slt m'
          />
            <img src={adventageIcon} alt="adventages" />

            <Subtitle>Do najważniejszych zalet tego zestawu należą:</Subtitle>
            <AdventagesList>
                <li>
                    <h5>
                        e-slitlight ™
                    </h5>
                    <p>
                    Zastosowana w OptoSLT, lampa szczelinowa e-SlitLight ™ LED, zapewnia jasne, białe światło, które pochodzi z półprzewodnikowego źródła światła LED.
Pozytywnie wpływa to na kolor, szczegółowość i kontrast, znacznie poprawiając w ten sposób obrazowanie. Dzięki niewielkiej emisji ciepła, zabieg ten jest bardzo wygodny,
 również dla pacjentów z suchym okiem.
                    </p>
                </li>

                <li>
                    <h5>
                    FES ™ - dokładne ustawienie energii
                    </h5>
                    <p>
                    Opto SLT M został tak zaprojektowany, by lekarz mógł w łatwy i dokładny sposób, dostosować energię do reakcji oka pacjenta. Możliwe to jest, dzięki zaawansowanym rozwiązaniom technicznym i wyrafinowanej elektronice.
                    </p>
                </li>

                <li>
                    <h5>
                    PPS ™ - stabilność impulsów
                    </h5>
                    <p>
                    OptoSLT M wykorzystuje technologię PPS ™, która odpowiada za dostarczanie stabilnej energii wyjściowej, wykraczając tym samym w znaczny sposób, poza obecne standardy branżowe.
Jeszcze dokładniejsza i stabilna energia lasera, zapewnia najwyższy stopień bezpieczeństwa oraz skuteczne i wydajne zabiegi przeprowadzane na oku.
                    </p>
                </li>

                <li>
                    <h5>
                    Leczenie przy 3 HZ
                    </h5>
                    <p>
                    Częstotliwość powtarzania przy 3Hz, pozwala na szybsze leczenie, co przekłada się na większy komfort pacjenta i lepszą wydajność pracy lekarza.
                    </p>
                </li>

            </AdventagesList>
            <BoxUnderList
                firstLine="Jak przed każdym zabiegiem, tak i tu, ostateczną decyzję"
                secondLine="podejmuje lekarz"
            />
            </AdventagesSection>
        )
    }
}
const AdventagesSection = styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    img{
        height:auto;
        width:40px;
        @media(min-width:900px){
            width:80px;
        }
    }
    @media(min-width:700px){
        background-image:url('${laserBottom}');
        background-position: 116% 85%;
    background-size: 48%;
        background-repeat:no-repeat;
      }
      @media(min-width:900px){
        background-position: 116% 85%;
    background-size: 48%;
      }
      @media(min-width:1000px){
        background-position: 110% 58%;
        background-size: 40%;
      }
      @media(min-width:1200px){
        background-position: 105% 100%;
        background-size: 30%;
      }
`
const Subtitle = styled.h4`
width: 70%;
text-align: center;
text-transform:uppercase;
margin-bottom:0;
padding:0;
`
const AdventagesList = styled.ul`
    list-style:none;
    width:70%;
    color:#999;
    padding:0;
    li h5 {
        margin-bottom:5px;
        text-transform:uppercase;
        font-weight:bold;
        color: #555;
    }
    li p {
        margin-top:5px;
    }

`
export default Optoyadventages
