import React, { Component } from 'react'
import styled from 'styled-components';
import instagram from '../images/instagram.png';
import twitter from '../images/twitterLogo.png';
import facebook from '../images/facebook.png';

export class Footer extends Component<{},{}> {
    render() {
        return (

                <FooterBox>

                            <p>2020 - Inter-Med</p>
                            <SecondRow>
                            <p>Obserwuj nas:</p>
                            <Social src={instagram} alt="instragram"/>
                            <Social src={twitter} alt="twitter"/>
                            <Social src={facebook} alt="facebook"/>
                            <FooterStroke/>
                            </SecondRow>


                </FooterBox>


        )
    }
}


const FooterBox = styled.footer`
    display:flex;
    flex-direction:column;
    color:#fff;
    margin-top:15px;
    padding: 15px 0 0 0px;
    width:100%;
    border-radius:15px 15px 0 0;
    background-color:${props=>props.theme.interOrange};
    p{
        padding-left:20px;
    }
`
const SecondRow = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const FooterStroke = styled.div`
    height:1px;
    background-color:#fff;
    width:44%;
    align-self:center;
`
const Social = styled.img`
height: 15px;
width: 15px;
margin: 0 5px;
`
export default Footer
