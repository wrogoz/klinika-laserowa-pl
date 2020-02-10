import React from 'react'
import styled from 'styled-components';


interface DescriptionWithImgOnLeftProps{
    imgSrc:string
    boxTitle:string
}

export default class DescriptionWithImgOnLeft extends React.Component<DescriptionWithImgOnLeftProps,{}>{
    render(){
        return(
            <>

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

            </>

        )
    }
}


    const ImageToLeft = styled.section`
        display:flex;
        position:relative;
        margin-top:30px;
        div{
            background-color:${props=>props.theme.interViolet};
            position:absolute;
            padding:5px 10px 5px 15px;
            bottom:20px;
            height:5%;
            right:14.5%;
            border-radius:5px;

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


            }
            @media(min-width:700px ){
                max-height: 370px;

            }
        `
    const DescriptionBox = styled.div`
        display:flex;
        flex-direction:column;
        text-align:justify;
        width:77%;
        padding-left:10%;
        @media(min-width:600px ){
            font-size:1.4em;
            padding-left:1%;
        }
    `

    const DescriptionH = styled.h3`
    text-transform:uppercase;
    `
    const DescriptionP = styled.p`
        margin:0;

    `