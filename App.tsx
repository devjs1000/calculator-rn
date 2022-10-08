import React from 'react'
import { extendTheme, NativeBaseProvider } from 'native-base'
import Main from './src/Main'

const theme=extendTheme({
  colors: {
    primary: {
      50: '#E3F2FD',
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#2196F3',
      600: '#1E88E5',
      700: '#1976D2',
      800: '#1565C0',
      900: '#0D47A1',
    },
  },
  config: {
    useSystemColorMode: true
  }
})

const NativeBaseIcon = () => {
  return (
    <NativeBaseProvider theme={theme} >
      <Main />
    </NativeBaseProvider>
  )
}

export default NativeBaseIcon