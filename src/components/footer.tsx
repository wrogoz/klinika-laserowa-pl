import React, { Component } from 'react'
import styled from 'styled-components';
import LogoIm from '../images/logo-im.png';
export class Footer extends Component<{},{}> {
    render() {
        return (
<<<<<<< HEAD
            <footer>
                footerr
            </footer>
=======
            <FooterContainer>
                <Logo/>

            </FooterContainer>
>>>>>>> 8cf41b997627c48aebff735e6c874799f2f44200
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
    position:sticky;
    bottom:0;
    background-color:#fff;
    margin-top:auto;
    width:100%;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid grey;
`
export default Footer
