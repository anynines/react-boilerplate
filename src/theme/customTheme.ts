import { PartialTheme } from '@avarteqgmbh/design_system'

// I N T E R F A C E S
export interface CustomTheme extends PartialTheme {
  customColor: string
}

export const CUSTOM_THEME: CustomTheme = {
  colors: {
    primary: 'deeppink'
  },
  customColor: 'red'
}
