'use client'
import { X } from 'lucide-react'
import React from 'react'
import { useOutsideClick } from '../hooks/useOutsideClick'
import { useTheme } from 'next-themes'

const Modal = ({ isOpen, onClose, children }) => {
	const { theme } = useTheme()
	const { ref } = useOutsideClick(() => {
		if (isOpen) onClose() // Close the modal when clicking outside
	})
	if (!isOpen) return null

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
			<div
				ref={ref}
				className={`${
					theme === 'dark' ? 'bg-black-100' : 'bg-gray-200'
				}  border border-white-100 w-[70%] h-[80%] rounded-lg shadow-lg relative flex flex-col items-center justify-center`}>
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-white-300 hover:text-black">
					<X
						className={`w-8 h-8 ${
							theme === 'dark' ? 'text-white-200' : 'text-black-200'
						}`}
					/>
				</button>
				{children}
			</div>
		</div>
	)
}

export default Modal
