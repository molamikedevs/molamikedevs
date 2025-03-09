'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import { links } from '@/constants'
import { useGlobalProvider } from '../constants/GlobalContext'

const Navbar = () => {
	const { theme, setTheme } = useTheme()
	const { handleNavClick, activeSection } = useGlobalProvider()

	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-backgroundDark text-textDark dark:bg-backgroundLight dark:text-textLight shadow-md">
			<nav className="container mx-auto px-6 py-4 flex justify-between items-center">
				{/* Logo */}
				<button
					onClick={() => handleNavClick('home', '/')}
					className="flex items-center text-xl font-bold tracking-wide">
					<Image
						src={theme === 'dark' ? '/b-logo.png' : '/logo.png'}
						alt="logo"
						width={40}
						height={40}
					/>
					<span className="ml-2 hidden sm:inline">Molamike Devs</span>
				</button>

				{/* Desktop Navigation */}
				<ul className="hidden md:flex space-x-8 text-md font-medium">
					{links.map((link, index) => (
						<li key={index}>
							<button
								onClick={() =>
									handleNavClick(link.name.toLowerCase(), link.route)
								}
								className={`relative transition-colors duration-300 ${
									activeSection === link.name.toLowerCase()
										? 'text-primary font-semibold'
										: 'hover:text-primary'
								}`}>
								{link.name}
								{activeSection === link.name.toLowerCase() && (
									<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-primary"></span>
								)}
							</button>
						</li>
					))}
				</ul>

				{/* Theme Toggle */}
				<button
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					className="ml-4 p-2 rounded-full bg-gray-800 dark:bg-gray-200 transition-colors">
					{theme === 'dark' ? (
						<Moon className="text-white" />
					) : (
						<Sun className="text-black" />
					)}
				</button>
			</nav>
		</header>
	)
}

export default Navbar
