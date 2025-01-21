'use client'
import React, { useState } from 'react'
import DotPattern from '@/components/ui/dot-pattern'
import Marquee from '@/components/ui/marquee'
import Image from 'next/image'
import { testimonials } from '@/constants'
import { useTheme } from 'next-themes'

const Testimonial = () => {
	const [expanded, setExpanded] = useState({}) // Track expanded states for each testimonial
	const { resolvedTheme } = useTheme()

	const toggleExpand = index => {
		setExpanded(prev => ({ ...prev, [index]: !prev[index] }))
	}

	return (
		<DotPattern
			id="testimonial"
			className={`${
				resolvedTheme === 'dark'
					? 'bg-black-100 text-white-100'
					: 'bg-white text-black-100'
			} py-16 px-12`}>
			<h2
				className={`text-center text-3xl mb-8 uppercase px-6 py-3 font-lora font-extrabold sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] my-5 rounded-lg ${
					resolvedTheme === 'dark' ? 'text-white' : 'text-black'
				}`}>
				Feedback from <span className="text-tertiary">Clients</span>
			</h2>
			<Marquee className="mt-8" speed="25s">
				{' '}
				{/* Adjusted speed */}
				<div className="flex flex-wrap gap-6 justify-center items-center">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className={`${
								resolvedTheme === 'dark'
									? 'bg-black-200 text-white-100'
									: 'bg-gray-100 border border-white-200 text-black-200'
							}  p-6 rounded-lg shadow-lg max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg`}>
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
									<p
										className={`${
											resolvedTheme === 'dark'
												? 'text-white-100'
												: 'text-black-100'
										} text-lg font-bold`}>
										{testimonial.name}
									</p>
									<small className="text-gray-400 font-medium">
										Position: {testimonial.position}
									</small>
								</div>
							</div>
							{/* Testimonial Text */}
							<p className="mt-4 leading-relaxed">
								{expanded[index]
									? testimonial.subText
									: `${testimonial.subText.slice(0, 100)}...`}
							</p>
							{testimonial.subText.length > 100 && (
								<button
									onClick={() => toggleExpand(index)}
									className="mt-2 text-tertiary font-medium hover:underline">
									{expanded[index] ? 'Show Less' : 'Read More'}
								</button>
							)}
						</div>
					))}
				</div>
			</Marquee>
		</DotPattern>
	)
}

export default Testimonial
