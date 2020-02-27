import React from 'react'
import styled from 'styled-components';



interface ListWithTitleProps{
    text:string,
    array:string[]
}


export default class ListWithTitle extends React.Component<ListWithTitleProps,{}>{
    render(){

      const ListItems = this.props.array.map((el:string,key:number)=>{
        return <li key={key}>{el}</li>
      })
        return(

                <UlContainer>
                    <PreUlText>
                        {this.props.text}
                    </PreUlText>
                    <List>
                      {ListItems}
                    </List>


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
  padding:0 20px;
  text-align:center;
  @media(min-width:900px){
    font-size:1em;
  }

`

const List = styled.ul`
  display:flex;
  flex-direction:column;
  padding:0 20%;
  color:#999;
`




