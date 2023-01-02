import TextSpan from '@/components/ui/text/TextSpan'
import React, { useState } from 'react'
import planet from '@/assets/images/jupiter.png'
import styles from './Skills.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { icons } from './skills.data'
import astronaut from '@/assets/images/astronaut1.png'

const Skills = () => {
	const [active, setActive] = useState(1)
	const mainText = 'Skills'.split('')
	return (
		<motion.section className={styles.section}>
			<div>
				<div className={styles.heading}>
					{mainText.map((letter, index) => (
						<TextSpan key={index}>{letter}</TextSpan>
					))}
				</div>
				<div className={styles.container} id="skills">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ y: [-100, 0], opacity: 1 }}
						className={styles.skills}
					>
						{icons.map((icon, index) => {
							return (
								<div key={index} className={styles.tools}>
									{icon}
								</div>
							)
						})}
					</motion.div>
				</div>
			</div>
			<motion.div className={styles.astronaut}>
				<Image src={astronaut} alt="" width="400" height="400" />
			</motion.div>
			<motion.div className={styles.planet}>
				<Image src={planet} alt="" width="100" height="100" />
			</motion.div>
		</motion.section>
	)
}

export default Skills
