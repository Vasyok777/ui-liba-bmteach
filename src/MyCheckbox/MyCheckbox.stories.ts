import type { Meta, StoryObj } from '@storybook/react'

import MyCheckbox from './index'

const meta: Meta = {
	title: 'Example/MyCheckbox',
	component: MyCheckbox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
}

export const Secondary: Story = {
	args: {
		color: 'green',
	},
}
