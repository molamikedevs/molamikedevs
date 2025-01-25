'use client'

import React from 'react'
import DotPattern from './ui/dot-pattern'
import { approaches } from '@/constants'
import { useTheme } from 'next-themes'

const MyApproach = () => {
	const { theme } = useTheme()
	return (
		<DotPattern
			className={`${
				theme === 'dark'
					? 'bg-black-100 text-white-100'
					: 'bg-white text-black-100'
			} py-16 px-12`}>
			<h2
				className={`text-center text-xl mb-8 uppercase px-6 py-3 font-lora font-extrabold sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] my-5 rounded-lg ${
					theme === 'dark' ? 'text-white' : 'text-black'
				}`}>
				My Approach
			</h2>
			<div className="flex flex-col h-auto w-full gap-4 lg:h-[25rem] lg:flex-row">
				{approaches.map((approach, index) => (
					<div
						key={index}
						className={`${
							theme === 'dark'
								? 'bg-black-300'
								: 'bg-gray-100 border border-white-100'
						} group w-full h-[20rem] text-white-100 flex flex-col justify-center items-center rounded-xl shadow-md px-6 cursor-pointer hover:scale-105 transition-all duration-300 lg:w-[34%]`}>
						{/* Default text */}
						<span
							className={`${
								theme === 'dark' ? 'text-white-200' : 'text-black-100'
							}  text-2xl lg:text-lg font-black font-lora group-hover:hidden`}>
							Phase {index + 1}
						</span>

						{/* Hover content */}
						<div className="hidden group-hover:flex flex-col items-center">
							<h2 className="text-white font-black font-lora pb-4 text-2xl md:text-3xl lg:text-2xl group-hover:text-tertiary">
								{approach.title}
							</h2>
							<p
								className={`${
									theme === 'dark' ? 'text-white-200' : 'text-black-200'
								}  text-xl pt-3 lg:text-sm font-lora`}>
								{approach.subText}
							</p>
						</div>
					</div>
				))}
			</div>
		</DotPattern>
	)
}

export default MyApproach
