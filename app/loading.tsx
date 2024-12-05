import React from 'react'

export default function Loading() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="flex flex-col items-center">
				<div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-dotted rounded-full animate-spin"></div>
				<p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
			</div>
		</div>
	)
}
