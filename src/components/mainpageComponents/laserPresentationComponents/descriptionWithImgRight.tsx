import React from 'react'
import LaserDescriptionOnRight from './descriptionComponents/descriptionOnRight'
import styled from 'styled-components';


interface DescriptionWithImgOnRightProps{
    imgSrc:string,
    boxTitle:string
    descriptionHeader:string
    descriptionText:string
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
                <LaserDescriptionOnRight
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
            z-index:1;
            padding:10px 10px 10px 10%;
            top: 12%;
            height:5%;
            left:14.5%;
            border-radius:5px;
            display:flex;
            align-items:center;
            @media(min-width:500px){
                left:24.5%;
            }
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
        @media(min-width:500px){
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
