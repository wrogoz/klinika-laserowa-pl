import React from 'react'
import styled from 'styled-components';
import { inject,observer } from 'mobx-react';



interface ListWithTitleProps{
    text:string,
    arrayType:string[]
}
@inject("store")
@observer
export default class ListWithTitle extends React.Component<ListWithTitleProps,{}>{
    render(){

      const list = this.props.arrayType.map((el:string,key:number)=>{
        return <ListItem key={key}>{el}</ListItem>
      })

        return(

                <UlContainer>
                    <PreUlText>
                        {this.props.text}
                    </PreUlText>
                    <ul>
                        {list}
                    </ul>


                </UlContainer>
        )
    }
}

const UlContainer = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;

`
const PreUlText = styled.p`
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
  padding: 0 15px;
  text-align:center;

`

const ListItem = styled.li`
margin-left:18px;
color:#999;
`

