import Image from 'next/image'
import React from 'react'

const Home = () => {
	const boxContent = [
		{
			title: '2 years+',
			subText: 'Experience',
		},
		{
			title: '10+',
			subText: 'Projects completed',
		},
		{
			title: '5',
			subText: 'Happy clients',
		},
	]

	return (
		<>
			<section className="bg-gray-100 pt-24 md:pt-32 pb-16 text-black-200 flex flex-col md:flex-col lg:flex-row gap-6 md:gap-12 min-h-screen items-center md:items-center justify-center">
				{/* Left Section */}
				<div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-12  lg:text-left">
					<h3 className="text-3xl text-[#80C4E9] sm:text-4xl mb-3 font-bold font-lora">
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
					<button className="mt-6 py-2 px-6 uppercase bg-[#80C4E9] hover:bg-[#7BD3EA] rounded-sm hover:translate-x-1 text-white transition-all text-base sm:text-lg font-semibold leading-tight tracking-wider">
						Hire me
					</button>

					<div className="w-full lg:w-[65%] h-auto bg-gray-200 mt-10 sm:mt-8 mb-10 sm:mb-8 lg:mb-16 lg:mt-16 flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:gap-6 md:gap-8 rounded-sm shadow-lg py-4 sm:py-6">
						{boxContent.map((content, index) => (
							<div
								key={index}
								className="flex flex-col justify-center items-center gap-1 sm:gap-2">
								<h1 className="font-black text-base sm:text-lg md:text-2xl">
									{content.title}
								</h1>
								<p className="text-xs sm:text-sm md:text-base font-medium text-gray-400">
									{content.subText}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Right Section */}
				<div className="w-full lg:w-1/2 flex justify-center items-center md:justify-center pt-6 lg:pt-0 hover:translate-x-2 transition-all duration-300 cursor-pointer">
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
		</>
	)
}

export default Home
