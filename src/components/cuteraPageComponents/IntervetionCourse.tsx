import React from "react";
import styled from "styled-components";
import Button from "../globalComponents/button";

import ChapterTitleDesktop from "../globalComponents/chapterTitleDesktop";
import laserOnRight from "../../images/laserOnRight.png";

import { connect } from "react-redux";

interface IntervetionCourseProps {
  WindowWidth: number;
}
class IntervetionCourse extends React.Component<IntervetionCourseProps, {}> {
  render() {
    return (
      <IntervetionCourseBox>

          <ChapterTitleDesktop title="Przebieg zabiegu" />


        <OrderList>
          <li>
            W zależności od rodzaju zmian na skórze, parametry zabiegowe zostają
            odpowiednio dopasowane
          </li>
          <li>
            Wiązka emitowana przez laser Excel V nakierowana zostaje na zmianę
            naczyniową na skórze.
          </li>
          <li>
            W wyniku jej działania, dochodzi do wybiórczej fototermolizy, co w
            praktyce oznacza pochłonięcie energii lasera tylko przez
            hemoglobinę. Dzięki temu nie dochodzi do uszkodzenia innych
            fragmentów skóry
          </li>
          <li>
            Absorpcja energii powoduje podgrzanie naczynek, a następnie
            całkowite zamknięcie ściany naczynia. Laser, eleminuje w ten sposób
            uszkodzenie naczy, przywracając skórze normalny odcień i kolor
          </li>
        </OrderList>


        <IntervetionCourseSummaryBox>
        <ChapterTitleDesktop
          title='chłodzenie kontaktowe'
          />
          <IntervetionCourseH4>
            Jeszcze większy komfort podczas zabiegu.
          </IntervetionCourseH4>
          <IntervetionCourseParagraph>
            Jak już wiesz, wiązki lasera powodują podgrzanie naczynek na skórze.
            By złagodzić związane z tym odczucia, laser Excel V wyposażony
            został w najnowocześniejszy system chłodzenia równoległego.
          </IntervetionCourseParagraph>
          <IntervetionCourseParagraph>
            W praktyce oznacza to, że temperatura skóry, obniżana jest przed, w
            trakcie i po emisji impulsu.
          </IntervetionCourseParagraph>
        </IntervetionCourseSummaryBox>


        <ChapterTitleDesktop
          title='Konsultacja lekarska zrób pierwszy krok'
          />
        <IntervetionCourseSummaryBox>


          <IntervetionCourseParagraph>
            Wiesz już, czym jest, jak działa i w czym może pomóc laser Excel V.
            Następnym krokiem jest uzyskanie informacji, czy zmiany, które
            chcesz usunąć, mogą być poddane działaniu lasera
          </IntervetionCourseParagraph>
          <IntervetionCourseParagraph>
            By to zrobić umów się na konsultacjęw naszym Centrum
            Medycznym Inter Med.
          </IntervetionCourseParagraph>
          <IntervetionCourseParagraph>
            Rozmowa z lekarzem, pozwoli też rozwiać wszelkie wątpliwości,
            dotyczące zarówno samego zabiegu, jak i efeków jego działania, w
            zetknięciu ze zmianami na twojej skórze.
          </IntervetionCourseParagraph>
        </IntervetionCourseSummaryBox>
        <a href="tel:+48601197666">
          <Button btnText="Zapisz się" />
        </a>
      </IntervetionCourseBox>
    );
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
    @media(min-width:700px){
        background-position: 100% 40px;
      }


`;

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


const IntervetionCourseSummaryBox = styled.div`

  text-align: center;
  margin-bottom: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width:900px){
    text-align:left;
    width:100%;
  }
`;
const IntervetionCourseParagraph = styled.p`
  font-size: 0.8em;
  color:#999;
  width:70%;

  @media(min-width:900px){
    font-size:1em;
    width:54%;
  }
`;

const IntervetionCourseH4 = styled.h4`

  font-size:1em;
  font-weight:normal;
  text-transform:uppercase;

  @media(min-width:900px){
    font-size:1.05em;
  }
`;

const mapStateToProps = (state: { WindowWidth: number }) => {
  return {
    WindowWidth: state.WindowWidth
  };
};

export default connect(mapStateToProps)(IntervetionCourse);
