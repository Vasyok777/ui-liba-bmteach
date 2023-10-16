import type { Meta, StoryObj } from '@storybook/react'

import NotificationsButton from './index'

const meta: Meta = {
	title: 'Example/NotificationsButton',
	component: NotificationsButton,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		quantity: 2,
		classes: '',
	},
}
