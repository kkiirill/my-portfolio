import TextSpan from '@/components/ui/text/TextSpan'
import React, { useRef } from 'react'
import astronaut from '@/assets/images/astronaut.png'
import planet from '@/assets/images/planet.png'

import styles from './Contact.module.scss'
import Image from 'next/image'
import { useTransform, useViewportScroll, motion } from 'framer-motion'

const headingText = 'Contact me'.split('')

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

const Contact = () => {
	const scrollRef = useRef(null)

	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2 }}
			className={styles.section}
			ref={scrollRef}
		>
			<div className={styles.heading}>
				{headingText.map((letter, index) => (
					<TextSpan key={index}>{letter}</TextSpan>
				))}
			</div>
			<p>
				Looking to work together on a project or have a question about my
				services? I'd love to hear from you!
			</p>
			<div className={styles.container} id="contact">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ y: [-50, 0], opacity: 1 }}
					className="title"
				>
					<span>get in touch</span>
					<h1>Contact Me</h1>
				</motion.div>
				<div className={styles.contact_form}>
					<motion.div
						initial={{ x: 0, opacity: 0 }}
						whileInView={{ x: [-150, 0], opacity: 1 }}
						transition={{ duration: 1 }}
						className={styles.contact_left_container}
					>
						<h3>Just Say Hi</h3>
						<p className={styles.contact_text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
							nihil unde atque voluptates, cumque molestias eveniet voluptatum
							animi consectetur magni mollitia dolor exercitationem labore
							maiores!
						</p>
					</motion.div>
					<motion.div
						initial={{ x: 0, opacity: 0 }}
						whileInView={{ x: [150, 0], opacity: 1 }}
						transition={{ duration: 1 }}
						className={styles.contact_right}
					>
						<h3>Get In Touch</h3>
						<div className={styles.row}>
							<input type="text" placeholder="First Name" />
							<input type="text" placeholder="Last name" />
						</div>
						<div className={styles.row}>
							<input type="text" placeholder="Phone" />
							<input type="email" placeholder="Email" />
						</div>
						<div className={styles.row}>
							<textarea placeholder="message"></textarea>
						</div>
						<motion.div
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.3 }}
							className={styles.btn}
						>
							<a href="#">Send</a>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	)
}

export default Contact
