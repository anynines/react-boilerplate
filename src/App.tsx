import React from 'react'
import styled from 'styled-components'

// C O M P O N E N T S
import { Icon } from '@avarteqgmbh/design_system'
import ThemeProvider from './theme/ThemeProvider'

// C O M P O N E N T
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <StyledMain>
        <h1>Welcome to React boilerplate!</h1>
        <Icon icon='heart' />
      </StyledMain>
    </ThemeProvider>
  )
}

// S T Y L E S
const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: var(--color-white);

  h1 {
    margin-right: var(--space-fixed-sm);
  }
`

export default App
