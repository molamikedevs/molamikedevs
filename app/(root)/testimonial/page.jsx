'use client'
// import React, { useState } from 'react'
import DotPattern from '@/components/ui/dot-pattern'
import Marquee from '@/components/ui/marquee'
import Image from 'next/image'
import { testimonials } from '@/constants'
import { useTheme } from 'next-themes'

const Testimonial = () => {
	const { resolvedTheme } = useTheme()

	return (
		<DotPattern
			id="testimonial"
			className={`${
				resolvedTheme === 'dark'
					? 'bg-black-100 text-white-100'
					: 'bg-white text-black-100'
			} py-16 px-12 font-[roboto]`}>
			<h2
				className={`text-center mb-8 uppercase px-6 py-3 font-extrabold sm:text-[2.5rem] text-[1rem] my-5 rounded-lg ${
					resolvedTheme === 'dark' ? 'text-white' : 'text-black'
				}`}>
				Feedback from Clients
			</h2>
			<Marquee className="mt-8" speed="25s">
				{' '}
				{/* Adjusted speed */}
				<div className="flex flex-wrap gap-6 justify-center items-stretch">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className={`${
								resolvedTheme === 'dark'
									? 'bg-black-200 text-white-100'
									: 'bg-gray-100 border border-white-200 text-black-200'
							} p-6 rounded-lg shadow-lg max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg 
                                    h-[170px] sm:h-[180px] flex flex-col justify-between overflow-hidden`}>
							<div className="grid grid-cols-[auto_1fr] gap-4 items-center">
								{/* Image */}
								<Image
									src={testimonial.imgUrl}
									alt="user"
									width={64}
									height={64}
									className="w-16 h-16 rounded-full object-cover"
								/>
								{/* User Info */}
								<div>
									<p
										className={`${
											resolvedTheme === 'dark'
												? 'text-white-100'
												: 'text-black-200'
										} text-lg font-bold`}>
										{testimonial.name}
									</p>
									<small className="text-gray-400 font-medium">
										{testimonial.position}
									</small>
								</div>
							</div>
							{/* Testimonial Text */}
							<p className="mt-4 text-sm leading-relaxed line-clamp-3">
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
