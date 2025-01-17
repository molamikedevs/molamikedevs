'use client'

import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { links } from '@/constants'

const MobileNav = ({ onPress }) => {
	const pathname = usePathname()

	return (
		<div className="lg:hidden mt-4 bg-black-100 p-4 shadow-xl rounded-md">
			<ul className="flex flex-col gap-4 text-lg font-medium">
				{links.map((link, index) => (
					<li key={index}>
						<Link
							href={link.route}
							onClick={onPress}
							className={clsx(
								'block py-2 px-4 rounded-md',
								pathname === link.route
									? 'bg-[#80C4E9] text-white'
									: 'hover:bg-gray-100'
							)}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default MobileNav
