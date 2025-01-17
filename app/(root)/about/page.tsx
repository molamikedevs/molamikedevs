'use client'


import { boxContent } from '@/constants'
import { Download } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const About = () => {
	const handleDownload = () => {
		const link = document.createElement('a')
		link.href = '/cv.pdf'
		link.download = 'cv.pdf'
		link.click()
	}

	return (
		<section className="relative bg-black-100 pt-16 md:pt-20 pb-8 md:pb-12 text-black-200 flex flex-col-reverse lg:flex-row gap-6 md:gap-12 min-h-screen items-center justify-center">
			{/* Left Section */}
			<div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-12 text-center lg:text-left flex flex-col items-center lg:items-start">
				<h2 className="text-white-100 text-3xl sm:text-4xl font-extra-bold uppercase font-lora">
					About Me
				</h2>
				<p className="mt-4 text-base text-white-100 sm:text-lg font-lora max-w-prose">
					I&apos;m a junior full stack developer based in Baku, Azerbaijan. I
					strive to build immersive and beautiful web applications through
					carefully crafted code and user-centric design.
				</p>
				<button
					onClick={handleDownload}
					className="flex items-center justify-center gap-2 mt-6 h-[3rem] w-[12rem] uppercase bg-[#80C4E9] hover:bg-[#7BD3EA] rounded-sm hover:translate-x-1 text-black transition-all duration-300 text-base sm:text-lg font-semibold leading-tight tracking-wider">
					<Download /> Download CV
				</button>

				<div className="w-full lg:w-[65%] h-auto bg-gray-200 mt-8 sm:mt-6 mb-8 sm:mb-6 flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:gap-6 md:gap-8 rounded-sm shadow-lg py-4 sm:py-6">
					{boxContent.map((content, index) => (
						<div
							key={index}
							className="flex flex-col justify-center items-center gap-1 sm:gap-2">
							<h1 className="font-black text-black text-base sm:text-lg md:text-2xl">
								{content.title}
							</h1>
							<p className="text-xs sm:text-sm md:text-base font-medium text-black-200">
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
							height={400}
							className="object-contain rounded-xl"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
