import React from 'react'
import styled,{keyframes} from 'styled-components';
import {StyledLink} from '../../basicStyles/theme';
import { connect } from 'react-redux';
import { HideMenu } from '../../redux/actions/actions';

interface BurgerNavigationProps{
    LaserTypes:string[],
    dispatch:any
}
class BurgerNavigation extends React.Component<BurgerNavigationProps,{}>{

    hideMenu=()=>{
        this.props.dispatch(HideMenu())
    }

    render(){
         const lasers =this.props.LaserTypes.map((el,key)=>{

           if(key<1){
            return(

                // eslint-disable-next-line no-useless-escape
                <NavItem
                 onClick={this.hideMenu}
                 key={key}>
                    <StyledLink
                     to={el.replace(/ /g,'')}>
                         {el}
                    </StyledLink>
                </NavItem>
            )
           }else{
               return(
                <NavItem

                key={key}>
                   <DisabledLink>
                        {el} - Wkrótce
                   </DisabledLink>
               </NavItem>
               )
           }

         })
        return(

                <NavigationBox>
                    <NavList>
                        <NavItem
                        onClick={this.hideMenu}>
                            <StyledLink to='/'>Klinika laserowa</StyledLink>
                        </NavItem>
                        {lasers}
                        <NavItem
                        onClick={this.hideMenu}>
                            <StyledLink to='/kontakt'>Kontakt</StyledLink>
                        </NavItem>
                    </NavList>
                </NavigationBox>
        )
    }
}

const animationBurgerNav = keyframes`
0%{
top:-100%;
}

100%{

top:70px;
}
@media(min-width:600px){
    0%{
        top:-100%;
        }

        100%{

        top:120px;
        }
}
`;

const NavigationBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
    position: fixed;
    top: 70px;
    z-index: 10;
    height: 290px;
    border-radius: 0 0 25px 25px;
    width: 87%;
    background-color: ${props=>props.theme.interOrange};

    animation:0.3s ${animationBurgerNav} ease;
    @media(min-width:600px){
        top: 120px;
    }
`
const NavList = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    align-items:center;
    height:100%;
    margin:0;
    padding:0;
    padding-top: 5%;
}
`

const NavItem = styled.li`
color:#fff;
font-size: 0.8em;
text-transform: uppercase;
width:100%;
text-align:center;
font-weight: bold;
border-bottom:1px solid #fff;
padding: 14px 0;
letter-spacing: 2px;

&:last-of-type{
    border-bottom:none;
}
`

const DisabledLink = styled.li`
    color:#999;
`

const mapStateToProps = (state: { BurgerNavVisible:boolean,LaserTypes:string[]}) => {
    return {
      BurgerNavVisible: state.BurgerNavVisible,
      LaserTypes:state.LaserTypes
    };
  };

  export default connect(mapStateToProps)(BurgerNavigation);