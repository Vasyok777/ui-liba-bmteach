import React, { FC } from 'react'
import NotificationsIcon from './../assets/images/notifications.svg'

interface INotificationsButton
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	classes?: string
	quantity?: number | string
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const NotificationsButton: FC<INotificationsButton> = ({
	classes,
	onClick,
	quantity = 5,
	...props
}) => {
	return (
		<button
			className={`w-6 h-6 flex items-center relative justify-center  ${classes}`}
			onClick={onClick}
			{...props}
		>
			<img
				className='w-full h-full'
				src={NotificationsIcon}
				alt='Notification icon'
			/>
			{+quantity > 0 ? (
				<span className='absolute flex items-center justify-center w-[12px] h-[12px] bg-white rounded-full font-extrabold text-white text-center text-[6px] leading-[12px] top-[-3px] right-0'>
					<span className='bg-red-500 w-[10px] h-[10px] flex items-center justify-center rounded-full'>
						{quantity}
					</span>
				</span>
			) : null}
		</button>
	)
}
export default NotificationsButton
