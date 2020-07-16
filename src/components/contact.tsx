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
                        <div>
                        <h3>Telefon</h3>
                        <p>(32)360 10 20</p>
                        </div>



                    <div>
                        <h3>Adres</h3>
                        <p>ul. Krasickiego 14</p>
                        <p>40-500 Będzin</p>
                    </div>
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
@media(min-width:1240px ){
        margin:0 5%;
        align-items:flex-start;
        justify-content:center;
}

}
section{
    @media(min-width:1240px ){
        width:80vw;
        display:flex;
        flex-direction:row;
}
}
h2{
    color: ${props=>props.theme.interBlue};
    text-transform:uppercase;
    font-size: 2em;
    margin:0;
}
h3{
    @media(min-width:1240px ){
    text-align:center;
    margin:30px auto 0 auto;
    }
}
p{
    margin-top:0;
    font-size: 1.3em;
    @media(min-width:1240px ){
        margin-bottom:0;
        margin-top:19px;
    }
}
`
const mapStateToProps = (state: { BurgerNavVisible:boolean}) => {
    return {
      BurgerNavVisible: state.BurgerNavVisible,


    };
  };
export default connect(mapStateToProps)(Contact)