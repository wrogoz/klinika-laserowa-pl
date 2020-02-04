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
        display:flex;
        justify-content:flex-end;
        margin-top:30px;
        position:relative;
        div{
            background-color:${props=>props.theme.interOrange};
            position:absolute;
            padding:5px 10px 5px 100px;
            bottom:20px;
            left:73px;
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
        height: 260px;
        width:80%;
        border-radius:15px;
        }
    `
    const DescriptionBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    width:77%;
    padding-left:20%
    `

    const DescriptionH = styled.h3`
    text-transform:uppercase;

    `
    const DescriptionP = styled.p`
        margin:0;

    `