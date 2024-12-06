'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu as MenuIcon, X as XIcon } from 'lucide-react'

const links = [
	{ name: 'About', route: '/about' },
	{ name: 'Contact', route: '/contact' },
	{ name: 'Projects', route: '/projects' },
	{ name: 'Services', route: '/services' },
]

const Navbar = () => {
	const pathname = usePathname()
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev)

	return (
		<div className="py-3 px-5 shadow-md font-lora">
			<nav className="flex justify-between items-center">
				{/* Logo Section */}
				<Link href="/" className="flex gap-3 items-center text-3xl">
					<Image src="/logo.png" alt="logo" width={60} height={30} />
					<h1 className="hidden sm:block">Molamike Devs</h1>
				</Link>

				{/* Hamburger Icon for Mobile */}
				<button
					className="block lg:hidden"
					onClick={toggleMobileMenu}
					aria-label="Toggle Mobile Menu">
					{isMobileMenuOpen ? (
						<XIcon className="w-6 h-6" />
					) : (
						<MenuIcon className="w-6 h-6" />
					)}
				</button>

				{/* Desktop Links */}
				<div className="hidden lg:flex items-center gap-6 text-lg font-lora font-medium">
					{links.map((link, index) => (
						<Link
							href={link.route}
							key={index}
							className={clsx(
								'relative',
								pathname === link.route && 'text-blue-500'
							)}>
							{link.name}
							{pathname === link.route && (
								<span className="absolute bottom-0 left-1/4 w-1/2 h-[2px] bg-blue-500"></span>
							)}
						</Link>
					))}
				</div>
			</nav>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="lg:hidden mt-4">
					<ul className="flex flex-col gap-4 text-lg font-medium">
						{links.map((link, index) => (
							<li key={index}>
								<Link
									href={link.route}
									onClick={() => setMobileMenuOpen(false)}
									className={clsx(
										'block py-2 px-4 rounded-md',
										pathname === link.route
											? 'bg-blue-500 text-white'
											: 'hover:bg-gray-100'
									)}>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Navbar
