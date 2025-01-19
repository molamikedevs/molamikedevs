'use client'
import React, { useState } from 'react'
import DotPattern from '@/components/ui/dot-pattern'
import Marquee from '@/components/ui/marquee'
import Image from 'next/image'
import { testimonials } from '@/constants'

const Testimonial = () => {
	const [expanded, setExpanded] = useState({}) // Track expanded states for each testimonial

	const toggleExpand = index => {
		setExpanded(prev => ({ ...prev, [index]: !prev[index] }))
	}

	return (
		<DotPattern id="testimonial" className="bg-black-100 px-8 py-12">
			<h2 className="heading">
				Feedback from <span className="text-tertiary">Clients</span>
			</h2>
			<Marquee className="mt-8" speed="25s">
				{' '}
				{/* Adjusted speed */}
				<div className="flex flex-wrap gap-6 justify-center items-center">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-black-200 p-6 rounded-lg shadow-lg max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
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
