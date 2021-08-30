import React from 'react'
import { Center, Img, Fade } from '@chakra-ui/react'
import AboutLeach from './AboutText'
import aboutImage from '../images/4p0OpY0A.jpg'

export const About = (props) => {
	const aboutLeach = {
		image: {
			url: aboutImage,
			description: 'Stuart Leach',
		},
		bio: {
			text: AboutLeach(),
		},
	}
	return (
		<Center>
			<div className='aboutPage'>
				<Center>
					{
						<Fade in='true'>
							<Img
								style={{ borderRadius: '5%' }}
								src={aboutLeach.image.url}
								alt={aboutLeach.image.description}
							/>
						</Fade>
					}
				</Center>
				<Center>
					<div className='about'>
						<p>{aboutLeach.bio.text}</p>
					</div>
				</Center>
			</div>
		</Center>
	)
}
