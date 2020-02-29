import React, { Component } from "react";
import styled from "styled-components";
import DescriptionText from "../globalComponents/descriptionText";
import ChapterTitleDesktop from "../globalComponents/chapterTitleDesktop";
import StyledOrderList from "../globalComponents/orderList";
export class EffectsOfCo2Laser extends Component {
  render() {
    return (
      <>
        <ChapterTitleDesktop title="zabieg i efekty działania lasera co2" />
        <StyledOrderList
          listArray={[
            "Wzbudzana jest całkowita przebudowa naskórka, czego efektem jest poprawa kolorytu i napięcia skóry, redukcja przebarwień i płytkich zmarszczek, a skóra staje się coraz bardziej rozświetlona. Trwa to przez okres od 4 do 6 tygodni.",
            "Dzięki przebudowie struktury kolagenu i elastyny w skórze, rośnie napięcie i grubość. Zwiększa się też gęstość włókien. W dalszym ciągu, poprawie ulega gładkość i koloryt skóry. Ten etap trwa od 3 do 4 miesięcy. "
          ]}
        />
        <DescriptionText
          descriptionText="Po zabiegu, należy stosować tak zwaną fotoprotekcję, która polega na używaniu kremów z filtrem, natomiast opalanie, musisz odłożyć na 6 tygodni.
          Uzyskany efekt, podlega normalnym procesom starzenia i nie ustępuje nagle, jak to ma miejsce w przypadku użycia toksyny botulinowej. "
        />
        <BeforeAfterBox>
          <p>przed</p>
        <Temporarydiv/>
        <Temporarydiv/>
        <p>po</p>
        <p>przed</p>
        <Temporarydiv/>
        <Temporarydiv/>
        <p>po</p>
        </BeforeAfterBox>


      </>
    );
  }
}
const BeforeAfterBox = styled.div`

margin-top:30px;
  display:flex;
  justify-content:space-evenly;
  align-items:space-evenly;
  width:90%;
  flex-wrap:wrap;
  p{
    width:10%;
    font-size:0.7em;
    align-self:center;
    text-transform:uppercase;
  }

`
const Temporarydiv = styled.div`
    border-radius:20%;
    width:30%;
    height:100px;
    background-color:${props=>props.theme.interBlue};
    margin:5%;
`
export default EffectsOfCo2Laser;
