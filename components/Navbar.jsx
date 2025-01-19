'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { Menu as MenuIcon, Moon, X as XIcon, Sun } from 'lucide-react'
import Modal from './Modal'

import MobileNav from '../components/MobileNav'
import ContactForm from '../components/ContactForm'
import { links } from '@/constants'
import { PulsatingButton } from './ui/pulsating-button'

const Navbar = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [isModalOpen, setModalOpen] = useState(false)
	const [isDarkMode, setIsDarkMode] = useState(false)

	const router = useRouter()
	const pathname = usePathname()

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode)
	}

	const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev)
	const toggleModal = () => setModalOpen(prev => !prev)

	// Scroll to section and update URL
	const handleNavClick = (id, route) => {
		if (id === 'home') {
			window.scrollTo({ top: 0, behavior: 'smooth' }) // Scroll to top for Home
		} else {
			const section = document.getElementById(id)
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' })
			}
		}
		router.push(route) // Update URL
		setMobileMenuOpen(false) // Close mobile menu if open
	}

	return (
		<>
			<div className="fixed top-0 left-0 w-full bg-black-100 py-3 px-5 font-lora text-white-100 shadow-xl z-50">
				<nav className="flex justify-between items-center px-6">
					{/* Logo Section */}
					<button
						onClick={() => handleNavClick('home', '/')}
						className="flex gap-3 items-center text-2xl cursor-pointer">
						<Image src="/b-logo.png" alt="logo" width={40} height={30} />
						<span className="text-tertiary font-black text-3xl hidden sm:block">
							Molamike Devs
						</span>
					</button>

					{/* Hamburger Icon for Mobile */}
					<button
						className="block lg:hidden"
						onClick={toggleMobileMenu}
						aria-label="Toggle Mobile Menu">
						{isMobileMenuOpen ? (
							<XIcon className="w-16 h-16" />
						) : (
							<MenuIcon size={48} />
						)}
					</button>

					{/* Desktop Links */}
					<div className="hidden lg:flex items-center gap-6 text-xl font-lora font-medium">
						{links.map((link, index) => (
							<button
								key={index}
								onClick={() =>
									handleNavClick(link.name.toLowerCase(), link.route)
								}
								className={clsx(
									'relative text-left',
									pathname === link.route && 'text-tertiary'
								)}>
								{link.name}
								{pathname === link.route && (
									<span className="absolute bottom-0 left-1/4 w-1/2 h-[2px] bg-tertiary"></span>
								)}
							</button>
						))}
						<div
							className={`relative w-20 h-7 bg-black-200 border hover:border-tertiary dark:bg-gray-800 rounded-full p-1 cursor-pointer flex items-center`}
							onClick={toggleDarkMode}>
							<div
								className={`absolute w-7 h-7 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 ease-in-out ${
									isDarkMode
										? 'transform translate-x-10 bg-tertiary'
										: 'transform translate-x-0 bg-white-100'
								}`}>
								{isDarkMode ? (
									<Moon size={16} className="text-black-100" />
								) : (
									<Sun size={16} className="text-black-100" />
								)}
							</div>
						</div>
						<PulsatingButton
							className="py-2 px-6 uppercase bg-black-100 text-white-100 hover:bg-black-100 rounded-sm hover:translate-x-1 transition-all text-lg font-semibold leading-tight tracking-wider cursor-pointer"
							onClick={toggleModal}>
							Contact Me
						</PulsatingButton>
					</div>
				</nav>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<MobileNav
						onPress={(id, route) => handleNavClick(id, route)}
						activeRoute={pathname}
					/>
				)}
			</div>

			{/* Modal */}
			<Modal isOpen={isModalOpen} onClose={toggleModal}>
				<ContactForm onPress={toggleModal} />
			</Modal>
		</>
	)
}

export default Navbar
