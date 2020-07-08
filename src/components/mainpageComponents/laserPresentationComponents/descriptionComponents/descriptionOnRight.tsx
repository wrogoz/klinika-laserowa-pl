import React from 'react'
import styled from 'styled-components';

interface LaserDescriptionProps{
    descriptionHeader:string
    descriptionText:string
}
 const LaserDescriptionOnRight= (props:LaserDescriptionProps)=> {
    return (
        <DescriptionBox>
                    <DescriptionH>
                        {props.descriptionHeader}

                    </DescriptionH>
                    <DescriptionP>
                        {props.descriptionText}
                    </DescriptionP>
                </DescriptionBox>
    )
}
const DescriptionBox = styled.div`
display:flex;
flex-direction:column;
text-align:justify;
width:77%;
padding-left:15%;
@media(min-width:500px){
    width: 72%;
    padding-left: 25%;
}
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
font-size:0.85em;
text-align:center;

`
const DescriptionP = styled.p`
    margin:0;

`
export default LaserDescriptionOnRight