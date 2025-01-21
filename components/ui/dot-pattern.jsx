'use client'
import { useId } from 'react'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

export function DotPattern({
	width = 16,
	height = 16,
	x = 0,
	y = 0,
	cx = 1,
	cy = 1,
	cr = 1,
	className,
	children,
	...props
}) {
	const id = useId()
	const { theme } = useTheme() // Access theme state

	return (
		<div className={cn('relative', className)} {...props}>
			{/* Background SVG */}
			<svg
				aria-hidden="true"
				className={`pointer-events-none absolute inset-0 h-full w-full ${
					theme === 'dark' ? 'fill-black-200' : 'fill-white'
				}`}>
				<defs>
					<pattern
						id={id}
						width={width}
						height={height}
						patternUnits="userSpaceOnUse"
						patternContentUnits="userSpaceOnUse"
						x={x}
						y={y}>
						<circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
					</pattern>
				</defs>
				<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
			</svg>
			{/* Render Children */}
			<div className="relative z-10">{children}</div>
		</div>
	)
}

export default DotPattern
