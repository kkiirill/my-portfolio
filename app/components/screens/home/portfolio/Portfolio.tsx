import TextSpan from '@/components/ui/text/TextSpan'
import { FC } from 'react'

import styles from './Portfolio.module.scss'
import ProjectsList from './projects/ProjectsList'

const Portfolio: FC = () => {
	const mainText = 'My projects'.split('')
	return (
		<section className={styles.section}>
			<div className={styles.heading}>
				{mainText.map((letter, index) => (
					<TextSpan key={index}>{letter}</TextSpan>
				))}
			</div>
			<p className={styles.p}>Here you can see my recent work.</p>

			<ProjectsList />
		</section>
	)
}

export default Portfolio
