'use client'
import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import { z } from 'zod'
import { useTheme } from 'next-themes'

const ContactForm = () => {
	const { theme } = useTheme()
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	})

	const [loading, setLoading] = useState(false)
	const [errors, setErrors] = useState({})

	const schema = z.object({
		name: z.string().nonempty('Name is required'),
		email: z.string().email('Invalid email address'),
		phone: z.string().nonempty('Phone number is required'),
		message: z.string().min(10, 'Message must be at least 10 characters'),
	})

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = e => {
		e.preventDefault()
		const result = schema.safeParse(formData)
		if (!result.success) {
			const fieldErrors = result.error.flatten().fieldErrors
			setErrors(fieldErrors)
			return
		}

		setLoading(true)
		setErrors({})

		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				{
					from_name: formData.name,
					from_email: formData.email,
					phone: formData.phone,
					message: formData.message,
				},
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			)
			.then(
				response => {
					console.log('Success!', response.status, response.text)
					toast.success('Message sent successfully!')
					setFormData({
						name: '',
						email: '',
						phone: '',
						message: '',
					})
				},
				error => {
					console.error('Failed to send message:', error)
					toast.error('Failed to send the message. Please try again.')
				}
			)
			.finally(() => setLoading(false))
	}

	return (
		<>
			<h2 className="text-2xl font-bold mb-4 text-black-200">Contact Me</h2>
			<form
				className={`${
					theme === 'dark' ? 'text-white-100' : 'text-black-200'
				} flex flex-col w-full max-w-md `}
				onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="name" className="block text-md font-black">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="w-full border border-black-300 rounded-md px-3 py-2"
						placeholder="Your Name"
					/>
					{errors.message && <p className="text-red-500">{errors.name}</p>}
				</div>
				<div className="mb-4">
					<label htmlFor="email" className="block text-md font-black">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full border border-black-300 rounded-md px-3 py-2"
						placeholder="Your Email"
					/>
					{errors.message && <p className="text-red-500">{errors.email}</p>}
				</div>
				<div className="mb-4">
					<label htmlFor="phone" className="block text-md font-black">
						Phone
					</label>
					<input
						type="phone"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						className="w-full border border-black-300 rounded-md px-3 py-2"
						placeholder="Your phone number"
					/>
					{errors.message && <p className="text-red-500">{errors.phone}</p>}
				</div>
				<div className="mb-4">
					<label htmlFor="message" className="block text-md font-black">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						rows={4}
						className="w-full border border-black-300 rounded-md px-3 py-2 resize-none"
						placeholder="Your Message"></textarea>
					{errors.message && <p className="text-red-500">{errors.message}</p>}
				</div>
				<div className="flex justify-end gap-4">
					<button
						type="button"
						className={`${
							theme === 'dark' ? 'text-white-100' : 'text-tertiary'
						} py-2 px-4 bg-black-300 border border-black-200 rounded-md"`}
						onClick={() =>
							setFormData({
								name: '',
								email: '',
								phone: '',
								message: '',
							})
						}>
						Cancel
					</button>
					<button
						type="submit"
						className="py-2 px-4 bg-[#80C4E9] text-black rounded-md"
						disabled={loading}>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</div>
			</form>
		</>
	)
}

export default ContactForm
