import React from 'react'

import {button} from './Button.module.css'

const Button = ({children, type, onClick}) => {
	return (
		<button onClick={onClick} className={button} type={type || 'button'}>
			{children}
		</button>
	)
}

export default Button