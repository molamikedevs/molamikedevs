'use client'
import React from 'react'
import clsx from 'clsx'
import { links } from '@/constants'
import { useTheme } from 'next-themes'

const MobileNav = ({ onPress, activeRoute }) => {
	const { theme } = useTheme()
	return (
		<div
			className={`${
				theme === 'dark' ? 'bg-black-100 ' : 'bg-gray-100'
			} lg:hidden mt-4 p-4 shadow-xl rounded-md`}>
			<ul className="flex flex-col gap-4 text-lg font-medium">
				{links.map((link, index) => (
					<li key={index}>
						<button
							onClick={() => onPress(link.name.toLowerCase(), link.route)}
							className={clsx(
								'block py-2 px-4 rounded-md w-full text-left',
								activeRoute === link.route
									? 'bg-tertiary text-white'
									: 'hover:bg-gray-100'
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
