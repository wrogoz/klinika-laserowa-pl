import React, { Component } from 'react'
import styled from 'styled-components';

interface StyledOrderListProps{
    listArray:string[]
}
class StyledOrderList extends Component<StyledOrderListProps,{}> {
    render() {

        const array = this.props.listArray.map((el,key)=>{
            return(
                <li key={key}>{el}</li>
            )
        })

        return (
            <OrderList>
                {array}
            </OrderList>
        )
    }
}
const OrderList = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 0 35px;
  font-size: 0.8em;
  letter-spacing: 1px;
  width: 70%;
  color:#999;
  li {
    width: 100%;
    margin-bottom: 20px;
  }
  @media(min-width:900px){
    width:50%;
    font-size:1em;
  }
`;
export default StyledOrderList
