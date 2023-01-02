import { FC } from 'react'
import Portfolio from './portfolio/Portfolio'
import Welcome from './welcome/Welcome'
import About from './about/About'
import Skills from './skills/Skills'
import Contact from './contact/Contact'

type Props = {}

const Home: FC = (props: Props) => {
	return <div>
		<Welcome />
		<About />
		<Skills />
		<Portfolio />
		<Contact />
	</div>
}

export default Home
