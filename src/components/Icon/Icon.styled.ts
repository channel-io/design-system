/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import { IconStyledProps } from './Icon.types'

function getMargin({
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: IconStyledProps): string {
  return `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
}

const Icon = styled.svg<IconStyledProps>`
  fill: ${props => props.color || props.theme?.colors?.iconBase};
  margin: ${getMargin};
`

export default Icon
