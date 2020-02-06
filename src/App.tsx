
import React from 'react';
import { Provider, observer } from "mobx-react";
import store from './store/store'
import Layout from './layout';
import { createGlobalStyle } from 'styled-components'

@observer
class App extends React.Component<{},{}>{

  render(){
    return(
      <>
      <Provider store={store}>
      <GlobalStyle/>
         <Layout/>
         </Provider>
      </>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
  }`

export default App;