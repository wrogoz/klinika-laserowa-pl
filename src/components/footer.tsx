import React, { Component } from 'react'
import styled from 'styled-components';

export class Footer extends Component<{},{}> {
    render() {
        return (

                <FooterBox>

                            <p>2020 - Inter-Med</p>
                            <SecondRow>
                            <p>Obserwuj nas: I T Fb</p>
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
    margin-top:auto;
    padding: 15px 0 0 40px;
    width:100%;
    border-top:1px solid grey;
    border-radius:15px 15px 0 0;
    background-color:#f7ad31;

`
const SecondRow = styled.div`
    display:flex;
    justify-content:space-between;
`
const FooterStroke = styled.div`
    height:1px;
    background-color:#fff;
    width:50%;
    margin-top:10px;
`
export default Footer
