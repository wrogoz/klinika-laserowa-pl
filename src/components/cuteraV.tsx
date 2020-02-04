import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import styled from "styled-components";
import TitleSectionComponent from './cuteraPageComponents/TitleSection';
class CuteraV extends React.Component<{}, {}> {
  render() {
    return (
      <MainContainer>
        <Header pageName="Cutera Excel V" />
        <TitleSectionComponent/>

      <main>
        <div>
          <div>----</div>
          <h2>komu i w czym może pomóc laser Excel V ?</h2>
        </div>
        <h3>Wskazania do zabiegu z użyciem lasera excel V</h3>
        <p>Laser excel V uwalnia od zmian skórnych, których obecność
          powoduje duży dyskomfort
        </p>
        <div>
          + ikona
        </div>
        <h3>
          Jeśli na twoim ciele, obecne są zmiany typu:
        </h3>
        <ul>
          <li>trądzik różowaty</li>
          <li>pajączki</li>
          <li>rumień</li>
          <li>zmiany naczyniowe w nogach</li>
          <li>naczyniaki</li>
          <li>znamiona</li>
          <li>rozproszone zmiany naczyniowe</li>
          <li>
            rozproszone zmiany barwnikowe, takie jak plamy posłoneczne
          </li>
          <li>
            blizny będące konsekwencją przebytych urazów
            lub wykonanych zabiegów chirurgicznych
          </li>
        </ul>
        <div>
          <p>Możesz to zmienić</p>
          <p>Nie musisz obawiać się bólu, blizn czy komplikacji po zabiegu</p>
        </div>

        <div>
          <div>kreska</div>
          <h2>Czy każdy może skorzystać z tego, co oferuje laser excel V</h2>
        </div>

        <h3>Przeciwwskazania</h3>

        <div>kreska ---</div>

        <h4>Do okoliczności, które wykluczają użycie lasera, należą:</h4>

        <ul>
          <li>ciąża</li>
          <li>świeża opalenizna</li>
          <li>
            spożywanie naparu z dziurawca i nagietka - należy je odstawić
            na 3 tygodnie przed zabiegiem
          </li>
          <li>bielactwo</li>
          <li>łuszczyca</li>
          <li>skłonność do bliznowców</li>
          <li>nowotwory skóry</li>
          <li>otwarte rany</li>
          <li>okolice tatuażu i permanentnego tatuażu</li>
          <li>przyjmowanie leków światłouczulających i leków psychotropowych</li>
        </ul>

        <div>
          <p>
            Jak przed każdym zabiegiem, tak i tu,
             ostateczną decyzję podejmuje lekarz
          </p>
        </div>
      </main>

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
