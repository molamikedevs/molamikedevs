'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Projects = () => {
	const [filter, setFilter] = useState('All')

	const projects = [
		{
			name: 'Hotel Management System',
			photo: '/booking.jpeg',
			url: '/projects/1',
			subText:
				'An amazing management system app that allows workers to update guest bookings based on guest demands. Full-stack website with CRUD functionality.',
			category: 'Backend',
		},
		{
			name: 'Blog Website',
			photo: '/blog.jpg',
			url: '/projects/2',
			subText:
				'A blog website that keeps you updated with the latest technology and world happenings.',
			category: 'Frontend',
		},
		{
			name: 'eCommerce Website',
			photo: '/ecom.png',
			url: 'https://ecommerce-com-gdx6.onrender.com/',
			subText:
				'An eCommerce website that enables users to shop from anywhere. Fully responsive with CRUD operations.',
			category: 'Full Stack',
		},
		{
			name: 'Nature',
			photo: '/tour.jpg',
			url: '/projects/4',
			subText: 'A beautiful and user-friendly nature-themed eCommerce website.',
			category: 'Frontend',
		},
		{
			name: 'Landing Page',
			photo: '/landing-page.png',
			url: 'https://xora-landding-page.onrender.com/',
			subText:
				'A sleek and modern landing page design to showcase your services effectively.',
			category: 'UI/UX',
		},
		{
			name: 'Real Estate',
			photo: '/est.jpeg',
			url: '/projects/6',
			subText:
				'A real estate website that makes property searching easy and efficient.',
			category: 'Full Stack',
		},
	]

	const filteredProjects =
		filter === 'All'
			? projects
			: projects.filter(project => project.category === filter)

	return (
		<section className="bg-black-100 py-16 px-8">
			{/* Centered Heading */}
			<h2 className="heading">My Projects</h2>

			{/* Responsive Filter Section */}
			<div className="flex flex-wrap justify-center gap-4 mb-12">
				{['All', 'Frontend', 'Backend', 'Full Stack', 'UI/UX'].map(category => (
					<button
						key={category}
						onClick={() => setFilter(category)}
						className={`px-4 py-2 rounded-md text-lg font-semibold ${
							filter === category
								? 'bg-[#80C4E9] text-white'
								: 'bg-gray-200 hover:bg-gray-300'
						}`}>
						{category}
					</button>
				))}
			</div>

			{/* Projects Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{filteredProjects.map((project, index) => (
					<div
						key={index}
						className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
						<Link href={project.url}>
							<div className="relative w-full h-48">
								<Image
									src={project.photo}
									alt={project.name}
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2 group-hover:text-[#80C4E9]">
									{project.name}
								</h3>
								<p className="text-sm text-gray-600">{project.subText}</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</section>
	)
}

export default Projects
