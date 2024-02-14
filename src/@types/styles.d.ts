import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type themeTYpe = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends themeTYpe {}
}
