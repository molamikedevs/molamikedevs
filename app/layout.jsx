import './globals.css'
import 'normalize.css'
import localFont from 'next/font/local'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalContextProvider } from '../constants/GlobalContext'
import { ThemeProvider } from 'next-themes'

const roboto = localFont({
	src: [
		{
			path: '../public/fonts/Roboto-Black.ttf',
			weight: '900',
			style: 'normal',
		},
		{ path: '../public/fonts/Roboto-Bold.ttf', weight: '700', style: 'normal' },
		{
			path: '../public/fonts/Roboto-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../public/fonts/Roboto-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/fonts/Roboto-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-roboto',
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
			<body className={`${roboto.variable} antialiased`}>
				<GlobalContextProvider>
					<ThemeProvider attribute="class" defaultTheme="dark">
						<ToastContainer
							className="bg-black-200 text-white-100"
							position="top-right"
						/>
						{children}
					</ThemeProvider>
				</GlobalContextProvider>
			</body>
		</html>
	)
}

export default MainLayout
