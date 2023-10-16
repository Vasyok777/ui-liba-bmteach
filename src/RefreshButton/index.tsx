import React, { FC } from 'react'
import RefreshIcon from './../assets/images/refresh.svg'

interface IRefreshButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	classes?: string
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const CloseButton: FC<IRefreshButton> = ({ classes, onClick, ...props }) => {
	return (
		<button
			className={`w-6 h-6 flex items-center justify-center ${classes}`}
			onClick={onClick}
			{...props}
		>
			<img className='w-full h-full' src={RefreshIcon} alt='Close icon' />
		</button>
	)
}
export default CloseButton
