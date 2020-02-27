import React, { Component } from 'react'
import ChapterTitleDesktop from './chapterTitleDesktop';
import DescriptionText from './descriptionText';
import styled from 'styled-components';

export class contactComponent extends Component<{},{}> {
    render() {
        return (
            <>
            <ChapterTitleDesktop
                title='zabiegi z użyciem lasera co2 ultrafrax reborn gdzie możn z nich skorzystać'
            />
            <DescriptionText
                descriptionText="Zabiegi z użyciem lasera CO2 UltraFrax Reborn - gdzie można z nich
                skorzystać
                Jeśli chcesz zadbać o swoją skórę, uwolnić ją od zmarszczek, blizn, przebarwień, czy
                rozstępów, przywracając jej jednocześnie zdrowy wygląd, umów się na konsultację w
                Centrum Medycznym INTER-MED.
                Po wstępnej analizie zmian, które mają zostać poddane działaniu promieni lasera
                frakcyjnego CO2, będziesz mógł podjąć decyzję o skorzystaniu z zabiegu, w ustalonym
                przez lekarza terminie."
                />
                <Address>
                <p>Centrum Medyczne INTER-MED</p>
                <p>Rejestracja telefoniczna:</p>

                </Address>

            </>
        )
    }
}
const Address = styled.div`
width: 60%;
padding-right: 20%;
font-size: 0.9em;
    p:last-of-type{
        color: #999;
    }
`
export default contactComponent
