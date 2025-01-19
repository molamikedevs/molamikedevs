'use client'
import React from 'react'
import DotPattern from '@/components/ui/dot-pattern'
import Marquee from '@/components/ui/marquee'
import Image from 'next/image'
import { testimonials } from '@/constants'

const Testimonial = () => {
	return (
		<DotPattern id="testimonial" className="bg-black-100 px-8 py-12">
			<h2 className="heading">Testimonial</h2>
			<Marquee className="">
				<div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-6 p-4 rounded-lg shadow-md">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-black-200 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
							<div className="grid grid-cols-[auto_1fr] gap-4 items-center">
								{/* Image */}
								<Image
									src={testimonial.imgUrl}
									alt="user"
									width={70}
									height={70}
									className="rounded-full object-cover"
								/>
								{/* User Info */}
								<div>
									<p className="text-lg font-bold text-white">
										{testimonial.name}
									</p>
									<small className="text-gray-400 font-medium">
										Position: {testimonial.position}
									</small>
								</div>
							</div>
							{/* Testimonial Text */}
							<p className="mt-4 text-gray-300 leading-relaxed">
								{testimonial.subText}
							</p>
						</div>
					))}
				</div>
			</Marquee>
		</DotPattern>
	)
}

export default Testimonial

{
	/* <WarpBackground className="bg-black-100">
			<h2 className="heading">Work Experience</h2>
			<div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-6 p-4 rounded-lg shadow-md">
				<div className="experience-div text-center md:text-left">
					<h3 className="expTitle">Transnational/DSTV</h3>
					<p className="font-black underline text-xl mb-2">Dispatcher</p>
					<p className="subText">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
						debitis vel veritatis, labore ut repellendus.
					</p>
				</div>
				<div className="experience-div text-center md:text-left">
					<h3 className="expTitle">MultiChoice Africa</h3>
					<p className="font-black underline text-xl mb-2">IT Assistant</p>
					<p className="subText">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
						debitis vel veritatis, labore ut repellendus.
					</p>
				</div>
				<div className="experience-div text-center md:text-left">
					<h3 className="expTitle">Molamike Devs</h3>
					<p className="font-black underline text-xl mb-2">Team Head</p>
					<p className="subText">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
						debitis vel veritatis, labore ut repellendus.
					</p>
				</div>
			</div>
		</WarpBackground> */
}
