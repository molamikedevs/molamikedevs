import Image from 'next/image'
import React from 'react'

const About = () => {
	return (
		<section className="bg-gray-200 pt-24 md:pt-32 pb-16 text-black-200 flex flex-col md:flex-col lg:flex-row gap-6 md:gap-12 min-h-screen items-center md:items-center justify-center">
			{/* Left Section */}
			<div className="w-full lg:w-1/2 flex justify-center items-center md:justify-center pt-6 lg:pt-0">
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

			{/* Right Section */}
			<div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-12  lg:text-left">
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

				<div className="flex items-center gap-4">
					<button className="mt-6 py-2 px-6 uppercase bg-[#80C4E9] hover:bg-[#7BD3EA] rounded-sm hover:translate-x-1 text-white transition-all text-base sm:text-lg font-semibold leading-tight tracking-wider">
						Projects
					</button>
					<button className="mt-6 py-2 px-6 uppercase bg-[#80C4E9] hover:bg-[#7BD3EA] rounded-sm hover:translate-x-1 text-white transition-all text-base sm:text-lg font-semibold leading-tight tracking-wider">
						Download CV
					</button>
				</div>
			</div>
		</section>
	)
}

export default About
