import { Center } from '@chakra-ui/react'

import React from 'react'

export const Footer = (props) => {
	return (
		<Center>
			<nav className='icons'>
				<Center>
					{Object.keys(props.links.footerMenu).map((x) => (
						<div
							onClick={() => {
								window.open(props.links.footerMenu[x].url)
							}}
						>
							{props.links.footerMenu[x].image}
						</div>
					))}
				</Center>
			</nav>
		</Center>
	)
}
