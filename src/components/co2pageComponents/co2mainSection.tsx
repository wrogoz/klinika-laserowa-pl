import React from 'react'
import styled from 'styled-components';

import ChapterTitleDesktop from '../globalComponents/chapterTitleDesktop';
import ListWithTitle from '../globalComponents/listWithTitle';
import BoxUnderList from '../globalComponents/boxUnderList';
import laser2 from '../../images/co2imgs/laser2.jpg';

import plusIcon from '../../images/plus.png';
import minusIcon from '../../images/minus.png';
import { connect } from 'react-redux';

interface CoMainSectionProps{
  Indications:string[],
  ContraIndications:string[],
  WindowWidth:number
}
class Co2MainSection extends React.Component<CoMainSectionProps,{}>{
    render(){
        return(
            <MainBox>

            <ChapterTitleDesktop
            title='Komu i w czym może pomóc Laser Ultrafrax Reborn?'
          />

            <Indications>Wskazania</Indications>


            <Sign src={plusIcon}/>

            <ListWithTitle
            text='Zadbana i jędrna skóra, nie musi być domeną jedynie osób
            w młodym wieku.O to,w czym może Ci pomóc zabieg z użyciem lasera co2 ultrafrax reborn:'
            array={[
              'rozstępy',
              'rozszerzone pory',
              'blizny po oparzeniach, zarówno te przerosłe jak i zanikowe',
              'blizny potrądzikowe',
              'włókniaki miękkie, brodawki łojotokowe, znamiona brodawkujące i zmiany przerostowe na skórze'

            ]}
            />
            <BoxUnderList
              firstLine='Spełniając najwyższe standardy, Laser CO2 Ultrafrax jest bezpieczny'
              secondLine='Zarówno dla lekarza, jak i dla pacjenta.'
              />
             <ChapterTitleDesktop
            title='Kiedy nie możesz skorzystać z zabiegu z użyciem lasera co2'
          />

            <ContraIndications>Przeciwwskazania</ContraIndications>
            <Sign src={minusIcon}/>

            <ListWithTitle
            text='Mimo, iż samo działanie lasera jest bardzo bezpieczne, są sytuacje, w których
            jego użycie jest niewskazane,a nawet wręcz zabronione'
            array={[
              'zażywanie leków przeciwkrzepliwych',
              'okres ciąży i karmienia piersią',
              'aktywna opryszczka',
              'zastosowanie samoopalaczy w okresie ostatnich 2 tygodni',
              'przyjmowanie leków fotouczulających',
              'zażywanie izotretynoiny w ciągu ostatniego pół roku'
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
  background-image:url("${laser2}");
  background-size: auto 64%;
    background-position: -30px -46px;
  background-repeat: no-repeat;
  width:100%;
  @media(min-width:600px){
    background-size: auto 150%;
    background-position: 0% 0%;
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

export default connect(mapStateToProps)(Co2MainSection);