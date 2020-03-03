import React, { Component } from 'react'
import phone from '../../images/phone.svg'
import styled from 'styled-components';
export class callForAction extends Component {
    render() {
        return (
            <Phone href="tel:+48601197666">
              <img src={phone} alt="sef" />
            </Phone>
        )
    }
}

export default callForAction

const Phone = styled.a`

    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 100%;
    padding: 9px;
    background: #fff;
    img {
      color: #fff;
      height: 19px;

    }
`