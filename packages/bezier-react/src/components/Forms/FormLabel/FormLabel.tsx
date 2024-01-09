import React, { forwardRef } from 'react'

import classNames from 'classnames'

import { isEmpty } from '~/src/utils/type'

import { useFormControlContext } from '~/src/components/Forms/FormControl'
import { Help } from '~/src/components/Help'
import { HELP_DISPLAY_NAME } from '~/src/components/Help/Help'
import {
  LegacyHStack,
  LegacyStackItem,
} from '~/src/components/LegacyStack'
import { Text } from '~/src/components/Text'

import type FormLabelProps from './FormLabel.types'

import styles from './FormLabel.module.scss'

export const FORM_LABEL_TEST_ID = 'bezier-react-form-label'

function FormLabel({
  testId = FORM_LABEL_TEST_ID,
  help,
  bold = true,
  color = 'txt-black-darkest',
  children,
  ...rest
}: FormLabelProps,
forwardedRef: React.Ref<HTMLLabelElement>,
) {
  const contextValue = useFormControlContext()

  const { labelPosition, ...ownProps } = contextValue?.getLabelProps(rest) ?? {
    labelPosition: 'top',
    ...rest,
  }

  const LabelComponent = (
    <Text
      {...ownProps}
      className={styles.LabelText}
      ref={forwardedRef}
      testId={testId}
      align="left"
      bold={bold}
      typo={labelPosition === 'top' ? '13' : '14'}
      color={color}
    >
      { children }
    </Text>
  )

  const HelpComponent = (() => {
    if (isEmpty(help)) { return null }

    if (React.isValidElement(help)) {
      // FIXME(@bora): string, JSXElementCostructor 타입에 displayName 속성이 존재하지 않음, 임시로 any 타입으로 설정
      const { displayName } = help?.type as any
      if (displayName === HELP_DISPLAY_NAME) {
        return help
      }
    }

    return (
      <Help>
        { help }
      </Help>
    )
  })()

  if (isEmpty(children)) { return null }

  return (
    <div className={
      classNames(
        styles.FormLabel,
        styles[`${labelPosition}-position`],
      )
    }
    >
      { !HelpComponent
        ? LabelComponent
        : (
          <LegacyHStack align="center" spacing={6}>
            <LegacyStackItem shrink weight={1}>
              { LabelComponent }
            </LegacyStackItem>
            <LegacyStackItem>
              { HelpComponent }
            </LegacyStackItem>
          </LegacyHStack>
        ) }
    </div>
  )
}

export default forwardRef(FormLabel)
