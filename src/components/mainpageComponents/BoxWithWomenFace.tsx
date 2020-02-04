import React from 'react'
import styled from 'styled-components';
import WomenFace from '../../images/women-face.png';
import Button from '../globalComponents/button'
import {Link} from 'react-router-dom';

export default class BoxWithWomenFace extends React.Component<{},{}>{
    render(){
        return(

            <WomenFaceBox>
                <WomenFaceTextSection>
                    <h1>Wybierz zabieg, a My spełnimy <span>Twoje potrzeby</span></h1>
                    <StyledLink to='/cutera'>
                    <Button
                btnText='Więcej'
              />
                    </StyledLink>

                </WomenFaceTextSection>
            </WomenFaceBox>

        )
    }
}



const WomenFaceBox = styled.section`
    display:flex;
    justify-content:center;
    padding-bottom:15px;
    width:100%;
    background-image:url("${WomenFace}");
    background-repeat:no-repeat;
    background-size: 390px 100%;
    margin-bottom:15px;
`
const WomenFaceTextSection = styled.section`
    display:flex;
    flex-direction:column;
    width:190px;
    margin:0 0 0 80px;
    h1{
        letter-spacing:2px;

        font-size:1.4em;
        margin-bottom:10px;
        span{

            color:${props=>props.theme.interBlue};
        }
    }

`

const StyledLink = styled(Link)`
padding:5px;
border-radius:5px;
align-self:flex-end;
margin-right:10px;
`