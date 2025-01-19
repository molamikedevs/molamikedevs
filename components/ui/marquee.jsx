import { cn } from '@/lib/utils'

export default function Marquee({
	className,
	reverse = false,
	pauseOnHover = true,
	children,
	vertical = false,
	repeat = 2,
	speed = '25s', // Increased speed
	...props
}) {
	return (
		<div
			{...props}
			className={cn(
				'group flex overflow-hidden [--duration:var(--speed)] [--gap:1rem] [gap:var(--gap)]',
				{
					'flex-row': !vertical,
					'flex-col': vertical,
				},
				className
			)}
			style={{ '--speed': speed }} // Inline CSS for speed
		>
			{Array(repeat)
				.fill(0)
				.map((_, i) => (
					<div
						key={i}
						className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
							'animate-marquee flex-row': !vertical,
							'animate-marquee-vertical flex-col': vertical,
							'group-hover:[animation-play-state:paused]': pauseOnHover,
							'[animation-direction:reverse]': reverse,
						})}>
						{children}
					</div>
				))}
		</div>
	)
}
