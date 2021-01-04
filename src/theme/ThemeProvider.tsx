import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { CUSTOM_THEME, Theme } from './customTheme'

// C O M P O N E N T S
import { DesignSystemInstance } from '../designSystemStore'

// I N T E R F A C E S
interface AdditionalGlobalStyle {
  theme: Theme
}

// C O M P O N E N T
const ThemeProvider: React.FC = ({ children }) => {
  return (
    <DesignSystemInstance
      theme={CUSTOM_THEME}
    >
      <AdditionalGlobalStyle />
      {children}
    </DesignSystemInstance>
  )
}

// S T Y L E S
const AdditionalGlobalStyle = createGlobalStyle<AdditionalGlobalStyle>`
  body {
    margin: 0;
    padding:0;
  }
`

export default ThemeProvider
