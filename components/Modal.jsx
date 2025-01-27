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
					theme === 'dark'
						? 'bg-black-100 text-white-200 border border-white-200'
						: 'bg-gray-200 text-black-200'
				} w-[90%] max-w-xl h-auto rounded-lg shadow-lg relative p-6`}>
				<button
					onClick={onClose}
					className={`absolute top-4 right-4 ${
						theme === 'dark' ? 'text-white-200' : 'text-black-200'
					} hover:opacity-75 transition`}>
					<X className="w-6 h-6" />
				</button>
				{children}
			</div>
		</div>
	)
}

export default Modal
