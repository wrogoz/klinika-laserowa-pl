import React, { Component } from 'react';
import styled from 'styled-components';

interface DescriptionTextProps{
    subtitle?:string
    descriptionText:string
}

export class DescriptionText extends Component<DescriptionTextProps,{}> {
    render() {
        return (
            <DescriptionBox>
                <DescriptionSubTitle>
                    {this.props.subtitle}
                </DescriptionSubTitle>
                <DescriptionParagraph>
                    {this.props.descriptionText}
                </DescriptionParagraph>
            </DescriptionBox>
        )
    }
}
const DescriptionBox = styled.div`

  text-align: center;
  justify-content:center;
  position: relative;
  display: flex;
  align-items: center;
  @media(min-width:900px){
    text-align:left;
    width:100%;
  }
`;


const DescriptionSubTitle = styled.h4`

  font-size:1em;
  font-weight:normal;
  text-transform:uppercase;

  @media(min-width:900px){
    font-size:1.05em;
  }
`;
const DescriptionParagraph = styled.p`
  font-size: 0.8em;
  color:#999;
  width:70%;
  margin:0;
  text-align:center;
  letter-spacing:1px;
  @media(min-width:900px){
    font-size:1em;
    width:54%;
  }
`;
export default DescriptionText
