import React, { Component } from 'react';
import styled from 'styled-components';

import Hamburger from '../images/menu-24px.svg';

interface HeaderProps{
    pageName:string;
}

export default class Header extends Component<HeaderProps,{}> {
    render() {
        return (
            <StHeader>

                <p>Klinika laserowa</p><p>  {this.props.pageName}</p>
                <img src={Hamburger} alt="hamburger menu"/>
            </StHeader>
        )
    }
}


const StHeader = styled.header`

    display:flex;
    align-items:center;
    justify-content:space-between;
    height:75px;
    width:100%;

    border-bottom:1px solid #ff3a3a;
    p{
        font-size:0.7em;
        text-transform:uppercase;
        color:#8849a5;
        font-family: 'Lato', sans-serif;

    }
    p:first-of-type{
        margin-left:15px;
    }
    img{
        margin-left:10px;
        height:30px;
        margin-right:15px;
    }
`
