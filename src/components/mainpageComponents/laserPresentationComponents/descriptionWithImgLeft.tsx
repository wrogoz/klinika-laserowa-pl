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
            right:73px;
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

        min-height: 260px;
        width:80%;


        border-radius:15px;
        }
    `
    const DescriptionBox = styled.div`
        display:flex;
        flex-direction:column;
        width:77%;
        padding-left:3%;
    `

    const DescriptionH = styled.h3`
    text-transform:uppercase;
    `
    const DescriptionP = styled.p`
        margin:0;

    `