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
                <Row noGutters={true}>
                    <Col xs={4}>
                        <Logo src={LogoIm} alt="logo"/>
                     </Col>
                    <Col xs={6}>
                        <p>Klinika laserowa - {this.props.pageName}</p>
                    </Col>
                    <Col xs={2}>
                    <HamburgerMenu src={Hamburger} alt="hamburger menu"/>
                    </Col>
                </Row>



            </StHeader>
        )
    }
}


const StHeader = styled.header`
<<<<<<< HEAD
<<<<<<< HEAD
    display:flex;
    display: -webkit-flexbox;
    align-items:center;
    justify-content:space-between;
=======
>>>>>>> parent of c2c3406... grid layout changed to flexbox
=======
>>>>>>> parent of c2c3406... grid layout changed to flexbox
    position:sticky;
    top:0;
    z-index:1;
    background-color:#fff;

    .row{
        align-items:center;
        height:100%;
        padding:0 15px 0 15px;
    }
    height:70px;
    width:100%;

    p{
        font-size:0.55em;
        text-transform:uppercase;
        color:#8849a5;
        font-family: 'Lato', sans-serif;
        margin-bottom:0;

    }




`
const Logo = styled.img`

    padding-right:10px;
    height:80%;
    width:100px;
`

const HamburgerMenu = styled.img`
padding-left:20px;
`