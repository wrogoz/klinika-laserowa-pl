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
width: 300px;
color: #999;
text-align: center;
font-size: 0.8em;
text-transform: uppercase;
}
`