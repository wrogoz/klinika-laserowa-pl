import React from 'react'
import styled,{keyframes} from 'styled-components';



export default class BurgerNavigation extends React.Component<{},{}>{
    render(){
        return(

                <NavigationBox>
                    <NavList>
                        <NavItem>Cutera</NavItem>
                        <NavItem>laser 2</NavItem>
                        <NavItem>laser 3</NavItem>
                        <NavItem>laser 4</NavItem>
                    </NavList>
                </NavigationBox>
        )
    }
}

const animationBurgerNav = keyframes`
0%{
right:-100%;
}

100%{

right:10%;
}
`;

const NavigationBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
    position: fixed;
    top: 70px;
    right: 10%;
    z-index: 10;
    height: 80vh;
    width: 80vw;
    background-color: #f5f5f5de;

    animation:0.3s ${animationBurgerNav} ease;
`
const NavList = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    height:100%;
    margin:0;
    padding:0;
`

const NavItem = styled.li`

font-size: 1.8em;
text-transform: uppercase;
font-weight: bold;
border: 2px solid #000;
padding: 14px;
letter-spacing: 5px;
background-color:#fff;

`