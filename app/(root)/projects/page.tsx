'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { projects } from '@/constants/index'
import DotPattern from '@/components/ui/dot-pattern'

const Projects = () => {
	const [filter, setFilter] = useState('All')

	const filteredProjects =
		filter === 'All'
			? projects
			: projects.filter(project => project.category === filter)

	return (
		<DotPattern className="bg-black-100 py-16 px-8">
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
								: 'bg-black-200 text-white-100 hover:bg-black-100'
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
						className="group bg-black-100 text-white-100 border border-black-200 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
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
		</DotPattern>
	)
}

export default Projects
