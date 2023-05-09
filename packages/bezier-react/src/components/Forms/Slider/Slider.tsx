import React, {
  forwardRef,
  memo,
  useCallback,
} from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'

import { isNumber } from '~/src/utils/typeUtils'

import {
  Tooltip,
  TooltipPosition,
} from '~/src/components/Tooltip'

import type SliderProps from './Slider.types'

import * as Styled from './Slider.styled'

export const SLIDER_TEST_ID = 'bezier-react-slider'
export const SLIDER_THUMB_TEST_ID = 'bezier-react-slider-thumb'

/* NOTE: Props are injected at runtime by `SliderPrimitive.Thumb`. */
const SliderThumb = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function SliderThumb(
  props,
  forwardedRef,
) {
  const value = props?.['aria-valuenow']

  // NOTE: Prevents the tooltip from closing when the thumb is clicked.
  const onPointerDownOutside = useCallback((e: MouseEvent) => {
    e.preventDefault()
  }, [])

  return (
    <Tooltip
      content={value}
      offset={6}
      placement={TooltipPosition.TopCenter}
      onPointerDownOutside={onPointerDownOutside}
    >
      <Styled.SliderThumb
        data-testid={SLIDER_THUMB_TEST_ID}
        ref={forwardedRef}
        {...props}
      />
    </Tooltip>
  )
})

const SliderGuide = memo<Record<'min' | 'max' | 'value', number>>(function SliderGuide({
  min,
  max,
  value,
}) {
  return (
    <Styled.SliderGuide
      style={{
        '--bezier-slider-guide-left': `${(value / (max - min)) * 100}%`,
      } as React.CSSProperties}
    />
  )
})

export const Slider = forwardRef(function Slider(
  {
    style,
    width = 36,
    guide,
    defaultValue = [5],
    value,
    disabled = false,
    min = 0,
    max = 10,
    step = 1,
    minStepsBetweenThumbs = 0,
    ...rest
  }: SliderProps,
  forwardedRef: React.Ref<HTMLSpanElement>,
) {
  const targetValue = value || defaultValue

  return (
    <Styled.SliderPrimitiveRoot
      style={{
        ...style,
        '--bezier-slider-width': isNumber(width) ? `${width}px` : width,
      }}
      data-testid={SLIDER_TEST_ID}
      ref={forwardedRef}
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      min={min}
      max={max}
      step={step}
      minStepsBetweenThumbs={minStepsBetweenThumbs}
      {...rest}
    >
      <Styled.SliderPrimitiveTrack>
        <Styled.SliderPrimitiveRange />

        { guide && (
          <Styled.GuideContainer>
            { guide.map((guideValue) => (
              <SliderGuide
                key={`slider-guide-${guideValue}`}
                min={min}
                max={max}
                value={guideValue}
              />
            )) }
          </Styled.GuideContainer>
        ) }
      </Styled.SliderPrimitiveTrack>

      { targetValue.map((_, i) => (
        <SliderPrimitive.Thumb
          // eslint-disable-next-line react/no-array-index-key
          key={`slider-thumb-${i}`}
          asChild
        >
          <SliderThumb />
        </SliderPrimitive.Thumb>
      )) }
    </Styled.SliderPrimitiveRoot>
  )
})
