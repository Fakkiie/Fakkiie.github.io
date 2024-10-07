import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'nest',
		color: '#5e95e3',
		description:
			`Developed 'Nest,' a React Native mobile app leveraging Postgres 
			and external image recognition APIs to identify bird species, and secured 3rd place 
			at <a href="https://winhacks.ca/">WinHacks 2024</a>, a University of Windsor hackathon with hundreds of participants. To see more please
			refer to the devpost
			https://devpost.com/software/nest-x0wlea#updates`,
		shortDescription:
			'An application developed to assist in your bird watching journey',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.nest,
		name: 'Nest',
		period: {
			from: new Date('2024-2-17'), 
			to: new Date('2024-02-18') 
		},
		skills: getSkills('reactnative', 'ts', 'tailwind','python'),
		type: 'Hackathon app',
		screenshots: [
			{
				label: 'Home',
				src: '/screenshots/nest1.png'
			},
			{
				label: 'Info',
				src: '/screenshots/nest2.png'
			},
			{
				label: 'List',
				src: '/screenshots/nest3.png'
			},
			
		]
		
	},
	{
		slug: 'blackjack',
		color: '#ff3e00',
		description:
			'Developed a Blackjack simulation bot with Python using Q-learning for optimizing strategies through Reinforcement Learning, implementing an epsilon-greedy policy for dynamic action selection based on rewards, and created three AI versions—one with card counting, one without, and a default—testing each by simulating over 1 million game rounds to assess strategy effectiveness.',
		shortDescription:
			'An AI that is capable of learning basic strategy, as well as dynamically betting',
		links: [{ to: 'https://github.com/Fakkiie/Blackjack-AI', label: 'GitHub' }],
		logo: Assets.blackjack,
		name: 'Blackjack AI',
		period: {
			from: new Date('2024-01-5'), 
			to: new Date('2024-04-21') 
		},
		skills: getSkills('python', 'pytorch', 'pandas',),
		type: 'AI bot',
		screenshots: [
			{
				label: 'Basic Strat',
				src: '/screenshots/blackjack1.png'
			},
			{
				label: 'Dynamic Betting',
				src: '/screenshots/blackjack2.png'
			},
			
		]
	},
	{
		slug: 'Quiet Quest',
		color: '#ff3e00',
		description:
			'Designed and developed a responsive job search website with a user-friendly interface using React, implemented a database using PostgreSQL to manage job listings and user data, streamlining the job search process and tailoring it to individual needs, and integrated advanced search and filtering capabilities, allowing users to find jobs based on specific criteria.',
		shortDescription:
			'Simple and effictive tool to apply for jobs',
		links: [{ to: 'https://github.com/Fakkiie/QuietQuest', label: 'GitHub' }],
		logo: Assets.qq,
		name: 'QuietQuest',
		period: {
			from: new Date('2024-03-1'), 
			to: new Date('2024-04-21') 
		},
		skills: getSkills('reactjs','php'),
		type: 'Job website',
		screenshots: [
			{
				label: 'Filtering page',
				src: '/screenshots/quiet1.png'
			},
			{
				label: 'Landing Page',
				src: '/screenshots/quiet2.png'
			},
			{
				label: 'Login/Signup',
				src: '/screenshots/quiet3.png'
			},
			{
				label: 'Logout',
				src: '/screenshots/quiet4.png'
			},
			
		]
	},
	{
		slug: 'devdesk',
		color: '#000',
		description:
			'Currently building a virtual co-working space platform for collaboration, coding, and interviews.\n Leading the front-end development using React and tailwind CSS, while implementing the back end with JavaScript (Node.js) to ensure a scalable and efficient server-side architecture.\n Developing key features such as real-time collaboration, user management, and room creation with admin controls for enhanced user experience.\n Overseeing cloud deployment, continuous integration, and delivery pipelines to ensure smooth and reliable platform updates. \nActively involved in shaping the business model, focusing on user acquisition, future monetization strategies, and aligning technical development with the company’s long-term vision.',
		shortDescription:
			'A collaborative virtual space for developers and educators to work together seamlessly',
		links: [{ to: 'https://github.com/Fakkiie/DevDesk', label: 'GitHub' }],
		logo: Assets.DevDesk,
		name: 'DevDesk',
		period: { from: new Date('2024-09-04'), to: new Date() },
		skills: getSkills('reactjs', 'tailwind', 'nodejs','js','docker','python'),
		type: 'Software',
		screenshots: [
			
		]
	},
	{
		slug: 'nasahack',
		color: '#000',
		description:
			'Our project, Space Apps 2024, is an interactive web app that simulates planetary orbits using React, Three.js, and the Horizon API. We utilized the Horizon API to fetch accurate real-time planetary data, ensuring our simulations are both engaging and scientifically accurate. This project addresses the challenge of making space education more accessible and visually stimulating by allowing users to interact with 3D models and explore planetary details. Its importance lies in enhancing space education through cutting-edge technology and real-time data integration.',
		shortDescription:
			'Our project creates a visual and interactive experience to simulate planetary orbits in space.',
		links: [{ to: 'https://timmy-space-apps-2024.vercel.app/', label: 'Website' }],
		

		logo: Assets.Spongebob,
		name: 'Nasa Hackathon',
		period: {
			from: new Date('2024-10-5'), 
			to: new Date('2024-10-6') 
		},
		skills: getSkills('ts', 'tailwind', 'nodejs','js','threejs','nextjs'),
		type: 'Hackathon',
		screenshots: [
			{
				label: 'Home',
				src: '/screenshots/timmymain.png'
			},
			{
				label: 'Zoomed Out',
				src: '/screenshots/zoomout.png'
			},
			{
				label: 'Panel',
				src: '/screenshots/panel.png'
			},
			{
				label: 'About',
				src:'/screenshots/about.png'
			}
			
		]
	},
];

export const title = 'Projects';
