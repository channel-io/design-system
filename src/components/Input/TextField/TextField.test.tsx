/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from '../../../utils/testUtils'
import TextField, { TEXT_INPUT_TEST_ID } from './TextField'
import { TextFieldProps, TextFieldVariant } from './TextField.types'
import { getProperTextFieldBgColor } from './TextFieldUtils'

describe('TextField', () => {
  let props: TextFieldProps

  beforeEach(() => {
    props = {}
  })

  const renderComponent = (optionProps?: TextFieldProps) => render(
    <TextField {...props} {...optionProps} />,
  )

  it('TextField have default attribute', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(TEXT_INPUT_TEST_ID)
    const inputElement = rendered.getElementsByTagName('input')[0]
    expect(inputElement).not.toHaveAttribute('disabled')
    expect(inputElement).not.toHaveAttribute('readOnly')
    expect(inputElement).not.toHaveAttribute('placeholder')
    expect(inputElement).not.toHaveAttribute('maxLength')
  })

  it('should have "disabled" attribute when "disabled" props is "true"', () => {
    const { getByTestId } = renderComponent({ disabled: true })
    const rendered = getByTestId(TEXT_INPUT_TEST_ID)
    const inputElement = rendered.getElementsByTagName('input')[0]
    expect(inputElement).toHaveAttribute('disabled')
  })

  it('should have "readOnly" attribute when "readOnly" props is "true"', () => {
    const { getByTestId } = renderComponent({ readOnly: true })
    const rendered = getByTestId(TEXT_INPUT_TEST_ID)
    const inputElement = rendered.getElementsByTagName('input')[0]
    expect(inputElement).toHaveAttribute('readOnly')
  })

  it('should have "placeholder" attribute when "placeholder" props is "true"', () => {
    const { getByTestId } = renderComponent({ placeholder: 'this is placeholder' })
    const rendered = getByTestId(TEXT_INPUT_TEST_ID)
    const inputElement = rendered.getElementsByTagName('input')[0]
    expect(inputElement).toHaveAttribute('placeholder', 'this is placeholder')
  })

  it('should have "maxLength" attribute when "maxLength" props is "true"', () => {
    const { getByTestId } = renderComponent({ maxLength: 5 })
    const rendered = getByTestId(TEXT_INPUT_TEST_ID)
    const inputElement = rendered.getElementsByTagName('input')[0]
    expect(inputElement).toHaveAttribute('maxLength', '5')
  })

  it('sholud have the correct background-color according to the state.', () => {
    expect(getProperTextFieldBgColor({
      variant: TextFieldVariant.Primary,
      focused: false,
      hasError: false,
      readOnly: false,
    })).toBe('bg-grey-lightest')

    expect(getProperTextFieldBgColor({
      variant: TextFieldVariant.Primary,
      focused: true,
      hasError: false,
      readOnly: false,
    })).toBe('bg-white-normal')

    expect(getProperTextFieldBgColor({
      variant: TextFieldVariant.Primary,
      focused: false,
      hasError: true,
      readOnly: false,
    })).toBe('bg-white-normal')

    expect(getProperTextFieldBgColor({
      variant: TextFieldVariant.Primary,
      focused: false,
      hasError: false,
      readOnly: true,
    })).toBe('bg-grey-lighter')
  })
})
