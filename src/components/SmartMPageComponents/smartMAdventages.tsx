import React, { Component } from 'react'
import ChapterTitleDesktop from '../globalComponents/chapterTitleDesktop';
import ListWithTitle from '../globalComponents/listWithTitle';
import styled from 'styled-components';

export class SmartMAdventages extends Component {
    render() {
        return (
            <AdventagesSection>
                <ChapterTitleDesktop
            title='Zalety zabiegu evlt z uzyciem lasera smart m'
          />
          <ListWithTitle
          text='Jeśli wciąż zastanawiasz się, czy warto skorzystać z tego typu zabiegu, oto jego najważniejsze korzyści, a zarazem to wszystko, co odróżnia go od innych, inwazyjnych zabiegów chirurgicznych: '
            array={[
                'nie jest inwazyjny',
                'nie wymaga hospitalizacji - może być przeprowadzony ambulatoryjnie, dzięki czemu, zaraz po zabiegu, możesz wrócić do domu',
                'zabieg wykonywany jest bez konieczności stosowania znieczulenia ogólnego',
                'dzięki precyzji wykonania, nie dochodzi do uszkodzeń nerwów i skóry',
                'podczas zabiegu, możesz odczuwać niewielki ból, ale też bardzo możliwe, że nie pojawi się w ogóle',
                'zabieg nie pozostawia blizn, zasinień i obrzęków',
                'efekt zabiegu jest długotrwały, co w praktyce oznacza skuteczną eliminację chorych żył w 90%-98%)',
                'po zabiegu, możesz szybko wrócić do swoich codziennych zajęć'
            ]}
          />
            </AdventagesSection>
        )
    }
}
const AdventagesSection = styled.section`

`
export default SmartMAdventages
