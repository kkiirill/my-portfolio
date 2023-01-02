import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import githubIcon from '@/assets/images/github-icon.svg'
import linkedinIcon from '@/assets/images/linkedin-icon.svg'
import { menuLinks } from './menu.data'
type Props = {
	closeMenu: () => void
}

const MenuList: FC<Props> = ({ closeMenu }) => {
	return (
		<div className="overflow-y-hidden">
			<div className="absolute top-[150px]  w-full left-40">
				<ul className="flex flex-col justify-center">
					{menuLinks.map((link) => (
						<li className="text-[70px]" key={link.title} >
							<Link href={link.path} className="" onClick={closeMenu}> 
								{link.title}
							</Link>
						</li>
					))}
				</ul>
				<ul className="flex items-center justify-start pt-10 mr-[-40px]">
					<li>
						<Link href={'/'}>
							<Image
								alt="github"
								src={githubIcon}
								draggable={false}
								width="150"
								height="150"
							/>
						</Link>
					</li>
					<li>
						<Link href={'/'}>
							<Image
								alt="linkedin"
								src={linkedinIcon}
								draggable={false}
								width="70"
								height="70"
							/>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default MenuList
