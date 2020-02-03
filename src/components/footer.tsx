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


<<<<<<< HEAD
<<<<<<< HEAD
const FooterBox = styled.footer`
    display:flex;
    display: -webkit-flexbox;
    flex-direction:column;
=======
const FooterRow = styled(Row)`

>>>>>>> parent of c2c3406... grid layout changed to flexbox
=======
const FooterRow = styled(Row)`

>>>>>>> parent of c2c3406... grid layout changed to flexbox
    color:#fff;
    margin-top:auto;
    padding: 15px 0 0 0;
    width:100%;
    border-top:1px solid grey;
    border-radius:15px 15px 0 0;
    background-color:#f7ad31;

`
<<<<<<< HEAD
<<<<<<< HEAD
const SecondRow = styled.div`
    display:flex;
    display: -webkit-flexbox;
    justify-content:space-between;
=======
const FooterCol = styled(Col)`
    padding-bottom: 20px;
    padding-right:0;
>>>>>>> parent of c2c3406... grid layout changed to flexbox
=======
const FooterCol = styled(Col)`
    padding-bottom: 20px;
    padding-right:0;
>>>>>>> parent of c2c3406... grid layout changed to flexbox
`
const FooterStroke = styled.div`
    height:1px;
    background-color:#fff;
    width:100%;
    margin-top:10px;
`
export default Footer
