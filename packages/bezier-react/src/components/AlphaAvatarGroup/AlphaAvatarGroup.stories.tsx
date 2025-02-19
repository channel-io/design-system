import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { AlphaAvatar } from '~/src/components/AlphaAvatar'

import { AvatarGroup } from './AvatarGroup'
import { type AvatarGroupProps } from './AvatarGroup.types'
import MOCK_AVATAR_LIST from './__mocks__/avatarList'

const meta: Meta<typeof AvatarGroup> = {
  component: AvatarGroup,
  argTypes: {
    max: {
      control: {
        type: 'range',
        min: 1,
        max: MOCK_AVATAR_LIST.length,
        step: 1,
      },
    },
    spacing: {
      control: {
        type: 'range',
        min: -50,
        max: 50,
        step: 1,
      },
    },
  },
}
export default meta

const Template: StoryFn<AvatarGroupProps> = (args) => (
  <AvatarGroup {...args}>
    {MOCK_AVATAR_LIST.map(({ id, avatarUrl, name }) => (
      <AlphaAvatar
        key={id}
        avatarUrl={avatarUrl}
        name={name}
      />
    ))}
  </AvatarGroup>
)

export const Primary: StoryObj<AvatarGroupProps> = {
  render: Template,

  args: {
    max: 5,
    ellipsisType: 'icon',
    size: '30',
    spacing: 4,
  },
  parameters: {
    design: {
      type: 'link',
      url: 'https://www.figma.com/design/aJJF4bU82uR0jAsmWp5wlE/Navigation?node-id=1-1389&t=63YtY9eXtdx4ujrv-0',
    },
  },
}
