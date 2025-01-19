import React from 'react'

const ContactForm = ({ onPress }) => {
	return (
		<>
			<h2 className="text-2xl font-bold mb-4">Contact Me</h2>
			<form className="flex flex-col w-full max-w-md">
				<div className="mb-4">
					<label
						htmlFor="name"
						className="block text-md font-black text-white-100">
						Name
					</label>
					<input
						type="text"
						id="name"
						className="w-full border border-black-300 rounded-md px-3 py-2"
						placeholder="Your Name"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-md font-black text-white-100">
						Email
					</label>
					<input
						type="email"
						id="email"
						className="w-full border border-black-300 rounded-md px-3 py-2"
						placeholder="Your Email"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-md font-black text-white-100">
						Phone
					</label>
					<input
						type="phone"
						id="email"
						className="w-full border border-black-300 rounded-md px-3 py-2"
						placeholder="Your phone number"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="message"
						className="block text-md font-black text-white-100">
						Message
					</label>
					<textarea
						id="message"
						className="w-full border border-black-300 rounded-md px-3 py-2"
						placeholder="Your Message"></textarea>
				</div>
				<div className="flex justify-end gap-4">
					<button
						type="button"
						className="py-2 px-4 bg-black-300 border border-black-200 text-white rounded-md"
						onClick={onPress}>
						Cancel
					</button>
					<button
						type="submit"
						className="py-2 px-4 bg-[#80C4E9] text-black rounded-md">
						Send
					</button>
				</div>
			</form>
		</>
	)
}

export default ContactForm
