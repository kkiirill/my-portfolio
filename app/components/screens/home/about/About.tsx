import TextSpan from '@/components/ui/text/TextSpan'
import React, { useRef } from 'react'
import astronaut from '@/assets/images/astronaut.png'
import planet from '@/assets/images/planet.png'


import styles from './About.module.scss'
import Image from 'next/image'
import { useTransform, useViewportScroll, motion } from 'framer-motion'

const headingText = 'About'.split('')

const animation = (key: string) => ({
	hidden: {
		[key]: 100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		[key]: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.2,
		},
	}),
})

const About = () => {
	const scrollRef = useRef(null)

	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2 }}
			className={styles.section}
			ref={scrollRef}
		>
			<motion.div className={styles.planet}>
				<Image src={planet} alt="" width="100" height="100" />
			</motion.div>
			<motion.div className={styles.astronaut} variants={animation('y')} custom={3}>
				<Image src={astronaut} alt="" width="400" height="400" />
			</motion.div>
			<motion.div variants={animation('x')} custom={2}>
				<div className={styles.heading}>
					{headingText.map((letter, index) => (
						<TextSpan key={index}>{letter}</TextSpan>
					))}
				</div>
				<motion.p variants={animation('x')} custom={3}>
					<span>
						As a front-end developer with over a year of experience, I have a
						strong foundation in various programming languages and technologies.
						My expertise in Typescript and JavaScript, as well as frameworks
						such as React/Redux, allows me to create high-quality and efficient
						websites. I have a deep understanding of HTML5, CSS3, and Sass, and
						use tools such as BEM, Bootstrap, and Tailwind to implement clean
						and organized code. I have experience working with API's and have
						used fetch and REST API in previous projects.
					</span>
					<br />
					<span className="my-5 block">
						I have also had the opportunity to work on large projects, including
						building a CRM system and a console. My intermediate level of
						English allows me to effectively communicate with team members and
						clients. In addition to my technical skills, I am dedicated to
						continuous learning and am always looking for ways to improve and
						expand my knowledge.
					</span>
					<span>
						I am confident in my ability to contribute to the success of any
						team and am excited to continue growing as a front-end developer.
					</span>
				</motion.p>
			</motion.div>
		</motion.section>
	)
}

export default About
