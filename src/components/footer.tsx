import React, { Component } from 'react'
import styled from 'styled-components';
import instagram from '../images/instagram.png';
import twitter from '../images/twitterLogo.png';
import facebook from '../images/facebook.png';
import { connect } from 'react-redux';



interface FooterProps{
    WindowWidth:number;
}
class Footer extends Component<FooterProps,{}> {
    render() {
        return (

                <FooterBox>
                            <FirstRow>
                                <a href="tel:+48601197666">
                                    <FooterBtn>
                                        Zapisz się
                                    </FooterBtn>
                                </a>
                            </FirstRow>
                            <SecondRow>
                            <p>Obserwuj nas:</p>
                            <Social src={instagram} alt="instragram"/>
                            <Social src={twitter} alt="twitter"/>
                            <Social src={facebook} alt="facebook"/>
                           {this.props.WindowWidth<1240? <FooterStroke/> : null}
                            </SecondRow>
                            <ThirdRow>
                                <p>Inter-Med 2020</p>
                            </ThirdRow>
                </FooterBox>


        )
    }
}


const FooterBox = styled.footer`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#fff;
    margin-top:5%;
    padding:10px 0 5px 0;
    width:100%;
    border-radius:15px 15px 0 0;
    background-color:${props=>props.theme.interOrange};
    @media(min-width:700px){
        padding:30px 0;
    }






`
const FirstRow=styled.div`
width:100%;
display:flex;
justify-content:center;
`

const SecondRow = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    margin:10px 0 0 0;


    p{
        padding:0 0 0 5px;
        margin: 0 auto;
        font-size: 0.8em;
    }
    @media(min-width:1240px){
        justify-content:center;
    }
`
const ThirdRow = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    font-size:0.6em;
    p{
        padding-bottom:0;
        margin-bottom: 0;
        letter-spacing:3px;
    }

`
const FooterStroke = styled.div`
    height:1px;
    background-color:#fff;
    width: 50%;
    align-self:center;
    margin-left:10px;
    @media(min-width:1240px){
        width: 68%;
    }
`
const Social = styled.img`
height: 15px;
width: 15px;
margin: 0 5px;
@media(min-width:700px){
    height: 30px;
    width: 30px;
}
@media(min-width:1240px){
    margin: 10px 20px 0px 20px;
}
`

const FooterBtn = styled.button`
    border:none;
    background:${props=>props.theme.interBlue};
    width:80px;
    padding:5px;
    border-radius:10px;
    color:#fff;
    font-family: 'Roboto', sans-serif;
    cursor:pointer;
    @media(min-width:750px){
        padding: 10px;
        font-size: 1.1em;
        width:120px;
    }

`

const mapStateToProps = (state: {WindowWidth:number  }) => {
    return {

      WindowWidth:state.WindowWidth
    };
  };

  export default connect(mapStateToProps)(Footer);
