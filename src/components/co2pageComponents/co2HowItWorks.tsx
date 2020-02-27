import React from 'react'
import styled from 'styled-components';
import DescriptionText from '../globalComponents/descriptionText';
import ChapterTitleDesktop from '../globalComponents/chapterTitleDesktop';

import { connect } from 'react-redux';

interface HowItWorksProps{
    WindowWidth:number
}
class HowItWorks extends React.Component<HowItWorksProps,{}>{
    render(){
        return(
            <HowItWorksBox>

                <ChapterTitleDesktop
                title='Jak działa laser frakcyjny co2'
                />
               <DescriptionText
                descriptionText='Od zabiegu z użyciem lasera CO2, rozpoczynają się często inne cykle procedur odmładzających.
                Jest to wskazane, ze względu na rodzaj jego oddziaływania na skórę.
                W miejscu poddanemu działaniu promieni lasera, wzbudzane są własne zdolności regeneracyjne organizmu. Mowa tu o produkcji włókien kolagenowych i elastynowych. Dzięki temu, napięta i obkurczona skóra, nie wymaga stosowania dużej ilości wypełniaczy.
                Jeśli chcesz zadbać o skórę, między innymi w okolicy przedusznej, laser CO2 jest idealnym rozwiązaniem, ponieważ nie mają tu zastosowania, wspomniane wcześniej wypełniacze.

                Laser CO2 posiada niezależną i płynną regulację energii, gęstości pokrycia, wielkości i kształtu plamki oraz głębokości penetracji. Dzięki temu możliwe jest indywidualne podejście terapeutyczne do pacjenta.
                Ma też wbudowany skaner, który zapobiega nadmiernym uszkodzeniom skóry oraz system  chłodzący, działający znieczulająco, co pozytywnie wpływa na komfort podczas zabiegu.'
                />
            </HowItWorksBox>
        )
    }
}

const HowItWorksBox = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
`



const mapStateToProps = (state: { WindowWidth:number }) => {
    return {

        WindowWidth:state.WindowWidth
    };
  };

  export default connect(mapStateToProps)(HowItWorks);