import { FC, useEffect, useState } from 'react'
import MenuList from './MenuList'
import styles from './BurgerMenu.module.scss'
const BurgerMenu: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toogleMenu = () => setIsOpen(!isOpen)
	const closeMenu = () => setIsOpen(false)
	const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-purple-500 transition ease transform duration-300 ${
		isOpen ? 'bg-purple-200' : ''
	}`

	useEffect(() => {
		const body = document.body
		const content = document.getElementById('content') as HTMLElement
		isOpen
			? (body.style.overflowY = 'hidden')
			: (body.style.overflowY = 'scroll')
	}, [isOpen])
	return (
		<>
			<button
				className="flex flex-col h-12 w-12 border-2 border-purple-500 rounded justify-center items-center group mr-5 z-[1001]"
				onClick={toogleMenu}
			>
				<div
					className={`${genericHamburgerLine} ${
						isOpen
							? 'rotate-45 translate-y-3 opacity-70 group-hover:opacity-100 bg-purple-200'
							: 'opacity-70 group-hover:opacity-100 '
					}`}
				/>
				<div
					className={`${genericHamburgerLine} ${
						isOpen ? 'opacity-0' : 'opacity-70 group-hover:opacity-100'
					}`}
				/>
				<div
					className={`${genericHamburgerLine} ${
						isOpen
							? '-rotate-45 -translate-y-3 opacity-70 group-hover:opacity-100 bg-purple-200'
							: 'opacity-70 group-hover:opacity-100'
					}`}
				/>
			</button>
			<div
				className={`${styles.background_menu}
					${isOpen ? `${styles.background_menu__active}` : ''}`}
			>
				<MenuList closeMenu={closeMenu} />
			</div>
		</>
	)
}

export default BurgerMenu
