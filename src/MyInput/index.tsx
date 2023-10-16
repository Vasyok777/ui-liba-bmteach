import React from 'react'

export interface MyInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	big?: boolean
	placeholder?: string
	label?: string
	error?: string
}

const MyInput = React.forwardRef<HTMLInputElement, MyInputProps>(
	(
		{
			big,
			placeholder,
			label = 'hello world',
			error = 'Не вірний формат',
			...props
		},
		ref
	) => {
		const classes = ['my-input']
		if (big) {
			classes.push('big-input')
		}
		return (
			<div className='relative inline-flex justify-center'>
				<input
					ref={ref}
					className='w-full border-transparent focus:border-transparent focus:ring-0 peer rounded-[20px] px-4 py-2'
					type='text'
					placeholder=' '
				/>
				<label
					className='absolute -top-[20px] left-2 
					text-[#666] transition-all  scale-75 px-1 duration 
					text-sm leading-[1.71]
					peer-placeholder-shown:scale-100 peer-placeholder-shown:top-[8px] peer-placeholder-shown:left-2 peer-placeholder-shown:text-slate-500
			peer-focus:-top-[20px] peer-focus:scale-75  peer-focus:text-[#666]
			peer-focus:text-[12px]
			'
				>
					{label}
				</label>
				{error && (
					<span className='absolute right-0 -top-4 text-[#C92E2B] text-xs leading-[1.33]'>
						{error}
					</span>
				)}
			</div>
		)
	}
)
export default MyInput
