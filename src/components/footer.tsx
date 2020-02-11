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

        <p>2020 - Inter-Med - szerokość okna: {this.props.WindowWidth} px </p>
                            <SecondRow>
                            <p>Obserwuj nas:</p>
                            <Social src={instagram} alt="instragram"/>
                            <Social src={twitter} alt="twitter"/>
                            <Social src={facebook} alt="facebook"/>
                           {this.props.WindowWidth<1240? <FooterStroke/> : null}
                            </SecondRow>


                </FooterBox>


        )
    }
}


const FooterBox = styled.footer`
    display:flex;
    flex-direction:column;
    color:#fff;
    margin-top:5%;
    padding:10px 0;
    width:100%;
    border-radius:15px 15px 0 0;
    background-color:${props=>props.theme.interOrange};
    @media(min-width:700px){
        padding:30px 0;
    }
    p{
        margin:0;
        padding: 5px 5px 5px 20px;
        @media(min-width:700px){
            font-size:1.4em;
            padding: 15px 5px 5px 20px;
        }
        @media(min-width:1240px){
            text-align: center;
            font-size: 1.8em;

        }

    }

    }

`
const SecondRow = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    @media(min-width:1240px){
        justify-content:center;
    }
`
const FooterStroke = styled.div`
    height:1px;
    background-color:#fff;
    width:44%;
    align-self:center;
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
const mapStateToProps = (state: {WindowWidth:number  }) => {
    return {

      WindowWidth:state.WindowWidth
    };
  };

  export default connect(mapStateToProps)(Footer);
