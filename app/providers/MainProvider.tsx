import { FC } from 'react'
import HeadProvider from './HeadProvider/HeadProvider'
import Layout from '@/components/layout/Layout'

interface Props {
	children: React.ReactNode
	Component: any
}

const MainProvider: FC<Props> = ({ children, Component }) => {
	return (
		<HeadProvider>
			<Layout>{children}</Layout>
		</HeadProvider>
	)
}

export default MainProvider
