import type { Meta, StoryObj } from '@storybook/react'

import MyButton from './index'

const meta: Meta = {
	title: 'Example/Button',
	component: MyButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		background: 'bg-gray-800',
		color: 'text-white',
		rounded: 'rounded-3xl',
		children: 'Новий працівник',
		padding: 'px-4 py-2',
		isImg: true,
	},
}

export const Secondary: Story = {
	args: {
		color: 'green',
	},
}
