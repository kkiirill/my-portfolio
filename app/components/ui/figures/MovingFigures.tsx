import { FC, useRef } from 'react'
import { motion } from 'framer-motion'

type Props = {}

const MovingFigures: FC = (props: Props) => {
	const constraintsRef = useRef(null)

	return (
		<motion.div ref={constraintsRef}>
			<motion.div drag dragConstraints={constraintsRef} className="h-10 w-10 bg-red-300"/>
		</motion.div>
	)
}

export default MovingFigures
