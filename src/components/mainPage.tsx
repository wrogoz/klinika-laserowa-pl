import React from 'react'
import {connect} from 'react-redux';
import {changeValue} from '../redux/actions/actions'

class MainPage extends React.Component<any,{}>{

changee = ()=>{
    this.props.dispatch(changeValue())
}
    render(){
        return(
            <div onClick={this.changee}>
                {this.props.randomData}
            </div>
        )
    }
}


const mapStateToProps = (state: { randomData: string;}) => {
    return {
      randomData: state.randomData
    }
  }




export default connect(
    mapStateToProps
    )(MainPage);