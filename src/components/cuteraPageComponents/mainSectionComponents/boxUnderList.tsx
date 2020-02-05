import React from 'react';
import styled from 'styled-components';


interface BoxUnderListProps{
    firstLine:string
    secondLine:string
}

export default class BoxUnderList extends React.Component<BoxUnderListProps,{}>{
    render(){
        return(
            <Box>
                <p>
                    {this.props.firstLine}
                </p>
                <p>
                    {this.props.secondLine}
                </p>
            </Box>
        )
    }
}

const Box = styled.div`
    background-color:${props=>props.theme.interOrange};
    padding:10px 10px;
    width:80%;
    border-radius:7px;
    p{
        text-align:center;
        color:#fff;
        margin:0;
        font-size: 0.7em;
    }
`
