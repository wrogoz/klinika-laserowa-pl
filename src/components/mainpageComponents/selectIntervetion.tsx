import React from 'react'
import styled from 'styled-components';
import ChapterTitleDesktop from '../globalComponents/chapterTitleDesktop';


export default class SelectIntervetion extends React.Component<{},{}>{
    render(){
        return(

                <SelectIntervetionBox>
                    <ChapterTitleDesktop
                    title='wybierz zabieg'
                    />
                    <p>tu beda fotki laserów</p>
                </SelectIntervetionBox>
        )
    }
}

const SelectIntervetionBox = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
`
