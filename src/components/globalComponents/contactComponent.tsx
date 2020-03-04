import React, { Component } from 'react'
import ChapterTitleDesktop from './chapterTitleDesktop';
import DescriptionText from './descriptionText';
import styled from 'styled-components';
import { connect } from "react-redux";
import Button from '../globalComponents/button';

interface ContactComponentProps{
    WindowWidth:string | number
    title:string
    descriptionText:string
}
class ContactComponent extends Component<ContactComponentProps,{}> {
    render() {
        return (
            <>
            <ChapterTitleDesktop
                title={this.props.title}
            />
            <DescriptionText
                descriptionText={this.props.descriptionText}
                />
                <Address>
                    {this.props.WindowWidth<1240?<Button btnText='Zapisz się'/>:<><p>Centrum Medyczne INTER-MED</p>
                <p>Rejestracja telefoniczna: (32) 360 10 30</p></>}


                </Address>

            </>
        )
    }
}
const Address = styled.div`
display:flex;
justify-content:center;
width: 60%;
padding-top: 25px;
padding-bottom: 10px;
font-size: 0.9em;
    p:last-of-type{
        color: #999;
        margin-left:10px;
    }
`

const mapStateToProps = (state: {WindowWidth:number | string }) => {
    return {

      WindowWidth:state.WindowWidth
    };
  };

  export default connect(mapStateToProps)(ContactComponent);
