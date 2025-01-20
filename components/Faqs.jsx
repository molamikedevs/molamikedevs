'use client'
import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react' // Import Lucide icons
import DotPattern from './ui/dot-pattern'
import { faqItems } from '@/constants'

const Faqs = () => {
	const [activeIndex, setActiveIndex] = useState(null)

	const toggleAccordion = index => {
		setActiveIndex(index === activeIndex ? null : index)
	}

	return (
		<DotPattern className="bg-black-100 px-8 py-12">
			<h2 className="heading">
				Frequently Asked <span className="text-tertiary">Questions</span>
			</h2>
			<div className="flex flex-col md:flex-row gap-8">
				{/* Left Column */}
				<div className="flex-1 space-y-4">
					{faqItems.slice(0, 5).map((item, index) => (
						<div
							key={index}
							className={`border border-gray-600 rounded-lg overflow-hidden ${
								activeIndex === index ? 'bg-black-300' : 'bg-black-100'
							}`}>
							<button
								onClick={() => toggleAccordion(index)}
								className={`w-full flex items-center justify-between px-4 py-2 text-white-100 font-black focus:outline-none ${
									activeIndex === index ? 'text-tertiary' : 'text-white-100'
								}`}>
								<span
									className={`font-black font-lora text-lg ${
										activeIndex === index ? 'text-tertiary' : 'text-white-100'
									}`}>
									{item.question}
								</span>
								{activeIndex === index ? (
									<Minus className="w-5 h-5 text-white-100" />
								) : (
									<Plus className="w-5 h-5 text-white-100" />
								)}
							</button>
							{activeIndex === index && (
								<div className="px-4 py-2 text-white-100 font-lora text-sm">
									{item.answer}
								</div>
							)}
						</div>
					))}
				</div>

				{/* Separator */}
				<div className="hidden md:block w-px bg-gray-700"></div>

				{/* Right Column */}
				<div className="flex-1 space-y-4">
					{faqItems.slice(5).map((item, index) => (
						<div
							key={index + 5}
							className={`border border-gray-600 rounded-lg overflow-hidden ${
								activeIndex === index + 5 ? 'bg-black-300' : 'bg-black-100'
							}`}>
							<button
								onClick={() => toggleAccordion(index + 5)}
								className={`w-full flex items-center justify-between px-4 py-2 text-white font-semibold focus:outline-none ${
									activeIndex === index + 5 ? 'text-tertiary' : 'text-white'
								}`}>
								<span
									className={`font-black font-lora text-lg ${
										activeIndex === index + 5
											? 'text-tertiary'
											: 'text-white-100'
									}`}>
									{item.question}
								</span>
								{activeIndex === index + 5 ? (
									<Minus className="w-5 h-5 text-white-100" />
								) : (
									<Plus className="w-5 h-5 text-white-100" />
								)}
							</button>
							{activeIndex === index + 5 && (
								<div className="px-4 py-2 text-white-100 font-lora text-sm">
									{item.answer}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</DotPattern>
	)
}

export default Faqs
