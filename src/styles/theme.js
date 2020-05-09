import { minMedia, maxMedia } from './breakpoints'
import colors, { globalColor, globalTextColor, globalInverseColor } from './colors'
import mixins from './mixins'
import fonts from './typography'
import { gutter, spacing } from './units'

const theme = {
  mode: 'light',
  navMode: 'light',
  minMedia,
  maxMedia,
  colors,
  globalColor,
  globalTextColor,
  globalInverseColor,
  fonts,
  mixins,
  gutter,
  spacing,
}

export default theme