import React from 'react'

import styles from '../Portfolio.module.scss'
import Link from 'next/link'
import { projectsData } from './projects.data'
import Image from 'next/image'

const ProjectsList = () => {
	return (
		<div className={styles.projects}>
			<ul className={styles.projects_list}>
				{projectsData.map((project) => (
					<li key={project.id}>
						<Link href={project.path}>
							<Image src={`/images${project.image}`} alt="" width={500} height={500} />
							<h3>{project.name}</h3>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ProjectsList
