import React from 'react'
import styled from 'styled-components';


interface ParagraphProps{
    text:string
}
export default class Paragraph extends React.Component<ParagraphProps,{}>{
    render(){
        return(
            <Paragrph>{this.props.text}</Paragrph>
        )
    }
}

const Paragrph = styled.p`
    width: 250px;
    color: #999;
    text-align: center;
    font-size: 0.6em;
    text-transform: uppercase;
`