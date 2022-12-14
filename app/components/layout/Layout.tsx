import { FC } from 'react'

import Sidebar from './Sidebar/Sidebar'

import styles from './Layout.module.scss'

type Props = {
	children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Sidebar />
			<div className={styles.content}>{children}</div>
		</div>
	)
}

export default Layout
