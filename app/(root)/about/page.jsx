'use client'

import React from 'react'
import { Download } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from 'next-themes' // Use next-themes for theme state
import { boxContent } from '@/constants'

const About = () => {
	const { theme } = useTheme() // Use resolvedTheme for SSR consistency

	const handleDownload = () => {
		const link = document.createElement('a')
		link.href = '/cv.pdf'
		link.download = 'cv.pdf'
		link.click()
	}

	return (
		<section
			id="about"
			className={`relative pt-16 md:pt-20 pb-8 md:pb-12 min-h-screen items-center justify-center px-8 py-12 ${
				theme === 'dark'
					? 'bg-black-100 text-white-100'
					: 'bg-white text-black-100'
			} flex flex-col-reverse lg:flex-row gap-6 md:gap-12`}>
			{/* Left Section */}
			<div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-12 text-center lg:text-left flex flex-col items-center lg:items-start">
				<h2 className="text-3xl sm:text-4xl font-black uppercase font-lora">
					About Me
				</h2>
				<p className={'mt-4 text-base sm:text-md font-lora max-w-prose'}>
					I&apos;m a junior full-stack developer based in Baku, Azerbaijan, with
					a passion for building immersive and visually appealing web
					applications. I focus on writing clean, efficient code and creating
					user-centric designs that deliver a seamless experience. Whether
					collaborating on a team or working independently, I thrive on solving
					challenging problems and bringing ideas to life through technology.
					Beyond coding, I enjoy staying updated with the latest tech trends and
					continuously expanding my skill set.
				</p>
				<button
					onClick={handleDownload}
					className={`flex items-center justify-center gap-2 mt-6 h-[3rem] w-[12rem] uppercase rounded-sm hover:translate-x-1  transition-all duration-300 text-base sm:text-sm font-lora font-semibold leading-tight tracking-wider ${
						theme === 'dark'
							? 'bg-black-300 text-white-100'
							: 'bg-tertiary hover:bg-tertiary text-white'
					}`}>
					<Download size={18} /> Download CV
				</button>

				<div
					className={`w-full lg:w-[80%] h-auto  mt-8 sm:mt-6 mb-8 sm:mb-6 flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:gap-6 md:gap-8 rounded-sm shadow-lg py-4 sm:py-6 hover:scale-105 transition-all duration-300 cursor-pointer font-lora ${
						theme === 'dark' ? 'bg-black-300' : 'bg-gray-100'
					}`}>
					{boxContent.map((content, index) => (
						<div
							key={index}
							className="flex flex-col justify-center items-center gap-1 sm:gap-2">
							<h1 className="font-black text-base sm:text-md md:text-2xl">
								{content.title}
							</h1>
							<p className="text-xs sm:text-xs md:text-base font-medium">
								{content.subText}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Right Section */}
			<div className="w-full lg:w-1/2 justify-center items-center hidden md:flex">
				<div className="max-h-[25rem] md:max-h-[35rem] lg:max-h-[40rem] max-w-[25rem] md:max-w-[35rem] lg:max-w-[40rem] bg-gray-200 rounded-t-[5rem] lg:rounded-t-[10rem] shadow-lg flex justify-center items-center">
					<div className="h-[90%] w-[90%] bg-gray-300 rounded-t-[5rem] lg:rounded-t-[10rem] shadow-sm flex justify-center items-center">
						<Image
							src="/user.png"
							alt="User Photo"
							width={400}
							height={300}
							className="object-contain rounded-xl"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
