'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import React from 'react'

// WarpBackgroundProps type definition
/**
 * @typedef {Object} WarpBackgroundProps
 * @property {React.ReactNode} children - The child components to render inside the background.
 * @property {number} [perspective=100] - Perspective value for the background.
 * @property {number} [beamsPerSide=3] - Number of beams per side of the warp grid.
 * @property {number} [beamSize=5] - Size of each beam as a percentage.
 * @property {number} [beamDelayMax=3] - Maximum delay for the beams animation.
 * @property {number} [beamDelayMin=0] - Minimum delay for the beams animation.
 * @property {number} [beamDuration=3] - Duration of the beams animation.
 * @property {string} [gridColor='bg-black-200'] - Grid color of the background.
 * @property {string} [className] - Additional class names for styling.
 */

// Beam component
/**
 * @param {Object} props - The props for the Beam component.
 * @param {string|number} props.width - Width of the beam.
 * @param {string|number} props.x - X position of the beam.
 * @param {number} props.delay - Delay for the beam animation.
 * @param {number} props.duration - Duration of the beam animation.
 */
const Beam = ({ width, x, delay, duration }) => {
	const hue = Math.floor(Math.random() * 360)
	const ar = Math.floor(Math.random() * 10) + 1

	return (
		<motion.div
			style={{
				'--x': `${x}`,
				'--width': `${width}`,
				'--aspect-ratio': `${ar}`,
				'--background': `linear-gradient(hsl(${hue} 80% 60%), transparent)`,
			}}
			className={`absolute left-[var(--x)] top-0 [aspect-ratio:1/var(--aspect-ratio)] [background:var(--background)] [width:var(--width)]`}
			initial={{ y: '100cqmax', x: '-50%' }}
			animate={{ y: '-100%', x: '-50%' }}
			transition={{
				duration,
				delay,
				repeat: Infinity,
				ease: 'linear',
			}}
		/>
	)
}

// WarpBackground component
/**
 * @param {WarpBackgroundProps} props - The props for the WarpBackground component.
 */
export const WarpBackground = ({
	children,
	perspective = 100,
	className,
	beamsPerSide = 3,
	beamSize = 5,
	beamDelayMax = 3,
	beamDelayMin = 0,
	beamDuration = 3,
	gridColor = 'bg-black-200',
	...props
}) => {
	const generateBeams = React.useCallback(() => {
		const beams = []
		const cellsPerSide = Math.floor(100 / beamSize)
		const step = cellsPerSide / beamsPerSide

		for (let i = 0; i < beamsPerSide; i++) {
			const x = Math.floor(i * step)
			const delay = Math.random() * (beamDelayMax - beamDelayMin) + beamDelayMin
			beams.push({ x, delay })
		}
		return beams
	}, [beamsPerSide, beamSize, beamDelayMax, beamDelayMin])

	const topBeams = React.useMemo(() => generateBeams(), [generateBeams])
	const rightBeams = React.useMemo(() => generateBeams(), [generateBeams])
	const bottomBeams = React.useMemo(() => generateBeams(), [generateBeams])
	const leftBeams = React.useMemo(() => generateBeams(), [generateBeams])

	return (
		<div className={cn('relative rounded p-20', className)} {...props}>
			<div
				style={{
					'--perspective': `${perspective}px`,
					'--grid-color': gridColor,
					'--beam-size': `${beamSize}%`,
				}}
				className={
					'pointer-events-none absolute left-0 top-0 size-full overflow-hidden [clip-path:inset(0)] [container-type:size] [perspective:var(--perspective)] [transform-style:preserve-3d]'
				}>
				{/* top side */}
				<div className="absolute [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100cqi]">
					{topBeams.map((beam, index) => (
						<Beam
							key={`top-${index}`}
							width={`${beamSize}%`}
							x={`${beam.x * beamSize}%`}
							delay={beam.delay}
							duration={beamDuration}
						/>
					))}
				</div>
				{/* bottom side */}
				<div className="absolute top-full [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100cqi]">
					{bottomBeams.map((beam, index) => (
						<Beam
							key={`bottom-${index}`}
							width={`${beamSize}%`}
							x={`${beam.x * beamSize}%`}
							delay={beam.delay}
							duration={beamDuration}
						/>
					))}
				</div>
				{/* left side */}
				<div className="absolute left-0 top-0 [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:0%_0%] [transform:rotate(90deg)_rotateX(-90deg)] [width:100cqh]">
					{leftBeams.map((beam, index) => (
						<Beam
							key={`left-${index}`}
							width={`${beamSize}%`}
							x={`${beam.x * beamSize}%`}
							delay={beam.delay}
							duration={beamDuration}
						/>
					))}
				</div>
				{/* right side */}
				<div className="absolute right-0 top-0 [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [width:100cqh] [transform-origin:100%_0%] [transform:rotate(-90deg)_rotateX(-90deg)]">
					{rightBeams.map((beam, index) => (
						<Beam
							key={`right-${index}`}
							width={`${beamSize}%`}
							x={`${beam.x * beamSize}%`}
							delay={beam.delay}
							duration={beamDuration}
						/>
					))}
				</div>
			</div>
			<div className="relative">{children}</div>
		</div>
	)
}
