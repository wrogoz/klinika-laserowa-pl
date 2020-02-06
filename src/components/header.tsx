import React, { Component } from 'react';
import styled from 'styled-components';
import LogoIm from '../images/logo-im.png';
import Hamburger from '../images/menu-24px.svg';


interface HeaderProps{
    pageName:string;
}

export default class Header extends Component<HeaderProps,{}> {

showHideBurgerNav = ()=>{
    console.log('klik')

}

    render() {
        return (
            <StHeader>

                    <div>
                        <Logo src={LogoIm} alt="logo"/>
                     </div>

                        <p>Klinika laserowa - {this.props.pageName}</p>


                    <HamburgerMenu onClick={this.showHideBurgerNav} src={Hamburger} alt="hamburger menu"/>

                </StHeader>

        )
    }
}


const StHeader = styled.header`
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:sticky;
    top:0;
    z-index:1;
    background-color:#fff;


    height:70px;
    width:100%;

    p{
        font-size:0.55em;
        text-transform:uppercase;
        color:${props=>props.theme.interViolet};
        margin:0;

    }

`
const Logo = styled.img`
    padding-top:5px;
    padding-left:20px;
    height:80%;
    width:100px;
`

const HamburgerMenu = styled.img`
padding-right:20px;
`


