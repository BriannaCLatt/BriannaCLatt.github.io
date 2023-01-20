
import Image from 'next/image'

// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';
import Badges 		from '../../utils/badge.list.util'
import Icon 		from '../../utils/icon.util'
import SectionTitle from '../../blocks/section.title.block'

import css 			from '../../../styles/sections/projects/featured.module.scss'
import content 		from '../../../content/projects/featured.json'

function displayHeader(url, project, repo) {
	if (url) {
		return ( 
			<a href={url} target="_blank" rel="noreferrer">
				<h3>{project} <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /> <span className={css.privateOr}><i className="devicon-github-plain"></i>{repo}</span></h3> 
			</a>
		)
	} else {
		return ( 
			<h3>{project} <span className={css.privateOr}><i class="devicon-github-plain"></i>{repo}</span></h3> 
		)
	}
}

export default function FeaturedProjects() {

	return (
		<Section classProp={css.hasBg}>	
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Featured Projects"
					preTitle="UX and Full Stack"
					subTitle="Focused on the experience, driven by the engineering."
				/>
				{
				content.map( ({ project, url, type, repo, description, stack, image_url }, index) => {
					return (
						<section key={index} className={css.project}>
							<div className={css.details}>
							{ displayHeader(url, project, repo) }
							<p>{type}</p>
							<br/><br/>
							<div className={css.description} dangerouslySetInnerHTML={ { __html: description } }>
							</div>
							<br/><br/>
							<Badges list={stack} block="stack" />
							</div>
							<div className={css.image}>
								<img key={index} src={image_url} alt="Featured photo"/>
							</div>
						</section>
					)
				})
				}
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}