import React from "react";
import styled from "styled-components";
import lasotronixImg from "../../images/lasotronixImgs/laserTop.jpg";

export default class TitleSectionComponent extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <TitleSection>
          <TitleBox>
            <EquipmentName>Smart M</EquipmentName>
            <p>- laser do zabiegów chirurgii naczyniowej EVLT</p>
          </TitleBox>
        </TitleSection>
        <AdvertismentBox>
          <AdvertismentText>
            Wielogodzinne przebywanie w jednej pozycji, to jedna z głównych
            przyczyn żylaków kończyn dolnych. Jeśli zauważyłeś na swoich nogach
            zmiany w postaci pajączków lub zgrubień w niektórych odcinkach
            żylnych, możesz skorzystać z najnowszych osiągnięć współczesnej
            medycyny. Należy do nich laseroterapia żylaków kończyn dolnych EVLT
          </AdvertismentText>
        </AdvertismentBox>
      </>
    );
  }
}

const TitleSection = styled.section`
display:flex;
flex-direction:column;
background-image:url("${lasotronixImg}");
background-size: auto 114%;
background-repeat: no-repeat;
background-position: 92% 16%;

width:100%;
  @media(min-width:400px){
    align-items:center;
    padding-right:10%;
  }
  @media(min-width:750px){
    height:400px;
    justify-content:center;
  }
  @media(min-width:900px){
    justify-content:flex-start;
    background-position:85%;
  }
  @media(min-width:1200px){
    height:590px;
    background-position:93%;
  }
  @media(min-width:1400px){

    background-position:85%;
  }
`;

const TitleBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;

  padding-left: 15px;

  @media (min-width: 400px) {
    width: 60%;
    padding-right: 25%;
    padding-bottom: 15%;
  }
  @media (min-width: 750px) {
    padding: 0 5% 10% 15%;
  }
  @media (min-width: 900px) {
    width: 50%;
    max-width: 500px;
    padding-left: 0;
  }
  @media (min-width: 1200px) {
    width: 45%;
    max-width: 80%;
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
  @media(min-width:900px){
    font-size: 3em;
    &&+p{
      font-size:2.3em;
      letter-spacing: 4px;
    }
  }
  @media(min-width:1200px){
    font-size: 5em;
    margin-top: 10%;
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
  justify-content: center;
`;
const AdvertismentText = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: 0.7em;
  letter-spacing: 1px;
  width: 72%;
  color: #999;
  &&:after {
    content: " ";
    display: block;
    height: 2px;
    background-color: ${props => props.theme.interBlue};
    width: 200px;
    text-align: center;
    margin: 10px auto;
  }@media (min-width: 400px) {

    font-size: 0.8em;

  }
}@media (min-width: 750px) {
  width: 55%;
  font-size: 1em;
  line-height:24px;

}
  @media (min-width: 900px) {
    margin-top: 5%;
    font-size: 1.7em;
    width: 650px;
    line-height:35px;
  }
`;
