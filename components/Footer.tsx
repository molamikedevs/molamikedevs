import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer className="bg-gray-700 text-white py-8">
			<div className="container mx-auto h-[15rem] flex flex-col md:flex-row justify-between items-center gap-6 px-4">
				{/* Logo */}
				<div className="flex flex-col items-center md:items-start">
					<Image
						src="/b-logo.png"
						alt="Molamike Devs Logo"
						width={80}
						height={40}
					/>
					<p className="text-sm mt-2">
						© {new Date().getFullYear()} Molamike Devs. All rights reserved.
					</p>
				</div>

				{/* Navbar Links */}
				<nav className="flex flex-wrap justify-center gap-6">
					{['Home', 'About', 'Projects', 'Services'].map((item, index) => (
						<Link
							href={`/${item.toLowerCase()}`}
							key={index}
							className="text-lg hover:text-blue-400 transition-colors">
							{item}
						</Link>
					))}
				</nav>

				{/* Social Media Links */}
				<div className="flex gap-4">
					<Link
						href="https://facebook.com"
						aria-label="Facebook"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
							width="24"
							height="24">
							<path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.66 8.84 8.38 9.7v-6.85H7.92v-2.85h2.46V9.96c0-2.43 1.45-3.79 3.67-3.79 1.07 0 2.18.19 2.18.19v2.4h-1.22c-1.2 0-1.57.74-1.57 1.5v1.8h2.67l-.43 2.85h-2.24v6.85C18.34 20.84 22 16.84 22 12z" />
						</svg>
					</Link>
					<Link
						href="https://twitter.com"
						aria-label="Twitter"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition-colors">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
							width="24"
							height="24">
							<path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36c-.83.5-1.75.85-2.72 1.05a4.3 4.3 0 0 0-7.31 3.91A12.19 12.19 0 0 1 3.15 4.57a4.3 4.3 0 0 0 1.33 5.75 4.28 4.28 0 0 1-1.95-.54v.05c0 2.16 1.54 3.96 3.58 4.37-.37.1-.76.16-1.16.16-.28 0-.56-.03-.82-.08a4.3 4.3 0 0 0 4.02 2.98 8.65 8.65 0 0 1-5.35 1.84c-.35 0-.7-.02-1.05-.06a12.2 12.2 0 0 0 6.6 1.93c7.93 0 12.26-6.57 12.26-12.26 0-.19 0-.37-.01-.56a8.67 8.67 0 0 0 2.13-2.2z" />
						</svg>
					</Link>
					<Link
						href="https://linkedin.com"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition-colors">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
							width="24"
							height="24">
							<path d="M4.98 3.5C4.98 4.33 4.3 5 3.47 5S1.96 4.33 1.96 3.5C1.96 2.67 2.63 2 3.47 2s1.51.67 1.51 1.5zM2 8.4h2.98v13.6H2V8.4zM8.5 8.4h2.98v1.85h.04c.41-.78 1.41-1.6 2.91-1.6 3.11 0 3.68 2.04 3.68 4.68v6.67H15.1V13.2c0-1.1-.02-2.51-1.53-2.51s-1.76 1.19-1.76 2.42v6.88H8.5V8.4z" />
						</svg>
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
