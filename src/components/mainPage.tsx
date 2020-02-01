import React from 'react'
import {connect} from 'react-redux';
import WomenFace from '../images/women-face.png';
import Cutera1 from '../images/cutera1.png';
import Header from './header';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MainPage extends React.Component<{},{}>{


    render(){
        return(<MainContainer>

        <Header
         pageName="strona główna"/>
        <Row>
            <StyledCol xs={12}>
            <WomenFaceBox>
                <WomenFaceTextSection>
                    <h1>Wybierz zabieg, a My spełnimy <span>Twoje potrzeby</span></h1>
                    <button>Więcej</button>
                </WomenFaceTextSection>
            </WomenFaceBox>
            </StyledCol>
        </Row>
            <Row>
                <Col xs='12'>
                <h2>Witamy serdecznie na stronie</h2>
                <h2>kliniki laserowej</h2>
                </Col>
            </Row>
            <SelectRow>
                <SelectColumn xs='12'>
                    <select>
                    <option>
                            Rodzaje zabiegów laserowych
                        </option>
                        <option>
                            Laser Cutera Excel V
                        </option>
                        <option>
                            Laser Cutera Excel V
                        </option>
                        <option>
                            Laser Cutera Excel V
                        </option>
                    </select>
                </SelectColumn>
            </SelectRow>
            <ReasonToTryRow noGutters={true}>
                <Col xs={5}>
                    <Stroke/>
                </Col >
                <ReasonToTryCol xs={7}>
                    <h3>Dlaczego warto skorzystać</h3>
                </ReasonToTryCol >
                <ImageToRightCol xs={12}>
                    <img src={Cutera1} alt="cutera_photo"/>
                    <div>
                        <p>Profity</p>
                    </div>
                </ImageToRightCol>
            </ReasonToTryRow>

        </MainContainer>

        )
    }
}
const StyledCol = styled(Col)`
    padding:0;
    margin:0;
`
const MainContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;

    h2{
        color:grey;
        text-transform:uppercase;
        font-size:1em;
        text-align:center;
        min-width:200px;
        :last-of-type{
            margin:0 auto 15px auto;
            border-bottom:1px solid #204f9f;
            max-width:220px;
            padding-bottom:10px;


        }


    }
    .row{
        width:100%;

        .col{
            width:100%;
            padding:0;
            margin:0;

        }
    }

`

const WomenFaceBox = styled.section`
    display:flex;
    justify-content:center;
    height:190px;
    width:100%;
    background-image:url("${WomenFace}");
    background-repeat:no-repeat;
    background-size: 400px 100%;
    margin-bottom:15px;
`
const WomenFaceTextSection = styled.section`
    display:flex;
    flex-direction:column;
    width:190px;
    margin:48px 0 0 80px;
    h1{
        letter-spacing:2px;
        font-family: 'Lato', sans-serif;
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
        color:#fff;
    }
`
const SelectRow = styled(Row)`
    margin-bottom:45px;
`
const SelectColumn = styled(Col)`
    display:flex;
    justify-content:center;
    select{
        border:none;
        background-color:#8849a5;
        padding:5px 20px 5px 30px;


        border-radius:5px;
        color:#fff;
        option{
            background-color:#ccc;
            color:#fff;
            border:1px solid #ccc;

        }
        option:first-of-type{
            background-color:#8849a5;
            border:none;
        }
    }
`
const ReasonToTryRow = styled(Row)`
    align-items:center;
`
const Stroke = styled.div`

    height:2px;
    width:100%;
    background-color:#8849a5;

`
const ReasonToTryCol = styled(Col)`

    h3{
            margin:0;
            margin-left:4px;
            color:#8849a5;
            font-size:1em;
        }
    `
    const ImageToRightCol = styled(Col)`
        margin-top:30px;
        div{
            background-color:#f7ad31;
            position:absolute;
            padding:5px 10px 5px 100px;
            bottom:20px;
            left:37px;
            border-radius:5px;
            p{
                text-transform:uppercase;
                padding:0;
                margin:0;
                color:#fff;

            }
        }
    img{
        position:relative;
        margin-left:40px;
        min-height: 340px;
        width:100%;


        border-radius:15px;
        }
    `
const mapStateToProps = (state: { randomData: string;}) => {
    return {
      randomData: state.randomData
    }
  }




export default connect(
    mapStateToProps
    )(MainPage);