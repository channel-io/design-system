import React, {
  type ReactElement,
  type Ref,
  forwardRef,
} from 'react'

import * as SwitchPrimitive from '@radix-ui/react-switch'
import classNames from 'classnames'

import useFormFieldProps from '~/src/components/Forms/useFormFieldProps'

import type SwitchProps from './Switch.types'
import { SwitchSize } from './Switch.types'

import styles from './Switch.module.scss'

export const SWITCH_TEST_ID = 'bezier-react-switch'
export const SWITCH_HANDLE_TEST_ID = 'bezier-react-switch-handle'

export const Switch = forwardRef(function Switch(
  {
    testId = SWITCH_TEST_ID,
    handleTestId = SWITCH_HANDLE_TEST_ID,
    checked,
    defaultChecked = false,
    onCheckedChange,
    size = SwitchSize.M,
    ...rest
  }: SwitchProps,
  forwardedRef: Ref<HTMLButtonElement>,
): ReactElement {
  const {
    disabled,
    required,
    ...ownProps
  } = useFormFieldProps(rest)

  return (
    <SwitchPrimitive.Root
      asChild
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      required={required}
      disabled={disabled}
      {...ownProps}
    >
      <button
        ref={forwardedRef}
        data-testid={testId}
        className={classNames(
          styles.Switch,
          styles[`size-${size}`],
        )}
        type="button"
      >
        <SwitchPrimitive.Thumb asChild>
          <span
            data-testid={handleTestId}
            className={classNames(
              styles.SwitchThumb,
              styles[`size-${size}`],
            )}
          />
        </SwitchPrimitive.Thumb>
      </button>
    </SwitchPrimitive.Root>
  )
})
