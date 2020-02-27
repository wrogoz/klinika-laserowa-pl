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
        <Temporarydiv/>

      </>
    );
  }
}
const Temporarydiv = styled.div`

    width:100px;
    height:100px;;
    background-color:blue;
    margin:50px auto ;
`
export default EffectsOfCo2Laser;
