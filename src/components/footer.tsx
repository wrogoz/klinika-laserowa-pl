import React, { Component } from 'react'
import styled from 'styled-components';
import facebook from '../images/footer-icons/facebook.svg';
import instagram from '../images/footer-icons/twitter.svg';
import twitter from '../images/footer-icons/twitter.svg';
export class Footer extends Component<{},{}> {
    render() {
        return (

                <FooterBox>

                            <p>2020 - Inter-Med</p>
                            <SecondRow>
                            <IconRow>Obserwuj nas:  <Twitter/><Instagram/> <Fb/></IconRow>
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
    padding: 0px 0 15px 20px;
    width:100%;
    border-radius:15px 15px 0 0;
    background-color:${props=>props.theme.interOrange};

`
const SecondRow = styled.div`
    display:flex;
    justify-content:space-between;
`
const FooterStroke = styled.div`
    height:1px;
    background-color:#fff;
    width:48%;
    align-self:center;
`
const IconRow = styled.div`
    display:flex;
    justify-content:space-evenly;
`
const Fb=styled.i`
background: url('${facebook}');
height: 20px;
width: 20px;
display:flex;
color:#fff;
margin:0 5px;
`
const Instagram = styled(Fb)`
background: url('${instagram}');
`
const Twitter = styled(Fb)`
background:url('${twitter}')
`
export default Footer
