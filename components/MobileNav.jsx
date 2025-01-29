'use client'
import React from 'react'
import clsx from 'clsx'
import { links } from '@/constants'
import { useTheme } from 'next-themes'

const MobileNav = ({ onPress, activeRoute }) => {
	const { theme } = useTheme()
	return (
		<div
			className={`fixed top-0 left-0 w-full h-full z-40 flex items-center justify-center ${
				theme === 'dark' ? 'bg-black-100/90' : 'bg-gray-100/90'
			} backdrop-blur-sm`}>
			<ul className="flex flex-col items-center gap-6 text-lg font-medium">
				{links.map((link, index) => (
					<li key={index}>
						<button
							onClick={() => onPress(link.name.toLowerCase(), link.route)}
							className={clsx(
								'block py-2 px-6 rounded-md text-center',
								activeRoute === link.route
									? 'bg-tertiary text-white'
									: 'hover:bg-gray-200'
							)}>
							{link.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default MobileNav
