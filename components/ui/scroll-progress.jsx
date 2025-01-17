'use client'

import { cn } from '@/lib/utils'
import { motion, useScroll, useSpring } from 'motion/react'

// ScrollProgressProps type definition
/**
 * @typedef {Object} ScrollProgressProps
 * @property {string} [className] - Optional className for styling.
 */

/**
 * ScrollProgress component to display a scroll progress bar.
 * @param {ScrollProgressProps} props - The component props.
 */
export default function ScrollProgress({ className }) {
	const { scrollYProgress } = useScroll()

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 200,
		damping: 50,
		restDelta: 0.001,
	})

	return (
		<motion.div
			className={cn(
				'fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-[#80C4E9] via-[#000319] to-[#80C4E9]',
				className
			)}
			style={{
				scaleX,
			}}
		/>
	)
}
