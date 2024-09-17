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
		skills: getSkills('reactjs', 'ts', 'tailwind','python'),
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
		type: 'AI bot',
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
	}
];

export const title = 'Projects';
