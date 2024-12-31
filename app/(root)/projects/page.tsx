import Link from 'next/link'
import React from 'react'

const Projects = () => {
	return (
		<div className="bg-gray-100 pt-16 md:pt-24 pb-12 md:pb-16 text-black-200 flex flex-col-reverse-end md:flex-col-reverse lg:flex-row gap-6 md:gap-12 min-h-screen items-center justify-center">
			<Link href="/projects/1">Blog</Link>
			<Link href="/projects/2">eCommerce</Link>
			<Link href="/projects/3">Hotel Management</Link>
		</div>
	)
}

export default Projects
