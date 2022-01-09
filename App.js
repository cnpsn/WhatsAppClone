import React from 'react'
import { StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MainRouter from './src/Routing/MainRouter'
import GlobalProvider from './src/Contexts/GlobalContext';

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
    gray:"#8E8E93",
    lightGray:"#F6F6F6",
    WpYellow:"#DCF7C5"
  },
};

function App() {
  return(
  <GlobalProvider>
  <PaperProvider theme={theme}>
    <StatusBar barStyle="dark-content" />
    <MainRouter/>
  </PaperProvider>
  </GlobalProvider>)
}
export default App;