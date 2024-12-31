import Navbar from '@/components/Navbar'
import React from 'react'
import About from './about/page'
import Home from './page'
import Projects from './projects/page'
import Services from './services/page'
import Footer from '@/components/Footer'

const RootLayout = () => {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Projects />
			<Services />
			<Footer />
		</div>
	)
}

export default RootLayout
