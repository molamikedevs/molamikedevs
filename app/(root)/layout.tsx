// import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import About from './about/page'
import Home from './page'
import Projects from './projects/page'
import Services from './services/page'

const RootLayout = () => {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Projects />
			<Services />
		</div>
	)
}

export default RootLayout
