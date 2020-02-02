import React, { Component } from 'react'
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export class Footer extends Component<{},{}> {
    render() {
        return (
            <FooterContainer>
                <Row>
                    <Col xs={12}>
                    footerr
                    </Col>
                </Row>

            </FooterContainer>
        )
    }
}


const FooterContainer = styled.footer`

    background-color:#fff;
    margin-top:auto;
    width:100%;
    height:150px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-top:1px solid grey;
    background-color:#f7ad31;
`
export default Footer
