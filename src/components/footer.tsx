import React, { Component } from 'react'
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export class Footer extends Component<{},{}> {
    render() {
        return (
            <footer>
                <Row>
                    <Col xs={12}>
                    footerr
                    </Col>
                </Row>

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
