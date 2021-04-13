/* External dependencies */
import React, { forwardRef, isValidElement, useMemo } from 'react'
import _ from 'lodash'

/* Internal denpendencies */
import useProgressiveImage from '../../../hooks/useProgressiveImage'
import DefaultAvatarSvg from '../assets/DefaultAvatar'
import { svgToDataUrl } from '../../../utils/svgUtils'
import { Status, StatusType } from '../../Status'
import { StyledAvatar, StatusWrapper } from './Avatar.styled'
import { AvatarSize, AvatarProps } from './Avatar.types'

export const AVATAR_TEST_ID = 'ch-design-system-avatar'

const defaultAvatarUrl = svgToDataUrl(<DefaultAvatarSvg />)

function isValidAvatarChildren(children: {} | null | undefined) {
  return React.isValidElement(children) && React.Children.count(children) === 1
}

function Avatar({
  avatarUrl,
  size = AvatarSize.XS,
  name = '',
  testId = AVATAR_TEST_ID,
  disabled = false,
  showBorder = false,
  status = StatusType.NONE,
  showStatus = false,
  onClick = _.noop,
  onMouseEnter = _.noop,
  onMouseLeave = _.noop,
  children,
}: AvatarProps,
forwardedRef: React.Ref<HTMLDivElement>,
) {
  const loadedAvatarUrl = useProgressiveImage(avatarUrl)

  const StatusComponent = useMemo(() => {
    if (
      !showStatus
      || disabled
    ) {
      return null
    }

    return (
      <StatusWrapper
        showBorder={showBorder}
      >
        { isValidAvatarChildren(children)
          ? children
          : (
            <Status
              type={status}
            />
          ) }
      </StatusWrapper>
    )
  }, [
    status,
    showStatus,
    showBorder,
    disabled,
    children,
  ])

  return (
    <StyledAvatar
      ref={forwardedRef}
      data-testid={testId}
      avatarUrl={loadedAvatarUrl || defaultAvatarUrl}
      size={size}
      role="img"
      aria-label={name}
      showBorder={!disabled && showBorder}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      { StatusComponent }
    </StyledAvatar>
  )
}

export default forwardRef(Avatar)
