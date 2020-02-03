import React from 'react'
import styled from 'styled-components';
import WomenFace from '../../images/women-face.png';


export default class BoxWithWomenFace extends React.Component<{},{}>{
    render(){
        return(

            <WomenFaceBox>
                <WomenFaceTextSection>
                    <h1>Wybierz zabieg, a My spełnimy <span>Twoje potrzeby</span></h1>
                    <button>Więcej</button>
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
    background-size: 100% 100%;
    margin-bottom:15px;
`
const WomenFaceTextSection = styled.section`
    display:flex;
    flex-direction:column;
    width:190px;
    margin:0 0 0 80px;
    h1{
        letter-spacing:2px;
        font-family: 'Lato', sans-serif;
        font-size:1.4em;
        margin-bottom:10px;
        span{

            color:#204f9f;
        }
    }
    button{
        border:none;
        background:#f7ad31;
        width:80px;
        padding:5px;
        border-radius:5px;
        align-self:flex-end;
        margin-right:10px;
        color:#fff;
    }
`