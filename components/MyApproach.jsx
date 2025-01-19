import React from 'react'

import DotPattern from './ui/dot-pattern'
import { MagicCard } from './ui/magic-card'
// import FlickeringGrid from './ui/flickering-grid'

const MyApproach = () => {
	return (
		<DotPattern className="bg-black-100 px-8 py-12">
			<h2 className="heading">
				My <span className=" text-tertiary">Approach</span>
			</h2>
			<div
				className={
					'flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row'
				}>
				<MagicCard className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl">
					Magic
				</MagicCard>
				<MagicCard className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl">
					Card
				</MagicCard>
				<MagicCard className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl">
					Card
				</MagicCard>
			</div>
		</DotPattern>
	)
}

export default MyApproach
