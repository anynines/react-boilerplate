import { CustomTheme } from './theme/ThemeProvider'
import { createDesignSystemContext } from '@avarteqgmbh/design_system'

export const { DesignSystemInstance, ThemeContext } = createDesignSystemContext<CustomTheme>()
