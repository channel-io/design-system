/* External dependencies */
import React, { memo } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import IconProps, { IconSize } from './Icon.types'
import icons from './generated'
import Styled from './Icon.styled'

export const ICON_TEST_ID = 'bezier-react-icon'

function Icon({
  name,
  className,
  color,
  hoverColor,
  testId = ICON_TEST_ID,
  size = IconSize.Normal,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0,
  onClick = noop,
  onMouseDown = noop,
}: IconProps) {
  if (!icons[name]) { return null }

  return (
    <Styled
      className={className}
      data-testid={testId}
      color={color}
      hoverColor={hoverColor}
      as={icons[name]}
      width={size}
      height={size}
      margintop={marginTop}
      marginright={marginRight}
      marginbottom={marginBottom}
      marginleft={marginLeft}
      onClick={onClick}
      onMouseDown={onMouseDown}
    />
  )
}

export default memo(Icon)
