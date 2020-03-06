import React from 'react'
import styled from 'styled-components';

import ChapterTitleDesktop from '../globalComponents/chapterTitleDesktop';

import BoxUnderList from '../globalComponents/boxUnderList';
import glassesTop from '../../images/optoyag/glassesTop.jpg';

import plusIcon from '../../images/plus.png';

import { connect } from 'react-redux';

interface OptoyagMainSectionProps{

  WindowWidth:number
}
class OptoyagMainSection extends React.Component<OptoyagMainSectionProps,{}>{
    render(){
        return(
            <MainBox>

            <ChapterTitleDesktop
            title='Komu i w czym może pomóc laser optoyag & slt?'
          />

            <Indications>Wskazania</Indications>


            <Sign src={plusIcon}/>

            <IndicationsList>
              <li>
              Do selektywnej trabekuloplastyki laserowej jaskry z szerokim kątem przesączania, a dokładnie w:
                <ul>
                  <li>jaskrze młodzieńczej</li>
                  <li>jaskrze barwnikowej</li>
                  <li>jaskrze z tzw. pseudoexfoliacją (PEX)</li>
                  <li>innych typach jaskry, z otwartym kątem przesączania.
w której wykorzystywany jest laser OptoSLT</li>
                  <p>
                  Selektywną trabekuloplastykę laserową, stosuje się również w sytuacji, gdy oko nie toleruje kropli obniżających ciśnienie w oku oraz u pacjentów,
                   którzy nie stosują się do zaleceń lekarza,
                    zaniedbując systematyczne zakrapianie oczu.</p>
                    <p>
Zabieg SLT, w niektórych przypadkach, można łączyć z leczeniem farmakologicznym.
 Decyzję taką, lekarz może podjąć przy jaskrze zaawansowanej lub gdy jaskra nie może być operowana.
Wykonanie zabiegu SLT u 80% chorych, obniża ciśnienie w oku o ok. 25-27%.
                  </p>
                </ul>

              </li>
              <li>Do leczenia zaćmy wtórnej metodą kapsulotomii</li>
              <li>W irydotomii
                <ul>
                  <li>jaskry pierwotnej zamkniętego kąta</li>
                  <li>wąskiego kąta komory przedniej o dużym ryzyku zamknięcia</li>
                  <li>w niektórych przypadkach jaskry barwnikowej</li>
                </ul>
                <p>Zabieg ten stosuje się z użyciem lasera OptoYag.</p>
                </li>

            </IndicationsList>

            <BoxUnderList
              firstLine='Spełniając najwyższe standardy, Laser OPTOYAG&TSLT jest bezpieczny '
              secondLine='zarówno dla lekarza, jak i dla pacjenta'
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
  background-size: contain;
  background-position: 102% 10%;
background-image:url("${glassesTop}");
background-repeat: no-repeat;
  width:100%;


  @media(min-width:900px){

    background-position: 100% 45%;


  }
  @media(min-width:1000px){

    background-size: 103% 70%;
    background-position: 100% 66%;


  }


}

`
const Indications = styled.h3`
  width:280px;
  font-size: 0.8em;
  text-transform: uppercase;
  text-align: center;
  margin:0 auto 15px auto;
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
const IndicationsList = styled.ol`
width: 76%;
  font-weight:bold;
  color:#444;
  list-style-position: inside;
  padding:0;
  @media(min-width:550px){
    width:60%;
  }

  ul{
    padding:0;
    list-style-type: disc;
    font-weight:normal;
    margin:10px 0;

    li{
      color: #999;
      margin-left:15px;
    }
    p{
  text-align:justify;

    }
  }
`
const Sign = styled.img`
  height:40px;
  width:40px;
  margin: 30px 0;
`

const mapStateToProps = (state: { WindowWidth:number }) => {
  return {

      WindowWidth:state.WindowWidth
  };
};

export default connect(mapStateToProps)(OptoyagMainSection);