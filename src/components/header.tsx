import React, { Component } from "react";
import styled from "styled-components";
import LogoIm from "../images/logo-im.png";
import Hamburger from "../images/menu-24px.svg";
import { connect } from "react-redux";
import { BurgerShowHide } from "../redux/actions/actions";

interface HeaderProps {
  pageName: string;
  dispatch: any;
}

class Header extends Component<HeaderProps, {}> {
  ShowHideNav = () => {
    this.props.dispatch(BurgerShowHide());
  };
  render() {
    return (
      <StHeader>
        <div>
          <Logo src={LogoIm} alt="logo" />
        </div>

        <p>Klinika laserowa - {this.props.pageName}</p>

        <HamburgerMenu
          onClick={this.ShowHideNav}
          src={Hamburger}
          alt="hamburger menu"
        />
      </StHeader>
    );
  }
}

const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #fff;
  height: 70px;
  width: 100%;
    @media(min-width:600px){
        height:90px;
    }
    @media(min-width:750px){
        height:120px;
    }
  p {
    font-size: 0.55em;
    text-transform: uppercase;
    color: ${props => props.theme.interViolet};
    margin: 0;
    @media(min-width:465px){
     font-size:0.75em;
    }
    @media(min-width:600px){
     font-size:0.9em;
    }
    @media(min-width:750px){
        font-size:1.1em;
    }
  }
`;
const Logo = styled.img`
  padding-top: 5px;
  padding-left: 20px;
  height: 80%;
  width: 100px;
  @media(min-width:600px){
    width:130px;
}
@media(min-width:750px){
    width:130px;
}
@media(min-width:750px){
    width:200px;
}
`;

const HamburgerMenu = styled.img`
  padding-right: 4%;
  @media(min-width:465px){
    height:30px;
    width:30px;
}
@media(min-width:600px){
    height:40px;
    width:40px;
    padding-right: 6%;
   }
`;

export default connect()(Header);
