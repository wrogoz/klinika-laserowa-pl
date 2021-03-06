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
    width:100%;


`
const PreUlText = styled.p`
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
  padding:0 20px;
@media(min-width:450px){
  width:60%;
}
  text-align:center;
  @media(min-width:900px){
    font-size:1em;
    width:55%;

  }

`

const List = styled.ul`
  display:flex;
  flex-direction:column;
  width:55%;
  color:#999;
  @media(min-width:1200px){
    padding-left:15%;
  }
`




