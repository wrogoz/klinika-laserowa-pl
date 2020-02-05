import React from 'react'
import styled from 'styled-components';
import ChapterTitle from '../globalComponents/chapterTitle';
import Paragraph from '../globalComponents/paragraphUnderTitle';
import laserIcon from '../../images/laserIcon.svg';
export default class HowItWorks extends React.Component<{},{}>{
    render(){
        return(
            <HowItWorksBox>
                <ChapterTitle
                title='Jak działa excel V'
                />
                <Paragraph
                    text='Laser excel V Cutera to urządzenie,
                    które emituje wiązkę laserową o dwóch róznych
                    długosciach fali (532 i 1064nm), dzięki czemu,
                    możliwe jest wykonywanie róznego rodzaju zabiegów'
                />

                <LaserLengthSection>
                    <IconImg/>

                    <p>fala 532nm</p>
                    <LaserLengthDescription>
                        Leczenie zmian powierzchniowych, takich jak teleangiektazje,
                        zaczerwienienie rozproszone, PWS, poikilodermia oraz zmian pigmentacyjnych
                    </LaserLengthDescription>

                    <IconImg/>
                    <p>fala 1064nm</p>
                    <LaserLengthDescription>
                        Leczenie zmian naczyniowych, a dokładnie pękniętych naczyń,
                        obszernych zmian PWS, pęcherzy i żylaków kończyn dolnych
                    </LaserLengthDescription>

                </LaserLengthSection>
            </HowItWorksBox>
        )
    }
}

const HowItWorksBox = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
`

const IconImg = styled.i`
    background: url("${laserIcon}");
    height: 40px;
    width: 40px;
    display: block;
}
`
const LaserLengthSection = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const LaserLengthDescription = styled.p`
    width: 290px;
    font-size: 0.6em;
    text-align: center;
    font-weight: bold;
    letter-spacing: 1px;
`

