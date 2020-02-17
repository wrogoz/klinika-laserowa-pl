import React from 'react'
import styled from 'styled-components';
import ChapterTitleDesktop from '../globalComponents/chapterTitleDesktop';
import cutera1 from '../../images/cutera1.png';

export default class SelectIntervetion extends React.Component<{},{}>{
    render(){
        return(

                <SelectIntervetionBox>
                    <ChapterTitleDesktop
                    title='wybierz zabieg'
                    />
                    <CuteraBox>
                        <CuteraImg src={cutera1} alt='cutera1'/>
                        <LaserTitleBox>
                            <p>Cutera</p>
                        </LaserTitleBox>
                    </CuteraBox>

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

`
const CuteraImg = styled.img`
    height:150px;
`
const LaserTitleBox = styled.div`
    display:flex
`
