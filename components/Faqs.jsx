'use client'
import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react' // Import Lucide icons
import DotPattern from './ui/dot-pattern'
import { faqItems } from '@/constants'
import { useTheme } from 'next-themes'

const Faqs = () => {
	const [activeIndex, setActiveIndex] = useState(null)
	const { theme } = useTheme()

	const toggleAccordion = index => {
		setActiveIndex(index === activeIndex ? null : index)
	}

	return (
		<DotPattern
			className={`${
				theme === 'dark'
					? 'bg-black-100 text-white-100'
					: 'bg-white text-black-100'
			} py-16 px-12`}>
			<h2
				className={`text-center text-3xl mb-8 uppercase px-6 py-3 font-lora font-extrabold sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] my-5 rounded-lg ${
					theme === 'dark' ? 'text-white' : 'text-black'
				}`}>
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
							} ${theme === 'dark' ? 'bg-black-100' : 'bg-gray-200'}`}>
							<button
								onClick={() => toggleAccordion(index)}
								className={`w-full flex items-center justify-between px-4 py-2 text-white-100 font-black focus:outline-none ${
									activeIndex === index ? 'text-tertiary' : 'text-white-100'
								}`}>
								<span
									className={`font-black font-lora text-lg ${
										activeIndex === index
											? 'text-tertiary' // Active index color
											: theme === 'dark'
											? 'text-white-100' // Default dark mode color
											: 'text-black-100' // Default light mode color
									}`}>
									{item.question}
								</span>
								{activeIndex === index ? (
									<Minus
										className={`${
											theme === 'dark' ? 'text-white-100' : 'text-black-100'
										} w-5 h-5`}
									/>
								) : (
									<Plus
										className={`${
											theme === 'dark' ? 'text-white-100' : 'text-black-100'
										} w-5 h-5`}
									/>
								)}
							</button>
							{activeIndex === index && (
								<div
									className={`${
										theme === 'dark' ? 'text-white-100' : 'text-black-100'
									} px-4 py-2  font-lora text-sm`}>
									{item.answer}
								</div>
							)}
						</div>
					))}
				</div>

				{/* Separator */}
				<div
					className={`${
						theme === 'dark' ? 'bg-black-100' : 'bg-gray-200'
					} hidden md:block w-px`}></div>

				{/* Right Column */}
				<div className="flex-1 space-y-4">
					{faqItems.slice(5).map((item, index) => (
						<div
							key={index + 5}
							className={`border border-gray-600 rounded-lg overflow-hidden ${
								activeIndex === index + 5 ? 'bg-black-300' : 'bg-black-100'
							} ${theme === 'dark' ? 'bg-black-100' : 'bg-gray-200'}`}>
							<button
								onClick={() => toggleAccordion(index + 5)}
								className={`w-full flex items-center justify-between px-4 py-2 text-white font-semibold focus:outline-none ${
									activeIndex === index + 5 ? 'text-tertiary' : 'text-white'
								}`}>
								<span
									className={`font-black font-lora text-lg ${
										activeIndex === index + 5
											? 'text-tertiary' // Active index color
											: theme === 'dark'
											? 'text-white-100' // Default dark mode color
											: 'text-black-100' // Default light mode color
									}`}>
									{item.question}
								</span>
								{activeIndex === index + 5 ? (
									<Minus
										className={`${
											theme === 'dark' ? 'text-white-100' : 'text-black-100'
										} w-5 h-5`}
									/>
								) : (
									<Plus
										className={`${
											theme === 'dark' ? 'text-white-100' : 'text-black-100'
										} w-5 h-5`}
									/>
								)}
							</button>
							{activeIndex === index + 5 && (
								<div
									className={`${
										theme === 'dark' ? 'text-white-100' : 'text-black-100'
									} px-4 py-2  font-lora text-sm`}>
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
