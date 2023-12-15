import {
  type BezierComponentProps,
  type LayoutProps,
  type MarginProps,
} from '~/src/types/ComponentProps'
import { TokenPrefix } from '~/src/types/Token'

import { split } from './object'
import {
  cssVarValue,
  tokenCssVarValue,
} from './style'

const bezierComponentProps: Array<keyof BezierComponentProps> = [
  'as',
  'testId',
  'style',
  'className',
  'interpolation',
]

const marginProps: Array<keyof MarginProps> = [
  'm',
  'mx',
  'my',
  'mt',
  'mr',
  'mb',
  'ml',
]

const layoutProps: Array<keyof LayoutProps> = [
  'p',
  'px',
  'py',
  'pt',
  'pr',
  'pb',
  'pl',
  'width',
  'height',
  'maxWidth',
  'minWidth',
  'maxHeight',
  'minHeight',
  'position',
  'inset',
  'top',
  'right',
  'bottom',
  'left',
  'shrink',
  'grow',
  'bgColor',
  'borderColor',
  'borderRadius',
  'borderWidth',
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderStyle',
  'elevation',
  'zIndex',
  'overflow',
  'overflowX',
  'overflowY',
]

export const splitByBezierComponentProps = <Props extends BezierComponentProps>(props: Props) =>
  split(props, bezierComponentProps)

export const splitByMarginProps = <Props extends MarginProps>(props: Props) =>
  split(props, marginProps)

export const splitByLayoutProps = <Props extends LayoutProps>(props: Props) =>
  split(props, layoutProps)

export function getMarginStyle<Props extends MarginProps>(props: Props) {
  const { m, mx, my, mt, mr, mb, ml } = props
  return {
    '--b-margin-all': m,
    '--b-margin-x': mx,
    '--b-margin-y': my,
    '--b-margin-top': mt,
    '--b-margin-right': mr,
    '--b-margin-bottom': mb,
    '--b-margin-left': ml,
  }
}

export function getLayoutStyle<Props extends LayoutProps>(props: Props) {
  const {
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    width,
    height,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    position,
    inset,
    top,
    right,
    bottom,
    left,
    shrink,
    grow,
    bgColor,
    borderColor,
    borderRadius,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderStyle,
    elevation,
    zIndex,
    overflow,
    overflowX,
    overflowY,
  } = props
  return {
    '--b-padding-all': p,
    '--b-padding-x': px,
    '--b-padding-y': py,
    '--b-padding-top': pt,
    '--b-padding-right': pr,
    '--b-padding-bottom': pb,
    '--b-padding-left': pl,
    '--b-width': width,
    '--b-height': height,
    '--b-max-width': maxWidth,
    '--b-min-width': minWidth,
    '--b-max-height': maxHeight,
    '--b-min-height': minHeight,
    '--b-position': position,
    '--b-inset': inset,
    '--b-top': top,
    '--b-right': right,
    '--b-bottom': bottom,
    '--b-left': left,
    '--b-shrink': shrink,
    '--b-grow': grow,
    '--b-bg-color': cssVarValue(bgColor),
    '--b-border-color': cssVarValue(borderColor),
    '--b-border-radius': tokenCssVarValue(borderRadius && `${TokenPrefix.Radius}-${borderRadius}`),
    '--b-border-width': borderWidth,
    '--b-border-top-width': borderTopWidth,
    '--b-border-right-width': borderRightWidth,
    '--b-border-bottom-width': borderBottomWidth,
    '--b-border-left-width': borderLeftWidth,
    '--b-border-style': borderStyle,
    '--b-elevation': tokenCssVarValue(elevation && `${TokenPrefix.Elevation}-${elevation}`),
    '--b-z-index': tokenCssVarValue(zIndex && `${TokenPrefix.ZIndex}-${zIndex}`),
    '--b-overflow': overflow,
    '--b-overflow-x': overflowX,
    '--b-overflow-y': overflowY,
  }
}
