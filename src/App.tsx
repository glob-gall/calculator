import React, { useCallback } from 'react'
import {ThemeProvider, DefaultTheme} from 'styled-components'


import GlobalStyle from './styles/Global'
import useThemeStoraged from './utils/useThemeStoraged'

import dark from './styles/themes/dark'
import light from './styles/themes/light'


import {Container, Switch} from './styles/App'
import Calculator from './components/Calculator'

function App() {
  const [theme,setTheme] = useThemeStoraged<DefaultTheme>('@calculator:theme',light)

  const toggleTheme = useCallback(()=>{
    setTheme(theme.title==='light' ? dark : light)
  },[setTheme,theme.title])

  return (
    <>
    <ThemeProvider theme={theme}>
      <Container>
        <Calculator/>
        <Switch
          onChange={()=>{toggleTheme()}}
          checked={theme.title==='dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          handleDiameter={34}
          width={60}
          height={20}
          offColor="#303030"
          onColor="#f0f0f0"
          offHandleColor="#ff8f00"
          onHandleColor="#ff8f00"
        />

      </Container>
      <GlobalStyle/>
    </ThemeProvider>
    </>
  )
}

export default App;
