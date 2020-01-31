import React, { Component } from 'react';
import styled from 'styled-components';
import LogoIm from '../images/logo-im.png';
import Hamburger from '../images/menu-24px.svg';

interface HeaderProps{
    pageName:string;
}

export default class Header extends Component<HeaderProps,{}> {
    render() {
        return (
            <StHeader>
                <Logo></Logo>
                <p>Klinika laserowa - {this.props.pageName}</p>
                <img src={Hamburger} alt="hamburger menu"/>
            </StHeader>
        )
    }
}

const Logo = styled.div`

    background-image:url("${LogoIm}");

    background-repeat:no-repeat;
    background-size:100%;
    background-position-y:center;
    height:80%;
    width:32%;
`
const StHeader = styled.header`

    display:flex;
    align-items:center;
    justify-content:space-evenly;
    height:75px;
    width:100%;
    border-bottom:1px solid #ff3a3a;
    p{
        font-size:0.5em;
        text-transform:uppercase;
        color:#8849a5;
        font-family: 'Lato', sans-serif;
    }
    img{
        height:30px;
    }
`
