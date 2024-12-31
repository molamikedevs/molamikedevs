import { Download } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const About = () => {
	return (
		<section className="bg-gray-200 pt-16 md:pt-24 pb-12 md:pb-16 text-black-200 flex flex-col-reverse-end md:flex-col-reverse lg:flex-row gap-6 md:gap-12 min-h-screen items-center justify-center">
			{/* Left Section */}
			<div className="w-full lg:w-1/2 flex justify-center items-center md:justify-center pt-6 lg:pt-0 md:order-2 lg:order-1 hover:translate-y-3 transition-all duration-300">
				<div className="max-h-[25rem] md:max-h-[35rem] lg:max-h-[40rem] max-w-[25rem] md:max-w-[35rem] lg:max-w-[40rem] bg-gray-200 rounded-t-[5rem] lg:rounded-t-[10rem] shadow-lg justify-center items-center md:block hidden">
					<div className="h-[90%] w-[90%] bg-gray-300 rounded-t-[5rem] lg:rounded-t-[10rem] shadow-sm flex justify-center items-center">
						<Image
							src="/user.png"
							alt="User Photo"
							width={400}
							height={400}
							className="object-contain rounded-xl cursor-pointer"
						/>
					</div>
				</div>
			</div>

			{/* Right Section */}
			<div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-12 lg:text-left md:order-1 lg:order-2">
				<h2 className="text-3xl sm:text-4xl mb-6 tracking-wider font-semibold font-lora">
					I am a professional junior full stack developer
				</h2>
				<p className="text-base sm:text-lg font-lora">
					I design and develop services for customers specializing creating
					stylish, modern websites, web services and online stores. My passion
					is to design digital user experiences. I design and develop services
					for customers specializing creating stylish, modern websites, web
					services.
				</p>

				<button className="flex items-center justify-center gap-2 mt-6 h-[3rem] w-[12rem] uppercase bg-[#80C4E9] hover:bg-[#7BD3EA] rounded-sm hover:translate-x-1 text-white transition-all duration-300 text-base sm:text-lg font-semibold leading-tight tracking-wider">
					<Download /> Download CV
				</button>
			</div>
		</section>
	)
}

export default About
