import { FC } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

import styles from './ProgressBar.module.scss'

const ProgressBar: FC = () => {
	const { scrollYProgress } = useScroll()
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	})
	return <motion.div className={styles.progress_bar} style={{ scaleX }} />
}

export default ProgressBar
