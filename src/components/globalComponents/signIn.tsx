import React from 'react';
import styled from 'styled-components';
import logoIm from '../../images/logo-im.png';



export default class SignIn extends React.Component<{},{}>{
    render(){
        return(
            <SignInBox>
                <Logo src={logoIm} alt="logo inter med"/>
                <Phone href="tel:+48601197666">601197666</Phone>
            </SignInBox>
        )
    }
}

const SignInBox = styled.div`
    height:200px;
    width:200px;
    position:sticky;
    bottom:40%;
    z-index:5;
    background-color:#fff;
    border:1px solid black;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding-top:10px;

`
const Logo = styled.img`
height:20px;
width:auto;


`

const Phone = styled.a`
    text-decoration:none;
    color:${props=>props.theme.interBlue};
    font-size:2em;
    margin:auto 0;
`

