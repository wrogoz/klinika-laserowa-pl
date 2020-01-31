import React, { Component } from 'react';
import styled from 'styled-components';
import LogoIm from '../images/logo-im.png';
export default class Header extends Component {
    render() {
        return (
            <StHeader>
                <Logo></Logo>
                <p>Klinika laserowa - strona główna</p>
                <div>hamb</div>
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
    width:30%;
`
const StHeader = styled.header`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    height:75px;
    width:100%;
    border-bottom:1px solid black;
    p{
        font-size:0.5em;
        text-transform:uppercase;
    }
`
