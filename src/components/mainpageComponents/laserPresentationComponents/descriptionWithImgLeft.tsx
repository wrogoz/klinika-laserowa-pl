import React from 'react'
import styled from 'styled-components';
import LaserDescriptionOnLeft from './descriptionComponents/descriptionOnLeft'

interface DescriptionWithImgOnLeftProps{
    imgSrc:string
    boxTitle:string
    descriptionHeader:string
    descriptionText:string
}

export default class DescriptionWithImgOnLeft extends React.Component<DescriptionWithImgOnLeftProps,{}>{
    render(){
        return(
            <DescriptionWithImgBox>

                <ImageToLeft>
                    <img src={this.props.imgSrc} alt="cutera_photo"/>
                    <div>
                        <p>{this.props.boxTitle}</p>
                    </div>
                </ImageToLeft>
                <LaserDescriptionOnLeft
                    descriptionHeader={this.props.descriptionHeader}
                    descriptionText={this.props.descriptionText}
                />

            </DescriptionWithImgBox>

        )
    }
}

const DescriptionWithImgBox = styled.div`
    display:flex;
    flex-direction:column;
    @media(min-width:1240px){
        flex-direction:row;
        width:70%;
        margin-bottom:40px;
    }
`
    const ImageToLeft = styled.section`
        display:flex;
        position:relative;
        margin-top:30px;

        div{
            background-color:${props=>props.theme.interViolet};
            position:absolute;
            z-index:1;
            padding: 10px 2% 10px 60px;
            top:12%;
            height:5%;
            right:14.5%;
            border-radius:5px;
            display:flex;
            align-items:center;
            @media(min-width:500px ){

                right:24.5%;
            }
            @media(min-width:1240px){
                height: 6%;
                right: -0.5%;
            }
            p{
                text-transform:uppercase;
                padding:0;
                padding-right:3px;
                margin:0;
                color:#fff;
                font-size: 0.8em;
                @media(min-width:1240px){
                    font-size: 1em;
                }
            }
        }
        img{

            position:relative;
            height: auto;
            width: 85%;
            border-radius:15px;
            max-height:282px;
            @media(min-width:500px ){
                width: 75%;

            }
            @media(min-width:700px ){
                max-height: 370px;

            }
            @media(min-width:845px ){
                max-height: 475px;

            }
            @media(min-width:1050px ){
                max-height: 535px;
            }
            @media(min-width:1240px){
                width:520px;
                height:250px;
            }
            }

        `
