import React from 'react'
import styled from 'styled-components';
import ChapterTitle from '../globalComponents/chapterTitle';
import ListWithTitle from './mainSectionComponents/listWithTitle';
import BoxUnderList from './mainSectionComponents/boxUnderList';
import laserOnLeft from '../../images/laserOnLeft.png';
import Paragraph from '../globalComponents/paragraphUnderTitle';
import { inject,observer } from 'mobx-react';
import store from '../../store/store';
@inject("store")
@observer
export default class MainSection extends React.Component<{},{}>{
    render(){
        return(
            <MainBox>
            <ChapterTitle
              title='Komu i w czym może pomóc Laser Excel V'
            />
            <Indications>Wskazania do zabiegu z użyciem lasera excel V</Indications>
            <Paragraph
              text='Laser excel V uwalnia od zmian skórnych, których obecność
              powoduje duży dyskomfort'
              />

            <Sign>
              +
            </Sign>
            <ListWithTitle
            text='Jeśli na twoim ciele, obecne są zmiany typu:'
            arrayType={store.Indications}
            />
            <BoxUnderList
              firstLine='Możesz to zmienić'
              secondLine='Nie musisz obawiać się bólu, blizn czy komplikacji po zabiegu'
              />

            <ChapterTitle
              title='Czy każdy może skorzystać z tego, co oferuje laser excel V'
            />


            <ContraIndications>Przeciwwskazania</ContraIndications>
            <Sign>
              -
            </Sign>
            <ListWithTitle
            text='Do okoliczności, które wykluczają użycie lasera, należą:'
            arrayType={store.ContraIndications}
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
`
const ContraIndications = styled.h3`
  text-transform: uppercase;
  color: #999;
  font-size: 0.9em;


`
const Sign = styled.p`
  color:${props=>props.theme.interViolet};
  font-size:3em;
  margin:0;
`