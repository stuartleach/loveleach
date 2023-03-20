import React from 'react'
import { Center } from '@chakra-ui/react'

export const SpotifyEmbed = (props) => {
	return (
		<div>
			
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
