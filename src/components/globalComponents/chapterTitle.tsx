import React from 'react'
import styled from 'styled-components';


interface ChapterTitleProps{
    title:string
}
export default class ChapterTitle extends React.Component<ChapterTitleProps,{}>{
    render(){
        return(

                <PresentationStartTextBox>
                    <Stroke/>
                    <h3>{this.props.title}</h3>
                </PresentationStartTextBox>
        )
    }
}


const Stroke = styled.div`

    height: 2px;
    width: 100%;
    margin-top: 15px;
    background-color:${props=>props.theme.interViolet};


`
const PresentationStartTextBox = styled.div`

    margin:20px 0 10px 0;
    width:100%;
    font-family: 'Oswald', sans-serif;
    display:flex;
    align-items:center;

    flex-wrap:no-wrap;
    color:${props=>props.theme.interBlue};
    h3{
        min-width: 38%;
        font-size: 0.85em;
        text-transform: uppercase;
        padding-left: 3px;
        margin: 0;
        padding-top: 15px;
        font-size: 0.8em;
        letter-spacing: 2px;
        @media(min-width:600px){
            min-width: 18%;
        }

    }
`
