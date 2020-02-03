import React from 'react'
import styled from 'styled-components';
import Cutera1 from '../../images/cutera1.png';
import Womens from '../../images/womens.png';
import DescriptionWithImgRight from './laserPresentationComponents/descrtiptionWithImgRight';
import DescriptionWithImgLeft from './laserPresentationComponents/descriptionWithImgLeft';


export default class LaserPresentation extends React.Component<{},{}>{
    render(){
        return(
            <ReasonToTryRow>
                <PresentationStartTextBox>
                    <Stroke/>
                    <h3>Dlaczego warto skorzystać</h3>
                </PresentationStartTextBox>
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

const ReasonToTryRow = styled.section`
    align-items:center;
`
const Stroke = styled.div`

    height:2px;
    width:30%;
    background-color:#204f9f;
    margin-bottom:2%;

`
const PresentationStartTextBox = styled.div`
    display:flex;
    display: -webkit-flexbox;
    align-items:center;
    flex-wrap:no-wrap;
    color:#204f9f;
    h3{
        font-size:0.85em;
        text-transform:uppercase;
        padding-left:3px;

    }
`
