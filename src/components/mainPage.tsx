import React from 'react'
import {connect} from 'react-redux';
import WomenFace from '../images/women-face.png';
import Header from './header';
import styled from 'styled-components';

class MainPage extends React.Component<{},{}>{


    render(){
        return(<MainContainer>
        <Header
         pageName="strona główna"/>
        <WomenFaceBox>
            <WomenFaceTextSection>
            <h1>Wybierz zabieg, a my spełnimy <span>Twoje potrzeby</span></h1>
            <button>Więcej</button>
            </WomenFaceTextSection>

        </WomenFaceBox>
        </MainContainer>

        )
    }
}

const WomenFaceBox = styled.section`
    display:flex;
    justify-content:center;
    height:190px;
    width:100%;

    background-image:url("${WomenFace}");
    background-repeat:no-repeat;
    background-size: 115% 100%;
    background-position:-35% 0%;
    padding-left:110px;
    padding-top:20px;

`
const WomenFaceTextSection = styled.section`
    display:flex;
    flex-direction:column;
    width:180px;
    margin-top:15px;
    h1{
        font-size:1.4em;
        margin-bottom:20px;
        span{

            color:#204f9f;
        }
    }
    button{
        border:none;
        background:#f7ad31;
        width:80px;
        padding:5px;
        border-radius:5px;
        align-self:flex-end;
        margin-right:10px;
    }
`
const MainContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;

`

const mapStateToProps = (state: { randomData: string;}) => {
    return {
      randomData: state.randomData
    }
  }




export default connect(
    mapStateToProps
    )(MainPage);