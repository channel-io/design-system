/* Internal dependencies */
import { IconSize } from './Icon.types'
import type IconProps from './Icon.types'
import { LegacyIcon } from './legacy'
import type { LegacyIconProps } from './legacy'

export type {
  LegacyIconProps as IconProps,
  // TODO: Change the name to IconProps
  IconProps as GeneratedIconProps,
}

export {
  LegacyIcon as Icon,
  IconSize,
}
