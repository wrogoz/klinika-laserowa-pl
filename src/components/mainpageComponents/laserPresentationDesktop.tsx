import React from 'react'
import styled from 'styled-components';
import Nowoczesnosc from '../../images/mainImages/nowoczesnosc.png'
import Personel from '../../images/mainImages/personel.png'
import Szpital1dnia from '../../images/mainImages/szpital1dnia.png'
import backgroundLaserImg from '../../images/background_deskt.png';
import DescriptionWithImgRight from './laserPresentationComponents/descriptionWithImgRight';
import DescriptionWithImgLeft from './laserPresentationComponents/descriptionWithImgLeft';
import ChapterTitleDesktop from '../globalComponents/chapterTitleDesktop';

export default class LaserPresentation extends React.Component<{},{}>{
    render(){
        return(
            <LaserPresentationBox>


                <ChapterTitleDesktop title='Dlaczego warto skorzystać?'/>
                <DescriptionWithImgLeft
                imgSrc={Personel}
                boxTitle = 'Personel'
                descriptionHeader='Doświadczony personel lekarski'
                descriptionText='Zatrudniamy ponad setkę lekarzy z różnych specjalności medycznych. Wszystkie zabiegi laserowe są wykonywane przez czynnych zawodowo, dobrze przeszkolonych i doświadczonych lekarzy, a nie przez kosmetyczki czy kosmetologów.'
                />
                <DescriptionWithImgRight
                    imgSrc={Szpital1dnia}
                    boxTitle = 'Jakość'
                    descriptionHeader='Szpital jednego dnia'
                    descriptionText='Część zabiegów laserowych (np. usuwanie żylaków nóg) jest prowadzona na sali operacyjnej w szpitalu, który stanowi integralną część placówki. Pozostałe zabiegi odbywają się w warunkach ambulatoryjnych.'
                />
                <DescriptionWithImgLeft
                imgSrc={Nowoczesnosc}
                boxTitle = 'Nowoczesność'
                descriptionHeader='Inwestujemy w nowoczesność'
                descriptionText='W Centrach Medycznych INTER-MED do zabiegów i diagnostyki stosujemy najnowsze technologie. Średnio raz w roku dla prowadzenia zabiegów i diagnostyki dokupujemy nowoczesne urządzenia jak np. laser EXCEL V – Cutera.'
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
    background-position: -1px -145px;

`
