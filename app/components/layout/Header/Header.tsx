import React from 'react'
import Logo from '@/assets/images/logo.png'
import Image from 'next/image'
import BurgerMenu from './Menu/BurgerMenu'
type Props = {}
const Header = (props: Props) => {
	return (
		<header className="flex justify-between fixed items-center zIndex-[1000] w-full">
			<div>
				<Image src={Logo} alt="" draggable={false} width="150" height="150" />
			</div>
			<BurgerMenu />
		</header>
	)
}

export default Header
