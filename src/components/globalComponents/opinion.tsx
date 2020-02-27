import React, { Component } from 'react'
import styled from 'styled-components';

interface OpinionComponentProps{
    imgSrc:string
    text:string
}
export class OpinionComponent extends Component <OpinionComponentProps,{}>{
    render() {
        return (

               <Opinion>
                    <img src={this.props.imgSrc} alt='women face'/>
                    <OpinionTxt>
                        {this.props.text}
                    </OpinionTxt>
                </Opinion>


        )
    }
}
const Opinion = styled.div`
    display:flex;
    width:70%;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
    img{

        height:70px;

        width:30%;
        border-radius:25%;
    }
`
const OpinionTxt = styled.p`
    font-size:0.8em;
    letter-spacing:1px;
    margin-left:10px;
`
export default OpinionComponent;