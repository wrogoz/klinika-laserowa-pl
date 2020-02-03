import React from 'react'

import styled from 'styled-components';


interface DescriptionWithImgOnRightProps{
    imgSrc:string,
    boxTitle:string
}

export default class DescriptionWithImgOnRight extends React.Component<DescriptionWithImgOnRightProps,{}>{
    render(){
        return(
            <>

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

            </>

        )
    }
}


    const ImageToRight = styled.section`
        margin-top:30px;
        position:relative;
        div{
            background-color:#f7ad31;
            position:absolute;
            padding:5px 10px 5px 100px;
            bottom:20px;
            left:37px;
            border-radius:5px;
            p{
                text-transform:uppercase;
                padding:0;
                margin:0;
                color:#fff;

            }
        }
    img{
        position:relative;
        padding-left:40px;
        min-height: 260px;
        width:100%;


        border-radius:15px;
        }
    `
    const DescriptionBox = styled.div`
        margin: 20px 10% 20px 40px;
    `

    const DescriptionH = styled.h3`
    text-transform:uppercase;
    `
    const DescriptionP = styled.p`


    `