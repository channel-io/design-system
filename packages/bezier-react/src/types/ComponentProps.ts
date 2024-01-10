import { type CSSProperties } from 'react'
import type React from 'react'

import type { SemanticNames } from '~/src/foundation'

import type { InjectedInterpolation } from './Foundation'
import type {
  BackgroundSemanticColor,
  BackgroundTextSemanticColor,
  BorderSemanticColor,
  Elevation,
  Radius,
  ZIndex,
} from './Token'

/* Component Base Props */
export interface RenderConfigProps {
  /**
   * Specifies which HTML tag should be used to render this component.
   *
   * `as` prop directly comes from the polymorphic "as" prop of `styled-components`.
   *
   * @see https://styled-components.com/docs/api#as-polymorphic-prop
   */
  as?: React.ElementType

  /**
   * The test id attribute compatible with `@testing-library/react`.
   */
  testId?: string
}

export interface StylableComponentProps {
  /**
   * Customized inline CSS style for this component.
   */
  style?: CSSProperties

  /**
   * Customized CSS classname for this component.
   */
  className?: string

  /**
   * @deprecated
   * Customized style interpolation for this component.
   */
  interpolation?: InjectedInterpolation
}

/**
 * @deprecated Migration to `AlphaBezierComponentProps` is in progress.
 */
export type BezierComponentProps = RenderConfigProps & StylableComponentProps

/* Component Additional Props */
export interface ContentProps<Content = React.ReactNode> {
  content?: Content
}

export interface ChildrenProps<Children = React.ReactNode> {
  children?: Children
}

export interface VariantProps<Variant extends string | number> {
  variant?: Variant
}

export interface SizeProps<Size extends string | number> {
  size?: Size
}

export interface SideContentProps<LeftContent = React.ReactNode, RightContent = React.ReactNode> {
  leftContent?: LeftContent
  rightContent?: RightContent
}

export interface DisableProps {
  disabled?: boolean
}

export interface ColorProps {
  color?: SemanticNames
}

export interface IdentifierProps {
  id: string
}

export interface OptionItemProps {
  optionKey?: string
}

export interface OptionItemHostProps<OptionKeyType = string> {
  selectedOptionIndex?: number
  onChangeOption?: (optionIndex: number, optionKey?: OptionKeyType) => void
}

type PropNameType = string | string[]

type AdditionalProps<PropName extends PropNameType, Suffix extends string, PropType> = {
  [Key in `${PropName extends string
    ? PropName
    : PropName[number]
  }${Capitalize<Suffix>}`]?: PropType
}

type AdditionalStyleProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'style', CSSProperties>

type AdditionalClassNameProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'className', string>

type AdditionalInterpolationProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'interpolation', InjectedInterpolation>

export type AdditionalStylableProps<ElementName extends PropNameType> =
  AdditionalStyleProps<ElementName> &
  AdditionalClassNameProps<ElementName> &
  AdditionalInterpolationProps<ElementName>

export type AdditionalTestIdProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'testId', string>

export type AdditionalColorProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'color', SemanticNames>

export interface ActivatableProps extends AdditionalStylableProps<'active'> {
  active?: boolean
  allowActive?: boolean
}

export interface LinkProps {
  href?: string
}

/**
 * TODO: Remove Alpha prefix after removing styled-components dependency.
 */
export interface AlphaBezierComponentProps extends
  Omit<RenderConfigProps, 'as'>,
  Omit<StylableComponentProps, 'interpolation'> {}

/**
 * TODO: Add JSDoc
 */
export interface PolymorphicProps<T extends React.ElementType> {
  as?: T
}

/**
 * TODO: Add JSDoc
 */
export interface MarginProps {
  margin?: CSSProperties['margin']
  marginX?: CSSProperties['margin']
  marginY?: CSSProperties['margin']
  marginTop?: CSSProperties['marginTop']
  marginRight?: CSSProperties['marginRight']
  marginBottom?: CSSProperties['marginBottom']
  marginLeft?: CSSProperties['marginLeft']
}

type Position = 'absolute' | 'fixed' | 'relative' | 'sticky'
type Overflow = 'auto' | 'hidden' | 'scroll' | 'visible'

/**
 * TODO: Add JSDoc
 */
export interface LayoutProps {
  padding?: CSSProperties['padding']
  paddingX?: CSSProperties['padding']
  paddingY?: CSSProperties['padding']
  paddingTop?: CSSProperties['paddingTop']
  paddingRight?: CSSProperties['paddingRight']
  paddingBottom?: CSSProperties['paddingBottom']
  paddingLeft?: CSSProperties['paddingLeft']
  width?: CSSProperties['width']
  height?: CSSProperties['height']
  maxWidth?: CSSProperties['maxWidth']
  minWidth?: CSSProperties['minWidth']
  maxHeight?: CSSProperties['maxHeight']
  minHeight?: CSSProperties['minHeight']
  position?: Position
  inset?: CSSProperties['inset']
  top?: CSSProperties['top']
  right?: CSSProperties['right']
  bottom?: CSSProperties['bottom']
  left?: CSSProperties['left']
  shrink?: CSSProperties['flexShrink']
  grow?: CSSProperties['flexGrow']
  backgroundColor?: BackgroundSemanticColor | BackgroundTextSemanticColor
  borderColor?: BorderSemanticColor
  borderRadius?: Radius
  borderWidth?: CSSProperties['borderWidth']
  borderTopWidth?: CSSProperties['borderTopWidth']
  borderRightWidth?: CSSProperties['borderRightWidth']
  borderBottomWidth?: CSSProperties['borderBottomWidth']
  borderLeftWidth?: CSSProperties['borderLeftWidth']
  elevation?: Elevation
  zIndex?: ZIndex
  overflow?: Overflow
  overflowX?: Overflow
  overflowY?: Overflow
}
