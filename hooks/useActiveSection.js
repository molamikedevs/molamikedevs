import { useEffect, useState } from 'react'

export const useActiveSection = sectionIds => {
	const [activeSection, setActiveSection] = useState('')

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2

			let currentSection = ''
			for (const id of sectionIds) {
				const element = document.getElementById(id)
				if (element) {
					const { offsetTop, offsetHeight } = element
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						currentSection = id
						break
					}
				}
			}

			setActiveSection(currentSection)
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll() // Run once on mount
		return () => window.removeEventListener('scroll', handleScroll)
	}, [sectionIds])

	return activeSection
}
