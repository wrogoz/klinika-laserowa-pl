import React from 'react'

import styled from 'styled-components';


interface DescriptionWithImgOnRightProps{
    imgSrc:string,
    boxTitle:string
}

export default class DescriptionWithImgOnRight extends React.Component<DescriptionWithImgOnRightProps,{}>{
    render(){
        return(
            <DescriptionWithImgBox>

                <ImageToRight>
                    <img src={this.props.imgSrc} alt="cutera_photo"/>
                    <div>
                        <p>{this.props.boxTitle}</p>
                    </div>
                </ImageToRight>
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
        flex-direction:row-reverse;
        width:70%;
        margin-bottom:40px;
    }
`

    const ImageToRight = styled.section`

        display:flex;
        justify-content:flex-end;
        margin-top:30px;
        position:relative;
        div{
            background-color:${props=>props.theme.interOrange};
            position:absolute;
            z-index:5;
            padding:5px 10px 10px 100px;
            bottom:20px;
            height:5%;
            left:14.5%;
            border-radius:5px;
            @media(min-width:1240px){
                height: 5%;
                left: -1%;
            }
            p{
                text-transform:uppercase;
                padding:0;
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
            @media(min-width:700px ){
                max-height: 370px;
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
    padding-left:15%;
    @media(min-width:600px ){
        font-size:1.4em;
    }
    @media(min-width:1240px){
        justify-content:center;
        padding: 0 4% 0 0;
    }
    `

    const DescriptionH = styled.h3`
    text-transform:uppercase;

    `
    const DescriptionP = styled.p`
        margin:0;

    `