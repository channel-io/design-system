import {
  type BezierComponentProps,
  type ChildrenProps,
  type ContentProps,
  type DisableProps,
} from '~/src/types/ComponentProps'

export enum TooltipPosition {
  TopCenter = 'topCenter',
  TopLeft = 'topLeft',
  TopRight = 'topRight',
  RightCenter = 'rightCenter',
  RightTop = 'rightTop',
  RightBottom = 'rightBottom',
  BottomCenter = 'bottomCenter',
  BottomLeft = 'bottomLeft',
  BottomRight = 'bottomRight',
  LeftCenter = 'leftCenter',
  LeftTop = 'leftTop',
  LeftBottom = 'leftBottom',
}

interface TooltipProviderOptions {
  allowHover?: boolean
  delayShow?: number
  delayHide?: number
  skipDelayShow?: number
}

interface TooltipOptions {
  defaultShow?: boolean
  onShow?: () => void
  onHide?: () => void
  placement?: TooltipPosition
  description?: React.ReactNode
  offset?: number
  container?: HTMLElement | null
  keepInContainer?: boolean
  allowHover?: boolean
  delayShow?: number
  delayHide?: number
}

export interface TooltipProviderProps extends
  ChildrenProps,
  TooltipProviderOptions {}

export interface TooltipProps extends
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  DisableProps,
  React.HTMLAttributes<HTMLDivElement>,
  TooltipOptions {}
