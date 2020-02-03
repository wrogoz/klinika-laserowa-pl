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
        position:relative;
        margin-top:30px;
        div{
            background-color:#8849a5;
            position:absolute;
            padding:5px 10px 5px 15px;
            bottom:20px;
            right:37px;
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
        padding-right:40px;
        min-height: 340px;
        width:100%;


        border-radius:15px;
        }
    `
    const DescriptionBox = styled.div`
        margin: 20px 40px 20px 10%;
    `

    const DescriptionH = styled.h3`
    text-transform:uppercase;
    `
    const DescriptionP = styled.p`


    `