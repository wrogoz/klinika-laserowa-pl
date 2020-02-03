import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import WomenFace from '../../images/women-face.png';


export default class BoxWithWomenFace extends React.Component<{},{}>{
    render(){
        return(
            <Row>
            <StyledCol xs={12}>
            <WomenFaceBox>
                <WomenFaceTextSection>
                    <h1>Wybierz zabieg, a My spełnimy <span>Twoje potrzeby</span></h1>
                    <button>Więcej</button>
                </WomenFaceTextSection>
            </WomenFaceBox>
            </StyledCol>
        </Row>
        )
    }
}

const StyledCol = styled(Col)`
    padding:0;
    margin:0;
`

const WomenFaceBox = styled.section`
    display:flex;
    display: -webkit-flexbox;
    justify-content:center;
    height:190px;
    width:100%;
    background-image:url("${WomenFace}");
    background-repeat:no-repeat;
    background-size: 100% 100%;
    margin-bottom:15px;
`
const WomenFaceTextSection = styled.section`
    display:flex;
    display: -webkit-flexbox;
    flex-direction:column;
    width:190px;
    margin:48px 0 0 80px;
    h1{
        letter-spacing:2px;
        font-family: 'Lato', sans-serif;
        font-size:1.4em;
        margin-bottom:20px;
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