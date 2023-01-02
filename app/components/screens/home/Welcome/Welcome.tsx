import { FC } from 'react'

import { motion } from 'framer-motion'
import TextSpan from '@/components/ui/text/TextSpan'
import Button from '@/components/ui/button/Button'

import styles from './Welcome.module.scss'
import Box from '@/components/box/Box'

const letterAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.2,
		},
	}),
}

const mainHeading = "Hi, I'm Kirill, Front End Developer".split('')

const Welcome: FC = () => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2, once: true }}
			className={styles.section}
		>
			<motion.div
				className={styles.content}
				variants={letterAnimation}
				custom={4}
			>
				<div className={styles.text}>
					{mainHeading.map((letter, index) => (
						<TextSpan key={index}>{letter}</TextSpan>
					))}
				</div>
				<Button>Contact me</Button>
			</motion.div>
			<Box />
		</motion.section>
	)
}

export default Welcome
