import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Cutera1 from '../../images/cutera1.png';
import Womens from '../../images/womens.png';
import DescriptionWithImgRight from './laserPresentationComponents/descrtiptionWithImgRight';
import DescriptionWithImgLeft from './laserPresentationComponents/descriptionWithImgLeft';


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
                <DescriptionWithImgRight
                    imgSrc={Cutera1}
                    boxTitle = 'Profity'

                />
                <DescriptionWithImgLeft
                imgSrc={Womens}
                boxTitle = 'Potencjał'
                />
                <DescriptionWithImgRight
                    imgSrc={Womens}
                    boxTitle = 'Lorem Ipsum'

                />
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
