import { FC } from 'react'

import Sidebar from './Sidebar/Sidebar'

import styles from './Layout.module.scss'
import ProgressBar from '@/components/ui/progressBar/progressBar'
import Header from './Header/Header'

type Props = {
	children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<ProgressBar />
			<Header />
			{/* <Sidebar /> */}
			<div className={styles.content} id='content'>{children}</div>
		</div>
	)
}

export default Layout
