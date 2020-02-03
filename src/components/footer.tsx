import React, { Component } from 'react'
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export class Footer extends Component<{},{}> {
    render() {
        return (

                <FooterRow>
                    <FooterCol xs={12}>
                        <Row>
                            <Col xs={12}>
                                <p>2020 - Inter-Med</p>
                            </Col>
                        </Row>
                        <Row noGutters={true}>
                            <Col xs={6}>Obserwuj nas: I T Fb</Col>
                            <Col xs={6}>
                                <FooterStroke/>
                            </Col>
                    </Row>
                    </FooterCol>
                </FooterRow>


        )
    }
}


const FooterRow = styled(Row)`

    color:#fff;
    margin-top:auto;
    padding: 15px 0 0 0;
    width:100%;
    border-top:1px solid grey;
    border-radius:15px 15px 0 0;
    background-color:#f7ad31;

`
const FooterCol = styled(Col)`
    padding-bottom: 20px;
    padding-right:0;
`
const FooterStroke = styled.div`
    height:1px;
    background-color:#fff;
    width:100%;
    margin-top:10px;
`
export default Footer
