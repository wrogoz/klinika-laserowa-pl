import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
interface MobileNavProps {
  pageName: string;
  dispatch: any;
}

class DesktopNav extends Component<MobileNavProps, {}> {


  render() {
    return (
      <DesktopNavBox>
          <p>Klinika Laserowa</p>
        <NavUl>
            <ActivePage>{this.props.pageName}</ActivePage>
            <li>Zabiegi
               <ul>
                   <li><StyledLink to='/cutera'>Laser Cutera Excel V</StyledLink> </li>
                   <li><StyledLink to='/cutera'>Laser Cutera Excel V</StyledLink></li>
                   <li><StyledLink to='/cutera'>Laser Cutera Excel V</StyledLink></li>
                   <li><StyledLink to='/cutera'>Laser Cutera Excel V</StyledLink></li>
               </ul>
            </li>
            <li>Kontakt</li>
        </NavUl>


      </DesktopNavBox>
    );
  }
}

const DesktopNavBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:80%;

`

const NavUl = styled.ul`
    display:flex;
    justify-content:space-evenly;
    font-size:1.6em;
    text-transform:uppercase;
    width:60%;
    color:#333;
    li{
        margin:0;
        padding:0;
        list-style:none;
    }
    li:nth-of-type(2){
        position:relative;
    }
    li ul {
        display:none;
    }
    li:hover ul{
        display:block;
        text-align:center;
        font-size:0.7em;
        background-color:#fff;
        z-index:22;
        position:absolute;
        top:30px;
        left:-115px;
        width:240px;
        color:#333;
    }
    li:hover ul li{
        padding:10px 0;
        cursor:pointer;
        background-color:#fff;

    }
    li:hover ul li:hover{
        border-bottom:1px solid ${props=>props.theme.interViolet}
    }

`
const ActivePage = styled.li`
    border-bottom:1px solid ${props=>props.theme.interViolet};
`

const StyledLink = styled(Link)`
    color:#333;
    text-decoration:none;
`
export default connect()(DesktopNav);
