'use client'
import { WarpBackground } from '@/components/ui/warp-background'
import { experiences } from '@/constants'
import React from 'react'
import { useTheme } from 'next-themes'

const WorkExperience = () => {
	const { theme } = useTheme()
	return (
		<WarpBackground
			className={`${
				theme === 'dark' ? 'bg-black-100' : 'bg-white'
			}  px-8 py-12 font-roboto`}>
			<h2
				className={`text-center mb-8 uppercase px-6 py-3 font-extrabold sm:text-[2.5rem] text-[1rem] my-5 rounded-lg ${
					theme === 'dark' ? 'text-white' : 'text-black'
				}`}>
				My WorkExperience
			</h2>
			<div
				className={`${
					theme === 'dark' ? 'bg-black-300' : 'bg-gray-100 text-black-100'
				}  flex flex-col md:flex-col lg:flex-row items-center justify-center gap-6 p-4 rounded-lg shadow-md`}>
				{experiences.map(workExp => (
					<div
						key={workExp}
						className={`${
							theme === 'dark' ? 'bg-black-200' : 'bg-gray-300'
						} w-full min-h-[10rem] md:w-full md:h-[12rem] text-center flex flex-col items-center py-4 px-4 rounded-md shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}>
						<h3
							className={`${
								theme === 'dark' ? 'text-white-200' : 'text-black-200'
							} uppercase font-bold text-lg md:text-xl pb-1`}>
							{workExp.company}
						</h3>
						<p
							className={`${
								theme === 'dark' ? 'text-white-200' : 'text-black-200'
							} font-medium text-xs mb-2`}>
							position: {workExp.position}
						</p>
						<p
							className={`${
								theme === 'dark' ? 'text-white-200' : 'text-black-200'
							} font-xs font-normal mt-3`}>
							{workExp.dsc}
						</p>
					</div>
				))}
			</div>
		</WarpBackground>
	)
}

export default WorkExperience
