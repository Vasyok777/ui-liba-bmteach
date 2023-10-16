import React, { FC } from 'react'
import CloseIcon from './../assets/images/closeIcon.svg'

interface ICloseButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	classes?: string
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const CloseButton: FC<ICloseButton> = ({ classes, onClick, ...props }) => {
	return (
		<button
			className={`bg-white px-2 py-2 rounded-full ${classes}`}
			onClick={onClick}
			{...props}
		>
			<img src={CloseIcon} alt='Close icon' />
		</button>
	)
}
export default CloseButton
