import React from 'react'
import {connect} from 'react-redux';
import {changeValue} from '../redux/actions/actions'
import Header from './header';
import styled from 'styled-components';
class MainPage extends React.Component<any,{}>{

changee = ()=>{
    this.props.dispatch(changeValue())
}
    render(){
        return(<MainContainer>
        <Header/>
        <main>

        </main>
        </MainContainer>

        )
    }
}
const MainContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;

`

const mapStateToProps = (state: { randomData: string;}) => {
    return {
      randomData: state.randomData
    }
  }




export default connect(
    mapStateToProps
    )(MainPage);