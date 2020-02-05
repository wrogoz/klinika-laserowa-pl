import React from 'react'
import styled from 'styled-components';
import { connect } from "react-redux";


interface ListWithTitleProps{
    text:string
}


class ListWithTitle extends React.Component<ListWithTitleProps,{}>{
    render(){
        return(

                <UlContainer>
                    <PreUlText>
                        {this.props.text}
                    </PreUlText>
                    <ul>
              <li>trądzik różowaty</li>
              <li>pajączki</li>
              <li>rumień</li>
              <li>zmiany naczyniowe w nogach</li>
              <li>naczyniaki</li>
              <li>znamiona</li>
              <li>rozproszone zmiany naczyniowe</li>
              <li>
                rozproszone zmiany barwnikowe, takie jak plamy posłoneczne
              </li>
              <li>
                blizny będące konsekwencją przebytych urazów
                lub wykonanych zabiegów chirurgicznych
              </li>
            </ul>


                </UlContainer>
        )
    }
}

const UlContainer = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;

`
const PreUlText = styled.p`
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: bold;

`


  const mapStateToProps = (state: { Indication: string[] }) => {
    return {
        Indications: state.Indication
    };
  };

  export default connect(mapStateToProps)(ListWithTitle);



