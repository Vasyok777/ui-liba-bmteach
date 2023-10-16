import type { Meta, StoryObj } from '@storybook/react'

import RefreshButton from './index'

const meta: Meta = {
	title: 'Example/RefreshButton',
	component: RefreshButton,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
}
