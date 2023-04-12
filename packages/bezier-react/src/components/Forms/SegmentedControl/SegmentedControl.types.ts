import type React from 'react'

import type * as TabsPrimitive from '@radix-ui/react-tabs'

import {
  type BezierComponentProps,
  type ChildrenProps,
  type DisableProps,
  type SideContentProps,
} from '~/src/types/ComponentProps'

import { type FormComponentProps } from '~/src/components/Forms'

export enum SegmentedControlSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
}

export type SegmentedControlType = 'radiogroup' | 'tabs'

type SegmentedControlRadioGroupSpecificOptions = FormComponentProps & {
  /**
   * The name of the group.
   * Submitted with its owning form as part of a name/value pair.
   */
  name?: string
}

type SegmentedControlNonValueOptions<Type extends SegmentedControlType> = {
  /**
   * The element type of segmented control.
   * It can be either `radiogroup` or `tabs`
   * @default 'radiogroup'
   */
  type?: Type
  /**
   * The size of the segmented control.
   * @default SegmentedControlSize.M
   */
  size?: SegmentedControlSize
  /**
   * The width of the segmented control.
   * @default '100%'
   */
  width?: React.CSSProperties['width']
}

type SegmentedControlValueOptions<Value extends string> = {
  /**
   * The controlled value of the item to check.
   * It should be used in conjunction with `onValueChange`.
   */
  value?: Value
  /**
   * The value of the segmented control that should be checked when initially rendered.
   * Use when you do not need to control the state of the items.
   */
  defaultValue?: Value
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: Value) => void
}

type SegmentedControlOptions<Type extends SegmentedControlType, Value extends string> =
  (Type extends 'radiogroup'
    ? SegmentedControlRadioGroupSpecificOptions
    : {})
  & SegmentedControlNonValueOptions<Type>
  & SegmentedControlValueOptions<Value>

interface SegmentedControlItemOptions<Value extends string> {
  /**
   * The value of the item.
   *
   * If the type of `SegmentedControl` is `radiogroup`, It is the value given as data when submitted with a `SegmentedControlProps.name`.
   *
   * If the type of `SegmentedControl` is `tabs`, It is the value that associates the item with a content.
   */
  value: Value
}

interface SegmentedControlTabContentOptions<Value extends string> {
  /**
   * A unique value that associates the item with a content.
   */
  value: Value
}

type RadixTabsPredefinedPropKeys = 'dir'

export type SegmentedControlProps<Type extends SegmentedControlType, Value extends string> =
  & BezierComponentProps
  & ChildrenProps
  & Omit<React.HTMLAttributes<HTMLDivElement>, RadixTabsPredefinedPropKeys>
  & SegmentedControlOptions<Type, Value>

export type SegmentedControlRootProps<Type extends SegmentedControlType, Value extends string> =
  Omit<SegmentedControlProps<Type, Value>, keyof SegmentedControlNonValueOptions<Type>>

export interface SegmentedControlItemProps<Value extends string> extends
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  React.HTMLAttributes<HTMLButtonElement>,
  SideContentProps,
  SegmentedControlItemOptions<Value> {}

type RadixTabListPredefinedPropKeys = 'defaultValue'

export interface SegmentedControlTabListProps extends
  BezierComponentProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, RadixTabListPredefinedPropKeys>,
  ChildrenProps {}

export interface SegmentedControlTabContentProps<Value extends string> extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  Pick<TabsPrimitive.TabsContentProps, 'forceMount'>,
  SegmentedControlTabContentOptions<Value> {}
