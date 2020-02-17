import React from 'react';
import styled from 'styled-components';
import cutera1 from '../../images/cutera1.png';



export default class SelectLaser extends React.Component<{},{}>{
    render(){
        return(
            <LaserBox >
                <LaserRow>
                    <Laser>
                        <LaserImg src={cutera1} alt='laser image'/>
                        <LaserTitle>cutera</LaserTitle>
                    </Laser>
                    <Laser>
                        <LaserImg src={cutera1} alt='laser image'/>
                        <LaserTitle>cutera</LaserTitle>
                    </Laser>
                </LaserRow>
                <LaserRow>
                    <Laser>
                            <LaserImg src={cutera1} alt='laser image'/>
                            <LaserTitle>cutera</LaserTitle>
                    </Laser>
                    <Laser>
                        <LaserImg src={cutera1} alt='laser image'/>
                        <LaserTitle>cutera</LaserTitle>
                    </Laser>
                </LaserRow>

            </LaserBox>

        )
    }
}
const LaserBox = styled.div`
    width:60%;
    display:flex;
    justify-content:center;
    align-items:center;
`

const LaserRow = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    width:100%;
`
const Laser = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:40px;
`
const LaserImg = styled.img`
    height:280px;
    width:280px;
    border-radius:15px;
    transition:0.3s;
    &:hover{
        transform:scale(1.1)
    }
`

const LaserTitle = styled.p`
    color:${props=>props.theme.interViolet};
    text-transform:uppercase;
    font-size: 1.4em;

`