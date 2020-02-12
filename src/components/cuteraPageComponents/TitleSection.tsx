import React from 'react'
import styled from 'styled-components';
import Button from '../globalComponents/button';
import cuteraHead from '../../images/cuteraHead.png';
export default class TitleSectionComponent extends React.Component<{},{}>{
    render(){
        return(
            <TitleSection>
            <TitleBox>
              <EquipmentName>Laser Excel V</EquipmentName>
              <p>- przełom w leczeniu zmian naczyniowych <br/> i pigmentacyjnych</p>
              <Button
                btnText='Więcej'
              />
            </TitleBox>

            <AdvertismentBox>
              <AdvertismentText>
                to nie hasło reklamowe to rzeczywistość, która
                teraz jest na wyciągnięcie Twojej ręki
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
background-position: 0% 20%;
width:100%;
@media(min-width:600px){
  background-position: 100% 20%;
}
@media(min-width:900px){

    flex-basis: 54vh;
    background-size: 81% auto;
    background-position: 100% 120px;
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
`

const  AdvertismentBox = styled.div`
  margin-top: 100px;
  display:flex;
  justify-content:center;
  @media(min-width:900px){

    paddin:0 8%;
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
    margin-top: 15%;
    font-size:1.7em;
    width: 650px;
  }
`