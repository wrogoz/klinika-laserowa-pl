import React from 'react'
import styled from 'styled-components';

import ChapterTitleDesktop from '../globalComponents/chapterTitleDesktop';
import ListWithTitle from '../globalComponents/listWithTitle';
import BoxUnderList from '../globalComponents/boxUnderList';
import smartM2 from '../../images/lasotronixImgs/laser3.jpg';

import plusIcon from '../../images/plus.png';
import minusIcon from '../../images/minus.png';
import { connect } from 'react-redux';

interface SmartMainSectionProps{
  Indications:string[],
  ContraIndications:string[],
  WindowWidth:number
}
class SmartMainSection extends React.Component<SmartMainSectionProps,{}>{
    render(){
        return(
            <MainBox>

            <ChapterTitleDesktop
            title='Komu i w czym może pomóc laser smart M?'
          />

            <Indications>Wskazania</Indications>


            <Sign src={plusIcon}/>

            <ListWithTitle
            text='Jeśli tylko nie ma wyraźnych przeciwwskazań do zabiegu EVLT z użyciem lasera, warto rozważyć skorzystanie z niego. Wskazane jest to szczególnie, gdy cierpisz na jedną lub kilka spośród następujących dolegliwości: '
            array={[
              'krew cofa się w żyle, z powodu nieprawidłowej funkcji jej zastawek',
              'twoje żylaki wyglądają nieestetycznie i chcesz to zmienić',
              'czujesz, że twoje nogi są bardzo ciężkie',
              'bolą cię nogi',
              'odczuwasz pulsowanie w nogach',
               'cierpisz z powodu przewlekłego zmęczenia nóg',
               'masz zespół niespokojnych nóg',
               'często pojawiają się skurcze nocne nóg',
               'żylaki samoistnie krwawią'

            ]}
            />
            <BoxUnderList
              firstLine='Spełniając najwyższe standardy, Laser SMART M jest bezpieczny '
              secondLine='zarówno dla lekarza, jak i dla pacjenta'
              />
             <ChapterTitleDesktop
            title='Nie można zastosować laseroterapii metodą EVLT, jeśli: '
          />

            <ContraIndications>Przeciwwskazania</ContraIndications>
            <Sign src={minusIcon}/>

            <ListWithTitle
            text='Mimo, iż samo działanie lasera jest bardzo bezpieczne, są sytuacje, w których
            jego użycie jest niewskazane,a nawet wręcz zabronione'
            array={[
                ' masz skazy naczyniowe',
                 'cierpisz na zaburzenia krzepliwości krwi',
                'masz nieuregulowane nadciśnienie tętnicze',
                 'pojawiły się stany zapalne',
                 'wdała się infekcja ropna skóry i śluzówek',
                 'jesteś w ciąży',
                 'zdiagnozowano u ciebie chorobę nowotworową',
                 'masz cukrzycę w zaawansowanym stadium',
                 'twoje żyły są zarośnięte lub są w nich zakrzepy -  w praktyce, uniemożliwia to skuteczne przeprowadzenie narzędzi wewnątrznaczyniowych przez naczynie'
            ]}
            />
            <BoxUnderList
              firstLine='Jak przed każdym zabiegiem, tak i tu,'
              secondLine='ostateczną decyzję podejmuje lekarz'
            />


          </MainBox>

        )
    }
}

const MainBox = styled.main`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  width:100%;

  @media(min-width:1200px){
    background-size: auto 40%;
    background-position: 102% 25%;
  background-image:url("${smartM2}");
  background-repeat: no-repeat;
  }


}

`
const Indications = styled.h3`
  width:280px;
  font-size: 0.8em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 15px;
    &&+p{
      width: 250px;
      color: #999;
      text-align: center;
      font-size: 0.6em;
      text-transform: uppercase;
    }
    @media(min-width:900px){
      font-size: 1.4em;
      width: 400px;
      &&+p{
        font-size:1.4em;
        width:600px;
      }
  }
`
const ContraIndications = styled.h3`
  text-transform: uppercase;
  color: #000;
  font-size: 0.8em;
  @media(min-width:900px){
    font-size:1.4em
  }


`
const Sign = styled.img`
  height:40px;
  width:40px;
`

const mapStateToProps = (state: { CuteraIndications: string[],CuteraContraIndications:string[],WindowWidth:number }) => {
  return {
      Indications: state.CuteraIndications,
      ContraIndications:state.CuteraContraIndications,
      WindowWidth:state.WindowWidth
  };
};

export default connect(mapStateToProps)(SmartMainSection);