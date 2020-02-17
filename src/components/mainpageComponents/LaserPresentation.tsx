import React from 'react'
import styled from 'styled-components';
import Cutera1 from '../../images/cutera1.png';
import Womens from '../../images/womens.png';
import DescriptionWithImgRight from './laserPresentationComponents/descrtiptionWithImgRight';
import DescriptionWithImgLeft from './laserPresentationComponents/descriptionWithImgLeft';
import ChapterTitleDesktop from '../globalComponents/chapterTitleDesktop';

export default class LaserPresentation extends React.Component<{},{}>{
    render(){
        return(
            <ReasonToTryRow>
                <ChapterTitleDesktop
                title='dlaczego warto skorzystać?'
                />
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
    max-width:100%;
`
const Stroke = styled.div`

    height:2px;
    width: 100%;
    background-color:${props=>props.theme.interBlue};


`
