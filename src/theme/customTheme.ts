import { PartialTheme, Theme as DesignSystemTheme } from '@anynines/design-system'

// I N T E R F A C E S
export interface CustomTheme extends PartialTheme {
  customColor: string
}
export type Theme = CustomTheme & DesignSystemTheme

export const CUSTOM_THEME: CustomTheme = {
  colors: {
    primary: 'deeppink'
  },
  customColor: 'red'
}
