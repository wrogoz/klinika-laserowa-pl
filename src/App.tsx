
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './layout';
import { createGlobalStyle } from 'styled-components'


class App extends React.Component<{},{}>{

  render(){
    return(
      <>
      <GlobalStyle/>
         <Layout/>
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