import { FC } from 'react'

import TextSpan from '@/components/ui/text/TextSpan'
import Button from '@/components/ui/button/Button'
import MovingFigures from '@/components/ui/figures/MovingFigures'

import styles from './Welcome.module.scss'

const Welcome: FC = () => {
	const mainText = "Hi, I'm Kirill, Front End Developer".split('')
	return (
		<section className={styles.section}>
			<div className={styles.content}>
				<div>
					{mainText.map((letter, index) => (
						<TextSpan key={index}>{letter}</TextSpan>
					))}
				</div>
				<Button>Contact me</Button>
				<MovingFigures />
			</div>
		</section>
	)
}

export default Welcome
