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

    @media(min-width:900px){
        margin-top:40px;
        width: 35%;

    }
    p{
        text-align:center;
        color:#fff;
        margin:0;
        font-size: 0.8em;
    }

`
