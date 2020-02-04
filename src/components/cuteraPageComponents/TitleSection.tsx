import React from 'react'
import styled from 'styled-components';
import Button from '../globalComponents/button';

export default class TitleSectionComponent extends React.Component<{},{}>{
    render(){
        return(
            <TitleSection>
            <TitleBox>
              <EquipmentName>Laser Excel V</EquipmentName>
              <p>- przełom w leczeniu zmian naczyniowych i pigmentacyjnych</p>
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
`

const TitleBox = styled.section`
  display:flex;
  flex-direction:column;
  width: 70%;
  padding-left:30px;
`
const EquipmentName = styled.h1`
  font-size: 2.0em;
  color: ${props=>props.theme.interBlue};
  margin-bottom: 0;
  &&+p{
    font-size: 1.7em;
    margin-top: 0;
  }
`

const  AdvertismentBox = styled.div`

`
const  AdvertismentText = styled.div`

`