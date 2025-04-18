'use client'

import React from 'react'
import { motion } from 'framer-motion'
import DotPattern from '@/components/ui/dot-pattern'
import { useTheme } from 'next-themes'

const Home = () => {
	const { theme } = useTheme() // Access theme state

	return (
		<DotPattern
			id="home"
			className={`${
				theme === 'dark'
					? 'bg-black-100 text-white-100'
					: 'bg-white text-black-100'
			} relative pt-16 md:pt-20 pb-8 md:pb-12 flex flex-col min-h-screen items-center justify-center font-[roboto]`}>
			{/* Dynamic Text Overlay */}
			<div className="relative z-10 text-center">
				<motion.h2
					className="uppercase tracking-wider text-3xl md:text-5xl lg:text-7xl text-center font-black"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}>
					Bringing Ideas to Life through Seamless{' '}
					<motion.span
						className="text-tertiary"
						initial={{ scale: 1, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1.8, delay: 0.8 }}>
						User Experiences
					</motion.span>
				</motion.h2>
				<motion.p
					className="mt-8 text-sm md:text-lg lg:text-2xl"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2, delay: 2 }}>
					Hi, I&apos;m Kevin, a web developer based in Azerbaijan.
				</motion.p>
			</div>
		</DotPattern>
	)
}

export default Home
