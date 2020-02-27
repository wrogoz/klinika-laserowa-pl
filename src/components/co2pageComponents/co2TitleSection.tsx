import React from 'react'
import styled from 'styled-components';
import cuteraHead from '../../images/cuteraHead.png';
export default class TitleSectionComponent extends React.Component<{},{}>{
    render(){
        return(
            <TitleSection>
            <TitleBox>
              <EquipmentName>Co2 ultrafrax reborn</EquipmentName>
              <p>- przełom w leczeniu zmian naczyniowych <br/> i pigmentacyjnych</p>

            </TitleBox>

            <AdvertismentBox>
              <AdvertismentText>
              A wszystko to, za sprawą najnowocześniejszego frakcjonującego lasera ablacyjnego CO2.
               Zabieg z jego użyciem, może być stosowany jako jedyny, ale też doskonale sprawdza się,
               jako baza dla innych terapii, na które zdecydujesz się w przyszłości.
              </AdvertismentText>
            </AdvertismentBox>
          </TitleSection>
        )
    }
}

const TitleSection = styled.section`
display:flex;
flex-direction:column;
background-image:url("${cuteraHead}");
background-size:auto;
background-repeat:no-repeat;
background-position: 0% 40%;
width:100%;
@media(min-width:600px){
  background-position: 100% 20%;
}
@media(min-width:900px){


    background-size: 67% auto;
    background-position: 100% 65px;
}
@media(min-width:1200px){

    background-size: 86% auto;
    background-position: 100% -55px;

}
`

const TitleBox = styled.section`
  display:flex;
  flex-direction:column;
  width: 70%;
  padding-left:30px;
  @media(min-width:900px){
    width: 50%;
    max-width:500px;
    padding-left: 22%;

  }
  @media(min-width:1200px){
    width:45%;
    max-width: 80%;
    padding-left: 22%;

}
`
const EquipmentName = styled.h1`
  font-size: 2.0em;
  color: ${props=>props.theme.interBlue};
  margin-bottom: 0;
  &&+p{
    font-size: 1.7em;
    margin-top: 0;
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



`

const  AdvertismentBox = styled.div`
  margin-top: 100px;
  display:flex;
  justify-content:center;
  @media(min-width:900px){
    margin-top: 0;

  }
  @media(min-width:1200px){
    margin-top: 8%;

  }

  @media(min-width:1400px){
    margin-top: 10%;

  }
  @media(min-width:1600px){
    margin-top: 15%;

  }
`
const  AdvertismentText = styled.p`
text-align: center;
text-transform: uppercase;
font-size: 1.2em;
width: 71%;
color: #999;
  &&:after{
    content: ' ';
    display: block;
    height: 2px;
    background-color: ${props=>props.theme.interBlue};
    width: 200px;
    text-align: center;
    margin: 10px auto;
  }
  @media(min-width:900px){
    margin-top: 12%;
    font-size:1.7em;
    width: 650px;
  }
`