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
            <LaserPresentationBox>
                <ChapterTitleDesktop title='Wybierz rodzaj zabiegu laserowego'/>
            </LaserPresentationBox>
        )
    }
}

const LaserPresentationBox = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;

`
