import Image from 'next/image'
import React from 'react'

const Home = () => {
	return (
		<>
			<section className="bg-gray-100 pt-24 md:pt-32 pb-16 text-black-200 flex flex-col md:flex-col lg:flex-row gap-6 md:gap-12 min-h-screen items-center md:items-center justify-center">
				{/* Left Section */}
				<div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-12  lg:text-left">
					<h3 className="text-3xl sm:text-4xl mb-3 font-bold font-lora">
						Hello, I&apos;m
					</h3>
					<h2 className="text-3xl sm:text-4xl mb-6 tracking-wider font-semibold font-lora">
						Lamin Foday
					</h2>
					<p className="text-base sm:text-lg font-lora">
						I&apos;m a junior full stack developer based in Baku, Azerbaijan. I
						strive to build immersive and beautiful web applications through
						carefully crafted code and user-centric design.
					</p>
					<button className="mt-6 py-2 px-6 uppercase bg-blue-500 hover:bg-blue-800 rounded-sm hover:translate-x-1 text-white transition-all text-base sm:text-lg font-semibold leading-tight tracking-wider">
						Hire me
					</button>

					<div className="w-full lg:w-[65%] h-auto bg-gray-200 mt-10 lg:mt-16 flex justify-center items-center gap-8 rounded-sm shadow-lg py-6">
						<div className="flex flex-col justify-center items-center gap-2">
							<h1 className="font-black text-xl sm:text-2xl">2 years+</h1>
							<p className="text-sm font-medium text-gray-400">Experience</p>
						</div>
						<div className="flex flex-col justify-center items-center gap-2">
							<h1 className="font-black text-xl sm:text-2xl">10+</h1>
							<p className="text-sm font-medium text-gray-400">
								Projects Completed
							</p>
						</div>
						<div className="flex flex-col justify-center items-center gap-2">
							<h1 className="font-black text-xl sm:text-2xl">2</h1>
							<p className="text-sm font-medium text-gray-400">Happy Clients</p>
						</div>
					</div>
				</div>

				{/* Right Section */}
				<div className="w-full lg:w-1/2 flex justify-center items-center md:justify-center pt-6 lg:pt-0">
					<div className="max-h-[25rem] md:max-h-[30rem] max-w-[25rem] md:max-w-[30rem] bg-gray-200 rounded-t-[5rem] lg:rounded-t-[10rem] shadow-lg flex justify-center items-center">
						<div className="h-[90%] w-[90%] bg-gray-300 rounded-t-[5rem] lg:rounded-t-[10rem] shadow-sm flex justify-center items-center">
							<Image
								src="/user.png"
								alt="User Photo"
								width={300}
								height={300}
								className="object-contain rounded-xl"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Home
