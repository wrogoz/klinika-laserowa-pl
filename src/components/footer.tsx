import React, { Component } from 'react'
import styled from 'styled-components';
import LogoIm from '../images/logo-im.png';
export class Footer extends Component<{},{}> {
    render() {
        return (
            <FooterContainer>
                <Logo/>

            </FooterContainer>
        )
    }
}

const Logo = styled.div`

    background-image:url("${LogoIm}");

    background-repeat:no-repeat;
    background-size:100%;
    background-position-y:center;
    height:80%;
    width:32%;
`
const FooterContainer = styled.footer`
    width:100%;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:auto;
    border-top:1px solid red;
`
export default Footer
