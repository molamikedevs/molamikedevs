'use client'
import React from 'react'
import { motion } from 'framer-motion'
import DotPattern from '@/components/ui/dot-pattern'

const Home = () => {
	return (
		<DotPattern className="relative bg-black-100 text-white-200 pt-16 md:pt-20 pb-8 md:pb-12 flex flex-col min-h-screen items-center justify-center">
			{/* Dynamic Text Overlay */}
			<div className="relative z-10 text-center">
				<motion.h2
					className="uppercase tracking-wider text-5xl md:text-6xl lg:text-8xl text-center text-white font-black"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}>
					Bringing Ideas to Life through Seamless{' '}
					<motion.span
						className="text-[#80C4E9]"
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1.5, delay: 0.5 }}>
						User Experiences
					</motion.span>
				</motion.h2>
				<motion.p
					className="mt-8 text-sm md:text-lg lg:text-2xl"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 1 }}>
					Hi, I&apos;m Kevin, a web developer based in Azerbaijan.
				</motion.p>
			</div>
		</DotPattern>
	)
}

export default Home
