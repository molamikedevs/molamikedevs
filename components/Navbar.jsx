'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Menu as MenuIcon, Moon, X as XIcon, Sun } from 'lucide-react'
import { useGlobalProvider } from '../constants/GlobalContext'
import { links } from '@/constants'


import Modal from './Modal'
import MobileNav from '../components/MobileNav'
import ContactForm from '../components/ContactForm'

const Navbar = () => {
	const { theme, setTheme } = useTheme() // Use next-themes hook
	const {
		isModalOpen,
		toggleModal,
		toggleMobileMenu,
		isMobileMenuOpen,
		pathname,
		handleNavClick,
		activeSection,
	} = useGlobalProvider()

	// Toggle dark/light theme
	const handleThemeToggle = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme) // Switch theme using next-themes
	}

	return (
		<>
			{/* Navbar container */}
			<div
				className={clsx(
					'fixed top-0 left-0 w-full py-3 px-5 font-lora shadow-sm z-50 transition-all duration-300',
					{
						'bg-black-100': theme === 'dark', // Dark theme colors
						'bg-white': theme === 'light', // Light theme colors
					}
				)}>
				<nav className="flex justify-between items-center px-6">
					{/* Logo Section */}
					<button
						onClick={() => handleNavClick('home', '/')}
						className="flex gap-3 items-center text-2xl cursor-pointer">
						{theme === 'dark' ? (
							<Image src="/b-logo.png" alt="logo" width={40} height={30} />
						) : (
							<Image src="/logo.png" alt="logo" width={40} height={30} />
						)}
						<span className="font-black font-[roboto] text-2xl hidden sm:block">
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

					{/* Desktop Navigation Links */}
					<div className="hidden lg:flex items-center gap-6 text-xl font-[roboto] font-medium">
						{links.map((link, index) => (
							<button
								key={index}
								onClick={() =>
									handleNavClick(link.name.toLowerCase(), link.route)
								}
								className={clsx(
									'relative text-left',
									activeSection === link.name.toLowerCase() && 'text-tertiary'
								)}>
								{link.name}
								{activeSection === link.name.toLowerCase() && (
									<span className="absolute bottom-0 left-1/4 w-1/2 h-[2px] bg-tertiary"></span>
								)}
							</button>
						))}
					</div>

					{/* Dark Mode Toggle */}
					<div
						className="relative w-14 h-7 bg-black-200 border border-gray-300 hover:border-tertiary rounded-full p-1 cursor-pointer flex items-center"
						onClick={handleThemeToggle}>
						<div
							className={`absolute w-6 h-6 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 ease-in-out ${
								theme === 'dark'
									? 'transform translate-x-6 bg-tertiary'
									: 'transform translate-0 bg-white'
							}`}>
							{theme === 'dark' ? (
								<Moon size={16} className="text-black-100" />
							) : (
								<Sun size={16} className="text-[#EFB036]" />
							)}
						</div>
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
