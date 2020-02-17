import React from 'react'
import styled from 'styled-components';

import ChapterTitleDesktop from '../globalComponents/chapterTitleDesktop';
import ListWithTitle from './mainSectionComponents/listWithTitle';
import BoxUnderList from './mainSectionComponents/boxUnderList';
import laserOnLeft from '../../images/laserOnLeft.png';
import Paragraph from '../globalComponents/paragraphUnderTitle';
import plusIcon from '../../images/plus.png';
import minusIcon from '../../images/minus.png';
import { connect } from 'react-redux';

interface MainSectionProps{
  Indications:string[],
  ContraIndications:string[],
  WindowWidth:number
}
class MainSection extends React.Component<MainSectionProps,{}>{
    render(){
        return(
            <MainBox>

            <ChapterTitleDesktop
            title='Komu i w czym może pomóc Laser Excel V?'
          />

            <Indications>Wskazania do zabiegu z użyciem lasera excel V</Indications>
            <Paragraph
              text='Laser excel V uwalnia od zmian skórnych, których obecność
              powoduje duży dyskomfort'
              />

            <Sign src={plusIcon}/>

            <ListWithTitle
            text='Jeśli na twoim ciele, obecne są zmiany typu:'
            array={this.props.Indications}
            />
            <BoxUnderList
              firstLine='Możesz to zmienić'
              secondLine='Nie musisz obawiać się bólu, blizn czy komplikacji po zabiegu'
              />
             <ChapterTitleDesktop
            title='Czy każdy może skorzystać z tego, co oferuje laser excel V'
          />



            <ContraIndications>Przeciwwskazania</ContraIndications>
            <Sign src={minusIcon}/>

            <ListWithTitle
            text='Do okoliczności, które wykluczają użycie lasera, należą:'
            array={this.props.ContraIndications}
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
  background-image:url("${laserOnLeft}");
  background-size: auto 120%;
  background-position: -85px 92px;
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
  margin-bottom: 0px;
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
  font-size: 0.9em;
  @media(min-width:900px){
    font-size:1.4em
  }


`
const Sign = styled.img`
  height:40px;
  width:40px;
`

const mapStateToProps = (state: { Indications: string[],ContraIndications:string[],WindowWidth:number }) => {
  return {
      Indications: state.Indications,
      ContraIndications:state.ContraIndications,
      WindowWidth:state.WindowWidth
  };
};

export default connect(mapStateToProps)(MainSection);