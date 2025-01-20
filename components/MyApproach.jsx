import React from 'react'
import DotPattern from './ui/dot-pattern'
import { approaches } from '@/constants'

const MyApproach = () => {
	return (
		<DotPattern className="bg-black-100 px-8 py-12">
			<h2 className="heading">
				My <span className="text-tertiary">Approach</span>
			</h2>
			<div className="flex flex-col h-auto w-full gap-4 lg:h-[25rem] lg:flex-row">
				{approaches.map((approach, index) => (
					<div
						key={index}
						className="group w-full h-[20rem] text-white-100 bg-black-300 flex flex-col justify-center items-center rounded-xl shadow-md px-6 cursor-pointer hover:scale-105 transition-all duration-300 lg:w-[34%]">
						{/* Default text */}
						<span className="text-white-200 text-2xl lg:text-lg font-black font-lora group-hover:hidden">
							Phase {index + 1}
						</span>

						{/* Hover content */}
						<div className="hidden group-hover:flex flex-col items-center">
							<h2 className="text-white font-black font-lora pb-4 text-2xl md:text-3xl lg:text-2xl group-hover:text-tertiary">
								{approach.title}
							</h2>
							<p className="text-white-200 text-xl pt-3 lg:text-sm font-lora">
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
