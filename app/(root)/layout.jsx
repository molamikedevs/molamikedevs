import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WorkExperience from '@/components/WorkExperience'
import Faqs from '@/components/Faqs'
import MyApproach from '@/components/MyApproach'
import About from './about/page'
import Projects from './projects/page'
import Testimonial from './testimonial/page'
import Home from '../(root)/page'

const RootLayout = () => {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Projects />
			<WorkExperience />
			<Testimonial />
			<MyApproach />
			<Faqs />
			<Footer />
		</div>
	)
}

export default RootLayout
