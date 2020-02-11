import React from 'react'
import styled from 'styled-components';


interface ChapterTitleDesktopProps{
    title:string
}
export default class ChapterTitleDesktop extends React.Component<ChapterTitleDesktopProps,{}>{
    render(){
        return(

                <ChapterTitleBox>
                    <StrokeLeft/>
                    <ChapterTitle>{this.props.title}</ChapterTitle>
                    <StrokeRight/>
                </ChapterTitleBox>
        )
    }
}
const ChapterTitleBox = styled.div`

    margin:80px 0 80px 0;
    width:100%;
    font-family: 'Oswald', sans-serif;
    display:flex;
    justify-content:center;
    align-items:center;

    flex-wrap:nowrap;
`

const StrokeLeft = styled.div`

    height: 3px;
    width:100%;
    background-color:${props=>props.theme.interOrange};
    background: linear-gradient(to right, ${props=>props.theme.interOrange} 0%, ${props=>props.theme.interOrange} 78%, rgba(255,255,255,1) 100%);

`
const StrokeRight = styled(StrokeLeft)`
background: linear-gradient(to right, rgba(246,246,246,1) 0%, rgba(255,255,255,1) 0%, ${props=>props.theme.interOrange} 22%, ${props=>props.theme.interOrange} 100%);
`

const ChapterTitle = styled.h3`

    display: flex;
    justify-content: center;
    text-transform: uppercase;
    padding:0;
    margin: 0;
    display:flex;
    flex-wrap:nowrap;
    font-size: 1.6em;
    letter-spacing: 2px;
    min-width: 37%;
    letter-spacing:4px;


`
