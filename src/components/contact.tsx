import React from 'react'
import Header from './header'
import styled from 'styled-components';
export default class Contact extends React.Component<{},{}>{
    componentDidMount(){
        window.scroll(0,0)
      }
    render(){
        return(

            <>
                <Header pageName="strona główna" />
                <ContactContainer>
                    contact page
            </ContactContainer>
            </>
        )
    }
}

const ContactContainer=styled.div`
width:100vw;
height:80vh;
display:flex;
justify-content:center;
align-items:center;
`