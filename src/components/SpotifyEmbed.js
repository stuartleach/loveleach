import React from 'react'
import { Center } from '@chakra-ui/react'

export const SpotifyEmbed = (props) => {
	return (
		<div>
			<Center>
				<iframe
					title='badge'
					src='https://open.spotify.com/follow/1/?uri=spotify:artist:4stOnS5u8dF0yGDimfH02w?si=YfOCYDerQf2gyYr2skaTng&amp;dl_branch=1&amp;size=detail&amp;theme=dark'
					width='240'
					height='56'
					scrolling='no'
					frameborder='0'
					style={{
						border: 'none',
						overflow: 'hidden',
						marginBottom: '40px',
					}}
					allowtransparency='true'
				></iframe>
			</Center>
			<Center>
				<iframe
					className='spotPlayer'
					title='player'
					src='https://open.spotify.com/embed/artist/4stOnS5u8dF0yGDimfH02w'
					width='350'
					height='390'
					style={{
						border: 'none',
						overflow: 'hidden',
						borderRadius: '5%',

						// margin: '40px'
						background: `linear-gradient(0deg, rgb(95, 23, 64), rgba(84, 13, 102, 0.671))`,
					}}
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'
				></iframe>
			</Center>
		</div>
	)
}
