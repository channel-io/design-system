/* External dependencies */
import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react'
import _ from 'lodash'

/* Internal dependencies */
import useMergeRefs from '../../hooks/useMergeRefs'
import { Text } from '../../components/Text'
import Typography from '../../styling/Typography'
import {
  StyledNavigation,
  StyledTitleWrapper,
  StyledContentWrapper,
  StyledHandle,
} from './Navigation.styled'
import NavigationProps from './Navigation.types'

export const NAV_SCROLL_TEST_ID = 'ch-design-system-nav-scroll'

function Navigation(
  {
    testId,
    style,
    className,
    title,
    fixedTitle = false,
    width = 240,
    minWidth = 240,
    maxWidth = 540,
    disableResize = false,
    onChangeWidth = _.noop,
    children,
  }: NavigationProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const navigationRef = useRef<HTMLDivElement | null>(null)
  const mergedRef = useMergeRefs<HTMLDivElement>(navigationRef, forwardedRef)
  const [currentWidth, setCurrentWidth] = useState<number>(_.clamp(width, minWidth, maxWidth))
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (disableResize) { return }

    window.requestAnimationFrame(() => setCurrentWidth(
      _.clamp(
        e.pageX - navigationRef.current?.offsetLeft,
        minWidth,
        maxWidth,
      ),
    ))
  }, [
    navigationRef,
    disableResize,
    minWidth,
    maxWidth,
  ])

  const handleMouseDown = useCallback(() => {
    setIsDragging(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    onChangeWidth(currentWidth)
  }, [currentWidth, onChangeWidth])

  useEffect(() => {
    setCurrentWidth(_.clamp(width, minWidth, maxWidth))
  }, [width, minWidth, maxWidth])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove, false)
    } else {
      document.removeEventListener('mousemove', handleMouseMove, false)
    }
  }, [isDragging, handleMouseMove])

  document.addEventListener('mouseup', handleMouseUp, false)

  return (
    <StyledNavigation
      ref={mergedRef}
      style={style}
      className={className}
      width={currentWidth}
      data-testid={testId}
      isDragging={isDragging}
    >
      <StyledContentWrapper
        data-testid={NAV_SCROLL_TEST_ID}
      >
        <div>
          { /**
           * FIXME: Safari 에서 sticky 가 제대로 동작하지 않는 버그가 있어서,
           * 이를 해결하기 위해 추가한 임시 div 입니다.
           * 추후 제거 요망.
           *
           * 참고: https://stackoverflow.com/questions/57934803/workaround-for-a-safari-position-sticky-webkit-sticky-bug
           *  */ }
          { title && (
            <StyledTitleWrapper sticky={fixedTitle}>
              <Text
                bold
                typo={Typography.Size24}
                content={title}
              />
            </StyledTitleWrapper>
          ) }
          { children }
        </div>
      </StyledContentWrapper>
      <StyledHandle
        disable={disableResize}
        onMouseDown={handleMouseDown}
      />
    </StyledNavigation>
  )
}

export default forwardRef(Navigation)
