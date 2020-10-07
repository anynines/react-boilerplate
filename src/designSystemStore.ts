import { CustomTheme } from './theme/customTheme'
import { createDesignSystemContext } from '@avarteqgmbh/design_system'

export const { DesignSystemInstance, ThemeContext } = createDesignSystemContext<CustomTheme>()
