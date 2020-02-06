import React from 'react';
import styled from 'styled-components';


interface ButtonProps{
    btnText:string
    onClick?:any
}

export default class Button extends React.Component<ButtonProps,{}>{
    render(){
        return(
            <BasicButton onClick={this.props.onClick}>{this.props.btnText}</BasicButton>
        )
    }
}
const BasicButton = styled.button`
border:none;
background:${props=>props.theme.interOrange};
width:80px;
padding:5px;
border-radius:5px;
color:#fff;
font-family: 'Roboto', sans-serif;
cursor:pointer;
`