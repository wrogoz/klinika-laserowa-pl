import React, { Component } from 'react'
import Opinion from '../globalComponents/opinion';
import ChapterTitleDesktop from '../globalComponents/chapterTitleDesktop';
class Testimonials extends Component {
    render() {
        return (
            <>
                <ChapterTitleDesktop
                    title='Opinie na temat zabiegu'
                />
                <Opinion
                imgSrc='https://images.unsplash.com/photo-1550639524-a6f58345a2ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                text='You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder.'
                />
                <Opinion
                imgSrc='https://images.unsplash.com/photo-1578489758854-f134a358f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                text='You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder.'
                />
            </>
        )
    }
}

export default Testimonials
