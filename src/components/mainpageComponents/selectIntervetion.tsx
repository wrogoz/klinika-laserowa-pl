import React from "react";
import styled from "styled-components";
import ChapterTitleDesktop from "../globalComponents/chapterTitleDesktop";
import cutera1 from "../../images/cutera1.png";

export default class SelectIntervetion extends React.Component<{}, {}> {
  render() {
    return (
      <SelectIntervetionBox>
        <ChapterTitleDesktop title="wybierz rodzaj zabiegu" />
        <CuteraBox>
          <CuteraImg src={cutera1} alt="cutera1" />
          <LaserTitleBox>
            <div>
              <div></div>
              <p>Cutera</p>
            </div>
            <p>nasze najnowsze rozwiązanie</p>
          </LaserTitleBox>
        </CuteraBox>
        <OtherLasersBox>
          <LaserBox>
            <LaserImg src={cutera1} alt="laser img" />
            <p>Lasotronix</p>
          </LaserBox>
          <LaserBox>
            <LaserImg src={cutera1} alt="laser img" />
            <p>Laser co2</p>
          </LaserBox>
          <LaserBox>
            <LaserImg src={cutera1} alt="laser img" />
            <p>optoslt m</p>
          </LaserBox>
        </OtherLasersBox>
      </SelectIntervetionBox>
    );
  }
}

const SelectIntervetionBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 15%;
`;

const CuteraBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;

  @media (min-width: 1000px) {
    width: 40%;
  }
`;
const CuteraImg = styled.img`
  width: 100%;
  height: auto;

`;
const LaserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 30%;
  &:nth-of-type(2) {
    margin: 0 10px;
    @media (min-width: 1000px) {
      margin: 0 20px;
    }
  }
  p {
    text-transform: uppercase;
    text-align: center;
    font-size: 0.6em;
  }
`;
const LaserImg = styled.img`
  width: 100%;
  height: auto;
`;
const LaserTitleBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    p:first-of-type {
      font-weight: 600;
      font-size: 1em;
      margin:0;
      @media(min-width:450px){
          font-size:1.5em;

      }
      @media (min-width: 600px) {
        font-size:1.7em;

      }

      padding-left: 2%;
    }


    div {
      height: 8px;
      width: 8px;
      background-color: ${props => props.theme.interOrange};
      border-radius: 100%;
      margin-bottom: 5%;
      @media(min-width:520px){
        margin-bottom: 0;
    }
    }
  }
  p {
    display: flex;
    text-transform: uppercase;
    font-size: 0.5em;
    @media(min-width:520px){
        font-size:0.7em;
    }
    @media (min-width: 670px) {
        font-size:1em;
      }
  }
`;
const OtherLasersBox = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-evenly;
  align-items: center;
  @media (min-width: 1000px) {
    width: 40%;
  }
`;
