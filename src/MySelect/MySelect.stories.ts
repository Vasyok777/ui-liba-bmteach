import type { Meta, StoryObj } from '@storybook/react'

import MySelect from './index'

const meta: Meta = {
	title: 'Example/MySelect',
	component: MySelect,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
}
