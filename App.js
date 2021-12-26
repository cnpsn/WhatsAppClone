import React from 'react'

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MainRouter from './src/Routing/MainRouter'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background:"#F6F6F6",
    primary: '#007AFF',
    surface:"#FFFFFF",
    disable:"#D1D1D6",
    black:"#00000",
    border:"#C7C7CC",
  },
};

function App() {
  return(
  <PaperProvider theme={theme}>
    <MainRouter/>
  </PaperProvider>)
}
export default App;