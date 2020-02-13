import React from "react";
import styled from "styled-components";
import Button from "../globalComponents/button";
import ChapterTitle from "../globalComponents/chapterTitle";
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
        {this.props.WindowWidth < 900 ? (
          <ChapterTitle title="Przebieg zabiegu" />
        ) : (
          <ChapterTitleDesktop title="Przebieg zabiegu" />
        )}

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
        <Line></Line>

        <IntervetionCourseSummaryBox>
          <IntervetionCourseH4>
            Chłodzenie kontaktowe - jeszcze większy komfort podczas zabiegu.
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

        <IntervetionCourseSummaryBox>
          <IntervetionCourseH4>
            Konsultacja lekarska - zrób pierwszy krok.
          </IntervetionCourseH4>
          <IntervetionCourseParagraph>
            Wiesz już, czym jest, jak działa i w czym może pomóc laser Excel V.
            Następnym krokiem jest uzyskanie informacji, czy zmiany, które
            chcesz usunąć, mogą być poddane działaniu lasera
          </IntervetionCourseParagraph>
          <IntervetionCourseParagraph>
            By to zrobić <span>umów się na konsultację</span> w naszym Centrum
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
  li {
    width: 100%;
    margin-bottom: 20px;
  }
  @media(min-width:900px){
    width:50%;
    font-size:1em;
  }
`;
const Line = styled.div`
  width: 50%;
  height: 2px;
  background-color: ${props => props.theme.interBlue};
  @media(min-width:900px){
    width:36%;
    margin-top:40px;
  }
`;

const IntervetionCourseSummaryBox = styled.div`
  width: 275px;
  text-align: center;
  margin-bottom: 15px;
  position: relative;
  @media(min-width:900px){
    width:600px;
    text-align:left;
  }
`;
const IntervetionCourseParagraph = styled.p`
  font-size: 0.8em;
  span {
    font-weight: bold;
  }
  @media(min-width:900px){
    font-size:1em;
  }
`;

const IntervetionCourseH4 = styled.h4`
  font-weight: bold;

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
