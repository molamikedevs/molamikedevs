import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const links = [
	{
		name: 'About',
		route: '/about',
	},
	{
		name: 'Contact',
		route: '/contact',
	},
	{
		name: 'Projects',
		route: '/projects',
	},
	{
		name: 'Services',
		route: '/services',
	},
]

const Navbar = () => {
	return (
		<div className="py-3 px-5 shadow-md font-lora">
			<nav className="flex justify-between items-center">
				<Link href="/" className="flex gap-3 items-center text-3xl">
					<Image src="/logo.png" alt="logo" width={60} height={30} />
					<h1>Molamike Devs</h1>
				</Link>

				<div className="flex items-center gap-3 text-lg font-lora font-medium">
					{links.map((link, index) => (
						<Link href={link.route} key={index}>
							<span>{link.name}</span>
						</Link>
					))}
				</div>
			</nav>
		</div>
	)
}

export default Navbar
