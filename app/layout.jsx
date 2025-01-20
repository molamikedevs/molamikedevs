import './globals.css'
import localFont from 'next/font/local'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const lora = localFont({
	src: [
		{ path: '../public/fonts/Lora-Bold.ttf', weight: '700', style: 'normal' },
		{
			path: '../public/fonts/Lora-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
		{ path: '../public/fonts/Lora-Medium.ttf', weight: '500', style: 'normal' },
		{
			path: '../public/fonts/Lora-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-lora',
})

export const metadata = {
	default: 'Molamike',
	template: '%s | Molamike',
	description:
		'Molamike devs portfolio is created to showcase skills as a junior developer.',
}

const MainLayout = ({ children }) => {
	return (
		<html lang="en">
			<body className={`${lora.variable} antialiased`}>
				<ToastContainer
					className="bg-black-200 text-white-100"
					position="top-right"
				/>
				{children}
			</body>
		</html>
	)
}

export default MainLayout
