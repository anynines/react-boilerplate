import { CustomTheme } from './theme/customTheme'
import { createDesignSystemContext } from '@anynines/design-system'

export const { DesignSystemInstance, ThemeContext } = createDesignSystemContext<CustomTheme>()
