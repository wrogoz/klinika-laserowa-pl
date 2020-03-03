import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import arrow from '../../images/menu_arrow.svg';
interface DesktopNavProps {
  pageName: string;
  LaserTypes:string[]
}

class DesktopNav extends Component<DesktopNavProps, {}> {


  render() {
      const laserLinks = this.props.LaserTypes.map((el,key)=>{
            // disable other lasers
            if(key===3){
                return (
                    <NonWorkinLink key={key} >{el} - wkrótce </NonWorkinLink>
                )
          }else{
              return(
                <li
                key={key}>
                    <StyledLink to={el.replace(/ /g,'')}>{el}</StyledLink>
                </li>
            )
          }

      })

    return (
      <DesktopNavBox>
          <p>Klinika Laserowa</p>
        <NavUl>
            <ActivePage>{this.props.pageName}</ActivePage>
            <li>Zabiegi<MenuArrow src={arrow} alt='arrow menu'/>
               <ul>
                   <li><StyledLink to='/'>Klinika laserowa</StyledLink> </li>
                   {laserLinks}
               </ul>
            </li>
            <li><StyledLink to='/kontakt'>Kontakt</StyledLink></li>
        </NavUl>


      </DesktopNavBox>
    );
  }
}

const DesktopNavBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    padding-left:40px;

`

const NavUl = styled.ul`
    display:flex;
    justify-content:flex-end;

    font-size:0.9em;
    text-transform:uppercase;
    width:60%;
    color:#333;

    li{
        margin:0 40px 0 0;
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

        z-index:22;
        position:absolute;
        top:18px;
        left:-90px;
        min-width:200px;
        color:#333;
    }
    li:hover ul li{
        padding:10px 0;
        cursor:pointer;
        border-bottom:1px solid #fff;



    }
    li:hover ul li:hover{
        border-bottom:1px solid ${props=>props.theme.interViolet};

    }

`
const ActivePage = styled.li`
    border-bottom:1px solid ${props=>props.theme.interViolet};
`
const MenuArrow = styled.img`
    height:13px;
    width:13px;
`
const StyledLink = styled(Link)`
    color:#333;
    text-decoration:none;
`

const NonWorkinLink = styled.li`
    color:#999;
`

const mapStateToProps = (state: { LaserTypes:string[]}) => {
    return {

      LaserTypes:state.LaserTypes
    };
  };
export default connect(mapStateToProps )(DesktopNav);
