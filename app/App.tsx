import React from 'react';
import { StatusBar } from 'react-native';
import { Main } from './src/main';

const App = () => {

  return(
    <>
      <StatusBar
        backgroundColor="#fafafa"
        barStyle="dark-content"
      />
      <Main/>
    </>

  )
};

export default App;
