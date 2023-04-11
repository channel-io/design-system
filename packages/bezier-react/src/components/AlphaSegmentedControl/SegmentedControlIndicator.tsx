import React, {
  useCallback,
  useLayoutEffect,
  useState,
} from 'react'

import { useResizeDetector } from 'react-resize-detector'

import useMergeRefs from '~/src/hooks/useMergeRefs'

import * as Styled from './SegmentedControl.styled'

export const SegmentedControlIndicator = function SegmentedControlIndicator({
  target,
  container,
  containerWidth,
}: {
  target: HTMLElement | null
  container: HTMLElement | null
  containerWidth?: number
}) {
  const [indicatorNode, setIndicatorNode] = useState<HTMLDivElement | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({})

  useLayoutEffect(function pauseTransitionOnMount() {
    let timer: NodeJS.Timeout | undefined

    if (indicatorNode) {
      const transitionDuration = (
        indicatorNode
          .computedStyleMap()
          .get('transition-duration') as { value: number }
      )?.value

      setIndicatorStyle(prev => ({
        ...prev,
        transition: 'none',
      }))

      timer = setTimeout(() => {
        setIndicatorStyle(prev => ({
          ...prev,
          transition: undefined,
        }))
      }, transitionDuration * 1000)
    }

    return function cleanUp() {
      clearTimeout(timer)
    }
  }, [indicatorNode])

  useLayoutEffect(function updatePosition() {
    if (indicatorNode && container && target) {
      const {
        top,
        left,
        width: selectedElementWidth,
        height: selectedElementHeight,
      } = target.getBoundingClientRect()

      const {
        top: containerTop,
        left: containerLeft,
      } = container.getBoundingClientRect()

      setIndicatorStyle(prev => ({
        ...prev,
        '--bezier-react-segmented-control-indicator-transform': `translate(${left - containerLeft}px, ${top - containerTop}px)`,
        '--bezier-react-segmented-control-indicator-width': `${selectedElementWidth}px`,
        '--bezier-react-segmented-control-indicator-height': `${selectedElementHeight}px`,
      }))
    }
  }, [
    // NOTE: (@ed) to force update indicator position on container width change
    containerWidth,
    indicatorNode,
    container,
    target,
  ])

  if (!target) { return null }

  return (
    <Styled.Indicator
      ref={setIndicatorNode}
      style={indicatorStyle}
    />
  )
}

export function useSegmentedControlIndicator<Element extends HTMLElement>({
  target,
  refs,
}: {
  target: HTMLElement | null
  refs: React.Ref<Element>[]
}) {
  const [container, setContainer] = useState<Element | null>(null)

  const {
    width: containerWidth,
    ref: resizeDetectorRef,
  } = useResizeDetector<Element>()

  const containerRef = useMergeRefs(
    ...refs,
    resizeDetectorRef,
    setContainer as React.Ref<Element | null>,
  )

  const render = useCallback(() => (
    <SegmentedControlIndicator
      target={target}
      container={container}
      containerWidth={containerWidth}
    />
  ), [
    target,
    container,
    containerWidth,
  ])

  return {
    containerRef,
    render,
  } as const
}
