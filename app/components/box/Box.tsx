import { FC, useRef, useState } from 'react'
import { useBox } from './useBox'
import { motion } from 'framer-motion'
const imageAnimation = {
	hidden: {
		y: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.2,
		},
	}),
}

const Box: FC = () => {
	const boxRef = useRef<HTMLDivElement | null>(null)
	useBox(boxRef)

	return (
		<motion.div
			className="w-1/2 h-full flex items-center justify-center"
			ref={boxRef}
			variants={imageAnimation}
			custom={3}
		>
			<canvas className="webgl cursor-grabbing"></canvas>
		</motion.div>
	)
}
export default Box
