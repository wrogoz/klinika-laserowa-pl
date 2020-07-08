import React from 'react'
import styled from 'styled-components';
import Cutera1 from '../../images/cutera1.png';
import Nowoczesnosc from '../../images/mainImages/nowoczesnosc.png'
import Personel from '../../images/mainImages/personel.png'
import Szpital1dnia from '../../images/mainImages/szpital1dnia.png'
import Womens from '../../images/womens.png';
import DescriptionWithImgRight from './laserPresentationComponents/descriptionWithImgRight';
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
                    imgSrc={Personel}
                    boxTitle = 'Personel'
                    descriptionHeader='Doświadczony personel lekarski'
                    descriptionText='Zatrudniamy ponad setkę lekarzy z różnych specjalności medycznych. Wszystkie zabiegi laserowe są wykonywane przez czynnych zawodowo, dobrze przeszkolonych i doświadczonych lekarzy, a nie przez kosmetyczki czy kosmetologów.'
                />
                <DescriptionWithImgLeft
                imgSrc={Szpital1dnia}
                boxTitle = 'Jakość'
                descriptionHeader='Szpital jednego dnia'
                descriptionText='Część zabiegów laserowych (np. usuwanie żylaków nóg) jest prowadzona na sali operacyjnej w szpitalu, który stanowi integralną część placówki. Pozostałe zabiegi odbywają się w warunkach ambulatoryjnych.'
                />
                <DescriptionWithImgRight
                    imgSrc={Nowoczesnosc}
                    boxTitle = 'Nowoczesność'
                    descriptionHeader='Inwestujemy w nowoczesność'
                    descriptionText='W Centrach Medycznych INTER-MED do zabiegów i diagnostyki stosujemy najnowsze technologie. Średnio raz w roku dla prowadzenia zabiegów i diagnostyki dokupujemy nowoczesne urządzenia jak np. laser EXCEL V – Cutera.'
                />
            </ReasonToTryRow>
        )
    }
}

const ReasonToTryRow = styled.section`
    align-items:center;
    max-width:100%;
`

