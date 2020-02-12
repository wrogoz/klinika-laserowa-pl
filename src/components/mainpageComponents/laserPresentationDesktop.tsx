import React from 'react'
import styled from 'styled-components';
import Cutera1 from '../../images/cutera1.png';
import backgroundLaserImg from '../../images/background_deskt.png';
import DescriptionWithImgRight from './laserPresentationComponents/descrtiptionWithImgRight';
import DescriptionWithImgLeft from './laserPresentationComponents/descriptionWithImgLeft';
import ChapterTitleDesktop from '../globalComponents/chapterTitleDesktop';
import SelectLaser from './laserPresentationDesktopComponents/selectLaser';
export default class LaserPresentation extends React.Component<{},{}>{
    render(){
        return(
            <LaserPresentationBox>
                <ChapterTitleDesktop title='Wybierz rodzaj zabiegu laserowego'/>
                <SelectLaser />
                <ChapterTitleDesktop title='Dlaczego warto skorzystać?'/>
                <DescriptionWithImgLeft
                imgSrc={Cutera1}
                boxTitle = 'Potencjał'
                />
                <DescriptionWithImgRight
                    imgSrc={Cutera1}
                    boxTitle = 'Profity'
                />
                <DescriptionWithImgLeft
                imgSrc={Cutera1}
                boxTitle = 'Potencjał'
                />
            </LaserPresentationBox>
        )
    }
}

const LaserPresentationBox = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    background-image:url('${backgroundLaserImg}');
    background-repeat:no-repeat;
    background-size: 100% 82%;
    background-position: -1px -283px;

`
