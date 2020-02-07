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
    width: 100%;
    background-color:${props=>props.theme.interBlue};


`
const PresentationStartTextBox = styled.div`
    display:flex;
    align-items:center;

    color:${props=>props.theme.interBlue};
    h3{
        font-family:'Oswald',sans-serif;
        font-size:0.85em;
        text-transform:uppercase;
        padding-left:3px;
        min-width: 250px;
        @media(min-width:600px){
            font-size: 1.2em;
            min-width: 365px;
         }
         @media(min-width:700px){
            font-size: 1.8em;
         min-width: 500px;
         }



    }
`
