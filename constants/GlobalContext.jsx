'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { links } from '@/constants/index'

// Create a context for global state
const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
	// States to manage modal, mobile menu, dark mode, and active section
	const [isModalOpen, setModalOpen] = useState(false)
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [isDarkMode, setIsDarkMode] = useState(false)
	const [activeSection, setActiveSection] = useState('home')

	const router = useRouter()
	const pathname = usePathname()

	// Initialize dark mode state from localStorage
	useEffect(() => {
		const savedTheme = localStorage.getItem('darkMode') === 'true'
		setIsDarkMode(savedTheme) // Set the initial dark mode state from localStorage
		document.documentElement.classList.toggle('dark', savedTheme) // Apply dark mode class for Tailwind
	}, [])

	// Toggle dark mode and persist it in localStorage
	const toggleDarkMode = () => {
		setIsDarkMode(prevMode => {
			const newMode = !prevMode
			localStorage.setItem('darkMode', newMode) // Save the new dark mode state in localStorage
			document.documentElement.classList.toggle('dark', newMode) // Toggle dark mode class
			return newMode
		})
	}

	// Toggles for modal and mobile menu
	const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev)
	const toggleModal = () => setModalOpen(prev => !prev)

	// Handle navigation and scroll to specific sections
	const handleNavClick = (id, route) => {
		if (id === 'home') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		} else {
			const section = document.getElementById(id)
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' })
			}
		}
		router.push(route) // Update URL
		setMobileMenuOpen(false) // Close mobile menu after navigation
	}

	// Observe sections to highlight active section
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const sectionId = entry.target.id
						setActiveSection(sectionId) // Highlight the active section
						router.push(`#${sectionId}`) // Update URL without reload
					}
				})
			},
			{ threshold: 0.5 }
		)

		const sections = links.map(link =>
			document.getElementById(link.name.toLowerCase())
		)
		sections.forEach(section => section && observer.observe(section))

		return () => {
			sections.forEach(section => section && observer.unobserve(section))
		}
	}, [router])

	return (
		<GlobalContext.Provider
			value={{
				isModalOpen,
				isMobileMenuOpen,
				isDarkMode,
				activeSection,
				pathname,
				toggleModal,
				toggleDarkMode,
				toggleMobileMenu,
				setMobileMenuOpen,
				handleNavClick,
			}}>
			{children}
		</GlobalContext.Provider>
	)
}

// Custom hook to access the context
export const useGlobalProvider = () => {
	const context = useContext(GlobalContext)
	if (context === undefined)
		throw new Error('Context is used outside of Global provider')
	return context
}
