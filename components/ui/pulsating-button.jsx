import React from 'react'
import { cn } from '@/lib/utils'



export const PulsatingButton = ({
	className,
	children,

	duration = '1.5s',
	...props
}) => {
	return (
		<button
			className={cn(
				'relative flex cursor-pointer items-center justify-center rounded-lg bg-black-100 border border-black-300 px-4 py-2 text-center text-primary-foreground',
				className
			)}
			style={{ '--duration': duration }}
			{...props}>
			<div className="relative z-10">{children}</div>
			<div className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg bg-inherit" />
		</button>
	)
}
