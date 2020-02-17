import React from 'react'
import styled,{keyframes} from 'styled-components';



export default class BurgerNavigation extends React.Component<{},{}>{
    render(){
        return(

                <NavigationBox>
                    <NavList>
                        <NavItem>Klinika laserowa </NavItem>
                        <NavItem>Cutera Excel V</NavItem>
                        <NavItem>Lasotronix</NavItem>
                        <NavItem>Laser CO2</NavItem>
                        <NavItem>Optoslt m</NavItem>
                        <NavItem>Kontakt</NavItem>
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