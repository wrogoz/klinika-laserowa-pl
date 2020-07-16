import React from 'react'
import Header from './header'
import styled from 'styled-components';
import { ChangingWindowWidth } from '../redux/actions/actions';
import { connect } from 'react-redux';
import BurgerNavigation from './globalComponents/burgerNavigation';
interface ContactProps{
    BurgerNavVisible:boolean
    dispatch:any

}
 class Contact extends React.Component<ContactProps,{}>{
    componentDidMount(){
        window.scroll(0,0)
      }

      windowResize = ()=>{
        this.props.dispatch(ChangingWindowWidth(window.innerWidth))

      }
    render(){
        return(

            <>
                <Header pageName="Kontakt" />
                <ContactContainer>
                {this.props.BurgerNavVisible?<BurgerNavigation/>:null}
                    <h2>Kontakt</h2>
                    <section>
                    <p>(32)360 10 20</p>
                    <address>
                        <h3>Adres</h3>
                        <p>ul. Krasickiego 14</p>
                        <p>40-500 Będzin</p>
                    </address>
                    <div>
                        <h3>Godziny otwarcia</h3>
                        <p>Pon-Pt 8:00 - 19:00</p>
                        <p>Sob 9:00 - 13:00</p>
                    </div>
                    </section>


                    {window.addEventListener('resize',this.windowResize)}
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
flex-direction:column;
section,div,address{
    display:flex;
    flex-direction:column;
    justify-content:center;
align-items:center;
}
h2{
    color: ${props=>props.theme.interBlue};
    text-transform:uppercase;
    font-size: 2em;
    margin:0;
}
p{
    font-size: 1.3em;

}
`
const mapStateToProps = (state: { BurgerNavVisible:boolean}) => {
    return {
      BurgerNavVisible: state.BurgerNavVisible,


    };
  };
export default connect(mapStateToProps)(Contact)