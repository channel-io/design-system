import React, {
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import classNames from 'classnames'

import { ariaAttr } from '~/src/utils/dom'
import { createContext } from '~/src/utils/react'
import {
  cssDimension,
  px,
} from '~/src/utils/style'

import {
  DIVIDER_THICKNESS,
  Divider,
} from '~/src/components/Divider'
import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'

import {
  type SegmentedControlItemListProps,
  type SegmentedControlItemProps,
  type SegmentedControlProps,
  type SegmentedControlRadioGroupProps,
  SegmentedControlSize,
  type SegmentedControlTabContentProps,
  type SegmentedControlTabListProps,
  type SegmentedControlTabsProps,
  type SegmentedControlType,
} from './SegmentedControl.types'

import * as Styled from './SegmentedControl.styled'

type SegmentedControlContextValue = Required<Pick<SegmentedControlProps<SegmentedControlType, string>, 'type' | 'size' | 'width'>>

const [
  SegmentedControlContextProvider,
  useSegmentedControlContext,
] = createContext<SegmentedControlContextValue | null>(null, 'SegmentedControl')

type SegmentedControlItemListContextValue = {
  itemCount: number
  selectedItemIndex: number | null
  setSelectedItemIndex: (index: number | null) => void
}

const [
  SegmentedControlItemContextProvider,
  useSegmentedControlItemContext,
] = createContext<number | null>(null, 'SegmentedControlItem')

const [
  SegmentedControlItemListContextProvider,
  useSegmentedControlItemListContext,
] = createContext<SegmentedControlItemListContextValue | null>(null, 'SegmentedControlItemList')

export const SEGMENTED_CONTROL_INDICATOR_TEST_ID = 'bezier-react-segmented-control-indicator'

function SegmentedControlIndicator() {
  const { selectedItemIndex, itemCount } = useSegmentedControlItemListContext('SegmentedControlIndicator')
  const { size } = useSegmentedControlContext('SegmentedControlIndicator')

  if (selectedItemIndex === null) { return null }

  const containerPadding = Styled.paddingBySegmentedControlSize[size]
  const containerHeight = Styled.heightBySegmentedControlSize[size]

  const dividerTotalWidth = `${(itemCount - 1) * DIVIDER_THICKNESS}px`
  const containerHorizontalPadding = `${2 * containerPadding}px`

  const style = {
    '--b-segmented-control-indicator-translateX': `calc(${selectedItemIndex * 100}% + ${selectedItemIndex * DIVIDER_THICKNESS}px)`,
    '--b-segmented-control-indicator-width': `calc((100% - ${dividerTotalWidth} - ${containerHorizontalPadding}) / ${itemCount})`,
    '--b-segmented-control-indicator-height': px(containerHeight - (2 * containerPadding)),
    '--b-segmented-control-indicator-left': px(containerPadding),
  } as React.CSSProperties

  return (
    <Styled.Indicator
      data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID}
      style={style}
    />
  )
}

function SegmentedControlItemListImpl<
  Type extends SegmentedControlType,
  Value extends string,
>({
  children,
  style: styleProp,
  className: classNameProp,
  ...rest
}: SegmentedControlItemListProps<Type, Value>) {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null)

  const {
    type,
    size,
    width,
  } = useSegmentedControlContext('SegmentedControlItemList')

  const contextValue: SegmentedControlItemListContextValue = useMemo(() => ({
    selectedItemIndex,
    itemCount: React.Children.count(children),
    setSelectedItemIndex,
  }), [
    children,
    selectedItemIndex,
  ])

  const style = useMemo(() => ({
    ...styleProp,
    '--b-segmented-control-width': cssDimension(width),
  } as React.CSSProperties), [
    styleProp,
    width,
  ])

  const className = classNames(
    classNameProp,
    size,
  )

  const SegmentedControlItemList = type === 'radiogroup'
    ? RadioGroupPrimitive.Root
    : TabsPrimitive.List

  return (
    <SegmentedControlItemList
      asChild
      style={style}
      className={className}
      {...rest}
    >
      <Styled.Container>
        <SegmentedControlItemListContextProvider value={contextValue}>
          { React.Children.map(children, (child, index) => (
            <>
              { index !== 0 && (
                <Divider
                  withoutParallelIndent
                  orientation="vertical"
                />
              ) }
              <SegmentedControlItemContextProvider value={index}>
                { child }
              </SegmentedControlItemContextProvider>
            </>
          )) }
          <SegmentedControlIndicator />
        </SegmentedControlItemListContextProvider>
      </Styled.Container>
    </SegmentedControlItemList>
  )
}

const SegmentedControlItemList = forwardRef(SegmentedControlItemListImpl) as <
  Type extends SegmentedControlType,
  Value extends string,
>(
  props: SegmentedControlItemListProps<Type, Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element

function SegmentedControlRadioGroupImpl<Value extends string>({
  children,
  ...rest
}: SegmentedControlRadioGroupProps<Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <SegmentedControlItemList
      ref={forwardedRef}
      {...useFormFieldProps(rest)}
    >
      { children }
    </SegmentedControlItemList>
  )
}

const SegmentedControlRadioGroup = forwardRef(SegmentedControlRadioGroupImpl) as <Value extends string>(
  props: SegmentedControlRadioGroupProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element

/**
 * `SegmentedControlTabList` is the component that wraps `SegmentedControlItem`.
 * It can be used only when `SegmentedControl` component is used as the `tabs` type.
 *
 * It must be used as a child of `SegmentedControl`.
 */
export const SegmentedControlTabList = SegmentedControlItemList as (
  props: SegmentedControlTabListProps & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element

/**
 * `SegmentedControlTabContent` is the component that wraps the content that corresponds to a specific value of `SegmentedControlItem`.
 * It can be used only when `SegmentedControl` component is used as the `tabs` type.
 *
 * It must be used as a child of `SegmentedControl`.
 */
export const SegmentedControlTabContent = TabsPrimitive.Content as <Value extends string>(
  props: SegmentedControlTabContentProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element

const SegmentedControlTabs = TabsPrimitive.Root as <Value extends string>(
  props: SegmentedControlTabsProps<Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element

function SegmentedControlImpl<
  Type extends SegmentedControlType,
  Value extends string,
>({
  type = 'radiogroup' as Type,
  size = SegmentedControlSize.M,
  width = '100%',
  onValueChange,
  children,
  ...rest
}: SegmentedControlProps<Type, Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  const SegmentedControlRoot = type === 'radiogroup'
    ? SegmentedControlRadioGroup
    : SegmentedControlTabs

  const contextValue = useMemo(() => ({
    type,
    size,
    width,
  }), [
    type,
    size,
    width,
  ])

  return (
    <SegmentedControlContextProvider value={contextValue}>
      <SegmentedControlRoot
        ref={forwardedRef}
        onValueChange={onValueChange}
        {...rest}
      >
        { children }
      </SegmentedControlRoot>
    </SegmentedControlContextProvider>
  )
}

/**
 * `SegmentedControl` is component that looks like a combination of a radio and a button.
 * They can be used in place of tabs and as input elements in modals.
 * If you have more than five items, use a different element, such as a dropdown.
 *
 * `SegmentedControl` can be used as a radio group, tabs element depending on its `type`.
 *
 * @example
 *
 * ```tsx
 * // Anatomy of the SegmentedControl type="radiogroup"
 * <SegmentedControl type="radiogroup">
 *  <SegmentedControlItem />
 * </SegmentedControl>
 *
 * // Anatomy of the SegmentedControl type="tabs"
 * <SegmentedControl type="tabs">
 *  <SegmentedControlTabList>
 *   <SegmentedControlItem />
 *  </SegmentedControlTabList>
 *
 *  <SegmentedControlTabContent />
 * </SegmentedControl>
 * ```
 */
export const SegmentedControl = forwardRef(SegmentedControlImpl) as <
  Type extends SegmentedControlType,
  Value extends string,
>(
  props: SegmentedControlProps<Type, Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element

/**
 * NOTE: (@ed) A property injected at runtime by the radix-ui lib.
 */
type ItemProps<Type extends SegmentedControlType> = (
  Type extends 'radiogroup'
    ? { 'data-state'?: 'unchecked' | 'checked' }
    : { 'data-state'?: 'inactive' | 'active' }
)
& React.HTMLAttributes<HTMLButtonElement>
& Partial<SegmentedControlItemProps<Type>>
& Required<Pick<SegmentedControlProps<Type, string>, 'type'>>

const Item = forwardRef<HTMLButtonElement, ItemProps<SegmentedControlType>>(function Item({
  children,
  type,
  leftContent,
  rightContent,
  ...rest
}, forwardedRef) {
  const { setSelectedItemIndex } = useSegmentedControlItemListContext('SegmentedControlItem')
  const index = useSegmentedControlItemContext('SegmentedControlItem')

  const checked = type === 'radiogroup'
    ? (rest as ItemProps<typeof type>)?.['data-state'] === 'checked'
    : (rest as ItemProps<typeof type>)?.['data-state'] === 'active'

  useEffect(function setSelectedItem() {
    if (checked) {
      setSelectedItemIndex(index)
    }
  }, [
    checked,
    index,
    setSelectedItemIndex,
  ])

  return (
    <Styled.Item
      {...rest}
      ref={forwardedRef}
      type="button"
      data-checked={ariaAttr(checked)}
    >
      <Styled.ItemContainer>
        { leftContent }
        <Styled.ItemLabel>
          { children }
        </Styled.ItemLabel>
        { rightContent }
      </Styled.ItemContainer>
    </Styled.Item>
  )
})

function SegmentedControlItemImpl<Value extends string>({
  children,
  ...rest
}: SegmentedControlItemProps<Value>, forwardedRef: React.Ref<HTMLButtonElement>) {
  const { type } = useSegmentedControlContext('SegmentedControlItem')

  const SegmentedControlItem = type === 'radiogroup'
    ? RadioGroupPrimitive.Item
    : TabsPrimitive.Trigger

  return (
    <SegmentedControlItem
      asChild
      ref={forwardedRef}
      {...rest}
    >
      <Item type={type}>
        { children }
      </Item>
    </SegmentedControlItem>
  )
}

/**
 * `SegmentedControlItem` component is each item in `SegmentedControl`.
 *
 * If the type of `SegmentedControl` is `radiogroup`, this component acts as a radio item.
 * In this case, it must be used as a child of `SegmentedControl`.
 *
 * If the type of `SegmentedControl` is `tabs`, this component acts as a tab item.
 * In this case, it must be used as a child of `SegmentedControlTabList`.
 */
export const SegmentedControlItem = forwardRef(SegmentedControlItemImpl) as <Value extends string>(
  props: SegmentedControlItemProps<Value> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => JSX.Element
