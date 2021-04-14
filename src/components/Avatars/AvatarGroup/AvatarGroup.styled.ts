/* Internal denpendencies */
import { styled, css, smoothCorners } from '../../../foundation'
import { enableSmoothCorners } from '../../../worklets/EnableCSSHoudini'
import { AVATAR_BORDER_WIDTH, AVATAR_BORDER_RADIUS_PERCENTAGE } from '../constants/AvatarStyle'

interface AvatarGroupProps {
  spacing: number
  max: number
}

const disableSmoothCornersFallbackEllipsisStyle = css`
  background-color: ${({ foundation }) => foundation?.theme?.['dim-dark']};
  border-radius: ${AVATAR_BORDER_RADIUS_PERCENTAGE}%;
`

function calcNegativeSpacing(spacing: number = 0) {
  if (spacing >= 0 || !enableSmoothCorners.current) { return spacing }
  return (spacing - (AVATAR_BORDER_WIDTH * 2))
}

export const StyledAvatarGroup = styled.div<AvatarGroupProps>`
  display: flex;

  & > * + * {
    margin-left: ${({ spacing }) => calcNegativeSpacing(spacing)}px;
  }
`

export const AvatarEllipsisWrapper = styled.div<AvatarGroupProps>`
  position: relative;
`

export const AvatarEllipsis = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  outline: none;

  ${disableSmoothCornersFallbackEllipsisStyle}

  ${({ foundation }) => smoothCorners({
    borderRadius: `${AVATAR_BORDER_RADIUS_PERCENTAGE}%`,
    backgroundColor: foundation?.theme?.['dim-dark'],
  })}
`
