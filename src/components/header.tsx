import React, { Component } from 'react';
import styled from 'styled-components';
import LogoIm from '../images/logo-im.png';
import Hamburger from '../images/menu-24px.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
interface HeaderProps{
    pageName:string;
}

export default class Header extends Component<HeaderProps,{}> {
    render() {
        return (
            <StHeader>
                <Row>
                    <Col xs={5}>
                        <Logo src={LogoIm} alt="logo"/>
                     </Col>
                    <Col xs={5}>
                        <p>Klinika laserowa - {this.props.pageName}</p>
                    </Col>
                    <Col xs={2}>
                    <img src={Hamburger} alt="hamburger menu"/>
                    </Col>
                </Row>



            </StHeader>
        )
    }
}


const StHeader = styled.header`
    position:sticky;
    top:0;
    z-index:1;
    background-color:#fff;
    .row{
        align-items:center;
        height:100%;
        padding:0 15px 0 15px;
    }
    height:75px;
    width:100%;

    p{
        font-size:0.5em;
        text-transform:uppercase;
        color:#8849a5;
        font-family: 'Lato', sans-serif;
        margin-bottom:0;

    }

    img{
        height:25px;
    }


`
const Logo = styled.img`


    height:80%;
    width:100px;
`