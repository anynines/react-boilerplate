import React from 'react'

// C O M P O N E N T S
import { Theme } from '@avarteqgmbh/design_system'
import { DesignSystemInstance } from '../designSystemStore'

// I N T E R F A C E S
export interface CustomTheme extends Theme {
  customColor: 'red'
}

// C O M P O N E N T
const ThemeProvider: React.FC = ({ children }) => {
  return (
    <DesignSystemInstance
      persistantThemeStorage
    >
      {children}
    </DesignSystemInstance>
  )
}

export default ThemeProvider
