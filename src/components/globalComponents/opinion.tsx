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
    @media(min-width:750px){
        width:60%;
    }
    @media(min-width:1000px){
        width:45%;
    }
    img{

        height:71px;
        width:71px;
        border-radius:25%;

        @media(min-width:750px){
            height:110px;
            width:110px;
        }
    }

`
const OpinionTxt = styled.p`
    font-size:0.8em;
    letter-spacing:1px;
    margin-left:10px;
    width: 80%;
    @media(min-width:750px){
        margin-left:25px;
    }
`
export default OpinionComponent;