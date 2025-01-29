import { CodeXml, LaptopMinimal, Server } from 'lucide-react'

export const links = [
	{ name: 'Home', route: '/' },
	{ name: 'About', route: '/about' },
	{ name: 'Projects', route: '/projects' },
	{ name: 'Testimonial', route: '/testimonial' },
]

export const boxContent = [
	{
		title: '2yrs+',
		subText: 'Experience',
	},
	{
		title: '10+',
		subText: 'Projects completed',
	},
	{
		title: '5',
		subText: 'Happy clients',
	},
]

export const testimonials = [
	{
		name: 'Alhaji Foday Kamara',
		position: 'Enterprise Pipeline Officer',
		imgUrl: '/paid.jpeg',
		subText:
			'Kevin and his team delivered outstanding results ahead of schedule. Highly recommended for their professionalism!',
	},

	{
		name: 'Chernor Bah' || 'Avatar',
		position: 'Procurement Officer',
		imgUrl: '/av-3.jpeg',
		subText:
			'Exceptional service! The team exceeded my expectations with their dedication and efficiency.',
	},
	{
		name: 'Alie Sawray',
		position: 'IT Assistant',
		imgUrl: '/alie.jpg',
		subText:
			'Great experience working with Kevin’s team. They are reliable, skilled, and meet deadlines effortlessly.',
	},
	{
		name: 'Ben Johnson',
		position: 'Junior Associate',
		imgUrl: '/av-2.jpg',
		subText:
			'Highly professional team! Their attention to detail and commitment made the project a success.',
	},
]


export const projects = [
	{
		name: 'Hotel Management System',
		photo: '/booking.jpeg',
		url: '/projects/1',
		subText:
			'An amazing management system app that allows workers to update guest bookings based on guest demands. Full-stack website with CRUD functionality.',
		category: 'Backend',
	},
	{
		name: 'Blog Website',
		photo: '/blog.jpg',
		url: '/projects/2',
		subText:
			'A blog website that keeps you updated with the latest technology and world happenings.',
		category: 'Frontend',
	},
	{
		name: 'eCommerce Website',
		photo: '/ecom.png',
		url: 'https://ecommerce-com-gdx6.onrender.com/',
		subText:
			'An eCommerce website that enables users to shop from anywhere. Fully responsive with CRUD operations.',
		category: 'Full Stack',
	},
	{
		name: 'Movie App',
		photo: '/movie.png',
		url: 'https://movies-app-4bz6.onrender.com/',
		subText:
			'This web app displays all latest movies and filter search results and display trending movies based on users search results.',
		category: 'Frontend',
	},
	{
		name: 'Landing Page',
		photo: '/landing-page.png',
		url: 'https://xora-landding-page.onrender.com/',
		subText:
			'A sleek and modern landing page design to showcase your services effectively.',
		category: 'UI/UX',
	},
	{
		name: 'Real Estate',
		photo: '/est.jpeg',
		url: '/projects/6',
		subText:
			'A real estate website that makes property searching easy and efficient.',
		category: 'Full Stack',
	},
]

export const experiences = [
	{
		company: 'Upwork',
		logo: <LaptopMinimal size={30} className="text-tertiary text-center" />,
		position: 'Freelancer',
		dsc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus debitis vel veritatis, labore ut repellendus.',
	},
	{
		company: 'Transnational',
		logo: <CodeXml size={30} className="text-tertiary text-center" />,
		position: 'IT Assistant',
		dsc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus debitis vel veritatis, labore ut repellendus.',
	},
	{
		company: 'Molamike Devs',
		logo: <Server size={30} className="text-tertiary text-center" />,
		position: 'Junior full stack developer',
		dsc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus debitis vel veritatis, labore ut repellendus.',
	},
]

export const faqItems = [
	{
		question: 'What programming languages do you specialize in?',
		answer:
			'I specialize in JavaScript, HTML, and CSS, with experience in frameworks like React, Next.js and Node.js.',
	},
	{
		question: 'What type of projects have you worked on?',
		answer:
			'I have worked on responsive websites, e-commerce platforms, and interactive web applications.',
	},
	{
		question: 'Do you have experience with version control?',
		answer:
			'Yes, I use Git and GitHub to manage code and collaborate with teams.',
	},
	{
		question: 'What tools do you use for web development?',
		answer:
			'I use VS Code, Chrome Developer Tools, and libraries like Sass Css, Styled Css and Tailwind CSS.',
	},
	{
		question: 'Can you optimize websites for performance?',
		answer:
			'Yes, I focus on optimizing load times, improving SEO, and using modern web techniques.',
	},
	{
		question: 'Are you familiar with APIs?',
		answer:
			'Yes, I have experience working with RESTful APIs and integrating third-party services.',
	},
	{
		question: 'Do you have experience with responsive design?',
		answer:
			'Yes, I ensure websites are mobile-friendly and work seamlessly on all devices.',
	},
	{
		question: 'What projects are you most proud of?',
		answer:
			'I developed a portfolio website showcasing my skills and an interactive to-do list app.',
	},
	{
		question: 'Do you have experience with databases?',
		answer:
			'Yes, I have worked with databases like MongoDB and Supabase, Appwrite and Sanity for web applications.',
	},
	{
		question: 'What is your approach to debugging?',
		answer:
			'I use browser developer tools, console logs, and debugging features in IDEs to resolve issues.',
	},
]


export const approaches = [
	{
		title: 'Planing & Strategy',
		subText:
			"We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
	},
	{
		title: 'Development & Progress Update',
		subText:
			'Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.',
	},
	{
		title: 'Development & Launch',
		subText:
			"This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
	},
]
