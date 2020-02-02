import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Cutera1 from '../../images/cutera1.png';
export default class LaserPresentation extends React.Component<{},{}>{
    render(){
        return(
            <ReasonToTryRow noGutters={true}>
                <Col xs={5}>
                    <Stroke/>
                </Col >
                <ReasonToTryCol xs={7}>
                    <h3>Dlaczego warto skorzystać</h3>
                </ReasonToTryCol >
                <ImageToRightCol xs={12}>
                    <img src={Cutera1} alt="cutera_photo"/>
                    <div>
                        <p>Profity</p>
                    </div>
                </ImageToRightCol>
            </ReasonToTryRow>
        )
    }
}

const ReasonToTryRow = styled(Row)`
    align-items:center;
`
const Stroke = styled.div`

    height:2px;
    width:100%;
    background-color:#8849a5;

`
const ReasonToTryCol = styled(Col)`

    h3{
            margin:0;
            margin-left:4px;
            color:#8849a5;
            font-size:1em;
        }
    `
    const ImageToRightCol = styled(Col)`
        margin-top:30px;
        div{
            background-color:#f7ad31;
            position:absolute;
            padding:5px 10px 5px 100px;
            bottom:20px;
            left:37px;
            border-radius:5px;
            p{
                text-transform:uppercase;
                padding:0;
                margin:0;
                color:#fff;

            }
        }
    img{
        position:relative;
        margin-left:40px;
        min-height: 340px;
        width:100%;


        border-radius:15px;
        }
    `