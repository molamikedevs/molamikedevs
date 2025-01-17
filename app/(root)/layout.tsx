import Navbar from '@/components/Navbar'
import React from 'react'
import About from './about/page'
import Home from './page'
import Projects from './projects/page'
import Services from './services/page'
import Footer from '@/components/Footer'
import Testimonial from '@/components/Testimonial'
import ScrollProgress from '@/components/ui/scroll-progress'

const RootLayout = () => {
	return (
		<div>
			<Navbar />
			<ScrollProgress />
			<Home />
			<About />
			<Projects />
			<Services />
			<Testimonial />
			<Footer />
		</div>
	)
}

export default RootLayout
