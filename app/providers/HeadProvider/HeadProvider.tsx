import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import Favicons from './Favicons'

interface Props {
	children: React.ReactNode
}
const HeadProvider: FC<Props> = ({ children }) => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>

				<Favicons />

				<meta name="theme-color" content={'#000'} />
				<meta name="msapplication-navbutton-color" content={'#000'} />
				<meta name="apple-mobile-web-app-status-bar-style" content={'#000'} />
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
