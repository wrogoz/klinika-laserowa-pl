import React from 'react'
import styled from 'styled-components';


export default class WelcomeText extends React.Component<{},{}>{
    render(){
        return(
            <WelcomeTextBox>
            <h2>Witamy serdecznie na stronie</h2>
            <h2>kliniki laserowej</h2>
            </WelcomeTextBox>
        )
    }
}
const WelcomeTextBox = styled.div`
@media(min-width:600px){
   font-size:1.3em;
}
@media(min-width:700px){
    font-size:1.8em;

 }
 @media(min-width:1240px){
    font-size:2.5em;

 }

`