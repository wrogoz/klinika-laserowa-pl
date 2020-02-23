import React, { Component } from "react";
import styled from "styled-components";
import LogoIm from "../images/logo-im.png";
import MobileNav from './globalComponents/mobileNav';
import { connect } from "react-redux";
import { BurgerShowHide } from "../redux/actions/actions";

import DesktopNav from './globalComponents/desktopNavigation';
interface HeaderProps {
  pageName: string;
  dispatch: any;
  WindowWidth:number
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

        {this.props.WindowWidth>1240?<DesktopNav
                              pageName={this.props.pageName} />
                              :<MobileNav pageName={this.props.pageName}/> }


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
  z-index: 99;
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
        font-size:1em;
    }
    @media(min-width:801px){

      color:#333;
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
@media(min-width:801px){
  padding-left:40px;
}
`;

const mapStateToProps = (state: {WindowWidth:number  }) => {
  return {

    WindowWidth:state.WindowWidth
  };
};

export default connect(mapStateToProps)(Header);
