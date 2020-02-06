import React from 'react'
import styled from 'styled-components';



export default class BurgerNavigation extends React.Component<{},{}>{
    render(){
        return(

                <NavigationBox>
                    <NavList>
                        <NavItem>laser 1</NavItem>
                        <NavItem>laser 2</NavItem>
                        <NavItem>laser 3</NavItem>
                        <NavItem>laser 4</NavItem>
                    </NavList>
                </NavigationBox>
        )
    }
}


const NavigationBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
    position: fixed;
    top: 70px;
    right: center;
    z-index: 10;
    height: 80vh;
    width: 80vw;
    background-color: rgba(0,0,0,.8);
`
const NavList = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:0;
    padding:0;
`

const NavItem = styled.li`
    color:#fff;
    font-size:2em;
    text-transform:uppercase;
    font-weight:bold;
`