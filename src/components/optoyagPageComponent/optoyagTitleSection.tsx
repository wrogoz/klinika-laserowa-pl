import React from "react";
import styled from "styled-components";
import optoyag from "../../images/optoyag/laserTop.jpg";

export default class TitleSectionComponent extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <TitleSection>
          <TitleBox>
            <EquipmentName>OptoYag&SLT M</EquipmentName>
            <p>- fotodysruptor i laser SLT, zintegrowane z e-SlitLight i połączone w jednym urządzeniu</p>
          </TitleBox>
        </TitleSection>
        <AdvertismentBox>
          <AdvertismentText>
          <span>OptoYag</span> to Photodisruptor do kapsulotomii, czyli zabiegu usunięcia objawów tak zwanej
zaćmy wtórej oraz do irydotomii, którą stosuje się do poszerzenia kąta oraz sprawienia, by
ciecz wodnista, mogła dotrzeć do beleczkowania i dalszych dróg odpływu z oka.
Laser emituje krótkie impulsy o długości fali 1064 nm, na poziomach od 0,5 do 10 mJ
          </AdvertismentText>
          <AdvertismentText>
         <span>OptoSLT</span>, to laser do selektywnej trabekuloplastyki laserowej - efektywnej procedury
leczniczej, dzięki której, można obniżać ciśnienie wewnątrzgałkowe w jaskrze, z
nadciśnieniem ocznym.
System laserowy OptoSLT, emituje krótkie impulsy, o długości fali 532 nm, na poziomach
od 0,2 do 2,6 mJ.
          </AdvertismentText>
          <AdvertismentText>
          W obu urządzeniach, dużym udogodnieniem dla lekarza, jest czerwona wiązka laserowa z
ciągłą regulacją mocy, dzięki której, promienie lasera można bardzo precyzyjne
nakierować na obszar, w którym wykonywany jest zabieg.
          </AdvertismentText>
        </AdvertismentBox>
      </>
    );
  }
}

const TitleSection = styled.section`
display:flex;
flex-direction:column;
background-image:url("${optoyag}");
background-size: auto 114%;
background-repeat: no-repeat;
background-position: 92% 16%;
width:100%;
min-width:269px;
@media(max-width:339px){
  background-position: 150% 16%;
  height:215px;
}
  @media(min-width:400px){
    align-items:center;
    padding-right:10%;
    background-size: auto 80%;
  }
  @media (min-width: 500px) {
    background-size: auto 100%;
    min-height:255px;
  }
  @media(min-width:750px){
    height:300px;
    align-items:center;
    justify-content:center;
  @media(min-width:900px){

    height:390px;

  }
  @media(min-width:1200px){

    height:490px;


  }

`;

const TitleBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;

  padding-left: 30px;
  @media(max-width:339px){
    padding-left:20px;

  }
  @media (min-width: 400px) {
    width: 60%;
    padding-right: 21%;
    padding-bottom: 15%;
  }

  @media (min-width: 750px) {
    align-items:center;
    justify-content:center;
    padding: 0 0 5% 0;
    width:37%;
  }
  @media (min-width: 900px) {
    width:55%;
  }
  @media (min-width: 1200px) {
    padding-right:5%;
    width:60%;
  }
`;
const EquipmentName = styled.h1`
  font-size: 1.2em;
  text-transform:uppercase;
  color: ${props => props.theme.interBlue};
  margin-bottom: 0;

  &&+p{
    font-size: 1.2em;
    margin-top: 0;
  }
  @media(min-width:400px){
    font-size:2em;
    &&+p{
      font-size:1.4em;
    }
  }
  @media(min-width:750px){
    width:100%;
  }
  @media(min-width:900px){
    font-size: 3em;
    &&+p{
      font-size:2.3em;
      letter-spacing: 4px;
    }
  }
  @media(min-width:1200px){
    font-size: 5em;
    margin-top: 2%;
    &&+p{
      font-size:2em;
      letter-spacing: 4px;
    }
  }
  }



`;

const AdvertismentBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction:column;
  align-items: center;
`;
const AdvertismentText = styled.p`

width: 60%;
    font-size: 0.8em;
    letter-spacing: 1px;
    text-align:justify;
  span{
    font-weight:bold;
  }
`;
