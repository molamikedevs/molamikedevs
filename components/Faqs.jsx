import React from 'react'
import DotPattern from './ui/dot-pattern'

const Faqs = () => {
	return (
		<DotPattern className="bg-black-100 px-8 py-12">
			<h2 className="heading">Frequently asked questions</h2>
			<div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-6 p-4 rounded-lg shadow-md">
				<div className="experience-div text-center md:text-left">
					<h3 className="expTitle">Transnational/DSTV</h3>
					<p className="font-black underline text-xl mb-2">Dispatcher</p>
					<p className="subText">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
						debitis vel veritatis, labore ut repellendus.
					</p>
				</div>
				<div className="experience-div text-center md:text-left">
					<h3 className="expTitle">MultiChoice Africa</h3>
					<p className="font-black underline text-xl mb-2">IT Assistant</p>
					<p className="subText">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
						debitis vel veritatis, labore ut repellendus.
					</p>
				</div>
				<div className="experience-div text-center md:text-left">
					<h3 className="expTitle">Molamike Devs</h3>
					<p className="font-black underline text-xl mb-2">Team Head</p>
					<p className="subText">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
						debitis vel veritatis, labore ut repellendus.
					</p>
				</div>
			</div>
		</DotPattern>
	)
}

export default Faqs