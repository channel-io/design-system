/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import _ from 'lodash'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import { TabItem } from '../TabItem'
import { TabActions } from '../TabActions'
import Tabs from './Tabs'

export default {
  title: getTitle(base),
  component: Tabs,
  argTypes: {
    onClick: { control: { action: 'onClick' } },
    selectedOptionIndex: {
      control: {
        type: 'number',
      },
    },
    indicatorThickness: {
      control: {
        type: 'number',
      },
    },
  },
}

const Template = ({ ...otherProps }) => (
  <Tabs {...otherProps}>
    { _.range(0, 8).map((n) => (
      <TabItem optionKey={`tab-item-${n}`}>
        Tab { n }
      </TabItem>
    )) }
  </Tabs>
)

export const Primary = Template.bind({})

// @ts-ignore
Primary.args = {
  disabled: false,
  useIndicator: true,
  indicatorThickness: 3,
}

/* eslint-disable react/button-has-type */
export const WithActions = ({ ...otherProps }) => (
  <Tabs {...otherProps}>
    { _.range(0, 8).map((n) => (
      <TabItem optionKey={`tab-item-${n}`}>
        Tab { n }
      </TabItem>
    )) }

    <TabActions
      style={{
        marginLeft: 60,
      }}
    >
      <button>Action 1</button>
      <button>Action 2</button>
      { ({ disabled }: any) => (
        <div>I&apos;m { disabled ? 'still' : 'not' } disabled!</div>
      ) }
    </TabActions>
  </Tabs>
)
WithActions.args = {
  disabled: false,
  useIndicator: true,
  indicatorThickness: 3,
}
