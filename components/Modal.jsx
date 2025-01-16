'use client'
import { X } from 'lucide-react'
import React from 'react'

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
			<div className="bg-white w-1/2 h-1/2 rounded-lg shadow-lg relative flex flex-col items-center justify-center">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-600 hover:text-black">
					<X className="w-8 h-8" />
				</button>
				{children}
			</div>
		</div>
	)
}

export default Modal
