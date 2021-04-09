/* External dependencies */
import React, { forwardRef, Ref } from 'react'

/* Internal dependencies */
import { Icon, IconSize } from '../Icon'
import ToastProps, { Appearance, Placement } from './Toast.types'
import { Container, IconWrapper, Content, Close, ActionContent } from './Toast.styled'

function Toast(
  {
    placement = Placement.BottomLeft,
    appearance = Appearance.Info,
    content = '',
    iconName = 'info-filled',
    actionItem,
    as,
    ...props
  }: ToastProps,
  forwardedRef: Ref<any>,
) {
  return (
    <Container
      placement={placement}
      ref={forwardedRef}
      {...props}
    >
      <IconWrapper
        appearance={appearance}
      >
        <Icon
          name={iconName}
          size={IconSize.S}
        />
      </IconWrapper>
      <Content>
        { content }
        { ' ' }
        <ActionContent>
          { ` ${actionItem?.content}` }
        </ActionContent>
      </Content>
      <Close>
        <Icon
          name="cancel"
          size={IconSize.XS}
        />
      </Close>
    </Container>
  )
}

export default forwardRef(Toast)
