import React, { Component } from 'react'
import ChapterTitleDesktop from '../globalComponents/chapterTitleDesktop';
import ListWithTitle from '../globalComponents/listWithTitle';
export class OverallInfo extends Component {
    render() {
        return (
            <section>
                <ChapterTitleDesktop
            title='Chirurgiczny laser smart m'
          />
          <ListWithTitle
          text='Laser SMART M wyróżnia się pod względem skuteczności i wszechstronności zastosowania. Używany jest nie tylko w chirurgii naczyniowej, ale też w: '
            array={[
                'proktologii do leczenia hemoroidów I, II, III stopnia, przetok i torbieli ogoniastych',
                'flebologii, gdzie używany jest do leczenia owrzodzeń, stopy cukrzycowej, odleżyn i obrzęków',
                'mikrochirurgii',
                'laryngologii',
                'okulistyce',
                'ortopedii',
                'neurochirurgii'
            ]}
          />
            </section>
        )
    }
}

export default OverallInfo
