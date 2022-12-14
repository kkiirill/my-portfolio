import { FC } from 'react'
import Link from 'next/link'
import { sidebarLinks } from './sidebar.data'
import Image from 'next/image'
import githubIcon from '@/assets/images/github-icon.svg'
import linkedinIcon from '@/assets/images/linkedin-icon.svg'

const Sidebar: FC = () => {
	return (
		<aside aria-label="Sidebar navigation" className="w-[140px] h-full">
			<div className="flex items-center bg-black rounded h-screen w-full">
				<div className="w-full">
					<ul>
						{sidebarLinks.map(link => (
							<li className="px-4 py-3 text-neutral-400 text-center  border divide-solid border-neutral-800">
								<Link href={link.path} className="text-base font-normal hover:text-violet-500">
									{link.title}
								</Link>
							</li>
						))}
					</ul>
					<ul className="flex items-center justify-center pt-16">
						<li>
							<Link href={'/'}>
								<Image
									alt="github"
									src={githubIcon}
									draggable={false}
									width="50"
									height="50"
								/>
							</Link>
						</li>
						<li>
							<Link href={'/'}>
								<Image
									alt="linkedin"
									src={linkedinIcon}
									draggable={false}
									width="25"
									height="25"
								/>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</aside>
	)
}

export default Sidebar
