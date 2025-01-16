'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu as MenuIcon, X as XIcon } from 'lucide-react'
import Modal from './Modal'
import { Button } from './ui/button'
import MobileNav from '../components/MobileNav'
import ContactForm from '../components/ContactForm'

const links = [
	{ name: 'Home', route: '/' },
	{ name: 'About', route: '/about' },
	{ name: 'Projects', route: '/projects' },
	{ name: 'Services', route: '/services' },
]

const Navbar = () => {
	const pathname = usePathname()
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [isModalOpen, setModalOpen] = useState(false)

	const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev)
	const toggleModal = () => setModalOpen(prev => !prev)

	return (
		<>
			<div className="bg-black-100 py-3 px-5 font-lora text-white-100 shadow-md">
				<nav className="flex justify-between items-center px-6">
					{/* Logo Section */}
					<Link href="/" className="flex gap-3 items-center text-2xl">
						<Image src="/b-logo.png" alt="logo" width={40} height={30} />
						<h1 className="text-[#80C4E9] font-black text-3xl hidden sm:block">
							Molamike Devs
						</h1>
					</Link>

					{/* Hamburger Icon for Mobile */}
					<Button
						className="block lg:hidden"
						onClick={toggleMobileMenu}
						aria-label="Toggle Mobile Menu">
						{isMobileMenuOpen ? (
							<XIcon className="w-[5rem] h-[5rem]" />
						) : (
							<MenuIcon className="w-[5rem] h-[5rem]" />
						)}
					</Button>

					{/* Desktop Links */}
					<div className="hidden lg:flex items-center gap-6 text-xl font-lora font-medium">
						{links.map((link, index) => (
							<Link
								href={link.route}
								key={index}
								className={clsx(
									'relative',
									pathname === link.route && 'text-[#80C4E9]'
								)}>
								{link.name}
								{pathname === link.route && (
									<span className="absolute bottom-0 left-1/4 w-1/2 h-[2px] bg-[#80C4E9]"></span>
								)}
							</Link>
						))}
						<div
							className="py-2 px-6 uppercase bg-[#80C4E9] hover:bg-[#7BD3EA] rounded-sm hover:translate-x-1 text-black transition-all text-lg font-semibold leading-tight tracking-wider cursor-pointer"
							onClick={toggleModal}>
							Contact Me
						</div>
					</div>
				</nav>

				{/* Mobile Menu */}
				{isMobileMenuOpen && <MobileNav onPress={toggleMobileMenu} />}
			</div>

			{/* Modal */}
			<Modal isOpen={isModalOpen} onClose={toggleModal}>
				<ContactForm onPress={toggleModal} />
			</Modal>
		</>
	)
}

export default Navbar
