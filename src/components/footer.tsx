import React, { Component } from 'react'
import styled from 'styled-components';

export class Footer extends Component<{},{}> {
    render() {
        return (
            <footer>
                footerr
            </footer>
        )
    }
}


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
