import Link from 'next/link'
import React from 'react'

const Projects = () => {
	return (
		<div className="flex flex-col text-3xl">
			<Link href="/projects/1">Blog</Link>
			<Link href="/projects/2">eCommerce</Link>
			<Link href="/projects/3">Hotel Management</Link>
		</div>
	)
}

export default Projects
