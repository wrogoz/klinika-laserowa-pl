import React from 'react'
import styled,{keyframes} from 'styled-components';
import WomenFace from '../../images/WomenFace.png'
import Button from '../globalComponents/button'
import {Link} from 'react-router-dom';

export default class BoxWithWomenFace extends React.Component<{},{}>{
    render(){
        return(

            <WomenFaceBox>
                <WomenFaceTextSection>
                    <h1><span>Wybierz zabieg, a My spełnimy</span> <span>Twoje potrzeby</span></h1>
                    <StyledLink to='/cuteraExcelV'>
                    <Button
                btnText='Więcej'
              />
                    </StyledLink>

                </WomenFaceTextSection>
            </WomenFaceBox>

        )
    }
}

const fadeInText = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:100%;
    }
`

const WomenFaceBox = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    padding-bottom:15px;
    width:100%;
    height: 30vh;
    background-image:url("${WomenFace}");
    background-repeat:no-repeat;
    background-size: auto 100%;
    margin-bottom:5%;
    @media(min-width:801px){
        height:60vh;
    }
`
const WomenFaceTextSection = styled.section`
    display:flex;
    flex-direction:column;
    width:200px;
    margin: 5% 0 0 28%;
    @media(min-width:540px){
        width:300px;
    }
    @media(min-width:750px){
        width:400px;
    }
    @media(min-width:801px){
     margin:0;
     width:500px;
     padding-left:45%;
    }
    @media(min-width:1050px){
        padding-left:18%;
        width:650px;

       }
    h1{
        letter-spacing:2px;
        font-size:1.4em;
        margin-bottom:10px;
        span:first-of-type{

            animation: 5s ${fadeInText} ease-out ;
        }
        span:last-of-type{

            color:${props=>props.theme.interBlue};
        }
        @media(min-width:540px){
            font-size:2.2em;
        }
        @media(min-width:750px){
            font-size:2.8em;
            margin-bottom:20px;
        }
        @media(min-width:801px){
            font-size:5em;
           }
    }

`

const StyledLink = styled(Link)`
padding:5px;
border-radius:5px;
align-self:flex-end;
margin-right:10px;
`