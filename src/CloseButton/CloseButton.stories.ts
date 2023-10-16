import type { Meta, StoryObj } from '@storybook/react'

import CloseButton from './index'

const meta: Meta = {
	title: 'Example/CloseButton',
	component: CloseButton,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
}
