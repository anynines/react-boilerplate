import React from 'react'

import { CUSTOM_THEME } from './customTheme'

// C O M P O N E N T S
import { DesignSystemInstance } from '../designSystemStore'

// C O M P O N E N T
const ThemeProvider: React.FC = ({ children }) => {
  return (
    <DesignSystemInstance
      theme={CUSTOM_THEME}
      persistantThemeStorage
    >
      {children}
    </DesignSystemInstance>
  )
}

export default ThemeProvider
