import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import styled from "styled-components";
import TitleSectionComponent from './cuteraPageComponents/TitleSection';
import MainSection from './cuteraPageComponents/mainSection';
class CuteraV extends React.Component<{}, {}> {
  render() {
    return (
      <MainContainer>
        <Header pageName="Cutera Excel V" />
        <TitleSectionComponent/>
        <MainSection/>


      <section>
        <div>
          <div>kreska</div>
          <h2>Jak działa excel V</h2>
        </div>

        <p>
          Laser Excel V firmy Cutera to urządzenie,
          które emituje wiązkę laserową o dwóch różnych długosciach fali
          (532 i 1064 nm) dzięki czemu, możliwe jest wykonywanie różnego rodzaju zabiegów
          </p>

        <div>
          <div>ikona</div>
          <p>fala 532nm</p>
          <p>
            Leczenie zmian powierzchniowych, takich jak teleangiektazje,
            zaczerwienienie rozproszone, PWS, poikilodermia oraz zmian pigmentacyjnych
          </p>
        </div>

        <div>
          <div>ikona</div>
          <p>fala 1064nm</p>
          <p>
            Leczenie zmian naczyniowych, a dokładnie pękniętych naczyń,
            obszernych zmian PWS, pęcherzy i żylaków kończyn dolnych
          </p>
        </div>
      </section>

      <section>
          <div>
            <div>kreska</div>
            <h2>Przebieg zabiegu</h2>
          </div>
          <ul>
            <ol>
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
            </ol>
          </ul>
        <div>
        <h4>Chłodzenie kontaktowe - jeszcze większy komfort podczas zabiegu.</h4>
        <p>
          Jak już wiesz, wiązki lasera powodują podgrzanie naczynek na skórze.
          By złagodzić związane z tym odczucia, laser Excel V wyposażony został
          w najnowocześniejszy system chłodzenia równoległego.
          </p>
          <p>
            W praktyce oznacza to, że temperatura skóry,
            obniżana jest przed, w trakcie i po emisji impulsu.
          </p>
        </div>

        <div>
        <h4>Konsultacja lekarska - zrób pierwszy krok.</h4>
        <p>
          Wiesz już, czym jest, jak działa i w czym może pomóc laser Excel V.
          Następnym krokiem jest uzyskanie informacji, czy zmiany,
          które chcesz usunąć, mogą być poddane działaniu lasera
          </p>
          <p>
            By to zrobić <span>umów się na konsultację</span> w naszym
            Centrum Medycznym Inter Med.
          </p>
          <p>
            Rozmowa z lekarzem, pozwoli też rozwiać wszelkie wątpliwości,
            dotyczące zarówno samego zabiegu, jak i efeków jego działania,
            w zetknięciu ze zmianami na twojej skórze.
          </p>
        </div>
        <button>Zapisz się</button>
      </section>

      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  `

const mapStateToProps = (state: { randomData: string }) => {
  return {
    randomData: state.randomData
  };
};

export default connect(mapStateToProps)(CuteraV);
