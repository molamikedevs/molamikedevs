'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { projects } from '@/constants/index'
import DotPattern from '@/components/ui/dot-pattern'
import { useTheme } from 'next-themes'

const Projects = () => {
	const [filter, setFilter] = useState('All')
	const { resolvedTheme } = useTheme() // Use resolvedTheme for consistent behavior

	const filteredProjects =
		filter === 'All'
			? projects
			: projects.filter(project => project.category === filter)

	return (
		<DotPattern
			id="projects"
			className={`${
				resolvedTheme === 'dark'
					? 'bg-black-100 text-white-100'
					: 'bg-white text-black-100'
			} py-16 px-12`}>
			{/* Centered Heading */}
			<h2
				className={`text-center text-3xl mb-8 uppercase px-6 py-3 font-lora font-extrabold sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] my-5 rounded-lg ${
					resolvedTheme === 'dark' ? 'text-white' : 'text-black'
				}`}>
				My Latest <span className="text-tertiary">Projects</span>
			</h2>

			{/* Responsive Filter Section */}
			<div className="flex flex-wrap justify-center gap-4 mb-12">
				{['All', 'Frontend', 'Backend', 'Full Stack', 'UI/UX'].map(category => (
					<button
						key={category}
						onClick={() => setFilter(category)}
						className={`px-4 py-2 rounded-md text-lg font-semibold transition-all duration-300 ${
							filter === category
								? 'bg-tertiary text-white'
								: resolvedTheme === 'dark'
								? 'bg-black-200 text-white hover:bg-black-100'
								: 'bg-gray-200 text-black hover:bg-gray-300'
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
						className={`group max-w-md border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${
							resolvedTheme === 'dark'
								? 'bg-black-200 border-black-200'
								: 'bg-gray-100 border-white-200'
						}`}>
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
								<h3
									className={`text-xl font-black mb-2 group-hover:text-tertiary ${
										resolvedTheme === 'dark' ? 'text-white' : 'text-black'
									}`}>
									{project.name}
								</h3>
								<p
									className={`text-sm ${
										resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-700'
									}`}>
									{project.subText}
								</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</DotPattern>
	)
}

export default Projects
