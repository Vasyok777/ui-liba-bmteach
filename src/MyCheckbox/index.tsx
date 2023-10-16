import React, { useState } from 'react'

const MyCheckbox = () => {
	const [isChecked, setIsChecked] = useState<boolean | undefined>(false) // Ініціалізуємо з значенням "false"

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(event.target.checked) // Встановлюємо значення "checked" як булеве значення
	}
	return (
		<div className='form-control'>
			<label className='cursor-pointer label'>
				<span className='label-text'>Remember me</span>
				<input
					type='checkbox'
					checked={isChecked || false}
					className='checkbox checkbox-success'
					onChange={handleCheckboxChange}
				/>
			</label>
		</div>
	)
}

export default MyCheckbox
