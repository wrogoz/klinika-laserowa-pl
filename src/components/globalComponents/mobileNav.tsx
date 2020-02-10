import React, { Component } from "react";
import styled from "styled-components";

import Hamburger from "../../images/menu-24px.svg";
import { connect } from "react-redux";
import { BurgerShowHide } from "../../redux/actions/actions";

interface MobileNavProps {
  pageName: string;
  dispatch: any;
}

class MobileNav extends Component<MobileNavProps, {}> {
  ShowHideNav = () => {
    this.props.dispatch(BurgerShowHide());
  };
  render() {
    return (
      <>
        <p>Klinika laserowa - {this.props.pageName}</p>

<HamburgerMenu
  onClick={this.ShowHideNav}
  src={Hamburger}
  alt="hamburger menu"
/>
      </>
    );
  }
}



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

export default connect()(MobileNav);
