import React from 'react'
import styled from 'styled-components';
import ChapterTitleDesktop from '../globalComponents/chapterTitleDesktop';
import cutera1 from '../../images/cutera1.png';

export default class SelectIntervetion extends React.Component<{},{}>{
    render(){
        return(

                <SelectIntervetionBox>
                    <ChapterTitleDesktop
                    title='wybierz rodzaj zabiegu'
                    />
                    <CuteraBox>
                        <CuteraImg src={cutera1} alt='cutera1'/>
                        <LaserTitleBox>
                            <p>Cutera</p>
                        </LaserTitleBox>
                    </CuteraBox>
                    <OtherLasersBox>
                        <LaserBox>
                            <LaserImg src={cutera1} alt='laser img'/>
                            <p>laser name</p>
                        </LaserBox>
                        <LaserBox>
                            <LaserImg src={cutera1} alt='laser img'/>
                            <p>laser name</p>
                        </LaserBox>
                        <LaserBox>
                            <LaserImg src={cutera1} alt='laser img'/>
                            <p>laser name</p>
                        </LaserBox>
                    </OtherLasersBox>

                </SelectIntervetionBox>
        )
    }
}

const SelectIntervetionBox = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    padding:0 15%;
`

const CuteraBox = styled.div`
    display:flex;
    flex-direction:column;
    width:60%;
    justify-content: center;
    align-items: center;

`
const CuteraImg = styled.img`
    width:100%;
    height:auto;
`
const LaserBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    &:nth-of-type(2){
        margin:0 10px;
    }
    p{
        text-align:center;
    }
`
const LaserImg = styled.img`
width: 100%;
height:auto;

`
const LaserTitleBox = styled.div`
    display:flex

`
const OtherLasersBox = styled.div`
    display:flex;
    width:60%;
    justify-content:space-evenly;
    align-items:center;
`