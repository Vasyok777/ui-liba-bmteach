import type { Meta, StoryObj } from '@storybook/react'

import ToggleButton from './index'

const meta: Meta = {
	title: 'Example/ToggleButton',
	component: ToggleButton,
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
