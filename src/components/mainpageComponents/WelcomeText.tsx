import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class WelcomeText extends React.Component<{},{}>{
    render(){
        return(
            <Row>
            <Col xs='12'>
            <h2>Witamy serdecznie na stronie</h2>
            <h2>kliniki laserowej</h2>
            </Col>
        </Row>
        )
    }
}
