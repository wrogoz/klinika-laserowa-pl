import React from 'react'
import styled from 'styled-components';

import Paragraph from '../globalComponents/paragraphUnderTitle';
import ChapterTitleDesktop from '../globalComponents/chapterTitleDesktop';
import laserBlue from '../../images/laser_blue.png';
import laserYellow from '../../images/laser_yellow.png';
import { connect } from 'react-redux';

interface HowItWorksProps{
    WindowWidth:number
}
class HowItWorks extends React.Component<HowItWorksProps,{}>{
    render(){
        return(
            <HowItWorksBox>

                <ChapterTitleDesktop
                title='Jak działa excel V&trade;?'
                />
                <Paragraph
                    text='Laser excel V Cutera to urządzenie,
                    które emituje wiązkę laserową o dwóch róznych
                    długosciach fali (532 i 1064nm), dzięki czemu,
                    możliwe jest wykonywanie róznego rodzaju zabiegów'
                />

                <LaserLengthSection>
                    <IconImg src={laserBlue} alt='blue icon laser'/>

                    <p>fala 532nm</p>
                    <LaserLengthDescription>
                        Leczenie zmian powierzchniowych, takich jak teleangiektazje,
                        zaczerwienienie rozproszone, PWS, poikilodermia oraz zmian pigmentacyjnych
                    </LaserLengthDescription>

                    <IconImg src={laserYellow} alt='blue icon laser'/>
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

const IconImg = styled.img`

    height: 35px;
    width: 45px;
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
    font-size: 0.8em;
    text-align: center;
    letter-spacing: 1px;
    color:#999;
    @media(min-width:1000px){
        width: 450px;
        font-size: 1em;
    }
`

const mapStateToProps = (state: { WindowWidth:number }) => {
    return {

        WindowWidth:state.WindowWidth
    };
  };

  export default connect(mapStateToProps)(HowItWorks);