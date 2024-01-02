import React, {
  forwardRef,
  useCallback,
  useMemo,
} from 'react'

import { MoreIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { isLastIndex } from '~/src/utils/array'
import { noop } from '~/src/utils/function'
import { px } from '~/src/utils/style'

import { AlphaSmoothCornersBox } from '~/src/components/AlphaSmoothCornersBox'
import {
  type AvatarProps,
  AvatarSize,
} from '~/src/components/Avatars/Avatar'
import {
  AVATAR_BORDER_RADIUS_PERCENTAGE,
  AVATAR_GROUP_DEFAULT_SPACING,
} from '~/src/components/Avatars/AvatarStyle'
import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import {
  AvatarGroupEllipsisType,
  type AvatarGroupProps,
} from './AvatarGroup.types'

import styles from './AvatarGroup.module.scss'

const MAX_AVATAR_LIST_COUNT = 99

export const AVATAR_GROUP_ELLIPSIS_ICON_TEST_ID = 'bezier-react-avatar-group-ellipsis-icon'

function getRestAvatarListCountText(count: number, max: number) {
  const restCount = count - max
  return `+${restCount > MAX_AVATAR_LIST_COUNT ? MAX_AVATAR_LIST_COUNT : restCount}`
}

// TODO: Not specified
function getProperIconSize(avatarSize: AvatarSize) {
  return {
    [AvatarSize.Size20]: IconSize.XXS,
    [AvatarSize.Size24]: IconSize.XS,
    [AvatarSize.Size30]: IconSize.S,
    [AvatarSize.Size36]: IconSize.Normal,
    [AvatarSize.Size42]: IconSize.Normal,
    [AvatarSize.Size48]: IconSize.L,
    [AvatarSize.Size90]: IconSize.L,
    [AvatarSize.Size120]: IconSize.L,
  }[avatarSize]
}

// TODO: Not specified
function getProperTypoSize(avatarSize: AvatarSize) {
  return {
    [AvatarSize.Size20]: '12',
    [AvatarSize.Size24]: '13',
    [AvatarSize.Size30]: '15',
    [AvatarSize.Size36]: '16',
    [AvatarSize.Size42]: '18',
    [AvatarSize.Size48]: '24',
    [AvatarSize.Size90]: '24',
    [AvatarSize.Size120]: '24',
  }[avatarSize]
}

// TODO: Not specified
function getProperEllipsisCountMarginRight(avatarSize: AvatarSize) {
  return {
    [AvatarSize.Size20]: 4,
    [AvatarSize.Size24]: 5,
    [AvatarSize.Size30]: 6,
    [AvatarSize.Size36]: 6,
    [AvatarSize.Size42]: 6,
    [AvatarSize.Size48]: 6,
    [AvatarSize.Size90]: 6,
    [AvatarSize.Size120]: 6,
  }[avatarSize]
}

export const AvatarGroup = forwardRef(function AvatarGroup({
  max,
  size = AvatarSize.Size24,
  spacing = AVATAR_GROUP_DEFAULT_SPACING,
  ellipsisType = AvatarGroupEllipsisType.Icon,
  onMouseEnterEllipsis = noop,
  onMouseLeaveEllipsis = noop,
  style,
  className,
  children,
  ...rest
}: AvatarGroupProps,
forwardedRef: React.Ref<HTMLDivElement>,
) {
  const renderAvatarElement = useCallback((
    avatar: React.ReactElement<AvatarProps>,
    avatarListCount: number,
  ) => {
    const key = avatar.key ?? `${avatar.props.name}-${avatar.props.avatarUrl}`
    const shouldShowBorder = avatarListCount > 1 && spacing < 0
    const showBorder = avatar.props.showBorder || shouldShowBorder
    return React.cloneElement(avatar, { key, size, showBorder })
  }, [
    size,
    spacing,
  ])

  const avatarListCount = useMemo(() => (
    React.Children.count(children)
  ), [children])

  const AvatarListComponent = useMemo(() => {
    if (avatarListCount <= max) {
      return React.Children.map(children, (avatar) => (
        React.isValidElement<AvatarProps>(avatar) && renderAvatarElement(avatar, avatarListCount)
      ))
    }

    const sliceEndIndex = max - avatarListCount
    const slicedAvatarList = React.Children.toArray(children).slice(0, sliceEndIndex)

    return slicedAvatarList.map((avatar, index, arr) => {
      if (!React.isValidElement<AvatarProps>(avatar)) { return null }

      const AvatarElement = renderAvatarElement(avatar, slicedAvatarList.length)

      if (!isLastIndex(arr, index)) {
        return AvatarElement
      }

      if (ellipsisType === AvatarGroupEllipsisType.Icon) {
        return (
          <div
            data-testid={AVATAR_GROUP_ELLIPSIS_ICON_TEST_ID}
            key="ellipsis"
            className={styles.AvatarEllipsisIconWrapper}
            onMouseEnter={onMouseEnterEllipsis}
            onMouseLeave={onMouseLeaveEllipsis}
          >
            <AlphaSmoothCornersBox
              borderRadius={`${AVATAR_BORDER_RADIUS_PERCENTAGE}%`}
              backgroundColor="bgtxt-absolute-black-lightest"
              className={styles.AvatarEllipsisIcon}
            >
              <Icon
                source={MoreIcon}
                size={getProperIconSize(size)}
                color="bgtxt-absolute-white-dark"
              />
            </AlphaSmoothCornersBox>
            { AvatarElement }
          </div>
        )
      }

      if (ellipsisType === AvatarGroupEllipsisType.Count) {
        return (
          <React.Fragment key="ellipsis">
            { AvatarElement }
            <div
              style={{
                '--b-avatar-group-ellipsis-mr': px(getProperEllipsisCountMarginRight(size)),
                '--b-avatar-group-ellipsis-ml': px(Math.max(spacing, AVATAR_GROUP_DEFAULT_SPACING)),
              } as React.CSSProperties}
              className={styles.AvatarEllipsisCountWrapper}
              onMouseEnter={onMouseEnterEllipsis}
              onMouseLeave={onMouseLeaveEllipsis}
            >
              <Text
                typo={getProperTypoSize(size)}
                className={styles.AvatarEllipsisCount}
              >
                { getRestAvatarListCountText(avatarListCount, max) }
              </Text>
            </div>
          </React.Fragment>
        )
      }

      return null
    })
  }, [
    max,
    size,
    children,
    spacing,
    ellipsisType,
    avatarListCount,
    renderAvatarElement,
    onMouseEnterEllipsis,
    onMouseLeaveEllipsis,
  ])

  return (
    <div
      role="group"
      ref={forwardedRef}
      className={classNames(
        styles.AvatarGroup,
        className,
      )}
      style={{
        ...style,
        '--b-avatar-group-spacing': px(spacing),
        '--b-avatar-group-size': px(size),
      } as React.CSSProperties}
      {...rest}
    >
      { AvatarListComponent }
    </div>
  )
})
