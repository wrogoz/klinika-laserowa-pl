import React from 'react'
import styled from 'styled-components';
import Button from '../globalComponents/button';
import ChapterTitle from '../globalComponents/chapterTitle';
import laserOnRight from '../../images/laserOnRight.png';
import { SignInShowHide } from '../../redux/actions/actions';
import { connect } from 'react-redux';

interface IntervetionCourseProps{
    dispatch:any
}
class IntervetionCourse extends React.Component<IntervetionCourseProps,{}>{

    SignIn=()=>{
        this.props.dispatch(SignInShowHide());
    }

    render(){
        return(
            <IntervetionCourseBox>
                <ChapterTitle
                title='Przebieg zabiegu'
                />


            <OrderList>
              <li>
                W zależności od rodzaju
                zmian na skórze, parametry zabiegowe zostają odpowiednio dopasowane
              </li>
              <li>
                Wiązka emitowana przez laser Excel V nakierowana zostaje na zmianę naczyniową
                na skórze.
              </li>
              <li>
                W wyniku jej działania, dochodzi do wybiórczej fototermolizy, co w praktyce oznacza
                pochłonięcie energii lasera tylko przez hemoglobinę.
                Dzięki temu nie dochodzi do uszkodzenia innych fragmentów skóry
              </li>
              <li>
                Absorpcja energii powoduje podgrzanie naczynek, a następnie całkowite zamknięcie
                ściany naczynia. Laser, eleminuje w ten sposób uszkodzenie naczy,
                przywracając skórze normalny odcień i kolor
              </li>
            </OrderList>
            <Line></Line>

                <IntervetionCourseSummaryBox>
                <IntervetionCourseH4>Chłodzenie kontaktowe - jeszcze większy komfort podczas zabiegu.</IntervetionCourseH4>
                <IntervetionCourseParagraph>
                Jak już wiesz, wiązki lasera powodują podgrzanie naczynek na skórze.
                By złagodzić związane z tym odczucia, laser Excel V wyposażony został
                w najnowocześniejszy system chłodzenia równoległego.
                </IntervetionCourseParagraph>
                <IntervetionCourseParagraph>
                    W praktyce oznacza to, że temperatura skóry,
                    obniżana jest przed, w trakcie i po emisji impulsu.
                </IntervetionCourseParagraph>
                </IntervetionCourseSummaryBox>

                <IntervetionCourseSummaryBox>
                    <IntervetionCourseH4>Konsultacja lekarska - zrób pierwszy krok.</IntervetionCourseH4>
                    <IntervetionCourseParagraph>
                    Wiesz już, czym jest, jak działa i w czym może pomóc laser Excel V.
                    Następnym krokiem jest uzyskanie informacji, czy zmiany,
                    które chcesz usunąć, mogą być poddane działaniu lasera
                    </IntervetionCourseParagraph>
                    <IntervetionCourseParagraph>
                        By to zrobić <span>umów się na konsultację</span> w naszym
                        Centrum Medycznym Inter Med.
                    </IntervetionCourseParagraph>
                    <IntervetionCourseParagraph>
                        Rozmowa z lekarzem, pozwoli też rozwiać wszelkie wątpliwości,
                        dotyczące zarówno samego zabiegu, jak i efeków jego działania,
                        w zetknięciu ze zmianami na twojej skórze.
                    </IntervetionCourseParagraph>
                </IntervetionCourseSummaryBox>
                <Button
                onClick={this.SignIn}
                btnText="Zapisz się"
                />

            </IntervetionCourseBox>
        )
    }
}

const IntervetionCourseBox = styled.section`

    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-image:url("${laserOnRight}");
    background-size: auto 100%;
    background-position: 50% 40px;
    background-repeat: no-repeat;
    padding-bottom:15px;


`

const OrderList = styled.ol`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 0 20px 0 35px;
    font-size: 0.8em;
    letter-spacing: 1px;
    li{
        margin-bottom:20px;
    }
`
const Line = styled.div`
    width:50%;
    height:2px;
    background-color:${props=>props.theme.interBlue};
    `

    const IntervetionCourseSummaryBox = styled.div`
    width: 275px;
    text-align: center;
    margin-bottom:15px;
    position:relative;
    `
    const IntervetionCourseParagraph = styled.p`
        font-size:0.8em;
        span{
            font-weight:bold;
        }
    `

    const IntervetionCourseH4 = styled.h4`
        font-weight:bold;
        font-size: 0.8em;
    `
    export default  connect()(IntervetionCourse);