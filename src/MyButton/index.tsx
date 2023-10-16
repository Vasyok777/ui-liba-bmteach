'use client'
import React, { FC } from 'react'
import PlusIcon from '../assets/images/circle-plus.svg'

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	classes?: string
	img?: string
	isImage?: boolean
}

const MyButton: FC<MyButtonProps> = ({
	children,
	color,
	isImage,
	classes,
	img = PlusIcon,
	...props
}) => {
	return (
		<button
			className={`flex gap-2 items-center bg-gray-800 text-white rounded-3xl px-4 py-2 ${classes}`}
			{...props}
		>
			{isImage && <img src={img} alt='Plus icon' />}
			{children}
		</button>
	)
}
export default MyButton
