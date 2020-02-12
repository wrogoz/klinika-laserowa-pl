import React from 'react'
import styled from 'styled-components';


interface DescriptionWithImgOnLeftProps{
    imgSrc:string
    boxTitle:string
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

                <DescriptionBox>
                    <DescriptionH>
                        Lorem Ipsum Ipsum Ipsum  Ipsum Ipsum Ipsum Ipsum

                    </DescriptionH>
                    <DescriptionP>
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Expedita, esse repellendus.
                        Vel sit impedit, aperiam nam quo dolor. Debitis esse temporibus
                        repellendus consectetur non placeat laudantium, aut iusto ab recusandae.
                    </DescriptionP>
                </DescriptionBox>

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
            padding:5px 10px 7px 15px;
            bottom:20px;
            height:5%;
            right:14.5%;
            border-radius:5px;
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
                padding-right:45px;
                margin:0;
                color:#fff;

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
                height:392px;
            }
            }

        `
    const DescriptionBox = styled.div`
        display:flex;
        flex-direction:column;
        text-align:justify;
        width:77%;
        padding-left:10%;
        @media(min-width:500px ){
        padding-left: 3%;
        width: 72%;
        }
        @media(min-width:600px ){
            font-size:1.4em;

        }
        @media(min-width:1240px){
            justify-content:center;
            padding-left:4%;
        }
    `

    const DescriptionH = styled.h3`
    text-transform:uppercase;
    `
    const DescriptionP = styled.p`
        margin:0;

    `