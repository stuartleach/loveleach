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

						// <a className='icons' href={links.footerMenu[x].url}>
						// 	{links.footerMenu[x].image}
						// </a>
					))}
				</Center>
			</nav>
		</Center>
	)
}
