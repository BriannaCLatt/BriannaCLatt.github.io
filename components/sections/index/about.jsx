// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I have honed a comprehensive skill set encompassing UI/UX Design, front-end, and backend development over the last four years. This period has been marked by a steadfast commitment to excellence and continuous improvement in these areas."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/BCL.jpg" alt="Brianna Lattimore"/>
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Soft Skills, Strong Impact"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['far', 'users']}
							copy= "While having a solid foundation in UI/UX Design, I'm also flexible, an exceptional multitasker, with strong leadership and communication skills, enhanced by my roles as a Youth Leader and Operations Assistant. I excel in being an instructor as well. In my leisure moments, I enjoy singing, dancing, baking, and exploring different languages. Most importantly, I love spending quality time with my family."
						/>
						<BadgesBlock 
							title="Other Endeavors" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="sitemap"
							copy="My interest does not just lie in the design aspect of UI/UX but also in the research and accessibility side. I enjoy working on many aspects of a project to ensure that every user can have a wholesome experience."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'chart-simple', 			name: 'Market Analysis', 	type: 'fad' },
	{ key: 'universal-access', 			name: 'Accesibility', 	type: 'far' },
	{ key: 'network-wired', 			name: 'Information Architecture', 	type: 'far' },
	{ key: 'lightbulb', 		name: 'Content Strategy', 	type: 'fas' },
	{ key: 'clipboard-user', 		name: 'Usability Testing', 		type: 'fas' },
]