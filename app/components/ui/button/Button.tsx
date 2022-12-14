import { FC } from 'react'

import styles from './Button.module.scss'

interface Props {
	children: React.ReactNode
}

const Button: FC<Props> = ({ children }) => {
	return (
		<div className={styles.button_container}>
			<span className={styles.mask}>{children}</span>
			<button className={styles.button}>
				<span>{children}</span>
			</button>
		</div>
	)
}

export default Button
