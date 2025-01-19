import { WarpBackground } from '@/components/ui/warp-background'
import { experiences } from '@/constants'
import React from 'react'

const WorkExperience = () => {
	return (
		<WarpBackground className="bg-black-100 px-8 py-12">
			<h2 className="heading">
				My Work <span className=" text-tertiary">Experience</span>
			</h2>
			<div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-6 p-4 rounded-lg shadow-md">
				{experiences.map(workExp => (
					<div key={workExp} className="experience-div">
						<h3 className="expTitle">{workExp.company}</h3>
						<p className="font-medium underline text-sm mb-2 text-white-100">
							{workExp.position}
						</p>
						<p className="subText">{workExp.dsc}</p>
					</div>
				))}
			</div>
		</WarpBackground>
	)
}

export default WorkExperience
